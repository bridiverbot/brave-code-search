// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_toolbar/cr_toolbar.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_toolbar_demo.css.js';
import { getHtml } from './cr_toolbar_demo.html.js';
export class CrToolbarDemoElement extends CrLitElement {
    static get is() {
        return 'cr-toolbar-demo';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            alwaysShowLogo_: { type: Boolean },
            clearLabel_: { type: String },
            log_: { type: Array },
            menuLabel_: { type: String },
            narrow_: { type: Boolean },
            narrowThreshold_: { type: Number },
            pageName_: { type: String },
            searchPrompt_: { type: String },
            showMenu_: { type: Boolean },
            showSearch_: { type: Boolean },
            showSlottedContent_: { type: Boolean },
        };
    }
    #alwaysShowLogo__accessor_storage = true;
    get alwaysShowLogo_() { return this.#alwaysShowLogo__accessor_storage; }
    set alwaysShowLogo_(value) { this.#alwaysShowLogo__accessor_storage = value; }
    #clearLabel__accessor_storage = 'Clear search';
    get clearLabel_() { return this.#clearLabel__accessor_storage; }
    set clearLabel_(value) { this.#clearLabel__accessor_storage = value; }
    #log__accessor_storage = [];
    get log_() { return this.#log__accessor_storage; }
    set log_(value) { this.#log__accessor_storage = value; }
    #menuLabel__accessor_storage = 'Menu';
    get menuLabel_() { return this.#menuLabel__accessor_storage; }
    set menuLabel_(value) { this.#menuLabel__accessor_storage = value; }
    #narrow__accessor_storage = false;
    get narrow_() { return this.#narrow__accessor_storage; }
    set narrow_(value) { this.#narrow__accessor_storage = value; }
    #narrowThreshold__accessor_storage = 1000;
    get narrowThreshold_() { return this.#narrowThreshold__accessor_storage; }
    set narrowThreshold_(value) { this.#narrowThreshold__accessor_storage = value; }
    #pageName__accessor_storage = 'Demo';
    get pageName_() { return this.#pageName__accessor_storage; }
    set pageName_(value) { this.#pageName__accessor_storage = value; }
    #searchPrompt__accessor_storage = 'Search through some content';
    get searchPrompt_() { return this.#searchPrompt__accessor_storage; }
    set searchPrompt_(value) { this.#searchPrompt__accessor_storage = value; }
    #showMenu__accessor_storage = true;
    get showMenu_() { return this.#showMenu__accessor_storage; }
    set showMenu_(value) { this.#showMenu__accessor_storage = value; }
    #showSearch__accessor_storage = true;
    get showSearch_() { return this.#showSearch__accessor_storage; }
    set showSearch_(value) { this.#showSearch__accessor_storage = value; }
    #showSlottedContent__accessor_storage = false;
    get showSlottedContent_() { return this.#showSlottedContent__accessor_storage; }
    set showSlottedContent_(value) { this.#showSlottedContent__accessor_storage = value; }
    onCrToolbarMenuClick_() {
        this.log_.push('Menu tapped.');
        this.requestUpdate();
    }
    onSearchChanged_(e) {
        this.log_.push(e.detail ? `Search term changed: ${e.detail}` : 'Search cleared.');
        this.requestUpdate();
    }
    onPageNameValueChanged_(e) {
        this.pageName_ = e.detail.value;
    }
    onSearchPromptValueChanged_(e) {
        this.searchPrompt_ = e.detail.value;
    }
    onClearLabelValueChanged_(e) {
        this.clearLabel_ = e.detail.value;
    }
    onNarrowThresholdValueChanged_(e) {
        this.narrowThreshold_ = Number(e.detail.value);
    }
    onMenuLabelValueChanged_(e) {
        this.menuLabel_ = e.detail.value;
    }
    onAlwaysShowLogoCheckedChanged_(e) {
        this.alwaysShowLogo_ = e.detail.value;
    }
    onShowMenuCheckedChanged_(e) {
        this.showMenu_ = e.detail.value;
    }
    onShowSearchCheckedChanged_(e) {
        this.showSearch_ = e.detail.value;
    }
    onShowSlottedContentCheckedChanged_(e) {
        this.showSlottedContent_ = e.detail.value;
    }
    onNarrowChanged_(e) {
        this.narrow_ = e.detail.value;
    }
}
export const tagName = CrToolbarDemoElement.is;
customElements.define(CrToolbarDemoElement.is, CrToolbarDemoElement);
