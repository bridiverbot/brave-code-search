// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { BrowserProxy } from './browser_proxy.js';
export class DefaultBrowserModalAppElement extends CrLitElement {
    static get is() {
        return 'default-browser-modal-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            useSettingsIllustration: {
                type: Boolean,
                reflect: true,
            },
            hasAccepted_: { type: Boolean },
        };
    }
    boundOnFocus_ = () => this.onWindowFocus_();
    hasAcceptedListenerId_ = null;
    connectedCallback() {
        super.connectedCallback();
        if (!this.isStickyModal_) {
            return;
        }
        window.addEventListener('focus', this.boundOnFocus_);
        this.hasAcceptedListenerId_ =
            BrowserProxy.getInstance()
                .callbackRouter.onHasAcceptedChanged.addListener((hasAccepted) => {
                this.hasAccepted_ = hasAccepted;
            });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (!this.isStickyModal_) {
            return;
        }
        window.removeEventListener('focus', this.boundOnFocus_);
        if (this.hasAcceptedListenerId_ !== null) {
            BrowserProxy.getInstance().callbackRouter.removeListener(this.hasAcceptedListenerId_);
            this.hasAcceptedListenerId_ = null;
        }
    }
    firstUpdated() {
        ColorChangeUpdater.forDocument().start();
        if (!this.isModal_) {
            return;
        }
        BrowserProxy.getInstance().handler.showUI();
    }
    #useSettingsIllustration_accessor_storage = loadTimeData.getBoolean('useSettingsIllustration');
    get useSettingsIllustration() { return this.#useSettingsIllustration_accessor_storage; }
    set useSettingsIllustration(value) { this.#useSettingsIllustration_accessor_storage = value; }
    #hasAccepted__accessor_storage = false;
    get hasAccepted_() { return this.#hasAccepted__accessor_storage; }
    set hasAccepted_(value) { this.#hasAccepted__accessor_storage = value; }
    isStickyModal_ = loadTimeData.getBoolean('isStickyModal');
    isModal_ = loadTimeData.getBoolean('isModal');
    showRetryAndClose_() {
        return this.isStickyModal_ && this.hasAccepted_;
    }
    onCancelClick_() {
        BrowserProxy.getInstance().handler.cancel();
    }
    onConfirmClick_() {
        BrowserProxy.getInstance().handler.confirm();
    }
    onTryAgainClick_() {
        BrowserProxy.getInstance().handler.tryAgain();
    }
    onCloseClick_() {
        BrowserProxy.getInstance().handler.cancel();
    }
    async onWindowFocus_() {
        if (document.visibilityState === 'hidden') {
            return;
        }
        if (!this.hasAccepted_) {
            return;
        }
        await BrowserProxy.getInstance().handler.checkDefaultStatusAndMaybeClose();
    }
}
customElements.define(DefaultBrowserModalAppElement.is, DefaultBrowserModalAppElement);
