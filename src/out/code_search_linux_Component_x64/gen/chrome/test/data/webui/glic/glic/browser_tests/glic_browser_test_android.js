// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { createGlicHostRegistryOnLoad } from '../api_boot.js';
export class GlicTestWebClient {
    browserHost = null;
    lastPrompt = '';
    focusedTabUrl = '';
    promptResolve;
    promptPromise = new Promise((resolve) => {
        this.promptResolve = resolve;
    });
    async initialize(browser) {
        this.browserHost = browser;
    }
    async invoke(options) {
        this.lastPrompt = options.prompts?.[0] || '';
        if (this.promptResolve) {
            this.promptResolve(this.lastPrompt);
        }
    }
    async waitForPrompt() {
        if (this.lastPrompt) {
            return this.lastPrompt;
        }
        return this.promptPromise;
    }
    async getContextFromFocusedTabUrl() {
        if (!this.browserHost) {
            return 'error: no browserHost';
        }
        if (!this.browserHost.getContextFromFocusedTab) {
            return 'error: getContextFromFocusedTab is not supported';
        }
        try {
            const result = await this.browserHost.getContextFromFocusedTab({ viewportScreenshot: false });
            const tabData = result?.tabData;
            this.focusedTabUrl = tabData?.url || 'null result';
            return this.focusedTabUrl;
        }
        catch (e) {
            this.focusedTabUrl = `error: ${e}`;
            return this.focusedTabUrl;
        }
    }
}
const client = new GlicTestWebClient();
window.glicTestClient = client;
createGlicHostRegistryOnLoad().then((registry) => {
    registry.registerWebClient(client);
});
