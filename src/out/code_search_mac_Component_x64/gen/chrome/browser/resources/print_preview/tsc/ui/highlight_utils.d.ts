/**
 * @param element The element to update. Element should have a shadow root.
 * @param query The current search query
 * @param bubbles A map of bubbles created / results found so far.
 * @return The highlight wrappers that were created.
 */
export declare function updateHighlights(element: HTMLElement, query: RegExp | null, bubbles: Map<HTMLElement, number>): HTMLElement[];
