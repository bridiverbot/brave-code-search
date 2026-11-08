// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './trace_report.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './trace_report_list.css.js';
import { getHtml } from './trace_report_list.html.js';
// clang-format on
import { TracesBrowserProxy } from './traces_browser_proxy.js';
export var NotificationType;
(function (NotificationType) {
    NotificationType["UPDATE"] = "Update";
    NotificationType["ERROR"] = "Error";
    NotificationType["ANNOUNCEMENT"] = "Announcement";
})(NotificationType || (NotificationType = {}));
export class Notification {
    type;
    label;
    constructor(type, label) {
        this.type = type;
        this.label = label;
    }
}
export class TraceReportListElement extends CrLitElement {
    static get is() {
        return 'trace-report-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            traces_: { type: Array },
            isLoading_: { type: Boolean },
            notification_: { type: Object },
        };
    }
    traceReportProxy_ = TracesBrowserProxy.getInstance();
    #traces__accessor_storage = [];
    get traces_() { return this.#traces__accessor_storage; }
    set traces_(value) { this.#traces__accessor_storage = value; }
    #isLoading__accessor_storage = false;
    get isLoading_() { return this.#isLoading__accessor_storage; }
    set isLoading_(value) { this.#isLoading__accessor_storage = value; }
    #notification__accessor_storage = undefined;
    get notification_() { return this.#notification__accessor_storage; }
    set notification_(value) { this.#notification__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.initializeList(true);
    }
    async initializeList(hasLoading = false) {
        this.isLoading_ = hasLoading;
        const { reports } = await this.traceReportProxy_.handler.getAllTraceReports();
        if (reports) {
            this.traces_ = reports;
        }
        else {
            this.traces_ = [];
            this.notification_ = new Notification(NotificationType.ERROR, 'Error: Could not retrieve any trace reports.');
            this.$.toast.show();
        }
        this.isLoading_ = false;
    }
    hasTraces_() {
        return this.traces_.length > 0;
    }
    onShowToast_(e) {
        assert(e.detail);
        this.notification_ = e.detail;
        this.$.toast.show();
    }
    getNotificationIcon_() {
        switch (this.getNotificationType_()) {
            case NotificationType.ANNOUNCEMENT:
                return 'cr:info';
            case NotificationType.ERROR:
                return 'cr:error';
            case NotificationType.UPDATE:
                return 'cr:sync';
            default:
                return 'cr:warning-filled';
        }
    }
    getNotificationStyling_() {
        switch (this.getNotificationType_()) {
            case NotificationType.ANNOUNCEMENT:
                return 'announcement';
            case NotificationType.ERROR:
                return 'error';
            case NotificationType.UPDATE:
                return 'update';
            default:
                return '';
        }
    }
    getNotificationLabel_() {
        return this.notification_?.label || '';
    }
    getNotificationType_() {
        return this.notification_?.type || '';
    }
    onRefreshTracesClick_() {
        this.initializeList();
    }
    onRefreshTracesRequest_() {
        this.onRefreshTracesClick_();
    }
    async onDeleteAllTracesClick_() {
        const { success } = await this.traceReportProxy_.handler.deleteAllTraces();
        if (!success) {
            this.dispatchToast_('Failed to delete to delete all traces.');
        }
        this.initializeList();
    }
    dispatchToast_(message) {
        this.fire('show-toast', new Notification(NotificationType.ERROR, message));
    }
}
customElements.define(TraceReportListElement.is, TraceReportListElement);
