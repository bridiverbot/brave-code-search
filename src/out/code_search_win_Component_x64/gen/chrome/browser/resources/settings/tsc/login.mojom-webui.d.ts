import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const LoginClientErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LoginClientErrorCode {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kCalledInWrongState = 0,
    kUnexpected = 1,
    kInvalidLoginError = 2,
    kOpaqueError = 3,
    kLoginTokenEncryptionFailed = 4,
    kLoginTokenDecryptionFailed = 5,
    kAuthenticationTokenEncryptionFailed = 6
}
export declare const LoginServerErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LoginServerErrorCode {
    MIN_VALUE = -1,
    MAX_VALUE = 14009,
    kInvalidResponse = -1,
    kNull = 0,
    kUnknown = 1,
    kEmailNotVerified = 11003,
    kEmailDomainNotSupported = 13006,
    kInterimPasswordStateNotFound = 14001,
    kInterimPasswordStateHasExpired = 14002,
    kInterimPasswordStateMismatch = 14009,
    kIncorrectCredentials = 14004,
    kIncorrectEmail = 14005,
    kIncorrectPassword = 14006
}
export declare const LoginStep1ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const LoginStep2ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const LoginClientErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const LoginServerErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const LoginErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare interface LoginStep1ResultMojoType {
    encryptedLoginToken: string;
    serializedKE2: string;
}
export type LoginStep1Result = LoginStep1ResultMojoType;
export declare interface LoginStep2ResultMojoType {
}
export type LoginStep2Result = LoginStep2ResultMojoType;
export declare interface LoginClientErrorMojoType {
    errorCode: LoginClientErrorCode;
}
export type LoginClientError = LoginClientErrorMojoType;
export declare interface LoginServerErrorMojoType {
    netErrorOrHttpStatus: number;
    errorCode: LoginServerErrorCode;
}
export type LoginServerError = LoginServerErrorMojoType;
export declare interface LoginError {
    clientError?: LoginClientError;
    serverError?: LoginServerError;
}
export declare enum LoginErrorFieldTags {
    CLIENT_ERROR = 0,
    SERVER_ERROR = 1
}
export declare function whichLoginError(u: LoginError): LoginErrorFieldTags;
