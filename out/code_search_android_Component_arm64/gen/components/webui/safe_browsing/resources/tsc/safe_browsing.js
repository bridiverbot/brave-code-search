/* Copyright 2017 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_tab_box/cr_tab_box.js';
// 
import { assert } from 'chrome://resources/js/assert.js';
import { addWebUiListener, sendWithPromise } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { $ } from 'chrome://resources/js/util.js';
const deepScanData = new Map();
/**
 * Asks the C++ SafeBrowsingUIHandler to get the lists of Safe Browsing
 * ongoing experiments and preferences.
 * The SafeBrowsingUIHandler should reply to addExperiment() and
 * addPreferences() (below).
 */
function initialize() {
    updateDatabaseManagerGetHashTabs();
    sendWithPromise('getExperiments', [])
        .then((experiments) => addExperiments(experiments));
    sendWithPromise('getPrefs', [])
        .then((prefs) => addPrefs(prefs));
    sendWithPromise('getPolicies', [])
        .then((policies) => addPolicies(policies));
    sendWithPromise('getCookie', [])
        .then((cookie) => addCookie(cookie));
    sendWithPromise('getSavedPasswords', [])
        .then((passwords) => addSavedPasswords(passwords));
    sendWithPromise('getDatabaseManagerInfo', [])
        .then(function (databaseState) {
        if (!loadTimeData.getBoolean('isV5Enabled')) {
            const fullHashCacheState = databaseState.splice(-1, 1);
            addFullHashCacheInfo(fullHashCacheState);
        }
        addDatabaseManagerInfo(databaseState);
    });
    if (loadTimeData.getBoolean('isV5Enabled')) {
        sendWithPromise('getV5GetHashLookups', [])
            .then((lookups) => {
            lookups.forEach(addV5GetHashLookup);
        });
        addWebUiListener('v5-get-hash-lookup-update', addV5GetHashLookup);
    }
    sendWithPromise('getDownloadUrlsChecked', [])
        .then((urlsChecked) => {
        urlsChecked.forEach(function (urlAndResult) {
            addDownloadUrlChecked(urlAndResult);
        });
    });
    addWebUiListener('download-url-checked-update', function (urlAndResult) {
        addDownloadUrlChecked(urlAndResult);
    });
    sendWithPromise('getSentClientDownloadRequests', [])
        .then((sentClientDownloadRequests) => {
        sentClientDownloadRequests.forEach(function (cdr) {
            addSentClientDownloadRequestsInfo(cdr);
        });
    });
    addWebUiListener('sent-client-download-requests-update', function (result) {
        addSentClientDownloadRequestsInfo(result);
    });
    sendWithPromise('getReceivedClientDownloadResponses', [])
        .then((receivedClientDownloadResponses) => {
        receivedClientDownloadResponses.forEach(function (cdr) {
            addReceivedClientDownloadResponseInfo(cdr);
        });
    });
    addWebUiListener('received-client-download-responses-update', function (result) {
        addReceivedClientDownloadResponseInfo(result);
    });
    sendWithPromise('getSentClientPhishingRequests', [])
        .then((sentClientPhishingRequests) => {
        sentClientPhishingRequests.forEach(function (cpr) {
            addSentClientPhishingRequestsInfo(cpr);
        });
    });
    addWebUiListener('sent-client-phishing-requests-update', function (result) {
        addSentClientPhishingRequestsInfo(result);
    });
    sendWithPromise('getReceivedClientPhishingResponses', [])
        .then((receivedClientPhishingResponses) => {
        receivedClientPhishingResponses.forEach(function (cpr) {
            addReceivedClientPhishingResponseInfo(cpr);
        });
    });
    addWebUiListener('received-client-phishing-responses-update', function (result) {
        addReceivedClientPhishingResponseInfo(result);
    });
    sendWithPromise('getSentCSBRRs', []).then((sentCSBRRs) => {
        sentCSBRRs.forEach(function (csbrr) {
            addSentCSBRRsInfo(csbrr);
        });
    });
    addWebUiListener('sent-csbrr-update', function (result) {
        addSentCSBRRsInfo(result);
    });
    sendWithPromise('getPGEvents', []).then((pgEvents) => {
        pgEvents.forEach(function (pgEvent) {
            addPGEvent(pgEvent);
        });
    });
    addWebUiListener('sent-pg-event', function (result) {
        addPGEvent(result);
    });
    sendWithPromise('getSecurityEvents', [])
        .then((securityEvents) => {
        securityEvents.forEach(function (securityEvent) {
            addSecurityEvent(securityEvent);
        });
    });
    addWebUiListener('sent-security-event', function (result) {
        addSecurityEvent(result);
    });
    sendWithPromise('getPGPings', []).then((pgPings) => {
        pgPings.forEach(function (pgPing) {
            addPGPing(pgPing);
        });
    });
    addWebUiListener('pg-pings-update', function (result) {
        addPGPing(result);
    });
    sendWithPromise('getPGResponses', []).then((pgResponses) => {
        pgResponses.forEach(function (pgResponse) {
            addPGResponse(pgResponse);
        });
    });
    addWebUiListener('pg-responses-update', function (result) {
        addPGResponse(result);
    });
    sendWithPromise('getURTLookupPings', [])
        .then((urtLookupPings) => {
        urtLookupPings.forEach(function (urtLookupPing) {
            addURTLookupPing(urtLookupPing);
        });
    });
    addWebUiListener('urt-lookup-pings-update', function (result) {
        addURTLookupPing(result);
    });
    sendWithPromise('getURTLookupResponses', [])
        .then((urtLookupResponses) => {
        urtLookupResponses.forEach(function (urtLookupResponse) {
            addURTLookupResponse(urtLookupResponse);
        });
    });
    addWebUiListener('urt-lookup-responses-update', function (result) {
        addURTLookupResponse(result);
    });
    sendWithPromise('getHPRTLookupPings', [])
        .then((hprtLookupPings) => {
        hprtLookupPings.forEach(function (hprtLookupPing) {
            addHPRTLookupPing(hprtLookupPing);
        });
    });
    addWebUiListener('hprt-lookup-pings-update', function (result) {
        addHPRTLookupPing(result);
    });
    sendWithPromise('getHPRTLookupResponses', [])
        .then((hprtLookupResponses) => {
        hprtLookupResponses.forEach(function (hprtLookupResponse) {
            addHPRTLookupResponse(hprtLookupResponse);
        });
    });
    addWebUiListener('hprt-lookup-responses-update', function (result) {
        addHPRTLookupResponse(result);
    });
    sendWithPromise('getLogMessages', [])
        .then((logMessages) => {
        logMessages.forEach(function (message) {
            addLogMessage(message);
        });
    });
    addWebUiListener('log-messages-update', function (message) {
        addLogMessage(message);
    });
    sendWithPromise('getReportingEvents', [])
        .then((reportingEvents) => {
        reportingEvents.forEach(function (reportingEvent) {
            addReportingEvent(reportingEvent);
        });
    });
    addWebUiListener('reporting-events-update', function (reportingEvent) {
        addReportingEvent(reportingEvent);
    });
    sendWithPromise('getDeepScans', []).then((requests) => {
        requests.forEach(function (request) {
            addDeepScan(request);
        });
    });
    addWebUiListener('deep-scan-request-update', function (result) {
        addDeepScan(result);
    });
    const deepScanExportButton = $('deep-scan-export-btn');
    assert(deepScanExportButton);
    deepScanExportButton.addEventListener('click', exportDeepScanData);
    // 
    sendWithPromise('getReferringAppInfo', []).then((info) => {
        addReferringAppInfo(info);
    });
    // 
    const referrerChangeForm = $('get-referrer-chain-form');
    assert(referrerChangeForm);
    referrerChangeForm.addEventListener('submit', addReferrerChain);
    sendWithPromise('getTailoredVerdictOverride', [])
        .then(displayTailoredVerdictOverride);
    addWebUiListener('tailored-verdict-override-update', displayTailoredVerdictOverride);
    const overrideForm = $('tailored-verdict-override-form');
    assert(overrideForm);
    overrideForm.addEventListener('submit', setTailoredVerdictOverride);
    const overrideClear = $('tailored-verdict-override-clear');
    assert(overrideClear);
    overrideClear.addEventListener('click', clearTailoredVerdictOverride);
    // Allow tabs to be navigated to by fragment. The fragment with be of the
    // format "#tab-<tab id>"
    showTab(window.location.hash.substr(5));
    window.onhashchange = function () {
        showTab(window.location.hash.substr(5));
    };
    // When the tab updates, update the anchor
    const tabbox = $('tabbox');
    assert(tabbox);
    tabbox.addEventListener('selected-index-change', e => {
        const tabs = document.querySelectorAll('div[slot=\'tab\']');
        const selectedTab = tabs[e.detail];
        assert(selectedTab);
        window.location.hash = 'tab-' + selectedTab.id;
    }, true);
}
// Adds the currently running experimental Safe Browsing features, and
// their statuses, to the DOM. `experiments` is an array of strings
// where the even-indexed elements contain the feature's name and the
// odd-indexed elements are the feature's status.
function addExperiments(experiments) {
    addContentHelper(experiments, 'result-template', 'experiments-list', 'span');
}
// Shows either the Hash Cache tab (for V4) or the Database Manager
// SearchHashes Lookups tab (for V5) depending on whether the
// SafeBrowsingLocalListsUseSBv5 feature is enabled.
function updateDatabaseManagerGetHashTabs() {
    const isV5Enabled = loadTimeData.getBoolean('isV5Enabled');
    if (isV5Enabled) {
        $('hash-cache')?.remove();
        $('hash-cache-panel')?.remove();
    }
    else {
        $('db-manager-search-hashes-lookups')?.remove();
        $('db-manager-search-hashes-lookups-panel')?.remove();
    }
}
// Adds a list of preferences and their statuses to the DOM. `prefs` is
// an array of strings where the even-indexed elements contain the
// pref's name and the odd-indexed elements are the pref's status.
function addPrefs(prefs) {
    addContentHelper(prefs, 'result-template', 'preferences-list', 'span');
}
// Adds a list of policies and their statuses to the DOM. `policies` is
// an array where the even-indexed elements contain the policy's name
// and the odd-indexed elements are the policy's status. The policy's
// status can be represented either as a string or a boolean.
function addPolicies(policies) {
    addContentHelper(policies, 'result-template', 'policies-list', 'span');
}
// Adds the value of the Safe Browsing Cookie and the time it was
// created. `cookie` is a expected to be an array containing two
// elements where the first element is Safe Browsing Cookie's
// value and the second element is its creation time.
function addCookie(cookie) {
    const cookiePanel = $('cookie-panel');
    assert(cookiePanel);
    const cookieTemplate = $('cookie-template');
    assert(cookieTemplate);
    const cookieFormatted = cookieTemplate.content.cloneNode(true);
    const selectedElements = cookieFormatted.querySelectorAll('.result');
    assert(selectedElements);
    const cookieValueDOM = selectedElements[0];
    assert(cookieValueDOM);
    const creationDateDOM = selectedElements[1];
    assert(creationDateDOM);
    const cookieValue = cookie[0];
    assert(cookieValue);
    const creationDate = cookie[1];
    assert(creationDate !== null && creationDate !== undefined);
    cookieValueDOM.textContent = cookieValue;
    creationDateDOM.textContent = (new Date(creationDate)).toLocaleString();
    cookiePanel.appendChild(cookieFormatted);
}
// Adds saved passwords data to the DOM. `passwords` is an array where
// the even-indexed elements contain the username and the odd-indexed
// elements are boolean values indicating how the password is stored.
function addSavedPasswords(passwords) {
    for (let i = 0; i < passwords.length; i += 2) {
        const savedPasswordFormatted = document.createElement('div');
        const suffix = passwords[i + 1] ? 'GAIA password' : 'Enterprise password';
        savedPasswordFormatted.textContent = `${passwords[i]} (${suffix})`;
        const savedPasswordsList = $('saved-passwords');
        assert(savedPasswordsList);
        savedPasswordsList.appendChild(savedPasswordFormatted);
    }
}
// Adds the DatabaseManagerInfo proto to the DOM. Each even-indexed
// element in `databaseManagerInfo` contains the proto's property name.
// Each odd-indexed element contains the value stored the property.
function addDatabaseManagerInfo(databaseManagerInfo) {
    for (let i = 0; i < databaseManagerInfo.length; i += 2) {
        const preferenceListTemplate = $('result-template');
        assert(preferenceListTemplate);
        const preferencesListFormatted = preferenceListTemplate.content.cloneNode(true);
        const selectedElements = preferencesListFormatted.querySelectorAll('span');
        assert(selectedElements);
        const labelDOM = selectedElements[0];
        assert(labelDOM);
        const valueDOM = selectedElements[1];
        assert(valueDOM);
        labelDOM.textContent = databaseManagerInfo[i] + ': ';
        const value = databaseManagerInfo[i + 1];
        assert(value !== undefined && value !== null);
        if (Array.isArray(value)) {
            const blockQuote = document.createElement('blockquote');
            value.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item;
                blockQuote.appendChild(div);
            });
            valueDOM.appendChild(blockQuote);
        }
        else {
            valueDOM.textContent = value.toString();
        }
        const databaseInfoList = $('database-info-list');
        assert(databaseInfoList);
        databaseInfoList.appendChild(preferencesListFormatted);
    }
}
// A helper function that formats and adds the content's name and its
// status into the template and then appends the template to the parent
// list.
function addContentHelper(content, templateName, parentListName, elementSelector) {
    const resLength = content.length;
    for (let i = 0; i < resLength; i += 2) {
        const listTemplate = $(templateName);
        assert(listTemplate);
        const formattedTemplate = listTemplate.content.cloneNode(true);
        const contentName = content[i];
        const status = content[i + 1];
        assert(contentName !== null && contentName !== undefined);
        assert(status !== null && status !== undefined);
        const selectedElements = formattedTemplate.querySelectorAll(elementSelector);
        const labelDOM = selectedElements[0];
        const valueDOM = selectedElements[1];
        assert(labelDOM);
        assert(valueDOM);
        const parentList = $(parentListName);
        assert(parentList);
        labelDOM.textContent = status + ': ';
        valueDOM.textContent = contentName.toString();
        parentList.appendChild(formattedTemplate);
    }
}
function addFullHashCacheInfo(result) {
    const cacheInfo = $('full-hash-cache-info');
    assert(cacheInfo);
    cacheInfo.textContent = result.toString();
}
// Populates a table cell with key/value details and an optional formatted JSON
// block preceded by a header.
function populateV5GetHashLookupCell(cell, keyValues, jsonHeader, json) {
    for (const pair of keyValues) {
        const keySpan = document.createElement('span');
        keySpan.className = 'bold-span';
        keySpan.textContent = `${pair.key}: `;
        cell.appendChild(keySpan);
        cell.appendChild(document.createTextNode(`${pair.value}\n`));
    }
    if (json) {
        cell.appendChild(document.createTextNode('\n'));
        const headerSpan = document.createElement('span');
        headerSpan.className = 'bold-span';
        headerSpan.textContent = `${jsonHeader}:\n`;
        cell.appendChild(headerSpan);
        cell.appendChild(document.createTextNode(json));
    }
}
// Adds a V5 get-hash lookup entry to the table in the Database Manager
// SearchHashes Lookups tab. `lookup` contains the details of the lookup event.
function addV5GetHashLookup(lookup) {
    const emptyText = $('db-manager-search-hashes-lookups-empty-text');
    assert(emptyText);
    emptyText.hidden = true;
    const table = $('db-manager-search-hashes-lookups-table');
    assert(table);
    table.hidden = false;
    const row = table.insertRow();
    row.className = 'content';
    const requestCell = row.insertCell();
    requestCell.className = 'content';
    populateV5GetHashLookupCell(requestCell, lookup.requestKeyValues, 'SearchHashesRequest', lookup.requestSearchHashesJson);
    const responseCell = row.insertCell();
    responseCell.className = 'content';
    populateV5GetHashLookupCell(responseCell, lookup.responseKeyValues, 'SearchHashesResponse', lookup.responseSearchHashesJson);
}
function addDownloadUrlChecked(urlAndResult) {
    const logDiv = $('download-urls-checked-list');
    appendChildWithInnerText(logDiv, urlAndResult);
}
function addSentClientDownloadRequestsInfo(requestInfo) {
    const logDiv = $('sent-client-download-requests-list');
    appendChildWithInnerText(logDiv, requestInfo);
}
function addReceivedClientDownloadResponseInfo(responseInfo) {
    const logDiv = $('received-client-download-response-list');
    appendChildWithInnerText(logDiv, responseInfo);
}
function addSentClientPhishingRequestsInfo(phishingRequestInfo) {
    const logDiv = $('sent-client-phishing-requests-list');
    appendChildWithInnerText(logDiv, phishingRequestInfo);
}
function addReceivedClientPhishingResponseInfo(phishingResponseInfo) {
    const logDiv = $('received-client-phishing-response-list');
    appendChildWithInnerText(logDiv, phishingResponseInfo);
}
function addSentCSBRRsInfo(csbrrsInfo) {
    const logDiv = $('sent-csbrrs-list');
    appendChildWithInnerText(logDiv, csbrrsInfo);
}
function addPGEvent(pgEvent) {
    const logDiv = $('pg-event-log');
    const eventFormatted = '[' + (new Date(pgEvent.time)).toLocaleString() + '] ' + pgEvent.message;
    appendChildWithInnerText(logDiv, eventFormatted);
}
function addSecurityEvent(securityEvent) {
    const logDiv = $('security-event-log');
    const eventFormatted = '[' + (new Date(securityEvent.time)).toLocaleString() +
        '] ' + securityEvent.message;
    appendChildWithInnerText(logDiv, eventFormatted);
}
function insertTokenToTable(tableId, token) {
    const table = $(tableId);
    assert(table);
    const row = table.insertRow();
    row.className = 'content';
    row.id = tableId + '-' + token;
    row.insertCell().className = 'content';
    row.insertCell().className = 'content';
}
function addResultToTable(tableId, token, result, position) {
    let table = $(`${tableId}-${token}`);
    if (table === null) {
        insertTokenToTable(tableId, token);
        table = $(`${tableId}-${token}`);
    }
    assert(table);
    const cell = table.cells[position];
    assert(cell);
    cell.innerText = result;
}
function addPGPing(pgPing) {
    addResultToTableHelper('pg-ping-list', pgPing, 0);
}
function addPGResponse(pgResponse) {
    addResultToTableHelper('pg-ping-list', pgResponse, 1);
}
function addURTLookupPing(urtPing) {
    addResultToTableHelper('urt-lookup-ping-list', urtPing, 0);
}
function addURTLookupResponse(urtLookupResponse) {
    addResultToTableHelper('urt-lookup-ping-list', urtLookupResponse, 1);
}
function addHPRTLookupPing(hprtPing) {
    addResultToTableHelper('hprt-lookup-ping-list', hprtPing, 0);
}
function addHPRTLookupResponse(hprtLookupResponse) {
    addResultToTableHelper('hprt-lookup-ping-list', hprtLookupResponse, 1);
}
// A helper function that ensures there are elements within `results` before
// adding them to a list.
function addResultToTableHelper(listName, result, position) {
    const tableId = typeof result[0] === 'number' ? (result[0]).toString() : result[0];
    const token = result[1];
    assert(tableId !== undefined && tableId !== null);
    assert(token !== undefined && token !== null);
    addResultToTable(listName, tableId, token, position);
}
function addDeepScan(result) {
    if (result.request_time !== null) {
        let requestFormatted = '[' + (new Date(result.request_time)).toLocaleString() + ']\n';
        if (result.http_headers != null) {
            requestFormatted += result.http_headers;
        }
        requestFormatted += result.request;
        addResultToTable('deep-scan-list', result.token, requestFormatted, 0);
    }
    if (result.response_time != null) {
        let resultFormatted = '[' + (new Date(result.response_time)).toLocaleString() + ']\n';
        // Display result if it is non-success
        if (result.response_status && result.response_status !== 'SUCCESS') {
            resultFormatted += result.response_status + '\n';
        }
        // Regardless of the result status, the response is always logged.
        if (result.response) {
            resultFormatted += result.response;
        }
        addResultToTable('deep-scan-list', result.token, resultFormatted, 1);
    }
    deepScanData.set(result.token, result);
}
// Exports the data currently displayed in the Deep Scan tab as a JSON file.
function exportDeepScanData() {
    const exportData = Array.from(deepScanData.values()).map(entry => {
        const response = JSON.parse(entry.response);
        if (entry.response_status && entry.response_status !== 'SUCCESS') {
            response['status'] = entry.response_status;
        }
        return {
            'request_time': new Date(entry.request_time).toLocaleString(),
            'http_headers': entry.http_headers,
            'request': JSON.parse(entry.request),
            'response_time': new Date(entry.response_time).toLocaleString(),
            'response': response,
        };
    });
    const deepScanJson = JSON.stringify(exportData, /* replacer= */ null, /* space= */ 2);
    const blob = new Blob([deepScanJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `deep_scan_export_${Date.now()}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
}
function addLogMessage(logMessage) {
    const logDiv = $('log-messages');
    const eventFormatted = '[' + (new Date(logMessage.time)).toLocaleString() +
        '] ' + logMessage.message;
    appendChildWithInnerText(logDiv, eventFormatted);
}
function addReportingEvent(reportingEvent) {
    // If the event doesn't have a timestamp, fall back to the old display format.
    if (!reportingEvent.timeMillis) {
        const logDiv = $('reporting-events');
        const eventFormatted = reportingEvent.message;
        appendChildWithInnerText(logDiv, eventFormatted);
        return;
    }
    const table = $('reporting-events-table');
    // Unhide the table if it's the first event.
    if (table.hidden) {
        table.hidden = false;
    }
    const tableBody = table.querySelector('tbody');
    const template = $('resultRowTemplate');
    // Clone the new row and insert it into the table
    const reportingEventRow = template.content.cloneNode(true);
    const mainRow = reportingEventRow.querySelector('.main-row');
    const detailsRow = reportingEventRow.querySelector('.details-row');
    mainRow.querySelector('.time-cell').textContent =
        new Date(reportingEvent.timeMillis).toLocaleString();
    mainRow.querySelector('.event-type-cell').textContent =
        reportingEvent.event_type;
    mainRow.querySelector('.profile-cell').textContent =
        reportingEvent.profile ? 'Yes' : 'No';
    mainRow.querySelector('.device-cell').textContent =
        reportingEvent.device ? 'Yes' : 'No';
    mainRow.querySelector('.success-cell').textContent =
        reportingEvent.success ? 'Yes' : 'No';
    detailsRow.querySelector('.details-cell').textContent =
        reportingEvent.message;
    const expander = mainRow.querySelector('.expander');
    const copyButton = mainRow.querySelector('.copy-button');
    // Add click listener to copy the message.
    copyButton.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(reportingEvent.message).then(() => {
            const originalText = copyButton.textContent;
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = originalText;
            }, 2000);
        });
    });
    // Add click listener to toggle the details row.
    expander.addEventListener('click', () => {
        expander.classList.toggle('expanded');
        detailsRow.classList.toggle('visible');
    });
    tableBody.appendChild(reportingEventRow);
}
function appendChildWithInnerText(logDiv, text) {
    if (!logDiv) {
        return;
    }
    const textDiv = document.createElement('div');
    textDiv.innerText = text;
    logDiv.appendChild(textDiv);
}
function addReferrerChain(ev) {
    // Don't navigate
    ev.preventDefault();
    const referrerChainURL = $('referrer-chain-url');
    assert(referrerChainURL);
    sendWithPromise('getReferrerChain', referrerChainURL.value)
        .then((referrerChain) => {
        const referrerChainContent = $('referrer-chain-content');
        assert(referrerChainContent);
        // TrustedTypes is not supported on iOS
        if (window.trustedTypes) {
            referrerChainContent.innerHTML = window.trustedTypes.emptyHTML;
        }
        else {
            referrerChainContent.innerHTML = '';
        }
        referrerChainContent.textContent = referrerChain;
    });
}
// 
function addReferringAppInfo(info) {
    const referringAppInfo = $('referring-app-info');
    assert(referringAppInfo);
    // TrustedTypes is not supported on iOS
    if (window.trustedTypes) {
        referringAppInfo.innerHTML = window.trustedTypes.emptyHTML;
    }
    else {
        referringAppInfo.innerHTML = '';
    }
    referringAppInfo.textContent = info;
}
// 
// Format the browser's response nicely.
function displayTailoredVerdictOverride(response) {
    let displayString = `Status: ${response.status}`;
    if (response.override_value) {
        displayString +=
            `\nOverride value: ${JSON.stringify(response.override_value)}`;
    }
    const overrideContent = $('tailored-verdict-override-content');
    assert(overrideContent);
    // TrustedTypes is not supported on iOS
    if (window.trustedTypes) {
        overrideContent.innerHTML = window.trustedTypes.emptyHTML;
    }
    else {
        overrideContent.innerHTML = '';
    }
    overrideContent.textContent = displayString;
}
function setTailoredVerdictOverride(e) {
    // Don't navigate
    e.preventDefault();
    const form = $('tailored-verdict-override-form');
    assert(form);
    const inputs = form.elements;
    // The structured data to send to the browser.
    const inputValue = {
        tailored_verdict_type: inputs.tailored_verdict_type.value,
    };
    sendWithPromise('setTailoredVerdictOverride', inputValue)
        .then(displayTailoredVerdictOverride);
}
function clearTailoredVerdictOverride(e) {
    // Don't navigate
    e.preventDefault();
    const form = $('tailored-verdict-override-form');
    assert(form);
    form.reset();
    sendWithPromise('clearTailoredVerdictOverride')
        .then(displayTailoredVerdictOverride);
}
function showTab(tabId) {
    const tabs = document.querySelectorAll('div[slot=\'tab\']');
    const index = Array.from(tabs).findIndex(t => t.id === tabId);
    if (index !== -1) {
        const tabbox = document.querySelector('cr-tab-box');
        assert(tabbox);
        tabbox.setAttribute('selected-index', index.toString());
    }
}
document.addEventListener('DOMContentLoaded', initialize);
