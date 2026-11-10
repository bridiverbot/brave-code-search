import './filter_dialog.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { FilterCategory } from '../filter_bar.js';
export declare class TypeDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        anchorElement: {
            type: ObjectConstructor;
        };
        filterMenuItems: {
            type: ArrayConstructor;
        };
    };
    accessor anchorElement: HTMLElement | null;
    protected accessor filterMenuItems: Array<{
        filterCategory: FilterCategory;
        label: string;
    }>;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    protected onKeydown(e: KeyboardEvent): void;
    protected onClick(e: MouseEvent): void;
    protected onClose(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'type-dialog': TypeDialogElement;
    }
}
