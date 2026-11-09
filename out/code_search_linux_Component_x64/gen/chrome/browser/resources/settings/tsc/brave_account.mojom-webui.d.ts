import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { ChangePasswordStep1Result as braveAccount_mojom_ChangePasswordStep1Result, ChangePasswordStep2Result as braveAccount_mojom_ChangePasswordStep2Result, ChangePasswordStep3Result as braveAccount_mojom_ChangePasswordStep3Result, ChangePasswordStep4Result as braveAccount_mojom_ChangePasswordStep4Result, ChangePasswordError as braveAccount_mojom_ChangePasswordError } from './change_password.mojom-webui.js';
import { DeleteAccountResult as braveAccount_mojom_DeleteAccountResult, DeleteAccountError as braveAccount_mojom_DeleteAccountError } from './delete_account.mojom-webui.js';
import { GetServiceTokenResult as braveAccount_mojom_GetServiceTokenResult, GetServiceTokenError as braveAccount_mojom_GetServiceTokenError } from './get_service_token.mojom-webui.js';
import { LoginStep1Result as braveAccount_mojom_LoginStep1Result, LoginStep2Result as braveAccount_mojom_LoginStep2Result, LoginError as braveAccount_mojom_LoginError } from './login.mojom-webui.js';
import { RegisterStep1Result as braveAccount_mojom_RegisterStep1Result, RegisterStep2Result as braveAccount_mojom_RegisterStep2Result, RegisterStep3Result as braveAccount_mojom_RegisterStep3Result, RegisterError as braveAccount_mojom_RegisterError } from './register.mojom-webui.js';
import { ResendVerificationEmailResult as braveAccount_mojom_ResendVerificationEmailResult, ResendVerificationEmailError as braveAccount_mojom_ResendVerificationEmailError } from './resend_verification_email.mojom-webui.js';
import { ResetPasswordStep1Result as braveAccount_mojom_ResetPasswordStep1Result, ResetPasswordStep2Result as braveAccount_mojom_ResetPasswordStep2Result, ResetPasswordStep3Result as braveAccount_mojom_ResetPasswordStep3Result, ResetPasswordStep4Result as braveAccount_mojom_ResetPasswordStep4Result, ResetPasswordError as braveAccount_mojom_ResetPasswordError } from './reset_password.mojom-webui.js';
export declare const LoggedOutVerificationIntentSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LoggedOutVerificationIntent {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kRegistration = 0,
    kResetPassword = 1
}
export declare const LoggedInVerificationIntentSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LoggedInVerificationIntent {
    MIN_VALUE = 0,
    MAX_VALUE = 0,
    kChangePassword = 0
}
export declare const ServiceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum Service {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kAccounts = 0,
    kEmailAliases = 1,
    kPremium = 2,
    kSync = 3
}
export declare const DialogModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DialogMode {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kDefault = 0,
    kAccountDeletion = 1
}
export type AuthenticationObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<AuthenticationObserverPendingReceiver>;
export declare class AuthenticationObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<AuthenticationObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<AuthenticationObserverPendingReceiver>;
    constructor(handle: MojoHandle | AuthenticationObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface AuthenticationObserverInterface {
    onAccountStateChanged(state: AccountState): void;
}
export declare class AuthenticationObserverRemote implements AuthenticationObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<AuthenticationObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<AuthenticationObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | AuthenticationObserverPendingReceiverEndpoint);
    onAccountStateChanged(state: AccountState): void;
}
/**
 * An object which receives request messages for the AuthenticationObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class AuthenticationObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<AuthenticationObserverRemote, AuthenticationObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AuthenticationObserverRemote, AuthenticationObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: AuthenticationObserverInterface);
}
export declare class AuthenticationObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): AuthenticationObserverRemote;
}
/**
 * An object which receives request messages for the AuthenticationObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class AuthenticationObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<AuthenticationObserverRemote, AuthenticationObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AuthenticationObserverRemote, AuthenticationObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onAccountStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: AccountState) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type AuthenticationPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<AuthenticationPendingReceiver>;
export declare class AuthenticationPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Authentication> {
    handle: mojo.internal.interfaceSupport.Endpoint<AuthenticationPendingReceiver>;
    constructor(handle: MojoHandle | AuthenticationPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface AuthenticationInterface {
    addObserver(observer: AuthenticationObserverRemote): void;
    registerStep1(email: string, blindedMessage: string): Promise<braveAccount_mojom_RegisterStep1Result>;
    registerStep2(encryptedVerificationToken: string, serializedRecord: string): Promise<braveAccount_mojom_RegisterStep2Result>;
    registerStep3(code: string): Promise<braveAccount_mojom_RegisterStep3Result>;
    resendVerificationEmail(intent: VerificationIntent): Promise<braveAccount_mojom_ResendVerificationEmailResult>;
    cancelVerification(intent: VerificationIntent): void;
    resetPasswordStep1(email: string): Promise<braveAccount_mojom_ResetPasswordStep1Result>;
    resetPasswordStep2(code: string): Promise<braveAccount_mojom_ResetPasswordStep2Result>;
    resetPasswordStep3(blindedMessage: string): Promise<braveAccount_mojom_ResetPasswordStep3Result>;
    resetPasswordStep4(serializedRecord: string, email: string): Promise<braveAccount_mojom_ResetPasswordStep4Result>;
    loginStep1(email: string, serializedKE1: string): Promise<braveAccount_mojom_LoginStep1Result>;
    loginStep2(encryptedLoginToken: string, clientMac: string): Promise<braveAccount_mojom_LoginStep2Result>;
    changePasswordStep1(email: string): Promise<braveAccount_mojom_ChangePasswordStep1Result>;
    changePasswordStep2(code: string): Promise<braveAccount_mojom_ChangePasswordStep2Result>;
    changePasswordStep3(blindedMessage: string): Promise<braveAccount_mojom_ChangePasswordStep3Result>;
    changePasswordStep4(serializedRecord: string): Promise<braveAccount_mojom_ChangePasswordStep4Result>;
    logOut(): void;
    deleteAccount(): Promise<braveAccount_mojom_DeleteAccountResult>;
    getServiceToken(service: Service): Promise<braveAccount_mojom_GetServiceTokenResult>;
}
export declare class AuthenticationRemote implements AuthenticationInterface, mojo.internal.interfaceSupport.InterfaceRemote<AuthenticationPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<AuthenticationPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | AuthenticationPendingReceiverEndpoint);
    addObserver(observer: AuthenticationObserverRemote): void;
    registerStep1(email: string, blindedMessage: string): Promise<braveAccount_mojom_RegisterStep1Result>;
    registerStep2(encryptedVerificationToken: string, serializedRecord: string): Promise<braveAccount_mojom_RegisterStep2Result>;
    registerStep3(code: string): Promise<braveAccount_mojom_RegisterStep3Result>;
    resendVerificationEmail(intent: VerificationIntent): Promise<braveAccount_mojom_ResendVerificationEmailResult>;
    cancelVerification(intent: VerificationIntent): void;
    resetPasswordStep1(email: string): Promise<braveAccount_mojom_ResetPasswordStep1Result>;
    resetPasswordStep2(code: string): Promise<braveAccount_mojom_ResetPasswordStep2Result>;
    resetPasswordStep3(blindedMessage: string): Promise<braveAccount_mojom_ResetPasswordStep3Result>;
    resetPasswordStep4(serializedRecord: string, email: string): Promise<braveAccount_mojom_ResetPasswordStep4Result>;
    loginStep1(email: string, serializedKE1: string): Promise<braveAccount_mojom_LoginStep1Result>;
    loginStep2(encryptedLoginToken: string, clientMac: string): Promise<braveAccount_mojom_LoginStep2Result>;
    changePasswordStep1(email: string): Promise<braveAccount_mojom_ChangePasswordStep1Result>;
    changePasswordStep2(code: string): Promise<braveAccount_mojom_ChangePasswordStep2Result>;
    changePasswordStep3(blindedMessage: string): Promise<braveAccount_mojom_ChangePasswordStep3Result>;
    changePasswordStep4(serializedRecord: string): Promise<braveAccount_mojom_ChangePasswordStep4Result>;
    logOut(): void;
    deleteAccount(): Promise<braveAccount_mojom_DeleteAccountResult>;
    getServiceToken(service: Service): Promise<braveAccount_mojom_GetServiceTokenResult>;
}
/**
 * An object which receives request messages for the Authentication
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class AuthenticationReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<AuthenticationRemote, AuthenticationPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AuthenticationRemote, AuthenticationPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: AuthenticationInterface);
}
export declare class Authentication {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): AuthenticationRemote;
}
/**
 * An object which receives request messages for the Authentication
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class AuthenticationCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<AuthenticationRemote, AuthenticationPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AuthenticationRemote, AuthenticationPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    addObserver: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(observer: AuthenticationObserverRemote) => any>;
    registerStep1: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(email: string, blindedMessage: string) => any>;
    registerStep2: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(encryptedVerificationToken: string, serializedRecord: string) => any>;
    registerStep3: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(code: string) => any>;
    resendVerificationEmail: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(intent: VerificationIntent) => any>;
    cancelVerification: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(intent: VerificationIntent) => any>;
    resetPasswordStep1: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(email: string) => any>;
    resetPasswordStep2: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(code: string) => any>;
    resetPasswordStep3: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(blindedMessage: string) => any>;
    resetPasswordStep4: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serializedRecord: string, email: string) => any>;
    loginStep1: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(email: string, serializedKE1: string) => any>;
    loginStep2: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(encryptedLoginToken: string, clientMac: string) => any>;
    changePasswordStep1: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(email: string) => any>;
    changePasswordStep2: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(code: string) => any>;
    changePasswordStep3: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(blindedMessage: string) => any>;
    changePasswordStep4: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serializedRecord: string) => any>;
    logOut: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    deleteAccount: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getServiceToken: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(service: Service) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type DialogControllerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DialogControllerPendingReceiver>;
export declare class DialogControllerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DialogController> {
    handle: mojo.internal.interfaceSupport.Endpoint<DialogControllerPendingReceiver>;
    constructor(handle: MojoHandle | DialogControllerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DialogControllerInterface {
    closeDialog(): void;
    getDialogMode(): Promise<{
        dialogMode: DialogMode;
    }>;
}
export declare class DialogControllerRemote implements DialogControllerInterface, mojo.internal.interfaceSupport.InterfaceRemote<DialogControllerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DialogControllerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DialogControllerPendingReceiverEndpoint);
    closeDialog(): void;
    getDialogMode(): Promise<{
        dialogMode: DialogMode;
    }>;
}
/**
 * An object which receives request messages for the DialogController
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DialogControllerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DialogControllerRemote, DialogControllerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DialogControllerRemote, DialogControllerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DialogControllerInterface);
}
export declare class DialogController {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DialogControllerRemote;
}
/**
 * An object which receives request messages for the DialogController
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DialogControllerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DialogControllerRemote, DialogControllerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DialogControllerRemote, DialogControllerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    closeDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getDialogMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type DialogOpenerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DialogOpenerPendingReceiver>;
export declare class DialogOpenerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DialogOpener> {
    handle: mojo.internal.interfaceSupport.Endpoint<DialogOpenerPendingReceiver>;
    constructor(handle: MojoHandle | DialogOpenerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DialogOpenerInterface {
    openDialog(dialogMode: DialogMode): void;
}
export declare class DialogOpenerRemote implements DialogOpenerInterface, mojo.internal.interfaceSupport.InterfaceRemote<DialogOpenerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DialogOpenerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DialogOpenerPendingReceiverEndpoint);
    openDialog(dialogMode: DialogMode): void;
}
/**
 * An object which receives request messages for the DialogOpener
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DialogOpenerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DialogOpenerRemote, DialogOpenerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DialogOpenerRemote, DialogOpenerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DialogOpenerInterface);
}
export declare class DialogOpener {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DialogOpenerRemote;
}
/**
 * An object which receives request messages for the DialogOpener
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DialogOpenerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DialogOpenerRemote, DialogOpenerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DialogOpenerRemote, DialogOpenerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    openDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(dialogMode: DialogMode) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const LoggedOutVerificationSpec: {
    $: mojo.internal.MojomType;
};
export declare const LoggedInVerificationSpec: {
    $: mojo.internal.MojomType;
};
export declare const LoggedOutStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const LoggedInStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const AuthenticationObserver_OnAccountStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_AddObserver_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_RegisterStep1_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_RegisterStep1_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_RegisterStep2_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_RegisterStep2_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_RegisterStep3_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_RegisterStep3_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResendVerificationEmail_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResendVerificationEmail_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_CancelVerification_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep1_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep1_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep2_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep2_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep3_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep3_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep4_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep4_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_LoginStep1_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_LoginStep1_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_LoginStep2_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_LoginStep2_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep1_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep1_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep2_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep2_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep3_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep3_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep4_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep4_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_LogOut_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_DeleteAccount_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_DeleteAccount_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_GetServiceToken_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_GetServiceToken_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogController_CloseDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogController_GetDialogMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogController_GetDialogMode_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogOpener_OpenDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const VerificationIntentSpec: {
    $: mojo.internal.MojomType;
};
export declare const AccountStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_RegisterStep1_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_RegisterStep2_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_RegisterStep3_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResendVerificationEmail_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep1_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep2_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep3_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ResetPasswordStep4_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_LoginStep1_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_LoginStep2_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep1_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep2_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep3_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_ChangePasswordStep4_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_DeleteAccount_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const Authentication_GetServiceToken_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface LoggedOutVerificationMojoType {
    intent: LoggedOutVerificationIntent;
    verifiedEmail: string;
}
export type LoggedOutVerification = LoggedOutVerificationMojoType;
export declare interface LoggedInVerificationMojoType {
    intent: LoggedInVerificationIntent;
    verifiedEmail: string;
}
export type LoggedInVerification = LoggedInVerificationMojoType;
export declare interface LoggedOutStateMojoType {
    verification: (LoggedOutVerification | null);
}
export type LoggedOutState = LoggedOutStateMojoType;
export declare interface LoggedInStateMojoType {
    email: string;
    verification: (LoggedInVerification | null);
}
export type LoggedInState = LoggedInStateMojoType;
export declare interface AuthenticationObserver_OnAccountStateChanged_ParamsMojoType {
    state: AccountState;
}
export type AuthenticationObserver_OnAccountStateChanged_Params = AuthenticationObserver_OnAccountStateChanged_ParamsMojoType;
export declare interface Authentication_AddObserver_ParamsMojoType {
    observer: AuthenticationObserverRemote;
}
export type Authentication_AddObserver_Params = Authentication_AddObserver_ParamsMojoType;
export declare interface Authentication_RegisterStep1_ParamsMojoType {
    email: string;
    blindedMessage: string;
}
export type Authentication_RegisterStep1_Params = Authentication_RegisterStep1_ParamsMojoType;
export declare interface Authentication_RegisterStep1_ResponseParamsMojoType {
    result: Authentication_RegisterStep1_ResponseParam_Result;
}
export type Authentication_RegisterStep1_ResponseParams = Authentication_RegisterStep1_ResponseParamsMojoType;
export declare interface Authentication_RegisterStep2_ParamsMojoType {
    encryptedVerificationToken: string;
    serializedRecord: string;
}
export type Authentication_RegisterStep2_Params = Authentication_RegisterStep2_ParamsMojoType;
export declare interface Authentication_RegisterStep2_ResponseParamsMojoType {
    result: Authentication_RegisterStep2_ResponseParam_Result;
}
export type Authentication_RegisterStep2_ResponseParams = Authentication_RegisterStep2_ResponseParamsMojoType;
export declare interface Authentication_RegisterStep3_ParamsMojoType {
    code: string;
}
export type Authentication_RegisterStep3_Params = Authentication_RegisterStep3_ParamsMojoType;
export declare interface Authentication_RegisterStep3_ResponseParamsMojoType {
    result: Authentication_RegisterStep3_ResponseParam_Result;
}
export type Authentication_RegisterStep3_ResponseParams = Authentication_RegisterStep3_ResponseParamsMojoType;
export declare interface Authentication_ResendVerificationEmail_ParamsMojoType {
    intent: VerificationIntent;
}
export type Authentication_ResendVerificationEmail_Params = Authentication_ResendVerificationEmail_ParamsMojoType;
export declare interface Authentication_ResendVerificationEmail_ResponseParamsMojoType {
    result: Authentication_ResendVerificationEmail_ResponseParam_Result;
}
export type Authentication_ResendVerificationEmail_ResponseParams = Authentication_ResendVerificationEmail_ResponseParamsMojoType;
export declare interface Authentication_CancelVerification_ParamsMojoType {
    intent: VerificationIntent;
}
export type Authentication_CancelVerification_Params = Authentication_CancelVerification_ParamsMojoType;
export declare interface Authentication_ResetPasswordStep1_ParamsMojoType {
    email: string;
}
export type Authentication_ResetPasswordStep1_Params = Authentication_ResetPasswordStep1_ParamsMojoType;
export declare interface Authentication_ResetPasswordStep1_ResponseParamsMojoType {
    result: Authentication_ResetPasswordStep1_ResponseParam_Result;
}
export type Authentication_ResetPasswordStep1_ResponseParams = Authentication_ResetPasswordStep1_ResponseParamsMojoType;
export declare interface Authentication_ResetPasswordStep2_ParamsMojoType {
    code: string;
}
export type Authentication_ResetPasswordStep2_Params = Authentication_ResetPasswordStep2_ParamsMojoType;
export declare interface Authentication_ResetPasswordStep2_ResponseParamsMojoType {
    result: Authentication_ResetPasswordStep2_ResponseParam_Result;
}
export type Authentication_ResetPasswordStep2_ResponseParams = Authentication_ResetPasswordStep2_ResponseParamsMojoType;
export declare interface Authentication_ResetPasswordStep3_ParamsMojoType {
    blindedMessage: string;
}
export type Authentication_ResetPasswordStep3_Params = Authentication_ResetPasswordStep3_ParamsMojoType;
export declare interface Authentication_ResetPasswordStep3_ResponseParamsMojoType {
    result: Authentication_ResetPasswordStep3_ResponseParam_Result;
}
export type Authentication_ResetPasswordStep3_ResponseParams = Authentication_ResetPasswordStep3_ResponseParamsMojoType;
export declare interface Authentication_ResetPasswordStep4_ParamsMojoType {
    serializedRecord: string;
    email: string;
}
export type Authentication_ResetPasswordStep4_Params = Authentication_ResetPasswordStep4_ParamsMojoType;
export declare interface Authentication_ResetPasswordStep4_ResponseParamsMojoType {
    result: Authentication_ResetPasswordStep4_ResponseParam_Result;
}
export type Authentication_ResetPasswordStep4_ResponseParams = Authentication_ResetPasswordStep4_ResponseParamsMojoType;
export declare interface Authentication_LoginStep1_ParamsMojoType {
    email: string;
    serializedKE1: string;
}
export type Authentication_LoginStep1_Params = Authentication_LoginStep1_ParamsMojoType;
export declare interface Authentication_LoginStep1_ResponseParamsMojoType {
    result: Authentication_LoginStep1_ResponseParam_Result;
}
export type Authentication_LoginStep1_ResponseParams = Authentication_LoginStep1_ResponseParamsMojoType;
export declare interface Authentication_LoginStep2_ParamsMojoType {
    encryptedLoginToken: string;
    clientMac: string;
}
export type Authentication_LoginStep2_Params = Authentication_LoginStep2_ParamsMojoType;
export declare interface Authentication_LoginStep2_ResponseParamsMojoType {
    result: Authentication_LoginStep2_ResponseParam_Result;
}
export type Authentication_LoginStep2_ResponseParams = Authentication_LoginStep2_ResponseParamsMojoType;
export declare interface Authentication_ChangePasswordStep1_ParamsMojoType {
    email: string;
}
export type Authentication_ChangePasswordStep1_Params = Authentication_ChangePasswordStep1_ParamsMojoType;
export declare interface Authentication_ChangePasswordStep1_ResponseParamsMojoType {
    result: Authentication_ChangePasswordStep1_ResponseParam_Result;
}
export type Authentication_ChangePasswordStep1_ResponseParams = Authentication_ChangePasswordStep1_ResponseParamsMojoType;
export declare interface Authentication_ChangePasswordStep2_ParamsMojoType {
    code: string;
}
export type Authentication_ChangePasswordStep2_Params = Authentication_ChangePasswordStep2_ParamsMojoType;
export declare interface Authentication_ChangePasswordStep2_ResponseParamsMojoType {
    result: Authentication_ChangePasswordStep2_ResponseParam_Result;
}
export type Authentication_ChangePasswordStep2_ResponseParams = Authentication_ChangePasswordStep2_ResponseParamsMojoType;
export declare interface Authentication_ChangePasswordStep3_ParamsMojoType {
    blindedMessage: string;
}
export type Authentication_ChangePasswordStep3_Params = Authentication_ChangePasswordStep3_ParamsMojoType;
export declare interface Authentication_ChangePasswordStep3_ResponseParamsMojoType {
    result: Authentication_ChangePasswordStep3_ResponseParam_Result;
}
export type Authentication_ChangePasswordStep3_ResponseParams = Authentication_ChangePasswordStep3_ResponseParamsMojoType;
export declare interface Authentication_ChangePasswordStep4_ParamsMojoType {
    serializedRecord: string;
}
export type Authentication_ChangePasswordStep4_Params = Authentication_ChangePasswordStep4_ParamsMojoType;
export declare interface Authentication_ChangePasswordStep4_ResponseParamsMojoType {
    result: Authentication_ChangePasswordStep4_ResponseParam_Result;
}
export type Authentication_ChangePasswordStep4_ResponseParams = Authentication_ChangePasswordStep4_ResponseParamsMojoType;
export declare interface Authentication_LogOut_ParamsMojoType {
}
export type Authentication_LogOut_Params = Authentication_LogOut_ParamsMojoType;
export declare interface Authentication_DeleteAccount_ParamsMojoType {
}
export type Authentication_DeleteAccount_Params = Authentication_DeleteAccount_ParamsMojoType;
export declare interface Authentication_DeleteAccount_ResponseParamsMojoType {
    result: Authentication_DeleteAccount_ResponseParam_Result;
}
export type Authentication_DeleteAccount_ResponseParams = Authentication_DeleteAccount_ResponseParamsMojoType;
export declare interface Authentication_GetServiceToken_ParamsMojoType {
    service: Service;
}
export type Authentication_GetServiceToken_Params = Authentication_GetServiceToken_ParamsMojoType;
export declare interface Authentication_GetServiceToken_ResponseParamsMojoType {
    result: Authentication_GetServiceToken_ResponseParam_Result;
}
export type Authentication_GetServiceToken_ResponseParams = Authentication_GetServiceToken_ResponseParamsMojoType;
export declare interface DialogController_CloseDialog_ParamsMojoType {
}
export type DialogController_CloseDialog_Params = DialogController_CloseDialog_ParamsMojoType;
export declare interface DialogController_GetDialogMode_ParamsMojoType {
}
export type DialogController_GetDialogMode_Params = DialogController_GetDialogMode_ParamsMojoType;
export declare interface DialogController_GetDialogMode_ResponseParamsMojoType {
    dialogMode: DialogMode;
}
export type DialogController_GetDialogMode_ResponseParams = DialogController_GetDialogMode_ResponseParamsMojoType;
export declare interface DialogOpener_OpenDialog_ParamsMojoType {
    dialogMode: DialogMode;
}
export type DialogOpener_OpenDialog_Params = DialogOpener_OpenDialog_ParamsMojoType;
export declare interface VerificationIntent {
    loggedOutIntent?: LoggedOutVerificationIntent;
    loggedInIntent?: LoggedInVerificationIntent;
}
export declare enum VerificationIntentFieldTags {
    LOGGED_OUT_INTENT = 0,
    LOGGED_IN_INTENT = 1
}
export declare function whichVerificationIntent(u: VerificationIntent): VerificationIntentFieldTags;
export declare interface AccountState {
    loggedOut?: LoggedOutState;
    loggedIn?: LoggedInState;
}
export declare enum AccountStateFieldTags {
    LOGGED_OUT = 0,
    LOGGED_IN = 1
}
export declare function whichAccountState(u: AccountState): AccountStateFieldTags;
export declare interface Authentication_RegisterStep1_ResponseParam_Result {
    success?: braveAccount_mojom_RegisterStep1Result;
    failure?: braveAccount_mojom_RegisterError;
}
export declare enum Authentication_RegisterStep1_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_RegisterStep1_ResponseParam_Result(u: Authentication_RegisterStep1_ResponseParam_Result): Authentication_RegisterStep1_ResponseParam_ResultFieldTags;
export declare interface Authentication_RegisterStep2_ResponseParam_Result {
    success?: braveAccount_mojom_RegisterStep2Result;
    failure?: braveAccount_mojom_RegisterError;
}
export declare enum Authentication_RegisterStep2_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_RegisterStep2_ResponseParam_Result(u: Authentication_RegisterStep2_ResponseParam_Result): Authentication_RegisterStep2_ResponseParam_ResultFieldTags;
export declare interface Authentication_RegisterStep3_ResponseParam_Result {
    success?: braveAccount_mojom_RegisterStep3Result;
    failure?: braveAccount_mojom_RegisterError;
}
export declare enum Authentication_RegisterStep3_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_RegisterStep3_ResponseParam_Result(u: Authentication_RegisterStep3_ResponseParam_Result): Authentication_RegisterStep3_ResponseParam_ResultFieldTags;
export declare interface Authentication_ResendVerificationEmail_ResponseParam_Result {
    success?: braveAccount_mojom_ResendVerificationEmailResult;
    failure?: braveAccount_mojom_ResendVerificationEmailError;
}
export declare enum Authentication_ResendVerificationEmail_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_ResendVerificationEmail_ResponseParam_Result(u: Authentication_ResendVerificationEmail_ResponseParam_Result): Authentication_ResendVerificationEmail_ResponseParam_ResultFieldTags;
export declare interface Authentication_ResetPasswordStep1_ResponseParam_Result {
    success?: braveAccount_mojom_ResetPasswordStep1Result;
    failure?: braveAccount_mojom_ResetPasswordError;
}
export declare enum Authentication_ResetPasswordStep1_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_ResetPasswordStep1_ResponseParam_Result(u: Authentication_ResetPasswordStep1_ResponseParam_Result): Authentication_ResetPasswordStep1_ResponseParam_ResultFieldTags;
export declare interface Authentication_ResetPasswordStep2_ResponseParam_Result {
    success?: braveAccount_mojom_ResetPasswordStep2Result;
    failure?: braveAccount_mojom_ResetPasswordError;
}
export declare enum Authentication_ResetPasswordStep2_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_ResetPasswordStep2_ResponseParam_Result(u: Authentication_ResetPasswordStep2_ResponseParam_Result): Authentication_ResetPasswordStep2_ResponseParam_ResultFieldTags;
export declare interface Authentication_ResetPasswordStep3_ResponseParam_Result {
    success?: braveAccount_mojom_ResetPasswordStep3Result;
    failure?: braveAccount_mojom_ResetPasswordError;
}
export declare enum Authentication_ResetPasswordStep3_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_ResetPasswordStep3_ResponseParam_Result(u: Authentication_ResetPasswordStep3_ResponseParam_Result): Authentication_ResetPasswordStep3_ResponseParam_ResultFieldTags;
export declare interface Authentication_ResetPasswordStep4_ResponseParam_Result {
    success?: braveAccount_mojom_ResetPasswordStep4Result;
    failure?: braveAccount_mojom_ResetPasswordError;
}
export declare enum Authentication_ResetPasswordStep4_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_ResetPasswordStep4_ResponseParam_Result(u: Authentication_ResetPasswordStep4_ResponseParam_Result): Authentication_ResetPasswordStep4_ResponseParam_ResultFieldTags;
export declare interface Authentication_LoginStep1_ResponseParam_Result {
    success?: braveAccount_mojom_LoginStep1Result;
    failure?: braveAccount_mojom_LoginError;
}
export declare enum Authentication_LoginStep1_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_LoginStep1_ResponseParam_Result(u: Authentication_LoginStep1_ResponseParam_Result): Authentication_LoginStep1_ResponseParam_ResultFieldTags;
export declare interface Authentication_LoginStep2_ResponseParam_Result {
    success?: braveAccount_mojom_LoginStep2Result;
    failure?: braveAccount_mojom_LoginError;
}
export declare enum Authentication_LoginStep2_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_LoginStep2_ResponseParam_Result(u: Authentication_LoginStep2_ResponseParam_Result): Authentication_LoginStep2_ResponseParam_ResultFieldTags;
export declare interface Authentication_ChangePasswordStep1_ResponseParam_Result {
    success?: braveAccount_mojom_ChangePasswordStep1Result;
    failure?: braveAccount_mojom_ChangePasswordError;
}
export declare enum Authentication_ChangePasswordStep1_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_ChangePasswordStep1_ResponseParam_Result(u: Authentication_ChangePasswordStep1_ResponseParam_Result): Authentication_ChangePasswordStep1_ResponseParam_ResultFieldTags;
export declare interface Authentication_ChangePasswordStep2_ResponseParam_Result {
    success?: braveAccount_mojom_ChangePasswordStep2Result;
    failure?: braveAccount_mojom_ChangePasswordError;
}
export declare enum Authentication_ChangePasswordStep2_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_ChangePasswordStep2_ResponseParam_Result(u: Authentication_ChangePasswordStep2_ResponseParam_Result): Authentication_ChangePasswordStep2_ResponseParam_ResultFieldTags;
export declare interface Authentication_ChangePasswordStep3_ResponseParam_Result {
    success?: braveAccount_mojom_ChangePasswordStep3Result;
    failure?: braveAccount_mojom_ChangePasswordError;
}
export declare enum Authentication_ChangePasswordStep3_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_ChangePasswordStep3_ResponseParam_Result(u: Authentication_ChangePasswordStep3_ResponseParam_Result): Authentication_ChangePasswordStep3_ResponseParam_ResultFieldTags;
export declare interface Authentication_ChangePasswordStep4_ResponseParam_Result {
    success?: braveAccount_mojom_ChangePasswordStep4Result;
    failure?: braveAccount_mojom_ChangePasswordError;
}
export declare enum Authentication_ChangePasswordStep4_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_ChangePasswordStep4_ResponseParam_Result(u: Authentication_ChangePasswordStep4_ResponseParam_Result): Authentication_ChangePasswordStep4_ResponseParam_ResultFieldTags;
export declare interface Authentication_DeleteAccount_ResponseParam_Result {
    success?: braveAccount_mojom_DeleteAccountResult;
    failure?: braveAccount_mojom_DeleteAccountError;
}
export declare enum Authentication_DeleteAccount_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_DeleteAccount_ResponseParam_Result(u: Authentication_DeleteAccount_ResponseParam_Result): Authentication_DeleteAccount_ResponseParam_ResultFieldTags;
export declare interface Authentication_GetServiceToken_ResponseParam_Result {
    success?: braveAccount_mojom_GetServiceTokenResult;
    failure?: braveAccount_mojom_GetServiceTokenError;
}
export declare enum Authentication_GetServiceToken_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAuthentication_GetServiceToken_ResponseParam_Result(u: Authentication_GetServiceToken_ResponseParam_Result): Authentication_GetServiceToken_ResponseParam_ResultFieldTags;
