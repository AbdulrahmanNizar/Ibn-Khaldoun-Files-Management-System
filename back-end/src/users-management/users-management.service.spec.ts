import { Test, TestingModule } from '@nestjs/testing';
import { UsersManagementService } from './users-management.service';

describe('UsersManagementService', () => {
  let service: UsersManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersManagementService],
    }).compile();

    service = module.get<UsersManagementService>(UsersManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
