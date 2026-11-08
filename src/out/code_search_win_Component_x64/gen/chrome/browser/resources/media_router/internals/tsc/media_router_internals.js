// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_tab_box/cr_tab_box.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { assertInstanceof } from 'chrome://resources/js/assert.js';
import { addWebUiListener, sendWithPromise } from 'chrome://resources/js/cr.js';
import { getRequiredElement } from 'chrome://resources/js/util.js';
function formatJson(jsonObj) {
    return JSON.stringify(jsonObj, null, /* spacing level = */ 2);
}
const HISTORY_SIZE = 50;
const VIDEO_STATS = [
    // Health
    { key: 'ENCODER_UTILIZATION', label: 'Encoder Utilization', unit: '%' },
    { key: 'LOSSINESS', label: 'Lossiness', unit: '%' },
    {
        key: 'FRAMES_INSERTED',
        label: 'Frames Inserted',
        unit: 'fps',
        isCumulative: true,
    },
    {
        key: 'FRAMES_DROPPED',
        label: 'Frames Dropped',
        unit: 'fps',
        isCumulative: true,
    },
    {
        key: 'NUM_FRAMES_DROPPED_BY_ENCODER',
        label: 'Dropped by Encoder',
        unit: 'fps',
        isCumulative: true,
    },
    {
        key: 'NUM_FRAMES_LATE',
        label: 'Late Frames',
        unit: 'fps',
        isCumulative: true,
    },
    // Bandwidth
    { key: 'TARGET_BITRATE', label: 'Target Bitrate', unit: 'kbps' },
    { key: 'ENCODE_KBPS', label: 'Encode', unit: 'kbps' },
    { key: 'TRANSMISSION_KBPS', label: 'Transmission', unit: 'kbps' },
    // Latency
    { key: 'AVG_E2E_LATENCY_MS', label: 'End to End Latency', unit: 'ms' },
    { key: 'AVG_CAPTURE_LATENCY_MS', label: 'Capture Latency', unit: 'ms' },
    { key: 'AVG_ENCODE_TIME_MS', label: 'Encode Time', unit: 'ms' },
    { key: 'AVG_QUEUEING_LATENCY_MS', label: 'Queueing Latency', unit: 'ms' },
    { key: 'AVG_NETWORK_LATENCY_MS', label: 'Network Latency', unit: 'ms' },
    { key: 'AVG_PACKET_LATENCY_MS', label: 'Packet Latency', unit: 'ms' },
];
const AUDIO_STATS = [
    // Health
    {
        key: 'FRAMES_INSERTED',
        label: 'Frames Inserted',
        unit: 'fps',
        isCumulative: true,
    },
    {
        key: 'FRAMES_DROPPED',
        label: 'Frames Dropped',
        unit: 'fps',
        isCumulative: true,
    },
    {
        key: 'NUM_FRAMES_LATE',
        label: 'Late Frames',
        unit: 'fps',
        isCumulative: true,
    },
    // Bandwidth
    { key: 'TRANSMISSION_KBPS', label: 'Transmission', unit: 'kbps' },
    // Latency
    { key: 'AVG_E2E_LATENCY_MS', label: 'End to End Latency', unit: 'ms' },
    { key: 'AVG_CAPTURE_LATENCY_MS', label: 'Capture Latency', unit: 'ms' },
    { key: 'AVG_ENCODE_TIME_MS', label: 'Encode Time', unit: 'ms' },
    { key: 'AVG_QUEUEING_LATENCY_MS', label: 'Queueing Latency', unit: 'ms' },
    { key: 'AVG_NETWORK_LATENCY_MS', label: 'Network Latency', unit: 'ms' },
    { key: 'AVG_PACKET_LATENCY_MS', label: 'Packet Latency', unit: 'ms' },
];
const SESSION_STATS = [
    {
        key: 'SESSION_LENGTH_MS',
        label: 'Session Length',
        unit: 's',
        hideGraph: true,
    },
];
class StatsHistory {
    history = new Map();
    lastCumulativeValues = new Map();
    lastCumulativeTimes = new Map();
    add(key, value, time = Date.now(), isCumulative = false) {
        let deltaValue = value;
        if (isCumulative) {
            const lastVal = this.lastCumulativeValues.get(key);
            const lastTime = this.lastCumulativeTimes.get(key);
            this.lastCumulativeValues.set(key, value);
            this.lastCumulativeTimes.set(key, time);
            if (lastVal !== undefined && lastTime !== undefined && time > lastTime) {
                const delta = Math.max(0, value - lastVal);
                deltaValue = delta * 1000 / (time - lastTime);
            }
            else {
                deltaValue = 0;
            }
        }
        if (!this.history.has(key)) {
            this.history.set(key, []);
        }
        const data = this.history.get(key);
        data.push({ time, value: deltaValue });
        if (data.length > HISTORY_SIZE) {
            data.shift();
        }
    }
    get(key) {
        return this.history.get(key) || [];
    }
    getAll() {
        const keys = Array.from(this.history.keys());
        if (keys.length === 0) {
            return { startTime: 0, columns: ['timeOffset'], data: [] };
        }
        const allTimesSet = new Set();
        for (const points of this.history.values()) {
            for (const p of points) {
                allTimesSet.add(p.time);
            }
        }
        const allTimes = Array.from(allTimesSet).sort((a, b) => a - b);
        if (allTimes.length === 0) {
            return { startTime: 0, columns: ['timeOffset'], data: [] };
        }
        const startTime = allTimes[0];
        const columns = ['timeOffset', ...keys];
        const data = [];
        const timeToValues = new Map();
        for (const time of allTimes) {
            timeToValues.set(time, new Map());
        }
        for (const [key, points] of this.history.entries()) {
            for (const p of points) {
                timeToValues.get(p.time).set(key, p.value);
            }
        }
        for (const time of allTimes) {
            const row = [time - startTime];
            const vals = timeToValues.get(time);
            for (const key of keys) {
                row.push(vals.has(key) ? vals.get(key) : null);
            }
            data.push(row);
        }
        return { startTime, columns, data };
    }
    setAll(compact) {
        this.history.clear();
        this.lastCumulativeValues.clear();
        if (!compact) {
            return;
        }
        const compactObj = compact;
        // Fallback for old format
        if (!('columns' in compactObj)) {
            this.history = new Map(Object.entries(compactObj));
            return;
        }
        const compactStats = compact;
        if (!compactStats.columns || compactStats.columns.length === 0) {
            return;
        }
        const keys = compactStats.columns.slice(1);
        for (const key of keys) {
            this.history.set(key, []);
        }
        for (const row of compactStats.data) {
            const timeOffset = row[0];
            const time = compactStats.startTime + timeOffset;
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const val = row[i + 1];
                if (val !== null) {
                    this.history.get(key).push({ time, value: val });
                }
            }
        }
    }
    clear() {
        this.history.clear();
        this.lastCumulativeValues.clear();
    }
}
const videoHistory = new StatsHistory();
const audioHistory = new StatsHistory();
const sessionHistory = new StatsHistory();
function generateSparklinePath(data, width, height) {
    if (data.length < 2) {
        return '';
    }
    const minVal = Math.min(...data.map(d => d.value));
    const maxVal = Math.max(...data.map(d => d.value));
    const range = maxVal - minVal || 1;
    const padding = 2;
    const usableHeight = height - (padding * 2);
    const minTime = data[0].time;
    const maxTime = data[data.length - 1].time;
    const timeRange = maxTime - minTime || 1;
    const points = data.map((d) => {
        const x = ((d.time - minTime) / timeRange) * width;
        const y = height - padding - ((d.value - minVal) / range) * usableHeight;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    return `M ${points.join(' L ')}`;
}
const statCardCache = new Map();
function createStatCard(container, stat, history, prefix) {
    const cacheKey = `${prefix}-${stat.key}`;
    let cached = statCardCache.get(cacheKey);
    if (!cached) {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.setAttribute('data-key', stat.key);
        const label = document.createElement('div');
        label.className = 'stat-label';
        label.textContent = stat.label;
        card.appendChild(label);
        const value = document.createElement('div');
        value.className = 'stat-value';
        value.textContent = '--';
        card.appendChild(value);
        let path;
        if (!stat.hideGraph) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', 'sparkline');
            svg.setAttribute('viewBox', '0 0 200 40');
            svg.setAttribute('preserveAspectRatio', 'none');
            svg.setAttribute('aria-hidden', 'true');
            path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            svg.appendChild(path);
            card.appendChild(svg);
        }
        container.appendChild(card);
        cached = { card, value, path };
        statCardCache.set(cacheKey, cached);
    }
    const values = history.get(stat.key);
    if (values.length > 0) {
        const lastValue = values[values.length - 1].value;
        const valueText = `${lastValue.toFixed(1)} ${stat.unit}`;
        cached.value.textContent = valueText;
        cached.card.setAttribute('aria-label', `${stat.label}: ${valueText}`);
        if (cached.path) {
            cached.path.setAttribute('d', generateSparklinePath(values, 200, 40));
        }
        if (stat.isCumulative) {
            if (lastValue > 0 &&
                (stat.key.includes('DROPPED') || stat.key.includes('LATE'))) {
                cached.card.classList.add('stat-card-alert');
                if (cached.path) {
                    cached.path.classList.add('sparkline-alert');
                }
            }
            else {
                cached.card.classList.remove('stat-card-alert');
                if (cached.path) {
                    cached.path.classList.remove('sparkline-alert');
                }
            }
        }
    }
}
function renderDashboard(mirroringStats, isImport = false) {
    const timestamp = Date.now();
    if (mirroringStats.video) {
        const videoStats = mirroringStats.video;
        VIDEO_STATS.forEach(stat => {
            let value = videoStats[stat.key];
            if (!isImport && typeof value !== 'number' && stat.isCumulative) {
                // Only fallback to 0 if the history is completely empty so we start at
                // 0
                const hist = videoHistory.get(stat.key);
                if (hist.length === 0) {
                    value = 0;
                }
            }
            if (!isImport && typeof value === 'number') {
                videoHistory.add(stat.key, value, timestamp, stat.isCumulative);
            }
            const grid = getRequiredElement('video-stats-grid');
            createStatCard(grid, stat, videoHistory, 'video');
        });
    }
    if (mirroringStats.audio) {
        const audioStats = mirroringStats.audio;
        AUDIO_STATS.forEach(stat => {
            let value = audioStats[stat.key];
            if (!isImport && typeof value !== 'number' && stat.isCumulative) {
                const hist = audioHistory.get(stat.key);
                if (hist.length === 0) {
                    value = 0;
                }
            }
            if (!isImport && typeof value === 'number') {
                audioHistory.add(stat.key, value, timestamp, stat.isCumulative);
            }
            const grid = getRequiredElement('audio-stats-grid');
            createStatCard(grid, stat, audioHistory, 'audio');
        });
    }
    // Derived session stats
    const grid = getRequiredElement('session-stats-grid');
    SESSION_STATS.forEach(stat => {
        if (!isImport && stat.key === 'SESSION_LENGTH_MS') {
            // Calculate session length based on the first recorded event in the
            // pipeline.
            const videoFirst = mirroringStats.video?.['FIRST_EVENT_TIME_MS'];
            const audioFirst = mirroringStats.audio?.['FIRST_EVENT_TIME_MS'];
            const videoLast = mirroringStats.video?.['LAST_EVENT_TIME_MS'];
            const audioLast = mirroringStats.audio?.['LAST_EVENT_TIME_MS'];
            const startMs = Math.min(videoFirst || Infinity, audioFirst || Infinity);
            const endMs = Math.max(videoLast || 0, audioLast || 0);
            if (startMs !== Infinity && endMs !== 0 && endMs >= startMs) {
                // We receive the times in ticks MS.
                const lengthSeconds = (endMs - startMs) / 1000;
                sessionHistory.add(stat.key, lengthSeconds, timestamp, false);
            }
        }
        createStatCard(grid, stat, sessionHistory, 'session');
    });
}
// Holds data that is currently displayed.
let currentLogs = [];
let currentGeneralState = {};
let currentMirroringStats = {};
let currentProviderStates = {};
function displayMirroringStats(mirroringStats, isImport = false) {
    currentMirroringStats = mirroringStats;
    getRequiredElement('mirroring-stats-div').textContent =
        formatJson(mirroringStats);
    renderDashboard(mirroringStats, isImport);
}
function createLogRow(log) {
    const logRow = document.createElement('tr');
    if (log.severity === 'Error') {
        logRow.classList.add('log-row-error');
    }
    else if (log.severity === 'Warning') {
        logRow.classList.add('log-row-warning');
    }
    const fieldNames = [
        'time',
        'message',
        'sessionId',
        'sinkId',
        'mediaSource',
        'category',
        'component',
        'severity',
    ];
    fieldNames.forEach(fieldName => {
        const element = document.createElement('td');
        element.textContent = log[fieldName];
        logRow.appendChild(element);
    });
    return logRow;
}
// Build the table which displays Media Router logs.
function displayLogsTable(logs) {
    currentLogs = logs;
    const logsTbody = getRequiredElement('logs-tbody');
    assertInstanceof(logs, Array);
    // Clear existing logs.
    logsTbody.replaceChildren();
    for (const log of logs) {
        logsTbody.appendChild(createLogRow(log));
    }
}
function downloadSession() {
    const aggregatedData = {
        logs: currentLogs,
        generalState: currentGeneralState,
        sessionStatistics: {
            video: videoHistory.getAll(),
            audio: audioHistory.getAll(),
            session: sessionHistory.getAll(),
        },
        providerStates: currentProviderStates,
        mirroringStats: currentMirroringStats,
    };
    const blob = new Blob([JSON.stringify(aggregatedData, null, 2)], {
        type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download =
        `media_router_internals_session_${new Date().toISOString()}.json`;
    document.body.appendChild(a);
    a.click();
    // Clean up the blob and the anchor element after a short delay to ensure
    // the download was initiated.
    setTimeout(() => {
        URL.revokeObjectURL(url);
        a.remove();
    }, 2000);
}
function handleImportSession() {
    const input = getRequiredElement('import-input');
    if (!(input instanceof HTMLInputElement)) {
        return;
    }
    if (input.files && input.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const result = e.target?.result;
                const data = JSON.parse(result);
                // Restore state from imported data
                if (data.generalState) {
                    currentGeneralState = data.generalState;
                    getRequiredElement('sink-status-div').textContent =
                        formatJson(currentGeneralState);
                }
                if (data.providerStates) {
                    currentProviderStates = data.providerStates;
                    if (currentProviderStates['CAST']) {
                        getRequiredElement('cast-status-div').textContent =
                            formatJson(currentProviderStates['CAST']);
                    }
                }
                if (data.sessionStatistics) {
                    if (data.sessionStatistics.video) {
                        videoHistory.setAll(data.sessionStatistics.video);
                    }
                    if (data.sessionStatistics.audio) {
                        audioHistory.setAll(data.sessionStatistics.audio);
                    }
                    if (data.sessionStatistics.session) {
                        sessionHistory.setAll(data.sessionStatistics.session);
                    }
                    renderDashboard({ video: {}, audio: {} }, true);
                }
                if (data.mirroringStats) {
                    displayMirroringStats(data.mirroringStats, true);
                }
                if (data.logs) {
                    displayLogsTable(data.logs);
                }
            }
            catch (error) {
                console.error('Failed to parse imported session:', error);
                alert('Failed to parse imported session. See console for details.');
            }
        };
        const file = input.files[0];
        if (file) {
            reader.readAsText(file);
        }
    }
    // Reset input so the same file can be selected again if needed.
    input.value = '';
}
function clearSession() {
    currentLogs = [];
    currentGeneralState = {};
    currentMirroringStats = {};
    currentProviderStates = {};
    videoHistory.clear();
    audioHistory.clear();
    sessionHistory.clear();
    statCardCache.clear();
    getRequiredElement('logs-tbody').replaceChildren();
    getRequiredElement('sink-status-div').textContent = '';
    getRequiredElement('cast-status-div').textContent = '';
    getRequiredElement('mirroring-stats-div').textContent = '';
    getRequiredElement('video-stats-grid').replaceChildren();
    getRequiredElement('audio-stats-grid').replaceChildren();
    getRequiredElement('session-stats-grid').replaceChildren();
}
let isTracing = false;
let traceChunks = [];
function handleToggleTracing() {
    const button = getRequiredElement('toggle-tracing');
    if (!isTracing) {
        button.textContent = 'Starting...';
        button.disabled = true;
        traceChunks = []; // clear any old chunks
        sendWithPromise('startTracing').then((started) => {
            if (started) {
                isTracing = true;
                button.textContent = 'Stop Trace';
                button.disabled = false;
                button.classList.add('action-button'); // Highlight the active state
            }
            else {
                button.textContent = 'Trace Failed';
                setTimeout(() => {
                    button.textContent = 'Start Trace';
                    button.disabled = false;
                }, 2000);
            }
        });
    }
    else {
        button.textContent = 'Stopping...';
        button.disabled = true;
        sendWithPromise('stopTracing').then((success) => {
            isTracing = false;
            button.textContent = 'Start Trace';
            button.disabled = false;
            button.classList.remove('action-button');
            if (success && traceChunks.length > 0) {
                const blob = new Blob(traceChunks, { type: 'application/octet-stream' });
                traceChunks = []; // clear memory after creating blob
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download =
                    `media_router_internals_trace_${new Date().toISOString()}.pftrace`;
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                    URL.revokeObjectURL(url);
                    a.remove();
                }, 2000);
            }
            else {
                traceChunks = [];
            }
        });
    }
}
// Handles user events for the Media Router Internals UI.
document.addEventListener('DOMContentLoaded', function () {
    // Bind buttons
    getRequiredElement('download-session')
        .addEventListener('click', downloadSession);
    getRequiredElement('import-session').addEventListener('click', () => {
        getRequiredElement('import-input').click();
    });
    getRequiredElement('import-input')
        .addEventListener('change', handleImportSession);
    getRequiredElement('clear-session').addEventListener('click', clearSession);
    getRequiredElement('toggle-tracing')
        .addEventListener('click', handleToggleTracing);
    // Initial fetch
    sendWithPromise('getState').then((status) => {
        currentGeneralState = status;
        getRequiredElement('sink-status-div').textContent = formatJson(status);
    });
    sendWithPromise('getProviderState', 'CAST').then((status) => {
        currentProviderStates['CAST'] = status;
        getRequiredElement('cast-status-div').textContent = formatJson(status);
    });
    sendWithPromise('getLogs').then(displayLogsTable);
    sendWithPromise('getMirroringStats')
        .then((mirroringStats) => {
        displayMirroringStats(mirroringStats);
    });
    // The backend will fire 'on-mirroring-stats-update' when there are updates.
    addWebUiListener('on-mirroring-stats-update', displayMirroringStats);
    addWebUiListener('on-log-added', (log) => {
        currentLogs.push(log);
        const logsTbody = getRequiredElement('logs-tbody');
        logsTbody.appendChild(createLogRow(log));
    });
    addWebUiListener('on-trace-chunk', (base64Chunk) => {
        const binaryString = window.atob(base64Chunk);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        traceChunks.push(bytes);
    });
});
