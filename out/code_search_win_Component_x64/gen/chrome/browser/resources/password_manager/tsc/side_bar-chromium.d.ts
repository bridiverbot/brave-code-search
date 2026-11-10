import 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './cr_nav_menu_item_style.css.js';
import './icons.html.js';
import type { CrMenuSelectorElement } from 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from './router.js';
export interface PasswordManagerSideBarElement {
    $: {
        menu: CrMenuSelectorElement;
        compromisedPasswords: HTMLElement;
        settings: HTMLElement;
    };
}
declare const PasswordManagerSideBarElementBase: typeof PolymerElement & (new (...args: any[]) => import("./router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class PasswordManagerSideBarElement extends PasswordManagerSideBarElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        selectedPage_: StringConstructor;
        compromisedPasswords_: NumberConstructor;
    };
    private selectedPage_;
    private compromisedPasswords_;
    private insecureCredentialsChangedListener_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    currentRouteChanged(route: Route, _: Route): void;
    private onSelectorActivate_;
    private getSelectedPage_;
    /**
     * Prevent clicks on sidebar items from navigating. These are only links for
     * accessibility purposes, taps are handled separately.
     */
    private onItemClick_;
    private getCompromisedPasswordsBadge_;
    protected getInventoryIcon_(): string;
    protected getSettingsIcon_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'password-manager-side-bar': PasswordManagerSideBarElement;
    }
}
export {};
