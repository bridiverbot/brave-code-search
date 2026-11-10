import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
/**
 * Helper functions for a select with timeout. Implemented by select settings
 * sections, so that the preview does not immediately begin generating and
 * freeze the dropdown when the value is changed.
 * Assumes that the elements using this mixin have no more than one <select>
 * element. Clients should:
 * (1) Bind `selectedValue` to the <select>'s `value` property.
 * (2) Register `onSelectChange` as an event listener for the <select>'s
 *     `change` event.
 * (3) Override `onProcessSelectChange` to receive notifications of new values
 *     set from the UI.
 */
type Constructor<T> = new (...args: any[]) => T;
export declare const SelectMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<SelectMixinInterface>;
export interface SelectMixinInterface {
    selectedValue: string;
    onSelectChange(e: Event): void;
    /**
     * Should be overridden by elements using this mixin to receive select
     * value updates.
     * @param value The new select value to process.
     */
    onProcessSelectChange(value: string): void;
}
export {};
