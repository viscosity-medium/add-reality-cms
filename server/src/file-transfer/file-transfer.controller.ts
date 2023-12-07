import {} from "express";
import {Body, Controller, Get, Patch, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FileTransferService} from './file-transfer.service';
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {FileMetadata} from "./dto/file-transfer.dto";
import {PlayerData, StoreFiles} from "../json-database/dto/json-database.dto";

@Controller('files-transfer')
export class FileTransferController {

    constructor(
        private readonly fileTransferService: FileTransferService
    ) {}

    @Post("upload-file-chunk")
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'fileChunk', maxCount: 1 },
        { name: 'metadata', maxCount: 1 },
    ]))
    async uploadFileChunk (
        @UploadedFiles() files: { fileChunk?: Express.Multer.File[], metadata?: Express.Multer.File[] }
    ) {

        const fileMetadata: FileMetadata = JSON.parse(files["metadata"][0].buffer.toString());

        const fileChunk = files["fileChunk"][0].buffer;
        const data = await this.fileTransferService.uploadFileChunk({fileChunk, fileMetadata});

        return data;

    }

    @Get("get-database-data")
    async getStoreFiles(){
        return await this.fileTransferService.getDatabaseData()
    }

    @Patch("update-store-files")
    async updateStoreFiles(@Body() storeFiles: StoreFiles[]) {
        return await this.fileTransferService.updateStoreFiles(storeFiles);
    }

    @Patch("register-new-player")
    async registerNewPlayer(@Body() playerData: PlayerData) {
        return await this.fileTransferService.registerNewPlayer(playerData);
    }

}
