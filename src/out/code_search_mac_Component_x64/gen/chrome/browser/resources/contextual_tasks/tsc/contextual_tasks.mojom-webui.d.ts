import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { TabInfo as searchbox_mojom_TabInfo } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { ProtoWrapper as mojoBase_mojom_ProtoWrapper } from '//resources/mojo/mojo/public/mojom/base/proto_wrapper.mojom-webui.js';
import { UnguessableToken as mojoBase_mojom_UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import { Uuid as mojoBase_mojom_Uuid } from '//resources/mojo/mojo/public/mojom/base/uuid.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const IconTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum IconType {
    MIN_VALUE = 0,
    MAX_VALUE = 186,
    kUnspecified = 0,
    kAdd = 9,
    kCheck = 30,
    kFormatQuoteFilled = 79,
    kImage = 84,
    kFollowUp = 100,
    kDrivePdf = 101,
    kInvertedFormatQuoteFilled = 186
}
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    getThreadUrl(): Promise<{
        url: url_mojom_Url;
    }>;
    moveActiveTabToNewThreadIfShared(): Promise<{
        moved: boolean;
    }>;
    getUrlForTask(uuid: mojoBase_mojom_Uuid): Promise<{
        url: url_mojom_Url;
    }>;
    setTaskId(uuid: mojoBase_mojom_Uuid): void;
    isZeroState(url: url_mojom_Url): Promise<{
        isZeroState: boolean;
    }>;
    isAiPage(url: url_mojom_Url): Promise<{
        isAiPage: boolean;
    }>;
    isPendingErrorPage(taskId: mojoBase_mojom_Uuid): Promise<{
        isPendingErrorPage: boolean;
    }>;
    isEmbeddedPageErrorDocument(): Promise<{
        isErrorDocument: boolean;
    }>;
    setThreadTitle(title: string): void;
    isShownInTab(): Promise<{
        isInTab: boolean;
    }>;
    openOnboardingHelpUi(): void;
    openAskGHelpUi(): void;
    onWebviewMessage(message: number[]): void;
    getCommonSearchParams(isDarkMode: boolean, isSidePanel: boolean): Promise<{
        params: {
            [key: string]: string;
        };
    }>;
    onboardingTooltipDismissed(): void;
    askGTooltipDismissed(): void;
    onContextMenuOpened(): void;
    notifySmartTabSharingTryItIphResult(accepted: boolean): void;
    notifySmartTabSharingDefaultOnIphResult(accepted: boolean): void;
    registerWindow(taskId: ContextualTaskId, url: url_mojom_Url, windowId: ContextualWindowId): void;
    closeWindow(windowId: ContextualWindowId): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getThreadUrl(): Promise<{
        url: url_mojom_Url;
    }>;
    moveActiveTabToNewThreadIfShared(): Promise<{
        moved: boolean;
    }>;
    getUrlForTask(uuid: mojoBase_mojom_Uuid): Promise<{
        url: url_mojom_Url;
    }>;
    setTaskId(uuid: mojoBase_mojom_Uuid): void;
    isZeroState(url: url_mojom_Url): Promise<{
        isZeroState: boolean;
    }>;
    isAiPage(url: url_mojom_Url): Promise<{
        isAiPage: boolean;
    }>;
    isPendingErrorPage(taskId: mojoBase_mojom_Uuid): Promise<{
        isPendingErrorPage: boolean;
    }>;
    isEmbeddedPageErrorDocument(): Promise<{
        isErrorDocument: boolean;
    }>;
    setThreadTitle(title: string): void;
    isShownInTab(): Promise<{
        isInTab: boolean;
    }>;
    openOnboardingHelpUi(): void;
    openAskGHelpUi(): void;
    onWebviewMessage(message: number[]): void;
    getCommonSearchParams(isDarkMode: boolean, isSidePanel: boolean): Promise<{
        params: {
            [key: string]: string;
        };
    }>;
    onboardingTooltipDismissed(): void;
    askGTooltipDismissed(): void;
    onContextMenuOpened(): void;
    notifySmartTabSharingTryItIphResult(accepted: boolean): void;
    notifySmartTabSharingDefaultOnIphResult(accepted: boolean): void;
    registerWindow(taskId: ContextualTaskId, url: url_mojom_Url, windowId: ContextualWindowId): void;
    closeWindow(windowId: ContextualWindowId): void;
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
    getThreadUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    moveActiveTabToNewThreadIfShared: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getUrlForTask: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(uuid: mojoBase_mojom_Uuid) => any>;
    setTaskId: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(uuid: mojoBase_mojom_Uuid) => any>;
    isZeroState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    isAiPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    isPendingErrorPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: mojoBase_mojom_Uuid) => any>;
    isEmbeddedPageErrorDocument: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setThreadTitle: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(title: string) => any>;
    isShownInTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openOnboardingHelpUi: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openAskGHelpUi: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onWebviewMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(message: number[]) => any>;
    getCommonSearchParams: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isDarkMode: boolean, isSidePanel: boolean) => any>;
    onboardingTooltipDismissed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    askGTooltipDismissed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onContextMenuOpened: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    notifySmartTabSharingTryItIphResult: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(accepted: boolean) => any>;
    notifySmartTabSharingDefaultOnIphResult: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(accepted: boolean) => any>;
    registerWindow: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: ContextualTaskId, url: url_mojom_Url, windowId: ContextualWindowId) => any>;
    closeWindow: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(windowId: ContextualWindowId) => any>;
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
    setThreadTitle(title: string): void;
    setTaskDetails(uuid: mojoBase_mojom_Uuid, url: url_mojom_Url, replaceNavigationEntry: boolean): void;
    onSidePanelStateChanged(): void;
    focusComposebox(): void;
    postAimMessage(message: number[]): void;
    onHandshakeComplete(): void;
    setOAuthToken(oauthToken: string): void;
    onCookieSyncCompleted(): void;
    hideInput(): void;
    restoreInput(): void;
    enterBasicMode(): void;
    exitBasicMode(): void;
    injectInput(input: InjectedInput): void;
    removeInjectedInput(fileToken: mojoBase_mojom_UnguessableToken): void;
    onZeroStateChange(isZeroState: boolean): void;
    setInNlm(inNlm: boolean): void;
    onLensOverlayStateChanged(isShowing: boolean, maybeShowOverlayHintText: boolean): void;
    showErrorPage(): void;
    hideErrorPage(): void;
    showOauthErrorDialog(): void;
    updateComposeboxPosition(position: ComposeboxPosition): void;
    lockInput(): void;
    unlockInput(): void;
    turnOnSmartTabSharing(): void;
    showSmartTabSharingTryItIph(): void;
    showSmartTabSharingDefaultOnIph(): void;
    onWindowClosed(windowId: ContextualWindowId): void;
    resetForNewThread(taskId: mojoBase_mojom_Uuid, threadUrl: url_mojom_Url): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    setThreadTitle(title: string): void;
    setTaskDetails(uuid: mojoBase_mojom_Uuid, url: url_mojom_Url, replaceNavigationEntry: boolean): void;
    onSidePanelStateChanged(): void;
    focusComposebox(): void;
    postAimMessage(message: number[]): void;
    onHandshakeComplete(): void;
    setOAuthToken(oauthToken: string): void;
    onCookieSyncCompleted(): void;
    hideInput(): void;
    restoreInput(): void;
    enterBasicMode(): void;
    exitBasicMode(): void;
    injectInput(input: InjectedInput): void;
    removeInjectedInput(fileToken: mojoBase_mojom_UnguessableToken): void;
    onZeroStateChange(isZeroState: boolean): void;
    setInNlm(inNlm: boolean): void;
    onLensOverlayStateChanged(isShowing: boolean, maybeShowOverlayHintText: boolean): void;
    showErrorPage(): void;
    hideErrorPage(): void;
    showOauthErrorDialog(): void;
    updateComposeboxPosition(position: ComposeboxPosition): void;
    lockInput(): void;
    unlockInput(): void;
    turnOnSmartTabSharing(): void;
    showSmartTabSharingTryItIph(): void;
    showSmartTabSharingDefaultOnIph(): void;
    onWindowClosed(windowId: ContextualWindowId): void;
    resetForNewThread(taskId: mojoBase_mojom_Uuid, threadUrl: url_mojom_Url): void;
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
    setThreadTitle: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(title: string) => any>;
    setTaskDetails: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(uuid: mojoBase_mojom_Uuid, url: url_mojom_Url, replaceNavigationEntry: boolean) => any>;
    onSidePanelStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    focusComposebox: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    postAimMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(message: number[]) => any>;
    onHandshakeComplete: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setOAuthToken: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(oauthToken: string) => any>;
    onCookieSyncCompleted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    hideInput: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    restoreInput: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    enterBasicMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    exitBasicMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    injectInput: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(input: InjectedInput) => any>;
    removeInjectedInput: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(fileToken: mojoBase_mojom_UnguessableToken) => any>;
    onZeroStateChange: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isZeroState: boolean) => any>;
    setInNlm: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(inNlm: boolean) => any>;
    onLensOverlayStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isShowing: boolean, maybeShowOverlayHintText: boolean) => any>;
    showErrorPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    hideErrorPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showOauthErrorDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateComposeboxPosition: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(position: ComposeboxPosition) => any>;
    lockInput: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    unlockInput: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    turnOnSmartTabSharing: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showSmartTabSharingTryItIph: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showSmartTabSharingDefaultOnIph: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onWindowClosed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(windowId: ContextualWindowId) => any>;
    resetForNewThread: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: mojoBase_mojom_Uuid, threadUrl: url_mojom_Url) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
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
export type ExtensionPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ExtensionPageHandlerFactoryPendingReceiver>;
export declare class ExtensionPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ExtensionPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<ExtensionPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | ExtensionPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ExtensionPageHandlerFactoryInterface {
    createExtensionPageHandler(page: ExtensionPageRemote, receiver: ExtensionPageHandlerPendingReceiver): void;
}
export declare class ExtensionPageHandlerFactoryRemote implements ExtensionPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<ExtensionPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ExtensionPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ExtensionPageHandlerFactoryPendingReceiverEndpoint);
    createExtensionPageHandler(page: ExtensionPageRemote, receiver: ExtensionPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the ExtensionPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ExtensionPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ExtensionPageHandlerFactoryRemote, ExtensionPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExtensionPageHandlerFactoryRemote, ExtensionPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ExtensionPageHandlerFactoryInterface);
}
export declare class ExtensionPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ExtensionPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the ExtensionPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ExtensionPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ExtensionPageHandlerFactoryRemote, ExtensionPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExtensionPageHandlerFactoryRemote, ExtensionPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createExtensionPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: ExtensionPageRemote, receiver: ExtensionPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ExtensionPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ExtensionPageHandlerPendingReceiver>;
export declare class ExtensionPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ExtensionPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ExtensionPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ExtensionPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ExtensionPageHandlerInterface {
    getHandshakeMessage(documentId: (string | null)): Promise<{
        message: mojoBase_mojom_ProtoWrapper;
    }>;
    onWebviewMessage(message: number[], documentId: (string | null)): void;
    setTaskId(uuid: mojoBase_mojom_Uuid): void;
    getLensCropPreview(): Promise<{
        dataUri: (string | null);
    }>;
    removeLensCrop(): void;
}
export declare class ExtensionPageHandlerRemote implements ExtensionPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ExtensionPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ExtensionPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ExtensionPageHandlerPendingReceiverEndpoint);
    getHandshakeMessage(documentId: (string | null)): Promise<{
        message: mojoBase_mojom_ProtoWrapper;
    }>;
    onWebviewMessage(message: number[], documentId: (string | null)): void;
    setTaskId(uuid: mojoBase_mojom_Uuid): void;
    getLensCropPreview(): Promise<{
        dataUri: (string | null);
    }>;
    removeLensCrop(): void;
}
/**
 * An object which receives request messages for the ExtensionPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ExtensionPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ExtensionPageHandlerRemote, ExtensionPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExtensionPageHandlerRemote, ExtensionPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ExtensionPageHandlerInterface);
}
export declare class ExtensionPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ExtensionPageHandlerRemote;
}
/**
 * An object which receives request messages for the ExtensionPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ExtensionPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ExtensionPageHandlerRemote, ExtensionPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExtensionPageHandlerRemote, ExtensionPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getHandshakeMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(documentId: (string | null)) => any>;
    onWebviewMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(message: number[], documentId: (string | null)) => any>;
    setTaskId: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(uuid: mojoBase_mojom_Uuid) => any>;
    getLensCropPreview: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    removeLensCrop: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ExtensionPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ExtensionPagePendingReceiver>;
export declare class ExtensionPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ExtensionPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<ExtensionPagePendingReceiver>;
    constructor(handle: MojoHandle | ExtensionPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ExtensionPageInterface {
    postAimMessage(message: number[]): void;
    postSearchMessage(message: mojoBase_mojom_ProtoWrapper, documentId: (string | null)): void;
    onHandshakeComplete(): void;
    onLensOverlayStateChanged(isShowing: boolean): void;
    onLensCropUpdated(dataUri: url_mojom_Url): void;
    onTabContextUpdated(tabs: searchbox_mojom_TabInfo[], submittedTabIds: number[]): void;
}
export declare class ExtensionPageRemote implements ExtensionPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<ExtensionPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ExtensionPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ExtensionPagePendingReceiverEndpoint);
    postAimMessage(message: number[]): void;
    postSearchMessage(message: mojoBase_mojom_ProtoWrapper, documentId: (string | null)): void;
    onHandshakeComplete(): void;
    onLensOverlayStateChanged(isShowing: boolean): void;
    onLensCropUpdated(dataUri: url_mojom_Url): void;
    onTabContextUpdated(tabs: searchbox_mojom_TabInfo[], submittedTabIds: number[]): void;
}
/**
 * An object which receives request messages for the ExtensionPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ExtensionPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ExtensionPageRemote, ExtensionPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExtensionPageRemote, ExtensionPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ExtensionPageInterface);
}
export declare class ExtensionPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ExtensionPageRemote;
}
/**
 * An object which receives request messages for the ExtensionPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ExtensionPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ExtensionPageRemote, ExtensionPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExtensionPageRemote, ExtensionPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    postAimMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(message: number[]) => any>;
    postSearchMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(message: mojoBase_mojom_ProtoWrapper, documentId: (string | null)) => any>;
    onHandshakeComplete: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onLensOverlayStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isShowing: boolean) => any>;
    onLensCropUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(dataUri: url_mojom_Url) => any>;
    onTabContextUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabs: searchbox_mojom_TabInfo[], submittedTabIds: number[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const InjectedInputSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualTaskIdSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextualWindowIdSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeboxPositionSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetThreadUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetThreadUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MoveActiveTabToNewThreadIfShared_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MoveActiveTabToNewThreadIfShared_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetUrlForTask_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetUrlForTask_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetTaskId_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsZeroState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsZeroState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsAiPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsAiPage_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsPendingErrorPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsPendingErrorPage_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsEmbeddedPageErrorDocument_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsEmbeddedPageErrorDocument_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetThreadTitle_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsShownInTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsShownInTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenOnboardingHelpUi_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenAskGHelpUi_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnWebviewMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetCommonSearchParams_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetCommonSearchParams_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnboardingTooltipDismissed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AskGTooltipDismissed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnContextMenuOpened_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_NotifySmartTabSharingTryItIphResult_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_NotifySmartTabSharingDefaultOnIphResult_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RegisterWindow_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseWindow_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetThreadTitle_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetTaskDetails_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnSidePanelStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_FocusComposebox_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_PostAimMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnHandshakeComplete_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetOAuthToken_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnCookieSyncCompleted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_HideInput_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_RestoreInput_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_EnterBasicMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ExitBasicMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_InjectInput_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_RemoveInjectedInput_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnZeroStateChange_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetInNlm_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnLensOverlayStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ShowErrorPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_HideErrorPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ShowOauthErrorDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdateComposeboxPosition_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_LockInput_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UnlockInput_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_TurnOnSmartTabSharing_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ShowSmartTabSharingTryItIph_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ShowSmartTabSharingDefaultOnIph_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnWindowClosed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ResetForNewThread_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPageHandlerFactory_CreateExtensionPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPageHandler_GetHandshakeMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPageHandler_GetHandshakeMessage_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPageHandler_OnWebviewMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPageHandler_SetTaskId_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPageHandler_GetLensCropPreview_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPageHandler_GetLensCropPreview_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPageHandler_RemoveLensCrop_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPage_PostAimMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPage_PostSearchMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPage_OnHandshakeComplete_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPage_OnLensOverlayStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPage_OnLensCropUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionPage_OnTabContextUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface InjectedInputMojoType {
    title: (string | null);
    thumbnail: (string | null);
    iconId: IconType;
    supportsUnimodal: boolean;
    submitAfterInjection: boolean;
    fileToken: (mojoBase_mojom_UnguessableToken | null);
    queryText: (string | null);
}
export type InjectedInput = InjectedInputMojoType;
export declare interface ContextualTaskIdMojoType {
    value: mojoBase_mojom_Uuid;
}
export type ContextualTaskId = ContextualTaskIdMojoType;
export declare interface ContextualWindowIdMojoType {
    value: mojoBase_mojom_UnguessableToken;
}
export type ContextualWindowId = ContextualWindowIdMojoType;
export declare interface ComposeboxPositionMojoType {
    maxWidth: (number | null);
    maxHeight: (number | null);
    marginBottom: (number | null);
    marginLeft: (number | null);
}
export type ComposeboxPosition = ComposeboxPositionMojoType;
export declare interface PageHandler_GetThreadUrl_ParamsMojoType {
}
export type PageHandler_GetThreadUrl_Params = PageHandler_GetThreadUrl_ParamsMojoType;
export declare interface PageHandler_GetThreadUrl_ResponseParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_GetThreadUrl_ResponseParams = PageHandler_GetThreadUrl_ResponseParamsMojoType;
export declare interface PageHandler_MoveActiveTabToNewThreadIfShared_ParamsMojoType {
}
export type PageHandler_MoveActiveTabToNewThreadIfShared_Params = PageHandler_MoveActiveTabToNewThreadIfShared_ParamsMojoType;
export declare interface PageHandler_MoveActiveTabToNewThreadIfShared_ResponseParamsMojoType {
    moved: boolean;
}
export type PageHandler_MoveActiveTabToNewThreadIfShared_ResponseParams = PageHandler_MoveActiveTabToNewThreadIfShared_ResponseParamsMojoType;
export declare interface PageHandler_GetUrlForTask_ParamsMojoType {
    uuid: mojoBase_mojom_Uuid;
}
export type PageHandler_GetUrlForTask_Params = PageHandler_GetUrlForTask_ParamsMojoType;
export declare interface PageHandler_GetUrlForTask_ResponseParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_GetUrlForTask_ResponseParams = PageHandler_GetUrlForTask_ResponseParamsMojoType;
export declare interface PageHandler_SetTaskId_ParamsMojoType {
    uuid: mojoBase_mojom_Uuid;
}
export type PageHandler_SetTaskId_Params = PageHandler_SetTaskId_ParamsMojoType;
export declare interface PageHandler_IsZeroState_ParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_IsZeroState_Params = PageHandler_IsZeroState_ParamsMojoType;
export declare interface PageHandler_IsZeroState_ResponseParamsMojoType {
    isZeroState: boolean;
}
export type PageHandler_IsZeroState_ResponseParams = PageHandler_IsZeroState_ResponseParamsMojoType;
export declare interface PageHandler_IsAiPage_ParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_IsAiPage_Params = PageHandler_IsAiPage_ParamsMojoType;
export declare interface PageHandler_IsAiPage_ResponseParamsMojoType {
    isAiPage: boolean;
}
export type PageHandler_IsAiPage_ResponseParams = PageHandler_IsAiPage_ResponseParamsMojoType;
export declare interface PageHandler_IsPendingErrorPage_ParamsMojoType {
    taskId: mojoBase_mojom_Uuid;
}
export type PageHandler_IsPendingErrorPage_Params = PageHandler_IsPendingErrorPage_ParamsMojoType;
export declare interface PageHandler_IsPendingErrorPage_ResponseParamsMojoType {
    isPendingErrorPage: boolean;
}
export type PageHandler_IsPendingErrorPage_ResponseParams = PageHandler_IsPendingErrorPage_ResponseParamsMojoType;
export declare interface PageHandler_IsEmbeddedPageErrorDocument_ParamsMojoType {
}
export type PageHandler_IsEmbeddedPageErrorDocument_Params = PageHandler_IsEmbeddedPageErrorDocument_ParamsMojoType;
export declare interface PageHandler_IsEmbeddedPageErrorDocument_ResponseParamsMojoType {
    isErrorDocument: boolean;
}
export type PageHandler_IsEmbeddedPageErrorDocument_ResponseParams = PageHandler_IsEmbeddedPageErrorDocument_ResponseParamsMojoType;
export declare interface PageHandler_SetThreadTitle_ParamsMojoType {
    title: string;
}
export type PageHandler_SetThreadTitle_Params = PageHandler_SetThreadTitle_ParamsMojoType;
export declare interface PageHandler_IsShownInTab_ParamsMojoType {
}
export type PageHandler_IsShownInTab_Params = PageHandler_IsShownInTab_ParamsMojoType;
export declare interface PageHandler_IsShownInTab_ResponseParamsMojoType {
    isInTab: boolean;
}
export type PageHandler_IsShownInTab_ResponseParams = PageHandler_IsShownInTab_ResponseParamsMojoType;
export declare interface PageHandler_OpenOnboardingHelpUi_ParamsMojoType {
}
export type PageHandler_OpenOnboardingHelpUi_Params = PageHandler_OpenOnboardingHelpUi_ParamsMojoType;
export declare interface PageHandler_OpenAskGHelpUi_ParamsMojoType {
}
export type PageHandler_OpenAskGHelpUi_Params = PageHandler_OpenAskGHelpUi_ParamsMojoType;
export declare interface PageHandler_OnWebviewMessage_ParamsMojoType {
    message: number[];
}
export type PageHandler_OnWebviewMessage_Params = PageHandler_OnWebviewMessage_ParamsMojoType;
export declare interface PageHandler_GetCommonSearchParams_ParamsMojoType {
    isDarkMode: boolean;
    isSidePanel: boolean;
}
export type PageHandler_GetCommonSearchParams_Params = PageHandler_GetCommonSearchParams_ParamsMojoType;
export declare interface PageHandler_GetCommonSearchParams_ResponseParamsMojoType {
    params: {
        [key: string]: string;
    };
}
export type PageHandler_GetCommonSearchParams_ResponseParams = PageHandler_GetCommonSearchParams_ResponseParamsMojoType;
export declare interface PageHandler_OnboardingTooltipDismissed_ParamsMojoType {
}
export type PageHandler_OnboardingTooltipDismissed_Params = PageHandler_OnboardingTooltipDismissed_ParamsMojoType;
export declare interface PageHandler_AskGTooltipDismissed_ParamsMojoType {
}
export type PageHandler_AskGTooltipDismissed_Params = PageHandler_AskGTooltipDismissed_ParamsMojoType;
export declare interface PageHandler_OnContextMenuOpened_ParamsMojoType {
}
export type PageHandler_OnContextMenuOpened_Params = PageHandler_OnContextMenuOpened_ParamsMojoType;
export declare interface PageHandler_NotifySmartTabSharingTryItIphResult_ParamsMojoType {
    accepted: boolean;
}
export type PageHandler_NotifySmartTabSharingTryItIphResult_Params = PageHandler_NotifySmartTabSharingTryItIphResult_ParamsMojoType;
export declare interface PageHandler_NotifySmartTabSharingDefaultOnIphResult_ParamsMojoType {
    accepted: boolean;
}
export type PageHandler_NotifySmartTabSharingDefaultOnIphResult_Params = PageHandler_NotifySmartTabSharingDefaultOnIphResult_ParamsMojoType;
export declare interface PageHandler_RegisterWindow_ParamsMojoType {
    taskId: ContextualTaskId;
    url: url_mojom_Url;
    windowId: ContextualWindowId;
}
export type PageHandler_RegisterWindow_Params = PageHandler_RegisterWindow_ParamsMojoType;
export declare interface PageHandler_CloseWindow_ParamsMojoType {
    windowId: ContextualWindowId;
}
export type PageHandler_CloseWindow_Params = PageHandler_CloseWindow_ParamsMojoType;
export declare interface Page_SetThreadTitle_ParamsMojoType {
    title: string;
}
export type Page_SetThreadTitle_Params = Page_SetThreadTitle_ParamsMojoType;
export declare interface Page_SetTaskDetails_ParamsMojoType {
    uuid: mojoBase_mojom_Uuid;
    url: url_mojom_Url;
    replaceNavigationEntry: boolean;
}
export type Page_SetTaskDetails_Params = Page_SetTaskDetails_ParamsMojoType;
export declare interface Page_OnSidePanelStateChanged_ParamsMojoType {
}
export type Page_OnSidePanelStateChanged_Params = Page_OnSidePanelStateChanged_ParamsMojoType;
export declare interface Page_FocusComposebox_ParamsMojoType {
}
export type Page_FocusComposebox_Params = Page_FocusComposebox_ParamsMojoType;
export declare interface Page_PostAimMessage_ParamsMojoType {
    message: number[];
}
export type Page_PostAimMessage_Params = Page_PostAimMessage_ParamsMojoType;
export declare interface Page_OnHandshakeComplete_ParamsMojoType {
}
export type Page_OnHandshakeComplete_Params = Page_OnHandshakeComplete_ParamsMojoType;
export declare interface Page_SetOAuthToken_ParamsMojoType {
    oauthToken: string;
}
export type Page_SetOAuthToken_Params = Page_SetOAuthToken_ParamsMojoType;
export declare interface Page_OnCookieSyncCompleted_ParamsMojoType {
}
export type Page_OnCookieSyncCompleted_Params = Page_OnCookieSyncCompleted_ParamsMojoType;
export declare interface Page_HideInput_ParamsMojoType {
}
export type Page_HideInput_Params = Page_HideInput_ParamsMojoType;
export declare interface Page_RestoreInput_ParamsMojoType {
}
export type Page_RestoreInput_Params = Page_RestoreInput_ParamsMojoType;
export declare interface Page_EnterBasicMode_ParamsMojoType {
}
export type Page_EnterBasicMode_Params = Page_EnterBasicMode_ParamsMojoType;
export declare interface Page_ExitBasicMode_ParamsMojoType {
}
export type Page_ExitBasicMode_Params = Page_ExitBasicMode_ParamsMojoType;
export declare interface Page_InjectInput_ParamsMojoType {
    input: InjectedInput;
}
export type Page_InjectInput_Params = Page_InjectInput_ParamsMojoType;
export declare interface Page_RemoveInjectedInput_ParamsMojoType {
    fileToken: mojoBase_mojom_UnguessableToken;
}
export type Page_RemoveInjectedInput_Params = Page_RemoveInjectedInput_ParamsMojoType;
export declare interface Page_OnZeroStateChange_ParamsMojoType {
    isZeroState: boolean;
}
export type Page_OnZeroStateChange_Params = Page_OnZeroStateChange_ParamsMojoType;
export declare interface Page_SetInNlm_ParamsMojoType {
    inNlm: boolean;
}
export type Page_SetInNlm_Params = Page_SetInNlm_ParamsMojoType;
export declare interface Page_OnLensOverlayStateChanged_ParamsMojoType {
    isShowing: boolean;
    maybeShowOverlayHintText: boolean;
}
export type Page_OnLensOverlayStateChanged_Params = Page_OnLensOverlayStateChanged_ParamsMojoType;
export declare interface Page_ShowErrorPage_ParamsMojoType {
}
export type Page_ShowErrorPage_Params = Page_ShowErrorPage_ParamsMojoType;
export declare interface Page_HideErrorPage_ParamsMojoType {
}
export type Page_HideErrorPage_Params = Page_HideErrorPage_ParamsMojoType;
export declare interface Page_ShowOauthErrorDialog_ParamsMojoType {
}
export type Page_ShowOauthErrorDialog_Params = Page_ShowOauthErrorDialog_ParamsMojoType;
export declare interface Page_UpdateComposeboxPosition_ParamsMojoType {
    position: ComposeboxPosition;
}
export type Page_UpdateComposeboxPosition_Params = Page_UpdateComposeboxPosition_ParamsMojoType;
export declare interface Page_LockInput_ParamsMojoType {
}
export type Page_LockInput_Params = Page_LockInput_ParamsMojoType;
export declare interface Page_UnlockInput_ParamsMojoType {
}
export type Page_UnlockInput_Params = Page_UnlockInput_ParamsMojoType;
export declare interface Page_TurnOnSmartTabSharing_ParamsMojoType {
}
export type Page_TurnOnSmartTabSharing_Params = Page_TurnOnSmartTabSharing_ParamsMojoType;
export declare interface Page_ShowSmartTabSharingTryItIph_ParamsMojoType {
}
export type Page_ShowSmartTabSharingTryItIph_Params = Page_ShowSmartTabSharingTryItIph_ParamsMojoType;
export declare interface Page_ShowSmartTabSharingDefaultOnIph_ParamsMojoType {
}
export type Page_ShowSmartTabSharingDefaultOnIph_Params = Page_ShowSmartTabSharingDefaultOnIph_ParamsMojoType;
export declare interface Page_OnWindowClosed_ParamsMojoType {
    windowId: ContextualWindowId;
}
export type Page_OnWindowClosed_Params = Page_OnWindowClosed_ParamsMojoType;
export declare interface Page_ResetForNewThread_ParamsMojoType {
    taskId: mojoBase_mojom_Uuid;
    threadUrl: url_mojom_Url;
}
export type Page_ResetForNewThread_Params = Page_ResetForNewThread_ParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    pageHandler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface ExtensionPageHandlerFactory_CreateExtensionPageHandler_ParamsMojoType {
    page: ExtensionPageRemote;
    receiver: ExtensionPageHandlerPendingReceiver;
}
export type ExtensionPageHandlerFactory_CreateExtensionPageHandler_Params = ExtensionPageHandlerFactory_CreateExtensionPageHandler_ParamsMojoType;
export declare interface ExtensionPageHandler_GetHandshakeMessage_ParamsMojoType {
    documentId: (string | null);
}
export type ExtensionPageHandler_GetHandshakeMessage_Params = ExtensionPageHandler_GetHandshakeMessage_ParamsMojoType;
export declare interface ExtensionPageHandler_GetHandshakeMessage_ResponseParamsMojoType {
    message: mojoBase_mojom_ProtoWrapper;
}
export type ExtensionPageHandler_GetHandshakeMessage_ResponseParams = ExtensionPageHandler_GetHandshakeMessage_ResponseParamsMojoType;
export declare interface ExtensionPageHandler_OnWebviewMessage_ParamsMojoType {
    message: number[];
    documentId: (string | null);
}
export type ExtensionPageHandler_OnWebviewMessage_Params = ExtensionPageHandler_OnWebviewMessage_ParamsMojoType;
export declare interface ExtensionPageHandler_SetTaskId_ParamsMojoType {
    uuid: mojoBase_mojom_Uuid;
}
export type ExtensionPageHandler_SetTaskId_Params = ExtensionPageHandler_SetTaskId_ParamsMojoType;
export declare interface ExtensionPageHandler_GetLensCropPreview_ParamsMojoType {
}
export type ExtensionPageHandler_GetLensCropPreview_Params = ExtensionPageHandler_GetLensCropPreview_ParamsMojoType;
export declare interface ExtensionPageHandler_GetLensCropPreview_ResponseParamsMojoType {
    dataUri: (string | null);
}
export type ExtensionPageHandler_GetLensCropPreview_ResponseParams = ExtensionPageHandler_GetLensCropPreview_ResponseParamsMojoType;
export declare interface ExtensionPageHandler_RemoveLensCrop_ParamsMojoType {
}
export type ExtensionPageHandler_RemoveLensCrop_Params = ExtensionPageHandler_RemoveLensCrop_ParamsMojoType;
export declare interface ExtensionPage_PostAimMessage_ParamsMojoType {
    message: number[];
}
export type ExtensionPage_PostAimMessage_Params = ExtensionPage_PostAimMessage_ParamsMojoType;
export declare interface ExtensionPage_PostSearchMessage_ParamsMojoType {
    message: mojoBase_mojom_ProtoWrapper;
    documentId: (string | null);
}
export type ExtensionPage_PostSearchMessage_Params = ExtensionPage_PostSearchMessage_ParamsMojoType;
export declare interface ExtensionPage_OnHandshakeComplete_ParamsMojoType {
}
export type ExtensionPage_OnHandshakeComplete_Params = ExtensionPage_OnHandshakeComplete_ParamsMojoType;
export declare interface ExtensionPage_OnLensOverlayStateChanged_ParamsMojoType {
    isShowing: boolean;
}
export type ExtensionPage_OnLensOverlayStateChanged_Params = ExtensionPage_OnLensOverlayStateChanged_ParamsMojoType;
export declare interface ExtensionPage_OnLensCropUpdated_ParamsMojoType {
    dataUri: url_mojom_Url;
}
export type ExtensionPage_OnLensCropUpdated_Params = ExtensionPage_OnLensCropUpdated_ParamsMojoType;
export declare interface ExtensionPage_OnTabContextUpdated_ParamsMojoType {
    tabs: searchbox_mojom_TabInfo[];
    submittedTabIds: number[];
}
export type ExtensionPage_OnTabContextUpdated_Params = ExtensionPage_OnTabContextUpdated_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
