import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare const COLLAPSE_THRESHOLD = 200;
export interface KeyValuePairEntry {
    key: string;
    value: string;
}
export declare class KeyValuePairEntryElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        entry: {
            type: ObjectConstructor;
        };
        collapsible_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        collapsed: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor entry: KeyValuePairEntry;
    accessor collapsed: boolean;
    protected accessor collapsible_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getHref_(): string;
    protected onButtonClick_(): void;
    protected getButtonText_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'key-value-pair-entry': KeyValuePairEntryElement;
    }
}
