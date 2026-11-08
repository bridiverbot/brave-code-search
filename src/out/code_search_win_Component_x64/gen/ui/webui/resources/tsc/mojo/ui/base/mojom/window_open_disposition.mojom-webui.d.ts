import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const WindowOpenDispositionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum WindowOpenDisposition {
    MIN_VALUE = 0,
    MAX_VALUE = 12,
    kUnknown = 0,
    kCurrentTab = 1,
    kSingletonTab = 2,
    kNewForegroundTab = 3,
    kNewBackgroundTab = 4,
    kNewPopup = 5,
    kNewWindow = 6,
    kSaveToDisk = 7,
    kOffTheRecord = 8,
    kIgnoreAction = 9,
    kSwitchToTab = 10,
    kNewPictureInPicture = 11,
    kNewSplitView = 12
}
export declare const ClickModifiersSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ClickModifiersMojoType {
    middleButton: boolean;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}
export type ClickModifiers = ClickModifiersMojoType;
