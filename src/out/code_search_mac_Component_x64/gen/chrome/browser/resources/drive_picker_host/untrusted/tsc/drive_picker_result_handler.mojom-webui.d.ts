import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const DrivePickerErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DrivePickerError {
    MIN_VALUE = 0,
    MAX_VALUE = 12,
    kTokenFetchFailure = 0,
    kInvalidResponse = 1,
    kInvalidFileId = 2,
    kInvalidFileMetadata = 3,
    kUnsupportedFileType = 4,
    kInvalidFileSize = 5,
    kAlreadyActive = 6,
    kWindowNotFound = 7,
    kApiLoadFailure = 8,
    kMojoDisconnected = 9,
    kWebUINotFound = 10,
    kViewNotFound = 11,
    kUnknown = 12
}
export type DrivePickerResultHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DrivePickerResultHandlerPendingReceiver>;
export declare class DrivePickerResultHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DrivePickerResultHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<DrivePickerResultHandlerPendingReceiver>;
    constructor(handle: MojoHandle | DrivePickerResultHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DrivePickerResultHandlerInterface {
    onSelection(files: DriveFile[]): void;
    onCancel(): void;
    onError(error: DrivePickerError): void;
}
export declare class DrivePickerResultHandlerRemote implements DrivePickerResultHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<DrivePickerResultHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DrivePickerResultHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DrivePickerResultHandlerPendingReceiverEndpoint);
    onSelection(files: DriveFile[]): void;
    onCancel(): void;
    onError(error: DrivePickerError): void;
}
/**
 * An object which receives request messages for the DrivePickerResultHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DrivePickerResultHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DrivePickerResultHandlerRemote, DrivePickerResultHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DrivePickerResultHandlerRemote, DrivePickerResultHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DrivePickerResultHandlerInterface);
}
export declare class DrivePickerResultHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DrivePickerResultHandlerRemote;
}
/**
 * An object which receives request messages for the DrivePickerResultHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DrivePickerResultHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DrivePickerResultHandlerRemote, DrivePickerResultHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DrivePickerResultHandlerRemote, DrivePickerResultHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onSelection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(files: DriveFile[]) => any>;
    onCancel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onError: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(error: DrivePickerError) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const DriveFileSpec: {
    $: mojo.internal.MojomType;
};
export declare const DrivePickerResultHandler_OnSelection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DrivePickerResultHandler_OnCancel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DrivePickerResultHandler_OnError_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DriveFileMojoType {
    id: string;
    mimeType: string;
    name: string;
    type: string;
    sizeBytes: bigint;
    resourceKey: (string | null);
    iconUrl: (url_mojom_Url | null);
    thumbnailUrl: (url_mojom_Url | null);
}
export type DriveFile = DriveFileMojoType;
export declare interface DrivePickerResultHandler_OnSelection_ParamsMojoType {
    files: DriveFile[];
}
export type DrivePickerResultHandler_OnSelection_Params = DrivePickerResultHandler_OnSelection_ParamsMojoType;
export declare interface DrivePickerResultHandler_OnCancel_ParamsMojoType {
}
export type DrivePickerResultHandler_OnCancel_Params = DrivePickerResultHandler_OnCancel_ParamsMojoType;
export declare interface DrivePickerResultHandler_OnError_ParamsMojoType {
    error: DrivePickerError;
}
export type DrivePickerResultHandler_OnError_Params = DrivePickerResultHandler_OnError_ParamsMojoType;
