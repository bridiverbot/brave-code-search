// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '/strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { MetricsContext, PrintSettingsUiBucket } from '../metrics.js';
import { getCss } from './more_settings.css.js';
import { getHtml } from './more_settings.html.js';
class PrintPreviewMoreSettingsElement extends CrLitElement {
    static get is() {
        return 'print-preview-more-settings';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            settingsExpandedByUser: {
                type: Boolean,
                notify: true,
            },
            disabled: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #settingsExpandedByUser_accessor_storage = false;
    get settingsExpandedByUser() { return this.#settingsExpandedByUser_accessor_storage; }
    set settingsExpandedByUser(value) { this.#settingsExpandedByUser_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    metrics_ = MetricsContext.printSettingsUi();
    /**
     * Toggles the expand button within the element being listened to.
     */
    onExpandButtonClick_(e) {
        // The expand button handles toggling itself.
        const expandButtonTag = 'CR-EXPAND-BUTTON';
        if (e.target.tagName === expandButtonTag) {
            return;
        }
        if (!e.currentTarget.hasAttribute('actionable')) {
            return;
        }
        const expandButton = e.currentTarget.querySelector(expandButtonTag);
        assert(expandButton);
        expandButton.expanded = !expandButton.expanded;
        this.metrics_.record(this.settingsExpandedByUser ?
            PrintSettingsUiBucket.MORE_SETTINGS_CLICKED :
            PrintSettingsUiBucket.LESS_SETTINGS_CLICKED);
    }
    onExpandedChanged_(e) {
        this.settingsExpandedByUser = e.detail.value;
    }
}
customElements.define(PrintPreviewMoreSettingsElement.is, PrintPreviewMoreSettingsElement);
