import { Test, TestingModule } from '@nestjs/testing';
import { FilesManagementController } from './files-management.controller';

describe('FilesManagementController', () => {
  let controller: FilesManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilesManagementController],
    }).compile();

    controller = module.get<FilesManagementController>(FilesManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
