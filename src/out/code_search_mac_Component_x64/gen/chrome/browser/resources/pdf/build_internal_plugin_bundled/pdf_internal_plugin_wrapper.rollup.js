// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Verify |value| is truthy.
 * @param value A value to check for truthiness. Note that this
 *     may be used to test whether |value| is defined or not, and we don't want
 *     to force a cast to boolean.
 */
function assert(value, message) {
    if (value) {
        return;
    }
    throw new Error('Assertion failed' + (''));
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return Whether a modifier key was down when processing |e|.
 */
function hasKeyModifiers(e) {
    return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var AnnotationMode;
(function (AnnotationMode) {
    AnnotationMode["OFF"] = "off";
    AnnotationMode["DRAW"] = "draw";
    AnnotationMode["TEXT"] = "text";
    AnnotationMode["SIGNATURE"] = "signature";
})(AnnotationMode || (AnnotationMode = {}));
// The different types of annotation brushes.
var AnnotationBrushType;
(function (AnnotationBrushType) {
    AnnotationBrushType["ERASER"] = "eraser";
    AnnotationBrushType["HIGHLIGHTER"] = "highlighter";
    AnnotationBrushType["PEN"] = "pen";
})(AnnotationBrushType || (AnnotationBrushType = {}));
var TextAnnotationSource;
(function (TextAnnotationSource) {
    TextAnnotationSource["USER"] = "user";
    TextAnnotationSource["UNDO"] = "undo";
    TextAnnotationSource["REDO"] = "redo";
})(TextAnnotationSource || (TextAnnotationSource = {}));
// LINT.IfChange(TextAlignment)
var TextAlignment;
(function (TextAlignment) {
    TextAlignment["LEFT"] = "left";
    TextAlignment["CENTER"] = "center";
    TextAlignment["RIGHT"] = "right";
})(TextAlignment || (TextAlignment = {}));
// LINT.ThenChange(//pdf/pdf_ink_text.h:TextAlignment)
var TextStyle;
(function (TextStyle) {
    TextStyle["BOLD"] = "bold";
    TextStyle["ITALIC"] = "italic";
    TextStyle["UNDERLINE"] = "underline";
    TextStyle["STRIKETHROUGH"] = "strikethrough";
})(TextStyle || (TextStyle = {}));
// LINT.IfChange(TextTypeface)
var TextTypeface;
(function (TextTypeface) {
    TextTypeface["SANS_SERIF"] = "sans-serif";
    TextTypeface["SERIF"] = "serif";
    TextTypeface["MONOSPACE"] = "monospace";
})(TextTypeface || (TextTypeface = {}));
var DisplayAnnotationsAction;
(function (DisplayAnnotationsAction) {
    DisplayAnnotationsAction["DISPLAY_ANNOTATIONS"] = "display-annotations";
    DisplayAnnotationsAction["HIDE_ANNOTATIONS"] = "hide-annotations";
})(DisplayAnnotationsAction || (DisplayAnnotationsAction = {}));
/** Enumeration of page fitting types and bounding box fitting types. */
var FittingType;
(function (FittingType) {
    FittingType["NONE"] = "none";
    FittingType["FIT_TO_PAGE"] = "fit-to-page";
    FittingType["FIT_TO_WIDTH"] = "fit-to-width";
    FittingType["FIT_TO_HEIGHT"] = "fit-to-height";
    FittingType["FIT_TO_BOUNDING_BOX"] = "fit-to-bounding-box";
    FittingType["FIT_TO_BOUNDING_BOX_WIDTH"] = "fit-to-bounding-box-width";
    FittingType["FIT_TO_BOUNDING_BOX_HEIGHT"] = "fit-to-bounding-box-height";
})(FittingType || (FittingType = {}));
/**
 * The different types of form fields that can be focused.
 */
var FormFieldFocusType;
(function (FormFieldFocusType) {
    // LINT.IfChange(FocusFieldTypes)
    FormFieldFocusType["NONE"] = "none";
    FormFieldFocusType["NON_TEXT"] = "non-text";
    FormFieldFocusType["TEXT"] = "text";
    // LINT.ThenChange(//pdf/pdf_view_web_plugin.cc:FocusFieldTypes)
})(FormFieldFocusType || (FormFieldFocusType = {}));
// 
var SaveToDriveState;
(function (SaveToDriveState) {
    SaveToDriveState["UNINITIALIZED"] = "uninitialized";
    SaveToDriveState["UPLOADING"] = "uploading";
    SaveToDriveState["SUCCESS"] = "success";
    SaveToDriveState["CONNECTION_ERROR"] = "connection-error";
    SaveToDriveState["STORAGE_FULL_ERROR"] = "storage-full-error";
    SaveToDriveState["SESSION_TIMEOUT_ERROR"] = "session-timeout-error";
    SaveToDriveState["UNKNOWN_ERROR"] = "unknown-error";
})(SaveToDriveState || (SaveToDriveState = {}));
var SaveToDriveBubbleRequestType;
(function (SaveToDriveBubbleRequestType) {
    SaveToDriveBubbleRequestType["CANCEL_UPLOAD"] = "cancel-upload";
    SaveToDriveBubbleRequestType["MANAGE_STORAGE"] = "manage-storage";
    SaveToDriveBubbleRequestType["OPEN_IN_DRIVE"] = "open-in-drive";
    SaveToDriveBubbleRequestType["RETRY"] = "retry";
    SaveToDriveBubbleRequestType["DIALOG_CLOSED"] = "dialog-closed";
})(SaveToDriveBubbleRequestType || (SaveToDriveBubbleRequestType = {}));
//

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// A class that listens for touch events and produces events when these
// touches form gestures (e.g. pinching).
class GestureDetector {
    element_;
    pinchStartEvent_ = null;
    lastTouchTouchesCount_ = 0;
    lastEvent_ = null;
    isPresentationMode_ = false;
    /**
     * The scale relative to the start of the pinch when handling ctrl-wheels.
     * null when there is no ongoing pinch.
     */
    accumulatedWheelScale_ = null;
    /**
     * A timeout ID from setTimeout used for sending the pinchend event when
     * handling ctrl-wheels.
     */
    wheelEndTimeout_ = null;
    eventTarget_ = new EventTarget();
    /** @param element The element to monitor for touch gestures. */
    constructor(element) {
        this.element_ = element;
        this.element_.addEventListener('touchstart', this.onTouchStart_.bind(this), { passive: true });
        const boundOnTouch = this.onTouch_.bind(this);
        this.element_.addEventListener('touchmove', boundOnTouch, { passive: true });
        this.element_.addEventListener('touchend', boundOnTouch, { passive: true });
        this.element_.addEventListener('touchcancel', boundOnTouch, { passive: true });
        this.element_.addEventListener('wheel', this.onWheel_.bind(this), { passive: false });
        document.addEventListener('contextmenu', this.handleContextMenuEvent_.bind(this));
    }
    setPresentationMode(enabled) {
        this.isPresentationMode_ = enabled;
    }
    getEventTarget() {
        return this.eventTarget_;
    }
    /**
     * Public for tests.
     * @return True if the last touch start was a two finger touch.
     */
    wasTwoFingerTouch() {
        return this.lastTouchTouchesCount_ === 2;
    }
    /**
     * Call the relevant listeners with the given |PinchEventDetail|.
     * @param type The type of pinch event.
     * @param detail The event to notify the listeners of.
     */
    notify_(type, detail) {
        // Adjust center into element-relative coordinates.
        const clientRect = this.element_.getBoundingClientRect();
        detail.center = {
            x: detail.center.x - clientRect.x,
            y: detail.center.y - clientRect.y,
        };
        this.eventTarget_.dispatchEvent(new CustomEvent(type, { detail }));
    }
    /** The callback for touchstart events on the element. */
    onTouchStart_(event) {
        this.lastTouchTouchesCount_ = event.touches.length;
        if (!this.wasTwoFingerTouch()) {
            return;
        }
        this.pinchStartEvent_ = event;
        this.lastEvent_ = event;
        this.notify_('pinchstart', { center: center(event) });
    }
    /** The callback for touch move, end, and cancel events on the element. */
    onTouch_(event) {
        if (!this.pinchStartEvent_) {
            return;
        }
        const lastEvent = this.lastEvent_;
        // Check if the pinch ends with the current event.
        if (event.touches.length < 2 ||
            lastEvent.touches.length !== event.touches.length) {
            const startScaleRatio = pinchScaleRatio(lastEvent, this.pinchStartEvent_);
            this.pinchStartEvent_ = null;
            this.lastEvent_ = null;
            this.notify_('pinchend', { startScaleRatio: startScaleRatio, center: center(lastEvent) });
            return;
        }
        const scaleRatio = pinchScaleRatio(event, lastEvent);
        const startScaleRatio = pinchScaleRatio(event, this.pinchStartEvent_);
        this.notify_('pinchupdate', {
            scaleRatio: scaleRatio,
            // TODO(dhoss): Handle case where `scaleRatio` is null?
            direction: scaleRatio > 1.0 ? 'in' : 'out',
            startScaleRatio: startScaleRatio,
            center: center(event),
        });
        this.lastEvent_ = event;
    }
    /** The callback for wheel events on the element. */
    onWheel_(event) {
        // We handle ctrl-wheels to invoke our own pinch zoom. On Mac, synthetic
        // ctrl-wheels are created from trackpad pinches. We handle these ourselves
        // to prevent the browser's native pinch zoom. We also use our pinch
        // zooming mechanism for handling non-synthetic ctrl-wheels. This allows us
        // to anchor the zoom around the mouse position instead of the scroll
        // position.
        if (!event.ctrlKey) {
            if (this.isPresentationMode_) {
                this.notify_('wheel', {
                    center: { x: event.clientX, y: event.clientY },
                    direction: event.deltaY > 0 ? 'down' : 'up',
                });
            }
            return;
        }
        event.preventDefault();
        // Disable wheel gestures in Presentation mode.
        if (this.isPresentationMode_) {
            return;
        }
        const wheelScale = Math.exp(-event.deltaY / 100);
        // Clamp scale changes from the wheel event as they can be
        // quite dramatic for non-synthetic ctrl-wheels.
        const scale = Math.min(1.25, Math.max(0.75, wheelScale));
        const position = { x: event.clientX, y: event.clientY };
        if (this.accumulatedWheelScale_ == null) {
            this.accumulatedWheelScale_ = 1.0;
            this.notify_('pinchstart', { center: position });
        }
        this.accumulatedWheelScale_ *= scale;
        this.notify_('pinchupdate', {
            scaleRatio: scale,
            direction: scale > 1.0 ? 'in' : 'out',
            startScaleRatio: this.accumulatedWheelScale_,
            center: position,
        });
        // We don't get any phase information for the ctrl-wheels, so we don't know
        // when the gesture ends. We'll just use a timeout to send the pinch end
        // event a short time after the last ctrl-wheel we see.
        if (this.wheelEndTimeout_ != null) {
            window.clearTimeout(this.wheelEndTimeout_);
            this.wheelEndTimeout_ = null;
        }
        const gestureEndDelayMs = 100;
        const endEvent = {
            startScaleRatio: this.accumulatedWheelScale_,
            center: position,
        };
        this.wheelEndTimeout_ = window.setTimeout(() => {
            this.notify_('pinchend', endEvent);
            this.wheelEndTimeout_ = null;
            this.accumulatedWheelScale_ = null;
        }, gestureEndDelayMs);
    }
    handleContextMenuEvent_(e) {
        // Stop Chrome from popping up the context menu on long press. We need to
        // make sure the start event did not have 2 touches because we don't want
        // to block two finger tap opening the context menu. We check for
        // firesTouchEvents in order to not block the context menu on right click.
        const capabilities = e.sourceCapabilities;
        if (capabilities && capabilities.firesTouchEvents &&
            !this.wasTwoFingerTouch()) {
            e.preventDefault();
        }
    }
}
/**
 * Computes the change in scale between this touch event and a previous one.
 * @param event Latest touch event on the element.
 * @param prevEvent A previous touch event on the element.
 * @return The ratio of the scale of this event and the scale of the previous
 *     one.
 */
function pinchScaleRatio(event, prevEvent) {
    const distance1 = distance(prevEvent);
    const distance2 = distance(event);
    return distance1 === 0 ? null : distance2 / distance1;
}
/**
 * Computes the distance between fingers.
 * @param event Touch event with at least 2 touch points.
 * @return Distance between touch[0] and touch[1].
 */
function distance(event) {
    assert(event.touches.length > 1);
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}
/**
 * Computes the midpoint between fingers.
 * @param event Touch event with at least 2 touch points.
 * @return Midpoint between touch[0] and touch[1].
 */
function center(event) {
    assert(event.touches.length > 1);
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    return {
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2,
    };
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Turn a dictionary received from postMessage into a key event.
 * @param dict A dictionary representing the key event.
 */
/**
 * An enum containing a value specifying whether the PDF is currently loading,
 * has finished loading or failed to load.
 */
var LoadState;
(function (LoadState) {
    LoadState["LOADING"] = "loading";
    LoadState["SUCCESS"] = "success";
    LoadState["FAILED"] = "failed";
})(LoadState || (LoadState = {}));

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function convertFormFocusChangeMessage(message) {
    return message;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Determines if the event has the platform-equivalent of the Windows ctrl key
 * modifier.
 * @return Whether the event has the ctrl key modifier.
 */
function hasCtrlModifier(e) {
    let hasModifier = e.ctrlKey;
    // 
    hasModifier = e.metaKey; // AKA Command.
    // 
    return hasModifier;
}
/**
 * Determines if the event has the platform-equivalent of the Windows ctrl key
 * modifier, and only that modifier.
 * @return Whether the event only has the ctrl key modifier.
 */
function hasCtrlModifierOnly(e) {
    let metaModifier = e.metaKey;
    // 
    metaModifier = e.ctrlKey;
    // 
    return hasCtrlModifier(e) && !e.shiftKey && !e.altKey && !metaModifier;
}
//  enable_pdf_save_to_drive

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The longest period of time in milliseconds for a horizontal touch movement to
 * be considered as a swipe.
 */
const SWIPE_TIMER_INTERVAL_MS = 200;
/* The minimum travel distance on the x axis for a swipe. */
const SWIPE_X_DIST_MIN = 150;
/* The maximum travel distance on the y axis for a swipe. */
const SWIPE_Y_DIST_MAX = 100;
/** Enumeration of swipe directions. */
var SwipeDirection;
(function (SwipeDirection) {
    SwipeDirection[SwipeDirection["RIGHT_TO_LEFT"] = 0] = "RIGHT_TO_LEFT";
    SwipeDirection[SwipeDirection["LEFT_TO_RIGHT"] = 1] = "LEFT_TO_RIGHT";
})(SwipeDirection || (SwipeDirection = {}));
// A class that listens for touch events and produces events when these
// touches form swipe gestures.
class SwipeDetector {
    element_;
    isPresentationMode_ = false;
    swipeStartEvent_ = null;
    elapsedTimeForTesting_ = null;
    eventTarget_ = new EventTarget();
    /** @param element The element to monitor for touch gestures. */
    constructor(element) {
        this.element_ = element;
        this.element_.addEventListener('touchstart', this.onTouchStart_.bind(this), { passive: true });
        this.element_.addEventListener('touchend', this.onTouchEnd_.bind(this), { passive: true });
        this.element_.addEventListener('touchcancel', () => this.onTouchCancel_(), { passive: true });
    }
    /**
     * Public for tests. Allow manually setting the elapsed time for a swipe
     * action.
     */
    setElapsedTimerForTesting(time) {
        this.elapsedTimeForTesting_ = time;
    }
    setPresentationMode(enabled) {
        this.isPresentationMode_ = enabled;
    }
    getPresentationModeForTesting() {
        return this.isPresentationMode_;
    }
    getEventTarget() {
        return this.eventTarget_;
    }
    /**
     * Call the relevant listeners with the given swipe |direction|.
     * @param direction The direction of swipe action.
     */
    notify_(direction) {
        this.eventTarget_.dispatchEvent(new CustomEvent('swipe', { detail: direction }));
    }
    /** The callback for touchstart events on the element. */
    onTouchStart_(event) {
        if (!this.isPresentationMode_) {
            return;
        }
        // If more than 1 finger touch the screen or there is already an ongoing
        // swipe detection process, there is no valid swipe event to keep track.
        if (event.touches.length !== 1 || this.swipeStartEvent_) {
            this.swipeStartEvent_ = null;
            return;
        }
        this.swipeStartEvent_ = event;
        return;
    }
    /** The callback for touchcancel events on the element. */
    onTouchCancel_() {
        if (!this.isPresentationMode_ || !this.swipeStartEvent_) {
            return;
        }
        this.swipeStartEvent_ = null;
    }
    /** The callback for touchend events on the element. */
    onTouchEnd_(event) {
        if (!this.isPresentationMode_ || !this.swipeStartEvent_) {
            return;
        }
        if (event.touches.length !== 0 ||
            this.swipeStartEvent_.touches.length !== 1) {
            return;
        }
        const elapsedTime = this.elapsedTimeForTesting_ ?
            this.elapsedTimeForTesting_ :
            event.timeStamp - this.swipeStartEvent_.timeStamp;
        const swipeStartObj = this.swipeStartEvent_.changedTouches[0];
        assert(swipeStartObj);
        const swipeEndObj = event.changedTouches[0];
        assert(swipeEndObj);
        const distX = swipeEndObj.pageX - swipeStartObj.pageX;
        const distY = swipeEndObj.pageY - swipeStartObj.pageY;
        // If this is a valid swipe, notify its direction to the viewer.
        if (elapsedTime <= SWIPE_TIMER_INTERVAL_MS &&
            Math.abs(distX) >= SWIPE_X_DIST_MIN &&
            Math.abs(distY) <= SWIPE_Y_DIST_MAX) {
            const direction = distX > 0 ? SwipeDirection.LEFT_TO_RIGHT :
                SwipeDirection.RIGHT_TO_LEFT;
            this.notify_(direction);
        }
        this.swipeStartEvent_ = null;
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const channel = new MessageChannel();
const sizer = document.querySelector('#sizer');
const plugin = document.querySelector('embed');
const srcUrl = new URL(plugin.src);
let parentOrigin = srcUrl.origin;
if (parentOrigin === 'chrome-untrusted://print') {
    // Within Print Preview, the source origin differs from the parent origin.
    parentOrigin = 'chrome://print';
}
// Plugin-to-parent message handlers. All messages are passed through, but some
// messages may affect this frame, too.
let caretBrowsingEnabled = false;
let isFormFieldFocused = false;
plugin.addEventListener('message', e => {
    const message = e.data;
    switch (message.type) {
        case 'formFocusChange':
            // TODO(crbug.com/40810904): Ideally, the plugin would just consume
            // interesting keyboard events first.
            const focusedData = convertFormFocusChangeMessage(message);
            isFormFieldFocused = focusedData.focused !== FormFieldFocusType.NONE;
            break;
        case 'rendererPreferencesUpdated':
            const caretBrowsingEnabledData = message;
            caretBrowsingEnabled = caretBrowsingEnabledData.caretBrowsingEnabled;
            break;
    }
    channel.port1.postMessage(message);
});
// Parent-to-plugin message handlers. Most messages are passed through, but some
// messages (with handlers that `return` immediately) are meant only for this
// frame, not the plugin.
let isPresentationMode = false;
channel.port1.onmessage = e => {
    switch (e.data.type) {
        case 'focus':
            plugin.focus();
            return;
        case 'setPresentationMode':
            isPresentationMode = e.data.enablePresentationMode;
            gestureDetector.setPresentationMode(isPresentationMode);
            swipeDetector.setPresentationMode(isPresentationMode);
            if (isPresentationMode) {
                document.documentElement.className = 'fullscreen';
            }
            else {
                document.documentElement.className = '';
            }
            break;
        case 'syncScrollToRemote':
            window.scrollTo({
                left: e.data.x,
                top: e.data.y,
                behavior: e.data.isSmooth ? 'smooth' : 'auto',
            });
            channel.port1.postMessage({
                type: 'ackScrollToRemote',
                x: window.scrollX,
                y: window.scrollY,
            });
            return;
        case 'updateSize':
            sizer.style.width = `${e.data.width}px`;
            sizer.style.height = `${e.data.height}px`;
            return;
        case 'viewport':
            // Snoop on "viewport" message to support real RTL scrolling in Print
            // Preview.
            // TODO(crbug.com/40737077): Support real RTL scrolling in the PDF viewer.
            if (parentOrigin === 'chrome://print' && e.data.layoutOptions) {
                switch (e.data.layoutOptions.direction) {
                    case 1:
                        document.dir = 'rtl';
                        break;
                    case 2:
                        document.dir = 'ltr';
                        break;
                    default:
                        document.dir = '';
                        break;
                }
            }
            break;
    }
    plugin.postMessage(e.data);
};
// Entangle parent-child message channel.
window.parent.postMessage({ type: 'connect', token: srcUrl.href }, parentOrigin, [channel.port2]);
// Forward "scroll" events back to the parent frame's `Viewport`.
window.addEventListener('scroll', () => {
    channel.port1.postMessage({
        type: 'syncScrollFromRemote',
        x: window.scrollX,
        y: window.scrollY,
    });
});
/**
 * Relays gesture events to the parent frame.
 * @param e The gesture event.
 */
function relayGesture(e) {
    const gestureEvent = e;
    channel.port1.postMessage({
        type: 'gesture',
        gesture: {
            type: gestureEvent.type,
            detail: gestureEvent.detail,
        },
    });
}
const gestureDetector = new GestureDetector(plugin);
for (const type of ['pinchstart', 'pinchupdate', 'pinchend', 'wheel']) {
    gestureDetector.getEventTarget().addEventListener(type, relayGesture);
}
/**
 * Relays swipe events to the parent frame.
 * @param e The swipe event.
 */
function relaySwipe(e) {
    const swipeEvent = e;
    channel.port1.postMessage({
        type: 'swipe',
        direction: swipeEvent.detail,
    });
}
const swipeDetector = new SwipeDetector(plugin);
swipeDetector.getEventTarget().addEventListener('swipe', relaySwipe);
// 
document.addEventListener('pointerdown', e => {
    // Only forward left click.
    if (e.button !== 0) {
        return;
    }
    channel.port1.postMessage({
        type: 'sendClickEvent',
        x: e.clientX,
        y: e.clientY,
    });
});
// 
document.addEventListener('keydown', e => {
    // Only forward potential shortcut keys.
    switch (e.key) {
        case ' ':
            // Preventing Space happens in the "keypress" event handler.
            break;
        case 'PageDown':
        case 'PageUp':
            // Prevent PageDown/PageUp when there are no modifier keys.
            if (!hasKeyModifiers(e)) {
                e.preventDefault();
                break;
            }
            return;
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'ArrowUp':
            if (caretBrowsingEnabled) {
                // Do not prevent default, otherwise the plugin will not handle
                // directional key events.
                break;
            }
            // Don't prevent arrow navigation in form fields, or if modified.
            if (!isFormFieldFocused && !hasKeyModifiers(e)) {
                e.preventDefault();
                break;
            }
            return;
        // 
        case 'Enter':
        // Enter is used to create new text annotations.
        // 
        case 'Escape':
        case 'Tab':
            // Print Preview is interested in Escape and Tab.
            break;
        case '=':
        case '-':
        case '+':
            // Ignore zoom shortcuts in Presentation mode.
            if (isPresentationMode && hasCtrlModifier(e)) {
                e.preventDefault();
            }
            return;
        case 'a':
            // Take over Ctrl+A (but not other combinations like Ctrl-Shift-A).
            // Note that on macOS, "Ctrl" is Command.
            if (hasCtrlModifierOnly(e)) {
                e.preventDefault();
                break;
            }
            return;
        default:
            // Relay (but don't prevent) other shortcuts.
            if (hasCtrlModifier(e)) {
                break;
            }
            // 
            if (e.altKey) {
                break;
            }
            // 
            return;
    }
    channel.port1.postMessage({
        type: 'sendKeyEvent',
        keyEvent: {
            keyCode: e.keyCode,
            code: e.code,
            key: e.key,
            shiftKey: e.shiftKey,
            ctrlKey: e.ctrlKey,
            altKey: e.altKey,
            metaKey: e.metaKey,
        },
    });
});
// Suppress extra scroll by preventing the default "keypress" handler for Space.
// TODO(crbug.com/40208546): Ideally would prevent "keydown" instead, but this
// doesn't work when a plugin element has focus.
document.addEventListener('keypress', e => {
    switch (e.key) {
        case ' ':
            // Don't prevent Space in form fields.
            if (!isFormFieldFocused) {
                e.preventDefault();
            }
            break;
    }
});
//# sourceMappingURL=pdf_internal_plugin_wrapper.rollup.js.map
