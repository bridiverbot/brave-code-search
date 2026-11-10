// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxy } from './../browser_proxy.js';
import { getCss } from './policy_logs_app.css.js';
import { getHtml } from './policy_logs_app.html.js';
export class PolicyLogsAppElement extends CrLitElement {
    static get is() {
        return 'policy-logs-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            logs: { type: Array },
            versionInfo: { type: Object },
            filterPattern: { type: String },
            checkedSeverities: { type: Object },
        };
    }
    #logs_accessor_storage = [];
    get logs() { return this.#logs_accessor_storage; }
    set logs(value) { this.#logs_accessor_storage = value; }
    #versionInfo_accessor_storage = null;
    get versionInfo() { return this.#versionInfo_accessor_storage; }
    set versionInfo(value) { this.#versionInfo_accessor_storage = value; }
    #filterPattern_accessor_storage = '';
    get filterPattern() { return this.#filterPattern_accessor_storage; }
    set filterPattern(value) { this.#filterPattern_accessor_storage = value; }
    #checkedSeverities_accessor_storage = {
        ERROR: true,
        WARNING: true,
        INFO: true,
        VERBOSE: true,
    };
    get checkedSeverities() { return this.#checkedSeverities_accessor_storage; }
    set checkedSeverities(value) { this.#checkedSeverities_accessor_storage = value; }
    policyPageMojoMigrationEnabled = loadTimeData.getBoolean('policyPageMojoMigrationEnabled');
    connectedCallback() {
        super.connectedCallback();
        this.displayVersionInfo();
        this.fetchLogsAndDisplay();
    }
    displayVersionInfo() {
        this.versionInfo = JSON.parse(loadTimeData.getString('versionInfo'));
    }
    async fetchLogs() {
        if (this.policyPageMojoMigrationEnabled) {
            this.logs =
                (await BrowserProxy.getInstance().handler.getPolicyLogs()).policyLogs;
        }
        else {
            this.logs = await sendWithPromise('getPolicyLogs');
        }
    }
    fetchLogsAndDisplay() {
        this.fetchLogs();
    }
    onDumpClick() {
        const dumpObject = { versionInfo: this.versionInfo, logs: this.logs };
        const data = JSON.stringify(dumpObject, null, 3);
        const filename = 'policy_logs_dump.json';
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', filename);
        a.click();
    }
    onRefreshClick() {
        this.fetchLogsAndDisplay();
    }
    onFilterInput(e) {
        this.filterPattern = e.target.value;
    }
    onSeverityChange(severity, checked) {
        this.checkedSeverities = {
            ...this.checkedSeverities,
            [severity]: checked,
        };
    }
    onSeverityCheckboxChange(e) {
        const target = e.target;
        const severity = target.dataset['severity'];
        this.onSeverityChange(severity.toUpperCase(), target.checked);
    }
    getFilterWords() {
        return this.filterPattern.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    }
    getFilteredLogs() {
        const filterWords = this.getFilterWords();
        return this.logs.filter(log => {
            const messageLower = log.message.toLowerCase();
            const fileAndLineLower = log.fileAndLine.toLowerCase();
            const logSeverityLower = log.logSeverity.toLowerCase();
            const matchesFilter = filterWords.length === 0 ||
                filterWords.every(word => messageLower.includes(word) ||
                    fileAndLineLower.includes(word) ||
                    logSeverityLower.includes(word));
            const matchesSeverity = this.checkedSeverities[log.logSeverity] ?? true;
            return matchesFilter && matchesSeverity;
        });
    }
    getLogFileAndLine(log) {
        const parts = log.fileAndLine.split(':');
        return {
            file: parts[0] ?? '',
            line: parts[1] ?? '',
        };
    }
}
customElements.define(PolicyLogsAppElement.is, PolicyLogsAppElement);
