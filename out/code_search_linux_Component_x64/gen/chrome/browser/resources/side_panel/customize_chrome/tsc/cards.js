// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import '/strings.m.js';
import './button_label.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cards.css.js';
import { getHtml } from './cards.html.js';
import { CustomizeChromeAction, recordCustomizeChromeAction } from './common.js';
import { browserProxyFactory } from './customize_chrome.mojom-webui.js';
/*
 * Element that lets the user configure module status and settings. From a UI
 * standpoint, we refer to modules as cards.
 */
export class CardsElement extends CrLitElement {
    static get is() {
        return 'customize-chrome-cards';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /** The list of modules that can be enabled or disabled on the NTP. */
            modules_: { type: Array },
            /** Whether the modules are customizable or not. */
            show_: { type: Boolean },
            /** Whether the modules are managed by admin policies or not. */
            managedByPolicy_: { type: Boolean },
            initialized_: { type: Boolean },
        };
    }
    #modules__accessor_storage = [];
    get modules_() { return this.#modules__accessor_storage; }
    set modules_(value) { this.#modules__accessor_storage = value; }
    #show__accessor_storage = false;
    get show_() { return this.#show__accessor_storage; }
    set show_(value) { this.#show__accessor_storage = value; }
    #managedByPolicy__accessor_storage = false;
    get managedByPolicy_() { return this.#managedByPolicy__accessor_storage; }
    set managedByPolicy_(value) { this.#managedByPolicy__accessor_storage = value; }
    apiProxy_ = browserProxyFactory.getInstance();
    setModulesSettingsListenerId_ = null;
    #initialized__accessor_storage = false;
    get initialized_() { return this.#initialized__accessor_storage; }
    set initialized_(value) { this.#initialized__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.setModulesSettingsListenerId_ =
            this.apiProxy_.callbackRouter.setModulesSettings.addListener((modulesSettings, managed, visible) => {
                this.show_ = visible;
                this.managedByPolicy_ = managed;
                this.modules_ = modulesSettings;
                this.initialized_ = true;
            });
        this.apiProxy_.handler.updateModulesSettings();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.apiProxy_.callbackRouter.removeListener(this.setModulesSettingsListenerId_);
    }
    setShow_(show) {
        recordCustomizeChromeAction(CustomizeChromeAction.SHOW_CARDS_TOGGLE_CLICKED);
        this.show_ = show;
        this.apiProxy_.handler.setModulesVisible(this.show_);
    }
    onShowChange_(e) {
        this.setShow_(e.detail);
    }
    onShowToggleClick_() {
        if (this.managedByPolicy_) {
            return;
        }
        this.setShow_(!this.show_);
    }
    setModuleStatus(index, enabled) {
        const module = this.modules_[index];
        module.enabled = enabled;
        this.requestUpdate();
        const id = module.id;
        this.apiProxy_.handler.setModuleDisabled(id, !enabled);
        const metricBase = `NewTabPage.Modules.${enabled ? 'Enabled' : 'Disabled'}`;
        chrome.metricsPrivate.recordSparseValueWithPersistentHash(metricBase, id);
        chrome.metricsPrivate.recordSparseValueWithPersistentHash(`${metricBase}.Customize`, id);
    }
    onCardCheckboxChange_(e) {
        const index = Number(e.currentTarget.dataset['index']);
        this.setModuleStatus(index, /*checked= */ e.detail);
    }
    onCardClick_(e) {
        if (this.managedByPolicy_) {
            return;
        }
        const index = Number(e.currentTarget.dataset['index']);
        const module = this.modules_[index];
        this.setModuleStatus(index, !module.enabled);
    }
}
customElements.define(CardsElement.is, CardsElement);
