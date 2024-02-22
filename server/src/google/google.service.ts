import {Injectable, OnModuleInit} from '@nestjs/common';
import {google, sheets_v4} from "googleapis";
import {GymTimSlotDataAsArray, Schedule} from "./types/google";
import {createGymClassSchedule, createGymScheduleSlotFromGoogleSheet} from "./google.utilities";
import Sheets = sheets_v4.Sheets;
import * as process from "process";
import * as path from "path";
import {ScheduleTemplate} from "../schedule-templates/dto/schedule-templates.dto";
import {translator} from "../utilities/translator";

const auth = new google.auth.GoogleAuth({
    keyFile: 'google-credentials.json',
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const extractScheduleFromGoogleSheets = (playerData: sheets_v4.Schema$ValueRange) => {

    const initialState: Schedule = {
        gym: {}
    };

    const schedule = playerData.values.reduce((
        accum,
        rowData: GymTimSlotDataAsArray,
        index
    ) => {

        if( index !== 0 ) {

            const gymName = translator.translateToLatin(rowData[5]);
            const classes = Object.keys(accum.gym);
            const gymScheduleSlot = createGymScheduleSlotFromGoogleSheet({ rowData });
            const gymSchedule = createGymClassSchedule({ classes, gymName, accum });
            gymSchedule.push(gymScheduleSlot)

            return {
                gym: {
                    ...accum.gym,
                    [gymName]: [
                        ...gymSchedule,
                    ]
                }
            }

        } else {
            return accum;
        }

    }, initialState);

    return schedule;

}

@Injectable()
export class GoogleService implements OnModuleInit {

    googleSheets: Promise<sheets_v4.Sheets>
    constructor() {
        this.googleSheets = this.onModuleInit();
    }

    async onModuleInit() {
        const client: any = await auth.getClient();
        const googleSheets: Sheets = google.sheets({
            version: "v4",
            auth: client
        });
        return googleSheets;
    }

    async getSpreadSheetsScheduleData() {

        try {
            const googleSheets = await this.googleSheets.then(res =>  res);

            const { data: rawScheduleData } = await googleSheets.spreadsheets.values.get({
                spreadsheetId: process.env.GOOGLE_SHEETS_ID,
                range: "schedule!A2:F"
            });

            return extractScheduleFromGoogleSheets(rawScheduleData);
        } catch (error) {
            console.log("Произошла ошибка во время получения расписания из google-sheets", error);
        }
    }

    async getSpreadSheetsTemplatesData() {

        try {

            const templates: ScheduleTemplate = {};
            const googleSheets = await this.googleSheets.then(res => res);

            const { data: { sheets: listsData } } = await googleSheets.spreadsheets.get({
                spreadsheetId: process.env.GOOGLE_SHEETS_ID,
            });
            const templateSheetNames = listsData
            .map((sheet) => {
                if(sheet.properties.title.match(/_template/i)) {
                    return sheet.properties.title;
                }
            }).filter((sheet) => sheet !== undefined);

            for await (const sheetName of templateSheetNames) {

                const { data: rawTemplateData } = await googleSheets.spreadsheets.values.get({
                    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
                    range: `${sheetName}!A2:F`
                });

                templates[sheetName] = rawTemplateData.values.reduce((accum, value, index) => {
                    if(index !== 0) {
                        return [
                            ...accum,
                            value[0]
                        ]
                    } else {
                        return accum;
                    }
                }, []);

            }

            return templates;

        } catch (error) {
            console.log("Произошла ошибка во время получения шаблонов с контентом из google-sheets", error);
        }

    }

}
