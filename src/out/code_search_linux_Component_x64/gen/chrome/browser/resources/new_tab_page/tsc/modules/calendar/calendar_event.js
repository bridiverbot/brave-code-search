// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_chip/cr_chip.js';
import { assert } from 'chrome://resources/js/assert.js';
import { htmlEscape } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { I18nMixinLit } from '../../i18n_setup.js';
import { recordSmallCount } from '../../metrics_utils.js';
import { WindowProxy } from '../../window_proxy.js';
import { getCss } from './calendar_event.css.js';
import { getHtml } from './calendar_event.html.js';
import { CalendarAction, recordCalendarAction, toJsTimestamp } from './common.js';
const kAttachmentScrollFadeBuffer = 4;
const kMillisecondsInMinute = 60000;
const kMinutesInHour = 60;
const CalendarEventElementBase = I18nMixinLit(CrLitElement);
/**
 * The calendar event element for displaying a single event.
 */
export class CalendarEventElement extends CalendarEventElementBase {
    static get is() {
        return 'ntp-calendar-event';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            doubleBooked: { type: Boolean },
            event: { type: Object },
            expanded: {
                type: Boolean,
                reflect: true,
            },
            index: { type: Number },
            moduleName: { type: String },
            attachmentListClass_: { type: String },
            formattedStartTime_: { type: String },
            timeStatus_: { type: String },
        };
    }
    #doubleBooked_accessor_storage = false;
    get doubleBooked() { return this.#doubleBooked_accessor_storage; }
    set doubleBooked(value) { this.#doubleBooked_accessor_storage = value; }
    #event_accessor_storage = {
        title: '',
        startTime: { internalValue: BigInt(0) },
        endTime: { internalValue: BigInt(0) },
        url: '',
        attachments: [],
        location: null,
        conferenceUrl: null,
        isAccepted: false,
        hasOtherAttendee: false,
    };
    get event() { return this.#event_accessor_storage; }
    set event(value) { this.#event_accessor_storage = value; }
    #expanded_accessor_storage = false;
    get expanded() { return this.#expanded_accessor_storage; }
    set expanded(value) { this.#expanded_accessor_storage = value; }
    #index_accessor_storage = -1;
    get index() { return this.#index_accessor_storage; }
    set index(value) { this.#index_accessor_storage = value; }
    #moduleName_accessor_storage = '';
    get moduleName() { return this.#moduleName_accessor_storage; }
    set moduleName(value) { this.#moduleName_accessor_storage = value; }
    #attachmentListClass__accessor_storage = '';
    get attachmentListClass_() { return this.#attachmentListClass__accessor_storage; }
    set attachmentListClass_(value) { this.#attachmentListClass__accessor_storage = value; }
    #formattedStartTime__accessor_storage = '';
    get formattedStartTime_() { return this.#formattedStartTime__accessor_storage; }
    set formattedStartTime_(value) { this.#formattedStartTime__accessor_storage = value; }
    intersectionObserver_ = null;
    #timeStatus__accessor_storage = '';
    get timeStatus_() { return this.#timeStatus__accessor_storage; }
    set timeStatus_(value) { this.#timeStatus__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('event')) {
            this.formattedStartTime_ = this.computeFormattedStartTime_();
        }
        if (changedProperties.has('event') || changedProperties.has('expanded')) {
            this.timeStatus_ = this.computeTimeStatus_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if ((changedProperties.has('event') || changedProperties.has('expanded')) &&
            (this.expanded && this.showAttachments_())) {
            const attachmentList = this.renderRoot.querySelector('#attachmentList');
            if (attachmentList && attachmentList.children.length > 1) {
                const attachments = attachmentList.children;
                this.intersectionObserver_ =
                    new IntersectionObserver(() => this.updateAttachmentListClass_(), {
                        root: attachmentList,
                        threshold: 1.0,
                    });
                const firstAttachment = attachments[0];
                assert(firstAttachment);
                this.intersectionObserver_.observe(firstAttachment);
                const lastAttachment = attachments[attachments.length - 1];
                assert(lastAttachment);
                this.intersectionObserver_.observe(lastAttachment);
            }
        }
    }
    computeFormattedStartTime_() {
        const offsetDate = toJsTimestamp(this.event.startTime);
        const dateObj = new Date(offsetDate);
        let timeStr = Intl.DateTimeFormat(undefined, { timeStyle: 'short' }).format(dateObj);
        // Remove extra spacing and make AM/PM lower case.
        timeStr = timeStr.replace(' AM', 'am').replace(' PM', 'pm');
        return timeStr;
    }
    computeTimeStatus_() {
        if (!this.expanded) {
            return '';
        }
        // Start time of event in milliseconds since Windows epoch.
        const startTime = toJsTimestamp(this.event.startTime);
        // Current time in milliseconds since Windows epoch.
        const now = WindowProxy.getInstance().now().valueOf();
        const minutesUntilMeeting = Math.round((startTime - now) / kMillisecondsInMinute);
        if (minutesUntilMeeting <= 0) {
            return this.i18n('modulesCalendarInProgress');
        }
        if (minutesUntilMeeting < kMinutesInHour) {
            return this.i18n('modulesCalendarInXMin', minutesUntilMeeting.toString());
        }
        const hoursUntilMeeting = minutesUntilMeeting / kMinutesInHour;
        return this.i18n('modulesCalendarInXHr', Math.round(hoursUntilMeeting).toString());
    }
    isAttachmentDisabled_(index) {
        const attachment = this.event.attachments[index];
        assert(attachment);
        return !attachment.resourceUrl;
    }
    onAttachmentClick_(e) {
        this.dispatchEvent(new Event('usage', { composed: true, bubbles: true }));
        recordCalendarAction(CalendarAction.ATTACHMENT_CLICKED, this.moduleName);
        const currentTarget = e.currentTarget;
        const index = Number(currentTarget.dataset['index']);
        assert(this.event.attachments[index]);
        const resourceUrl = this.event.attachments[index].resourceUrl;
        if (resourceUrl) {
            WindowProxy.getInstance().navigate(resourceUrl);
        }
    }
    onVideoConferenceClick_() {
        this.dispatchEvent(new Event('usage', { composed: true, bubbles: true }));
        recordCalendarAction(CalendarAction.CONFERENCE_CALL_CLICKED, this.moduleName);
        WindowProxy.getInstance().navigate(this.event.conferenceUrl);
    }
    onHeaderClick_() {
        this.dispatchEvent(new Event('usage', { composed: true, bubbles: true }));
        let action = CalendarAction.BASIC_EVENT_HEADER_CLICKED;
        if (this.expanded) {
            action = CalendarAction.EXPANDED_EVENT_HEADER_CLICKED;
        }
        else if (this.doubleBooked) {
            action = CalendarAction.DOUBLE_BOOKED_EVENT_HEADER_CLICKED;
        }
        recordCalendarAction(action, this.moduleName);
        recordSmallCount(`NewTabPage.${this.moduleName}.EventClickIndex`, this.index);
    }
    getConferenceButtonAriaLabel_() {
        return this.i18n('modulesCalendarJoinMeetingButtonAcc', htmlEscape(this.event.title));
    }
    showConferenceButton_() {
        return !!this.event.conferenceUrl;
    }
    showAttachments_() {
        return this.event.attachments.length > 0;
    }
    showLocation_() {
        return !!this.event.location;
    }
    updateAttachmentListClass_() {
        const attachmentList = this.renderRoot.querySelector('#attachmentList');
        if (!attachmentList) {
            this.attachmentListClass_ = '';
            return;
        }
        const scrollableRight = (attachmentList.scrollWidth - attachmentList.scrollLeft -
            kAttachmentScrollFadeBuffer) > attachmentList.clientWidth;
        const scrollableLeft = attachmentList.scrollLeft - kAttachmentScrollFadeBuffer > 0;
        if (scrollableRight && scrollableLeft) {
            this.attachmentListClass_ = 'scrollable';
        }
        else if (scrollableRight) {
            this.attachmentListClass_ = 'scrollable-right';
        }
        else if (scrollableLeft) {
            this.attachmentListClass_ = 'scrollable-left';
        }
        else {
            this.attachmentListClass_ = '';
        }
    }
}
customElements.define(CalendarEventElement.is, CalendarEventElement);
