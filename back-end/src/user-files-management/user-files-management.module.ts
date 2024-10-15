import { Module } from '@nestjs/common';
import { UserFilesManagementService } from './user-files-management.service';
import { UserFilesManagementController } from './user-files-management.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userFileSchema } from './user-files-management.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserFile', schema: userFileSchema }]),
  ],
  controllers: [UserFilesManagementController],
  providers: [UserFilesManagementService],
})
export class UserFilesManagementModule {}
