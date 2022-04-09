import { Test, TestingModule } from '@nestjs/testing';
import { FoundsService } from './founds.service';

describe('FoundsService', () => {
  let service: FoundsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoundsService],
    }).compile();

    service = module.get<FoundsService>(FoundsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
