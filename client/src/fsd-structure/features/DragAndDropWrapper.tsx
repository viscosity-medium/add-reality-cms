// import update from 'immutability-helper'
// import type { FC } from 'react'
// import { useCallback, useState } from 'react'
//
// import { Card } from './Card'
// import {useAppDispatch, useAppSelector} from "@/store/store";
// import {getPlayerContent, getStoreFiles} from "@/fsd-structure/widgets/InformationView/model/informationView.selectors";
// import {StoreFilesList} from "@/fsd-structure/widgets";
// import {StoreFileProps} from "@/fsd-structure/widgets/StoreFilesList/model/storeFilesList.slice";
// import {informationViewActions} from "@/fsd-structure/widgets/InformationView/model/informationView.slice";
// import {FilePreviewListItem} from "@/fsd-structure/shared";
//
// const style = {
//     width: 400,
// }
//
// interface DragAndDropProps {}
//
// export const DragAndDropWrapper: FC<StoreFilesList> = ({
//     className,
//     sourceType,
//     onChooseAction,
//     isMutable
// }) => {
//     {
//         const dispatch = useAppDispatch();
//         const previewListItems = useAppSelector(getStoreFiles);
//         const currentPlayerContent = useAppSelector(getPlayerContent);
//         const sourceArray = sourceType === "store" ? previewListItems : currentPlayerContent;
//
//         const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
//             if(sourceType === "store"){
//                 dispatch(informationViewActions.setStoreFiles(update(previewListItems, {
//                     $splice: [
//                         [dragIndex, 1],
//                         [hoverIndex, 0, previewListItems[dragIndex] as  StoreFileProps],
//                     ],
//                 })));
//             } else {
//                 dispatch(informationViewActions.setStoreFiles(update(previewListItems, {
//                     $splice: [
//                         [dragIndex, 1],
//                         [hoverIndex, 0, previewListItems[dragIndex] as  StoreFileProps],
//                     ],
//                 })));
//             }
//
//         }, [])
//
//         const renderCard = useCallback(
//             (card:  => {
//                 return (
//                     <Card
//                         key={card.id}
//                         index={index}
//                         id={card.id}
//                         text={card.text}
//                         moveCard={moveItem}
//                         ListItemComponent={FilePreviewListItem}
//                     />
//                 )
//             },
//             [],
//         )
//
//
//         return (
//             <>
//                 <div style={style}>{sourceArray.map((card, i) => renderCard(card, i))}</div>
//             </>
//         )
//     }
// }
