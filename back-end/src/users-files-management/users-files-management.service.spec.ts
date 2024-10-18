import { Test, TestingModule } from '@nestjs/testing';
import { UserFilesManagementService } from './users-files-management.service';

describe('UserFilesManagementService', () => {
  let service: UserFilesManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFilesManagementService],
    }).compile();

    service = module.get<UserFilesManagementService>(
      UserFilesManagementService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
