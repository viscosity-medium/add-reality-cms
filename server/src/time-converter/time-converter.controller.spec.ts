import { Test, TestingModule } from '@nestjs/testing';
import { TimeConverterController } from './time-converter.controller';
import { TimeConverterService } from './time-converter.service';

describe('TimeConverterController', () => {
  let controller: TimeConverterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeConverterController],
      providers: [TimeConverterService],
    }).compile();

    controller = module.get<TimeConverterController>(TimeConverterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
