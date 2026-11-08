// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getOrCreateDetailsProvider } from './discards.js';
import { SECTION_DEFS } from './memory_section_defs.js';
import { getCss } from './memory_tab.css.js';
import { getHtml } from './memory_tab.html.js';
import { SortedTableMixinLit } from './sorted_table_mixin_lit.js';
const HISTORY_LENGTH = 10;
const DEAD_TICKS_RETENTION = 5;
const REFRESH_INTERVAL_MS = 2000;
/**
 * Computes a percentage magnitude [1, 100] relative to a maximum value, or
 * returns 0 if the maximum is non-positive.
 */
function computeMagnitudePercent(valueKb, maxKb) {
    return maxKb > 0 ?
        Math.min(100, Math.max(1, Math.round((valueKb / maxKb) * 100))) :
        0;
}
export function formatBytesInMb(bytes) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
export function formatKibInMb(kib) {
    return `${(kib / 1024).toFixed(1)} MB`;
}
const MemoryTabElementBase = SortedTableMixinLit(CrLitElement);
export class MemoryTabElement extends MemoryTabElementBase {
    static get is() {
        return 'memory-tab';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isPaused_: { type: Boolean },
            processes_: { type: Array },
            lastUpdated_: { type: String },
            maxPrivateFootprintKb_: { type: Number },
            expandedPids_: { type: Object },
            expandedSections_: { type: Object },
            expandedMetrics_: { type: Object },
        };
    }
    #isPaused__accessor_storage = false;
    // Whether polling for new memory dumps is paused.
    get isPaused_() { return this.#isPaused__accessor_storage; }
    set isPaused_(value) { this.#isPaused__accessor_storage = value; }
    #processes__accessor_storage = [];
    // The list of process rows displayed in the table.
    get processes_() { return this.#processes__accessor_storage; }
    set processes_(value) { this.#processes__accessor_storage = value; }
    #lastUpdated__accessor_storage = '';
    // Formatted timestamp of the last successful data refresh.
    get lastUpdated_() { return this.#lastUpdated__accessor_storage; }
    set lastUpdated_(value) { this.#lastUpdated__accessor_storage = value; }
    #maxPrivateFootprintKb__accessor_storage = 1;
    // Maximum private memory footprint (in KiB) across active processes,
    // used as the global reference scale for sparklines and magnitude bars.
    get maxPrivateFootprintKb_() { return this.#maxPrivateFootprintKb__accessor_storage; }
    set maxPrivateFootprintKb_(value) { this.#maxPrivateFootprintKb__accessor_storage = value; }
    #expandedPids__accessor_storage = new Set();
    // Set of process IDs whose metric breakdown sections are expanded.
    get expandedPids_() { return this.#expandedPids__accessor_storage; }
    set expandedPids_(value) { this.#expandedPids__accessor_storage = value; }
    #expandedSections__accessor_storage = new Set();
    // Set of expanded section keys in the format `${pid}:${sectionId}`.
    get expandedSections_() { return this.#expandedSections__accessor_storage; }
    set expandedSections_(value) { this.#expandedSections__accessor_storage = value; }
    #expandedMetrics__accessor_storage = new Set();
    // Set of expanded metric keys in the format
    // `${pid}:${sectionId}:${metricId}`.
    get expandedMetrics_() { return this.#expandedMetrics__accessor_storage; }
    set expandedMetrics_(value) { this.#expandedMetrics__accessor_storage = value; }
    // Remote interface for querying memory dump data from the browser process.
    discardsDetailsProvider_;
    // Timer ID for the recurring polling interval.
    timerId_ = null;
    // Guard to prevent overlapping fetch requests.
    isFetching_ = false;
    // Set of active PIDs from the previous update cycle, used to detect
    // process terminations.
    previousActivePids_ = new Set();
    // Map of PID -> (metric key -> history array) for tracking sub-metric
    // trend lines.
    historyMap_ = new Map();
    // Map of PID -> private footprint history array for top-level sparklines.
    processHistoryMap_ = new Map();
    // Map of PID -> DeadProcessInfo for retaining terminated processes.
    deadProcessesMap_ = new Map();
    constructor() {
        super();
        this.discardsDetailsProvider_ = getOrCreateDetailsProvider();
        this.sortKey = 'privateFootprintKb';
        this.sortReverse = true;
    }
    connectedCallback() {
        super.connectedCallback();
        this.startPolling_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.stopPolling_();
    }
    startPolling_() {
        this.stopPolling_();
        this.fetchData_();
        this.timerId_ = window.setInterval(() => {
            if (!this.isPaused_) {
                this.fetchData_();
            }
        }, REFRESH_INTERVAL_MS);
    }
    stopPolling_() {
        if (this.timerId_ !== null) {
            window.clearInterval(this.timerId_);
            this.timerId_ = null;
        }
    }
    onTogglePauseClick_() {
        this.isPaused_ = !this.isPaused_;
        if (!this.isPaused_) {
            this.fetchData_();
        }
    }
    onProcessRowClick_(e) {
        const target = e.currentTarget;
        const pid = Number(target.dataset['pid']);
        const nextPids = new Set(this.expandedPids_);
        const nextSections = new Set(this.expandedSections_);
        if (nextPids.has(pid)) {
            nextPids.delete(pid);
        }
        else {
            nextPids.add(pid);
            for (const section of SECTION_DEFS) {
                nextSections.add(`${pid}:${section.id}`);
            }
        }
        this.expandedPids_ = nextPids;
        this.expandedSections_ = nextSections;
    }
    onSectionRowClick_(e) {
        e.stopPropagation();
        const target = e.currentTarget;
        const pid = Number(target.dataset['pid']);
        const sectionId = target.dataset['sectionId'];
        const key = `${pid}:${sectionId}`;
        const next = new Set(this.expandedSections_);
        if (next.has(key)) {
            next.delete(key);
        }
        else {
            next.add(key);
        }
        this.expandedSections_ = next;
    }
    isExpanded_(pid) {
        return this.expandedPids_.has(pid);
    }
    isSectionExpanded_(pid, sectionId) {
        return this.expandedSections_.has(`${pid}:${sectionId}`);
    }
    onMetricRowClick_(e) {
        e.stopPropagation();
        const target = e.currentTarget;
        const pid = Number(target.dataset['pid']);
        const sectionId = target.dataset['sectionId'];
        const metricId = target.dataset['metricId'];
        if (!metricId) {
            return;
        }
        const key = `${pid}:${sectionId}:${metricId}`;
        const next = new Set(this.expandedMetrics_);
        if (next.has(key)) {
            next.delete(key);
        }
        else {
            next.add(key);
        }
        this.expandedMetrics_ = next;
    }
    isMetricExpanded_(pid, sectionId, metricId) {
        if (!metricId) {
            return false;
        }
        return this.expandedMetrics_.has(`${pid}:${sectionId}:${metricId}`);
    }
    getVisibleSectionMetrics_(pid, section) {
        const result = [];
        for (const metric of section.metrics) {
            result.push({ row: metric, isSubMetric: false });
            if (metric.subMetrics?.length &&
                this.isMetricExpanded_(pid, section.id, metric.id)) {
                for (const subMetric of metric.subMetrics) {
                    result.push({ row: subMetric, isSubMetric: true });
                }
            }
        }
        return result;
    }
    getToggleArrowClass_(expanded) {
        return expanded ? 'toggle-arrow expanded' : 'toggle-arrow';
    }
    getMagnitudeStyle_(percent) {
        return `width: ${percent}%;`;
    }
    getMetricRowClass_(metric, isSubMetric) {
        if (isSubMetric) {
            return 'sub-table-row sub-metric-row';
        }
        return metric.subMetrics?.length ? 'sub-table-row expandable-metric-row' :
            'sub-table-row';
    }
    getMetricLabelClass_(isSubMetric) {
        return isSubMetric ? 'sub-td-label sub-metric-td-label' : 'sub-td-label';
    }
    getSparklineBarClass_(bar) {
        const classes = ['sparkline-bar'];
        if (bar.isEmpty) {
            classes.push('empty');
        }
        if (bar.isError) {
            classes.push('error');
        }
        return classes.join(' ');
    }
    getSparklineBarTitle_(bar) {
        if (bar.isEmpty) {
            return '';
        }
        if (bar.isError) {
            return 'Memory dump unavailable';
        }
        return bar.value !== null ? bar.value.toLocaleString() : '';
    }
    /**
     * Converts a history array of metric samples into 10 sparkline bar models.
     * Missing leading slots are filled with empty placeholder bars.
     *
     * @param history Array of historical samples (null = missing, <0 = error).
     * @param maxScale Optional reference maximum for scaling bar heights
     *     globally. If omitted, scales locally against the max valid sample.
     * @return Array of 10 SparklineBar objects ready for rendering.
     */
    getSparklineBars(history, maxScale) {
        const validValues = history.filter((val) => val !== null && val >= 0);
        const maxVal = maxScale ?? (validValues.length > 0 ? Math.max(...validValues, 1) : 1);
        const totalSlots = 10;
        const maxHeight = 18;
        const padded = [];
        const missing = Math.max(0, totalSlots - history.length);
        for (let i = 0; i < missing; i++) {
            padded.push(null);
        }
        for (const val of history) {
            padded.push(val);
        }
        return padded.map((val) => {
            if (val === null) {
                return {
                    height: 2,
                    value: null,
                    isEmpty: true,
                    isError: false,
                };
            }
            if (val < 0) {
                return {
                    height: 8,
                    value: null,
                    isEmpty: false,
                    isError: true,
                };
            }
            const barHeight = val > 0 && maxVal > 0 ?
                Math.min(maxHeight, Math.max(2, Math.round((val / maxVal) * maxHeight))) :
                2;
            return {
                height: barHeight,
                value: val,
                isEmpty: false,
                isError: false,
            };
        });
    }
    async fetchData_() {
        if (this.isFetching_) {
            return;
        }
        this.isFetching_ = true;
        try {
            const response = await this.discardsDetailsProvider_.getProcessMemoryDumps();
            if (response.processDumps && response.processDumps.length > 0) {
                this.processData_(response.processDumps, response.processDescriptions || []);
                const now = new Date();
                this.lastUpdated_ = now.toLocaleTimeString();
            }
        }
        catch (e) {
            console.error('Failed to fetch process memory dumps', e);
        }
        finally {
            this.isFetching_ = false;
        }
    }
    /**
     * Safely extracts a numeric metric value from a process memory dump allocator
     * entry.
     *
     * @param dump The process memory dump containing allocator dumps.
     * @param dumpName Name of the allocator dump in chromeAllocatorDumps.
     * @param metricName Name of the numeric metric within numericEntries.
     * @return The numeric value if present, or null otherwise.
     */
    getNumericEntryValue_(dump, dumpName, metricName) {
        if (!dump.chromeAllocatorDumps) {
            return null;
        }
        const allocatorDump = dump.chromeAllocatorDumps[dumpName];
        if (!allocatorDump || !allocatorDump.numericEntries) {
            return null;
        }
        const val = allocatorDump.numericEntries[metricName];
        return val !== undefined ? Number(val) : null;
    }
    buildMetricRow_(def, dump, hasDump, privateFootprintKb, maxPmfKb, pidMetricHistories, subMetrics) {
        let rawVal = null;
        let formatted = '--';
        let magnitudePercent = null;
        if (hasDump) {
            if (def.dumpName === '') {
                if (def.metricName === 'private_footprint_kb') {
                    rawVal = privateFootprintKb;
                    formatted = formatKibInMb(rawVal);
                    magnitudePercent = computeMagnitudePercent(rawVal, maxPmfKb);
                }
                else if (def.metricName === 'resident_set_kb') {
                    rawVal = dump.osDump.residentSetKb;
                    formatted = formatKibInMb(rawVal);
                    magnitudePercent = computeMagnitudePercent(rawVal, maxPmfKb);
                }
                else if (def.metricName === 'shared_footprint_kb') {
                    rawVal = dump.osDump.sharedFootprintKb;
                    formatted = formatKibInMb(rawVal);
                    magnitudePercent = computeMagnitudePercent(rawVal, maxPmfKb);
                }
            }
            else {
                rawVal =
                    this.getNumericEntryValue_(dump, def.dumpName, def.metricName);
                if (rawVal === null && def.defaultToZeroIfDumpPresent &&
                    dump.chromeAllocatorDumps?.[def.dumpName]?.numericEntries) {
                    rawVal = 0;
                }
                if (rawVal !== null) {
                    if (def.unit === 'bytes') {
                        formatted = formatBytesInMb(rawVal);
                        magnitudePercent = computeMagnitudePercent(rawVal / 1024, maxPmfKb);
                    }
                    else if (def.unit === 'kib') {
                        formatted = formatKibInMb(rawVal);
                        magnitudePercent = computeMagnitudePercent(rawVal, maxPmfKb);
                    }
                    else if (def.unit === 'count') {
                        formatted = rawVal.toLocaleString();
                        magnitudePercent = null;
                    }
                    else if (def.unit === 'percent') {
                        formatted = `${rawVal.toFixed(1)}%`;
                        magnitudePercent = null;
                    }
                }
            }
        }
        const metricKey = `${def.dumpName}:${def.metricName}`;
        let history = pidMetricHistories.get(metricKey) || [];
        const metricSample = (hasDump && rawVal !== null) ? rawVal : (hasDump ? null : -1);
        history = [...history.slice(-(HISTORY_LENGTH - 1)), metricSample];
        pidMetricHistories.set(metricKey, history);
        let maxScale = undefined;
        if (def.unit === 'kib') {
            maxScale = maxPmfKb;
        }
        else if (def.unit === 'bytes') {
            maxScale = maxPmfKb * 1024;
        }
        else if (def.unit === 'percent') {
            maxScale = 100;
        }
        const hasReceivedData = history.some(val => val !== null && val > 0);
        const hasSubMetrics = Boolean(subMetrics && subMetrics.length > 0);
        if (!hasReceivedData && !hasSubMetrics) {
            if (def.defaultToZeroIfDumpPresent) {
                pidMetricHistories.delete(metricKey);
            }
            return null;
        }
        return {
            id: hasSubMetrics ? metricKey : undefined,
            label: def.label,
            valueFormatted: formatted,
            magnitudePercent,
            history,
            maxScale,
            subMetrics: hasSubMetrics ? subMetrics : undefined,
        };
    }
    processData_(dumps, descriptions) {
        const descMap = new Map();
        if (descriptions) {
            for (const desc of descriptions) {
                const pid = typeof desc.pid === 'object' && desc.pid !== null ?
                    desc.pid.pid :
                    Number(desc.pid);
                descMap.set(pid, desc.description);
            }
        }
        const dumpMap = new Map();
        for (const dump of dumps) {
            const pid = typeof dump.pid === 'object' && dump.pid !== null ?
                dump.pid.pid :
                Number(dump.pid);
            dumpMap.set(pid, dump);
        }
        // Process descriptions are the primary source of truth for active
        // processes. Also include any extra processes present in the dumps.
        const allPids = new Set(descMap.keys());
        for (const pid of dumpMap.keys()) {
            allPids.add(pid);
        }
        const activePids = new Set();
        const newProcessRows = [];
        // Calculate max Private Footprint across all active processes for global
        // magnitude scaling.
        let maxPmfKb = 1;
        for (const dump of dumps) {
            if (dump.osDump) {
                const pmfKb = dump.osDump.privateFootprintKb;
                if (pmfKb > maxPmfKb) {
                    maxPmfKb = pmfKb;
                }
            }
        }
        for (const pid of allPids) {
            activePids.add(pid);
            this.deadProcessesMap_.delete(pid);
            const dump = dumpMap.get(pid);
            const hasDump = Boolean(dump && dump.osDump);
            const privateFootprintKb = hasDump ? dump.osDump.privateFootprintKb : -1;
            const historySample = hasDump ? privateFootprintKb : -1;
            // Update process history.
            let procHistory = this.processHistoryMap_.get(pid) || [];
            procHistory =
                [...procHistory.slice(-(HISTORY_LENGTH - 1)), historySample];
            this.processHistoryMap_.set(pid, procHistory);
            // Get or create metric history map for this PID.
            let pidMetricHistories = this.historyMap_.get(pid);
            if (!pidMetricHistories) {
                pidMetricHistories = new Map();
                this.historyMap_.set(pid, pidMetricHistories);
            }
            // Collect sections for this process.
            const sections = [];
            for (const sectionDef of SECTION_DEFS) {
                const metricRows = [];
                for (const def of sectionDef.metrics) {
                    let subMetrics = undefined;
                    if (def.subMetrics || def.dynamicSubMetrics) {
                        subMetrics = [];
                        if (def.subMetrics) {
                            for (const subDef of def.subMetrics) {
                                const subRow = this.buildMetricRow_(subDef, dump, hasDump, privateFootprintKb, maxPmfKb, pidMetricHistories);
                                if (subRow) {
                                    subMetrics.push(subRow);
                                }
                            }
                        }
                        if (def.dynamicSubMetrics) {
                            const dyn = def.dynamicSubMetrics;
                            const dynamicMetricNames = new Set();
                            if (hasDump && dump.chromeAllocatorDumps) {
                                const allocatorDump = dump.chromeAllocatorDumps[def.dumpName];
                                if (allocatorDump && allocatorDump.numericEntries) {
                                    for (const key of Object.keys(allocatorDump.numericEntries)) {
                                        if (key.startsWith(dyn.prefix)) {
                                            dynamicMetricNames.add(key);
                                        }
                                    }
                                }
                            }
                            const historyPrefix = `${def.dumpName}:${dyn.prefix}`;
                            for (const key of pidMetricHistories.keys()) {
                                if (key.startsWith(historyPrefix)) {
                                    dynamicMetricNames.add(key.substring(def.dumpName.length + 1));
                                }
                            }
                            const dynamicRows = [];
                            for (const metricName of dynamicMetricNames) {
                                const subLabel = metricName.substring(dyn.prefix.length);
                                const row = this.buildMetricRow_({
                                    label: `${dyn.labelPrefix}${subLabel}`,
                                    dumpName: def.dumpName,
                                    metricName,
                                    unit: dyn.unit,
                                    defaultToZeroIfDumpPresent: true,
                                }, dump, hasDump, privateFootprintKb, maxPmfKb, pidMetricHistories);
                                if (row) {
                                    const currentVal = hasDump ?
                                        (this.getNumericEntryValue_(dump, def.dumpName, metricName) ??
                                            0) :
                                        0;
                                    dynamicRows.push({ row, currentVal });
                                }
                            }
                            dynamicRows.sort((a, b) => b.currentVal - a.currentVal ||
                                a.row.label.localeCompare(b.row.label));
                            for (const item of dynamicRows) {
                                subMetrics.push(item.row);
                            }
                        }
                    }
                    const row = this.buildMetricRow_(def, dump, hasDump, privateFootprintKb, maxPmfKb, pidMetricHistories, subMetrics);
                    if (row) {
                        metricRows.push(row);
                    }
                }
                // Only include sections that have at least one metric with valid data.
                if (metricRows.length > 0) {
                    let totalFormatted = null;
                    if (['malloc', 'partition_alloc', 'blink_gc', 'v8'].includes(sectionDef.id)) {
                        const firstMetric = metricRows[0];
                        if (firstMetric) {
                            totalFormatted = firstMetric.valueFormatted;
                        }
                    }
                    sections.push({
                        id: sectionDef.id,
                        label: sectionDef.label,
                        totalFormatted,
                        metrics: metricRows,
                    });
                }
            }
            let desc = descMap.get(pid);
            if (!desc) {
                if (dump && dump.serviceName) {
                    desc = `Service: ${dump.serviceName}`;
                }
                else {
                    desc = `Process ${pid}`;
                }
            }
            const processMagnitude = hasDump ? computeMagnitudePercent(privateFootprintKb, maxPmfKb) : 0;
            const activeRow = {
                pid,
                description: desc,
                privateFootprintKb,
                privateFootprintFormatted: hasDump ? formatKibInMb(privateFootprintKb) :
                    '--',
                magnitudePercent: processMagnitude,
                history: procHistory,
                sections,
                isDead: false,
                hasDumpError: !hasDump,
            };
            newProcessRows.push(activeRow);
        }
        this.maxPrivateFootprintKb_ = maxPmfKb;
        // Register newly terminated processes that were active in the previous
        // cycle but are no longer active.
        for (const prevRow of this.processes_) {
            if (this.previousActivePids_.has(prevRow.pid) &&
                !activePids.has(prevRow.pid) &&
                !this.deadProcessesMap_.has(prevRow.pid)) {
                const deadRow = {
                    ...prevRow,
                    isDead: true,
                };
                this.deadProcessesMap_.set(prevRow.pid, {
                    row: deadRow,
                    deadTicksRemaining: DEAD_TICKS_RETENTION,
                });
            }
        }
        this.previousActivePids_ = activePids;
        // Retain recently terminated processes for a fixed duration (frozen
        // history).
        for (const [pid, deadInfo] of this.deadProcessesMap_.entries()) {
            if (!activePids.has(pid)) {
                deadInfo.deadTicksRemaining--;
                if (deadInfo.deadTicksRemaining > 0) {
                    newProcessRows.push(deadInfo.row);
                }
                else {
                    this.deadProcessesMap_.delete(pid);
                    this.processHistoryMap_.delete(pid);
                    this.historyMap_.delete(pid);
                }
            }
        }
        this.processes_ = newProcessRows;
    }
    getSortedProcesses_() {
        const list = [...this.processes_];
        list.sort((a, b) => {
            // Put dead processes after active processes unless sorting specifically
            // by pid/desc
            if (a.isDead !== b.isDead) {
                return a.isDead ? 1 : -1;
            }
            let cmp = 0;
            if (this.sortKey === 'pid') {
                cmp = a.pid - b.pid;
            }
            else if (this.sortKey === 'description') {
                cmp = a.description.localeCompare(b.description);
            }
            else {
                cmp = a.privateFootprintKb - b.privateFootprintKb;
            }
            return this.sortReverse ? -cmp : cmp;
        });
        return list;
    }
}
customElements.define(MemoryTabElement.is, MemoryTabElement);
