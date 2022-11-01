import { Module } from '@nestjs/common';
import { ThrowService } from './throw.service';
import { ThrowController } from './throw.controller';

@Module({
  controllers: [ThrowController],
  providers: [ThrowService]
})
export class ThrowModule {}
