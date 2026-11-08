import '../cr_radio_button/cr_radio_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class CrRadioGroupElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        selected: {
            type: StringConstructor;
            notify: boolean;
        };
        selectableElements: {
            type: StringConstructor;
        };
        nestedSelectable: {
            type: BooleanConstructor;
        };
        selectableRegExp_: {
            type: ObjectConstructor;
        };
    };
    accessor disabled: boolean;
    accessor selected: string | undefined;
    accessor selectableElements: string;
    accessor nestedSelectable: boolean;
    private accessor selectableRegExp_;
    private buttons_;
    private buttonEventTracker_;
    private deltaKeyMap_;
    private isRtl_;
    private populateBound_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    focus(): void;
    private onKeyDown_;
    private onClick_;
    private populate_;
    private select_;
    private isButtonEnabledAndSelected_;
    private update_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-radio-group': CrRadioGroupElement;
    }
}
