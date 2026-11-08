// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// cc_file_path: chrome/browser/glic/suggestions/glic_cue_target_browsertest.cc
import { FreOverride } from '/glic/glic_api/glic_api.js';
import { ApiTestFixtureBase, assertEquals, assertTrue, runUntil, testMain, WebClient } from './browser_test_base.js';
class InvokeClient extends WebClient {
    receivedOptions = null;
    receivedPanelOpeningData = null;
    async notifyPanelWillOpen(panelOpeningData) {
        this.receivedPanelOpeningData = panelOpeningData;
        return super.notifyPanelWillOpen(panelOpeningData);
    }
    async invoke(options) {
        this.receivedOptions = options;
    }
}
class GlicCueTargetApiTest extends ApiTestFixtureBase {
    createWebClient() {
        return new InvokeClient();
    }
    async setUpTest() {
        await this.client.waitForFirstOpen();
    }
    async testOnClickAutoSubmitEnabled() {
        const client = this.client;
        await runUntil(() => client.receivedOptions !== null &&
            client.receivedPanelOpeningData !== null);
        assertTrue(client.receivedOptions.autoSubmit === true);
        assertEquals('test prompt auto submit', client.receivedOptions.prompts?.[0]);
        assertEquals(FreOverride.UNSPECIFIED, client.receivedPanelOpeningData.freOverride);
    }
    async testOnClickAutoSubmitDisabled() {
        const client = this.client;
        await runUntil(() => client.receivedOptions !== null &&
            client.receivedPanelOpeningData !== null);
        assertTrue(client.receivedOptions.autoSubmit === false);
        assertEquals('test prompt no auto submit', client.receivedOptions.prompts?.[0]);
        assertEquals(FreOverride.UNSPECIFIED, client.receivedPanelOpeningData.freOverride);
    }
    async testOnEditPrompt() {
        const client = this.client;
        await runUntil(() => client.receivedOptions !== null &&
            client.receivedPanelOpeningData !== null);
        assertTrue(client.receivedOptions.autoSubmit === false);
        assertEquals('test prompt edit prompt', client.receivedOptions.prompts?.[0]);
        assertEquals(FreOverride.UNSPECIFIED, client.receivedPanelOpeningData.freOverride);
    }
    async testOnClickMessageFirstFreEnabled() {
        const client = this.client;
        await runUntil(() => client.receivedOptions !== null &&
            client.receivedPanelOpeningData !== null);
        assertTrue(client.receivedOptions.autoSubmit === true);
        assertEquals('test prompt message first fre', client.receivedOptions.prompts?.[0]);
        assertEquals(FreOverride.TRUST_FIRST_INLINE, client.receivedPanelOpeningData.freOverride);
    }
    async testOnClickMessageFirstFreEnabledHasConsented() {
        const client = this.client;
        await runUntil(() => client.receivedOptions !== null &&
            client.receivedPanelOpeningData !== null);
        assertTrue(client.receivedOptions.autoSubmit === true);
        assertEquals('test prompt message first fre consented', client.receivedOptions.prompts?.[0]);
        assertEquals(FreOverride.UNSPECIFIED, client.receivedPanelOpeningData.freOverride);
    }
    async testOnClickMessageFirstFreEnabledAutoSubmitDisabled() {
        const client = this.client;
        await runUntil(() => client.receivedOptions !== null &&
            client.receivedPanelOpeningData !== null);
        assertTrue(client.receivedOptions.autoSubmit === false);
        assertEquals('test prompt message first fre no auto submit', client.receivedOptions.prompts?.[0]);
        assertEquals(FreOverride.UNSPECIFIED, client.receivedPanelOpeningData.freOverride);
    }
}
testMain([
    GlicCueTargetApiTest,
]);
