/**
 * Ctap2Status contains a subset of CTAP2 status codes. See
 * device::CtapDeviceResponseCode for the full list.
 */
export declare enum Ctap2Status {
    OK = 0,
    ERR_FP_DATABASE_FULL = 23,
    ERR_INVALID_OPTION = 44,
    ERR_KEEPALIVE_CANCEL = 45
}
/**
 * Credential represents a CTAP2 resident credential enumerated from a
 * security key.
 *
 * credentialId: (required) The hex encoding of the credential ID.
 *
 * relyingPartyId: (required) The RP ID (i.e. the site that created the
 *     credential; eTLD+n)
 *
 * userHandle: userName: (required) The PublicKeyCredentialUserEntity.id
 *
 * userName: (required) The PublicKeyCredentialUserEntity.name
 *
 * userDisplayName: (required) The PublicKeyCredentialUserEntity.display_name
 *
 * @see chrome/browser/ui/webui/settings/settings_security_key_handler.cc
 */
export interface Credential {
    credentialId: string;
    relyingPartyId: string;
    userHandle: string;
    userName: string;
    userDisplayName: string;
}
/**
 * Encapsulates information about an authenticator's biometric sensor.
 */
export interface SensorInfo {
    maxTemplateFriendlyName: number;
    maxSamplesForEnroll: number | null;
}
/**
 * SampleStatus is the result for reading an individual sample ("touch")
 * during a fingerprint enrollment. This is a subset of the
 * lastEnrollSampleStatus enum defined in the CTAP spec.
 */
export declare enum SampleStatus {
    OK = 0
}
/**
 * SampleResponse indicates the result of an individual sample (sensor touch)
 * for an enrollment suboperation.
 *
 * @see chrome/browser/ui/webui/settings/settings_security_key_handler.cc
 */
export interface SampleResponse {
    status: SampleStatus;
    remaining: number;
}
/**
 * EnrollmentResponse is the final response to an enrollment suboperation,
 *
 * @see chrome/browser/ui/webui/settings/settings_security_key_handler.cc
 */
export interface EnrollmentResponse {
    code: Ctap2Status;
    enrollment: Enrollment | null;
}
/**
 * Enrollment represents a valid fingerprint template stored on a security
 * key, which can be used in a user verification request.
 *
 * @see chrome/browser/ui/webui/settings/settings_security_key_handler.cc
 */
export interface Enrollment {
    name: string;
    id: string;
}
/**
 * SetPinResponse represents the response to startSetPin and setPin requests.
 *
 * @see chrome/browser/ui/webui/settings/settings_security_key_handler.cc
 */
export interface SetPinResponse {
    done: boolean;
    error?: number;
    currentMinPinLength?: number;
    newMinPinLength?: number;
    retries?: number;
}
/**
 * StartCredentialManagementResponse is the response to
 * startCredentialManagement.
 *
 * @see chrome/browser/ui/webui/settings/settings_security_key_handler.cc
 */
export interface StartCredentialManagementResponse {
    minPinLength: number;
    supportsUpdateUserInformation: boolean;
}
/**
 * CredentialManagementResponse is the response to a deleteCredential or
 * updateUserInfo suboperation.
 *
 * @see chrome/browser/ui/webui/settings/settings_security_key_handler.cc
 */
