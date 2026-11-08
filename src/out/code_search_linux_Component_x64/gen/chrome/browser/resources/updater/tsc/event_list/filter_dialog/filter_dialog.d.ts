import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export interface FilterDialogElement {
    $: {
        dialog: HTMLDialogElement;
    };
}
export declare class FilterDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        anchorElement: {
            type: ObjectConstructor;
        };
    };
    private eventTracker;
    accessor anchorElement: HTMLElement | null;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private positionDialog;
    protected onClose(): void;
    protected onCancel(e: Event): void;
    protected onPointerdown(e: PointerEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'filter-dialog': FilterDialogElement;
    }
}
