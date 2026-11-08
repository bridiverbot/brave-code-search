import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './getting_started.js';
import '../people_page/manage_profile.js';
import '../settings_shared.css.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
export interface SettingsGettingStartedPageIndexElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const SettingsGettingStartedPageIndexElementBase: typeof PolymerElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../settings_page/searchable_view_container_mixin.js").SearchableViewContainerMixinInterface);
export declare class SettingsGettingStartedPageIndexElement extends SettingsGettingStartedPageIndexElementBase implements SettingsPlugin {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    private showDefaultViews_;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-getting-started-page-index': SettingsGettingStartedPageIndexElement;
    }
}
export {};
