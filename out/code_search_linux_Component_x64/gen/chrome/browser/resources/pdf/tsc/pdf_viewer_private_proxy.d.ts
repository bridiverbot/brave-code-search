import type { ChromeEvent } from '/tools/typescript/definitions/chrome_event.js';
type SaveRequestType = chrome.pdfViewerPrivate.SaveRequestType;
type SaveToDriveProgress = chrome.pdfViewerPrivate.SaveToDriveProgress;
type GetTextInfoResult = chrome.pdfViewerPrivate.GetTextInfoResult;
export interface PdfViewerPrivateProxy {
    getTextInfo(textarea: HTMLTextAreaElement, knownFontIds: number[]): Promise<GetTextInfoResult>;
    onSaveToDriveProgress: ChromeEvent<(url: string, progress: SaveToDriveProgress) => void>;
    saveToDrive(saveRequestType?: SaveRequestType): void;
    glicSummarize(): void;
    setPdfDocumentTitle(title: string): void;
}
export declare class PdfViewerPrivateProxyImpl implements PdfViewerPrivateProxy {
    getTextInfo(textarea: HTMLTextAreaElement, knownFontIds: number[]): Promise<GetTextInfoResult>;
    onSaveToDriveProgress: ChromeEvent<(url: string, progress: SaveToDriveProgress) => void>;
    saveToDrive(saveRequestType?: SaveRequestType): void;
    glicSummarize(): void;
    setPdfDocumentTitle(title: string): void;
    static getInstance(): PdfViewerPrivateProxy;
    static setInstance(obj: PdfViewerPrivateProxy): void;
}
export {};
