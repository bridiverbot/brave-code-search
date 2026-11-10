import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import '../settings_page/settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
import { MemorySaverModeState } from './performance_metrics_proxy.js';
export declare const MEMORY_SAVER_MODE_PREF = "performance_tuning.high_efficiency_mode.state";
export declare const MEMORY_SAVER_MODE_AGGRESSIVENESS_PREF = "performance_tuning.high_efficiency_mode.aggressiveness";
declare const SettingsMemoryPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export interface SettingsMemoryPageElement {
    $: {
        toggleButton: SettingsToggleButtonElement;
    };
}
export declare class SettingsMemoryPageElement extends SettingsMemoryPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        numericUncheckedValues_: {
            type: ArrayConstructor;
        };
        numericCheckedValue_: {
            type: NumberConstructor;
        };
        memorySaverStatePref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor numericUncheckedValues_: MemorySaverModeState[];
    protected accessor numericCheckedValue_: MemorySaverModeState;
    protected accessor memorySaverStatePref_: chrome.settingsPrivate.PrefObject | undefined;
    private metricsProxy_;
    connectedCallback(): void;
    protected onMemorySaverModeChange_(): void;
    protected onMemorySaverModeAggressivenessChange_(): void;
    protected isMemorySaverModeEnabled_(): boolean;
    protected onMemorySaverSubLabelLinkClicked_(): void;
    protected showSendFeedbackButton_(): boolean;
    protected onSendFeedback_(_e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-memory-page': SettingsMemoryPageElement;
    }
}
export {};
