import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const CodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum Code {
    MIN_VALUE = 1,
    MAX_VALUE = 16,
    kCancelled = 1,
    kUnknown = 2,
    kInvalidArgument = 3,
    kDeadlineExceeded = 4,
    kNotFound = 5,
    kAlreadyExists = 6,
    kPermissionDenied = 7,
    kResourceExhausted = 8,
    kFailedPrecondition = 9,
    kAborted = 10,
    kOutOfRange = 11,
    kUnimplemented = 12,
    kInternal = 13,
    kUnavailable = 14,
    kDataLoss = 15,
    kUnauthenticated = 16
}
export declare const ErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ErrorMojoType {
    code: Code;
    message: string;
}
export type Error = ErrorMojoType;
