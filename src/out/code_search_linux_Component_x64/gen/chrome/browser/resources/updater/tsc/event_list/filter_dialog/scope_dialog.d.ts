import './filter_dialog.js';
import './filter_dialog_footer.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class ScopeDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        anchorElement: {
            type: ObjectConstructor;
        };
        pendingSelections: {
            type: ObjectConstructor;
        };
        initialSelections: {
            type: ObjectConstructor;
        };
    };
    accessor anchorElement: HTMLElement | null;
    protected accessor pendingSelections: Set<"SYSTEM" | "USER">;
    accessor initialSelections: Set<"SYSTEM" | "USER">;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    protected onKeydown(e: KeyboardEvent): void;
    protected onCheckedChanged(e: Event): void;
    protected onApplyClick(): void;
    protected onCancelClick(): void;
    protected onClose(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'scope-dialog': ScopeDialogElement;
    }
}
