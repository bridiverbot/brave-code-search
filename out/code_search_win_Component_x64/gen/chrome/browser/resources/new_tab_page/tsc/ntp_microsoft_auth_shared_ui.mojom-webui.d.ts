import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const AuthTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum AuthType {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kSilent = 0,
    kPopup = 1
}
export type MicrosoftAuthUntrustedDocumentPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<MicrosoftAuthUntrustedDocumentPendingReceiver>;
export declare class MicrosoftAuthUntrustedDocumentPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<MicrosoftAuthUntrustedDocument> {
    handle: mojo.internal.interfaceSupport.Endpoint<MicrosoftAuthUntrustedDocumentPendingReceiver>;
    constructor(handle: MojoHandle | MicrosoftAuthUntrustedDocumentPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface MicrosoftAuthUntrustedDocumentInterface {
    acquireTokenPopup(): void;
    acquireTokenSilent(): void;
    signOut(): void;
}
export declare class MicrosoftAuthUntrustedDocumentRemote implements MicrosoftAuthUntrustedDocumentInterface, mojo.internal.interfaceSupport.InterfaceRemote<MicrosoftAuthUntrustedDocumentPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<MicrosoftAuthUntrustedDocumentPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | MicrosoftAuthUntrustedDocumentPendingReceiverEndpoint);
    acquireTokenPopup(): void;
    acquireTokenSilent(): void;
    signOut(): void;
}
/**
 * An object which receives request messages for the MicrosoftAuthUntrustedDocument
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class MicrosoftAuthUntrustedDocumentReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<MicrosoftAuthUntrustedDocumentRemote, MicrosoftAuthUntrustedDocumentPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MicrosoftAuthUntrustedDocumentRemote, MicrosoftAuthUntrustedDocumentPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: MicrosoftAuthUntrustedDocumentInterface);
}
export declare class MicrosoftAuthUntrustedDocument {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): MicrosoftAuthUntrustedDocumentRemote;
}
/**
 * An object which receives request messages for the MicrosoftAuthUntrustedDocument
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class MicrosoftAuthUntrustedDocumentCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<MicrosoftAuthUntrustedDocumentRemote, MicrosoftAuthUntrustedDocumentPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MicrosoftAuthUntrustedDocumentRemote, MicrosoftAuthUntrustedDocumentPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    acquireTokenPopup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    acquireTokenSilent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    signOut: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MicrosoftAuthUntrustedDocument_SignOut_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsMojoType {
}
export type MicrosoftAuthUntrustedDocument_AcquireTokenPopup_Params = MicrosoftAuthUntrustedDocument_AcquireTokenPopup_ParamsMojoType;
export declare interface MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsMojoType {
}
export type MicrosoftAuthUntrustedDocument_AcquireTokenSilent_Params = MicrosoftAuthUntrustedDocument_AcquireTokenSilent_ParamsMojoType;
export declare interface MicrosoftAuthUntrustedDocument_SignOut_ParamsMojoType {
}
export type MicrosoftAuthUntrustedDocument_SignOut_Params = MicrosoftAuthUntrustedDocument_SignOut_ParamsMojoType;
