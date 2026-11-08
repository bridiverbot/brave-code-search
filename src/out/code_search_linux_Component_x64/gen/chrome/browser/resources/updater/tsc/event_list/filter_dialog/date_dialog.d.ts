import './filter_dialog.js';
import './filter_dialog_footer.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class DateDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        anchorElement: {
            type: ObjectConstructor;
        };
        pendingStartDate: {
            type: ObjectConstructor;
        };
        pendingEndDate: {
            type: ObjectConstructor;
        };
        initialStartDate: {
            type: ObjectConstructor;
        };
        initialEndDate: {
            type: ObjectConstructor;
        };
    };
    accessor anchorElement: HTMLElement | null;
    private accessor pendingStartDate;
    private accessor pendingEndDate;
    accessor initialStartDate: Date | null;
    accessor initialEndDate: Date | null;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    protected getPendingStartTime(): number;
    protected getPendingEndTime(): number;
    protected onStartTimeInput(e: Event): void;
    protected onEndTimeInput(e: Event): void;
    protected onCancelClick(): void;
    protected onClose(): void;
    protected onDateApplyClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'date-dialog': DateDialogElement;
    }
}
