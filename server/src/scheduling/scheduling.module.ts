import {Module} from '@nestjs/common';
import {SchedulingService} from './scheduling.service';
import {GoogleModule} from "../google/google.module";
import {FileSystemModule} from "../file-system/file-system.module";
import {JsonDatabaseModule} from "../json-database/json-database.module";
import {ScheduleTemplatesModule} from "../schedule-templates/schedule-templates.module";

@Module({
    providers: [SchedulingService],
    imports: [
        GoogleModule,
        FileSystemModule,
        JsonDatabaseModule,
        ScheduleTemplatesModule
    ]
})
export class SchedulingModule {
}
