// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enumerates referrers that can trigger a navigation to the manage passwords
 * page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
// LINT.IfChange(ManagePasswordsReferrer)
export var ManagePasswordsReferrer;
(function (ManagePasswordsReferrer) {
    ManagePasswordsReferrer[ManagePasswordsReferrer["CHROME_SETTINGS"] = 0] = "CHROME_SETTINGS";
    ManagePasswordsReferrer[ManagePasswordsReferrer["MANAGE_PASSWORDS_BUBBLE"] = 1] = "MANAGE_PASSWORDS_BUBBLE";
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSWORD_CONTEXT_MENU"] = 2] = "PASSWORD_CONTEXT_MENU";
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSWORD_DROPDOWN"] = 3] = "PASSWORD_DROPDOWN";
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSWORD_GENERATION_CONFIRMATION"] = 4] = "PASSWORD_GENERATION_CONFIRMATION";
    // PROFILE_CHOOSER = 5,
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSWORDS_ACCESSORY_SHEET"] = 6] = "PASSWORDS_ACCESSORY_SHEET";
    ManagePasswordsReferrer[ManagePasswordsReferrer["TOUCH_TO_FILL"] = 7] = "TOUCH_TO_FILL";
    ManagePasswordsReferrer[ManagePasswordsReferrer["SAFE_STATE_BUBBLE"] = 8] = "SAFE_STATE_BUBBLE";
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSWORD_BREACH_DIALOG"] = 9] = "PASSWORD_BREACH_DIALOG";
    ManagePasswordsReferrer[ManagePasswordsReferrer["SAFETY_CHECK"] = 10] = "SAFETY_CHECK";
    ManagePasswordsReferrer[ManagePasswordsReferrer["SAVE_UPDATE_BUBBLE"] = 11] = "SAVE_UPDATE_BUBBLE";
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSWORD_GENERATION_PROMPT"] = 12] = "PASSWORD_GENERATION_PROMPT";
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSWORDS_GOOGLE_WEBSITE"] = 13] = "PASSWORDS_GOOGLE_WEBSITE";
    // AUTOMATED_PASSWORD_CHANGE_SUCCESS_LINK = 14,
    ManagePasswordsReferrer[ManagePasswordsReferrer["BIOMETRIC_AUTHENTICATION_BEFORE_FILLING_DIALOG"] = 15] = "BIOMETRIC_AUTHENTICATION_BEFORE_FILLING_DIALOG";
    ManagePasswordsReferrer[ManagePasswordsReferrer["CHROME_MENU_ITEM"] = 16] = "CHROME_MENU_ITEM";
    ManagePasswordsReferrer[ManagePasswordsReferrer["SHARED_PASSWORDS_NOTIFICATION_BUBBLE"] = 17] = "SHARED_PASSWORDS_NOTIFICATION_BUBBLE";
    ManagePasswordsReferrer[ManagePasswordsReferrer["SEARCH_PASSWORDS_WIDGET"] = 18] = "SEARCH_PASSWORDS_WIDGET";
    ManagePasswordsReferrer[ManagePasswordsReferrer["ADD_USERNAME_BUBBLE"] = 19] = "ADD_USERNAME_BUBBLE";
    ManagePasswordsReferrer[ManagePasswordsReferrer["OMNIBOX_PEDAL_SUGGESTION"] = 20] = "OMNIBOX_PEDAL_SUGGESTION";
    // DEFAULT_STORE_CHANGED_BUBBLE = 21,
    ManagePasswordsReferrer[ManagePasswordsReferrer["MANAGE_PASSWORD_DETAILS_BUBBLE"] = 22] = "MANAGE_PASSWORD_DETAILS_BUBBLE";
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSKEY_SAVED_CONFIRMATION_BUBBLE"] = 23] = "PASSKEY_SAVED_CONFIRMATION_BUBBLE";
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSKEY_DELETED_CONFIRMATION_BUBBLE"] = 24] = "PASSKEY_DELETED_CONFIRMATION_BUBBLE";
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSKEY_UPDATED_CONFIRMATION_BUBBLE"] = 25] = "PASSKEY_UPDATED_CONFIRMATION_BUBBLE";
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSKEY_NOT_ACCEPTED_BUBBLE"] = 26] = "PASSKEY_NOT_ACCEPTED_BUBBLE";
    // ACCESS_LOSS_WARNING = 27,
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSKEY_UPGRADE_BUBBLE"] = 28] = "PASSKEY_UPGRADE_BUBBLE";
    ManagePasswordsReferrer[ManagePasswordsReferrer["PASSWORD_CHANGE_INFO_BUBBLE"] = 29] = "PASSWORD_CHANGE_INFO_BUBBLE";
    ManagePasswordsReferrer[ManagePasswordsReferrer["CHROME_SETTINGS_AUTOFILL_AND_PASSWORDS"] = 30] = "CHROME_SETTINGS_AUTOFILL_AND_PASSWORDS";
    // Must be last.
    ManagePasswordsReferrer[ManagePasswordsReferrer["COUNT"] = 31] = "COUNT";
})(ManagePasswordsReferrer || (ManagePasswordsReferrer = {}));
// LINT.ThenChange(
//   //components/password_manager/core/browser/manage_passwords_referrer.h:ManagePasswordsReferrer,
//   //tools/metrics/histograms/metadata/password/enums.xml:ManagePasswordsReferrer
// )
// WARNING: Keep synced with
// chrome/browser/ui/webui/settings/password_manager_handler.cc.
export var PasswordManagerPage;
(function (PasswordManagerPage) {
    PasswordManagerPage[PasswordManagerPage["PASSWORDS"] = 0] = "PASSWORDS";
    PasswordManagerPage[PasswordManagerPage["CHECKUP"] = 1] = "CHECKUP";
})(PasswordManagerPage || (PasswordManagerPage = {}));
/**
 * Implementation that accesses the private API.
 */
export class PasswordManagerImpl {
    recordPasswordsPageAccessInSettings() {
        chrome.metricsPrivate.recordEnumerationValue('PasswordManager.ManagePasswordsReferrer', ManagePasswordsReferrer.CHROME_SETTINGS, ManagePasswordsReferrer.COUNT);
    }
    showPasswordManager(page) {
        chrome.send('showPasswordManager', [page]);
    }
    static getInstance() {
        return instance || (instance = new PasswordManagerImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
