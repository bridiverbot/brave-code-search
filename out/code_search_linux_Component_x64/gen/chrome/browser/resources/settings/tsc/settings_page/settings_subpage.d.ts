/**
 * @fileoverview
 * 'settings-subpage' shows a subpage beneath a subheader. The header contains
 * the subpage title, a search field and a back icon.
 */
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_search_field/cr_search_field.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_shared_style_lit.css.js';
import '../settings_shared_lit.css.js';
import '../site_favicon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
declare const SettingsSubpageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/find_shortcut_manager.js").FindShortcutListener) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export interface SettingsSubpageElement {
    $: {
        closeButton: HTMLElement;
    };
}
export declare class SettingsSubpageElement extends SettingsSubpageElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pageTitle: {
            type: StringConstructor;
        };
        titleIcon: {
            type: StringConstructor;
        };
        faviconSiteUrl: {
            type: StringConstructor;
        };
        learnMoreUrl: {
            type: StringConstructor;
        };
        searchLabel: {
            type: StringConstructor;
        };
        searchIcon: {
            type: StringConstructor;
        };
        searchTerm: {
            type: StringConstructor;
            notify: boolean;
        };
        preserveSearchTerm: {
            type: BooleanConstructor;
        };
        active_: {
            type: BooleanConstructor;
        };
    };
    accessor pageTitle: string;
    accessor titleIcon: string;
    accessor faviconSiteUrl: string;
    accessor learnMoreUrl: string;
    accessor searchLabel: string;
    accessor searchIcon: string;
    accessor searchTerm: string;
    accessor preserveSearchTerm: boolean;
    protected accessor active_: boolean;
    private lastActiveValue_;
    private eventTracker_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private getSearchField_;
    /** Restore search field value from URL search param */
    private restoreSearchInput_;
    /** Preserve search field value to URL search param */
    private preserveSearchInput_;
    /** Focuses the back button when page is loaded. */
    focusBackButton(): Promise<void>;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    private onActiveChanged_;
    /** Clear the value of the search field. */
    private onClearSubpageSearch_;
    protected onBackClick_(): void;
    protected onHelpClick_(): void;
    protected onSearchChanged_(e: CustomEvent<string>): void;
    protected getBackButtonAriaLabel_(): string;
    protected getBackButtonAriaRoleDescription_(): string;
    protected getLearnMoreAriaLabel_(): string;
    handleFindShortcut(modalContextOpen: boolean): boolean;
    searchInputHasFocus(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-subpage': SettingsSubpageElement;
    }
}
export {};
