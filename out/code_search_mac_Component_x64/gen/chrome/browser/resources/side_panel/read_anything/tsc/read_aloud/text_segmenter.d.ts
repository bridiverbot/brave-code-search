import type { Sentence } from './read_aloud_types.js';
export declare class TextSegmenter {
    private audioBrowserProxy_;
    private wordSegmenter_;
    private sentenceSegmenter_;
    constructor();
    updateLanguage(): void;
    getWordCount(text: string): number;
    getNextWordEnd(text: string): number;
    getSentences(text: string): Sentence[];
    private processSentences;
    getAccessibleBoundary(text: string, maxTextLength: number): number;
    private getSentenceEnd;
    static getInstance(): TextSegmenter;
    static setInstance(obj: TextSegmenter): void;
}
