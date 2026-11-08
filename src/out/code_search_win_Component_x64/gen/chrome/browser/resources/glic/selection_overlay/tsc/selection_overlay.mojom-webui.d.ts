import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Action as selection_mojom_Action } from './action.mojom-webui.js';
import { GenericPendingAssociatedReceiver as mojoBase_mojom_GenericPendingAssociatedReceiver } from '//resources/mojo/mojo/public/mojom/base/generic_pending_associated_receiver.mojom-webui.js';
import { UnguessableToken as mojoBase_mojom_UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import { BitmapMappedFromTrustedProcess as skia_mojom_BitmapMappedFromTrustedProcess } from '//resources/mojo/skia/public/mojom/bitmap.mojom-webui.js';
import { PointF as gfx_mojom_PointF, RectF as gfx_mojom_RectF } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
export declare const DismissOverlayReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DismissOverlayReason {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kCloseButton = 0,
    kBackgroundClick = 1
}
export declare const SuggestedActionIconSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SuggestedActionIcon {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kNone = 0,
    kSpark = 1,
    kExplain = 2
}
export type SuggestedActionsListenerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SuggestedActionsListenerPendingReceiver>;
export declare class SuggestedActionsListenerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SuggestedActionsListener> {
    handle: mojo.internal.interfaceSupport.Endpoint<SuggestedActionsListenerPendingReceiver>;
    constructor(handle: MojoHandle | SuggestedActionsListenerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SuggestedActionsListenerInterface {
    onSuggestedActionsAvailable(actions: SuggestedAction[]): void;
}
export declare class SuggestedActionsListenerRemote implements SuggestedActionsListenerInterface, mojo.internal.interfaceSupport.InterfaceRemote<SuggestedActionsListenerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SuggestedActionsListenerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SuggestedActionsListenerPendingReceiverEndpoint);
    onSuggestedActionsAvailable(actions: SuggestedAction[]): void;
}
/**
 * An object which receives request messages for the SuggestedActionsListener
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SuggestedActionsListenerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SuggestedActionsListenerRemote, SuggestedActionsListenerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SuggestedActionsListenerRemote, SuggestedActionsListenerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SuggestedActionsListenerInterface);
}
export declare class SuggestedActionsListener {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SuggestedActionsListenerRemote;
}
/**
 * An object which receives request messages for the SuggestedActionsListener
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SuggestedActionsListenerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SuggestedActionsListenerRemote, SuggestedActionsListenerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SuggestedActionsListenerRemote, SuggestedActionsListenerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onSuggestedActionsAvailable: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(actions: SuggestedAction[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SelectionOverlayPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SelectionOverlayPageHandlerFactoryPendingReceiver>;
export declare class SelectionOverlayPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SelectionOverlayPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<SelectionOverlayPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | SelectionOverlayPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SelectionOverlayPageHandlerFactoryInterface {
    createPageHandler(handler: SelectionOverlayPageHandlerPendingReceiver, page: SelectionOverlayPageRemote): void;
}
export declare class SelectionOverlayPageHandlerFactoryRemote implements SelectionOverlayPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<SelectionOverlayPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SelectionOverlayPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SelectionOverlayPageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(handler: SelectionOverlayPageHandlerPendingReceiver, page: SelectionOverlayPageRemote): void;
}
/**
 * An object which receives request messages for the SelectionOverlayPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SelectionOverlayPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SelectionOverlayPageHandlerFactoryRemote, SelectionOverlayPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SelectionOverlayPageHandlerFactoryRemote, SelectionOverlayPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SelectionOverlayPageHandlerFactoryInterface);
}
export declare class SelectionOverlayPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SelectionOverlayPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the SelectionOverlayPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SelectionOverlayPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SelectionOverlayPageHandlerFactoryRemote, SelectionOverlayPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SelectionOverlayPageHandlerFactoryRemote, SelectionOverlayPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: SelectionOverlayPageHandlerPendingReceiver, page: SelectionOverlayPageRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SelectionOverlayPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SelectionOverlayPageHandlerPendingReceiver>;
export declare class SelectionOverlayPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SelectionOverlayPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<SelectionOverlayPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | SelectionOverlayPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SelectionOverlayPageHandlerInterface {
    dismissOverlay(dismissReason: DismissOverlayReason): void;
    adjustRegion(target: SelectedRegion, isUsingKeyboard: boolean): void;
    deleteRegion(id: mojoBase_mojom_UnguessableToken, isUsingKeyboard: boolean): void;
    closePreselectionBubble(): void;
    addBackgroundBlur(): void;
    setLiveBlur(enabled: boolean): void;
    submitPrompt(prompt: string): void;
    getSuggestedActions(listener: SuggestedActionsListenerRemote): void;
    executeSuggestedAction(actionId: mojoBase_mojom_UnguessableToken, channel: (mojoBase_mojom_GenericPendingAssociatedReceiver | null)): void;
    openSettings(): void;
}
export declare class SelectionOverlayPageHandlerRemote implements SelectionOverlayPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<SelectionOverlayPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SelectionOverlayPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SelectionOverlayPageHandlerPendingReceiverEndpoint);
    dismissOverlay(dismissReason: DismissOverlayReason): void;
    adjustRegion(target: SelectedRegion, isUsingKeyboard: boolean): void;
    deleteRegion(id: mojoBase_mojom_UnguessableToken, isUsingKeyboard: boolean): void;
    closePreselectionBubble(): void;
    addBackgroundBlur(): void;
    setLiveBlur(enabled: boolean): void;
    submitPrompt(prompt: string): void;
    getSuggestedActions(listener: SuggestedActionsListenerRemote): void;
    executeSuggestedAction(actionId: mojoBase_mojom_UnguessableToken, channel: (mojoBase_mojom_GenericPendingAssociatedReceiver | null)): void;
    openSettings(): void;
}
/**
 * An object which receives request messages for the SelectionOverlayPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SelectionOverlayPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SelectionOverlayPageHandlerRemote, SelectionOverlayPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SelectionOverlayPageHandlerRemote, SelectionOverlayPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SelectionOverlayPageHandlerInterface);
}
export declare class SelectionOverlayPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SelectionOverlayPageHandlerRemote;
}
/**
 * An object which receives request messages for the SelectionOverlayPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SelectionOverlayPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SelectionOverlayPageHandlerRemote, SelectionOverlayPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SelectionOverlayPageHandlerRemote, SelectionOverlayPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    dismissOverlay: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(dismissReason: DismissOverlayReason) => any>;
    adjustRegion: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(target: SelectedRegion, isUsingKeyboard: boolean) => any>;
    deleteRegion: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: mojoBase_mojom_UnguessableToken, isUsingKeyboard: boolean) => any>;
    closePreselectionBubble: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    addBackgroundBlur: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setLiveBlur: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    submitPrompt: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(prompt: string) => any>;
    getSuggestedActions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(listener: SuggestedActionsListenerRemote) => any>;
    executeSuggestedAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(actionId: mojoBase_mojom_UnguessableToken, channel: (mojoBase_mojom_GenericPendingAssociatedReceiver | null)) => any>;
    openSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SelectionOverlayPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SelectionOverlayPagePendingReceiver>;
export declare class SelectionOverlayPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SelectionOverlayPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<SelectionOverlayPagePendingReceiver>;
    constructor(handle: MojoHandle | SelectionOverlayPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SelectionOverlayPageInterface {
    screenshotReceived(screenshot: skia_mojom_BitmapMappedFromTrustedProcess): void;
    setPostRegionSelections(regions: SelectedRegion[]): void;
    setInteractionOptions(options: InteractionOptions): void;
    setSidePanelOpen(open: boolean): void;
}
export declare class SelectionOverlayPageRemote implements SelectionOverlayPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<SelectionOverlayPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SelectionOverlayPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SelectionOverlayPagePendingReceiverEndpoint);
    screenshotReceived(screenshot: skia_mojom_BitmapMappedFromTrustedProcess): void;
    setPostRegionSelections(regions: SelectedRegion[]): void;
    setInteractionOptions(options: InteractionOptions): void;
    setSidePanelOpen(open: boolean): void;
}
/**
 * An object which receives request messages for the SelectionOverlayPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SelectionOverlayPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SelectionOverlayPageRemote, SelectionOverlayPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SelectionOverlayPageRemote, SelectionOverlayPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SelectionOverlayPageInterface);
}
export declare class SelectionOverlayPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SelectionOverlayPageRemote;
}
/**
 * An object which receives request messages for the SelectionOverlayPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SelectionOverlayPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SelectionOverlayPageRemote, SelectionOverlayPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SelectionOverlayPageRemote, SelectionOverlayPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    screenshotReceived: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(screenshot: skia_mojom_BitmapMappedFromTrustedProcess) => any>;
    setPostRegionSelections: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(regions: SelectedRegion[]) => any>;
    setInteractionOptions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: InteractionOptions) => any>;
    setSidePanelOpen: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(open: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const SelectedRegionSpec: {
    $: mojo.internal.MojomType;
};
export declare const InteractionOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SuggestedActionSpec: {
    $: mojo.internal.MojomType;
};
export declare const SuggestedActionsListener_OnSuggestedActionsAvailable_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPageHandler_DismissOverlay_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPageHandler_AdjustRegion_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPageHandler_DeleteRegion_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPageHandler_ClosePreselectionBubble_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPageHandler_AddBackgroundBlur_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPageHandler_SetLiveBlur_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPageHandler_SubmitPrompt_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPageHandler_GetSuggestedActions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPageHandler_ExecuteSuggestedAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPageHandler_OpenSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPage_ScreenshotReceived_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPage_SetPostRegionSelections_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPage_SetInteractionOptions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectionOverlayPage_SetSidePanelOpen_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const RegionShapeSpec: {
    $: mojo.internal.MojomType;
};
export declare interface SelectedRegionMojoType {
    id: mojoBase_mojom_UnguessableToken;
    shape: RegionShape;
}
export type SelectedRegion = SelectedRegionMojoType;
export declare interface InteractionOptionsMojoType {
    hideHandles: boolean;
    disableMultiSelect: boolean;
    skipIntroAnimation: boolean;
}
export type InteractionOptions = InteractionOptionsMojoType;
export declare interface SuggestedActionMojoType {
    id: mojoBase_mojom_UnguessableToken;
    title: string;
    icon: SuggestedActionIcon;
    action: selection_mojom_Action;
}
export type SuggestedAction = SuggestedActionMojoType;
export declare interface SuggestedActionsListener_OnSuggestedActionsAvailable_ParamsMojoType {
    actions: SuggestedAction[];
}
export type SuggestedActionsListener_OnSuggestedActionsAvailable_Params = SuggestedActionsListener_OnSuggestedActionsAvailable_ParamsMojoType;
export declare interface SelectionOverlayPageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: SelectionOverlayPageHandlerPendingReceiver;
    page: SelectionOverlayPageRemote;
}
export type SelectionOverlayPageHandlerFactory_CreatePageHandler_Params = SelectionOverlayPageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface SelectionOverlayPageHandler_DismissOverlay_ParamsMojoType {
    dismissReason: DismissOverlayReason;
}
export type SelectionOverlayPageHandler_DismissOverlay_Params = SelectionOverlayPageHandler_DismissOverlay_ParamsMojoType;
export declare interface SelectionOverlayPageHandler_AdjustRegion_ParamsMojoType {
    target: SelectedRegion;
    isUsingKeyboard: boolean;
}
export type SelectionOverlayPageHandler_AdjustRegion_Params = SelectionOverlayPageHandler_AdjustRegion_ParamsMojoType;
export declare interface SelectionOverlayPageHandler_DeleteRegion_ParamsMojoType {
    id: mojoBase_mojom_UnguessableToken;
    isUsingKeyboard: boolean;
}
export type SelectionOverlayPageHandler_DeleteRegion_Params = SelectionOverlayPageHandler_DeleteRegion_ParamsMojoType;
export declare interface SelectionOverlayPageHandler_ClosePreselectionBubble_ParamsMojoType {
}
export type SelectionOverlayPageHandler_ClosePreselectionBubble_Params = SelectionOverlayPageHandler_ClosePreselectionBubble_ParamsMojoType;
export declare interface SelectionOverlayPageHandler_AddBackgroundBlur_ParamsMojoType {
}
export type SelectionOverlayPageHandler_AddBackgroundBlur_Params = SelectionOverlayPageHandler_AddBackgroundBlur_ParamsMojoType;
export declare interface SelectionOverlayPageHandler_SetLiveBlur_ParamsMojoType {
    enabled: boolean;
}
export type SelectionOverlayPageHandler_SetLiveBlur_Params = SelectionOverlayPageHandler_SetLiveBlur_ParamsMojoType;
export declare interface SelectionOverlayPageHandler_SubmitPrompt_ParamsMojoType {
    prompt: string;
}
export type SelectionOverlayPageHandler_SubmitPrompt_Params = SelectionOverlayPageHandler_SubmitPrompt_ParamsMojoType;
export declare interface SelectionOverlayPageHandler_GetSuggestedActions_ParamsMojoType {
    listener: SuggestedActionsListenerRemote;
}
export type SelectionOverlayPageHandler_GetSuggestedActions_Params = SelectionOverlayPageHandler_GetSuggestedActions_ParamsMojoType;
export declare interface SelectionOverlayPageHandler_ExecuteSuggestedAction_ParamsMojoType {
    actionId: mojoBase_mojom_UnguessableToken;
    channel: (mojoBase_mojom_GenericPendingAssociatedReceiver | null);
}
export type SelectionOverlayPageHandler_ExecuteSuggestedAction_Params = SelectionOverlayPageHandler_ExecuteSuggestedAction_ParamsMojoType;
export declare interface SelectionOverlayPageHandler_OpenSettings_ParamsMojoType {
}
export type SelectionOverlayPageHandler_OpenSettings_Params = SelectionOverlayPageHandler_OpenSettings_ParamsMojoType;
export declare interface SelectionOverlayPage_ScreenshotReceived_ParamsMojoType {
    screenshot: skia_mojom_BitmapMappedFromTrustedProcess;
}
export type SelectionOverlayPage_ScreenshotReceived_Params = SelectionOverlayPage_ScreenshotReceived_ParamsMojoType;
export declare interface SelectionOverlayPage_SetPostRegionSelections_ParamsMojoType {
    regions: SelectedRegion[];
}
export type SelectionOverlayPage_SetPostRegionSelections_Params = SelectionOverlayPage_SetPostRegionSelections_ParamsMojoType;
export declare interface SelectionOverlayPage_SetInteractionOptions_ParamsMojoType {
    options: InteractionOptions;
}
export type SelectionOverlayPage_SetInteractionOptions_Params = SelectionOverlayPage_SetInteractionOptions_ParamsMojoType;
export declare interface SelectionOverlayPage_SetSidePanelOpen_ParamsMojoType {
    open: boolean;
}
export type SelectionOverlayPage_SetSidePanelOpen_Params = SelectionOverlayPage_SetSidePanelOpen_ParamsMojoType;
export declare interface RegionShape {
    rect?: gfx_mojom_RectF;
    polyline?: gfx_mojom_PointF[];
}
export declare enum RegionShapeFieldTags {
    RECT = 0,
    POLYLINE = 1
}
export declare function whichRegionShape(u: RegionShape): RegionShapeFieldTags;
