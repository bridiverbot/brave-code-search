// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import { MetricsInternalsBrowserProxyImpl } from './browser_proxy.js';
import { getTemplate } from './runtime_mutable_features.html.js';
export class RuntimeMutableFeaturesAppElement extends CustomElement {
    static get is() {
        return 'runtime-mutable-features-app';
    }
    static get template() {
        return getTemplate();
    }
    proxy_ = MetricsInternalsBrowserProxyImpl.getInstance();
    isPaused_ = false;
    selectedFile_ = null;
    intervalId_ = null;
    constructor() {
        super();
        this.init_();
    }
    async init_() {
        this.shadowRoot.querySelector('#pause-resume-btn').addEventListener('click', () => this.togglePauseResume_());
        this.shadowRoot.querySelector('#seed-file-picker').addEventListener('change', (e) => this.onFileSelected_(e));
        this.shadowRoot.querySelector('#load-seed-btn').addEventListener('click', () => this.loadSeed_());
        await this.updateUi_();
        // Periodically refresh the UI every 3 seconds.
        this.intervalId_ = window.setInterval(() => this.updateUi_(), 3000);
    }
    disconnectedCallback() {
        if (this.intervalId_ !== null) {
            window.clearInterval(this.intervalId_);
            this.intervalId_ = null;
        }
    }
    async updateUi_() {
        await this.updateIsSeedFetchingPaused_();
        await this.updateFeaturesList_();
    }
    async updateIsSeedFetchingPaused_() {
        this.isPaused_ = await this.proxy_.isSeedFetchingPaused();
        this.updatePauseResumeUi_(this.isPaused_);
    }
    async updateFeaturesList_() {
        const features = await this.proxy_.fetchRuntimeMutableFeatures();
        const tbody = this.shadowRoot.querySelector('#features-body');
        tbody.replaceChildren();
        const template = this.getRequiredElement('#feature-row-template');
        for (const feature of features) {
            const row = template.content.cloneNode(true);
            row.querySelector('.feature-name').textContent = feature.name;
            row.querySelector('.feature-state').textContent =
                feature.enabled ? 'Enabled' : 'Disabled';
            row.querySelector('.feature-field-trial').textContent =
                feature.fieldTrial;
            row.querySelector('.feature-field-trial-group').textContent =
                feature.fieldTrialGroup;
            const overrideIcon = row.querySelector('.override-icon');
            overrideIcon.style.display =
                feature.runtimeOverride ? 'inline-block' : 'none';
            tbody.appendChild(row);
        }
    }
    async togglePauseResume_() {
        const nextPaused = !this.isPaused_;
        await this.proxy_.setSeedFetchingPaused(nextPaused);
        this.isPaused_ = nextPaused;
        this.updatePauseResumeUi_(this.isPaused_);
    }
    updatePauseResumeUi_(paused) {
        const btn = this.shadowRoot.querySelector('#pause-resume-btn');
        const status = this.shadowRoot.querySelector('#fetch-status');
        if (paused) {
            btn.textContent = 'Resume Seed Fetching';
            status.textContent = 'Status: Paused';
        }
        else {
            btn.textContent = 'Pause Seed Fetching';
            status.textContent = 'Status: Active';
        }
    }
    onFileSelected_(e) {
        const input = e.target;
        if (input.files && input.files.length > 0) {
            this.selectedFile_ = input.files[0] ?? null;
            this.shadowRoot.querySelector('#load-seed-btn').removeAttribute('disabled');
        }
        else {
            this.selectedFile_ = null;
            this.shadowRoot.querySelector('#load-seed-btn').setAttribute('disabled', '');
        }
    }
    loadSeed_() {
        if (!this.selectedFile_) {
            return;
        }
        const reader = new FileReader();
        reader.onload = async (e) => {
            const buffer = e.target?.result;
            const bytes = new Uint8Array(buffer);
            await this.proxy_.uploadSeed(bytes);
            // Refresh list after loading seed as it might have changed feature
            // states
            await this.updateFeaturesList_();
        };
        reader.readAsArrayBuffer(this.selectedFile_);
    }
}
customElements.define(RuntimeMutableFeaturesAppElement.is, RuntimeMutableFeaturesAppElement);
