import 'chrome://resources/cr_components/managed_footnote/managed_footnote.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './shared_icons.html.js';
import './shared_vars.css.js';
import '/strings.m.js';
import type { CrMenuSelectorElement } from 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface FooterInfo {
    managed: boolean;
    otherFormsOfHistory: boolean;
    geminiAppsActivity: boolean;
}
export interface HistorySideBarElement {
    $: {
        history: HTMLAnchorElement;
        menu: CrMenuSelectorElement;
        syncedTabs: HTMLElement;
    };
}
export declare class HistorySideBarElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        footerInfo: {
            type: ObjectConstructor;
        };
        historyClustersEnabled: {
            type: BooleanConstructor;
        };
        historyClustersVisible: {
            type: BooleanConstructor;
            notify: boolean;
        };
        selectedPage: {
            type: StringConstructor;
            notify: boolean;
        };
        selectedTab: {
            type: NumberConstructor;
            notify: boolean;
        };
        guestSession_: {
            type: BooleanConstructor;
        };
        /**
         * Used to display notices for profile sign-in status and managed status.
         */
        showFooter_: {
            type: BooleanConstructor;
        };
        /**
         * Used to display Google Account section in the footer. This section
         * contains links to Google My Activity and/or Gemini Apps Activity.
         *
         * When this property is true, `showFooter_` property should also be true.
         */
        showGoogleAccountFooter_: {
            type: BooleanConstructor;
        };
        /**
         * Mutually exclusive flags that determine which message to show in the
         * Google Account footer:
         *   - message with Google My Activity (GMA) link
         *   - message with Gemini Apps Activity (GAA) link
         *   - message with both Google My Activity (GMA) and
         *     Gemini Apps Activity (GAA) links.
         *
         * At most one of these can be true.
         */
        showGMAOnly_: {
            type: BooleanConstructor;
        };
        showGAAOnly_: {
            type: BooleanConstructor;
        };
        showGMAAndGAA_: {
            type: BooleanConstructor;
        };
        showHistoryClusters_: {
            type: BooleanConstructor;
        };
    };
    accessor footerInfo: FooterInfo;
    accessor historyClustersEnabled: boolean;
    accessor historyClustersVisible: boolean;
    accessor selectedPage: string;
    accessor selectedTab: number;
    protected accessor guestSession_: boolean;
    protected accessor showFooter_: boolean;
    protected accessor showGoogleAccountFooter_: boolean;
    protected accessor showGMAOnly_: boolean;
    protected accessor showGAAOnly_: boolean;
    protected accessor showGMAAndGAA_: boolean;
    private accessor showHistoryClusters_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private updateFooterVisibility;
    protected onGoogleAccountFooterClick_(e: Event): void;
    private onKeydown_;
    protected onMenuIronActivate_(): void;
    protected onSelectorSelectedChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    /**
     * Relocates the user to the clear browsing data section of the settings page.
     */
    protected onClearBrowsingDataClick_(e: Event): void;
    /**
     * Prevent clicks on sidebar items from navigating. These are only links for
     * accessibility purposes, taps are handled separately.
     */
    protected onItemClick_(e: Event): void;
    /**
     * @returns The url to navigate to when the history menu item is clicked. It
     *     reflects the currently selected tab.
     */
    protected getHistoryItemHref_(): string;
    /**
     * @returns The path that determines if the history menu item is selected. It
     *     reflects the currently selected tab.
     */
    protected getHistoryItemPath_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-side-bar': HistorySideBarElement;
    }
}
