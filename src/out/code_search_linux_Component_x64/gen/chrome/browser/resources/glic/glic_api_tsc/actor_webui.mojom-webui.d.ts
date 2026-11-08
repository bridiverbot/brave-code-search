import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { FeatureMode as glic_mojom_FeatureMode } from './glic_enums.mojom-webui.js';
import { BitmapN32 as skia_mojom_BitmapN32 } from '//resources/mojo/skia/public/mojom/bitmap.mojom-webui.js';
import { Origin as url_mojom_Origin } from '//resources/mojo/url/mojom/origin.mojom-webui.js';
export declare const TaskDurationSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TaskDuration {
    MIN_VALUE = 1,
    MAX_VALUE = 2,
    kDefault = 1,
    kTransient = 2
}
export declare const UserGrantedPermissionDurationSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UserGrantedPermissionDuration {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kOneTime = 0,
    kAlwaysAllow = 1
}
export declare const CredentialTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CredentialType {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kPassword = 0,
    kFederated = 1
}
export declare const SelectCredentialDialogErrorReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SelectCredentialDialogErrorReason {
    MIN_VALUE = 0,
    MAX_VALUE = 0,
    kDialogPromiseNoSubscriber = 0
}
export declare const SelectAutofillSuggestionsDialogErrorReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SelectAutofillSuggestionsDialogErrorReason {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kDialogPromiseNoSubscriber = 0,
    kMismatchedTaskId = 1,
    kNoActorTaskDelegate = 2
}
export declare const ConfirmationRequestErrorReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ConfirmationRequestErrorReason {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kRequestPromiseNoSubscriber = 0,
    kPreemptedByNewRequest = 1
}
export declare const GmailOtpErrorReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GmailOtpErrorReason {
    MIN_VALUE = 0,
    MAX_VALUE = 0,
    kRequestPromiseNoSubscriber = 0
}
export declare const TaskOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CredentialSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectCredentialDialogRequestSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectCredentialDialogResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const AutofillSuggestionSpec: {
    $: mojo.internal.MojomType;
};
export declare const FormFillingRequestSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectAutofillSuggestionsDialogRequestSpec: {
    $: mojo.internal.MojomType;
};
export declare const FormFillingResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const AutofillSuggestionDialogOnFormPresentedParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AutofillSuggestionDialogOnFormPreviewChangedParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AutofillSuggestionDialogOnFormConfirmedParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectAutofillSuggestionsDialogResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserConfirmationDialogPayloadSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserConfirmationDialogRequestSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserConfirmationDialogResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const NavigationConfirmationRequestSpec: {
    $: mojo.internal.MojomType;
};
export declare const NavigationConfirmationResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const GmailOtpOptInRequestSpec: {
    $: mojo.internal.MojomType;
};
export declare const GmailOtpOptInResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const GmailOtpConfirmationRequestSpec: {
    $: mojo.internal.MojomType;
};
export declare const GmailOtpConfirmationResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectAutofillSuggestionsDialogResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserConfirmationDialogResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConfirmationRequestResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const GmailOtpOptInResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const GmailOtpConfirmationResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TaskOptionsMojoType {
    title: (string | null);
    duration: (TaskDuration | null);
    featureMode: (glic_mojom_FeatureMode | null);
    actuationTabId: (number | null);
}
export type TaskOptions = TaskOptionsMojoType;
export declare interface CredentialMojoType {
    id: number;
    type: CredentialType;
    username: string;
    sourceSiteOrApp: string;
    requestOrigin: url_mojom_Origin;
    displayOrigin: string;
    accountPicture: (skia_mojom_BitmapN32 | null);
}
export type Credential = CredentialMojoType;
export declare interface SelectCredentialDialogRequestMojoType {
    taskId: number;
    showDialog: boolean;
    credentials: Credential[];
    icons: {
        [key: string]: skia_mojom_BitmapN32;
    };
}
export type SelectCredentialDialogRequest = SelectCredentialDialogRequestMojoType;
export declare interface SelectCredentialDialogResponseMojoType {
    taskId: number;
    errorReason: (SelectCredentialDialogErrorReason | null);
    permissionDuration: (UserGrantedPermissionDuration | null);
    selectedCredentialId: (number | null);
}
export type SelectCredentialDialogResponse = SelectCredentialDialogResponseMojoType;
export declare interface AutofillSuggestionMojoType {
    id: string;
    title: string;
    details: string;
    icon: (skia_mojom_BitmapN32 | null);
}
export type AutofillSuggestion = AutofillSuggestionMojoType;
export declare interface FormFillingRequestMojoType {
    requestedData: bigint;
    formattedRequestOrigin: string;
    sectionLabel: string;
    suggestions: AutofillSuggestion[];
}
export type FormFillingRequest = FormFillingRequestMojoType;
export declare interface SelectAutofillSuggestionsDialogRequestMojoType {
    taskId: number;
    formFillingRequests: FormFillingRequest[];
}
export type SelectAutofillSuggestionsDialogRequest = SelectAutofillSuggestionsDialogRequestMojoType;
export declare interface FormFillingResponseMojoType {
    selectedSuggestionId: string;
}
export type FormFillingResponse = FormFillingResponseMojoType;
export declare interface AutofillSuggestionDialogOnFormPresentedParamsMojoType {
    formFillingRequestIndex: number;
}
export type AutofillSuggestionDialogOnFormPresentedParams = AutofillSuggestionDialogOnFormPresentedParamsMojoType;
export declare interface AutofillSuggestionDialogOnFormPreviewChangedParamsMojoType {
    formFillingRequestIndex: number;
    response: (FormFillingResponse | null);
}
export type AutofillSuggestionDialogOnFormPreviewChangedParams = AutofillSuggestionDialogOnFormPreviewChangedParamsMojoType;
export declare interface AutofillSuggestionDialogOnFormConfirmedParamsMojoType {
    formFillingRequestIndex: number;
    response: FormFillingResponse;
}
export type AutofillSuggestionDialogOnFormConfirmedParams = AutofillSuggestionDialogOnFormConfirmedParamsMojoType;
export declare interface SelectAutofillSuggestionsDialogResponseMojoType {
    taskId: number;
    result: SelectAutofillSuggestionsDialogResult;
}
export type SelectAutofillSuggestionsDialogResponse = SelectAutofillSuggestionsDialogResponseMojoType;
export declare interface UserConfirmationDialogPayloadMojoType {
    navigationOrigin: url_mojom_Origin;
    forBlocklistedOrigin: boolean;
}
export type UserConfirmationDialogPayload = UserConfirmationDialogPayloadMojoType;
export declare interface UserConfirmationDialogRequestMojoType {
    payload: UserConfirmationDialogPayload;
}
export type UserConfirmationDialogRequest = UserConfirmationDialogRequestMojoType;
export declare interface UserConfirmationDialogResponseMojoType {
    result: ConfirmationRequestResult;
}
export type UserConfirmationDialogResponse = UserConfirmationDialogResponseMojoType;
export declare interface NavigationConfirmationRequestMojoType {
    taskId: number;
    navigationOrigin: url_mojom_Origin;
}
export type NavigationConfirmationRequest = NavigationConfirmationRequestMojoType;
export declare interface NavigationConfirmationResponseMojoType {
    result: ConfirmationRequestResult;
}
export type NavigationConfirmationResponse = NavigationConfirmationResponseMojoType;
export declare interface GmailOtpOptInRequestMojoType {
    taskId: number;
}
export type GmailOtpOptInRequest = GmailOtpOptInRequestMojoType;
export declare interface GmailOtpOptInResponseMojoType {
    permissionGranted: boolean;
}
export type GmailOtpOptInResponse = GmailOtpOptInResponseMojoType;
export declare interface GmailOtpConfirmationRequestMojoType {
    taskId: number;
    verificationCode: string;
}
export type GmailOtpConfirmationRequest = GmailOtpConfirmationRequestMojoType;
export declare interface GmailOtpConfirmationResponseMojoType {
    permissionGranted: boolean;
}
export type GmailOtpConfirmationResponse = GmailOtpConfirmationResponseMojoType;
export declare interface SelectAutofillSuggestionsDialogResult {
    errorReason?: SelectAutofillSuggestionsDialogErrorReason;
    selectedSuggestions?: FormFillingResponse[];
}
export declare enum SelectAutofillSuggestionsDialogResultFieldTags {
    ERROR_REASON = 0,
    SELECTED_SUGGESTIONS = 1
}
export declare function whichSelectAutofillSuggestionsDialogResult(u: SelectAutofillSuggestionsDialogResult): SelectAutofillSuggestionsDialogResultFieldTags;
export declare interface UserConfirmationDialogResult {
    permissionGranted?: boolean;
    errorReason?: ConfirmationRequestErrorReason;
}
export declare enum UserConfirmationDialogResultFieldTags {
    PERMISSION_GRANTED = 0,
    ERROR_REASON = 1
}
export declare function whichUserConfirmationDialogResult(u: UserConfirmationDialogResult): UserConfirmationDialogResultFieldTags;
export declare interface ConfirmationRequestResult {
    permissionGranted?: boolean;
    errorReason?: ConfirmationRequestErrorReason;
}
export declare enum ConfirmationRequestResultFieldTags {
    PERMISSION_GRANTED = 0,
    ERROR_REASON = 1
}
export declare function whichConfirmationRequestResult(u: ConfirmationRequestResult): ConfirmationRequestResultFieldTags;
export declare interface GmailOtpOptInResult {
    response?: GmailOtpOptInResponse;
    errorReason?: GmailOtpErrorReason;
}
export declare enum GmailOtpOptInResultFieldTags {
    RESPONSE = 0,
    ERROR_REASON = 1
}
export declare function whichGmailOtpOptInResult(u: GmailOtpOptInResult): GmailOtpOptInResultFieldTags;
export declare interface GmailOtpConfirmationResult {
    response?: GmailOtpConfirmationResponse;
    errorReason?: GmailOtpErrorReason;
}
export declare enum GmailOtpConfirmationResultFieldTags {
    RESPONSE = 0,
    ERROR_REASON = 1
}
export declare function whichGmailOtpConfirmationResult(u: GmailOtpConfirmationResult): GmailOtpConfirmationResultFieldTags;
