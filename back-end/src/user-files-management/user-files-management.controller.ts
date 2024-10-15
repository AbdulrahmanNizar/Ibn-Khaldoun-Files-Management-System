import {
  Controller,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserFilesManagementService } from './user-files-management.service';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';
import { UserFileDto } from './dto/UserFileDto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user-files-management')
export class UserFilesManagementController {
  constructor(
    private readonly userFilesManagementService: UserFilesManagementService,
  ) {}

  @Post('/saveUserFile/:userId')
  @UseInterceptors(FileInterceptor('file'))
  async saveUserFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 300000 })],
      }),
    )
    file: Express.Multer.File,
    @Param() userFileDto: UserFileDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(201)
      .json(
        await this.userFilesManagementService.saveUserFile(userFileDto, file),
      );
  }
}
