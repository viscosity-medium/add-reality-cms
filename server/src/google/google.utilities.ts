import {GymTimeSlotDataAsObject, GymTimSlotDataAsArray, Schedule} from "./types/google";
import {translator} from "../utilities/translator";

export const createGymScheduleSlotFromGoogleSheet = ({
    rowData
} : {
    rowData: GymTimSlotDataAsArray
}) => {

    const date = rowData[0].replace(/10\//g, "02\/").replace(/\/2023/, "\/2024");
    const startTime = rowData[1];
    const format = date.match(/\d+\/\d+\/\d+/gm) ? "MM/DD/YYYY" : "DD.MM.YYYY";
    const timeStamp = format === "MM/DD/YYYY" ? new Date(date + " " + startTime) : new Date(date + "T" + startTime);

    return {
        date: date,
        startTime: startTime,
        template: rowData[2],
        telephone: rowData[3],
        instructor: rowData[4],
        timeStamp: timeStamp,
        gymName: translator.translateToLatin(rowData[5])
    };

}

export const createGymClassSchedule = ({
    classes,
    gymName,
    accum
}: {
    gymName: string,
    accum: Schedule,
    classes: string[]
}) => {

    return classes.includes(gymName) ? accum.gym[gymName] : [] as GymTimeSlotDataAsObject[];

};