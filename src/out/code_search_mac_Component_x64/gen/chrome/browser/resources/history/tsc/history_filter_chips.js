/* Copyright 2026 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */
// 
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_chip/cr_chip.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getCss } from './history_filter_chips.css.js';
import { getHtml } from './history_filter_chips.html.js';
export class HistoryFilterChipsElement extends CrLitElement {
    static get is() {
        return 'history-filter-chips';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            showDeviceFilter: { type: Boolean },
            devices: { type: Array },
            timePeriodOptions: { type: Array },
            showTimePeriodFilter: { type: Boolean },
            showActorFilter: { type: Boolean },
            userVisits: { type: Boolean },
            actorVisits: { type: Boolean },
            clientIds: { type: Array },
        };
    }
    #showDeviceFilter_accessor_storage = false;
    get showDeviceFilter() { return this.#showDeviceFilter_accessor_storage; }
    set showDeviceFilter(value) { this.#showDeviceFilter_accessor_storage = value; }
    #devices_accessor_storage = [];
    get devices() { return this.#devices_accessor_storage; }
    set devices(value) { this.#devices_accessor_storage = value; }
    #timePeriodOptions_accessor_storage = [];
    get timePeriodOptions() { return this.#timePeriodOptions_accessor_storage; }
    set timePeriodOptions(value) { this.#timePeriodOptions_accessor_storage = value; }
    #showTimePeriodFilter_accessor_storage = false;
    get showTimePeriodFilter() { return this.#showTimePeriodFilter_accessor_storage; }
    set showTimePeriodFilter(value) { this.#showTimePeriodFilter_accessor_storage = value; }
    #showActorFilter_accessor_storage = false;
    get showActorFilter() { return this.#showActorFilter_accessor_storage; }
    set showActorFilter(value) { this.#showActorFilter_accessor_storage = value; }
    #userVisits_accessor_storage = true;
    // These values are used to filter the history query; true indicates that
    // results for the respective value should be included.
    get userVisits() { return this.#userVisits_accessor_storage; }
    set userVisits(value) { this.#userVisits_accessor_storage = value; }
    #actorVisits_accessor_storage = true;
    get actorVisits() { return this.#actorVisits_accessor_storage; }
    set actorVisits(value) { this.#actorVisits_accessor_storage = value; }
    #clientIds_accessor_storage = [];
    get clientIds() { return this.#clientIds_accessor_storage; }
    set clientIds(value) { this.#clientIds_accessor_storage = value; }
    isUserSelected() {
        return this.userVisits && !this.actorVisits;
    }
    isActorSelected() {
        return this.actorVisits && !this.userVisits;
    }
    isDeviceSelected_(device) {
        return this.clientIds.length > 0 &&
            this.clientIds.length === device.ids.length &&
            this.clientIds.every((id, index) => id === device.ids[index]);
    }
    hasActiveFilter_() {
        const hasActiveActorDropdownFilter = this.showActorFilterDropDownVersion_() &&
            (this.isUserSelected() || this.isActorSelected());
        return hasActiveActorDropdownFilter || this.clientIds.length > 0;
    }
    onActorSelectMousedown_() {
        BrowserProxyImpl.getInstance().recordAction('HistoryPage_OpenActorFilterSheet');
    }
    onActorSelectChange_(e) {
        const value = e.target.value;
        if (value === 'user') {
            this.userVisits = true;
            this.actorVisits = false;
        }
        else if (value === 'actor') {
            this.userVisits = false;
            this.actorVisits = true;
        }
        else {
            this.userVisits = true;
            this.actorVisits = true;
        }
        this.recordMetrics_(this.userVisits, this.actorVisits);
        this.fireChange_(this.userVisits, this.actorVisits);
    }
    onDeviceSelectMousedown_() {
        BrowserProxyImpl.getInstance().recordAction('HistoryPage_OpenDeviceFilterSheet');
    }
    onDeviceSelectChange_(e) {
        const select = e.target;
        const index = Number(select.value);
        const device = index >= 0 ? this.devices[index] : undefined;
        this.clientIds = device ? device.ids : [];
        // Do not record metrics for the default option.
        if (device) {
            BrowserProxyImpl.getInstance().recordAction('HistoryPage_DeviceFilterSelected');
        }
        this.fireChange_(this.userVisits, this.actorVisits);
    }
    async onClearAllClick_() {
        this.userVisits = true;
        this.actorVisits = true;
        this.clientIds = [];
        BrowserProxyImpl.getInstance().recordAction('HistoryPage_ClearAllFilters');
        this.fireChange_(this.userVisits, this.actorVisits);
        await this.updateComplete;
        this.focusFirstFilter_();
    }
    onUserVisitsClick_() {
        this.userVisits = true;
        this.actorVisits = !this.actorVisits;
        this.recordMetrics_(this.userVisits, this.actorVisits);
        this.fireChange_(this.userVisits, this.actorVisits);
    }
    onActorVisitsClick_() {
        this.actorVisits = true;
        this.userVisits = !this.userVisits;
        this.recordMetrics_(this.userVisits, this.actorVisits);
        this.fireChange_(this.userVisits, this.actorVisits);
    }
    recordMetrics_(newUserState, newActorState) {
        let action = '';
        if (newUserState && newActorState) {
            action = 'HistoryPage_ShowAllEnabled';
        }
        else if (newUserState && !newActorState) {
            action = 'HistoryPage_ShowUserOnlyEnabled';
        }
        else if (!newUserState && newActorState) {
            action = 'HistoryPage_ShowActorOnlyEnabled';
        }
        if (action !== '') {
            BrowserProxyImpl.getInstance().recordAction(action);
        }
    }
    getUserVisitsIcon_() {
        if (this.isUserSelected()) {
            return 'cr:check';
        }
        return this.isCriticalActionsEnabled_() ? 'cr:person' : 'cr:person-filled';
    }
    getActorVisitsIcon_() {
        if (this.isActorSelected()) {
            return 'cr:check';
        }
        // 
        // 
        return '';
        // 
    }
    showActorFilterDropDownVersion_() {
        return loadTimeData.getBoolean('isBrowsingHistoryFilterByActorEnabled');
    }
    isCriticalActionsEnabled_() {
        return loadTimeData.valueExists('isCriticalActionsEnabled') &&
            loadTimeData.getBoolean('isCriticalActionsEnabled');
    }
    focusFirstFilter_() {
        this.shadowRoot.querySelector('select')?.focus();
    }
    fireChange_(userVisits, actorVisits) {
        this.fire('filter-changed', {
            userVisits,
            actorVisits,
            clientIds: this.clientIds,
        });
    }
}
customElements.define(HistoryFilterChipsElement.is, HistoryFilterChipsElement);
