// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class BraveSyncBrowserProxy {
    getSyncCode() {
        return sendWithPromise('SyncSetupGetSyncCode');
    }
    getPureSyncCode() {
        return sendWithPromise('SyncSetupGetPureSyncCode');
    }
    getQRCode(syncCode) {
        return sendWithPromise('SyncGetQRCode', syncCode);
    }
    copySyncCodeToClipboard(syncCode) {
        return sendWithPromise('SyncCopySyncCodeToClipboard', syncCode);
    }
    getDeviceList() {
        return sendWithPromise('SyncGetDeviceList');
    }
    setSyncCode(syncCode) {
        return sendWithPromise('SyncSetupSetSyncCode', syncCode);
    }
    resetSyncChain() {
        return sendWithPromise('SyncSetupReset');
    }
    deleteDevice(deviceId) {
        return sendWithPromise('SyncDeleteDevice', deviceId);
    }
    getSyncStatus() {
        return sendWithPromise('SyncSetupGetSyncStatus');
    }
    permanentlyDeleteSyncAccount() {
        return sendWithPromise('SyncPermanentlyDeleteAccount');
    }
    getWordsCount(syncCode) {
        return sendWithPromise('SyncGetWordsCount', syncCode);
    }
    static getInstance() {
        return instance || (instance = new BraveSyncBrowserProxy());
    }
}
let instance = null;
