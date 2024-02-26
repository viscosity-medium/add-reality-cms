import {Injectable, OnModuleInit} from '@nestjs/common';
import {GoogleService} from "../google/google.service";
import {JsonDatabaseService} from "../json-database/json-database.service";
import {FileSystemService} from "../file-system/file-system.service";
import {Schedule} from "../google/types/google";
import {ScheduleTemplatesService} from "../schedule-templates/schedule-templates.service";
import {ScheduleTemplate} from "../schedule-templates/dto/schedule-templates.dto";
import * as process from "process";
import * as path from 'path';
import {xmlGeneratorUtility} from "../utilities/xml-generator.utility";
import {TemplateContent} from "../types/files";
import {TemplateService} from 'src/template/template.service';
import {timeConverter} from "../utilities/time-converter";

@Injectable()
export class SchedulingService implements OnModuleInit {

    constructor(
        private googleService: GoogleService,
        private templateService: TemplateService,
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
            await this.scheduleTemplatesService.createMultipleTemplates({ rawTemplateData: templates });

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
        // const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;

        for await (const gymName of gymNames) {

            const currentTime = new Date().getTime()
            const gymSchedule = masterSchedule.gym[gymName];
            let templateStartTime = new Date().getTime();

            // отрефакторить/дуструктурировать 2 метода (разнести в другие сервисы если необходимо)
            const {
                currentSlotData, currentTemplatePath, nextSlotData, nextTemplatePath
            } = this.templateService.getCurrentPlayingTemplate({ gymSchedule, templateStartTime });
            const {
                templateDuration, currentPlayingFile
            } = this.templateService.getTemplateDuration({ currentTemplatePath, currentSlotData });

            const currentScheduleEndTimeInMilliseconds = timeConverter.summarizeAllMilliseconds([currentSlotData.timeStamp.getTime(), templateDuration]);
            const nextScheduleEndTimeInMilliseconds = nextSlotData.timeStamp.getTime();
            const currentTemplateTimeoutTimer = (currentScheduleEndTimeInMilliseconds - currentTime);
            const nextTemplateTimeoutTimer = (nextScheduleEndTimeInMilliseconds - currentTime);

            const xmlFileContent = xmlGeneratorUtility(currentPlayingFile.url.replace(/\\/gm, "/"));
            const xmlFilePath = path.join(process.cwd(), "static", "xml", `${gymName}.xml`);

            this.fileSystemService.writeFileSync(xmlFilePath, xmlFileContent);

            if(gymName === "zal-gp") {
                // console.log(currentSlotData.timeStamp);
                // console.log(currentPlayingFile);
                console.log(nextSlotData);
            }

            // __переключатель файлов в шаблоне__
            if(currentTemplateTimeoutTimer > 0) {
                setTimeout(() => {
                    // console.log("Запущен таймер на переключение файла в шаблоне");
                    this.findCurrentContentInAllTemplates({ masterSchedule });
                }, currentTemplateTimeoutTimer);
            }


            // __переключатель шаблонов__
            if(currentScheduleEndTimeInMilliseconds <= currentTime && currentTime  <= nextScheduleEndTimeInMilliseconds) {
                if(gymName === "zal-gp") {
                    console.log("Запущен таймер на переключение шаблона");
                }

                setTimeout(() => {
                    this.findCurrentContentInAllTemplates({ masterSchedule });
                }, nextTemplateTimeoutTimer);
            }

        }

    }

}
