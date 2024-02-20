'use client';

import {CloseButton, Dialog, Div, joinClassnames} from "@/fsd-structure/shared";
import {FC, ReactNode} from "react";
import {useAppSelector} from "@/store/store";
import {getModalIsShown} from "@/fsd-structure/widgets/Modal/model/modal.selectors";
import {useChangeModalVisibility} from "@/fsd-structure/widgets/Modal/model/modal.hooks";
import { NewPlayerCard } from "@/fsd-structure/widgets";
import cls from "./modal.module.scss";

interface ModalProps {
    children?: ReactNode
}

const Modal: FC<ModalProps> = ({
    children
}) => {

    const modalIsShown = useAppSelector(getModalIsShown);
    const classNames = joinClassnames([cls.modalWrapper, !modalIsShown ? cls.isInvisible: ""]);
    const { setModalInvisible } = useChangeModalVisibility();

    return (
        <Div
            className={classNames}
            onClick={(event) => {
                if(event.currentTarget === event.target){
                    setModalInvisible();
                }
            }}
        >
            <Dialog
                className={cls.dialog}
            >
                <CloseButton
                    size={"normal"}
                    className={cls.deleteButton}
                    onClick={() => {
                        setModalInvisible();
                    }}
                />
                <NewPlayerCard/>
                {/*{*/}
                {/*    children*/}
                {/*}*/}
            </Dialog>
        </Div>
    );

};

export default Modal;