/**
 * @fileoverview
 * 'settings-anti-abuse-page' is the settings page containing anti-abuse
 * settings.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_subpage.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
export interface SettingsAntiAbusePageElement {
    $: {
        toggleButton: SettingsToggleButtonElement;
    };
}
export type AntiAbusePageElement = SettingsAntiAbusePageElement;
declare const AntiAbuseElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../site_settings/site_settings_mixin_lit.js").SiteSettingsMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsAntiAbusePageElement extends AntiAbuseElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    connectedCallback(): void;
    private onCategoryChanged_;
    private updateToggleValue_;
    /**
     * A handler for changing the default permission value for the anti-abuse
     * content type.
     */
    protected onSettingsBooleanControlChange_(): void;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-anti-abuse-page': SettingsAntiAbusePageElement;
    }
}
export {};
