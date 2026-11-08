import { ModelExecutionEnterprisePolicyValue } from '../ai_page/constants.js';
export declare enum AutofillPolicyDataCategory {
    CONTACT_INFO = "contact_info",
    PAYMENTS = "payments",
    IDENTITY_DOCS = "identity_docs",
    TRAVEL = "travel",
    SHOPPING = "shopping"
}
export interface TypesBlockedEntry {
    url_pattern: string;
    blocked_types: string[];
}
/**
 * Determines if a given Autofill data category (e.g. 'contact_info',
 * 'payments', 'identity_docs') is globally blocked across all sites by an
 * enterprise policy wildcard entry (`url_pattern: '*'`).
 */
export declare function isTypeGloballyBlocked(typesBlockedPref: chrome.settingsPrivate.PrefObject<TypesBlockedEntry[]> | undefined, category: AutofillPolicyDataCategory): boolean;
/**
 * Computes an effective preference object for a boolean setting. If the given
 * category is globally blocked by enterprise policy (`autofill.types_blocked`),
 * returns a synthetic pref marked as ENFORCED and disabled (`value: false`).
 * Otherwise, returns the unmodified user preference.
 */
export declare function computeEffectiveAutofillPref(userPref: chrome.settingsPrivate.PrefObject<boolean>, typesBlockedPref: chrome.settingsPrivate.PrefObject<TypesBlockedEntry[]> | undefined, category: AutofillPolicyDataCategory): chrome.settingsPrivate.PrefObject<boolean>;
/**
 * Evaluates whether address autofill, general Autofill AI, or the wildcard
 * `autofill.types_blocked` policy applies to this Autofill AI entity category,
 * and sets the synthetic preference state (enforcement, value, controlledBy)
 * accordingly.
 */
export declare function checkAutofillPoliciesAndModifyPrefIfNecessary(pref: chrome.settingsPrivate.PrefObject<boolean>, addressPolicy: chrome.settingsPrivate.PrefObject<boolean> | undefined, autofillAiPolicy: chrome.settingsPrivate.PrefObject<ModelExecutionEnterprisePolicyValue> | undefined, typesBlockedPref: chrome.settingsPrivate.PrefObject<TypesBlockedEntry[]> | undefined, category: AutofillPolicyDataCategory): void;
