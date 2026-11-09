export interface IconLoader {
    loadIcon(imageEl: HTMLImageElement, filePath: string): Promise<boolean>;
}
export declare class IconLoaderImpl implements IconLoader {
    private iconResolvers_;
    private listeningImages_;
    constructor();
    /**
     * @return Whether or not the icon loaded successfully.
     */
    loadIcon(imageEl: HTMLImageElement, filePath: string): Promise<boolean>;
    private finishedLoading_;
    static getInstance(): IconLoader;
    static setInstance(obj: IconLoader): void;
}
