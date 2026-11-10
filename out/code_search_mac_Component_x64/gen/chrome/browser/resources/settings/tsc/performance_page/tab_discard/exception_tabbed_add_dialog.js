// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import './exception_add_input.js';
import './exception_current_sites_list.js';
import { NONE_SELECTED } from 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../../i18n_setup.js';
import { getCss } from './exception_tabbed_add_dialog.css.js';
import { getHtml } from './exception_tabbed_add_dialog.html.js';
export var ExceptionAddDialogTabs;
(function (ExceptionAddDialogTabs) {
    ExceptionAddDialogTabs[ExceptionAddDialogTabs["CURRENT_SITES"] = 0] = "CURRENT_SITES";
    ExceptionAddDialogTabs[ExceptionAddDialogTabs["MANUAL"] = 1] = "MANUAL";
})(ExceptionAddDialogTabs || (ExceptionAddDialogTabs = {}));
export class ExceptionTabbedAddDialogElement extends CrLitElement {
    static get is() {
        return 'tab-discard-exception-tabbed-add-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selectedTab_: { type: Number },
            tabNames_: { type: Array },
            submitDisabledList_: { type: Boolean },
            submitDisabledManual_: { type: Boolean },
        };
    }
    #selectedTab__accessor_storage = NONE_SELECTED;
    get selectedTab_() { return this.#selectedTab__accessor_storage; }
    set selectedTab_(value) { this.#selectedTab__accessor_storage = value; }
    #tabNames__accessor_storage = [
        loadTimeData.getString('tabDiscardingExceptionsAddDialogCurrentTabs'),
        loadTimeData.getString('tabDiscardingExceptionsAddDialogManual'),
    ];
    get tabNames_() { return this.#tabNames__accessor_storage; }
    set tabNames_(value) { this.#tabNames__accessor_storage = value; }
    #submitDisabledList__accessor_storage = true;
    get submitDisabledList_() { return this.#submitDisabledList__accessor_storage; }
    set submitDisabledList_(value) { this.#submitDisabledList__accessor_storage = value; }
    #submitDisabledManual__accessor_storage = true;
    get submitDisabledManual_() { return this.#submitDisabledManual__accessor_storage; }
    set submitDisabledManual_(value) { this.#submitDisabledManual__accessor_storage = value; }
    onTabsSelectedChanged_(e) {
        this.selectedTab_ = e.detail.value;
    }
    onListSubmitDisabledChanged_(e) {
        this.submitDisabledList_ = e.detail.value;
    }
    onInputSubmitDisabledChanged_(e) {
        this.submitDisabledManual_ = e.detail.value;
    }
    onSitesPopulated_(e) {
        if (e.detail.length > 0) {
            this.selectedTab_ = ExceptionAddDialogTabs.CURRENT_SITES;
        }
        else if (this.selectedTab_ === NONE_SELECTED) {
            this.selectedTab_ = ExceptionAddDialogTabs.MANUAL;
        }
        this.$.dialog.showModal();
    }
    isAddCurrentSitesTabSelected_() {
        return this.selectedTab_ === ExceptionAddDialogTabs.CURRENT_SITES;
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        this.$.dialog.close();
        if (this.isAddCurrentSitesTabSelected_()) {
            this.$.list.submit();
        }
        else {
            this.$.input.submit();
        }
    }
    isSubmitDisabled_() {
        if (this.isAddCurrentSitesTabSelected_()) {
            return this.submitDisabledList_;
        }
        return this.submitDisabledManual_;
    }
}
customElements.define(ExceptionTabbedAddDialogElement.is, ExceptionTabbedAddDialogElement);
