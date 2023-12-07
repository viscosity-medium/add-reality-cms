'use client';

import {
    CustomButton,
    CustomHeader,
    CustomInput,
    CustomLabel,
    Div,
    Li,
    TextFilledLine,
    Ul
} from "@/fsd-structure/shared";
import cls from "./newPlayerCard.module.scss";
import {
    getNewDeviceId,
    getNewDeviceName,
    getNewXmlId
} from "@/fsd-structure/widgets/NewPlayerCard/model/newPlayerCard.selectors";
import {useAppSelector} from "@/store/store";
import {useGenerateIds, useNewPlayerCardEvents} from "@/fsd-structure/widgets/NewPlayerCard/model/newPlayerCard.hooks";

const NewPlayerCard = () => {

    const newDeviceName = useAppSelector(getNewDeviceName);
    const newDeviceId = useAppSelector(getNewDeviceId);
    const newXmlId = useAppSelector(getNewXmlId);
    const isDisabled = newDeviceName.length < 5;
    const { onNewPlayerNameChange, onSubmitCreateNewPlayer } = useNewPlayerCardEvents();

    useGenerateIds();

    return (
        <Div
            className={cls.cardWrapper}
        >
            <Div
                className={cls.contentWrapper}
            >
                <CustomHeader
                    tag={"h2"}
                    isColored
                    className={cls.header}
                >
                    Укажите информацию об устройстве
                </CustomHeader>
                <Ul
                    className={cls.list}
                >
                    <Li
                        className={cls.listItem}
                    >
                        <CustomLabel>
                            Название:
                        </CustomLabel>
                        <CustomInput
                            value={newDeviceName}
                            onChange={(event) => {
                                onNewPlayerNameChange(event.target.value);
                            }}
                        />
                    </Li>
                    <Li
                        className={cls.listItem}
                    >
                        <CustomLabel>
                            Id устройства:
                        </CustomLabel>
                        <TextFilledLine>
                            {
                                newDeviceId
                            }
                        </TextFilledLine>
                    </Li>
                    <Li
                        className={cls.listItem}
                    >
                        <CustomLabel>
                            Id xml-файла:
                        </CustomLabel>
                        <TextFilledLine>
                            {
                                newXmlId
                            }
                        </TextFilledLine>
                    </Li>
                </Ul>
            </Div>
            <CustomButton
                customWidth={"bigWidth"}
                styleType={"colored"}
                disabled={isDisabled}
                onClick={async () => {
                    await onSubmitCreateNewPlayer();
                }}
            >
                { isDisabled ? "Заполните название" : "Создать новое устройство" }
            </CustomButton>
        </Div>
    );

};

export default NewPlayerCard;