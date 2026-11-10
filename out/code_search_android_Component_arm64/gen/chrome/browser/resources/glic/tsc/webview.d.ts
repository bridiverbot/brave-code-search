import type { BrowserProxy } from './browser_proxy.js';
import { GuestPageType, WebClientState, ZoomAction } from './glic_webui.mojom-webui.js';
import type { ObservableValueReadOnly } from './observable.js';
import type { WebViewType } from './shared/web_view_type.js';
export interface WebviewDelegate {
    webviewError(reason: string): void;
    webviewPageCommit(pageType: GuestPageType, isApiAllowed: boolean): void;
    webviewDeniedByAdmin(): void;
}
export declare class WebviewPersistentState {
    private loadUrl;
    private loadUrlUsed;
    useLoadUrl(): string;
    onCommitAfterConnect(newUrl: string): void;
    onClientReady(): void;
}
export declare class WebviewController {
    private readonly container;
    private browserProxy;
    private delegate;
    private persistentState;
    webview: WebViewType;
    private onDestroy;
    private eventTracker;
    private webClientState;
    private glicRequestHeaderInjector?;
    private displayScaleMultiplier;
    private webClientStateListenerId?;
    private bootstrapTimeoutId?;
    private stopBootstrapPing;
    constructor(container: HTMLElement, browserProxy: BrowserProxy, delegate: WebviewDelegate, persistentState: WebviewPersistentState);
    getWebClientState(): ObservableValueReadOnly<WebClientState>;
    focus(): void;
    destroy(): void;
    private destroyHost;
    zoom(zoomAction: ZoomAction): void;
    private onLoadStop;
    private onNewWindow;
    private onPermissionRequest;
    private onExit;
    onGuestNavigationStarted(): void;
    onGuestNavigated(url: string, isApiAllowed: boolean, pageType: GuestPageType, _isInitialCommit: boolean): void;
    private onNewWindowEvent;
}
