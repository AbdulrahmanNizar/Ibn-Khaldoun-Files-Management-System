import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registration } from 'src/registration/registration.model';
import { GetUserInfoDto } from './dto/GetUserInfoDto';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';

@Injectable()
export class UsersManagementService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<Registration>,
  ) {}

  async getUserInfo(
    requestInfo: GetUserInfoDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      const userInDB = await this.userModel.find({ _id: requestInfo.userId });

      userInDB[0].password = 'Hashed';

      if (userInDB.length > 0) {
        return {
          successMessage: "Got the user's information successfully",
          statusCode: 200,
          data: userInDB[0],
        };
      } else {
        throw new HttpException('User not found', 404);
      }
    } catch (err) {
      throw new HttpException(err, err.status);
    }
  }
}
