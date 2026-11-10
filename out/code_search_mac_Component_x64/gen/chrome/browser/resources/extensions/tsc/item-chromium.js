// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/js/action_link.js';
import './icons.html.js';
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import { TooltipPosition } from 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { isRTL } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './item.css.js';
import { getHtml } from './item.html.js';
import { ItemMixin } from './item_mixin.js';
import { computeInspectableViewLabel, createDummyExtensionInfo, EnableControl, getEnableControl, getEnableToggleAriaLabel, getItemSource, getItemSourceString, isEnabled, sortViews, SourceType, userCanChangeEnablement } from './item_util.js';
import { UPLOAD_EXTENSION_TO_ACCOUNT_ITEMS_LIST_PAGE_HISTOGRAM_NAME } from './metrics_util.js';
import { navigation, Page } from './navigation_helper.js';
export class FakeChromeEvent {
    addListener(_listener) { }
    removeListener(_listener) { }
    callListeners(..._args) { }
}
export class DummyItemDelegate {
    deleteItem(_id) { }
    deleteItems(_ids) {
        return Promise.resolve();
    }
    uninstallItem(_id) {
        return Promise.resolve();
    }
    openReviewPage(_id) {
        return Promise.resolve();
    }
    setItemEnabled(_id, _isEnabled) {
        return Promise.resolve();
    }
    setItemAllowedIncognito(_id, _isAllowedIncognito) { }
    setItemAllowedUserScripts(_id, _isAllowedUserScripts) { }
    setItemAllowedOnFileUrls(_id, _isAllowedOnFileUrls) { }
    setItemHostAccess(_id, _hostAccess) { }
    setItemCollectsErrors(_id, _collectsErrors) { }
    inspectItemView(_id, _view) { }
    openUrl(_url) { }
    reloadItem(_id) {
        return Promise.resolve();
    }
    repairItem(_id) { }
    showItemOptionsPage(_extension) { }
    showInFolder(_id) { }
    getExtensionSize(_id) {
        return Promise.resolve('');
    }
    addRuntimeHostPermission(_id, _host) {
        return Promise.resolve();
    }
    removeRuntimeHostPermission(_id, _host) {
        return Promise.resolve();
    }
    setItemSafetyCheckWarningAcknowledged(_id, _reason) { }
    setShowAccessRequestsInToolbar(_id, _showRequests) { }
    setItemPinnedToToolbar(_id, _pinnedToToolbar) { }
    uploadItemToAccount(_id) {
        return Promise.resolve(false);
    }
    setProfileExtensionsPinnedByDefault(_extensionsPinnedByDefault) { }
    recordUserAction(_metricName) { }
    getItemStateChangedTarget() {
        return new FakeChromeEvent();
    }
    showSiteSettings(_id) { }
}
const ExtensionsItemElementBase = I18nMixinLit(ItemMixin(CrLitElement));
export class ExtensionsItemElement extends ExtensionsItemElementBase {
    static get is() {
        return 'extensions-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // The item's delegate, or null.
            delegate: { type: Object },
            // Whether or not dev mode is enabled.
            inDevMode: { type: Boolean },
            safetyCheckShowing: { type: Boolean },
            // The underlying ExtensionInfo itself. Public for use in declarative
            // bindings.
            data: { type: Object },
            // First inspectable view after sorting.
            firstInspectView_: { type: Object },
            enableToggleTooltipPosition_: { type: String },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #delegate_accessor_storage = null;
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #inDevMode_accessor_storage = false;
    get inDevMode() { return this.#inDevMode_accessor_storage; }
    set inDevMode(value) { this.#inDevMode_accessor_storage = value; }
    #safetyCheckShowing_accessor_storage = false;
    get safetyCheckShowing() { return this.#safetyCheckShowing_accessor_storage; }
    set safetyCheckShowing(value) { this.#safetyCheckShowing_accessor_storage = value; }
    #data_accessor_storage = createDummyExtensionInfo();
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    #firstInspectView__accessor_storage;
    get firstInspectView_() { return this.#firstInspectView__accessor_storage; }
    set firstInspectView_(value) { this.#firstInspectView__accessor_storage = value; }
    #enableToggleTooltipPosition__accessor_storage = TooltipPosition.LEFT;
    get enableToggleTooltipPosition_() { return this.#enableToggleTooltipPosition__accessor_storage; }
    set enableToggleTooltipPosition_(value) { this.#enableToggleTooltipPosition__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('data')) {
            this.firstInspectView_ = this.computeFirstInspectView_();
        }
    }
    firstUpdated() {
        this.enableToggleTooltipPosition_ =
            isRTL() ? TooltipPosition.RIGHT : TooltipPosition.LEFT;
    }
    /** @return The "Details" button. */
    getDetailsButton() {
        return this.$.detailsButton;
    }
    /** @return The "Remove" button, if it exists. */
    getRemoveButton() {
        return this.data.mustRemainInstalled ? null : this.$.removeButton;
    }
    /** @return The "Errors" button, if it exists. */
    getErrorsButton() {
        return this.shadowRoot.querySelector('#errors-button');
    }
    getEnableToggleAriaLabel_() {
        return getEnableToggleAriaLabel(this.isEnabled_(), this.data.type, this.i18n('appEnabled'), this.i18n('extensionEnabled'), this.i18n('itemOff'));
    }
    getIdElementText_() {
        return this.i18n('itemId', this.data.id);
    }
    shouldShowErrorsButton_() {
        // When the error console is disabled (happens when
        // --disable-error-console command line flag is used or when in the
        // Stable/Beta channel), |installWarnings| is populated.
        if (this.data.installWarnings && this.data.installWarnings.length > 0) {
            return true;
        }
        // When error console is enabled |installedWarnings| is not populated.
        // Instead |manifestErrors| and |runtimeErrors| are used.
        return this.data.manifestErrors.length > 0 ||
            this.data.runtimeErrors.length > 0;
    }
    onRemoveClick_() {
        if (this.safetyCheckShowing) {
            const actionToRecord = this.data.safetyCheckText ?
                'SafetyCheck.ReviewPanelRemoveClicked' :
                'SafetyCheck.NonTriggeringExtensionRemoved';
            chrome.metricsPrivate.recordUserAction(actionToRecord);
        }
        assert(this.delegate);
        this.delegate.deleteItem(this.data.id);
    }
    onOpenReviewPageClick_() {
        assert(this.delegate);
        this.delegate.openReviewPage(this.data.id);
    }
    onEnableToggleChange_() {
        assert(this.delegate);
        this.delegate.setItemEnabled(this.data.id, this.$.enableToggle.checked);
        this.$.enableToggle.checked = this.isEnabled_();
    }
    onErrorsClick_() {
        if (this.data.installWarnings && this.data.installWarnings.length > 0) {
            this.fire('show-install-warnings', this.data.installWarnings);
            return;
        }
        navigation.navigateTo({ page: Page.ERRORS, extensionId: this.data.id });
    }
    onDetailsClick_() {
        navigation.navigateTo({ page: Page.DETAILS, extensionId: this.data.id });
    }
    computeFirstInspectView_() {
        return this.data.views.length === 0 ? undefined :
            sortViews(this.data.views)[0];
    }
    onInspectClick_() {
        assert(this.delegate && this.firstInspectView_);
        this.delegate.inspectItemView(this.data.id, this.firstInspectView_);
    }
    onExtraInspectClick_() {
        navigation.navigateTo({ page: Page.DETAILS, extensionId: this.data.id });
    }
    onReloadClick_() {
        this.reloadItem().catch((loadError) => this.fire('load-error', loadError));
    }
    async onUploadClick_() {
        assert(this.delegate);
        const uploaded = await this.delegate.uploadItemToAccount(this.data.id);
        chrome.metricsPrivate.recordBoolean(UPLOAD_EXTENSION_TO_ACCOUNT_ITEMS_LIST_PAGE_HISTOGRAM_NAME, uploaded);
    }
    onRepairClick_() {
        assert(this.delegate);
        this.delegate.repairItem(this.data.id);
    }
    isEnabled_() {
        return isEnabled(this.data.state);
    }
    isEnableToggleEnabled_() {
        return userCanChangeEnablement(this.data);
    }
    /** @return Whether the reload button should be shown. */
    showReloadButton_() {
        return getEnableControl(this.data) === EnableControl.RELOAD;
    }
    /** @return Whether the repair button should be shown. */
    showRepairButton_() {
        return getEnableControl(this.data) === EnableControl.REPAIR;
    }
    /** @return Whether the enable toggle should be shown. */
    showEnableToggle_() {
        return getEnableControl(this.data) === EnableControl.ENABLE_TOGGLE;
    }
    computeClasses_() {
        let classes = this.isEnabled_() ? 'enabled' : 'disabled';
        if (this.inDevMode) {
            classes += ' dev-mode';
        }
        if (loadTimeData.getBoolean('cwsReviewPromptingEnabled')) {
            classes += ' review-prompting-enabled';
        }
        return classes;
    }
    computeSourceIndicatorIcon_() {
        switch (getItemSource(this.data)) {
            case SourceType.POLICY:
                return (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'extensions-icons:domain' :
                    'extensions-icons:business-old');
            case SourceType.SIDELOADED:
                return (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'extensions-icons:input' :
                    'extensions-icons:input-old');
            case SourceType.UNKNOWN:
                // TODO(dpapad): Ask UX for a better icon for this case.
                return (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'extensions-icons:input' :
                    'extensions-icons:input-old');
            case SourceType.UNPACKED:
                return 'extensions-icons:unpacked-custom';
            case SourceType.WEBSTORE:
            case SourceType.INSTALLED_BY_DEFAULT:
                return '';
            default:
                assertNotReached();
        }
    }
    computeSourceIndicatorText_() {
        if (this.data.locationText) {
            return this.data.locationText;
        }
        const sourceType = getItemSource(this.data);
        return sourceType === SourceType.WEBSTORE ? '' :
            getItemSourceString(sourceType);
    }
    computeInspectViewsHidden_() {
        return !this.data.views || this.data.views.length === 0;
    }
    computeFirstInspectTitle_() {
        // Note: theoretically, this wouldn't be called without any inspectable
        // views (because it's in a dom-if="!computeInspectViewsHidden_()").
        // However, due to the recycling behavior of iron list, it seems that
        // sometimes it can. Even when it is, the UI behaves properly, but we
        // need to handle the case gracefully.
        return this.data.views.length > 0 ?
            computeInspectableViewLabel(this.firstInspectView_) :
            '';
    }
    computeFirstInspectLabel_() {
        const label = this.computeFirstInspectTitle_();
        return label && this.data.views.length > 1 ? label + ',' : label;
    }
    computeExtraViewsHidden_() {
        return this.data.views.length <= 1;
    }
    showAccountUploadButton_() {
        return this.data.canUploadAsAccountExtension;
    }
    showDevReloadButton_() {
        return this.canReloadItem();
    }
    computeExtraInspectLabel_() {
        return this.i18n('itemInspectViewsExtra', (this.data.views.length - 1).toString());
    }
    /**
     * @return Whether the extension has severe warnings. Doesn't determine the
     *     warning's visibility.
     */
    hasSevereWarnings_() {
        return this.data.disableReasons.corruptInstall ||
            this.data.disableReasons.suspiciousInstall ||
            this.data.disableReasons.unsupportedDeveloperExtension ||
            this.isDisabledByAnotherExtension_() ||
            this.data.runtimeWarnings.length > 0 || !!this.data.blocklistText;
    }
    /**
     * @return Whether the extension has an MV2 warning. Doesn't determine the
     *     warning's visibility.
     */
    hasMv2DeprecationWarning_() {
        return this.data.disableReasons.unsupportedManifestVersion;
    }
    /**
     * @return Whether the extension has an allowlist warning. Doesn't determine
     *     the warning's visibility.
     */
    hasAllowlistWarning_() {
        return this.data.showSafeBrowsingAllowlistWarning;
    }
    showDescription_() {
        // Description is only visible iff no warnings are visible.
        return !this.hasSevereWarnings_() && !this.hasMv2DeprecationWarning_() &&
            !this.hasAllowlistWarning_();
    }
    showSevereWarnings() {
        // Severe warning are always visible, if they exist.
        return this.hasSevereWarnings_();
    }
    showMv2DeprecationWarning_() {
        // MV2 deprecation warning is visible, if existent, if there are no severe
        // warnings visible.
        // Note: The item card has a fixed height and the content might get cropped
        // if too many warnings are displayed.
        return this.hasMv2DeprecationWarning_() && !this.hasSevereWarnings_();
    }
    showAllowlistWarning_() {
        // Allowlist warning is visible, if existent, if there are no severe
        // warnings or mv2 deprecation warnings visible.
        // Note: The item card has a fixed height and the content might get cropped
        // if too many warnings are displayed. This should be a rare edge case and
        // the allowlist warning will still be shown in the item detail view.
        return this.hasAllowlistWarning_() && !this.hasSevereWarnings_() &&
            !this.hasMv2DeprecationWarning_();
    }
    showOpenReviewPageLink_() {
        // `canShowReviewPrompt` covers eligibility. `showDescription_()` adds the
        // warning conditions C++ doesn't track (MV2 deprecation, runtime warnings,
        // allowlist); don't invite a review while any of them is showing.
        return this.data.canShowReviewPrompt && this.showDescription_();
    }
    getDisabledByExtensionWarningText_() {
        if (!this.data.disableReasons.disabledByExtensionName) {
            return this.i18n('itemDisabledByExtensionGeneric');
        }
        return this.i18n('itemDisabledByExtension', this.data.disableReasons.disabledByExtensionName);
    }
    isDisabledByAnotherExtension_() {
        return this.data.disableReasons.disabledByAnotherExtension;
    }
    showErrorsAsWarningsButtonLabel_() {
        // If there are runtime errors or install warnings, show as errors.
        if (this.data.runtimeErrors?.length || this.data.installWarnings?.length) {
            return false;
        }
        // All manifest errors are considered warnings, so if there are no
        // runtime/install issues, label is 'Warnings'.
        return true;
    }
}
customElements.define(ExtensionsItemElement.is, ExtensionsItemElement);
