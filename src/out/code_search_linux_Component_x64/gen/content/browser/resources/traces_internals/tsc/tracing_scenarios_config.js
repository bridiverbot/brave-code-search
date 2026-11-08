// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './tracing_scenario.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
// 
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { TracesBrowserProxy } from './traces_browser_proxy.js';
import { getCss } from './tracing_scenarios_config.css.js';
import { getHtml } from './tracing_scenarios_config.html.js';
export class TracingScenariosConfigElement extends CrLitElement {
    static get is() {
        return 'tracing-scenarios-config';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enabledScenarios_: { type: Object },
            localConfig_: { type: Array },
            fieldConfig_: { type: Array },
            isLoading_: { type: Boolean },
            privacyFilterEnabled_: { type: Boolean },
            toastMessage_: { type: String },
            // 
        };
    }
    traceReportProxy_ = TracesBrowserProxy.getInstance();
    refreshIntervalId_ = 0;
    #enabledScenarios__accessor_storage = {};
    get enabledScenarios_() { return this.#enabledScenarios__accessor_storage; }
    set enabledScenarios_(value) { this.#enabledScenarios__accessor_storage = value; }
    #localConfig__accessor_storage = [];
    get localConfig_() { return this.#localConfig__accessor_storage; }
    set localConfig_(value) { this.#localConfig__accessor_storage = value; }
    #fieldConfig__accessor_storage = [];
    get fieldConfig_() { return this.#fieldConfig__accessor_storage; }
    set fieldConfig_(value) { this.#fieldConfig__accessor_storage = value; }
    #isLoading__accessor_storage = false;
    get isLoading_() { return this.#isLoading__accessor_storage; }
    set isLoading_(value) { this.#isLoading__accessor_storage = value; }
    #privacyFilterEnabled__accessor_storage = false;
    get privacyFilterEnabled_() { return this.#privacyFilterEnabled__accessor_storage; }
    set privacyFilterEnabled_(value) { this.#privacyFilterEnabled__accessor_storage = value; }
    #toastMessage__accessor_storage = '';
    get toastMessage_() { return this.#toastMessage__accessor_storage; }
    set toastMessage_(value) { this.#toastMessage__accessor_storage = value; }
    // 
    connectedCallback() {
        super.connectedCallback();
        this.initializeConfig_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this.refreshIntervalId_);
    }
    async initializeConfig_() {
        this.isLoading_ = true;
        await this.loadScenariosConfig_();
        this.privacyFilterEnabled_ =
            (await this.traceReportProxy_.handler.getPrivacyFilterEnabled())
                .enabled;
        // 
        this.isLoading_ = false;
        this.refreshIntervalId_ =
            setInterval(this.loadScenariosConfig_.bind(this), 1000);
    }
    async loadScenariosConfig_() {
        const { config: scenarios } = await this.traceReportProxy_.handler.getAllScenarios();
        this.localConfig_ = [];
        this.fieldConfig_ = [];
        for (const scenario of scenarios) {
            if (scenario.isLocalScenario) {
                this.localConfig_.push(scenario);
            }
            else {
                this.fieldConfig_.push(scenario);
            }
        }
    }
    isScenarioEnabled_(scenario) {
        return this.enabledScenarios_[scenario.scenarioName] ?? scenario.isEnabled;
    }
    async onPrivacyFilterChange_(event) {
        if (this.privacyFilterEnabled_ === event.detail) {
            return;
        }
        this.privacyFilterEnabled_ = event.detail;
        await this.traceReportProxy_.handler.setPrivacyFilterEnabled(this.privacyFilterEnabled_);
    }
    onValueChanged_(event) {
        const key = event.currentTarget.dataset['key'];
        if (key === undefined) {
            return;
        }
        this.enabledScenarios_[key] = event.detail.value;
    }
    onCancelClick_() {
        this.enabledScenarios_ = {};
    }
    async onConfirmClick_() {
        const enabledScenarios = [];
        for (const scenario of this.localConfig_) {
            if (this.enabledScenarios_[scenario.scenarioName] ?? scenario.isEnabled) {
                enabledScenarios.push(scenario.scenarioName);
            }
        }
        const { success } = await this.traceReportProxy_.handler.setEnabledScenarios(enabledScenarios);
        if (!success) {
            this.toastMessage_ = 'Failed to update scenarios config';
            this.$.toast.show();
            return;
        }
        await this.loadScenariosConfig_();
        this.enabledScenarios_ = {};
    }
    async onAddConfigChange_(e) {
        const files = e.target.files;
        if (!files) {
            this.toastMessage_ = `Failed to open config file.`;
            this.$.toast.show();
            return;
        }
        for (const file of files) {
            const result = await this.processConfigFile_(file);
            if (!result.success) {
                this.toastMessage_ = `Failed to read config file ${file.name}.`;
                this.$.toast.show();
            }
        }
        await this.loadScenariosConfig_();
    }
    async processConfigFile_(file) {
        const isTextFile = (file.type === 'text/plain');
        const handler = this.traceReportProxy_.handler;
        if (isTextFile) {
            const text = await file.text();
            return handler.setScenariosConfigFromString(text);
        }
        else {
            const bytes = await file.arrayBuffer();
            const buffer = { bytes: Array.from(new Uint8Array(bytes)) };
            return handler.setScenariosConfigFromBuffer(buffer);
        }
    }
    async onResetAllClick_() {
        const { success } = await this.traceReportProxy_.handler.setEnabledScenarios([]);
        if (!success) {
            this.toastMessage_ = 'Failed to reset scenarios';
            this.$.toast.show();
            return;
        }
        await this.loadScenariosConfig_();
        this.enabledScenarios_ = {};
    }
    // 
    shouldShowPresetConfig_() {
        return this.localConfig_ !== null && this.localConfig_.length > 0;
    }
    shouldShowFieldConfig_() {
        return this.fieldConfig_ !== null && this.fieldConfig_.length > 0;
    }
}
customElements.define(TracingScenariosConfigElement.is, TracingScenariosConfigElement);
