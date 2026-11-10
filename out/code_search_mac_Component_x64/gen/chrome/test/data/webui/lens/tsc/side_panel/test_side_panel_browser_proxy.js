// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { LensSidePanelPageCallbackRouter } from 'chrome-untrusted://lens/lens_side_panel.mojom-webui.js';
import { TestBrowserProxy } from 'chrome-untrusted://webui-test/test_browser_proxy.js';
/**
 * Test version of the LensSidePanelPageHandler used to verify calls to the
 * browser from WebUI.
 */
export class TestLensSidePanelPageHandler extends TestBrowserProxy {
    constructor() {
        super([
            'popAndLoadQueryFromHistory',
            'getIsContextualSearchbox',
            'onScrollToMessage',
            'requestSendFeedback',
            'onAimMessage',
            'onImageQueryWithEmptyText',
        ]);
    }
    popAndLoadQueryFromHistory() {
        this.methodCalled('popAndLoadQueryFromHistory');
    }
    getIsContextualSearchbox() {
        this.methodCalled('getIsContextualSearchbox');
        return Promise.resolve({ isContextualSearchbox: false });
    }
    onScrollToMessage(textFragments, pdfPageNumber) {
        this.methodCalled('onScrollToMessage', textFragments, pdfPageNumber);
    }
    onAimMessage(message) {
        this.methodCalled('onAimMessage', message);
    }
    requestSendFeedback() {
        this.methodCalled('requestSendFeedback');
    }
    onImageQueryWithEmptyText() {
        this.methodCalled('onImageQueryWithEmptyText');
    }
}
/**
 * Test version of the BrowserProxy used in connecting Lens Side Panel to the
 * browser on start up.
 */
export class TestLensSidePanelBrowserProxy extends TestBrowserProxy {
    callbackRouter = new LensSidePanelPageCallbackRouter();
    handler = new TestLensSidePanelPageHandler();
    page = this.callbackRouter.$.bindNewPipeAndPassRemote();
}
