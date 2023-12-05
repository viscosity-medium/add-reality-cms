import {} from "express";
import {Controller, Get, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FileTransferService} from './file-transfer.service';
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {FileMetadata} from "./dto/file-transfer.dto";

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

    @Get("get-store-files")
    async getStoreFiles(){
        return await this.fileTransferService.getStoreFiles()
    }

}
