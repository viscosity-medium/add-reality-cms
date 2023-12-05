
export enum PaddingsTopSet {
    //top
    pt4 = pt4,
    pt8 = pt8,
    pt12 = pt12,
    pt16 = pt16,
    pt20 = pt20,
    pt24 = pt24,
    pt28 = pt28,
    pt32 = pt32,
    pt36 = pt36,
    pt40 = pt40,
}

export enum PaddingsBottomSet {
    // bottom
    pb4 = pb4,
    pb8 = pb8,
    pb12 = pb12,
    pb16 = pb16,
    pb20 = pb20,
    pb24 = pb24,
    pb28 = pb28,
    pb32 = pb32,
    pb36 = pb36,
    pb40 = pb40,
}

export enum PaddingsLeftSet {
    // left
    pl4 = pl4,
    pl8 = pl8,
    pl12 = pl12,
    pl16 = pl16,
    pl20 = pl20,
    pl24 = pl24,
    pl28 = pl28,
    pl32 = pl32,
    pl36 = pl36,
    pl40 = pl40,
}

export enum PaddingsRightSet {
    // right
    pr4 = pr4,
    pr8 = pr8,
    pr12 = pr12,
    pr16 = pr16,
    pr20 = pr20,
    pr24 = pr24,
    pr28 = pr28,
    pr32 = pr32,
    pr36 = pr36,
    pr40 = pr40,
}

export enum PaddingsFullSet {
    // full dimensions
    p4 = p4,
    p8 = p8,
    p12 = p12,
    p16 = p16,
    p20 = p20,
    p24 = p24,
    p28 = p28,
    p32 = p32,
    p36 = p36,
    p40 = p40,
}

export type PaddingTop = keyof typeof PaddingsTopSet;
export type PaddingBottom = keyof typeof PaddingsBottomSet;
export type PaddingLeft = keyof typeof PaddingsLeftSet;
export type PaddingRight = keyof typeof PaddingsRightSet;
export type Padding = keyof typeof PaddingsFullSet;

export interface Paddings {
    paddingTop?: PaddingTop
    paddingBottom?: PaddingBottom
    paddingLeft?: PaddingLeft
    paddingRight?: PaddingRight
    padding?: Padding
}