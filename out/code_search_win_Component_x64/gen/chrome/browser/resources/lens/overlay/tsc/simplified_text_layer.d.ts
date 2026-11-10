import '/strings.m.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { GestureEvent } from './selection_utils.js';
import type { HighlightedLine } from './text_highlights.js';
import type { TextCopyCallback, TextLayerBase } from './text_layer_base.js';
export declare class SimplifiedTextLayerElement extends CrLitElement implements TextLayerBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enableHighlights: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasActionedText: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hideHighlightedLines: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        highlightedLines: {
            type: ArrayConstructor;
        };
    };
    protected accessor hasActionedText: boolean;
    protected accessor hideHighlightedLines: boolean;
    protected accessor highlightedLines: HighlightedLine[];
    protected accessor enableHighlights: boolean;
    private fullTextResponse;
    private regionTextResponse;
    private eventTracker_;
    private selectionOverlayRect;
    private listenerIds;
    private isSelectingRegion;
    private shouldShowContextMenuIfDetectsText;
    private textReceivedTimeout;
    private copyTextTimeout;
    private copyTextFunction;
    private translateTimeout;
    private selectedRegion;
    private browserProxy;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleRightClick(_event: PointerEvent): boolean;
    handleGestureStart(_event: GestureEvent): boolean;
    handleGestureDrag(_event: GestureEvent): void;
    handleGestureEnd(): void;
    cancelGesture(): void;
    onSelectionStart(): void;
    onSelectionFinish(): void;
    selectAndSendWords(_selectionStartIndex: number, _selectionEndIndex: number): void;
    selectAndTranslateWords(startIndex: number, endIndex: number): void;
    disableHighlights(): void;
    private onOverlayReshown;
    private onClearRegionSelection;
    private setTextReceivedTimeout;
    private detectTextInRegion;
    private onRegionTextReceived;
    private onTextReceived;
    onCopyDetectedText(startIndex: number, endIndex: number, callback: TextCopyCallback): void;
    private getRegionTextFromFullImage;
    private getRegionText;
    private setSelection;
    /** @return The CSS styles string for the given highlighted line. */
    protected getHighlightedLineStyle(line: HighlightedLine): string;
    private clearTextTimeouts;
    private tryRenderInjectedImageHighlights;
    getElementForTesting(): Element;
    getHasActionedTextForTesting(): boolean;
    setSelectionOverlayRectForTesting(rect: DOMRect): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'lens-simplified-text-layer': SimplifiedTextLayerElement;
    }
}
