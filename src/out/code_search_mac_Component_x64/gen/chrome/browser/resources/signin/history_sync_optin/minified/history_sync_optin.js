/* Copyright 2025 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */
import"./history_sync_optin_app.js";import{HistorySyncOptInBrowserProxyImpl}from"./browser_proxy.js";function initialize(){const historySyncOptInBrowserProxy=HistorySyncOptInBrowserProxyImpl.getInstance();historySyncOptInBrowserProxy.handler.updateDialogHeight(document.body.offsetHeight);document.body.style.width="auto"}document.addEventListener("DOMContentLoaded",initialize);