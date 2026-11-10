/**
 * @fileoverview
 * 'settings-sync-account-section' is the settings page containing sign-in
 * settings.
 */
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '/shared/settings/people_page/profile_info_browser_proxy.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { StoredAccount, SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
import { ChromeSigninAccessPoint } from '/shared/settings/people_page/sync_browser_proxy.js';
import type { Route } from '../router.js';
export interface SettingsSyncAccountControlElement {
    $: {
        signIn: CrButtonElement;
    };
}
declare enum PromoType {
    SIGNIN = "signin",
    SYNC = "sync"
}
declare const SettingsSyncAccountControlElementBase: typeof CrLitElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsSyncAccountControlElement extends SettingsSyncAccountControlElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The current sync status, supplied by parent element.
         */
        syncStatus: {
            type: ObjectConstructor;
        };
        promoLabelWithAccount: {
            type: StringConstructor;
        };
        promoLabelWithNoAccount: {
            type: StringConstructor;
        };
        promoSecondaryLabelWithAccount: {
            type: StringConstructor;
        };
        promoSecondaryLabelWithNoAccount: {
            type: StringConstructor;
        };
        storedAccounts_: {
            type: ArrayConstructor;
        };
        profileAvatarURL_: {
            type: StringConstructor;
        };
        shownAccount_: {
            type: ObjectConstructor;
        };
        embeddedInSubpage: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hideBanner: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        accessPoint: {
            type: NumberConstructor;
            reflect: boolean;
        };
        shouldShowAvatarRow_: {
            type: BooleanConstructor;
        };
        subLabel_: {
            type: StringConstructor;
        };
        showSetupButtons_: {
            type: BooleanConstructor;
        };
        promoType_: {
            type: StringConstructor;
            reflect: boolean;
        };
        signinAllowedOnNextStartupPref_: {
            type: ObjectConstructor;
        };
        /**
         * Proxy variable for syncStatus.signedInState to shield observer from
         * being triggered multiple times whenever syncStatus changes.
         */
        syncing_: {
            type: BooleanConstructor;
        };
        shouldShowSigninPausedButtons_: {
            type: BooleanConstructor;
        };
        shouldShowSignInPromo_: {
            type: BooleanConstructor;
        };
    };
    accessor syncStatus: SyncStatus;
    accessor promoLabelWithAccount: string;
    accessor promoLabelWithNoAccount: string;
    accessor promoSecondaryLabelWithAccount: string;
    accessor promoSecondaryLabelWithNoAccount: string;
    protected accessor syncing_: boolean;
    protected accessor storedAccounts_: StoredAccount[];
    protected accessor profileAvatarURL_: string;
    protected accessor shownAccount_: StoredAccount | null;
    accessor embeddedInSubpage: boolean;
    accessor hideBanner: boolean;
    accessor accessPoint: ChromeSigninAccessPoint;
    protected accessor shouldShowAvatarRow_: boolean;
    protected accessor subLabel_: string;
    protected accessor showSetupButtons_: boolean;
    protected accessor signinAllowedOnNextStartupPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    protected accessor shouldShowSigninPausedButtons_: boolean;
    private signinPausedImpressionRecorded_;
    protected accessor shouldShowSignInPromo_: boolean;
    private signinOfferedImpressionRecorded_;
    private syncBrowserProxy_;
    protected accessor promoType_: PromoType;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    currentRouteChanged(_newRoute: Route, _oldRoute?: Route): void;
    /**
     * Records Signin_Impression_FromSettings user action.
     */
    private recordImpressionUserActions_;
    private onSyncChanged_;
    protected getLabel_(labelWithAccount: string, labelWithNoAccount: string): string;
    private computeSubLabel_;
    protected getAccountLabel_(): string;
    protected shouldHideSubtitleWithAccountInfoText_(): boolean;
    protected getAvatarSubtitleLabel_(): string;
    protected getAccountAwareSigninButtonLabel_(): string;
    protected getProfileImageSrc_(image: string | null, profileAvatarURL: string): string;
    protected getAccountImageSrc_(image: string | null): string;
    /**
     * @return The CSS class of the sync icon.
     */
    protected getSyncIconStyle_(): string;
    /**
     * Returned value must match one of iron-icon's settings:(*) icon name.
     */
    protected getSyncIcon_(): string;
    protected getAvatarRowTitle_(): string;
    /**
     * Determines if the signout button should be hidden.
     */
    protected shouldHideSignoutButton_(): boolean;
    /**
     * Determines if the remove account button should be hidden.
     */
    protected shouldHideRemoveAccountButton_(): boolean;
    /**
     * Determines if the sync button should be disabled in response to
     * either a first setup flow or chrome sign-in being disabled.
     */
    protected shouldDisableSyncButton_(): boolean;
    /**
     * Determines whether the banner should be hidden, in the case where the user
     * has sync enabled or if the property to hide the banner was explicitly set.
     */
    protected shouldHideBanner_(): boolean;
    protected shouldShowTurnOffButton_(): boolean;
    protected getTurnOffSyncLabel_(): string;
    protected shouldShowErrorActionButton_(): boolean;
    protected shouldShowAccountAwareSigninButton_(): boolean;
    protected shouldAllowAccountSwitch_(): boolean;
    private handleStoredAccounts_;
    private handleUpdateAvatar_;
    private computeShouldShowAvatarRow_;
    protected onErrorButtonClick_(): void;
    protected onSigninClick_(): void;
    protected onSignoutClick_(): void;
    protected onDropdownClose_(): void;
    protected onSyncButtonClick_(): void;
    protected onTurnOffButtonClick_(): void;
    protected onMenuButtonClick_(): void;
    private onShouldShowAvatarRowChange_;
    protected onAccountClick_(e: Event): void;
    private onShownAccountShouldChange_;
    private computeShowSetupButtons_;
    protected onSetupCancelClick_(): void;
    protected onSetupConfirmClick_(): void;
    private computeShouldShowSigninPausedButtons_;
    private computeShouldShowSignInPromo_;
    private maybeRecordSignInOffered_;
    private maybeRecordSigninPendingOffered_;
    protected isSyncing_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-sync-account-control': SettingsSyncAccountControlElement;
    }
}
export {};
