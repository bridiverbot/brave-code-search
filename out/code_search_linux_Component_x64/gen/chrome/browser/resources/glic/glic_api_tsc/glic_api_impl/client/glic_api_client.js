// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertNotReached } from '//resources/js/assert.js';
import { ContentSettingsType } from '../../content_settings_types.mojom-webui.js';
import { enumFromClient, enumToClient } from '../../enum_conversions.js';
import { //
CaptureRegionObserverReceiver, //
PinCandidatesObserverReceiver, //
PromptType as PromptTypeMojo, //
ResponseStopCause as ResponseStopCauseMojo, //
SettingsPageField as SettingsPageFieldMojo, //
TabDataHandlerReceiver, //
TabFaviconHandlerReceiver, //
WebClientHandlerRemote, //
WebClientReceiver, //
 } from '../../glic.mojom-webui.js';
import { //
CaptureRegionErrorReason, //
ClientCapabilities, //
HostCapability, //
ResponseStopCause, //
 } from '../../glic_api/glic_api.js';
import { ObservableValue as ObservableValueImpl, Subject } from '../../observable.js';
import { GlicBrowserHostActor } from '../actor/actor_client.js';
import { GlicBrowserHostAnnotation } from '../annotation/annotation_client.js';
import { //
additionalContextToClient, //
bitmapN32ToRGBAImage, //
captureRegionResultToClient, //
conversationInfoFromClient, //
conversionSettings, //
counterAbuseVerdictFromClient, //
createTabOptionsFromClient, //
fileUploadPolicyStateToClient, //
focusedTabDataToClient, //
getPinCandidatesOptionsFromClient, //
idFromClient, //
idToClient, //
imageBytesResultToClient, //
invokeOptionsToClient, //
microphoneStatusToMojo, //
openPinnedTabPickerOptionsToMojo, //
optionalFromClient, //
pageMetadataToClient, //
panelOpeningDataToClient, //
panelStateToClient, //
pinCandidateToClient, //
pinTabsOptionsToMojo, //
replaceProperties, //
sendTabToSelfDeviceToClient, //
tabContextOptionsFromClient, //
tabContextToClient, //
tabDataToClient, //
timeDeltaFromClient, //
unpinTabsOptionsToMojo, //
urlFromClient, //
urlToClient, //
webClientModeToMojo, //
 } from '../conversions.js';
