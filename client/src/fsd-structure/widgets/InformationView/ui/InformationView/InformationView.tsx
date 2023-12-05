'use client'

import {CustomButton, Paragraph, Section} from "@/fsd-structure/shared";
import {CardWrapper, } from "@/fsd-structure/widgets";
import useSwitchInformationViewMode from "../../model/hooks/useSwitchInformationViewMode.hooks";

import {PlayerData} from "../PlayerData/PlayerData";
import {FileStoreData} from "../FileStoreData/FileStoreData";
import {useAppDispatch} from "@/store/store";
import {useEffect} from "react";
import { fetchStoreFiles } from "@/fsd-structure/widgets/InformationView/model/informationView.asynkThunk";
import cls from "./informationView.module.scss";

const InformationView = () => {

    const {
        informationViewMode,
        oppositeModeToSwitch,
        onSwitchInformationViewMode
    } = useSwitchInformationViewMode();

    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(fetchStoreFiles());
    // }, []);

    return (
        <CardWrapper>
            <Section
                className={cls.informationView}
            >
                {
                    informationViewMode === "store" ?
                        <FileStoreData/> :
                        <PlayerData/>
                }
            </Section>
            <CustomButton
                customWidth={"defaultWidth"}
                styleType={"default"}
                className={cls.callStoreButton}
                type={"button"}
                onClick={() => {
                    //onSwitchInformationViewMode();
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