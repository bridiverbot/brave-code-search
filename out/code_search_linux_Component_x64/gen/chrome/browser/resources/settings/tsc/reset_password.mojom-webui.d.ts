import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const ResetPasswordClientErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ResetPasswordClientErrorCode {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kCalledInWrongState = 0,
    kUnexpected = 1,
    kOpaqueError = 2,
    kVerificationTokenEncryptionFailed = 3,
    kVerificationTokenDecryptionFailed = 4,
    kAuthenticationTokenEncryptionFailed = 5
}
export declare const ResetPasswordServerErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ResetPasswordServerErrorCode {
    MIN_VALUE = -1,
    MAX_VALUE = 14014,
    kInvalidResponse = -1,
    kNull = 0,
    kUnknown = 1,
    kIntentNotAllowed = 13003,
    kFailedToSendEmailDueToInvalidFormat = 13007,
    kInvalidTokenAudience = 14007,
    kTooManyVerifications = 13001,
    kAccountDoesNotExist = 13005,
    kEmailDomainNotSupported = 13006,
    kDailyVerificationLimitReachedForEmail = 13013,
    kVerificationNotFoundOrInvalidIdOrCode = 13002,
    kEmailAlreadyVerified = 13009,
    kMaximumCodeVerificationAttemptsExceeded = 13010,
    kInvalidVerificationCode = 13011,
    kTokenHasExpired = 14014,
    kInterimPasswordStateNotFound = 14001,
    kInterimPasswordStateExpired = 14002
}
export declare const ResetPasswordStep1ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ResetPasswordStep2ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ResetPasswordStep3ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ResetPasswordStep4ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ResetPasswordClientErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const ResetPasswordServerErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const ResetPasswordErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ResetPasswordStep1ResultMojoType {
}
export type ResetPasswordStep1Result = ResetPasswordStep1ResultMojoType;
export declare interface ResetPasswordStep2ResultMojoType {
}
export type ResetPasswordStep2Result = ResetPasswordStep2ResultMojoType;
export declare interface ResetPasswordStep3ResultMojoType {
    serializedResponse: string;
}
export type ResetPasswordStep3Result = ResetPasswordStep3ResultMojoType;
export declare interface ResetPasswordStep4ResultMojoType {
}
export type ResetPasswordStep4Result = ResetPasswordStep4ResultMojoType;
export declare interface ResetPasswordClientErrorMojoType {
    errorCode: ResetPasswordClientErrorCode;
}
export type ResetPasswordClientError = ResetPasswordClientErrorMojoType;
export declare interface ResetPasswordServerErrorMojoType {
    netErrorOrHttpStatus: number;
    errorCode: ResetPasswordServerErrorCode;
}
export type ResetPasswordServerError = ResetPasswordServerErrorMojoType;
export declare interface ResetPasswordError {
    clientError?: ResetPasswordClientError;
    serverError?: ResetPasswordServerError;
}
export declare enum ResetPasswordErrorFieldTags {
    CLIENT_ERROR = 0,
    SERVER_ERROR = 1
}
export declare function whichResetPasswordError(u: ResetPasswordError): ResetPasswordErrorFieldTags;
