import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const ChangePasswordClientErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ChangePasswordClientErrorCode {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kCalledInWrongState = 0,
    kUnexpected = 1,
    kOpaqueError = 2,
    kAuthenticationTokenDecryptionFailed = 3,
    kVerificationTokenEncryptionFailed = 4,
    kVerificationTokenDecryptionFailed = 5
}
export declare const ChangePasswordServerErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ChangePasswordServerErrorCode {
    MIN_VALUE = -1,
    MAX_VALUE = 14014,
    kInvalidResponse = -1,
    kNull = 0,
    kUnknown = 1,
    kIntentNotAllowed = 13003,
    kInvalidTokenAudience = 14007,
    kTooManyVerifications = 13001,
    kDailyVerificationLimitReachedForEmail = 13013,
    kVerificationNotFoundOrInvalidIdOrCode = 13002,
    kEmailAlreadyVerified = 13009,
    kMaximumCodeVerificationAttemptsExceeded = 13010,
    kInvalidVerificationCode = 13011,
    kTokenHasExpired = 14014,
    kInterimPasswordStateNotFound = 14001,
    kInterimPasswordStateExpired = 14002
}
export declare const ChangePasswordStep1ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChangePasswordStep2ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChangePasswordStep3ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChangePasswordStep4ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChangePasswordClientErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChangePasswordServerErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChangePasswordErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ChangePasswordStep1ResultMojoType {
}
export type ChangePasswordStep1Result = ChangePasswordStep1ResultMojoType;
export declare interface ChangePasswordStep2ResultMojoType {
}
export type ChangePasswordStep2Result = ChangePasswordStep2ResultMojoType;
export declare interface ChangePasswordStep3ResultMojoType {
    serializedResponse: string;
}
export type ChangePasswordStep3Result = ChangePasswordStep3ResultMojoType;
export declare interface ChangePasswordStep4ResultMojoType {
}
export type ChangePasswordStep4Result = ChangePasswordStep4ResultMojoType;
export declare interface ChangePasswordClientErrorMojoType {
    errorCode: ChangePasswordClientErrorCode;
}
export type ChangePasswordClientError = ChangePasswordClientErrorMojoType;
export declare interface ChangePasswordServerErrorMojoType {
    netErrorOrHttpStatus: number;
    errorCode: ChangePasswordServerErrorCode;
}
export type ChangePasswordServerError = ChangePasswordServerErrorMojoType;
export declare interface ChangePasswordError {
    clientError?: ChangePasswordClientError;
    serverError?: ChangePasswordServerError;
}
export declare enum ChangePasswordErrorFieldTags {
    CLIENT_ERROR = 0,
    SERVER_ERROR = 1
}
export declare function whichChangePasswordError(u: ChangePasswordError): ChangePasswordErrorFieldTags;
