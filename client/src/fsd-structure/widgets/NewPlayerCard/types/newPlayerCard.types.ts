import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";

export interface NewPlayerCardScheme {
    name: string
    id: string
    xml: string
    content: StoreFileProps[]
}