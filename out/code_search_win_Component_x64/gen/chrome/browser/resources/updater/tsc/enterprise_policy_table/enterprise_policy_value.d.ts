import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export declare class EnterprisePolicyValueElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        policyName: {
            type: StringConstructor;
        };
        value: {
            type: ObjectConstructor;
        };
        formattedValue: {
            type: StringConstructor;
        };
    };
    accessor policyName: string;
    accessor value: string | number | Record<string, unknown>;
    protected accessor formattedValue: string;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeFormattedValue;
    private computeFormattedLastCheckPeriod;
    private computeFormattedUpdatesSuppressed;
    private computeFormattedPackageCacheSizeLimit;
    private computeFormattedPackageCacheExpires;
}
declare global {
    interface HTMLElementTagNameMap {
        'enterprise-policy-value': EnterprisePolicyValueElement;
    }
}
