// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { addWebUiListener, removeWebUiListener } from 'chrome://resources/js/cr.js';
import { getRequiredElement } from 'chrome://resources/js/util.js';
import { html, render } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { requestDataAndRegisterForUpdates, requestStart, setIncludeSpecifics, triggerRefresh } from './chrome_sync.js';
export let aboutInfo = {
    details: [],
    actionable_error_detected: false,
    unrecoverable_error_detected: false,
    allow_enabling_sync_the_feature: false,
};
// Snapshot of the previous aboutInfo, used for highlighting rows that changed.
let previousAboutInfo = aboutInfo;
// For tests
export function getAboutInfoForTest() {
    return aboutInfo;
}
let aboutInfoListener = null;
let entityCountsUpdatedListener = null;
function refreshAboutInfo(newAboutInfo) {
    previousAboutInfo = aboutInfo;
    aboutInfo = newAboutInfo;
    renderAboutInfo();
}
function renderAboutInfo() {
    render(getAboutInfoHtml(), getRequiredElement('about-info'));
}
function shouldHighlightDetail(detailsIndex, dataIndex) {
    if (previousAboutInfo.details.length <= detailsIndex ||
        previousAboutInfo.details[detailsIndex].data.length <= dataIndex) {
        return false;
    }
    const previous = previousAboutInfo.details[detailsIndex].data[dataIndex].stat_value;
    const current = aboutInfo.details[detailsIndex].data[dataIndex].stat_value;
    return previous !== current;
}
function getAboutInfoHtml() {
    // clang-format off
    return html `
    ${aboutInfo.details.map((detail, i) => html `
      <div class="section">
        <h2>${detail.title}</h2>
        <table class="about-details">
          ${detail.data.map((item, j) => html `
            <tr class="${item.stat_status}"
                ?highlighted="${shouldHighlightDetail(i, j)}">
              <td class="detail" width="50%">${item.stat_name}</td>
              <td class="value" width="50%">${item.stat_value}</td>
            </tr>
          `)}
        </table>
      </div>
    `)}

    <div id="request-start-stop-wrapper"
        ?hidden="${!aboutInfo.allow_enabling_sync_the_feature}">
      <button id="request-start" @click="${requestStart}">
        Enable Sync-The-Feature
      </button>
    </div>

    <div id="traffic-event-container-wrapper">
      <h2 style="display:inline-block">Sync Protocol Log</h2>
      <input type="checkbox" id="capture-specifics"
          @change="${onCaptureSpecificsChange}">
      <label for="capture-specifics">Capture Specifics</label>
      <button id="trigger-refresh" @click="${triggerRefresh}">
        Trigger GetUpdates
      </button>
      <div id="traffic-event-container">
        ${protocolEvents.map(item => html `
          <div class="traffic-event-entry" @click="${onTrafficEventEntryClick}">
            <span class="time">${(new Date(item.time)).toLocaleString()}</span>
            <span class="type">${item.type}</span>
            <pre class="details">${item.details}</pre>
            <pre class="proto">${JSON.stringify(item.proto, null, 2)}</pre>
          </div>
        `)}
      </div>
    </div>

    <div class="section" style="overflow-x: auto">
      <h2>Type Info</h2>
      <table id="typeInfo">
        ${aboutInfo.type_status ? html `
          ${aboutInfo.type_status.map(item => html `
            <tr class="${item.status}">
              <td width="30%">${item.name}</td>
              <td width="10%">${item.num_entries}</td>
              <td width="10%">${item.num_live}</td>
              <td width="40%" class="message">${item.message}</td>
              <td width="10%">${item.state}</td>
            </tr>
          `)}
        ` : ''}
      </table>
    </div>

    <div class="section"
        ?hidden="${!aboutInfo.unrecoverable_error_detected}">
        <p>
          <span class="err">${aboutInfo.unrecoverable_error_message}</span>
        </p>
    </div>

    <div class="section" ?hidden="${!aboutInfo.actionable_error_detected}">
        <p>
          <h2>Actionable Error</h2>
          <table id="actionableError">
            ${aboutInfo.actionable_error.map(item => html `
              <tr>
                <td>${item.stat_name}</td>
                <td>${item.stat_value}</td>
              </tr>
            `)}
          </table>
        </p>
    </div>

    `;
    // clang-format on
}
let updateEntityCountsTimeoutID = -1;
function onEntityCountsUpdatedEvent(response) {
    if (!aboutInfo.type_status) {
        return;
    }
    const typeStatusRow = aboutInfo.type_status.find(row => row.name === response.entityCounts.dataType);
    if (typeStatusRow) {
        typeStatusRow.num_entries = response.entityCounts.entities;
        typeStatusRow.num_live = response.entityCounts.nonTombstoneEntities;
    }
    // onEntityCountsUpdatedEvent() typically gets called multiple times in quick
    // succession (once for each data type). To avoid lots of almost-simultaneous
    // updates to the HTML table, delay updating just a bit.
    if (updateEntityCountsTimeoutID === -1) {
        updateEntityCountsTimeoutID = setTimeout(() => {
            updateEntityCountsTimeoutID = -1;
            renderAboutInfo();
        }, 10);
    }
}
/**
 * Helper to determine if an element is scrolled to its bottom limit.
 * @param elem element to check
 * @return true if the element is scrolled to the bottom
 */
