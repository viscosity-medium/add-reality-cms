import {Injectable} from '@nestjs/common';
import {FileSystemService} from "../file-system/file-system.service";
import {FileMetadata} from "../file-transfer/dto/file-transfer.dto";
import fs from "fs";

@Injectable()
export class JsonDatabaseService {

    constructor(
       private fileSystemService: FileSystemService
    ) {}

    async writeDataToDatabase(fileMetadata: FileMetadata, src: string){

        const { id, name, type, extension } = fileMetadata;
        const dbPath = this.fileSystemService.joinPath([process.cwd(), "bd", "database.json"]);
        const databaseBuffer = this.fileSystemService.readFileSync(dbPath);
        const databaseData = JSON.parse(databaseBuffer.toString());

        databaseData.media.push({ id, name, type, src, extension });

        const stringData = JSON.stringify(databaseData, null, 4)

        this.fileSystemService.writeFileSync(dbPath, stringData)
    }

    async readDataFromDatabase(){
        const dbPath = this.fileSystemService.joinPath([process.cwd(), "bd", "database.json"]);
        return fs.readFileSync(dbPath);
    }

}
