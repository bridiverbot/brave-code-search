/**
 * @fileoverview
 * 'settings-autofill-page-index' is the settings page containing
 * settings for passwords, payment methods, addresses and more.
 */
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './autofill_page.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route, SettingsRoutes } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
export interface SettingsAutofillPageIndexElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const SettingsAutofillPageIndexElementBase: typeof CrLitElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../settings_page/searchable_view_container_mixin_lit.js").SearchableViewContainerMixinLitInterface);
export declare class SettingsAutofillPageIndexElement extends SettingsAutofillPageIndexElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        routes_: {
            type: ObjectConstructor;
        };
        isShoppingEnabled_: {
            type: BooleanConstructor;
        };
        showSuggestionsFromGeminiSettings_: {
            type: BooleanConstructor;
        };
    };
    protected accessor routes_: SettingsRoutes;
    protected accessor isShoppingEnabled_: boolean;
    protected accessor showSuggestionsFromGeminiSettings_: boolean;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-autofill-page-index': SettingsAutofillPageIndexElement;
    }
}
export {};
