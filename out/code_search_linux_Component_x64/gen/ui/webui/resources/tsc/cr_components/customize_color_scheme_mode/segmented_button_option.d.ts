import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
declare const SegmentedButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/cr_radio_button/cr_radio_button_mixin_lit.js").CrRadioButtonMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/cr_ripple/cr_ripple_mixin.js").CrRippleMixinInterface);
export declare class SegmentedButtonOptionElement extends SegmentedButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    createRipple(): import("//resources/cr_elements/cr_ripple/cr_ripple.js").CrRippleElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'segmented-button-option': SegmentedButtonOptionElement;
    }
}
export {};
