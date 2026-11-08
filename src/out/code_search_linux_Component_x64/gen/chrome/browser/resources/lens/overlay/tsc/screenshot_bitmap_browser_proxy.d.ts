type ScreenshotReceivedCallback = (screenshotBitmap: ImageBitmap, isSidePanelOpen: boolean) => void;
type OverlayReshownCallback = (screenshotBitmap: ImageBitmap) => void;
export interface ScreenshotBitmapBrowserProxy {
    fetchScreenshot(callback: ScreenshotReceivedCallback): void;
    addOnOverlayReshownListener(callback: OverlayReshownCallback): number;
    removeOnOverlayReshownListener(id: number): void;
}
export declare class ScreenshotBitmapBrowserProxyImpl implements ScreenshotBitmapBrowserProxy {
    private screenshot?;
    private isSidePanelOpenOnScreenshot;
    private screenshotListenerId;
    private onOverlayReshownListenerId;
    private callbacks;
    private onOverlayReshownCallbacks;
    private nextCallbackId;
    constructor();
    static getInstance(): ScreenshotBitmapBrowserProxy;
    static setInstance(obj: ScreenshotBitmapBrowserProxy): void;
    fetchScreenshot(callback: ScreenshotReceivedCallback): void;
    addOnOverlayReshownListener(callback: OverlayReshownCallback): number;
    removeOnOverlayReshownListener(id: number): void;
    private parseScreenshotData;
    private onOverlayReshown;
    private screenshotDataReceived;
}
export {};
