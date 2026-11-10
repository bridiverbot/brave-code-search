import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { CalendarEvent as ntp_calendar_mojom_CalendarEvent } from './calendar_data.mojom-webui.js';
export type OutlookCalendarPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<OutlookCalendarPageHandlerPendingReceiver>;
export declare class OutlookCalendarPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<OutlookCalendarPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<OutlookCalendarPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | OutlookCalendarPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface OutlookCalendarPageHandlerInterface {
    getEvents(): Promise<{
        events: ntp_calendar_mojom_CalendarEvent[];
    }>;
}
export declare class OutlookCalendarPageHandlerRemote implements OutlookCalendarPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<OutlookCalendarPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<OutlookCalendarPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | OutlookCalendarPageHandlerPendingReceiverEndpoint);
    getEvents(): Promise<{
        events: ntp_calendar_mojom_CalendarEvent[];
    }>;
}
/**
 * An object which receives request messages for the OutlookCalendarPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class OutlookCalendarPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<OutlookCalendarPageHandlerRemote, OutlookCalendarPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<OutlookCalendarPageHandlerRemote, OutlookCalendarPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: OutlookCalendarPageHandlerInterface);
}
export declare class OutlookCalendarPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): OutlookCalendarPageHandlerRemote;
}
/**
 * An object which receives request messages for the OutlookCalendarPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class OutlookCalendarPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<OutlookCalendarPageHandlerRemote, OutlookCalendarPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<OutlookCalendarPageHandlerRemote, OutlookCalendarPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getEvents: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const OutlookCalendarPageHandler_GetEvents_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const OutlookCalendarPageHandler_GetEvents_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface OutlookCalendarPageHandler_GetEvents_ParamsMojoType {
}
export type OutlookCalendarPageHandler_GetEvents_Params = OutlookCalendarPageHandler_GetEvents_ParamsMojoType;
export declare interface OutlookCalendarPageHandler_GetEvents_ResponseParamsMojoType {
    events: ntp_calendar_mojom_CalendarEvent[];
}
export type OutlookCalendarPageHandler_GetEvents_ResponseParams = OutlookCalendarPageHandler_GetEvents_ResponseParamsMojoType;
