import { Test, TestingModule } from '@nestjs/testing';
import { TimeConverterService } from './time-converter.service';

describe('TimeConverterService', () => {
  let service: TimeConverterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeConverterService],
    }).compile();

    service = module.get<TimeConverterService>(TimeConverterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
