import type { GestureEvent } from './selection_utils.js';
export type TextCopyCallback = (textStartIndex: number, textEndIndex: number, text: string) => void;
export interface TextLayerBase {
    handleRightClick(event: PointerEvent): boolean;
    handleGestureStart(event: GestureEvent): boolean;
    handleGestureDrag(event: GestureEvent): void;
    handleGestureEnd(): void;
    cancelGesture(): void;
    onSelectionStart(): void;
    onSelectionFinish(): void;
    onCopyDetectedText(startIndex: number, endIndex: number, callbackFn: TextCopyCallback): void;
    selectAndSendWords(selectionStartIndex: number, selectionEndIndex: number): void;
    selectAndTranslateWords(selectionStartIndex: number, selectionEndIndex: number): void;
    getElementForTesting(): Element;
}
