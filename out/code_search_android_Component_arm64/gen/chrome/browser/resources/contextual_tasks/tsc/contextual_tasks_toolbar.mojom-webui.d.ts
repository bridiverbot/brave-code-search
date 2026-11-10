import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { LhsChipIdentifier as toolbarUiApi_mojom_LhsChipIdentifier, PermissionDashboardState as toolbarUiApi_mojom_PermissionDashboardState } from './toolbar_ui_api_data_model.mojom-webui.js';
import { Error as mojoBase_mojom_Error } from '//resources/mojo/mojo/public/mojom/base/error.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createPageHandler(page: PageRemote, pageHandler: PageHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: PageRemote, pageHandler: PageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerFactoryInterface);
}
export declare class PageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: PageRemote, pageHandler: PageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    pinSidePanel(): void;
    unpinSidePanel(): void;
    openMyActivityUi(): void;
    openOverflowMenuHelpUi(): void;
    openManageAccountUi(): void;
    openLogOutFlow(): void;
    openFeedbackUi(): void;
    moveTaskUiToNewTab(): void;
    showThreadHistory(): void;
    onTabClickedFromSourcesMenu(tabId: number, url: url_mojom_Url): void;
    onFileClickedFromSourcesMenu(url: url_mojom_Url): void;
    onImageClickedFromSourcesMenu(url: url_mojom_Url): void;
    closeSidePanel(): void;
    showPageInfoBubble(isPointerInteraction: boolean): void;
    onLogoPointerDown(): void;
    createNewThread(): void;
    maybeTriggerPinningPromo(): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    pinSidePanel(): void;
    unpinSidePanel(): void;
    openMyActivityUi(): void;
    openOverflowMenuHelpUi(): void;
    openManageAccountUi(): void;
    openLogOutFlow(): void;
    openFeedbackUi(): void;
    moveTaskUiToNewTab(): void;
    showThreadHistory(): void;
    onTabClickedFromSourcesMenu(tabId: number, url: url_mojom_Url): void;
    onFileClickedFromSourcesMenu(url: url_mojom_Url): void;
    onImageClickedFromSourcesMenu(url: url_mojom_Url): void;
    closeSidePanel(): void;
    showPageInfoBubble(isPointerInteraction: boolean): void;
    onLogoPointerDown(): void;
    createNewThread(): void;
    maybeTriggerPinningPromo(): void;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerInterface);
}
export declare class PageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerRemote;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    pinSidePanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    unpinSidePanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openMyActivityUi: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openOverflowMenuHelpUi: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openManageAccountUi: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openLogOutFlow: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openFeedbackUi: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    moveTaskUiToNewTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showThreadHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onTabClickedFromSourcesMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, url: url_mojom_Url) => any>;
    onFileClickedFromSourcesMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    onImageClickedFromSourcesMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    closeSidePanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showPageInfoBubble: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isPointerInteraction: boolean) => any>;
    onLogoPointerDown: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    createNewThread: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    maybeTriggerPinningPromo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
