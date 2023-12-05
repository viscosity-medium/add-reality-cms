import {BadRequestException, Injectable} from '@nestjs/common';
import {FileSystemService} from "../file-system/file-system.service";
import {JsonDatabaseService} from "../json-database/json-database.service";
import {FileMetadata} from "./dto/file-transfer.dto";
import {join} from "path";
import * as process from "process";

@Injectable()
export class FileTransferService {

    constructor(
        private fileSystemService: FileSystemService,
        private jsonDatabaseService: JsonDatabaseService,
    ) {}

    async uploadFileChunk({ fileChunk, fileMetadata }: { fileChunk: Buffer, fileMetadata: FileMetadata }){
        try {

            const fileName = `${fileMetadata.id}.${fileMetadata.extension}`;
            const filePath = join(process.cwd(), "static", "media", fileName);

            this.fileSystemService.appendFileSync(filePath, fileChunk);

            if(fileMetadata.currentChunkIndex === fileMetadata.totalChunksAmount){
                return await this.jsonDatabaseService.writeDataToDatabase(fileMetadata, fileName)
            }
            return {
                message: "Files are still being uploaded"
            }

        } catch (error) {
            console.log(error);
            throw new BadRequestException({
                error: "Произошла ошибка при загрузке файла по частям"
            })
        }

    }

    async getStoreFiles(){
        return await this.jsonDatabaseService.readDataFromDatabase();
    }

}
