import { CustomElement } from 'chrome://resources/js/custom_element.js';
/**
 * A fieldset that lists the properties of a given object. These properties
 * are displayed as a series of rows for each key-value pair.
 * Only the object's own properties are displayed. Boolean values are
 * displayed using images: a green check for 'true', and a red cancel 'x' for
 * 'false'. All other types are converted to their string representation for
 * display.
 */
export declare class ObjectFieldsetElement extends CustomElement {
    static get template(): string | TrustedHTML;
    static get is(): string;
    static get observedAttributes(): string[];
    get showAll(): boolean;
    get value(): Record<string, unknown> | null;
    /**
     * Deletes and recreates the table structure with current object data if the
     * object data or "show-all" property have changed.
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'object-fieldset': ObjectFieldsetElement;
    }
}
