// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class EntityDataManagerProxyImpl {
    getAccountInfo() {
        return chrome.autofillPrivate.getAccountInfo();
    }
    addOrUpdateEntityInstance(entityInstance) {
        return chrome.autofillPrivate.addOrUpdateEntityInstance(entityInstance);
    }
    removeEntityInstance(guid) {
        return chrome.autofillPrivate.removeEntityInstance(guid);
    }
    loadEntityInstances() {
        return chrome.autofillPrivate.loadEntityInstances();
    }
    getEntityInstanceByGuid(guid) {
        return chrome.autofillPrivate.getEntityInstanceByGuid(guid);
    }
    getWritableEntityTypes() {
        return chrome.autofillPrivate.getWritableEntityTypes();
    }
    getAllAttributeTypesForEntityTypeName(entityTypeName) {
        return chrome.autofillPrivate.getAllAttributeTypesForEntityTypeName(entityTypeName);
    }
    getRequiredAttributeTypesForEntityTypeName(entityTypeName) {
        return chrome.autofillPrivate.getRequiredAttributeTypesForEntityTypeName(entityTypeName);
    }
    addEntityInstancesChangedListener(listener) {
        chrome.autofillPrivate.onEntityInstancesChanged.addListener(listener);
    }
    removeEntityInstancesChangedListener(listener) {
        chrome.autofillPrivate.onEntityInstancesChanged.removeListener(listener);
    }
    authenticateUserBeforeViewingEntityData() {
        return chrome.autofillPrivate.authenticateUserBeforeViewingEntityData();
    }
    toggleAutofillAiReauthRequirement() {
        return chrome.autofillPrivate.toggleAutofillAiReauthRequirement();
    }
    getOptInStatus() {
        return chrome.autofillPrivate.getAutofillAiOptInStatus();
    }
    setOptInStatus(optedIn) {
        return chrome.autofillPrivate.setAutofillAiOptInStatus(optedIn);
    }
    getWalletablePassDetectionOptInStatus() {
        return chrome.autofillPrivate.getWalletablePassDetectionOptInStatus();
    }
    setWalletablePassDetectionOptInStatus(optedIn) {
        return chrome.autofillPrivate.setWalletablePassDetectionOptInStatus(optedIn);
    }
    preloadDetailsForUpsertPass(entityTypeName) {
        chrome.autofillPrivate.preloadDetailsForUpsertPass(entityTypeName);
    }
    getDetailsForUpsertPass(entityTypeName) {
        return chrome.autofillPrivate.getDetailsForUpsertPass(entityTypeName);
    }
    static getInstance() {
        return instance || (instance = new EntityDataManagerProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
