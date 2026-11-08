// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import './icons.html.js';
import '/strings.m.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from '../report_unsafe_site.mojom-webui.js';
import { getCss } from './report_unsafe_site_app.css.js';
import { getHtml } from './report_unsafe_site_app.html.js';
export class ReportUnsafeSiteAppElement extends CrLitElement {
    static get is() {
        return 'report-unsafe-site-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            pageUrl_: { type: String },
            includeScreenshot_: { type: Boolean },
            screenshotDataUri_: { type: String },
            isSendingCsdPing_: { type: Boolean },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #pageUrl__accessor_storage = '';
    get pageUrl_() { return this.#pageUrl__accessor_storage; }
    set pageUrl_(value) { this.#pageUrl__accessor_storage = value; }
    #includeScreenshot__accessor_storage = false;
    get includeScreenshot_() { return this.#includeScreenshot__accessor_storage; }
    set includeScreenshot_(value) { this.#includeScreenshot__accessor_storage = value; }
    #screenshotDataUri__accessor_storage = '';
    get screenshotDataUri_() { return this.#screenshotDataUri__accessor_storage; }
    set screenshotDataUri_(value) { this.#screenshotDataUri__accessor_storage = value; }
    #isSendingCsdPing__accessor_storage = false;
    get isSendingCsdPing_() { return this.#isSendingCsdPing__accessor_storage; }
    set isSendingCsdPing_(value) { this.#isSendingCsdPing__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    async connectedCallback() {
        super.connectedCallback();
        const pageHandler = browserProxyFactory.getInstance().handler;
        const pageInfo = await pageHandler.getTriggeringPageInfo();
        this.pageUrl_ = pageInfo.pageUrl;
        this.screenshotDataUri_ = pageInfo.screenshotDataUri;
        this.includeScreenshot_ = (this.screenshotDataUri_.length > 0);
    }
    firstUpdated() {
        const pageHandler = browserProxyFactory.getInstance().handler;
        pageHandler.showUi();
        const title = this.shadowRoot.querySelector('.dialog-title');
        if (title) {
            title.focus();
        }
    }
    onIncludeScreenshotCheckedChanged_(e) {
        this.includeScreenshot_ = e.detail.value;
    }
    async onActionButtonClick_() {
        this.isSendingCsdPing_ = true;
        const pageHandler = browserProxyFactory.getInstance().handler;
        await pageHandler.sendReport(this.includeScreenshot_);
        pageHandler.closeDialog();
        this.isSendingCsdPing_ = false;
    }
    onCancelButtonClick_() {
        browserProxyFactory.getInstance().handler.closeDialog();
    }
}
customElements.define(ReportUnsafeSiteAppElement.is, ReportUnsafeSiteAppElement);
