import React, {FC} from "react";
import {Button, CloseButton, Div, Label, Li, Paragraph} from "@/fsd-structure/shared";
import {DeviceListDataItem} from "../../types/deviceList";
import {useChooseCurrentPlayer} from "../../model/deviceList.hooks";
import {useDeletePlayer} from "../../../InformationView/model/hooks/useDeletePlayer";
import cls from "./deviceListItem.module.scss"

const DeviceListItem: FC<DeviceListDataItem> = ({
    name, id, index = 0, xml, content
}) => {

    const {
        onItemClick
    } = useChooseCurrentPlayer({ id, name, xml, content });
    const { onClickDeletePlayer } = useDeletePlayer({id, name, xml, content});

    return (
        <Li className={cls.listItem}>
            <Button
                className={cls.listItemButton}
                onClick={(event) => {
                    if(event.currentTarget === event.target) {
                        onItemClick();
                    }
                }}
            >
                <Div
                    className={cls.textWrapper}
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
                </Div>
                <CloseButton
                    size={"small"}
                    className={cls.deleteButton}
                    onClick={() => {
                        onClickDeletePlayer();
                    }}
                />
            </Button>
        </Li>
    );

};

export { DeviceListItem };