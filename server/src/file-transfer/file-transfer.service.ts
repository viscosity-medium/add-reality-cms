import {BadRequestException, Injectable} from '@nestjs/common';
import {FileSystemService} from "../file-system/file-system.service";
import {JsonDatabaseService} from "../json-database/json-database.service";
import {FileMetadata} from "./dto/file-transfer.dto";
import {join} from "path";
import * as process from "process";
import {PlayerData, StoreFileProps} from "../json-database/dto/json-database.dto";

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
                return await this.jsonDatabaseService.writeUploadedFileToDataToDatabase(fileMetadata, fileName)
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

    async getDatabaseData(){
        return await this.jsonDatabaseService.readDataFromDatabase();
    }

    async updateStoreFiles(storeFiles: StoreFileProps[]){
        return await this.jsonDatabaseService.updateDatabase(storeFiles)
    }

    async updatePlayerContent(playerData: PlayerData){
        return await this.jsonDatabaseService.updatePlayerContent(playerData);
    }

    async registerNewPlayer(playerData: PlayerData){
        return await this.jsonDatabaseService.registerNewPlayer(playerData);
    }

    async deletePlayer(playerData: PlayerData){
        return await this.jsonDatabaseService.deletePlayer(playerData);
    }


}
