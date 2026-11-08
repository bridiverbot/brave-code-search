// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { convertSafetyCheckReason } from './item_util.js';
import { SAFETY_HUB_EXTENSION_KEPT_HISTOGRAM_NAME, SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME, SAFETY_HUB_EXTENSION_SHOWN_HISTOGRAM_NAME, SAFETY_HUB_WARNING_REASON_MAX_SIZE } from './metrics_util.js';
import { navigation, Page } from './navigation_helper.js';
import { getCss } from './review_panel.css.js';
import { getHtml } from './review_panel.html.js';
const ExtensionsReviewPanelElementBase = I18nMixinLit(CrLitElement);
const SAFETY_HUB_EXTENSION_THREE_DOT_DETAILS = 'SafeBrowsing.ExtensionSafetyHub.ThreeDotDetails';
export class ExtensionsReviewPanelElement extends ExtensionsReviewPanelElementBase {
    static get is() {
        return 'extensions-review-panel';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            delegate: { type: Object },
            /**
             * List of potentially unsafe extensions. If this list is empty, all the
             * unsafe extensions were reviewed and the completion info should be
             * visible.
             */
            extensions: { type: Array },
            /**
             * The string for the primary header label.
             */
            headerString_: { type: String },
            /**
             * The string for secondary text under the header string.
             */
            subtitleString_: { type: String },
            /**
             * The text of the safety check completion state.
             */
            completionMessage_: { type: String },
            /**
             * Indicates whether to show the potentially unsafe extensions or not.
             */
            shouldShowUnsafeExtensions_: { type: Boolean },
            /**
             * Indicates whether to show completion info after user has finished the
             * review process.
             */
            shouldShowCompletionInfo_: { type: Boolean },
            /**
             * Indicates if the list of unsafe extensions is expanded or collapsed.
             */
            unsafeExtensionsReviewListExpanded_: { type: Boolean },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #delegate_accessor_storage;
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #extensions_accessor_storage = [];
    get extensions() { return this.#extensions_accessor_storage; }
    set extensions(value) { this.#extensions_accessor_storage = value; }
    #headerString__accessor_storage = '';
    get headerString_() { return this.#headerString__accessor_storage; }
    set headerString_(value) { this.#headerString__accessor_storage = value; }
    #subtitleString__accessor_storage = '';
    get subtitleString_() { return this.#subtitleString__accessor_storage; }
    set subtitleString_(value) { this.#subtitleString__accessor_storage = value; }
    #unsafeExtensionsReviewListExpanded__accessor_storage = true;
    get unsafeExtensionsReviewListExpanded_() { return this.#unsafeExtensionsReviewListExpanded__accessor_storage; }
    set unsafeExtensionsReviewListExpanded_(value) { this.#unsafeExtensionsReviewListExpanded__accessor_storage = value; }
    #completionMessage__accessor_storage = '';
    get completionMessage_() { return this.#completionMessage__accessor_storage; }
    set completionMessage_(value) { this.#completionMessage__accessor_storage = value; }
    #shouldShowCompletionInfo__accessor_storage = false;
    get shouldShowCompletionInfo_() { return this.#shouldShowCompletionInfo__accessor_storage; }
    set shouldShowCompletionInfo_(value) { this.#shouldShowCompletionInfo__accessor_storage = value; }
    #shouldShowUnsafeExtensions__accessor_storage = false;
    get shouldShowUnsafeExtensions_() { return this.#shouldShowUnsafeExtensions__accessor_storage; }
    set shouldShowUnsafeExtensions_(value) { this.#shouldShowUnsafeExtensions__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    /**
     * Tracks if the last action that led to the number of extensions
     * under review going to 0 was taken in the review panel. If it was
     * the completion state is shown. If not the review panel is removed.
     * This prevents actions like toggling dev mode or removing a
     * extension using the item card's Remove button from triggering the
     * completion message.
     */
    numberOfExtensionsChangedByLastReviewPanelAction_ = 0;
    completionMetricLogged_ = false;
    lastClickedExtensionId_ = '';
    lastClickedExtensionTriggerReason_ = chrome.developerPrivate.SafetyCheckWarningReason.UNPUBLISHED;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('extensions')) {
            this.shouldShowCompletionInfo_ = this.computeShouldShowCompletionInfo_();
            this.shouldShowUnsafeExtensions_ =
                this.computeShouldShowUnsafeExtensions_();
            this.onExtensionsChanged_();
        }
    }
    async onExtensionsChanged_() {
        this.headerString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckTitle', this.extensions.length);
        this.subtitleString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckDescription', this.extensions.length);
        this.completionMessage_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckAllDoneForNow', this.numberOfExtensionsChangedByLastReviewPanelAction_);
    }
    /**
     * Determines whether or not to show the completion info when there are no
     * unsafe extensions left.
     */
    computeShouldShowCompletionInfo_() {
        if (this.extensions?.length === 0 &&
            this.numberOfExtensionsChangedByLastReviewPanelAction_ !== 0) {
            if (!this.completionMetricLogged_) {
                this.completionMetricLogged_ = true;
                chrome.metricsPrivate.recordUserAction('SafetyCheck.ReviewCompletion');
            }
            return true;
        }
        else {
            return false;
        }
    }
    computeShouldShowUnsafeExtensions_() {
        if (this.extensions?.length !== 0) {
            if (!this.shouldShowUnsafeExtensions_) {
                chrome.metricsPrivate.recordUserAction('SafetyCheck.ReviewPanelShown');
                for (const extension of this.extensions) {
                    chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_SHOWN_HISTOGRAM_NAME, convertSafetyCheckReason(extension.safetyCheckWarningReason), SAFETY_HUB_WARNING_REASON_MAX_SIZE);
                }
            }
            this.completionMetricLogged_ = false;
            // Reset the `numberOfExtensionsChangedByLastReviewPanelAction_` if
            // the last action completed the review, i.e., a completion message
            // will be shown. Resetting ensures that the completion message is
            // only shown once after a review panel action.
            if (this.shouldShowCompletionInfo_) {
                this.numberOfExtensionsChangedByLastReviewPanelAction_ = 0;
            }
            return true;
        }
        return false;
    }
    shouldShowExtensionsSafetyHub_() {
        return this.shouldShowUnsafeExtensions_ || this.shouldShowCompletionInfo_;
    }
    shouldShowSafetyHubRemoveAllButton_() {
        return this.extensions?.length !== 1;
    }
    shouldShowThreeDotDetails_() {
        return loadTimeData.getBoolean('safetyHubThreeDotDetails');
    }
    onDetailsClick_() {
        chrome.metricsPrivate.recordCount(SAFETY_HUB_EXTENSION_THREE_DOT_DETAILS, 1);
        navigation.navigateTo({ page: Page.DETAILS, extensionId: this.lastClickedExtensionId_ });
        this.$.makeExceptionMenu.close();
    }
    onUnsafeExtensionsReviewListExpandedChanged_(e) {
        this.unsafeExtensionsReviewListExpanded_ = e.detail.value;
    }
    /**
     * Opens the extension action menu.
     */
    onMakeExceptionMenuClick_(e) {
        const index = Number(e.target.dataset['index']);
        const item = this.extensions[index];
        this.lastClickedExtensionId_ = item.id;
        this.lastClickedExtensionTriggerReason_ = item.safetyCheckWarningReason;
        this.$.makeExceptionMenu.showAt(e.target);
    }
    /**
     * Acknowledges the extension safety check warning.
     */
    onKeepExtensionClick_() {
        chrome.metricsPrivate.recordUserAction('SafetyCheck.ReviewPanelKeepClicked');
        chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_KEPT_HISTOGRAM_NAME, convertSafetyCheckReason(this.lastClickedExtensionTriggerReason_), SAFETY_HUB_WARNING_REASON_MAX_SIZE);
        if (this.extensions?.length === 1) {
            this.numberOfExtensionsChangedByLastReviewPanelAction_ = 1;
        }
        this.$.makeExceptionMenu.close();
        if (this.lastClickedExtensionId_) {
            assert(this.delegate);
            this.delegate.setItemSafetyCheckWarningAcknowledged(this.lastClickedExtensionId_, this.lastClickedExtensionTriggerReason_);
        }
    }
    getRemoveButtonA11yLabel_(extensionName) {
        return loadTimeData.substituteString(this.i18n('safetyCheckRemoveButtonA11yLabel'), extensionName);
    }
    getOptionMenuA11yLabel_(extensionName) {
        return loadTimeData.substituteString(this.i18n('safetyCheckOptionMenuA11yLabel'), extensionName);
    }
    async onRemoveExtensionClick_(e) {
        const index = Number(e.target.dataset['index']);
        const item = this.extensions[index];
        chrome.metricsPrivate.recordUserAction('SafetyCheck.ReviewPanelRemoveClicked');
        chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME, convertSafetyCheckReason(item.safetyCheckWarningReason), SAFETY_HUB_WARNING_REASON_MAX_SIZE);
        if (this.extensions?.length === 1) {
            this.numberOfExtensionsChangedByLastReviewPanelAction_ = 1;
        }
        try {
            assert(this.delegate);
            await this.delegate.uninstallItem(item.id);
        }
        catch (_) {
            // The error was almost certainly the user canceling the dialog.
            // Update the number of changed extensions.
            this.numberOfExtensionsChangedByLastReviewPanelAction_ = 0;
        }
    }
    async onRemoveAllClick_(event) {
        chrome.metricsPrivate.recordUserAction('SafetyCheck.ReviewPanelRemoveAllClicked');
        event.stopPropagation();
        this.numberOfExtensionsChangedByLastReviewPanelAction_ =
            this.extensions.length;
        try {
            this.extensions.forEach(extension => {
                chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME, convertSafetyCheckReason(extension.safetyCheckWarningReason), SAFETY_HUB_WARNING_REASON_MAX_SIZE);
            });
            assert(this.delegate);
            await this.delegate.deleteItems(this.extensions.map(extension => extension.id));
        }
        catch (_) {
            // The error was almost certainly the user canceling the dialog.
            // Reset `numberOfExtensionsChangedByLastReviewPanelAction_`.
            this.numberOfExtensionsChangedByLastReviewPanelAction_ = 0;
        }
    }
}
customElements.define(ExtensionsReviewPanelElement.is, ExtensionsReviewPanelElement);