function isScrolledToBottom(elem) {
    return elem.scrollHeight - elem.scrollTop === elem.clientHeight;
}
/**
 * Helper to scroll an element to its bottom limit.
 */
function scrollToBottom(elem) {
    elem.scrollTop = elem.scrollHeight - elem.clientHeight;
}
/** Container for accumulated sync protocol events. */
const protocolEvents = [];
/** We may receive re-delivered events.  Keep a record of ones we've seen. */
const knownEventTimestamps = {};
/**
 * Callback for incoming protocol events.
 * @param response The protocol event response.
 */
function onReceivedProtocolEvent(response) {
    // Return early if we've seen this event before.  Assumes that timestamps
    // are sufficiently high resolution to uniquely identify an event.
    if (knownEventTimestamps.hasOwnProperty(response.time)) {
        return;
    }
    knownEventTimestamps[response.time] = true;
    protocolEvents.push(response);
    renderAboutInfo();
    const trafficContainer = getRequiredElement('traffic-event-container');
    // Scroll to the bottom if we were already at the bottom.  Otherwise, leave
    // the scrollbar alone.
    const shouldScrollDown = isScrolledToBottom(trafficContainer);
    if (shouldScrollDown) {
        scrollToBottom(trafficContainer);
    }
}
function onCaptureSpecificsChange(e) {
    setIncludeSpecifics(e.target.checked);
}
/**
 * Initializes listeners for status dump and import UI.
 */
function initStatusDumpButton() {
    const statusData = document.querySelector('#status-data');
    assert(statusData);
    statusData.hidden = true;
    const dumpStatusButton = document.querySelector('#dump-status');
    assert(dumpStatusButton);
    dumpStatusButton.addEventListener('click', () => {
        const aboutInfoCopy = aboutInfo;
        const includeIds = document.querySelector('#include-ids');
        assert(includeIds);
        if (!includeIds.checked) {
            aboutInfoCopy.details = aboutInfo.details.filter(function (el) {
                return !el.is_sensitive;
            });
        }
        const dataToDump = {
            aboutInfo: aboutInfoCopy,
            protocolEvents: protocolEvents,
        };
        let data = '';
        data += new Date().toString() + '\n';
        data += '======\n';
        data += 'Status\n';
        data += '======\n';
        data += JSON.stringify(dataToDump, null, 2);
        const statusText = document.querySelector('#status-text');
        assert(statusText);
        statusText.value = data;
        const statusData = document.querySelector('#status-data');
        assert(statusData);
        statusData.hidden = false;
    });
    const importStatusButton = document.querySelector('#import-status');
    assert(importStatusButton);
    importStatusButton.addEventListener('click', () => {
        const statusData = document.querySelector('#status-data');
        assert(statusData);
        statusData.hidden = false;
        const statusText = document.querySelector('#status-text');
        assert(statusText);
        if (statusText.value.length === 0) {
            statusText.placeholder = 'Paste sync status dump here then click import.';
            return;
        }
        // First remove any characters before the '{'.
        let data = statusText.value;
        const firstBrace = data.indexOf('{');
        if (firstBrace < 0) {
            statusText.value = 'Invalid sync status dump.';
            return;
        }
        data = data.substr(firstBrace);
        // Remove listeners to prevent sync events from overwriting imported data.
        if (aboutInfoListener) {
            removeWebUiListener(aboutInfoListener);
            aboutInfoListener = null;
        }
        if (entityCountsUpdatedListener) {
            removeWebUiListener(entityCountsUpdatedListener);
            entityCountsUpdatedListener = null;
        }
        // Handle both the old format (just the aboutInfo object) and the new
        // format (an object containing both aboutInfo and protocolEvents).
        const dump = JSON.parse(data);
        const aboutInfo = dump.aboutInfo || dump;
        const newProtocolEvents = dump.protocolEvents || [];
        // Clear existing protocol events and add the new ones.
        protocolEvents.splice(0, protocolEvents.length, ...newProtocolEvents);
        refreshAboutInfo(aboutInfo);
    });
}
/**
 * Toggles the given traffic event entry div's "expanded" state.
 * @param e the click event that triggered the toggle.
 */
function onTrafficEventEntryClick(e) {
    if (e.target.classList.contains('proto')) {
        // We ignore proto clicks to keep it copyable.
        return;
    }
    let trafficEventDiv = e.target;
    // Click might be on div's child.
    if (trafficEventDiv.nodeName !== 'DIV' && trafficEventDiv.parentNode) {
        trafficEventDiv = trafficEventDiv.parentNode;
    }
    trafficEventDiv.classList.toggle('traffic-event-entry-expanded');
}
function onLoad() {
    initStatusDumpButton();
    addWebUiListener('onProtocolEvent', onReceivedProtocolEvent);
    aboutInfoListener = addWebUiListener('onAboutInfoUpdated', refreshAboutInfo);
    entityCountsUpdatedListener =
        addWebUiListener('onEntityCountsUpdated', onEntityCountsUpdatedEvent);
    // Request initial data for the page and listen to updates.
    requestDataAndRegisterForUpdates();
}
document.addEventListener('DOMContentLoaded', onLoad);
