import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const GetServiceTokenClientErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GetServiceTokenClientErrorCode {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kCalledInWrongState = 0,
    kUnexpected = 1,
    kAuthenticationTokenDecryptionFailed = 2,
    kServiceTokenEncryptionFailed = 3
}
export declare const GetServiceTokenServerErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GetServiceTokenServerErrorCode {
    MIN_VALUE = -1,
    MAX_VALUE = 14007,
    kInvalidResponse = -1,
    kNull = 0,
    kUnknown = 1,
    kEmailDomainNotSupported = 13006,
    kIncorrectCredentials = 14004,
    kInvalidTokenAudience = 14007
}
export declare const GetServiceTokenResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetServiceTokenClientErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetServiceTokenServerErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetServiceTokenErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GetServiceTokenResultMojoType {
    serviceToken: string;
}
export type GetServiceTokenResult = GetServiceTokenResultMojoType;
export declare interface GetServiceTokenClientErrorMojoType {
    errorCode: GetServiceTokenClientErrorCode;
}
export type GetServiceTokenClientError = GetServiceTokenClientErrorMojoType;
export declare interface GetServiceTokenServerErrorMojoType {
    netErrorOrHttpStatus: number;
    errorCode: GetServiceTokenServerErrorCode;
}
export type GetServiceTokenServerError = GetServiceTokenServerErrorMojoType;
export declare interface GetServiceTokenError {
    clientError?: GetServiceTokenClientError;
    serverError?: GetServiceTokenServerError;
}
export declare enum GetServiceTokenErrorFieldTags {
    CLIENT_ERROR = 0,
    SERVER_ERROR = 1
}
export declare function whichGetServiceTokenError(u: GetServiceTokenError): GetServiceTokenErrorFieldTags;
