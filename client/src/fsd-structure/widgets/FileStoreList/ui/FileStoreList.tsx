import { FilePreviewListItem, Ul } from "@/fsd-structure/shared";
import {useAppSelector} from "@/store/store";
import {getFileStoreItems} from "../model/fileStore.selectors";

const FileStoreList = () => {

    const previewListItems = useAppSelector(getFileStoreItems);

    return (
        <Ul>
            {
                previewListItems.map((item, index) => {
                    return (
                        <FilePreviewListItem
                            key={index}
                            {
                            ...item
                            }
                            index={index}
                        />
                    )
                })
            }
        </Ul>
    );

};

export  {
    FileStoreList
};