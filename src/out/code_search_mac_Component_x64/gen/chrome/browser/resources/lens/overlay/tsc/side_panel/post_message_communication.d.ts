import '/strings.m.js';
import type { SidePanelBrowserProxy } from './side_panel_browser_proxy.js';
export declare enum MessageType {
    SCROLL_TO = 0
}
export declare enum ParamType {
    MESSAGE_TYPE = "type",
    TEXT_FRAGMENTS = "textFragments",
    PDF_PAGE_NUMBER = "pdfPageNumber"
}
export declare class PostMessageReceiver {
    private eventTracker;
    private sidePanelProxy;
    private resultsFrame;
    private listenerIds;
    private resultsSearchUrl;
    private handshakeMessage;
    private handshakeIntervalId;
    private isAimSearchboxEnabled;
    constructor(sidePanelProxy: SidePanelBrowserProxy, resultsFrame: HTMLIFrameElement);
    detach(): void;
    private queueHandshake;
    private onSendClientMessageToAim;
    private onMessageReceived;
    private onAimMessage;
    private onAimHandshakeReceived;
    private stopAimHandshake;
}
