import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { TimeDelta as mojoBase_mojom_TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { TrackedElementHandlerPendingReceiver as trackedElement_mojom_TrackedElementHandlerPendingReceiver, TrackedElementIdentifier as trackedElement_mojom_TrackedElementIdentifier } from '//resources/mojo/ui/webui/resources/js/tracked_element/tracked_element.mojom-webui.js';
export declare const HelpBubbleArrowPositionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum HelpBubbleArrowPosition {
    MIN_VALUE = 0,
    MAX_VALUE = 11,
    TOP_LEFT = 0,
    TOP_CENTER = 1,
    TOP_RIGHT = 2,
    BOTTOM_LEFT = 3,
    BOTTOM_CENTER = 4,
    BOTTOM_RIGHT = 5,
    LEFT_TOP = 6,
    LEFT_CENTER = 7,
    LEFT_BOTTOM = 8,
    RIGHT_TOP = 9,
    RIGHT_CENTER = 10,
    RIGHT_BOTTOM = 11
}
export declare const HelpBubbleClosedReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum HelpBubbleClosedReason {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kPageChanged = 0,
    kDismissedByUser = 1,
    kTimedOut = 2
}
export type HelpBubbleHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<HelpBubbleHandlerFactoryPendingReceiver>;
export declare class HelpBubbleHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<HelpBubbleHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<HelpBubbleHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | HelpBubbleHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface HelpBubbleHandlerFactoryInterface {
    createHelpBubbleHandler(client: HelpBubbleClientRemote, handler: HelpBubbleHandlerPendingReceiver): void;
}
export declare class HelpBubbleHandlerFactoryRemote implements HelpBubbleHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<HelpBubbleHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<HelpBubbleHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | HelpBubbleHandlerFactoryPendingReceiverEndpoint);
    createHelpBubbleHandler(client: HelpBubbleClientRemote, handler: HelpBubbleHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the HelpBubbleHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class HelpBubbleHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<HelpBubbleHandlerFactoryRemote, HelpBubbleHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HelpBubbleHandlerFactoryRemote, HelpBubbleHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: HelpBubbleHandlerFactoryInterface);
}
export declare class HelpBubbleHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): HelpBubbleHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the HelpBubbleHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class HelpBubbleHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<HelpBubbleHandlerFactoryRemote, HelpBubbleHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HelpBubbleHandlerFactoryRemote, HelpBubbleHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createHelpBubbleHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(client: HelpBubbleClientRemote, handler: HelpBubbleHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PdfHelpBubbleHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PdfHelpBubbleHandlerFactoryPendingReceiver>;
export declare class PdfHelpBubbleHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PdfHelpBubbleHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PdfHelpBubbleHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PdfHelpBubbleHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PdfHelpBubbleHandlerFactoryInterface {
    createHelpBubbleHandler(client: HelpBubbleClientRemote, helpBubbleHandler: HelpBubbleHandlerPendingReceiver, trackedElementHandler: trackedElement_mojom_TrackedElementHandlerPendingReceiver): void;
}
export declare class PdfHelpBubbleHandlerFactoryRemote implements PdfHelpBubbleHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PdfHelpBubbleHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PdfHelpBubbleHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PdfHelpBubbleHandlerFactoryPendingReceiverEndpoint);
    createHelpBubbleHandler(client: HelpBubbleClientRemote, helpBubbleHandler: HelpBubbleHandlerPendingReceiver, trackedElementHandler: trackedElement_mojom_TrackedElementHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the PdfHelpBubbleHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PdfHelpBubbleHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PdfHelpBubbleHandlerFactoryRemote, PdfHelpBubbleHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PdfHelpBubbleHandlerFactoryRemote, PdfHelpBubbleHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PdfHelpBubbleHandlerFactoryInterface);
}
export declare class PdfHelpBubbleHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PdfHelpBubbleHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the PdfHelpBubbleHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PdfHelpBubbleHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PdfHelpBubbleHandlerFactoryRemote, PdfHelpBubbleHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PdfHelpBubbleHandlerFactoryRemote, PdfHelpBubbleHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createHelpBubbleHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(client: HelpBubbleClientRemote, helpBubbleHandler: HelpBubbleHandlerPendingReceiver, trackedElementHandler: trackedElement_mojom_TrackedElementHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type HelpBubbleHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<HelpBubbleHandlerPendingReceiver>;
export declare class HelpBubbleHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<HelpBubbleHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<HelpBubbleHandlerPendingReceiver>;
    constructor(handle: MojoHandle | HelpBubbleHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface HelpBubbleHandlerInterface {
    helpBubbleButtonPressed(id: trackedElement_mojom_TrackedElementIdentifier, buttonIndex: number): void;
    helpBubbleClosed(id: trackedElement_mojom_TrackedElementIdentifier, reason: HelpBubbleClosedReason): void;
}
export declare class HelpBubbleHandlerRemote implements HelpBubbleHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<HelpBubbleHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<HelpBubbleHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | HelpBubbleHandlerPendingReceiverEndpoint);
    helpBubbleButtonPressed(id: trackedElement_mojom_TrackedElementIdentifier, buttonIndex: number): void;
    helpBubbleClosed(id: trackedElement_mojom_TrackedElementIdentifier, reason: HelpBubbleClosedReason): void;
}
/**
 * An object which receives request messages for the HelpBubbleHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class HelpBubbleHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<HelpBubbleHandlerRemote, HelpBubbleHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HelpBubbleHandlerRemote, HelpBubbleHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: HelpBubbleHandlerInterface);
}
export declare class HelpBubbleHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): HelpBubbleHandlerRemote;
}
/**
 * An object which receives request messages for the HelpBubbleHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class HelpBubbleHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<HelpBubbleHandlerRemote, HelpBubbleHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HelpBubbleHandlerRemote, HelpBubbleHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    helpBubbleButtonPressed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: trackedElement_mojom_TrackedElementIdentifier, buttonIndex: number) => any>;
    helpBubbleClosed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: trackedElement_mojom_TrackedElementIdentifier, reason: HelpBubbleClosedReason) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type HelpBubbleClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<HelpBubbleClientPendingReceiver>;
export declare class HelpBubbleClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<HelpBubbleClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<HelpBubbleClientPendingReceiver>;
    constructor(handle: MojoHandle | HelpBubbleClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface HelpBubbleClientInterface {
    showHelpBubble(params: HelpBubbleParams): void;
    toggleFocusForAccessibility(id: trackedElement_mojom_TrackedElementIdentifier): void;
    hideHelpBubble(id: trackedElement_mojom_TrackedElementIdentifier): void;
    externalHelpBubbleUpdated(id: trackedElement_mojom_TrackedElementIdentifier, shown: boolean): void;
}
export declare class HelpBubbleClientRemote implements HelpBubbleClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<HelpBubbleClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<HelpBubbleClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | HelpBubbleClientPendingReceiverEndpoint);
    showHelpBubble(params: HelpBubbleParams): void;
    toggleFocusForAccessibility(id: trackedElement_mojom_TrackedElementIdentifier): void;
    hideHelpBubble(id: trackedElement_mojom_TrackedElementIdentifier): void;
    externalHelpBubbleUpdated(id: trackedElement_mojom_TrackedElementIdentifier, shown: boolean): void;
}
/**
 * An object which receives request messages for the HelpBubbleClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class HelpBubbleClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<HelpBubbleClientRemote, HelpBubbleClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HelpBubbleClientRemote, HelpBubbleClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: HelpBubbleClientInterface);
}
export declare class HelpBubbleClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): HelpBubbleClientRemote;
}
/**
 * An object which receives request messages for the HelpBubbleClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class HelpBubbleClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<HelpBubbleClientRemote, HelpBubbleClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HelpBubbleClientRemote, HelpBubbleClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    showHelpBubble: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(params: HelpBubbleParams) => any>;
    toggleFocusForAccessibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: trackedElement_mojom_TrackedElementIdentifier) => any>;
    hideHelpBubble: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: trackedElement_mojom_TrackedElementIdentifier) => any>;
    externalHelpBubbleUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: trackedElement_mojom_TrackedElementIdentifier, shown: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const HelpBubbleButtonParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ProgressSpec: {
    $: mojo.internal.MojomType;
};
export declare const HelpBubbleParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HelpBubbleHandler_HelpBubbleClosed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HelpBubbleClient_ShowHelpBubble_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HelpBubbleClient_HideHelpBubble_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface HelpBubbleButtonParamsMojoType {
    text: string;
    isDefault: boolean;
}
export type HelpBubbleButtonParams = HelpBubbleButtonParamsMojoType;
export declare interface ProgressMojoType {
    current: number;
    total: number;
}
export type Progress = ProgressMojoType;
export declare interface HelpBubbleParamsMojoType {
    id: trackedElement_mojom_TrackedElementIdentifier;
    position: HelpBubbleArrowPosition;
    focusOnShowHint: (boolean | null);
    titleText: (string | null);
    bodyText: string;
    closeButtonAltText: string;
    bodyIconName: (string | null);
    bodyIconAltText: string;
    progress: (Progress | null);
    buttons: HelpBubbleButtonParams[];
    timeout: (mojoBase_mojom_TimeDelta | null);
}
export type HelpBubbleParams = HelpBubbleParamsMojoType;
export declare interface HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsMojoType {
    client: HelpBubbleClientRemote;
    handler: HelpBubbleHandlerPendingReceiver;
}
export type HelpBubbleHandlerFactory_CreateHelpBubbleHandler_Params = HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsMojoType;
export declare interface PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsMojoType {
    client: HelpBubbleClientRemote;
    helpBubbleHandler: HelpBubbleHandlerPendingReceiver;
    trackedElementHandler: trackedElement_mojom_TrackedElementHandlerPendingReceiver;
}
export type PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_Params = PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsMojoType;
export declare interface HelpBubbleHandler_HelpBubbleButtonPressed_ParamsMojoType {
    id: trackedElement_mojom_TrackedElementIdentifier;
    buttonIndex: number;
}
export type HelpBubbleHandler_HelpBubbleButtonPressed_Params = HelpBubbleHandler_HelpBubbleButtonPressed_ParamsMojoType;
export declare interface HelpBubbleHandler_HelpBubbleClosed_ParamsMojoType {
    id: trackedElement_mojom_TrackedElementIdentifier;
    reason: HelpBubbleClosedReason;
}
export type HelpBubbleHandler_HelpBubbleClosed_Params = HelpBubbleHandler_HelpBubbleClosed_ParamsMojoType;
export declare interface HelpBubbleClient_ShowHelpBubble_ParamsMojoType {
    params: HelpBubbleParams;
}
export type HelpBubbleClient_ShowHelpBubble_Params = HelpBubbleClient_ShowHelpBubble_ParamsMojoType;
export declare interface HelpBubbleClient_ToggleFocusForAccessibility_ParamsMojoType {
    id: trackedElement_mojom_TrackedElementIdentifier;
}
export type HelpBubbleClient_ToggleFocusForAccessibility_Params = HelpBubbleClient_ToggleFocusForAccessibility_ParamsMojoType;
export declare interface HelpBubbleClient_HideHelpBubble_ParamsMojoType {
    id: trackedElement_mojom_TrackedElementIdentifier;
}
export type HelpBubbleClient_HideHelpBubble_Params = HelpBubbleClient_HideHelpBubble_ParamsMojoType;
export declare interface HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsMojoType {
    id: trackedElement_mojom_TrackedElementIdentifier;
    shown: boolean;
}
export type HelpBubbleClient_ExternalHelpBubbleUpdated_Params = HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<HelpBubbleHandlerInterface, HelpBubbleClientCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<HelpBubbleHandlerInterface, HelpBubbleClientRemote, HelpBubbleHandlerPendingReceiver, HelpBubbleClientPendingReceiver, HelpBubbleClientCallbackRouter, HelpBubbleHandlerRemote>;
