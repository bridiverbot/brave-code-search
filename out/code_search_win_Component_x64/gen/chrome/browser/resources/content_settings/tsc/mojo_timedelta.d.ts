import { CustomElement } from 'chrome://resources/js/custom_element.js';
export declare class MojoTimedeltaElement extends CustomElement {
    static observedAttributes: string[];
    static get template(): string | TrustedHTML;
    constructor();
    attributeChangedCallback(name: string, _oldValue: string, newValue: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'mojo-timedelta': MojoTimedeltaElement;
    }
}
