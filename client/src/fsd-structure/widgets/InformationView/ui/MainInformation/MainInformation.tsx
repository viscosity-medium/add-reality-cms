'use client'

import {Div, Input, Label} from "@/fsd-structure/shared";
import cls from "./contentBlock.module.scss";
import {useFormInputs} from "@/fsd-structure/widgets";

const MainInformation = () => {

    const {
        deviceId, deviceName, xmlFile,
        onIdInputChange, onNameInputChange,
        onXmlInputChange
    } = useFormInputs();

    return (
        <Div
            className={cls.mainInformation}
        >
            <Div
                className={cls.mainInformationRow}
            >
                <Label
                    className={cls.mainInformationRowlabel}
                >
                    Id:
                </Label>
                <Input
                    value={deviceId}
                    onChange={(event) => {
                        onIdInputChange(event);
                    }}
                    className={cls.mainInformationRowDescription}
                />
            </Div>
            <Div
                className={cls.mainInformationRow}
            >
                <Label
                    className={cls.mainInformationRowlabel}
                >
                    Название:
                </Label>
                <Input
                    value={deviceName}
                    onChange={(event) => {
                        onNameInputChange(event);
                    }}
                    className={cls.mainInformationRowDescription}
                />
            </Div>
            <Div
                className={cls.mainInformationRow}
            >
                <Label
                    className={cls.mainInformationRowlabel}
                >
                    XML:
                </Label>
                <Input
                    value={xmlFile}
                    onChange={(event) => {
                        onXmlInputChange(event);
                    }}
                    className={cls.mainInformationRowDescription}
                />
            </Div>
        </Div>
    );

};

export default MainInformation;