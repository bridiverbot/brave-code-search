// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '/tab_group_shared/tab_group_dot.js';
import '../organizer_list_section_item.js';
import { CrUrlListItemSize } from '//resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { html } from '//resources/lit/v3_0/lit.rollup.js';
import { TabGroupDotSize } from '/tab_group_shared/tab_group_dot.js';
import { browserProxyFactory as organizerPanelBrowserProxyFactory } from '../organizer_panel.mojom-webui.js';
import { browserProxyFactory } from '../tab_groups.mojom-webui.js';
export class TabGroupsDelegate {
    browserProxy_ = browserProxyFactory.getInstance();
    organizerPanelBrowserProxy_ = organizerPanelBrowserProxyFactory.getInstance();
    client_;
    listenerIds_ = [];
    tabGroups_ = [];
    init(sectionClient) {
        this.client_ = sectionClient;
        const callbackRouter = this.browserProxy_.callbackRouter;
        this.listenerIds_.push(callbackRouter.tabGroupAdded.addListener((tabGroup) => {
            this.onTabGroupAdded_(tabGroup);
        }), callbackRouter.tabGroupRemoved.addListener((id) => {
            this.onTabGroupRemoved_(id);
        }), callbackRouter.tabGroupUpdated.addListener((tabGroup) => {
            this.onTabGroupUpdated_(tabGroup);
        }));
    }
    getId() {
        return 'tab-groups';
    }
    getHeader() {
        return loadTimeData.getString('tabGroups');
    }
    async getItems() {
        const { tabGroups } = await this.browserProxy_.handler.getTabGroups();
        this.tabGroups_ = tabGroups;
        return this.tabGroups_.map(group => this.tabGroupToSectionItem_(group));
    }
    getZeroState() {
        const item = {
            title: [loadTimeData.getString('createTabGroup')],
            prefixIcon: {
                element: html `<cr-icon icon="cr:add"
            style="--iron-icon-height: 20px; --iron-icon-width: 20px;">
        </cr-icon>`,
            },
            size: CrUrlListItemSize.COMPACT,
        };
        return html `
      <organizer-list-section-item .item="${item}"
          @click="${() => this.onCreateTabGroupClick_()}">
      </organizer-list-section-item>
    `;
    }
    shouldAlwaysShowZeroState() {
        return true;
    }
    onCreateTabGroupClick_() {
        this.organizerPanelBrowserProxy_.handler.closePanel();
        this.browserProxy_.handler.createNewTabGroup();
    }
    onItemClick(item) {
        const data = item.data;
        assert(data);
        this.browserProxy_.handler.openTabGroup(data.id);
    }
    async onItemActionButtonClicked(item, buttonElement) {
        assert(item.data);
        const rect = buttonElement.getBoundingClientRect();
        await this.browserProxy_.handler.showContextMenu(item.data.id, {
            x: Math.round(rect.x),
            y: Math.round(rect.y),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
        });
    }
    async onItemContextMenuClicked(item, x, y) {
        assert(item.data);
        await this.browserProxy_.handler.showContextMenu(item.data.id, {
            x: Math.round(x),
            y: Math.round(y),
            width: 0,
            height: 0,
        });
    }
    notifyClient_() {
        this.client_?.onItemsChanged(this.tabGroups_.map(group => this.tabGroupToSectionItem_(group)));
    }
    onTabGroupAdded_(tabGroup) {
        this.tabGroups_ = [
            tabGroup,
            ...this.tabGroups_.filter(g => g.id !== tabGroup.id),
        ];
        this.notifyClient_();
    }
    onTabGroupRemoved_(id) {
        this.tabGroups_ = this.tabGroups_.filter(g => g.id !== id);
        this.notifyClient_();
    }
    onTabGroupUpdated_(tabGroup) {
        const index = this.tabGroups_.findIndex(g => g.id === tabGroup.id);
        if (index !== -1) {
            this.tabGroups_[index] = tabGroup;
            this.notifyClient_();
        }
    }
    tabGroupToSectionItem_(group) {
        return {
            title: [group.title],
            description: group.lastActiveElapsedText ?
                [{ text: group.lastActiveElapsedText, matchable: false }] :
                undefined,
            prefixIcon: {
                element: html `<tab-group-dot .color="${group.color}"
            .filled="${group.isOpen}"
            .size="${TabGroupDotSize.LARGE}"></tab-group-dot>`,
            },
            hoveredActionButton: {
                icon: 'cr:more-vert',
                ariaLabel: loadTimeData.getString('tabGroupMoreOptions'),
                tooltip: loadTimeData.getString('options'),
            },
            data: group,
        };
    }
}
