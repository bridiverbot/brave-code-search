import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { File as fileSuggestion_mojom_File } from './file_suggestion.mojom-webui.js';
export type DriveSuggestionHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DriveSuggestionHandlerPendingReceiver>;
export declare class DriveSuggestionHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DriveSuggestionHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<DriveSuggestionHandlerPendingReceiver>;
    constructor(handle: MojoHandle | DriveSuggestionHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DriveSuggestionHandlerInterface {
    getFiles(): Promise<{
        files: fileSuggestion_mojom_File[];
    }>;
}
export declare class DriveSuggestionHandlerRemote implements DriveSuggestionHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<DriveSuggestionHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DriveSuggestionHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DriveSuggestionHandlerPendingReceiverEndpoint);
    getFiles(): Promise<{
        files: fileSuggestion_mojom_File[];
    }>;
}
/**
 * An object which receives request messages for the DriveSuggestionHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DriveSuggestionHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DriveSuggestionHandlerRemote, DriveSuggestionHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DriveSuggestionHandlerRemote, DriveSuggestionHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DriveSuggestionHandlerInterface);
}
export declare class DriveSuggestionHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DriveSuggestionHandlerRemote;
}
/**
 * An object which receives request messages for the DriveSuggestionHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DriveSuggestionHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DriveSuggestionHandlerRemote, DriveSuggestionHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DriveSuggestionHandlerRemote, DriveSuggestionHandlerPendingReceiver>;
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
export declare const DriveSuggestionHandler_GetFiles_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DriveSuggestionHandler_GetFiles_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DriveSuggestionHandler_GetFiles_ParamsMojoType {
}
export type DriveSuggestionHandler_GetFiles_Params = DriveSuggestionHandler_GetFiles_ParamsMojoType;
export declare interface DriveSuggestionHandler_GetFiles_ResponseParamsMojoType {
    files: fileSuggestion_mojom_File[];
}
export type DriveSuggestionHandler_GetFiles_ResponseParams = DriveSuggestionHandler_GetFiles_ResponseParamsMojoType;
