import {FilePreviewListItem, joinClassnames, Ul} from "@/fsd-structure/shared";
import {useAppSelector} from "@/store/store";
import {getStoreFiles} from "@/fsd-structure/widgets/InformationView/model/informationView.selectors";
import cls from "./storeFilesList.module.scss";
import {FC} from "react";

interface StoreFilesList {
    className?: string
}

const StoreFilesList: FC<StoreFilesList> = ({
    className=""
}) => {

    const previewListItems = useAppSelector(getStoreFiles);

    return (
        <Ul
            className={joinClassnames([cls.storeFilesList, className])}
        >
            {
                previewListItems.map((item, index) => {
                    return (
                        <FilePreviewListItem
                            key={item.id}
                            {
                            ...item
                            }
                            index={index + 1}
                        />
                    )
                })
            }
        </Ul>
    );

};

export  {
    StoreFilesList
};