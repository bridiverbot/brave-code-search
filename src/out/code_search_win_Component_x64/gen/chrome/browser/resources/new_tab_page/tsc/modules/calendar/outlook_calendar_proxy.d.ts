import type { OutlookCalendarPageHandlerRemote } from '../../outlook_calendar.mojom-webui.js';
export interface OutlookCalendarProxy {
    handler: OutlookCalendarPageHandlerRemote;
}
export declare class OutlookCalendarProxyImpl implements OutlookCalendarProxy {
    handler: OutlookCalendarPageHandlerRemote;
    constructor(handler: OutlookCalendarPageHandlerRemote);
    static getInstance(): OutlookCalendarProxy;
    static setInstance(newInstance: OutlookCalendarProxy): void;
}