import { GlicBrowserHostExperimentalTriggering } from '../experimental_triggering/experimental_triggering_client.js';
import { GlicBrowserHostGeic } from '../geic/geic_client.js';
import { maybeWrapWithLogging } from '../mojo_logging.js';
import { ErrorWithReasonImpl } from '../request_types.js';
import { GlicBrowserHostSkills } from '../skills/skills_client.js';
import { GlicBrowserHostTools } from '../tools/tools_client.js';
import { assertNever } from '../transport/messaging.js';
import { GlicBrowserHostZeroStateSuggestions } from '../zero_state_suggestions/zero_state_suggestions_client.js';
import { createDelegationProxy } from './glic_client_common.js';
import { rgbaImageToBlob } from './image_utils.js';
import { TabObservable, TabObservableSet } from './observable_set_by_tab_id.js';
import { PanelOpenState } from './types.js';
// Web client side of the Glic API.
export class GlicHostRegistryImpl {
    host;
    async registerWebClient(webClient) {
        this.host = new GlicBrowserHostImpl(webClient);
        window.addEventListener('click', (e) => {
            const target = e.target?.closest?.('a');
            if (target && target.getAttribute('target') === '_blank' && target.href) {
                e.preventDefault();
                this.host?.getHandler().createTab(urlFromClient(target.href), {
                    openInBackground: false,
                    windowId: null,
                });
            }
        }, true);
        const clientCapabilities = webClient.getClientCapabilities?.() ?? new Set();
        await this.host.webClientCreated(clientCapabilities);
        let success = false;
        try {
            await webClient.initialize(this.host);
            success = true;
        }
        catch (e) {
            console.warn(e);
        }
        if (this.host) {
            this.host.webClientInitialized(success);
        }
    }
}
export class GlicBrowserHostImpl {
    webClient;
    actorClient;
    annotationClient;
    skillsClient;
    toolsClient;
    experimentalTriggeringClient = new GlicBrowserHostExperimentalTriggering();
    suggestionsClient;
    geicClient;
    chromeVersion;
    platform;
    formFactor;
    panelState = ObservableValueImpl.withNoValue();
    canAttachPanelValue = ObservableValueImpl.withNoValue();
    focusedTabStateV2 = ObservableValueImpl.withNoValue();
    // @deprecated Legacy settings no longer populated; returns undefined.
    // TODO(b/570016708): Remove once web client usages are eliminated.
    geminiEnterpriseSettings = ObservableValueImpl.withNoValue();
    zoomLevel = ObservableValueImpl.withNoValue();
    permissionStateMicrophone = ObservableValueImpl.withNoValue();
    permissionStateLocation = ObservableValueImpl.withNoValue();
    permissionStateTabContext = ObservableValueImpl.withNoValue();
    defaultTabContextPermission = ObservableValueImpl.withNoValue();
    enableDefaultTabContextSettingFeature = false;
    permissionStateOsLocation = ObservableValueImpl.withNoValue();
    closedCaptioningState = ObservableValueImpl.withNoValue();
    actuationOnWebState = ObservableValueImpl.withNoValue();
    fileUploadAllowedState = ObservableValueImpl.withNoValue();
    osHotkeyState = ObservableValueImpl.withNoValue();
    onboardingCompleted = ObservableValueImpl.withNoValue();
    panelActiveValue = ObservableValueImpl.withNoValue();
    isBrowserOpenValue = ObservableValueImpl.withNoValue();
    metrics;
    clientStorage;
    manuallyResizing = ObservableValueImpl.withValue(false);
    cachedUserProfile;
    enableCachedGetUserProfileInfo;
    pinnedTabs = ObservableValueImpl.withNoValue();
    pinCandidates;
    captureRegionObservable;
    cachedPinnedTabs = undefined;
    webClientReceiver;
    hostCapabilities = new Set();
    additionalContextSubject = new Subject();
    pageMetadataObservers = new Map();
    getTabByIdObservableSet;
    getTabFaviconByIdObservableSet;
    notifyPanelWillOpenCompleted = Promise.withResolvers();
    panelOpenState = PanelOpenState.CLOSED;
    handler;
    isDestroyed = false;
    constructor(webClient) {
        this.webClient = webClient;
        this.handler = maybeWrapWithLogging(new WebClientHandlerRemote(), { prefix: 'WebClientHandler' });
        this.handler.onConnectionError.addListener(() => {
            if (this.isDestroyed) {
                return;
            }
            console.warn(`Mojo connection error in glic host`);
        });
        const receiver = this.handler.$.bindNewPipeAndPassReceiver();
        receiver.bindInBrowser();
        this.actorClient = new GlicBrowserHostActor();
        this.annotationClient = new GlicBrowserHostAnnotation();
        this.skillsClient = new GlicBrowserHostSkills();
        this.suggestionsClient = new GlicBrowserHostZeroStateSuggestions();
        this.toolsClient = new GlicBrowserHostTools();
        this.geicClient = new GlicBrowserHostGeic();
        this.getTabByIdObservableSet = new TabDataObservableSet(this.handler);
        this.getTabFaviconByIdObservableSet =
            new TabFaviconObservableSet(this.handler);
        this.metrics = new GlicBrowserHostMetricsImpl(this.handler);
        this.clientStorage = new GlicClientStorageImpl(this.handler);
        const proxy = createDelegationProxy(this, [
            this.actorClient,
            this.annotationClient,
            this.skillsClient,
            this.suggestionsClient,
            this.toolsClient,
        ]);
        assertNever();
        return proxy;
    }
    isPanelOpen() {
        return this.panelOpenState === PanelOpenState.OPEN;
    }
    panelOpenStateChanged(state) {
        this.panelOpenState = state;
        if (state === PanelOpenState.CLOSED) {
            this.pinCandidates?.disconnectFromSource();
        }
        else {
            if (this.pinCandidates?.hasActiveSubscription()) {
                this.pinCandidates.connectToSource();
            }
        }
    }
    getHandler() {
        return this.handler;
    }
    destroy() {
        this.isDestroyed = true;
        this.pinCandidates?.setObsolete();
        this.actorClient.destroyActor();
        this.skillsClient.destroySkills();
        this.toolsClient.destroyTools();
        this.annotationClient.destroyAnnotation();
        this.geicClient.destroy();
        this.suggestionsClient.destroySuggestions();
        this.experimentalTriggeringClient.destroy();
        if (this.webClientReceiver) {
            this.webClientReceiver.$.close();
            this.webClientReceiver = undefined;
        }
    }
    async webClientCreated(clientCapabilities) {
        conversionSettings.omitFaviconInTabData =
            clientCapabilities.has(ClientCapabilities.IGNORES_TAB_DATA_FAVICONS);
        this.webClientReceiver = new WebClientReceiver(this);
        const { initialState } = await this.handler.webClientCreated(this.webClientReceiver.$.bindNewPipeAndPassRemote());
        conversionSettings.platform = enumToClient(initialState.platform);
        this.actorClient.initialize(initialState, this.handler);
        this.annotationClient.initialize(initialState, this.handler);
        this.skillsClient.initialize(initialState, this.handler);
        this.experimentalTriggeringClient.initialize(this.webClient, this.handler);
        this.suggestionsClient.initialize(initialState, this.handler);
        this.toolsClient.initialize(initialState, this.handler);
        this.geicClient.initialize(initialState, this.handler);
        const state = initialState;
        this.geminiEnterpriseSettings.assignAndSignal(state.geminiEnterpriseSettings ?? undefined);
        this.zoomLevel.assignAndSignal(state.zoomFactor);
        this.panelState.assignAndSignal(panelStateToClient(state.panelState));
        this.focusedTabStateV2.assignAndSignal(focusedTabDataToClient(state.focusedTabData));
        this.permissionStateMicrophone.assignAndSignal(state.microphonePermissionEnabled);
        this.permissionStateLocation.assignAndSignal(state.locationPermissionEnabled);
        if (state.enableDefaultTabContextSettingFeature) {
            this.permissionStateTabContext.assignAndSignal(state.defaultTabContextSettingEnabled);
        }
        else {
            this.permissionStateTabContext.assignAndSignal(state.tabContextPermissionEnabled);
        }
        this.defaultTabContextPermission.assignAndSignal(state.defaultTabContextSettingEnabled);
        this.enableDefaultTabContextSettingFeature =
            state.enableDefaultTabContextSettingFeature;
        this.permissionStateOsLocation.assignAndSignal(state.osLocationPermissionEnabled);
        this.canAttachPanelValue.assignAndSignal(state.canAttach);
        const chromeVersion = state.chromeVersion.components;
        this.chromeVersion = {
            major: chromeVersion[0] || 0,
            minor: chromeVersion[1] || 0,
            build: chromeVersion[2] || 0,
            patch: chromeVersion[3] || 0,
        };
        this.platform = enumToClient(state.platform);
        this.formFactor = enumToClient(state.formFactor);
        this.enableCachedGetUserProfileInfo = state.enableCachedGetUserProfileInfo;
        this.panelActiveValue.assignAndSignal(state.panelIsActive);
        this.isBrowserOpenValue.assignAndSignal(state.browserIsOpen);
        this.osHotkeyState.assignAndSignal({ hotkey: state.hotkey });
        this.closedCaptioningState.assignAndSignal(state.closedCaptioningSettingEnabled);
        this.actuationOnWebState.assignAndSignal(state.actuationOnWebSettingEnabled);
        this.fileUploadAllowedState.assignAndSignal(fileUploadPolicyStateToClient(state.fileUploadPolicyState));
        for (const capability of state.hostCapabilities) {
            this.hostCapabilities.add(enumToClient(capability));
        }
        this.actorClient.actOnWebCapabilityValue.assignAndSignal(state.canActOnWeb);
        this.onboardingCompleted.assignAndSignal(state.onboardingCompleted);
        if (state.enableClientStorage) {
            this.clientStorage.initialize(state.clientStorage);
        }
        else {
            this.getClientStorage = undefined;
        }
        // Set the method to undefined since it's gated behind a mojo
        // RuntimeFeature. Calling a such a method when the feature is disabled
        // results in a mojo pipe closure.
        if (!this.hostCapabilities.has(HostCapability.GET_MODEL_QUALITY_CLIENT_ID)) {
            // MOJO_RUNTIME_FEATURE_GATED GetModelQualityClientId
            this.getModelQualityClientId = undefined;
        }
        if (!state.enableZeroStateSuggestions) {
            this.getZeroStateSuggestionsForFocusedTab = undefined;
        }
        if (!state.enableDefaultTabContextSettingFeature) {
            this.getDefaultTabContextPermissionState = undefined;
        }
        if (!state.enableMaybeRefreshUserStatus) {
            this.maybeRefreshUserStatus = undefined;
        }
        if (!state.enableGetPageMetadata) {
            this.getPageMetadata = undefined;
        }
        if (!state.enableWebActuationSettingFeature) {
            this.getActuationOnWebSetting = undefined;
            this.setActuationOnWebSetting = undefined;
        }
        if (!state.enableCaptureRegion) {
            this.captureRegion = undefined;
            this.deleteCapturedRegion = undefined;
        }
        if (!state.enableActivateTab) {
            // MOJO_RUNTIME_FEATURE_GATED ActivateTab
            this.activateTab = undefined;
        }
        if (!state.enableGetTabById) {
            this.getTabById = undefined;
        }
        if (!state.enableOpenPasswordManagerSettingsPage) {
            this.openPasswordManagerSettingsPage = undefined;
        }
        if (!state.enableOpenContactInfoSettingsPage) {
            this.openContactInfoSettingsPage = undefined;
        }
        if (!state.enableGetTabFaviconById) {
            this.getTabFaviconById = undefined;
        }
        if (!state.enableProcessCounterAbuseVerdict) {
            this.processCounterAbuseVerdict = undefined;
        }
        if (!this.hostCapabilities.has(HostCapability.SEND_TAB_TO_SELF)) {
            // MOJO_RUNTIME_FEATURE_GATED GetSendTabToSelfDevices
            this.getSendTabToSelfDevices = undefined;
        }
    }
    webClientInitialized(success) {
        if (success) {
            this.handler.webClientInitialized();
        }
        else {
            this.handler.webClientInitializeFailed();
        }
    }
    // WebClientInterface implementation.
    async checkResponsive() {
        await this.webClient.checkResponsive?.();
    }
    async notifyPanelWillOpen(panelOpeningData) {
        let openPanelInfo;
        const clientOpeningData = panelOpeningDataToClient(panelOpeningData);
        try {
            const mergedArgument = Object.assign({}, clientOpeningData, clientOpeningData.panelState);
            const completedPromise = this.notifyPanelWillOpenCompleted;
            const result = await this.webClient.notifyPanelWillOpen?.(mergedArgument);
            completedPromise.resolve();
            if (result) {
                openPanelInfo = result;
            }
        }
        catch (e) {
            console.warn(e);
        }
        finally {
            this.panelOpenStateChanged(PanelOpenState.OPEN);
        }
        const openPanelInfoMojo = {
            webClientMode: webClientModeToMojo(openPanelInfo?.startingMode),
            panelSize: null,
            resizeDuration: timeDeltaFromClient(openPanelInfo?.resizeParams?.options?.durationMs),
            canUserResize: openPanelInfo?.canUserResize ?? true,
        };
        if (openPanelInfo?.resizeParams) {
            const size = {
                width: openPanelInfo?.resizeParams?.width,
                height: openPanelInfo?.resizeParams?.height,
            };
            openPanelInfoMojo.panelSize = size;
        }
        return { openPanelInfo: openPanelInfoMojo };
    }
    async notifyPanelWasClosed() {
        this.panelOpenStateChanged(PanelOpenState.CLOSED);
        try {
            this.notifyPanelWillOpenCompleted = Promise.withResolvers();
            await this.webClient.notifyPanelWasClosed?.();
        }
        catch (e) {
            console.warn(e);
        }
    }
    async invoke(options) {
        try {
            const clientOptions = invokeOptionsToClient(options);
            // Wait until notifyPanelWillOpen has resolved before invoking.
            await this.notifyPanelWillOpenCompleted.promise;
            await this.webClient.invoke?.(clientOptions);
        }
        catch (e) {
            console.warn(e);
        }
    }
    notifyPanelStateChange(panelState) {
        this.panelState.assignAndSignal(panelStateToClient(panelState));
    }
    notifyPanelActiveChange(panelActive) {
        this.panelActiveValue.assignAndSignal(panelActive);
    }
    notifyPanelCanAttachChange(canAttach) {
        this.canAttachPanelValue.assignAndSignal(canAttach);
    }
    // @deprecated
    // TODO(b/570016708): Remove once web client usages are eliminated.
    notifyGeminiEnterpriseSettingsChanged(settings) {
        this.geminiEnterpriseSettings.assignAndSignal(settings || undefined);
    }
    notifyMicrophonePermissionStateChanged(enabled) {
        this.permissionStateMicrophone.assignAndSignal(enabled);
    }
    async stopMicrophone() {
        await this.webClient.stopMicrophone?.();
    }
    notifyLocationPermissionStateChanged(enabled) {
        this.permissionStateLocation.assignAndSignal(enabled);
    }
    notifyTabContextPermissionStateChanged(enabled) {
        this.permissionStateTabContext.assignAndSignal(enabled);
    }
    notifyOsLocationPermissionStateChanged(enabled) {
        this.permissionStateOsLocation.assignAndSignal(enabled);
    }
    notifyClosedCaptioningSettingChanged(enabled) {
        this.closedCaptioningState.assignAndSignal(enabled);
    }
    notifyDefaultTabContextPermissionStateChanged(enabled) {
        this.defaultTabContextPermission.assignAndSignal(enabled);
    }
    notifyActuationOnWebSettingChanged(enabled) {
        this.actuationOnWebState.assignAndSignal(enabled);
    }
    notifyFileUploadStateChanged(state) {
        this.fileUploadAllowedState.assignAndSignal(fileUploadPolicyStateToClient(state));
    }
    notifyZoomLevelChanged(zoomFactor) {
        this.zoomLevel.assignAndSignal(zoomFactor);
    }
    notifyFocusedTabChanged(focusedTabData) {
        this.focusedTabStateV2.assignAndSignal(focusedTabDataToClient(focusedTabData));
    }
    notifyManualResizeChanged(resizing) {
        this.manuallyResizing.assignAndSignal(resizing);
    }
    notifyBrowserIsOpenChanged(browserIsOpen) {
        this.isBrowserOpenValue.assignAndSignal(browserIsOpen);
    }
    notifyInstanceActivationChanged(_instanceIsActive) { }
    notifyOsHotkeyStateChanged(hotkey) {
        this.osHotkeyState.assignAndSignal({ hotkey });
    }
    notifyPinnedTabsChanged(tabData) {
        this.cachedPinnedTabs = tabData.map((x) => tabDataToClient(x));
        this.pinnedTabs.assignAndSignal(this.cachedPinnedTabs);
    }
    notifyPinnedTabDataChanged(tabData) {
        if (!this.cachedPinnedTabs) {
            return;
        }
        const convertedTab = tabDataToClient(tabData);
        this.cachedPinnedTabs = this.cachedPinnedTabs.map((cachedTab) => {
            if (cachedTab.tabId === convertedTab.tabId) {
                return convertedTab;
            }
            return cachedTab;
        });
        this.pinnedTabs.assignAndSignal(this.cachedPinnedTabs);
    }
    notifyPageMetadataChanged(tabId, metadata) {
        const tabIdStr = idToClient(tabId);
        const observable = this.pageMetadataObservers.get(tabIdStr);
        if (!observable) {
            return;
        }
        const clientMetadata = pageMetadataToClient(metadata);
        if (clientMetadata) {
            observable.assignAndSignal(clientMetadata);
        }
        else {
            if (!observable.isStopped()) {
                observable.complete();
            }
            this.pageMetadataObservers.delete(tabIdStr);
        }
    }
    notifyAdditionalContext(context) {
        this.additionalContextSubject.next(additionalContextToClient(context));
    }
    notifyActOnWebCapabilityChanged(canActOnWeb) {
        this.actorClient.actOnWebCapabilityValue.assignAndSignal(canActOnWeb);
    }
    notifyOnboardingCompletedChanged(completed) {
        this.onboardingCompleted.assignAndSignal(completed);
    }
    notifyActorTaskListRowClicked(taskId) {
        this.actorClient.actorTaskListRowClickedSubject.next(taskId);
    }
    notifyClientStorageItemChanged(key, value) {
        this.clientStorage.onRemoteItemChanged(key, value);
    }
    notifyClientStorageCleared() {
        this.clientStorage.onRemoteCleared();
    }
    // GlicBrowserHost implementation.
    getChromeVersion() {
        return Promise.resolve(this.chromeVersion);
    }
    experimentalTriggering() {
        return this.experimentalTriggeringClient;
    }
    getPlatform() {
        return this.platform;
    }
    getFormFactor() {
        return this.formFactor;
    }
    async createTab(url, options = {}) {
        const response = await this.handler.createTab(urlFromClient(url), createTabOptionsFromClient(options));
        if (!response.tabData) {
            throw new Error('createTab: failed');
        }
        return tabDataToClient(response.tabData);
    }
    async activateTabWithUrl(exactUrl, options = {}) {
        const response = await this.handler.activateTabWithUrl(urlFromClient(exactUrl), {
            pattern: options.pattern ?? '',
            fallbackWindowId: idFromClient(options.fallbackWindowId),
        });
        if (!response.tabData) {
            throw new Error('activateTabWithUrl: failed');
        }
        return tabDataToClient(response.tabData);
    }
    openGlicSettingsPage(options) {
        this.handler.openGlicSettingsPage({
            highlightField: enumFromClient(options?.highlightField) ??
                SettingsPageFieldMojo.kNone,
        });
    }
    openPasswordManagerSettingsPage() {
        this.handler.openPasswordManagerSettingsPage();
    }
    openContactInfoSettingsPage() {
        this.handler.openContactInfoSettingsPage();
    }
    reportClientTransientError(abslStatus) {
        this.handler.reportClientTransientError(abslStatus);
    }
    processCounterAbuseVerdict(tabId, verdict) {
        const mojoVerdict = counterAbuseVerdictFromClient(verdict);
        this.handler.processCounterAbuseVerdict(idFromClient(tabId), mojoVerdict);
    }
    async closePanel() {
        this.handler.closePanel();
    }
    closePanelAndShutdown() {
        this.handler.closePanelAndShutdown();
    }
    attachPanel() {
        this.handler.attachPanel();
    }
    detachPanel() {
        if (this.hostCapabilities.has(HostCapability.NO_LIVE_MODE)) {
            throw new Error('NO_LIVE_MODE: detachPanel not supported');
        }
        this.handler.detachPanel();
    }
    showProfilePicker() {
        this.handler.showProfilePicker();
    }
    async getSendTabToSelfDevices() {
        const { devices } = await this.handler.getSendTabToSelfDevices();
        return devices.map(sendTabToSelfDeviceToClient);
    }
    async getModelQualityClientId() {
        const { modelQualityClientId } = await this.handler.getModelQualityClientId();
        return modelQualityClientId;
    }
    // @deprecated
    // TODO(b/570016708): Remove once web client usages are eliminated.
    getGeminiEnterpriseSettings() {
        return this.geminiEnterpriseSettings;
    }
    async switchConversation(info) {
        const { errorReason } = await this.handler.switchConversation(conversationInfoFromClient(info ?? {
            conversationId: '',
            conversationTitle: '',
            clientData: undefined,
        }));
        if (errorReason !== null) {
            throw new ErrorWithReasonImpl('switchConversation', errorReason.valueOf());
        }
    }
    async registerConversation(info) {
        const { errorReason } = await this.handler.registerConversation(conversationInfoFromClient(info));
        if (errorReason !== null) {
            throw new ErrorWithReasonImpl('registerConversation', errorReason.valueOf());
        }
    }
    async getContextFromFocusedTab(options) {
        const { result: { errorReason, tabContext } } = await this.handler.getContextFromFocusedTab(tabContextOptionsFromClient(options));
        if (!tabContext) {
            throw new Error(`getContextFromFocusedTab failed: ${errorReason}`);
        }
        return tabContextToClient(tabContext);
    }
    async setMaximumNumberOfPinnedTabs(requestedMax) {
        const { effectiveMax } = await this.handler.setMaximumNumberOfPinnedTabs(requestedMax >= 0 ? requestedMax : 0);
        return effectiveMax;
    }
    async getContextFromTab(tabId, options) {
        const { result: { errorReason, tabContext } } = await this.handler.getContextFromTab(idFromClient(tabId), tabContextOptionsFromClient(options));
        if (!tabContext) {
            throw new Error(`getContextFromTab failed: ${errorReason}`);
        }
        return tabContextToClient(tabContext);
    }
    async getImageBytesFromTab(tabId, documentId, domNodeId) {
        const { result: { errorReason, imageBytes } } = await this.handler.getImageBytesFromTab(idFromClient(tabId), documentId, domNodeId);
        if (!imageBytes) {
            throw new Error(`getImageBytesFromTab failed: ${errorReason}`);
        }
        const result = imageBytesResultToClient(imageBytes);
        if (!result) {
            throw new Error('Failed to get image bytes');
        }
        return result;
    }
    getTabById(tabId) {
        return this.getTabByIdObservableSet.getObservableByTabId(tabId);
    }
    getTabFaviconById(tabId) {
        return this.getTabFaviconByIdObservableSet.getObservableByTabId(tabId);
    }
    activateTab(tabId) {
        this.handler.activateTab(idFromClient(tabId));
    }
    onModeChange(newMode) {
        this.handler.onModeChange(webClientModeToMojo(newMode));
    }
    onMicrophoneStatusChange(status) {
        this.handler.onMicrophoneStatusChange(microphoneStatusToMojo(status));
    }
    setErrorDialogState(shownDialogType) {
        this.handler.clientErrorDialogStateChanged(enumFromClient(shownDialogType));
        // TODO(b/506142920): Avoid showing error panels to the user if it is
        // presented while the panel is backgrounded. Automatically reload the
        // page instead.
    }
    resizeWindow(width, height, options) {
        return this.handler.resizeWidget({ width, height }, timeDeltaFromClient(options?.durationMs));
    }
    async enableDragResize(enabled) {
        this.handler.enableDragResize(enabled);
    }
    captureRegion(params) {
        if (this.captureRegionObservable) {
            this.captureRegionObservable.complete();
        }
        this.captureRegionObservable =
            new CaptureRegionObservable(this.handler, params);
        return this.captureRegionObservable;
    }
    deleteCapturedRegion(tabId, regionId) {
        this.handler.deleteCapturedRegion(idFromClient(tabId), regionId);
    }
    async setMinimumWidgetSize(width, height) {
        this.handler.setMinimumPanelSize({ width, height });
    }
    getPanelState() {
        return this.panelState;
    }
    panelActive() {
        return this.panelActiveValue;
    }
    canAttachPanel() {
        return this.canAttachPanelValue;
    }
    isBrowserOpen() {
        return this.isBrowserOpenValue;
    }
    getFocusedTabStateV2() {
        return this.focusedTabStateV2;
    }
    getZoomLevel() {
        return this.zoomLevel;
    }
    getMicrophonePermissionState() {
        return this.permissionStateMicrophone;
    }
    getLocationPermissionState() {
        return this.permissionStateLocation;
    }
    getTabContextPermissionState() {
        return this.permissionStateTabContext;
    }
    getDefaultTabContextPermissionState() {
        return this.defaultTabContextPermission;
    }
    getOsLocationPermissionState() {
        return this.permissionStateOsLocation;
    }
    getClosedCaptioningSetting() {
        return this.closedCaptioningState;
    }
    getActuationOnWebSetting() {
        return this.actuationOnWebState;
    }
    getFileUploadAllowedCapability() {
        return this.fileUploadAllowedState;
    }
    setMicrophonePermissionState(enabled) {
        return this.handler.setMicrophonePermissionState(enabled);
    }
    setLocationPermissionState(enabled) {
        return this.handler.setLocationPermissionState(enabled);
    }
    setTabContextPermissionState(enabled) {
        if (this.enableDefaultTabContextSettingFeature) {
            this.permissionStateTabContext.assignAndSignal(enabled);
            return Promise.resolve();
        }
        return this.handler.setTabContextPermissionState(enabled);
    }
    setClosedCaptioningSetting(enabled) {
        return this.handler.setClosedCaptioningSetting(enabled);
    }
    setContextAccessIndicator(show) {
        this.handler.setContextAccessIndicator(show);
    }
    setActuationOnWebSetting(enabled) {
        return this.handler.setActuationOnWebSetting(enabled);
    }
    async getUserProfileInfo() {
        return this.enableCachedGetUserProfileInfo ? this.fetchUserProfileCached() :
            this.fetchUserProfileDirect();
    }
    async fetchUserProfileDirect() {
        const { profileInfo } = await this.handler.getUserProfileInfo();
        if (!profileInfo) {
            throw new Error('getUserProfileInfo failed');
        }
        const avatarIcon = profileInfo.avatarIcon ?
            bitmapN32ToRGBAImage(profileInfo.avatarIcon) :
            undefined;
        return replaceProperties(profileInfo, {
            avatarIcon: async () => avatarIcon && Promise.resolve(rgbaImageToBlob(avatarIcon)),
        });
    }
    async fetchUserProfileCached() {
        if (this.cachedUserProfile) {
            return this.cachedUserProfile;
        }
        this.cachedUserProfile = (async () => {
            try {
                const { profileInfo } = await this.handler.getUserProfileInfo();
                if (!profileInfo) {
                    throw new Error('getUserProfileInfo failed');
                }
                let avatarIcon = profileInfo.avatarIcon ?
                    bitmapN32ToRGBAImage(profileInfo.avatarIcon) :
                    undefined;
                profileInfo.avatarIcon = null;
                let blobPromise;
                return replaceProperties(profileInfo, {
                    avatarIcon: () => {
                        if (blobPromise) {
                            return blobPromise;
                        }
                        if (!avatarIcon) {
                            blobPromise = Promise.resolve(undefined);
                            return blobPromise;
                        }
                        const newBlob = rgbaImageToBlob(avatarIcon);
                        // Clear memory after conversion
                        avatarIcon = undefined;
                        blobPromise = Promise.resolve(newBlob);
                        return blobPromise;
                    },
                });
            }
            catch (e) {
                this.cachedUserProfile = undefined;
                throw e;
            }
        })();
        return this.cachedUserProfile;
    }
    async refreshSignInCookies() {
        const { success } = await this.handler.syncCookies();
        if (!success) {
            throw Error('refreshSignInCookies failed');
        }
    }
    setAudioDucking(enabled) {
        this.handler.setAudioDucking(enabled);
    }
    getMetrics() {
        return this.metrics;
    }
    getClientStorage() {
        return this.clientStorage;
    }
    getGeicClient() {
        return this.geicClient;
    }
    setSyntheticExperimentState(trialName, groupName) {
        this.handler.setSyntheticExperimentState(trialName, groupName);
    }
    openOsPermissionSettingsMenu(permission) {
        // Warning: calling openOsPermissionSettingsMenu with unsupported content
        // setting type will terminate the render process (bad mojo message).
        // Update GlicWebClientHandler:OpenOsPermissionSettingsMenu with any new
        // types.
        switch (permission) {
            case 'media':
                this.handler.openOsPermissionSettingsMenu(ContentSettingsType.MEDIASTREAM_MIC);
                break;
            case 'geolocation':
                this.handler.openOsPermissionSettingsMenu(ContentSettingsType.GEOLOCATION);
                break;
            default:
                this.handler.openOsPermissionSettingsMenu(ContentSettingsType.COOKIES);
                break;
        }
    }
    async getOsMicrophonePermissionStatus() {
        const { enabled } = await this.handler.getOsMicrophonePermissionStatus();
        return enabled;
    }
    isManuallyResizing() {
        return this.manuallyResizing;
    }
    getOsHotkeyState() {
        return this.osHotkeyState;
    }
    getPinnedTabs() {
        return this.pinnedTabs;
    }
    async pinTabs(tabIds, options) {
        const { pinnedAll } = await this.handler.pinTabs(tabIds.map((x) => idFromClient(x)), pinTabsOptionsToMojo(options));
        return pinnedAll;
    }
    async unpinTabs(tabIds, options) {
        const { unpinnedAll } = await this.handler.unpinTabs(tabIds.map((x) => idFromClient(x)), unpinTabsOptionsToMojo(options));
        return unpinnedAll;
    }
    unpinAllTabs(options) {
        this.handler.unpinAllTabs(unpinTabsOptionsToMojo(options));
    }
    openPinnedTabPicker(options) {
        return this.handler.openPinnedTabPicker(openPinnedTabPickerOptionsToMojo(options));
    }
    getPinCandidates(options) {
        this.pinCandidates?.setObsolete();
        return this.pinCandidates = new PinCandidatesObservable(this, options);
    }
    async getZeroStateSuggestionsForFocusedTab(isFirstRun) {
        const zeroStateResult = await this.handler.getZeroStateSuggestionsForFocusedTab(optionalFromClient(isFirstRun));
        const zeroStateData = zeroStateResult.suggestions;
        if (!zeroStateData) {
            return {
                suggestions: [],
                tabId: '',
                url: '',
            };
        }
        return {
            tabId: idToClient(zeroStateData.tabId),
            url: urlToClient(zeroStateData.url),
            suggestions: zeroStateData.suggestions,
        };
    }
    maybeRefreshUserStatus() {
        this.cachedUserProfile = undefined;
        this.handler.maybeRefreshUserStatus();
    }
    getAdditionalContext() {
        return this.additionalContextSubject;
    }
    getHostCapabilities() {
        return this.hostCapabilities;
    }
    getPageMetadata(tabId, names) {
        if (this.pageMetadataObservers.has(tabId)) {
            // Currently, we assume that names do not change and keep only
            // one observer per tabId.
            return this.pageMetadataObservers.get(tabId);
        }
        if (names.length === 0) {
            throw Error('names must not be empty');
        }
        const observableValue = ObservableValueImpl.withNoValue(async (isActive) => {
            // If the client subscribes to an Observable with an invalid tabId,
            // it will emit nothing, even if the tab later becomes valid.
            const { success } = await this.handler.subscribeToPageMetadata(idFromClient(tabId), isActive ? names : []);
            if (!success) {
                if (!observableValue.isStopped()) {
                    observableValue.complete();
                }
                this.pageMetadataObservers.delete(tabId);
            }
        });
        this.pageMetadataObservers.set(tabId, observableValue);
        return observableValue;
    }
    setOnboardingCompleted() {
        this.handler.setOnboardingCompleted();
    }
    isOnboardingCompleted() {
        return this.onboardingCompleted;
    }
}
class GlicBrowserHostMetricsImpl {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    onOptinImpression() {
        this.handler.onOptinImpression();
    }
    onUserInputSubmitted(mode, promptType) {
        this.handler.onUserInputSubmitted(webClientModeToMojo(mode), enumFromClient(promptType) ?? PromptTypeMojo.kUnspecified);
    }
    onReaction(reactionType) {
        this.handler.onReaction(reactionType);
    }
    onPerformActionResultSubmitted(isRetry) {
        this.handler.onActionSubmitted(isRetry ?? false);
    }
    onContextUploadStarted() {
        this.handler.onContextUploadStarted();
    }
    onContextUploadCompleted() {
        this.handler.onContextUploadCompleted();
    }
    onResponseStarted() {
        this.handler.onResponseStarted();
    }
    onResponseStopped(details) {
        let cause;
        switch (details?.cause) {
            case undefined:
                cause = ResponseStopCauseMojo.kUnknown;
                break;
            case ResponseStopCause.USER:
                cause = ResponseStopCauseMojo.kUser;
                break;
            case ResponseStopCause.OTHER:
                cause = ResponseStopCauseMojo.kOther;
                break;
            default:
                assertNotReached();
        }
        this.handler.onResponseStopped({ cause });
    }
    onSessionTerminated() {
        this.handler.onSessionTerminated();
    }
    onResponseRated(positive) {
        this.handler.onResponseRated(positive);
    }
    onClosedCaptionsShown() {
        this.handler.onClosedCaptionsShown();
    }
    onTurnCompleted(model, duration) {
        this.handler.onTurnCompleted(model, timeDeltaFromClient(duration));
    }
    onRecordUseCounter(counter) {
        // Since the frontend can contain a newer version than what Chrome is
        // built against, we use a sparse histogram.
        this.handler.recordSparseValue('Glic.Api.UseCounter', counter);
    }
}
export class GlicClientStorageImpl {
    handler;
    storage = new Map();
    // While `GlicWebClientHandler` already suppresses echo notifications on the
    // originating handler, `pendingClears` and `pendingKeyMutations` guard
    // against stale in-flight notifications from other writers arriving before
    // the browser processes this client's mutation (at the tradeoff of
    // potentially ignoring a concurrent remote mutation that occurs before the
    // `WebClientHandler` reply resolves across the separate Mojo pipe).
    pendingClears = 0;
    pendingKeyMutations = new Map();
    constructor(handler) {
        this.handler = handler;
    }
    initialize(initialStorage) {
        this.storage.clear();
        for (const [k, v] of Object.entries(initialStorage)) {
            this.storage.set(k, v);
        }
    }
    onRemoteItemChanged(key, value) {
        if (this.pendingClears > 0) {
            return;
        }
        const pending = this.pendingKeyMutations.get(key);
        if (pending && pending.count > 0) {
            return;
        }
        if (value !== null) {
            this.storage.set(key, value);
        }
        else {
            this.storage.delete(key);
        }
    }
    onRemoteCleared() {
        this.storage.clear();
        for (const [k, pending] of this.pendingKeyMutations.entries()) {
            if (pending.count > 0 && pending.latestValue !== null) {
                this.storage.set(k, pending.latestValue);
            }
        }
    }
    get length() {
        return this.storage.size;
    }
    key(index) {
        if (index < 0 || index >= this.storage.size) {
            return null;
        }
        return Array.from(this.storage.keys())[index] ?? null;
    }
    getItem(key) {
        return this.storage.get(key) ?? null;
    }
    setItem(key, value) {
        this.storage.set(key, value);
        this.enqueueKeyMutation(key, value);
    }
    removeItem(key) {
        this.storage.delete(key);
        this.enqueueKeyMutation(key, null);
    }
    clear() {
        this.storage.clear();
        this.pendingKeyMutations.clear();
        this.pendingClears++;
        this.handler.clearClientStorage().finally(() => {
            this.pendingClears = Math.max(0, this.pendingClears - 1);
        });
    }
    enqueueKeyMutation(key, value) {
        const existing = this.pendingKeyMutations.get(key);
        const entry = existing ?? { count: 0, latestValue: value };
        entry.count++;
        entry.latestValue = value;
        if (!existing) {
            this.pendingKeyMutations.set(key, entry);
        }
        this.handler.setClientStorageItem(key, value).finally(() => {
            entry.count--;
            if (entry.count <= 0 && this.pendingKeyMutations.get(key) === entry) {
                this.pendingKeyMutations.delete(key);
            }
        });
    }
}
export class CaptureRegionObservable extends ObservableValueImpl {
    handler;
    params;
    receiver;
    constructor(handler, params) {
        super(false);
        this.handler = handler;
        this.params = params;
    }
    close() {
        this.receiver?.$.close();
        this.receiver = undefined;
    }
    activeSubscriptionChanged(hasActiveSubscription) {
        super.activeSubscriptionChanged(hasActiveSubscription);
        if (this.isStopped()) {
            return;
        }
        if (hasActiveSubscription) {
            this.close();
            this.receiver = new CaptureRegionObserverReceiver(this);
            this.receiver.onConnectionError.addListener(() => {
                if (!this.isStopped()) {
                    this.processError(CaptureRegionErrorReason.UNKNOWN);
                }
            });
            const remote = this.receiver.$.bindNewPipeAndPassRemote();
            this.handler.captureRegion(remote, this.params ? {
                tabId: idFromClient(this.params.tabId),
                options: tabContextOptionsFromClient(this.params.options),
            } :
                null);
        }
        else {
            this.complete();
        }
    }
    error(e) {
        if (this.isStopped()) {
            return;
        }
        super.error(e);
    }
    complete() {
        if (this.isStopped()) {
            return;
        }
        super.complete();
        this.close();
    }
    onUpdate(result, reason) {
        if (this.isStopped()) {
            return;
        }
        const captureResult = captureRegionResultToClient(result);
        if (captureResult) {
            this.assignAndSignal(captureResult);
        }
        else {
            const errorReason = reason !== null ?
                enumToClient(reason) :
                CaptureRegionErrorReason.UNKNOWN;
            this.processError(errorReason);
        }
    }
    processError(reason) {
        if (this.isStopped()) {
            return;
        }
        this.error(new ErrorWithReasonImpl('captureRegion', reason));
        this.close();
    }
}
// TODO(harringtond): Instead of watching for panel state changes in typescript,
// we should probably just have c++ code not send updates when the panel is not
// visible.
class PinCandidatesObservable extends ObservableValueImpl {
    host;
    options;
    isObsolete = false;
    isConnected = false;
    receiver;
    constructor(host, options) {
        super(false);
        this.host = host;
        this.options = options;
    }
    activeSubscriptionChanged(hasActiveSubscription) {
        super.activeSubscriptionChanged(hasActiveSubscription);
        if (this.isObsolete) {
            console.warn(`getPinCandidates() observable is in use while obsolete.`);
            return;
        }
        if (hasActiveSubscription) {
            if (this.host.isPanelOpen()) {
                this.connectToSource();
            }
        }
        else {
            this.disconnectFromSource();
        }
    }
    connectToSource() {
        if (this.isObsolete || this.isConnected) {
            return;
        }
        const handler = this.host.getHandler();
        this.isConnected = true;
        this.receiver = new PinCandidatesObserverReceiver(this);
        handler.subscribeToPinCandidates(getPinCandidatesOptionsFromClient(this.options), this.receiver.$.bindNewPipeAndPassRemote());
    }
    disconnectFromSource() {
        if (!this.isConnected) {
            return;
        }
        this.isConnected = false;
        this.receiver?.$.close();
        this.receiver = undefined;
    }
    onPinCandidatesChanged(candidates) {
        this.assignAndSignal(candidates.map(c => pinCandidateToClient(c)));
    }
    // Mark this observable as obsolete. It should not be used any further.
    // Only one PinCandidatesObservable is active at one time.
    setObsolete() {
        if (this.hasActiveSubscription()) {
            console.warn(`getPinCandidates() observable was made obsolete with subscribers.`);
        }
        this.isObsolete = true;
        this.disconnectFromSource();
    }
}
export class TabDataObservableSet extends TabObservableSet {
    constructor(handler) {
        super((tabId, onComplete) => new TabDataObservable(tabId, handler, onComplete));
    }
}
export class TabDataObservable extends TabObservable {
    handler;
    receiver;
    constructor(tabId, handler, onComplete) {
        super(tabId, onComplete);
        this.handler = handler;
    }
    isConnected() {
        return this.receiver !== undefined;
    }
    connectToSource() {
        this.receiver = new TabDataHandlerReceiver(this);
        this.receiver.onConnectionError.addListener(() => {
            this.complete();
        });
        this.handler.subscribeToTabData(idFromClient(this.tabId), this.receiver.$.bindNewPipeAndPassRemote());
    }
    disconnectFromSource() {
        this.receiver?.$.close();
        this.receiver = undefined;
    }
    onTabDataChanged(tabData) {
        if (this.isStopped()) {
            return;
        }
        this.assignAndSignal(tabDataToClient(tabData));
    }
}
export class TabFaviconObservableSet extends TabObservableSet {
    constructor(handler) {
        super((tabId, onComplete) => new TabFaviconObservable(tabId, handler, onComplete));
    }
}
export class TabFaviconObservable extends TabObservable {
    handler;
    receiver;
    constructor(tabId, handler, onComplete) {
        super(tabId, onComplete);
        this.handler = handler;
    }
    isConnected() {
        return this.receiver !== undefined;
    }
    connectToSource() {
        this.receiver = new TabFaviconHandlerReceiver(this);
        this.receiver.onConnectionError.addListener(() => {
            this.complete();
        });
        this.handler.subscribeToTabFavicon(idFromClient(this.tabId), this.receiver.$.bindNewPipeAndPassRemote());
    }
    disconnectFromSource() {
        this.receiver?.$.close();
        this.receiver = undefined;
    }
    onTabFaviconChanged(favicon) {
        if (this.isStopped()) {
            return;
        }
        let blob;
        if (favicon) {
            const rgba = bitmapN32ToRGBAImage(favicon);
            if (rgba) {
                blob = rgbaImageToBlob(rgba);
            }
        }
        this.assignAndSignal(blob);
    }
}
