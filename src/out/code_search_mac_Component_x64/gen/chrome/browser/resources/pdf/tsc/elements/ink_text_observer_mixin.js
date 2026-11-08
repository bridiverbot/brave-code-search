// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { Ink2Manager } from '../ink2_manager.js';
export const InkTextObserverMixin = (superClass) => {
    class InkTextObserverMixin extends superClass {
        tracker_ = new EventTracker();
        connectedCallback() {
            super.connectedCallback();
            this.tracker_.add(Ink2Manager.getInstance(), 'attributes-changed', (e) => this.onTextAttributesChanged(e.detail));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.tracker_.removeAll();
        }
        firstUpdated() {
            this.onTextAttributesChanged(Ink2Manager.getInstance().getCurrentTextAttributes());
        }
        // Should be overridden by clients.
        onTextAttributesChanged(_attributes) {
            assertNotReached();
        }
    }
    return InkTextObserverMixin;
};
