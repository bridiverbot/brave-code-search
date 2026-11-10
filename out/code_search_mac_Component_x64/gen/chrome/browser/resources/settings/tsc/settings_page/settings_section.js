// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-section' shows a paper material themed section with a header
 * which shows its page title.
 *
 * Example:
 *
 *    <settings-section page-title="[[pageTitle]]">
 *      <!-- Insert your section controls here -->
 *    </settings-section>
 */
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { CrLitElement, nothing } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './settings_section.css.js';
import { getHtml } from './settings_section.html.js';
export class SettingsSectionElement extends CrLitElement {
    static get is() {
        return 'settings-section';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * Title for the section header. Initialize so we can use the
             * getTitleHiddenStatus_ method for accessibility.
             */
            pageTitle: { type: String },
            /**
             * When this attribute is enabled, a send feedback button will be shown
             * that emits a 'send-feedback' event.
             */
            showSendFeedbackButton: { type: Boolean },
        };
    }
    #pageTitle_accessor_storage = '';
    get pageTitle() { return this.#pageTitle_accessor_storage; }
    set pageTitle(value) { this.#pageTitle_accessor_storage = value; }
    #showSendFeedbackButton_accessor_storage = false;
    get showSendFeedbackButton() { return this.#showSendFeedbackButton_accessor_storage; }
    set showSendFeedbackButton(value) { this.#showSendFeedbackButton_accessor_storage = value; }
    /**
     * Get the value to which to set the aria-hidden attribute of the section
     * heading.
     */
    getTitleHiddenStatus_() {
        return this.pageTitle ? nothing : 'true';
    }
    focus() {
        this.shadowRoot.querySelector('.title').focus();
    }
    onSendFeedbackClick_() {
        this.fire('send-feedback');
    }
}
customElements.define(SettingsSectionElement.is, SettingsSectionElement);
