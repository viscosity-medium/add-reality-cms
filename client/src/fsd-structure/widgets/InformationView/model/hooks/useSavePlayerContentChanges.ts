import {useAppDispatch} from "@/store/store";
import {PlayerDataProps} from "@/fsd-structure/widgets/InformationView/types/InformationView";
import {
    updatePlayerContent
} from "@/fsd-structure/widgets/InformationView/model/asyncThunks/updatePlayerContent.asyncThunk";

export const useSavePlayerContentChanges = (playerData: PlayerDataProps) => {

    const dispatch = useAppDispatch();

    const onClickSavePlayerContentChanges = () => {
        dispatch(updatePlayerContent(playerData));
    }

    return {
        onClickSavePlayerContentChanges
    }

}