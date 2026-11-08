import '/strings.m.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { DomRepeat } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { GestureEvent } from './selection_utils.js';
import type { TextCopyCallback, TextLayerBase } from './text_layer_base.js';
export interface TextLayerElement {
    $: {
        textRenderCanvas: HTMLCanvasElement;
        translateContainer: DomRepeat;
        wordsContainer: DomRepeat;
    };
}
export declare class TextLayerElement extends PolymerElement implements TextLayerBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        currentTranslateLanguage: StringConstructor;
        renderedWords: {
            type: ArrayConstructor;
            value: () => never[];
        };
        shouldRenderTranslateWords: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
        };
        highlightedLines: ArrayConstructor;
        renderedTranslateLines: ArrayConstructor;
        selectionStartIndex: {
            type: NumberConstructor;
            value: number;
        };
        selectionEndIndex: {
            type: NumberConstructor;
            value: number;
        };
        isSelectingText: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        debugMode: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        selectionOverlayRect: {
            type: ObjectConstructor;
            observer: string;
        };
    };
    private context;
    private renderedWords;
    private shouldRenderTranslateWords;
    private currentTranslateLanguage;
    private renderedTranslateWords;
    private renderedTranslateLines;
    private renderedTranslateParagraphs;
    private detectedWordToTranslateIndex;
    private highlightedLines;
    private selectionStartIndex;
    private selectionEndIndex;
    private debugMode;
    private isSelectingText;
    private selectionOverlayRect;
    private lineNumbers;
    private paragraphNumbers;
    private translatedLineNumbers;
    private translatedParagraphNumbers;
    private lines;
    private paragraphs;
    private contentLanguage;
    private eventTracker_;
    private listenerIds;
    private selectTextTriggerThreshold;
    private textReceivedTimeout;
    private textReceivedTimeoutID;
    private textReceivedTimeoutElapsedOrCleared;
    private browserProxy;
    ready(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handlePointerEnter;
    private handlePointerLeave;
    private detectTextInRegion;
    handleGestureStart(event: GestureEvent): boolean;
    handleRightClick(event: PointerEvent): boolean;
    handleGestureDrag(event: GestureEvent): void;
    handleGestureEnd(): void;
    private handleSelectionOverlayRectResize;
    private computeTranslatedWordBoundingBoxes;
    private sendSelectedText;
    selectAndSendWords(selectionStartIndex: number, selectionEndIndex: number): void;
    selectAndTranslateWords(selectionStartIndex: number, selectionEndIndex: number): void;
    cancelGesture(): void;
    onSelectionStart(): void;
    onSelectionFinish(): void;
    private unselectWords;
    private selectWords;
    private onTextReceived;
    private calculateFontSizePixels;
    private getContainingRect;
    private getHighlightedLines;
    private calculateHighlightedLine;
    private isTopToBottomWritingDirection;
    private getHighlightedText;
    private getFormulas;
    /** @return The CSS styles string for the given word. */
    private getWordStyle;
    private getTranslatedLineStyle;
    private getBackgroundImageDataStyle;
    private getOutlineStyleForLine;
    private getBackgroundColorForLine;
    private isTranslatedLineVertical;
    private getWritingModeForLine;
    private getLineAlignment;
    private resetCanvasPixelRatioIfNeeded;
    private getBlobUrlFromImageData;
    /** @return The CSS styles string for the given highlighted line. */
    private getHighlightedLineStyle;
    /**
     * @return Returns the index in renderedWords of the word at the given point.
     *     Returns null if no word is at the given point.
     */
    private wordIndexFromPoint;
    /**
     *
     * @returns Returns the index in renderedTranslateWords of the word at the
     *     given point. Returns null if no word is at the given point.
     */
    private translatedWordIndexFromPoint;
    private getTranslateLanguageDirection;
    onCopyDetectedText(_startIndex: number, _endIndex: number, _callbackFn: TextCopyCallback): void;
    getElementForTesting(): Element;
}
declare global {
    interface HTMLElementTagNameMap {
        'lens-text-layer': TextLayerElement;
    }
}
