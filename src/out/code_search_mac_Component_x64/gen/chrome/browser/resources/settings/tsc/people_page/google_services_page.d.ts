/**
 * @fileoverview
 * 'settings-google-services-page' is the settings subpage containing controls
 * to manage non-personalized Google services.
 */
import '../settings_page/settings_subpage.js';
import '../privacy_page/personalization_options.js';
import type { SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SettingsGoogleServicesPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsGoogleServicesPageElement extends SettingsGoogleServicesPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The current sync status.
         */
        syncStatus_: {
            type: ObjectConstructor;
        };
    };
    protected accessor syncStatus_: SyncStatus;
    connectedCallback(): void;
    private onSyncStatusChanged_;
    protected shouldShowPageContents_(): boolean;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-google-services-page': SettingsGoogleServicesPageElement;
    }
}
export {};
