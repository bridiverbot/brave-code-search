import type { ErrorReasonTypes, ErrorWithReason } from '../glic_api/glic_api.js';
export declare interface RgbaImage {
    dataRGBA: ArrayBuffer;
    width: number;
    height: number;
    alphaType: ImageAlphaType;
    colorType: ImageColorType;
}
export declare enum ImageAlphaType {
    UNPREMUL = 0,
    PREMUL = 1
}
export declare enum ImageColorType {
    BGRA = 0,
    RGBA = 1
}
export declare class ErrorWithReasonImpl<T extends keyof ErrorReasonTypes> extends Error implements ErrorWithReason<T> {
    reasonType: T;
    reason: ErrorReasonTypes[T];
    constructor(reasonType: T, reason: ErrorReasonTypes[T], message?: string);
}
