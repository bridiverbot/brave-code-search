import './policy_test_row.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PolicyInfo, PolicySchema } from './policy_test_browser_proxy.js';
export declare class PolicyTestTableElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        schema: {
            type: ObjectConstructor;
        };
        rows: {
            type: ArrayConstructor;
        };
    };
    accessor schema: PolicySchema | null;
    accessor rows: PolicyInfo[];
    connectedCallback(): void;
    setSchema(schema: PolicySchema): void;
    clearRows(): void;
    addEmptyRow(): void;
    addRow(initialValues: PolicyInfo): void;
    getTestPoliciesJsonString(): string;
    protected onRemoveRow(e: Event): void;
    protected onAddPolicyClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'policy-test-table': PolicyTestTableElement;
    }
}
