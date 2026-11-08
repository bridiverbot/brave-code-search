import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './ai_logging_info_bullet.js';
import './ai_policy_indicator.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import '../settings_page/settings_subpage.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare const COMPOSE_PROACTIVE_NUDGE_PREF = "compose.proactive_nudge_enabled";
export declare const COMPOSE_PROACTIVE_NUDGE_DISABLED_SITES_PREF = "compose.proactive_nudge_disabled_sites_with_time";
declare const SettingsOfferWritingHelpPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsOfferWritingHelpPageElement extends SettingsOfferWritingHelpPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        siteList_: {
            type: ArrayConstructor;
        };
        enableComposeProactiveNudge_: {
            type: BooleanConstructor;
        };
        enterprisePref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor siteList_: string[];
    protected accessor enableComposeProactiveNudge_: boolean;
    protected accessor enterprisePref_: chrome.settingsPrivate.PrefObject | undefined;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    private recordInteractionMetrics_;
    protected onLearnMoreClick_(): void;
    protected onComposeProactiveNudgeToggleSettingsBooleanControlChange_(e: Event): void;
    protected hasSites_(): boolean;
    protected onDeleteClick_(e: Event): void;
    private onPrefsChanged_;
    protected getLearnMoreUrl_(): string;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-offer-writing-help-page': SettingsOfferWritingHelpPageElement;
    }
}
export {};
