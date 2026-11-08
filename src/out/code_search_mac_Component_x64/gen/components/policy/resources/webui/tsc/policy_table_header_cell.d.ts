import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PolicyUiModel } from './policy_row.js';
export declare class PolicyTableHeaderCellElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        field: {
            type: StringConstructor;
        };
        headerTitle: {
            type: StringConstructor;
        };
        sortedColumn: {
            type: StringConstructor;
        };
        sortAscending: {
            type: BooleanConstructor;
        };
        noSort: {
            type: BooleanConstructor;
        };
    };
    accessor field: keyof PolicyUiModel;
    accessor headerTitle: string;
    accessor sortedColumn: keyof PolicyUiModel;
    accessor sortAscending: boolean;
    accessor noSort: boolean;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private updateAriaSort;
    protected onSortUpClick(): void;
    protected onSortDownClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'policy-table-header-cell': PolicyTableHeaderCellElement;
    }
}
