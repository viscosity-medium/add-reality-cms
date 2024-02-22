import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { FileSystemModule } from './file-system/file-system.module';
import { FileTransferModule } from './file-transfer/file-transfer.module';
import { JsonDatabaseModule } from './json-database/json-database.module';
import { MediaModule } from './media/media.module';
import { ScheduleModule } from "@nestjs/schedule";
import { SchedulingModule } from './scheduling/scheduling.module';
import { GoogleModule } from './google/google.module';
import { ScheduleTemplatesModule } from './schedule-templates/schedule-templates.module';
import { MediaFileManipulationModule } from './media-file-manipulation/media-file-manipulation.module';
import * as process from "process";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `./.environment/.${process.env.NODE_ENV}.env`
        }),
        ScheduleModule.forRoot(),
        FileSystemModule,
        FileTransferModule,
        JsonDatabaseModule,
        MediaModule,
        SchedulingModule,
        GoogleModule,
        ScheduleTemplatesModule,
        MediaFileManipulationModule
    ],
})
export class AppModule {}
