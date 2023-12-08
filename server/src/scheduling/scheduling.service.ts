import { Injectable } from '@nestjs/common';
import {Interval} from "@nestjs/schedule";
import {GoogleService} from "../google/google.service";
import {JsonDatabaseService} from "../json-database/json-database.service";
import {FileSystemService} from "../file-system/file-system.service";

@Injectable()
export class SchedulingService {

    constructor(
        private googleService: GoogleService,
        private fileSystemService: FileSystemService,
        private jsonDatabaseService: JsonDatabaseService
    ) {}

    @Interval(5 * 1000)
    async checkGoogleSpreadSheet(){
        try {

            const googleData = await this.googleService.getSheetData();
            const selectedFiles = await this.jsonDatabaseService.findFilesInStoreByNames(googleData)
            await this.jsonDatabaseService.updatePlayerContent({
                id: "2d020351-df45-47e9-9907-6c7f73f2391e",
                name: "Player_1",
                xml: "00001.xml",
                content: selectedFiles
            })
            console.log(selectedFiles)
        } catch (error){
            console.log(error);
        }

    }


}
