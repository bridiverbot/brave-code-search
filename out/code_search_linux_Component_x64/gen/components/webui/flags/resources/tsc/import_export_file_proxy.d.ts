export interface ImportExportFileProxy {
    downloadFile(a: HTMLAnchorElement): void;
    selectFile(input: HTMLInputElement): void;
    copyToClipboard(text: string): Promise<void>;
    readFromClipboard(): Promise<string>;
}
export declare class ImportExportFileProxyImpl implements ImportExportFileProxy {
    downloadFile(a: HTMLAnchorElement): void;
    selectFile(input: HTMLInputElement): void;
    copyToClipboard(text: string): Promise<void>;
    readFromClipboard(): Promise<string>;
    static getInstance(): ImportExportFileProxy;
    static setInstance(obj: ImportExportFileProxy): void;
}
