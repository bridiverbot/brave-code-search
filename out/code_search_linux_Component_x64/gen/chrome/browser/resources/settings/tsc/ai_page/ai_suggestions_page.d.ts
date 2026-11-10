import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './ai_policy_indicator.js';
import '../settings_page/settings_subpage.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { FeatureOptInState } from './constants.js';
declare const SettingsAiSuggestionsPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsAiSuggestionsPageElement extends SettingsAiSuggestionsPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enterprisePref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor enterprisePref_: chrome.settingsPrivate.PrefObject | undefined;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    private recordInteractionMetrics_;
    protected computeNumericUncheckedValues_(): FeatureOptInState[];
    protected onLearnMoreLinkClick_(event: Event): void;
    protected onSyncSettingsLinkClick_(event: Event): void;
    protected onShowSuggestionsToggleSettingsBooleanControlChange_(e: Event): void;
    protected isDisabledByPolicy_(): boolean;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-ai-suggestions-page': SettingsAiSuggestionsPageElement;
    }
}
export {};
