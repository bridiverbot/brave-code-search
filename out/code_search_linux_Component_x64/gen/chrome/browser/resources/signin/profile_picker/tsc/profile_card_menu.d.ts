import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ProfileState } from './manage_profiles_browser_proxy.js';
export interface Statistics {
    BrowsingHistory: number;
    Passwords: number;
    Bookmarks: number;
    Autofill: number;
}
/**
 * This is the data structure sent back and forth between C++ and JS.
 */
export interface StatisticsResult {
    profilePath: string;
    statistics: Statistics;
}
/**
 * Profile statistics data types.
 */
declare enum ProfileStatistics {
    BROWSING_HISTORY = "BrowsingHistory",
    PASSWORDS = "Passwords",
    BOOKMARKS = "Bookmarks",
    AUTOFILL = "Autofill"
}
export interface ProfileCardMenuElement {
    $: {
        actionMenu: CrActionMenuElement;
        moreActionsButton: HTMLElement;
        removeConfirmationDialog: CrDialogElement;
    };
}
declare const ProfileCardMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class ProfileCardMenuElement extends ProfileCardMenuElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        profileState: {
            type: ObjectConstructor;
        };
        /**
         * Results of profile statistics, keyed by the suffix of the corresponding
         * data type, as reported by the C++ side.
         */
        statistics_: {
            type: ObjectConstructor;
        };
        /**
         * List of selected data types.
         */
        profileStatistics_: {
            type: ArrayConstructor;
        };
        moreActionsButtonAriaLabel_: {
            type: StringConstructor;
        };
        removeWarningText_: {
            type: StringConstructor;
        };
        removeWarningTitle_: {
            type: StringConstructor;
        };
    };
    accessor profileState: ProfileState;
    private accessor statistics_;
    protected accessor moreActionsButtonAriaLabel_: string;
    protected accessor profileStatistics_: ProfileStatistics[];
    protected accessor removeWarningText_: string;
    protected accessor removeWarningTitle_: string;
    private manageProfilesBrowserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeMoreActionsButtonAriaLabel_;
    private computeRemoveWarningText_;
    private computeRemoveWarningTitle_;
    protected onMoreActionsButtonClick_(e: Event): void;
    protected onRemoveButtonClick_(e: Event): void;
    private handleProfileStatsReceived_;
    protected getProfileStatisticText_(dataType: ProfileStatistics): string;
    protected getProfileStatisticCount_(dataType: keyof Statistics): string;
    protected onRemoveConfirmationClick_(e: Event): void;
    protected onRemoveCancelClick_(): void;
    /**
     * Ensure any menu is closed on profile list updated.
     */
    private handleProfilesUpdated_;
    /**
     * Closes the remove confirmation dialog when the profile is removed.
     */
    private handleProfileRemoved_;
    protected onCustomizeButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'profile-card-menu': ProfileCardMenuElement;
    }
}
export {};
