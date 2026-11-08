import '//resources/cr_components/localized_link/localized_link.js';
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/cr_elements/policy/cr_policy_indicator.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { SyncPrefs, SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
import type { Route } from '../router.js';
/**
 * @fileoverview
 * 'settings-sync-controls' contains all sync data type controls.
 */
declare const SettingsSyncControlsElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export declare class SettingsSyncControlsElement extends SettingsSyncControlsElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        hidden: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * The current sync preferences, supplied by SyncBrowserProxy.
         */
        syncPrefs: {
            type: ObjectConstructor;
        };
        /**
         * The current sync status, supplied by the parent.
         */
        syncStatus: {
            type: ObjectConstructor;
        };
        /**
         * Communicates to the user that the toggles are disabled because sync is
         * disabled by their administrator.
         */
        showSyncDisabledInformation: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Returns whether this element is currently displayed on the account
         * settings page. True when `replaceSyncPromosWithSignInPromos` is enabled
         * and the user navigates to the account page.
         */
        isAccountSettingsPage_: {
            type: BooleanConstructor;
        };
        showBatchUploadPromo_: {
            type: BooleanConstructor;
        };
        batchUploadPromoHTML_: {
            type: StringConstructor;
        };
        isAiChatSyncEnabled_: {
            type: BooleanConstructor;
        };
        aiChatCheckboxLabel_: {
            type: StringConstructor;
        };
    };
    accessor hidden: boolean;
    accessor syncPrefs: SyncPrefs | undefined;
    accessor syncStatus: SyncStatus | null;
    private syncBrowserProxy_;
    /**
     * Caches the individually selected synced data types. This is used to
     * be able to restore the selections after checking and unchecking Sync All.
     */
    private cachedSyncPrefs_;
    accessor showSyncDisabledInformation: boolean;
    protected accessor isAccountSettingsPage_: boolean;
    protected accessor showBatchUploadPromo_: boolean;
    protected accessor batchUploadPromoHTML_: TrustedHTML;
    protected accessor isAiChatSyncEnabled_: boolean;
    protected accessor aiChatCheckboxLabel_: string;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Handler for when the sync preferences are updated.
     */
    private handleSyncPrefsChanged_;
    private batchUploadPromoLocalDataCountChanged_;
    protected shouldShowBatchUploadPromo_(): boolean;
    protected onBatchUploadPromoClick_(event: MouseEvent): void;
    /**
     * @return Computed binding returning the selected sync data radio button.
     */
    protected selectedSyncDataRadio_(): string;
    /**
     * Called when the sync data radio button selection changes.
     */
    protected onSyncDataRadioSelectedChanged_(event: CustomEvent<{
        value: string;
    }>): void;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    protected mergedHistoryTabsToggleDisabled_(): boolean;
    protected mergedHistoryTabsTogglePolicyIndicatorShown_(): boolean;
    protected mergedHistoryTabsToggleChecked_(): boolean;
    protected onMergedHistoryTabsToggleChange_(event: Event): void;
    private handleSyncAllDataTypesChanged_;
    /**
     * Handler for when any sync data type checkbox is changed.
     */
    protected onSingleSyncDataTypeChange_(event?: Event): void;
    protected disableTypeCheckBox_(dataTypeManaged: boolean | undefined | null): boolean;
    protected showPolicyIndicator_(dataTypeManaged: boolean | undefined | null): boolean;
    private computeShowSyncDisabledInformation_;
    private syncStatusChanged_;
    /**
     * @return Whether the sync controls are hidden.
     */
    private syncControlsHidden_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-sync-controls': SettingsSyncControlsElement;
    }
}
export {};
