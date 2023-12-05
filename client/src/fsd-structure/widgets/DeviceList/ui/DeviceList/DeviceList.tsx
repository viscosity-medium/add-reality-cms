'use client'

import {Aside, CustomButton, CustomHeader, defineMargins, Div, Ul} from "@/fsd-structure/shared";
import {deviceListTestData} from "../../model/deviceList.testData";
import {DeviceListItem} from "../DeviceListItem/DeviceListItem";
import cls from "./deviceList.module.scss";

const DeviceList = () => {

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
                            deviceListTestData.map(({
                                id,
                                name,
                                xmlResource
                            }, index) => {
                                return(
                                    <DeviceListItem
                                        key={`${id}-${name}-${index}`}
                                        id={id}
                                        name={name}
                                        xmlResource={xmlResource}
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
                >
                    Зарегистрировать плеер
                </CustomButton>
            </Div>
        </Aside>
    );

};

export { DeviceList };