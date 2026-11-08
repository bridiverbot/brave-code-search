// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { GuestPageType, WebClientState, ZoomAction } from './glic_webui.mojom-webui.js';
import { ObservableValue } from './observable.js';
import { GlicRequestHeaderInjector } from './shared/glic_request_headers.js';
// LINT.IfChange(GlicZoomFactors)
// Any changes to the range of supported zoom factors must be mirrored in
// GlicPageHandler.OnZoomLevelChange and guest_util.cc.
const ZOOM_FACTORS = [
    1.0,
    1.1,
    1.25,
    1.5,
    1.75,
    2.0,
];
// LINT.ThenChange(//chrome/browser/glic/host/glic_page_handler.cc:GlicZoomFactors,
// //chrome/browser/glic/host/guest_util.cc:GlicZoomFactors)
const ZOOM_DELTA_THRESHOLD = 0.01;
/**
 * Finds the next higher zoom factor from ZOOM_FACTORS relative to currentZoom.
 * Scans left-to-right to find the smallest factor strictly greater than
 * currentZoom. ZOOM_DELTA_THRESHOLD handles floating point representation
 * precision (e.g. 1.09 vs 1.1). Returns undefined if currentZoom is at or above
 * the maximum zoom factor.
 */
function findNextZoomInFactor(currentZoom) {
    return ZOOM_FACTORS.find(f => f - currentZoom >= ZOOM_DELTA_THRESHOLD);
}
/**
 * Finds the next lower zoom factor from ZOOM_FACTORS relative to currentZoom.
 * Scans right-to-left to find the largest factor strictly smaller than
 * currentZoom. ZOOM_DELTA_THRESHOLD handles floating point representation
 * precision (e.g. 1.09 vs 1.1). Returns undefined if currentZoom is at or below
 * the minimum zoom factor.
 */
