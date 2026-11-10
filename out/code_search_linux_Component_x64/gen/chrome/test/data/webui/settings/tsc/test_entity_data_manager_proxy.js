// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestEntityDataManagerProxy extends TestBrowserProxy {
    accountInfo_;
    entityInstancesWithLabels_ = [];
    attributeTypes_ = [];
    requiredAttributeTypes_ = [];
    entityInstance_ = null;
    entityTypes_ = [];
    entityInstancesChangedListener_ = null;
    optInStatus_ = false;
    setOptInStatusResponse_ = true;
    walletOptInStatus_ = false;
    setWalletablePassDetectionOptInStatusResponse_ = true;
    authenticateUserBeforeViewingEntityDataResponse_ = true;
    saveResolver_ = null;
    autoResolveSave_ = true;
    upsertPassDetails_ = null;
    constructor() {
        super([
            'addEntityInstancesChangedListener',
            'addOrUpdateEntityInstance',
            'authenticateUserBeforeViewingEntityData',
            'getAccountInfo',
            'getAllAttributeTypesForEntityTypeName',
            'getRequiredAttributeTypesForEntityTypeName',
            'getEntityInstanceByGuid',
            'getOptInStatus',
            'getWalletablePassDetectionOptInStatus',
            'getWritableEntityTypes',
            'getDetailsForUpsertPass',
            'preloadDetailsForUpsertPass',
            'loadEntityInstances',
            'removeEntityInstance',
            'removeEntityInstancesChangedListener',
            'setOptInStatus',
            'setWalletablePassDetectionOptInStatus',
            'toggleAutofillAiReauthRequirement',
        ]);
    }
    setGetAccountInfoResponse(accountInfo) {
        this.accountInfo_ = accountInfo;
    }
    setLoadEntityInstancesResponse(entityInstancesWithLabels) {
        this.entityInstancesWithLabels_ = entityInstancesWithLabels;
    }
    setAuthenticateUserBeforeViewingEntityDataResponse(success) {
        this.authenticateUserBeforeViewingEntityDataResponse_ = success;
    }
    setGetEntityInstanceByGuidResponse(entityInstance) {
        this.entityInstance_ = entityInstance;
    }
    setGetWritableEntityTypesResponse(entityTypes) {
        this.entityTypes_ = entityTypes;
    }
    setGetAllAttributeTypesForEntityTypeNameResponse(attributeTypes) {
        this.attributeTypes_ = attributeTypes;
    }
    setGetRequiredAttributeTypesForEntityTypeNameResponse(types) {
        this.requiredAttributeTypes_ = types;
    }
    setGetOptInStatusResponse(optInStatus) {
        this.optInStatus_ = optInStatus;
    }
    setSetOptInStatusResponse(setOptInStatus) {
        this.setOptInStatusResponse_ = setOptInStatus;
    }
    setSetWalletablePassDetectionOptInStatusResponse(success) {
        this.setWalletablePassDetectionOptInStatusResponse_ = success;
    }
    setGetDetailsForUpsertPassResponse(details) {
        this.upsertPassDetails_ = details;
    }
    callEntityInstancesChangedListener(entityInstancesWithLabels) {
        assert(this.entityInstancesChangedListener_);
        this.entityInstancesChangedListener_(entityInstancesWithLabels);
    }
    /**
     * Helper resolve the pending save operation.
     */
    resolveSave() {
        if (this.saveResolver_) {
            this.saveResolver_.resolve();
            this.saveResolver_ = null;
        }
    }
    /**
     * Configures whether the save operation should resolve immediately.
     */
    setAutoResolveSave(autoResolve) {
        this.autoResolveSave_ = autoResolve;
    }
    getAccountInfo() {
        this.methodCalled('getAccountInfo');
        return Promise.resolve(structuredClone(this.accountInfo_));
    }
    addOrUpdateEntityInstance(entityInstance) {
        this.methodCalled('addOrUpdateEntityInstance', structuredClone(entityInstance));
        if (this.autoResolveSave_) {
            return Promise.resolve();
        }
        this.saveResolver_ = new PromiseResolver();
        return this.saveResolver_.promise;
    }
    removeEntityInstance(guid) {
        this.methodCalled('removeEntityInstance', structuredClone(guid));
    }
    loadEntityInstances() {
        this.methodCalled('loadEntityInstances');
        return Promise.resolve(structuredClone(this.entityInstancesWithLabels_));
    }
    getEntityInstanceByGuid(guid) {
        this.methodCalled('getEntityInstanceByGuid', guid);
        assert(this.entityInstance_);
        return Promise.resolve(structuredClone(this.entityInstance_));
    }
    getWritableEntityTypes() {
        this.methodCalled('getWritableEntityTypes');
        return Promise.resolve(structuredClone(this.entityTypes_));
    }
    getAllAttributeTypesForEntityTypeName(entityTypeName) {
        this.methodCalled('getAllAttributeTypesForEntityTypeName', entityTypeName);
        return Promise.resolve(structuredClone(this.attributeTypes_));
    }
    getRequiredAttributeTypesForEntityTypeName(entityTypeName) {
        this.methodCalled('getRequiredAttributeTypesForEntityTypeName', entityTypeName);
        return Promise.resolve(this.requiredAttributeTypes_);
    }
    addEntityInstancesChangedListener(listener) {
        this.methodCalled('addEntityInstancesChangedListener');
        this.entityInstancesChangedListener_ = listener;
    }
    removeEntityInstancesChangedListener(_listener) {
        this.methodCalled('removeEntityInstancesChangedListener');
        this.entityInstancesChangedListener_ = null;
    }
    getOptInStatus() {
        this.methodCalled('getOptInStatus');
        return Promise.resolve(this.optInStatus_);
    }
    setOptInStatus(optInStatus) {
        this.methodCalled('setOptInStatus', optInStatus);
        return Promise.resolve(this.setOptInStatusResponse_);
    }
    getWalletablePassDetectionOptInStatus() {
        this.methodCalled('getWalletablePassDetectionOptInStatus');
        return Promise.resolve(this.walletOptInStatus_);
    }
    setWalletablePassDetectionOptInStatus(optedIn) {
        this.methodCalled('setWalletablePassDetectionOptInStatus', optedIn);
        return Promise.resolve(this.setWalletablePassDetectionOptInStatusResponse_);
    }
    authenticateUserBeforeViewingEntityData() {
        this.methodCalled('authenticateUserBeforeViewingEntityData');
        return Promise.resolve(this.authenticateUserBeforeViewingEntityDataResponse_);
    }
    toggleAutofillAiReauthRequirement() {
        this.methodCalled('toggleAutofillAiReauthRequirement');
    }
    getDetailsForUpsertPass(entityTypeName) {
        this.methodCalled('getDetailsForUpsertPass', entityTypeName);
        return Promise.resolve(this.upsertPassDetails_);
    }
    preloadDetailsForUpsertPass(entityTypeName) {
        this.methodCalled('preloadDetailsForUpsertPass', entityTypeName);
    }
}
