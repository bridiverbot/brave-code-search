/**
 * @fileoverview
 * 'settings-default-browser-page' is the settings page that contains
 * settings to change the default browser (i.e. which the OS will open).
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../settings_page/settings_section.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
declare const SettingsDefaultBrowserPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export declare class SettingsDefaultBrowserPageElement extends SettingsDefaultBrowserPageElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        canPin_: {
            type: BooleanConstructor;
        };
        isDefault_: {
            type: BooleanConstructor;
        };
        isSecondaryInstall_: {
            type: BooleanConstructor;
        };
        isUnknownError_: {
            type: BooleanConstructor;
        };
        maySetDefaultBrowser_: {
            type: BooleanConstructor;
        };
        userValueDefaultBrowserStringsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor canPin_: boolean;
    protected accessor isDefault_: boolean;
    protected accessor isSecondaryInstall_: boolean;
    protected accessor isUnknownError_: boolean;
    protected accessor maySetDefaultBrowser_: boolean;
    protected accessor userValueDefaultBrowserStringsEnabled_: boolean;
    private browserProxy_;
    connectedCallback(): void;
    currentRouteChanged(newRoute: Route): void;
    private updateDefaultBrowserState_;
    protected getMakeDefaultLabel(): string;
    protected onSetDefaultBrowserClick_(): void;
    searchContents(query: string): Promise<import("../search_settings.js").SearchResult>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-default-browser-page': SettingsDefaultBrowserPageElement;
    }
}
export {};
