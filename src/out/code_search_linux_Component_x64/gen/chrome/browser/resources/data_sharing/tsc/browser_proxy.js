// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AbslStatusCode } from '//resources/mojo/mojo/public/mojom/base/absl_status.mojom-webui.js';
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './data_sharing.mojom-webui.js';
export class BrowserProxyImpl {
    callbackRouter;
    handler;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.handler = new PageHandlerRemote();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    showUi() {
        this.handler.showUI();
    }
    closeUi(status) {
        this.handler.closeUI(status);
    }
    aboutToUnShareTabGroup(tabGroupId) {
        this.handler.aboutToUnShareTabGroup(tabGroupId);
    }
    onTabGroupUnShareComplete(tabGroupId) {
        this.handler.onTabGroupUnShareComplete(tabGroupId);
    }
    makeTabGroupShared(tabGroupId, groupId, tokenSecret) {
        return this.handler.makeTabGroupShared(tabGroupId, groupId, tokenSecret)
            .then(res => res.url ? res.url : undefined);
    }
    getShareLink(groupId, tokenSecret) {
        return this.handler.getShareLink(groupId, tokenSecret).then(res => res.url);
    }
    getTabGroupPreview(groupId, tokenSecret) {
        return new Promise((resolve) => {
            const previews = [];
            this.handler.getTabGroupPreview(groupId, tokenSecret).then((res) => {
                if (res.groupPreview.statusCode !== AbslStatusCode.kOk) {
                    this.handler.closeUI(2 /* Code.UNKNOWN */);
                }
                res.groupPreview.sharedTabs.map((sharedTab) => {
                    previews.push({
                        url: sharedTab.displayUrl,
                        faviconUrl: this.getFaviconServiceUrl(sharedTab.faviconUrl).toString(),
                    });
                });
                resolve(previews);
            });
        });
    }
    onGroupAction(action, progress) {
        return this.handler.onGroupAction(action, progress);
    }
    // TODO(crbug.com/392965221): Use function from icon.ts instead.
    getFaviconServiceUrl(pageUrl) {
        const url = new URL('chrome-untrusted://favicon2');
        url.searchParams.set('size', '16');
        url.searchParams.set('scaleFactor', '1x');
        url.searchParams.set('allowGoogleServerFallback', '1');
        url.searchParams.set('pageUrl', pageUrl);
        return url;
    }
    static getInstance() {
        return instance || (instance = new BrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
