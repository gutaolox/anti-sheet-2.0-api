import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoundsModule } from './founds/founds.module';
import { CategoryModule } from './category/category.module';
import { TransactionModule } from './transaction/transaction.module';
import { CryptographyService } from './cryptography/cryptography.service';

@Module({
  imports: [FoundsModule, CategoryModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService, CryptographyService],
})
export class AppModule {}
