/* Copyright (c) 2021 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class BraveWalletBrowserProxyImpl {
    resetWallet() {
        chrome.send('resetWallet', []);
    }
    resetZCashSyncState() {
        chrome.send('resetZCashSyncState');
    }
    resetTransactionInfo() {
        chrome.send('resetTransactionInfo', []);
    }
    getNetworksList(coin) {
        return sendWithPromise('getNetworksList', coin);
    }
    getPrepopulatedNetworksList() {
        return sendWithPromise('getPrepopulatedNetworksList');
    }
    setDefaultNetwork(chainId, coin) {
        return sendWithPromise('setDefaultNetwork', chainId, coin);
    }
    removeChain(chainId, coin) {
        return sendWithPromise('removeChain', chainId, coin);
    }
    resetChain(chainId, coin) {
        return sendWithPromise('resetChain', chainId, coin);
    }
    addChain(payload) {
        return sendWithPromise('addChain', payload);
    }
    addHiddenNetwork(chainId, coin) {
        return sendWithPromise('addHiddenNetwork', chainId, coin);
    }
    removeHiddenNetwork(chainId, coin) {
        return sendWithPromise('removeHiddenNetwork', chainId, coin);
    }
    getWeb3ProviderList() {
        return sendWithPromise('getWeb3ProviderList');
    }
    getAutoLockMinutes() {
        return sendWithPromise('getAutoLockMinutes');
    }
    getSolanaProviderOptions() {
        return sendWithPromise('getSolanaProviderOptions');
    }
    getCardanoProviderOptions() {
        return sendWithPromise('getCardanoProviderOptions');
    }
    isBitcoinEnabled() {
        return sendWithPromise('isBitcoinEnabled');
    }
    isZCashEnabled() {
        return sendWithPromise('isZCashEnabled');
    }
    isZCashShieldedTxEnabled() {
        return sendWithPromise('isZCashShieldedTxEnabled');
    }
    isCardanoEnabled() {
        return sendWithPromise('isCardanoEnabled');
    }
    isCardanoDAppSupportEnabled() {
        return sendWithPromise('isCardanoDAppSupportEnabled');
    }
    isPolkadotEnabled() {
        return sendWithPromise('isPolkadotEnabled');
    }
    getTransactionSimulationOptInStatusOptions() {
        return sendWithPromise('getTransactionSimulationOptInStatusOptions');
    }
    isTransactionSimulationsFeatureEnabled() {
        return sendWithPromise('isTransactionSimulationsFeatureEnabled');
    }
    getWalletInPrivateWindowsEnabled() {
        return sendWithPromise('getWalletInPrivateWindowsEnabled');
    }
    setWalletInPrivateWindowsEnabled(value) {
        return sendWithPromise('setWalletInPrivateWindowsEnabled', value);
    }
    static getInstance() {
        return instance || (instance = new BraveWalletBrowserProxyImpl());
    }
}
let instance = null;
