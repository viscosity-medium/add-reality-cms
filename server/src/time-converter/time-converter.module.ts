import { Module } from '@nestjs/common';
import { TimeConverterService } from './time-converter.service';
import { TimeConverterController } from './time-converter.controller';

@Module({
  controllers: [TimeConverterController],
  providers: [TimeConverterService],
})
export class TimeConverterModule {}
