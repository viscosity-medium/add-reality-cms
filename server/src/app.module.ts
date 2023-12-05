import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import {FileSystemModule} from './file-system/file-system.module';
import { FileTransferModule } from './file-transfer/file-transfer.module';
import { JsonDatabaseModule } from './json-database/json-database.module';
import { MediaModule } from './media/media.module';
import * as process from "process";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `./.environment/.${process.env.NODE_ENV}.env`
        }),
        FileSystemModule,
        FileTransferModule,
        JsonDatabaseModule,
        MediaModule
    ],
    providers: [AppService],
})
export class AppModule {}
