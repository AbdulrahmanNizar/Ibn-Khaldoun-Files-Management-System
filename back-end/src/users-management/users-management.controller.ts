import { Controller, Get, Res, Param } from '@nestjs/common';
import { UsersManagementService } from './users-management.service';
import { GetUserInfoDto } from './dto/GetUserInfoDto';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';

@Controller('users-management')
export class UsersManagementController {
  constructor(
    private readonly usersManagementService: UsersManagementService,
  ) {}

  @Get('/getUserInfo/:userId')
  async getUserInfo(
    @Param() getUserInfoDto: GetUserInfoDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(200)
      .json(await this.usersManagementService.getUserInfo(getUserInfoDto));
  }
}
