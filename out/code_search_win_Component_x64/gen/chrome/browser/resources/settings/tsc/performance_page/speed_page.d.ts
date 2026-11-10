import '../controls/collapse_radio_button.js';
import '../controls/settings_dropdown_menu.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import '../settings_page/settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsCollapseRadioButtonElement } from '../controls/collapse_radio_button.js';
import type { DropdownMenuOptionList } from '../controls/settings_dropdown_menu.js';
import type { SettingsRadioGroupElement } from '../controls/settings_radio_group.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
import { NetworkPredictionOptions } from './constants.js';
import type { CpuPerformanceInfo } from './performance_browser_proxy.js';
export interface SpeedPageElement {
    $: {
        preloadingToggle: SettingsToggleButtonElement;
        preloadingExtended: SettingsCollapseRadioButtonElement;
        preloadingRadioGroup: SettingsRadioGroupElement;
        preloadingStandard: SettingsCollapseRadioButtonElement;
    };
}
declare const SpeedPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare const PRELOADING_PREF = "net.network_prediction_options";
export declare class SpeedPageElement extends SpeedPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        numericUncheckedValues_: {
            type: ArrayConstructor;
        };
        cpuPerformanceInfo_: {
            type: ObjectConstructor;
        };
        cpuPerformanceModelLabel_: {
            type: StringConstructor;
        };
        cpuPerformanceEnabled_: {
            type: BooleanConstructor;
        };
        cpuPerformanceTierOptions_: {
            type: ArrayConstructor;
        };
        preloadingStatePref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor cpuPerformanceInfo_: CpuPerformanceInfo | null;
    protected accessor cpuPerformanceModelLabel_: string;
    protected accessor cpuPerformanceEnabled_: boolean;
    protected accessor cpuPerformanceTierOptions_: DropdownMenuOptionList;
    protected accessor numericUncheckedValues_: NetworkPredictionOptions[];
    private accessor preloadingStatePref_;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    protected isPreloadingEnabled_(): boolean;
    protected onPreloadingStateChange_(): void;
    protected onPreloadingSubLabelLinkClicked_(): void;
    protected showSendFeedbackButton_(): boolean;
    protected onSendFeedback_(_e: Event): void;
    protected getCpuPerformanceNominalTierLabel_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-speed-page': SpeedPageElement;
    }
}
export {};
