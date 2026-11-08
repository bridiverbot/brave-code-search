// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../i18n_setup.js';
import './safety_hub_module.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { getCss } from './extensions_module.css.js';
import { getHtml } from './extensions_module.html.js';
import { SafetyHubBrowserProxyImpl, SafetyHubEvent } from './safety_hub_browser_proxy.js';
const SettingsSafetyHubExtensionsModuleElementBase = WebUiListenerMixinLit(CrLitElement);
export class SettingsSafetyHubExtensionsModuleElement extends SettingsSafetyHubExtensionsModuleElementBase {
    static get is() {
        return 'settings-safety-hub-extensions-module';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            headerString_: { type: String },
        };
    }
    #headerString__accessor_storage = '';
    get headerString_() { return this.#headerString__accessor_storage; }
    set headerString_(value) { this.#headerString__accessor_storage = value; }
    async connectedCallback() {
        super.connectedCallback();
        // Register for safety hub status updates.
        this.addWebUiListener(SafetyHubEvent.EXTENSIONS_CHANGED, (num) => this.onSafetyCheckExtensionsChanged_(num));
        const numExtensions = await SafetyHubBrowserProxyImpl.getInstance()
            .getNumberOfExtensionsThatNeedReview();
        this.onSafetyCheckExtensionsChanged_(numExtensions);
    }
    async onSafetyCheckExtensionsChanged_(numExtensions) {
        this.headerString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyHubExtensionsReviewLabel', numExtensions);
    }
    onReviewButtonClick_() {
        MetricsBrowserProxyImpl.getInstance().recordAction('Settings.SafetyCheck.ReviewExtensionsThroughSafetyCheck');
        OpenWindowProxyImpl.getInstance().openUrl('chrome://extensions');
    }
}
customElements.define(SettingsSafetyHubExtensionsModuleElement.is, SettingsSafetyHubExtensionsModuleElement);
