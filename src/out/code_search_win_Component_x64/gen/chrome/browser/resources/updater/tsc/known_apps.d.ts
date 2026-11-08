/**
 * Produces a map of app names to their lower-case app IDs.
 */
export declare function getKnownApps(): Map<string, string[]>;
/**
 * Produces a map of app IDs to app names as the inverse of getKnownApps.
 */
export declare function getKnownAppNamesById(): Map<string, string>;
