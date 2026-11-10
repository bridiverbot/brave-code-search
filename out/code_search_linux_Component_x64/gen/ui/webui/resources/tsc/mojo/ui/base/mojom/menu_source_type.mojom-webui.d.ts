import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const MenuSourceTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum MenuSourceType {
    MIN_VALUE = 0,
    MAX_VALUE = 10,
    kNone = 0,
    kMouse = 1,
    kKeyboard = 2,
    kTouch = 3,
    kTouchEditMenu = 4,
    kLongPress = 5,
    kLongTap = 6,
    kTouchHandle = 7,
    kStylus = 8,
    kAdjustSelection = 9,
    kAdjustSelectionReset = 10
}
