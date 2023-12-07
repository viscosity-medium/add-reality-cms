import {StateScheme} from "@/store/stateScheme";

export const getSelectedFiles = (state: StateScheme) => state.fileUploader.selectedFiles;