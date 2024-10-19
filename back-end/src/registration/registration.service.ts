import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './registration.model';
import { SuccessResponseObjectDto } from '../dto/SuccessResponseObjectDto';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto as SignUpUserDto } from './dto/SignUpUserDto';
import { LoginUserDto } from './dto/LoginUserDto';
import { ValidateUserToken } from './dto/ValidateUserToken';
import { LogoutUserDto } from './dto/LogoutUserDto';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(
    requestInfo: SignUpUserDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      // generate a salt for the hashed password, and hash the new user's password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(requestInfo.password, salt);

      // adding the new user to the database
      const newUser = new this.userModel({
        username: requestInfo.username,
        email: requestInfo.email,
        password: hashedPassword,
        nationalId: requestInfo.userNationalId,
        phoneNumber: requestInfo.userPhoneNumber,
        grade: requestInfo.userGrade,
        class: requestInfo.userClass,
        logged: true,
        subscription: false,
        subscriptionDate: '',
        subscriptionExpireDate: '',
      });
      await newUser.save();

      // generate a jwt token for the new user
      const jwtToken = this.jwtService.sign({ id: newUser._id });

      // done
      return {
        successMessage: 'تم انشاء مستخدم جديد بنجاح',
        statusCode: 201,
        data: {
          token: jwtToken,
          userId: newUser._id,
          username: newUser.username,
        },
      };
    } catch (err) {
      throw new HttpException(err, err.status);
    }
  }

  async login(
    requestInfo: LoginUserDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      // checking if the user exist or no
      const userExists = await this.userModel.find({
        nationalId: requestInfo.userNationalId,
      });

      if (userExists.length > 0) {
        // comparing the passwords
        const comparedPassword: boolean = await bcrypt.compare(
          requestInfo.password,
          userExists[0].password,
        );
        if (comparedPassword == true) {
          // generating new jwt token for the user
          const jwtToken = this.jwtService.sign({ id: userExists[0]._id });

          // updating the database
          await this.userModel.updateOne(
            { _id: userExists[0]._id },
            { $set: { logged: true } },
          );

          // done
          return {
            successMessage: 'تم تسجيل دخول بنجاح',
            statusCode: 200,
            data: {
              token: jwtToken,
              userId: userExists[0]._id,
              username: userExists[0].username,
            },
          };
        } else {
          throw new HttpException('رقم الهوية او كلمة السر خطأ', 400);
        }
      } else {
        throw new HttpException('رقم الهوية او كلمة السر خطأ', 400);
      }
    } catch (err) {
      throw new HttpException(err, err.status);
    }
  }

  async logout(
    requestInfo: LogoutUserDto,
  ): Promise<SuccessResponseObjectDto | void> {
    try {
      // updating the user logging details in the database
      await this.userModel.updateOne(
        { _id: requestInfo.userId },
        { $set: { logged: false } },
      );

      // done
      return {
        successMessage: 'تم تسجيل خروج بنجاح',
        statusCode: 200,
      };
    } catch (err) {
      // logging an error if there was
      throw new HttpException(err, err.status);
    }
  }

  validateTheAuthToken(
    requestInfo: ValidateUserToken,
  ): SuccessResponseObjectDto | void {
    // verfiying the user token
    try {
      this.jwtService.verify(requestInfo.token, {
        secret: 'aboudasecretkey2010510',
      });

      // done
      return {
        successMessage: 'Token verifyed',
        statusCode: 200,
      };
    } catch (err) {
      // return an error if the token was not valid
      throw new HttpException(err, err.status);
    }
  }
}
