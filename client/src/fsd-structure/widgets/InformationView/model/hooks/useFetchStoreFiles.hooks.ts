'use client'

import {useAppDispatch} from "@/store/store";
import {useEffect} from "react";
import { fetchStoreFiles } from "../asyncThunks/informationView.asynkThunk";

const useFetchStoreFiles = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(fetchStoreFiles());
        })()
    }, []);

}

export default useFetchStoreFiles;