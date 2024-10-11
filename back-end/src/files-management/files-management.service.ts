import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { file } from './files-managment.model';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';
import { CreateFileDto } from './dto/CreateFileDto';
import { date } from 'src/helpers/Date';
import { time } from 'src/helpers/Time';
import { GetFilesDto } from './dto/GetFilesDto';

@Injectable()
export class FilesManagementService {
  constructor(@InjectModel('File') private readonly fileModel: Model<file>) {}

  async createFile(
    requestInfo: CreateFileDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      const newFile = new this.fileModel({
        userId: requestInfo.userId,
        fileTitle: requestInfo.fileTitle,
        fileDescription: requestInfo.fileDescription,
        file: requestInfo.file,
        tirm: requestInfo.tirm,
        subject: requestInfo.subject,
        createdAtDate: date,
        createdAtTime: time,
      });

      await newFile.save();

      return {
        successMessage: 'تم انشاء الملف بنجاح',
        statusCode: 201,
      };
    } catch (err) {
      throw new HttpException(err, err.status);
    }
  }

  async getFiles(
    requestInfo: GetFilesDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      const userFilesInDB = await this.fileModel.find({
        userId: requestInfo.userId,
      });

      return {
        successMessage: 'تم الحصول على الملفات بنجاح',
        statusCode: 200,
        data: userFilesInDB,
      };
    } catch (err) {
      throw new HttpException(err, err.status);
    }
  }
}