export interface CredentialManagementResponse {
    success: boolean;
    message: string;
}
export interface SecurityKeysPinBrowserProxy {
    /**
     * Starts a PIN set/change operation by flashing all security keys. Resolves
     * with a pair of numbers. The first is one if the process has immediately
     * completed (i.e. failed). In this case the second is a CTAP error code.
     * Otherwise the process is ongoing and must be completed by calling
     * |setPin|. In this case the second number is either the number of tries
     * remaining to correctly specify the current PIN, or else null to indicate
     * that no PIN is currently set.
     */
    startSetPin(): Promise<SetPinResponse>;
    /**
     * Attempts a PIN set/change operation. Resolves with a pair of numbers
     * whose meaning is the same as with |startSetPin|. The first number will
     * always be 1 to indicate that the process has completed and thus the
     * second will be the CTAP error code.
     */
    setPin(oldPIN: string, newPIN: string): Promise<SetPinResponse>;
    /** Cancels all outstanding operations. */
    close(): void;
}
export interface SecurityKeysCredentialBrowserProxy {
    /**
     * Starts a credential management operation.
     *
     * Callers must listen to errors that can occur during the operation via a
     * 'security-keys-credential-management-error' WebListener. Values received
     * via this listener are localized error strings. When the
     * WebListener fires, the operation must be considered terminated.
     *
     * @return A promise that resolves when the handler is ready for
     *     the authenticator PIN to be provided.
     */
    startCredentialManagement(): Promise<StartCredentialManagementResponse>;
    /**
     * Provides a PIN for a credential management operation. The
     * startCredentialManagement() promise must have resolved before this method
     * may be called.
     * @return A promise that resolves with null if the PIN
     *     was correct or the number of retries remaining otherwise.
     */
    providePin(pin: string): Promise<number | null>;
    /**
     * Enumerates credentials on the authenticator. A correct PIN must have
     * previously been supplied via providePin() before this
     * method may be called.
     */
    enumerateCredentials(): Promise<Credential[]>;
    /**
     * Deletes the credentials with the given IDs from the security key.
     * @return An object with a success boolean and a localized response
     *     message to display to the user (on either success or error)
     */
    deleteCredentials(ids: string[]): Promise<CredentialManagementResponse>;
    /**
     * Updates the credentials with the given ID from the security key
     * to a new username (and/or) displayname
     * @return An object with a success boolean and a localized response
     *     message to display to the user (on either success or error)
     */
    updateUserInformation(credentialId: string, userHandle: string, newUsername: string, newDisplayname: string): Promise<CredentialManagementResponse>;
    /** Cancels all outstanding operations. */
    close(): void;
}
export interface SecurityKeysResetBrowserProxy {
    /**
     * Starts a reset operation by flashing all security keys and sending a
     * reset command to the one that the user activates. Resolves with a CTAP
     * error code.
     */
    reset(): Promise<number>;
    /**
     * Waits for a reset operation to complete. Resolves with a CTAP error code.
     */
    completeReset(): Promise<number>;
    /** Cancels all outstanding operations. */
    close(): void;
}
export interface SecurityKeysBioEnrollProxy {
    /**
     * Starts a biometric enrollment operation.
     *
     * Callers must listen to errors that can occur during this operation via a
     * 'security-keys-bio-enrollment-error' WebUIListener. Values received via
     * this listener are localized error strings. The WebListener may fire at
     * any point during the operation (enrolling, deleting, etc) and when it
     * fires, the operation must be considered terminated.
     *
     * @return Resolves when the handler is ready for the
     *     authentcation PIN to be provided.
     */
    startBioEnroll(): Promise<number[]>;
    /**
     * Provides a PIN for a biometric enrollment operation. The startBioEnroll()
     * Promise must have resolved before this method may be called.
     *
     * @return Resolves with null if the PIN was correct, or
     *     with the number of retries remaining otherwise.
     */
    providePin(pin: string): Promise<number | null>;
    /**
     * Obtains the |SensorInfo| for the authenticator. A correct PIN must have
     * previously been supplied via providePin() before this method may be called.
     */
    getSensorInfo(): Promise<SensorInfo>;
    /**
     * Enumerates enrollments on the authenticator. A correct PIN must have
     * previously been supplied via providePin() before this method may be called.
     */
    enumerateEnrollments(): Promise<Enrollment[]>;
    /**
     * Move the operation into enrolling mode, which instructs the authenticator
     * to start sampling for touches.
     *
     * Callers must listen to status updates that will occur during this
     * suboperation via a 'security-keys-bio-enroll-status' WebListener. Values
     * received via this listener are DictionaryValues with two elements (see
     * below). When the WebListener fires, the authenticator has either timed
     * out waiting for a touch, or has successfully processed a touch. Any
     * errors will fire the 'security-keys-bio-enrollment-error' WebListener.
     *
     * @return Resolves when the enrollment operation is finished successfully.
     */
    startEnrolling(): Promise<EnrollmentResponse>;
    /**
     * Cancel an ongoing enrollment suboperation. This can safely be called at
     * any time and only has an impact when the authenticator is currently
     * sampling.
     */
    cancelEnrollment(): void;
    /**
     * Deletes the enrollment with the given ID.
     *
     * @return The remaining enrollments.
     */
    deleteEnrollment(id: string): Promise<Enrollment[]>;
    /**
     * Renames the enrollment with the given ID.
     *
     * @return The updated list of enrollments.
     */
    renameEnrollment(id: string, name: string): Promise<Enrollment[]>;
    /** Cancels all outstanding operations. */
    close(): void;
}
export declare class SecurityKeysPinBrowserProxyImpl implements SecurityKeysPinBrowserProxy {
    startSetPin(): Promise<SetPinResponse>;
    setPin(oldPIN: string, newPIN: string): Promise<SetPinResponse>;
    close(): void;
    static getInstance(): SecurityKeysPinBrowserProxy;
    static setInstance(obj: SecurityKeysPinBrowserProxy): void;
}
export declare class SecurityKeysCredentialBrowserProxyImpl implements SecurityKeysCredentialBrowserProxy {
    startCredentialManagement(): Promise<StartCredentialManagementResponse>;
    providePin(pin: string): Promise<number | null>;
    enumerateCredentials(): Promise<Credential[]>;
    deleteCredentials(ids: string[]): Promise<CredentialManagementResponse>;
    updateUserInformation(credentialId: string, userHandle: string, newUsername: string, newDisplayname: string): Promise<CredentialManagementResponse>;
    close(): void;
    static getInstance(): SecurityKeysCredentialBrowserProxy;
    static setInstance(obj: SecurityKeysCredentialBrowserProxy): void;
}
export declare class SecurityKeysResetBrowserProxyImpl implements SecurityKeysResetBrowserProxy {
    reset(): Promise<number>;
    completeReset(): Promise<number>;
    close(): void;
    static getInstance(): SecurityKeysResetBrowserProxy;
    static setInstance(obj: SecurityKeysResetBrowserProxy): void;
}
export declare class SecurityKeysBioEnrollProxyImpl implements SecurityKeysBioEnrollProxy {
    startBioEnroll(): Promise<number[]>;
    providePin(pin: string): Promise<number | null>;
    getSensorInfo(): Promise<SensorInfo>;
    enumerateEnrollments(): Promise<Enrollment[]>;
    startEnrolling(): Promise<EnrollmentResponse>;
    cancelEnrollment(): void;
    deleteEnrollment(id: string): Promise<Enrollment[]>;
    renameEnrollment(id: string, name: string): Promise<Enrollment[]>;
    close(): void;
    static getInstance(): SecurityKeysBioEnrollProxy;
    static setInstance(obj: SecurityKeysBioEnrollProxy): void;
}
