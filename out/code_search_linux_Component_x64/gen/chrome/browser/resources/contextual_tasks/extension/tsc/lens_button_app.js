// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { ExtensionBrowserProxyImpl } from 'chrome://contextual-tasks/contextual_tasks_browser_proxy.js';
import { ComposeboxProxyImpl } from 'chrome://resources/cr_components/composebox/composebox_proxy.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './lens_button_app.css.js';
import { getHtml } from './lens_button_app.html.js';
export class LensButtonAppElement extends CrLitElement {
    static get is() {
        return 'lens-button-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            active: {
                type: Boolean,
                reflect: true,
            },
            disabled: {
                type: Boolean,
                reflect: true,
            },
            darkMode: {
                type: Boolean,
                reflect: true,
            },
            label_: { type: String },
        };
    }
    #active_accessor_storage = false;
    get active() { return this.#active_accessor_storage; }
    set active(value) { this.#active_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #darkMode_accessor_storage = false;
    get darkMode() { return this.#darkMode_accessor_storage; }
    set darkMode(value) { this.#darkMode_accessor_storage = value; }
    #label__accessor_storage = loadTimeData.isInitialized() &&
        loadTimeData.valueExists('lensSearchButtonLabel') ?
        loadTimeData.getString('lensSearchButtonLabel') :
        '';
    get label_() { return this.#label__accessor_storage; }
    set label_(value) { this.#label__accessor_storage = value; }
    pageHandler_ = null;
    overlayStateListenerId_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.darkMode = this.isDarkModeEnabled_();
        const browserProxy = ExtensionBrowserProxyImpl.getInstance();
        if (this.overlayStateListenerId_ === null) {
            this.overlayStateListenerId_ =
                browserProxy.callbackRouter.onLensOverlayStateChanged.addListener((isShowing) => {
                    this.active = isShowing;
                });
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.overlayStateListenerId_ !== null) {
            const browserProxy = ExtensionBrowserProxyImpl.getInstance();
            browserProxy.callbackRouter.removeListener(this.overlayStateListenerId_);
            this.overlayStateListenerId_ = null;
        }
    }
    isDarkModeEnabled_() {
        const params = new URLSearchParams(window.location.search);
        return params.get('cs') === '1';
    }
    setPageHandlerForTesting(handler) {
        this.pageHandler_ = handler;
    }
    getPageHandler_() {
        return this.pageHandler_ || ComposeboxProxyImpl.getInstance().handler;
    }
    onClick_() {
        if (this.disabled) {
            return;
        }
        this.getPageHandler_().handleLensButtonClick();
    }
    onMousedown_(e) {
        e.preventDefault();
    }
}
customElements.define(LensButtonAppElement.is, LensButtonAppElement);
