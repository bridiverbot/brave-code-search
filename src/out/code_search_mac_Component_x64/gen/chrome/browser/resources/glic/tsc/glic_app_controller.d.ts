import type { BrowserProxyImpl } from './browser_proxy.js';
import { PanelStateKind } from './glic_enums.mojom-webui.js';
import { //
ClientLoadErrorReason, //
GuestPageType, //
ProfileReadyState, //
WebClientState, //
WebUiState } from './glic_webui.mojom-webui.js';
import type { ZoomAction } from './glic_webui.mojom-webui.js';
import type { WebviewDelegate } from './webview.js';
import { WebviewController } from './webview.js';
interface StateDescriptor {
    onEnter?: () => void;
    onExit?: () => void;
    reloadOnOpen?: boolean;
    clientLoadErrorReason?: ClientLoadErrorReason;
}
export declare enum LoadingStage {
    NOT_LOADING = 0,
    AWAITING_PROFILE_READY = 1,
    AWAITING_COOKIE_SYNC = 2,
    LOADING_WEB_CLIENT = 3,
    AWAITING_NOTIFY_PANEL_WILL_OPEN = 4,
    MAX_VALUE = 4
}
export declare enum WebUiErrorReason {
    WEBVIEW_ERROR = 0,
    LOAD_ERROR = 1,
    COOKIE_SYNC_ERROR = 2,
    TIMEOUT_NOTIFY_PANEL_WILL_OPEN = 3,
    TIMEOUT_LOADING_CLIENT = 4,
    TIMEOUT_WARMED = 5,
    CLIENT_ERROR = 6,
    DEPRECATED_CLOSE_DEBUG_VIEW = 7,
    MAX_VALUE = 7
}
export declare class GlicAppController implements WebviewDelegate {
    loadingTimer: number | undefined;
    private isFreCompleted;
    private simulateNoConnection;
    private webview?;
    get webviewForTesting(): WebviewController | undefined;
    private webviewPersistentState;
    private profileReadyState;
    private profileReadyInitialState;
    private loadingStage;
    private loadingStageStartTimestampMs?;
    private panelStateKind;
    private clientLoadErrorReason;
    private clientLoadErrorReported;
    private showingSecurityInterstitial;
    state: WebUiState | undefined;
    private clientLoadFailed;
    private loadWaiters;
    private earliestLoadingDismissTime;
    browserProxy: BrowserProxyImpl;
    constructor(browserProxy: BrowserProxyImpl);
    webviewError(reason: string): void;
    onGuestNavigationStarted(): void;
    onGuestNavigated(url: string, isApiAllowed: boolean, pageType: GuestPageType, isInitialCommit: boolean): void;
    onGuestMainPageLoaded(): void;
    webviewPageCommit(type: GuestPageType, _isApiAllowed: boolean): void;
    webviewDeniedByAdmin(): void;
    private setState;
    private hasClientLoadFailed;
    private maybeReportClientLoadError;
    private isClientLoaded;
    private maybeResolveLoadWaiters;
    private setErrorState;
    private stateDescriptor;
    readonly states: Map<WebUiState, StateDescriptor>;
    private cancelTimeout;
    private beginLoad;
    private trackLoadingStageStart;
    private trackLoadingStageEnd;
    private getLoadingStage;
    private load;
    private showLoading;
    private holdLoading;
    private finishLoading;
    private guestLoaded;
    private startClientLoadTimeout;
    private showPanel;
    private destroyWebview;
    private online;
    private offline;
    private startWarmedTimeout;
    webClientStateChanged(state: WebClientState): void;
    close(): void;
    reload(): void;
    private openProfilePicker;
    private signIn;
    clientReadyStateChanged(ready: boolean): void;
    updatePageState(panelStateKind: PanelStateKind): void;
    zoom(zoomAction: ZoomAction): void;
    intentToShow(): void;
    waitForLoad(): Promise<{
        failed: boolean;
    }>;
    setProfileReadyState(state: ProfileReadyState): void;
    openDisabledByAdminLink(): void;
    isOnline(): boolean;
    private initializeIcons_;
}
export {};
