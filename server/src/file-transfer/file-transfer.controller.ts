import {} from "express";
import {Body, Controller, Delete, Get, Patch, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FileTransferService} from './file-transfer.service';
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {FileMetadata} from "./dto/file-transfer.dto";
import {PlayerData, StoreFileProps} from "../json-database/dto/json-database.dto";

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
    async updateStoreFiles(@Body() storeFiles: StoreFileProps[]) {
        return await this.fileTransferService.updateStoreFiles(storeFiles);
    }

    @Patch("update-player-content")
    async updatePlayerContent(@Body() playerData: PlayerData){
        return await this.fileTransferService.updatePlayerContent(playerData);
    }

    @Patch("register-new-player")
    async registerNewPlayer(@Body() playerData: PlayerData) {
        return await this.fileTransferService.registerNewPlayer(playerData);
    }

    @Patch("delete-player")
    async deletePlayer(@Body() playerData: PlayerData) {
        return await this.fileTransferService.deletePlayer(playerData);
    }

}
