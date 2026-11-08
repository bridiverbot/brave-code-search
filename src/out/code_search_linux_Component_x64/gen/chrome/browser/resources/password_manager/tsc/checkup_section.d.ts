import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './cr_spinner_style.css.js';
import './shared_style.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrLinkRowElement } from 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { FocusConfig } from './focus_config.js';
import type { Route } from './router.js';
export interface CheckupSectionElement {
    $: {
        checkupResult: HTMLElement;
        checkupStatusLabel: HTMLElement;
        checkupStatusSubLabel: HTMLElement;
        refreshButton: CrIconButtonElement;
        retryButton: CrButtonElement;
        spinner: HTMLElement;
        compromisedRow: CrLinkRowElement;
        reusedRow: CrLinkRowElement;
        weakRow: CrLinkRowElement;
    };
}
declare const CheckupSectionElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("./router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("./user_utils_mixin.js").UserUtilMixinInterface);
export declare class CheckupSectionElement extends CheckupSectionElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        focusConfig: {
            type: ObjectConstructor;
            observer: string;
        };
        /**
         * The number of checked passwords as a formatted string.
         */
        checkedPasswordsText_: StringConstructor;
        /**
         * The number of compromised passwords as a formatted string.
         */
        compromisedPasswordsText_: StringConstructor;
        /**
         * The number of weak passwords as a formatted string.
         */
        reusedPasswordsText_: StringConstructor;
        /**
         * The number of weak passwords as a formatted string.
         */
        weakPasswordsText_: StringConstructor;
        /**
         * Suggested action to take upon compromised passwords discovery.
         */
        compromisedPasswordsSuggestion_: StringConstructor;
        /**
         * The status indicates progress and affects banner, title and icon.
         */
        status_: {
            type: ObjectConstructor;
            observer: string;
        };
        compromisedPasswords_: {
            type: ArrayConstructor;
            observer: string;
        };
        reusedPasswords_: {
            type: ArrayConstructor;
            observer: string;
        };
        weakPasswords_: {
            type: ArrayConstructor;
            observer: string;
        };
        isCheckRunning_: {
            type: BooleanConstructor;
            computed: string;
        };
        isCheckSuccessful_: {
            type: BooleanConstructor;
            computed: string;
        };
        bannerImage_: {
            type: ArrayConstructor;
            value: string;
            computed: string;
        };
        passwordCount_: {
            type: NumberConstructor;
            value: number;
            observer: string;
        };
    };
    focusConfig: FocusConfig;
    private checkedPasswordsText_;
    private compromisedPasswordsText_;
    private reusedPasswordsText_;
    private weakPasswordsText_;
    private compromisedPasswordsSuggestion_;
    private status_;
    private compromisedPasswords_;
    private weakPasswords_;
    private isCheckRunning_;
    private isCheckSuccessful_;
    private bannerImage_;
    private reusedPasswords_;
    private didCheckAutomatically_;
    private passwordCount_;
    private statusChangedListener_;
    private insecureCredentialsChangedListener_;
    private setSavedPasswordsListener_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    currentRouteChanged(route: Route): void;
    private onStatusChanged_;
    private updateCheckedPasswordsText_;
    private onCompromisedPasswordsChanged_;
    private onReusedPasswordsChanged_;
    private onWeakPasswordsChanged_;
    /**
     * @return true iff a check is running right according to the given |status|.
     */
    private computeIsCheckRunning_;
    private computeIsCheckSuccessful_;
    private didCompromiseCheckFail_;
    private showRetryButton_;
    private showCheckButton_;
    /**
     * Starts/Restarts bulk password check.
     */
    private onPasswordCheckButtonClick_;
    private computeBannerImage_;
    private getIcon_;
    private hasAnyIssues_;
    private hasIssues_;
    private getCompromisedSectionLabel_;
    private getCompromisedSectionSublabel_;
    private getReusedSectionSublabel_;
    private getWeakSectionSublabel_;
    private onCompromisedClick_;
    private onReusedClick_;
    private onWeakClick_;
    private showCheckupSublabel_;
    private getCheckupSublabelValue_;
    private onCheckupStatusSubLabelClick_;
    private showCheckupResult_;
    private focusConfigChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'checkup-section': CheckupSectionElement;
    }
}
export {};
