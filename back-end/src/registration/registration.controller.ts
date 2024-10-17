import { Body, Controller, Patch, Post, Res, Param } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateUserDto as SignUpUserDto } from './dto/SignUpUserDto';
import { LoginUserDto } from './dto/LoginUserDto';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';
import { ValidateUserToken } from './dto/ValidateUserToken';
import { LogoutUserDto } from './dto/LogoutUserDto';
import { CheckUserSubscriptionDto } from './dto/CheckUserSubscriptionDto';
import { UpdateUserSubscriptionDto } from './dto/UpdateUserSubscriptionDto';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post('/signup')
  async signup(
    @Body() signupUserDto: SignUpUserDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res.status(201).json(await this.registrationService.signup(signupUserDto));
  }

  @Post('/login')
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res.status(200).json(await this.registrationService.login(loginUserDto));
  }

  @Patch('/logout/:userId')
  async logout(
    @Param() logoutUserDto: LogoutUserDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res.status(200).json(await this.registrationService.logout(logoutUserDto));
  }

  @Post('/validateTheAuthToken')
  validateTheAuthToken(
    @Body() validateUserToken: ValidateUserToken,
    @Res() res,
  ): SuccessResponseObjectDto | void {
    res
      .status(200)
      .json(this.registrationService.validateTheAuthToken(validateUserToken));
  }

  @Post('/checkUserSubscription')
  async checkUserSubscription(
    @Body() checkUserSubscription: CheckUserSubscriptionDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(200)
      .json(
        await this.registrationService.checkUserSubscription(
          checkUserSubscription,
        ),
      );
  }

  @Patch('/updateUserSubscription')
  async updateUserSubscription(
    @Body() updateUserSubscription: UpdateUserSubscriptionDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(200)
      .json(
        await this.registrationService.updateUserSubscription(
          updateUserSubscription,
        ),
      );
  }
}
