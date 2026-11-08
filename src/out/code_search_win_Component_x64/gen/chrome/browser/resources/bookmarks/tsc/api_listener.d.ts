/**
 * Tracks any items that are created or moved.
 */
export declare function trackUpdatedItems(): void;
/**
 * Highlights any items that have been updated since |trackUpdatedItems| was
 * called. Should be called after a user action causes new items to appear in
 * the main list.
 */
export declare function highlightUpdatedItems(): void;
export declare function init(): void;
export declare function destroy(): void;
export declare function setDebouncerForTesting(): void;
