// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { browserProxyFactory } from '../foreign_tabs.mojom-webui.js';
import { getHostnameOrUrl } from './tab_delegate_utils.js';
export class ForeignTabsDelegate {
    browserProxy_ = browserProxyFactory.getInstance();
    init(_sectionClient) { }
    getId() {
        return 'cross-device-tabs';
    }
    getHeader() {
        return loadTimeData.getString('tabsOnOtherDevices');
    }
    async getItems() {
        const { tabs } = await this.browserProxy_.handler.getForeignTabs();
        return tabs.map(tab => ({
            title: [tab.title],
            description: [
                { text: tab.lastActiveElapsedText, matchable: false },
                { text: tab.deviceName },
            ],
            extraSearchTerms: tab.url ? [getHostnameOrUrl(tab.url)] : undefined,
            prefixIcon: tab.url ? { url: tab.url } : undefined,
            data: tab,
        }));
    }
    onItemClick(item) {
        const data = item.data;
        assert(data);
        this.browserProxy_.handler.openTab(data.sessionTag, data.sessionTabId);
    }
}
