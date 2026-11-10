import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { File as fileSuggestion_mojom_File } from './file_suggestion.mojom-webui.js';
export type MicrosoftFilesPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<MicrosoftFilesPageHandlerPendingReceiver>;
export declare class MicrosoftFilesPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<MicrosoftFilesPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<MicrosoftFilesPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | MicrosoftFilesPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface MicrosoftFilesPageHandlerInterface {
    getFiles(): Promise<{
        files: fileSuggestion_mojom_File[];
    }>;
}
export declare class MicrosoftFilesPageHandlerRemote implements MicrosoftFilesPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<MicrosoftFilesPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<MicrosoftFilesPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | MicrosoftFilesPageHandlerPendingReceiverEndpoint);
    getFiles(): Promise<{
        files: fileSuggestion_mojom_File[];
    }>;
}
/**
 * An object which receives request messages for the MicrosoftFilesPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class MicrosoftFilesPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<MicrosoftFilesPageHandlerRemote, MicrosoftFilesPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MicrosoftFilesPageHandlerRemote, MicrosoftFilesPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: MicrosoftFilesPageHandlerInterface);
}
export declare class MicrosoftFilesPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): MicrosoftFilesPageHandlerRemote;
}
/**
 * An object which receives request messages for the MicrosoftFilesPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class MicrosoftFilesPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<MicrosoftFilesPageHandlerRemote, MicrosoftFilesPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MicrosoftFilesPageHandlerRemote, MicrosoftFilesPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getFiles: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const MicrosoftFilesPageHandler_GetFiles_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MicrosoftFilesPageHandler_GetFiles_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface MicrosoftFilesPageHandler_GetFiles_ParamsMojoType {
}
export type MicrosoftFilesPageHandler_GetFiles_Params = MicrosoftFilesPageHandler_GetFiles_ParamsMojoType;
export declare interface MicrosoftFilesPageHandler_GetFiles_ResponseParamsMojoType {
    files: fileSuggestion_mojom_File[];
}
export type MicrosoftFilesPageHandler_GetFiles_ResponseParams = MicrosoftFilesPageHandler_GetFiles_ResponseParamsMojoType;
