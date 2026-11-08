import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const GattServiceErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GattServiceErrorCode {
    MIN_VALUE = 0,
    MAX_VALUE = 7,
    kUnknown = 0,
    kFailed = 1,
    kInProgress = 2,
    kInvalidLength = 3,
    kNotPermitted = 4,
    kNotAuthorized = 5,
    kNotPaired = 6,
    kNotSupported = 7
}
