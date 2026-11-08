import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const RegisterClientErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum RegisterClientErrorCode {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kCalledInWrongState = 0,
    kUnexpected = 1,
    kOpaqueError = 2,
    kVerificationTokenEncryptionFailed = 3,
    kVerificationTokenDecryptionFailed = 4,
    kAuthenticationTokenEncryptionFailed = 5
}
export declare const RegisterServerErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum RegisterServerErrorCode {
    MIN_VALUE = -1,
    MAX_VALUE = 14014,
    kInvalidResponse = -1,
    kNull = 0,
    kUnknown = 1,
    kNewAccountEmailRequired = 11005,
    kIntentNotAllowed = 13003,
    kTooManyVerifications = 13001,
    kAccountExists = 13004,
    kEmailDomainNotSupported = 13006,
    kRegistrationVerificationAlreadyPendingForThisEmail = 13012,
    kDailyVerificationLimitReachedForEmail = 13013,
    kInterimPasswordStateNotFound = 14001,
    kInterimPasswordStateExpired = 14002,
    kVerificationNotFoundOrInvalidIdOrCode = 13002,
    kEmailAlreadyVerified = 13009,
    kMaximumCodeVerificationAttemptsExceeded = 13010,
    kInvalidVerificationCode = 13011,
    kTokenHasExpired = 14014
}
export declare const RegisterStep1ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const RegisterStep2ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const RegisterStep3ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const RegisterClientErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const RegisterServerErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const RegisterErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare interface RegisterStep1ResultMojoType {
    encryptedVerificationToken: string;
    serializedResponse: string;
}
export type RegisterStep1Result = RegisterStep1ResultMojoType;
export declare interface RegisterStep2ResultMojoType {
}
export type RegisterStep2Result = RegisterStep2ResultMojoType;
export declare interface RegisterStep3ResultMojoType {
}
export type RegisterStep3Result = RegisterStep3ResultMojoType;
export declare interface RegisterClientErrorMojoType {
    errorCode: RegisterClientErrorCode;
}
export type RegisterClientError = RegisterClientErrorMojoType;
export declare interface RegisterServerErrorMojoType {
    netErrorOrHttpStatus: number;
    errorCode: RegisterServerErrorCode;
}
export type RegisterServerError = RegisterServerErrorMojoType;
export declare interface RegisterError {
    clientError?: RegisterClientError;
    serverError?: RegisterServerError;
}
export declare enum RegisterErrorFieldTags {
    CLIENT_ERROR = 0,
    SERVER_ERROR = 1
}
export declare function whichRegisterError(u: RegisterError): RegisterErrorFieldTags;
