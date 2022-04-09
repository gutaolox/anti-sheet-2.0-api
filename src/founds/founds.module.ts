import { Module } from '@nestjs/common';
import { FoundsService } from './founds.service';
import { FoundsController } from './founds.controller';

@Module({
  controllers: [FoundsController],
  providers: [FoundsService]
})
export class FoundsModule {}
