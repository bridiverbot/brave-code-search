import '//resources/js/util.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_link_row/cr_link_row.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import './sync_encryption_options.js';
import '../privacy_page/personalization_options.js';
import '../settings_page/settings_subpage.js';
import './sync_account_control.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { SyncPrefs, SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
import { PageStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
import type { FocusConfig } from '../focus_config.js';
import type { Route } from '../router.js';
/**
 * @fileoverview
 * 'settings-sync-page' is the settings page containing sync settings.
 */
declare const SettingsSyncPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsSyncPageElement extends SettingsSyncPageElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        focusConfig: {
            type: ObjectConstructor;
        };
        /**
         * The current page status. Defaults to |CONFIGURE| such that the
         * searching algorithm can search useful content when the page is not
         * visible to the user.
         */
        pageStatus_: {
            type: StringConstructor;
        };
        /**
         * The current sync preferences, supplied by SyncBrowserProxy.
         */
        syncPrefs: {
            type: ObjectConstructor;
        };
        syncStatus_: {
            type: ObjectConstructor;
        };
        dataEncrypted_: {
            type: BooleanConstructor;
        };
        encryptionExpanded_: {
            type: BooleanConstructor;
        };
        /** If true, override |encryptionExpanded_| to be true. */
        forceEncryptionExpanded: {
            type: BooleanConstructor;
        };
        /**
         * The existing passphrase input field value.
         */
        existingPassphrase_: {
            type: StringConstructor;
        };
        showExistingPassphraseBelowAccount_: {
            type: BooleanConstructor;
        };
        signedIn_: {
            type: BooleanConstructor;
        };
        syncDisabledByAdmin_: {
            type: BooleanConstructor;
        };
        syncSectionDisabled_: {
            type: BooleanConstructor;
        };
        showSetupCancelDialog_: {
            type: BooleanConstructor;
        };
        enterPassphraseLabel_: {
            type: StringConstructor;
        };
        existingPassphraseLabel_: {
            type: StringConstructor;
        };
        mayShowLinkedGoogleServicesSetting_: {
            type: BooleanConstructor;
        };
        personalizationCollapseExpanded_: {
            type: BooleanConstructor;
        };
    };
    accessor focusConfig: FocusConfig;
    protected accessor pageStatus_: PageStatus;
    accessor syncPrefs: SyncPrefs | null;
    protected accessor syncStatus_: SyncStatus;
    protected accessor dataEncrypted_: boolean;
    protected accessor encryptionExpanded_: boolean;
    accessor forceEncryptionExpanded: boolean;
    protected accessor existingPassphrase_: string;
    protected accessor showExistingPassphraseBelowAccount_: boolean;
    protected accessor signedIn_: boolean;
    protected accessor syncDisabledByAdmin_: boolean;
    protected accessor syncSectionDisabled_: boolean;
    protected accessor mayShowLinkedGoogleServicesSetting_: boolean;
    protected accessor personalizationCollapseExpanded_: boolean;
    protected accessor showSetupCancelDialog_: boolean;
    protected accessor enterPassphraseLabel_: TrustedHTML;
    protected accessor existingPassphraseLabel_: string;
    private metricsBrowserProxy_;
    private syncBrowserProxy_;
    private collapsibleSectionsInitialized_;
    private didAbort_;
    private setupCancelConfirmed_;
    private beforeunloadCallback_;
    private unloadCallback_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onSyncStatusChanged_;
    private computeSignedIn_;
    private computeSyncSectionDisabled_;
    private computeSyncDisabledByAdmin_;
    private onFocusConfigChange_;
    protected onSetupCancelDialogBackClick_(): void;
    protected onSetupCancelDialogConfirmClick_(): void;
    protected onSetupCancelDialogClose_(): void;
    private shouldShowSyncPage_;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    protected isStatus_(expectedPageStatus: PageStatus): boolean;
    private onNavigateToPage_;
    private onNavigateAwayFromPage_;
    /**
     * Handler for when the sync preferences are updated.
     */
    private handleSyncPrefsChanged_;
    protected onActivityControlsClick_(): void;
    protected onLinkedServicesClick_(): void;
    protected onSyncDashboardLinkClick_(): void;
    private computeDataEncrypted_;
    private computeEnterPassphraseLabel_;
    private computeExistingPassphraseLabel_;
    /**
     * Whether the encryption dropdown should be expanded by default.
     */
    private expandEncryptionIfNeeded_;
    protected onResetSyncClick_(event: Event): void;
    protected onExistingPassphraseValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onPersonalizationCollapseExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onEncryptionExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onExistingPassphraseKeypress_(e: KeyboardEvent): void;
    /**
     * Sends the user-entered existing password to re-enable sync.
     */
    protected onSubmitExistingPassphraseClick_(): void;
    private submitExistingPassphrase_;
    protected onPassphraseChanged_(e: CustomEvent<{
        didChange: boolean;
    }>): void;
    private computePageStatusAfterPassphraseChange_;
    /**
     * Called when the page status updates.
     */
    private handlePageStatusChanged_;
    private onLearnMoreClick_;
    protected shouldShowSyncAccountControl_(): boolean;
    private computeShowExistingPassphraseBelowAccount_;
    protected onSyncAdvancedClick_(): void;
    /**
     * @param e The event passed from settings-sync-account-control.
     */
    protected onSyncSetupDone_(e: CustomEvent<boolean>): void;
    /**
     * Focuses the passphrase input element if it is available and the page is
     * visible.
     */
    protected focusPassphraseInput_(): Promise<void>;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-sync-page': SettingsSyncPageElement;
    }
}
export {};
