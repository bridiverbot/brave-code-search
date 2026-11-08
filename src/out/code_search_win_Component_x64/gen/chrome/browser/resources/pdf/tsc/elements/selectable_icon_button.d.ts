import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SelectableIconButtonElement {
    $: {
        button: CrIconButtonElement;
    };
}
declare const SelectableIconButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/cr_radio_button/cr_radio_button_mixin_lit.js").CrRadioButtonMixinLitInterface);
export declare class SelectableIconButtonElement extends SelectableIconButtonElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        icon: {
            type: StringConstructor;
        };
    };
    accessor icon: string;
    noRipple: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'selectable-icon-button': SelectableIconButtonElement;
    }
}
export {};
