// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class DefaultBrowserBrowserProxyImpl{setAsDefaultBrowser(){chrome.send("setAsDefaultBrowser")}skipDefaultBrowser(){chrome.send("skipDefaultBrowser")}static getInstance(){return instance||(instance=new DefaultBrowserBrowserProxyImpl)}static setInstance(obj){instance=obj}}let instance=null;