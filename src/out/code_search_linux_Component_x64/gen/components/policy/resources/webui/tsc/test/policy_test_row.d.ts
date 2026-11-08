import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PolicyInfo, PolicySchema } from './policy_test_browser_proxy.js';
export declare class PolicyTestRowElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        namespaces: {
            type: ArrayConstructor;
        };
        policyNamespace: {
            type: StringConstructor;
        };
        policyNames: {
            type: ArrayConstructor;
        };
        policyName: {
            type: StringConstructor;
        };
        valueType: {
            type: StringConstructor;
        };
        policyValue: {
            type: StringConstructor;
        };
        policyPreset: {
            type: NumberConstructor;
        };
        policySource: {
            type: NumberConstructor;
        };
        policyScope: {
            type: NumberConstructor;
        };
        policyLevel: {
            type: NumberConstructor;
        };
        presetDisabled: {
            type: BooleanConstructor;
        };
        nameError: {
            type: BooleanConstructor;
        };
        valueError: {
            type: BooleanConstructor;
        };
        namespaceError: {
            type: BooleanConstructor;
        };
        schema: {
            type: ObjectConstructor;
        };
        initialValues: {
            type: ObjectConstructor;
        };
    };
    accessor namespaces: string[];
    accessor policyNamespace: string;
    accessor policyNames: string[];
    accessor policyName: string;
    accessor valueType: string;
    accessor policyValue: string;
    accessor policyPreset: number;
    accessor policySource: number;
    accessor policyScope: number;
    accessor policyLevel: number;
    accessor presetDisabled: boolean;
    accessor nameError: boolean;
    accessor valueError: boolean;
    accessor namespaceError: boolean;
    accessor schema: PolicySchema | null;
    accessor initialValues: PolicyInfo | null;
    private schema_?;
    constructor();
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    getErrorState(): boolean;
    getBoolOptions(): string[];
    setSchema(schema: PolicySchema): void;
    private updatePolicyNamespaces;
    updatePolicyNames(): void;
    private updateValueType;
    private isValidPolicyName;
    onNamespaceChange(e: Event): void;
    onNameChange(e: Event): void;
    onValueChange(e: Event): void;
    onValueInput(e: Event): void;
    onPresetChange(e: Event): void;
    protected onFocus(e: Event): void;
    onSourceChange(e: Event): void;
    onScopeChange(e: Event): void;
    onLevelChange(e: Event): void;
    onRemoveClick(): void;
    setInitialValues(initialValues: PolicyInfo): void;
    getPolicyValue(): string | number | boolean | unknown[] | object;
    getPolicyNamespace(): string;
    getPolicyName(): string;
    getPolicyAttribute(attributeName: string): string;
    getStringPolicyAttribute(attributeName: string): string | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'policy-test-row': PolicyTestRowElement;
    }
}
