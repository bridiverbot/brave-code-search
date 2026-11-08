import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import './ai_logging_info_bullet.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_subpage.js';
import '../icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { FeatureOptInState } from './constants.js';
declare const SettingsHistorySearchPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsHistorySearchPageElement extends SettingsHistorySearchPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isAnswersFeatureEnabled_: {
            type: BooleanConstructor;
        };
        numericUncheckedValues_: {
            type: ArrayConstructor;
        };
        toggleSubLabelV2_: {
            type: StringConstructor;
        };
        enterprisePref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor isAnswersFeatureEnabled_: boolean;
    protected accessor numericUncheckedValues_: FeatureOptInState[];
    protected accessor toggleSubLabelV2_: string;
    protected accessor enterprisePref_: chrome.settingsPrivate.PrefObject | undefined;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    private recordInteractionMetrics_;
    protected onHistorySearchLinkoutClick_(): void;
    protected onLearnMoreClick_(event: Event): void;
    protected onHistorySearchToggleSettingsBooleanControlChange_(e: Event): void;
    protected getLearnMoreUrl_(): string;
    protected isDisabledByPolicy_(): boolean;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-history-search-page': SettingsHistorySearchPageElement;
    }
}
export {};
