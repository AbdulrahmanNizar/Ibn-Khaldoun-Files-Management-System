import { HttpException, Injectable } from '@nestjs/common';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';
import { UpdateUserSubscriptionDto } from './dto/UpdateUserSubscriptionDto';
import { CheckUserSubscriptionDto } from './dto/CheckUserSubscriptionDto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/registration/registration.model';

@Injectable()
export class SubscriptionManagementService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async checkUserSubscription(
    requestInfo: CheckUserSubscriptionDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      const userInDB = await this.userModel.find({ _id: requestInfo.userId });

      if (userInDB.length > 0) {
        return {
          successMessage: 'تم الحصول على اشتراك المستخدم',
          statusCode: 200,
          data: {
            userSubscription: userInDB[0].subscription,
          },
        };
      } else {
        throw new HttpException('لم يتم ايجاد المستخدم', 404);
      }
    } catch (err) {
      throw new HttpException(err, err.status);
    }
  }

  async updateUserSubscription(
    requestInfo: UpdateUserSubscriptionDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      const userInDB = await this.userModel.find({
        phoneNumber: requestInfo.userPhoneNumber,
      });

      if (userInDB.length > 0) {
        await this.userModel.updateOne(
          { phoneNumber: requestInfo.userPhoneNumber },
          { $set: { subscription: requestInfo.newUserSubscription } },
        );

        return {
          successMessage: 'تم التعديل على اشتراك المستخدم بنجاح',
          statusCode: 200,
        };
      } else {
        throw new HttpException('لم يتم ايجاد المستخدم', 404);
      }
    } catch (err) {
      throw new HttpException(err, err.status);
    }
  }
}
