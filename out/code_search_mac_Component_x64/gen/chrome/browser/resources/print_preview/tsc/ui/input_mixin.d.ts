import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
/**
 * Helper functions for an input with timeout.
 */
declare global {
    interface HTMLElementEventMap {
        'input-change': CustomEvent<string>;
    }
}
type Constructor<T> = new (...args: any[]) => T;
export declare const InputMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<InputMixinInterface>;
export interface InputMixinInterface {
    /**
     * @return The cr-input or input element the behavior should use. Should be
     *     overridden by elements using this behavior.
     */
    getInput(): (CrInputElement | HTMLInputElement);
    resetString(): void;
    resetAndUpdate(): void;
}
export {};
