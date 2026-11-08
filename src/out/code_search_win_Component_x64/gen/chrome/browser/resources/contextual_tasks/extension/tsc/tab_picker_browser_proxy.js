// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ComposeboxProxyImpl } from 'chrome://resources/cr_components/composebox/composebox_proxy.js';
import { MojoPluralStringProxy } from 'chrome://resources/cr_components/search/mojo_plural_string_proxy.js';
import { TabAttachmentSource } from 'chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
let instance = null;
export class TabPickerBrowserProxyImpl {
    getRecentTabs() {
        return ComposeboxProxyImpl.getInstance().searchboxHandler.getRecentTabs();
    }
    getInputState() {
        return ComposeboxProxyImpl.getInstance().searchboxHandler.getInputState();
    }
    getSearchboxCallbackRouter() {
        return ComposeboxProxyImpl.getInstance().searchboxCallbackRouter;
    }
    getPluralString(messageName, count) {
        return MojoPluralStringProxy.getInstance().getPluralString(messageName, count);
    }
    addTabContext(tabId) {
        ComposeboxProxyImpl.getInstance()
            .searchboxHandler
            .addTabContext(tabId, /*delayUpload=*/ false, TabAttachmentSource.kContextMenu)
            .catch(() => { });
    }
    deleteTabContext(tabId) {
        ComposeboxProxyImpl.getInstance().searchboxHandler.deleteTabContext(tabId);
    }
    static getInstance() {
        return instance || (instance = new TabPickerBrowserProxyImpl());
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
}
