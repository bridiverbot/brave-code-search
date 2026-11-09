// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './ai_site_add_dialog.css.js';
import { getHtml } from './ai_site_add_dialog.html.js';
export class AiSiteAddDialogElement extends CrLitElement {
    static get is() {
        return 'ai-site-add-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            site: { type: String },
            errorMessage_: { type: String },
            submitDisabled_: { type: Boolean },
        };
    }
    #site_accessor_storage = '';
    get site() { return this.#site_accessor_storage; }
    set site(value) { this.#site_accessor_storage = value; }
    #errorMessage__accessor_storage = '';
    get errorMessage_() { return this.#errorMessage__accessor_storage; }
    set errorMessage_(value) { this.#errorMessage__accessor_storage = value; }
    #submitDisabled__accessor_storage = true;
    get submitDisabled_() { return this.#submitDisabled__accessor_storage; }
    set submitDisabled_(value) { this.#submitDisabled__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('site')) {
            this.validate_();
        }
    }
    onSiteValueChanged_(e) {
        this.site = e.detail.value;
    }
    validate_() {
        const site = this.site.trim();
        if (!site) {
            this.submitDisabled_ = true;
            this.errorMessage_ = '';
            return;
        }
        // Basic domain validation.
        // Must contain at least one dot. No consecutive dots.
        // Parts can contain hyphens but must start/end with alphanumeric
        // characters.
        const domainRegex = /^([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
        const isValid = domainRegex.test(site);
        this.submitDisabled_ = !isValid;
        this.errorMessage_ = isValid ? '' : 'Invalid site domain.';
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        if (this.submitDisabled_) {
            return;
        }
        this.fire('add-site', this.site.trim().toLowerCase());
        this.$.dialog.close();
    }
}
customElements.define(AiSiteAddDialogElement.is, AiSiteAddDialogElement);
