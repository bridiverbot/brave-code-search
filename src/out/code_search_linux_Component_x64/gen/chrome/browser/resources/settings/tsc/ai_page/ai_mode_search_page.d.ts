import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import './ai_site_add_dialog.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SettingsAiModeSearchPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export interface SettingsAiModeSearchPageElement {
    $: {
        menu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
export declare class SettingsAiModeSearchPageElement extends SettingsAiModeSearchPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        siteList_: {
            type: ArrayConstructor;
        };
        showAddSiteDialog_: {
            type: BooleanConstructor;
        };
        siteToEdit_: {
            type: StringConstructor;
        };
        enterprisePref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor siteList_: string[];
    protected accessor showAddSiteDialog_: boolean;
    protected accessor siteToEdit_: string;
    protected accessor enterprisePref_: chrome.settingsPrivate.PrefObject | undefined;
    connectedCallback(): void;
    protected isDisabledByPolicy_(): boolean;
    private onSiteExclusionsChanged_;
    protected hasSites_(): boolean;
    protected onAddSiteClick_(): void;
    protected onMenuClick_(e: Event): void;
    protected onEditClick_(): void;
    protected onRemoveSiteClick_(): void;
    protected onAddSiteDialogClose_(): void;
    protected onAddSite_(e: CustomEvent<string>): void;
    getSiteExclusions(): Record<string, number>;
    addSiteExclusion(domain: string, timeAddedMs: number): void;
    removeSiteExclusion(domain: string): void;
    protected onLearnMoreRowClick_(): void;
    protected onLearnMoreClick_(event: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-ai-mode-search-page': SettingsAiModeSearchPageElement;
    }
}
export {};
