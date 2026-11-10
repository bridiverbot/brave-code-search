import type { Color } from './constants.js';
import { TextStyle } from './constants.js';
import type { LayoutOptions, ViewportRect } from './viewport.js';
export interface DocumentDimensionsMessageData {
    type: string;
    height: number;
    width: number;
    pageDimensions: ViewportRect[];
    layoutOptions?: LayoutOptions;
}
export interface DestinationMessageData {
    type: string;
    page: number;
    x: number;
    y: number;
    zoom: number;
}
export interface RequiredSaveResult {
    fileName: string;
    dataToSave: ArrayBuffer;
}
/**
 * Determines if the event has the platform-equivalent of the Windows ctrl key
 * modifier.
 * @return Whether the event has the ctrl key modifier.
 */
export declare function hasCtrlModifier(e: KeyboardEvent): boolean;
/**
 * Determines if the event has the platform-equivalent of the Windows ctrl key
 * modifier, and only that modifier.
 * @return Whether the event only has the ctrl key modifier.
 */
export declare function hasCtrlModifierOnly(e: KeyboardEvent): boolean;
/**
 * Returns the `TextStyle` corresponding to the keyboard shortcut event `e`, or
 * `null` if `e` does not match any text style shortcut.
 */
export declare function getTextStyleForShortcut(e: KeyboardEvent): TextStyle | null;
/**
 * Whether keydown events should currently be ignored. Events are ignored when
 * an editable element has focus, to allow for proper editing controls.
 * @return Whether keydown events should be ignored.
 */
export declare function shouldIgnoreKeyEvents(): boolean;
/**
 * Blends `colorValue` with highlighter opacity on a white background.
 * @param colorValue The red, green, or blue value of a color.
 * @returns The new respective red, green, or blue value of a color that has
 * been transformed using the highlighter transparency on a white background.
 */
export declare function blendHighlighterColorValue(colorValue: number): number;
/**
 * @param color The `Color` in RGB values.
 * @returns A hex-coded color string, formatted as '#ffffff'.
 */
export declare function colorToHex(color: Color): string;
/**
 * @param hex A hex-coded color string, formatted as '#ffffff'.
 * @returns The `Color` in RGB values.
 */
export declare function hexToColor(hex: string): Color;
/**
 * @returns Whether `color1` and `color2` have the same RGB values or not.
 */
export declare function colorsEqual(color1: Color, color2: Color): boolean;
export declare function verifyPdfHeader(buffer: ArrayBuffer): void;
export declare function getSaveToDriveManageStorageUrl(accountEmail: string, accountIsManaged: boolean): string;
export declare function getSaveToDriveOpenInDriveUrl(accountEmail: string, driveItemId: string): string;
