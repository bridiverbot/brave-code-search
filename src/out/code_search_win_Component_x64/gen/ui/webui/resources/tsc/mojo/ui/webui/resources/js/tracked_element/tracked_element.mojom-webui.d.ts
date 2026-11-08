import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { String16 as mojoBase_mojom_String16 } from '../../../../../mojo/public/mojom/base/string16.mojom-webui.js';
import { RectF as gfx_mojom_RectF } from '../../../../gfx/geometry/mojom/geometry.mojom-webui.js';
export declare const InputTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum InputType {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kDontCare = 0,
    kMouse = 1,
    kKeyboard = 2,
    kTouch = 3
}
export declare const TextEntryModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TextEntryMode {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kReplaceAll = 0,
    kInsertOrReplace = 1,
    kAppend = 2
}
export type TrackedElementHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TrackedElementHandlerPendingReceiver>;
export declare class TrackedElementHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TrackedElementHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<TrackedElementHandlerPendingReceiver>;
    constructor(handle: MojoHandle | TrackedElementHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TrackedElementHandlerInterface {
    setManager(observer: TrackedElementManagerRemote): void;
    trackedElementCanHighlightChanged(identifier: TrackedElementIdentifier, canHiglight: boolean): void;
    trackedElementVisibilityChanged(identifier: TrackedElementIdentifier, visible: boolean, rect: gfx_mojom_RectF): void;
    trackedElementActivated(identifier: TrackedElementIdentifier): void;
    trackedElementCustomEvent(identifier: TrackedElementIdentifier, customEventName: string): void;
}
export declare class TrackedElementHandlerRemote implements TrackedElementHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<TrackedElementHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TrackedElementHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TrackedElementHandlerPendingReceiverEndpoint);
    setManager(observer: TrackedElementManagerRemote): void;
    trackedElementCanHighlightChanged(identifier: TrackedElementIdentifier, canHiglight: boolean): void;
    trackedElementVisibilityChanged(identifier: TrackedElementIdentifier, visible: boolean, rect: gfx_mojom_RectF): void;
    trackedElementActivated(identifier: TrackedElementIdentifier): void;
    trackedElementCustomEvent(identifier: TrackedElementIdentifier, customEventName: string): void;
}
/**
 * An object which receives request messages for the TrackedElementHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TrackedElementHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TrackedElementHandlerRemote, TrackedElementHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TrackedElementHandlerRemote, TrackedElementHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TrackedElementHandlerInterface);
}
export declare class TrackedElementHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TrackedElementHandlerRemote;
}
/**
 * An object which receives request messages for the TrackedElementHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TrackedElementHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TrackedElementHandlerRemote, TrackedElementHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TrackedElementHandlerRemote, TrackedElementHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setManager: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(observer: TrackedElementManagerRemote) => any>;
    trackedElementCanHighlightChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: TrackedElementIdentifier, canHiglight: boolean) => any>;
    trackedElementVisibilityChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: TrackedElementIdentifier, visible: boolean, rect: gfx_mojom_RectF) => any>;
    trackedElementActivated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: TrackedElementIdentifier) => any>;
    trackedElementCustomEvent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: TrackedElementIdentifier, customEventName: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type TrackedElementManagerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TrackedElementManagerPendingReceiver>;
export declare class TrackedElementManagerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TrackedElementManager> {
    handle: mojo.internal.interfaceSupport.Endpoint<TrackedElementManagerPendingReceiver>;
    constructor(handle: MojoHandle | TrackedElementManagerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TrackedElementManagerInterface {
    onElementHighlightChanged(identifier: TrackedElementIdentifier, highlighted: boolean): void;
    clickElement(identifier: TrackedElementIdentifier, inputType: InputType): Promise<{
        success: boolean;
    }>;
    focusElement(identifier: TrackedElementIdentifier): Promise<{
        success: boolean;
    }>;
    selectTab(identifier: TrackedElementIdentifier, index: number): Promise<{
        success: boolean;
    }>;
    selectDropdownItem(identifier: TrackedElementIdentifier, index: number): Promise<{
        success: boolean;
    }>;
    enterText(identifier: TrackedElementIdentifier, text: mojoBase_mojom_String16, mode: TextEntryMode): Promise<{
        success: boolean;
    }>;
    confirm(identifier: TrackedElementIdentifier): Promise<{
        success: boolean;
    }>;
}
export declare class TrackedElementManagerRemote implements TrackedElementManagerInterface, mojo.internal.interfaceSupport.InterfaceRemote<TrackedElementManagerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TrackedElementManagerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TrackedElementManagerPendingReceiverEndpoint);
    onElementHighlightChanged(identifier: TrackedElementIdentifier, highlighted: boolean): void;
    clickElement(identifier: TrackedElementIdentifier, inputType: InputType): Promise<{
        success: boolean;
    }>;
    focusElement(identifier: TrackedElementIdentifier): Promise<{
        success: boolean;
    }>;
    selectTab(identifier: TrackedElementIdentifier, index: number): Promise<{
        success: boolean;
    }>;
    selectDropdownItem(identifier: TrackedElementIdentifier, index: number): Promise<{
        success: boolean;
    }>;
    enterText(identifier: TrackedElementIdentifier, text: mojoBase_mojom_String16, mode: TextEntryMode): Promise<{
        success: boolean;
    }>;
    confirm(identifier: TrackedElementIdentifier): Promise<{
        success: boolean;
    }>;
}
/**
 * An object which receives request messages for the TrackedElementManager
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TrackedElementManagerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TrackedElementManagerRemote, TrackedElementManagerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TrackedElementManagerRemote, TrackedElementManagerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TrackedElementManagerInterface);
}
export declare class TrackedElementManager {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TrackedElementManagerRemote;
}
/**
 * An object which receives request messages for the TrackedElementManager
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TrackedElementManagerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TrackedElementManagerRemote, TrackedElementManagerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TrackedElementManagerRemote, TrackedElementManagerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onElementHighlightChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: TrackedElementIdentifier, highlighted: boolean) => any>;
    clickElement: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: TrackedElementIdentifier, inputType: InputType) => any>;
    focusElement: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: TrackedElementIdentifier) => any>;
    selectTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: TrackedElementIdentifier, index: number) => any>;
    selectDropdownItem: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: TrackedElementIdentifier, index: number) => any>;
    enterText: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: TrackedElementIdentifier, text: mojoBase_mojom_String16, mode: TextEntryMode) => any>;
    confirm: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: TrackedElementIdentifier) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const TrackedElementIdentifierSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementHandler_SetManager_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementHandler_TrackedElementCanHighlightChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementHandler_TrackedElementActivated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_OnElementHighlightChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_ClickElement_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_ClickElement_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_FocusElement_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_FocusElement_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_SelectTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_SelectTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_SelectDropdownItem_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_SelectDropdownItem_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_EnterText_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_EnterText_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_Confirm_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrackedElementManager_Confirm_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TrackedElementIdentifierMojoType {
    nativeIdentifier: string;
    secondaryIdentifier: string;
}
export type TrackedElementIdentifier = TrackedElementIdentifierMojoType;
export declare interface TrackedElementHandler_SetManager_ParamsMojoType {
    observer: TrackedElementManagerRemote;
}
export type TrackedElementHandler_SetManager_Params = TrackedElementHandler_SetManager_ParamsMojoType;
export declare interface TrackedElementHandler_TrackedElementCanHighlightChanged_ParamsMojoType {
    identifier: TrackedElementIdentifier;
    canHiglight: boolean;
}
export type TrackedElementHandler_TrackedElementCanHighlightChanged_Params = TrackedElementHandler_TrackedElementCanHighlightChanged_ParamsMojoType;
export declare interface TrackedElementHandler_TrackedElementVisibilityChanged_ParamsMojoType {
    identifier: TrackedElementIdentifier;
    visible: boolean;
    rect: gfx_mojom_RectF;
}
export type TrackedElementHandler_TrackedElementVisibilityChanged_Params = TrackedElementHandler_TrackedElementVisibilityChanged_ParamsMojoType;
export declare interface TrackedElementHandler_TrackedElementActivated_ParamsMojoType {
    identifier: TrackedElementIdentifier;
}
export type TrackedElementHandler_TrackedElementActivated_Params = TrackedElementHandler_TrackedElementActivated_ParamsMojoType;
export declare interface TrackedElementHandler_TrackedElementCustomEvent_ParamsMojoType {
    identifier: TrackedElementIdentifier;
    customEventName: string;
}
export type TrackedElementHandler_TrackedElementCustomEvent_Params = TrackedElementHandler_TrackedElementCustomEvent_ParamsMojoType;
export declare interface TrackedElementManager_OnElementHighlightChanged_ParamsMojoType {
    identifier: TrackedElementIdentifier;
    highlighted: boolean;
}
export type TrackedElementManager_OnElementHighlightChanged_Params = TrackedElementManager_OnElementHighlightChanged_ParamsMojoType;
export declare interface TrackedElementManager_ClickElement_ParamsMojoType {
    identifier: TrackedElementIdentifier;
    inputType: InputType;
}
export type TrackedElementManager_ClickElement_Params = TrackedElementManager_ClickElement_ParamsMojoType;
export declare interface TrackedElementManager_ClickElement_ResponseParamsMojoType {
    success: boolean;
}
export type TrackedElementManager_ClickElement_ResponseParams = TrackedElementManager_ClickElement_ResponseParamsMojoType;
export declare interface TrackedElementManager_FocusElement_ParamsMojoType {
    identifier: TrackedElementIdentifier;
}
export type TrackedElementManager_FocusElement_Params = TrackedElementManager_FocusElement_ParamsMojoType;
export declare interface TrackedElementManager_FocusElement_ResponseParamsMojoType {
    success: boolean;
}
export type TrackedElementManager_FocusElement_ResponseParams = TrackedElementManager_FocusElement_ResponseParamsMojoType;
export declare interface TrackedElementManager_SelectTab_ParamsMojoType {
    identifier: TrackedElementIdentifier;
    index: number;
}
export type TrackedElementManager_SelectTab_Params = TrackedElementManager_SelectTab_ParamsMojoType;
export declare interface TrackedElementManager_SelectTab_ResponseParamsMojoType {
    success: boolean;
}
export type TrackedElementManager_SelectTab_ResponseParams = TrackedElementManager_SelectTab_ResponseParamsMojoType;
export declare interface TrackedElementManager_SelectDropdownItem_ParamsMojoType {
    identifier: TrackedElementIdentifier;
    index: number;
}
export type TrackedElementManager_SelectDropdownItem_Params = TrackedElementManager_SelectDropdownItem_ParamsMojoType;
export declare interface TrackedElementManager_SelectDropdownItem_ResponseParamsMojoType {
    success: boolean;
}
export type TrackedElementManager_SelectDropdownItem_ResponseParams = TrackedElementManager_SelectDropdownItem_ResponseParamsMojoType;
export declare interface TrackedElementManager_EnterText_ParamsMojoType {
    identifier: TrackedElementIdentifier;
    text: mojoBase_mojom_String16;
    mode: TextEntryMode;
}
export type TrackedElementManager_EnterText_Params = TrackedElementManager_EnterText_ParamsMojoType;
export declare interface TrackedElementManager_EnterText_ResponseParamsMojoType {
    success: boolean;
}
export type TrackedElementManager_EnterText_ResponseParams = TrackedElementManager_EnterText_ResponseParamsMojoType;
export declare interface TrackedElementManager_Confirm_ParamsMojoType {
    identifier: TrackedElementIdentifier;
}
export type TrackedElementManager_Confirm_Params = TrackedElementManager_Confirm_ParamsMojoType;
export declare interface TrackedElementManager_Confirm_ResponseParamsMojoType {
    success: boolean;
}
export type TrackedElementManager_Confirm_ResponseParams = TrackedElementManager_Confirm_ResponseParamsMojoType;
