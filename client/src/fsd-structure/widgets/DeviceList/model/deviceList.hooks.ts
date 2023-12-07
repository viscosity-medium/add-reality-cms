import {useAppDispatch} from "@/store/store";
import {informationViewActions} from "@/fsd-structure/widgets/InformationView/model/informationView.slice";
import {DeviceListDataItem} from "@/fsd-structure/widgets/DeviceList/types/deviceList";

export const useChooseCurrentPlayer = ({name, xml, id}: DeviceListDataItem) => {
    const dispatch = useAppDispatch();
    const onItemClick = () => {
        dispatch(informationViewActions.setCurrentPlayerId(id));
        dispatch(informationViewActions.setCurrentPlayerName(name));
        dispatch(informationViewActions.setCurrentXmlId(xml));
    }

    return {
        onItemClick
    };
}