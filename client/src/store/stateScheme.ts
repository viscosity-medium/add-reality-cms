import {FileUploaderScheme, InformationViewScheme} from "@/fsd-structure/widgets";
import {FileStoreScheme} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";
import {ModalScheme} from "@/fsd-structure/widgets/Modal/types/modal.d";
import {NewPlayerCardScheme} from "@/fsd-structure/widgets/NewPlayerCard/types/newPlayerCard.types";

export interface StateScheme {
    fileUploader: FileUploaderScheme,
    informationView: InformationViewScheme,
    fileStore: FileStoreScheme,
    modal: ModalScheme,
    newPlayer: NewPlayerCardScheme
}