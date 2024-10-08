import { Test, TestingModule } from '@nestjs/testing';
import { UsersManagementController } from './users-management.controller';

describe('UsersManagementController', () => {
  let controller: UsersManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersManagementController],
    }).compile();

    controller = module.get<UsersManagementController>(UsersManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
