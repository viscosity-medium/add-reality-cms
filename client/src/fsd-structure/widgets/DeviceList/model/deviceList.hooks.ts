import {useAppDispatch} from "@/store/store";
import {informationViewActions} from "@/fsd-structure/widgets/InformationView/model/informationView.slice";
import {DeviceListDataItem} from "@/fsd-structure/widgets/DeviceList/types/deviceList";

export const useChooseCurrentPlayer = ({name, xml, id, content}: DeviceListDataItem) => {

    const dispatch = useAppDispatch();
    const onItemClick = () => {
        dispatch(informationViewActions.setMode("player"));
        dispatch(informationViewActions.setCurrentPlayerId(id));
        dispatch(informationViewActions.setCurrentPlayerName(name));
        dispatch(informationViewActions.setCurrentXmlId(xml));
        dispatch(informationViewActions.setCurrentPlayerContent(content));
    }

    return {
        onItemClick
    };
}