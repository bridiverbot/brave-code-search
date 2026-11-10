// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { HANDSHAKE_INTERVAL_MS, MAX_HANDSHAKE_ATTEMPTS } from './utils.js';
/**
 * A proxy class to control post messages sent to the webview.
 */
export class PostMessageHandler {
    maxHandshakeAttempts_;
    webview_;
    targetOrigin_ = '';
    eventTracker_ = new EventTracker();
    browserProxy_;
    handshakeComplete_ = false;
    handshakeAttempts_ = 0;
    handshakeIntervalId_ = null;
    pendingMessages_ = [];
    handshakeMessage_ = null;
    onInputPlateBoundsUpdate_ = null;
    onInputStateUpdate_ = null;
    // The URL of the active navigation. Null if there is no active navigation.
    activeNavigationUrl_ = null;
    constructor(webview, browserProxy, 
    // Allow overriding max attempts for testing.
    maxHandshakeAttempts_ = MAX_HANDSHAKE_ATTEMPTS) {
        this.maxHandshakeAttempts_ = maxHandshakeAttempts_;
        this.webview_ = webview;
        this.browserProxy_ = browserProxy;
        this.eventTracker_.add(this.webview_, 'loadstart', this.onLoadStart_.bind(this));
        this.eventTracker_.add(this.webview_, 'loadredirect', this.onLoadRedirect_.bind(this));
        this.eventTracker_.add(this.webview_, 'loadcommit', this.onLoadCommit_.bind(this));
        this.eventTracker_.add(this.webview_, 'loadabort', this.onLoadAbort_.bind(this));
        this.eventTracker_.add(window, 'message', this.onMessageReceived_.bind(this));
        const encodedHandshakeMessage = loadTimeData.getString('handshakeMessage');
        // TODO(crbug.com/465817042): Switch to Uint8Array.fromBase64 when
        // available.
        this.handshakeMessage_ =
            Uint8Array.from(atob(encodedHandshakeMessage), c => c.charCodeAt(0));
    }
    /**
     * Sends a message to the webview. If the handshake has not yet been
     * acknowledged, the message will be queued and sent after the handshake is
     * complete.
     * @param message The serialized message to send.
     */
    sendMessage(message) {
        if (!this.handshakeComplete_) {
            this.pendingMessages_.push(message);
            if (this.handshakeIntervalId_ === null) {
                this.restartHandshake_();
            }
            return;
        }
        this.postMessage_(message);
    }
    /**
     * DO NOT USE! This is temporary to prove a proof of concept. Eventually,
     * this should be changed to send a serialized proto like the other method.
     *
     * Sends an object message to the webview. If the handshake has not yet been
     * acknowledged, the message will be queued and sent after the handshake is
     * complete.
     * @param message The object message to send.
     *
     * TODO(crbug.com/483737358): Remove this method once the proto is implemented
     * on the webview side.
     */
    sendObjectMessage(message) {
        if (!this.handshakeComplete_) {
            this.pendingMessages_.push(message);
            if (this.handshakeIntervalId_ === null) {
                this.restartHandshake_();
            }
            return;
        }
        this.postMessage_(message);
    }
    detach() {
        this.eventTracker_.removeAll();
        this.resetHandshake_();
    }
    onLoadStart_(event) {
        if (!event.isTopLevel) {
            return;
        }
        // Store the start event to be used once its clear if this navigation is
        // committed or aborted
        this.activeNavigationUrl_ = event.url;
    }
    onLoadRedirect_(event) {
        if (!event.isTopLevel) {
            return;
        }
        const urlObj = URL.parse(event.newUrl);
        if (urlObj) {
            // Update target origin immediately on redirect to ensure handshake
            // messages go to the correct origin for the intermediate hop or final
            // destination.
            this.targetOrigin_ = urlObj.origin;
        }
        else {
            console.error('Invalid URL in loadredirect:', event.newUrl);
        }
        if (this.activeNavigationUrl_ === event.oldUrl) {
            this.activeNavigationUrl_ = event.newUrl;
        }
    }
    // This event is fired when the load has committed in the webview. This is
    // used to determine if the webview is ready to receive messages. Doing this
    // in onLoadStart_ can cause a race condition where the handshake completes
    // with the page that is about to navigate away from.
    onLoadCommit_(event) {
        if (!event.isTopLevel) {
            return;
        }
        const urlObj = URL.parse(event.url);
        if (urlObj) {
            // Update target origin to the final committed URL.
            this.targetOrigin_ = urlObj.origin;
        }
        else {
            console.error('Invalid URL in loadcommit:', event.url);
        }
        if (this.activeNavigationUrl_ === event.url) {
            this.restartHandshake_();
            this.activeNavigationUrl_ = null;
        }
    }
    onLoadAbort_(event) {
        if (!event.isTopLevel) {
            return;
        }
        // The navigation aborted, so reset the last thread frame load start event.
        this.activeNavigationUrl_ = null;
    }
    restartHandshake_() {
        this.resetHandshake_();
        this.startHandshake_();
    }
    resetHandshake_() {
        this.handshakeComplete_ = false;
        this.handshakeAttempts_ = 0;
        this.stopHandshake_();
    }
    startHandshake_() {
        if (this.handshakeIntervalId_ !== null || this.handshakeComplete_) {
            // If the handshake is already in progress, do not start a new one.
            return;
        }
        assert(this.handshakeMessage_);
        this.handshakeIntervalId_ = setInterval(() => {
            if (this.handshakeComplete_) {
                this.stopHandshake_();
                return;
            }
            if (this.handshakeAttempts_ >= this.maxHandshakeAttempts_) {
                this.stopHandshake_();
                return;
            }
            this.handshakeAttempts_++;
            this.postMessage_(this.handshakeMessage_);
        }, HANDSHAKE_INTERVAL_MS);
    }
    stopHandshake_() {
        if (this.handshakeIntervalId_ !== null) {
            clearInterval(this.handshakeIntervalId_);
            this.handshakeIntervalId_ = null;
        }
    }
    onMessageReceived_(event) {
        if (event.origin !== this.targetOrigin_) {
            return;
        }
        // TODO(crbug.com/483737358): Sending an object instead of a proto is
        // a temporary solution to unblock the prototype. Remove this method
        // once the proto is implemented on the webview side.
        if (event.data && event.data.type === 'input-plate-bounds-update') {
            if (this.onInputPlateBoundsUpdate_) {
                this.onInputPlateBoundsUpdate_(event.data['bounds-rect'], event.data['occluders'], event.data.viewportWidth, event.data.viewportHeight);
            }
            return;
        }
        // Input state update event (with correct capability for security):
        if (event.data &&
            (event.data.type === 'input-state-update' &&
                event.data.requiresCapability === 'input state update')) {
            if (this.onInputStateUpdate_) {
                // Several fallbacks (kebab, snake case) for extraction.
                // Use undefined check (if attribute does not exist) to
                // preserve explicitly set null values.
                const toolMode = event.data.toolMode !== undefined ?
                    event.data.toolMode :
                    (event.data['tool-mode'] !== undefined ? event.data['tool-mode'] :
                        event.data.tool_mode);
                const modelMode = event.data.modelMode !== undefined ?
                    event.data.modelMode :
                    (event.data['model-mode'] !== undefined ? event.data['model-mode'] :
                        event.data.model_mode);
                this.onInputStateUpdate_(toolMode, modelMode, event.data);
            }
            return;
        }
        try {
            // No json messages are expected from the webview.
            JSON.parse(event.data);
        }
        catch (e) {
            // If JSON parsing fails, assume it's the binary proto message.
            if (event.data instanceof Uint8Array) {
                const messageBytes = Array.from(event.data);
                this.browserProxy_.handler.onWebviewMessage(messageBytes);
            }
            else if (event.data instanceof ArrayBuffer) {
                const messageBytes = Array.from(new Uint8Array(event.data));
                this.browserProxy_.handler.onWebviewMessage(messageBytes);
            }
        }
    }
    setInputPlateBoundsUpdateCallback(callback) {
        this.onInputPlateBoundsUpdate_ = callback;
    }
    setInputStateUpdateCallback(callback) {
        this.onInputStateUpdate_ = callback;
    }
    completeHandshake() {
        if (this.handshakeComplete_) {
            return;
        }
        this.handshakeComplete_ = true;
        this.stopHandshake_();
        this.pendingMessages_.forEach(msg => this.postMessage_(msg), this);
        this.pendingMessages_ = [];
    }
    getPendingMessagesLengthForTesting() {
        return this.pendingMessages_.length;
    }
    isHandshakeCompleteForTesting() {
        return this.handshakeComplete_;
    }
    postMessage_(message) {
        if (!this.webview_.contentWindow) {
            return;
        }
        if (this.targetOrigin_ === 'null' || !this.targetOrigin_) {
            return;
        }
        try {
            if (message instanceof Uint8Array) {
                this.webview_.contentWindow.postMessage(message.buffer, this.targetOrigin_);
            }
            else {
                this.webview_.contentWindow.postMessage(message, this.targetOrigin_);
            }
        }
        catch (e) {
            console.error('Failed to postMessage to webview:', e);
        }
    }
}
