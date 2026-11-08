import 'chrome://resources/cr_components/cr_shortcut_input/cr_shortcut_input.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../../controls/settings_toggle_button.js';
import '../../icons.html.js';
import '../../settings_page/settings_subpage.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../../controls/settings_toggle_button.js';
declare const SettingsSuggestionsFromGeminiPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export interface SettingsSuggestionsFromGeminiPageElement {
    $: {
        atMemoryDoubleCtrlTriggerToggle: SettingsToggleButtonElement;
    };
}
export declare class SettingsSuggestionsFromGeminiPageElement extends SettingsSuggestionsFromGeminiPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isAtMemoryEnabled_: {
            type: BooleanConstructor;
        };
        isAtMemoryTriggerCustomizationAllowed_: {
            type: BooleanConstructor;
        };
        findAndFillWithGeminiPref_: {
            type: ObjectConstructor;
        };
        atMemoryShortcutPref_: {
            type: ObjectConstructor;
        };
        findAndFillWithGeminiSettingsPref_: {
            type: ObjectConstructor;
        };
    };
    private accessor isAtMemoryEnabled_;
    private accessor isAtMemoryTriggerCustomizationAllowed_;
    protected accessor findAndFillWithGeminiPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    protected accessor atMemoryShortcutPref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    protected accessor findAndFillWithGeminiSettingsPref_: chrome.settingsPrivate.PrefObject<number> | undefined;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    protected showQualityLogging_(): boolean;
    protected showDoubleCtrlShortcut_(): boolean;
    protected showConsiderNoLoggingEnterprise_(): boolean;
    protected onManageConnectedAppsClick_(): void;
    protected onToggleSettingsBooleanControlChange_(e: Event): void;
    protected onAtMemoryShortcutUpdated_(event: CustomEvent<string>): void;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-suggestions-from-gemini-page': SettingsSuggestionsFromGeminiPageElement;
    }
}
export {};
