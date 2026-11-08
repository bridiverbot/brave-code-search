import type { BrowserProxy } from './browser_proxy.js';
import type { Line, Paragraph, Word } from './text.mojom-webui.js';
export interface TextResponse {
    contentLanguage: string;
    receivedWords: Word[];
    paragraphNumbers: number[];
    lineNumbers: number[];
    lines: Line[];
    paragraphs: Paragraph[];
}
export declare function isWordRenderable(word: Word): boolean;
export declare function getTextSeparator(word: Word): string;
export declare function translateWords(highlightedText: string, contentLanguage: string, startIndex: number, endIndex: number, browserProxy: BrowserProxy): void;
