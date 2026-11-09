// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './policy_conflict.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PolicyLevel, PolicyScope } from './policy.mojom-webui.js';
import { copyValue, stringifyPolicyValue } from './policy_conflict.js';
import { getCss } from './policy_row.css.js';
import { getHtml } from './policy_row.html.js';
export class PolicyRowElement extends CrLitElement {
    static get is() {
        return 'policy-row';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            policy: { type: Object },
            expanded: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #policy_accessor_storage = null;
    get policy() { return this.#policy_accessor_storage; }
    set policy(value) { this.#policy_accessor_storage = value; }
    #expanded_accessor_storage = false;
    get expanded() { return this.#expanded_accessor_storage; }
    set expanded(value) { this.#expanded_accessor_storage = value; }
    get unset() {
        return !!(this.policy && this.policy.value === undefined);
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'rowgroup');
        this.classList.add('policy-data');
        this.expanded = false;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('policy') && this.policy) {
            this.policy.status = this.computeStatusText();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('policy')) {
            if (this.policy && this.policy.link) {
                this.removeAttribute('no-help-link');
            }
            else {
                this.setAttribute('no-help-link', '');
            }
        }
    }
    getShowMoreLessLabel() {
        return loadTimeData.getString(this.expanded ? 'showLess' : 'showMore');
    }
    getLearnMoreTooltip() {
        return this.policy?.name ?
            loadTimeData.getStringF('policyLearnMore', this.policy.name) :
            '';
    }
    getCopyLabel() {
        return this.policy?.name ?
            loadTimeData.getStringF('policyCopyValue', this.policy.name) :
            '';
    }
    getScopeText() {
        if (!this.policy || this.unset) {
            return '';
        }
        return loadTimeData.getString(this.policy.scope === PolicyScope.kUser ? 'scopeUser' : 'scopeDevice');
    }
    getLevelText() {
        if (!this.policy || this.unset) {
            return '';
        }
        return loadTimeData.getString(this.policy.level === PolicyLevel.kRecommended ? 'levelRecommended' :
            'levelMandatory');
    }
    getSourceText() {
        if (!this.policy || this.unset) {
            return '';
        }
        return loadTimeData.getString(this.policy.source);
    }
    getTruncatedValue() {
        if (!this.policy || this.unset) {
            return '';
        }
        const policyValueStr = stringifyPolicyValue(this.policy.value);
        return policyValueStr.length > 256 ?
            `${policyValueStr.substring(0, 256)}\u2026` :
            policyValueStr;
    }
    getFormattedValue() {
        if (!this.policy || this.unset) {
            return '';
        }
        return stringifyPolicyValue(this.policy.value, /*format=*/ true);
    }
    getMessagesText() {
        return this.policy?.status || '';
    }
    computeStatusText() {
        if (!this.policy) {
            return '';
        }
        if (this.unset) {
            return loadTimeData.getString('unset');
        }
        const { error, warning, conflicts, superseded, allSourcesMerged, ignored, isExtension, deprecated, future, restartRequired, } = this.policy;
        const isMergedValue = !!allSourcesMerged;
        const notices = [
            error ? loadTimeData.getString('error') : '',
            deprecated ? loadTimeData.getString('deprecated') : '',
            future ? loadTimeData.getString('future') : '',
            warning ? loadTimeData.getString('warning') : '',
            restartRequired ? loadTimeData.getString('restartRequired') : '',
            ignored ? loadTimeData.getString(isExtension ? 'ignoredByExtension' : 'ignored') :
                '',
            (conflicts?.length && !isMergedValue) ? loadTimeData.getString('conflict') : '',
        ].filter(Boolean);
        let notice = notices.join(', ') || loadTimeData.getString('ok');
        if (superseded?.length && !isMergedValue) {
            notice += `, ${loadTimeData.getString('superseding')}`;
        }
        return notice;
    }
    get conflictItems() {
        return [
            ...(this.policy?.conflicts || []).map(c => ({
                conflict: c,
                label: 'conflictValue',
                className: 'policy-conflict-data',
            })),
            ...(this.policy?.superseded || []).map(c => ({
                conflict: c,
                label: 'supersededValue',
                className: 'policy-superseded-data',
            })),
        ];
    }
    // Copies the policy's value to the clipboard.
    onCopyClick(e) {
        const target = e.currentTarget;
        const row = target.closest('.row');
        const policyValueDisplay = row?.querySelector('.value');
        if (policyValueDisplay) {
            copyValue(policyValueDisplay);
        }
    }
    // Toggle the visibility of an additional row containing the complete text.
    onToggleExpandedClick() {
        this.expanded = !this.expanded;
    }
    getOpenInNewIconSrc() {
        return document.documentElement.hasAttribute('webui-rounded-icons') ?
            'chrome://resources/images/open_in_new.svg' :
            'chrome://resources/images/open_in_new_old.svg';
    }
    getCopyIconSrc() {
        return document.documentElement.hasAttribute('webui-rounded-icons') ?
            'chrome://resources/images/icon_copy_content.svg' :
            'chrome://resources/images/icon_copy_content_old.svg';
    }
}
customElements.define(PolicyRowElement.is, PolicyRowElement);
