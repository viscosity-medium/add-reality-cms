
export interface DeviceListDataItem {
    id: string,
    name: string
    xml: string
    index?: number
}

export type DeviceListData = DeviceListDataItem[];