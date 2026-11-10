// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '/strings.m.js';
import '../info_dialog.js';
import '../module_header.js';
import './icons.html.js';
import './icon_container.js';
import { MojoPluralStringProxy } from 'chrome://resources/cr_components/search/mojo_plural_string_proxy.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { I18nMixinLit } from '../../i18n_setup.js';
import { recordOccurrence, recordSmallCount } from '../../metrics_utils.js';
import { Color } from '../../tab_group_types.mojom-webui.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import { getCss } from './module.css.js';
import { getHtml } from './module.html.js';
import { TabGroupsProxyImpl } from './tab_groups_proxy.js';
export const MAX_TAB_GROUPS = 4;
export const COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_PREFIX = '--color-new-tab-page-module-tab-groups-';
export const COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_DOT_PREFIX = '--color-new-tab-page-module-tab-groups-dot-';
const TabGroupsModuleElementBase = I18nMixinLit(CrLitElement);
export function colorIdToString(colorPrefix, id) {
    const colorMap = new Map([
        [Color.kGrey, 'grey'],
        [Color.kBlue, 'blue'],
        [Color.kRed, 'red'],
        [Color.kYellow, 'yellow'],
        [Color.kGreen, 'green'],
        [Color.kPink, 'pink'],
        [Color.kPurple, 'purple'],
        [Color.kCyan, 'cyan'],
        [Color.kOrange, 'orange'],
    ]);
    assert(colorMap.has(id));
    return colorPrefix + colorMap.get(id);
}
/**
 * The Tab Groups module, which helps users resume journey and discover tab
 * groups.
 */
export class TabGroupsModuleElement extends TabGroupsModuleElementBase {
    static get is() {
        return 'ntp-tab-groups-module';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ariaLabels: { type: Object },
            tabGroups: { type: Array },
            showInfoDialog: { type: Boolean },
        };
    }
    #ariaLabels_accessor_storage = new Map();
    get ariaLabels() { return this.#ariaLabels_accessor_storage; }
    set ariaLabels(value) { this.#ariaLabels_accessor_storage = value; }
    #tabGroups_accessor_storage = [];
    get tabGroups() { return this.#tabGroups_accessor_storage; }
    set tabGroups(value) { this.#tabGroups_accessor_storage = value; }
    #showInfoDialog_accessor_storage = false;
    get showInfoDialog() { return this.#showInfoDialog_accessor_storage; }
    set showInfoDialog(value) { this.#showInfoDialog_accessor_storage = value; }
    showZeroState = false;
    handler_;
    constructor() {
        super();
        this.handler_ = TabGroupsProxyImpl.getInstance().handler;
    }
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('tabGroups')) {
            const entries = await Promise.all(this.tabGroups.map(async (group) => {
                const label = await this.computeTabGroupButtonAriaLabel_(group);
                return [group.id, label];
            }));
            this.ariaLabels = new Map(entries);
        }
    }
    computeDescription_(time, device) {
        return (device && device.length > 0) ? `${time} • ${device.trim()}` : time;
    }
    computeTabGroupColor_(color) {
        return colorIdToString(COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_PREFIX, color);
    }
    computeTabGroupDotColor_(color) {
        return colorIdToString(COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_DOT_PREFIX, color);
    }
    async computeTabGroupButtonAriaLabel_(group) {
        const totalTabsStr = await MojoPluralStringProxy.getInstance().getPluralString('modulesTabGroupsTabsText', group.totalTabCount);
        const description = this.computeDescription_(group.updateTime, group.deviceName);
        const sharedStr = group.isSharedTabGroup ? 'shared' : '';
        return [totalTabsStr, group.title, description, sharedStr]
            .filter(Boolean)
            .join(' ');
    }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18nRecursive('', 'modulesDisableButtonTextV2', 'modulesTabGroupsTitle'),
            },
            {
                action: 'info',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:info' :
                    'modules:info-old',
                text: this.i18n('moduleInfoButtonTitle'),
            },
        ];
    }
    getTabGroups_() {
        return this.tabGroups.slice(0, MAX_TAB_GROUPS);
    }
    onDisableButtonClick_() {
        this.fire('disable-module', {
            message: this.i18n('modulesTabGroupsDisableToastMessage'),
        });
    }
    onInfoButtonClick_() {
        this.showInfoDialog = true;
    }
    onInfoDialogClose_() {
        this.showInfoDialog = false;
    }
    onCreateNewTabGroupFromZeroStateClick_() {
        this.onCreateNewTabGroupClick_(true);
    }
    onCreateNewTabGroupFromSteadyStateClick_() {
        this.onCreateNewTabGroupClick_(false);
    }
    onCreateNewTabGroupClick_(fromZeroStateCard) {
        this.fire('usage');
        const histogram = 'NewTabPage.TabGroups.CreateNewTabGroup';
        recordOccurrence(histogram);
        recordOccurrence(`${histogram}.${fromZeroStateCard ? 'ZeroState' : 'SteadyState'}`);
        this.handler_.createNewTabGroup();
    }
    onTabGroupClick_(e) {
        const target = e.currentTarget;
        const id = target.dataset['id'];
        const index = Number(target.dataset['index']);
        this.fire('usage');
        recordSmallCount('NewTabPage.TabGroups.ClickTabGroupIndex', index);
        this.handler_.openTabGroup(id);
    }
    getLibraryAddIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'tab_groups:library-add' :
            'tab_groups:create_new_tab_group-old';
    }
    getGroupIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'tab_groups:group' :
            'tab_groups:shared_tab_group-old';
    }
}
customElements.define(TabGroupsModuleElement.is, TabGroupsModuleElement);
async function createElement() {
    const { tabGroups, showZeroState } = await TabGroupsProxyImpl.getInstance().handler.getTabGroups();
    if (!tabGroups) {
        // Still within the dismissal time window--skip rendering module.
        return null;
    }
    if (!showZeroState && tabGroups.length === 0) {
        // If zero-state is disabled and there are no groups, skip rendering module.
        return null;
    }
    const element = new TabGroupsModuleElement();
    element.tabGroups = tabGroups;
    element.showZeroState = showZeroState;
    return element;
}
export const tabGroupsDescriptor = new ModuleDescriptor(
/*id=*/ 'tab_groups', createElement);
