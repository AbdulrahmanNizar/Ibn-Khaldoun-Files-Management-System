import { HttpException, Injectable } from '@nestjs/common';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';
import { UserFileDto } from './dto/UserFileDto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userFile } from './user-files-management.model';

@Injectable()
export class UserFilesManagementService {
  constructor(
    @InjectModel('UserFile') private readonly userFileModel: Model<userFile>,
  ) {}

  async saveUserFile(
    requestInfo: UserFileDto,
    file: Express.Multer.File,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      const newUserFile = new this.userFileModel({
        userId: requestInfo.userId,
        file: file,
      });

      await newUserFile.save();

      return {
        successMessage: 'تم انشاء الملف بنجاح',
        statusCode: 201,
        data: {
          fileId: newUserFile._id,
        },
      };
    } catch (err) {
      throw new HttpException(err, err.status);
    }
  }
}
