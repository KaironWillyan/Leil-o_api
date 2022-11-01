import { Test, TestingModule } from '@nestjs/testing';
import { CuratorService } from './curator.service';

describe('CuratorService', () => {
  let service: CuratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuratorService],
    }).compile();

    service = module.get<CuratorService>(CuratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
