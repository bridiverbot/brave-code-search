import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import '../settings_shared.css.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
import type { PageVisibility } from '../page_visibility.js';
export interface SettingsBraveContentPageIndexElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const SettingsBraveContentPageIndexElementBase: typeof PolymerElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../settings_page/searchable_view_container_mixin.js").SearchableViewContainerMixinInterface);
export declare class SettingsBraveContentPageIndexElement extends SettingsBraveContentPageIndexElementBase implements SettingsPlugin {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        pageVisibility_: {
            type: ObjectConstructor;
            value(): PageVisibility;
        };
    };
    private pageVisibility_;
    private showDefaultViews_;
    private showPage_;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-brave-content-page-index': SettingsBraveContentPageIndexElement;
    }
}
export {};
