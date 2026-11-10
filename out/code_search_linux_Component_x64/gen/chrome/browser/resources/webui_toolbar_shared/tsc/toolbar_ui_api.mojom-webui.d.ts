import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { IconUpdate as toolbarUiApi_mojom_IconUpdate } from './icon_handle.mojom-webui.js';
import { ContentSettingImageType as toolbarUiApi_mojom_ContentSettingImageType, ContextMenuType as toolbarUiApi_mojom_ContextMenuType, FocusRequestTarget as toolbarUiApi_mojom_FocusRequestTarget, LhsChipIdentifier as toolbarUiApi_mojom_LhsChipIdentifier, PageActionId as toolbarUiApi_mojom_PageActionId, PageActionTrigger as toolbarUiApi_mojom_PageActionTrigger, PinnedToolbarAction as toolbarUiApi_mojom_PinnedToolbarAction, ToolbarState as toolbarUiApi_mojom_ToolbarState, OmniboxAction as toolbarUiApi_mojom_OmniboxAction } from './toolbar_ui_api_data_model.mojom-webui.js';
import { Empty as mojoBase_mojom_Empty } from '//resources/mojo/mojo/public/mojom/base/empty.mojom-webui.js';
import { Error as mojoBase_mojom_Error } from '//resources/mojo/mojo/public/mojom/base/error.mojom-webui.js';
import { String16 as mojoBase_mojom_String16 } from '//resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js';
import { DragEventSource as ui_mojom_DragEventSource } from '//resources/mojo/ui/base/dragdrop/mojom/drag_drop_types.mojom-webui.js';
import { MenuSourceType as ui_mojom_MenuSourceType } from '//resources/mojo/ui/base/mojom/menu_source_type.mojom-webui.js';
import { PointF as gfx_mojom_PointF, RectF as gfx_mojom_RectF } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import { TrackedElementIdentifier as trackedElement_mojom_TrackedElementIdentifier } from '//resources/mojo/ui/webui/resources/js/tracked_element/tracked_element.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type ToolbarUIObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ToolbarUIObserverPendingReceiver>;
export declare class ToolbarUIObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ToolbarUIObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<ToolbarUIObserverPendingReceiver>;
    constructor(handle: MojoHandle | ToolbarUIObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ToolbarUIObserverInterface {
    onToolbarStateChanged(icons: toolbarUiApi_mojom_IconUpdate[], state: toolbarUiApi_mojom_ToolbarState): void;
    onFocusRequested(target: toolbarUiApi_mojom_FocusRequestTarget): void;
    showSplitTabsContextMenu(): void;
}
export declare class ToolbarUIObserverRemote implements ToolbarUIObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<ToolbarUIObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ToolbarUIObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ToolbarUIObserverPendingReceiverEndpoint);
    onToolbarStateChanged(icons: toolbarUiApi_mojom_IconUpdate[], state: toolbarUiApi_mojom_ToolbarState): void;
    onFocusRequested(target: toolbarUiApi_mojom_FocusRequestTarget): void;
    showSplitTabsContextMenu(): void;
}
/**
 * An object which receives request messages for the ToolbarUIObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ToolbarUIObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ToolbarUIObserverRemote, ToolbarUIObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ToolbarUIObserverRemote, ToolbarUIObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ToolbarUIObserverInterface);
}
export declare class ToolbarUIObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ToolbarUIObserverRemote;
}
/**
 * An object which receives request messages for the ToolbarUIObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ToolbarUIObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ToolbarUIObserverRemote, ToolbarUIObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ToolbarUIObserverRemote, ToolbarUIObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onToolbarStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(icons: toolbarUiApi_mojom_IconUpdate[], state: toolbarUiApi_mojom_ToolbarState) => any>;
    onFocusRequested: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(target: toolbarUiApi_mojom_FocusRequestTarget) => any>;
    showSplitTabsContextMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ToolbarUIServicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ToolbarUIServicePendingReceiver>;
export declare class ToolbarUIServicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ToolbarUIService> {
    handle: mojo.internal.interfaceSupport.Endpoint<ToolbarUIServicePendingReceiver>;
    constructor(handle: MojoHandle | ToolbarUIServicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ToolbarUIServiceInterface {
    bind(): Promise<InitialState>;
    showContextMenu(menuType: toolbarUiApi_mojom_ContextMenuType, boundsInCssPixels: gfx_mojom_RectF, source: ui_mojom_MenuSourceType, showMenuToken: (number | null)): void;
    showOverflowMenu(controls: OverflowMenuItem[], boundsInCssPixels: gfx_mojom_RectF, source: ui_mojom_MenuSourceType): Promise<mojoBase_mojom_Empty>;
    onOmniboxAction(action: toolbarUiApi_mojom_OmniboxAction): Promise<mojoBase_mojom_Empty>;
    onPageInitialized(): void;
    onContentSettingImagePointerDown(type: toolbarUiApi_mojom_ContentSettingImageType): void;
    showContentSettingsBubble(type: toolbarUiApi_mojom_ContentSettingImageType, isPointerInteraction: boolean): Promise<mojoBase_mojom_Empty>;
    onPageActionClick(actionId: toolbarUiApi_mojom_PageActionId, trigger: toolbarUiApi_mojom_PageActionTrigger): Promise<mojoBase_mojom_Empty>;
    onPageActionChipShowingChanged(actionId: toolbarUiApi_mojom_PageActionId, isShowing: boolean): Promise<mojoBase_mojom_Empty>;
    invokePinnedToolbarAction(actionId: toolbarUiApi_mojom_PinnedToolbarAction): void;
    onLocationBarFocusWithinChanged(focusInside: boolean): void;
    movePinnedToolbarAction(actionId: toolbarUiApi_mojom_PinnedToolbarAction, targetIndex: number): void;
    movePinnedToolbarActionBy(actionId: toolbarUiApi_mojom_PinnedToolbarAction, delta: number): void;
    moveExtensionAction(extensionId: string, targetIndex: number): void;
    moveExtensionActionBy(extensionId: string, delta: number): void;
    onLhsChipMousePressed(identifier: toolbarUiApi_mojom_LhsChipIdentifier, isMiddleClick: boolean): void;
    onLhsChipClicked(identifier: toolbarUiApi_mojom_LhsChipIdentifier, isMouseInteraction: boolean, stateToken: number): void;
    onLhsChipPointerEntered(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onLhsChipPointerExited(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onLhsChipExpandAnimationEnded(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onLhsChipCollapseAnimationEnded(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onLhsChipDrag(identifier: toolbarUiApi_mojom_LhsChipIdentifier, source: ui_mojom_DragEventSource): void;
    onHomeButtonDropUrl(url: url_mojom_Url): void;
    onHomeButtonDropFile(dropPosition: gfx_mojom_PointF): void;
    onHomeButtonDropText(text: string): void;
    onToolbarDropFile(dropPosition: gfx_mojom_PointF): void;
    showAvatarMenu(): Promise<mojoBase_mojom_Empty>;
    setAvatarButtonHovered(hovered: boolean): Promise<mojoBase_mojom_Empty>;
    setAvatarButtonFocused(focused: boolean): Promise<mojoBase_mojom_Empty>;
    setAvatarButtonIphPromoShowing(showing: boolean): Promise<mojoBase_mojom_Empty>;
    onAppMenuFocusChanged(focused: boolean): void;
    executeExtensionAction(extensionId: string): void;
    showExtensionContextMenu(extensionId: string, source: ui_mojom_MenuSourceType): void;
    adjustOmniboxTextForCopy(text: mojoBase_mojom_String16, selectionStart: number): Promise<AdjustOmniboxTextForCopyResult>;
    onPerformanceInterventionButtonClicked(): void;
    onMediaButtonClicked(): void;
    onGlicButtonClicked(): void;
}
export declare class ToolbarUIServiceRemote implements ToolbarUIServiceInterface, mojo.internal.interfaceSupport.InterfaceRemote<ToolbarUIServicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ToolbarUIServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ToolbarUIServicePendingReceiverEndpoint);
    bind(): Promise<InitialState>;
    showContextMenu(menuType: toolbarUiApi_mojom_ContextMenuType, boundsInCssPixels: gfx_mojom_RectF, source: ui_mojom_MenuSourceType, showMenuToken: (number | null)): void;
    showOverflowMenu(controls: OverflowMenuItem[], boundsInCssPixels: gfx_mojom_RectF, source: ui_mojom_MenuSourceType): Promise<mojoBase_mojom_Empty>;
    onOmniboxAction(action: toolbarUiApi_mojom_OmniboxAction): Promise<mojoBase_mojom_Empty>;
    onPageInitialized(): void;
    onContentSettingImagePointerDown(type: toolbarUiApi_mojom_ContentSettingImageType): void;
    showContentSettingsBubble(type: toolbarUiApi_mojom_ContentSettingImageType, isPointerInteraction: boolean): Promise<mojoBase_mojom_Empty>;
    onPageActionClick(actionId: toolbarUiApi_mojom_PageActionId, trigger: toolbarUiApi_mojom_PageActionTrigger): Promise<mojoBase_mojom_Empty>;
    onPageActionChipShowingChanged(actionId: toolbarUiApi_mojom_PageActionId, isShowing: boolean): Promise<mojoBase_mojom_Empty>;
    invokePinnedToolbarAction(actionId: toolbarUiApi_mojom_PinnedToolbarAction): void;
    onLocationBarFocusWithinChanged(focusInside: boolean): void;
    movePinnedToolbarAction(actionId: toolbarUiApi_mojom_PinnedToolbarAction, targetIndex: number): void;
    movePinnedToolbarActionBy(actionId: toolbarUiApi_mojom_PinnedToolbarAction, delta: number): void;
    moveExtensionAction(extensionId: string, targetIndex: number): void;
    moveExtensionActionBy(extensionId: string, delta: number): void;
    onLhsChipMousePressed(identifier: toolbarUiApi_mojom_LhsChipIdentifier, isMiddleClick: boolean): void;
    onLhsChipClicked(identifier: toolbarUiApi_mojom_LhsChipIdentifier, isMouseInteraction: boolean, stateToken: number): void;
    onLhsChipPointerEntered(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onLhsChipPointerExited(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onLhsChipExpandAnimationEnded(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onLhsChipCollapseAnimationEnded(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onLhsChipDrag(identifier: toolbarUiApi_mojom_LhsChipIdentifier, source: ui_mojom_DragEventSource): void;
    onHomeButtonDropUrl(url: url_mojom_Url): void;
    onHomeButtonDropFile(dropPosition: gfx_mojom_PointF): void;
    onHomeButtonDropText(text: string): void;
    onToolbarDropFile(dropPosition: gfx_mojom_PointF): void;
    showAvatarMenu(): Promise<mojoBase_mojom_Empty>;
    setAvatarButtonHovered(hovered: boolean): Promise<mojoBase_mojom_Empty>;
    setAvatarButtonFocused(focused: boolean): Promise<mojoBase_mojom_Empty>;
    setAvatarButtonIphPromoShowing(showing: boolean): Promise<mojoBase_mojom_Empty>;
    onAppMenuFocusChanged(focused: boolean): void;
    executeExtensionAction(extensionId: string): void;
    showExtensionContextMenu(extensionId: string, source: ui_mojom_MenuSourceType): void;
    adjustOmniboxTextForCopy(text: mojoBase_mojom_String16, selectionStart: number): Promise<AdjustOmniboxTextForCopyResult>;
    onPerformanceInterventionButtonClicked(): void;
    onMediaButtonClicked(): void;
    onGlicButtonClicked(): void;
}
/**
 * An object which receives request messages for the ToolbarUIService
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ToolbarUIServiceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ToolbarUIServiceRemote, ToolbarUIServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ToolbarUIServiceRemote, ToolbarUIServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ToolbarUIServiceInterface);
}
export declare class ToolbarUIService {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ToolbarUIServiceRemote;
}
/**
 * An object which receives request messages for the ToolbarUIService
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ToolbarUIServiceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ToolbarUIServiceRemote, ToolbarUIServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ToolbarUIServiceRemote, ToolbarUIServicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    bind: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showContextMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(menuType: toolbarUiApi_mojom_ContextMenuType, boundsInCssPixels: gfx_mojom_RectF, source: ui_mojom_MenuSourceType, showMenuToken: (number | null)) => any>;
    showOverflowMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(controls: OverflowMenuItem[], boundsInCssPixels: gfx_mojom_RectF, source: ui_mojom_MenuSourceType) => any>;
    onOmniboxAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(action: toolbarUiApi_mojom_OmniboxAction) => any>;
    onPageInitialized: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onContentSettingImagePointerDown: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(type: toolbarUiApi_mojom_ContentSettingImageType) => any>;
    showContentSettingsBubble: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(type: toolbarUiApi_mojom_ContentSettingImageType, isPointerInteraction: boolean) => any>;
    onPageActionClick: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(actionId: toolbarUiApi_mojom_PageActionId, trigger: toolbarUiApi_mojom_PageActionTrigger) => any>;
    onPageActionChipShowingChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(actionId: toolbarUiApi_mojom_PageActionId, isShowing: boolean) => any>;
    invokePinnedToolbarAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(actionId: toolbarUiApi_mojom_PinnedToolbarAction) => any>;
    onLocationBarFocusWithinChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(focusInside: boolean) => any>;
    movePinnedToolbarAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(actionId: toolbarUiApi_mojom_PinnedToolbarAction, targetIndex: number) => any>;
    movePinnedToolbarActionBy: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(actionId: toolbarUiApi_mojom_PinnedToolbarAction, delta: number) => any>;
    moveExtensionAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(extensionId: string, targetIndex: number) => any>;
    moveExtensionActionBy: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(extensionId: string, delta: number) => any>;
    onLhsChipMousePressed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier, isMiddleClick: boolean) => any>;
    onLhsChipClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier, isMouseInteraction: boolean, stateToken: number) => any>;
    onLhsChipPointerEntered: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier) => any>;
    onLhsChipPointerExited: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier) => any>;
    onLhsChipExpandAnimationEnded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier) => any>;
    onLhsChipCollapseAnimationEnded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier) => any>;
    onLhsChipDrag: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier, source: ui_mojom_DragEventSource) => any>;
    onHomeButtonDropUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    onHomeButtonDropFile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(dropPosition: gfx_mojom_PointF) => any>;
    onHomeButtonDropText: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(text: string) => any>;
    onToolbarDropFile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(dropPosition: gfx_mojom_PointF) => any>;
    showAvatarMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setAvatarButtonHovered: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(hovered: boolean) => any>;
    setAvatarButtonFocused: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(focused: boolean) => any>;
    setAvatarButtonIphPromoShowing: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(showing: boolean) => any>;
    onAppMenuFocusChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(focused: boolean) => any>;
    executeExtensionAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(extensionId: string) => any>;
    showExtensionContextMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(extensionId: string, source: ui_mojom_MenuSourceType) => any>;
    adjustOmniboxTextForCopy: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(text: mojoBase_mojom_String16, selectionStart: number) => any>;
    onPerformanceInterventionButtonClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onMediaButtonClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onGlicButtonClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const InitialStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const AdjustOmniboxTextForCopyResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const OverflowMenuItemSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIObserver_OnToolbarStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIObserver_OnFocusRequested_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIObserver_ShowSplitTabsContextMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_Bind_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_Bind_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ShowContextMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ShowOverflowMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ShowOverflowMenu_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnOmniboxAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnOmniboxAction_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnPageInitialized_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnContentSettingImagePointerDown_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ShowContentSettingsBubble_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ShowContentSettingsBubble_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnPageActionClick_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnPageActionClick_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnPageActionChipShowingChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnPageActionChipShowingChanged_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_InvokePinnedToolbarAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnLocationBarFocusWithinChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_MovePinnedToolbarAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_MovePinnedToolbarActionBy_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_MoveExtensionAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_MoveExtensionActionBy_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnLhsChipMousePressed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnLhsChipClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnLhsChipPointerEntered_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnLhsChipPointerExited_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnLhsChipExpandAnimationEnded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnLhsChipCollapseAnimationEnded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnLhsChipDrag_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnHomeButtonDropUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnHomeButtonDropFile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnHomeButtonDropText_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnToolbarDropFile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ShowAvatarMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ShowAvatarMenu_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_SetAvatarButtonHovered_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_SetAvatarButtonHovered_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_SetAvatarButtonFocused_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_SetAvatarButtonFocused_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_SetAvatarButtonIphPromoShowing_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_SetAvatarButtonIphPromoShowing_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnAppMenuFocusChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ExecuteExtensionAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ShowExtensionContextMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_AdjustOmniboxTextForCopy_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_AdjustOmniboxTextForCopy_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnPerformanceInterventionButtonClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnMediaButtonClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnGlicButtonClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const OverflowMenuItemIdSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_Bind_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ShowOverflowMenu_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnOmniboxAction_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ShowContentSettingsBubble_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnPageActionClick_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_OnPageActionChipShowingChanged_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_ShowAvatarMenu_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_SetAvatarButtonHovered_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_SetAvatarButtonFocused_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_SetAvatarButtonIphPromoShowing_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolbarUIService_AdjustOmniboxTextForCopy_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface InitialStateMojoType {
    icons: toolbarUiApi_mojom_IconUpdate[];
    state: toolbarUiApi_mojom_ToolbarState;
    updateStream: ToolbarUIObserverPendingReceiver;
}
export type InitialState = InitialStateMojoType;
export declare interface AdjustOmniboxTextForCopyResultMojoType {
    adjustedText: mojoBase_mojom_String16;
    adjustedUrl: (url_mojom_Url | null);
    pageTitle: (mojoBase_mojom_String16 | null);
}
export type AdjustOmniboxTextForCopyResult = AdjustOmniboxTextForCopyResultMojoType;
export declare interface OverflowMenuItemMojoType {
    id: OverflowMenuItemId;
    isEnabled: boolean;
}
export type OverflowMenuItem = OverflowMenuItemMojoType;
export declare interface ToolbarUIObserver_OnToolbarStateChanged_ParamsMojoType {
    icons: toolbarUiApi_mojom_IconUpdate[];
    state: toolbarUiApi_mojom_ToolbarState;
}
export type ToolbarUIObserver_OnToolbarStateChanged_Params = ToolbarUIObserver_OnToolbarStateChanged_ParamsMojoType;
export declare interface ToolbarUIObserver_OnFocusRequested_ParamsMojoType {
    target: toolbarUiApi_mojom_FocusRequestTarget;
}
export type ToolbarUIObserver_OnFocusRequested_Params = ToolbarUIObserver_OnFocusRequested_ParamsMojoType;
export declare interface ToolbarUIObserver_ShowSplitTabsContextMenu_ParamsMojoType {
}
export type ToolbarUIObserver_ShowSplitTabsContextMenu_Params = ToolbarUIObserver_ShowSplitTabsContextMenu_ParamsMojoType;
export declare interface ToolbarUIService_Bind_ParamsMojoType {
}
export type ToolbarUIService_Bind_Params = ToolbarUIService_Bind_ParamsMojoType;
export declare interface ToolbarUIService_Bind_ResponseParamsMojoType {
    result: ToolbarUIService_Bind_ResponseParam_Result;
}
export type ToolbarUIService_Bind_ResponseParams = ToolbarUIService_Bind_ResponseParamsMojoType;
export declare interface ToolbarUIService_ShowContextMenu_ParamsMojoType {
    menuType: toolbarUiApi_mojom_ContextMenuType;
    source: ui_mojom_MenuSourceType;
    boundsInCssPixels: gfx_mojom_RectF;
    showMenuToken: (number | null);
}
export type ToolbarUIService_ShowContextMenu_Params = ToolbarUIService_ShowContextMenu_ParamsMojoType;
export declare interface ToolbarUIService_ShowOverflowMenu_ParamsMojoType {
    controls: OverflowMenuItem[];
    boundsInCssPixels: gfx_mojom_RectF;
    source: ui_mojom_MenuSourceType;
}
export type ToolbarUIService_ShowOverflowMenu_Params = ToolbarUIService_ShowOverflowMenu_ParamsMojoType;
export declare interface ToolbarUIService_ShowOverflowMenu_ResponseParamsMojoType {
    result: ToolbarUIService_ShowOverflowMenu_ResponseParam_Result;
}
export type ToolbarUIService_ShowOverflowMenu_ResponseParams = ToolbarUIService_ShowOverflowMenu_ResponseParamsMojoType;
export declare interface ToolbarUIService_OnOmniboxAction_ParamsMojoType {
    action: toolbarUiApi_mojom_OmniboxAction;
}
export type ToolbarUIService_OnOmniboxAction_Params = ToolbarUIService_OnOmniboxAction_ParamsMojoType;
export declare interface ToolbarUIService_OnOmniboxAction_ResponseParamsMojoType {
    result: ToolbarUIService_OnOmniboxAction_ResponseParam_Result;
}
export type ToolbarUIService_OnOmniboxAction_ResponseParams = ToolbarUIService_OnOmniboxAction_ResponseParamsMojoType;
export declare interface ToolbarUIService_OnPageInitialized_ParamsMojoType {
}
export type ToolbarUIService_OnPageInitialized_Params = ToolbarUIService_OnPageInitialized_ParamsMojoType;
export declare interface ToolbarUIService_OnContentSettingImagePointerDown_ParamsMojoType {
    type: toolbarUiApi_mojom_ContentSettingImageType;
}
export type ToolbarUIService_OnContentSettingImagePointerDown_Params = ToolbarUIService_OnContentSettingImagePointerDown_ParamsMojoType;
export declare interface ToolbarUIService_ShowContentSettingsBubble_ParamsMojoType {
    type: toolbarUiApi_mojom_ContentSettingImageType;
    isPointerInteraction: boolean;
}
export type ToolbarUIService_ShowContentSettingsBubble_Params = ToolbarUIService_ShowContentSettingsBubble_ParamsMojoType;
export declare interface ToolbarUIService_ShowContentSettingsBubble_ResponseParamsMojoType {
    result: ToolbarUIService_ShowContentSettingsBubble_ResponseParam_Result;
}
export type ToolbarUIService_ShowContentSettingsBubble_ResponseParams = ToolbarUIService_ShowContentSettingsBubble_ResponseParamsMojoType;
export declare interface ToolbarUIService_OnPageActionClick_ParamsMojoType {
    actionId: toolbarUiApi_mojom_PageActionId;
    trigger: toolbarUiApi_mojom_PageActionTrigger;
}
export type ToolbarUIService_OnPageActionClick_Params = ToolbarUIService_OnPageActionClick_ParamsMojoType;
export declare interface ToolbarUIService_OnPageActionClick_ResponseParamsMojoType {
    result: ToolbarUIService_OnPageActionClick_ResponseParam_Result;
}
export type ToolbarUIService_OnPageActionClick_ResponseParams = ToolbarUIService_OnPageActionClick_ResponseParamsMojoType;
export declare interface ToolbarUIService_OnPageActionChipShowingChanged_ParamsMojoType {
    actionId: toolbarUiApi_mojom_PageActionId;
    isShowing: boolean;
}
export type ToolbarUIService_OnPageActionChipShowingChanged_Params = ToolbarUIService_OnPageActionChipShowingChanged_ParamsMojoType;
export declare interface ToolbarUIService_OnPageActionChipShowingChanged_ResponseParamsMojoType {
    result: ToolbarUIService_OnPageActionChipShowingChanged_ResponseParam_Result;
}
export type ToolbarUIService_OnPageActionChipShowingChanged_ResponseParams = ToolbarUIService_OnPageActionChipShowingChanged_ResponseParamsMojoType;
export declare interface ToolbarUIService_InvokePinnedToolbarAction_ParamsMojoType {
    actionId: toolbarUiApi_mojom_PinnedToolbarAction;
}
export type ToolbarUIService_InvokePinnedToolbarAction_Params = ToolbarUIService_InvokePinnedToolbarAction_ParamsMojoType;
export declare interface ToolbarUIService_OnLocationBarFocusWithinChanged_ParamsMojoType {
    focusInside: boolean;
}
export type ToolbarUIService_OnLocationBarFocusWithinChanged_Params = ToolbarUIService_OnLocationBarFocusWithinChanged_ParamsMojoType;
export declare interface ToolbarUIService_MovePinnedToolbarAction_ParamsMojoType {
    actionId: toolbarUiApi_mojom_PinnedToolbarAction;
    targetIndex: number;
}
export type ToolbarUIService_MovePinnedToolbarAction_Params = ToolbarUIService_MovePinnedToolbarAction_ParamsMojoType;
export declare interface ToolbarUIService_MovePinnedToolbarActionBy_ParamsMojoType {
    actionId: toolbarUiApi_mojom_PinnedToolbarAction;
    delta: number;
}
export type ToolbarUIService_MovePinnedToolbarActionBy_Params = ToolbarUIService_MovePinnedToolbarActionBy_ParamsMojoType;
export declare interface ToolbarUIService_MoveExtensionAction_ParamsMojoType {
    extensionId: string;
    targetIndex: number;
}
export type ToolbarUIService_MoveExtensionAction_Params = ToolbarUIService_MoveExtensionAction_ParamsMojoType;
export declare interface ToolbarUIService_MoveExtensionActionBy_ParamsMojoType {
    extensionId: string;
    delta: number;
}
export type ToolbarUIService_MoveExtensionActionBy_Params = ToolbarUIService_MoveExtensionActionBy_ParamsMojoType;
export declare interface ToolbarUIService_OnLhsChipMousePressed_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
    isMiddleClick: boolean;
}
export type ToolbarUIService_OnLhsChipMousePressed_Params = ToolbarUIService_OnLhsChipMousePressed_ParamsMojoType;
export declare interface ToolbarUIService_OnLhsChipClicked_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
    isMouseInteraction: boolean;
    stateToken: number;
}
export type ToolbarUIService_OnLhsChipClicked_Params = ToolbarUIService_OnLhsChipClicked_ParamsMojoType;
export declare interface ToolbarUIService_OnLhsChipPointerEntered_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
}
export type ToolbarUIService_OnLhsChipPointerEntered_Params = ToolbarUIService_OnLhsChipPointerEntered_ParamsMojoType;
export declare interface ToolbarUIService_OnLhsChipPointerExited_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
}
export type ToolbarUIService_OnLhsChipPointerExited_Params = ToolbarUIService_OnLhsChipPointerExited_ParamsMojoType;
export declare interface ToolbarUIService_OnLhsChipExpandAnimationEnded_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
}
export type ToolbarUIService_OnLhsChipExpandAnimationEnded_Params = ToolbarUIService_OnLhsChipExpandAnimationEnded_ParamsMojoType;
export declare interface ToolbarUIService_OnLhsChipCollapseAnimationEnded_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
}
export type ToolbarUIService_OnLhsChipCollapseAnimationEnded_Params = ToolbarUIService_OnLhsChipCollapseAnimationEnded_ParamsMojoType;
export declare interface ToolbarUIService_OnLhsChipDrag_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
    source: ui_mojom_DragEventSource;
}
export type ToolbarUIService_OnLhsChipDrag_Params = ToolbarUIService_OnLhsChipDrag_ParamsMojoType;
export declare interface ToolbarUIService_OnHomeButtonDropUrl_ParamsMojoType {
    url: url_mojom_Url;
}
export type ToolbarUIService_OnHomeButtonDropUrl_Params = ToolbarUIService_OnHomeButtonDropUrl_ParamsMojoType;
export declare interface ToolbarUIService_OnHomeButtonDropFile_ParamsMojoType {
    dropPosition: gfx_mojom_PointF;
}
export type ToolbarUIService_OnHomeButtonDropFile_Params = ToolbarUIService_OnHomeButtonDropFile_ParamsMojoType;
export declare interface ToolbarUIService_OnHomeButtonDropText_ParamsMojoType {
    text: string;
}
export type ToolbarUIService_OnHomeButtonDropText_Params = ToolbarUIService_OnHomeButtonDropText_ParamsMojoType;
export declare interface ToolbarUIService_OnToolbarDropFile_ParamsMojoType {
    dropPosition: gfx_mojom_PointF;
}
export type ToolbarUIService_OnToolbarDropFile_Params = ToolbarUIService_OnToolbarDropFile_ParamsMojoType;
export declare interface ToolbarUIService_ShowAvatarMenu_ParamsMojoType {
}
export type ToolbarUIService_ShowAvatarMenu_Params = ToolbarUIService_ShowAvatarMenu_ParamsMojoType;
export declare interface ToolbarUIService_ShowAvatarMenu_ResponseParamsMojoType {
    result: ToolbarUIService_ShowAvatarMenu_ResponseParam_Result;
}
export type ToolbarUIService_ShowAvatarMenu_ResponseParams = ToolbarUIService_ShowAvatarMenu_ResponseParamsMojoType;
export declare interface ToolbarUIService_SetAvatarButtonHovered_ParamsMojoType {
    hovered: boolean;
}
export type ToolbarUIService_SetAvatarButtonHovered_Params = ToolbarUIService_SetAvatarButtonHovered_ParamsMojoType;
export declare interface ToolbarUIService_SetAvatarButtonHovered_ResponseParamsMojoType {
    result: ToolbarUIService_SetAvatarButtonHovered_ResponseParam_Result;
}
export type ToolbarUIService_SetAvatarButtonHovered_ResponseParams = ToolbarUIService_SetAvatarButtonHovered_ResponseParamsMojoType;
export declare interface ToolbarUIService_SetAvatarButtonFocused_ParamsMojoType {
    focused: boolean;
}
export type ToolbarUIService_SetAvatarButtonFocused_Params = ToolbarUIService_SetAvatarButtonFocused_ParamsMojoType;
export declare interface ToolbarUIService_SetAvatarButtonFocused_ResponseParamsMojoType {
    result: ToolbarUIService_SetAvatarButtonFocused_ResponseParam_Result;
}
export type ToolbarUIService_SetAvatarButtonFocused_ResponseParams = ToolbarUIService_SetAvatarButtonFocused_ResponseParamsMojoType;
export declare interface ToolbarUIService_SetAvatarButtonIphPromoShowing_ParamsMojoType {
    showing: boolean;
}
export type ToolbarUIService_SetAvatarButtonIphPromoShowing_Params = ToolbarUIService_SetAvatarButtonIphPromoShowing_ParamsMojoType;
export declare interface ToolbarUIService_SetAvatarButtonIphPromoShowing_ResponseParamsMojoType {
    result: ToolbarUIService_SetAvatarButtonIphPromoShowing_ResponseParam_Result;
}
export type ToolbarUIService_SetAvatarButtonIphPromoShowing_ResponseParams = ToolbarUIService_SetAvatarButtonIphPromoShowing_ResponseParamsMojoType;
export declare interface ToolbarUIService_OnAppMenuFocusChanged_ParamsMojoType {
    focused: boolean;
}
export type ToolbarUIService_OnAppMenuFocusChanged_Params = ToolbarUIService_OnAppMenuFocusChanged_ParamsMojoType;
export declare interface ToolbarUIService_ExecuteExtensionAction_ParamsMojoType {
    extensionId: string;
}
export type ToolbarUIService_ExecuteExtensionAction_Params = ToolbarUIService_ExecuteExtensionAction_ParamsMojoType;
export declare interface ToolbarUIService_ShowExtensionContextMenu_ParamsMojoType {
    extensionId: string;
    source: ui_mojom_MenuSourceType;
}
export type ToolbarUIService_ShowExtensionContextMenu_Params = ToolbarUIService_ShowExtensionContextMenu_ParamsMojoType;
export declare interface ToolbarUIService_AdjustOmniboxTextForCopy_ParamsMojoType {
    text: mojoBase_mojom_String16;
    selectionStart: number;
}
export type ToolbarUIService_AdjustOmniboxTextForCopy_Params = ToolbarUIService_AdjustOmniboxTextForCopy_ParamsMojoType;
export declare interface ToolbarUIService_AdjustOmniboxTextForCopy_ResponseParamsMojoType {
    result: ToolbarUIService_AdjustOmniboxTextForCopy_ResponseParam_Result;
}
export type ToolbarUIService_AdjustOmniboxTextForCopy_ResponseParams = ToolbarUIService_AdjustOmniboxTextForCopy_ResponseParamsMojoType;
export declare interface ToolbarUIService_OnPerformanceInterventionButtonClicked_ParamsMojoType {
}
export type ToolbarUIService_OnPerformanceInterventionButtonClicked_Params = ToolbarUIService_OnPerformanceInterventionButtonClicked_ParamsMojoType;
export declare interface ToolbarUIService_OnMediaButtonClicked_ParamsMojoType {
}
export type ToolbarUIService_OnMediaButtonClicked_Params = ToolbarUIService_OnMediaButtonClicked_ParamsMojoType;
export declare interface ToolbarUIService_OnGlicButtonClicked_ParamsMojoType {
}
export type ToolbarUIService_OnGlicButtonClicked_Params = ToolbarUIService_OnGlicButtonClicked_ParamsMojoType;
export declare interface OverflowMenuItemId {
    trackedElementId?: trackedElement_mojom_TrackedElementIdentifier;
    pinnedAction?: toolbarUiApi_mojom_PinnedToolbarAction;
}
export declare enum OverflowMenuItemIdFieldTags {
    TRACKED_ELEMENT_ID = 0,
    PINNED_ACTION = 1
}
export declare function whichOverflowMenuItemId(u: OverflowMenuItemId): OverflowMenuItemIdFieldTags;
export declare interface ToolbarUIService_Bind_ResponseParam_Result {
    success?: InitialState;
    failure?: mojoBase_mojom_Error;
}
export declare enum ToolbarUIService_Bind_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichToolbarUIService_Bind_ResponseParam_Result(u: ToolbarUIService_Bind_ResponseParam_Result): ToolbarUIService_Bind_ResponseParam_ResultFieldTags;
export declare interface ToolbarUIService_ShowOverflowMenu_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum ToolbarUIService_ShowOverflowMenu_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichToolbarUIService_ShowOverflowMenu_ResponseParam_Result(u: ToolbarUIService_ShowOverflowMenu_ResponseParam_Result): ToolbarUIService_ShowOverflowMenu_ResponseParam_ResultFieldTags;
export declare interface ToolbarUIService_OnOmniboxAction_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum ToolbarUIService_OnOmniboxAction_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichToolbarUIService_OnOmniboxAction_ResponseParam_Result(u: ToolbarUIService_OnOmniboxAction_ResponseParam_Result): ToolbarUIService_OnOmniboxAction_ResponseParam_ResultFieldTags;
export declare interface ToolbarUIService_ShowContentSettingsBubble_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum ToolbarUIService_ShowContentSettingsBubble_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichToolbarUIService_ShowContentSettingsBubble_ResponseParam_Result(u: ToolbarUIService_ShowContentSettingsBubble_ResponseParam_Result): ToolbarUIService_ShowContentSettingsBubble_ResponseParam_ResultFieldTags;
export declare interface ToolbarUIService_OnPageActionClick_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum ToolbarUIService_OnPageActionClick_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichToolbarUIService_OnPageActionClick_ResponseParam_Result(u: ToolbarUIService_OnPageActionClick_ResponseParam_Result): ToolbarUIService_OnPageActionClick_ResponseParam_ResultFieldTags;
export declare interface ToolbarUIService_OnPageActionChipShowingChanged_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum ToolbarUIService_OnPageActionChipShowingChanged_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichToolbarUIService_OnPageActionChipShowingChanged_ResponseParam_Result(u: ToolbarUIService_OnPageActionChipShowingChanged_ResponseParam_Result): ToolbarUIService_OnPageActionChipShowingChanged_ResponseParam_ResultFieldTags;
export declare interface ToolbarUIService_ShowAvatarMenu_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum ToolbarUIService_ShowAvatarMenu_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichToolbarUIService_ShowAvatarMenu_ResponseParam_Result(u: ToolbarUIService_ShowAvatarMenu_ResponseParam_Result): ToolbarUIService_ShowAvatarMenu_ResponseParam_ResultFieldTags;
export declare interface ToolbarUIService_SetAvatarButtonHovered_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum ToolbarUIService_SetAvatarButtonHovered_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichToolbarUIService_SetAvatarButtonHovered_ResponseParam_Result(u: ToolbarUIService_SetAvatarButtonHovered_ResponseParam_Result): ToolbarUIService_SetAvatarButtonHovered_ResponseParam_ResultFieldTags;
export declare interface ToolbarUIService_SetAvatarButtonFocused_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum ToolbarUIService_SetAvatarButtonFocused_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichToolbarUIService_SetAvatarButtonFocused_ResponseParam_Result(u: ToolbarUIService_SetAvatarButtonFocused_ResponseParam_Result): ToolbarUIService_SetAvatarButtonFocused_ResponseParam_ResultFieldTags;
export declare interface ToolbarUIService_SetAvatarButtonIphPromoShowing_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum ToolbarUIService_SetAvatarButtonIphPromoShowing_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichToolbarUIService_SetAvatarButtonIphPromoShowing_ResponseParam_Result(u: ToolbarUIService_SetAvatarButtonIphPromoShowing_ResponseParam_Result): ToolbarUIService_SetAvatarButtonIphPromoShowing_ResponseParam_ResultFieldTags;
export declare interface ToolbarUIService_AdjustOmniboxTextForCopy_ResponseParam_Result {
    success?: AdjustOmniboxTextForCopyResult;
    failure?: mojoBase_mojom_Error;
}
export declare enum ToolbarUIService_AdjustOmniboxTextForCopy_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichToolbarUIService_AdjustOmniboxTextForCopy_ResponseParam_Result(u: ToolbarUIService_AdjustOmniboxTextForCopy_ResponseParam_Result): ToolbarUIService_AdjustOmniboxTextForCopy_ResponseParam_ResultFieldTags;
