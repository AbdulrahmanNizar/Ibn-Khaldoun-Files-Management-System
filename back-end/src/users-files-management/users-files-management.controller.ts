import {
  Controller,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UsersFilesManagementService } from './users-files-management.service';
import { SuccessResponseObjectDto } from 'src/dto/SuccessResponseObjectDto';
import { CreateUserFileDto } from './dto/CreateUserFileDto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users-files-management')
export class UserFilesManagementController {
  constructor(
    private readonly usersFilesManagementService: UsersFilesManagementService,
  ) {}

  @Post('/createUserFile/:userId')
  @UseInterceptors(FileInterceptor('file'))
  async saveUserFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 300000000 })],
      }),
    )
    file: Express.Multer.File,
    @Param() userFileDto: CreateUserFileDto,
    @Res() res,
  ): Promise<SuccessResponseObjectDto | void> {
    res
      .status(201)
      .json(
        await this.usersFilesManagementService.createUserFile(
          userFileDto,
          file,
        ),
      );
  }
}
