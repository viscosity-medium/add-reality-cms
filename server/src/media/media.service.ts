import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import * as ffmpeg from "fluent-ffmpeg";
import * as ffmpegPath from "@ffmpeg-installer/ffmpeg";

@Injectable()
export class MediaService {

    sharp: typeof sharp
    ffmpeg: typeof ffmpeg

    constructor() {
        this.sharp = sharp;
        this.ffmpeg = ffmpeg;
        this.ffmpeg.setFfmpegPath(ffmpegPath.path);
    }

    async resizeMedia(fileInput: string, fileOutput: string, size: number){

        return (
            await this.sharp(fileInput)
            .resize({
                width: size,
                fit: "contain"
            })
            .toFile(fileOutput)
            .then(res => res)
            .catch((error) => {
                console.log(error);
            })
        );

    }

    async getVideoPreview(fileInput: string, fileOutput: string, size: string){
        this.ffmpeg(fileInput)
        .screenshot({
            size,
            timestamps: [1.0],
            filename: fileOutput,
            count: 1
        })
    }

}
