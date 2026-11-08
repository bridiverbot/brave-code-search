// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import '//resources/js/util.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_link_row/cr_link_row.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
// 
import '//resources/cr_elements/cr_toast/cr_toast.js';
// 
import './sync_encryption_options.js';
import '../privacy_page/personalization_options.js';
import '../settings_page/settings_subpage.js';
// 
import './sync_account_control.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert, assertNotReached } from '//resources/js/assert.js';
import { focusWithoutInk } from '//resources/js/focus_without_ink.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { shouldShowSyncTogglesForStatusAction, PageStatus, SignedInState, StatusAction, SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { loadTimeData } from '../i18n_setup.js';
import { MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
// 
// clang-format on
import { getCss } from './sync_page.css.js';
import { getHtml } from './sync_page.html.js';
/**
 * @fileoverview
 * 'settings-sync-page' is the settings page containing sync settings.
 */
const SettingsSyncPageElementBase = SettingsViewMixinLit(WebUiListenerMixinLit(I18nMixinLit(CrLitElement)));
export class SettingsSyncPageElement extends SettingsSyncPageElementBase {
    static get is() {
        return 'settings-sync-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            focusConfig: { type: Object },
            /**
             * The current page status. Defaults to |CONFIGURE| such that the
             * searching algorithm can search useful content when the page is not
             * visible to the user.
             */
            pageStatus_: { type: String },
            /**
             * The current sync preferences, supplied by SyncBrowserProxy.
             */
            syncPrefs: { type: Object },
            syncStatus_: { type: Object },
            dataEncrypted_: { type: Boolean },
            encryptionExpanded_: { type: Boolean },
            /** If true, override |encryptionExpanded_| to be true. */
            forceEncryptionExpanded: { type: Boolean },
            /**
             * The existing passphrase input field value.
             */
            existingPassphrase_: { type: String },
            /*
             * Whether enter existing passphrase UI should be shown.
             */
            showExistingPassphraseBelowAccount_: { type: Boolean },
            signedIn_: { type: Boolean },
            syncDisabledByAdmin_: { type: Boolean },
            syncSectionDisabled_: { type: Boolean },
            // 
            showSetupCancelDialog_: { type: Boolean },
            // 
            enterPassphraseLabel_: { type: String },
            existingPassphraseLabel_: { type: String },
            mayShowLinkedGoogleServicesSetting_: { type: Boolean },
            personalizationCollapseExpanded_: { type: Boolean },
        };
    }
    #focusConfig_accessor_storage;
    get focusConfig() { return this.#focusConfig_accessor_storage; }
    set focusConfig(value) { this.#focusConfig_accessor_storage = value; }
    #pageStatus__accessor_storage = PageStatus.CONFIGURE;
    get pageStatus_() { return this.#pageStatus__accessor_storage; }
    set pageStatus_(value) { this.#pageStatus__accessor_storage = value; }
    #syncPrefs_accessor_storage = null;
    get syncPrefs() { return this.#syncPrefs_accessor_storage; }
    set syncPrefs(value) { this.#syncPrefs_accessor_storage = value; }
    #syncStatus__accessor_storage = { statusAction: StatusAction.NO_ACTION };
    get syncStatus_() { return this.#syncStatus__accessor_storage; }
    set syncStatus_(value) { this.#syncStatus__accessor_storage = value; }
    #dataEncrypted__accessor_storage = false;
    get dataEncrypted_() { return this.#dataEncrypted__accessor_storage; }
    set dataEncrypted_(value) { this.#dataEncrypted__accessor_storage = value; }
    #encryptionExpanded__accessor_storage = false;
    get encryptionExpanded_() { return this.#encryptionExpanded__accessor_storage; }
    set encryptionExpanded_(value) { this.#encryptionExpanded__accessor_storage = value; }
    #forceEncryptionExpanded_accessor_storage = false;
    get forceEncryptionExpanded() { return this.#forceEncryptionExpanded_accessor_storage; }
    set forceEncryptionExpanded(value) { this.#forceEncryptionExpanded_accessor_storage = value; }
    #existingPassphrase__accessor_storage = '';
    get existingPassphrase_() { return this.#existingPassphrase__accessor_storage; }
    set existingPassphrase_(value) { this.#existingPassphrase__accessor_storage = value; }
    #showExistingPassphraseBelowAccount__accessor_storage = false;
    get showExistingPassphraseBelowAccount_() { return this.#showExistingPassphraseBelowAccount__accessor_storage; }
    set showExistingPassphraseBelowAccount_(value) { this.#showExistingPassphraseBelowAccount__accessor_storage = value; }
    #signedIn__accessor_storage = true;
    get signedIn_() { return this.#signedIn__accessor_storage; }
    set signedIn_(value) { this.#signedIn__accessor_storage = value; }
    #syncDisabledByAdmin__accessor_storage = false;
    get syncDisabledByAdmin_() { return this.#syncDisabledByAdmin__accessor_storage; }
    set syncDisabledByAdmin_(value) { this.#syncDisabledByAdmin__accessor_storage = value; }
    #syncSectionDisabled__accessor_storage = false;
    get syncSectionDisabled_() { return this.#syncSectionDisabled__accessor_storage; }
    set syncSectionDisabled_(value) { this.#syncSectionDisabled__accessor_storage = value; }
    #mayShowLinkedGoogleServicesSetting__accessor_storage = loadTimeData.getBoolean('mayShowLinkedGoogleServicesSetting');
    get mayShowLinkedGoogleServicesSetting_() { return this.#mayShowLinkedGoogleServicesSetting__accessor_storage; }
    set mayShowLinkedGoogleServicesSetting_(value) { this.#mayShowLinkedGoogleServicesSetting__accessor_storage = value; }
    #personalizationCollapseExpanded__accessor_storage = false;
    get personalizationCollapseExpanded_() { return this.#personalizationCollapseExpanded__accessor_storage; }
    set personalizationCollapseExpanded_(value) { this.#personalizationCollapseExpanded__accessor_storage = value; }
    #showSetupCancelDialog__accessor_storage = false;
    // 
    get showSetupCancelDialog_() { return this.#showSetupCancelDialog__accessor_storage; }
    set showSetupCancelDialog_(value) { this.#showSetupCancelDialog__accessor_storage = value; }
    #enterPassphraseLabel__accessor_storage = window.trustedTypes.emptyHTML;
    // 
    get enterPassphraseLabel_() { return this.#enterPassphraseLabel__accessor_storage; }
    set enterPassphraseLabel_(value) { this.#enterPassphraseLabel__accessor_storage = value; }
    #existingPassphraseLabel__accessor_storage = '';
    get existingPassphraseLabel_() { return this.#existingPassphraseLabel__accessor_storage; }
    set existingPassphraseLabel_(value) { this.#existingPassphraseLabel__accessor_storage = value; }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    syncBrowserProxy_ = SyncBrowserProxyImpl.getInstance();
    collapsibleSectionsInitialized_;
    didAbort_;
    setupCancelConfirmed_;
    beforeunloadCallback_;
    unloadCallback_;
    constructor() {
        super();
        /**
         * The beforeunload callback is used to show the 'Leave site' dialog. This
         * makes sure that the user has the chance to go back and confirm the sync
         * opt-in before leaving.
         *
         * This property is non-null if the user is currently navigated on the sync
         * settings route.
         */
        this.beforeunloadCallback_ = null;
        /**
         * The unload callback is used to cancel the sync setup when the user hits
         * the browser back button after arriving on the page.
         * Note = Cases like closing the tab or reloading don't need to be handled;
         * because they are already caught in |PeopleHandler::~PeopleHandler|
         * from the C++ code.
         */
        this.unloadCallback_ = null;
        /**
         * Whether the initial layout for collapsible sections has been computed. It
         * is computed only once; the first time the sync status is updated.
         */
        this.collapsibleSectionsInitialized_ = false;
        /**
         * Whether the user decided to abort sync.
         */
        this.didAbort_ = true;
        /**
         * Whether the user confirmed the cancellation of sync.
         */
        this.setupCancelConfirmed_ = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('page-status-changed', this.handlePageStatusChanged_.bind(this));
        this.addWebUiListener('sync-prefs-changed', this.handleSyncPrefsChanged_.bind(this));
        this.syncBrowserProxy_.getSyncStatus().then(this.onSyncStatusChanged_.bind(this));
        this.addWebUiListener('sync-status-changed', this.onSyncStatusChanged_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const router = Router.getInstance();
        if (router.getRoutes().SYNC.contains(router.getCurrentRoute())) {
            this.onNavigateAwayFromPage_();
        }
        if (this.beforeunloadCallback_) {
            window.removeEventListener('beforeunload', this.beforeunloadCallback_);
            this.beforeunloadCallback_ = null;
        }
        if (this.unloadCallback_) {
            window.removeEventListener('unload', this.unloadCallback_);
            this.unloadCallback_ = null;
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('focusConfig')) {
            this.onFocusConfigChange_();
        }
        if (changedProperties.has('syncPrefs')) {
            this.dataEncrypted_ = this.computeDataEncrypted_();
            this.enterPassphraseLabel_ = this.computeEnterPassphraseLabel_();
            this.existingPassphraseLabel_ = this.computeExistingPassphraseLabel_();
        }
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('syncPrefs') ||
            changedPrivateProperties.has('syncStatus_')) {
            this.showExistingPassphraseBelowAccount_ =
                this.computeShowExistingPassphraseBelowAccount_();
            this.syncSectionDisabled_ = this.computeSyncSectionDisabled_();
        }
        if (changedPrivateProperties.has('syncStatus_')) {
            this.signedIn_ = this.computeSignedIn_();
            this.syncDisabledByAdmin_ = this.computeSyncDisabledByAdmin_();
        }
        if (changedPrivateProperties.has('dataEncrypted_') ||
            changedProperties.has('forceEncryptionExpanded')) {
            this.expandEncryptionIfNeeded_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('showExistingPassphraseBelowAccount_') &&
            this.showExistingPassphraseBelowAccount_) {
            this.focusPassphraseInput_();
        }
    }
    onSyncStatusChanged_(syncStatus) {
        this.syncStatus_ = syncStatus;
        if (Router.getInstance().getCurrentRoute() === routes.SYNC &&
            !this.shouldShowSyncPage_()) {
            this.onNavigateAwayFromPage_();
            Router.getInstance().navigateTo(routes.PEOPLE);
        }
    }
    // 
    computeSignedIn_() {
        return this.syncStatus_.signedInState === SignedInState.SYNCING;
    }
    computeSyncSectionDisabled_() {
        return this.syncStatus_.signedInState !== SignedInState.SYNCING ||
            !!this.syncStatus_.disabled ||
            (!!this.syncStatus_.hasError &&
                !shouldShowSyncTogglesForStatusAction(this.syncStatus_.statusAction));
    }
    computeSyncDisabledByAdmin_() {
        return !!this.syncStatus_.managed;
    }
    onFocusConfigChange_() {
        this.focusConfig.set(Router.getInstance().getRoutes().SYNC_ADVANCED.path, () => {
            const toFocus = this.shadowRoot.querySelector('#sync-advanced-row');
            assert(toFocus);
            focusWithoutInk(toFocus);
        });
    }
    // 
    onSetupCancelDialogBackClick_() {
        this.shadowRoot.querySelector('#setupCancelDialog').cancel();
        chrome.metricsPrivate.recordUserAction('Signin_Signin_CancelCancelAdvancedSyncSettings');
    }
    onSetupCancelDialogConfirmClick_() {
        this.setupCancelConfirmed_ = true;
        this.shadowRoot.querySelector('#setupCancelDialog').close();
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().BASIC);
        chrome.metricsPrivate.recordUserAction('Signin_Signin_ConfirmCancelAdvancedSyncSettings');
    }
    onSetupCancelDialogClose_() {
        this.showSetupCancelDialog_ = false;
    }
    // 
    shouldShowSyncPage_() {
        return !loadTimeData.getBoolean('replaceSyncPromosWithSignInPromos') ||
            this.syncStatus_.signedInState === undefined ||
            this.syncStatus_.signedInState === SignedInState.SYNCING;
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        const router = Router.getInstance();
        if (router.getRoutes().SYNC.contains(router.getCurrentRoute())) {
            if (!this.shouldShowSyncPage_()) {
                this.onNavigateAwayFromPage_();
                if (router.getCurrentRoute() === router.getRoutes().SYNC) {
                    Router.getInstance().navigateTo(routes.PEOPLE);
                }
                return;
            }
            this.onNavigateToPage_();
            return;
        }
        const searchParams = Router.getInstance().getQueryParameters().get('search');
        if (searchParams) {
            // User navigated away via searching. Cancel sync without showing
            // confirmation dialog.
            this.onNavigateAwayFromPage_();
            return;
        }
        // 
        const userActionCancelsSetup = this.syncStatus_ &&
            this.syncStatus_.firstSetupInProgress && this.didAbort_;
        if (userActionCancelsSetup && !this.setupCancelConfirmed_) {
            chrome.metricsPrivate.recordUserAction('Signin_Signin_BackOnAdvancedSyncSettings');
            // Show the 'Cancel sync?' dialog.
            // Yield so that other |currentRouteChanged| observers are called,
            // before triggering another navigation (and another round of observers
            // firing). Triggering navigation from within an observer leads to some
            // undefined behavior and runtime errors.
            requestAnimationFrame(() => {
                router.navigateTo(router.getRoutes().SYNC);
                this.showSetupCancelDialog_ = true;
            });
            return;
        }
        // Reset variable.
        this.setupCancelConfirmed_ = false;
        // 
        this.onNavigateAwayFromPage_();
    }
    isStatus_(expectedPageStatus) {
        return expectedPageStatus === this.pageStatus_;
    }
    onNavigateToPage_() {
        const router = Router.getInstance();
        assert(router.getRoutes().SYNC.contains(router.getCurrentRoute()));
        if (this.beforeunloadCallback_) {
            return;
        }
        this.collapsibleSectionsInitialized_ = false;
        // Display loading page until the settings have been retrieved.
        this.pageStatus_ = PageStatus.SPINNER;
        this.syncBrowserProxy_.didNavigateToSyncPage();
        this.beforeunloadCallback_ = event => {
            // When the user tries to leave the sync setup, show the 'Leave site'
            // dialog.
            if (this.syncStatus_ && this.syncStatus_.firstSetupInProgress) {
                event.preventDefault();
                chrome.metricsPrivate.recordUserAction('Signin_Signin_AbortAdvancedSyncSettings');
            }
        };
        window.addEventListener('beforeunload', this.beforeunloadCallback_);
        this.unloadCallback_ = this.onNavigateAwayFromPage_.bind(this);
        window.addEventListener('unload', this.unloadCallback_);
    }
    onNavigateAwayFromPage_() {
        if (!this.beforeunloadCallback_) {
            return;
        }
        // Reset the status to CONFIGURE such that the searching algorithm can
        // search useful content when the page is not visible to the user.
        this.pageStatus_ = PageStatus.CONFIGURE;
        this.syncBrowserProxy_.didNavigateAwayFromSyncPage(this.didAbort_);
        window.removeEventListener('beforeunload', this.beforeunloadCallback_);
        this.beforeunloadCallback_ = null;
        if (this.unloadCallback_) {
            window.removeEventListener('unload', this.unloadCallback_);
            this.unloadCallback_ = null;
        }
    }
    /**
     * Handler for when the sync preferences are updated.
     */
    handleSyncPrefsChanged_(syncPrefs) {
        this.syncPrefs = syncPrefs;
        this.pageStatus_ = PageStatus.CONFIGURE;
    }
    onActivityControlsClick_() {
        chrome.metricsPrivate.recordUserAction('Sync_OpenActivityControlsPage');
        this.syncBrowserProxy_.openActivityControlsUrl();
        window.open(loadTimeData.getString('activityControlsUrl'));
    }
    onLinkedServicesClick_() {
        this.metricsBrowserProxy_.recordAction('Sync_OpenLinkedServicesPage');
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('linkedServicesUrl'));
    }
    onSyncDashboardLinkClick_() {
        window.open(loadTimeData.getString('syncDashboardUrl'));
    }
    computeDataEncrypted_() {
        return !!this.syncPrefs && this.syncPrefs.encryptAllData;
    }
    computeEnterPassphraseLabel_() {
        if (!this.syncPrefs || !this.syncPrefs.encryptAllData) {
            return window.trustedTypes.emptyHTML;
        }
        if (!this.syncPrefs.explicitPassphraseTime) {
            // TODO(crbug.com/40765539): There's no reason why this dateless label
            // shouldn't link to 'syncErrorsHelpUrl' like the other one.
            return this.i18nAdvanced('enterPassphraseLabel');
        }
        return this.i18nAdvanced('enterPassphraseLabelWithDate', {
            tags: ['a'],
            substitutions: [
                loadTimeData.getString('syncErrorsHelpUrl'),
                this.syncPrefs.explicitPassphraseTime,
            ],
        });
    }
    computeExistingPassphraseLabel_() {
        if (!this.syncPrefs || !this.syncPrefs.encryptAllData) {
            return '';
        }
        if (!this.syncPrefs.explicitPassphraseTime) {
            return this.i18n('existingPassphraseLabel');
        }
        return this.i18n('existingPassphraseLabelWithDate', this.syncPrefs.explicitPassphraseTime);
    }
    /**
     * Whether the encryption dropdown should be expanded by default.
     */
    expandEncryptionIfNeeded_() {
        // Force the dropdown to expand.
        if (this.forceEncryptionExpanded) {
            this.forceEncryptionExpanded = false;
            this.encryptionExpanded_ = true;
            return;
        }
        this.encryptionExpanded_ = this.dataEncrypted_;
    }
    onResetSyncClick_(event) {
        if (event.target.tagName === 'A') {
            // Stop the propagation of events as the |cr-expand-button|
            // prevents the default which will prevent the navigation to the link.
            event.stopPropagation();
        }
    }
    onExistingPassphraseValueChanged_(e) {
        this.existingPassphrase_ = e.detail.value;
    }
    onPersonalizationCollapseExpandedChanged_(e) {
        this.personalizationCollapseExpanded_ = e.detail.value;
    }
    onEncryptionExpandedChanged_(e) {
        this.encryptionExpanded_ = e.detail.value;
    }
    onExistingPassphraseKeypress_(e) {
        if (e.key === 'Enter') {
            this.submitExistingPassphrase_();
        }
    }
    /**
     * Sends the user-entered existing password to re-enable sync.
     */
    onSubmitExistingPassphraseClick_() {
        this.submitExistingPassphrase_();
    }
    submitExistingPassphrase_() {
        this.syncBrowserProxy_.setDecryptionPassphrase(this.existingPassphrase_)
            .then(sucessfullySet => this.handlePageStatusChanged_(this.computePageStatusAfterPassphraseChange_(sucessfullySet)));
        this.existingPassphrase_ = '';
    }
    onPassphraseChanged_(e) {
        this.handlePageStatusChanged_(this.computePageStatusAfterPassphraseChange_(e.detail.didChange));
    }
    computePageStatusAfterPassphraseChange_(successfullyChanged) {
        if (!successfullyChanged) {
            return PageStatus.PASSPHRASE_FAILED;
        }
        // Stay on the setup page if the user hasn't approved sync settings yet.
        // Otherwise, close sync setup.
        return this.syncStatus_ && this.syncStatus_.firstSetupInProgress ?
            PageStatus.CONFIGURE :
            PageStatus.DONE;
    }
    /**
     * Called when the page status updates.
     */
    handlePageStatusChanged_(pageStatus) {
        const router = Router.getInstance();
        switch (pageStatus) {
            case PageStatus.SPINNER:
            case PageStatus.CONFIGURE:
                this.pageStatus_ = pageStatus;
                return;
            case PageStatus.DONE:
                if (router.getCurrentRoute() === router.getRoutes().SYNC) {
                    router.navigateTo(router.getRoutes().PEOPLE);
                }
                return;
            case PageStatus.PASSPHRASE_FAILED:
                if (this.pageStatus_ === PageStatus.CONFIGURE && this.syncPrefs &&
                    this.syncPrefs.passphraseRequired) {
                    const passphraseInput = this.shadowRoot.querySelector('#existingPassphraseInput');
                    passphraseInput.invalid = true;
                    passphraseInput.focusInput();
                }
                return;
            default:
                assertNotReached();
        }
    }
    onLearnMoreClick_(event) {
        if (event.target.tagName === 'A') {
            // Stop the propagation of events, so that clicking on links inside
            // checkboxes or radio buttons won't change the value.
            event.stopPropagation();
        }
    }
    // 
    shouldShowSyncAccountControl_() {
        return !!this.syncStatus_.syncSystemEnabled &&
            loadTimeData.getBoolean('signinAllowed');
    }
    // 
    computeShowExistingPassphraseBelowAccount_() {
        return this.syncStatus_.signedInState === SignedInState.SYNCING &&
            this.syncPrefs !== null && this.syncPrefs.passphraseRequired;
    }
    onSyncAdvancedClick_() {
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().SYNC_ADVANCED);
    }
    /**
     * @param e The event passed from settings-sync-account-control.
     */
    onSyncSetupDone_(e) {
        if (e.detail) {
            this.didAbort_ = false;
            chrome.metricsPrivate.recordUserAction('Signin_Signin_ConfirmAdvancedSyncSettings');
        }
        else {
            this.setupCancelConfirmed_ = true;
            chrome.metricsPrivate.recordUserAction('Signin_Signin_CancelAdvancedSyncSettings');
        }
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().BASIC);
    }
    /**
     * Focuses the passphrase input element if it is available and the page is
     * visible.
     */
    async focusPassphraseInput_() {
        const passphraseInput = this.shadowRoot.querySelector('#existingPassphraseInput');
        const router = Router.getInstance();
        if (passphraseInput &&
            router.getCurrentRoute() === router.getRoutes().SYNC) {
            await passphraseInput.updateComplete;
            passphraseInput.focus();
        }
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsSyncPageElement.is, SettingsSyncPageElement);
