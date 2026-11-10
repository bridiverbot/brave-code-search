// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { browserProxyFactory as welcomeMojoProxyFactory } from '../welcome.mojom-webui.js';
const WelcomeAppElementBase = I18nMixinLit(CrLitElement);
export class WelcomeAppElement extends WelcomeAppElementBase {
    static get is() {
        return 'welcome-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            anyButtonClicked_: { type: Boolean },
            isMetricsEnabled_: { type: Boolean },
            setDefaultBrowser_: { type: Boolean },
        };
    }
    #setDefaultBrowser__accessor_storage = loadTimeData.getBoolean('showDefaultBrowserToggle') ? true : null;
    get setDefaultBrowser_() { return this.#setDefaultBrowser__accessor_storage; }
    set setDefaultBrowser_(value) { this.#setDefaultBrowser__accessor_storage = value; }
    #anyButtonClicked__accessor_storage = false;
    get anyButtonClicked_() { return this.#anyButtonClicked__accessor_storage; }
    set anyButtonClicked_(value) { this.#anyButtonClicked__accessor_storage = value; }
    #isMetricsEnabled__accessor_storage = loadTimeData.getBoolean('showMetricsOptIn') ? true : null;
    get isMetricsEnabled_() { return this.#isMetricsEnabled__accessor_storage; }
    set isMetricsEnabled_(value) { this.#isMetricsEnabled__accessor_storage = value; }
    showDefaultBrowserToggle_ = loadTimeData.getBoolean('showDefaultBrowserToggle');
    showMetricsOptIn_ = loadTimeData.getBoolean('showMetricsOptIn');
    browserProxy_ = welcomeMojoProxyFactory.getInstance();
    constructor() {
        super();
        ColorChangeUpdater.forDocument().start();
    }
    getDialog_() {
        return this.shadowRoot.querySelector('#dialog');
    }
    getDialogActionButtonLabel_() {
        return this.isMetricsEnabled_ ?
            this.i18n('welcomeMetricsPopupTurnOffButtonLabel') :
            this.i18n('welcomeMetricsPopupTurnOnButtonLabel');
    }
    getMetricsLabel_() {
        return this.isMetricsEnabled_ ?
            this.i18nAdvanced('welcomeMetricsLabel') :
            this.i18nAdvanced('welcomeMetricsOffLabel');
    }
    shouldDisableButtons_() {
        return this.anyButtonClicked_;
    }
    onDefaultBrowserCheckedChanged_(e) {
        this.setDefaultBrowser_ = e.detail.value;
    }
    onAcceptButtonClick_() {
        this.anyButtonClicked_ = true;
        this.browserProxy_.handler.continue(this.isMetricsEnabled_, this.setDefaultBrowser_);
    }
    onManageLinkClicked_(e) {
        e.detail.event.preventDefault();
        const dialog = this.getDialog_();
        assert(dialog);
        dialog.showModal();
    }
    onDialogCloseButtonClick_() {
        const dialog = this.getDialog_();
        assert(dialog);
        dialog.close();
    }
    onDialogActionButtonClick_() {
        this.isMetricsEnabled_ = !this.isMetricsEnabled_;
        const dialog = this.getDialog_();
        assert(dialog);
        dialog.close();
    }
}
customElements.define(WelcomeAppElement.is, WelcomeAppElement);
