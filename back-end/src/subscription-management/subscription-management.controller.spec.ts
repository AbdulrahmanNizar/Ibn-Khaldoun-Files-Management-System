import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionManagementController } from './subscription-management.controller';

describe('SubscriptionManagementController', () => {
  let controller: SubscriptionManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionManagementController],
    }).compile();

    controller = module.get<SubscriptionManagementController>(SubscriptionManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
