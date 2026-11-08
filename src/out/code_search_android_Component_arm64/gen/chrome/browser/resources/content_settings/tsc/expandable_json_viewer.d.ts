import { CustomElement } from 'chrome://resources/js/custom_element.js';
/**
 * A container that expands to show its contents when clicked
 */
export declare class ExpandableJsonViewerElement extends CustomElement {
    static get template(): string | TrustedHTML;
    private boundOnExpand_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    configure(child: HTMLElement, title: string): void;
    getTitleTextForTesting(): string;
    /** @private */
    onExpand(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'expandable-json-viewer': ExpandableJsonViewerElement;
    }
}
