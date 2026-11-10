import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './appearance_page.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route, SettingsRoutes } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
export interface SettingsAppearancePageIndexElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const SettingsAppearancePageIndexElementBase: typeof CrLitElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../settings_page/searchable_view_container_mixin_lit.js").SearchableViewContainerMixinLitInterface);
export declare class SettingsAppearancePageIndexElement extends SettingsAppearancePageIndexElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        routes_: {
            type: ObjectConstructor;
        };
    };
    protected accessor routes_: SettingsRoutes;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-appearance-page-index': SettingsAppearancePageIndexElement;
    }
}
export {};
