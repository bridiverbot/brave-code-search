// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../settings_page/settings_section.js';
import './safety_hub_module.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { MetricsBrowserProxyImpl, SafetyHubEntryPoint } from '../metrics_browser_proxy.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { SafetyHubBrowserProxyImpl } from './safety_hub_browser_proxy.js';
import { getCss } from './safety_hub_entry_point.css.js';
import { getHtml } from './safety_hub_entry_point.html.js';
const SettingsSafetyHubEntryPointElementBase = SettingsViewMixinLit(I18nMixinLit(CrLitElement));
export class SettingsSafetyHubEntryPointElement extends SettingsSafetyHubEntryPointElementBase {
    static get is() {
        return 'settings-safety-hub-entry-point';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            hasRecommendations_: { type: Boolean },
            headerString_: { type: String },
            subheaderString_: { type: String },
        };
    }
    #hasRecommendations__accessor_storage = false;
    get hasRecommendations_() { return this.#hasRecommendations__accessor_storage; }
    set hasRecommendations_(value) { this.#hasRecommendations__accessor_storage = value; }
    #headerString__accessor_storage = '';
    get headerString_() { return this.#headerString__accessor_storage; }
    set headerString_(value) { this.#headerString__accessor_storage = value; }
    #subheaderString__accessor_storage = '';
    get subheaderString_() { return this.#subheaderString__accessor_storage; }
    set subheaderString_(value) { this.#subheaderString__accessor_storage = value; }
    safetyHubBrowserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    entryPointDataFetched_ = Promise.resolve();
    connectedCallback() {
        this.entryPointDataFetched_ =
            this.safetyHubBrowserProxy_.getSafetyHubEntryPointData().then((entryPoint) => {
                this.hasRecommendations_ = entryPoint.hasRecommendations;
                this.headerString_ = entryPoint.header;
                this.subheaderString_ = entryPoint.subheader;
            });
        super.connectedCallback();
    }
    async currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        if (Router.getInstance().getCurrentRoute() !== routes.PRIVACY) {
            return;
        }
        // super.connectedCallback() calls this synchronously, so wait for the
        // entry point data to avoid recording a stale `hasRecommendations_`.
        await this.entryPointDataFetched_;
        // The user may have navigated away while waiting.
        if (Router.getInstance().getCurrentRoute() !== routes.PRIVACY) {
            return;
        }
        // Only record the metrics when the user navigates to the privacy page
        // that shows the entry point.
        if (this.hasRecommendations_) {
            this.metricsBrowserProxy_.recordSafetyHubEntryPointShown(SafetyHubEntryPoint.PRIVACY_WARNING);
        }
        else {
            this.metricsBrowserProxy_.recordSafetyHubEntryPointShown(SafetyHubEntryPoint.PRIVACY_SAFE);
        }
    }
    computeButtonClass_() {
        return this.hasRecommendations_ ? 'action-button' : '';
    }
    computeHeaderIconColor_() {
        return this.hasRecommendations_ ? 'blue' : '';
    }
    onClick_() {
        if (this.hasRecommendations_) {
            this.metricsBrowserProxy_.recordSafetyHubEntryPointClicked(SafetyHubEntryPoint.PRIVACY_WARNING);
        }
        else {
            this.metricsBrowserProxy_.recordSafetyHubEntryPointClicked(SafetyHubEntryPoint.PRIVACY_SAFE);
        }
        Router.getInstance().navigateTo(routes.SAFETY_HUB);
    }
    // SettingsViewMixinLit implementation.
    getFocusConfig() {
        return new Map([
            [routes.SAFETY_HUB.path, '#button'],
        ]);
    }
}
customElements.define(SettingsSafetyHubEntryPointElement.is, SettingsSafetyHubEntryPointElement);
