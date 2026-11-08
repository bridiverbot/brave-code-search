// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { addWebUiListener } from 'chrome://resources/js/cr.js';
import { getRequiredElement } from 'chrome://resources/js/util.js';
import { html, render } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
class TrafficLogTag {
    container = null;
    protocolEvents = [];
    knownEventTimestamps = new Set();
    /**
     * Helper to determine if the window is scrolled to its bottom limit.
     * @return true if the container is scrolled to the bottom
     */
    isScrolledToBottom_() {
        return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    }
    /**
     * Helper to scroll the window to its bottom.
     */
    scrollToBottom_() {
        window.scrollTo(0, document.body.scrollHeight);
    }
    /**
     * Callback for incoming protocol events.
     * @param details The protocol event.
     */
    onReceivedProtocolEvent_(details) {
        if (this.knownEventTimestamps.has(details.time)) {
            return;
        }
        this.knownEventTimestamps.add(details.time);
        this.protocolEvents.push(details);
        const shouldScrollDown = this.isScrolledToBottom_();
        assert(this.container);
        render(this.getTrafficLogHtml_(), this.container);
        if (shouldScrollDown) {
            this.scrollToBottom_();
        }
    }
    /**
     * Toggles the given traffic event entry div's "expanded" state.
     * @param e the click event that triggered the toggle.
     */
    onClick_(e) {
        if (e.target.classList.contains('proto')) {
            // We ignore proto clicks to keep it copyable.
            return;
        }
        let trafficEventDiv = e.target;
        // Click might be on div's child.
        if (trafficEventDiv.nodeName !== 'DIV' && trafficEventDiv.parentNode) {
            trafficEventDiv = trafficEventDiv.parentNode;
        }
        trafficEventDiv.classList.toggle('traffic-event-entry-expanded-fullscreen');
    }
    getTrafficLogHtml_() {
        // clang-format off
        return html `
      ${this.protocolEvents.map(item => html `
        <div class="traffic-event-entry-fullscreen" @click="${this.onClick_}">
          <span class="time">${(new Date(item.time)).toLocaleString()}</span>
          <span class="type">${item.type}</span>
          <pre class="details">${item.details}</pre>
          <pre class="proto">${JSON.stringify(item.proto, null, 2)}</pre>
        </div>
      `)}
    `;
        // clang-format on
    }
    onLoad() {
        this.container = getRequiredElement('traffic-event-fullscreen-container');
        addWebUiListener('onProtocolEvent', this.onReceivedProtocolEvent_.bind(this));
    }
    static getInstance() {
        return instance || (instance = new TrafficLogTag());
    }
}
document.addEventListener('DOMContentLoaded', () => {
    TrafficLogTag.getInstance().onLoad();
});
