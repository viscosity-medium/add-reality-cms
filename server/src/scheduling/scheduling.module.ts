import {Module} from '@nestjs/common';
import {SchedulingService} from './scheduling.service';
import {GoogleModule} from "../google/google.module";
import {FileSystemModule} from "../file-system/file-system.module";
import {JsonDatabaseModule} from "../json-database/json-database.module";

@Module({
  providers: [SchedulingService],
  imports: [
      GoogleModule,
      FileSystemModule,
      JsonDatabaseModule
  ]
})
export class SchedulingModule {}
