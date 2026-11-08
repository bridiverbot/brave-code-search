import { NodeStore } from '../content/node_store.js';
import type { ReadAloudNode, Segment } from './read_aloud_types.js';
export declare const previousReadHighlightClass = "previous-read-highlight";
export declare const currentReadHighlightClass = "current-read-highlight";
export declare const PARENT_OF_HIGHLIGHT_CLASS = "parent-of-highlight";
export declare class MovementGranularity {
    private highlights_;
    addHighlight(highlight: Highlight): void;
    isEmpty(): boolean;
    onWillHighlightWordOrPhrase(segmentsToHighlight: Segment[]): void;
    setPrevious(): void;
    clearFormatting(): void;
    isVisible(): boolean;
    scrollIntoView(): void;
    private getCurrentHighlights_;
    private getBounds_;
    private getHighlightElements_;
}
export declare abstract class Highlight {
    protected readonly highlightSpans_: HTMLElement[];
    private readonly segments_;
    protected nodeStore_: NodeStore;
    constructor(segments: Segment[]);
    protected highlightNode_(node: ReadAloudNode, start: number, length: number, skipNonWords: boolean): void;
    protected highlightCurrentText_(highlightStart: number, highlightEnd: number, currentNode: HTMLElement, previousHighlightOnly?: boolean): HTMLElement;
    getSegmentIndexWithSameNode(segmentToGet?: Segment): number;
    setPrevious(): void;
    clearFormatting(): void;
    isEmpty(): boolean;
    getElements(): HTMLElement[];
    getSegments(): Segment[];
}
export declare class SentenceHighlight extends Highlight {
    constructor(segments: Segment[]);
}
export declare class WordHighlight extends Highlight {
    constructor(segments: Segment[], ttsWordLength: number);
}
export declare class PhraseHighlight extends Highlight {
    constructor(segments: Segment[]);
}
