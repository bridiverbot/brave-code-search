/**
 * Regular expression to check for all variants of blu[e]toot[h] with or without
 * space between the words; for BT when used as an individual word, or as two
 * individual characters, and for BLE, BlueZ, and Floss when used as an
 * individual word. Case insensitive matching.
 */
export declare const BT_REGEX: RegExp;
/**
 * Regular expression to check for wifi-related keywords.
 */
export declare const WIFI_REGEX: RegExp;
/**
 * Regular expression to check for cellular-related keywords.
 */
export declare const CELLULAR_REGEX: RegExp;
/**
 * Regular expression to check for display-related keywords.
 */
export declare const DISPLAY_REGEX: RegExp;
/**
 * Regular expression to check for USB-related keywords.
 */
export declare const USB_REGEX: RegExp;
/**
 * Regular expression to check for thunderbolt-related keywords.
 */
export declare const THUNDERBOLT_REGEX: RegExp;
/**
 * Regular expression to check for all strings indicating that a user can't
 * connect to a HID or Audio device. This is also a likely indication of a
 * Bluetooth related issue.
 * Sample strings this will match:
 * "I can't connect the speaker!",
 * "The keyboard has connection problem."
 */
export declare const CANNOT_CONNECT_REGEX: RegExp;
/**
 * Regular expression to check for "tether" or "tethering". Case insensitive
 * matching.
 */
export declare const TETHER_REGEX: RegExp;
/**
 * Regular expression to check for "Smart (Un)lock" or "Easy (Un)lock" with or
 * without space between the words. Case insensitive matching.
 */
export declare const SMART_LOCK_REGEX: RegExp;
/**
 * Regular expression to check for keywords related to Nearby Share like
 * "nearby (share)" or "phone (hub)".
 * Case insensitive matching.
 */
export declare const NEARBY_SHARE_REGEX: RegExp;
/**
 * Regular expression to check for keywords related to Fast Pair like
 * "fast pair".
 * Case insensitive matching.
 */
export declare const FAST_PAIR_REGEX: RegExp;
/**
 * Regular expression to check for Bluetooth device specific keywords.
 */
export declare const BT_DEVICE_REGEX: RegExp;
