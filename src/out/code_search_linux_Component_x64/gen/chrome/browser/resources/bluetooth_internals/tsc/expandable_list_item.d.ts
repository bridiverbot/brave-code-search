import { CustomElement } from 'chrome://resources/js/custom_element.js';
/**
 * A list item that has expandable content that toggles when the item is
 * clicked.
 */
export declare class ExpandableListItemElement extends CustomElement {
    static get template(): string | TrustedHTML;
    connectedCallback(): void;
    private onExpand_;
}
declare global {
    interface HTMLElementTagNameMap {
        'expandable-list-item': ExpandableListItemElement;
    }
}
