import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './people_page.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route, SettingsRoutes } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
export interface SettingsPeoplePageIndexElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const SettingsPeoplePageIndexElementBase: typeof CrLitElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../settings_page/searchable_view_container_mixin_lit.js").SearchableViewContainerMixinLitInterface);
export declare class SettingsPeoplePageIndexElement extends SettingsPeoplePageIndexElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        routes_: {
            type: ObjectConstructor;
        };
        replaceSyncPromosWithSignInPromos_: {
            type: BooleanConstructor;
        };
    };
    protected accessor routes_: SettingsRoutes;
    protected accessor replaceSyncPromosWithSignInPromos_: boolean;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-people-page-index': SettingsPeoplePageIndexElement;
    }
}
export {};
