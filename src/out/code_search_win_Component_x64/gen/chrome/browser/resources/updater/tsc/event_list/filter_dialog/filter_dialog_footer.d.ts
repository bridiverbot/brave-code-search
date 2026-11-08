import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class FilterDialogFooterElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    protected onCancelClick(): void;
    protected onApplyClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'filter-dialog-footer': FilterDialogFooterElement;
    }
}