function findNextZoomOutFactor(currentZoom) {
    return ZOOM_FACTORS.findLast(f => currentZoom - f >= ZOOM_DELTA_THRESHOLD);
}
function isZoomChangeEvent(e) {
    return 'newZoomFactor' in e && typeof e.newZoomFactor === 'number';
}
// State for the WebviewController which lives as long as the WebUI content.
// This is necessary because we may destroy and rebuild the WebviewController
// multiple times.
export class WebviewPersistentState {
    // Normally, we load only the glicGuestURL. However, if that guest decides to
    // navigate to a different URL after the client connects, we will remember
    // that URL for loading later. To avoid getting stuck on a bad URL, we will
    // allow using `loadUrl` only once unless a client successfully connects.
    // Note that this supports internal development.
    loadUrl;
    loadUrlUsed = false;
    useLoadUrl() {
        if (this.loadUrl && !this.loadUrlUsed) {
            this.loadUrlUsed = true;
            return this.loadUrl;
        }
        else {
            return loadTimeData.getString('glicGuestURL');
        }
    }
    onCommitAfterConnect(newUrl) {
        this.loadUrl = newUrl;
        this.loadUrlUsed = false;
    }
    onClientReady() {
        // Web client became ready, allow loadUrl to be used again.
        this.loadUrlUsed = false;
    }
}
// Creates and manages the <webview> element.
export class WebviewController {
    container;
    browserProxy;
    delegate;
    persistentState;
    webview;
    onDestroy = [];
    eventTracker = new EventTracker();
    webClientState = ObservableValue.withValue(WebClientState.kUninitialized);
    glicRequestHeaderInjector;
    displayScaleMultiplier = 1.0;
    webClientStateListenerId;
    bootstrapTimeoutId;
    stopBootstrapPing() {
        if (this.bootstrapTimeoutId !== undefined) {
            window.clearTimeout(this.bootstrapTimeoutId);
            this.bootstrapTimeoutId = undefined;
        }
    }
    constructor(container, browserProxy, delegate, persistentState) {
        this.container = container;
        this.browserProxy = browserProxy;
        this.delegate = delegate;
        this.persistentState = persistentState;
        this.webview = document.createElement('webview');
        this.webview.setAttribute('allowpopups', 'true');
        this.glicRequestHeaderInjector = new GlicRequestHeaderInjector(this.webview, loadTimeData.getString('chromeVersion'), loadTimeData.getString('chromeChannel'), loadTimeData.getBoolean('glicSsr'), loadTimeData.getBoolean('onboardingCompleted'), loadTimeData.getString('onboardingArm'), loadTimeData.getString('glicHeaderRequestTypes'));
        this.webClientStateListenerId =
            this.browserProxy.preloadPageCallbackRouter.webClientStateChanged
                .addListener((state) => {
                this.webClientState.assignAndSignal(state);
                switch (state) {
                    case WebClientState.kWarmed:
                        this.stopBootstrapPing();
                        break;
                    case WebClientState.kResponsive:
                        this.stopBootstrapPing();
                        this.persistentState.onClientReady();
                        break;
                    case WebClientState.kError:
                        this.destroyHost(WebClientState.kError);
                        break;
                    default:
                        break;
                }
            });
        this.webview.id = 'guestFrame';
        this.webview.setAttribute('partition', 'persist:glicpart');
        this.container.appendChild(this.webview);
        // Note that there is a migration underway to remove the use of webview.
        // Some elements of the webview frame are monitored from c++,
        // in chrome/browser/glic/host/glic_guest.cc. The elements tracked below
        // are more difficult to move right now, and will be moved to c++ when
        // migrating to a non-webview frame.
        // Keep here: sets focus which is a UI responsibility specific to the nested
        // frame.
        this.eventTracker.add(this.webview, 'loadstop', this.onLoadStop.bind(this));
        // Keep here: can be migrated using WebContentsDelegate only after migrating
        // away from webview.
        this.eventTracker.add(this.webview, 'newwindow', this.onNewWindow.bind(this));
        // Keep here: can be migrated using WebContentsDelegate only after migrating
        // away from webview.
        this.eventTracker.add(this.webview, 'permissionrequest', this.onPermissionRequest.bind(this));
        // Keep here: this is for logging only.
        this.eventTracker.add(this.webview, 'exit', this.onExit.bind(this));
        // Keep here: can be migrated using WebContentsDelegate only after migrating
        // away from webview.
        this.eventTracker.add(this.webview, 'zoomchange', (e) => {
            if (!isZoomChangeEvent(e)) {
                return;
            }
            const percentage = Math.round(e.newZoomFactor * 100);
            const message = loadTimeData.getStringF('zoomLabel', percentage + '%');
            getAnnouncerInstance().announce(message);
            if (e.newZoomFactor > 0) {
                this.webview.getZoom((reportedZoom) => {
                    this.displayScaleMultiplier = reportedZoom / e.newZoomFactor;
                });
            }
            this.browserProxy.pageHandler.onZoomLevelChange(e.newZoomFactor);
        });
        this.webview.src = this.persistentState.useLoadUrl();
    }
    getWebClientState() {
        return this.webClientState;
    }
    focus() {
        this.webview.focus();
    }
    destroy() {
        if (this.webClientStateListenerId !== undefined) {
            this.browserProxy.preloadPageCallbackRouter.removeListener(this.webClientStateListenerId);
            this.webClientStateListenerId = undefined;
        }
        if (this.glicRequestHeaderInjector !== undefined) {
            this.glicRequestHeaderInjector.destroy();
            this.glicRequestHeaderInjector = undefined;
        }
        this.destroyHost(this.webClientState.getCurrentValue() === WebClientState.kError ?
            WebClientState.kError :
            WebClientState.kUninitialized);
        this.eventTracker.removeAll();
        this.onDestroy.forEach(f => f());
        this.onDestroy = [];
        this.webview.remove();
    }
    destroyHost(webClientState) {
        this.stopBootstrapPing();
        if (webClientState !== undefined) {
            this.webClientState.assignAndSignal(webClientState);
        }
    }
    zoom(zoomAction) {
        const webview = this.webview;
        if (zoomAction === ZoomAction.kReset) {
            webview.setZoom(1.0);
            return;
        }
        webview.getZoom((reportedZoom) => {
            const activeZoom = reportedZoom / (this.displayScaleMultiplier || 1.0);
            const newFactor = zoomAction === ZoomAction.kZoomIn ?
                findNextZoomInFactor(activeZoom) :
                findNextZoomOutFactor(activeZoom);
            if (newFactor !== undefined) {
                webview.setZoom(newFactor);
            }
        });
    }
    onLoadStop() {
        if (this.webview.checkVisibility()) {
            this.webview.focus();
        }
    }
    onNewWindow(e) {
        this.onNewWindowEvent(e);
    }
    async onPermissionRequest(e) {
        e.preventDefault();
        switch (e.permission) {
            case 'media': {
                // TODO(b/416092165): Block mic requests if the mic permission was not
                // granted.
                e.request.allow();
                return;
            }
            case 'geolocation': {
                const { isAllowed } = await this.browserProxy.pageHandler
                    .shouldAllowGeolocationPermissionRequest();
                if (isAllowed) {
                    e.request.allow();
                }
                else {
                    e.request.deny();
                }
                return;
            }
            default:
                break;
        }
        console.warn(`Webview permission request was denied: ${e.permission}`);
        e.request.deny();
    }
    onExit(event) {
        if (event.reason !== 'normal') {
            this.destroyHost(WebClientState.kError);
            chrome.histograms.recordUserAction('GlicSessionWebClientCrash');
            console.warn(`webview exit. processId: ${event.processId}, reason: ${event.reason}`);
        }
    }
    onGuestNavigationStarted() { }
    onGuestNavigated(url, isApiAllowed, pageType, _isInitialCommit) {
        if (this.getWebClientState().getCurrentValue() === WebClientState.kError) {
            return;
        }
        const wasResponsive = this.getWebClientState().getCurrentValue() ===
            WebClientState.kResponsive;
        this.destroyHost();
        if (pageType !== GuestPageType.kRegular || !isApiAllowed) {
            this.delegate.webviewPageCommit(pageType === GuestPageType.kRegular ? GuestPageType.kLoadError :
                pageType, isApiAllowed);
            return;
        }
        const urlObj = URL.parse(url);
        if (urlObj && this.webview.contentWindow && isApiAllowed) {
            const contentWindow = this.webview.contentWindow;
            const origin = urlObj.origin;
            this.stopBootstrapPing();
            let delayMs = 50;
            const maxDelayMs = 1000;
            const sendBootstrap = () => {
                try {
                    contentWindow.postMessage({
                        type: 'glic-bootstrap',
                        glicApiSource: loadTimeData.getString('glicGuestAPISource'),
                    }, origin);
                }
                catch (e) {
                    console.warn('Failed to postMessage glic-bootstrap to guest:', e);
                }
                if (this.bootstrapTimeoutId !== undefined) {
                    this.bootstrapTimeoutId = window.setTimeout(sendBootstrap, delayMs);
                    delayMs = Math.min(delayMs * 2, maxDelayMs);
                }
            };
            this.bootstrapTimeoutId = -1;
            sendBootstrap();
        }
        this.browserProxy.pageHandler.webviewCommitted(url);
        if (wasResponsive) {
            this.persistentState.onCommitAfterConnect(url);
        }
        if (!_isInitialCommit) {
            this.delegate.webviewPageCommit(GuestPageType.kRegular, isApiAllowed);
        }
    }
    onNewWindowEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        if (loadTimeData.getBoolean('glicPopupWindowsEnabled') &&
            event.windowOpenDisposition === 'new_popup') {
            this.browserProxy.pageHandler.openLinkInPopup(event.targetUrl, event.initialWidth, event.initialHeight);
        }
        else {
            this.browserProxy.pageHandler.openLinkInNewTab(event.targetUrl);
        }
    }
}
