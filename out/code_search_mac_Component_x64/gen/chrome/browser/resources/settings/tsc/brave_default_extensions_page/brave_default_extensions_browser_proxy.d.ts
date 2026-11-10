export type ExtensionV2 = {
    id: string;
    sources: string;
    name: string;
    description: string;
    installed: boolean;
    enabled: boolean;
};
export interface BraveDefaultExtensionsBrowserProxy {
    setWidevineEnabled(value: boolean): void;
    setMediaRouterEnabled(value: boolean): void;
    isWidevineEnabled(): Promise<boolean>;
    getRestartNeeded(): Promise<boolean>;
    wasSignInEnabledAtStartup(): boolean;
    isMediaRouterEnabled(): boolean;
    getExtensionsManifestV2(): Promise<ExtensionV2[]>;
    enableExtensionManifestV2(id: string, enabled: boolean): Promise<boolean>;
    removeExtensionManifestV2(id: string): Promise<boolean>;
}
export declare class BraveDefaultExtensionsBrowserProxyImpl implements BraveDefaultExtensionsBrowserProxy {
    setMediaRouterEnabled(value: boolean): void;
    setWidevineEnabled(value: boolean): void;
    isWidevineEnabled(): Promise<boolean>;
    getRestartNeeded(): Promise<boolean>;
    wasSignInEnabledAtStartup(): boolean;
    isMediaRouterEnabled(): boolean;
    getExtensionsManifestV2(): Promise<ExtensionV2[]>;
    enableExtensionManifestV2(id: string, enabled: boolean): Promise<boolean>;
    removeExtensionManifestV2(id: string): Promise<boolean>;
    static getInstance(): BraveDefaultExtensionsBrowserProxy;
}
