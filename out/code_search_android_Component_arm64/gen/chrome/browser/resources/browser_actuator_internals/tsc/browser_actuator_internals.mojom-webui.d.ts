import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { JSTime as mojoBase_mojom_JSTime } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
export declare const MessageDirectionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum MessageDirection {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kDownstream = 0,
    kUpstream = 1
}
export type BrowserActuatorInternalsPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BrowserActuatorInternalsPagePendingReceiver>;
export declare class BrowserActuatorInternalsPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BrowserActuatorInternalsPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<BrowserActuatorInternalsPagePendingReceiver>;
    constructor(handle: MojoHandle | BrowserActuatorInternalsPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BrowserActuatorInternalsPageInterface {
}
export declare class BrowserActuatorInternalsPageRemote implements BrowserActuatorInternalsPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<BrowserActuatorInternalsPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BrowserActuatorInternalsPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BrowserActuatorInternalsPagePendingReceiverEndpoint);
}
/**
 * An object which receives request messages for the BrowserActuatorInternalsPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BrowserActuatorInternalsPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BrowserActuatorInternalsPageRemote, BrowserActuatorInternalsPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BrowserActuatorInternalsPageRemote, BrowserActuatorInternalsPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(_impl: BrowserActuatorInternalsPageInterface);
}
export declare class BrowserActuatorInternalsPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BrowserActuatorInternalsPageRemote;
}
/**
 * An object which receives request messages for the BrowserActuatorInternalsPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BrowserActuatorInternalsPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BrowserActuatorInternalsPageRemote, BrowserActuatorInternalsPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BrowserActuatorInternalsPageRemote, BrowserActuatorInternalsPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type BrowserActuatorInternalsUIPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BrowserActuatorInternalsUIPendingReceiver>;
export declare class BrowserActuatorInternalsUIPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BrowserActuatorInternalsUI> {
    handle: mojo.internal.interfaceSupport.Endpoint<BrowserActuatorInternalsUIPendingReceiver>;
    constructor(handle: MojoHandle | BrowserActuatorInternalsUIPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BrowserActuatorInternalsUIInterface {
    getSessionHistory(): Promise<{
        sessions: SessionSummary[];
    }>;
    exportSessionHistory(sessionIds: string[]): Promise<{
        json: string;
    }>;
}
export declare class BrowserActuatorInternalsUIRemote implements BrowserActuatorInternalsUIInterface, mojo.internal.interfaceSupport.InterfaceRemote<BrowserActuatorInternalsUIPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BrowserActuatorInternalsUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BrowserActuatorInternalsUIPendingReceiverEndpoint);
    getSessionHistory(): Promise<{
        sessions: SessionSummary[];
    }>;
    exportSessionHistory(sessionIds: string[]): Promise<{
        json: string;
    }>;
}
/**
 * An object which receives request messages for the BrowserActuatorInternalsUI
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BrowserActuatorInternalsUIReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BrowserActuatorInternalsUIRemote, BrowserActuatorInternalsUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BrowserActuatorInternalsUIRemote, BrowserActuatorInternalsUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BrowserActuatorInternalsUIInterface);
}
export declare class BrowserActuatorInternalsUI {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BrowserActuatorInternalsUIRemote;
}
/**
 * An object which receives request messages for the BrowserActuatorInternalsUI
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BrowserActuatorInternalsUICallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BrowserActuatorInternalsUIRemote, BrowserActuatorInternalsUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BrowserActuatorInternalsUIRemote, BrowserActuatorInternalsUIPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getSessionHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    exportSessionHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sessionIds: string[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type BrowserActuatorInternalsUIFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BrowserActuatorInternalsUIFactoryPendingReceiver>;
export declare class BrowserActuatorInternalsUIFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BrowserActuatorInternalsUIFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<BrowserActuatorInternalsUIFactoryPendingReceiver>;
    constructor(handle: MojoHandle | BrowserActuatorInternalsUIFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BrowserActuatorInternalsUIFactoryInterface {
    createUI(page: BrowserActuatorInternalsPageRemote, ui: BrowserActuatorInternalsUIPendingReceiver): void;
}
export declare class BrowserActuatorInternalsUIFactoryRemote implements BrowserActuatorInternalsUIFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<BrowserActuatorInternalsUIFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BrowserActuatorInternalsUIFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BrowserActuatorInternalsUIFactoryPendingReceiverEndpoint);
    createUI(page: BrowserActuatorInternalsPageRemote, ui: BrowserActuatorInternalsUIPendingReceiver): void;
}
/**
 * An object which receives request messages for the BrowserActuatorInternalsUIFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BrowserActuatorInternalsUIFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BrowserActuatorInternalsUIFactoryRemote, BrowserActuatorInternalsUIFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BrowserActuatorInternalsUIFactoryRemote, BrowserActuatorInternalsUIFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BrowserActuatorInternalsUIFactoryInterface);
}
export declare class BrowserActuatorInternalsUIFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BrowserActuatorInternalsUIFactoryRemote;
}
/**
 * An object which receives request messages for the BrowserActuatorInternalsUIFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BrowserActuatorInternalsUIFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BrowserActuatorInternalsUIFactoryRemote, BrowserActuatorInternalsUIFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BrowserActuatorInternalsUIFactoryRemote, BrowserActuatorInternalsUIFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: BrowserActuatorInternalsPageRemote, ui: BrowserActuatorInternalsUIPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const RecordedEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const SessionSummarySpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserActuatorInternalsUI_GetSessionHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserActuatorInternalsUI_GetSessionHistory_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserActuatorInternalsUI_ExportSessionHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserActuatorInternalsUI_ExportSessionHistory_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowserActuatorInternalsUIFactory_CreateUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface RecordedEventMojoType {
    timestamp: mojoBase_mojom_JSTime;
    direction: MessageDirection;
    messageTruncated: boolean;
    payloadTypes: string[];
    message: string;
}
export type RecordedEvent = RecordedEventMojoType;
export declare interface SessionSummaryMojoType {
    sessionId: string;
    startWallTime: mojoBase_mojom_JSTime;
    endWallTime: (mojoBase_mojom_JSTime | null);
    totalDownstreamMessages: number;
    totalUpstreamMessages: number;
    events: RecordedEvent[];
    totalEvents: number;
}
export type SessionSummary = SessionSummaryMojoType;
export declare interface BrowserActuatorInternalsUI_GetSessionHistory_ParamsMojoType {
}
export type BrowserActuatorInternalsUI_GetSessionHistory_Params = BrowserActuatorInternalsUI_GetSessionHistory_ParamsMojoType;
export declare interface BrowserActuatorInternalsUI_GetSessionHistory_ResponseParamsMojoType {
    sessions: SessionSummary[];
}
export type BrowserActuatorInternalsUI_GetSessionHistory_ResponseParams = BrowserActuatorInternalsUI_GetSessionHistory_ResponseParamsMojoType;
export declare interface BrowserActuatorInternalsUI_ExportSessionHistory_ParamsMojoType {
    sessionIds: string[];
}
export type BrowserActuatorInternalsUI_ExportSessionHistory_Params = BrowserActuatorInternalsUI_ExportSessionHistory_ParamsMojoType;
export declare interface BrowserActuatorInternalsUI_ExportSessionHistory_ResponseParamsMojoType {
    json: string;
}
export type BrowserActuatorInternalsUI_ExportSessionHistory_ResponseParams = BrowserActuatorInternalsUI_ExportSessionHistory_ResponseParamsMojoType;
export declare interface BrowserActuatorInternalsUIFactory_CreateUI_ParamsMojoType {
    page: BrowserActuatorInternalsPageRemote;
    ui: BrowserActuatorInternalsUIPendingReceiver;
}
export type BrowserActuatorInternalsUIFactory_CreateUI_Params = BrowserActuatorInternalsUIFactory_CreateUI_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<BrowserActuatorInternalsUIInterface, BrowserActuatorInternalsPageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<BrowserActuatorInternalsUIInterface, BrowserActuatorInternalsPageRemote, BrowserActuatorInternalsUIPendingReceiver, BrowserActuatorInternalsPagePendingReceiver, BrowserActuatorInternalsPageCallbackRouter, BrowserActuatorInternalsUIRemote>;
