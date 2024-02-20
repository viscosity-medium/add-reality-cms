'use client'

import cls from "../InformationView/informationView.module.scss";
import clsStore from "../StoreFilesData/storeFilesData.module.scss"
import {CustomButton, CustomHeader, Div, Form, Hr} from "@/fsd-structure/shared";
import {MainInformation, StoreFilesList} from "@/fsd-structure/widgets";
import {useAppDispatch, useAppSelector} from "@/store/store";
import {getCurrentPlayerData, getPlayerContent} from "../../model/informationView.selectors";
import {informationViewActions} from "@/fsd-structure/widgets/InformationView/model/informationView.slice";
import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";
import {
    useSavePlayerContentChanges
} from "@/fsd-structure/widgets/InformationView/model/hooks/useSavePlayerContentChanges";

const PlayerData = () => {

    const playerData = useAppSelector(getCurrentPlayerData);
    const currentPlayerContent = useAppSelector(getPlayerContent);

    const dispatch = useAppDispatch();
    const { onClickSavePlayerContentChanges } = useSavePlayerContentChanges(playerData);
    const addPlayerContentItem = (item: StoreFileProps) => {
        const newPlayerContent = [...currentPlayerContent, item];
        dispatch(informationViewActions.setCurrentPlayerContent(newPlayerContent));
    }

    if(playerData.id && playerData.xml && playerData.name){
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
                {/*<CustomHeader*/}
                {/*    tag={"h2"}*/}
                {/*    isColored*/}
                {/*    className={*/}
                {/*        defineMargins({*/}
                {/*            marginTop: "mt20"*/}
                {/*        })*/}
                {/*    }*/}
                {/*>*/}
                {/*    Контент в расписании*/}
                {/*</CustomHeader>*/}
                <Div
                    className={clsStore.informationWrapper}
                >
                    <Div
                        className={clsStore.storeFilesListWrapper}
                    >
                        <CustomHeader
                            tag={"h3"}
                            isColored
                            className={clsStore.filesHeader}
                        >
                           Плеер
                        </CustomHeader>
                        <StoreFilesList
                            sourceType={"playerContent"}
                            isMutable={true}
                            //onChooseAction={addPlayerContentItem}
                        />
                    </Div>
                    <Hr
                        className={clsStore.hr}
                    />
                    <Div
                        className={clsStore.filesUploader}
                    >
                        <CustomHeader
                            tag={"h3"}
                            isColored
                            className={clsStore.filesHeader}
                        >
                            Хранилище
                        </CustomHeader>
                        <StoreFilesList
                            sourceType={"store"}
                            isMutable={false}
                            onChooseAction={addPlayerContentItem}
                        />
                    </Div>
                </Div>
                <Div
                    className={cls.submitFormButtonWrapper}
                >
                    <CustomButton
                        className={cls.submitFormButton}
                        customWidth={"bigWidth"}
                        styleType={"colored"}
                        onClick={() => {
                            onClickSavePlayerContentChanges();
                        }}
                    >
                        Сохранить обновление
                    </CustomButton>
                </Div>
            </Form>
        );
    } else {
        return (
            <CustomHeader
                tag={"h2"}
                className={cls.playerIsNotChosenNotification}
                isColored
            >
                Выберите плеер из списка устройств
            </CustomHeader>
        )
    }



};

export {PlayerData};