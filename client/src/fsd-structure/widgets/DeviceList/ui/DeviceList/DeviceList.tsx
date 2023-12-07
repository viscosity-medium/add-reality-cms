'use client'

import {Aside, CustomButton, CustomHeader, defineMargins, Div, Ul} from "@/fsd-structure/shared";
import {deviceListTestData} from "../../model/deviceList.testData";
import {DeviceListItem} from "../DeviceListItem/DeviceListItem";
import cls from "./deviceList.module.scss";
import {useSelector} from "react-redux";
import {getPlayersList} from "@/fsd-structure/widgets/InformationView/model/informationView.selectors";
import {useChangeModalVisibility} from "@/fsd-structure/widgets/Modal/model/modal.hooks";

const DeviceList = () => {

    const playersList = useSelector(getPlayersList);
    const { setModalVisible } = useChangeModalVisibility();
    console.log(playersList)
    return (
        <Aside
            className={cls.aside}
        >
            <Div
                className={cls.deviceListOuterWrapper}
            >
                <CustomHeader
                    tag={"h3"}
                    className={cls.h2Header}
                >
                    Список устройств
                </CustomHeader>
                <Div
                    className={cls.deviceListInnerWrapper}
                >
                    <Ul
                        className={cls.deviceList}
                    >
                        {
                            playersList.length > 0 && playersList.map(({
                                id,
                                name,
                                xml
                            }, index) => {
                                return(
                                    <DeviceListItem
                                        key={`${id}-${name}-${index}`}
                                        id={id}
                                        name={name}
                                        xml={xml}
                                        index={index}
                                    />
                                )
                            })
                        }
                    </Ul>
                </Div>
                <CustomButton
                    customWidth={"fullWidth"}
                    styleType={"default"}
                    className={defineMargins({
                        marginTop: "mt16"
                    })}
                    onClick={() => {
                        setModalVisible();
                    }}
                >
                    Зарегистрировать плеер
                </CustomButton>
            </Div>
        </Aside>
    );

};

export { DeviceList };