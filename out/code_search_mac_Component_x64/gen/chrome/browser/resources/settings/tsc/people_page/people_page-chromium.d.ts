/**
 * @fileoverview
 * 'settings-people-page' is the settings page containing sign-in settings.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import '../controls/settings_toggle_button.js';
import './sync_account_control.js';
import '../icons.html.js';
import '../settings_page/settings_section.js';
import type { StoredAccount, SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
export interface SettingsPeoplePageElement {
    $: {
        importDataDialogTrigger: HTMLElement;
        toast: CrToastElement;
    };
}
declare const SettingsPeoplePageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsPeoplePageElement extends SettingsPeoplePageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * This flag is used to conditionally show a set of new sign-in UIs to the
         * profiles that have been migrated to be consistent with the web
         * sign-ins.
         * TODO(tangltom): In the future when all profiles are completely
         * migrated, this should be removed, and UIs hidden behind it should
         * become default.
         */
        signinAllowed_: {
            type: BooleanConstructor;
        };
        /**
         * This property stores whether the profile is a Dasherless profiles,
         * which is associated with a non-Dasher account. Some UIs related to
         * sign in and sync service will be different because they are not
         * available for these profiles.
         */
        isDasherlessProfile_: {
            type: BooleanConstructor;
        };
        /**
         * Stored accounts to the system, supplied by SyncBrowserProxy.
         */
        storedAccounts: {
            type: ArrayConstructor;
        };
        /**
         * The current sync status, supplied by SyncBrowserProxy.
         */
        syncStatus: {
            type: ObjectConstructor;
        };
        /**
         * Authentication token provided by settings-lock-screen.
         */
        authToken_: {
            type: StringConstructor;
        };
        /**
         * The currently selected profile icon URL. May be a data URL.
         */
        profileIconUrl_: {
            type: StringConstructor;
        };
        /**
         * Whether the profile row is clickable. The behavior depends on the
         * platform.
         */
        isProfileActionable_: {
            type: BooleanConstructor;
        };
        /**
         * The current profile name.
         */
        profileName_: {
            type: StringConstructor;
        };
        primaryAccountName_: {
            type: StringConstructor;
        };
        primaryAccountEmail_: {
            type: StringConstructor;
        };
        primaryAccountIconUrl_: {
            type: StringConstructor;
        };
        replaceSyncPromosWithSignInPromos_: {
            type: BooleanConstructor;
        };
        shouldShowGoogleAccount_: {
            type: BooleanConstructor;
        };
        showImportDataDialog_: {
            type: BooleanConstructor;
        };
        showSignoutDialog_: {
            type: BooleanConstructor;
        };
    };
    protected accessor signinAllowed_: boolean;
    protected accessor isDasherlessProfile_: boolean;
    accessor syncStatus: SyncStatus | null;
    protected accessor authToken_: string;
    protected accessor profileIconUrl_: string;
    protected accessor isProfileActionable_: boolean;
    protected accessor profileName_: string;
    protected accessor replaceSyncPromosWithSignInPromos_: boolean;
    protected accessor primaryAccountName_: string;
    protected accessor primaryAccountEmail_: string;
    protected accessor primaryAccountIconUrl_: string;
    accessor storedAccounts: StoredAccount[] | null;
    protected accessor shouldShowGoogleAccount_: boolean;
    protected accessor showImportDataDialog_: boolean;
    protected accessor showSignoutDialog_: boolean;
    private syncBrowserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    /**
     * Handler for when the profile's icon and name is updated.
     */
    private handleProfileInfo_;
    /**
     * Handler for when the sync state is pushed from the browser.
     */
    private handleSyncStatus_;
    private computeShouldShowGoogleAccount_;
    protected onProfileClick_(): void;
    protected onDisconnectDialogClose_(): void;
    protected onSyncClick_(): void;
    protected onAccountClick_(): void;
    protected onGoogleServicesClick_(): void;
    protected shouldLinkToAccountSettingsPage_(): boolean;
    protected onImportDataClick_(): void;
    protected onImportDataDialogClose_(): void;
    protected shouldLinkToProfileRow_(): boolean;
    protected shouldShowSyncAccountControl_(): boolean;
    private handleStoredAccounts_;
    /**
     * Open URL for managing your Google Account.
     */
    protected onGoogleAccountClick_(): void;
    /**
     * @return A CSS image-set for multiple scale factors.
     */
    protected getIconImageSet_(iconUrl?: string): string;
    protected isSyncing_(): boolean;
    protected getSyncAndNonPersonalizedServicesSubtext_(): string;
    protected shouldHideSyncSetupLinkRow_(): boolean;
    protected getAccountRowSubtitle_(): string;
    getFocusConfig(): Map<any, any>;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-people-page': SettingsPeoplePageElement;
    }
}
export {};
