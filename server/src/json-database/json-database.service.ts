import {Injectable} from '@nestjs/common';
import {FileSystemService} from "../file-system/file-system.service";
import {FileMetadata} from "../file-transfer/dto/file-transfer.dto";
import {join} from "path";
import * as process from "process";
import {MediaService} from "../media/media.service";
import {JsonDatabase, PlayerData, StoreFileProps} from "./dto/json-database.dto";
import {generateXmlContentFillingUtility, xmlGeneratorUtility} from "../utilities/xml-generator.utility";

@Injectable()
export class JsonDatabaseService {

    constructor(
       private fileSystemService: FileSystemService,
       private mediaService: MediaService
    ) {}

    async updateDatabase(storeFiles: StoreFileProps[]){

        const dbPath = this.fileSystemService.joinPath([process.cwd(), "database", "database.json"]);

        const databaseBuffer = this.fileSystemService.readFileSync(dbPath);
        const databaseData = JSON.parse(databaseBuffer.toString());
        const newData = { ...databaseData, media: storeFiles };
        const stringData = JSON.stringify(newData, null, 4);

        this.fileSystemService.writeFileSync(dbPath, stringData);
        return storeFiles;

    }

    async updatePlayerContent(playerData: PlayerData) {

        const dbPath = this.fileSystemService.joinPath([process.cwd(), "database", "database.json"]);
        const databaseBuffer = this.fileSystemService.readFileSync(dbPath);
        const databaseData: JsonDatabase = JSON.parse(databaseBuffer.toString());

        databaseData.players = databaseData.players.reduce((accumulator: PlayerData[], currentPlayer) => {
            if(currentPlayer.id === playerData.id || currentPlayer.name && playerData.name){
                return [
                    ...accumulator,
                    {
                        ...currentPlayer,
                        content: playerData.content
                    }
                ]
            } else {
                return [...accumulator, currentPlayer]
            }
        }, []);
        const stringData = JSON.stringify(databaseData, null, 4);
        this.fileSystemService.writeFileSync(dbPath, stringData);

        const xmlContentFilling = generateXmlContentFillingUtility(playerData);

        const xmlData = xmlGeneratorUtility(xmlContentFilling);
        const xmlPath = this.fileSystemService.joinPath([process.cwd(), "static", "xml", playerData.xml]);

        this.fileSystemService.writeFileSync(xmlPath, xmlData);

    }

    async findFilesInStoreByNames(fileNames: string[]) {

        const dbPath = this.fileSystemService.joinPath([process.cwd(), "database", "database.json"]);
        const databaseBuffer = this.fileSystemService.readFileSync(dbPath);
        const databaseData: JsonDatabase = JSON.parse(databaseBuffer.toString());

        return fileNames.reduce((accumulator, fileName)=> {
            return [
                ...accumulator,
                ...databaseData.media.reduce((accum, current) => {
                    if(fileName === current.name){
                        return [...accum, current]
                    } else {
                        return accum
                    }
                }, [])
            ]
        }, [])

    }

    async writeUploadedFileToDataToDatabase(fileMetadata: FileMetadata, fileName: string) {

        const { id, name, type, extension } = fileMetadata;
        const src = join(process.env.NEST_SERVER_HOST, "static", "media", fileName);
        const dbPath = this.fileSystemService.joinPath([process.cwd(), "database", "database.json"]);
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

        databaseData.media.push({ id, name, type, src, extension, previewSrc });

        const sortedMediaData = databaseData.media.sort((a, b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        });

        const newData = { ...databaseData, media: sortedMediaData };
        const stringData = JSON.stringify(newData, null, 4);

        this.fileSystemService.writeFileSync(dbPath, stringData);

        return sortedMediaData;
    }

    async readDataFromDatabase(){
        const dbPath = this.fileSystemService.joinPath([process.cwd(), "database", "database.json"]);
        const fileData = JSON.parse(this.fileSystemService.readFileSync(dbPath).toString());
        return fileData;
    }

    async registerNewPlayer(playerData: PlayerData){

        const dbPath = this.fileSystemService.joinPath([process.cwd(), "database", "database.json"]);
        const xmlTemplatePath = this.fileSystemService.joinPath([process.cwd(), "static", "xml", "xml-template.xml"]);
        const xmlTemplate = this.fileSystemService.readFileSync(xmlTemplatePath).toString();
        const databaseData: JsonDatabase = JSON.parse(this.fileSystemService.readFileSync(dbPath).toString());
        const xmlId = playerData.xml;
        const xmlPath = this.fileSystemService.joinPath([process.cwd(), "static", "xml", xmlId]);

        databaseData.players.push(playerData);

        const stringData = JSON.stringify(databaseData, null, 4);
        this.fileSystemService.writeFileSync(xmlPath, xmlTemplate);
        this.fileSystemService.writeFileSync(dbPath, stringData);

        return databaseData;

    }

    async deletePlayer(playerData: PlayerData){

        const dbPath = this.fileSystemService.joinPath([process.cwd(), "database", "database.json"]);
        const xmlPath = this.fileSystemService.joinPath([process.cwd(), "static",  "xml", playerData.xml]);
        const databaseData: JsonDatabase = JSON.parse(this.fileSystemService.readFileSync(dbPath).toString());

        databaseData.players = databaseData.players.filter(player => player.id !== playerData.id);
        const stringData = JSON.stringify(databaseData, null, 4);
        this.fileSystemService.writeFileSync(dbPath, stringData);
        this.fileSystemService.deleteFileSync(xmlPath);

        return databaseData.players;

    }

}
