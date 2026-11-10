/**
 * @fileoverview
 * 'settings-ai-page-index' is the settings page containing settings for ai
 * features.
 */
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './ai_info_card.js';
import './ai_mode_search_page.js';
import './ai_page.js';
import '../geic_page/geic_page.js';
import '../geic_page/geic_subpage.js';
import '../glic_page/glic_page.js';
import '../glic_page/glic_subpage.js';
import './inline_cue_menu_page.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route, SettingsRoutes } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
export interface SettingsAiPageIndexElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const SettingsAiPageIndexElementBase: typeof CrLitElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../settings_page/searchable_view_container_mixin_lit.js").SearchableViewContainerMixinLitInterface);
export declare class SettingsAiPageIndexElement extends SettingsAiPageIndexElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        routes_: {
            type: ObjectConstructor;
        };
        showGlicSettings_: {
            type: BooleanConstructor;
        };
        showGeicSettings_: {
            type: BooleanConstructor;
        };
        showAiPageAiFeatureSection_: {
            type: BooleanConstructor;
        };
        showComposeControl_: {
            type: BooleanConstructor;
        };
        showHistorySearchControl_: {
            type: BooleanConstructor;
        };
        enableAiModeSearchSetting_: {
            type: BooleanConstructor;
        };
        actorLoginFederatedLoginSupportEnabled_: {
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
        showDictationControl_: {
            type: BooleanConstructor;
        };
    };
    protected accessor routes_: SettingsRoutes;
    protected accessor showGlicSettings_: boolean;
    protected accessor showGeicSettings_: boolean;
    protected accessor showAiPageAiFeatureSection_: boolean;
    protected accessor showComposeControl_: boolean;
    protected accessor showHistorySearchControl_: boolean;
    protected accessor enableAiModeSearchSetting_: boolean;
    protected accessor actorLoginFederatedLoginSupportEnabled_: boolean;
    protected accessor showAiSuggestionsControl_: boolean;
    protected accessor showInlineCueMenuControl_: boolean;
    protected accessor showSkillsSettingPage_: boolean;
    protected accessor showDictationControl_: boolean;
    private showDefaultViews_;
    protected shouldShowPermissionsPage_(): boolean;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-ai-page-index': SettingsAiPageIndexElement;
    }
}
export {};
