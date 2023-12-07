'use client'

import {CustomInput, CustomLabel, Li, TextFilledLine, Ul} from "@/fsd-structure/shared";
import {useFormInputs} from "@/fsd-structure/widgets";
import cls from "./contentBlock.module.scss";

const MainInformation = () => {

    const {
        deviceId, deviceName, xmlFile,
        onNameInputChange,
    } = useFormInputs();

    return (
        <Ul
            className={cls.mainInformation}
        >
            <Li
                className={cls.mainInformationRow}
            >
                <CustomLabel>
                    Название:
                </CustomLabel>
                <CustomInput
                    value={deviceName}
                    onChange={(event) => {
                        onNameInputChange(event);
                    }}
                />
            </Li>
            <Li
                className={cls.mainInformationRow}
            >
                <CustomLabel>
                    Id устройства:
                </CustomLabel>
                <TextFilledLine>
                    {
                        deviceId
                    }
                </TextFilledLine>
            </Li>
            <Li
                className={cls.mainInformationRow}
            >
                <CustomLabel>
                    Id xml-файла:
                </CustomLabel>
                <TextFilledLine>
                    {
                        xmlFile
                    }
                </TextFilledLine>
            </Li>
        </Ul>
    );

};

export default MainInformation;