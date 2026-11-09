import type { DetailsProviderRemote } from './discards.mojom-webui.js';
import type { SiteDataProviderRemote } from './site_data.mojom-webui.js';
/**
 * @return Provider of discards details.
 */
export declare function getOrCreateDetailsProvider(): DetailsProviderRemote;
/** @return Provider of site data info */
export declare function getOrCreateSiteDataProvider(): SiteDataProviderRemote;
/**
 * Pluralizes a string according to the given count. Assumes that appending an
 * 's' is sufficient to make a string plural.
 * @param s The string to be made plural if necessary.
 * @param n The count of the number of objects.
 * @return The plural version of |s| if n !== 1, otherwise |s|.
 */
export declare function maybeMakePlural(s: string, n: number): string;
/**
 * Converts a |seconds| interval to a user friendly string.
 * @param seconds The interval to render.
 * @return An English string representing the interval.
 */
export declare function secondsToString(seconds: number): string;
/**
 * Converts a |secondsAgo| duration to a user friendly string.
 * @param secondsAgo The duration to render.
 * @return An English string representing the duration.
 */
export declare function durationToString(secondsAgo: number): string;
/**
 * Returns a string representation of a boolean value for display in a table.
 * @param bool A boolean value.
 * @return A string representing the bool.
 */
export declare function boolToString(bool: boolean): string;
