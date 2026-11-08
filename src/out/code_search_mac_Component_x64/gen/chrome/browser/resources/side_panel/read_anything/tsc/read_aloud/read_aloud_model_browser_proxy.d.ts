import type { ReadAloudNode, Segment } from './read_aloud_types.js';
export interface ReadAloudModelBrowserProxy {
    getHighlightForCurrentSegmentIndex(index: number, phrases: boolean): Segment[];
    getCurrentTextSegments(): Segment[];
    getCurrentTextContent(): string;
    getAccessibleText(text: string, maxSpeechLength: number): string;
    resetSpeechToBeginning(): void;
    moveSpeechForward(): void;
    moveSpeechBackwards(): void;
    isInitialized(): boolean;
    init(context: ReadAloudNode): void;
    resetModel?(): void;
    onNodeWillBeDeleted?(node: Node): void;
}
export declare function getReadAloudModel(): ReadAloudModelBrowserProxy;
export declare function setInstance(obj: ReadAloudModelBrowserProxy | null): void;
