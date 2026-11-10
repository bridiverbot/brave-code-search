import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { CalendarEvent as ntp_calendar_mojom_CalendarEvent } from './calendar_data.mojom-webui.js';
export type GoogleCalendarPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GoogleCalendarPageHandlerPendingReceiver>;
export declare class GoogleCalendarPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GoogleCalendarPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<GoogleCalendarPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | GoogleCalendarPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GoogleCalendarPageHandlerInterface {
    getEvents(): Promise<{
        events: ntp_calendar_mojom_CalendarEvent[];
    }>;
}
export declare class GoogleCalendarPageHandlerRemote implements GoogleCalendarPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<GoogleCalendarPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GoogleCalendarPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GoogleCalendarPageHandlerPendingReceiverEndpoint);
    getEvents(): Promise<{
        events: ntp_calendar_mojom_CalendarEvent[];
    }>;
}
/**
 * An object which receives request messages for the GoogleCalendarPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GoogleCalendarPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GoogleCalendarPageHandlerRemote, GoogleCalendarPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GoogleCalendarPageHandlerRemote, GoogleCalendarPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GoogleCalendarPageHandlerInterface);
}
export declare class GoogleCalendarPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GoogleCalendarPageHandlerRemote;
}
/**
 * An object which receives request messages for the GoogleCalendarPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GoogleCalendarPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GoogleCalendarPageHandlerRemote, GoogleCalendarPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GoogleCalendarPageHandlerRemote, GoogleCalendarPageHandlerPendingReceiver>;
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
export declare const GoogleCalendarPageHandler_GetEvents_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GoogleCalendarPageHandler_GetEvents_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GoogleCalendarPageHandler_GetEvents_ParamsMojoType {
}
export type GoogleCalendarPageHandler_GetEvents_Params = GoogleCalendarPageHandler_GetEvents_ParamsMojoType;
export declare interface GoogleCalendarPageHandler_GetEvents_ResponseParamsMojoType {
    events: ntp_calendar_mojom_CalendarEvent[];
}
export type GoogleCalendarPageHandler_GetEvents_ResponseParams = GoogleCalendarPageHandler_GetEvents_ResponseParamsMojoType;
