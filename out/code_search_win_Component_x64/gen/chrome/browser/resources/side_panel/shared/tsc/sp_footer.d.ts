/**
 * @fileoverview A toolbar that rests with its content horizontally centered or
 * pushes itself to the bottom of a flex parent when [pinned].
 */
import '//resources/cr_elements/cr_shared_vars.css.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class SpFooterElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pinned: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor pinned: boolean;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-footer': SpFooterElement;
    }
}
