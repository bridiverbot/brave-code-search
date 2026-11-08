// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import './exception_edit_dialog.js';
import './exception_entry.js';
import './exception_tabbed_add_dialog.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { TooltipMixinLit } from '../../tooltip_mixin_lit.js';
import { MemorySaverModeExceptionListAction, PerformanceMetricsProxyImpl } from '../performance_metrics_proxy.js';
import { getCss } from './exception_list.css.js';
import { getHtml } from './exception_list.html.js';
import { TAB_DISCARD_EXCEPTIONS_MANAGED_PREF, TAB_DISCARD_EXCEPTIONS_PREF } from './exception_validation_mixin.js';
export const TAB_DISCARD_EXCEPTIONS_OVERFLOW_SIZE = 5;
const ExceptionListElementBase = TooltipMixinLit(PrefServiceObserverMixinLit(CrLitElement));
export class ExceptionListElement extends ExceptionListElementBase {
    static get is() {
        return 'tab-discard-exception-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            siteList_: { type: Array },
            overflowSiteListExpanded_: { type: Boolean },
            selectedRule_: { type: String },
            showTabbedAddDialog_: { type: Boolean },
            showEditDialog_: { type: Boolean },
            tooltipText_: { type: String },
        };
    }
    #siteList__accessor_storage = [];
    get siteList_() { return this.#siteList__accessor_storage; }
    set siteList_(value) { this.#siteList__accessor_storage = value; }
    #overflowSiteListExpanded__accessor_storage = false;
    get overflowSiteListExpanded_() { return this.#overflowSiteListExpanded__accessor_storage; }
    set overflowSiteListExpanded_(value) { this.#overflowSiteListExpanded__accessor_storage = value; }
    #selectedRule__accessor_storage = '';
    get selectedRule_() { return this.#selectedRule__accessor_storage; }
    set selectedRule_(value) { this.#selectedRule__accessor_storage = value; }
    #showTabbedAddDialog__accessor_storage = false;
    get showTabbedAddDialog_() { return this.#showTabbedAddDialog__accessor_storage; }
    set showTabbedAddDialog_(value) { this.#showTabbedAddDialog__accessor_storage = value; }
    #showEditDialog__accessor_storage = false;
    get showEditDialog_() { return this.#showEditDialog__accessor_storage; }
    set showEditDialog_(value) { this.#showEditDialog__accessor_storage = value; }
    #tooltipText__accessor_storage = '';
    get tooltipText_() { return this.#tooltipText__accessor_storage; }
    set tooltipText_(value) { this.#tooltipText__accessor_storage = value; }
    metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addPrefObserver(TAB_DISCARD_EXCEPTIONS_PREF, () => this.updateList_());
        this.addPrefObserver(TAB_DISCARD_EXCEPTIONS_MANAGED_PREF, () => this.updateList_());
    }
    hasSites_() {
        return this.siteList_.length > 0;
    }
    hasOverflowSites_() {
        return this.siteList_.length > TAB_DISCARD_EXCEPTIONS_OVERFLOW_SIZE;
    }
    getSiteList_() {
        return this.siteList_.slice(-TAB_DISCARD_EXCEPTIONS_OVERFLOW_SIZE)
            .reverse();
    }
    getOverflowSiteList_() {
        return this.siteList_.slice(0, -TAB_DISCARD_EXCEPTIONS_OVERFLOW_SIZE)
            .reverse();
    }
    onOverflowSiteListExpandedChanged_(e) {
        this.overflowSiteListExpanded_ = e.detail.value;
    }
    onAddClick_() {
        assert(!this.showEditDialog_);
        this.showTabbedAddDialog_ = true;
    }
    onMenuClick_(e) {
        e.stopPropagation();
        this.selectedRule_ = e.detail.site;
        this.$.menu.get().showAt(e.detail.target);
    }
    onEditClick_() {
        assert(this.selectedRule_);
        assert(!this.showTabbedAddDialog_);
        this.showEditDialog_ = true;
        this.$.menu.get().close();
    }
    onDeleteClick_() {
        PrefService.getInstance().deletePrefDictEntry(TAB_DISCARD_EXCEPTIONS_PREF, this.selectedRule_);
        this.metricsProxy_.recordExceptionListAction(MemorySaverModeExceptionListAction.REMOVE);
        this.$.menu.get().close();
    }
    onTabbedAddDialogClose_() {
        this.showTabbedAddDialog_ = false;
    }
    onEditDialogClose_() {
        this.showEditDialog_ = false;
    }
    updateList_() {
        const newSites = [];
        const siteToExceptionEntry = (site, prefObject) => ({
            site,
            managed: prefObject.enforcement ===
                chrome.settingsPrivate.Enforcement.ENFORCED,
        });
        {
            const prefObject = PrefService.getInstance().getPref(TAB_DISCARD_EXCEPTIONS_MANAGED_PREF);
            const sites = prefObject.value;
            newSites.push(...sites.map(site => siteToExceptionEntry(site, prefObject)));
        }
        {
            const prefObject = PrefService.getInstance().getPref(TAB_DISCARD_EXCEPTIONS_PREF);
            const sites = Object.keys(prefObject.value);
            newSites.push(...sites.map(site => siteToExceptionEntry(site, prefObject)));
        }
        this.siteList_ = newSites;
    }
    /**
     * Need to use common tooltip since the tooltip in the entry is cut off from
     * the iron-list.
     */
    async onShowTooltip_(e) {
        this.tooltipText_ = e.detail.text;
        await this.updateComplete;
        this.showTooltipAtTarget(this.$.tooltip, e.detail.target);
    }
}
customElements.define(ExceptionListElement.is, ExceptionListElement);
