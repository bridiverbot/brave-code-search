/**
 * Returns true if a mandatory admin policy turns off
 * `credentials_enable_service`, which blocks saving new passwords.
 */
export declare function isSavingNewPasswordsBlockedByMandatoryPolicy(pref: chrome.settingsPrivate.PrefObject<boolean>): boolean;
