import {useAppDispatch} from "@/store/store";
import { deletePlayer } from "../asyncThunks/deletePlayer.asyncThunk";
import {PlayerDataProps} from "@/fsd-structure/widgets/InformationView/types/InformationView";
import {informationViewActions} from "@/fsd-structure/widgets/InformationView/model/informationView.slice";

export const useDeletePlayer = (playerData: PlayerDataProps) => {

    const dispatch = useAppDispatch();

    const onClickDeletePlayer = () => {
        dispatch(informationViewActions.setMode("store"));
        dispatch(deletePlayer(playerData));
    }

    return {
        onClickDeletePlayer
    }

}