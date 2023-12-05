import { Module } from '@nestjs/common';
import { JsonDatabaseService } from './json-database.service';
import {FileSystemModule} from "../file-system/file-system.module";
import {MediaModule} from "../media/media.module";

@Module({
    providers: [JsonDatabaseService],
    imports: [
        FileSystemModule,
        MediaModule
    ],
    exports: [
        JsonDatabaseService
    ]
})
export class JsonDatabaseModule {}
