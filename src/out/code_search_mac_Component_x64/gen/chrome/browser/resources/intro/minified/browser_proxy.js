// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class IntroBrowserProxyImpl{continueWithAccount(){chrome.send("continueWithAccount")}continueWithoutAccount(){chrome.send("continueWithoutAccount")}initializeMainView(){chrome.send("initializeMainView")}matchMedia(query){return window.matchMedia(query)}static getInstance(){return instance||(instance=new IntroBrowserProxyImpl)}static setInstance(obj){instance=obj}}let instance=null;