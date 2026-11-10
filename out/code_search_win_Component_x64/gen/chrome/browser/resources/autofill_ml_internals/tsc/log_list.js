// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { OptimizationTarget } from './autofill_ml_internals.mojom-webui.js';
import { getCss } from './log_list.css.js';
import { getHtml } from './log_list.html.js';
export class LogListElement extends CrLitElement {
    static get is() {
        return 'log-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            logEntries: { type: Array },
            selectedLogEntry: { type: Object },
            hideAutofill_: { type: Boolean },
            hidePasswordManager_: { type: Boolean },
        };
    }
    #logEntries_accessor_storage = [];
    get logEntries() { return this.#logEntries_accessor_storage; }
    set logEntries(value) { this.#logEntries_accessor_storage = value; }
    #selectedLogEntry_accessor_storage;
    get selectedLogEntry() { return this.#selectedLogEntry_accessor_storage; }
    set selectedLogEntry(value) { this.#selectedLogEntry_accessor_storage = value; }
    #hideAutofill__accessor_storage = false;
    get hideAutofill_() { return this.#hideAutofill__accessor_storage; }
    set hideAutofill_(value) { this.#hideAutofill__accessor_storage = value; }
    #hidePasswordManager__accessor_storage = false;
    get hidePasswordManager_() { return this.#hidePasswordManager__accessor_storage; }
    set hidePasswordManager_(value) { this.#hidePasswordManager__accessor_storage = value; }
    getFilteredLogEntries_() {
        return this.logEntries.filter(log => {
            switch (log.optimizationTarget) {
                case OptimizationTarget.kAutofill:
                    return !this.hideAutofill_;
                case OptimizationTarget.kPassword:
                    return !this.hidePasswordManager_;
                case OptimizationTarget.kUnknown:
                    return true;
                default:
                    const exhaustiveCheck = log.optimizationTarget;
                    throw new Error(`Unhandled Enum case: ${exhaustiveCheck}`);
            }
        });
    }
    onLogClick_(e) {
        const index = Number(e.currentTarget.dataset['index']);
        const log = this.getFilteredLogEntries_()[index];
        this.selectedLogEntry = log;
        this.fire('log-selected', log);
    }
    onAutofillCheckboxChange_(e) {
        const target = e.target;
        this.updateFilter_(OptimizationTarget.kAutofill, target.checked);
    }
    onPasswordManagerCheckboxChange_(e) {
        const target = e.target;
        this.updateFilter_(OptimizationTarget.kPassword, target.checked);
    }
    updateFilter_(target, enabled) {
        switch (target) {
            case OptimizationTarget.kAutofill:
                this.hideAutofill_ = !enabled;
                break;
            case OptimizationTarget.kPassword:
                this.hidePasswordManager_ = !enabled;
                break;
            case OptimizationTarget.kUnknown:
                break;
            default:
                const exhaustiveCheck = target;
                throw new Error(`Unhandled Enum case: ${exhaustiveCheck}`);
        }
    }
    onDownloadClick_() {
        const data = JSON.stringify(this.logEntries, (_, value) => {
            return typeof value === 'bigint' ? value.toString() : value;
        }, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'autofill_ml_logs.json';
        a.click();
        URL.revokeObjectURL(url);
    }
    getChipClass_(target) {
        switch (target) {
            case OptimizationTarget.kAutofill:
                return 'autofill';
            case OptimizationTarget.kPassword:
                return 'password';
            case OptimizationTarget.kUnknown:
                return '';
            default:
                const exhaustiveCheck = target;
                throw new Error(`Unhandled Enum case: ${exhaustiveCheck}`);
        }
    }
    getOptimizationTargetText_(target) {
        switch (target) {
            case OptimizationTarget.kAutofill:
                return 'Autofill';
            case OptimizationTarget.kPassword:
                return 'PWM';
            case OptimizationTarget.kUnknown:
                return 'Unknown';
            default:
                const exhaustiveCheck = target;
                throw new Error(`Unhandled Enum case: ${exhaustiveCheck}`);
        }
    }
    formatTime_(time) {
        const date = new Date(Number(time.internalValue / 1000n));
        return date.toLocaleTimeString();
    }
    getPluralizedFields_(count) {
        return `${count} field${count === 1 ? '' : 's'}`;
    }
    getSelectedCssClass_(item) {
        return this.selectedLogEntry === item ? 'selected' : '';
    }
}
customElements.define(LogListElement.is, LogListElement);
