import {useAppDispatch, useAppSelector} from "@/store/store";
import {getPlayerContent, getStoreFiles} from "@/fsd-structure/widgets/InformationView/model/informationView.selectors";
import {informationViewActions} from "@/fsd-structure/widgets/InformationView/model/informationView.slice";

export const useOnDeleteButtonClick = (sourceType: "store" | "playerContent", filterIndex: number) => {

    const dispatch = useAppDispatch();
    const storeFiles = useAppSelector(getStoreFiles);
    const currentContent = useAppSelector(getPlayerContent);

    const onDeleteButtonClick = () => {

        if(sourceType === "store"){
            const filteredStoreFiles = [...storeFiles].filter((_, index) => {
                return (
                    index !== filterIndex
                )
            });
            dispatch(informationViewActions.setStoreFiles(filteredStoreFiles));
        } else {
            const filteredPlayerContent = [...currentContent].filter((_, index) => {
                return (
                    index !== filterIndex
                )
            });
            dispatch(informationViewActions.setCurrentPlayerContent(filteredPlayerContent));
        }

    }

    return {
        onDeleteButtonClick
    }

}