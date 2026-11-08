import type { Segment } from './read_aloud_types.js';
export declare class ReadAloudHighlighter {
    private previousGranularities_;
    private currentGranularity_;
    private wordBoundaries_;
    private allowAutoScroll_;
    private voiceLanguageController_;
    private readAloudModel_;
    private audioBrowserProxy_;
    hasCurrentGranularity(): boolean;
    updateAutoScroll(): void;
    highlightCurrentGranularity(sentenceSegments: Segment[], scrollIntoView: boolean, shouldUpdateSentenceHighlight: boolean): Segment[] | null;
    onWillMoveToNextGranularity(segments: Segment[]): void;
    onWillMoveToPreviousGranularity(): void;
    restorePreviousHighlighting(): void;
    clearHighlightFormatting(): void;
    reset(): void;
    private getEffectiveHighlightingGranularity_;
    private highlightCurrentWordOrPhrase_;
    private highlightCurrentSentence_;
    private addHighlightToCurrentGranularity_;
    private scrollHighlightIntoView_;
    static getInstance(): ReadAloudHighlighter;
    static setInstance(obj: ReadAloudHighlighter): void;
}
