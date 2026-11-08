import '/strings.m.js';
import './policy_precedence_row.js';
import './policy_row.js';
import './policy_table_header_cell.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PolicyUiModel } from './policy_row.js';
export interface PolicyTableModel {
    id?: string;
    isExtension?: boolean;
    isWebApp?: boolean;
    name: string;
    policies: NonNullable<Array<NonNullable<PolicyUiModel>>>;
    precedenceOrder?: string[];
}
export declare class PolicyTableElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dataModel: {
            type: ObjectConstructor;
        };
        filterPattern: {
            type: StringConstructor;
        };
        showUnset: {
            type: BooleanConstructor;
        };
        sortAscending: {
            type: BooleanConstructor;
        };
        mostRecentSortedColumn: {
            type: StringConstructor;
        };
        sortedPolicies: {
            type: ArrayConstructor;
        };
    };
    accessor dataModel: PolicyTableModel | null;
    accessor filterPattern: string;
    accessor showUnset: boolean;
    accessor sortAscending: boolean;
    accessor mostRecentSortedColumn: keyof PolicyUiModel;
    accessor sortedPolicies: PolicyUiModel[];
    updateDataModel(dataModel: PolicyTableModel): void;
    setFilterPattern(pattern: string): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected sortColumn(ascending: boolean, field: keyof PolicyUiModel): void;
    protected onSortChanged(e: CustomEvent<{
        field: keyof PolicyUiModel;
        ascending: boolean;
    }>): void;
    protected getSortedPolicies(): PolicyUiModel[];
    protected isPolicyHidden(policy: PolicyUiModel): boolean;
    protected hasVisiblePolicies(): boolean;
    protected shouldShowId(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'policy-table': PolicyTableElement;
    }
}
