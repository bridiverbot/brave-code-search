// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './enterprise_policy_table_section.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getKnownAppNamesById } from '../known_apps.js';
import { deepEqual } from '../tools.js';
import { getCss } from './enterprise_policy_table.css.js';
import { getHtml } from './enterprise_policy_table.html.js';
export class EnterprisePolicyTableElement extends CrLitElement {
    static get is() {
        return 'enterprise-policy-table';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            policies: { type: Object },
            appId: { type: String },
            hasOnlyDefaultValues: { type: Boolean },
            updaterPolicies: { type: Array },
            appPolicies: { type: Object },
        };
    }
    #policies_accessor_storage = undefined;
    get policies() { return this.#policies_accessor_storage; }
    set policies(value) { this.#policies_accessor_storage = value; }
    #appId_accessor_storage = undefined;
    get appId() { return this.#appId_accessor_storage; }
    set appId(value) { this.#appId_accessor_storage = value; }
    #hasOnlyDefaultValues_accessor_storage = true;
    get hasOnlyDefaultValues() { return this.#hasOnlyDefaultValues_accessor_storage; }
    set hasOnlyDefaultValues(value) { this.#hasOnlyDefaultValues_accessor_storage = value; }
    #updaterPolicies_accessor_storage = [];
    get updaterPolicies() { return this.#updaterPolicies_accessor_storage; }
    set updaterPolicies(value) { this.#updaterPolicies_accessor_storage = value; }
    #appPolicies_accessor_storage = {};
    get appPolicies() { return this.#appPolicies_accessor_storage; }
    set appPolicies(value) { this.#appPolicies_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('policies') || changedProperties.has('appId')) {
            this.hasOnlyDefaultValues = this.computeHasOnlyDefaultValues();
            this.updaterPolicies = this.computeUpdaterPolicies();
            this.appPolicies = this.computeAppPolicies();
        }
    }
    computeHasOnlyDefaultValues() {
        if (!this.policies) {
            return true;
        }
        const hasNonDefault = (policies) => Object.values(policies).some(policy => {
            const sources = Object.keys(policy.valuesBySource);
            return sources.length !== 1 ||
                sources[0].toLowerCase() !== 'default';
        });
        if (hasNonDefault(this.policies.policiesByName)) {
            return false;
        }
        for (const [appId, appPolicies] of Object.entries(this.policies.policiesByAppId)) {
            if (this.appId !== undefined &&
                appId.toLowerCase() !== this.appId.toLowerCase()) {
                continue;
            }
            if (hasNonDefault(appPolicies)) {
                return false;
            }
        }
        return true;
    }
    computeUpdaterPolicies() {
        if (this.policies === undefined) {
            return [];
        }
        return this.makeRowData(this.policies.policiesByName);
    }
    computeAppPolicies() {
        if (this.policies === undefined) {
            return {};
        }
        let entries = Object.entries(this.policies.policiesByAppId);
        if (this.appId !== undefined) {
            entries = entries.filter(([appId, _]) => appId.toLowerCase() === this.appId.toLowerCase());
        }
        return Object.fromEntries(entries.map(([appId, policiesByName,]) => [this.getAppLabel(appId), this.makeRowData(policiesByName)]));
    }
    makeRowData(policiesByName) {
        const hasConflict = (policy) => {
            const nonDefaultValues = Object.entries(policy.valuesBySource)
                .filter(([source, _]) => source.toLowerCase() !== 'default')
                .map(([_, value]) => value);
            return nonDefaultValues.some(v => !deepEqual(v, nonDefaultValues[0]));
        };
        return Object.entries(policiesByName).map(([name, policy]) => ({
            name,
            policy,
            isExpanded: false,
            hasConflict: hasConflict(policy),
        }));
    }
    getAppLabel(appId) {
        return getKnownAppNamesById().get(appId.toLowerCase()) ?? appId;
    }
    getAppPoliciesLabel(appLabel) {
        return loadTimeData.getStringF('appPolicies', appLabel);
    }
}
customElements.define(EnterprisePolicyTableElement.is, EnterprisePolicyTableElement);
