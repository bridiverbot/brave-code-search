// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './broker_state.css.js';
import { getHtml } from './broker_state.html.js';
import { DownloadObserverReceiver } from './download_observer.mojom-webui.js';
import { ModelUnavailableReason } from './model_broker.mojom-webui.js';
import { BrokerAssetState, ModelBrokerDebugObserverReceiver, ModelBrokerDebugRemote } from './model_broker_debug.mojom-webui.js';
import { browserProxyFactory } from './on_device_internals_page.mojom-webui.js';
const MANIFEST_CRITERIA_NAMES = [
    'Enabled by feature flag',
    'Enabled by enterprise policy',
    'Enabled by user setting',
    'Enough VRAM',
    'Device Capable',
    'Enough disk space to install',
    'Enough disk space to retain',
];
export class OnDeviceInternalsBrokerStateElement extends CrLitElement {
    static get is() {
        return 'on-device-internals-broker-state';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            state_: { type: Object },
        };
    }
    #state__accessor_storage = {
        properties: [],
        assets: [],
        useCases: [],
        models: [],
        modelCrashCount: null,
        maxModelCrashCount: null,
        isAssetManagerInitialized: false,
    };
    get state_() { return this.#state__accessor_storage; }
    set state_(value) { this.#state__accessor_storage = value; }
    get manifestCriteria() {
        return MANIFEST_CRITERIA_NAMES
            .map(name => this.state_.properties.find(p => p.description === name))
            .filter(p => p !== undefined);
    }
    get otherProperties() {
        return this.state_.properties.filter(p => !MANIFEST_CRITERIA_NAMES.includes(p.description));
    }
    proxy_ = browserProxyFactory.getInstance();
    brokerDebug_ = new ModelBrokerDebugRemote();
    brokerObserverReceiver_ = new ModelBrokerDebugObserverReceiver(this);
    downloadObservers_ = new Map();
    constructor() {
        super();
        this.proxy_.handler.bindModelBrokerDebug(this.brokerDebug_.$.bindNewPipeAndPassReceiver());
        this.brokerDebug_.addObserver(this.brokerObserverReceiver_.$.bindNewPipeAndPassRemote());
        this.getBrokerState_();
    }
    onBrokerStateChanged() {
        this.getBrokerState_();
    }
    updateAssetProgress(assetName, downloadedBytes, totalBytes) {
        const asset = this.state_.assets.find(a => a.name === assetName);
        if (asset) {
            asset.bytesDownloaded = downloadedBytes;
            asset.bytesTotal = totalBytes;
            this.state_ = { ...this.state_ };
        }
    }
    async getBrokerState_() {
        this.state_ = (await this.brokerDebug_.getStateInfo()).state;
        this.bindDownloadObservers_();
    }
    bindDownloadObservers_() {
        for (const asset of this.state_.assets) {
            const isDownloading = asset.state === BrokerAssetState.kBackgroundInstalling ||
                asset.state === BrokerAssetState.kForegroundInstalling;
            if (isDownloading && !this.downloadObservers_.has(asset.name)) {
                const observer = new AssetDownloadObserverImpl(this, asset.name);
                this.downloadObservers_.set(asset.name, observer);
                this.brokerDebug_.addAssetDownloadObserver(asset.name, observer.getReceiver().$.bindNewPipeAndPassRemote());
            }
            else if (!isDownloading && this.downloadObservers_.has(asset.name)) {
                // Clean up connection once the asset is no longer actively downloading.
                this.downloadObservers_.get(asset.name).getReceiver().$.close();
                this.downloadObservers_.delete(asset.name);
            }
        }
    }
    async onUninstallModelsClick_() {
        await this.brokerDebug_.uninstallModels();
        this.getBrokerState_();
    }
    async onResetCrashCountClick_() {
        await this.brokerDebug_.resetModelCrashCount();
        this.getBrokerState_();
    }
    async onUseCaseRequestedChange_(e) {
        const useCase = e.currentTarget.dataset['useCase'];
        const requested = e.currentTarget.checked;
        await this.brokerDebug_.setUseCaseRequested(useCase, requested);
        this.getBrokerState_();
    }
    assetStateToString(state) {
        switch (state) {
            case BrokerAssetState.kNotInstalled:
                return 'Not Installed';
            case BrokerAssetState.kRegistering:
                return 'Registering';
            case BrokerAssetState.kBackgroundInstalling:
                return 'Background Installing';
            case BrokerAssetState.kForegroundInstalling:
                return 'Foreground Installing';
            case BrokerAssetState.kReady:
                return 'Ready';
            case BrokerAssetState.kUninstalling:
                return 'Uninstalling';
            default:
                return 'Unknown';
        }
    }
    unavailableReasonToString(reason) {
        if (reason === null) {
            return 'Available';
        }
        switch (reason) {
            case ModelUnavailableReason.kUnknown:
                return 'Unknown';
            case ModelUnavailableReason.kNotSupported:
                return 'Not Supported';
            case ModelUnavailableReason.kPendingAssets:
                return 'Pending Assets';
            case ModelUnavailableReason.kPendingUsage:
                return 'Pending Usage';
            default:
                return 'Unknown';
        }
    }
    formatBytes(bytes) {
        const units = ['B', 'KB', 'MB', 'GB', 'TB'];
        let val = Number(bytes);
        let pow = 0;
        while (val >= 1024 && pow < units.length - 1) {
            val /= 1024;
            pow++;
        }
        return `${val.toFixed(1)} ${units[pow]}`;
    }
    getProgressValue(asset) {
        if (asset.bytesTotal > 0n) {
            return Number(asset.bytesDownloaded);
        }
        return asset.state === BrokerAssetState.kReady ? 1 : 0;
    }
    getProgressMax(asset) {
        if (asset.bytesTotal > 0n) {
            return Number(asset.bytesTotal);
        }
        return 1;
    }
    getProgressText(asset) {
        if (asset.bytesTotal > 0n) {
            return `${this.formatBytes(asset.bytesDownloaded)} / ` +
                `${this.formatBytes(asset.bytesTotal)}`;
        }
        return asset.state === BrokerAssetState.kReady ? '100%' : '0%';
    }
}
class AssetDownloadObserverImpl {
    element_;
    assetName_;
    receiver_;
    constructor(element_, assetName_) {
        this.element_ = element_;
        this.assetName_ = assetName_;
        this.receiver_ = new DownloadObserverReceiver(this);
    }
    getReceiver() {
        return this.receiver_;
    }
    onDownloadProgressUpdate(downloadedBytes, totalBytes) {
        this.element_.updateAssetProgress(this.assetName_, downloadedBytes, totalBytes);
    }
}
customElements.define(OnDeviceInternalsBrokerStateElement.is, OnDeviceInternalsBrokerStateElement);
