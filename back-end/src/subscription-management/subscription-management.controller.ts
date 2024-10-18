import { Body, Controller, Patch, Post, Res } from '@nestjs/common';
import { SubscriptionManagementService } from './subscription-management.service';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';
import { UpdateUserSubscriptionDto } from './dto/UpdateUserSubscriptionDto';
import { CheckUserSubscriptionDto } from './dto/CheckUserSubscriptionDto';

@Controller('subscription-management')
export class SubscriptionManagementController {
  constructor(
    private readonly subscriptionManagementService: SubscriptionManagementService,
  ) {}

  @Post('/checkUserSubscription')
  async checkUserSubscription(
    @Body() checkUserSubscription: CheckUserSubscriptionDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(200)
      .json(
        await this.subscriptionManagementService.checkUserSubscription(
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
        await this.subscriptionManagementService.updateUserSubscription(
          updateUserSubscription,
        ),
      );
  }
}
