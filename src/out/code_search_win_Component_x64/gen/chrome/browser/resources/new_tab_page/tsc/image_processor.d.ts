export declare const SUPPORTED_FILE_TYPES: string[];
export declare const MAX_C2PA_SEARCH_BYTES: number;
export declare const C2PA_MARKER = "urn:c2pa:";
export declare const MAX_C2PA_PIXELS = 3000000;
export declare const SUPPORTED_C2PA_FILE_TYPES: string[];
export declare function hasC2paMetadata(file: File): Promise<boolean>;
export interface ProcessedFile {
    processedFile: File;
    imageWidth?: number;
    imageHeight?: number;
}
export declare function processFile(file: File, maxLongestEdgePixels?: number): Promise<ProcessedFile>;
