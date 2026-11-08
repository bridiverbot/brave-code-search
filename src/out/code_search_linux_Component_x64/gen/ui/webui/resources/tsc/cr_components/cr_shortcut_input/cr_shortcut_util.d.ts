export declare enum Key {
    COMMA = 188,
    DEL = 46,
    DOWN = 40,
    END = 35,
    ESCAPE = 27,
    HOME = 36,
    INS = 45,
    LEFT = 37,
    MEDIA_NEXT_TRACK = 176,
    MEDIA_PLAY_PAUSE = 179,
    MEDIA_PREV_TRACK = 177,
    MEDIA_STOP = 178,
    PAGE_DOWN = 34,
    PAGE_UP = 33,
    PERIOD = 190,
    RIGHT = 39,
    SPACE = 32,
    TAB = 9,
    UP = 38
}
/**
 * Checks whether the passed in |keyCode| is a valid command key.
 * @return Whether the key is valid.
 */
export declare function isValidKeyCode(keyCode: number): boolean;
/**
 * Converts a keystroke event to string form, ignoring invalid commands.
 */
export declare function keystrokeToString(e: KeyboardEvent): string;
/**
 * Returns true if the event has valid modifiers.
 * @param e The keyboard event to consider.
 * @return Whether the event is valid.
 */
export declare function hasValidModifiers(e: KeyboardEvent): boolean;
export declare function formatShortcutText(text: string): string;
