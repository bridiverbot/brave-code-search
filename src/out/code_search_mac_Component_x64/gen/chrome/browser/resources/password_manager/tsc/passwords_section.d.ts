import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '/strings.m.js';
import './password_list_item.js';
import './dialogs/add_password_dialog.js';
import './dialogs/auth_timed_out_dialog.js';
import './user_utils_mixin.js';
import './notification_cards/notification_card.js';
import './notification_cards/notification_cards_browser_proxy.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { IronListElement } from 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { FocusConfig } from './focus_config.js';
import type { Route } from './router.js';
export interface PasswordsSectionElement {
    $: {
        addPasswordButton: CrButtonElement;
        descriptionLabel: HTMLElement;
        passwordsList: IronListElement;
        noPasswordsFound: HTMLElement;
        movePasswords: HTMLElement;
        importPasswords: HTMLElement;
        trustedVaultUnlock: HTMLElement;
    };
}
declare const PasswordsSectionElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("./router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("./user_utils_mixin.js").UserUtilMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface);
export declare class PasswordsSectionElement extends PasswordsSectionElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        focusConfig: {
            type: ObjectConstructor;
            observer: string;
        };
        /**
         * Password groups displayed in the UI.
         */
        groups_: {
            type: ArrayConstructor;
            value: null;
            observer: string;
        };
        /** Filter on the saved passwords and exceptions. */
        searchTerm_: {
            type: StringConstructor;
            value: string;
        };
        shownGroupsCount_: {
            type: NumberConstructor;
            value: number;
            observer: string;
        };
        showAddPasswordDialog_: BooleanConstructor;
        showAuthTimedOutDialog_: BooleanConstructor;
        movePasswordsText_: StringConstructor;
        importPasswordsText_: {
            type: StringConstructor;
            computed: string;
        };
        passwordsOnDevice_: {
            type: ArrayConstructor;
            computed: string;
        };
        showPasswordsDescription_: {
            type: BooleanConstructor;
            computed: string;
        };
        notificationCard_: {
            type: ObjectConstructor;
            value: null;
        };
        passwordSavingBlockedByPolicy_: {
            type: BooleanConstructor;
            value: boolean;
        };
        shouldShowNotificationCard_: {
            type: BooleanConstructor;
            computed: string;
        };
        /**
         * The element to return focus to, when moving from details page to
         * passwords page.
         */
        activeListItem_: {
            type: ObjectConstructor;
            value: null;
        };
    };
    focusConfig: FocusConfig;
    private groups_;
    private searchTerm_;
    private shownGroupsCount_;
    private showAddPasswordDialog_;
    private showAuthTimedOutDialog_;
    private importPasswordsText_;
    private passwordsOnDevice_;
    private showPasswordsDescription_;
    private movePasswordsText_;
    private notificationCard_;
    private passwordSavingBlockedByPolicy_;
    private shouldShowNotificationCard_;
    private activeListItem_;
    private setSavedPasswordsListener_;
    private authTimedOutListener_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    currentRouteChanged(newRoute: Route): void;
    focusFirstResult(): void;
    private hideGroupsList_;
    private groupFilter_;
    private announceSearchResults_;
    private onAddPasswordClick_;
    private onAddPasswordDialogClose_;
    private onAuthTimedOut_;
    private onAuthTimedOutDialogClose_;
    private computePasswordsOnDevice_;
    private onGroupsChanged_;
    private getMovePasswordsText_;
    private showImportPasswordsOption_;
    private showTrustedVaultUnlockOption_;
    private computeImportPasswordsText_;
    private onTrustedVaultUnlockClick_;
    private onImportPasswordsClick_;
    private onCardClosed_;
    private computeShowPasswordsDescription_;
    private showNoPasswordsFound_;
    private onPasswordDetailsShown_;
    private focusConfigChanged_;
    private computeSortFunction_;
    private computeShouldShowNotificationCard_;
}
declare global {
    interface HTMLElementTagNameMap {
        'passwords-section': PasswordsSectionElement;
    }
}
export {};
