// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import '../controls/settings_dropdown_menu.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement, } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './traffic_control_rule_dialog.css.js';
import { getHtml } from './traffic_control_rule_dialog.html.js';
import { TrafficControlSettingsHandlerBrowserProxy } from './traffic_control_browser_proxy.js';
import { cloneRuleForEdit, kUnsetLabel, ruleOperationErrorMessage, urlFilterPatternsOf, } from './traffic_control_utils.js';
// Sentinel dropdown values for Target container fields that are not concrete
// container ids. Distinct from "" which means open outside any container.
var ContainerDropdownSentinel;
(function (ContainerDropdownSentinel) {
    ContainerDropdownSentinel["kUnset"] = "__unset_container__";
    ContainerDropdownSentinel["kTemporary"] = "__temporary_container__";
})(ContainerDropdownSentinel || (ContainerDropdownSentinel = {}));
const SettingsBraveContentTrafficControlRuleDialogElementBase = I18nMixinLit(CrLitElement);
/**
 * Create / edit dialog for a single traffic control rule. Owns save/error
 * handling and notifies the parent via a `close` event when dismissed.
 */
export class SettingsBraveContentTrafficControlRuleDialogElement extends SettingsBraveContentTrafficControlRuleDialogElementBase {
    static get is() {
        return 'settings-brave-content-traffic-control-rule-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            rule: { type: Object },
            containersList: { type: Array },
            draftRule_: { type: Object },
            error_: { type: String },
        };
    }
    browserProxy = TrafficControlSettingsHandlerBrowserProxy.getInstance();
    #rule_accessor_storage = {
        id: '',
        enabled: true,
        condition: { urlFilter: '' },
        target: { containerId: null, temporaryContainer: false },
    };
    /**
     * Initial rule from the parent (new empty rule or clone for edit). Copied
     * into `draftRule_` so parent re-renders do not wipe in-progress edits.
     */
    get rule() { return this.#rule_accessor_storage; }
    set rule(value) { this.#rule_accessor_storage = value; }
    #containersList_accessor_storage = [];
    get containersList() { return this.#containersList_accessor_storage; }
    set containersList(value) { this.#containersList_accessor_storage = value; }
    #draftRule__accessor_storage = cloneRuleForEdit(this.rule);
    get draftRule_() { return this.#draftRule__accessor_storage; }
    set draftRule_(value) { this.#draftRule__accessor_storage = value; }
    #error__accessor_storage;
    get error_() { return this.#error__accessor_storage; }
    set error_(value) { this.#error__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('rule')) {
            this.draftRule_ = cloneRuleForEdit(this.rule);
            this.error_ = undefined;
        }
    }
    fireClose_() {
        this.fire('rule-dialog-close');
    }
    onDialogClose_() {
        this.fireClose_();
    }
    onCancelClick_() {
        this.fireClose_();
    }
    onKeydown_(e) {
        // Ctrl/Cmd+Enter submits the dialog (Enter alone inserts a newline).
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            this.onSaveClick_();
        }
    }
    onUrlFilterValueChanged_(e) {
        this.draftRule_.condition.urlFilter = e.detail.value;
        this.requestUpdate();
    }
    onRuleEnabledChange_(e) {
        const toggle = e.currentTarget;
        this.draftRule_.enabled = toggle.checked;
        this.requestUpdate();
    }
    onContainerSettingsControlChange_(e) {
        const dropdown = e.target;
        this.applyContainerDropdownValue_(dropdown.getSelectedValue());
        this.requestUpdate();
    }
    containerMenuOptions_() {
        const options = [
            {
                name: kUnsetLabel,
                value: ContainerDropdownSentinel.kUnset,
            },
            {
                name: this.i18n("CXMENU_NO_CONTAINER" /* ContainersStrings.CXMENU_NO_CONTAINER */),
                value: '',
            },
        ];
        options.push(...this.containersList.map((c) => ({
            name: c.name,
            value: c.id,
        })));
        options.push({
            name: this.i18n("CXMENU_NEW_TEMPORARY_CONTAINER" /* ContainersStrings.CXMENU_NEW_TEMPORARY_CONTAINER */),
            value: ContainerDropdownSentinel.kTemporary,
        });
        return options;
    }
    // Maps Target container fields to the dropdown value.
    containerDropdownValue_() {
        const target = this.draftRule_.target;
        if (target.temporaryContainer) {
            return ContainerDropdownSentinel.kTemporary;
        }
        if (target.containerId === null) {
            return ContainerDropdownSentinel.kUnset;
        }
        return target.containerId;
    }
    // Updates only the container-related fields on the draft target, leaving any
    // other Target fields untouched.
    applyContainerDropdownValue_(selected) {
        const target = this.draftRule_.target;
        if (selected === ContainerDropdownSentinel.kTemporary) {
            target.containerId = null;
            target.temporaryContainer = true;
            return;
        }
        if (selected === ContainerDropdownSentinel.kUnset || selected == null) {
            target.containerId = null;
            target.temporaryContainer = false;
            return;
        }
        target.containerId = selected;
        target.temporaryContainer = false;
    }
    canSave_() {
        return urlFilterPatternsOf(this.draftRule_).length > 0;
    }
    async onSaveClick_() {
        if (!this.canSave_()) {
            return;
        }
        const isNew = !this.draftRule_.id;
        const result = isNew
            ? await this.browserProxy.handler.addRule(this.draftRule_)
            : await this.browserProxy.handler.updateRule(this.draftRule_);
        if (result.error != null) {
            this.error_ = ruleOperationErrorMessage(result.error);
            return;
        }
        this.fireClose_();
    }
}
customElements.define(SettingsBraveContentTrafficControlRuleDialogElement.is, SettingsBraveContentTrafficControlRuleDialogElement);
