// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { BrowserProxy } from './../browser_proxy.js';
const policyPageMojoMigrationEnabled = loadTimeData.getBoolean('policyPageMojoMigrationEnabled');
/**
 * Must be kept in sync with the C++ enums of the same names (see
 * components/policy/core/common/policy_types.h).
 */
export var PolicyScope;
(function (PolicyScope) {
    PolicyScope[PolicyScope["SCOPE_USER_VAL"] = 0] = "SCOPE_USER_VAL";
    PolicyScope[PolicyScope["SCOPE_DEVICE_VAL"] = 1] = "SCOPE_DEVICE_VAL";
})(PolicyScope || (PolicyScope = {}));
export var PolicyLevel;
(function (PolicyLevel) {
    PolicyLevel[PolicyLevel["LEVEL_RECOMMENDED_VAL"] = 0] = "LEVEL_RECOMMENDED_VAL";
    PolicyLevel[PolicyLevel["LEVEL_MANDATORY_VAL"] = 1] = "LEVEL_MANDATORY_VAL";
})(PolicyLevel || (PolicyLevel = {}));
export var PolicySource;
(function (PolicySource) {
    PolicySource[PolicySource["SOURCE_ENTERPRISE_DEFAULT_VAL"] = 0] = "SOURCE_ENTERPRISE_DEFAULT_VAL";
    PolicySource[PolicySource["SOURCE_COMMAND_LINE_VAL"] = 1] = "SOURCE_COMMAND_LINE_VAL";
    PolicySource[PolicySource["SOURCE_CLOUD_VAL"] = 2] = "SOURCE_CLOUD_VAL";
    PolicySource[PolicySource["SOURCE_ACTIVE_DIRECTORY_VAL"] = 3] = "SOURCE_ACTIVE_DIRECTORY_VAL";
    PolicySource[PolicySource["SOURCE_PLATFORM_VAL"] = 5] = "SOURCE_PLATFORM_VAL";
    PolicySource[PolicySource["SOURCE_MERGED_VAL"] = 7] = "SOURCE_MERGED_VAL";
    PolicySource[PolicySource["SOURCE_CLOUD_FROM_ASH_VAL"] = 8] = "SOURCE_CLOUD_FROM_ASH_VAL";
    PolicySource[PolicySource["SOURCE_RESTRICTED_MANAGED_GUEST_SESSION_OVERRIDE_VAL"] = 9] = "SOURCE_RESTRICTED_MANAGED_GUEST_SESSION_OVERRIDE_VAL";
})(PolicySource || (PolicySource = {}));
export var Presets;
(function (Presets) {
    Presets[Presets["PRESET_CUSTOM"] = 0] = "PRESET_CUSTOM";
    Presets[Presets["PRESET_CBCM"] = 1] = "PRESET_CBCM";
    Presets[Presets["PRESET_LOCAL_MACHINE"] = 2] = "PRESET_LOCAL_MACHINE";
    Presets[Presets["PRESET_CLOUD_ACCOUNT"] = 3] = "PRESET_CLOUD_ACCOUNT";
})(Presets || (Presets = {}));
export const SourceNamesToValues = {
    sourceEnterpriseDefault: PolicySource.SOURCE_ENTERPRISE_DEFAULT_VAL,
    commandLine: PolicySource.SOURCE_COMMAND_LINE_VAL,
    cloud: PolicySource.SOURCE_CLOUD_VAL,
    sourceActiveDirectory: PolicySource.SOURCE_ACTIVE_DIRECTORY_VAL,
    platform: PolicySource.SOURCE_PLATFORM_VAL,
    merged: PolicySource.SOURCE_MERGED_VAL,
    cloud_from_ash: PolicySource.SOURCE_CLOUD_FROM_ASH_VAL,
    restrictedManagedGuestSessionOverride: PolicySource.SOURCE_RESTRICTED_MANAGED_GUEST_SESSION_OVERRIDE_VAL,
};
export const ScopeNamesToValues = {
    user: PolicyScope.SCOPE_USER_VAL,
    machine: PolicyScope.SCOPE_DEVICE_VAL,
};
export const LevelNamesToValues = {
    recommended: PolicyLevel.LEVEL_RECOMMENDED_VAL,
    mandatory: PolicyLevel.LEVEL_MANDATORY_VAL,
};
export var PolicyTestBrowserProxy;
(function (PolicyTestBrowserProxy) {
    function applyTestPolicies(policies, profileSeparationResponse) {
        if (policyPageMojoMigrationEnabled) {
            return BrowserProxy.getInstance().handler.setLocalTestPolicies(policies, profileSeparationResponse);
        }
        else {
            return sendWithPromise('setLocalTestPolicies', policies, profileSeparationResponse);
        }
    }
    PolicyTestBrowserProxy.applyTestPolicies = applyTestPolicies;
    function listenPoliciesUpdates() {
        return sendWithPromise('listenPoliciesUpdates');
    }
    PolicyTestBrowserProxy.listenPoliciesUpdates = listenPoliciesUpdates;
    function revertTestPolicies() {
        if (policyPageMojoMigrationEnabled) {
            BrowserProxy.getInstance().handler.revertLocalTestPolicies();
        }
        else {
            chrome.send('revertLocalTestPolicies');
        }
    }
    PolicyTestBrowserProxy.revertTestPolicies = revertTestPolicies;
    function restartWithTestPolicies(jsonString) {
        if (policyPageMojoMigrationEnabled) {
            BrowserProxy.getInstance().handler.restartBrowser(jsonString);
        }
        else {
            chrome.send('restartBrowser', [jsonString]);
        }
    }
    PolicyTestBrowserProxy.restartWithTestPolicies = restartWithTestPolicies;
    function setUserAffiliation(affiliation) {
        if (policyPageMojoMigrationEnabled) {
            return BrowserProxy.getInstance().handler.setUserAffiliated(affiliation);
        }
        else {
            return sendWithPromise('setUserAffiliation', affiliation);
        }
    }
    PolicyTestBrowserProxy.setUserAffiliation = setUserAffiliation;
    async function getAppliedTestPolicies() {
        let policies;
        if (policyPageMojoMigrationEnabled) {
            policies =
                (await BrowserProxy.getInstance().handler.getAppliedTestPolicies())
                    .policies;
        }
        else {
            policies = await sendWithPromise('getAppliedTestPolicies');
        }
        if (!policies.length) {
            return [];
        }
        return JSON.parse(policies);
    }
    PolicyTestBrowserProxy.getAppliedTestPolicies = getAppliedTestPolicies;
})(PolicyTestBrowserProxy || (PolicyTestBrowserProxy = {}));
