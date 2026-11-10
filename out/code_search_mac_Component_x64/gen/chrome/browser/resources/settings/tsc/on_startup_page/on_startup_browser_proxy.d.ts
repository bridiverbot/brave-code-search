export interface NtpExtension {
    id: string;
    name: string;
    canBeDisabled: boolean;
}
export interface OnStartupBrowserProxy {
    getNtpExtension(): Promise<NtpExtension | null>;
}
export declare class OnStartupBrowserProxyImpl implements OnStartupBrowserProxy {
    getNtpExtension(): Promise<NtpExtension | null>;
    static getInstance(): OnStartupBrowserProxy;
    static setInstance(obj: OnStartupBrowserProxy): void;
}
