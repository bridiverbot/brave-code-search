import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './battery_page.js';
import './memory_page.js';
import './performance_page.js';
import './speed_page.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
export interface SettingsPerformancePageIndexElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const SettingsPerformancePageIndexElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../settings_page/searchable_view_container_mixin_lit.js").SearchableViewContainerMixinLitInterface);
export declare class SettingsPerformancePageIndexElement extends SettingsPerformancePageIndexElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showBatterySettings_: {
            type: BooleanConstructor;
        };
    };
    protected accessor showBatterySettings_: boolean;
    private showDefaultViews_;
    connectedCallback(): void;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    private onDeviceHasBatteryChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-performance-page-index': SettingsPerformancePageIndexElement;
    }
}
export { SettingsPerformancePageIndexElement as PerformancePageIndexElement };
