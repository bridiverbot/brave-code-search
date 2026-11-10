import { CustomElement } from 'chrome://resources/js/custom_element.js';
export declare class MojoTimestampElement extends CustomElement {
    static observedAttributes: string[];
    static get template(): string | TrustedHTML;
    constructor();
    mojoTsToJsDate(mojoTs: bigint): Date;
    attributeChangedCallback(name: string, _oldValue: string, newValue: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'mojo-timestamp': MojoTimestampElement;
    }
}
