import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { file } from './files-managment.model';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';
import { CreateFileDto } from './dto/CreateFileDto';
import { date } from 'src/helpers/Date';
import { time } from 'src/helpers/Time';
import { GetFilesDto } from './dto/GetFilesDto';
import { GetFileInfoDto } from './dto/GetFileInfoDto';
import { DeleteFileDto } from './dto/DeleteFileDto';
import { UpdateFileDto } from './dto/UpdateFileDto';
import { userFile } from 'src/user-files-management/user-files-management.model';

@Injectable()
export class FilesManagementService {
  constructor(
    @InjectModel('File') private readonly fileModel: Model<file>,
    @InjectModel('UserFile') private readonly userFileModel: Model<userFile>,
  ) {}

  async createFile(
    requestInfo: CreateFileDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      const userFileInDB: any = await this.userFileModel.find({
        _id: requestInfo.userFileId,
      });
      let fileBase64: any = '';

      if (userFileInDB.length > 0) {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
          fileBase64 = reader.result;
        });

        reader.readAsDataURL(userFileInDB[0].file);

        const newFile = new this.fileModel({
          userId: requestInfo.userId,
          fileTitle: requestInfo.fileTitle,
          fileDescription: requestInfo.fileDescription,
          file: fileBase64,
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
      } else {
        throw new HttpException('لم يتم العثور على الملف', 404);
      }
    } catch (err) {
      throw new HttpException(err, err.status);
    }
  }

  async getFileInfo(
    requestInfo: GetFileInfoDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      const fileInDB = await this.fileModel.find({ _id: requestInfo.fileId });

      return {
        successMessage: 'تم الحصول على معلومات الملف بنجاح',
        statusCode: 200,
        data: fileInDB[0],
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
        tirm: requestInfo.tirm,
        subject: requestInfo.subject,
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

  async deleteFile(
    requestInfo: DeleteFileDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      await this.fileModel.deleteOne({ _id: requestInfo.fileId });

      return {
        successMessage: 'تم حذف الملف بنجاح',
        statusCode: 200,
      };
    } catch (err) {
      throw new HttpException(err, err.status);
    }
  }

  async updateFile(
    requestInfo: UpdateFileDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      if (requestInfo.file != '') {
        await this.fileModel.updateOne(
          { _id: requestInfo.fileId },
          {
            $set: {
              fileTitle: requestInfo.fileTitle,
              fileDescription: requestInfo.fileDescription,
              file: requestInfo.file,
            },
          },
        );

        return {
          successMessage: 'تم التعديل على الملف بنجاح',
          statusCode: 200,
        };
      } else {
        await this.fileModel.updateOne(
          { _id: requestInfo.fileId },
          {
            $set: {
              fileTitle: requestInfo.fileTitle,
              fileDescription: requestInfo.fileDescription,
            },
          },
        );

        return {
          successMessage: 'تم التعديل على الملف بنجاح',
          statusCode: 200,
        };
      }
    } catch (err) {
      throw new HttpException(err, err.status);
    }
  }
}
