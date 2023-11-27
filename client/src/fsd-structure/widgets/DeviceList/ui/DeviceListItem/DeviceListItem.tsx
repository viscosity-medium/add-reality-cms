import {Button, Label, Li, Paragraph} from "@/fsd-structure/shared";
import {FC} from "react";
import {DeviceListDataItem} from "../../types/deviceList";
import cls from "./deviceListItem.module.scss"

const DeviceListItem: FC<DeviceListDataItem> = ({
    id,
    name,
    xmlResource
}) => {

    return (
        <Li className={cls.listItem}>
            <Button
                className={cls.listItemButton}
            >
                <Label>
                    {
                        id
                    }
                </Label>
                <Paragraph
                    className={cls.itemName}
                >
                    {
                        name
                    }
                </Paragraph>
            </Button>
        </Li>
    );

};

export { DeviceListItem };