/**
 * Utility which gives a best effort guess on whether a supplied image file's
 * bytes represent an image with transparency.
 */
export declare function checkTransparency(buffer: ArrayBuffer): boolean;
/**
 * Whether a DataView represents a PNG image.
 */
export declare function isPNG(view: DataView): boolean;
/**
 * Whether a DataView represents a WebP image.
 */
export declare function isWebP(view: DataView): boolean;
/**
 * Whether a DataView represents a BMP image.
 */
export declare function isBMP(view: DataView): boolean;
