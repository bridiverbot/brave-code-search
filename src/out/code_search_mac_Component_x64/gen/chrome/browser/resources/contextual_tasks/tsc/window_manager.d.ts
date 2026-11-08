import type { WebViewType } from './web_view_type.js';
export declare class WindowManager {
    private mainWebview;
    /**
     * Stores dynamically created, hidden `<webview>` elements used to host and
     * track guest windows opened via `window.open()`. Keyed by their unique
     * unguessable token ID. We must keep references to these elements to manage
     * their lifecycle (e.g., removing them from the DOM when closed).
     */
    private trackedWebviews;
    constructor(mainWebview: WebViewType);
    private onNewWindow;
    private onWindowClosedFromBrowser;
}
