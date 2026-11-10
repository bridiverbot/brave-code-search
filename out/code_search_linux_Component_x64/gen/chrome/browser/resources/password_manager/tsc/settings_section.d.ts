import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './cr_spinner_style.css.js';
import './dialogs/disconnect_cloud_authenticator_dialog.js';
import './dialogs/remove_actor_login_permission_dialog.js';
import './full_data_reset.js';
import './passwords_exporter.js';
import './passwords_importer.js';
import './prefs/pref_toggle_button.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import './shared_style.css.js';
import './site_favicon.js';
import './user_utils_mixin.js';
import type { CrLinkRowElement } from 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { PrefToggleButtonElement } from './prefs/pref_toggle_button.js';
import type { Route } from './router.js';
import { TrustedVaultBannerState } from './sync_browser_proxy.js';
export interface SettingsSectionElement {
    $: {
        autosigninToggle: PrefToggleButtonElement;
        blockedSitesList: HTMLElement;
        passkeyUpgradeToggle: PrefToggleButtonElement;
        passwordToggle: PrefToggleButtonElement;
        toast: CrToastElement;
        trustedVaultBanner: CrLinkRowElement;
    };
}
declare const SettingsSectionElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("./user_utils_mixin.js").UserUtilMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface) & (new (...args: any[]) => import("./router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class SettingsSectionElement extends SettingsSectionElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /** An array of blocked sites to display. */
        blockedSites_: {
            type: ArrayConstructor;
            value: () => never[];
        };
        /** An array of sites with permissions for actor login. */
        actorLoginPermissions_: {
            type: ArrayConstructor;
            value: () => never[];
        };
        isActorLoginPermissionsEnabled_: {
            type: BooleanConstructor;
            value(): boolean;
        };
        isFedCmEmbedderInitiatedLoginEnabled_: {
            type: BooleanConstructor;
            value(): boolean;
        };
        shouldShowActorLoginPermissions_: {
            type: BooleanConstructor;
            computed: string;
        };
        isAutomatedPasswordChangeVisible_: {
            type: BooleanConstructor;
            value(): boolean;
        };
        hasPasswordsToExport_: {
            type: BooleanConstructor;
            value: boolean;
        };
        hasPasskeys_: {
            type: BooleanConstructor;
            value: boolean;
        };
        credentialsEnableServicePref_: ObjectConstructor;
        passwordSavingBlockedByPolicy_: {
            type: BooleanConstructor;
            computed: string;
        };
        /** The visibility state of the trusted vault banner. */
        trustedVaultBannerState_: {
            type: ObjectConstructor;
            value: TrustedVaultBannerState;
        };
        movePasswordsLabel_: {
            type: StringConstructor;
            value: string;
        };
        canAddShortcut_: {
            type: BooleanConstructor;
            value(): boolean;
        };
        isPasswordManagerPinAvailable_: {
            type: BooleanConstructor;
            value: boolean;
        };
        isConnectedToCloudAuthenticator_: {
            type: BooleanConstructor;
            value: boolean;
        };
        isDisconnectCloudAuthenticatorInProgress_: {
            type: BooleanConstructor;
            value: boolean;
        };
        toastMessage_: {
            type: StringConstructor;
            value: string;
        };
        showDisconnectCloudAuthenticatorDialog_: {
            type: BooleanConstructor;
            value: boolean;
        };
        removeActorLoginPermissionSite_: {
            type: ObjectConstructor;
        };
        localPasswordCount_: {
            type: NumberConstructor;
            value: number;
        };
    };
    static get observers(): string[];
    private blockedSites_;
    private actorLoginPermissions_;
    private isActorLoginPermissionsEnabled_;
    private isFedCmEmbedderInitiatedLoginEnabled_;
    private shouldShowActorLoginPermissions_;
    private hasPasskeys_;
    private credentialsEnableServicePref_;
    private passwordSavingBlockedByPolicy_;
    private hasPasswordsToExport_;
    private isAutomatedPasswordChangeVisible_;
    private canAddShortcut_;
    private trustedVaultBannerState_;
    private movePasswordsLabel_;
    private isPasswordManagerPinAvailable_;
    private isConnectedToCloudAuthenticator_;
    private isDisconnectCloudAuthenticatorInProgress_;
    private toastMessage_;
    private showDisconnectCloudAuthenticatorDialog_;
    private removeActorLoginPermissionSite_;
    private localPasswordCount_;
    private setBlockedSitesListListener_;
    private setCredentialsChangedListener_;
    ready(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    private onShortcutBannerDomChanged_;
    private onAddShortcutClick_;
    /**
     * Fires an event that should delete the blocked password entry.
     */
    private onRemoveBlockedSiteClick_;
    private onRemoveActorLoginPermissionClick_;
    private onCloseRemoveActorLoginPermissionDialog_;
    private onRemoveActorLoginPermission_;
    private onTrustedVaultBannerClick_;
    private getTrustedVaultBannerTitle_;
    private getTrustedVaultBannerDescription_;
    private shouldHideTrustedVaultBanner_;
    private getAriaLabelForBlockedSite_;
    private computePasswordSavingBlockedByPolicy_;
    private computeShouldShowActorLoginPermissions_;
    private onMovePasswordsClicked_;
    private shouldShowMovePasswordsEntry_;
    private getAriaDescriptionMovePasswordsButton_;
    private updateLocalPasswordCount_;
    private updateIsPasswordManagerPinAvailable_;
    private onChangePasswordManagerPinRowClick_;
    private updateIsCloudAuthenticatorConnected_;
    private updateTrustedVaultBannerState_;
    private onDisconnectCloudAuthenticatorClick_;
    private onCloseDisconnectCloudAuthenticatorDialog_;
    private onDisconnectCloudAuthenticator_;
    private showToastForCloudAuthenticatorDisconnected_;
    private getAriaDescriptionForCloudAuthenticatorButton_;
    private showToastForPasswordChange_;
    private onAutomatedPasswordChangeClick_;
    private getAriaLabelForAutomatedPasswordChange_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-section': SettingsSectionElement;
    }
}
export {};
