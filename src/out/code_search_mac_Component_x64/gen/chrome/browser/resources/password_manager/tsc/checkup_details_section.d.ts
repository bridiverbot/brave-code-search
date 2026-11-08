import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './shared_style.css.js';
import './checkup_list_item.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from './router.js';
export declare class ReusedPasswordInfo {
    constructor(credentials: chrome.passwordsPrivate.PasswordUiEntry[]);
    init(): Promise<void>;
    credentials: chrome.passwordsPrivate.PasswordUiEntry[];
    title: string;
}
export interface CheckupDetailsSectionElement {
    $: {
        backButton: HTMLElement;
        description: HTMLElement;
        moreActionsMenu: CrActionMenuElement;
        menuShowPassword: HTMLButtonElement;
        menuEditPassword: HTMLButtonElement;
        menuDeletePassword: HTMLButtonElement;
        subtitle: HTMLElement;
    };
}
declare const CheckupDetailsSectionElementBase: typeof PolymerElement & (new (...args: any[]) => import("./router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface);
export declare class CheckupDetailsSectionElement extends CheckupDetailsSectionElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        pageTitle_: StringConstructor;
        pageSubtitle_: StringConstructor;
        insecurityType_: {
            type: StringConstructor;
            observer: string;
        };
        groups_: {
            type: ArrayConstructor;
        };
        allInsecureCredentials_: {
            type: ArrayConstructor;
            observer: string;
        };
        shownInsecureCredentials_: {
            type: ArrayConstructor;
            observer: string;
        };
        credentialsWithReusedPassword_: {
            type: ArrayConstructor;
        };
        mutedCompromisedCredentials_: {
            type: ArrayConstructor;
        };
        activeListItem_: {
            type: ObjectConstructor;
            value: null;
        };
        /**
         * The ids of insecure credentials for which user clicked "Change
         * Password" button
         */
        clickedChangePasswordIds_: {
            type: ObjectConstructor;
            value: () => Set<unknown>;
        };
        isMutingDisabled_: {
            type: BooleanConstructor;
            value: boolean;
        };
        passwordChangeStates_: {
            type: ObjectConstructor;
            value: () => {};
        };
    };
    private pageTitle_;
    private pageSubtitle_;
    private insecurityType_;
    private groups_;
    private allInsecureCredentials_;
    private shownInsecureCredentials_;
    private credentialsWithReusedPassword_;
    private mutedCompromisedCredentials_;
    private activeListItem_;
    private clickedChangePasswordIds_;
    private isMutingDisabled_;
    private passwordChangeStates_;
    private insecureCredentialsChangedListener_;
    private listenerId_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onStateUpdated_;
    private getPasswordChangeStateFor_;
    currentRouteChanged(route: Route, oldRoute: Route): void;
    private navigateBack_;
    private compareCredentialsByGroup_;
    private matchesInsecurityType_;
    private getCredentialsForCurrentType_;
    private updateShownCredentials_;
    private onCredentialsChanged_;
    private getInsecurityType_;
    private getDescription_;
    private isCompromisedType;
    private isReusedType;
    private onMoreActionsClick_;
    private onMenuShowPasswordClick_;
    private onMenuEditPasswordClick_;
    private onMenuDeletePasswordClick_;
    private getShowHideTitle_;
    private getMuteUnmuteLabel_;
    private onMenuMuteUnmuteClick_;
    private getCurrentGroup_;
    private onChangePasswordClick_;
    private clickedChangePassword_;
}
declare global {
    interface HTMLElementTagNameMap {
        'checkup-details-section': CheckupDetailsSectionElement;
    }
}
export {};
