import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import '../settings_shared.css.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
import '../brave_origin_page/brave_origin_onboarding.js';
import '../shortcuts_page/shortcuts_page.js';
export interface SettingsBraveSystemPageIndexElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const SettingsBraveExtensionsPageIndexElementBase: typeof PolymerElement & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../settings_page/searchable_view_container_mixin.js").SearchableViewContainerMixinInterface);
export declare class SettingsBraveSystemPageIndexElement extends SettingsBraveExtensionsPageIndexElementBase implements SettingsPlugin {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
        * Used to hide battery settings section if the device has no battery
        */
        showBatterySettings_: {
            type: BooleanConstructor;
            value: boolean;
        };
        showShortcutsPage_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        showOriginOnboarding_: {
            type: BooleanConstructor;
            value: () => boolean;
        };
    };
    private showBatterySettings_;
    private showShortcutsPage_;
    private showOriginOnboarding_;
    private braveOriginHandler_;
    private boundOnVisibilityChange_;
    constructor();
    disconnectedCallback(): void;
    private onVisibilityChange_;
    private checkOriginPurchaseState_;
    private hasBatteryChanged_;
    private showDefaultViews_;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-brave-system-page-index': SettingsBraveSystemPageIndexElement;
    }
}
export {};
