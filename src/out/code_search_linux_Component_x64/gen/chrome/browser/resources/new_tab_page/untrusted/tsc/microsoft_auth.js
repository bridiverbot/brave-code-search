// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The code in this file interfaces with the Microsoft
 * Authentication Library for its parent New Tab page document.
 */
import { MicrosoftAuthUntrustedDocumentProxy } from './microsoft_auth_proxy.js';
import { PublicClientApplication } from './msal_browser.js';
// Microseconds between windows and unix epoch.
const kWindowsToUnixEpochOffset = 11644473600000000n;
function toTime(time) {
    return {
        internalValue: BigInt(time.valueOf()) * 1000n + kWindowsToUnixEpochOffset,
    };
}
const msalConfig = {
    auth: {
        clientId: '299cf3a2-777b-4013-8072-c504d2be03a2',
        authority: 'https://login.microsoftonline.com/organizations',
        redirectUri: 'https://chromeenterprise.google/ntp-microsoft-auth',
    },
    cache: { cacheLocation: 'localStorage' },
    system: { iframeHashTimeout: 1500 },
};
const requestConfig = {
    scopes: ['Calendars.Read', 'Sites.Read.All'],
};
const msalApp = new PublicClientApplication(msalConfig);
let callbackRouterToParent;
let callbackRouterToHandler;
let handler;
msalApp.initialize().then(() => {
    const proxy = MicrosoftAuthUntrustedDocumentProxy.getInstance();
    callbackRouterToParent = proxy.callbackRouterToParent;
    callbackRouterToHandler = proxy.callbackRouterToHandler;
    handler = proxy.handler;
    callbackRouterToHandler.acquireTokenSilent.addListener(acquireTokenSilent);
    callbackRouterToParent.acquireTokenPopup.addListener(acquireTokenPopup);
    callbackRouterToParent.signOut.addListener(signOut);
    handler.maybeAcquireTokenSilent();
});
function handleAcquireTokenResponse(result) {
    if (result) {
        // Set the active account even if there's no expiration time,
        // as this indicates that the user has successfully authenticated
        // and we should use this account for future silent authentication
        // attempts.
        if (!msalApp.getActiveAccount() && result.account) {
            msalApp.setActiveAccount(result.account);
        }
        if (result.expiresOn) {
            handler.setAccessToken({ token: result.accessToken, expiration: toTime(result.expiresOn) });
        }
    }
}
function handleAuthError(err) {
    handler.setAuthStateError(err.errorCode, err.errorMessage);
}
function acquireTokenPopup() {
    msalApp.acquireTokenPopup(requestConfig)
        .then(handleAcquireTokenResponse)
        .catch(handleAuthError);
}
function acquireTokenSilent() {
    const accounts = msalApp.getAllAccounts();
    if (accounts.length === 0) {
        // If there is no account in the cache, attempt to silently request a token
        // from the authentication server.
        msalApp.ssoSilent(requestConfig)
            .then(handleAcquireTokenResponse)
            .catch(handleAuthError);
    }
    else {
        // Otherwise, attempt to get token silently with cached account.
        if (!msalApp.getActiveAccount()) {
            msalApp.setActiveAccount(accounts[0]);
        }
        msalApp.acquireTokenSilent(requestConfig)
            .then(handleAcquireTokenResponse)
            .catch(handleAuthError);
    }
}
function signOut() {
    msalApp
        .logoutPopup({
        account: msalApp.getActiveAccount(),
        postLogoutRedirectUri: 'https://chromeenterprise.google/ntp-microsoft-auth',
    })
        .then(() => handler.clearAuthData());
}
