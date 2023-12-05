import {StateScheme} from "@/store/store";

export const getSelectedFiles = (state: StateScheme) => state.fileUploader.selectedFiles;