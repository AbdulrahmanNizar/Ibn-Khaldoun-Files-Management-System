import { HttpException, Injectable } from '@nestjs/common';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';
import { UpdateUserSubscriptionDto } from './dto/UpdateUserSubscriptionDto';
import { CheckUserSubscriptionDto } from './dto/CheckUserSubscriptionDto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/registration/registration.model';
import { date } from 'src/helpers/CurrentYearDate';
import { nextYearDate } from 'src/helpers/NextYearDate';

@Injectable()
export class SubscriptionManagementService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async checkUserSubscription(
    requestInfo: CheckUserSubscriptionDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      const userInDB: any = await this.userModel.find({
        _id: requestInfo.userId,
      });

      if (userInDB.length > 0) {
        if (userInDB[0].subscription == false) {
          return {
            successMessage: 'تم الحصول على اشتراك المستخدم',
            statusCode: 200,
            data: {
              userSubscription: false,
            },
          };
        } else {
          if (
            (userInDB[0].subscriptionExpireDate.year <= date.Year &&
              userInDB[0].subscriptionExpireDate.month <= date.Month &&
              userInDB[0].subscriptionExpireDate.day <= date.Today) ||
            userInDB[0].subscriptionExpireDate == ''
          ) {
            await this.userModel.updateOne(
              { _id: requestInfo.userId },
              { $set: { subscription: false } },
            );

            return {
              successMessage: 'تم الحصول على اشتراك المستخدم',
              statusCode: 200,
              data: {
                userSubscription: false,
              },
            };
          } else {
            return {
              successMessage: 'تم الحصول على اشتراك المستخدم',
              statusCode: 200,
              data: {
                userSubscription: true,
              },
            };
          }
        }
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
          {
            $set: {
              subscription: true,
              subscriptionDate: {
                year: date.Year,
                month: date.Month,
                day: date.Today,
              },
              subscriptionExpireDate: {
                year: nextYearDate.Year,
                month: nextYearDate.Month,
                day: nextYearDate.Today,
              },
            },
          },
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
