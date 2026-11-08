export interface AppearanceBrowserProxy {
    getDefaultZoom(): Promise<number>;
    getThemeInfo(themeId: string): Promise<chrome.management.ExtensionInfo>;
    /** @return Whether the current profile is a child account. */
    isChildAccount(): boolean;
    openCustomizeChrome(): void;
    openCustomizeChromeToolbarSection(): void;
    recordGlassFrameEnabledChanged(enabled: boolean): void;
    recordHoverCardImagesEnabledChanged(enabled: boolean): void;
    recordHoverCardMemoryUsageEnabledChanged(enabled: boolean): void;
    recordVerticalTabStripModeChanged(enabled: boolean): void;
    resetPinnedToolbarActions(): void;
    useDefaultTheme(): void;
    validateStartupPage(url: string): Promise<boolean>;
    pinnedToolbarActionsAreDefault(): Promise<boolean>;
}
export declare class AppearanceBrowserProxyImpl implements AppearanceBrowserProxy {
    getDefaultZoom(): Promise<number>;
    getThemeInfo(themeId: string): Promise<chrome.management.ExtensionInfo>;
    isChildAccount(): boolean;
    openCustomizeChrome(): void;
    openCustomizeChromeToolbarSection(): void;
    recordGlassFrameEnabledChanged(enabled: boolean): void;
    recordHoverCardImagesEnabledChanged(enabled: boolean): void;
    recordHoverCardMemoryUsageEnabledChanged(enabled: boolean): void;
    recordVerticalTabStripModeChanged(enabled: boolean): void;
    resetPinnedToolbarActions(): void;
    useDefaultTheme(): void;
    validateStartupPage(url: string): Promise<boolean>;
    pinnedToolbarActionsAreDefault(): Promise<boolean>;
    static getInstance(): AppearanceBrowserProxy;
    static setInstance(obj: AppearanceBrowserProxy): void;
}
