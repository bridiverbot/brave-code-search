import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const EventDispositionFlagSpec: {
    $: mojo.internal.MojomType;
};
export declare enum EventDispositionFlag {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kUnspecified = 0,
    kMiddleMouseButton = 1,
    kAltKeyDown = 2,
    kMetaKeyDown = 3,
    kShiftKeyDown = 4,
    kControlKeyDown = 5,
    kAltGrKeyDown = 6
}
