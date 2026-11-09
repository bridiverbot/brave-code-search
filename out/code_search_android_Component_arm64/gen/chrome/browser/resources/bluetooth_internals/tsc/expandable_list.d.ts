import { CustomElement } from 'chrome://resources/js/custom_element.js';
export declare abstract class ExpandableListElement<T> extends CustomElement {
    static get template(): string | TrustedHTML;
    connectedCallback(): void;
    /**
     * Sets the data model of the list.
     */
    setData(data: T[]): void;
    abstract createItem(itemData: T): Element;
    /**
     * Sets the empty message text.
     */
    setEmptyMessage(message: string): void;
    /**
     * Sets the spinner display state. If |showing| is true, the loading
     * spinner is displayed.
     */
    setSpinnerShowing(showing: boolean): void;
    /**
     * Gets the spinner display state. Returns true if the spinner is showing.
     */
    isSpinnerShowing(): boolean;
    /**
     * Updates the display state of the empty message. If there are no items in
     * the data model, the empty message is displayed.
     * @param empty Whether the list is empty.
     */
    private updateMessageDisplay_;
}
