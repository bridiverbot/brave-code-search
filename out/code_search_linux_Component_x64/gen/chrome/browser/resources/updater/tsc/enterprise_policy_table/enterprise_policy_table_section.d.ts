import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import './enterprise_policy_value.js';
import '../icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PolicyData, PolicyValue } from '../event_history.js';
export interface RowData {
    name: string;
    policy: PolicyData;
    isExpanded: boolean;
    hasConflict: boolean;
}
export declare class EnterprisePolicyTableSectionElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        rowData: {
            type: ArrayConstructor;
        };
    };
    accessor rowData: RowData[];
    protected canExpand(item: RowData): boolean;
    protected onExpandButtonClick(e: Event): void;
    protected prevailingValue(item: RowData): PolicyValue;
}
declare global {
    interface HTMLElementTagNameMap {
        'enterprise-policy-table-section': EnterprisePolicyTableSectionElement;
    }
}
