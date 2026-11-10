// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../icons.html.js';
// 
import '../settings_page/settings_section.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AiPageActions } from '../ai_page/constants.js';
import { MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getCss } from './glic_page.css.js';
import { getHtml } from './glic_page.html.js';
const SettingsGlicPageElementBase = SettingsViewMixinLit(I18nMixinLit(CrLitElement));
export class SettingsGlicPageElement extends SettingsGlicPageElementBase {
    static get is() {
        return 'settings-glic-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            startIcon_: { type: String },
        };
    }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    #startIcon__accessor_storage = 'settings20:lightbulb-2';
    // 
    get startIcon_() { return this.#startIcon__accessor_storage; }
    set startIcon_(value) { this.#startIcon__accessor_storage = value; }
    // 
    // 
    onGlicPageClick_() {
        Router.getInstance().navigateTo(routes.GEMINI);
    }
    onSettingsPageLearnMoreClick_(event) {
        this.metricsBrowserProxy_.recordAction(AiPageActions.GLIC_COLLAPSED_LEARN_MORE_CLICKED);
        // Prevent navigation to the Glic page if only the learn more link was
        // clicked.
        event.stopPropagation();
    }
    // SettingsViewMixin implementation.
    getFocusConfig() {
        return new Map([
            [routes.GEMINI.path, '#glicLinkRow'],
        ]);
    }
    // SettingsViewMixin implementation.
    getAssociatedControlFor(childViewId) {
        assert(childViewId === 'gemini');
        return this.$.glicLinkRow;
    }
}
customElements.define(SettingsGlicPageElement.is, SettingsGlicPageElement);
