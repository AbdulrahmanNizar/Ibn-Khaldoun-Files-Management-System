import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionManagementService } from './subscription-management.service';

describe('SubscriptionManagementService', () => {
  let service: SubscriptionManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionManagementService],
    }).compile();

    service = module.get<SubscriptionManagementService>(SubscriptionManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
