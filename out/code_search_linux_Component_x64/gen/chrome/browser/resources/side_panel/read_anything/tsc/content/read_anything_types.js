// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { VisualBrowserProxyImpl } from '../app/visual_browser_proxy.js';
// Helper that implements ChromeEvent to manage and dispatch events from C++
// backend callbacks (e.g. chrome.readingMode) to registered TypeScript
// listeners.
export class EventForwarder {
    listeners_ = [];
    addListener(listener) {
        this.listeners_.push(listener);
    }
    removeListener(listener) {
        this.listeners_ = this.listeners_.filter(l => l !== listener);
    }
    forward(...args) {
        this.listeners_.forEach(l => l(...args));
    }
}
export var ContentPositionSource;
(function (ContentPositionSource) {
    ContentPositionSource[ContentPositionSource["SELECTION"] = 0] = "SELECTION";
    ContentPositionSource[ContentPositionSource["LINE_FOCUS"] = 1] = "LINE_FOCUS";
})(ContentPositionSource || (ContentPositionSource = {}));
export var LineFocusType;
(function (LineFocusType) {
    LineFocusType[LineFocusType["NONE"] = 0] = "NONE";
    LineFocusType[LineFocusType["LINE"] = 1] = "LINE";
    LineFocusType[LineFocusType["WINDOW"] = 2] = "WINDOW";
})(LineFocusType || (LineFocusType = {}));
export var LineFocusMovement;
(function (LineFocusMovement) {
    LineFocusMovement[LineFocusMovement["STATIC"] = 0] = "STATIC";
    LineFocusMovement[LineFocusMovement["CURSOR"] = 1] = "CURSOR";
})(LineFocusMovement || (LineFocusMovement = {}));
// Used to notify of the type of line focus movement that occurred.
// Some movements should trigger a visual update only, while others should
// also trigger a content update, and others should trigger no visual or
// content update.
export var LineFocusNotificationType;
(function (LineFocusNotificationType) {
    LineFocusNotificationType[LineFocusNotificationType["NONE"] = 0] = "NONE";
    LineFocusNotificationType[LineFocusNotificationType["VISUAL"] = 1] = "VISUAL";
    LineFocusNotificationType[LineFocusNotificationType["CONTENT"] = 2] = "CONTENT";
})(LineFocusNotificationType || (LineFocusNotificationType = {}));
export class LineFocusStyle {
    type;
    lines;
    static SMALL_WINDOW = new LineFocusStyle(LineFocusType.WINDOW, 1);
    static MEDIUM_WINDOW = new LineFocusStyle(LineFocusType.WINDOW, 3);
    static LARGE_WINDOW = new LineFocusStyle(LineFocusType.WINDOW, 5);
    static UNDERLINE = new LineFocusStyle(LineFocusType.LINE, 1);
    constructor(type, lines) {
        this.type = type;
        this.lines = lines;
    }
    static defaultValue() {
        return this.MEDIUM_WINDOW;
    }
    equals(other) {
        return this.type === other.type && this.lines === other.lines;
    }
}
export const getLineFocusValues = () => {
    const visualBrowserProxy = VisualBrowserProxyImpl.getInstance();
    return {
        [visualBrowserProxy.getLineFocusSmallCursorWindow()]: {
            value: visualBrowserProxy.getLineFocusSmallCursorWindow(),
            style: LineFocusStyle.SMALL_WINDOW,
            movement: LineFocusMovement.CURSOR,
        },
        [visualBrowserProxy.getLineFocusSmallStaticWindow()]: {
            value: visualBrowserProxy.getLineFocusSmallStaticWindow(),
            style: LineFocusStyle.SMALL_WINDOW,
            movement: LineFocusMovement.STATIC,
        },
        [visualBrowserProxy.getLineFocusMediumCursorWindow()]: {
            value: visualBrowserProxy.getLineFocusMediumCursorWindow(),
            style: LineFocusStyle.MEDIUM_WINDOW,
            movement: LineFocusMovement.CURSOR,
        },
        [visualBrowserProxy.getLineFocusMediumStaticWindow()]: {
            value: visualBrowserProxy.getLineFocusMediumStaticWindow(),
            style: LineFocusStyle.MEDIUM_WINDOW,
            movement: LineFocusMovement.STATIC,
        },
        [visualBrowserProxy.getLineFocusLargeCursorWindow()]: {
            value: visualBrowserProxy.getLineFocusLargeCursorWindow(),
            style: LineFocusStyle.LARGE_WINDOW,
            movement: LineFocusMovement.CURSOR,
        },
        [visualBrowserProxy.getLineFocusLargeStaticWindow()]: {
            value: visualBrowserProxy.getLineFocusLargeStaticWindow(),
            style: LineFocusStyle.LARGE_WINDOW,
            movement: LineFocusMovement.STATIC,
        },
        [visualBrowserProxy.getLineFocusCursorLine()]: {
            value: visualBrowserProxy.getLineFocusCursorLine(),
            style: LineFocusStyle.UNDERLINE,
            movement: LineFocusMovement.CURSOR,
        },
        [visualBrowserProxy.getLineFocusStaticLine()]: {
            value: visualBrowserProxy.getLineFocusStaticLine(),
            style: LineFocusStyle.UNDERLINE,
            movement: LineFocusMovement.STATIC,
        },
    };
};
// Events emitted from the toolbar to the app
export var ToolbarEvent;
(function (ToolbarEvent) {
    ToolbarEvent["LETTER_SPACING"] = "letter-spacing-change";
    ToolbarEvent["LINE_SPACING"] = "line-spacing-change";
    ToolbarEvent["THEME"] = "theme-change";
    ToolbarEvent["FONT_SIZE"] = "font-size-change";
    ToolbarEvent["FONT_SIZE_RESET"] = "font-size-reset";
    ToolbarEvent["FONT"] = "font-change";
    ToolbarEvent["RATE"] = "rate-change";
    ToolbarEvent["PLAY_PAUSE"] = "play-pause-click";
    ToolbarEvent["HIGHLIGHT_CHANGE"] = "highlight-change";
    ToolbarEvent["NEXT_GRANULARITY"] = "next-granularity-click";
    ToolbarEvent["PREVIOUS_GRANULARITY"] = "previous-granularity-click";
    ToolbarEvent["LINKS"] = "links-toggle";
    ToolbarEvent["IMAGES"] = "images-toggle";
    ToolbarEvent["PIN"] = "pin-toggle";
    ToolbarEvent["VOICE"] = "select-voice";
    ToolbarEvent["LANGUAGE_TOGGLE"] = "voice-language-toggle";
    ToolbarEvent["LANGUAGE_SELECTED"] = "voice-language-selected";
    ToolbarEvent["PLAY_PREVIEW"] = "preview-voice";
    ToolbarEvent["LANGUAGE_MENU_OPEN"] = "language-menu-open";
    ToolbarEvent["LANGUAGE_MENU_CLOSE"] = "language-menu-close";
    ToolbarEvent["VOICE_MENU_OPEN"] = "voice-menu-open";
    ToolbarEvent["VOICE_MENU_CLOSE"] = "voice-menu-close";
    ToolbarEvent["LINE_FOCUS_STYLE"] = "line-focus-style-change";
    ToolbarEvent["LINE_FOCUS_MOVEMENT"] = "line-focus-movement-change";
    ToolbarEvent["LINE_FOCUS_TOGGLE"] = "line-focus-toggle-change";
    ToolbarEvent["CLOSE_ALL_MENUS"] = "close-all-menus";
    ToolbarEvent["OPEN_SETTINGS_SUBMENU"] = "open-settings-submenu";
    ToolbarEvent["PRESENTATION_CHANGE"] = "presentation-change";
    ToolbarEvent["CLOSE_SUBMENU_REQUESTED"] = "close-submenu-requested";
    ToolbarEvent["SETTINGS_OPENED"] = "settings-opened";
    ToolbarEvent["SETTINGS_CLOSED"] = "settings-closed";
    ToolbarEvent["TRANSLATION_REQUESTED"] = "translation-requested";
    ToolbarEvent["SEND_FEEDBACK"] = "send-feedback";
})(ToolbarEvent || (ToolbarEvent = {}));
// The available menu items in Reading mode
export var SettingsOption;
(function (SettingsOption) {
    SettingsOption["APPEARANCE"] = "appearance";
    SettingsOption["AUDIO"] = "audio";
    SettingsOption["COLOR"] = "color";
    SettingsOption["FONT"] = "font";
    SettingsOption["TEXT"] = "text";
    SettingsOption["FONT_SIZE"] = "font-size";
    SettingsOption["IMAGES"] = "images";
    SettingsOption["LETTER_SPACING"] = "letter-spacing";
    SettingsOption["LINE_FOCUS"] = "line-focus";
    SettingsOption["LINE_SPACING"] = "line-spacing";
    SettingsOption["LINKS"] = "links";
    SettingsOption["MEDIA"] = "media";
    SettingsOption["PINNED_TO_TOOLBAR"] = "pinned-to-toolbar";
    SettingsOption["PRESENTATION"] = "presentation";
    SettingsOption["TRANSLATION_REQUESTED"] = "translation-requested";
    SettingsOption["SEND_FEEDBACK"] = "send-feedback";
    SettingsOption["VOICE_HIGHLIGHT"] = "voice-highlight";
    SettingsOption["VOICE_SELECTION"] = "voice-selection";
})(SettingsOption || (SettingsOption = {}));
