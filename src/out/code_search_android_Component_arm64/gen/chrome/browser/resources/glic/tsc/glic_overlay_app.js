// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_iconset.js';
import './icons.html.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_progress/cr_progress.js';
// 
import { loadTimeData } from '//resources/js/load_time_data.js';
import { getRequiredElement } from 'chrome://resources/js/util.js';
import { //
ErrorPanelType, //
GlicOverlayPageCallbackRouter, //
GlicOverlayPageHandlerFactory, //
GlicOverlayPageHandlerRemote, //
LoadingStyle, //
 } from './glic_overlay.mojom-webui.js';
const $ = new Proxy({}, {
    get(_target, prop) {
        return getRequiredElement(prop);
    },
});
export class GlicOverlayBrowserProxyImpl {
    handler = new GlicOverlayPageHandlerRemote();
    router = new GlicOverlayPageCallbackRouter();
    constructor() {
        const factory = GlicOverlayPageHandlerFactory.getRemote();
        factory.createPageHandler(this.router.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance || (instance = new GlicOverlayBrowserProxyImpl());
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
}
let instance = null;
export class GlicOverlayElement extends HTMLElement {
    static get is() {
        return 'glic-overlay';
    }
    browserProxy;
    listenerId = null;
    listenersSetUp = false;
    constructor() {
        super();
        this.browserProxy = GlicOverlayBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        if (this.listenerId === null) {
            this.listenerId = this.browserProxy.router.setOverlayState.addListener(this.setOverlayState.bind(this));
        }
        if (!this.listenersSetUp) {
            this.setupListeners();
            this.listenersSetUp = true;
        }
    }
    disconnectedCallback() {
        if (this.listenerId !== null) {
            this.browserProxy.router.removeListener(this.listenerId);
            this.listenerId = null;
        }
    }
    setOverlayState(state) {
        // Hide all dialog panels.
        const panels = this.querySelectorAll('#localPanels .dialog.panel');
        for (const panel of panels) {
            panel.hidden = true;
        }
        if (state.loading !== undefined) {
            this.showLoading(state.loading);
        }
        else if (state.error !== undefined) {
            this.showError(state.error);
        }
    }
    showError(errorType) {
        switch (errorType) {
            case ErrorPanelType.kOffline:
                $.offlinePanel.hidden = false;
                break;
            case ErrorPanelType.kError:
                $.errorPanel.hidden = false;
                break;
            case ErrorPanelType.kUnavailable:
                $.unavailablePanel.hidden = false;
                break;
            case ErrorPanelType.kIneligibleAccount:
                $.ineligibleAccountPanel.hidden = false;
                break;
            case ErrorPanelType.kDisabledByAdmin:
                $.disabledByAdminPanel.classList.toggle('show-disabled-by-admin-link', false);
                $.disabledByAdminPanel.hidden = false;
                break;
            case ErrorPanelType.kDisabledByAdminWithLink:
                $.disabledByAdminPanel.classList.toggle('show-disabled-by-admin-link', true);
                $.disabledByAdminPanel.hidden = false;
                break;
            case ErrorPanelType.kSignIn:
                $.signInPanel.hidden = false;
                break;
            case ErrorPanelType.kLocationMismatch:
                $.locationMismatchPanel.hidden = false;
                break;
            default: {
                const _exhaustiveCheck = errorType;
                console.error(`Unhandled error panel type: ${_exhaustiveCheck}`);
                $.errorPanel.hidden = false;
                break;
            }
        }
    }
    showLoading(loadingStyle) {
        $.loadingPanel.hidden = false;
        const isSidePanel = loadingStyle === LoadingStyle.kSidePanel;
        document.body.classList.toggle('sidePanel', isSidePanel);
        document.body.classList.toggle('floating', !isSidePanel);
    }
    setupListeners() {
        const closeButtons = this.querySelectorAll('.close-button');
        for (const button of closeButtons) {
            button.addEventListener('click', () => {
                this.browserProxy.handler.onClosePanelClicked();
            });
        }
        $.retry.addEventListener('click', () => {
            this.browserProxy.handler.onRetryClicked();
        });
        $.reload.addEventListener('click', () => {
            this.browserProxy.handler.onRetryClicked();
        });
        if (loadTimeData.getBoolean('showErrorAllowed')) {
            $.showError.hidden = false;
            $.showError.addEventListener('click', () => {
                this.browserProxy.handler.onShowErrorClicked();
            });
        }
        $.signInButton.addEventListener('click', () => {
            this.browserProxy.handler.onSignInClicked();
        });
        $.profilePickerButton.addEventListener('click', () => {
            this.browserProxy.handler.onProfilePickerClicked();
        });
        $.ineligibleAccountHelpButton.addEventListener('click', () => {
            this.browserProxy.handler.onIneligibleAccountHelpClicked();
        });
        $.locationMismatchHelpButton.addEventListener('click', () => {
            this.browserProxy.handler.onLocationMismatchHelpClicked();
        });
        $.disabledByAdminCloseButton.addEventListener('click', () => {
            this.browserProxy.handler.onDisabledByAdminCloseClicked();
        });
        $.disabledByAdminPanel.querySelector('a')?.addEventListener('click', () => {
            this.browserProxy.handler.onDisabledByAdminLinkClicked();
        });
    }
}
customElements.define(GlicOverlayElement.is, GlicOverlayElement);
if (loadTimeData.valueExists('isAndroidMobile') &&
    loadTimeData.getBoolean('isAndroidMobile')) {
    document.body.classList.add('androidMobile');
}
// 
