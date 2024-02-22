

class TimeConverter {

    convertSecondsToFullTime(seconds: number) {

        const hours = Math.floor(seconds / 3600).toString();
        const minutes = Math.floor((seconds - (+hours * 3600)) / 60).toString();
        const remainingSeconds = Math.trunc(seconds - (+hours * 3600) - (+minutes * 60)).toString();

        const makeNumberWithTwoDigits = (stringedNumber: string) => {
            return stringedNumber.length >= 2 ? stringedNumber : '0' + stringedNumber
        }

        return `${makeNumberWithTwoDigits(hours)}:${makeNumberWithTwoDigits(minutes)}:${makeNumberWithTwoDigits(remainingSeconds)}`;

    }

    countTotalTimeDuration(totalTimeArray: string[]) {

        const totalSeconds = totalTimeArray.reduce((accumulator, time) => {
            const [hours, minutes, seconds] = time.split(":").map((time) => parseInt(time));
            return accumulator + (hours * 3600) + (minutes * 60) + seconds;
        }, 0);
        return this.convertSecondsToFullTime(totalSeconds);

    }

}

export const timeConverter = new TimeConverter();