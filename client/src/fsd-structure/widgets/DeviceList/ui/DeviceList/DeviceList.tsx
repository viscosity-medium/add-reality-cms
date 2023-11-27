'use client'

import { Aside, Div, H2, Ul } from "@/fsd-structure/shared";
import { deviceListTestData } from "../../model/deviceList.testData";
import { DeviceListItem } from "../DeviceListItem/DeviceListItem";
import cls from "./deviceList.module.scss";

const DeviceList = () => {

    return (
        <Aside
            className={cls.aside}
        >

            <Div
                className={cls.deviceListOuterWrapper}
            >
                <H2
                    className={cls.h2Header}
                >
                    Список устройств
                </H2>
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
                            }) => {
                                return(
                                    <DeviceListItem
                                        key={`${id}-${name}`}
                                        id={id}
                                        name={name}
                                        xmlResource={xmlResource}
                                    />
                                )
                            })
                        }
                    </Ul>
                </Div>
            </Div>
        </Aside>
    );

};

export { DeviceList };