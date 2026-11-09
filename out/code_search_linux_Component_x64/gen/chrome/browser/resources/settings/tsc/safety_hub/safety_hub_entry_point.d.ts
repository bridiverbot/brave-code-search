import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../settings_page/settings_section.js';
import './safety_hub_module.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
import type { SettingsSafetyHubModuleElement } from './safety_hub_module.js';
export interface SettingsSafetyHubEntryPointElement {
    $: {
        button: HTMLElement;
        module: SettingsSafetyHubModuleElement;
    };
}
declare const SettingsSafetyHubEntryPointElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsSafetyHubEntryPointElement extends SettingsSafetyHubEntryPointElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        hasRecommendations_: {
            type: BooleanConstructor;
        };
        headerString_: {
            type: StringConstructor;
        };
        subheaderString_: {
            type: StringConstructor;
        };
    };
    private accessor hasRecommendations_;
    protected accessor headerString_: string;
    protected accessor subheaderString_: string;
    private safetyHubBrowserProxy_;
    private metricsBrowserProxy_;
    private entryPointDataFetched_;
    connectedCallback(): void;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): Promise<void>;
    protected computeButtonClass_(): "" | "action-button";
    protected computeHeaderIconColor_(): "" | "blue";
    protected onClick_(): void;
    getFocusConfig(): Map<string, string>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-safety-hub-entry-point': SettingsSafetyHubEntryPointElement;
    }
}
export {};
