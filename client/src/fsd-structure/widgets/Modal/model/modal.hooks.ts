import {useAppDispatch} from "@/store/store";
import {modalActions} from "@/fsd-structure/widgets/Modal/model/modal.slice";

export const useChangeModalVisibility = () => {

    const dispatch = useAppDispatch();

    const setModalVisible = () => {
        dispatch(modalActions.setIsShown(true));
    };
    const setModalInvisible = () => {
        dispatch(modalActions.setIsShown(false));
    };

    return {
        setModalVisible,
        setModalInvisible
    }

}