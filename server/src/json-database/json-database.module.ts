import { Module } from '@nestjs/common';
import { JsonDatabaseService } from './json-database.service';
import {FileSystemModule} from "../file-system/file-system.module";

@Module({
    providers: [JsonDatabaseService],
    imports: [
        FileSystemModule
    ],
    exports: [
        JsonDatabaseService
    ]
})
export class JsonDatabaseModule {}
