import { Module } from '@nestjs/common';
import { UsersFilesManagementService } from './users-files-management.service';
import { UserFilesManagementController } from './users-files-management.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userFileSchema } from './users-files-management.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserFile', schema: userFileSchema }]),
  ],
  controllers: [UserFilesManagementController],
  providers: [UsersFilesManagementService],
})
export class UsersFilesManagementModule {}
