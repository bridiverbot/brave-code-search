/**
 * @fileoverview PasswordPreviewItem represents one row in a list of passwords.
 */
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../site_favicon.js';
import '../shared_style.css.js';
import type { CrCheckboxElement } from 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface PasswordPreviewItemElement {
    $: {
        checkbox: CrCheckboxElement;
        website: HTMLElement;
        username: HTMLElement;
        password: HTMLInputElement;
        showPasswordButton: CrIconButtonElement;
    };
}
declare const PasswordPreviewItemElementBase: typeof PolymerElement & (new (...args: any[]) => import("../show_password_mixin.js").ShowPasswordMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class PasswordPreviewItemElement extends PasswordPreviewItemElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        passwordId: NumberConstructor;
        url: StringConstructor;
        username: StringConstructor;
        password: StringConstructor;
        first: BooleanConstructor;
        checked: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
    };
    passwordId: number;
    url: string;
    username: string;
    password: string;
    first: boolean;
    checked: boolean;
    private getElementClass_;
    private getPasswordValue_;
    private getShowHidePasswordButtonA11yLabel_;
}
declare global {
    interface HTMLElementTagNameMap {
        'password-preview-item': PasswordPreviewItemElement;
    }
}
export {};
