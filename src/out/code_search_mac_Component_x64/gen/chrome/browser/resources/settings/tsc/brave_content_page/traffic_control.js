// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/brave/leo.bundle.js';
import '../controls/settings_toggle_button.js';
import '../site_favicon.js';
import './traffic_control_rule_dialog.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement, } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { skColorToHexColor } from 'chrome://resources/js/color_utils.js';
import { ContainersSettingsHandlerBrowserProxy } from './containers_browser_proxy.js';
import { getCss } from './traffic_control.css.js';
import { getHtml } from './traffic_control.html.js';
import { TrafficControlSettingsHandlerBrowserProxy } from './traffic_control_browser_proxy.js';
import { DragReorderMixin, getDragReorderCss } from './drag_reorder_mixin.js';
import { cloneRuleForEdit, createEmptyRule, firstUrlFilterOf, kUnsetLabel, ruleOperationErrorMessage, urlFilterListLabel, } from './traffic_control_utils.js';
const SettingsBraveContentTrafficControlElementBase = DragReorderMixin(PrefServiceObserverMixinLit(I18nMixinLit(CrLitElement)));
/**
 * 'settings-brave-content-traffic-control' manages profile-scoped traffic rules.
 */
export class SettingsBraveContentTrafficControlElement extends SettingsBraveContentTrafficControlElementBase {
    static get is() {
        return 'settings-brave-content-traffic-control';
    }
    static get styles() {
        return [getCss(), getDragReorderCss()];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enabledPref_: { type: Object },
            rulesList_: { type: Array },
            containersList_: { type: Array },
            editingRule_: { type: Object },
            deletingRule_: { type: Object },
            deleteDialogError_: { type: String },
        };
    }
    browserProxy = TrafficControlSettingsHandlerBrowserProxy.getInstance();
    #enabledPref__accessor_storage;
    get enabledPref_() { return this.#enabledPref__accessor_storage; }
    set enabledPref_(value) { this.#enabledPref__accessor_storage = value; }
    #rulesList__accessor_storage = [];
    get rulesList_() { return this.#rulesList__accessor_storage; }
    set rulesList_(value) { this.#rulesList__accessor_storage = value; }
    #containersList__accessor_storage = [];
    get containersList_() { return this.#containersList__accessor_storage; }
    set containersList_(value) { this.#containersList__accessor_storage = value; }
    #editingRule__accessor_storage;
    get editingRule_() { return this.#editingRule__accessor_storage; }
    set editingRule_(value) { this.#editingRule__accessor_storage = value; }
    #deletingRule__accessor_storage;
    get deletingRule_() { return this.#deletingRule__accessor_storage; }
    set deletingRule_(value) { this.#deletingRule__accessor_storage = value; }
    #deleteDialogError__accessor_storage;
    get deleteDialogError_() { return this.#deleteDialogError__accessor_storage; }
    set deleteDialogError_(value) { this.#deleteDialogError__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('brave.traffic_control.enabled', 'enabledPref_');
        this.loadRules_();
        this.loadContainers_();
    }
    loadRules_() {
        this.browserProxy.handler.getRules().then(({ rules }) => {
            this.onRulesUpdated_(rules);
        });
        this.browserProxy.callbackRouter.onRulesChanged.addListener(this.onRulesUpdated_.bind(this));
    }
    loadContainers_() {
        const containersProxy = ContainersSettingsHandlerBrowserProxy.getInstance();
        containersProxy.handler.getContainers().then(({ containers }) => {
            this.onContainersUpdated_(containers);
        });
        containersProxy.callbackRouter.onContainersChanged.addListener(this.onContainersUpdated_.bind(this));
    }
    onRulesUpdated_(rules) {
        this.rulesList_ = rules;
        this.onReorderableItemsUpdated_();
    }
    getReorderableIds_() {
        return this.rulesList_.map((r) => r.id);
    }
    onItemsReordered_(orderedIds) {
        this.browserProxy.handler
            .reorderRules(orderedIds)
            .then(({ error }) => {
            if (!error) {
                this.onReorderableItemsUpdated_();
            }
        })
            .catch(() => this.onReorderableItemsUpdated_());
    }
    onContainersUpdated_(containers) {
        this.containersList_ = containers;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('enabledPref_')
            && !(this.enabledPref_?.value ?? false)) {
            this.editingRule_ = undefined;
            this.deletingRule_ = undefined;
        }
    }
    firstUrlFilterOf_(rule) {
        return firstUrlFilterOf(rule);
    }
    urlFilterListLabel_(rule) {
        return urlFilterListLabel(rule);
    }
    hasSpecificContainer_(target) {
        return (!!target.containerId
            && this.containerFor_(target.containerId) !== undefined);
    }
    containerIcon_(containerId) {
        return this.containerFor_(containerId)?.icon ?? 0;
    }
    containerBackgroundColor_(containerId) {
        const container = this.containerFor_(containerId);
        return container ? skColorToHexColor(container.backgroundColor) : '';
    }
    targetLabel_(target) {
        if (target.temporaryContainer) {
            return this.i18n("CXMENU_NEW_TEMPORARY_CONTAINER" /* ContainersStrings.CXMENU_NEW_TEMPORARY_CONTAINER */);
        }
        if (target.containerId === null) {
            return kUnsetLabel;
        }
        if (target.containerId === '') {
            return this.i18n("CXMENU_NO_CONTAINER" /* ContainersStrings.CXMENU_NO_CONTAINER */);
        }
        // Missing / deleted containers fall back to the same unset sentinel.
        return this.containerFor_(target.containerId)?.name ?? kUnsetLabel;
    }
    containerFor_(containerId) {
        if (!containerId) {
            return undefined;
        }
        return this.containersList_.find((c) => c.id === containerId);
    }
    onAddRuleClick_() {
        this.editingRule_ = createEmptyRule();
    }
    onEditRuleClick_(e) {
        const id = e.currentTarget.dataset['id'];
        const rule = this.rulesList_.find((r) => r.id === id);
        if (!rule) {
            return;
        }
        this.editingRule_ = cloneRuleForEdit(rule);
    }
    onDeleteRuleClick_(e) {
        const id = e.currentTarget.dataset['id'];
        this.deletingRule_ = this.rulesList_.find((r) => r.id === id);
        this.deleteDialogError_ = undefined;
    }
    onRuleDialogClose_() {
        this.editingRule_ = undefined;
    }
    onDeleteDialogClose_() {
        this.deletingRule_ = undefined;
        this.deleteDialogError_ = undefined;
    }
    onDeleteDialogCancelClick_() {
        this.onDeleteDialogClose_();
    }
    async onDeleteDialogConfirmClick_() {
        if (!this.deletingRule_) {
            return;
        }
        const result = await this.browserProxy.handler.removeRule(this.deletingRule_.id);
        if (result.error != null) {
            this.deleteDialogError_ = ruleOperationErrorMessage(result.error);
            return;
        }
        this.deletingRule_ = undefined;
        this.deleteDialogError_ = undefined;
    }
}
customElements.define(SettingsBraveContentTrafficControlElement.is, SettingsBraveContentTrafficControlElement);
