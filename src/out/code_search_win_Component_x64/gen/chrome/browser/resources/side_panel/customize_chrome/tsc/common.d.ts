/**
 * Customize Chrome actions. This enum must match the numbering for
 * NTPCustomizeChromeSidePanelAction in enums.xml. These values are persisted
 * to logs. Entries should not be renumbered, removed or reused.
 *
 * MAX_VALUE should always be at the end to help get the current number of
 * buckets.
 */
export declare enum CustomizeChromeAction {
    EDIT_THEME_CLICKED = 0,
    CATEGORIES_DEFAULT_CHROME_SELECTED = 1,
    CATEGORIES_UPLOAD_IMAGE_SELECTED = 2,
    CATEGORIES_WALLPAPER_SEARCH_SELECTED = 3,
    WALLPAPER_SEARCH_PROMPT_SUBMITTED = 4,
    WALLPAPER_SEARCH_RESULT_IMAGE_SELECTED = 5,
    WALLPAPER_SEARCH_HISTORY_IMAGE_SELECTED = 6,
    CATEGORIES_FIRST_PARTY_COLLECTION_SELECTED = 7,
    FIRST_PARTY_COLLECTION_THEME_SELECTED = 8,
    WALLPAPER_SEARCH_THUMBS_UP_SELECTED = 9,
    WALLPAPER_SEARCH_THUMBS_DOWN_SELECTED = 10,
    WALLPAPER_SEARCH_SUBJECT_DESCRIPTOR_UPDATED = 11,
    WALLPAPER_SEARCH_STYLE_DESCRIPTOR_UPDATED = 12,
    WALLPAPER_SEARCH_MOOD_DESCRIPTOR_UPDATED = 13,
    WALLPAPER_SEARCH_COLOR_DESCRIPTOR_UPDATED = 14,
    WALLPAPER_SEARCH_INSPIRATION_THEME_SELECTED = 15,
    SET_CLASSIC_CHROME_THEME_CLICKED = 16,
    SHOW_SHORTCUTS_TOGGLE_CLICKED = 17,
    SHOW_CARDS_TOGGLE_CLICKED = 18,
    WALLPAPER_SEARCH_APPEARANCE_BUTTON_CLICKED = 19,
    DEFAULT_COLOR_CLICKED = 20,
    CHROME_COLOR_CLICKED = 21,
    CUSTOM_COLOR_CLICKED = 22,
    SHOW_FOOTER_TOGGLE_CLICKED = 23,
    SHOW_ACTION_CHIPS_TOGGLE_CLICKED = 24,
    MAX_VALUE = 24
}
export declare function recordCustomizeChromeAction(action: CustomizeChromeAction): void;
/**
 * Types of images that are shown on the NTP (and therefore also appear in
 * Customize Chrome). This enum must match the numbering for NtpImageType in
 * enums.xml. These values are persisted to logs. Entries should not be
 * renumbered, removed or reused.
 *
 * MAX_VALUE should always be at the end to help get the current number of
 * buckets.
 */
export declare enum NtpImageType {
    BACKGROUND_IMAGE = 0,
    COLLECTIONS = 1,
    COLLECTION_IMAGES = 2,
    MAX_VALUE = 2
}
export declare function recordCustomizeChromeImageError(imageType: NtpImageType): void;
