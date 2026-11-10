/**
 * @fileoverview
 * 'settings-menu' shows a menu with a hardcoded set of pages and subpages.
 */
import 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../icons.html.js';
import type { CrMenuSelectorElement } from 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PageVisibility } from '../page_visibility.js';
import type { Route } from '../router.js';
export interface SettingsMenuElement {
    $: {
        autofill: HTMLLinkElement;
        menu: CrMenuSelectorElement;
        people: HTMLLinkElement;
    };
}
declare const SettingsMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export declare class SettingsMenuElement extends SettingsMenuElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        collapsed: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Dictionary defining page visibility.
         */
        pageVisibility_: {
            type: ObjectConstructor;
        };
        showAiPage_: {
            type: BooleanConstructor;
        };
    };
    accessor collapsed: boolean;
    protected accessor pageVisibility_: PageVisibility | undefined;
    private accessor showAiPage_;
    private metricsBrowserProxy_;
    protected shouldHideMenuItem_(visibility: boolean | object | undefined): boolean;
    protected showAiPageMenuItem_(): boolean;
    currentRouteChanged(newRoute: Route): void;
    focusFirstItem(): void;
    /**
     * Prevent clicks on sidebar items from navigating. These are only links for
     * accessibility purposes, taps are handled separately.
     */
    protected onLinkClick_(event: Event): void;
    /**
     * Keeps both menus in sync. `path` needs to come from
     * `element.getAttribute('href')`. Using `element.href` will not work as it
     * would pass the entire URL instead of just the path.
     */
    private setSelectedPath_;
    protected onIronActivate_(event: CustomEvent<{
        selected: string;
    }>): void;
    protected onExtensionsLinkClick_(): void;
    protected onAutofillClick_(): void;
    protected hideBottomMenuSeparator_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-menu': SettingsMenuElement;
    }
}
export {};
