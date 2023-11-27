import { Div, Section } from "@/fsd-structure/shared";
import cls from "./scheduleInformation.module.scss";

const ScheduleInformation = () => {
    return (
        <Div
            className={cls.scheduleInformationWrapper}
        >
            <Section
                className={cls.scheduleInformation}
            >

            </Section>
        </Div>
    );
};

export {ScheduleInformation};