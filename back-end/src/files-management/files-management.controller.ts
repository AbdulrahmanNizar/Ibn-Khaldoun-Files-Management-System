import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { FilesManagementService } from './files-management.service';
import { CreateFileDto } from './dto/CreateFileDto';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';
import { GetFilesDto } from './dto/GetFilesDto';

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

  @Get('/getFiles/:userId')
  async getFiles(
    @Param() getFilesDto: GetFilesDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(200)
      .json(await this.filesManagementService.getFiles(getFilesDto));
  }
}
