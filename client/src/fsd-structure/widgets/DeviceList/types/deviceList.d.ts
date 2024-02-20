import {PlayerDataProps} from "@/fsd-structure/widgets/InformationView/types/InformationView";

export interface DeviceListDataItem extends PlayerDataProps{
    index?: number
}

export type DeviceListData = DeviceListDataItem[];