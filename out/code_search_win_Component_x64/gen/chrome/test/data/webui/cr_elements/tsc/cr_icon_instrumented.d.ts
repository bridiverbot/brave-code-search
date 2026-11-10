import { CrIconElement } from '//resources/cr_elements/cr_icon/cr_icon.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
declare class CrIconInstrumentedElement extends CrIconElement {
    static get is(): string;
    private updatedCompleteResolver_;
    get updatedComplete(): Promise<void>;
    shouldUpdate(changedProperties: PropertyValues<this>): boolean;
    updated(changedProperties: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-icon-instrumented': CrIconInstrumentedElement;
    }
}
export {};
