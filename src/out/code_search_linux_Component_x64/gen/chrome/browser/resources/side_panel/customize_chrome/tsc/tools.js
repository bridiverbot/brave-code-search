// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CustomizeChromeAction, recordCustomizeChromeAction } from './common.js';
import { browserProxyFactory } from './customize_chrome.mojom-webui.js';
import { getCss } from './tools.css.js';
import { getHtml } from './tools.html.js';
export class CustomizeChromeToolsElement extends CrLitElement {
    static get is() {
        return 'customize-chrome-tools';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isChipsEnabled_: { type: Boolean },
        };
    }
    #isChipsEnabled__accessor_storage = false;
    get isChipsEnabled_() { return this.#isChipsEnabled__accessor_storage; }
    set isChipsEnabled_(value) { this.#isChipsEnabled__accessor_storage = value; }
    apiProxy_ = browserProxyFactory.getInstance();
    setToolsSettingsListenerId_ = null;
    // This function gets called when the element is attached to the DOM, which
    // allows the element to actively listen for changes to the tools visibility
    // from other sources such as from other tabs or devices.
    connectedCallback() {
        super.connectedCallback();
        this.setToolsSettingsListenerId_ =
            this.apiProxy_.callbackRouter.setToolsSettings.addListener((isEnabled) => this.isChipsEnabled_ = isEnabled);
        this.apiProxy_.handler.updateToolChipsSettings();
    }
    // This function gets called when the element is detached from the DOM, so we
    // need to remove any listeners here.
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setToolsSettingsListenerId_);
        this.apiProxy_.callbackRouter.removeListener(this.setToolsSettingsListenerId_);
    }
    // This function updates the state of the toggle on this instance and sends
    // a Mojo call to the CC page handler to update the pref and broadcast the
    // change to other instances of the CC page handler.
    setChipsEnabled_(isEnabled) {
        recordCustomizeChromeAction(CustomizeChromeAction.SHOW_ACTION_CHIPS_TOGGLE_CLICKED);
        chrome.metricsPrivate.recordBoolean('NewTabPage.ActionChips.ToggledVisibility', isEnabled);
        this.isChipsEnabled_ = isEnabled;
        this.apiProxy_.handler.setToolChipsVisible(this.isChipsEnabled_);
    }
    // This function gets called whenever the toggle is changed.
    onShowToggleChange_(e) {
        this.setChipsEnabled_(e.detail);
    }
    // This function is called when the container around the toggle is clicked,
    // which in turn changes the state of the toggle and calls the above function.
    onShowToggleClick_() {
        this.setChipsEnabled_(!this.isChipsEnabled_);
    }
}
customElements.define(CustomizeChromeToolsElement.is, CustomizeChromeToolsElement);
