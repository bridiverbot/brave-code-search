export interface AccessibilityBrowserProxy {
    openTrackpadGesturesSettings(): void;
    recordOverscrollHistoryNavigationChanged(enabled: boolean): void;
    getScreenReaderState(): Promise<boolean>;
}
export declare class AccessibilityBrowserProxyImpl implements AccessibilityBrowserProxy {
    openTrackpadGesturesSettings(): void;
    recordOverscrollHistoryNavigationChanged(enabled: boolean): void;
    getScreenReaderState(): Promise<boolean>;
    static getInstance(): AccessibilityBrowserProxy;
    static setInstance(obj: AccessibilityBrowserProxy): void;
}
