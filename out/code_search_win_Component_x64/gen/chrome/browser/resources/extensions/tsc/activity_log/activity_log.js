// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import './activity_log_stream.js';
import './activity_log_history.js';
import '/strings.m.js';
import { NONE_SELECTED } from 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { navigation, Page } from '../navigation_helper.js';
import { getCss } from './activity_log.css.js';
import { getHtml } from './activity_log.html.js';
import { DummyActivityLogDelegate } from './activity_log_history.js';
const ExtensionsActivityLogElementBase = I18nMixinLit(CrLitElement);
export class ExtensionsActivityLogElement extends ExtensionsActivityLogElementBase {
    static get is() {
        return 'extensions-activity-log';
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
             * The underlying ExtensionInfo for the details being displayed.
             */
            extensionInfo: { type: Object },
            delegate: { type: Object },
            selectedSubpage_: { type: Number },
            tabNames_: { type: Array },
        };
    }
    #extensionInfo_accessor_storage = {
        isPlaceholder: true,
        id: '',
    };
    get extensionInfo() { return this.#extensionInfo_accessor_storage; }
    set extensionInfo(value) { this.#extensionInfo_accessor_storage = value; }
    #delegate_accessor_storage = new DummyActivityLogDelegate();
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #selectedSubpage__accessor_storage = NONE_SELECTED;
    get selectedSubpage_() { return this.#selectedSubpage__accessor_storage; }
    set selectedSubpage_(value) { this.#selectedSubpage__accessor_storage = value; }
    #tabNames__accessor_storage = [
        loadTimeData.getString('activityLogHistoryTabHeading'),
        loadTimeData.getString('activityLogStreamTabHeading'),
    ];
    get tabNames_() { return this.#tabNames__accessor_storage; }
    set tabNames_(value) { this.#tabNames__accessor_storage = value; }
    firstUpdated() {
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
        this.addEventListener('view-exit-finish', this.onViewExitFinish_);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('selectedSubpage_')) {
            let oldValue = changedPrivateProperties.get('selectedSubpage_');
            if (oldValue === undefined) {
                oldValue = NONE_SELECTED;
            }
            this.onSelectedSubpageChanged_(this.selectedSubpage_, oldValue);
        }
    }
    isPlaceholder_() {
        return this.extensionInfo
            .isPlaceholder;
    }
    getExtensionIconUrl_() {
        if (this.isPlaceholder_()) {
            return '';
        }
        return this.extensionInfo
            .iconUrl;
    }
    /**
     * Focuses the back button when page is loaded and set the activie view to
     * be HISTORY when we navigate to the page.
     */
    async onViewEnterStart_() {
        this.selectedSubpage_ = 0 /* ActivityLogSubpage.HISTORY */;
        await this.updateComplete;
        focusWithoutInk(this.$.closeButton);
    }
    /**
     * Set |selectedSubpage_| to NONE_SELECTED to remove the active view from the
     * DOM.
     */
    onViewExitFinish_() {
        this.selectedSubpage_ = NONE_SELECTED;
        // clear the stream if the user is exiting the activity log page.
        const activityLogStream = this.shadowRoot.querySelector('activity-log-stream');
        if (activityLogStream) {
            activityLogStream.clearStream();
        }
    }
    getActivityLogHeading_() {
        const headingName = this.extensionInfo.isPlaceholder ?
            this.i18n('missingOrUninstalledExtension') :
            this.extensionInfo.name;
        return this.i18n('activityLogPageHeading', headingName);
    }
    isHistoryTabSelected_() {
        return this.selectedSubpage_ === 0 /* ActivityLogSubpage.HISTORY */;
    }
    isStreamTabSelected_() {
        return this.selectedSubpage_ === 1 /* ActivityLogSubpage.STREAM */;
    }
    onTabsSelectedChanged_(e) {
        this.selectedSubpage_ = e.detail.value;
    }
    onSelectedSubpageChanged_(newTab, oldTab) {
        const activityLogStream = this.shadowRoot.querySelector('activity-log-stream');
        if (activityLogStream) {
            if (newTab === 1 /* ActivityLogSubpage.STREAM */) {
                // Start the stream if the user is switching to the real-time tab.
                // This will not handle the first tab switch to the real-time tab as
                // the stream has not been attached to the DOM yet, and is handled
                // instead by the stream's |connectedCallback| method.
                activityLogStream.startStream();
            }
            else if (oldTab === 1 /* ActivityLogSubpage.STREAM */) {
                // Pause the stream if the user is navigating away from the real-time
                // tab.
                activityLogStream.pauseStream();
            }
        }
    }
    onCloseButtonClick_() {
        if (this.extensionInfo.isPlaceholder) {
            navigation.navigateTo({ page: Page.LIST });
        }
        else {
            navigation.navigateTo({ page: Page.DETAILS, extensionId: this.extensionInfo.id });
        }
    }
}
customElements.define(ExtensionsActivityLogElement.is, ExtensionsActivityLogElement);
