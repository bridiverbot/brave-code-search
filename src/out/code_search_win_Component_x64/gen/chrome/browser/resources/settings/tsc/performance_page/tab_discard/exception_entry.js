// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './exception_entry.css.js';
import { getHtml } from './exception_entry.html.js';
import { TAB_DISCARD_EXCEPTIONS_MANAGED_PREF } from './exception_validation_mixin.js';
const ExceptionEntryElementBase = PrefServiceObserverMixinLit(CrLitElement);
export class ExceptionEntryElement extends ExceptionEntryElementBase {
    static get is() {
        return 'tab-discard-exception-entry';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            entry: { type: Object },
            exceptionsManagedPref_: { type: Object },
        };
    }
    #entry_accessor_storage;
    get entry() { return this.#entry_accessor_storage; }
    set entry(value) { this.#entry_accessor_storage = value; }
    #exceptionsManagedPref__accessor_storage;
    get exceptionsManagedPref_() { return this.#exceptionsManagedPref__accessor_storage; }
    set exceptionsManagedPref_(value) { this.#exceptionsManagedPref__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref(TAB_DISCARD_EXCEPTIONS_MANAGED_PREF, 'exceptionsManagedPref_');
    }
    onMenuClick_(e) {
        this.fire('menu-click', { target: e.target, site: this.entry.site });
    }
    onShowTooltipMouseenter_() {
        this.showTooltip_();
    }
    onShowTooltipFocus_() {
        this.showTooltip_();
    }
    showTooltip_() {
        const indicator = this.shadowRoot.querySelector('cr-policy-pref-indicator');
        assert(indicator);
        this.fire('show-tooltip', { target: indicator, text: indicator.indicatorTooltip });
    }
}
customElements.define(ExceptionEntryElement.is, ExceptionEntryElement);
