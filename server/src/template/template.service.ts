import { Injectable } from '@nestjs/common';
import {FileDuration, LocalFile, TemplateContent} from "../types/files";
import {FileSystemService} from "../file-system/file-system.service";
import * as path from "path";
import * as process from "process";
import {timeConverter} from "../utilities/time-converter";
import {GymTimeSlotDataAsObject} from "../google/types/google";

@Injectable()
export class TemplateService {

    constructor(
        private fileSystemService: FileSystemService
    ) {}

    getCurrentPlayingTemplate({
        gymSchedule,
        templateStartTime
    }: {
        gymSchedule: GymTimeSlotDataAsObject[],
        templateStartTime: number,
    }) {

        const currentTime = new Date().getTime();

        let currentSlotData: GymTimeSlotDataAsObject = undefined;
        let nextSlotData: GymTimeSlotDataAsObject = undefined;

        const foundTemplates = gymSchedule.reduce((accumulator, slotData, index) => {

            const currentTemplateStartTime = new Date(slotData.timeStamp).getTime();
            const previousTemplateStartTime = index === 0 ? 0 : new Date(gymSchedule[index - 1].timeStamp).getTime();

            const currentDelta = currentTime - currentTemplateStartTime;
            const previousDelta = currentTime - previousTemplateStartTime;

            if(currentDelta <= 0 && previousDelta >= 0) {

                templateStartTime = gymSchedule[index - 1].timeStamp.getTime();
                currentSlotData = gymSchedule[index - 1];
                nextSlotData = gymSchedule[index];

                return {
                    currentPlayingTemplate: gymSchedule[index - 1].template,
                    nextPlayingTemplate: gymSchedule[index].template
                };

            } else if(currentDelta < 0 && previousDelta < 0) {

                return accumulator;

            } else if(currentDelta > 0 && previousDelta > 0) {

                return accumulator;

            } else {
                console.log("Что-то пошло не так...")
            }

        }, {
            currentPlayingTemplate: "_default_template",
            nextPlayingTemplate: "_default_template"
        });

        const { currentPlayingTemplate, nextPlayingTemplate } = foundTemplates;
        const currentTemplatePath = path.join(process.cwd(), "database", "templates", `${currentPlayingTemplate}.json`);
        const nextTemplatePath = path.join(process.cwd(), "database", "templates", `${nextPlayingTemplate}.json`);

        return {
            nextSlotData,
            currentSlotData,
            nextTemplatePath,
            currentTemplatePath,
        }

    }

    getTemplateDuration({
        currentSlotData,
        currentTemplatePath
    }: {
        currentSlotData: GymTimeSlotDataAsObject
        currentTemplatePath: string,
    }) {

        const currentTime = new Date().getTime();

        // __дефолтный шаблон__
        const defaultTemplateFilePath = path.join(process.cwd(), "database", "templates", `_default_template.json`);
        const defaultTemplateContent = JSON.parse(this.fileSystemService.readFileSync(defaultTemplateFilePath).toString());

        // __текущий шаблон__
        const currentTemplatePlayingContent: TemplateContent = JSON.parse(this.fileSystemService.readFileSync(currentTemplatePath).toString());

        let chosenFileIndex: number = 0;
        let currentPlayingFile: LocalFile = undefined;

        const templateDuration = currentTemplatePlayingContent.files.reduce((accumulator, currentFile, index) => {

            const fileDurationInSeconds: FileDuration = currentFile.duration;
            const fileStartTime = new Date(currentSlotData.timeStamp).getTime();
            const newContentDurationInMillis = timeConverter.convertFullTimeToMilliseconds({ time: fileDurationInSeconds, accumulator });

            const currentFileStartTime = fileStartTime + accumulator;
            const currentFileEndTime = fileStartTime + newContentDurationInMillis;
            const previousDelta = currentFileStartTime - currentTime;
            const currentDelta = currentFileEndTime - currentTime;

            // еслли абсолютное время окончания рассматриваемого файла больше текущего времени и
            // абсолютное время окончания предыдущего файла меньше текущего времени,
            // то выводим информацию о предыдущем контенте

            if( currentDelta >= 0 && previousDelta <= 0) { // сейчас воспроизводится контент с индексом (index - 1)
                chosenFileIndex = index;
                currentPlayingFile = currentTemplatePlayingContent.files[chosenFileIndex];

                return newContentDurationInMillis;

            } else if(currentDelta >= 0 && previousDelta >= 0) { // контент ещё не начался

                return accumulator;

            } else if(currentDelta <= 0 && previousDelta <= 0) { // контент уже закончился

                chosenFileIndex = 0;
                currentPlayingFile = defaultTemplateContent.files[chosenFileIndex];
                return newContentDurationInMillis;

            }

        }, 0);


        return {
            templateDuration,
            currentPlayingFile
        };

    }

}
