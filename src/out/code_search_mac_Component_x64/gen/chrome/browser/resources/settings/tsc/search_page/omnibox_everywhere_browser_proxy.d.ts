export interface OmniboxEverywhereBrowserProxy {
    getOmniboxEverywhereShortcut(): Promise<string>;
    setOmniboxEverywhereShortcut(shortcut: string): Promise<boolean>;
    setOmniboxEverywhereShortcutSuspensionState(shouldSuspend: boolean): void;
}
export declare class OmniboxEverywhereBrowserProxyImpl implements OmniboxEverywhereBrowserProxy {
    getOmniboxEverywhereShortcut(): Promise<string>;
    setOmniboxEverywhereShortcut(shortcut: string): Promise<boolean>;
    setOmniboxEverywhereShortcutSuspensionState(shouldSuspend: boolean): void;
    static getInstance(): OmniboxEverywhereBrowserProxy;
    static setInstance(obj: OmniboxEverywhereBrowserProxy): void;
}
