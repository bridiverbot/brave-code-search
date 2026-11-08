/**
 * @fileoverview
 * 'all-sites' is the polymer element for showing the list of all sites under
 * Site Settings.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import '/shared/settings/md_select.css.js';
import '../settings_shared.css.js';
import '../settings_page/settings_subpage.js';
import './all_sites_icons.html.js';
import './clear_storage_dialog_shared.css.js';
import './cr_lazy_render.js';
import './site_entry.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { IronListElement } from 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from '../router.js';
import { SortMethod } from './constants.js';
import type { CrLazyRenderElement } from './cr_lazy_render.js';
import type { SiteGroup } from './site_settings_browser_proxy.js';
interface ActionMenuModel {
    actionScope: string;
    index: number;
    item: SiteGroup;
    origin: string;
    isPartitioned: boolean;
    path: string;
    target: HTMLElement;
}
type OpenMenuEvent = CustomEvent<ActionMenuModel>;
type RemoveSiteEvent = CustomEvent<ActionMenuModel>;
interface SelectedItem {
    item: SiteGroup;
    index: number;
}
declare global {
    interface HTMLElementEventMap {
        'open-menu': OpenMenuEvent;
        'remove-site': RemoveSiteEvent;
        'site-entry-selected': CustomEvent<SelectedItem>;
    }
}
export interface AllSitesElement {
    $: {
        allSitesList: IronListElement;
        clearAllButton: HTMLElement;
        clearLabel: HTMLElement;
        confirmClearAllData: CrLazyRenderElement<CrDialogElement>;
        confirmRemoveSite: CrLazyRenderElement<CrDialogElement>;
        listContainer: HTMLElement;
        menu: CrLazyRenderElement<CrActionMenuElement>;
        sortMethod: HTMLSelectElement;
    };
}
declare const AllSitesElementBase: typeof PolymerElement & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("../global_scroll_target_mixin.js").GlobalScrollTargetMixinInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class AllSitesElement extends AllSitesElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * Map containing sites to display in the widget, grouped into their
         * group names.
         */
        siteGroupMap: {
            type: ObjectConstructor;
            value(): Map<any, any>;
        };
        /**
         * Filtered site group list.
         */
        filteredList_: {
            type: ArrayConstructor;
        };
        /**
         * Needed by GlobalScrollTargetMixin.
         */
        subpageRoute: {
            type: ObjectConstructor;
            value: Route;
            readOnly: boolean;
        };
        /**
         * The search query entered into the All Sites search textbox. Used to
         * filter the All Sites list.
         */
        filter: {
            type: StringConstructor;
            value: string;
            observer: string;
        };
        /**
         * All possible sort methods.
         */
        sortMethodEnum_: {
            type: ObjectConstructor;
            value: typeof SortMethod;
            readOnly: boolean;
        };
        /**
         * Stores the last selected item in the All Sites list.
         */
        selectedItem_: ObjectConstructor;
        /**
         * Used to track the last-focused element across rows for the
         * FocusRowMixin.
         */
        lastFocused_: ObjectConstructor;
        /**
         * Used to track whether the list of row items has been blurred for the
         * FocusRowMixin.
         */
        listBlurred_: BooleanConstructor;
        actionMenuModel_: ObjectConstructor;
        /**
         * Used to determine if user is attempting to clear all site data
         * rather than a single site or origin's data.
         */
        clearAllData_: BooleanConstructor;
        /**
         * The selected sort method.
         */
        sortMethod_: StringConstructor;
        /**
         * The total usage of all sites for this profile.
         */
        totalUsage_: {
            type: StringConstructor;
            value: string;
        };
    };
    siteGroupMap: Map<string, SiteGroup>;
    private filteredList_;
    subpageRoute: Route;
    filter: string;
    private selectedItem_;
    private lastFocused_;
    private listBlurred_;
    private actionMenuModel_;
    private clearAllData_;
    private sortMethod_?;
    private totalUsage_;
    private metricsBrowserProxy;
    ready(): void;
    connectedCallback(): void;
    /**
     * Reload the site list when the all sites page is visited.
     *
     * RouteObserverBehavior
     */
    currentRouteChanged(currentRoute: Route, oldRoute?: Route): void;
    /**
     * Retrieves a list of all known sites with site details.
     */
    private populateList_;
    /**
     * Integrate sites using storage into the existing sites map, as there
     * may be overlap between the existing sites.
     * @param list The list of sites using storage.
     */
    onStorageListFetched(list: SiteGroup[]): void;
    /**
     * Update the total usage by all sites for this profile after updates
     * to the list
     */
    private updateTotalUsage_;
    /**
     * Filters the all sites list with the given search query text.
     * @param siteGroupMap The map of sites to filter.
     * @param searchQuery The filter text.
     */
    private filterPopulatedList_;
    /**
     * Sorts the given SiteGroup list with the currently selected sort method.
     * @param siteGroupList The list of sites to sort.
     */
    private sortSiteGroupList_;
    /**
     * Comparator used to sort SiteGroups by the amount of engagement the user has
     * with the origins listed inside it. Note only the maximum engagement is used
     * for each SiteGroup (as opposed to the sum) in order to prevent domains with
     * higher numbers of origins from always floating to the top of the list.
     */
    private mostVisitedComparator_;
    /**
     * Comparator used to sort SiteGroups by the amount of storage they use. Note
     * this sorts in descending order.
     */
    private storageComparator_;
    /**
     * Comparator used to sort SiteGroups by their eTLD+1 name (domain).
     */
    private nameComparator_;
    /**
     * Called when the user chooses a different sort method to the default.
     */
    private onSortMethodChanged_;
    /**
     * Forces the all sites list to update its list of items, taking into account
     * the search query and the sort method, then re-renders it.
     */
    private forceListUpdate_;
    forceListUpdateForTesting(): void;
    /**
     * @return Whether the |siteGroupMap| is empty.
     */
    private siteGroupMapEmpty_;
    /**
     * @return Whether the |filteredList_| is empty due to searching.
     */
    private noSearchResultFound_;
    /**
     * Focus on previously selected entry.
     */
    private focusOnLastSelectedEntry_;
    /**
     * Open the overflow menu and ensure that the item is visible in the scroll
     * pane when its menu is opened (it is possible to open off-screen items using
     * keyboard shortcuts).
     */
    private onOpenMenu_;
    private shouldShowClearAllButton_;
    private hasFilteredRwsSites_;
    private onShowRelatedSites_;
    private onRemoveSite_;
    private onRemove_;
    private generatePlaceholderOrigin_;
    private onConfirmRemoveSite_;
    /**
     * Checks if a filter is applied.
     * @return True if a filter is applied.
     */
    private isFiltered_;
    /**
     * Checks if a related website set search filter is applied.
     * @return True if filter starts with `RWS_RELATED_SEARCH_PREFIX`.
     */
    private isRwsFiltered_;
    private getRwsLearnMoreLabel_;
    /**
     * Selects the appropriate string to display for clear button based on whether
     * a filter is applied.
     * @return The appropriate |clearAllButton| string based on whether a filter
     *     is applied.
     */
    private getClearDataButtonString_;
    /**
     * Selects the appropriate string to display for total usage based on whether
     * a filter is applied.
     * @return The appropriate |clearLabel| string based on whether a filter
     *     is applied.
     */
    private getClearStorageDescription_;
    /**
     * Confirms the clearing of all storage data for all sites.
     */
    private onConfirmClearAllData_;
    private onCloseDialog_;
    private getRemoveSiteTitle_;
    private getRemoveSiteLogoutBulletPoint_;
    private showPermissionsBulletPoint_;
    /**
     * Selects the appropriate title to display for clear storage confirmation
     * dialog based on whether a filter is applied.
     * @return The appropriate title for clear storage confirmation dialog.
     */
    private getClearAllStorageDialogTitle_;
    /**
     * Get the appropriate label for the clear data confirmation dialog, depending
     * on whether any apps are installed, a filter is applied, and/or the RWS V2
     * view is shown.
     * @return The appropriate description for clear data confirmation dialog.
     */
    private getClearAllStorageDialogDescription_;
    /**
     * Selects the appropriate string to display for the sign-out string in
     * confirmation popup based on whether a filter is applied.
     * @return The appropriate sign out confirmation string based on whether a
     *     filter is applied and/or the RWS V2 view is shown.
     */
    private getClearAllStorageDialogSignOutLabel_;
    private recordUserAction_;
    /**
     * Decrements the number of rws members for a given owner eTLD+1 by 1.
     * @param rwsOwner The related website set owner.
     */
    private decrementRwsNumMembers_;
    /**
     * Resets all permission settings for a single origin.
     */
    private resetPermissionsForOrigin_;
    /**
     * Helper to remove data and cookies for a group.
     * @param index The index of the target siteGroup in filteredList_ that should
     *     be cleared.
     */
    private clearDataForSiteGroupIndex_;
    /**
     * Updates the UI after permissions have been reset or data/cookies
     * have been cleared
     * @param index The index of the target siteGroup in filteredList_ that should
     *     be updated.
     * @param updatedSiteGroup The SiteGroup object that represents the new state.
     */
    private updateSiteGroup_;
    /**
     * Clear data and cookies for all sites.
     */
    private onClearAllData_;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'all-sites': AllSitesElement;
    }
}
export {};
