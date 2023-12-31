
import InformationView from "@/fsd-structure/widgets/InformationView/ui/InformationView/InformationView";
import MainInformation from "@/fsd-structure/widgets/InformationView/ui/MainInformation/MainInformation";
import useUploadNewStoreFiles from "./model/hooks/useUploadStoreFiles.hooks";
import useSwitchInformationViewMode from "./model/hooks/useSwitchInformationViewMode.hooks";
import useFormInputs from "./model/hooks/useFormInputs.hooks";
import useFetchStoreFiles from "./model/hooks/useFetchStoreFiles.hooks"

// export { informationViewReducer } from "./model/informationView.slice";
// export { informationViewActions } from './model/informationView.slice';
export { type InformationViewScheme } from "./types/InformationView.d";
export {
    InformationView,
    MainInformation,
    useUploadNewStoreFiles,
    useFormInputs,
    useFetchStoreFiles,
    useSwitchInformationViewMode
}