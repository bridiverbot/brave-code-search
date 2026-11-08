// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './app_list/app_list.js';
import './enterprise_policy_table/enterprise_policy_table.js';
import './event_list/event_list.js';
import './updater_state/updater_state.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { deduplicateEvents, isMergedHistoryEvent, mergeEvents, parseEvents, parsePolicySet, SCOPES, UpdaterProcessMap } from './event_history.js';
import { getKnownAppNamesById } from './known_apps.js';
import { browserProxyFactory } from './updater_ui.mojom-webui.js';
export var PageDataSource;
(function (PageDataSource) {
    // The page displays current information about the updater installations on
    // the users system.
    PageDataSource[PageDataSource["INSTALL"] = 0] = "INSTALL";
    // The page displays a snapshot of an updater installation given files it has
    // emitted (e.g. a updater_history.jsonl file or a chrome://support-tool zip).
    PageDataSource[PageDataSource["FILE"] = 1] = "FILE";
})(PageDataSource || (PageDataSource = {}));
export class UpdaterAppElement extends CrLitElement {
    static get is() {
        return 'updater-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            messages: { type: Array },
            userUpdaterState: { type: Object },
            systemUpdaterState: { type: Object },
            enterpriseCompanionState: { type: Object },
            updaterStateError: { type: Boolean },
            apps: { type: Array },
            appStateError: { type: Boolean },
            pageDataSource: {
                type: Number,
                reflect: true,
            },
            fileSelectionBannerLabel: { type: String },
            historyLoadError: {
                type: Boolean,
                reflect: true,
            },
            policies: { type: Object },
        };
    }
    #messages_accessor_storage = [];
    get messages() { return this.#messages_accessor_storage; }
    set messages(value) { this.#messages_accessor_storage = value; }
    #userUpdaterState_accessor_storage = null;
    get userUpdaterState() { return this.#userUpdaterState_accessor_storage; }
    set userUpdaterState(value) { this.#userUpdaterState_accessor_storage = value; }
    #systemUpdaterState_accessor_storage = null;
    get systemUpdaterState() { return this.#systemUpdaterState_accessor_storage; }
    set systemUpdaterState(value) { this.#systemUpdaterState_accessor_storage = value; }
    #enterpriseCompanionState_accessor_storage = null;
    get enterpriseCompanionState() { return this.#enterpriseCompanionState_accessor_storage; }
    set enterpriseCompanionState(value) { this.#enterpriseCompanionState_accessor_storage = value; }
    #updaterStateError_accessor_storage = false;
    get updaterStateError() { return this.#updaterStateError_accessor_storage; }
    set updaterStateError(value) { this.#updaterStateError_accessor_storage = value; }
    #apps_accessor_storage = [];
    get apps() { return this.#apps_accessor_storage; }
    set apps(value) { this.#apps_accessor_storage = value; }
    #appStateError_accessor_storage = false;
    get appStateError() { return this.#appStateError_accessor_storage; }
    set appStateError(value) { this.#appStateError_accessor_storage = value; }
    #pageDataSource_accessor_storage = PageDataSource.INSTALL;
    get pageDataSource() { return this.#pageDataSource_accessor_storage; }
    set pageDataSource(value) { this.#pageDataSource_accessor_storage = value; }
    #fileSelectionBannerLabel_accessor_storage = '';
    get fileSelectionBannerLabel() { return this.#fileSelectionBannerLabel_accessor_storage; }
    set fileSelectionBannerLabel(value) { this.#fileSelectionBannerLabel_accessor_storage = value; }
    #historyLoadError_accessor_storage = false;
    get historyLoadError() { return this.#historyLoadError_accessor_storage; }
    set historyLoadError(value) { this.#historyLoadError_accessor_storage = value; }
    #policies_accessor_storage = undefined;
    get policies() { return this.#policies_accessor_storage; }
    set policies(value) { this.#policies_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        if (this.pageDataSource === PageDataSource.INSTALL) {
            this.fetchInstallData();
        }
    }
    onLoadHistoryClick() {
        this.$.fileInput.click();
    }
    async onFileInputChange(e) {
        const fileInput = e.target;
        if (!fileInput.files || fileInput.files.length === 0) {
            return;
        }
        this.historyLoadError = false;
        const files = Array.from(fileInput.files);
        try {
            const records = await this.processHistoryFiles(files);
            const events = records.map(e => JSON.parse(e));
            this.fileSelectionBannerLabel =
                await PluralStringProxyImpl.getInstance().getPluralString('viewingHistoryFiles', files.length);
            this.computeStateFromHistory(events);
            this.pageDataSource = PageDataSource.FILE;
        }
        catch (err) {
            console.error('Failed to load history file(s)', err);
            this.historyLoadError = true;
        }
        finally {
            fileInput.value = '';
        }
    }
    async processHistoryFiles(files) {
        const processJSONL = (jsonl) => jsonl.trim()
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);
        const records = await Promise.all(files.map(async (file) => {
            if (/\.jsonl(\.old)?$/i.test(file.name)) {
                return processJSONL(await file.text());
            }
            if (file.name.toLowerCase().endsWith('.zip')) {
                const data = new Uint8Array(await file.arrayBuffer());
                const handle = Mojo.createSharedBuffer(data.byteLength).handle;
                const buffer = new Uint8Array(handle.mapBuffer(0, data.byteLength).buffer);
                buffer.set(data);
                const response = await browserProxyFactory.getInstance()
                    .handler.unzipUpdaterHistoryFiles({
                    sharedMemory: {
                        bufferHandle: handle,
                        size: data.byteLength,
                    },
                });
                return response.historyFileContents.flatMap(processJSONL);
            }
            throw new Error(`No handler available for ${file.name}`);
        }));
        return records.flat();
    }
    onCloseFileClick() {
        this.pageDataSource = PageDataSource.INSTALL;
        this.fileSelectionBannerLabel = '';
        this.historyLoadError = false;
        this.fetchInstallData();
    }
    fetchInstallData() {
        this.getAllUpdaterEvents().then(messages => this.messages = messages);
        this.getUpdaterStates()
            .then(response => {
            this.userUpdaterState = response.user;
            this.systemUpdaterState = response.system;
        })
            .catch(err => {
            this.updaterStateError = true;
            console.error('Failed to retrieve updater states', err);
        });
        this.getEnterpriseCompanionState()
            .then(response => {
            this.enterpriseCompanionState = response.state;
        })
            .catch((err) => {
            this.updaterStateError = true;
            console.error('Failed to retrieve enterprise companion state', err);
        });
        this.getAppStates().then(apps => this.apps = apps).catch((err) => {
            this.appStateError = true;
            console.error('Failed to retrieve application states', err);
        });
    }
    computeStateFromHistory(rawMessages) {
        this.messages = rawMessages;
        const { valid } = parseEvents(rawMessages);
        const events = deduplicateEvents(valid);
        const { paired, unpaired } = mergeEvents(events);
        const processMap = new UpdaterProcessMap(paired);
        const { sortedEventsWithDates } = processMap.sortEventsByDate(unpaired, paired);
        const knownApps = getKnownAppNamesById();
        const apps = [];
        let policies = undefined;
        for (const scope of SCOPES) {
            const latestPersistedData = sortedEventsWithDates.find((e) => e.eventType === 'PERSISTED_DATA' &&
                processMap.getUpdaterProcessForEvent(e)?.startEvent.scope ===
                    scope);
            if (latestPersistedData) {
                apps.push(...latestPersistedData.registeredApps.map(app => ({
                    appId: app.appId,
                    version: app.version,
                    cohort: app.cohort || null,
                    scope,
                    displayName: knownApps.get(app.appId.toLowerCase()) || app.appId,
                })));
            }
            const latestLoadPolicy = sortedEventsWithDates.find((e) => e.eventType === 'LOAD_POLICY' &&
                isMergedHistoryEvent(e) &&
                processMap.getUpdaterProcessForEvent(e)?.startEvent.scope ===
                    scope);
            if (latestLoadPolicy) {
                policies = latestLoadPolicy.endEvent.policySet;
            }
        }
        this.apps = apps;
        this.enterpriseCompanionState = null;
        this.systemUpdaterState = null;
        this.userUpdaterState = null;
        this.updaterStateError = false;
        this.appStateError = false;
        this.policies = policies;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('systemUpdaterState') &&
            this.pageDataSource === PageDataSource.INSTALL) {
            this.policies = this.computePoliciesFromInstall();
        }
    }
    computePoliciesFromInstall() {
        if (this.systemUpdaterState === null) {
            return undefined;
        }
        const policies = JSON.parse(this.systemUpdaterState.policies);
        try {
            return parsePolicySet({ policies }, 'policies');
        }
        catch (e) {
            console.warn(`Failed to parse policy set: ${e}. Message: ${policies}`);
            return undefined;
        }
    }
    async getAllUpdaterEvents() {
        const response = await browserProxyFactory.getInstance().handler.getAllUpdaterEvents();
        return response.events.map(message => JSON.parse(message))
            .filter(message => typeof message === 'object');
    }
    async getUpdaterStates() {
        return await browserProxyFactory.getInstance().handler.getUpdaterStates();
    }
    async getEnterpriseCompanionState() {
        return await browserProxyFactory.getInstance()
            .handler.getEnterpriseCompanionState();
    }
    async getAppStates() {
        const response = await browserProxyFactory.getInstance().handler.getAppStates();
        const knownApps = getKnownAppNamesById();
        const systemApps = response.systemApps.map(app => ({
            ...app,
            scope: 'SYSTEM',
            displayName: knownApps.get(app.appId.toLowerCase()) || app.appId,
        }));
        const userApps = response.userApps.map(app => ({
            ...app,
            scope: 'USER',
            displayName: knownApps.get(app.appId.toLowerCase()) || app.appId,
        }));
        return [...systemApps, ...userApps];
    }
}
customElements.define(UpdaterAppElement.is, UpdaterAppElement);
