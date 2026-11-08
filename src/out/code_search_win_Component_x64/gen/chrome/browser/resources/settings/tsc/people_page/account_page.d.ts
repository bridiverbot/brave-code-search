/**
 * @fileoverview
 * 'settings-account-page' is the settings subpage containing controls to
 * manage features related to the user's primary account, such as sync
 * controls and advanced sync settings.
 */
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import './sync_account_control.js';
import './sync_controls.js';
import './sync_encryption_options.js';
import '../settings_page/settings_subpage.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { SyncPrefs, SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
declare const SettingsAccountPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsAccountPageElement extends SettingsAccountPageElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The current sync status.
         */
        syncStatus_: {
            type: ObjectConstructor;
        };
        /**
         * The current sync preferences, supplied by SyncBrowserProxy.
         */
        syncPrefs: {
            type: ObjectConstructor;
        };
        mayShowLinkedGoogleServicesSetting_: {
            type: BooleanConstructor;
        };
        personalizationCollapseExpanded_: {
            type: BooleanConstructor;
        };
        existingPassphraseLabel_: {
            type: StringConstructor;
        };
        dataEncrypted_: {
            type: BooleanConstructor;
        };
        encryptionExpanded_: {
            type: BooleanConstructor;
        };
    };
    private syncBrowserProxy_;
    protected accessor syncStatus_: SyncStatus | null;
    accessor syncPrefs: SyncPrefs | null;
    protected accessor mayShowLinkedGoogleServicesSetting_: boolean;
    protected accessor personalizationCollapseExpanded_: boolean;
    protected accessor dataEncrypted_: boolean;
    protected accessor encryptionExpanded_: boolean;
    protected accessor existingPassphraseLabel_: string;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private onSyncStatusChanged_;
    /**
     * Handler for when the sync preferences are updated.
     */
    private onSyncPrefsChanged_;
    protected onSyncEncryptionOptionsSyncPrefsChanged_(e: CustomEvent<{
        value: SyncPrefs;
    }>): void;
    protected onPersonalizationCollapseExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onEncryptionExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onActivityControlsClick_(): void;
    protected onLinkedServicesClick_(): void;
    protected onSyncDashboardLinkClick_(): void;
    protected onResetSyncClick_(event: Event): void;
    protected onManageGoogleAccountClick_(): void;
    private computeExistingPassphraseLabel_;
    private computeDataEncrypted_;
    private expandEncryptionIfNeeded_;
    protected shouldShowPageContents_(): boolean | null;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-account-page': SettingsAccountPageElement;
    }
}
export {};
