// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import { listenOnce } from 'chrome://resources/js/util.js';
import { getTemplate } from './snackbar.html.js';
const SHOW_DURATION = 5000;
const TRANSITION_DURATION = 225;
/**
 * Enum of Snackbar types. Used by Snackbar to determine the styling for the
 * Snackbar.
 */
export var SnackbarType;
(function (SnackbarType) {
    SnackbarType["INFO"] = "info";
    SnackbarType["SUCCESS"] = "success";
    SnackbarType["WARNING"] = "warning";
    SnackbarType["ERROR"] = "error";
})(SnackbarType || (SnackbarType = {}));
/**
 * Notification bar for displaying a simple message with an action link.
 * This element should not be instantiated directly. Instead, users should
 * use the showSnackbar and dismissSnackbar functions to ensure proper
 * queuing of messages.
 */
class BluetoothSnackbarElement extends CustomElement {
    static get template() {
        return getTemplate();
    }
    static get is() {
        return 'bluetooth-snackbar';
    }
    boundStartTimeout_ = null;
    boundStopTimeout_ = null;
    timeoutId_ = null;
    options_ = null;
    connectedCallback() {
        assert(this.options_);
        assert(this.shadowRoot);
        this.shadowRoot.querySelector('#message').textContent =
            this.options_.message;
        this.classList.add(this.options_.type);
        const actionLink = this.shadowRoot.querySelector('a');
        actionLink.textContent = this.options_.actionText || 'Dismiss';
        actionLink.addEventListener('click', () => {
            this.options_.action?.();
            this.dismiss();
        });
        this.boundStartTimeout_ = this.startTimeout_.bind(this);
        this.boundStopTimeout_ = this.stopTimeout_.bind(this);
        this.addEventListener('mouseleave', this.boundStartTimeout_);
        this.addEventListener('mouseenter', this.boundStopTimeout_);
        this.timeoutId_ = null;
    }
    /**
     * Initializes the content of the Snackbar with the given |options|
     * including the message, action link text, and click action of the link.
     * This must be called before the element is added to the DOM.
     */
    initialize(options) {
        this.options_ = options;
    }
    /**
     * Shows the Snackbar and dispatches the 'showed' event.
     */
    show() {
        this.classList.add('open');
        if (hasContentFocus) {
            this.startTimeout_();
        }
        else {
            this.stopTimeout_();
        }
        document.addEventListener('contentfocus', this.boundStartTimeout_);
        document.addEventListener('contentblur', this.boundStopTimeout_);
        this.dispatchEvent(new CustomEvent('showed', { bubbles: true, composed: true }));
    }
    /**
     * transitionend does not always fire (e.g. when animation is aborted
     * or when no paint happens during the animation). This function sets up
     * a timer and emulate the event if it is not fired when the timer expires.
     */
    ensureTransitionEndEvent_() {
        let fired = false;
        this.addEventListener('transitionend', () => {
            fired = true;
        }, { once: true });
        window.setTimeout(() => {
            if (!fired) {
                this.dispatchEvent(new CustomEvent('transitionend', { bubbles: true, composed: true }));
            }
        }, TRANSITION_DURATION);
    }
    /**
     * Dismisses the Snackbar. Once the Snackbar is completely hidden, the
     * 'dismissed' event is fired and the returned Promise is resolved. If the
     * snackbar is already hidden, a resolved Promise is returned.
     */
    dismiss() {
        this.stopTimeout_();
        if (!this.classList.contains('open')) {
            return Promise.resolve();
        }
        return new Promise((resolve) => {
            listenOnce(this, 'transitionend', () => {
                this.dispatchEvent(new CustomEvent('dismissed'));
                resolve();
            });
            this.ensureTransitionEndEvent_();
            this.classList.remove('open');
            document.removeEventListener('contentfocus', this.boundStartTimeout_);
            document.removeEventListener('contentblur', this.boundStopTimeout_);
        });
    }
    /**
     * Starts the timeout for dismissing the Snackbar.
     */
    startTimeout_() {
        this.timeoutId_ = setTimeout(() => {
            this.dismiss();
        }, SHOW_DURATION);
    }
    /**
     * Stops the timeout for dismissing the Snackbar. Only clears the timeout
     * when the Snackbar is open.
     */
    stopTimeout_() {
        if (this.classList.contains('open')) {
            clearTimeout(this.timeoutId_);
            this.timeoutId_ = null;
        }
    }
}
customElements.define('bluetooth-snackbar', BluetoothSnackbarElement);
let current = null;
const queue = [];
let hasContentFocus = true;
// There is a chance where the snackbar is shown but the content doesn't have
// focus. In this case, the current focus state must be tracked so the
// snackbar can pause the dismiss timeout.
document.addEventListener('contentfocus', function () {
    hasContentFocus = true;
});
document.addEventListener('contentblur', function () {
    hasContentFocus = false;
});
export function getSnackbarStateForTest() {
    return {
        current: current,
        numPending: queue.length,
    };
}
/**
 * TODO(crbug.com/40498702): Add ability to specify parent element to Snackbar.
 * Creates a Snackbar and shows it if one is not showing already. If a
 * Snackbar is already active, the next Snackbar is queued.
 * @param message The message to display in the Snackbar.
 * @param type A string determining the Snackbar type: info, success, warning,
 *     error. If not provided, info type is used.
 * @param actionText The text to display for the action link.
 * @param action A function to be called when the user presses the action link.
 */
export function showSnackbar(message, type, actionText, action) {
    const options = {
        message: message,
        type: type || SnackbarType.INFO,
        actionText: actionText,
        action: action,
    };
    const newSnackbar = document.createElement('bluetooth-snackbar');
    newSnackbar.initialize(options);
    if (current) {
        queue.push(newSnackbar);
    }
    else {
        show(newSnackbar);
    }
    return newSnackbar;
}
Object.assign(window, { showSnackbar });
/**
 * TODO(crbug.com/40498702): Add ability to specify parent element to Snackbar.
 * Creates a Snackbar and sets events for queuing the next Snackbar to show.
 */
function show(snackbar) {
    document.body.querySelector('#snackbar-container').appendChild(snackbar);
    snackbar.addEventListener('dismissed', function () {
        const container = document.body.querySelector('#snackbar-container');
        if (container) {
            container.removeChild(current);
        }
        const newSnackbar = queue.shift();
        if (container && newSnackbar) {
            show(newSnackbar);
            return;
        }
        current = null;
    });
    current = snackbar;
    // Show the Snackbar after a slight delay to allow for a layout reflow.
    setTimeout(function () {
        snackbar.show();
    }, 10);
}
/**
 * Dismisses the Snackbar currently showing.
 * @param clearQueue If true, clears the Snackbar queue before
 *     dismissing.
 */
export function dismissSnackbar(clearQueue) {
    if (clearQueue) {
        queue.length = 0;
    }
    if (current) {
        return current.dismiss();
    }
    return Promise.resolve();
}
