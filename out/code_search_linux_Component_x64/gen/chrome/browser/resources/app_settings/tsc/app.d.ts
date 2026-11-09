import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import '/strings.m.js';
import './app_content_item.js';
import './file_handling_item.js';
import './more_permissions_item.js';
import './run_on_os_login_item.js';
import './permission_item.js';
import './window_mode_item.js';
import './icons.html.js';
import './uninstall_button.js';
import './supported_links_item.js';
import './supported_links_overlapping_apps_dialog.js';
import './supported_links_dialog.js';
import type { App } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import type { AppMap } from 'chrome://resources/cr_components/app_management/constants.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const AppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class AppElement extends AppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        app_: {
            type: ObjectConstructor;
        };
        iconUrl_: {
            type: StringConstructor;
        };
        showSearch_: {
            type: BooleanConstructor;
        };
        apps_: {
            type: ObjectConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor app_: App;
    protected accessor apps_: AppMap;
    protected accessor iconUrl_: string;
    protected accessor showSearch_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private onAppChanged_;
    private onAppRemoved_;
    protected getPermissionsHeader_(): string;
    protected getTitle_(): string;
    protected shouldShowSystemNotificationsSettingsLink_(): boolean;
    protected isIsolatedWebApp_(): boolean;
    protected onNotificationsSystemSettingsLinkClicked_(e: CustomEvent<{
        event: Event;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'web-app-settings-app': AppElement;
    }
}
export {};
