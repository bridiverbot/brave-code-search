export interface ExtensionControlBrowserProxy {
    disableExtension(extensionId: string): void;
    manageExtension(extensionId: string): void;
}
export declare class ExtensionControlBrowserProxyImpl implements ExtensionControlBrowserProxy {
    disableExtension(extensionId: string): void;
    manageExtension(extensionId: string): void;
    static getInstance(): ExtensionControlBrowserProxy;
    static setInstance(obj: ExtensionControlBrowserProxy): void;
}
