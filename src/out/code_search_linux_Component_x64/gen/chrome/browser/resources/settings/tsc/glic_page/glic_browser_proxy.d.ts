/**
 * Information for a login permission for a given site.
 */
export interface LoginPermission {
    signonRealm: string;
    username: string;
    displayName: string;
    faviconUrl: string;
}
export interface GlicBrowserProxy {
    setGlicOsLauncherEnabled(enabled: boolean): void;
    getGlicShortcut(): Promise<string>;
    setGlicShortcut(shortcut: string): Promise<void>;
    getGlicFocusToggleShortcut(): Promise<string>;
    setGlicFocusToggleShortcut(shortcut: string): Promise<void>;
    setShortcutSuspensionState(isSuspended: boolean): void;
    getDisallowedByAdmin(): Promise<boolean>;
    /**
     * Get the list of actor login permissions.
     */
    getActorLoginPermissions(): Promise<LoginPermission[]>;
    /**
     * Revoke actor login permission for a given signonRealm.
     * @param signonRealm The signon realm for which to revoke the permission.
     */
    revokeActorLoginPermission(signonRealm: string, username: string): Promise<boolean>;
    getGlicSelectionShortcut(): Promise<string>;
    setGlicSelectionShortcut(shortcut: string): Promise<void>;
    getWebActuationToggleVisibility(): Promise<boolean>;
    getWebActuationEnabled(): Promise<boolean>;
    setWebActuationEnabled(enabled: boolean): void;
    getExperimentalTriggeringEnabled(): Promise<boolean>;
    setExperimentalTriggeringEnabled(enabled: boolean): void;
    startObservingActorLoginPermissions(): void;
    stopObservingActorLoginPermissions(): void;
    onHotkeyScopeSettingsChange(isGlobal: boolean): void;
}
export declare class GlicBrowserProxyImpl implements GlicBrowserProxy {
    setGlicOsLauncherEnabled(enabled: boolean): void;
    getGlicShortcut(): Promise<string>;
    setGlicShortcut(shortcut: string): Promise<void>;
    getGlicFocusToggleShortcut(): Promise<string>;
    setGlicFocusToggleShortcut(shortcut: string): Promise<void>;
    setShortcutSuspensionState(shouldSuspend: boolean): void;
    getDisallowedByAdmin(): Promise<boolean>;
    getActorLoginPermissions(): Promise<LoginPermission[]>;
    revokeActorLoginPermission(signonRealm: string, username: string): Promise<boolean>;
    getGlicSelectionShortcut(): Promise<string>;
    setGlicSelectionShortcut(shortcut: string): Promise<void>;
    getWebActuationToggleVisibility(): Promise<boolean>;
    getWebActuationEnabled(): Promise<boolean>;
    setWebActuationEnabled(enabled: boolean): void;
    getExperimentalTriggeringEnabled(): Promise<boolean>;
    setExperimentalTriggeringEnabled(enabled: boolean): void;
    startObservingActorLoginPermissions(): void;
    stopObservingActorLoginPermissions(): void;
    onHotkeyScopeSettingsChange(isGlobal: boolean): void;
    static getInstance(): GlicBrowserProxy;
    static setInstance(obj: GlicBrowserProxy): void;
}
