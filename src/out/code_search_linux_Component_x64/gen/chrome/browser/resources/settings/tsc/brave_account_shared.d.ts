import { BraveAccountSharedStrings } from './brave_components_webui_strings.js';
import { ChangePasswordError } from './change_password.mojom-webui.js';
import { DeleteAccountError } from './delete_account.mojom-webui.js';
import { LoginError } from './login.mojom-webui.js';
import { RegisterError } from './register.mojom-webui.js';
import { ResendVerificationEmailError } from './resend_verification_email.mojom-webui.js';
import { ResetPasswordError } from './reset_password.mojom-webui.js';
type FlowError = {
    kind: 'changePassword';
    details: ChangePasswordError;
} | {
    kind: 'deleteAccount';
    details: DeleteAccountError;
} | {
    kind: 'login';
    details: LoginError;
} | {
    kind: 'register';
    details: RegisterError;
} | {
    kind: 'resendVerificationEmail';
    details: ResendVerificationEmailError;
} | {
    kind: 'resetPassword';
    details: ResetPasswordError;
};
type FlowKind = FlowError['kind'];
type ErrorOf<Kind extends FlowKind> = Extract<FlowError, {
    kind: Kind;
}>['details'];
type ClientErrorCodeOf<Kind extends FlowKind> = NonNullable<ErrorOf<Kind>['clientError']>['errorCode'];
declare const FLOWS_WITH_OWN_SUCCESS: {
    resendVerificationEmail: [BraveAccountSharedStrings, BraveAccountSharedStrings];
};
type FlowKindWithOwnSuccess = keyof typeof FLOWS_WITH_OWN_SUCCESS;
interface ShowAlertOptions {
    durationMs?: number;
}
interface ShowErrorOptions<Kind extends FlowKind> extends ShowAlertOptions {
    opaqueErrors?: Partial<Record<string, ClientErrorCodeOf<Kind>>>;
    title?: string;
}
interface ShowSuccessOptions extends ShowAlertOptions {
}
export declare function showError<Kind extends FlowKind>(kind: Kind, e: unknown, { opaqueErrors, title, durationMs }?: ShowErrorOptions<Kind>): void;
export declare function showSuccess(kind: FlowKindWithOwnSuccess, { durationMs }?: ShowSuccessOptions): void;
export {};
