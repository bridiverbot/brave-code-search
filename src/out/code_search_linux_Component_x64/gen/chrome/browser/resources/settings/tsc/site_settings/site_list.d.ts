/**
 * @fileoverview
 * 'site-list' shows a list of Allowed and Blocked sites for a given
 * category.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import '../settings_shared.css.js';
import './add_site_dialog.js';
import './edit_exception_dialog.js';
import './site_list_entry.js';
import type { CrTooltipElement } from 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import type { IronListElement } from 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ContentSetting, CookiesExceptionType } from './constants.js';
import type { SiteException } from './site_settings_browser_proxy.js';
export interface SiteListElement {
    $: {
        addSite: HTMLElement;
        category: HTMLElement;
        list: IronListElement;
        listContainer: HTMLElement;
        listHeader: HTMLElement;
        tooltip: CrTooltipElement;
    };
}
declare const SiteListElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("./list_property_update_mixin.js").ListPropertyUpdateMixinInterface) & (new (...args: any[]) => import("../tooltip_mixin.js").TooltipMixinInterface);
export declare class SiteListElement extends SiteListElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * Some content types (like Location) do not allow the user to manually
         * edit the exception list from within Settings.
         */
        readOnlyList: {
            type: BooleanConstructor;
            value: boolean;
        };
        categoryHeader: StringConstructor;
        /**
         * Optional warning message to be displayed bellow the category header.
         */
        systemPermissionWarningKey_: {
            type: StringConstructor;
            value: null;
            observer: string;
        };
        /**
         * The site serving as the model for the currently open action menu.
         */
        actionMenuSite_: ObjectConstructor;
        /**
         * Whether the "edit exception" dialog should be shown.
         */
        showEditExceptionDialog_: BooleanConstructor;
        /**
         * Array of sites to display in the widget.
         */
        sites: {
            type: ArrayConstructor;
            value(): never[];
        };
        /**
         * The type of category this widget is displaying data for. Normally
         * either 'allow' or 'block', representing which sites are allowed or
         * blocked respectively.
         */
        categorySubtype: {
            type: StringConstructor;
            value: string;
        };
        /**
         * Filters cookies exceptions based on the type (CookiesExceptionType):
         * - THIRD_PARTY: Only show cookies exceptions that have primary pattern
         * as wildcard (third-party cookies exceptions).
         * - SITE_DATA: Only show cookies exceptions that have primary pattern
         * set. This includes site data exceptions (secondary pattern is wildcard)
         * and exceptions with both patterns set (currently possible only via
         * exceptions API).
         * - COMBINED: Doesn't apply any filters, will show exceptions with both
         * pattern types.
         */
        cookiesExceptionType: StringConstructor;
        hasIncognito_: BooleanConstructor;
        /**
         * Whether to show the Add button next to the header.
         */
        showAddSiteButton_: {
            type: BooleanConstructor;
            computed: string;
        };
        showAddSiteDialog_: BooleanConstructor;
        /**
         * Whether to show the Allow action in the action menu.
         */
        showAllowAction_: BooleanConstructor;
        /**
         * Whether to show the Block action in the action menu.
         */
        showBlockAction_: BooleanConstructor;
        /**
         * Whether to show the 'Clear on exit' action in the action
         * menu.
         */
        showSessionOnlyAction_: BooleanConstructor;
        lastFocused_: ObjectConstructor;
        listBlurred_: BooleanConstructor;
        tooltipText_: StringConstructor;
        searchFilter: StringConstructor;
    };
    static get observers(): string[];
    readOnlyList: boolean;
    categoryHeader: string;
    private systemPermissionWarningKey_;
    private actionMenuSite_;
    private showEditExceptionDialog_;
    sites: SiteException[];
    categorySubtype: ContentSetting;
    private hasIncognito_;
    private showAddSiteButton_;
    private showAddSiteDialog_;
    private showAllowAction_;
    private showBlockAction_;
    private showSessionOnlyAction_;
    private lastFocused_;
    private listBlurred_;
    private tooltipText_;
    searchFilter: string;
    cookiesExceptionType: CookiesExceptionType;
    private activeDialogAnchor_;
    private browserProxy_;
    /**
     * Observes |listContainer| so that the <iron-list> within it can be told to
     * render once it actually has a layout box. See
     * onListContainerResize_() for details.
     */
    private listContainerResizeObserver_;
    /** Whether |listContainer| currently has a layout box. */
    private listContainerVisible_;
    constructor();
    ready(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * <iron-list> refuses to render anything while it is not visible, and only
     * retries when it receives an 'iron-resize' event, which nothing in Settings
     * fires for this list. Meanwhile the exception list is fetched as soon as
     * this element is created, which - because Settings views are stamped into a
     * <cr-view-manager> view before that view is made visible - regularly
     * happens while this element is still display:none. The result is a list
     * that stays permanently empty until some unrelated event (e.g. the user
     * adding an exception) causes another render.
     *
     * Detect the transition to having a layout box and notify the <iron-list>,
     * so that exceptions loaded while hidden are rendered once shown.
     */
    private onListContainerResize_;
    /**
     * Update the category warning when the OS permission for this category
     * changed.
     */
    private updateCategoryWarning_;
    /**
     * Sets the category warning when the OS permission for this category changed.
     */
    private setCategoryWarning_;
    /**
     * Called when a site changes permission.
     * @param category The category of the site that changed.
     */
    private siteWithinCategoryChanged_;
    /**
     * Called for each site list when incognito is enabled or disabled. Only
     * called on change (opening N incognito windows only fires one message).
     * Another message is sent when the *last* incognito window closes.
     */
    private onIncognitoStatusChanged_;
    /**
     * Configures the action menu, visibility of the widget and shows the list.
     */
    private configureWidget_;
    /** Whether there are any site exceptions added for this content setting. */
    private hasSites_;
    /** Whether the header warning should be shown. */
    private showHeaderWarning_;
    /** The text of the warning. Null if the warning is not to be shown. */
    private getSystemPermissionWarning_;
    /** Attempts to open the system permission settings. */
    private onSystemPermissionSettingsLinkClick_;
    /** Attached the click action to the anchor element. */
    private attachSystemPermissionSettingsLinkClick_;
    /**
     * Whether the Add Site button is shown in the header for the current category
     * and category subtype.
     */
    private computeShowAddSiteButton_;
    private showNoSearchResults_;
    /**
     * A handler for the Add Site button.
     */
    private onAddSiteClick_;
    private onAddSiteDialogClosed_;
    /**
     * Need to use common tooltip since the tooltip in the entry is cut off from
     * the iron-list.
     */
    private onShowTooltip_;
    /**
     * Populate the sites list for display.
     */
    private populateList_;
    /**
     * Process the exception list returned from the native layer.
     */
    private processExceptions_;
    /**
     * Set up the values to use for the action menu.
     */
    private setUpActionMenu_;
    /**
     * @return Whether to show the "Session Only" menu item for the currently
     *     active site.
     */
    private showSessionOnlyActionForSite_;
    private setContentSettingForActionMenuSite_;
    private onAllowClick_;
    private onBlockClick_;
    private onSessionOnlyClick_;
    private onEditClick_;
    private onEditExceptionDialogClosed_;
    private onResetClick_;
    private onShowActionMenu_;
    private onResetEntry_;
    private closeActionMenu_;
    private getFilteredSites_;
    private hasOneFilteredSite_;
    private getAddButtonLabel_;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-list': SiteListElement;
    }
}
export {};
