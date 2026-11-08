// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getCss } from './issue_details.css.js';
import { getHtml } from './issue_details.html.js';
import { SupportToolPageMixinLit } from './support_tool_page_mixin_lit.js';
const IssueDetailsElementBase = SupportToolPageMixinLit(CrLitElement);
export class IssueDetailsElement extends IssueDetailsElementBase {
    static get is() {
        return 'issue-details';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            caseId_: { type: String },
            emails_: { type: Array },
            issueDescription_: { type: String },
            selectedEmail_: { type: String },
        };
    }
    #caseId__accessor_storage = loadTimeData.getString('caseId');
    get caseId_() { return this.#caseId__accessor_storage; }
    set caseId_(value) { this.#caseId__accessor_storage = value; }
    #emails__accessor_storage = [loadTimeData.getString('dontIncludeEmailAddress')];
    get emails_() { return this.#emails__accessor_storage; }
    set emails_(value) { this.#emails__accessor_storage = value; }
    #issueDescription__accessor_storage = '';
    get issueDescription_() { return this.#issueDescription__accessor_storage; }
    set issueDescription_(value) { this.#issueDescription__accessor_storage = value; }
    #selectedEmail__accessor_storage = '';
    get selectedEmail_() { return this.#selectedEmail__accessor_storage; }
    set selectedEmail_(value) { this.#selectedEmail__accessor_storage = value; }
    browserProxy_ = BrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy_.getEmailAddresses().then((emails) => {
            this.emails_ = emails;
            // Add default email at the end of emails list for user to be able to
            // choose to not include email address.
            this.emails_.push(this.i18n('dontIncludeEmailAddress'));
        });
    }
    getIssueDetails() {
        return {
            caseId: this.caseId_,
            // Set emailAddress field to empty string if user selected to not include
            // email address.
            emailAddress: (this.selectedEmail_ === this.i18n('dontIncludeEmailAddress')) ?
                '' :
                this.selectedEmail_,
            issueDescription: this.issueDescription_,
        };
    }
    onSelectedEmailChange_(e) {
        this.selectedEmail_ = e.target.value;
    }
    onIssueDescriptionInput_(e) {
        this.issueDescription_ = e.target.value;
    }
}
customElements.define(IssueDetailsElement.is, IssueDetailsElement);
