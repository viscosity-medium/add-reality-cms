import { Injectable, OnModuleInit } from '@nestjs/common';
import {google, sheets_v4} from "googleapis";
import Sheets = sheets_v4.Sheets;
import * as process from "process";

const auth = new google.auth.GoogleAuth({
    keyFile: 'google-credentials.json',
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const extractScheduleFromGoogleSheets = (playerData: sheets_v4.Schema$ValueRange) => {
    return playerData.values.reduce((accum, current, index ) => {
        if(index !== 0){
            return [...accum, ...current]
        } else {
            return accum
        }
    }, [])
}

@Injectable()
export class GoogleService implements OnModuleInit {

    googleSheets: Promise<sheets_v4.Sheets>
    constructor() {
        this.googleSheets = this.onModuleInit();
    }

    async onModuleInit() {
        const client: any = await auth.getClient();
        const googleSheets: Sheets = google.sheets({ version: "v4", auth: client });
        return googleSheets;
    }

    async getSheetData(){

        const googleSheets = await this.googleSheets.then(res =>  res);

        const { data: player1Data } = await googleSheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEETS_ID,
            range: "main!B1:B1000"
        });

        const player1 = player1Data.values[0][0] === "Player_1" ? extractScheduleFromGoogleSheets(player1Data) : [];

        return player1

    }

}
