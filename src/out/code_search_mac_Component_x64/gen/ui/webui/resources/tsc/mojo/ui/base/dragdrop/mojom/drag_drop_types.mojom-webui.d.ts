import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const DragEventSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DragEventSource {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kMouse = 0,
    kTouch = 1
}
export declare const DragOperationSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DragOperation {
    MIN_VALUE = 0,
    MAX_VALUE = 16,
    kNone = 0,
    kCopy = 1,
    kLink = 2,
    kMove = 16
}
