import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './registration/registration.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersManagementModule } from './users-management/users-management.module';
import { FilesManagementModule } from './files-management/files-management.module';
import { UsersFilesManagementModule } from './users-files-management/users-files-management.module';
import { SubscriptionManagementModule } from './subscription-management/subscription-management.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/ibn-khaldoun-files-management-system',
    ),
    RegistrationModule,
    UsersManagementModule,
    FilesManagementModule,
    UsersFilesManagementModule,
    SubscriptionManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
