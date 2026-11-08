import type { GoogleCalendarPageHandlerRemote } from '../../google_calendar.mojom-webui.js';
export interface GoogleCalendarProxy {
    handler: GoogleCalendarPageHandlerRemote;
}
export declare class GoogleCalendarProxyImpl implements GoogleCalendarProxy {
    handler: GoogleCalendarPageHandlerRemote;
    constructor(handler: GoogleCalendarPageHandlerRemote);
    static getInstance(): GoogleCalendarProxy;
    static setInstance(newInstance: GoogleCalendarProxy): void;
}
