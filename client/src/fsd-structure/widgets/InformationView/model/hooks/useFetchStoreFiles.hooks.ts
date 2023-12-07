'use client'

import {useAppDispatch} from "@/store/store";
import {useEffect} from "react";
import { fetchDatabaseData } from "../asyncThunks/informationView.asynkThunk";

const useFetchStoreFiles = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(fetchDatabaseData());
        })()
    }, []);

}

export default useFetchStoreFiles;