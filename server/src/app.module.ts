import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {FileSystemModule} from './file-system/file-system.module';
import { FileTransferModule } from './file-transfer/file-transfer.module';
import { JsonDatabaseModule } from './json-database/json-database.module';
import { MediaModule } from './media/media.module';
import * as process from "process";
import {ScheduleModule} from "@nestjs/schedule";
import { SchedulingModule } from './scheduling/scheduling.module';
import { GoogleModule } from './google/google.module';

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
        GoogleModule
    ],
})
export class AppModule {}
