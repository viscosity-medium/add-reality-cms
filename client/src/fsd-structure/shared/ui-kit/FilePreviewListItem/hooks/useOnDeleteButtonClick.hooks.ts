import {useAppDispatch, useAppSelector} from "@/store/store";
import {getStoreFiles} from "@/fsd-structure/widgets/InformationView/model/informationView.selectors";
import {informationViewActions} from "@/fsd-structure/widgets/InformationView/model/informationView.slice";

export const useOnDeleteButtonClick = (filterIndex: number) => {

    const dispatch = useAppDispatch();
    const storeFiles = useAppSelector(getStoreFiles);

    const onDeleteButtonClick = () => {

        const filteredStoreFiles = [...storeFiles].filter((_, index) => {
            return (
                index !== filterIndex
            )
        });
        dispatch(informationViewActions.setFileStore(filteredStoreFiles));
    }

    return {
        onDeleteButtonClick
    }

}