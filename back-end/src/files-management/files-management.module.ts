import { Module } from '@nestjs/common';
import { FilesManagementService } from './files-management.service';
import { FilesManagementController } from './files-management.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { fileSchema } from './files-managment.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'File', schema: fileSchema }])],
  controllers: [FilesManagementController],
  providers: [FilesManagementService],
})
export class FilesManagementModule {}
