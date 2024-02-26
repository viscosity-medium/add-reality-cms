import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import {FileSystemModule} from "../file-system/file-system.module";

@Module({
  imports: [FileSystemModule],
  providers: [TemplateService],
  exports: [TemplateService]
})
export class TemplateModule {}
