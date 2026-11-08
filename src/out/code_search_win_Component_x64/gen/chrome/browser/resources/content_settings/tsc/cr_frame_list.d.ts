import { CustomElement } from 'chrome://resources/js/custom_element.js';
declare global {
    interface HTMLElementEventMap {
        'selected-index-change': CustomEvent<number>;
    }
}
export declare class CrFrameListElement extends CustomElement {
    static get template(): string | TrustedHTML;
    static get observedAttributes(): string[];
    private tabs_;
    private focusOutlineManager_;
    constructor();
    connectedCallback(): void;
    /**
     * Sets up tabs: selects the active tab.
     */
    initializeOrProcessTabs(): void;
    setupEventListeners(): void;
    attributeChangedCallback(name: string, _oldValue: string, newValue: string): void;
    private getSlottedTabs_;
    private getSlottedPanels_;
    private onKeydown_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-frame-list': CrFrameListElement;
    }
}
