/**
 * Navigates focus through focusable elements using ArrowUp and ArrowDown keys.
 */
export declare class KeyArrowNavigationService {
    private elements_;
    private rootElement_;
    private focusIndex_;
    private getNavigableElements_;
    private boundKeyArrowListener_;
    private boundFocusInListener_;
    constructor(rootElement: HTMLElement, getNavigableElements: () => HTMLElement[]);
    /**
     * Creates listeners for the root element.
     */
    startListening(): void;
    /**
     * Cleans up listeners created by startListening.
     */
    stopListening(): void;
    /**
     * Sets the current focus index to the specified element.
     * Returns false if the element was not found.
     */
    setCurrentFocusIndex(element: HTMLElement): boolean;
    /**
     * Rebuilds the navigation elements list.
     */
    rebuildNavigationElements(): void;
    /**
     * Returns the element at current focus index for testing.
     */
    getElementAtFocusIndexForTesting(): HTMLElement;
    /**
     * Returns the list of navigable elements for testing.
     */
    getElementsForTesting(): HTMLElement[];
    /**
     * Returns the count of navigable elements.
     */
    getElementCount(): number;
    /**
     * Moves focus by direction (-1 for previous, 1 for next).
     */
    moveFocus(direction: -1 | 1): void;
    private handleFocusInEvent_;
    private handleKeyArrowEvent_;
    private focusCurrentIndex_;
    private findElementIndex_;
    static getInstance(): KeyArrowNavigationService;
    static setInstance(obj: KeyArrowNavigationService): void;
}
