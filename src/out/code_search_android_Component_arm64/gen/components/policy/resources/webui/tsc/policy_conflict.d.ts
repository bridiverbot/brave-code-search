import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Conflict } from './policy.mojom-webui.js';
export declare function stringifyPolicyValue(value: unknown, format?: boolean): string;
export declare function copyValue(element: HTMLElement): void;
export declare class PolicyConflictElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        conflict: {
            type: ObjectConstructor;
        };
        rowLabel: {
            type: StringConstructor;
        };
        policyName: {
            type: StringConstructor;
        };
    };
    accessor conflict: Conflict | null;
    accessor rowLabel: string;
    accessor policyName: string;
    connectedCallback(): void;
    protected getRowLabelText(): string;
    protected getScopeText(): string;
    protected getLevelText(): string;
    protected getSourceText(): string;
    protected getFormattedValue(): string;
    protected getCopyLabel(): string;
    protected onCopyClick(e: Event): void;
    protected getCopyIconSrc(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'policy-conflict': PolicyConflictElement;
    }
}
