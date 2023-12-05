'use client'

import cls from "@/fsd-structure/widgets/InformationView/ui/InformationView/informationView.module.scss";
import {CustomButton, CustomHeader, defineMargins, Div, Form, Hr} from "@/fsd-structure/shared";
import {MainInformation, useOnFormSave} from "@/fsd-structure/widgets";

const PlayerData = () => {

    const { onSaveFormButtonClick } = useOnFormSave();

    return (
        <Form
            className={cls.informationViewForm}
        >
            <CustomHeader
                tag={"h2"}
                isColored
            >
                Информация об устройстве
            </CustomHeader>
            <MainInformation/>
            <Hr
                className={cls.hr}
            />
            <CustomHeader
                tag={"h2"}
                isColored
                className={
                    defineMargins({
                        marginTop: "mt20"
                    })
                }
            >
                Контент в расписании
            </CustomHeader>
            <Div
                className={cls.submitFormButtonWrapper}
            >
                <CustomButton
                    className={cls.submitFormButton}
                    onClick={()=>{
                        onSaveFormButtonClick();
                    }}
                    customWidth={"defaultWidth"}
                    styleType={"colored"}
                    type={"submit"}
                >
                    Отправить
                </CustomButton>
            </Div>
        </Form>
    );

};

export {PlayerData};