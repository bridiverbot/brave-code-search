import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const ComposeStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ComposeStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 18,
    kOk = 0,
    kClientError = 1,
    kMisconfiguration = 5,
    kPermissionDenied = 6,
    kServerError = 7,
    kInvalidRequest = 8,
    kRequestThrottled = 9,
    kRetryableError = 10,
    kNonRetryableError = 11,
    kUnsupportedLanguage = 12,
    kFiltered = 13,
    kDisabled = 14,
    kCancelled = 15,
    kNoResponse = 16,
    kOffline = 17,
    kRequestTimeout = 18
}
