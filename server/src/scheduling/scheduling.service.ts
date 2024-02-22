import {Injectable, OnModuleInit} from '@nestjs/common';
import {GoogleService} from "../google/google.service";
import {JsonDatabaseService} from "../json-database/json-database.service";
import {FileSystemService} from "../file-system/file-system.service";
import {GymTimeSlotDataAsObject, Schedule} from "../google/types/google";
import {ScheduleTemplatesService} from "../schedule-templates/schedule-templates.service";
import {ScheduleTemplate} from "../schedule-templates/dto/schedule-templates.dto";
import * as process from "process";
import * as path from 'path';
import {translator} from "../utilities/translator";
import {xmlGeneratorUtility} from "../utilities/xml-generator.utility";

@Injectable()
export class SchedulingService implements OnModuleInit {

    constructor(
        private googleService: GoogleService,
        private fileSystemService: FileSystemService,
        private jsonDatabaseService: JsonDatabaseService,
        private scheduleTemplatesService: ScheduleTemplatesService
    ) {}

    async onModuleInit(): Promise<void> {
        await this.executeIntervalChecking();
    }

    // @Interval(5 * 1000)
    async executeIntervalChecking() {
        try {

            const {
                googleScheduleData,
                templates,
                gymNames,
                templateNames
            } = await this.checkGoogleSpreadSheet();


            // создаем расписание для всех залов
            const scheduleDataWithProtectedTemplates = this.createScheduleDataWithProtectedTemplates({
                googleScheduleData, gymNames, templateNames
            });

            // создаем шаблоны с указанием информации о файлах и продолжительности
            await this.scheduleTemplatesService.createMultipleTemplates({ rawTemplateData: templates});

            await this.findCurrentContentInAllTemplates({
                masterSchedule: scheduleDataWithProtectedTemplates
            });


        } catch (error) {
            console.log("Произошла ошибка во время интервального сканирования расписания: ", error);
        }
    }

    async checkGoogleSpreadSheet() {

        try {

            // получаем расписание для всех залов и актуальные шаблоны со списком контента ;
            const googleScheduleData = await this.googleService.getSpreadSheetsScheduleData();
            const templates: ScheduleTemplate =  await this.googleService.getSpreadSheetsTemplatesData();

            const gymNames = Object.keys(googleScheduleData.gym);
            const templateNames = Object.keys(templates).map((templateName) => {
                return templateName.replace(/_template$|_/gm, " ").trim();
            });

            return {
                googleScheduleData,
                templates,
                gymNames,
                templateNames
            }

        } catch (error){
            console.log("Произошла ошибка во время формирования google расписания и шаблонов с контентом: ", error);
        }

    }

    createScheduleDataWithProtectedTemplates({
        googleScheduleData,
        gymNames,
        templateNames
    }: {
        googleScheduleData: Schedule,
        gymNames: string[],
        templateNames: string[]
    }) {

        const gymSchedule: Schedule = {
            gym: {}
        }

        // выявляем соответствие отдельных шаблонов с шаблонами из расписания
        const scheduleDataWithProtectedTemplates = gymNames.reduce((accumulator, gymName) => {
            const gymSchedule = googleScheduleData.gym[gymName].map((slotData) => {
                const templateName = slotData.template.toLowerCase().trim();

                // если название шаблона есть в списке всех шаблонов, то добавляем его в расписание...
                if(templateNames.includes(templateName)){
                    return {
                        ...slotData,
                        template: templateName.replace(/\s/gm, "_") + "_template"
                    }
                // ...в противном случае, в качестве шаблона используем _default_template
                } else {
                    return {
                        ...slotData,
                        template: "_default_template"
                    }
                }
            });

            return {
                gym: {
                    ...accumulator.gym,
                    [gymName]: gymSchedule
                }
            }
        }, gymSchedule);

        // сохраняем обновленное мастер-расписание в виде json-файла
        const filePath = path.join(process.cwd(), "database", "schedules", `master-schedule.json`);
        const databaseData = JSON.stringify(scheduleDataWithProtectedTemplates, null, 4);

        this.fileSystemService.writeFileSync(
            filePath,
            databaseData
        );

        return scheduleDataWithProtectedTemplates;

    }

