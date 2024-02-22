import {Module} from '@nestjs/common';
import {FileTransferService} from './file-transfer.service';
import {FileTransferController} from './file-transfer.controller';
import {FileSystemModule} from "../file-system/file-system.module";
import {JsonDatabaseModule} from "../json-database/json-database.module";

@Module({
    controllers: [FileTransferController],
    providers: [FileTransferService],
    imports: [
        FileSystemModule,
        JsonDatabaseModule
    ]
})
export class FileTransferModule {
}
