import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SpinnerPageElement {
    $: {
        cancelButton: CrButtonElement;
    };
}
declare const SpinnerPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("./support_tool_page_mixin_lit.js").SupportToolPageMixinLitInterface);
export declare class SpinnerPageElement extends SpinnerPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pageTitle: {
            type: StringConstructor;
        };
    };
    protected accessor pageTitle: string;
    private browserProxy_;
    protected onCancelClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'spinner-page': SpinnerPageElement;
    }
}
export {};
