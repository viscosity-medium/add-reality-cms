import {PaddingBottom, PaddingLeft, PaddingRight, PaddingTop} from "@/fsd-structure/shared/types/paddings";

export enum MarginsTopSet {
    //top
    mt4 = mt4,
    mt8 = mt8,
    mt12 = mt12,
    mt16 = mt16,
    mt20 = mt20,
    mt24 = mt24,
    mt28 = mt28,
    mt32 = mt32,
    mt36 = mt36,
    mt40 = mt40,
}

export enum MarginsBottomSet {
    // bottom
    mb4 = mb4,
    mb8 = mb8,
    mb12 = mb12,
    mb16 = mb16,
    mb20 = mb20,
    mb24 = mb24,
    mb28 = mb28,
    mb32 = mb32,
    mb36 = mb36,
    mb40 = mb40,
}

export enum MarginsLeftSet {
    // left
    ml4 = ml4,
    ml8 = ml8,
    ml12 = ml12,
    ml16 = ml16,
    ml20 = ml20,
    ml24 = ml24,
    ml28 = ml28,
    ml32 = ml32,
    ml36 = ml36,
    ml40 = ml40,
}

export enum MarginsRightSet {
    // right
    mr4 = mr4,
    mr8 = mr8,
    mr12 = mr12,
    mr16 = mr16,
    mr20 = mr20,
    mr24 = mr24,
    mr28 = mr28,
    mr32 = mr32,
    mr36 = mr36,
    mr40 = mr40,
}

export enum MarginsFullSet {
    // full dimensions
    m4 = m4,
    m8 = m8,
    m12 = m12,
    m16 = m16,
    m20 = m20,
    m24 = m24,
    m28 = m28,
    m32 = m32,
    m36 = m36,
    m40 = m40,
}

export type MarginTop = keyof typeof MarginsTopSet;
export type MarginBottom = keyof typeof MarginsBottomSet;
export type MarginLeft = keyof typeof MarginsLeftSet;
export type MarginRight = keyof typeof MarginsRightSet;
export type Margin = keyof typeof MarginsFullSet;

export interface Margins {
    marginTop?: MarginTop
    marginBottom?: MarginBottom
    marginLeft?: MarginLeft
    marginRight?: MarginRight
    margin?: Margin
}