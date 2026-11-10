import type { TextBoxRect } from './constants.js';
import type { Viewport } from './viewport.js';
/**
 * Converts `rect` from `oldRotations` clockwise rotations to `newRotations`
 * clockwise rotations. `newPageWidth` should be the page width in
 * `newRotations` coordinates, and `newPageHeight` should be the page height in
 * `newRotations` coordinates.
 */
export declare function convertRotatedCoordinates(rect: TextBoxRect, oldRotations: number, newRotations: number, newPageWidth: number, newPageHeight: number): TextBoxRect;
/**
 * Converts `pageRect` on page `pageIndex` to screen coordinates.
 */
export declare function pageToScreenCoordinates(pageIndex: number, pageRect: TextBoxRect, viewport: Viewport): TextBoxRect;
/**
 * Converts `screenRect` on page `pageIndex` to page coordinates.
 */
export declare function screenToPageCoordinates(pageIndex: number, screenRect: TextBoxRect, viewport: Viewport): TextBoxRect;
