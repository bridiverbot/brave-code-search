/** @interface */
export declare class SettingsPinShortcutPageBrowserProxy {
    checkShortcutPinState(): void;
    pinShortcut(): void;
}
/**
 * @implements {settings.SettingsPinShortcutPageBrowserProxy}
 */
export declare class SettingsPinShortcutPageBrowserProxyImpl {
    /** @override */
    checkShortcutPinState(): void;
    pinShortcut(): void;
    static getInstance(): SettingsPinShortcutPageBrowserProxy;
}
