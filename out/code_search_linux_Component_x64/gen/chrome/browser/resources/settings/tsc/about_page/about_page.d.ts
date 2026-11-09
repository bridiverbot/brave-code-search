/**
 * @fileoverview 'settings-about-page' contains version and OS related
 * information.
 */
import '../relaunch_confirmation_dialog.js';
import '../settings_page/settings_section.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
export interface SettingsAboutPageElement {
    $: {
        productLogo: HTMLImageElement;
        deprecationWarning: HTMLElement;
        updateStatusMessage: HTMLElement;
    };
}
declare const SettingsAboutPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../relaunch_mixin_lit.js").RelaunchMixinLitInterface);
export declare class SettingsAboutPageElement extends SettingsAboutPageElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        currentUpdateStatusEvent_: {
            type: ObjectConstructor;
        };
        isManaged_: {
            type: BooleanConstructor;
        };
        managedByIcon_: {
            type: StringConstructor;
        };
        obsoleteSystemInfo_: {
            type: ObjectConstructor;
        };
        showUpdateStatus_: {
            type: BooleanConstructor;
        };
        showButtonContainer_: {
            type: BooleanConstructor;
        };
        showRelaunch_: {
            type: BooleanConstructor;
        };
        feedbackAllowedPref_: {
            type: ObjectConstructor;
        };
    };
    private accessor currentUpdateStatusEvent_;
    protected accessor isManaged_: boolean;
    protected accessor managedByIcon_: string;
    protected accessor obsoleteSystemInfo_: {
        obsolete: boolean;
        endOfLine: boolean;
    };
    protected accessor showUpdateStatus_: boolean;
    protected accessor showButtonContainer_: boolean;
    protected accessor showRelaunch_: boolean;
    protected accessor feedbackAllowedPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    private aboutBrowserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getPromoteUpdaterClass_(): string;
    private startListening_;
    private onUpdateStatusChanged_;
    protected onLearnMoreClick_(event: Event): void;
    protected onHelpClick_(): void;
    protected onRelaunchClick_(): void;
    private updateShowUpdateStatus_;
    protected shouldShowLearnMoreLink_(): boolean;
    protected getUpdateStatusMessage_(): TrustedHTML;
    protected getUpdateStatusIcon_(): string;
    protected shouldShowThrobber_(): boolean;
    private checkStatus_;
    protected onManagementPageClick_(): void;
    protected onProductLogoClick_(): void;
    protected shouldShowIcons_(): boolean;
    searchContents(query: string): Promise<{
        canceled: boolean;
        matchCount: number;
        wasClearSearch: boolean;
    }>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-about-page': SettingsAboutPageElement;
    }
}
export {};
