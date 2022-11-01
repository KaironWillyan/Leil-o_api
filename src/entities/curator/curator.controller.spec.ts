import { Test, TestingModule } from '@nestjs/testing';
import { CuratorController } from './curator.controller';
import { CuratorService } from './curator.service';

describe('CuratorController', () => {
  let controller: CuratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuratorController],
      providers: [CuratorService],
    }).compile();

    controller = module.get<CuratorController>(CuratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
