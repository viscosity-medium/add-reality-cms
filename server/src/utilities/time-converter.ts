

class TimeConverter {

    summarizeAllMilliseconds(milliseconds: number[]) {

        return milliseconds.reduce((accumulatorMilliseconds, currentValue) => accumulatorMilliseconds + currentValue, 0);

    }

    convertFullTimeToMilliseconds({
        time,
        accumulator
    }: {
        time: string,
        accumulator: number
    }) {
        const [hours, minutes, seconds] = time.split(":").map((time) => parseInt(time));
        return accumulator + ((hours * 3600) + (minutes * 60) + seconds) * 1000;
    }

    convertSecondsToFullTime(seconds: number) {

        const hours = Math.floor(seconds / 3600).toString();
        const minutes = Math.floor((seconds - (+hours * 3600)) / 60).toString();
        const remainingSeconds = Math.trunc(seconds - (+hours * 3600) - (+minutes * 60)).toString();

        const makeNumberWithTwoDigits = (stringedNumber: string) => {
            return stringedNumber.length >= 2 ? stringedNumber : '0' + stringedNumber
        }

        return `${makeNumberWithTwoDigits(hours)}:${makeNumberWithTwoDigits(minutes)}:${makeNumberWithTwoDigits(remainingSeconds)}`;

    }

    countTotalTimeDuration({
        timeDurationArray,
    } : {
        timeDurationArray: string[]
    }) {

        const totalSeconds = timeDurationArray.reduce((accumulator, time) => {
            const [hours, minutes, seconds] = time.split(":").map((time) => parseInt(time));
            return accumulator + (hours * 3600) + (minutes * 60) + seconds;
        }, 0);

        return this.convertSecondsToFullTime(totalSeconds);

    }

}

export const timeConverter = new TimeConverter();