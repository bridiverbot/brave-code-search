/**
 * Navigates focus through nested elements given a HTMLElement parent
 * node with child nodes with specific element types such as `div` or custom
 * elements like `power-bookmark-row`
 *
 * This service can focus elements across shadow doms.
 */
export declare class KeyArrowNavigationService {
    /**
     * List of focusable HTMLElement nodes representing focusable elements in a
     * flat format sorted by tab order.
     */
    private elements_;
    private rootElement_;
    private focusIndex_;
    private childrenQuerySelector_;
    constructor(rootElement: HTMLElement, querySelector: string);
    private boundKeyArrowListener_;
    /**
     * Creates listeners for the root element.
     * Invoke during setup.
     */
    startListening(): void;
    /**
     * Cleans up any listeners created by the startListening method.
     * Invoke during teardown.
     */
    stopListening(): void;
    /**
     * Inserts elements to the `elements_` list next to the current `focusIndex_`
     * position.
     *
     * @param parentElement parent node from which nested elements will be added
     */
    addElementsWithin(parentElement: HTMLElement): void;
    /**
     * Collapses nested elements from a given HTMLElement node by traversing the
     * given element to verify if any child elements have nested children and
     * account for these when removing elements from the main elements list.
     *
     * @param parentElement parent node from which nested elements will be removed
     */
    removeElementsWithin(parentElement: HTMLElement): void;
    /**
     * Used to manually focus on a specific element when the keyboard focus is
     * currently on an element, and a click event focuses on a different element
     * therefore having to move the `focusIndex` to the element being clicked.
     *
     * Returns false if no element was found.
     *
     * @param element Target element to focus on
     */
    setCurrentFocusIndex(element: HTMLElement): boolean;
    /**
     * Rebuilds the navigation structure from an optional given element, if not
     * it will default to the existing root node.
     *
     * @param rootElement
     */
    rebuildNavigationElements(rootElement?: HTMLElement): void;
    /**
     * Returns the current focused element, may be used for testing.
     *
     * @returns the current focused element
     */
    getElementAtFocusIndexForTesting(): HTMLElement;
    /**
     * Returns the focusable elements list, may be used for testing.
     *
     * @returns HTML element list
     */
    getElementsForTesting(): HTMLElement[];
    /**
     * Returns the amount of focusable elements in the current list.
     *
     * @returns Number of tree elements
     */
    getElementCount(): number;
    /**
     * Moves the focus on the current tree to either the next or the previous
     * element depending on the direction that is passed in.
     */
    moveFocus(direction: -1 | 1): void;
    private handleKeyArrowEvent_;
    private focusCurrentIndex_;
    private findElementIndex_;
    private traverseElements_;
    static getInstance(): KeyArrowNavigationService;
    static setInstance(obj: KeyArrowNavigationService): void;
}
