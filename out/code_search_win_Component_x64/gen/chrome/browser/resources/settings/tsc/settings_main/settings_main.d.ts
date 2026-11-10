/**
 * @fileoverview
 * 'settings-main' displays the selected settings page.
 */
import 'chrome://resources/cr_components/managed_footnote/managed_footnote.js';
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../about_page/about_page.js';
import '../ai_page/ai_page_index.js';
import '../appearance_page/appearance_page_index.js';
import '../autofill_page/autofill_page_index.js';
import '../on_startup_page/on_startup_page.js';
import '../people_page/people_page_index.js';
import '../performance_page/performance_page_index.js';
import '../privacy_page/privacy_page_index.js';
import '../reset_page/reset_profile_banner.js';
import '../search_page/search_page_index.js';
import '../default_browser_page/default_browser_page.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { AppearancePageVisibility, PageVisibility, PrivacyPageVisibility } from '../page_visibility.js';
import type { Route, SettingsRoutes } from '../router.js';
export interface SearchFinishedDetail {
    query: string;
    matchCount: number;
}
declare global {
    interface HTMLElementEventMap {
        'search-finished': CustomEvent<SearchFinishedDetail>;
    }
}
export interface SettingsMainElement {
    $: {
        noSearchResults: HTMLElement;
        switcher: CrViewManagerElement;
    };
}
declare const SettingsMainElementBase: typeof CrLitElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export declare class SettingsMainElement extends SettingsMainElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pageVisibility_: {
            type: ObjectConstructor;
        };
        lastRoute_: {
            type: ObjectConstructor;
        };
        routes_: {
            type: ObjectConstructor;
        };
        /**
         * Whether a search operation is in progress or previous search results
         * are being displayed.
         */
        inSearchMode_: {
            type: BooleanConstructor;
        };
        showNoResultsFound_: {
            type: BooleanConstructor;
        };
        showResetProfileBanner_: {
            type: BooleanConstructor;
        };
        toolbarSpinnerActive: {
            type: BooleanConstructor;
            notify: boolean;
        };
    };
    protected accessor pageVisibility_: PageVisibility;
    protected accessor lastRoute_: Route | null;
    protected accessor routes_: SettingsRoutes;
    protected accessor inSearchMode_: boolean;
    protected accessor showNoResultsFound_: boolean;
    protected accessor showResetProfileBanner_: boolean;
    accessor toolbarSpinnerActive: boolean;
    private eventTracker_;
    private pendingViewSwitching_;
    private topLevelEquivalentRoute_;
    private currentQuery_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    currentRouteChanged(route: Route): Promise<void>;
    whenViewSwitchingDone(): Promise<void>;
    /**
     * @return A promise indicating that searching finished.
     */
    searchContents(query: string): Promise<void>;
    /**
     * Notifies about the user interacting with one of the search results, but
     * only while search results are being displayed, so that no listener is
     * registered during normal browsing of the Settings page.
     *
     * Both 'click' and 'change' are observed, because neither covers every
     * result on its own. Results that navigate elsewhere when opened are only
     * visible as a 'click', whereas controls that commonly show up as results,
     * settings-toggle-button and cr-toggle for example, stop 'click' events from
     * propagating and fire no 'click' at all when activated with the keyboard.
     * Those do fire a composed 'change' event when their value changes.
     *
     * The two can both fire for a single interaction, and 'click' also fires for
     * clicks that landed next to a result rather than on one, so this is an
     * upper bound rather than an exact signal. Consumers are expected to be
     * interested in the first notification only.
     */
    private onInSearchModeChanged_;
    protected renderPlugin_(route: Route): boolean;
    protected showPage_(visibility?: boolean | AppearancePageVisibility | PrivacyPageVisibility): boolean;
    protected showAiPage_(visibility?: boolean): boolean;
    protected showManagedHeader_(): boolean;
    protected shouldShowAll_(): boolean;
    protected onResetProfileBannerClose_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-main': SettingsMainElement;
    }
}
export {};
