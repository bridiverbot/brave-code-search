import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import type { CrToggleElement } from 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
/**
 * An extensions-toggle-row provides a way of having a clickable row that can
 * modify a cr-toggle, by leveraging the native <label> functionality. It uses
 * a hidden native <input type="checkbox"> to achieve this.
 */
export interface ExtensionsToggleRowElement {
    $: {
        crToggle: CrToggleElement;
        label: HTMLLabelElement;
        native: HTMLInputElement;
    };
}
export declare class ExtensionsToggleRowElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        checked: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor checked: boolean;
    accessor disabled: boolean;
    /**
     * Exposing the clickable part of extensions-toggle-row for testing
     * purposes.
     */
    getLabel(): HTMLElement;
    protected onNativeClick_(e: Event): void;
    private updateChecked_;
    /**
     * Fires when the native checkbox changes value. This happens when the user
     * clicks directly on the <label>.
     */
    protected onNativeChange_(e: Event): void;
    protected onCrToggleChange_(e: CustomEvent<boolean>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-toggle-row': ExtensionsToggleRowElement;
    }
}
