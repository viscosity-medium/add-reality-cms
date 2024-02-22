import {Module} from '@nestjs/common';
import {ScheduleTemplatesService} from './schedule-templates.service';
import {FileSystemModule} from "../file-system/file-system.module";
import {MediaFileManipulationModule} from "../media-file-manipulation/media-file-manipulation.module";

@Module({
    imports: [
        FileSystemModule,
        MediaFileManipulationModule
    ],
    providers: [ScheduleTemplatesService],
    exports: [ScheduleTemplatesService]
})

export class ScheduleTemplatesModule {}