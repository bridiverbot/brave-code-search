import { ContentSetting, ContentSettingsTypes } from './constants.js';
/**
 * Determine localization string for i18n for a given content settings type.
 * Sorted alphabetically by |ContentSettingsType|.
 */
export declare function getLocalizationStringForContentType(contentSettingsType: ContentSettingsTypes): string | null;
/** @return true if the passed `setting` is considered 'enabled' */
export declare function isSettingEnabled(setting: ContentSetting): boolean;
