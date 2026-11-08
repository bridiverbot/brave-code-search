import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const ResendVerificationEmailClientErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ResendVerificationEmailClientErrorCode {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kCalledInWrongState = 0,
    kUnexpected = 1,
    kVerificationTokenDecryptionFailed = 2
}
export declare const ResendVerificationEmailServerErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ResendVerificationEmailServerErrorCode {
    MIN_VALUE = -1,
    MAX_VALUE = 14014,
    kInvalidResponse = -1,
    kNull = 0,
    kUnknown = 1,
    kMaximumEmailSendAttemptsExceeded = 13008,
    kEmailAlreadyVerified = 13009,
    kMaximumCodeVerificationAttemptsExceeded = 13010,
    kTokenHasExpired = 14014
}
export declare const ResendVerificationEmailResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ResendVerificationEmailClientErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const ResendVerificationEmailServerErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const ResendVerificationEmailErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ResendVerificationEmailResultMojoType {
}
export type ResendVerificationEmailResult = ResendVerificationEmailResultMojoType;
export declare interface ResendVerificationEmailClientErrorMojoType {
    errorCode: ResendVerificationEmailClientErrorCode;
}
export type ResendVerificationEmailClientError = ResendVerificationEmailClientErrorMojoType;
export declare interface ResendVerificationEmailServerErrorMojoType {
    netErrorOrHttpStatus: number;
    errorCode: ResendVerificationEmailServerErrorCode;
}
export type ResendVerificationEmailServerError = ResendVerificationEmailServerErrorMojoType;
export declare interface ResendVerificationEmailError {
    clientError?: ResendVerificationEmailClientError;
    serverError?: ResendVerificationEmailServerError;
}
export declare enum ResendVerificationEmailErrorFieldTags {
    CLIENT_ERROR = 0,
    SERVER_ERROR = 1
}
export declare function whichResendVerificationEmailError(u: ResendVerificationEmailError): ResendVerificationEmailErrorFieldTags;
