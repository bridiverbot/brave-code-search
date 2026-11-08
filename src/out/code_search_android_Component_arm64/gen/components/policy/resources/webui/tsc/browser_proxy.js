// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { addWebUiListener, sendWithPromise } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolicyLevel, PolicyPageClientCallbackRouter, PolicyPageHandlerFactory, PolicyPageHandlerRemote, PolicyScope } from './policy.mojom-webui.js';
const policyPageMojoMigrationEnabled = loadTimeData.getBoolean('policyPageMojoMigrationEnabled');
// Converts a `mojo_base.mojom.Value` union (e.g. `{boolValue: true}`,
// `{listValue: {storage: [...]}}`) into the equivalent plain JS value.
function mojoValueToJs(value) {
    if (value.nullValue !== undefined) {
        return null;
    }
    if (value.boolValue !== undefined) {
        return value.boolValue;
    }
    if (value.intValue !== undefined) {
        return value.intValue;
    }
    if (value.doubleValue !== undefined) {
        return value.doubleValue;
    }
    if (value.stringValue !== undefined) {
        return value.stringValue;
    }
    if (value.binaryValue !== undefined) {
        return value.binaryValue;
    }
    if (value.listValue !== undefined) {
        return value.listValue.storage.map(mojoValueToJs);
    }
    if (value.dictionaryValue !== undefined) {
        return Object.fromEntries(Object.entries(value.dictionaryValue.storage)
            .map(([key, item]) => [key, mojoValueToJs(item)]));
    }
    return undefined;
}
// Replaces the `mojo_base.mojom.Value` policy values received over mojo with
// plain JS values, in place, so that the UI can treat them the same way as
// values received through the legacy 'policies-updated' WebUI event.
function convertMojoPolicyValues(groups) {
    for (const group of Object.values(groups.policyGroups)) {
        for (const policy of Object.values(group.policies)) {
            for (const item of [policy, ...policy.conflicts, ...policy.superseded]) {
                // `value` is typed as a mojo `Value`, but from here on the UI treats it
                // as an arbitrary JS value (see `stringifyPolicyValue`).
                const converted = item;
                converted.value = item.value ? mojoValueToJs(item.value) : undefined;
            }
        }
    }
    return groups;
}
// TODO(crbug.com/40897784): Remove once policies are received over mojo.
// The legacy 'policies-updated' WebUI event sends `level` and `scope` as the
// strings "recommended"/"mandatory" and "user"/"machine". Converts them in
// place to the mojo enums expected by the UI.
function convertLegacyLevelAndScope(groups) {
    for (const group of Object.values(groups.policyGroups)) {
        for (const policy of Object.values(group.policies || {})) {
            for (const item of [policy, ...(policy.conflicts || []),
                ...(policy.superseded || [])]) {
                const level = item.level;
                const scope = item.scope;
                item.level = level === 'recommended' ? PolicyLevel.kRecommended :
                    PolicyLevel.kMandatory;
                item.scope =
                    scope === 'user' ? PolicyScope.kUser : PolicyScope.kMachine;
            }
        }
    }
    return groups;
}
export class BrowserProxy {
    handler;
    callbackRouter;
    constructor() {
        this.handler = new PolicyPageHandlerRemote();
        this.callbackRouter = new PolicyPageClientCallbackRouter();
        PolicyPageHandlerFactory.getRemote().createHandler(this.handler.$.bindNewPipeAndPassReceiver(), this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    static getInstance() {
        return proxyInstance || (proxyInstance = new BrowserProxy());
    }
    static getDebugString() {
        return this.getInstance().handler.getDebugString().then(result => result.message);
    }
    // 
    static getPolicies(reason) {
        if (policyPageMojoMigrationEnabled) {
            return this.getInstance().handler.getPoliciesJson(reason).then(response => response.policiesJson);
        }
        else {
            return sendWithPromise('getPoliciesJson', reason);
        }
    }
    static listenForStatusUpdated(callback) {
        if (policyPageMojoMigrationEnabled) {
            this.getInstance().callbackRouter.statusUpdated.addListener(callback);
        }
        else {
            addWebUiListener('status-updated', callback);
        }
    }
    // Both transports are normalized so that `callback` always receives policy
    // values as plain JS values and `level`/`scope` as mojo enums.
    static listenForPoliciesUpdated(callback) {
        if (policyPageMojoMigrationEnabled) {
            this.getInstance().callbackRouter.policiesUpdated.addListener((names, groups) => callback(names, convertMojoPolicyValues(groups)));
        }
        else {
            addWebUiListener('policies-updated', (names, groups) => callback(names, convertLegacyLevelAndScope(groups)));
        }
    }
}
let proxyInstance = null;
