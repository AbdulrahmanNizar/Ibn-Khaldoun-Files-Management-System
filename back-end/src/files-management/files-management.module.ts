import { Module } from '@nestjs/common';
import { FilesManagementService } from './files-management.service';
import { FilesManagementController } from './files-management.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { fileSchema } from './files-managment.model';
import { userFileSchema } from 'src/users-files-management/users-files-management.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'File', schema: fileSchema },
      { name: 'UserFile', schema: userFileSchema },
    ]),
  ],
  controllers: [FilesManagementController],
  providers: [FilesManagementService],
})
export class FilesManagementModule {}
