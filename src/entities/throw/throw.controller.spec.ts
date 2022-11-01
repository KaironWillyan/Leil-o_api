import { Test, TestingModule } from '@nestjs/testing';
import { ThrowController } from './throw.controller';
import { ThrowService } from './throw.service';

describe('ThrowController', () => {
  let controller: ThrowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThrowController],
      providers: [ThrowService],
    }).compile();

    controller = module.get<ThrowController>(ThrowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
