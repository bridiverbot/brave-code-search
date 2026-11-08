import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { DataCollectorItem } from './browser_proxy.js';
declare const DataCollectorsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./support_tool_page_mixin_lit.js").SupportToolPageMixinLitInterface);
export declare class DataCollectorsElement extends DataCollectorsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dataCollectors_: {
            type: ArrayConstructor;
        };
        allSelected_: {
            type: BooleanConstructor;
        };
    };
    protected accessor dataCollectors_: DataCollectorItem[];
    protected accessor allSelected_: boolean;
    private browserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    getDataCollectors(): DataCollectorItem[];
    protected onAllSelectedCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDataCollectorCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-collectors': DataCollectorsElement;
    }
}
export {};
