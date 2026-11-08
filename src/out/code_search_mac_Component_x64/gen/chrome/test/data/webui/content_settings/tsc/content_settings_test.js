// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://content-settings/content_setting_pattern_source.js';
import { SessionModel } from 'chrome://content-settings/content_settings_enums.mojom-webui.js';
import { browserProxyFactory } from 'chrome://content-settings/content_settings_internals.mojom-webui.js';
import { assertEquals, assertTrue } from 'chrome://webui-test/chai_assert.js';
suite('ContentSettingsElementTest', function () {
    let pageHandler;
    let element;
    suiteSetup(async function () {
        await customElements.whenDefined('content-setting-pattern-source');
    });
    setup(function () {
        pageHandler = browserProxyFactory.getInstance().handler;
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        element = document.createElement('content-setting-pattern-source');
        document.body.appendChild(element);
    });
    const buildContentSettingPattern = async (primaryPattern, secondaryPattern) => {
        const cs = {};
        const value = {};
        value.intValue = 0;
        cs.settingValue = value;
        cs.incognito = true;
        cs.primaryPattern =
            (await pageHandler.stringToContentSettingsPattern(primaryPattern))
                .pattern;
        cs.secondaryPattern =
            (await pageHandler.stringToContentSettingsPattern(secondaryPattern))
                .pattern;
        const metadata = {};
        metadata.sessionModel = SessionModel.DURABLE;
        metadata.lastModified = {
            internalValue: BigInt(0),
        };
        metadata.lastUsed = {
            internalValue: BigInt(0),
        };
        metadata.lastVisited = {
            internalValue: BigInt(0),
        };
        metadata.expiration = {
            internalValue: BigInt(0),
        };
        metadata.lifetime = {
            microseconds: BigInt(0),
        };
        cs.metadata = metadata;
        return cs;
    };
    const getField = (selector) => {
        const field = element.shadowRoot.querySelector(selector);
        assertTrue(!!field);
        return field;
    };
    const assertValue = (valueContainer, s) => {
        const valueElement = valueContainer.children[0];
        assertTrue(!!valueElement);
        const span = valueElement.shadowRoot.querySelector('#value');
        assertTrue(!!span);
        assertEquals(span.textContent, s);
    };
    const assertTimestamp = (container, s) => {
        const mojoTs = container.querySelector('mojo-timestamp');
        assertTrue(!!mojoTs);
        assertEquals(mojoTs.getAttribute('ts'), s);
    };
    test('formatFields', async () => {
        const cs = await buildContentSettingPattern('http://google.com', 'https://[*.]example.com:102');
        await element.configure(pageHandler, cs);
        assertEquals(getField('.id-primary-pattern').textContent, 'http://google.com');
        assertEquals(getField('.id-secondary-pattern').textContent, 'https://[*.]example.com:102');
        assertValue(getField('.id-incognito'), 'true');
        assertValue(getField('.id-session-model'), '0');
        assertTimestamp(getField('.id-last-modified'), '0');
        assertTimestamp(getField('.id-last-used'), '0');
        assertTimestamp(getField('.id-last-visited'), '0');
        assertTimestamp(getField('.id-expiration'), '0');
    });
});
