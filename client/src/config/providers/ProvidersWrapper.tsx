'use client'

import {Provider} from "react-redux";
import {ReactNode} from "react";
import {store} from "@/store/store";

const ProvidersWrapper = ({
    children
}: {children: ReactNode}) => {
    return (
        <Provider
            store={store}
        >
            {
                children
            }
        </Provider>
    );
};

export {ProvidersWrapper};