import { Injectable } from '@nestjs/common';
import { ScheduleTemplate } from "./dto/schedule-templates.dto";
import * as path from "path";
import {FileSystemService} from "../file-system/file-system.service";
import { MediaFileManipulationService } from '../media-file-manipulation/media-file-manipulation.service';
import {timeConverter} from "../utilities/time-converter";
import {join} from "path";
import * as process from "process";

@Injectable()
export class ScheduleTemplatesService {

    constructor(
        private fileSystemService: FileSystemService,
        private mediaFileManipulationService: MediaFileManipulationService
    ) {}

    async createMultipleTemplates({
        rawTemplateData
    }: { rawTemplateData: ScheduleTemplate }) {

        const templateNames = Object.keys(rawTemplateData);
        for await (const templateName of templateNames) {
            await this.createSingleTemplate({
                templateName,
                singleRawTemplateData: rawTemplateData[templateName]
            });
        }
    }

    async createSingleTemplate({
        templateName,
        singleRawTemplateData
    }: {
        templateName: string,
        singleRawTemplateData: string[]
    }) {

        const templateFilePath = path.join(process.cwd(), "database", "templates", `${templateName}.json`);
        const templateFileContent: { files: any[], duration: string} = {
            files: [],
            duration: ""
        }

        for await (const fileName of singleRawTemplateData) {

            const mediaFilePath = path.join(process.cwd(), "static", "media", templateName, fileName);
            const mediaFileMetadata = await this.mediaFileManipulationService.getMediaMetadata({ mediaFilePath });

            // если файл не существует, то пропускаем его (не добавляем )
            if(!mediaFileMetadata) {
                continue;
            }

            const fileDuration = timeConverter.convertSecondsToFullTime(mediaFileMetadata.format.duration);
            const fileUrl = join(process.env.NEST_SERVER_HOST, "static", "media", encodeURI(templateName), encodeURI(fileName));

            // добавляем информацию о файлах в шаблоне
            templateFileContent.files.push({
                name: fileName,
                duration: fileDuration,
                url: fileUrl,
                path: mediaFilePath,
            });

        }

        const timeDurationArray: string[] = templateFileContent.files.map((file) => file.duration);
        templateFileContent.duration = timeConverter.countTotalTimeDuration({
            timeDurationArray
        });

        this.fileSystemService.writeFileSync(
            templateFilePath,
            JSON.stringify(templateFileContent, null, 4)
        );

    }

}
