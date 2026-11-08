import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const DeleteAccountClientErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DeleteAccountClientErrorCode {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kCalledInWrongState = 0,
    kUnexpected = 1,
    kAuthenticationTokenDecryptionFailed = 2
}
export declare const DeleteAccountServerErrorCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DeleteAccountServerErrorCode {
    MIN_VALUE = -1,
    MAX_VALUE = 1,
    kInvalidResponse = -1,
    kNull = 0,
    kUnknown = 1
}
export declare const DeleteAccountResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeleteAccountClientErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeleteAccountServerErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeleteAccountErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DeleteAccountResultMojoType {
}
export type DeleteAccountResult = DeleteAccountResultMojoType;
export declare interface DeleteAccountClientErrorMojoType {
    errorCode: DeleteAccountClientErrorCode;
}
export type DeleteAccountClientError = DeleteAccountClientErrorMojoType;
export declare interface DeleteAccountServerErrorMojoType {
    netErrorOrHttpStatus: number;
    errorCode: DeleteAccountServerErrorCode;
}
export type DeleteAccountServerError = DeleteAccountServerErrorMojoType;
export declare interface DeleteAccountError {
    clientError?: DeleteAccountClientError;
    serverError?: DeleteAccountServerError;
}
export declare enum DeleteAccountErrorFieldTags {
    CLIENT_ERROR = 0,
    SERVER_ERROR = 1
}
export declare function whichDeleteAccountError(u: DeleteAccountError): DeleteAccountErrorFieldTags;
