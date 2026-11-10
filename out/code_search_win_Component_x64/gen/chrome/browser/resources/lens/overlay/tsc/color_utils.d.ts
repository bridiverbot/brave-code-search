export declare function getShaderLayerColorHexes(): string[];
export declare function getShaderLayerColorRgbas(): string[];
export interface GlifColorHexObject {
    blue: string;
    red: string;
    yellow: string;
    green: string;
}
export declare const GLIF_HEX_COLORS: GlifColorHexObject;
export declare function modifyRgbaTransparency(rgba: string, alpha: number): string;
