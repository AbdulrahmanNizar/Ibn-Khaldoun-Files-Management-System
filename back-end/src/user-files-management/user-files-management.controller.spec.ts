import { Test, TestingModule } from '@nestjs/testing';
import { UserFilesManagementController } from './user-files-management.controller';

describe('UserFilesManagementController', () => {
  let controller: UserFilesManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFilesManagementController],
    }).compile();

    controller = module.get<UserFilesManagementController>(UserFilesManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
