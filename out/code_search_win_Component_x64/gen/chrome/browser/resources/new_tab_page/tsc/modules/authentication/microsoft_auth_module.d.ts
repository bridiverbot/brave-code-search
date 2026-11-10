import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../module_header.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import type { MenuItem, ModuleHeaderElement } from '../module_header.js';
export interface MicrosoftAuthModuleElement {
    $: {
        moduleHeader: ModuleHeaderElement;
        signInButton: HTMLButtonElement;
    };
}
declare const MicrosoftAuthModuleElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
/**
 * The Microsoft Authentication module, which enables users to sign in with
 * their Microsoft accounts and authenticate data retrieval from various
 * Microsoft services, such as Sharepoint and Outlook.
 */
export declare class MicrosoftAuthModuleElement extends MicrosoftAuthModuleElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    protected getMenuItems_(): MenuItem[];
    protected onDisableButtonClick_(): void;
    protected onSignInClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-microsoft-auth-module': MicrosoftAuthModuleElement;
    }
}
export declare const microsoftAuthModuleDescriptor: ModuleDescriptor;
export {};
