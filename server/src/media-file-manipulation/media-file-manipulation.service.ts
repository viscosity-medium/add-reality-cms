import {Injectable} from '@nestjs/common';
import {FfprobeData} from "fluent-ffmpeg";
import * as ffmpeg from 'fluent-ffmpeg';

@Injectable()
export class MediaFileManipulationService {

    async getMediaMetadata({ mediaFilePath }: { mediaFilePath: string }): Promise<FfprobeData | undefined> {

        try {

            // const urlEncodedMediaFilePath = encodeURI(mediaFilePath);
            const mediaMetadata: FfprobeData = await new Promise((resolve, reject) => {
                ffmpeg.ffprobe(mediaFilePath, (err, metadata) => {
                    if (err) reject(err);
                    resolve(metadata);
                });
            });

            return mediaMetadata;

        } catch (error) {
            console.log(`Файл не найден: \n\r${mediaFilePath}`);
            return undefined
        }

    }

}