    async findCurrentContentInAllTemplates({
        masterSchedule
    }: {
        masterSchedule: Schedule
    }) {

        const gymNames = Object.keys(masterSchedule.gym);
        const currentTime = new Date().getTime();
        const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;

        for await (const gymName of gymNames) {

            const gymSchedule = masterSchedule.gym[gymName];
            let chosenSlotData = undefined;
            let templateStartTime = new Date().getTime();

            const currentPlayingTemplate = gymSchedule.reduce((accumulator, slotData, index) => {

                const currentTemplateStartTime = new Date(slotData.timeStamp).getTime();
                const previousTemplateStartTime = index === 0 ? 0 :
                    new Date(gymSchedule[index - 1].timeStamp).getTime();

                const currentDelta = currentTime - currentTemplateStartTime;
                const previousDelta = currentTime - previousTemplateStartTime;

                if(currentDelta <= 0 && previousDelta >= 0) {

                    templateStartTime = gymSchedule[index - 1].timeStamp.getTime();
                    chosenSlotData = gymSchedule[index - 1];
                    return gymSchedule[index - 1].template;

                } else if(currentDelta < 0 && previousDelta < 0) {
                    return accumulator;
                } else if(currentDelta > 0 && previousDelta > 0) {
                    return accumulator;
                } else {
                    console.log("Что-то пошло не так")
                }

            }, "_default_template");

            const defaultTemplateFilePath = path.join(process.cwd(), "database", "templates", `_default_template.json`);
            const defaultTemplateFileContent = JSON.parse(this.fileSystemService.readFileSync(defaultTemplateFilePath).toString());

            const templateFilePath = path.join(process.cwd(), "database", "templates", `${currentPlayingTemplate}.json`);
            const templateFileContent = JSON.parse(this.fileSystemService.readFileSync(templateFilePath).toString());

            let chosenFile = undefined
            let chosenFileIndex = 0;

            const fileEndTime = templateFileContent.files.reduce((accumulator, currentFile, index) => {

                const fileDurationInSeconds = currentFile.duration;
                const fileStartTime = new Date(chosenSlotData.timeStamp).getTime();

                const [hours, minutes, seconds] = fileDurationInSeconds.split(":").map((time) => parseInt(time));
                const newContentDurationInMillis = accumulator + ((hours * 3600) + (minutes * 60) + seconds) * 1000;
                const previousContentEndTime = fileStartTime + accumulator;
                const currentContentEndTime = fileStartTime + newContentDurationInMillis;
                const currentDelta = currentContentEndTime - currentTime;
                const previousDelta = previousContentEndTime - currentTime;
                // еслли абсолютное время окончания текущего файла больше текущего времени и
                // абсолютное время окончания предыдущего файла меньше текущего времени,
                // то выводим информацию о предыдущем контенте
                if( currentDelta >= 0 && previousDelta <= 0) { // контент с индексом index - 1 сейчас воспроизводится
                    chosenFileIndex = index !== 0 ? index - 1 : 0;
                    chosenFile = templateFileContent.files[chosenFileIndex];
                    return newContentDurationInMillis;
                } else if(currentDelta >= 0 && currentDelta >= 0) { // Контент ещё не начался
                    return accumulator;
                } else if(currentDelta <= 0 && currentDelta <= 0) { // Контент уже закончился
                    chosenFileIndex = 0;
                    chosenFile = defaultTemplateFileContent.files[0];
                    return newContentDurationInMillis;
                }

            }, 0);

            const absoluteEndTime = new Date(chosenSlotData.timeStamp.getTime() + fileEndTime);


            const xmlFileContent = xmlGeneratorUtility(chosenFile.url)
            const xmlFilePath = path.join(process.cwd(), "static", "xml", `${gymName}.xml`);

            this.fileSystemService.writeFileSync(xmlFilePath, xmlFileContent);

            console.log(chosenFile);
            console.log(absoluteEndTime);

        }

    }

}
