import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const OpenSignInTabResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum OpenSignInTabResult {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnknown = 0,
    kSuccess = 1,
    kErrorNoUrl = 2,
    kErrorDisallowedUrl = 3,
    kErrorFailure = 4
}
export declare const CloseSignInTabResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CloseSignInTabResult {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnknown = 0,
    kSuccess = 1,
    kAlreadyClosed = 2,
    kNoSignInTab = 3
}
export declare const AuthTabPurposeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum AuthTabPurpose {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnknown = 0,
    kSignIn = 1,
    kConnectorOauth = 2
}
export declare const OpenAuthTabResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum OpenAuthTabResult {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kUnknown = 0,
    kSuccess = 1,
    kErrorNoUrl = 2,
    kErrorDisallowedUrl = 3,
    kErrorFailure = 4,
    kErrorInvalidPurpose = 5
}
export declare const CloseAuthTabResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CloseAuthTabResult {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kUnknown = 0,
    kClosedActive = 1,
    kClosedInactive = 2,
    kAlreadyClosed = 3,
    kNoAuthTab = 4,
    kErrorInvalidPurpose = 5,
    kNavigatedAway = 6
}
export type GeminiEnterpriseHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GeminiEnterpriseHandlerPendingReceiver>;
export declare class GeminiEnterpriseHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GeminiEnterpriseHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<GeminiEnterpriseHandlerPendingReceiver>;
    constructor(handle: MojoHandle | GeminiEnterpriseHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GeminiEnterpriseHandlerInterface {
    openSignInTab(options: (OpenSignInTabOptions | null)): Promise<{
        result: OpenSignInTabResult;
    }>;
    closeSignInTab(options: (CloseSignInTabOptions | null)): Promise<{
        result: CloseSignInTabResult;
    }>;
    openAuthTab(options: OpenAuthTabOptions): Promise<{
        response: OpenAuthTabResponse;
    }>;
    closeAuthTab(options: CloseAuthTabOptions): Promise<{
        response: CloseAuthTabResponse;
    }>;
}
export declare class GeminiEnterpriseHandlerRemote implements GeminiEnterpriseHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<GeminiEnterpriseHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GeminiEnterpriseHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GeminiEnterpriseHandlerPendingReceiverEndpoint);
    openSignInTab(options: (OpenSignInTabOptions | null)): Promise<{
        result: OpenSignInTabResult;
    }>;
    closeSignInTab(options: (CloseSignInTabOptions | null)): Promise<{
        result: CloseSignInTabResult;
    }>;
    openAuthTab(options: OpenAuthTabOptions): Promise<{
        response: OpenAuthTabResponse;
    }>;
    closeAuthTab(options: CloseAuthTabOptions): Promise<{
        response: CloseAuthTabResponse;
    }>;
}
/**
 * An object which receives request messages for the GeminiEnterpriseHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GeminiEnterpriseHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GeminiEnterpriseHandlerRemote, GeminiEnterpriseHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GeminiEnterpriseHandlerRemote, GeminiEnterpriseHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GeminiEnterpriseHandlerInterface);
}
export declare class GeminiEnterpriseHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GeminiEnterpriseHandlerRemote;
}
/**
 * An object which receives request messages for the GeminiEnterpriseHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GeminiEnterpriseHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GeminiEnterpriseHandlerRemote, GeminiEnterpriseHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GeminiEnterpriseHandlerRemote, GeminiEnterpriseHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    openSignInTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: (OpenSignInTabOptions | null)) => any>;
    closeSignInTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: (CloseSignInTabOptions | null)) => any>;
    openAuthTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: OpenAuthTabOptions) => any>;
    closeAuthTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: CloseAuthTabOptions) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const OpenSignInTabOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CloseSignInTabOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const OpenAuthTabOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CloseAuthTabOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const OpenAuthTabResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const CloseAuthTabResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeminiEnterpriseHandler_OpenSignInTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeminiEnterpriseHandler_OpenSignInTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeminiEnterpriseHandler_CloseSignInTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeminiEnterpriseHandler_CloseSignInTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeminiEnterpriseHandler_OpenAuthTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeminiEnterpriseHandler_OpenAuthTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeminiEnterpriseHandler_CloseAuthTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeminiEnterpriseHandler_CloseAuthTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface OpenSignInTabOptionsMojoType {
    signinUrl: (url_mojom_Url | null);
}
export type OpenSignInTabOptions = OpenSignInTabOptionsMojoType;
export declare interface CloseSignInTabOptionsMojoType {
}
export type CloseSignInTabOptions = CloseSignInTabOptionsMojoType;
export declare interface OpenAuthTabOptionsMojoType {
    purpose: AuthTabPurpose;
    url: (url_mojom_Url | null);
}
export type OpenAuthTabOptions = OpenAuthTabOptionsMojoType;
export declare interface CloseAuthTabOptionsMojoType {
    purpose: AuthTabPurpose;
}
export type CloseAuthTabOptions = CloseAuthTabOptionsMojoType;
export declare interface OpenAuthTabResponseMojoType {
    result: OpenAuthTabResult;
}
export type OpenAuthTabResponse = OpenAuthTabResponseMojoType;
export declare interface CloseAuthTabResponseMojoType {
    result: CloseAuthTabResult;
}
export type CloseAuthTabResponse = CloseAuthTabResponseMojoType;
export declare interface GeminiEnterpriseHandler_OpenSignInTab_ParamsMojoType {
    options: (OpenSignInTabOptions | null);
}
export type GeminiEnterpriseHandler_OpenSignInTab_Params = GeminiEnterpriseHandler_OpenSignInTab_ParamsMojoType;
export declare interface GeminiEnterpriseHandler_OpenSignInTab_ResponseParamsMojoType {
    result: OpenSignInTabResult;
}
export type GeminiEnterpriseHandler_OpenSignInTab_ResponseParams = GeminiEnterpriseHandler_OpenSignInTab_ResponseParamsMojoType;
export declare interface GeminiEnterpriseHandler_CloseSignInTab_ParamsMojoType {
    options: (CloseSignInTabOptions | null);
}
export type GeminiEnterpriseHandler_CloseSignInTab_Params = GeminiEnterpriseHandler_CloseSignInTab_ParamsMojoType;
export declare interface GeminiEnterpriseHandler_CloseSignInTab_ResponseParamsMojoType {
    result: CloseSignInTabResult;
}
export type GeminiEnterpriseHandler_CloseSignInTab_ResponseParams = GeminiEnterpriseHandler_CloseSignInTab_ResponseParamsMojoType;
export declare interface GeminiEnterpriseHandler_OpenAuthTab_ParamsMojoType {
    options: OpenAuthTabOptions;
}
export type GeminiEnterpriseHandler_OpenAuthTab_Params = GeminiEnterpriseHandler_OpenAuthTab_ParamsMojoType;
export declare interface GeminiEnterpriseHandler_OpenAuthTab_ResponseParamsMojoType {
    response: OpenAuthTabResponse;
}
export type GeminiEnterpriseHandler_OpenAuthTab_ResponseParams = GeminiEnterpriseHandler_OpenAuthTab_ResponseParamsMojoType;
export declare interface GeminiEnterpriseHandler_CloseAuthTab_ParamsMojoType {
    options: CloseAuthTabOptions;
}
export type GeminiEnterpriseHandler_CloseAuthTab_Params = GeminiEnterpriseHandler_CloseAuthTab_ParamsMojoType;
export declare interface GeminiEnterpriseHandler_CloseAuthTab_ResponseParamsMojoType {
    response: CloseAuthTabResponse;
}
export type GeminiEnterpriseHandler_CloseAuthTab_ResponseParams = GeminiEnterpriseHandler_CloseAuthTab_ResponseParamsMojoType;
