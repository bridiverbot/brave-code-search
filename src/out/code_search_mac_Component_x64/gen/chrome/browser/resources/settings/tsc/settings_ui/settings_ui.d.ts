/**
 * @fileoverview
 * 'settings-ui' implements the UI for the Settings page.
 *
 * Example:
 *
 *    <settings-ui></settings-ui>
 */
import 'chrome://resources/cr_elements/cr_drawer/cr_drawer.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../icons.html.js';
import '../settings_main/settings_main.js';
import '../settings_menu/settings_menu.js';
import type { CrDrawerElement } from 'chrome://resources/cr_elements/cr_drawer/cr_drawer.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import type { CrToolbarElement } from 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
import type { SearchFinishedDetail, SettingsMainElement } from '../settings_main/settings_main.js';
import type { SettingsMenuElement } from '../settings_menu/settings_menu.js';
export interface SettingsUiElement {
    $: {
        container: HTMLElement;
        drawer: CrDrawerElement;
        drawerMenu: CrLazyRenderLitElement<SettingsMenuElement>;
        left: HTMLElement;
        leftMenu: SettingsMenuElement;
        main: SettingsMainElement;
        scrollableShadow: HTMLElement;
        toolbar: CrToolbarElement;
    };
}
export declare const MAX_QUERY_LENGTH = 1000;
declare const SettingsUiElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/find_shortcut_manager.js").FindShortcutListener) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export declare class SettingsUiElement extends SettingsUiElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        toolbarSpinnerActive_: {
            type: BooleanConstructor;
        };
        narrow_: {
            type: BooleanConstructor;
        };
        lastSearchQuery_: {
            type: StringConstructor;
        };
        isSettingsRefresh2026_: {
            type: BooleanConstructor;
        };
    };
    protected accessor toolbarSpinnerActive_: boolean;
    protected accessor narrow_: boolean;
    private accessor lastSearchQuery_;
    private accessor isSettingsRefresh2026_;
    private activeTimer_;
    private searchMetricsRecorder_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    currentRouteChanged(route: Route): void;
    handleFindShortcut(modalContextOpen: boolean): boolean;
    searchInputHasFocus(): boolean;
    /**
     * Handles the 'search-changed' event fired from the toolbar.
     */
    protected onSearchChanged_(e: CustomEvent<string>): void;
    /**
     * Handles the 'search-finished' event fired from settings-main.
     */
    protected onSearchFinished_(e: CustomEvent<SearchFinishedDetail>): void;
    /**
     * Handles the 'search-result-interaction' event fired from settings-main.
     */
    protected onSearchResultInteraction_(): void;
    /**
     * Called when a section is selected.
     */
    protected onIronActivate_(): void;
    protected onCrToolbarMenuClick_(): void;
    /**
     * When this is called, The drawer animation is finished, and the dialog no
     * longer has focus. The selected section will gain focus if one was
     * selected. Otherwise, the drawer was closed due being canceled, and the
     * main settings container is given focus. That way the arrow keys can be
     * used to scroll the container, and pressing tab focuses a component in
     * settings.
     */
    protected onMenuClose_(): void;
    protected getLeftMenuHidden_(): boolean;
    protected getLeftMenuCollapsed_(): boolean;
    protected onToolbarNarrowChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onToolbarSpinnerActiveChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    private onNarrowChanged_;
    private addThemedColors_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-ui': SettingsUiElement;
    }
}
export {};
