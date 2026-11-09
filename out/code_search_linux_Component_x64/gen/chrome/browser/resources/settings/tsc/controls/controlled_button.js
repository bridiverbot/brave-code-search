// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { CrPolicyPrefMixinLit } from '/shared/settings/controls/cr_policy_pref_mixin_lit.js';
import { PrefKeyObserverMixinLit } from '/shared/settings/prefs2/pref_key_observer_mixin_lit.js';
import { getCss } from './controlled_button.css.js';
import { getHtml } from './controlled_button.html.js';
const ControlledButtonElementBase = CrPolicyPrefMixinLit(PrefKeyObserverMixinLit(CrLitElement));
export class ControlledButtonElement extends ControlledButtonElementBase {
    static get is() {
        return 'controlled-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            endJustified: {
                type: Boolean,
                reflect: true,
            },
            label: { type: String },
            disabled: {
                type: Boolean,
                reflect: true,
            },
            actionClass_: { type: String },
            enforced_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #endJustified_accessor_storage = false;
    get endJustified() { return this.#endJustified_accessor_storage; }
    set endJustified(value) { this.#endJustified_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #actionClass__accessor_storage = '';
    get actionClass_() { return this.#actionClass__accessor_storage; }
    set actionClass_(value) { this.#actionClass__accessor_storage = value; }
    #enforced__accessor_storage = false;
    get enforced_() { return this.#enforced__accessor_storage; }
    set enforced_(value) { this.#enforced__accessor_storage = value; }
    connectedCallback() {
        if (this.classList.contains('action-button')) {
            this.actionClass_ = 'action-button';
        }
        super.connectedCallback();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('pref')) {
            this.enforced_ = this.isPrefEnforced();
        }
    }
    /** Focus on the inner cr-button. */
    focus() {
        this.$.button.focus();
    }
    onIndicatorClick_(e) {
        // Disallow <controlled-button on-click="..."> when controlled.
        e.preventDefault();
        e.stopPropagation();
    }
    buttonEnabled_() {
        return !this.enforced_ && !this.disabled;
    }
}
customElements.define(ControlledButtonElement.is, ControlledButtonElement);
