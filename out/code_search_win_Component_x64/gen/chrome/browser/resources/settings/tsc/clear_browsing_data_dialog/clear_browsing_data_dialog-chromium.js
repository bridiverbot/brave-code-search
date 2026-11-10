// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-clear-browsing-data-dialog' allows the user to
 * delete browsing data that has been cached by Chromium.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/settings_checkbox.js';
// 
import './clear_browsing_data_account_indicator.js';
// 
import './clear_browsing_data_time_picker.js';
import './history_deletion_dialog.js';
import './other_google_data_dialog.js';
import { SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert, assertNotReached, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { RouteObserverMixinLit } from '../router.js';
import { BrowsingDataType, ClearBrowsingDataBrowserProxyImpl, TimePeriod } from './clear_browsing_data_browser_proxy.js';
import { getCss } from './clear_browsing_data_dialog.css.js';
import { getHtml } from './clear_browsing_data_dialog.html.js';
import { canDeleteAccountData, isSignedIn } from './clear_browsing_data_signin_util.js';
import { getTimePeriodString } from './clear_browsing_data_time_picker.js';
/**
 * @param dialog the dialog to close
 * @param isLast whether this is the last CBD-related dialog
 */
function closeDialog(dialog, isLast) {
    // If this is not the last dialog, then stop the 'close' event from
    // propagating so that other (following) dialogs don't get closed as well.
    if (!isLast) {
        dialog.addEventListener('close', e => {
            e.stopPropagation();
        }, { once: true });
    }
    dialog.close();
}
/**
 * The list of all available Browsing Data types in the default order they
 * should appear in the dialog.
 */
export const ALL_BROWSING_DATATYPES_LIST = [
    BrowsingDataType.HISTORY,
    BrowsingDataType.SITE_DATA,
    BrowsingDataType.CACHE,
    // 
    BrowsingDataType.BRAVE_AI_CHAT,
    // 
    BrowsingDataType.DOWNLOADS,
    BrowsingDataType.FORM_DATA,
    BrowsingDataType.SITE_SETTINGS,
    BrowsingDataType.HOSTED_APPS_DATA,
    BrowsingDataType.SKILLS,
];
/** The list of Browsing Data types that should be expanded by default. */
const DEFAULT_BROWSING_DATATYPES_LIST = [
    BrowsingDataType.HISTORY,
    BrowsingDataType.SITE_DATA,
    BrowsingDataType.CACHE,
];
export function getDataTypeLabel(datatypes) {
    switch (datatypes) {
        case BrowsingDataType.HISTORY:
            return loadTimeData.getString('clearBrowsingHistory');
        case BrowsingDataType.CACHE:
            return loadTimeData.getString('clearCache');
        case BrowsingDataType.SITE_DATA:
            return loadTimeData.getString('clearCookies');
        case BrowsingDataType.FORM_DATA:
            return loadTimeData.getString('clearFormData');
        case BrowsingDataType.SITE_SETTINGS:
            return loadTimeData.getString('siteSettings');
        case BrowsingDataType.DOWNLOADS:
            return loadTimeData.getString('clearDownloadHistory');
        case BrowsingDataType.HOSTED_APPS_DATA:
            return loadTimeData.getString('clearHostedAppData');
        case BrowsingDataType.SKILLS:
            return loadTimeData.getString('clearSkills');
        // 
        case BrowsingDataType.BRAVE_AI_CHAT: return loadTimeData.getString('aiChatClearHistoryData');
        // 
        default:
            assertNotReachedCase(datatypes);
    }
}
export function getDataTypePrefName(datatypes) {
    switch (datatypes) {
        case BrowsingDataType.HISTORY:
            return 'browser.clear_data.browsing_history';
        case BrowsingDataType.CACHE:
            return 'browser.clear_data.cache';
        case BrowsingDataType.SITE_DATA:
            return 'browser.clear_data.cookies';
        case BrowsingDataType.FORM_DATA:
            return 'browser.clear_data.form_data';
        case BrowsingDataType.SITE_SETTINGS:
            return 'browser.clear_data.site_settings';
        case BrowsingDataType.DOWNLOADS:
            return 'browser.clear_data.download_history';
        case BrowsingDataType.HOSTED_APPS_DATA:
            return 'browser.clear_data.hosted_apps_data';
        case BrowsingDataType.SKILLS:
            return 'browser.clear_data.skills';
        // 
        case BrowsingDataType.BRAVE_AI_CHAT: return 'browser.clear_data.brave_leo';
        // 
        default:
            assertNotReachedCase(datatypes);
    }
}
const SettingsClearBrowsingDataDialogElementBase = RouteObserverMixinLit(WebUiListenerMixinLit(CrLitElement));
export class SettingsClearBrowsingDataDialogElement extends SettingsClearBrowsingDataDialogElementBase {
    static get is() {
        return 'settings-clear-browsing-data-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dataTypesExpanded_: { type: Boolean },
            deletingDataAlertString_: { type: String },
            isDeletionInProgress_: { type: Boolean },
            isNoDatatypeSelected_: { type: Boolean },
            isGoogleDse_: { type: Boolean },
            showHistoryDeletionDialog_: { type: Boolean },
            showOtherGoogleDataDialog_: { type: Boolean },
            expandedBrowsingDataTypeOptionsList_: { type: Array },
            moreBrowsingDataTypeOptionsList_: { type: Array },
            syncStatus_: { type: Object },
        };
    }
    #dataTypesExpanded__accessor_storage = false;
    get dataTypesExpanded_() { return this.#dataTypesExpanded__accessor_storage; }
    set dataTypesExpanded_(value) { this.#dataTypesExpanded__accessor_storage = value; }
    #deletingDataAlertString__accessor_storage = '';
    get deletingDataAlertString_() { return this.#deletingDataAlertString__accessor_storage; }
    set deletingDataAlertString_(value) { this.#deletingDataAlertString__accessor_storage = value; }
    #isDeletionInProgress__accessor_storage = false;
    get isDeletionInProgress_() { return this.#isDeletionInProgress__accessor_storage; }
    set isDeletionInProgress_(value) { this.#isDeletionInProgress__accessor_storage = value; }
    #isNoDatatypeSelected__accessor_storage = false;
    get isNoDatatypeSelected_() { return this.#isNoDatatypeSelected__accessor_storage; }
    set isNoDatatypeSelected_(value) { this.#isNoDatatypeSelected__accessor_storage = value; }
    #isGoogleDse__accessor_storage = false;
    get isGoogleDse_() { return this.#isGoogleDse__accessor_storage; }
    set isGoogleDse_(value) { this.#isGoogleDse__accessor_storage = value; }
    #showHistoryDeletionDialog__accessor_storage = false;
    get showHistoryDeletionDialog_() { return this.#showHistoryDeletionDialog__accessor_storage; }
    set showHistoryDeletionDialog_(value) { this.#showHistoryDeletionDialog__accessor_storage = value; }
    #showOtherGoogleDataDialog__accessor_storage = false;
    get showOtherGoogleDataDialog_() { return this.#showOtherGoogleDataDialog__accessor_storage; }
    set showOtherGoogleDataDialog_(value) { this.#showOtherGoogleDataDialog__accessor_storage = value; }
    #expandedBrowsingDataTypeOptionsList__accessor_storage = [];
    get expandedBrowsingDataTypeOptionsList_() { return this.#expandedBrowsingDataTypeOptionsList__accessor_storage; }
    set expandedBrowsingDataTypeOptionsList_(value) { this.#expandedBrowsingDataTypeOptionsList__accessor_storage = value; }
    #moreBrowsingDataTypeOptionsList__accessor_storage = [];
    get moreBrowsingDataTypeOptionsList_() { return this.#moreBrowsingDataTypeOptionsList__accessor_storage; }
    set moreBrowsingDataTypeOptionsList_(value) { this.#moreBrowsingDataTypeOptionsList__accessor_storage = value; }
    #syncStatus__accessor_storage;
    get syncStatus_() { return this.#syncStatus__accessor_storage; }
    set syncStatus_(value) { this.#syncStatus__accessor_storage = value; }
    clearBrowsingDataBrowserProxy_ = ClearBrowsingDataBrowserProxyImpl.getInstance();
    syncBrowserProxy_ = SyncBrowserProxyImpl.getInstance();
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.clearBrowsingDataBrowserProxy_.initialize();
        this.setFocusOutlineToVisible_();
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addWebUiListener('browsing-data-counter-text-update', this.updateCounterText_.bind(this));
        this.addWebUiListener('sync-status-changed', this.handleSyncStatus_.bind(this));
        this.syncBrowserProxy_.getSyncStatus().then(this.handleSyncStatus_.bind(this));
        this.addEventListener('settings-boolean-control-change', this.updateDeleteButtonState_.bind(this));
        this.addWebUiListener('update-sync-state', (event) => this.updateDseStatus_(event.isNonGoogleDse));
        this.clearBrowsingDataBrowserProxy_.getSyncState().then((event) => this.updateDseStatus_(event.isNonGoogleDse));
        PrefService.getInstance().whenInitialized().then(() => {
            this.setUpDataTypeOptionLists_();
        });
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('syncStatus_')) {
            this.onSyncStatusChanged_();
        }
    }
    updateDseStatus_(isNonGoogleDse) {
        this.isGoogleDse_ = !isNonGoogleDse;
    }
    handleSyncStatus_(syncStatus) {
        this.syncStatus_ = syncStatus;
    }
    onSyncStatusChanged_() {
        if (this.syncStatus_ === undefined) {
            return;
        }
        this.clearBrowsingDataBrowserProxy_.restartCounters(this.$.timePicker.getSelectedTimePeriod());
    }
    currentRouteChanged(currentRoute) {
        if (currentRoute === routes.CLEAR_BROWSER_DATA) {
            this.metricsBrowserProxy_.recordAction('ClearBrowsingData_DialogCreated');
        }
    }
    setUpDataTypeOptionLists_() {
        const expandedOptionsList = [];
        const moreOptionsList = [];
        ALL_BROWSING_DATATYPES_LIST.forEach((datatype) => {
            // The Skills data type is only available when the Skills feature is
            // enabled for this profile.
            if (datatype === BrowsingDataType.SKILLS &&
                !loadTimeData.getBoolean('showDeleteSkillsDataType')) {
                return;
            }
            const datatypeOption = {
                label: getDataTypeLabel(datatype),
                prefKey: getDataTypePrefName(datatype),
            };
            if (this.shouldDataTypeBeExpanded_(datatype)) {
                expandedOptionsList.push(datatypeOption);
            }
            else {
                moreOptionsList.push(datatypeOption);
            }
        });
        this.expandedBrowsingDataTypeOptionsList_ = expandedOptionsList;
        this.moreBrowsingDataTypeOptionsList_ = moreOptionsList;
        this.isNoDatatypeSelected_ = !expandedOptionsList.some(option => PrefService.getInstance().getPref(option.prefKey).value);
    }
    /**
     * Updates the text of a browsing data counter corresponding to the given
     * preference.
     * @param prefName Browsing data type deletion preference.
     * @param text The text with which to update the counter.
     */
    async updateCounterText_(prefName, text) {
        await PrefService.getInstance().whenInitialized();
        // If the corresponding datatype is in the expanded options list, update the
        // sub-label.
        const expandedListIndex = this.expandedBrowsingDataTypeOptionsList_.map(option => option.prefKey)
            .indexOf(prefName);
        if (expandedListIndex !== -1) {
            const item = this.expandedBrowsingDataTypeOptionsList_[expandedListIndex];
            this.expandedBrowsingDataTypeOptionsList_ =
                this.expandedBrowsingDataTypeOptionsList_.toSpliced(expandedListIndex, 1, { ...item, subLabel: text });
            return;
        }
        // If the datatype is not found in the expanded options list, it should be
        // in the more options list.
        const moreListIndex = this.moreBrowsingDataTypeOptionsList_.map(option => option.prefKey)
            .indexOf(prefName);
        assert(moreListIndex !== -1);
        const moreItem = this.moreBrowsingDataTypeOptionsList_[moreListIndex];
        this.moreBrowsingDataTypeOptionsList_ =
            this.moreBrowsingDataTypeOptionsList_.toSpliced(moreListIndex, 1, { ...moreItem, subLabel: text });
    }
    isSignedIn_() {
        return isSignedIn(this.syncStatus_);
    }
    shouldDataTypeBeExpanded_(datatype) {
        return DEFAULT_BROWSING_DATATYPES_LIST.includes(datatype) ||
            PrefService.getInstance()
                .getPref(getDataTypePrefName(datatype))
                .value;
    }
    computeDeleteButtonLabel_() {
        return canDeleteAccountData(this.syncStatus_) ?
            loadTimeData.getString('clearData') :
            loadTimeData.getString('deleteDataFromDevice');
    }
    computeOtherGoogleDataRowLabel_() {
        return this.isGoogleDse_ ?
            loadTimeData.getString('manageOtherGoogleDataLabel') :
            loadTimeData.getString('manageOtherDataLabel');
    }
    computeOtherGoogleDataRowSubLabel_() {
        if (loadTimeData.getBoolean('showGlicSettings') && this.isSignedIn_()) {
            return loadTimeData.getString('manageSearchGeminiPasswordsSubLabel');
        }
        if (this.isSignedIn_() || !this.isGoogleDse_) {
            return loadTimeData.getString('manageOtherDataSubLabel');
        }
        return loadTimeData.getString('managePasswordsSubLabel');
    }
    onSelectedTimePeriodChange_() {
        this.clearBrowsingDataBrowserProxy_.restartCounters(this.$.timePicker.getSelectedTimePeriod());
    }
    onCancelClick_() {
        this.metricsBrowserProxy_.recordClearBrowsingDataCancelled();
        this.$.deleteBrowsingDataDialog.close();
    }
    onDialogCancel_() {
        if (!this.isDeletionInProgress_) {
            this.metricsBrowserProxy_.recordClearBrowsingDataCancelled();
        }
    }
    /**
     * Triggers browsing data deletion on the selected DataTypes and within the
     * selected TimePeriod.
     */
    async onDeleteBrowsingDataClick_() {
        this.deletingDataAlertString_ = loadTimeData.getString('clearingData');
        this.isDeletionInProgress_ = true;
        const dataTypes = this.getSelectedDataTypes_();
        const timePeriod = this.$.timePicker.getSelectedTimePeriod();
        this.clearBrowsingDataBrowserProxy_
            .recordSettingsClearBrowsingDataTimePeriodHistogram(timePeriod);
        // Update the DataType and TimePeriod prefs with the latest selection.
        const prefService = PrefService.getInstance();
        this.$.deleteBrowsingDataDialog
            .querySelectorAll('settings-checkbox[no-set-pref]')
            .forEach(checkbox => 
        // Manually update the checkboxes' pref value. This is a
        // temporary fix as the `SettingsCheckbox.sendPrefChange` does
        // not update prefs when they are passed dynamically.
        // TODO(crbug.com/431174247): Figure out why
        // `SettingsCheckbox.sendPrefChange` is not working.
        prefService.setPrefValue(checkbox.prefKey, checkbox.checked));
        this.$.timePicker.sendPrefChange();
        const { showHistoryNotice } = await this.clearBrowsingDataBrowserProxy_.clearBrowsingData(dataTypes, timePeriod);
        this.isDeletionInProgress_ = false;
        this.showHistoryDeletionDialog_ = showHistoryNotice;
        this.showDeletionConfirmationToast_(timePeriod);
        if (this.$.deleteBrowsingDataDialog.open) {
            closeDialog(this.$.deleteBrowsingDataDialog, !showHistoryNotice);
        }
    }
    showDeletionConfirmationToast_(timePeriod) {
        const deletionConfirmationToastLabel = timePeriod === TimePeriod.ALL_TIME ?
            loadTimeData.getString('deletionConfirmationAllTimeToast') :
            loadTimeData.getStringF('deletionConfirmationToast', getTimePeriodString(timePeriod, /*short=*/ false));
        this.fire('browsing-data-deleted', {
            deletionConfirmationText: deletionConfirmationToastLabel,
        });
    }
    getSelectedDataTypes_() {
        // Get all the visible checkboxes in the dialog. Hidden checkboxes, eg.
        // collapsed checkboxes in the 'More' list, would never be selected, so
        // there is no need to iterate over them.
        const checkboxes = this.$.deleteBrowsingDataDialog.querySelectorAll('settings-checkbox');
        const dataTypes = [];
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked && !checkbox.hidden) {
                dataTypes.push(checkbox.prefKey);
            }
        });
        return dataTypes;
    }
    updateDeleteButtonState_() {
        this.isNoDatatypeSelected_ = this.getSelectedDataTypes_().length === 0;
    }
    onShowMoreClick_() {
        this.dataTypesExpanded_ = true;
        this.metricsBrowserProxy_.recordAction('Settings.DeleteBrowsingData.CheckboxesShowMoreClick');
        // Set the focus to the first checkbox in the 'more' options list.
        this.updateComplete.then(() => {
            const toFocus = this.$.moreOptionsList.querySelector('settings-checkbox');
            assert(toFocus);
            toFocus.focus();
        });
    }
    shouldHideShowMoreButton_() {
        return this.dataTypesExpanded_ ||
            this.moreBrowsingDataTypeOptionsList_.length === 0;
    }
    shouldDisableDeleteButton_() {
        return this.isDeletionInProgress_ || this.isNoDatatypeSelected_;
    }
    onHistoryDeletionDialogClose_() {
        this.showHistoryDeletionDialog_ = false;
    }
    onManageOtherGoogleDataRowClick_() {
        this.showOtherGoogleDataDialog_ = true;
        this.metricsBrowserProxy_.recordAction('Settings.DeleteBrowsingData.OtherDataEntryPointClick');
    }
    setFocusOutlineToVisible_() {
        // AutoFocus is not visible in mouse navigation by default. But in this
        // dialog the default focus is on cancel which is not a default button. To
        // make this clear to the user we make it visible to the user and remove
        // the focus after the next mouse event.
        const focusOutlineManager = FocusOutlineManager.forDocument(document);
        focusOutlineManager.visible = true;
        document.addEventListener('mousedown', () => {
            focusOutlineManager.visible = false;
        }, { once: true });
    }
    onOtherGoogleDataDialogCancel_(e) {
        e.stopPropagation();
        this.showOtherGoogleDataDialog_ = false;
        this.updateComplete.then(() => focusWithoutInk(this.$.manageOtherGoogleDataRow));
    }
    onSubLabelLinkClicked_(e) {
        // 
        if (e.detail.id === 'signOutLink') {
            this.syncBrowserProxy_.signOut(/*delete_profile=*/ false);
            this.metricsBrowserProxy_.recordAction('Settings.DeleteBrowsingData.CookiesSignOutLinkClick');
            return;
        }
        // 
        assertNotReached(`Invalid sub-label link with id: ${e.detail.id}`);
    }
}
