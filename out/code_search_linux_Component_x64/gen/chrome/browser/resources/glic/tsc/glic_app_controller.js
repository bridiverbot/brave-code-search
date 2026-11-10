// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from '//resources/js/load_time_data.js';
import { assert, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { getRequiredElement } from 'chrome://resources/js/util.js';
import { PanelStateKind } from './glic_enums.mojom-webui.js';
import { //
ClientLoadErrorReason, //
GuestPageType, //
HelpCenterTopic, //
PrepareForClientResult, //
ProfileReadyState, //
WebClientState, //
WebUiState, //
 } from './glic_webui.mojom-webui.js';
import { WebviewController, WebviewPersistentState } from './webview.js';
// Time to wait before showing loading panel.
const kPreHoldLoadingTimeMs = loadTimeData.getInteger('preLoadingTimeMs');
// Minimum time to hold "loading" panel visible.
const kMinHoldLoadingTimeMs = loadTimeData.getInteger('minLoadingTimeMs');
// Maximum time to wait for load before showing error panel.
const kMaxWaitTimeMs = loadTimeData.getInteger('maxLoadingTimeMs');
const kShowErrorAllowed = loadTimeData.getBoolean('showErrorAllowed');
const $ = new Proxy({}, {
    get(_target, prop) {
        return getRequiredElement(prop);
    },
});
// Web client unresponsiveness state tracking values for metrics reporting.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
//
// Enum for specific stages of loading the web client, reported if loading times
// out.
// LINT.IfChange(LoadingStage)
export var LoadingStage;
(function (LoadingStage) {
    LoadingStage[LoadingStage["NOT_LOADING"] = 0] = "NOT_LOADING";
    LoadingStage[LoadingStage["AWAITING_PROFILE_READY"] = 1] = "AWAITING_PROFILE_READY";
    LoadingStage[LoadingStage["AWAITING_COOKIE_SYNC"] = 2] = "AWAITING_COOKIE_SYNC";
    LoadingStage[LoadingStage["LOADING_WEB_CLIENT"] = 3] = "LOADING_WEB_CLIENT";
    LoadingStage[LoadingStage["AWAITING_NOTIFY_PANEL_WILL_OPEN"] = 4] = "AWAITING_NOTIFY_PANEL_WILL_OPEN";
    LoadingStage[LoadingStage["MAX_VALUE"] = 4] = "MAX_VALUE";
})(LoadingStage || (LoadingStage = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/glic/enums.xml:LoadingStage,//tools/metrics/histograms/metadata/glic/histograms.xml:LoadingStage)
// Reasons for entering WebUiState.kError.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
//
// LINT.IfChange(PanelWebUiStateErrorReason)
export var WebUiErrorReason;
(function (WebUiErrorReason) {
    WebUiErrorReason[WebUiErrorReason["WEBVIEW_ERROR"] = 0] = "WEBVIEW_ERROR";
    WebUiErrorReason[WebUiErrorReason["LOAD_ERROR"] = 1] = "LOAD_ERROR";
    WebUiErrorReason[WebUiErrorReason["COOKIE_SYNC_ERROR"] = 2] = "COOKIE_SYNC_ERROR";
    WebUiErrorReason[WebUiErrorReason["TIMEOUT_NOTIFY_PANEL_WILL_OPEN"] = 3] = "TIMEOUT_NOTIFY_PANEL_WILL_OPEN";
    WebUiErrorReason[WebUiErrorReason["TIMEOUT_LOADING_CLIENT"] = 4] = "TIMEOUT_LOADING_CLIENT";
    WebUiErrorReason[WebUiErrorReason["TIMEOUT_WARMED"] = 5] = "TIMEOUT_WARMED";
    WebUiErrorReason[WebUiErrorReason["CLIENT_ERROR"] = 6] = "CLIENT_ERROR";
    WebUiErrorReason[WebUiErrorReason["DEPRECATED_CLOSE_DEBUG_VIEW"] = 7] = "DEPRECATED_CLOSE_DEBUG_VIEW";
    WebUiErrorReason[WebUiErrorReason["MAX_VALUE"] = 7] = "MAX_VALUE";
})(WebUiErrorReason || (WebUiErrorReason = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/glic/enums.xml:PanelWebUiStateErrorReason)
export class GlicAppController {
    loadingTimer;
    isFreCompleted = loadTimeData.getBoolean('completedFre');
    // This is used to simulate no connection for tests.
    simulateNoConnection = loadTimeData.getBoolean('simulateNoConnection');
    // Present only when loading or after loading is finished. Removed on error.
    webview;
    get webviewForTesting() {
        return this.webview;
    }
    webviewPersistentState = new WebviewPersistentState();
    profileReadyState = undefined;
    profileReadyInitialState = Promise.withResolvers();
    // Loading stage, affects metrics only.
    loadingStage = LoadingStage.NOT_LOADING;
    loadingStageStartTimestampMs;
    panelStateKind = PanelStateKind.kHidden;
    // Why the client is currently unusable, or undefined if it is not in a
    // failure state. Held rather than reported immediately; see
    // `maybeReportClientLoadError()`.
    clientLoadErrorReason;
    clientLoadErrorReported = false;
    showingSecurityInterstitial = false;
    state;
    clientLoadFailed;
    loadWaiters = [];
    // When entering loading state, this represents the earliest timestamp at
    // which the UI can transition to the ready state. This ensures that the
    // loading UI isn't just a brief flash on screen.
    earliestLoadingDismissTime;
    browserProxy;
    constructor(browserProxy) {
        this.browserProxy = browserProxy;
        window.addEventListener('online', () => {
            this.online();
        });
        window.addEventListener('offline', () => {
            if (!this.isOnline()) {
                this.offline();
            }
        });
        // Programmatically redirect focus to the embedded guest
        // webview if focus gets trapped on the orchestrator container
        // (document.body) while the guest panel is visible.
        window.addEventListener('focus', () => {
            const isGuestVisible = !$.guestPanel.hidden;
            const isFocusTrapped = document.activeElement === document.body || !document.activeElement;
            if (isGuestVisible && isFocusTrapped) {
                this.webview?.focus();
            }
        });
        if (this.isOnline()) {
            this.setState(WebUiState.kBeginLoad);
        }
        else {
            this.setState(WebUiState.kOffline);
        }
        $.profilePickerButton.addEventListener('click', () => {
            this.openProfilePicker();
        });
        $.reload.addEventListener('click', () => {
            this.reload();
        });
        $.disabledByAdminCloseButton.addEventListener('click', () => {
            this.browserProxy.pageHandler.closePanel();
        });
        $.disabledByAdminPanel.querySelector('a')?.addEventListener('click', () => {
            this.openDisabledByAdminLink();
        });
        $.locationMismatchHelpButton.addEventListener('click', () => {
            this.browserProxy.pageHandler.openHelpCenterTopicAndClosePanel(HelpCenterTopic.kLocationMismatch);
        });
        $.ineligibleAccountHelpButton.addEventListener('click', () => {
            this.browserProxy.pageHandler.openHelpCenterTopicAndClosePanel(HelpCenterTopic.kIneligibleAccount);
        });
        $.signInButton.addEventListener('click', () => {
            this.signIn();
        });
        $.showError.addEventListener('click', () => {
            this.showPanel('guestPanel');
        });
        this.browserProxy.preloadPageCallbackRouter.onGuestNavigationStarted
            .addListener(() => {
            this.onGuestNavigationStarted();
        });
        this.browserProxy.preloadPageCallbackRouter.onGuestNavigated.addListener((url, isApiAllowed, pageType, isInitialCommit) => {
            this.onGuestNavigated(url, isApiAllowed, pageType, isInitialCommit);
        });
        this.browserProxy.preloadPageCallbackRouter.onGuestMainPageLoaded
            .addListener(() => {
            this.onGuestMainPageLoaded();
        });
        this.browserProxy.preloadPageCallbackRouter.onGuestProcessGone.addListener(() => {
            this.webviewError('guest process gone');
        });
        if (kShowErrorAllowed) {
            $.showError.hidden = false;
        }
        document.addEventListener('keydown', ev => {
            if (this.state !== WebUiState.kReady ||
                this.showingSecurityInterstitial) {
                if (ev.code === 'Escape') {
                    ev.stopPropagation();
                    ev.preventDefault();
                    this.browserProxy.pageHandler.closePanel();
                }
            }
        });
        this.initializeIcons_();
    }
    webviewError(reason) {
        console.warn(`webview exit. reason: ${reason}`);
        this.setErrorState(WebUiErrorReason.WEBVIEW_ERROR, ClientLoadErrorReason.kGuestProcessGone);
    }
    onGuestNavigationStarted() {
        this.webview?.onGuestNavigationStarted();
        if (this.state === WebUiState.kGuestLoaded) {
            this.setState(WebUiState.kShowLoading);
        }
    }
    onGuestNavigated(url, isApiAllowed, pageType, isInitialCommit) {
        this.webview?.onGuestNavigated(url, isApiAllowed, pageType, isInitialCommit);
    }
    onGuestMainPageLoaded() {
        if (this.state === WebUiState.kHoldLoading) {
            this.setState(WebUiState.kReady);
            return;
        }
        if (this.state === WebUiState.kBeginLoad ||
            this.state === WebUiState.kShowLoading ||
            this.state === WebUiState.kFinishLoading) {
            this.setState(WebUiState.kGuestLoaded);
        }
    }
    webviewPageCommit(type, _isApiAllowed) {
        const wasShowingSecurityInterstitial = this.showingSecurityInterstitial;
        this.showingSecurityInterstitial = false;
        switch (type) {
            case GuestPageType.kLogin:
                this.cancelTimeout();
                $.guestPanel.classList.toggle('show-header', true);
                this.showPanel('guestPanel');
                break;
            case GuestPageType.kSecurityInterstitial:
                this.showingSecurityInterstitial = true;
                this.loadingStage = LoadingStage.NOT_LOADING;
                this.cancelTimeout();
                $.guestPanel.classList.toggle('show-header', true);
                this.showPanel('guestPanel');
                break;
            case GuestPageType.kGuestError:
                this.setState(WebUiState.kGuestError);
                break;
            case GuestPageType.kRegular:
                $.guestPanel.classList.toggle('show-header', false);
                if (wasShowingSecurityInterstitial) {
                    this.trackLoadingStageStart(LoadingStage.LOADING_WEB_CLIENT);
                    // kSecurityInterstitial cancelled the loading timer without changing
                    // this.state, and setState() is a no-op when this.state === newState.
                    if (this.state === WebUiState.kShowLoading) {
                        this.showLoading();
                    }
                    else {
                        this.setState(WebUiState.kShowLoading);
                    }
                    break;
                }
                if (loadTimeData.getBoolean('reloadAfterNavigation')) {
                    if (this.state === WebUiState.kReady ||
                        this.state === WebUiState.kWarmed ||
                        this.state === WebUiState.kGuestLoaded ||
                        this.state === WebUiState.kGuestError) {
                        this.setState(WebUiState.kBeginLoad);
                    }
                }
                break;
            case GuestPageType.kLoadError:
                this.setErrorState(WebUiErrorReason.LOAD_ERROR, ClientLoadErrorReason.kGuestLoadFailed);
                break;
            case GuestPageType.kDisabledByAdmin:
                this.webviewDeniedByAdmin();
                break;
            default:
                assertNotReachedCase(type);
        }
    }
    webviewDeniedByAdmin() {
        $.disabledByAdminPanel.classList.toggle('show-disabled-by-admin-link', true);
        this.setState(WebUiState.kDisabledByAdmin);
    }
    // `clientLoadErrorReason` is for states whose cause is not recoverable from
    // the state itself (kError); other failure states declare their cause on
    // their StateDescriptor. Pass null to report nothing at all.
    setState(newState, clientLoadErrorReason) {
        // Clear in case we leave an interstitial via reload()/offline()/etc., since
        // a new <webview>'s initial commit does not call webviewPageCommit().
        this.showingSecurityInterstitial = false;
        if (this.state === newState) {
            return;
        }
        if (this.state) {
            this.states.get(this.state).onExit?.call(this);
        }
        this.state = newState;
        const descriptor = this.states.get(this.state);
        descriptor.onEnter?.call(this);
        this.browserProxy.pageHandler.onWebUiStateChanged(this.state);
        if (clientLoadErrorReason === undefined) {
            this.clientLoadErrorReason = descriptor.clientLoadErrorReason;
        }
        else {
            // An explicit null means this transition has nothing to report, and must
            // not fall back to the descriptor.
            this.clientLoadErrorReason =
                clientLoadErrorReason === null ? undefined : clientLoadErrorReason;
        }
        this.clientLoadErrorReported = false;
        this.maybeReportClientLoadError();
        const failed = this.hasClientLoadFailed(this.state);
        if (this.clientLoadFailed !== failed) {
            this.clientLoadFailed = failed;
            this.browserProxy.pageHandler.onClientLoadFailed(failed);
        }
        this.maybeResolveLoadWaiters();
    }
    // Whether `state` is one the client cannot leave without being reloaded.
    // Readiness is deliberately not reported: the browser decides that from the
    // web client connection, so the only states distinguished here are "still
    // on its way" and "gave up".
    hasClientLoadFailed(state) {
        switch (state) {
            case WebUiState.kUninitialized:
            case WebUiState.kBeginLoad:
            case WebUiState.kShowLoading:
            case WebUiState.kHoldLoading:
            case WebUiState.kFinishLoading:
            case WebUiState.kGuestLoaded:
            case WebUiState.kReady:
            case WebUiState.kWarmed:
            // An unresponsive client is left again by `webClientStateChanged()` on
            // the next kResponsive, without a reload, and the browser tracks
            // responsiveness itself through `WebClientState`.
            case WebUiState.kUnresponsive:
                return false;
            case WebUiState.kError:
            case WebUiState.kOffline:
            case WebUiState.kUnavailable:
            case WebUiState.kSignIn:
            case WebUiState.kGuestError:
            case WebUiState.kDisabledByAdmin:
            case WebUiState.kLocationMismatch:
            case WebUiState.kIneligibleAccount:
                return true;
            default:
                assertNotReachedCase(state);
        }
    }
    // Reports the current failure cause to the browser, which is the single
    // place client load errors are recorded.
    //
    // Only failures the user can actually see are reported. A failure reached
    // while the panel is hidden (for example during warming) is retried when the
    // panel is next opened, see `intentToShow()`; if that retry succeeds the user
    // never saw an error, and the retry leaves the failure state, clearing
    // `clientLoadErrorReason` before the panel is shown. What survives to here is
    // a failure that is still on screen once the panel opens.
    maybeReportClientLoadError() {
        if (this.clientLoadErrorReason === undefined ||
            this.clientLoadErrorReported ||
            this.panelStateKind === PanelStateKind.kHidden) {
            return;
        }
        this.clientLoadErrorReported = true;
        this.browserProxy.pageHandler.notifyClientLoadError(this.clientLoadErrorReason);
    }
    isClientLoaded() {
        if (this.state === undefined || this.hasClientLoadFailed(this.state)) {
            return false;
        }
        const webClientState = this.webview?.getWebClientState().getCurrentValue();
        return webClientState === WebClientState.kResponsive ||
            webClientState === WebClientState.kUnresponsive;
    }
    maybeResolveLoadWaiters() {
        if (this.state === undefined || this.loadWaiters.length === 0) {
            return;
        }
        const loaded = this.isClientLoaded();
        const failed = this.hasClientLoadFailed(this.state);
        if (!loaded && !failed) {
            return;
        }
        for (const resolve of this.loadWaiters.splice(0)) {
            resolve({ failed });
        }
    }
    // `clientLoadErrorReason` is null for the rare transition into kError that
    // is not a client load failure, and so is not worth recording.
    setErrorState(reason, clientLoadErrorReason) {
        // Only record the histogram if not already in the error state.
        if (this.state === WebUiState.kError) {
            return;
        }
        chrome.histograms.recordEnumerationValue('Glic.PanelWebUiState.Error', reason, WebUiErrorReason.MAX_VALUE + 1);
        if (!this.isFreCompleted) {
            chrome.histograms.recordEnumerationValue('Glic.Fre.PanelWebUiState.Error', reason, WebUiErrorReason.MAX_VALUE + 1);
        }
        this.setState(WebUiState.kError, clientLoadErrorReason);
    }
    stateDescriptor() {
        return this.state !== undefined ? this.states.get(this.state) : undefined;
    }
    states = new Map([
        [
            WebUiState.kBeginLoad,
            { onEnter: this.beginLoad, onExit: this.cancelTimeout },
        ],
        [
            WebUiState.kShowLoading,
            { onEnter: this.showLoading, onExit: this.cancelTimeout },
        ],
        [
            WebUiState.kHoldLoading,
            { onEnter: this.holdLoading, onExit: this.cancelTimeout },
        ],
        [
            WebUiState.kFinishLoading,
            { onEnter: this.finishLoading, onExit: this.cancelTimeout },
        ],
        [
            WebUiState.kGuestLoaded,
            { onEnter: this.guestLoaded, onExit: this.cancelTimeout },
        ],
        [
            WebUiState.kError,
            {
                reloadOnOpen: true,
                onEnter: () => {
                    this.destroyWebview();
                    this.showPanel('errorPanel');
                },
            },
        ],
        [
            WebUiState.kOffline,
            {
                clientLoadErrorReason: ClientLoadErrorReason.kOffline,
                onEnter: () => {
                    this.destroyWebview();
                    this.showPanel('offlinePanel');
                },
            },
        ],
        [
            WebUiState.kUnavailable,
            {
                clientLoadErrorReason: ClientLoadErrorReason.kUnavailable,
                reloadOnOpen: true,
                onEnter: () => {
                    this.destroyWebview();
                    this.showPanel('unavailablePanel');
                },
            },
        ],
        [
            WebUiState.kIneligibleAccount,
            {
                clientLoadErrorReason: ClientLoadErrorReason.kIneligibleAccount,
                reloadOnOpen: true,
                onEnter: () => {
                    this.destroyWebview();
                    this.showPanel('ineligibleAccountPanel');
                },
            },
        ],
        [
            WebUiState.kDisabledByAdmin,
            {
                clientLoadErrorReason: ClientLoadErrorReason.kDisabledByAdmin,
                reloadOnOpen: true,
                onEnter: () => {
                    this.destroyWebview();
                    this.showPanel('disabledByAdminPanel');
                },
            },
        ],
        [
            WebUiState.kLocationMismatch,
            {
                clientLoadErrorReason: ClientLoadErrorReason.kLocationMismatch,
                reloadOnOpen: true,
                onEnter: () => {
                    this.destroyWebview();
                    this.showPanel('locationMismatchPanel');
                },
            },
        ],
        [
            WebUiState.kWarmed,
            {
                onEnter: () => {
                    $.guestPanel.classList.toggle('show-header', false);
                    this.showPanel('guestPanel');
                },
            },
        ],
        [
            WebUiState.kReady,
            {
                onEnter: () => {
                    this.trackLoadingStageEnd();
                    $.guestPanel.classList.toggle('show-header', false);
                    this.showPanel('guestPanel');
                },
            },
        ],
        [
            WebUiState.kUnresponsive,
            {
                reloadOnOpen: true,
                onEnter: () => {
                    $.unresponsiveOverlay.classList.toggle('hidden', false);
                },
                onExit: () => {
                    $.unresponsiveOverlay.classList.toggle('hidden', true);
                },
            },
        ],
        [
            WebUiState.kSignIn,
            {
                clientLoadErrorReason: ClientLoadErrorReason.kSignIn,
                reloadOnOpen: true,
                onEnter: () => {
                    this.destroyWebview();
                    this.showPanel('signInPanel');
                },
            },
        ],
        [
            WebUiState.kGuestError,
            {
                reloadOnOpen: true,
                onEnter: () => {
                    $.guestPanel.classList.toggle('show-header', true);
                    this.showPanel('guestPanel');
                },
            },
        ],
    ]);
    cancelTimeout() {
        if (this.loadingTimer) {
            clearTimeout(this.loadingTimer);
            this.loadingTimer = undefined;
        }
    }
    beginLoad() {
        // Wait a moment before showing the loading panel.
        if (!loadTimeData.getBoolean('noLoader')) {
            this.loadingTimer = setTimeout(() => {
                if (this.state === WebUiState.kWarmed ||
                    this.state === WebUiState.kReady ||
                    this.state === WebUiState.kGuestLoaded) {
                    return;
                }
                this.setState(WebUiState.kShowLoading);
            }, kPreHoldLoadingTimeMs);
        }
        this.load();
    }
    trackLoadingStageStart(newStage) {
        this.loadingStage = newStage;
        this.loadingStageStartTimestampMs = performance.now();
    }
    trackLoadingStageEnd() {
        if (this.loadingStage === LoadingStage.NOT_LOADING) {
            return;
        }
        chrome.histograms.recordMediumTime('Glic.Host.LoadingStageDuration.' +
            LoadingStage[this.getLoadingStage()], Math.floor(performance.now() - this.loadingStageStartTimestampMs));
        this.loadingStage = LoadingStage.NOT_LOADING;
    }
    getLoadingStage() {
        return this.loadingStage;
    }
    async load() {
        this.destroyWebview();
        // profileReadyState isn't available right away. Wait until it's ready.
        this.trackLoadingStageStart(LoadingStage.AWAITING_PROFILE_READY);
        await this.profileReadyInitialState.promise;
        this.trackLoadingStageEnd();
        const readyState = this.profileReadyState;
        assert(readyState !== undefined);
        switch (readyState) {
            case ProfileReadyState.kIneligible:
            case ProfileReadyState.kUnknownError:
                this.setState(WebUiState.kUnavailable);
                return;
            case ProfileReadyState.kIneligibleAccount:
                this.setState(WebUiState.kIneligibleAccount);
                return;
            case ProfileReadyState.kLocationMismatch:
                this.setState(WebUiState.kLocationMismatch);
                return;
            case ProfileReadyState.kDisabledByAdmin:
                $.disabledByAdminPanel.classList.toggle('show-disabled-by-admin-link', false);
                this.setState(WebUiState.kDisabledByAdmin);
                return;
            case ProfileReadyState.kSignInRequired:
                this.setState(WebUiState.kSignIn);
                return;
            case ProfileReadyState.kReady:
                break;
            default:
                assertNotReachedCase(readyState);
        }
        // Blocking on cookie syncing here introduces latency, we should consider
        // ways to avoid it.
        this.trackLoadingStageStart(LoadingStage.AWAITING_COOKIE_SYNC);
        const { result } = this.browserProxy.glicPreloadHandler ?
            await this.browserProxy.glicPreloadHandler.prepareForClient() :
            await this.browserProxy.pageHandler.prepareForClient();
        this.trackLoadingStageEnd();
        switch (result) {
            case PrepareForClientResult.kSuccess:
                break;
            case PrepareForClientResult.kErrorResyncingCookies:
                console.warn('prepareForClient in beginLoad() failed.');
                this.setErrorState(WebUiErrorReason.COOKIE_SYNC_ERROR, ClientLoadErrorReason.kCookieSyncFailed);
                return;
            case PrepareForClientResult.kRequiresSignIn:
                this.setState(WebUiState.kSignIn);
                return;
            default:
                assertNotReachedCase(result);
        }
        // Load the web client only after cookie sync is complete.
        this.trackLoadingStageStart(LoadingStage.LOADING_WEB_CLIENT);
        this.webview = new WebviewController($.webviewContainer, this.browserProxy, this, this.webviewPersistentState);
        this.webview.getWebClientState().subscribe(this.webClientStateChanged.bind(this));
        if (loadTimeData.getBoolean('noLoader')) {
            this.showPanel('guestPanel');
        }
        // Browser is expected to call client's notifyPanelWillOpen(), and then we
        // expect a call to webClientReady() when that finishes.
    }
    showLoading() {
        if (this.state === WebUiState.kWarmed) {
            return;
        }
        this.showPanel('loadingPanel');
        this.earliestLoadingDismissTime = performance.now() + kMinHoldLoadingTimeMs;
        if (this.webview?.getWebClientState().getCurrentValue() ===
            WebClientState.kResponsive) {
            if (this.panelStateKind === PanelStateKind.kHidden) {
                this.setState(WebUiState.kWarmed);
                return;
            }
            this.setState(WebUiState.kHoldLoading);
            return;
        }
        // After kMinHoldLoadingTimeMs, transition to finish-loading or ready. Note
        // that we do not transition from show-loading to ready before the timeout.
        this.earliestLoadingDismissTime = performance.now() + kMinHoldLoadingTimeMs;
        this.loadingTimer = setTimeout(() => {
            if (this.state === WebUiState.kWarmed ||
                this.state === WebUiState.kReady ||
                this.state === WebUiState.kGuestLoaded) {
                return;
            }
            this.setState(WebUiState.kFinishLoading);
        }, kMinHoldLoadingTimeMs);
    }
    holdLoading() {
        // The web client is ready, but we still wait for the remainder of
        // `kMinHoldLoadingTimeMs` before showing it, to allow the loading animation
        // to complete once.
        this.loadingTimer = setTimeout(() => {
            this.setState(WebUiState.kReady);
        }, Math.max(0, this.earliestLoadingDismissTime - performance.now()));
    }
    finishLoading() {
        if (this.state === WebUiState.kWarmed) {
            return;
        }
        if (this.panelStateKind === PanelStateKind.kHidden) {
            this.cancelTimeout();
            this.trackLoadingStageEnd();
            this.setState(WebUiState.kWarmed);
            return;
        }
        this.startClientLoadTimeout();
    }
    guestLoaded() {
        $.guestPanel.classList.toggle('show-header', false);
        this.showPanel('guestPanel');
        if (this.panelStateKind === PanelStateKind.kHidden) {
            return;
        }
        this.startClientLoadTimeout();
    }
    startClientLoadTimeout() {
        // The web client is not yet ready, so wait for the remainder of
        // `kMaxWaitTimeMs`. Switch to error state at that time unless interrupted
        // by `webClientReady`.
        this.loadingTimer = setTimeout(() => {
            console.warn('Exceeded timeout waiting for client to load');
            this.setErrorState(WebUiErrorReason.TIMEOUT_LOADING_CLIENT, ClientLoadErrorReason.kClientLoadTimeout);
            if (this.state !== WebUiState.kReady) {
                chrome.histograms.recordEnumerationValue('Glic.Host.LoadingTimedOut', this.getLoadingStage(), LoadingStage.MAX_VALUE + 1);
            }
            this.trackLoadingStageEnd();
        }, kMaxWaitTimeMs - kMinHoldLoadingTimeMs);
    }
    // Show one webUI panel and hide the others. The widget is resized to fit the
    // newly-visible content. If the guest panel is now visible, then its size
    // will be determined by the most recent resize request.
    showPanel(id) {
        for (const panel of document.querySelectorAll('.panel')) {
            panel.hidden = panel.id !== id;
        }
        const panelStateKindSection = getRequiredElement('localPanels');
        panelStateKindSection.classList.toggle('hidden', id === 'guestPanel');
        // Focus the webview when the guest panel is shown.
        // b/475260887: webview.focus() won't focus the client page if the
        // <webview> element is invisible (due to an ancestor element having
        // display: none or HTML hidden attribute).
        if (id === 'guestPanel') {
            this.webview?.focus();
        }
    }
    // Destroy the current webview if it exists. This is necessary because
    // webview does not support unloading content by setting src=""
    destroyWebview() {
        if (!this.webview) {
            return;
        }
        this.webview.destroy();
        this.webview = undefined;
    }
    online() {
        if (this.simulateNoConnection) {
            return;
        }
        if (this.state !== WebUiState.kOffline) {
            return;
        }
        this.setState(WebUiState.kBeginLoad);
    }
    offline() {
        const allowedStates = [
            WebUiState.kBeginLoad,
            WebUiState.kShowLoading,
            WebUiState.kFinishLoading,
            WebUiState.kGuestLoaded,
        ];
        if (allowedStates.includes(this.state)) {
            this.setState(WebUiState.kOffline);
        }
    }
    startWarmedTimeout() {
        this.cancelTimeout();
        if (this.panelStateKind === PanelStateKind.kHidden) {
            return;
        }
        this.loadingTimer = setTimeout(() => {
            if (this.state === WebUiState.kWarmed) {
                this.setErrorState(WebUiErrorReason.TIMEOUT_WARMED, ClientLoadErrorReason.kWarmedTimeout);
            }
        }, kMaxWaitTimeMs);
    }
    webClientStateChanged(state) {
        switch (state) {
            case WebClientState.kUninitialized:
                break;
            case WebClientState.kWarmed:
                if (this.state === WebUiState.kBeginLoad ||
                    this.state === WebUiState.kFinishLoading ||
                    this.state === WebUiState.kShowLoading ||
                    this.state === WebUiState.kGuestLoaded) {
                    this.cancelTimeout();
                    this.setState(WebUiState.kWarmed);
                    if (this.panelStateKind !== PanelStateKind.kHidden) {
                        this.startWarmedTimeout();
                    }
                }
                break;
            case WebClientState.kResponsive:
                if (this.state === WebUiState.kUnresponsive) {
                    this.setState(WebUiState.kReady);
                }
                this.maybeResolveLoadWaiters();
                break;
            case WebClientState.kUnresponsive:
                break;
            case WebClientState.kError:
                this.setErrorState(WebUiErrorReason.CLIENT_ERROR, ClientLoadErrorReason.kClientError);
                break;
            default:
                assertNotReachedCase(state);
        }
    }
    // External entry points.
    close() {
        if (this.state === WebUiState.kReady) {
            this.browserProxy.pageHandler.closePanel();
        }
        else {
            // Reload in the background if user closes window while web client is not
            // ready. This is an escape hatch for situation where we're stuck in a
            // loading state caused by an error.
            this.browserProxy.pageHandler.closePanel().then(() => {
                this.reload();
            });
        }
    }
    // Called when the reload button is clicked.
    reload() {
        this.destroyWebview();
        // TODO: Allow the timeout on this load to be longer than the initial load.
        this.setState(WebUiState.kBeginLoad);
    }
    openProfilePicker() {
        this.browserProxy.pageHandler.openProfilePickerAndClosePanel();
    }
    signIn() {
        this.browserProxy.pageHandler.signInAndClosePanel();
    }
    clientReadyStateChanged(ready) {
        if (!ready) {
            return;
        }
        if (this.state === WebUiState.kBeginLoad ||
            this.state === WebUiState.kFinishLoading ||
            this.state === WebUiState.kGuestLoaded ||
            this.state === WebUiState.kWarmed) {
            this.cancelTimeout();
            this.trackLoadingStageEnd();
            this.setState(WebUiState.kReady);
        }
        else if (this.state === WebUiState.kShowLoading) {
            this.cancelTimeout();
            this.setState(WebUiState.kHoldLoading);
        }
        else if (this.state !== WebUiState.kHoldLoading) {
            this.setState(WebUiState.kReady);
        }
    }
    updatePageState(panelStateKind) {
        if (this.panelStateKind === panelStateKind) {
            return;
        }
        this.panelStateKind = panelStateKind;
        this.maybeReportClientLoadError();
        if (this.panelStateKind !== PanelStateKind.kHidden) {
            if (this.state === WebUiState.kWarmed) {
                this.startWarmedTimeout();
            }
            else if (this.state === WebUiState.kGuestLoaded && !this.loadingTimer) {
                this.startClientLoadTimeout();
            }
        }
        const panelStateKindSection = getRequiredElement('localPanels');
        panelStateKindSection.classList.toggle('sidePanel', this.panelStateKind === PanelStateKind.kAttached);
        panelStateKindSection.classList.toggle('floating', this.panelStateKind === PanelStateKind.kDetached);
    }
    zoom(zoomAction) {
        this.webview?.zoom(zoomAction);
    }
    // Called before the WebUI is shown. If we're in an error state, automatically
    // try to reload.
    //
    // The browser withdraws the failure this page last reported when it asks to
    // show (see GlicPageHandler::NotifyWindowIntentToShow()), on the assumption
    // that the page is about to retry. A failure state that is not retried on
    // open has to be reported again, or the browser would wait on a load that is
    // not coming.
    intentToShow() {
        if (this.stateDescriptor()?.reloadOnOpen) {
            this.reload();
        }
        else if (this.clientLoadFailed) {
            this.browserProxy.pageHandler.onClientLoadFailed(true);
        }
    }
    waitForLoad() {
        const { promise, resolve } = Promise.withResolvers();
        this.loadWaiters.push(resolve);
        this.maybeResolveLoadWaiters();
        return promise;
    }
    setProfileReadyState(state) {
        if (this.profileReadyState === state) {
            return;
        }
        const initialCall = this.profileReadyState === undefined;
        this.profileReadyState = state;
        if (initialCall) {
            // The initial state is handled in `beginLoad()`.
            this.profileReadyInitialState.resolve();
        }
        else {
            switch (this.profileReadyState) {
                case ProfileReadyState.kUnknownError:
                case ProfileReadyState.kIneligible:
                    this.setState(WebUiState.kUnavailable);
                    break;
                case ProfileReadyState.kIneligibleAccount:
                    this.setState(WebUiState.kIneligibleAccount);
                    break;
                case ProfileReadyState.kLocationMismatch:
                    this.setState(WebUiState.kLocationMismatch);
                    break;
                case ProfileReadyState.kDisabledByAdmin:
                    $.disabledByAdminPanel.classList.toggle('show-disabled-by-admin-link', false);
                    this.setState(WebUiState.kDisabledByAdmin);
                    break;
                case ProfileReadyState.kSignInRequired:
                    this.setState(WebUiState.kSignIn);
                    break;
                case ProfileReadyState.kReady:
                    if (this.stateDescriptor()?.reloadOnOpen) {
                        this.setState(WebUiState.kBeginLoad);
                    }
                    break;
                default:
                    assertNotReachedCase(this.profileReadyState);
            }
        }
    }
    openDisabledByAdminLink() {
        this.browserProxy.pageHandler.openDisabledByAdminLinkAndClosePanel();
    }
    isOnline() {
        return loadTimeData.getBoolean('ignoreOfflineState') ?
            true :
            navigator.onLine && !this.simulateNoConnection;
    }
    initializeIcons_() {
        const isRounded = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
        const updateIcon = (panel, roundedIcon, oldIcon) => {
            const el = panel.querySelector('cr-icon');
            if (el) {
                el.setAttribute('icon', isRounded ? roundedIcon : oldIcon);
            }
        };
        updateIcon($.offlinePanel, 'glic:wifi-off', 'glic:offline-old');
        updateIcon($.errorPanel, 'glic:error', 'glic:error-old');
        updateIcon($.unavailablePanel, 'glic:person-alert', 'glic:person-alert-old');
        updateIcon($.ineligibleAccountPanel, 'glic:do-not-touch', 'glic:ineligible-account-old');
        updateIcon($.signInPanel, 'glic:person-alert', 'glic:person-alert-old');
        updateIcon($.locationMismatchPanel, 'glic:location-on', 'glic:location-mismatch-old');
    }
}
