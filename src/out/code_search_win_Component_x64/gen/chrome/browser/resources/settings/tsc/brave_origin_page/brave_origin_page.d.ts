import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/brave/leo.bundle.js';
import '../relaunch_confirmation_dialog.js';
import './brave_origin_onboarding.js';
import './origin_toggle_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchResult } from '../search_settings.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
declare const SettingsBraveOriginPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("../relaunch_mixin_lit.js").RelaunchMixinLitInterface);
/**
 * 'settings-brave-origin-page' is the settings page containing
 * Brave Origin features.
 */
export declare class SettingsBraveOriginPageElement extends SettingsBraveOriginPageElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isPurchased_: {
            type: BooleanConstructor;
        };
        showRestartToast_: {
            type: BooleanConstructor;
        };
        isPlaylistFeatureEnabled_: {
            type: BooleanConstructor;
        };
        isPsstEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor isPurchased_: boolean;
    accessor showRestartToast_: boolean;
    accessor isPlaylistFeatureEnabled_: boolean;
    accessor isPsstEnabled_: boolean;
    private braveOriginHandler_;
    private boundOnVisibilityChange_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onVisibilityChange_;
    private checkPurchaseState_;
    onResetToDefaultsClick_(): Promise<void>;
    onPolicyValueChanged_(): void;
    private checkNeedsRestart_;
    getOriginRestartPaddingClass_(showRestartToast: boolean): string;
    onRestartClick_(e: Event): void;
    searchContents(query: string): Promise<SearchResult>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-brave-origin-page': SettingsBraveOriginPageElement;
    }
}
export {};
