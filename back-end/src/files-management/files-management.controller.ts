import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { FilesManagementService } from './files-management.service';
import { CreateFileDto } from './dto/CreateFileDto';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';
import { GetFilesDto } from './dto/GetFilesDto';
import { GetFileInfoDto } from './dto/GetFileInfoDto';
import { DeleteFileDto } from './dto/DeleteFileDto';
import { UpdateFileDto } from './dto/UpdateFileDto';

@Controller('files-management')
export class FilesManagementController {
  constructor(
    private readonly filesManagementService: FilesManagementService,
  ) {}

  @Post('/createFile')
  async createFile(
    @Body() createFileDto: CreateFileDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(201)
      .json(await this.filesManagementService.createFile(createFileDto));
  }

  @Get('/getFileInfo/:fileId')
  async getFileInfo(
    @Param() getFileInfoDto: GetFileInfoDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(200)
      .json(await this.filesManagementService.getFileInfo(getFileInfoDto));
  }

  @Get('/getFiles/:userId/:tirm/:subject')
  async getFiles(
    @Param() getFilesDto: GetFilesDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(200)
      .json(await this.filesManagementService.getFiles(getFilesDto));
  }

  @Delete('/deleteFile')
  async deleteFile(
    @Body() deleteFileDto: DeleteFileDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(200)
      .json(await this.filesManagementService.deleteFile(deleteFileDto));
  }

  @Patch('/updateFile')
  async updateFile(
    @Body() updateFileDto: UpdateFileDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(200)
      .json(await this.filesManagementService.updateFile(updateFileDto));
  }
}
