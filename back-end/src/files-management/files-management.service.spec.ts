import { Test, TestingModule } from '@nestjs/testing';
import { FilesManagementService } from './files-management.service';

describe('FilesManagementService', () => {
  let service: FilesManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilesManagementService],
    }).compile();

    service = module.get<FilesManagementService>(FilesManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
