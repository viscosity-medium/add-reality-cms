'use client'

import {useAppDispatch, useAppSelector} from "@/store/store";
import {useEffect} from "react";
import { fetchDatabaseData } from "../asyncThunks/informationView.asynkThunk";
import {informationViewActions} from "@/fsd-structure/widgets/InformationView/model/informationView.slice";
import {updateStoreFiles} from "@/fsd-structure/widgets/InformationView/model/asyncThunks/updateStoreFiles.asyncThunk";
import {getStoreFiles} from "@/fsd-structure/widgets/InformationView/model/informationView.selectors";

const useFetchStoreFiles = () => {

    const dispatch = useAppDispatch();
    const storeFiles = useAppSelector(getStoreFiles);

    const onUpdateStoreFiles = () => {
        dispatch(updateStoreFiles(storeFiles));
    }

    return {
        onUpdateStoreFiles
    }

}

export default useFetchStoreFiles;