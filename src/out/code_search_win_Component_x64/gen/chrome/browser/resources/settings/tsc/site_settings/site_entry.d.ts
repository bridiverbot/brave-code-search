/**
 * @fileoverview
 * 'site-entry' is an element representing a single eTLD+1 site entity.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import './cr_lazy_render.js';
import type { CrCollapseElement } from 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { SortMethod } from './constants.js';
import type { CrLazyRenderElement } from './cr_lazy_render.js';
import type { SiteGroup } from './site_settings_browser_proxy.js';
export interface SiteEntryElement {
    $: {
        expandIcon: CrIconButtonElement;
        collapseParent: HTMLElement;
        cookies: HTMLElement;
        rwsMembership: HTMLElement;
        displayName: HTMLElement;
        originList: CrLazyRenderElement<CrCollapseElement>;
        toggleButton: HTMLElement;
        extensionIdDescription: HTMLElement;
    };
}
declare const SiteEntryElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("../base_mixin.js").BaseMixinInterface) & (new (...args: any[]) => import("./focus_row_mixin.js").FocusRowMixinInterface);
export declare class SiteEntryElement extends SiteEntryElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * An object representing a group of sites with the same eTLD+1.
         */
        siteGroup: {
            type: ObjectConstructor;
            observer: string;
        };
        /**
         * The name to display beside the icon. If grouped_() is true, it will be
         * the eTLD+1 for all the origins. For Isolated Web Apps instead of
         * displaying the origin, the short name of the app will be displayed.
         * Otherwise, it will return the host.
         */
        displayName_: StringConstructor;
        /**
         * The string to display when there is a non-zero number of cookies.
         */
        cookieString_: StringConstructor;
        /**
         * The related website set info for a site including owner and members
         * count.
         */
        rwsMembershipLabel_: {
            type: StringConstructor;
            value: string;
        };
        /**
         * Mock preference used to power managed policy icon for related website
         * sets.
         */
        rwsEnterprisePref_: ObjectConstructor;
        /**
         * Whether site entry is shown with a related website set filter search.
         */
        isRwsFiltered: BooleanConstructor;
        /**
         * The position of this site-entry in its parent list.
         */
        listIndex: {
            type: NumberConstructor;
            value: number;
        };
        /**
         * The string to display showing the overall usage of this site-entry.
         */
        overallUsageString_: StringConstructor;
        /**
         * An array containing the strings to display showing the individual disk
         * usage for each origin in |siteGroup|.
         */
        originUsages_: {
            type: ArrayConstructor;
            value(): never[];
        };
        /**
         * An array containing the strings to display showing the individual
         * cookies number for each origin in |siteGroup|.
         */
        cookiesNum_: {
            type: ArrayConstructor;
            value(): never[];
        };
        /**
         * The selected sort method.
         */
        sortMethod: {
            type: StringConstructor;
            observer: string;
        };
    };
    static get observers(): string[];
    siteGroup: SiteGroup;
    private displayName_;
    private cookieString_;
    private rwsMembershipLabel_;
    isRwsFiltered: boolean;
    listIndex: number;
    private overallUsageString_;
    private originUsages_;
    private cookiesNum_;
    sortMethod?: SortMethod;
    private rwsEnterprisePref_;
    private button_;
    private eventTracker_;
    disconnectedCallback(): void;
    private onButtonKeydown_;
    /**
     * Whether the list of origins displayed in this site-entry is a group of
     * eTLD+1 origins or not.
     * @param siteGroup The eTLD+1 group of origins.
     */
    private grouped_;
    /**
     * Returns a user-friendly name for the siteGroup.
     * @param siteGroup The group of origins.
     * @return The user-friendly name.
     */
    private siteGroupRepresentation_;
    /**
     * @param siteGroup The eTLD+1 group of origins.
     */
    private onSiteGroupChanged_;
    /**
     * Returns any non-HTTPS scheme/protocol for the siteGroup that only contains
     * one origin. Otherwise, returns a empty string.
     * @param siteGroup The eTLD+1 group of origins.
     * @return The scheme if non-HTTPS, or empty string if HTTPS.
     */
    private siteGroupScheme_;
    /**
     * Returns any non-HTTPS scheme/protocol for the origin. Otherwise, returns
     * an empty string.
     * @return The scheme if non-HTTPS, or empty string if HTTPS.
     */
    private originScheme_;
    /**
     * Get an appropriate favicon that represents this group of eTLD+1 sites as a
     * whole.
     * @param siteGroup The eTLD+1 group of origins.
     * @return URL that is used for fetching the favicon
     */
    private getSiteGroupIcon_;
    /**
     * Calculates the amount of disk storage used by the given eTLD+1.
     * Also updates the corresponding display strings.
     * @param siteGroup The eTLD+1 group of origins.
     */
    private calculateUsageInfo_;
    private isRwsMember_;
    /**
     * Evaluates whether the three dot menu should be shown for the site entry.
     * @returns True if site group is a related website set member and filter by
     * related website set owner is not applied.
     */
    private shouldShowOverflowMenu;
    /**
     * Get display string for number of cookies.
     */
    private getCookieNumString_;
    /**
     * Updates the display string for RWS information of owner and member count.
     * @param rwsNumMembers The number of members in the related website set.
     * @param rwsOwner The eTLD+1 for the related website set owner.
     */
    private updateRwsMembershipLabel_;
    /**
     * Evaluates whether the policy icon should be shown.
     * @returns True when `this.siteGroup.rwsEnterpriseManaged` is true,
     * otherwise false.
     */
    private shouldShowPolicyPrefIndicator_;
    /**
     * Updates `rwsEnterprisePref_` based on `siteGroup.rwsEnterpriseManaged`.
     */
    private updatePolicyPref_;
    private updateFocus_;
    /**
     * Array binding for the |originUsages_| array for use in the HTML.
     * @param change The change record for the array.
     * @param index The index of the array item.
     */
    private originUsagesItem_;
    /**
     * Array binding for the |cookiesNum_| array for use in the HTML.
     * @param change The change record for the array.
     * @param index The index of the array item.
     */
    private originCookiesItem_;
    /**
     * Navigates to the corresponding Site Details page for the given origin.
     * @param origin The origin to navigate to the Site Details page for it.
     */
    private navigateToSiteDetails_;
    /**
     * A handler for selecting a site (by clicking on the origin).
     */
    private onOriginClick_;
    /**
     * A handler for clicking on a site-entry heading. This will either show a
     * list of origins or directly navigates to Site Details if there is only one.
     */
    private onSiteEntryClick_;
    /**
     * Toggles open and closed the list of origins if there is more than one.
     */
    private toggleCollapsible_;
    /**
     * Fires a custom event when the menu button is clicked. Sends the details
     * of the site entry item and where the menu should appear.
     */
    private showOverflowMenu_;
    private onRemove_;
    /**
     * Returns the correct class to apply depending on this site-entry's position
     * in a list.
     */
    private getClassForIndex_;
    private getSubpageLabel_;
    private getOriginSubpageLabel_;
    private getRemoveOriginButtonTitle_;
    private getMoreActionsLabel_;
    /**
     * Update the order and data display text for origins.
     */
    private updateOrigins_;
    /**
     * Sort functions for sorting origins based on selected method.
     */
    private sortFunction_;
    /**
     * Get extension id description string for an extension |siteGroup|.
     */
    private extensionIdDescription_;
    /**
     * Check if the given |siteGroup| is an extension.
     */
    private isExtension_;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-entry': SiteEntryElement;
    }
}
export {};
