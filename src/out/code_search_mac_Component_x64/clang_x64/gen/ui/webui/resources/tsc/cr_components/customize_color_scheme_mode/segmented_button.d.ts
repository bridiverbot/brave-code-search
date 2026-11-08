import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class SegmentedButtonElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selected: {
            type: StringConstructor;
            notify: boolean;
        };
        selectableElements: {
            type: StringConstructor;
        };
        groupAriaLabel: {
            type: StringConstructor;
        };
    };
    accessor selected: string | undefined;
    accessor selectableElements: string;
    accessor groupAriaLabel: string;
    protected onSelectedChanged_(e: CustomEvent<{
        value: string;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'segmented-button': SegmentedButtonElement;
    }
}
