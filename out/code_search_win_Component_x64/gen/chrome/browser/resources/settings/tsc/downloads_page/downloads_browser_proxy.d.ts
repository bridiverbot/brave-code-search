export interface DownloadsBrowserProxy {
    initializeDownloads(): void;
    selectDownloadLocation(): void;
    resetAutoOpenFileTypes(): void;
}
export declare class DownloadsBrowserProxyImpl implements DownloadsBrowserProxy {
    initializeDownloads(): void;
    selectDownloadLocation(): void;
    resetAutoOpenFileTypes(): void;
    static getInstance(): DownloadsBrowserProxy;
    static setInstance(obj: DownloadsBrowserProxy): void;
}
