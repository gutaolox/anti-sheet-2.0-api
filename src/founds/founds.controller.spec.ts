import { Test, TestingModule } from '@nestjs/testing';
import { FoundsController } from './founds.controller';
import { FoundsService } from './founds.service';

describe('FoundsController', () => {
  let controller: FoundsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoundsController],
      providers: [FoundsService],
    }).compile();

    controller = module.get<FoundsController>(FoundsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
