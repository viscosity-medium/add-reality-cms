import {v4 as uuidv4} from 'uuid';
import {useAppDispatch} from "@/store/store";
import {newPlayerActions} from "@/fsd-structure/widgets/NewPlayerCard/model/newPlayerCard.slice";
import {useSelector} from "react-redux";
import {getPlayersList} from "@/fsd-structure/widgets/InformationView/model/informationView.selectors";
import {useEffect} from "react";
import {generateNewXmlId} from "@/fsd-structure/widgets/NewPlayerCard/model/newPlayerCard.helpers";
import {fetchCreateNewPlayer} from "@/fsd-structure/widgets/NewPlayerCard/model/newPlayerCard.asynkThunks";
import {getNewPlayerData} from "@/fsd-structure/widgets/NewPlayerCard/model/newPlayerCard.selectors";
import {informationViewActions} from "@/fsd-structure/widgets/InformationView/model/informationView.slice";


export const useGenerateIds = () => {

    const dispatch = useAppDispatch();
    const playersList = useSelector(getPlayersList);
    useEffect(() => {

        const newDeviceId = uuidv4();
        const newXmlId = generateNewXmlId(playersList);

        dispatch(newPlayerActions.setDeviceId(newDeviceId));
        dispatch(newPlayerActions.setXmlFileId(newXmlId));

    }, [playersList]);

}

export const useNewPlayerCardEvents = () => {

    const dispatch = useAppDispatch();
    const playerData = useSelector(getNewPlayerData);

    const onNewPlayerNameChange = (newPlayerName: string) => {
        dispatch(newPlayerActions.setDeviceName(newPlayerName));
    }

    const onSubmitCreateNewPlayer = async () => {

        const { payload } = await dispatch(fetchCreateNewPlayer(playerData));
        const newPlayersList = payload.players;

        dispatch(informationViewActions.setPlayersList(newPlayersList));
        dispatch(newPlayerActions.setDeviceName(""));
    }

    return  {
        onNewPlayerNameChange,
        onSubmitCreateNewPlayer
    }

}
