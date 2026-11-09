/**
 * @fileoverview Helper for navigating to the Password Manager UI and recording
 * related metrics from settings.
 */
/**
 * Interface for all callbacks to the password API.
 */
export interface PasswordManagerProxy {
    /**
     * Log that the Passwords page was accessed from the Chrome Settings WebUI.
     */
    recordPasswordsPageAccessInSettings(): void;
    /**
     * Shows new Password Manager UI (chrome://password-manager).
     */
    showPasswordManager(page: PasswordManagerPage): void;
}
/**
 * Enumerates referrers that can trigger a navigation to the manage passwords
 * page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
export declare enum ManagePasswordsReferrer {
    CHROME_SETTINGS = 0,
    MANAGE_PASSWORDS_BUBBLE = 1,
    PASSWORD_CONTEXT_MENU = 2,
    PASSWORD_DROPDOWN = 3,
    PASSWORD_GENERATION_CONFIRMATION = 4,
    PASSWORDS_ACCESSORY_SHEET = 6,
    TOUCH_TO_FILL = 7,
    SAFE_STATE_BUBBLE = 8,
    PASSWORD_BREACH_DIALOG = 9,
    SAFETY_CHECK = 10,
    SAVE_UPDATE_BUBBLE = 11,
    PASSWORD_GENERATION_PROMPT = 12,
    PASSWORDS_GOOGLE_WEBSITE = 13,
    BIOMETRIC_AUTHENTICATION_BEFORE_FILLING_DIALOG = 15,
    CHROME_MENU_ITEM = 16,
    SHARED_PASSWORDS_NOTIFICATION_BUBBLE = 17,
    SEARCH_PASSWORDS_WIDGET = 18,
    ADD_USERNAME_BUBBLE = 19,
    OMNIBOX_PEDAL_SUGGESTION = 20,
    MANAGE_PASSWORD_DETAILS_BUBBLE = 22,
    PASSKEY_SAVED_CONFIRMATION_BUBBLE = 23,
    PASSKEY_DELETED_CONFIRMATION_BUBBLE = 24,
    PASSKEY_UPDATED_CONFIRMATION_BUBBLE = 25,
    PASSKEY_NOT_ACCEPTED_BUBBLE = 26,
    PASSKEY_UPGRADE_BUBBLE = 28,
    PASSWORD_CHANGE_INFO_BUBBLE = 29,
    CHROME_SETTINGS_AUTOFILL_AND_PASSWORDS = 30,
    COUNT = 31
}
export declare enum PasswordManagerPage {
    PASSWORDS = 0,
    CHECKUP = 1
}
/**
 * Implementation that accesses the private API.
 */
export declare class PasswordManagerImpl implements PasswordManagerProxy {
    recordPasswordsPageAccessInSettings(): void;
    showPasswordManager(page: PasswordManagerPage): void;
    static getInstance(): PasswordManagerProxy;
    static setInstance(obj: PasswordManagerProxy): void;
}
