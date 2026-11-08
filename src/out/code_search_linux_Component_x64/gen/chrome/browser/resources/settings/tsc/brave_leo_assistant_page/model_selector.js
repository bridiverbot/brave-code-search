/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import 'chrome://resources/brave/leo.bundle.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ModelAccess, } from './brave_leo_assistant_browser_proxy.js';
import { getCss } from './model_selector.css.js';
import { getHtml } from './model_selector.html.js';
export class LeoModelSelectorElement extends CrLitElement {
    static get is() {
        return 'leo-model-selector';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selectedKey: { type: String },
            models: { type: Array },
            isPremiumUser: { type: Boolean },
        };
    }
    #selectedKey_accessor_storage = '';
    get selectedKey() { return this.#selectedKey_accessor_storage; }
    set selectedKey(value) { this.#selectedKey_accessor_storage = value; }
    #models_accessor_storage = [];
    get models() { return this.#models_accessor_storage; }
    set models(value) { this.#models_accessor_storage = value; }
    #isPremiumUser_accessor_storage = false;
    get isPremiumUser() { return this.#isPremiumUser_accessor_storage; }
    set isPremiumUser(value) { this.#isPremiumUser_accessor_storage = value; }
    getSelectedEntry() {
        return this.models?.find((entry) => entry.model.key === this.selectedKey);
    }
    onSelectionChange_(e) {
        this.fire('model-changed', { value: e.value });
    }
    shouldShowPremiumLabel_(entry) {
        if (!entry.model.options.leoModelOptions) {
            return false;
        }
        return entry.model.options.leoModelOptions.access
            === ModelAccess.PREMIUM && !this.isPremiumUser;
    }
}
customElements.define(LeoModelSelectorElement.is, LeoModelSelectorElement);
