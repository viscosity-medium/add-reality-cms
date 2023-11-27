import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import {FileSystemModule} from './file-system/file-system.module';
import * as process from "process";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `./.environment/.${process.env.NODE_ENV}.env`
        }),
        FileSystemModule
    ],
    providers: [AppService],
})
export class AppModule {}
