'use client'

import {CustomButton, Paragraph, Section} from "@/fsd-structure/shared";
import {CardWrapper, } from "@/fsd-structure/widgets";
import useSwitchInformationViewMode from "../../model/hooks/useSwitchInformationViewMode.hooks";

import {PlayerData} from "../PlayerData/PlayerData";
import {StoreFilesData} from "@/fsd-structure/widgets/InformationView/ui/StoreFilesData/StoreFilesData";
import {useAppDispatch} from "@/store/store";
import useFetchStoreFiles from "../../model/hooks/useFetchStoreFiles.hooks";
import cls from "./informationView.module.scss";

const InformationView = () => {

    const {
        informationViewMode,
        oppositeModeToSwitch,
        onSwitchInformationViewMode
    } = useSwitchInformationViewMode();

    useFetchStoreFiles();

    return (
        <CardWrapper>
            <Section
                className={cls.informationView}
            >
                {
                    informationViewMode === "store" ?
                        <StoreFilesData/> :
                        <PlayerData/>
                }
            </Section>
            <CustomButton
                customWidth={"defaultWidth"}
                styleType={"default"}
                className={cls.callStoreButton}
                type={"button"}
                onClick={() => {
                    onSwitchInformationViewMode();
                }
            }
            >
                <Paragraph>
                    {
                        oppositeModeToSwitch
                    }
                </Paragraph>
            </CustomButton>
        </CardWrapper>
    );

};

export default InformationView;