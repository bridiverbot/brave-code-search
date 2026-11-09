import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '/strings.m.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ExtensionsRestrictedSitesDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
declare const ExtensionsRestrictedSitesDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsRestrictedSitesDialogElement extends ExtensionsRestrictedSitesDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        firstRestrictedSite: {
            type: StringConstructor;
        };
    };
    accessor firstRestrictedSite: string;
    isOpen(): boolean;
    wasConfirmed(): boolean;
    protected onCancelClick_(): void;
    protected onSubmitClick_(): void;
    protected getDialogTitle_(): string;
    protected getDialogWarning_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-restricted-sites-dialog': ExtensionsRestrictedSitesDialogElement;
    }
}
export {};
