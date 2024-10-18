import { Module } from '@nestjs/common';
import { SubscriptionManagementService } from './subscription-management.service';
import { SubscriptionManagementController } from './subscription-management.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/registration/registration.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }])],
  controllers: [SubscriptionManagementController],
  providers: [SubscriptionManagementService],
})
export class SubscriptionManagementModule {}
