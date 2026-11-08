// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../enterprise_policy_table/enterprise_policy_table.js';
import '../icons.html.js';
import '../scope_icon.js';
import './raw_event_details.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getAppId, getUpdateOutcome, isMergedHistoryEvent } from '../event_history.js';
import { loadTimeData } from '../i18n_setup.js';
import { getKnownAppNamesById } from '../known_apps.js';
import { formatDateLong, formatDuration } from '../tools.js';
import { getUpdaterErrorDescription } from '../updater_errors.js';
import { getCss } from './event_list_item.css.js';
import { getHtml } from './event_list_item.html.js';
// Prefix included in Omaha responses which prevent browsers from interpreting
// them as JavaScript. The content following the prefix is expected to be valid
// JSON.
const SAFE_JSON_PREFIX = ')]}\'';
/**
 * An item in the event list, representing a single event.
 */
export class EventListItemElement extends CrLitElement {
    static get is() {
        return 'event-list-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            event: { type: Object },
            eventDate: { type: Object },
            processMap: { type: Object },
            policies: { type: Object },
            expanded: { type: Boolean, notify: true },
            status: { type: String, reflect: true },
            scope: { type: String, reflect: true },
            appId: { type: String },
            appLabel: { type: String },
            formattedDate: { type: String },
            formattedDuration: { type: String },
            errors: { type: Array },
            omahaRequest: { type: Object },
            omahaResponse: { type: Object },
            nextVersion: { type: String },
            updaterVersion: { type: String },
            commandLine: { type: String },
            eventSummaryIcon: { type: String },
            eventSummary: { type: String },
        };
    }
    #event_accessor_storage = undefined;
    get event() { return this.#event_accessor_storage; }
    set event(value) { this.#event_accessor_storage = value; }
    #eventDate_accessor_storage = undefined;
    get eventDate() { return this.#eventDate_accessor_storage; }
    set eventDate(value) { this.#eventDate_accessor_storage = value; }
    #processMap_accessor_storage = undefined;
    get processMap() { return this.#processMap_accessor_storage; }
    set processMap(value) { this.#processMap_accessor_storage = value; }
    #policies_accessor_storage = undefined;
    get policies() { return this.#policies_accessor_storage; }
    set policies(value) { this.#policies_accessor_storage = value; }
    #expanded_accessor_storage = false;
    get expanded() { return this.#expanded_accessor_storage; }
    set expanded(value) { this.#expanded_accessor_storage = value; }
    #status_accessor_storage = '';
    get status() { return this.#status_accessor_storage; }
    set status(value) { this.#status_accessor_storage = value; }
    #scope_accessor_storage = undefined;
    get scope() { return this.#scope_accessor_storage; }
    set scope(value) { this.#scope_accessor_storage = value; }
    #appId_accessor_storage = undefined;
    get appId() { return this.#appId_accessor_storage; }
    set appId(value) { this.#appId_accessor_storage = value; }
    #appLabel_accessor_storage = undefined;
    get appLabel() { return this.#appLabel_accessor_storage; }
    set appLabel(value) { this.#appLabel_accessor_storage = value; }
    #formattedDate_accessor_storage = undefined;
    get formattedDate() { return this.#formattedDate_accessor_storage; }
    set formattedDate(value) { this.#formattedDate_accessor_storage = value; }
    #formattedDuration_accessor_storage = undefined;
    get formattedDuration() { return this.#formattedDuration_accessor_storage; }
    set formattedDuration(value) { this.#formattedDuration_accessor_storage = value; }
    #errors_accessor_storage = [];
    get errors() { return this.#errors_accessor_storage; }
    set errors(value) { this.#errors_accessor_storage = value; }
    #omahaRequest_accessor_storage = undefined;
    get omahaRequest() { return this.#omahaRequest_accessor_storage; }
    set omahaRequest(value) { this.#omahaRequest_accessor_storage = value; }
    #omahaResponse_accessor_storage = undefined;
    get omahaResponse() { return this.#omahaResponse_accessor_storage; }
    set omahaResponse(value) { this.#omahaResponse_accessor_storage = value; }
    #nextVersion_accessor_storage = undefined;
    get nextVersion() { return this.#nextVersion_accessor_storage; }
    set nextVersion(value) { this.#nextVersion_accessor_storage = value; }
    #updaterVersion_accessor_storage = undefined;
    get updaterVersion() { return this.#updaterVersion_accessor_storage; }
    set updaterVersion(value) { this.#updaterVersion_accessor_storage = value; }
    #commandLine_accessor_storage = undefined;
    get commandLine() { return this.#commandLine_accessor_storage; }
    set commandLine(value) { this.#commandLine_accessor_storage = value; }
    #eventSummaryIcon_accessor_storage = undefined;
    get eventSummaryIcon() { return this.#eventSummaryIcon_accessor_storage; }
    set eventSummaryIcon(value) { this.#eventSummaryIcon_accessor_storage = value; }
    #eventSummary_accessor_storage = undefined;
    get eventSummary() { return this.#eventSummary_accessor_storage; }
    set eventSummary(value) { this.#eventSummary_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('event')) {
            this.expanded = false;
            if (this.event !== undefined) {
                this.appId = getAppId(this.event);
                this.appLabel = this.computeAppLabel();
                this.formattedDate = this.computeFormattedDate();
                this.formattedDuration = this.computeFormattedDuration();
                this.errors = this.computeErrors();
                this.status = this.computeStatus();
                this.omahaRequest = this.computeOmahaRequest();
                this.omahaResponse = this.computeOmahaResponse();
                this.nextVersion = this.computeNextVersion();
                this.commandLine = this.computeCommandLine();
                this.eventSummaryIcon = this.computeEventSummaryIcon();
                this.eventSummary = this.getEventSummary(this.event);
            }
        }
        if (changedProperties.has('event') || changedProperties.has('processMap')) {
            this.updaterVersion = this.computeUpdaterVersion();
            this.scope = this.computeScope();
        }
    }
    expand() {
        this.expanded = true;
    }
    collapse() {
        this.expanded = false;
    }
    onExpandedChanged(e) {
        this.expanded = e.detail.value;
    }
    /**
     * Parses a base64-encoded string as JSON, discarding the `SAFE_JSON_PREFIX`
     * if present.
     */
    base64ToJson(content) {
        try {
            let decodedContent = atob(content);
            if (decodedContent.startsWith(SAFE_JSON_PREFIX)) {
                decodedContent = decodedContent.substring(SAFE_JSON_PREFIX.length);
            }
            return JSON.parse(decodedContent);
        }
        catch (e) {
            return undefined;
        }
    }
    computeScope() {
        if (this.event === undefined || this.processMap === undefined) {
            return undefined;
        }
        const process = this.processMap.getUpdaterProcessForEvent(this.event);
        assert(process !== undefined);
        return process.startEvent.scope;
    }
    computeAppLabel() {
        return this.appId !== undefined ?
            getKnownAppNamesById().get(this.appId.toLowerCase()) ??
                this.appId.toUpperCase() :
            loadTimeData.getString('internal');
    }
    computeFormattedDate() {
        return this.eventDate ? formatDateLong(this.eventDate) : undefined;
    }
    computeFormattedDuration() {
        if (this.event === undefined || !isMergedHistoryEvent(this.event)) {
            return undefined;
        }
        let remaining = Math.floor((this.event.endEvent.deviceUptime -
            this.event.startEvent.deviceUptime) /
            1000000);
        if (remaining === 0) {
            return undefined;
        }
        const seconds = remaining % 60;
        remaining = Math.floor(remaining / 60);
        const minutes = remaining % 60;
        remaining = Math.floor(remaining / 60);
        const hours = remaining % 24;
        remaining = Math.floor(remaining / 24);
        const days = remaining;
        return loadTimeData.getStringF('duration', formatDuration(days, hours, minutes, seconds));
    }
    computeErrors() {
        if (this.event === undefined) {
            return [];
        }
        const errors = isMergedHistoryEvent(this.event) ?
            [...this.event.startEvent.errors, ...this.event.endEvent.errors] :
            this.event.errors;
        return errors.map(error => getUpdaterErrorDescription(error));
    }
    computeStatus() {
        if (this.event === undefined) {
            return '';
        }
        if (this.errors.length > 0) {
            return 'error';
        }
        if (this.event.eventType === 'UPDATE' && isMergedHistoryEvent(this.event)) {
            const updateOutcome = getUpdateOutcome(this.event.endEvent);
            if (updateOutcome === 'UPDATED') {
                return 'success';
            }
            if (updateOutcome === 'UPDATE_ERROR') {
                return 'error';
            }
        }
        return '';
    }
    computeOmahaRequest() {
        if (this.event === undefined || !isMergedHistoryEvent(this.event) ||
            this.event.eventType !== 'POST_REQUEST' ||
            this.event.startEvent.request.length === 0) {
            return undefined;
        }
        const json = this.base64ToJson(this.event.startEvent.request);
        return json && json['request'] ? json : undefined;
    }
    computeOmahaResponse() {
        if (this.event === undefined || !isMergedHistoryEvent(this.event) ||
            this.event.eventType !== 'POST_REQUEST' ||
            this.event.endEvent.response === undefined ||
            this.event.endEvent.response.length === 0) {
            return undefined;
        }
        const json = this.base64ToJson(this.event.endEvent.response);
        return json !== undefined && json['response'] ? json : undefined;
    }
    computeNextVersion() {
        if (this.event === undefined || !isMergedHistoryEvent(this.event) ||
            this.event.eventType !== 'UPDATE') {
            return undefined;
        }
        return this.event.endEvent.nextVersion;
    }
    computeUpdaterVersion() {
        if (this.event === undefined || this.processMap === undefined) {
            return undefined;
        }
        return this.processMap.getUpdaterProcessForEvent(this.event)
            ?.startEvent.updaterVersion;
    }
    computeCommandLine() {
        if (this.event === undefined || !isMergedHistoryEvent(this.event) ||
            (this.event.eventType !== 'UPDATER_PROCESS' &&
                this.event.eventType !== 'APP_COMMAND')) {
            return undefined;
        }
        return this.event.startEvent.commandLine;
    }
    computeEventSummaryIcon() {
        if (this.event === undefined || !isMergedHistoryEvent(this.event)) {
            return undefined;
        }
        switch (this.event.eventType) {
            case 'UPDATE':
                switch (getUpdateOutcome(this.event)) {
                    case 'UPDATED':
                        return 'cr:check-circle';
                    case 'NO_UPDATE':
                        return 'cr:sync';
                    case 'UPDATE_ERROR':
                        return 'cr:warning-filled';
                    default:
                        return undefined;
                }
            default:
                return undefined;
        }
    }
    getInstallSummary(event) {
        return event.endEvent.version !== undefined ?
            loadTimeData.getStringF('installSummary', event.endEvent.version) :
            undefined;
    }
    getUninstallSummary(event) {
        return loadTimeData.getStringF('uninstallSummary', event.startEvent.version, event.startEvent.reason);
    }
    getQualifySummary(event) {
        return loadTimeData.getString(event.endEvent.qualified ? 'qualificationSucceeded' :
            'qualificationFailed');
    }
    getActivateSummary(event) {
        return loadTimeData.getString(event.endEvent.activated ? 'activationSucceeded' : 'activationFailed');
    }
    getPostRequestSummary() {
        return (this.omahaRequest !== undefined ||
            this.omahaResponse !== undefined) ?
            loadTimeData.getString('omahaRequest') :
            undefined;
    }
    getUpdateSummary(event) {
        const updateOutcome = getUpdateOutcome(event);
        switch (updateOutcome) {
            case 'NO_UPDATE':
                return loadTimeData.getString('noUpdate');
            case 'UPDATED':
                return event.endEvent.nextVersion ?
                    loadTimeData.getStringF('updatedTo', event.endEvent.nextVersion) :
                    undefined;
            case 'UPDATE_ERROR':
                return loadTimeData.getString('updateError');
            default:
                return updateOutcome !== undefined ?
                    loadTimeData.getStringF('outcome', updateOutcome) :
                    loadTimeData.getString('outcomeUnknown');
        }
    }
    getUpdaterProcessSummary(event) {
        if (event.startEvent.scope === undefined ||
            event.endEvent.exitCode === undefined) {
            return undefined;
        }
        return loadTimeData.getStringF('processSummary', event.endEvent.exitCode);
    }
    getAppCommandSummary(event) {
        return event.endEvent.exitCode !== undefined ?
            loadTimeData.getStringF('commandOutcome', event.endEvent.exitCode) :
            undefined;
    }
    getPersistedDataSummary(event) {
        return loadTimeData.getStringF('persistedDataSummary', event.registeredApps.length);
    }
    getEventSummary(event) {
        if (event === undefined) {
            return undefined;
        }
        if (this.errors.length > 0) {
            return this.errors[0];
        }
        if (isMergedHistoryEvent(event)) {
            switch (event.eventType) {
                case 'INSTALL':
                    return this.getInstallSummary(event);
                case 'UNINSTALL':
                    return this.getUninstallSummary(event);
                case 'QUALIFY':
                    return this.getQualifySummary(event);
                case 'ACTIVATE':
                    return this.getActivateSummary(event);
                case 'POST_REQUEST':
                    return this.getPostRequestSummary();
                case 'UPDATE':
                    return this.getUpdateSummary(event);
                case 'UPDATER_PROCESS':
                    return this.getUpdaterProcessSummary(event);
                case 'APP_COMMAND':
                    return this.getAppCommandSummary(event);
                default:
                    return undefined;
            }
        }
        else {
            switch (event.eventType) {
                case 'PERSISTED_DATA':
                    return this.getPersistedDataSummary(event);
                default:
                    return undefined;
            }
        }
    }
}
customElements.define(EventListItemElement.is, EventListItemElement);
