import type { ReadAloudModelBrowserProxy } from './read_aloud_model_browser_proxy.js';
import { ReadAloudNode } from './read_aloud_types.js';
import type { Segment } from './read_aloud_types.js';
export declare class V8ModelImpl implements ReadAloudModelBrowserProxy {
    getHighlightForCurrentSegmentIndex(index: number, phrases: boolean): Segment[];
    getCurrentTextSegments(): Segment[];
    getCurrentTextContent(): string;
    resetSpeechToBeginning(): void;
    getAccessibleText(text: string, maxSpeechLength: number): string;
    isInitialized(): boolean;
    init(textNode: ReadAloudNode): void;
    moveSpeechForward(): void;
    moveSpeechBackwards(): void;
}
