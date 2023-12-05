import {Injectable} from '@nestjs/common';
import {FileSystemService} from "../file-system/file-system.service";
import {FileMetadata} from "../file-transfer/dto/file-transfer.dto";
import {join} from "path";
import * as process from "process";
import {MediaService} from "../media/media.service";

@Injectable()
export class JsonDatabaseService {

    constructor(
       private fileSystemService: FileSystemService,
       private mediaService: MediaService
    ) {}

    async writeDataToDatabase(fileMetadata: FileMetadata, fileName: string){

        const { id, name, type, extension } = fileMetadata;
        const src = join(process.env.NEST_SERVER_HOST, "static", "media", fileName);
        const dbPath = this.fileSystemService.joinPath([process.cwd(), "bd", "database.json"]);
        const previewFileName = `${fileMetadata.id}__preview.jpg`;
        const previewSrc = join(process.env.NEST_SERVER_HOST, "static", "media", previewFileName);
        const databaseBuffer = this.fileSystemService.readFileSync(dbPath);
        const databaseData = JSON.parse(databaseBuffer.toString());
        const fileInput = join(process.cwd(), "static", "media", fileName);
        const fileOutput = join(process.cwd(), "static", "media", previewFileName);

        if(type.match(/image/)){
            await this.mediaService.resizeMedia(fileInput, fileOutput, 600);
        } else if (type.match(/video/)) {
            await this.mediaService.getVideoPreview(fileInput, fileOutput, "600x600")
        }

        databaseData.media.push({ id, name, type, src, extension, previewSrc })

        const sortedDatabase = databaseData.media.sort((a, b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        });

        const stringData = JSON.stringify({media: sortedDatabase}, null, 4);

        this.fileSystemService.writeFileSync(dbPath, stringData);
        console.log(sortedDatabase)
        return sortedDatabase;
    }

    async readDataFromDatabase(){
        const dbPath = this.fileSystemService.joinPath([process.cwd(), "bd", "database.json"]);
        const fileData = JSON.parse(this.fileSystemService.readFileSync(dbPath).toString());
        return fileData;
    }

}
