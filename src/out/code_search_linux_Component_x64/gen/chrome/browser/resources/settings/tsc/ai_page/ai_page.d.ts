import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import '../settings_page/settings_section.js';
import '../privacy_icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SettingsAiPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsAiPageElement extends SettingsAiPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showComposeControl_: {
            type: BooleanConstructor;
        };
        showHistorySearchControl_: {
            type: BooleanConstructor;
        };
        showPasswordChangeControl_: {
            type: BooleanConstructor;
        };
        showAiSuggestionsControl_: {
            type: BooleanConstructor;
        };
        showInlineCueMenuControl_: {
            type: BooleanConstructor;
        };
        showSkillsSettingPage_: {
            type: BooleanConstructor;
        };
        showIndigoControl_: {
            type: BooleanConstructor;
        };
        showGoogleSearchAiModeWorkspaceControl_: {
            type: BooleanConstructor;
        };
        showDictationControl_: {
            type: BooleanConstructor;
        };
        historySearchPref_: {
            type: ObjectConstructor;
        };
    };
    private accessor historySearchPref_;
    protected accessor showComposeControl_: boolean;
    protected accessor showHistorySearchControl_: boolean;
    protected accessor showPasswordChangeControl_: boolean;
    protected accessor showAiSuggestionsControl_: boolean;
    protected accessor showInlineCueMenuControl_: boolean;
    protected accessor showSkillsSettingPage_: boolean;
    protected accessor showIndigoControl_: boolean;
    protected accessor showGoogleSearchAiModeWorkspaceControl_: boolean;
    protected accessor showDictationControl_: boolean;
    private shouldRecordMetrics_;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    private maybeLogVisibilityMetrics_;
    protected onHistorySearchRowClick_(): void;
    protected onComposeRowClick_(): void;
    protected onPasswordChangeRowClick_(): void;
    protected onAiSuggestionsRowClick_(): void;
    protected onInlineCueMenuRowClick_(): void;
    protected onSkillsRowClick_(): void;
    protected onDictationRowClick_(): void;
    protected getIndigoStartIcon_(): string;
    protected onIndigoRowClick_(): void;
    protected onGoogleSearchAiModeWorkspaceRowClick_(): void;
    private recordInteractionMetrics_;
    protected getHistorySearchSublabel_(): string;
    getFocusConfig(): Map<any, any>;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-ai-page': SettingsAiPageElement;
    }
}
export {};
