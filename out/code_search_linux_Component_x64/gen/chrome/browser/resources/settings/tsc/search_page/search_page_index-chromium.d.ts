import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './omnibox_everywhere_section.js';
import './site_shortcuts_page.js';
import './feature_shortcuts_page.js';
import './keyboard_shortcut_page.js';
import './search_page.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route, SettingsRoutes } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
export interface SettingsSearchPageIndexElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const SettingsSearchPageIndexElementBase: typeof CrLitElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../settings_page/searchable_view_container_mixin_lit.js").SearchableViewContainerMixinLitInterface);
export declare class SettingsSearchPageIndexElement extends SettingsSearchPageIndexElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        routes_: {
            type: ObjectConstructor;
        };
        searchSettingsUpdateEnabled_: {
            type: BooleanConstructor;
        };
        omniboxEverywhereSettingsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor routes_: SettingsRoutes;
    protected accessor searchSettingsUpdateEnabled_: boolean;
    protected accessor omniboxEverywhereSettingsEnabled_: boolean;
    private showDefaultViews_;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-search-page-index': SettingsSearchPageIndexElement;
    }
}
export {};
