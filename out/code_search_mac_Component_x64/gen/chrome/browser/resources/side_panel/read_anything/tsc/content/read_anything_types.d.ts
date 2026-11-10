import type { AnchorAlignment } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { ChromeEvent } from '/tools/typescript/definitions/chrome_event.js';
export declare class EventForwarder<T extends Function> implements ChromeEvent<T> {
    private listeners_;
    addListener(listener: T): void;
    removeListener(listener: T): void;
    forward(...args: unknown[]): void;
}
export declare enum ContentPositionSource {
    SELECTION = 0,
    LINE_FOCUS = 1
}
export interface ContentPosition {
    node: Node;
    offset: number;
    source: ContentPositionSource;
}
export interface SelectionWithIds {
    anchorNodeId?: number;
    anchorOffset: number;
    focusNodeId?: number;
    focusOffset: number;
}
export interface ReadingModeSelection {
    anchorNode: Node;
    anchorOffset: number;
    focusNode: Node;
    focusOffset: number;
}
export declare enum LineFocusType {
    NONE = 0,
    LINE = 1,
    WINDOW = 2
}
export declare enum LineFocusMovement {
    STATIC = 0,
    CURSOR = 1
}
export declare enum LineFocusNotificationType {
    NONE = 0,
    VISUAL = 1,
    CONTENT = 2
}
export declare class LineFocusStyle {
    readonly type: LineFocusType;
    readonly lines: number;
    static readonly SMALL_WINDOW: LineFocusStyle;
    static readonly MEDIUM_WINDOW: LineFocusStyle;
    static readonly LARGE_WINDOW: LineFocusStyle;
    static readonly UNDERLINE: LineFocusStyle;
    private constructor();
    static defaultValue(): LineFocusStyle;
    equals(other: LineFocusStyle): boolean;
}
interface LineFocusValue {
    value: number;
    style: LineFocusStyle;
    movement: LineFocusMovement;
}
export declare const getLineFocusValues: () => Record<number, LineFocusValue>;
export declare enum ToolbarEvent {
    LETTER_SPACING = "letter-spacing-change",
    LINE_SPACING = "line-spacing-change",
    THEME = "theme-change",
    FONT_SIZE = "font-size-change",
    FONT_SIZE_RESET = "font-size-reset",
    FONT = "font-change",
    RATE = "rate-change",
    PLAY_PAUSE = "play-pause-click",
    HIGHLIGHT_CHANGE = "highlight-change",
    NEXT_GRANULARITY = "next-granularity-click",
    PREVIOUS_GRANULARITY = "previous-granularity-click",
    LINKS = "links-toggle",
    IMAGES = "images-toggle",
    PIN = "pin-toggle",
    VOICE = "select-voice",
    LANGUAGE_TOGGLE = "voice-language-toggle",
    LANGUAGE_SELECTED = "voice-language-selected",
    PLAY_PREVIEW = "preview-voice",
    LANGUAGE_MENU_OPEN = "language-menu-open",
    LANGUAGE_MENU_CLOSE = "language-menu-close",
    VOICE_MENU_OPEN = "voice-menu-open",
    VOICE_MENU_CLOSE = "voice-menu-close",
    LINE_FOCUS_STYLE = "line-focus-style-change",
    LINE_FOCUS_MOVEMENT = "line-focus-movement-change",
    LINE_FOCUS_TOGGLE = "line-focus-toggle-change",
    CLOSE_ALL_MENUS = "close-all-menus",
    OPEN_SETTINGS_SUBMENU = "open-settings-submenu",
    PRESENTATION_CHANGE = "presentation-change",
    CLOSE_SUBMENU_REQUESTED = "close-submenu-requested",
    SETTINGS_OPENED = "settings-opened",
    SETTINGS_CLOSED = "settings-closed",
    TRANSLATION_REQUESTED = "translation-requested",
    SEND_FEEDBACK = "send-feedback"
}
export declare enum SettingsOption {
    APPEARANCE = "appearance",
    AUDIO = "audio",
    COLOR = "color",
    FONT = "font",
    TEXT = "text",
    FONT_SIZE = "font-size",
    IMAGES = "images",
    LETTER_SPACING = "letter-spacing",
    LINE_FOCUS = "line-focus",
    LINE_SPACING = "line-spacing",
    LINKS = "links",
    MEDIA = "media",
    PINNED_TO_TOOLBAR = "pinned-to-toolbar",
    PRESENTATION = "presentation",
    TRANSLATION_REQUESTED = "translation-requested",
    SEND_FEEDBACK = "send-feedback",
    VOICE_HIGHLIGHT = "voice-highlight",
    VOICE_SELECTION = "voice-selection"
}
export interface ShowAtConfigPrefs {
    anchorAlignmentX?: AnchorAlignment;
    anchorAlignmentY?: AnchorAlignment;
    maxX?: number;
    minX?: number;
    minY?: number;
}
export {};
