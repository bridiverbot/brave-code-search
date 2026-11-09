// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import '//resources/cr_components/localized_link/localized_link.js';
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/cr_elements/policy/cr_policy_indicator.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { shouldShowSyncTogglesForStatusAction, SignedInState, StatusAction, SyncBrowserProxyImpl, syncPrefsIndividualDataTypes, UserSelectableType } from '/shared/settings/people_page/sync_browser_proxy.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { getCss } from './sync_controls.css.js';
import { getHtml } from './sync_controls.html.js';
import { loadTimeData } from '../i18n_setup.js';
import { RouteObserverMixinLit } from '../router.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { BatchUploadPromoProxyImpl } from 'chrome://resources/js/batch_upload_promo/batch_upload_promo_proxy.js';
// clang-format on
/**
 * Names of the radio buttons which allow the user to choose their data sync
 * mechanism.
 */
var RadioButtonNames;
(function (RadioButtonNames) {
    RadioButtonNames["SYNC_EVERYTHING"] = "sync-everything";
    RadioButtonNames["CUSTOMIZE_SYNC"] = "customize-sync";
})(RadioButtonNames || (RadioButtonNames = {}));
/**
 * @fileoverview
 * 'settings-sync-controls' contains all sync data type controls.
 */
const SettingsSyncControlsElementBase = RouteObserverMixinLit(WebUiListenerMixinLit(CrLitElement));
export class SettingsSyncControlsElement extends SettingsSyncControlsElementBase {
    static get is() {
        return 'settings-sync-controls';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            hidden: {
                type: Boolean,
                reflect: true,
            },
            /**
             * The current sync preferences, supplied by SyncBrowserProxy.
             */
            syncPrefs: { type: Object },
            /**
             * The current sync status, supplied by the parent.
             */
            syncStatus: { type: Object },
            /**
             * Communicates to the user that the toggles are disabled because sync is
             * disabled by their administrator.
             */
            showSyncDisabledInformation: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Returns whether this element is currently displayed on the account
             * settings page. True when `replaceSyncPromosWithSignInPromos` is enabled
             * and the user navigates to the account page.
             */
            isAccountSettingsPage_: { type: Boolean },
            showBatchUploadPromo_: { type: Boolean },
            batchUploadPromoHTML_: { type: String },
            isAiChatSyncEnabled_: { type: Boolean },
            aiChatCheckboxLabel_: { type: String },
        };
    }
    #hidden_accessor_storage = false;
    get hidden() { return this.#hidden_accessor_storage; }
    set hidden(value) { this.#hidden_accessor_storage = value; }
    #syncPrefs_accessor_storage;
    get syncPrefs() { return this.#syncPrefs_accessor_storage; }
    set syncPrefs(value) { this.#syncPrefs_accessor_storage = value; }
    #syncStatus_accessor_storage = null;
    get syncStatus() { return this.#syncStatus_accessor_storage; }
    set syncStatus(value) { this.#syncStatus_accessor_storage = value; }
    syncBrowserProxy_ = SyncBrowserProxyImpl.getInstance();
    /**
     * Caches the individually selected synced data types. This is used to
     * be able to restore the selections after checking and unchecking Sync All.
     */
    cachedSyncPrefs_ = null;
    #showSyncDisabledInformation_accessor_storage = false;
    get showSyncDisabledInformation() { return this.#showSyncDisabledInformation_accessor_storage; }
    set showSyncDisabledInformation(value) { this.#showSyncDisabledInformation_accessor_storage = value; }
    #isAccountSettingsPage__accessor_storage = false;
    get isAccountSettingsPage_() { return this.#isAccountSettingsPage__accessor_storage; }
    set isAccountSettingsPage_(value) { this.#isAccountSettingsPage__accessor_storage = value; }
    #showBatchUploadPromo__accessor_storage = loadTimeData.getBoolean('replaceSyncPromosWithSignInPromos');
    get showBatchUploadPromo_() { return this.#showBatchUploadPromo__accessor_storage; }
    set showBatchUploadPromo_(value) { this.#showBatchUploadPromo__accessor_storage = value; }
    #batchUploadPromoHTML__accessor_storage = window.trustedTypes.emptyHTML;
    get batchUploadPromoHTML_() { return this.#batchUploadPromoHTML__accessor_storage; }
    set batchUploadPromoHTML_(value) { this.#batchUploadPromoHTML__accessor_storage = value; }
    #isAiChatSyncEnabled__accessor_storage = loadTimeData.valueExists('isBraveSyncAIChatEnabled') &&
        loadTimeData.getBoolean('isBraveSyncAIChatEnabled');
    get isAiChatSyncEnabled_() { return this.#isAiChatSyncEnabled__accessor_storage; }
    set isAiChatSyncEnabled_(value) { this.#isAiChatSyncEnabled__accessor_storage = value; }
    #aiChatCheckboxLabel__accessor_storage = this.isAiChatSyncEnabled_ ?
        loadTimeData.getString('aiChatCheckboxLabel') :
        '';
    get aiChatCheckboxLabel_() { return this.#aiChatCheckboxLabel__accessor_storage; }
    set aiChatCheckboxLabel_(value) { this.#aiChatCheckboxLabel__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('sync-prefs-changed', this.handleSyncPrefsChanged_.bind(this));
        if (loadTimeData.valueExists('unoPhase2FollowUp')) {
            this.showBatchUploadPromo_ = loadTimeData.getBoolean('unoPhase2FollowUp');
        }
        if (this.showBatchUploadPromo_) {
            BatchUploadPromoProxyImpl.getInstance()
                .callbackRouter.onLocalDataCountChanged.addListener((localDataCount) => {
                this.batchUploadPromoLocalDataCountChanged_(localDataCount);
            });
            BatchUploadPromoProxyImpl.getInstance()
                .handler.getBatchUploadPromoLocalDataCount()
                .then(({ localDataCount }) => {
                this.batchUploadPromoLocalDataCountChanged_(localDataCount);
            });
        }
        const router = Router.getInstance();
        const currentRoute = router.getCurrentRoute();
        if (currentRoute === routes.BRAVE_SYNC_SETUP) {
            this.syncBrowserProxy_.didNavigateToSyncPage();
        }
        if (currentRoute === routes.ACCOUNT) {
            // 
            this.isAccountSettingsPage_ = true;
            this.syncBrowserProxy_.didNavigateToAccountSettingsPage();
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('syncStatus') ||
            changedProperties.has('syncPrefs') ||
            changedPrivateProperties.has('isAccountSettingsPage_')) {
            this.hidden = this.syncControlsHidden_();
            this.showSyncDisabledInformation =
                this.computeShowSyncDisabledInformation_();
        }
        if (changedProperties.has('syncStatus')) {
            this.syncStatusChanged_();
        }
    }
    /**
     * Handler for when the sync preferences are updated.
     */
    handleSyncPrefsChanged_(syncPrefs) {
        this.syncPrefs = syncPrefs;
    }
    async batchUploadPromoLocalDataCountChanged_(localDataCount) {
        if (!this.showBatchUploadPromo_) {
            return;
        }
        if (localDataCount === 0) {
            this.batchUploadPromoHTML_ = window.trustedTypes.emptyHTML;
            return;
        }
        const batchUploadPromoString = await PluralStringProxyImpl.getInstance().getPluralString('batchUploadPromoLabel', localDataCount);
        // We need the HTML representation instead of the string since the string
        // holds a link. Add `aria-labelledby="batchUploadPromo"` so the link is
        // accessible and labels itself with the full promo text.
        this.batchUploadPromoHTML_ = sanitizeInnerHtml(batchUploadPromoString.replace('<a ', '<a aria-labelledby="batchUploadPromo" '), { tags: ['a'], attrs: ['id', 'aria-labelledby'] });
    }
    shouldShowBatchUploadPromo_() {
        if (!this.showBatchUploadPromo_) {
            return false;
        }
        if (!this.isAccountSettingsPage_) {
            return false;
        }
        return this.batchUploadPromoHTML_ !== window.trustedTypes.emptyHTML;
    }
    onBatchUploadPromoClick_(event) {
        // The click listener is set on the parent container (#batchUploadPromo) via
        // event delegation so it is not lost when innerHTML is re-evaluated by Lit.
        // Ensure only clicks on the actual anchor link trigger the action.
        const target = event.target;
        if (target.id === 'openBatchUploadLink') {
            assert(this.shouldShowBatchUploadPromo_());
            // Prevent navigation to href='#' and open the batch upload dialog
            // instead.
            event.preventDefault();
            BatchUploadPromoProxyImpl.getInstance()
                .handler.onBatchUploadPromoClicked();
        }
    }
    /**
     * @return Computed binding returning the selected sync data radio button.
     */
    selectedSyncDataRadio_() {
        return this.syncPrefs?.syncAllDataTypes ? RadioButtonNames.SYNC_EVERYTHING :
            RadioButtonNames.CUSTOMIZE_SYNC;
    }
    /**
     * Called when the sync data radio button selection changes.
     */
    onSyncDataRadioSelectedChanged_(event) {
        const syncAllDataTypes = event.detail.value === RadioButtonNames.SYNC_EVERYTHING;
        const previous = !!this.syncPrefs?.syncAllDataTypes;
        if (previous !== syncAllDataTypes) {
            this.handleSyncAllDataTypesChanged_(syncAllDataTypes);
        }
    }
    currentRouteChanged(newRoute, oldRoute) {
        // 
        this.isAccountSettingsPage_ = newRoute === routes.ACCOUNT;
        if (this.isAccountSettingsPage_ && oldRoute !== routes.ACCOUNT) {
            this.syncBrowserProxy_.didNavigateToAccountSettingsPage();
        }
    }
    mergedHistoryTabsToggleDisabled_() {
        return !this.syncStatus || this.syncStatus.disabled || !this.syncPrefs ||
            (this.syncPrefs.tabsManaged && this.syncPrefs.typedUrlsManaged);
    }
    mergedHistoryTabsTogglePolicyIndicatorShown_() {
        return !!this.syncStatus && !this.syncStatus.disabled && !!this.syncPrefs &&
            this.syncPrefs.tabsManaged && this.syncPrefs.typedUrlsManaged;
    }
    mergedHistoryTabsToggleChecked_() {
        return !!this.syncPrefs &&
            (this.syncPrefs.typedUrlsSynced || this.syncPrefs.tabsSynced ||
                this.syncPrefs.savedTabGroupsSynced);
    }
    onMergedHistoryTabsToggleChange_(event) {
        assert(this.isAccountSettingsPage_);
        const toggle = event.target;
        this.syncBrowserProxy_.setSyncDatatype(UserSelectableType.HISTORY, toggle.checked);
        this.syncBrowserProxy_.setSyncDatatype(UserSelectableType.TABS, toggle.checked);
        this.syncBrowserProxy_.setSyncDatatype(UserSelectableType.SAVED_TAB_GROUPS, toggle.checked);
    }
    handleSyncAllDataTypesChanged_(syncAllDataTypes) {
        assert(this.syncPrefs);
        const updatedSyncPrefs = { ...this.syncPrefs };
        updatedSyncPrefs.syncAllDataTypes = syncAllDataTypes;
        if (syncAllDataTypes) {
            // Cache the previously selected preference before checking every box.
            this.cachedSyncPrefs_ = {};
            for (const dataType of syncPrefsIndividualDataTypes) {
                // These are all booleans, so this shallow copy is sufficient.
                this.cachedSyncPrefs_[dataType] = this.syncPrefs[dataType];
                updatedSyncPrefs[dataType] = true;
            }
        }
        else if (this.cachedSyncPrefs_) {
            // Restore the previously selected preference.
            for (const dataType of syncPrefsIndividualDataTypes) {
                const cached = this.cachedSyncPrefs_[dataType];
                if (cached !== undefined) {
                    updatedSyncPrefs[dataType] = cached;
                }
            }
        }
        this.syncPrefs = updatedSyncPrefs;
        chrome.metricsPrivate.recordUserAction(syncAllDataTypes ? 'Sync_SyncEverything' : 'Sync_CustomizeSync');
        this.onSingleSyncDataTypeChange_();
    }
    /**
     * Handler for when any sync data type checkbox is changed.
     */
    onSingleSyncDataTypeChange_(event) {
        if (this.isAccountSettingsPage_) {
            assert(event);
            const toggle = event.target;
            const type = Number(toggle.dataset['type']);
            assert(!isNaN(type));
            this.syncBrowserProxy_.setSyncDatatype(type, toggle.checked);
            return;
        }
        assert(this.syncPrefs);
        if (event) {
            const toggle = event.target;
            const pref = toggle.dataset['pref'];
            if (pref) {
                this.syncPrefs[pref] = toggle.checked;
            }
        }
        this.syncBrowserProxy_.setSyncDatatypes(this.syncPrefs);
    }
    disableTypeCheckBox_(dataTypeManaged) {
        if (dataTypeManaged) {
            return true;
        }
        if (!this.syncStatus || !this.syncPrefs) {
            return !!this.syncPrefs?.syncAllDataTypes;
        }
        if (!this.syncStatus) {
            return true;
        }
        if (dataTypeManaged) {
            return true;
        }
        if (this.syncStatus.signedInState === SignedInState.SYNCING) {
            return this.syncPrefs?.syncAllDataTypes;
        }
        // Toggles should be disabled on the account settings page if sync is
        // disabled, or if the sync prefs are undefined, which is the case e.g.
        // right after startup.
        return this.syncStatus.disabled || !this.syncPrefs;
    }
    showPolicyIndicator_(dataTypeManaged) {
        // Do not show the indicator on the account settings page if sync is
        // disabled, as this would make the UI look too crowded and the toggles are
        // already deactivated. In the sync settings page, the toggles are hidden if
        // sync is disabled (see `syncControlsHidden_()`), so we do not need to
        // specify whether we show the indicator or not.
        if (this.isAccountSettingsPage_) {
            return !!this.syncStatus && !this.syncStatus.disabled &&
                !!dataTypeManaged;
        }
        return !!dataTypeManaged;
    }
    computeShowSyncDisabledInformation_() {
        return this.isAccountSettingsPage_ && !!this.syncStatus?.disabled;
    }
    // 
    syncStatusChanged_() {
        const router = Router.getInstance();
        if (router.getCurrentRoute() === routes.SYNC_ADVANCED &&
            this.syncControlsHidden_()) {
            // 
            // Try to navigate the user to the account page, where they can find the
            // toggles. If the page does not exist, they will be redirected to the
            // people settings page from there.
            router.navigateTo(routes.ACCOUNT);
        }
    }
    /**
     * @return Whether the sync controls are hidden.
     */
    syncControlsHidden_() {
        if (!this.syncStatus) {
            // Show sync controls by default.
            return false;
        }
        // The account page is not shown when the user is not signed in or if they
        // are in sign in pending state, so we don't need to check for the signed in
        // state here. However, the controls should be hidden if there is a generic
        // sync error (e.g. a passphrase is required), or if the user has local sync
        // enabled.
        if (this.isAccountSettingsPage_) {
            return (!!this.syncStatus.hasError &&
                this.syncStatus.statusAction !== StatusAction.UPGRADE_CLIENT &&
                this.syncStatus.statusAction !==
                    StatusAction.SHOW_BOOKMARKS_LIMIT_HELP_ARTICLE) ||
                (!!this.syncPrefs && this.syncPrefs.localSyncEnabled);
        }
        if (this.syncStatus.signedInState !== SignedInState.SYNCING ||
            this.syncStatus.disabled) {
            return true;
        }
        return !!this.syncStatus.hasError &&
            !shouldShowSyncTogglesForStatusAction(this.syncStatus.statusAction);
    }
}
customElements.define(SettingsSyncControlsElement.is, SettingsSyncControlsElement);
