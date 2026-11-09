export interface LifetimeBrowserProxy {
    restart(): void;
    relaunch(): void;
    shouldShowRelaunchConfirmationDialog(alwaysShowDialog: boolean): Promise<boolean>;
    getRelaunchConfirmationDialogDescription(isVersionUpdate: boolean): Promise<string | null>;
}
export declare class LifetimeBrowserProxyImpl implements LifetimeBrowserProxy {
    restart(): void;
    relaunch(): void;
    shouldShowRelaunchConfirmationDialog(alwaysShowDialog: boolean): Promise<boolean>;
    getRelaunchConfirmationDialogDescription(isVersionUpdate: boolean): Promise<string | null>;
    static getInstance(): LifetimeBrowserProxy;
    static setInstance(obj: LifetimeBrowserProxy): void;
}
