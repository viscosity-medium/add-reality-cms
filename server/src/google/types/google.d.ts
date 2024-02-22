type T = number;
export type SlotDate = `${T}/${T}/${T}`;
export type SlotTime = `${T}:${T}:${T}`;

export type GymTimSlotDataAsArray = [SlotDate, SlotTime, string, string, string, string];

export interface GymTimeSlotDataAsObject {
    date: string,
    startTime: string,
    timeStamp: Date,
    template: string,
    telephone: string,
    instructor: string,
    gymName: string
}

export interface GymClassSchedule {
    [key: string]: GymTimeSlotDataAsObject[]
}

export interface Schedule {
    gym: GymClassSchedule
}

