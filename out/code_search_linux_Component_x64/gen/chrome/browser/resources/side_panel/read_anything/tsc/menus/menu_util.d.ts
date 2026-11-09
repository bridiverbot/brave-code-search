import type { SettingsOption, ShowAtConfigPrefs } from '../content/read_anything_types.js';
export declare enum SettingsItemType {
    MENU = 1,
    TOGGLE = 2,
    ACTION = 3,
    RADIO = 4,
    EXPAND = 5
}
export interface Notification {
    isError: boolean;
    text?: string;
}
export interface LanguageDropdownItem {
    readableLanguage: string;
    languageCode: string;
    notification: Notification;
    selected?: boolean;
    checked?: boolean;
    disabled?: boolean;
}
export interface SettingsItem {
    id: SettingsOption;
    icon: string;
    title: string;
    itemType: SettingsItemType;
    checked?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    showSeparator?: boolean;
    showBadge?: boolean;
}
export interface MenuStateItem<T> {
    data: T;
    title: string;
    icon?: string;
    style?: string;
    ariaLabel?: string;
    itemType?: SettingsItemType;
    eventName?: string;
    opensDialog?: boolean;
}
export interface MenuHeader {
    title: string;
    separator: boolean;
    shortcut?: string;
}
export interface MenuGroup<T> {
    header: MenuHeader;
    items: Array<MenuStateItem<T>>;
    eventName?: string;
    selectedValue?: T;
}
export interface ToolbarMenu {
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
}
