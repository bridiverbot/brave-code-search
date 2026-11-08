import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import '../settings_shared.css.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
import './default_brave_shields_page.js';
import './brave_adblock_subpage.js';
import '../ad_block_only_mode_page/ad_block_only_mode_page.js';
export interface SettingsShieldsPageIndexElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const SettingsShieldsPageIndexElementBase: typeof PolymerElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../settings_page/searchable_view_container_mixin.js").SearchableViewContainerMixinInterface);
export declare class SettingsShieldsPageIndexElement extends SettingsShieldsPageIndexElementBase implements SettingsPlugin {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    private showDefaultViews_;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-shields-page-index': SettingsShieldsPageIndexElement;
    }
}
export {};
