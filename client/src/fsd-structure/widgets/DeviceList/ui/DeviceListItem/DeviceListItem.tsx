import {FC} from "react";
import {Button, Label, Li, Paragraph} from "@/fsd-structure/shared";
import {DeviceListDataItem} from "../../types/deviceList";
import cls from "./deviceListItem.module.scss"
import {useChooseCurrentPlayer} from "@/fsd-structure/widgets/DeviceList/model/deviceList.hooks";

const DeviceListItem: FC<DeviceListDataItem> = ({
    name, id, index = 0, xml
}) => {

    const {
        onItemClick
    } = useChooseCurrentPlayer({ id, name, xml });

    return (
        <Li className={cls.listItem}>
            <Button
                className={cls.listItemButton}
                onClick={() => {
                    onItemClick();
                }}
            >
                <Label>
                    {
                        index + 1
                    })
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