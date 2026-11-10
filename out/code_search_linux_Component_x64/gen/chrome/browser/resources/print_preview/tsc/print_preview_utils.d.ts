import type { Iconset } from 'chrome://resources/cr_elements/cr_icon/iconset_map.js';
import type { LocalizedString } from './data/cdd.js';
export interface Range {
    to: number;
    from: number;
}
/**
 * Returns true if the contents of the two page ranges are equal.
 */
export declare function areRangesEqual(array1: Range[], array2: Range[]): boolean;
/**
 * @param localizedStrings An array of strings with corresponding locales.
 * @return A string for the current locale. An empty string if there's
 *     no string for the current locale found.
 */
export declare function getStringForCurrentLocale(localizedStrings: LocalizedString[]): string;
/**
 * Returns background images (icon and dropdown arrow) for use in a md-select.
 * @param iconset The iconset the icon is in.
 * @param iconName The icon name
 * @param el The element that contains the select.
 * @return String containing inlined SVG of the icon and
 *     url(path_to_arrow) separated by a comma.
 */
export declare function getSelectDropdownBackground(iconset: Iconset, iconName: string, el: HTMLElement): string;
