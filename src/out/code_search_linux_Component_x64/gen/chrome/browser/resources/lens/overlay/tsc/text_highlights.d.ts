import type { TextResponse } from './text_rendering.js';
export interface HighlightedLine {
    height: number;
    left: number;
    top: number;
    width: number;
    rotation: number;
}
export declare function createHighlightedLines(text: TextResponse, startIndex: number, endIndex: number): HighlightedLine[];
