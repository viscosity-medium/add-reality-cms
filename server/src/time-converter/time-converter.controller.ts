import { Controller } from '@nestjs/common';
import { TimeConverterService } from './time-converter.service';

@Controller('time-converter')
export class TimeConverterController {
  constructor(private readonly timeConverterService: TimeConverterService) {}
}
