import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BatterySaverModeState } from './performance_metrics_proxy.js';
export declare const BATTERY_SAVER_MODE_PREF = "performance_tuning.battery_saver_mode.state";
declare const SettingsBatteryPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsBatteryPageElement extends SettingsBatteryPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isBatterySaverModeManagedByOs_: {
            type: BooleanConstructor;
        };
        numericUncheckedValues_: {
            type: ArrayConstructor;
        };
        batterySaverStatePref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor isBatterySaverModeManagedByOs_: boolean;
    protected accessor numericUncheckedValues_: BatterySaverModeState[];
    protected accessor batterySaverStatePref_: chrome.settingsPrivate.PrefObject | undefined;
    private metricsProxy_;
    connectedCallback(): void;
    protected isBatterySaverModeEnabled_(): boolean;
    protected onChange_(): void;
    protected onBatterySaverSubLabelLinkClicked_(): void;
    protected showSendFeedbackButton_(): boolean;
    protected onSendFeedback_(_e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-battery-page': SettingsBatteryPageElement;
    }
}
export {};
