import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { AuctionModule } from './entities/auction/auction.module';
import { ThrowModule } from './entities/throw/throw.module';
import { BatchModule } from './batch/batch.module';
import { CuratorModule } from './curator/curator.module';

@Module({
  imports: [UserModule, WalletModule, AuctionModule, ThrowModule, BatchModule, CuratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
