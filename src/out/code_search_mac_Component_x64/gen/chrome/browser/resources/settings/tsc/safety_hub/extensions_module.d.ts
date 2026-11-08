import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../i18n_setup.js';
import './safety_hub_module.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
/**
 * @fileoverview
 * 'settings-safety-hub-extensions-module' is used by the safety hub page
 * to alert users that they have potentially harmful extensions that they
 * should review.
 */
export interface SettingsSafetyHubExtensionsModuleElement {
    $: {
        reviewButton: HTMLElement;
    };
}
declare const SettingsSafetyHubExtensionsModuleElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsSafetyHubExtensionsModuleElement extends SettingsSafetyHubExtensionsModuleElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        headerString_: {
            type: StringConstructor;
        };
    };
    protected accessor headerString_: string;
    connectedCallback(): Promise<void>;
    private onSafetyCheckExtensionsChanged_;
    protected onReviewButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-safety-hub-extensions-module': SettingsSafetyHubExtensionsModuleElement;
    }
}
export {};
