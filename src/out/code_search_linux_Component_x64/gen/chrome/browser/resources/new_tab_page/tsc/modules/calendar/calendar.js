// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './calendar_event.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { recordSmallCount } from '../../metrics_utils.js';
import { WindowProxy } from '../../window_proxy.js';
import { getCss } from './calendar.css.js';
import { getHtml } from './calendar.html.js';
import { CalendarAction, recordCalendarAction, toJsTimestamp } from './common.js';
/**
 * The calendar element for displaying the user's list of events. .
 */
export class CalendarElement extends CrLitElement {
    static get is() {
        return 'ntp-calendar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            calendarLink: { type: String },
            events: { type: Array },
            moduleName: { type: String },
            doubleBookedIndices_: { type: Array },
            expandedEventIndex_: { type: Number },
        };
    }
    #calendarLink_accessor_storage = '';
    get calendarLink() { return this.#calendarLink_accessor_storage; }
    set calendarLink(value) { this.#calendarLink_accessor_storage = value; }
    #events_accessor_storage = [];
    get events() { return this.#events_accessor_storage; }
    set events(value) { this.#events_accessor_storage = value; }
    #moduleName_accessor_storage = '';
    get moduleName() { return this.#moduleName_accessor_storage; }
    set moduleName(value) { this.#moduleName_accessor_storage = value; }
    #doubleBookedIndices__accessor_storage = [];
    get doubleBookedIndices_() { return this.#doubleBookedIndices__accessor_storage; }
    set doubleBookedIndices_(value) { this.#doubleBookedIndices__accessor_storage = value; }
    #expandedEventIndex__accessor_storage = -1;
    get expandedEventIndex_() { return this.#expandedEventIndex__accessor_storage; }
    set expandedEventIndex_(value) { this.#expandedEventIndex__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('events')) {
            recordSmallCount(`NewTabPage.${this.moduleName}.ShownEvents`, this.events.length);
            this.expandedEventIndex_ = this.computeExpandedEventIndex_();
            if (this.expandedEventIndex_ !== -1) {
                this.sortEvents_();
                this.doubleBookedIndices_ = this.computeDoubleBookedIndices_();
            }
        }
    }
    computeDoubleBookedIndices_() {
        const results = [];
        const expandedEvent = this.events[this.expandedEventIndex_];
        assert(expandedEvent);
        for (let i = this.expandedEventIndex_ + 1; i < this.events.length; i++) {
            if (this.events[i].startTime.internalValue ===
                expandedEvent.startTime.internalValue) {
                results.push(i);
            }
            else {
                break;
            }
        }
        return results;
    }
    compareEventPriority_(eventAIndex, eventBIndex, soon) {
        const eventA = this.events[eventAIndex];
        assert(eventA);
        const eventB = this.events[eventBIndex];
        assert(eventB);
        const eventAStartTime = toJsTimestamp(eventA.startTime);
        const eventBStartTime = toJsTimestamp(eventB.startTime);
        const eventAInProgress = eventAStartTime <= soon;
        const eventBInProgress = eventBStartTime <= soon;
        // Check if either is in progress or starting soon and the other isn't.
        if (eventAInProgress !== eventBInProgress) {
            return +eventBInProgress - +eventAInProgress;
        }
        const eventAEndsSoon = toJsTimestamp(eventA.endTime) <= soon;
        const eventBEndsSoon = toJsTimestamp(eventB.endTime) <= soon;
        // Check if either is ending soon and the other isn't.
        if (eventAEndsSoon !== eventBEndsSoon) {
            return +eventAEndsSoon - +eventBEndsSoon;
        }
        // Check for startTime. But only prioritize by this if both are not in
        // progress or soon.
        if (!eventAInProgress && !eventBInProgress &&
            eventAStartTime !== eventBStartTime) {
            return eventAStartTime - eventBStartTime;
        }
        // Check if event is accepted.
        if (eventA.isAccepted !== eventB.isAccepted) {
            return +eventB.isAccepted - +eventA.isAccepted;
        }
        // Check if there are other attendees.
        if (eventA.hasOtherAttendee !== eventB.hasOtherAttendee) {
            return +eventB.hasOtherAttendee - +eventA.hasOtherAttendee;
        }
        // If there is still a tie, return in the order they will show in the
        // list, which is what is returned by the API (startTime with
        // unspecified tie breaker).
        return eventAIndex - eventBIndex;
    }
    computeExpandedEventIndex_() {
        const now = WindowProxy.getInstance().now();
        // Find the indices of all meetings that are not over.
        let expandableEventIndices = this.events.map((_, i) => i);
        expandableEventIndices = expandableEventIndices.filter((eventIndex) => {
            const expandableEvent = this.events[eventIndex];
            return toJsTimestamp(expandableEvent.endTime) > now;
        });
        if (expandableEventIndices.length === 0) {
            return -1;
        }
        const in5Minutes = now + (5 * 60 * 1000);
        expandableEventIndices.sort((a, b) => this.compareEventPriority_(a, b, in5Minutes));
        return expandableEventIndices[0];
    }
    hasDoubleBooked_() {
        return this.doubleBookedIndices_.length > 0;
    }
    isDoubleBooked_(index) {
        return this.doubleBookedIndices_.includes(index);
    }
    isExpanded_(index) {
        return index === this.expandedEventIndex_;
    }
    onSeeMoreClick_() {
        this.dispatchEvent(new Event('usage', { composed: true, bubbles: true }));
        recordCalendarAction(CalendarAction.SEE_MORE_CLICKED, this.moduleName);
    }
    // Sort events to move expanded events before any of its double booked
    // events.
    sortEvents_() {
        const expandedEvent = this.events[this.expandedEventIndex_];
        assert(expandedEvent);
        const firstDoubleBookedEventIndex = this.events.findIndex((calendarEvent) => {
            return calendarEvent.startTime.internalValue ===
                expandedEvent.startTime.internalValue;
        });
        if (firstDoubleBookedEventIndex < this.expandedEventIndex_) {
            this.events.splice(this.expandedEventIndex_, 1);
            this.expandedEventIndex_ = firstDoubleBookedEventIndex;
            this.events.splice(this.expandedEventIndex_, 0, expandedEvent);
        }
    }
}
customElements.define(CalendarElement.is, CalendarElement);
