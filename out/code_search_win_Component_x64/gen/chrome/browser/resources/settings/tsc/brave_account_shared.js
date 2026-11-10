/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
// Error and flow-result handling shared by every Brave Account WebUI:
// brave://account and the Brave Account rows in brave://settings. The strings
// resolved here all live in the `BraveAccountShared` group, which both WebUIs
// register (see brave_account_ui_base.h and
// brave_settings_localized_strings_provider.cc).
// @ts-expect-error: no type definitions are generated for leo.bundle.js
import { leoShowAlert } from '//resources/brave/leo.bundle.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { ChangePasswordClientErrorCode, ChangePasswordServerErrorCode, } from './change_password.mojom-webui.js';
import { DeleteAccountClientErrorCode, } from './delete_account.mojom-webui.js';
import { LoginClientErrorCode, LoginServerErrorCode, } from './login.mojom-webui.js';
import { RegisterClientErrorCode, RegisterServerErrorCode, } from './register.mojom-webui.js';
import { ResendVerificationEmailClientErrorCode, ResendVerificationEmailServerErrorCode, } from './resend_verification_email.mojom-webui.js';
import { ResetPasswordClientErrorCode, ResetPasswordServerErrorCode, } from './reset_password.mojom-webui.js';
// Every flow's client error enum has `kUnexpected`;
// all but `deleteAccount` and `resendVerificationEmail`
// (which never invoke the OPAQUE bindings) also have `kOpaqueError`.
// Both are read off these enums by name, so a call site names neither --
// it only passes a code to distinguish one specific OPAQUE string
// from the rest (see `opaqueErrors`).
const CLIENT_ERROR_CODES = {
    changePassword: ChangePasswordClientErrorCode,
    deleteAccount: DeleteAccountClientErrorCode,
    login: LoginClientErrorCode,
    register: RegisterClientErrorCode,
    resendVerificationEmail: ResendVerificationEmailClientErrorCode,
    resetPassword: ResetPasswordClientErrorCode,
};
// Mojo rejects with a flow error union, whose active arm is the only key
// present. Anything else reaching a catch block -- an OPAQUE binding's bare
// string, or a TypeError from sending on a closed mojo pipe -- is not a flow
// error, and must not be cast to one.
function isFlowError(e) {
    return (e !== null
        && typeof e === 'object'
        && ('clientError' in e || 'serverError' in e));
}
// Narrows a caught value to `kind`'s flow error, mapping anything else onto a
// client error. The OPAQUE bindings reject with bare strings: `opaqueErrors`
// maps the ones a caller distinguishes onto their own code, any other string
// becomes the flow's `kOpaqueError`, and everything else -- a TypeError from a
// closed mojo pipe, say -- is genuinely unexpected.
function toFlowError(kind, e, opaqueErrors) {
    if (isFlowError(e)) {
        return e;
    }
    const codes = CLIENT_ERROR_CODES[kind];
    const errorCode = typeof e === 'string'
        ? (opaqueErrors?.[e] ?? codes.kOpaqueError)
        : undefined;
    if (errorCode !== undefined) {
        return { clientError: { errorCode } };
    }
    console.error('Unexpected error:', e);
    return { clientError: { errorCode: codes.kUnexpected } };
}
const CHANGE_PASSWORD_CLIENT_ERROR_STRINGS = {};
const CHANGE_PASSWORD_SERVER_ERROR_STRINGS = {
    [ChangePasswordServerErrorCode.kTooManyVerifications]: "BRAVE_ACCOUNT_REGISTER_TOO_MANY_VERIFICATIONS" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_REGISTER_TOO_MANY_VERIFICATIONS */,
    [ChangePasswordServerErrorCode.kDailyVerificationLimitReachedForEmail]: "BRAVE_ACCOUNT_DAILY_VERIFICATION_LIMIT_REACHED_FOR_EMAIL" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_DAILY_VERIFICATION_LIMIT_REACHED_FOR_EMAIL */,
    [ChangePasswordServerErrorCode.kEmailAlreadyVerified]: "BRAVE_ACCOUNT_PASSWORD_RESET_EMAIL_ALREADY_VERIFIED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_PASSWORD_RESET_EMAIL_ALREADY_VERIFIED */,
    [ChangePasswordServerErrorCode.kMaximumCodeVerificationAttemptsExceeded]: "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_MAXIMUM_CODE_VERIFICATION_ATTEMPTS_EXCEEDED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_MAXIMUM_CODE_VERIFICATION_ATTEMPTS_EXCEEDED */,
    [ChangePasswordServerErrorCode.kInvalidVerificationCode]: "BRAVE_ACCOUNT_REGISTER_INVALID_VERIFICATION_CODE" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_REGISTER_INVALID_VERIFICATION_CODE */,
    [ChangePasswordServerErrorCode.kTokenHasExpired]: "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_TOKEN_HAS_EXPIRED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_TOKEN_HAS_EXPIRED */,
};
const DELETE_ACCOUNT_CLIENT_ERROR_STRINGS = {};
const DELETE_ACCOUNT_SERVER_ERROR_STRINGS = {};
const LOGIN_CLIENT_ERROR_STRINGS = {
    [LoginClientErrorCode.kInvalidLoginError]: "BRAVE_ACCOUNT_LOGIN_INCORRECT_PASSWORD" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_LOGIN_INCORRECT_PASSWORD */,
};
const LOGIN_SERVER_ERROR_STRINGS = {
    [LoginServerErrorCode.kEmailNotVerified]: "BRAVE_ACCOUNT_LOGIN_EMAIL_NOT_VERIFIED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_LOGIN_EMAIL_NOT_VERIFIED */,
    [LoginServerErrorCode.kEmailDomainNotSupported]: "BRAVE_ACCOUNT_REGISTER_EMAIL_DOMAIN_NOT_SUPPORTED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_REGISTER_EMAIL_DOMAIN_NOT_SUPPORTED */,
    [LoginServerErrorCode.kIncorrectEmail]: "BRAVE_ACCOUNT_LOGIN_INCORRECT_EMAIL" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_LOGIN_INCORRECT_EMAIL */,
    [LoginServerErrorCode.kIncorrectPassword]: "BRAVE_ACCOUNT_LOGIN_INCORRECT_PASSWORD" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_LOGIN_INCORRECT_PASSWORD */,
};
const REGISTER_CLIENT_ERROR_STRINGS = {};
const REGISTER_SERVER_ERROR_STRINGS = {
    [RegisterServerErrorCode.kAccountExists]: "BRAVE_ACCOUNT_REGISTER_ACCOUNT_EXISTS" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_REGISTER_ACCOUNT_EXISTS */,
    [RegisterServerErrorCode.kEmailDomainNotSupported]: "BRAVE_ACCOUNT_REGISTER_EMAIL_DOMAIN_NOT_SUPPORTED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_REGISTER_EMAIL_DOMAIN_NOT_SUPPORTED */,
    [RegisterServerErrorCode.kTooManyVerifications]: "BRAVE_ACCOUNT_REGISTER_TOO_MANY_VERIFICATIONS" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_REGISTER_TOO_MANY_VERIFICATIONS */,
    [RegisterServerErrorCode.kMaximumCodeVerificationAttemptsExceeded]: "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_MAXIMUM_CODE_VERIFICATION_ATTEMPTS_EXCEEDED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_MAXIMUM_CODE_VERIFICATION_ATTEMPTS_EXCEEDED */,
    [RegisterServerErrorCode.kInvalidVerificationCode]: "BRAVE_ACCOUNT_REGISTER_INVALID_VERIFICATION_CODE" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_REGISTER_INVALID_VERIFICATION_CODE */,
    [RegisterServerErrorCode.kRegistrationVerificationAlreadyPendingForThisEmail]: "BRAVE_ACCOUNT_REGISTER_REGISTRATION_VERIFICATION_ALREADY_PENDING_FOR_THIS_EMAIL" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_REGISTER_REGISTRATION_VERIFICATION_ALREADY_PENDING_FOR_THIS_EMAIL */,
    [RegisterServerErrorCode.kDailyVerificationLimitReachedForEmail]: "BRAVE_ACCOUNT_DAILY_VERIFICATION_LIMIT_REACHED_FOR_EMAIL" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_DAILY_VERIFICATION_LIMIT_REACHED_FOR_EMAIL */,
    [RegisterServerErrorCode.kTokenHasExpired]: "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_TOKEN_HAS_EXPIRED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_TOKEN_HAS_EXPIRED */,
};
const RESEND_VERIFICATION_EMAIL_CLIENT_ERROR_STRINGS = {};
const RESEND_VERIFICATION_EMAIL_SERVER_ERROR_STRINGS = {
    [ResendVerificationEmailServerErrorCode.kMaximumEmailSendAttemptsExceeded]: "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_MAXIMUM_SEND_ATTEMPTS_EXCEEDED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_MAXIMUM_SEND_ATTEMPTS_EXCEEDED */,
    [ResendVerificationEmailServerErrorCode.kEmailAlreadyVerified]: "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_ALREADY_VERIFIED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_ALREADY_VERIFIED */,
    [ResendVerificationEmailServerErrorCode.kMaximumCodeVerificationAttemptsExceeded]: "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_MAXIMUM_CODE_VERIFICATION_ATTEMPTS_EXCEEDED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_MAXIMUM_CODE_VERIFICATION_ATTEMPTS_EXCEEDED */,
    [ResendVerificationEmailServerErrorCode.kTokenHasExpired]: "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_TOKEN_HAS_EXPIRED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_TOKEN_HAS_EXPIRED */,
};
const RESET_PASSWORD_CLIENT_ERROR_STRINGS = {};
const RESET_PASSWORD_SERVER_ERROR_STRINGS = {
    [ResetPasswordServerErrorCode.kTooManyVerifications]: "BRAVE_ACCOUNT_REGISTER_TOO_MANY_VERIFICATIONS" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_REGISTER_TOO_MANY_VERIFICATIONS */,
    [ResetPasswordServerErrorCode.kAccountDoesNotExist]: "BRAVE_ACCOUNT_ACCOUNT_DOES_NOT_EXIST" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_ACCOUNT_DOES_NOT_EXIST */,
    [ResetPasswordServerErrorCode.kEmailDomainNotSupported]: "BRAVE_ACCOUNT_REGISTER_EMAIL_DOMAIN_NOT_SUPPORTED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_REGISTER_EMAIL_DOMAIN_NOT_SUPPORTED */,
    [ResetPasswordServerErrorCode.kDailyVerificationLimitReachedForEmail]: "BRAVE_ACCOUNT_DAILY_VERIFICATION_LIMIT_REACHED_FOR_EMAIL" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_DAILY_VERIFICATION_LIMIT_REACHED_FOR_EMAIL */,
    [ResetPasswordServerErrorCode.kEmailAlreadyVerified]: "BRAVE_ACCOUNT_PASSWORD_RESET_EMAIL_ALREADY_VERIFIED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_PASSWORD_RESET_EMAIL_ALREADY_VERIFIED */,
    [ResetPasswordServerErrorCode.kMaximumCodeVerificationAttemptsExceeded]: "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_MAXIMUM_CODE_VERIFICATION_ATTEMPTS_EXCEEDED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_MAXIMUM_CODE_VERIFICATION_ATTEMPTS_EXCEEDED */,
    [ResetPasswordServerErrorCode.kInvalidVerificationCode]: "BRAVE_ACCOUNT_REGISTER_INVALID_VERIFICATION_CODE" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_REGISTER_INVALID_VERIFICATION_CODE */,
    [ResetPasswordServerErrorCode.kTokenHasExpired]: "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_TOKEN_HAS_EXPIRED" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_TOKEN_HAS_EXPIRED */,
};
// Resolves a flow error to a message, with the string tables passed in. The
// generic bounds tie each table to the same enum as `error`'s codes, so a
// mismatched pair cannot be passed here.
function getErrorMessageImpl(clientErrorStrings, serverErrorStrings, error) {
    const errorLabel = loadTimeData.getString("BRAVE_ACCOUNT_ERROR" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_ERROR */);
    if (error.clientError) {
        const stringId = clientErrorStrings[error.clientError.errorCode];
        if (stringId) {
            return loadTimeData.getString(stringId);
        }
        return loadTimeData.getStringF("BRAVE_ACCOUNT_CLIENT_ERROR" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_CLIENT_ERROR */, ` (${errorLabel}=${error.clientError.errorCode})`);
    }
    const serverError = error.serverError;
    const stringId = serverErrorStrings[serverError.errorCode];
    if (stringId) {
        return loadTimeData.getString(stringId);
    }
    return loadTimeData.getStringF("BRAVE_ACCOUNT_SERVER_ERROR" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_SERVER_ERROR */, `${serverError.netErrorOrHttpStatus > 0 ? 'HTTP' : 'NET'}=${serverError.netErrorOrHttpStatus}`, `, ${errorLabel}=${serverError.errorCode}`);
}
// Resolves a flow error to a user-facing message. The switch narrows `error`
// to the flow's own error type in each arm, so the compiler checks that the
// tables and the codes come from the same enums.
function getErrorMessage(error) {
    switch (error.kind) {
        case 'changePassword':
            return getErrorMessageImpl(CHANGE_PASSWORD_CLIENT_ERROR_STRINGS, CHANGE_PASSWORD_SERVER_ERROR_STRINGS, error.details);
        case 'deleteAccount':
            return getErrorMessageImpl(DELETE_ACCOUNT_CLIENT_ERROR_STRINGS, DELETE_ACCOUNT_SERVER_ERROR_STRINGS, error.details);
        case 'login':
            return getErrorMessageImpl(LOGIN_CLIENT_ERROR_STRINGS, LOGIN_SERVER_ERROR_STRINGS, error.details);
        case 'register':
            return getErrorMessageImpl(REGISTER_CLIENT_ERROR_STRINGS, REGISTER_SERVER_ERROR_STRINGS, error.details);
        case 'resendVerificationEmail':
            return getErrorMessageImpl(RESEND_VERIFICATION_EMAIL_CLIENT_ERROR_STRINGS, RESEND_VERIFICATION_EMAIL_SERVER_ERROR_STRINGS, error.details);
        case 'resetPassword':
            return getErrorMessageImpl(RESET_PASSWORD_CLIENT_ERROR_STRINGS, RESET_PASSWORD_SERVER_ERROR_STRINGS, error.details);
    }
}
// The flows that report their successes, as [title, content]. Membership here
// is exactly what `showSuccess` accepts; every other flow is silent on success.
// `satisfies` keeps the literal's keys, which is what `FlowKindWithOwnSuccess`
// reads back.
const FLOWS_WITH_OWN_SUCCESS = {
    resendVerificationEmail: [
        "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_SUCCESS_TITLE" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_SUCCESS_TITLE */,
        "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_SUCCESS" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_SUCCESS */,
    ],
};
// The flows with an error-toast title of their own; every other flow falls back
// to the shared "An error occurred". Annotated rather than `satisfies`, so
// `showError` can look up any flow and read back `undefined`. There is no
// content counterpart: an error's content is computed per error code.
const FLOWS_WITH_OWN_ERROR_TITLE = {
    resendVerificationEmail: "BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_ERROR_TITLE" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_RESEND_CONFIRMATION_EMAIL_ERROR_TITLE */,
};
// Shows the failure of a `kind` request in a toast. `e` is the value a `catch`
// block received: anything that is not a flow error is mapped onto a client
// error, so callers hand over what they caught without narrowing it first.
export function showError(kind, e, { opaqueErrors, title, durationMs = 0 } = {}) {
    leoShowAlert({
        type: 'error',
        title: title
            ?? loadTimeData.getString(FLOWS_WITH_OWN_ERROR_TITLE[kind]
                ?? "BRAVE_ACCOUNT_ERROR_TOAST_TITLE" /* BraveAccountSharedStrings.BRAVE_ACCOUNT_ERROR_TOAST_TITLE */),
        content: getErrorMessage({
            kind,
            details: toFlowError(kind, e, opaqueErrors),
        }),
    }, durationMs);
}
// Shows the success of a `kind` request in a toast. Only the flows listed in
// `FLOWS_WITH_OWN_SUCCESS` accept this -- every other flow is silent on
// success, and passing it one is a compile error rather than a call that
// quietly does nothing.
export function showSuccess(kind, { durationMs = 0 } = {}) {
    const [title, content] = FLOWS_WITH_OWN_SUCCESS[kind];
    leoShowAlert({
        type: 'success',
        title: loadTimeData.getString(title),
        content: loadTimeData.getString(content),
    }, durationMs);
}