export declare class PagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Page> {
    handle: mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
    constructor(handle: MojoHandle | PagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageInterface {
    onSidePanelPinStateChanged(isPinned: boolean): void;
    onAiPageStatusChanged(isAiPage: boolean): void;
    onContextUpdated(context: ContextInfo[]): void;
    setExpandButtonEnabled(enabled: boolean): void;
    setThreadTitle(title: string): void;
    onSidePanelStateChanged(): void;
    setProfileAvatarUrl(avatarUrl: url_mojom_Url): void;
    setAccountInfo(fullName: string, email: string): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onSidePanelPinStateChanged(isPinned: boolean): void;
    onAiPageStatusChanged(isAiPage: boolean): void;
    onContextUpdated(context: ContextInfo[]): void;
    setExpandButtonEnabled(enabled: boolean): void;
    setThreadTitle(title: string): void;
    onSidePanelStateChanged(): void;
    setProfileAvatarUrl(avatarUrl: url_mojom_Url): void;
    setAccountInfo(fullName: string, email: string): void;
}
/**
 * An object which receives request messages for the Page
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageInterface);
}
export declare class Page {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageRemote;
}
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onSidePanelPinStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isPinned: boolean) => any>;
    onAiPageStatusChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isAiPage: boolean) => any>;
    onContextUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(context: ContextInfo[]) => any>;
    setExpandButtonEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    setThreadTitle: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(title: string) => any>;
    onSidePanelStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setProfileAvatarUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(avatarUrl: url_mojom_Url) => any>;
    setAccountInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(fullName: string, email: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ContextualTasksToolbarUIObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ContextualTasksToolbarUIObserverPendingReceiver>;
export declare class ContextualTasksToolbarUIObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ContextualTasksToolbarUIObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<ContextualTasksToolbarUIObserverPendingReceiver>;
    constructor(handle: MojoHandle | ContextualTasksToolbarUIObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ContextualTasksToolbarUIObserverInterface {
    onPermissionDashboardStateChanged(state: toolbarUiApi_mojom_PermissionDashboardState): void;
}
export declare class ContextualTasksToolbarUIObserverRemote implements ContextualTasksToolbarUIObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<ContextualTasksToolbarUIObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ContextualTasksToolbarUIObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ContextualTasksToolbarUIObserverPendingReceiverEndpoint);
    onPermissionDashboardStateChanged(state: toolbarUiApi_mojom_PermissionDashboardState): void;
}
/**
 * An object which receives request messages for the ContextualTasksToolbarUIObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ContextualTasksToolbarUIObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ContextualTasksToolbarUIObserverRemote, ContextualTasksToolbarUIObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ContextualTasksToolbarUIObserverRemote, ContextualTasksToolbarUIObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ContextualTasksToolbarUIObserverInterface);
}
export declare class ContextualTasksToolbarUIObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ContextualTasksToolbarUIObserverRemote;
}
/**
 * An object which receives request messages for the ContextualTasksToolbarUIObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ContextualTasksToolbarUIObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ContextualTasksToolbarUIObserverRemote, ContextualTasksToolbarUIObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ContextualTasksToolbarUIObserverRemote, ContextualTasksToolbarUIObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onPermissionDashboardStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: toolbarUiApi_mojom_PermissionDashboardState) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ContextualTasksToolbarUIServicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ContextualTasksToolbarUIServicePendingReceiver>;
export declare class ContextualTasksToolbarUIServicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ContextualTasksToolbarUIService> {
    handle: mojo.internal.interfaceSupport.Endpoint<ContextualTasksToolbarUIServicePendingReceiver>;
    constructor(handle: MojoHandle | ContextualTasksToolbarUIServicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ContextualTasksToolbarUIServiceInterface {
    getInitialState(): Promise<InitialState>;
    onChipMousePressed(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onChipClicked(identifier: toolbarUiApi_mojom_LhsChipIdentifier, isMouseInteraction: boolean, stateToken: number): void;
    onChipPointerEntered(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onChipPointerExited(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onChipExpandAnimationEnded(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onChipCollapseAnimationEnded(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
}
export declare class ContextualTasksToolbarUIServiceRemote implements ContextualTasksToolbarUIServiceInterface, mojo.internal.interfaceSupport.InterfaceRemote<ContextualTasksToolbarUIServicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ContextualTasksToolbarUIServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ContextualTasksToolbarUIServicePendingReceiverEndpoint);
    getInitialState(): Promise<InitialState>;
    onChipMousePressed(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onChipClicked(identifier: toolbarUiApi_mojom_LhsChipIdentifier, isMouseInteraction: boolean, stateToken: number): void;
    onChipPointerEntered(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onChipPointerExited(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onChipExpandAnimationEnded(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
    onChipCollapseAnimationEnded(identifier: toolbarUiApi_mojom_LhsChipIdentifier): void;
}
/**
 * An object which receives request messages for the ContextualTasksToolbarUIService
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ContextualTasksToolbarUIServiceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ContextualTasksToolbarUIServiceRemote, ContextualTasksToolbarUIServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ContextualTasksToolbarUIServiceRemote, ContextualTasksToolbarUIServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ContextualTasksToolbarUIServiceInterface);
}
export declare class ContextualTasksToolbarUIService {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ContextualTasksToolbarUIServiceRemote;
}
/**
 * An object which receives request messages for the ContextualTasksToolbarUIService
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ContextualTasksToolbarUIServiceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ContextualTasksToolbarUIServiceRemote, ContextualTasksToolbarUIServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ContextualTasksToolbarUIServiceRemote, ContextualTasksToolbarUIServicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getInitialState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onChipMousePressed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier) => any>;
    onChipClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier, isMouseInteraction: boolean, stateToken: number) => any>;
    onChipPointerEntered: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier) => any>;
    onChipPointerExited: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier) => any>;
    onChipExpandAnimationEnded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier) => any>;
    onChipCollapseAnimationEnded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(identifier: toolbarUiApi_mojom_LhsChipIdentifier) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const TabContextSpec: {
    $: mojo.internal.MojomType;
};
export declare const ImageContextSpec: {
    $: mojo.internal.MojomType;
};
export declare const FileContextSpec: {
    $: mojo.internal.MojomType;
};
export declare const InitialStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_PinSidePanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UnpinSidePanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenMyActivityUi_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenOverflowMenuHelpUi_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenManageAccountUi_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenLogOutFlow_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenFeedbackUi_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MoveTaskUiToNewTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowThreadHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnFileClickedFromSourcesMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnImageClickedFromSourcesMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseSidePanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowPageInfoBubble_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnLogoPointerDown_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CreateNewThread_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MaybeTriggerPinningPromo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnSidePanelPinStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnAiPageStatusChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnContextUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetExpandButtonEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetThreadTitle_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnSidePanelStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetProfileAvatarUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetAccountInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualTasksToolbarUIObserver_OnPermissionDashboardStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualTasksToolbarUIService_GetInitialState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualTasksToolbarUIService_GetInitialState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualTasksToolbarUIService_OnChipMousePressed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualTasksToolbarUIService_OnChipClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualTasksToolbarUIService_OnChipPointerEntered_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualTasksToolbarUIService_OnChipPointerExited_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualTasksToolbarUIService_OnChipExpandAnimationEnded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualTasksToolbarUIService_OnChipCollapseAnimationEnded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualTasksToolbarUIService_GetInitialState_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TabContextMojoType {
    url: url_mojom_Url;
    title: string;
    tabId: number;
    hasChromeTabData: boolean;
}
export type TabContext = TabContextMojoType;
export declare interface ImageContextMojoType {
    url: url_mojom_Url;
    title: string;
}
export type ImageContext = ImageContextMojoType;
export declare interface FileContextMojoType {
    url: url_mojom_Url;
    title: string;
}
export type FileContext = FileContextMojoType;
export declare interface InitialStateMojoType {
    state: toolbarUiApi_mojom_PermissionDashboardState;
    updateStream: ContextualTasksToolbarUIObserverPendingReceiver;
}
export type InitialState = InitialStateMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    pageHandler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_PinSidePanel_ParamsMojoType {
}
export type PageHandler_PinSidePanel_Params = PageHandler_PinSidePanel_ParamsMojoType;
export declare interface PageHandler_UnpinSidePanel_ParamsMojoType {
}
export type PageHandler_UnpinSidePanel_Params = PageHandler_UnpinSidePanel_ParamsMojoType;
export declare interface PageHandler_OpenMyActivityUi_ParamsMojoType {
}
export type PageHandler_OpenMyActivityUi_Params = PageHandler_OpenMyActivityUi_ParamsMojoType;
export declare interface PageHandler_OpenOverflowMenuHelpUi_ParamsMojoType {
}
export type PageHandler_OpenOverflowMenuHelpUi_Params = PageHandler_OpenOverflowMenuHelpUi_ParamsMojoType;
export declare interface PageHandler_OpenManageAccountUi_ParamsMojoType {
}
export type PageHandler_OpenManageAccountUi_Params = PageHandler_OpenManageAccountUi_ParamsMojoType;
export declare interface PageHandler_OpenLogOutFlow_ParamsMojoType {
}
export type PageHandler_OpenLogOutFlow_Params = PageHandler_OpenLogOutFlow_ParamsMojoType;
export declare interface PageHandler_OpenFeedbackUi_ParamsMojoType {
}
export type PageHandler_OpenFeedbackUi_Params = PageHandler_OpenFeedbackUi_ParamsMojoType;
export declare interface PageHandler_MoveTaskUiToNewTab_ParamsMojoType {
}
export type PageHandler_MoveTaskUiToNewTab_Params = PageHandler_MoveTaskUiToNewTab_ParamsMojoType;
export declare interface PageHandler_ShowThreadHistory_ParamsMojoType {
}
export type PageHandler_ShowThreadHistory_Params = PageHandler_ShowThreadHistory_ParamsMojoType;
export declare interface PageHandler_OnTabClickedFromSourcesMenu_ParamsMojoType {
    tabId: number;
    url: url_mojom_Url;
}
export type PageHandler_OnTabClickedFromSourcesMenu_Params = PageHandler_OnTabClickedFromSourcesMenu_ParamsMojoType;
export declare interface PageHandler_OnFileClickedFromSourcesMenu_ParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_OnFileClickedFromSourcesMenu_Params = PageHandler_OnFileClickedFromSourcesMenu_ParamsMojoType;
export declare interface PageHandler_OnImageClickedFromSourcesMenu_ParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_OnImageClickedFromSourcesMenu_Params = PageHandler_OnImageClickedFromSourcesMenu_ParamsMojoType;
export declare interface PageHandler_CloseSidePanel_ParamsMojoType {
}
export type PageHandler_CloseSidePanel_Params = PageHandler_CloseSidePanel_ParamsMojoType;
export declare interface PageHandler_ShowPageInfoBubble_ParamsMojoType {
    isPointerInteraction: boolean;
}
export type PageHandler_ShowPageInfoBubble_Params = PageHandler_ShowPageInfoBubble_ParamsMojoType;
export declare interface PageHandler_OnLogoPointerDown_ParamsMojoType {
}
export type PageHandler_OnLogoPointerDown_Params = PageHandler_OnLogoPointerDown_ParamsMojoType;
export declare interface PageHandler_CreateNewThread_ParamsMojoType {
}
export type PageHandler_CreateNewThread_Params = PageHandler_CreateNewThread_ParamsMojoType;
export declare interface PageHandler_MaybeTriggerPinningPromo_ParamsMojoType {
}
export type PageHandler_MaybeTriggerPinningPromo_Params = PageHandler_MaybeTriggerPinningPromo_ParamsMojoType;
export declare interface Page_OnSidePanelPinStateChanged_ParamsMojoType {
    isPinned: boolean;
}
export type Page_OnSidePanelPinStateChanged_Params = Page_OnSidePanelPinStateChanged_ParamsMojoType;
export declare interface Page_OnAiPageStatusChanged_ParamsMojoType {
    isAiPage: boolean;
}
export type Page_OnAiPageStatusChanged_Params = Page_OnAiPageStatusChanged_ParamsMojoType;
export declare interface Page_OnContextUpdated_ParamsMojoType {
    context: ContextInfo[];
}
export type Page_OnContextUpdated_Params = Page_OnContextUpdated_ParamsMojoType;
export declare interface Page_SetExpandButtonEnabled_ParamsMojoType {
    enabled: boolean;
}
export type Page_SetExpandButtonEnabled_Params = Page_SetExpandButtonEnabled_ParamsMojoType;
export declare interface Page_SetThreadTitle_ParamsMojoType {
    title: string;
}
export type Page_SetThreadTitle_Params = Page_SetThreadTitle_ParamsMojoType;
export declare interface Page_OnSidePanelStateChanged_ParamsMojoType {
}
export type Page_OnSidePanelStateChanged_Params = Page_OnSidePanelStateChanged_ParamsMojoType;
export declare interface Page_SetProfileAvatarUrl_ParamsMojoType {
    avatarUrl: url_mojom_Url;
}
export type Page_SetProfileAvatarUrl_Params = Page_SetProfileAvatarUrl_ParamsMojoType;
export declare interface Page_SetAccountInfo_ParamsMojoType {
    fullName: string;
    email: string;
}
export type Page_SetAccountInfo_Params = Page_SetAccountInfo_ParamsMojoType;
export declare interface ContextualTasksToolbarUIObserver_OnPermissionDashboardStateChanged_ParamsMojoType {
    state: toolbarUiApi_mojom_PermissionDashboardState;
}
export type ContextualTasksToolbarUIObserver_OnPermissionDashboardStateChanged_Params = ContextualTasksToolbarUIObserver_OnPermissionDashboardStateChanged_ParamsMojoType;
export declare interface ContextualTasksToolbarUIService_GetInitialState_ParamsMojoType {
}
export type ContextualTasksToolbarUIService_GetInitialState_Params = ContextualTasksToolbarUIService_GetInitialState_ParamsMojoType;
export declare interface ContextualTasksToolbarUIService_GetInitialState_ResponseParamsMojoType {
    result: ContextualTasksToolbarUIService_GetInitialState_ResponseParam_Result;
}
export type ContextualTasksToolbarUIService_GetInitialState_ResponseParams = ContextualTasksToolbarUIService_GetInitialState_ResponseParamsMojoType;
export declare interface ContextualTasksToolbarUIService_OnChipMousePressed_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
}
export type ContextualTasksToolbarUIService_OnChipMousePressed_Params = ContextualTasksToolbarUIService_OnChipMousePressed_ParamsMojoType;
export declare interface ContextualTasksToolbarUIService_OnChipClicked_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
    isMouseInteraction: boolean;
    stateToken: number;
}
export type ContextualTasksToolbarUIService_OnChipClicked_Params = ContextualTasksToolbarUIService_OnChipClicked_ParamsMojoType;
export declare interface ContextualTasksToolbarUIService_OnChipPointerEntered_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
}
export type ContextualTasksToolbarUIService_OnChipPointerEntered_Params = ContextualTasksToolbarUIService_OnChipPointerEntered_ParamsMojoType;
export declare interface ContextualTasksToolbarUIService_OnChipPointerExited_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
}
export type ContextualTasksToolbarUIService_OnChipPointerExited_Params = ContextualTasksToolbarUIService_OnChipPointerExited_ParamsMojoType;
export declare interface ContextualTasksToolbarUIService_OnChipExpandAnimationEnded_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
}
export type ContextualTasksToolbarUIService_OnChipExpandAnimationEnded_Params = ContextualTasksToolbarUIService_OnChipExpandAnimationEnded_ParamsMojoType;
export declare interface ContextualTasksToolbarUIService_OnChipCollapseAnimationEnded_ParamsMojoType {
    identifier: toolbarUiApi_mojom_LhsChipIdentifier;
}
export type ContextualTasksToolbarUIService_OnChipCollapseAnimationEnded_Params = ContextualTasksToolbarUIService_OnChipCollapseAnimationEnded_ParamsMojoType;
export declare interface ContextInfo {
    tab?: TabContext;
    image?: ImageContext;
    file?: FileContext;
}
export declare enum ContextInfoFieldTags {
    TAB = 0,
    IMAGE = 1,
    FILE = 2
}
export declare function whichContextInfo(u: ContextInfo): ContextInfoFieldTags;
export declare interface ContextualTasksToolbarUIService_GetInitialState_ResponseParam_Result {
    success?: InitialState;
    failure?: mojoBase_mojom_Error;
}
export declare enum ContextualTasksToolbarUIService_GetInitialState_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichContextualTasksToolbarUIService_GetInitialState_ResponseParam_Result(u: ContextualTasksToolbarUIService_GetInitialState_ResponseParam_Result): ContextualTasksToolbarUIService_GetInitialState_ResponseParam_ResultFieldTags;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
