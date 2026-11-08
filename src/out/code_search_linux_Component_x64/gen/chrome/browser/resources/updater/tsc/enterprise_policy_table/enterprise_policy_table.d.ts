import './enterprise_policy_table_section.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { PolicySet } from '../event_history.js';
import type { RowData } from './enterprise_policy_table_section.js';
export declare class EnterprisePolicyTableElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        policies: {
            type: ObjectConstructor;
        };
        appId: {
            type: StringConstructor;
        };
        hasOnlyDefaultValues: {
            type: BooleanConstructor;
        };
        updaterPolicies: {
            type: ArrayConstructor;
        };
        appPolicies: {
            type: ObjectConstructor;
        };
    };
    accessor policies: PolicySet | undefined;
    accessor appId: string | undefined;
    protected accessor hasOnlyDefaultValues: boolean;
    protected accessor updaterPolicies: RowData[];
    protected accessor appPolicies: {
        [label: string]: RowData[];
    };
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected computeHasOnlyDefaultValues(): boolean;
    protected computeUpdaterPolicies(): RowData[];
    protected computeAppPolicies(): {
        [key: string]: RowData[];
    };
    private makeRowData;
    private getAppLabel;
    protected getAppPoliciesLabel(appLabel: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'enterprise-policy-table': EnterprisePolicyTableElement;
    }
}
