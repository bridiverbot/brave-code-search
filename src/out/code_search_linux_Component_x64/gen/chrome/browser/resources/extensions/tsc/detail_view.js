// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './host_permissions_toggle_list.js';
import './icons.html.js';
import './runtime_host_permissions.js';
import '/strings.m.js';
import './toggle_row.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './detail_view.css.js';
import { getHtml } from './detail_view.html.js';
import { DummyItemDelegate } from './item.js';
import { ItemMixin } from './item_mixin.js';
import { computeInspectableViewLabel, convertSafetyCheckReason, createDummyExtensionInfo, EnableControl, getEnableControl, getEnableToggleAriaLabel, getItemSource, getItemSourceString, isEnabled, sortViews, userCanChangeEnablement } from './item_util.js';
import { SAFETY_HUB_EXTENSION_KEPT_HISTOGRAM_NAME, SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME, SAFETY_HUB_WARNING_REASON_MAX_SIZE, UPLOAD_EXTENSION_TO_ACCOUNT_DETAILS_VIEW_PAGE_HISTOGRAM_NAME } from './metrics_util.js';
import { navigation, Page } from './navigation_helper.js';
class DummyDetailViewDelegate extends DummyItemDelegate {
    dismissMv2DeprecationNotice() { }
}
const ExtensionsDetailViewElementBase = I18nMixinLit(ItemMixin(CrLitElement));
export class ExtensionsDetailViewElement extends ExtensionsDetailViewElementBase {
    static get is() {
        return 'extensions-detail-view';
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
            data: { type: Object },
            size_: { type: String },
            delegate: { type: Object },
            /** Whether the user has enabled the UI's developer mode. */
            inDevMode: { type: Boolean },
            /**
             * Whether enhanced site controls have been enabled (through a feature
             * flag). For this page, there are some changes to the site permissions
             * section.
             */
            enableEnhancedSiteControls: { type: Boolean },
            /** Whether "allow in incognito" option should be shown. */
            incognitoAvailable: { type: Boolean },
            /** Whether "View Activity Log" link should be shown. */
            showActivityLog: { type: Boolean },
            /** Whether the user navigated to this page from the activity log page. */
            fromActivityLog: { type: Boolean },
            /** Inspectable views sorted to put background/service workers first */
            sortedViews_: { type: Array },
            /** Whether the extensions safety check warning is shown. */
            showSafetyCheck_: { type: Boolean },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #data_accessor_storage = createDummyExtensionInfo();
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    #delegate_accessor_storage = new DummyDetailViewDelegate();
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #inDevMode_accessor_storage = false;
    get inDevMode() { return this.#inDevMode_accessor_storage; }
    set inDevMode(value) { this.#inDevMode_accessor_storage = value; }
    #enableEnhancedSiteControls_accessor_storage = false;
    get enableEnhancedSiteControls() { return this.#enableEnhancedSiteControls_accessor_storage; }
    set enableEnhancedSiteControls(value) { this.#enableEnhancedSiteControls_accessor_storage = value; }
    #incognitoAvailable_accessor_storage = false;
    get incognitoAvailable() { return this.#incognitoAvailable_accessor_storage; }
    set incognitoAvailable(value) { this.#incognitoAvailable_accessor_storage = value; }
    #showActivityLog_accessor_storage = false;
    get showActivityLog() { return this.#showActivityLog_accessor_storage; }
    set showActivityLog(value) { this.#showActivityLog_accessor_storage = value; }
    #fromActivityLog_accessor_storage = false;
    get fromActivityLog() { return this.#fromActivityLog_accessor_storage; }
    set fromActivityLog(value) { this.#fromActivityLog_accessor_storage = value; }
    #showSafetyCheck__accessor_storage = false;
    get showSafetyCheck_() { return this.#showSafetyCheck__accessor_storage; }
    set showSafetyCheck_(value) { this.#showSafetyCheck__accessor_storage = value; }
    #size__accessor_storage = '';
    get size_() { return this.#size__accessor_storage; }
    set size_(value) { this.#size__accessor_storage = value; }
    #sortedViews__accessor_storage = [];
    get sortedViews_() { return this.#sortedViews__accessor_storage; }
    set sortedViews_(value) { this.#sortedViews__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('data')) {
            this.sortedViews_ = sortViews(this.data.views);
            this.showSafetyCheck_ = this.computeShowSafetyCheck_();
        }
        if (changedProperties.has('data') || changedProperties.has('delegate')) {
            this.onItemIdChanged_();
        }
    }
    firstUpdated() {
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('showSafetyCheck_') &&
            this.showSafetyCheck_) {
            chrome.metricsPrivate.recordUserAction('SafetyCheck.DetailWarningShown');
        }
    }
    /**
     * Focuses the extensions options button. This should be used after the
     * dialog closes.
     */
    focusOptionsButton() {
        this.$.extensionsOptions.focus();
    }
    /**
     * Focuses the back button when page is loaded.
     */
    async onViewEnterStart_() {
        const elementToFocus = this.fromActivityLog ?
            this.$.extensionsActivityLogLink :
            this.$.closeButton;
        await this.updateComplete;
        focusWithoutInk(elementToFocus);
    }
    onItemIdChanged_() {
        // Clear the size, since this view is reused, such that no obsolete size
        // is displayed.:
        this.size_ = '';
        this.delegate.getExtensionSize(this.data.id).then(size => {
            this.size_ = size;
        });
    }
    onActivityLogClick_() {
        navigation.navigateTo({ page: Page.ACTIVITY_LOG, extensionId: this.data.id });
    }
    getDescription_() {
        return this.data.description || loadTimeData.getString('noDescription');
    }
    getBackButtonAriaLabel_() {
        return loadTimeData.getStringF('itemDetailsBackButtonAriaLabel', this.data.name);
    }
    getBackButtonAriaRoleDescription_() {
        return loadTimeData.getStringF('itemDetailsBackButtonRoleDescription', this.data.name);
    }
    getEnableToggleAriaLabel_() {
        return getEnableToggleAriaLabel(this.isEnabled_(), this.data.type, this.i18n('appEnabled'), this.i18n('extensionEnabled'), this.i18n('itemOff'));
    }
    onCloseButtonClick_() {
        navigation.navigateTo({ page: Page.LIST });
    }
    isEnabled_() {
        return isEnabled(this.data.state);
    }
    isEnableToggleEnabled_() {
        return userCanChangeEnablement(this.data);
    }
    hasDependentExtensions_() {
        return this.data.dependentExtensions.length > 0;
    }
    hasSevereWarnings_() {
        return this.data.disableReasons.corruptInstall ||
            this.data.disableReasons.suspiciousInstall ||
            this.data.disableReasons.publishedInStoreRequired ||
            this.data.disableReasons.unsupportedDeveloperExtension ||
            this.data.disableReasons.updateRequired || !!this.data.blocklistText ||
            this.data.runtimeWarnings.length > 0;
    }
    showAccountUploadButton_() {
        return this.data.canUploadAsAccountExtension;
    }
    showDevReloadButton_() {
        return this.canReloadItem();
    }
    computeEnabledStyle_() {
        return this.isEnabled_() ? 'enabled-text' : '';
    }
    computeEnabledText_() {
        // TODO(devlin): Get the full spectrum of these strings from bettes.
        return loadTimeData.getString(isEnabled(this.data.state) ? 'itemOn' : 'itemOff');
    }
    computeInspectLabel_(view) {
        return computeInspectableViewLabel(view);
    }
    shouldShowOptionsLink_() {
        return !!this.data.optionsPage;
    }
    shouldShowOptionsSection_() {
        return this.canPinToToolbar_() || this.data.incognitoAccess.isEnabled ||
            this.data.fileAccess.isEnabled || this.data.errorCollection.isEnabled;
    }
    canPinToToolbar_() {
        return this.data.pinnedToToolbar !== undefined;
    }
    shouldShowIncognitoOption_() {
        return this.data.incognitoAccess.isEnabled && this.incognitoAvailable;
    }
    showUserScriptSectionToggle_() {
        return this.data.userScriptsAccess.isEnabled;
    }
    onEnableToggleChange_() {
        this.delegate.setItemEnabled(this.data.id, this.$.enableToggle.checked);
        this.$.enableToggle.checked = this.isEnabled_();
    }
    onInspectClick_(e) {
        const index = Number(e.target.dataset['index']);
        this.delegate.inspectItemView(this.data.id, this.sortedViews_[index]);
    }
    onExtensionOptionsClick_() {
        this.delegate.showItemOptionsPage(this.data);
    }
    onReloadClick_() {
        this.reloadItem().catch((loadError) => this.fire('load-error', loadError));
    }
    async onUploadClick_() {
        const uploaded = await this.delegate.uploadItemToAccount(this.data.id);
        chrome.metricsPrivate.recordBoolean(UPLOAD_EXTENSION_TO_ACCOUNT_DETAILS_VIEW_PAGE_HISTOGRAM_NAME, uploaded);
    }
    onRemoveClick_() {
        if (this.showSafetyCheck_) {
            chrome.metricsPrivate.recordUserAction('SafetyCheck.DetailRemoveClicked');
            chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME, convertSafetyCheckReason(this.data.safetyCheckWarningReason), SAFETY_HUB_WARNING_REASON_MAX_SIZE);
        }
        this.delegate.deleteItem(this.data.id);
    }
    onKeepClick_() {
        if (this.showSafetyCheck_) {
            chrome.metricsPrivate.recordUserAction('SafetyCheck.DetailKeepClicked');
            chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_KEPT_HISTOGRAM_NAME, convertSafetyCheckReason(this.data.safetyCheckWarningReason), SAFETY_HUB_WARNING_REASON_MAX_SIZE);
        }
        this.delegate.setItemSafetyCheckWarningAcknowledged(this.data.id, this.data.safetyCheckWarningReason);
    }
    /**
     * Triggers the extension's removal.
     */
    onRemoveButtonClick_() {
        chrome.metricsPrivate.recordUserAction('Extensions.Mv2Deprecation.Unsupported.RemoveExtension.DetailPage');
        this.delegate.deleteItem(this.data.id);
    }
    onRepairClick_() {
        this.delegate.repairItem(this.data.id);
    }
    onLoadPathClick_() {
        this.delegate.showInFolder(this.data.id);
    }
    onPinnedToToolbarChange_() {
        this.delegate.setItemPinnedToToolbar(this.data.id, this.shadowRoot
            .querySelector('#pin-to-toolbar').checked);
    }
    onAllowIncognitoChange_() {
        this.delegate.setItemAllowedIncognito(this.data.id, this.shadowRoot
            .querySelector('#allow-incognito').checked);
        if (this.data.controlledInfo) {
            // If admin-installed, the change might be postponed until Chromium
            // restarts.
            this.data = {
                ...this.data,
                incognitoAccessPendingChange: !this.data.incognitoAccessPendingChange,
            };
        }
    }
    onAllowUserScriptsChange_() {
        this.delegate.setItemAllowedUserScripts(this.data.id, this.shadowRoot
            .querySelector('#allow-user-scripts').checked);
    }
    onAllowOnFileUrlsChange_() {
        this.delegate.setItemAllowedOnFileUrls(this.data.id, this.shadowRoot
            .querySelector('#allow-on-file-urls').checked);
        if (this.data.controlledInfo) {
            // If admin-installed, the change might be postponed until Chromium
            // restarts.
            this.data = {
                ...this.data,
                fileAccessPendingChange: !this.data.fileAccessPendingChange,
            };
        }
    }
    onCollectErrorsChange_() {
        this.delegate.setItemCollectsErrors(this.data.id, this.shadowRoot
            .querySelector('#collect-errors').checked);
    }
    onExtensionWebSiteClick_() {
        this.delegate.openUrl(this.data.manifestHomePageUrl);
    }
    onSiteSettingsClick_() {
        // 
        // 
        this.delegate.openUrl(`chrome://settings/content/siteDetails?site=chrome-extension://${this.data.id}`);
        // 
    }
    onViewInStoreClick_() {
        this.delegate.openUrl(this.data.webStoreUrl);
    }
    showOpenReviewPageLink_() {
        return this.data.canShowReviewPrompt;
    }
    onOpenReviewPageClick_() {
        this.delegate.openReviewPage(this.data.id);
    }
    computeDependentEntry_(item) {
        return loadTimeData.getStringF('itemDependentEntry', item.name, item.id);
    }
    computeSourceString_() {
        return this.data.locationText ||
            getItemSourceString(getItemSource(this.data));
    }
    hasPermissions_() {
        return this.data.permissions.simplePermissions.length > 0 ||
            this.hasRuntimeHostPermissions_();
    }
    getNoPermissionsString_() {
        const showPermissionsAndSiteAccessStrings = this.enableEnhancedSiteControls && !this.showSiteAccessContent_();
        return loadTimeData.getString(showPermissionsAndSiteAccessStrings ?
            'itemPermissionsAndSiteAccessEmpty' :
            'itemPermissionsEmpty');
    }
    hasRuntimeHostPermissions_() {
        return !!this.data.permissions.runtimeHostPermissions;
    }
    // Returns whether the site access section should be shown. This includes the
    // "no site access" message shown in the section if
    // |enableEnhancedSiteControls| is not enabled.
    showSiteAccessSection_() {
        return !this.enableEnhancedSiteControls || this.showSiteAccessContent_();
    }
    showSiteAccessContent_() {
        return this.showFreeformRuntimeHostPermissions_() ||
            this.showHostPermissionsToggleList_();
    }
    showFreeformRuntimeHostPermissions_() {
        return this.hasRuntimeHostPermissions_() &&
            this.data.permissions.runtimeHostPermissions.hasAllHosts;
    }
    showHostPermissionsToggleList_() {
        return this.hasRuntimeHostPermissions_() &&
            !this.data.permissions.runtimeHostPermissions.hasAllHosts;
    }
    showEnableAccessRequestsToggle_() {
        return this.showSiteAccessContent_() && this.enableEnhancedSiteControls;
    }
    onShowAccessRequestsChange_() {
        const showAccessRequestsToggle = this.shadowRoot.querySelector('#show-access-requests-toggle');
        assert(showAccessRequestsToggle);
        this.delegate.setShowAccessRequestsInToolbar(this.data.id, showAccessRequestsToggle.checked);
    }
    showReloadButton_() {
        return getEnableControl(this.data) === EnableControl.RELOAD;
    }
    computeShowSafetyCheck_() {
        const ExtensionType = chrome.developerPrivate.ExtensionType;
        // Check to make sure this is an extension and not a Chrome app.
        if (!(this.data.type === ExtensionType.EXTENSION ||
            this.data.type === ExtensionType.SHARED_MODULE)) {
            return false;
        }
        return !!(this.data.safetyCheckText && this.data.safetyCheckText.detailString);
    }
    /**
     * Returns whether the mv2 deprecation message should be displayed.
     */
    shouldShowMv2DeprecationMessage_() {
        return this.data.isAffectedByMV2Deprecation &&
            this.data.disableReasons.unsupportedManifestVersion;
    }
    /**
     * Returns whether the remove button in the mv2 deprecation message should be
     * displayed.
     */
    shouldShowMv2DeprecationRemoveButton_() {
        return !this.data.mustRemainInstalled;
    }
    /**
     * Returns whether the action menu button in the mv2 deprecation message
     * should be displayed.
     */
    shouldShowMv2DeprecationActionMenu_() {
        return !!this.data.recommendationsUrl;
    }
    /**
     * Returns whether the find alternative button in mv2 deprecation message
     * action menu should be displayed.
     */
    shouldShowMv2DeprecationFindAlternativeAction_() {
        return !!this.data.recommendationsUrl;
    }
    shouldShowBlocklistText_() {
        return !this.showSafetyCheck_ && !!this.data.blocklistText;
    }
    /**
     * Shows only one text if both unsupported developer extension and safety
     * check texts are present. Safety check text takes precedence.
     */
    shouldShowUnsupportedDeveloperExtensionText_() {
        return !this.showSafetyCheck_ &&
            this.data.disableReasons.unsupportedDeveloperExtension;
    }
    showRepairButton_() {
        return getEnableControl(this.data) === EnableControl.REPAIR;
    }
    showEnableToggle_() {
        const enableControl = getEnableControl(this.data);
        // We still show the toggle even if we also show the repair button in the
        // detail view, because the repair button appears just beneath it.
        return enableControl === EnableControl.ENABLE_TOGGLE ||
            enableControl === EnableControl.REPAIR;
    }
    showAllowlistWarning_() {
        // Only show the allowlist warning if there is no blocklist warning. It
        // would be redundant since all blocklisted items are necessarily not
        // included in the Safe Browsing allowlist.
        return this.data.showSafeBrowsingAllowlistWarning &&
            !this.data.blocklistText;
    }
    /** Opens the action menu for the extension. */
    onActionMenuButtonClick_(event) {
        this.shadowRoot.querySelector('#actionMenu').showAt(event.target, { anchorAlignmentY: AnchorAlignment.AFTER_END });
    }
    /**
     * Opens a URL in the Web Store with extensions recommendations for the
     * extension.
     */
    onFindAlternativeActionClick_() {
        chrome.metricsPrivate.recordUserAction('Extensions.Mv2Deprecation.Unsupported.FindAlternativeForExtension.DetailPage');
        this.shadowRoot.querySelector('#actionMenu').close();
        const recommendationsUrl = this.data.recommendationsUrl;
        assert(!!recommendationsUrl);
        this.delegate.openUrl(recommendationsUrl);
    }
    /**
     * Returns the Manifest V2 deprecation message header.
     */
    getMv2DeprecationMessageHeader_() {
        return this.i18n('mv2DeprecationMessageDisabledHeader');
    }
    /**
     * Returns the HTML representation of the Manifest V2 deprecation message
     * subtitle string. We need the HTML representation instead of the string
     * since the string holds substitutions.
     */
    getMv2DeprecationMessageSubtitle_() {
        return this.i18nAdvanced('mv2DeprecationMessageDisabledSubtitle', {
            substitutions: [
                'https://support.google.com/chrome_webstore' +
                    '?p=unsupported_extensions',
                this.i18n('opensInNewTab'),
            ],
            attrs: ['aria-description'],
        });
    }
    /**
     * Returns the Manifest V2 deprecation message icon.
     */
    getMv2DeprecationMessageIcon_() {
        return (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'extensions-icons:chrome-extension-off' :
            'extensions-icons:extension_off-old');
    }
    /** Returns the accessible label for the action menu button */
    getActionMenuButtonLabel_() {
        return this.i18n('mv2DeprecationPanelExtensionActionMenuLabel', this.data.name);
    }
}
customElements.define(ExtensionsDetailViewElement.is, ExtensionsDetailViewElement);
