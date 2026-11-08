import './mojo_timestamp.js';
import './expandable_json_viewer.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import type { Value } from 'chrome://resources/mojo/mojo/public/mojom/base/values.mojom-webui.js';
export type LogicalFn = (v: Value) => HTMLElement | undefined;
export declare function defaultLogicalFn(_v: Value): HTMLElement | undefined;
export declare function timestampLogicalFn(v: Value): HTMLElement | undefined;
export declare class ValueDisplayElement extends CustomElement {
    static get template(): string | TrustedHTML;
    constructor();
    flattenValue(value: Value): unknown;
    configure(value: Value, logicalFn?: LogicalFn, title?: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'value-display': ValueDisplayElement;
    }
}
