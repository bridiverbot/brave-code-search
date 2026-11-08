// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import './combobox.js';
import { IwaDevInstallTabElement } from './install_tab.js';
import { getCss } from './install_update_manifest_tab.css.js';
import { getHtml } from './install_update_manifest_tab.html.js';
export const PLACEHOLDER_URL = 'https://example.com/update_manifest.json';
export const MIN_FETCH_DELAY_MS = 750;
export class IwaDevInstallUpdateManifestTabElement extends IwaDevInstallTabElement {
    static get is() {
        return 'iwa-dev-install-update-manifest-tab';
    }
    static get styles() {
        return [
            super.styles,
            getCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disabled: { type: Boolean },
            url_: { type: String, state: true },
            urlError_: { type: String, state: true },
            isFetching_: { type: Boolean, state: true },
            isManifestFetched_: { type: Boolean, state: true },
            selectedVersion_: { type: String, state: true },
            selectedChannel_: { type: String, state: true },
            versionOptions_: { type: Array, state: true },
            channelOptions_: { type: Array, state: true },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #url__accessor_storage = '';
    get url_() { return this.#url__accessor_storage; }
    set url_(value) { this.#url__accessor_storage = value; }
    #urlError__accessor_storage = '';
    get urlError_() { return this.#urlError__accessor_storage; }
    set urlError_(value) { this.#urlError__accessor_storage = value; }
    #isFetching__accessor_storage = false;
    get isFetching_() { return this.#isFetching__accessor_storage; }
    set isFetching_(value) { this.#isFetching__accessor_storage = value; }
    #isManifestFetched__accessor_storage = false;
    get isManifestFetched_() { return this.#isManifestFetched__accessor_storage; }
    set isManifestFetched_(value) { this.#isManifestFetched__accessor_storage = value; }
    #selectedVersion__accessor_storage = '';
    get selectedVersion_() { return this.#selectedVersion__accessor_storage; }
    set selectedVersion_(value) { this.#selectedVersion__accessor_storage = value; }
    #selectedChannel__accessor_storage = '';
    get selectedChannel_() { return this.#selectedChannel__accessor_storage; }
    set selectedChannel_(value) { this.#selectedChannel__accessor_storage = value; }
    #versionOptions__accessor_storage = [];
    get versionOptions_() { return this.#versionOptions__accessor_storage; }
    set versionOptions_(value) { this.#versionOptions__accessor_storage = value; }
    #channelOptions__accessor_storage = [];
    get channelOptions_() { return this.#channelOptions__accessor_storage; }
    set channelOptions_(value) { this.#channelOptions__accessor_storage = value; }
    isValid() {
        return this.isManifestFetched_;
    }
    submit() {
        if (!this.isManifestFetched_) {
            return;
        }
        const versionOption = this.versionOptions_.find(v => v.value === this.selectedVersion_);
        this.fire('request-install-from-update-manifest', {
            webBundleUrl: versionOption.src,
            updateInfo: {
                updateManifestUrl: this.url_,
                updateChannel: this.selectedChannel_,
            },
        });
    }
    onManifestFetched_(result) {
        this.isFetching_ = false;
        if (result.error) {
            this.urlError_ = result.error;
            this.isManifestFetched_ = false;
            this.versionOptions_ = [];
            this.channelOptions_ = [];
        }
        else if (!result.success?.versions.length) {
            this.urlError_ = 'No valid version entries found in update manifest.';
            this.isManifestFetched_ = false;
            this.versionOptions_ = [];
            this.channelOptions_ = [];
        }
        else {
            this.versionOptions_ =
                [...result.success.versions]
                    .sort((a, b) => this.compareVersions_(b.version, a.version))
                    .map((item, index) => ({
                    value: item.version,
                    label: `${item.version}${index === 0 ? ' (Latest)' : ''}`,
                    src: item.src,
                }));
            this.channelOptions_ = (result.success.channels ||
                []).map(item => ({
                value: item.channel,
                label: item.displayName || item.channel,
            }));
            this.selectedVersion_ = this.versionOptions_[0].value;
            this.selectedChannel_ = this.channelOptions_[0]?.value || '';
            this.isManifestFetched_ = true;
        }
        this.notifyValidChanged();
    }
    async onFetchClick_() {
        this.urlError_ = '';
        if (!this.url_) {
            return;
        }
        if (!this.isValidUrl_(this.url_)) {
            this.urlError_ = 'Please enter a valid URL.';
            return;
        }
        this.isFetching_ = true;
        // Keep the fetching state shown for at least MIN_FETCH_DELAY_MS to give
        // visual feedback.
        const [result] = await Promise.all([
            new Promise(resolve => {
                this.fire('request-parse-update-manifest-from-url', {
                    url: this.url_,
                    callback: resolve,
                });
            }),
            new Promise(resolve => setTimeout(resolve, MIN_FETCH_DELAY_MS)),
        ]);
        this.onManifestFetched_(result);
    }
    onUrlValueChanged_(e) {
        this.url_ = e.detail.value;
        this.urlError_ = '';
        if (this.isManifestFetched_) {
            this.isManifestFetched_ = false;
            this.notifyValidChanged();
        }
    }
    onInputKeydown_(e) {
        if (e.key === 'Enter' && !this.isFetching_) {
            this.onFetchClick_();
        }
    }
    onSelectKeydown_(e) {
        if (e.key === 'Enter' && this.isManifestFetched_) {
            this.submit();
        }
    }
    onVersionValueChanged_(e) {
        this.selectedVersion_ = e.detail.value;
    }
    onChannelValueChanged_(e) {
        this.selectedChannel_ = e.detail.value;
    }
    compareVersions_(v1, v2) {
        return v1.localeCompare(v2, undefined, { numeric: true, sensitivity: 'base' });
    }
    isValidUrl_(url) {
        try {
            new URL(url);
            return true;
        }
        catch {
            return false;
        }
    }
}
customElements.define(IwaDevInstallUpdateManifestTabElement.is, IwaDevInstallUpdateManifestTabElement);
