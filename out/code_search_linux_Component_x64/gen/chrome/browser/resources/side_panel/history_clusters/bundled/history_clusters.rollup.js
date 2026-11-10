import 'chrome://history-clusters-side-panel.top-chrome/strings.m.js';
import { css, html, nothing, CrLitElement, render } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/brave/leo.bundle.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';

const sheet$2 = new CSSStyleSheet();
sheet$2.replaceSync(`html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-100-rgb:244,199,195;--google-red-100:rgb(var(--google-red-100-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-red-700-rgb:197,57,41;--google-red-700:rgb(var(--google-red-700-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--google-yellow-700-rgb:240,147,0;--google-yellow-700:rgb(var(--google-yellow-700-rgb));--cr-card-background-color:white;--cr-shadow-key-color_:color-mix(in srgb,var(--cr-shadow-color) 30%,transparent);--cr-shadow-ambient-color_:color-mix(in srgb,var(--cr-shadow-color) 15%,transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb),0.1);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:var(--cr-elevation-2);--cr-separator-color:rgba(0,0,0,.06);--cr-title-text-color:rgb(90,90,90);--cr-scrollable-border-color:var(--google-grey-300);--cr-button-edge-spacing:12px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb),.14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1;--cr-fallback-color-outline:rgb(116,119,117);--cr-fallback-color-primary:rgb(11,87,208);--cr-fallback-color-on-primary:rgb(255,255,255);--cr-fallback-color-primary-container:rgb(211,227,253);--cr-fallback-color-on-primary-container:rgb(4,30,73);--cr-fallback-color-secondary-container:rgb(194,231,255);--cr-fallback-color-on-secondary-container:rgb(0,29,53);--cr-fallback-color-neutral-container:rgb(242,242,242);--cr-fallback-color-neutral-outline:rgb(199,199,199);--cr-fallback-color-surface:rgb(255,255,255);--cr-fallback-color-surface1:rgb(248,250,253);--cr-fallback-color-surface2:rgb(243,246,252);--cr-fallback-color-surface3:rgb(239,243,250);--cr-fallback-color-surface4:rgb(237,242,250);--cr-fallback-color-surface5:rgb(234,240,249);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225,227,225);--cr-fallback-color-on-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-subtle:rgb(71,71,71);--cr-fallback-color-inverse-primary:rgb(168,199,250);--cr-fallback-color-inverse-surface:rgb(48,48,48);--cr-fallback-color-inverse-on-surface:rgb(242,242,242);--cr-fallback-color-tonal-container:rgb(211,227,253);--cr-fallback-color-on-tonal-container:rgb(4,30,73);--cr-fallback-color-tonal-outline:rgb(168,199,250);--cr-fallback-color-error:rgb(179,38,30);--cr-fallback-color-divider:rgb(211,227,253);--cr-fallback-color-state-hover-on-prominent_:rgba(253,252,251,.1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(var(--cr-fallback-color-state-ripple-primary-rgb_),0.32);--cr-fallback-color-base-container:rgb(236,239,247);--cr-fallback-color-disabled-background:rgba(var(--cr-fallback-color-on-surface-rgb),.12);--cr-fallback-color-disabled-foreground:rgba(var(--cr-fallback-color-on-surface-rgb),var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,rgba(var(--cr-fallback-color-on-surface-rgb),.08));--cr-hover-on-prominent-background-color:var(--color-sys-state-hover-on-prominent,var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(--color-sys-state-hover-on-subtle,var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,rgba(var(--cr-fallback-color-on-surface-rgb),.12));--cr-active-on-primary-background-color:var(--color-sys-state-ripple-primary,var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(--color-sys-state-ripple-neutral-on-subtle,var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,var(--cr-fallback-color-primary));--cr-focus-outline-inverse-color:var(--color-sys-state-focus-ring-inverse,var(--cr-fallback-color-inverse-primary));--cr-primary-text-color:var(--color-primary-foreground,var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow,rgb(0,0,0));--cr-checked-color:var(--color-checkbox-foreground-checked,var(--cr-fallback-color-primary))}html[webui-refresh-2026]{--cr-card-background-color:var(--color-webui-card-background)}@media (prefers-color-scheme:dark){html{--cr-fallback-color-outline:rgb(142,145,143);--cr-fallback-color-primary:rgb(168,199,250);--cr-fallback-color-on-primary:rgb(6,46,111);--cr-fallback-color-primary-container:rgb(8,66,160);--cr-fallback-color-on-primary-container:rgb(211,227,253);--cr-fallback-color-secondary-container:rgb(0,74,119);--cr-fallback-color-on-secondary-container:rgb(194,231,255);--cr-fallback-color-neutral-container:rgb(40,40,40);--cr-fallback-color-neutral-outline:rgb(117,117,117);--cr-fallback-color-surface:rgb(31,31,31);--cr-fallback-color-surface1:rgb(39,40,42);--cr-fallback-color-surface2:rgb(45,47,49);--cr-fallback-color-surface3:rgb(51,52,56);--cr-fallback-color-surface4:rgb(52,54,58);--cr-fallback-color-surface5:rgb(56,58,62);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-variant:rgb(196,199,197);--cr-fallback-color-on-surface-subtle:rgb(199,199,199);--cr-fallback-color-inverse-primary:rgb(11,87,208);--cr-fallback-color-inverse-surface:rgb(227,227,227);--cr-fallback-color-inverse-on-surface:rgb(31,31,31);--cr-fallback-color-tonal-container:rgb(0,74,119);--cr-fallback-color-on-tonal-container:rgb(194,231,255);--cr-fallback-color-tonal-outline:rgb(4,125,183);--cr-fallback-color-error:rgb(242,184,181);--cr-fallback-color-divider:rgb(94,94,94);--cr-fallback-color-state-hover-on-prominent_:rgba(31,31,31,.06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40,40,40,1);--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb),0.1);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255,255,255,.06);--cr-menu-shadow:rgba(0,0,0,.3) 0 1px 2px 0,rgba(0,0,0,.15) 0 3px 6px 2px;--cr-separator-color:rgba(255,255,255,.1);--cr-title-text-color:var(--cr-primary-text-color);--cr-scrollable-border-color:var(--google-grey-700)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent;--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}@media (prefers-reduced-motion:reduce){html{--cr-animations-disabled:1}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet$2];

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
    throw new Error('Assertion failed' + (message ? `: ${message}` : ''));
}
function assertInstanceof(value, type, message) {
    if (value instanceof type) {
        return;
    }
    throw new Error(`Value ${value} is not of type ${type.name || typeof type}`);
}
/**
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 */
function assertNotReached(message = 'Unreachable code hit') {
    assert(false, message);
}
/**
 * Statically and dynamically assert that a code should not be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(value: SomeEnum): number {
 *     switch (value) {
 *       case ENUM_FIRST_OF_TWO:
 *         return 1;
 *       case ENUM_LAST_OF_TWO:
 *         return 2;
 *       default:
 *         assertNotReachedCase(value);
 *     }
 *   }
 *
 * Helper function that should be preferred over assertNotReached in switch/case
 * statements referring to enums, because it results in a build time error if the
 * 'case' statements are not exhaustive. At runtime it behaves identically to
 * assertNotReached.
 */
function assertNotReachedCase(_param, message) {
    assertNotReached(message);
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The class name to set on the document element.
 */
const CLASS_NAME = 'focus-outline-visible';
const docsToManager = new Map();
/**
 * This class sets a CSS class name on the HTML element of |doc| when the user
 * presses a key. It removes the class name when the user clicks anywhere.
 *
 * This allows you to write CSS like this:
 *
 * html.focus-outline-visible my-element:focus {
 *   outline: 5px auto -webkit-focus-ring-color;
 * }
 *
 * And the outline will only be shown if the user uses the keyboard to get to
 * it.
 *
 */
class FocusOutlineManager {
    // Whether focus change is triggered by a keyboard event.
    focusByKeyboard_ = true;
    classList_;
    /**
     * @param doc The document to attach the focus outline manager to.
     */
    constructor(doc) {
        this.classList_ = doc.documentElement.classList;
        doc.addEventListener('keydown', (e) => this.onEvent_(true, e), true);
        doc.addEventListener('mousedown', (e) => this.onEvent_(false, e), true);
        this.updateVisibility();
    }
    onEvent_(focusByKeyboard, e) {
        if (this.focusByKeyboard_ === focusByKeyboard) {
            return;
        }
        if (e instanceof KeyboardEvent && e.repeat) {
            // A repeated keydown should not trigger the focus state. For example,
            // there is a repeated ALT keydown if ALT+CLICK is used to open the
            // context menu and ALT is not released.
            return;
        }
        this.focusByKeyboard_ = focusByKeyboard;
        this.updateVisibility();
    }
    updateVisibility() {
        this.visible = this.focusByKeyboard_;
    }
    /**
     * Whether the focus outline should be visible.
     */
    set visible(visible) {
        this.classList_.toggle(CLASS_NAME, visible);
    }
    get visible() {
        return this.classList_.contains(CLASS_NAME);
    }
    /**
     * Gets a per document singleton focus outline manager.
     * @param doc The document to get the |FocusOutlineManager| for.
     * @return The per document singleton focus outline manager.
     */
    static forDocument(doc) {
        let manager = docsToManager.get(doc);
        if (!manager) {
            manager = new FocusOutlineManager(doc);
            docsToManager.set(doc, manager);
        }
        return manager;
    }
}

// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview EventTracker is a simple class that manages the addition and
 * removal of DOM event listeners. In particular, it keeps track of all
 * listeners that have been added and makes it easy to remove some or all of
 * them without requiring all the information again. This is particularly handy
 * when the listener is a generated function such as a lambda or the result of
 * calling Function.bind.
 */
class EventTracker {
    listeners_ = [];
    /**
     * Add an event listener - replacement for EventTarget.addEventListener.
     * @param target The DOM target to add a listener to.
     * @param eventType The type of event to subscribe to.
     * @param listener The listener to add.
     * @param capture Whether to invoke during the capture phase. Defaults to
     *     false.
     */
    add(target, eventType, listener, capture = false) {
        const h = {
            target: target,
            eventType: eventType,
            listener: listener,
            capture: capture,
        };
        this.listeners_.push(h);
        target.addEventListener(eventType, listener, capture);
    }
    /**
     * Remove any specified event listeners added with this EventTracker.
     * @param target The DOM target to remove a listener from.
     * @param eventType The type of event to remove.
     */
    remove(target, eventType) {
        this.listeners_ = this.listeners_.filter(listener => {
            if (listener.target === target &&
                (!eventType || (listener.eventType === eventType))) {
                EventTracker.removeEventListener(listener);
                return false;
            }
            return true;
        });
    }
    /** Remove all event listeners added with this EventTracker. */
    removeAll() {
        this.listeners_.forEach(listener => EventTracker.removeEventListener(listener));
        this.listeners_ = [];
    }
    /**
     * Remove a single event listener given it's tracking entry. It's up to the
     * caller to ensure the entry is removed from listeners_.
     * @param entry The entry describing the listener to
     * remove.
     */
    static removeEventListener(entry) {
        entry.target.removeEventListener(entry.eventType, entry.listener, entry.capture);
    }
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return The currently focused element (including elements that are
 *     behind a shadow root), or null if nothing is focused.
 */
function getDeepActiveElement() {
    let a = document.activeElement;
    while (a && a.shadowRoot && a.shadowRoot.activeElement) {
        a = a.shadowRoot.activeElement;
    }
    return a;
}
/**
 * Check the directionality of the page.
 * @return True if Chrome is running an RTL UI.
 */
function isRTL() {
    return document.documentElement.dir === 'rtl';
}
/**
 * @return Whether a modifier key was down when processing |e|.
 */
function hasKeyModifiers(e) {
    return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// clang-format on
const ACTIVE_CLASS = 'focus-row-active';
/**
 * A class to manage focus between given horizontally arranged elements.
 *
 * Pressing left cycles backward and pressing right cycles forward in item
 * order. Pressing Home goes to the beginning of the list and End goes to the
 * end of the list.
 *
 * If an item in this row is focused, it'll stay active (accessible via tab).
 * If no items in this row are focused, the row can stay active until focus
 * changes to a node inside |this.boundary_|. If |boundary| isn't specified,
 * any focus change deactivates the row.
 */
class FocusRow {
    root;
    delegate;
    eventTracker = new EventTracker();
    boundary_;
    /**
     * @param root The root of this focus row. Focus classes are
     *     applied to |root| and all added elements must live within |root|.
     * @param boundary Focus events are ignored outside of this element.
     * @param delegate An optional event delegate.
     */
    constructor(root, boundary, delegate) {
        this.root = root;
        this.boundary_ = boundary || document.documentElement;
        this.delegate = delegate;
    }
    /**
     * Whether it's possible that |element| can be focused.
     */
    static isFocusable(element) {
        if (!element || element.disabled) {
            return false;
        }
        // We don't check that element.tabIndex >= 0 here because inactive rows
        // set a tabIndex of -1.
        let current = element;
        while (true) {
            assertInstanceof(current, Element);
            const style = window.getComputedStyle(current);
            if (style.visibility === 'hidden' || style.display === 'none') {
                return false;
            }
            const parent = current.parentNode;
            if (!parent) {
                return false;
            }
            if (parent === current.ownerDocument ||
                parent instanceof DocumentFragment) {
                return true;
            }
            current = parent;
        }
    }
    /**
     * A focus override is a function that returns an element that should gain
     * focus. The element may not be directly selectable for example the element
     * that can gain focus is in a shadow DOM. Allowing an override via a
     * function leaves the details of how the element is retrieved to the
     * component.
     */
    static getFocusableElement(element) {
        const withFocusable = element;
        if (withFocusable.getFocusableElement) {
            return withFocusable.getFocusableElement();
        }
        return element;
    }
    /**
     * Register a new type of focusable element (or add to an existing one).
     *
     * Example: an (X) button might be 'delete' or 'close'.
     *
     * When FocusRow is used within a FocusGrid, these types are used to
     * determine equivalent controls when Up/Down are pressed to change rows.
     *
     * Another example: mutually exclusive controls that hide each other on
     * activation (i.e. Play/Pause) could use the same type (i.e. 'play-pause')
     * to indicate they're equivalent.
     *
     * @param type The type of element to track focus of.
     * @param selectorOrElement The selector of the element
     *    from this row's root, or the element itself.
     * @return Whether a new item was added.
     */
    addItem(type, selectorOrElement) {
        assert(type);
        let element;
        if (typeof selectorOrElement === 'string') {
            element = this.root.querySelector(selectorOrElement);
        }
        else {
            element = selectorOrElement;
        }
        if (!element) {
            return false;
        }
        element.setAttribute('focus-type', type);
        element.tabIndex = this.isActive() ? 0 : -1;
        this.eventTracker.add(element, 'blur', this.onBlur_.bind(this));
        this.eventTracker.add(element, 'focus', this.onFocus_.bind(this));
        this.eventTracker.add(element, 'keydown', this.onKeydown_.bind(this));
        this.eventTracker.add(element, 'mousedown', this.onMousedown_.bind(this));
        return true;
    }
    /** Dereferences nodes and removes event handlers. */
    destroy() {
        this.eventTracker.removeAll();
    }
    /**
     * @param sampleElement An element for to find an equivalent
     *     for.
     * @return An equivalent element to focus for
     *     |sampleElement|.
     */
    getCustomEquivalent(_sampleElement) {
        const focusable = this.getFirstFocusable();
        assert(focusable);
        return focusable;
    }
    /**
     * @return All registered elements (regardless of focusability).
     */
    getElements() {
        return Array.from(this.root.querySelectorAll('[focus-type]'))
            .map(FocusRow.getFocusableElement);
    }
    /**
     * Find the element that best matches |sampleElement|.
     * @param sampleElement An element from a row of the same
     *     type which previously held focus.
     * @return The element that best matches sampleElement.
     */
    getEquivalentElement(sampleElement) {
        if (this.getFocusableElements().indexOf(sampleElement) >= 0) {
            return sampleElement;
        }
        const sampleFocusType = this.getTypeForElement(sampleElement);
        if (sampleFocusType) {
            const sameType = this.getFirstFocusable(sampleFocusType);
            if (sameType) {
                return sameType;
            }
        }
        return this.getCustomEquivalent(sampleElement);
    }
    /**
     * @param type An optional type to search for.
     * @return The first focusable element with |type|.
     */
    getFirstFocusable(type) {
        const element = this.getFocusableElements().find(el => !type || el.getAttribute('focus-type') === type);
        return element || null;
    }
    /** @return Registered, focusable elements. */
    getFocusableElements() {
        return this.getElements().filter(FocusRow.isFocusable);
    }
    /**
     * @param element An element to determine a focus type for.
     * @return The focus type for |element| or '' if none.
     */
    getTypeForElement(element) {
        return element.getAttribute('focus-type') || '';
    }
    /** @return Whether this row is currently active. */
    isActive() {
        return this.root.classList.contains(ACTIVE_CLASS);
    }
    /**
     * Enables/disables the tabIndex of the focusable elements in the FocusRow.
     * tabIndex can be set properly.
     * @param active True if tab is allowed for this row.
     */
    makeActive(active) {
        if (active === this.isActive()) {
            return;
        }
        this.getElements().forEach(function (element) {
            element.tabIndex = active ? 0 : -1;
        });
        this.root.classList.toggle(ACTIVE_CLASS, active);
    }
    onBlur_(e) {
        if (!this.boundary_.contains(e.relatedTarget)) {
            return;
        }
        const currentTarget = e.currentTarget;
        if (this.getFocusableElements().indexOf(currentTarget) >= 0) {
            this.makeActive(false);
        }
    }
    onFocus_(e) {
        if (this.delegate) {
            this.delegate.onFocus(this, e);
        }
    }
    onMousedown_(e) {
        // Only accept left mouse clicks.
        if (e.button) {
            return;
        }
        // Allow the element under the mouse cursor to be focusable.
        const target = e.currentTarget;
        if (!target.disabled) {
            target.tabIndex = 0;
        }
    }
    onKeydown_(e) {
        const elements = this.getFocusableElements();
        const currentElement = FocusRow.getFocusableElement(e.currentTarget);
        const elementIndex = elements.indexOf(currentElement);
        assert(elementIndex >= 0);
        if (this.delegate && this.delegate.onKeydown(this, e)) {
            return;
        }
        const isShiftTab = !e.altKey && !e.ctrlKey && !e.metaKey && e.shiftKey &&
            e.key === 'Tab';
        if (hasKeyModifiers(e) && !isShiftTab) {
            return;
        }
        let index = -1;
        let shouldStopPropagation = true;
        if (isShiftTab) {
            // This always moves back one element, even in RTL.
            index = elementIndex - 1;
            if (index < 0) {
                // Bubble up to focus on the previous element outside the row.
                return;
            }
        }
        else if (e.key === 'ArrowLeft') {
            index = elementIndex + (isRTL() ? 1 : -1);
        }
        else if (e.key === 'ArrowRight') {
            index = elementIndex + (isRTL() ? -1 : 1);
        }
        else if (e.key === 'Home') {
            index = 0;
        }
        else if (e.key === 'End') {
            index = elements.length - 1;
        }
        else {
            shouldStopPropagation = false;
        }
        const elementToFocus = elements[index];
        if (elementToFocus) {
            this.getEquivalentElement(elementToFocus).focus();
            e.preventDefault();
        }
        if (shouldStopPropagation) {
            e.stopPropagation();
        }
    }
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let hideInk = false;
document.addEventListener('pointerdown', function () {
    hideInk = true;
}, true);
document.addEventListener('keydown', function () {
    hideInk = false;
}, true);
/**
 * Attempts to track whether focus outlines should be shown, and if they
 * shouldn't, removes the "ink" (ripple) from a control while focusing it.
 * This is helpful when a user is clicking/touching, because it's not super
 * helpful to show focus ripples in that case. This is Polymer-specific.
 */
function focusWithoutInk(toFocus) {
    // |toFocus| does not have a 'noink' property, so it's unclear whether the
    // element has "ink" and/or whether it can be suppressed. Just focus().
    if (!('noink' in toFocus) || !hideInk) {
        toFocus.focus();
        return;
    }
    const toFocusWithNoInk = toFocus;
    // Make sure the element is in the document we're listening to events on.
    assert(document === toFocusWithNoInk.ownerDocument);
    const { noink } = toFocusWithNoInk;
    toFocusWithNoInk.noink = true;
    toFocusWithNoInk.focus();
    toFocusWithNoInk.noink = noink;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* @fileoverview Utilities for determining the current platform. */
/** Whether we are using a Mac or not. */
const isMac = /Mac/.test(navigator.platform);
/** Whether this is on the Windows platform or not. */
const isWindows = /Win/.test(navigator.platform);
/** Whether this is on Android. */
const isAndroid = /Android/.test(navigator.userAgent);
/** Whether this is on iOS. */
const isIOS = /CriOS/.test(navigator.userAgent);

let instance$A = null;
function getCss$x() {
    return instance$A || (instance$A = [...[], css `:host{--cr-hairline:1px solid var(--color-menu-separator,var(--cr-fallback-color-divider));--cr-action-menu-disabled-item-color:var(--color-menu-item-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-action-menu-disabled-item-opacity:1;--cr-menu-background-color:var(--color-menu-background,var(--cr-fallback-color-surface));--cr-menu-background-focus-color:var(--cr-hover-background-color);--cr-menu-shadow:var(--cr-elevation-2);--cr-primary-text-color:var(--color-menu-item-foreground,var(--cr-fallback-color-on-surface))}:host dialog{background-color:var(--cr-menu-background-color);border:none;border-radius:var(--cr-menu-border-radius,4px);box-shadow:var(--cr-menu-shadow);margin:0;min-width:128px;outline:none;overflow:var(--cr-action-menu-overflow,auto);padding:0;position:absolute}:host([use-unbounded]) dialog{max-height:none;position:fixed}@media (forced-colors:active){:host dialog{border:var(--cr-border-hcm)}}:host dialog::backdrop{background-color:transparent}:host ::slotted(.dropdown-item){-webkit-tap-highlight-color:transparent;background:none;border:none;border-radius:0;box-sizing:border-box;color:var(--cr-primary-text-color);font:inherit;min-height:32px;padding:8px 24px;text-align:start;user-select:none;width:100%}:host ::slotted(.dropdown-item:not([hidden])){align-items:center;display:flex}:host ::slotted(.dropdown-item[disabled]){color:var(--cr-action-menu-disabled-item-color,var(--cr-primary-text-color));opacity:var(--cr-action-menu-disabled-item-opacity,0.65)}:host ::slotted(.dropdown-item:not([disabled])){cursor:pointer}:host ::slotted(.dropdown-item:focus){background-color:var(--cr-menu-background-focus-color);outline:none}:host dialog[open] ::slotted(.dropdown-item){user-select:auto}:host ::slotted(.dropdown-item:focus-visible){outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px}@media (forced-colors:active){:host ::slotted(.dropdown-item:focus){outline:var(--cr-focus-outline-hcm)}}.item-wrapper{outline:none;padding:var(--cr-action-menu-padding,8px 0)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$k() {
    return html `
<dialog id="dialog" part="dialog" @close="${this.onNativeDialogClose_}"
    @beforetoggle="${this.onDialogBeforetoggle_}"
    ?unbounded="${this.useUnbounded_}" role="application"
    aria-roledescription="${this.roleDescription || nothing}">
  <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1"
      aria-label="${this.accessibilityLabel || nothing}">
    <slot id="contentNode" @slotchange="${this.onSlotchange_}"></slot>
  </div>
</dialog>`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @param e The focusout event.
 * @param element The element that should contain the focus.
 * @return Whether the focus is moving outside of the element.
 */
function hasFocusoutOutside(e, element) {
    return !element || !element.contains(e.relatedTarget);
}
/**
 * @return Whether the Unbounded Element API is available. The API is only
 *     installed in contexts and on platforms that can host an external OS
 *     surface, so it must be feature detected before use.
 */
function isUnboundedSupported() {
    return 'showUnboundedElement' in HTMLElement.prototype;
}
var AnchorAlignment;
(function (AnchorAlignment) {
    AnchorAlignment[AnchorAlignment["BEFORE_START"] = -2] = "BEFORE_START";
    AnchorAlignment[AnchorAlignment["AFTER_START"] = -1] = "AFTER_START";
    AnchorAlignment[AnchorAlignment["CENTER"] = 0] = "CENTER";
    AnchorAlignment[AnchorAlignment["BEFORE_END"] = 1] = "BEFORE_END";
    AnchorAlignment[AnchorAlignment["AFTER_END"] = 2] = "AFTER_END";
})(AnchorAlignment || (AnchorAlignment = {}));
const DROPDOWN_ITEM_CLASS = 'dropdown-item';
const SELECTABLE_DROPDOWN_ITEM_QUERY = `.${DROPDOWN_ITEM_CLASS}:not([hidden]):not([disabled])`;
const AFTER_END_OFFSET = 10;
/**
 * Returns the point to start along the X or Y axis given a start and end
 * point to anchor to, the length of the target and the direction to anchor
 * in. If honoring the anchor would force the menu outside of min/max, this
 * will ignore the anchor position and try to keep the menu within min/max.
 */
function getStartPointWithAnchor(start, end, menuLength, anchorAlignment, min, max, unbounded = false) {
    let startPoint = 0;
    switch (anchorAlignment) {
        case AnchorAlignment.BEFORE_START:
            startPoint = start - menuLength;
            break;
        case AnchorAlignment.AFTER_START:
            startPoint = start;
            break;
        case AnchorAlignment.CENTER:
            startPoint = (start + end - menuLength) / 2;
            break;
        case AnchorAlignment.BEFORE_END:
            startPoint = end - menuLength;
            break;
        case AnchorAlignment.AFTER_END:
            startPoint = end;
            break;
        default:
            assertNotReachedCase();
    }
    // Unbounded case clamping: Clamps to screen size as well as max/min.
    if (unbounded) {
        const isForward = (anchorAlignment === AnchorAlignment.AFTER_END ||
            anchorAlignment === AnchorAlignment.AFTER_START);
        const isBackward = (anchorAlignment === AnchorAlignment.BEFORE_START ||
            anchorAlignment === AnchorAlignment.BEFORE_END);
        const spaceForward = max - end;
        const spaceBackward = start - min;
        // If opening Forward (DOWN / RIGHT) overflows the screen limit:
        if (isForward && Number.isFinite(max) && (startPoint + menuLength > max)) {
            if (spaceBackward >= menuLength || spaceBackward > spaceForward) {
                // Flip to Backward (UP / LEFT)
                startPoint = (anchorAlignment === AnchorAlignment.AFTER_END) ?
                    start - menuLength :
                    end - menuLength;
            }
        }
        else if (isBackward && Number.isFinite(min) && (startPoint < min)) {
            // If opening Backward (UP / LEFT) underflows the screen limit:
            if (spaceForward >= menuLength || spaceForward > spaceBackward) {
                // Flip to Forward (DOWN / RIGHT)
                startPoint =
                    (anchorAlignment === AnchorAlignment.BEFORE_START) ? end : start;
            }
        }
        else if (anchorAlignment === AnchorAlignment.CENTER) {
            if (Number.isFinite(max) && startPoint + menuLength > max) {
                startPoint = max - menuLength;
            }
            if (Number.isFinite(min) && startPoint < min) {
                startPoint = min;
            }
        }
        return startPoint;
    }
    // Non-unbounded case clamping.
    if (startPoint + menuLength > max) {
        startPoint = end - menuLength;
    }
    if (startPoint < min) {
        startPoint = start;
    }
    startPoint = Math.max(min, Math.min(startPoint, max - menuLength));
    return startPoint;
}
function getDefaultShowConfig() {
    return {
        top: 0,
        left: 0,
        height: 0,
        width: 0,
        anchorAlignmentX: AnchorAlignment.AFTER_START,
        anchorAlignmentY: AnchorAlignment.AFTER_START,
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0,
    };
}
class CrActionMenuElement extends CrLitElement {
    static get is() {
        return 'cr-action-menu';
    }
    static get styles() {
        return getCss$x();
    }
    render() {
        return getHtml$k.bind(this)();
    }
    static get properties() {
        return {
            // Accessibility text of the menu. Should be something along the lines of
            // "actions", or "more actions".
            accessibilityLabel: { type: String },
            // Setting this flag will make the menu listen for content size changes
            // and reposition to its anchor accordingly.
            autoReposition: { type: Boolean },
            // Setting this flag will cause the menu to automatically close when
            // focus moves outside the menu.
            autoCloseOnFocusout: { type: Boolean },
            open: {
                type: Boolean,
                notify: true,
            },
            // Setting this flag will cause the menu to open as a non-modal dialog.
            // Useful when the menu needs to remain open while interacting with
            // other parts of the page.
            nonModal: {
                type: Boolean,
                reflect: true,
            },
            // Descriptor of the menu. Should be something along the lines of "menu"
            roleDescription: { type: String },
            // Enables Unbounded Element support on the internal <dialog>, allowing
            // the action menu to render into an external OS surface outside the host
            // window/WebContents. Position calculations use screen coordinates, and
            // the menu does not automatically close on host window resize.
            useUnbounded_: { type: Boolean },
        };
    }
    #accessibilityLabel_accessor_storage;
    get accessibilityLabel() { return this.#accessibilityLabel_accessor_storage; }
    set accessibilityLabel(value) { this.#accessibilityLabel_accessor_storage = value; }
    #autoReposition_accessor_storage = false;
    get autoReposition() { return this.#autoReposition_accessor_storage; }
    set autoReposition(value) { this.#autoReposition_accessor_storage = value; }
    #autoCloseOnFocusout_accessor_storage = false;
    get autoCloseOnFocusout() { return this.#autoCloseOnFocusout_accessor_storage; }
    set autoCloseOnFocusout(value) { this.#autoCloseOnFocusout_accessor_storage = value; }
    #open_accessor_storage = false;
    get open() { return this.#open_accessor_storage; }
    set open(value) { this.#open_accessor_storage = value; }
    #roleDescription_accessor_storage;
    get roleDescription() { return this.#roleDescription_accessor_storage; }
    set roleDescription(value) { this.#roleDescription_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    #useUnbounded__accessor_storage = false;
    get useUnbounded_() { return this.#useUnbounded__accessor_storage; }
    set useUnbounded_(value) { this.#useUnbounded__accessor_storage = value; }
    /**
     * Enables unbounded mode, which renders the menu into an external OS
     * surface, allowing it to extend outside the host window. Unbounded mode is
     * only enabled if the Unbounded Element API is supported in this
     * environment, and cannot be disabled once enabled.
     *
     * Note: This awaits the pending rendering update so that the `unbounded`
     * attribute is applied to the inner <dialog> before it resolves.
     * showUnboundedElement() rejects if that attribute is not already present,
     * so this must be awaited before the menu is first opened.
     *
     * @return Whether unbounded mode is enabled.
     */
    async setUnbounded() {
        if (!isUnboundedSupported()) {
            console.warn('CrActionMenu: Unbounded Element API is not supported in this ' +
                'environment.');
            return false;
        }
        this.useUnbounded_ = true;
        await this.updateComplete;
        return true;
    }
    boundClose_ = null;
    resizeObserver_ = null;
    hasMousemoveListener_ = false;
    anchorElement_ = null;
    lastConfig_ = null;
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeListeners_();
    }
    firstUpdated() {
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('mouseover', this.onMouseover_);
        this.addEventListener('click', this.onClick_);
        this.addEventListener('focusout', this.onFocusout_.bind(this));
    }
    /**
     * Exposing internal <dialog> elements for tests.
     */
    getDialog() {
        return this.$.dialog;
    }
    getUnboundedDialog_() {
        return this.$.dialog;
    }
    showUnboundedDialog_() {
        this.getUnboundedDialog_()
            .showUnboundedElement()
            .then(() => {
            this.fire('unbounded-shown');
        })
            .catch(err => this.handleUnboundedError_('showUnboundedElement', err));
    }
    hideUnboundedDialog_() {
        this.getUnboundedDialog_().hideUnboundedElement().catch(err => this.handleUnboundedError_('hideUnboundedElement', err));
    }
    handleUnboundedError_(operation, err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
            // AbortError is expected if the unbounded element is dismissed by user
            // action (e.g. ESC key) before presentation completes.
            return;
        }
        console.error(`${operation} failed:`, err);
        if (operation === 'showUnboundedElement') {
            this.fire('unbounded-show-error');
        }
    }
    removeListeners_() {
        window.removeEventListener('resize', this.boundClose_);
        window.removeEventListener('popstate', this.boundClose_);
        if (this.resizeObserver_) {
            this.resizeObserver_.disconnect();
            this.resizeObserver_ = null;
        }
    }
    onFocusout_(e) {
        if (this.autoCloseOnFocusout && hasFocusoutOutside(e, this)) {
            this.close();
        }
    }
    onNativeDialogClose_(e) {
        // Ignore any 'close' events not fired directly by the <dialog> element.
        if (e.target !== this.$.dialog) {
            return;
        }
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.fire('close');
    }
    onClick_(e) {
        if (e.composedPath()[0] === this.$.dialog) {
            this.close();
            e.stopPropagation();
        }
    }
    onKeyDown_(e) {
        e.stopPropagation();
        if (e.key === 'Tab' || e.key === 'Escape') {
            this.close();
            if (e.key === 'Tab') {
                this.fire('tabkeyclose', { shiftKey: e.shiftKey });
            }
            e.preventDefault();
            return;
        }
        if ((e.key !== 'Enter' || (isMac && e.ctrlKey)) && e.key !== 'ArrowUp' &&
            e.key !== 'ArrowDown') {
            return;
        }
        const options = Array.from(this.querySelectorAll(SELECTABLE_DROPDOWN_ITEM_QUERY));
        if (options.length === 0) {
            return;
        }
        const focused = getDeepActiveElement();
        const index = options.findIndex(option => FocusRow.getFocusableElement(option) === focused);
        if (e.key === 'Enter') {
            // If a menu item has focus, don't change focus or close menu on 'Enter'.
            if (index !== -1) {
                return;
            }
            if (isWindows || isMac) {
                this.close();
                e.preventDefault();
                return;
            }
        }
        e.preventDefault();
        this.updateFocus_(options, index, e.key !== 'ArrowUp');
        if (!this.hasMousemoveListener_) {
            this.hasMousemoveListener_ = true;
            this.addEventListener('mousemove', e => {
                this.onMouseover_(e);
                this.hasMousemoveListener_ = false;
            }, { once: true });
        }
    }
    focusElement_(el) {
        // preventScroll is only applied when useUnbounded is true to prevent
        // scrolling the host document while preserving full keyboard
        // accessibility and focus outline indicators.
        el.focus({ preventScroll: this.useUnbounded_ });
    }
    onMouseover_(e) {
        const item = e.composedPath()
            .find(el => el.matches && el.matches(SELECTABLE_DROPDOWN_ITEM_QUERY));
        this.focusElement_(item || this.$.wrapper);
    }
    updateFocus_(options, focusedIndex, next) {
        const numOptions = options.length;
        assert(numOptions > 0);
        let index;
        if (focusedIndex === -1) {
            index = next ? 0 : numOptions - 1;
        }
        else {
            const delta = next ? 1 : -1;
            index = (numOptions + focusedIndex + delta) % numOptions;
        }
        this.focusElement_(options[index]);
    }
    close(unboundedAlreadyDismissed = false) {
        if (!this.open) {
            return;
        }
        this.open = false;
        if (this.useUnbounded_ && !unboundedAlreadyDismissed) {
            this.hideUnboundedDialog_();
        }
        // Removing 'resize' and 'popstate' listeners when dialog is closed.
        this.removeListeners_();
        // Closing the native <dialog> is required for both standard and unbounded
        // menus: hideUnboundedElement() only tears down the external platform
        // surface, leaving the HTML <dialog> open in DOM until close() is called.
        this.$.dialog.close();
        if (this.anchorElement_) {
            assert(this.anchorElement_);
            focusWithoutInk(this.anchorElement_);
            this.anchorElement_ = null;
        }
        if (this.lastConfig_) {
            this.lastConfig_ = null;
        }
    }
    /**
     * Shows the menu anchored to the given element.
     */
    showAt(anchorElement, config) {
        this.anchorElement_ = anchorElement;
        // Scroll the anchor element into view so that the bounding rect will be
        // accurate for where the menu should be shown.
        this.anchorElement_.scrollIntoViewIfNeeded();
        const rect = this.anchorElement_.getBoundingClientRect();
        let height = rect.height;
        if (config && !config.noOffset &&
            config.anchorAlignmentY === AnchorAlignment.AFTER_END) {
            // When an action menu is positioned after the end of an element, the
            // action menu can appear too far away from the anchor element, typically
            // because anchors tend to have padding. So we offset the height a bit
            // so the menu shows up slightly closer to the content of anchor.
            height -= AFTER_END_OFFSET;
        }
        this.showAtPosition(Object.assign({
            top: rect.top,
            left: rect.left,
            height: height,
            width: rect.width,
            // Default to anchoring towards the left.
            anchorAlignmentX: AnchorAlignment.BEFORE_END,
        }, config));
        this.focusElement_(this.$.wrapper);
    }
    /**
     * Shows the menu anchored to the given box. The anchor alignment is
     * specified as an X and Y alignment which represents a point in the anchor
     * where the menu will align to, which can have the menu either before or
     * after the given point in each axis. Center alignment places the center of
     * the menu in line with the center of the anchor. Coordinates are relative to
     * the top-left of the viewport.
     *
     *            y-start
     *         _____________
     *         |           |
     *         |           |
     *         |   CENTER  |
     * x-start |     x     | x-end
     *         |           |
     *         |anchor box |
     *         |___________|
     *
     *             y-end
     *
     * For example, aligning the menu to the inside of the top-right edge of
     * the anchor, extending towards the bottom-left would use a alignment of
     * (BEFORE_END, AFTER_START), whereas centering the menu below the bottom
     * edge of the anchor would use (CENTER, AFTER_END).
     */
    showAtPosition(config) {
        // Save the scroll position of the viewport.
        const doc = document.scrollingElement;
        const scrollLeft = doc.scrollLeft;
        const scrollTop = doc.scrollTop;
        // Reset position so that layout isn't affected by the previous position,
        // and so that the dialog is positioned at the top-start corner of the
        // document.
        this.resetStyle_();
        this.nonModal ? this.$.dialog.show() : this.$.dialog.showModal();
        this.open = true;
        if (this.useUnbounded_) {
            this.positionDialog_(config);
            this.showUnboundedDialog_();
        }
        else {
            config.top += scrollTop;
            config.left += scrollLeft;
            this.positionDialog_(Object.assign({
                minX: scrollLeft,
                minY: scrollTop,
                maxX: scrollLeft + doc.clientWidth,
                maxY: scrollTop + doc.clientHeight,
            }, config));
        }
        // Restore the scroll position.
        doc.scrollTop = scrollTop;
        doc.scrollLeft = scrollLeft;
        this.addListeners_();
        // Focus the first selectable item.
        const openedByKey = FocusOutlineManager.forDocument(document).visible;
        if (openedByKey) {
            const firstSelectableItem = this.querySelector(SELECTABLE_DROPDOWN_ITEM_QUERY);
            if (firstSelectableItem) {
                requestAnimationFrame(() => {
                    // Wait for the next animation frame for the dialog to become visible.
                    this.focusElement_(firstSelectableItem);
                });
            }
        }
    }
    resetStyle_() {
        this.$.dialog.style.left = '';
        this.$.dialog.style.right = '';
        this.$.dialog.style.top = '0';
    }
    /**
     * Position the dialog using the coordinates in config. Coordinates are
     * relative to the top-left of the viewport when scrolled to (0, 0).
     */
    positionDialog_(config) {
        this.lastConfig_ = config;
        const c = Object.assign(getDefaultShowConfig(), config);
        if (this.useUnbounded_) {
            // In unbounded mode, the menu can render outside the host window.
            // Compute boundary coordinates relative to the physical screen origin so
            // the dialog is clamped to the visible monitor rather than the host
            // document.
            const screenLeft = window.screenX;
            const screenTop = window.screenY;
            const screenWidth = window.screen.availWidth;
            const screenHeight = window.screen.availHeight;
            if (config.minX === undefined) {
                c.minX = -screenLeft;
            }
            if (config.minY === undefined) {
                c.minY = -screenTop;
            }
            if (config.maxX === undefined) {
                c.maxX = screenWidth - screenLeft;
            }
            if (config.maxY === undefined) {
                c.maxY = screenHeight - screenTop;
            }
        }
        const top = c.top;
        const left = c.left;
        const bottom = top + c.height;
        const right = left + c.width;
        // Flip the X anchor in RTL.
        const rtl = getComputedStyle(this).direction === 'rtl';
        if (rtl) {
            c.anchorAlignmentX *= -1;
        }
        const offsetWidth = this.$.dialog.offsetWidth;
        const menuLeft = getStartPointWithAnchor(left, right, offsetWidth, c.anchorAlignmentX, c.minX, c.maxX, this.useUnbounded_);
        if (rtl) {
            const menuRight = document.scrollingElement.clientWidth - menuLeft - offsetWidth;
            this.$.dialog.style.right = menuRight + 'px';
        }
        else {
            this.$.dialog.style.left = menuLeft + 'px';
        }
        const menuTop = getStartPointWithAnchor(top, bottom, this.$.dialog.offsetHeight, c.anchorAlignmentY, c.minY, c.maxY, this.useUnbounded_);
        this.$.dialog.style.top = menuTop + 'px';
    }
    onSlotchange_() {
        for (const node of this.$.contentNode.assignedElements({ flatten: true })) {
            if (node.classList.contains(DROPDOWN_ITEM_CLASS) &&
                !node.getAttribute('role')) {
                node.setAttribute('role', 'menuitem');
            }
        }
    }
    /**
     * In unbounded mode, the native OS popup window can be dismissed directly by
     * light dismiss (e.g. clicking outside the host document), firing a
     * Blink 'beforetoggle' ToggleEvent when its presentation state transitions to
     * 'closed'. We listen for this event to close the dialog when the unbounded
     * window gets light dismissed.
     */
    onDialogBeforetoggle_(e) {
        if (!this.useUnbounded_) {
            return;
        }
        const toggleEvent = e;
        if (toggleEvent.newState === 'closed' && this.open) {
            this.close(/*unboundedAlreadyDismissed=*/ true);
        }
    }
    addListeners_() {
        this.boundClose_ = this.boundClose_ || (() => {
            if (this.$.dialog.open) {
                this.close();
            }
        });
        window.addEventListener('resize', this.boundClose_);
        window.addEventListener('popstate', this.boundClose_);
        if (this.autoReposition) {
            this.resizeObserver_ = new ResizeObserver(() => {
                if (this.lastConfig_) {
                    this.positionDialog_(this.lastConfig_);
                    this.fire('cr-action-menu-repositioned'); // For easier testing.
                }
            });
            this.resizeObserver_.observe(this.$.dialog);
        }
    }
}
customElements.define(CrActionMenuElement.is, CrActionMenuElement);

let instance$z = null;
function getCss$w() {
    return instance$z || (instance$z = [...[], css `[hidden],:host([hidden]){display:none !important}`]);
}

let instance$y = null;
function getCss$v() {
    return instance$y || (instance$y = [...[getCss$w()], css `:host{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle;fill:var(--iron-icon-fill-color,currentcolor);stroke:var(--iron-icon-stroke-color,none);width:var(--iron-icon-width,24px);height:var(--iron-icon-height,24px)}:host-context([webui-refresh-2026]){&:host(:focus){border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let iconsetMap = null;
class IconsetMap extends EventTarget {
    iconsets_ = new Map();
    static getInstance() {
        return iconsetMap || (iconsetMap = new IconsetMap());
    }
    static resetInstanceForTesting(instance) {
        iconsetMap = instance;
    }
    get(id) {
        return this.iconsets_.get(id) || null;
    }
    set(id, iconset) {
        assert(!this.iconsets_.has(id), `Tried to add a second iconset with id '${id}'`);
        this.iconsets_.set(id, iconset);
        this.dispatchEvent(new CustomEvent('cr-iconset-added', { detail: id }));
    }
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrIconElement extends CrLitElement {
    static get is() {
        return 'cr-icon';
    }
    static get styles() {
        return getCss$v();
    }
    static get properties() {
        return {
            /**
             * The name of the icon to use. The name should be of the form:
             * `iconset_name:icon_name`.
             */
            icon: { type: String },
        };
    }
    #icon_accessor_storage = '';
    get icon() { return this.#icon_accessor_storage; }
    set icon(value) { this.#icon_accessor_storage = value; }
    iconsetName_ = '';
    iconName_ = '';
    iconset_ = null;
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('icon')) {
            const [iconsetName, iconName] = this.icon.split(':');
            this.iconName_ = iconName || '';
            this.iconsetName_ = iconsetName || '';
            this.updateIcon_();
        }
    }
    updateIcon_() {
        if (this.iconName_ === '' && this.iconset_) {
            this.iconset_.removeIcon(this);
        }
        else if (this.iconsetName_) {
            const iconsetMap = IconsetMap.getInstance();
            this.iconset_ = iconsetMap.get(this.iconsetName_);
            assert(this.iconset_, `Could not find iconset for: '${this.iconsetName_}:${this.iconName_}'`);
            this.iconset_.applyIcon(this, this.iconName_);
        }
    }
}
customElements.define(CrIconElement.is, CrIconElement);

// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
function injectStyle(element, css) {
    const originalStyles = element.styles;
    Object.defineProperty(element, 'styles', {
        get() {
            return [
                ...originalStyles,
                css
            ];
        }
    });
    element.elementStyles = element.finalizeStyles(element.styles);
}

// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// 
const leoIcons = window.leoIcons;
// Maps Chromium icons to their equivalent Brave icons.
const iconMap = {
    // chrome://app-settings icons
    'app-management:location': 'location-on',
    'app-management:camera': 'video-camera',
    'app-management:microphone': 'microphone',
    'settings:accessibility': 'accessibility',
    'settings:security': 'lock',
    'settings:search': 'search',
    'settings:palette': 'appearance',
    'settings:password-manager': 'list-checks',
    'settings:language': 'product-translate',
    'settings:build': 'settings',
    'settings:restart-alt': 'backward',
    'settings:location-on': 'location-on', // location
    'privacy:location-on': 'location-on', // location
    'privacy:location-off': 'location-off', // location off
    'cr:videocam': 'video-camera', // camera
    'privacy:videocam-off': 'video-camera-off', // camera off
    'cr:mic': 'microphone', // microphone
    'privacy:mic': 'microphone', // microphone
    'privacy:mic-off': 'microphone-off', // microphone off
    'privacy:sensors': 'motion-sensor', // motion sensors
    'privacy:sensors-off': 'motion-sensor-off', // motion sensors
    'privacy:notifications': 'notification', // notifications
    'privacy:notifications-off': 'notification-off', // notifications off
    'privacy:code': 'code', // javascript
    'privacy:code-off': 'code-off', // javascript
    'settings:cookie': 'cookie', // cookies
    'privacy:cookie': 'cookie', // cookies
    'privacy:lock': 'lock', // security
    'privacy:imagesmode': 'image', // images
    'privacy:hide-image': 'image-off', // images off
    'cr:open-in-new': 'launch', // popups & redirects
    'privacy:open-in-new-off': 'launch-off', // popups & redirects off
    'settings:ads': '', // intrusive ads (unused)
    'cr:sync': 'product-sync', // background sync
    'privacy:volume-up': 'volume-on', // sound
    'privacy:volume-off': 'volume-off', // sound off
    'cr:download': 'download', // automatic downloads
    'privacy:protocol-handler': 'protocol-handler', // protocol handler
    'privacy:protocol-handler-off': 'protocol-handler-off', // protocol handler off
    'privacy:file-download-off': 'download-off', // automatic downloads off
    'privacy:piano': 'media-visualizer', // midi devices
    'privacy:piano-off': 'media-visualizer-off', // midi devices off
    'privacy:usb': 'usb', // usb devices
    'privacy:usb-off': 'usb-off', // usb devices off
    'privacy:developer-board': 'cpu-chip', // serial ports
    'privacy:developer-board-off': 'cpu-chip-off', // serial ports off
    'privacy:file-save': 'file-edit', // file editing
    'privacy:file-save-off': 'file-corrupted', // file editing off
    'privacy:videogame-asset': 'sparkles', // hid devices
    'privacy:videogame-asset-off': 'sparkles-off', // hid devices off
    'privacy:sync-saved-locally': 'key-lock', // protected content ids
    'privacy:web-asset-off': 'key-lock-off', // protected content off
    'privacy:content-paste': 'copy', // clipboard
    'privacy:content-paste-off': 'copy-off', // clipboard off
    'privacy:credit-card': 'credit-card', // payment handlers
    'privacy:credit-card-off': 'credit-card-off', // payment handlers
    'settings:bluetooth-searching': 'bluetooth', // bluetooth searching
    'settings:bluetooth-disabled': 'bluetooth-off', // bluetooth off
    'privacy:warning': 'warning-triangle-outline', // insecure content
    'privacy:federated-identity-api': '', // federated identity (unused)
    'privacy:cardboard': 'virtual-reality', // virtual reality & augmented reality
    'privacy:cardboard-off': 'virtual-reality-off', // virtual reality & augmented reality off
    'privacy:select-window': 'windows-open', // window management
    'privacy:select-window-off': 'window-tab-close', // window management off
    'privacy:font-download': 'font-size', // fonts
    'privacy:font-download-off': 'font-size-off', // fonts off
    'privacy:zoom-in': 'search-zoom-in', // zoom levels
    'privacy:drive-pdf': 'file', // pdfs
    'privacy:open-in-browser': 'window', // open in browser
    'settings20:chrome-product': 'hearts',
    'settings20:incognito-unfilled': 'product-private-window',
    'settings20:incognito': 'product-private-window',
    'settings20:lightbulb': 'idea',
    'settings20:lightbulb-2': 'idea',
    'cr:delete': 'trash', // delete browsing data
    'cr:security': 'lock',
    'privacy:page-info': 'tune', // privacy page additional settings
    'cr:fullscreen': 'fullscreen-on', // automatic fullscreen
    'settings:picture-in-picture': 'picture-in-picture', // picture in picture
    'cr:file-download': 'download',
    'cr:search': 'search',
    'cr:print': 'print',
    'cr:add': 'plus-add',
    'cr:expand-more': 'carat-down',
    'cr:chevron-right': 'carat-right',
    'cr:arrow-back': 'browser-back',
    'cr:more-vert': 'more-vertical',
    'cr:clear': 'close',
    'sp:filter-list': 'filter',
    'settings:download': 'download',
    'settings:performance': 'cpu-chip',
    'bookmarks:delete': 'trash',
    'bookmarks:move': 'folder-export',
    'bookmarks:bookmarks-bar': 'window',
    'bookmarks:visual-view': 'list-bullet-default',
    'bookmarks:compact-view': 'content-compact',
    'tab-search:auto-tab-groups': 'product-brave-leo', // tab organization
};
injectStyle(CrIconElement, css `:host {
  --leo-icon-size: var(--iron-icon-width, 24px);
  --leo-icon-color: var(--iron-icon-fill-color, currentColor);
 }`);
const proto = CrIconElement.prototype;
const old = proto.updateIcon_;
proto.updateIcon_ = function (...args) {
    const removeAllOfType = (type) => {
        for (const node of this.shadowRoot.querySelectorAll(type))
            node.remove();
    };
    // Upstream's `kWebUIRoundedIcons` rollout picks between a rounded icon name
    // and a legacy "-old" suffixed name at runtime depending on the feature
    // state. Both refer to the same icon, so strip the suffix before mapping to
    // keep overrides working regardless of the feature's enabled state.
    const unroundedIcon = this.icon.replace(/-old$/, '');
    const name = iconMap[this.icon] ?? iconMap[unroundedIcon];
    if (name || leoIcons.has(this.icon)) {
        removeAllOfType('svg');
        let leoIcon = this.shadowRoot.querySelector('leo-icon');
        if (!leoIcon) {
            leoIcon = document.createElement('leo-icon');
            this.shadowRoot.append(leoIcon);
        }
        leoIcon.setAttribute('name', name ?? this.icon);
    }
    else {
        removeAllOfType('leo-icon');
        old.apply(this, args);
    }
};

let instance$x = null;
function getCss$u() {
    return instance$x || (instance$x = [...[], css `:host{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transform:translate3d(0,0,0)}.ripple{background-color:currentcolor;left:0;opacity:var(--paper-ripple-opacity,0.25);pointer-events:none;position:absolute;will-change:height,transform,width}.ripple,:host(.circle){border-radius:50%}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_RADIUS_PX = 300;
const MIN_DURATION_MS = 800;
/** @return The distance between (x1, y1) and (x2, y2). */
function distance(x1, y1, x2, y2) {
    const xDelta = x1 - x2;
    const yDelta = y1 - y2;
    return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
}
class CrRippleElement extends CrLitElement {
    static get is() {
        return 'cr-ripple';
    }
    static get styles() {
        return getCss$u();
    }
    static get properties() {
        return {
            holdDown: { type: Boolean },
            recenters: { type: Boolean },
            noink: { type: Boolean },
        };
    }
    #holdDown_accessor_storage = false;
    get holdDown() { return this.#holdDown_accessor_storage; }
    set holdDown(value) { this.#holdDown_accessor_storage = value; }
    #recenters_accessor_storage = false;
    get recenters() { return this.#recenters_accessor_storage; }
    set recenters(value) { this.#recenters_accessor_storage = value; }
    #noink_accessor_storage = false;
    get noink() { return this.#noink_accessor_storage; }
    set noink(value) { this.#noink_accessor_storage = value; }
    ripples_ = [];
    eventTracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        assert(this.parentNode);
        const keyEventTarget = this.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ?
            this.parentNode.host :
            this.parentElement;
        this.eventTracker_.add(keyEventTarget, 'pointerdown', (e) => this.uiDownAction(e));
        this.eventTracker_.add(keyEventTarget, 'pointerup', () => this.uiUpAction());
        // 'pointerup' does not fire if the pointer is moved outside the bounds of
        // `keyEventTarget` before releasing, so also listen for `pointerout`.
        this.eventTracker_.add(keyEventTarget, 'pointerout', () => this.uiUpAction());
        this.eventTracker_.add(keyEventTarget, 'keydown', (e) => {
            if (e.defaultPrevented) {
                return;
            }
            if (e.key === 'Enter') {
                this.onEnterKeydown_();
                return;
            }
            if (e.key === ' ') {
                this.onSpaceKeydown_();
            }
        });
        this.eventTracker_.add(keyEventTarget, 'keyup', (e) => {
            if (e.defaultPrevented) {
                return;
            }
            if (e.key === ' ') {
                this.onSpaceKeyup_();
            }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('holdDown')) {
            this.holdDownChanged_(this.holdDown, changedProperties.get('holdDown'));
        }
    }
    uiDownAction(e) {
        if (e !== undefined && e.button !== 0) {
            // Ignore secondary mouse button clicks.
            return;
        }
        if (!this.noink) {
            this.downAction_(e);
        }
    }
    downAction_(e) {
        if (this.ripples_.length && this.holdDown) {
            return;
        }
        this.showRipple_(e);
    }
    clear() {
        this.hideRipple_();
        this.holdDown = false;
    }
    showAndHoldDown() {
        this.ripples_.forEach(ripple => {
            ripple.remove();
        });
        this.ripples_ = [];
        this.holdDown = true;
    }
    showRipple_(e) {
        const rect = this.getBoundingClientRect();
        const roundedCenterX = function () {
            return Math.round(rect.width / 2);
        };
        const roundedCenterY = function () {
            return Math.round(rect.height / 2);
        };
        let x = 0;
        let y = 0;
        const centered = !e;
        if (centered) {
            x = roundedCenterX();
            y = roundedCenterY();
        }
        else {
            x = Math.round(e.clientX - rect.left);
            y = Math.round(e.clientY - rect.top);
        }
        const corners = [
            { x: 0, y: 0 },
            { x: rect.width, y: 0 },
            { x: 0, y: rect.height },
            { x: rect.width, y: rect.height },
        ];
        const cornerDistances = corners.map(function (corner) {
            return Math.round(distance(x, y, corner.x, corner.y));
        });
        const radius = Math.min(MAX_RADIUS_PX, Math.max.apply(Math, cornerDistances));
        const startTranslate = `${x - radius}px, ${y - radius}px`;
        let endTranslate = startTranslate;
        if (this.recenters && !centered) {
            endTranslate =
                `${roundedCenterX() - radius}px, ${roundedCenterY() - radius}px`;
        }
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.height = ripple.style.width = (2 * radius) + 'px';
        this.ripples_.push(ripple);
        this.shadowRoot.appendChild(ripple);
        ripple.animate({
            transform: [
                `translate(${startTranslate}) scale(0)`,
                `translate(${endTranslate}) scale(1)`,
            ],
        }, {
            duration: Math.max(MIN_DURATION_MS, Math.log(radius) * radius) || 0,
            easing: 'cubic-bezier(.2, .9, .1, .9)',
            fill: 'forwards',
        });
    }
    uiUpAction() {
        if (!this.noink) {
            this.upAction_();
        }
    }
    upAction_() {
        if (!this.holdDown) {
            this.hideRipple_();
        }
    }
    hideRipple_() {
        if (this.ripples_.length === 0) {
            return;
        }
        this.ripples_.forEach(function (ripple) {
            const opacity = (ripple.computedStyleMap().get('opacity') ?? null);
            if (opacity === null) {
                ripple.remove();
                return;
            }
            const animation = ripple.animate({
                opacity: [opacity.value, 0],
            }, {
                duration: 150,
                fill: 'forwards',
            });
            animation.finished.then(() => {
                ripple.remove();
            });
        });
        this.ripples_ = [];
    }
    onEnterKeydown_() {
        this.uiDownAction();
        window.setTimeout(() => {
            this.uiUpAction();
        }, 1);
    }
    onSpaceKeydown_() {
        this.uiDownAction();
    }
    onSpaceKeyup_() {
        this.uiUpAction();
    }
    holdDownChanged_(newHoldDown, oldHoldDown) {
        if (oldHoldDown === undefined) {
            return;
        }
        if (newHoldDown) {
            this.downAction_();
        }
        else {
            this.upAction_();
        }
    }
}
customElements.define(CrRippleElement.is, CrRippleElement);

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRippleMixin = (superClass) => {
    class CrRippleMixin extends superClass {
        static get properties() {
            return {
                /**
                 * If true, the element will not produce a ripple effect when
                 * interacted with via the pointer.
                 */
                noink: { type: Boolean },
            };
        }
        #noink_accessor_storage = false;
        get noink() { return this.#noink_accessor_storage; }
        set noink(value) { this.#noink_accessor_storage = value; }
        rippleContainer = null;
        ripple_ = null;
        updated(changedProperties) {
            super.updated(changedProperties);
            if (changedProperties.has('noink') && this.hasRipple()) {
                assert(this.ripple_);
                this.ripple_.noink = this.noink;
            }
        }
        ensureRippleOnPointerdown() {
            // 'capture: true' is necessary so that the cr-ripple is created early
            // enough so that it also receives the 'pointerdown' event. Otherwise
            // the ripple is created, but not shown on the 1st click.
            this.addEventListener('pointerdown', () => this.ensureRipple(), { capture: true });
        }
        /**
         * Ensures this element contains a ripple effect. For startup efficiency
         * the ripple effect is dynamically added on demand when needed.
         */
        ensureRipple() {
            if (this.hasRipple()) {
                return;
            }
            this.ripple_ = this.createRipple();
            this.ripple_.noink = this.noink;
            const rippleContainer = this.rippleContainer || this.shadowRoot;
            assert(rippleContainer);
            rippleContainer.appendChild(this.ripple_);
        }
        /**
         * Returns the `<cr-ripple>` element used by this element to create
         * ripple effects. The element's ripple is created on demand, when
         * necessary, and calling this method will force the
         * ripple to be created.
         */
        getRipple() {
            this.ensureRipple();
            assert(this.ripple_);
            return this.ripple_;
        }
        /**
         * Returns true if this element currently contains a ripple effect.
         */
        hasRipple() {
            return Boolean(this.ripple_);
        }
        /**
         * Create the element's ripple effect via creating a `<cr-ripple
         * id="ink">` instance. Override this method to customize the ripple
         * element.
         */
        createRipple() {
            const ripple = document.createElement('cr-ripple');
            ripple.id = 'ink';
            return ripple;
        }
    }
    return CrRippleMixin;
};

let instance$w = null;
function getCss$t() {
    return instance$w || (instance$w = [...[], css `:host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:32px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:none;overflow:hidden;pointer-events:auto;position:relative;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host(:hover:not([disabled])){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}#ink{--paper-ripple-opacity:1;color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([suppress-rtl-flip]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([suppress-rtl-flip])[multiple-icons_]) cr-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);pointer-events:none;position:relative;width:100%}cr-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color,none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$j() {
    return html `
<div id="icon">
  <div id="maskedImage"></div>
</div>`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-icon-button' is a button which displays an icon with a
 * ripple. It can be interacted with like a normal button using click as well as
 * space and enter to effectively click the button and fire a 'click' event.
 *
 * There are two sources to icons:
 * Option 1: CSS classes defined in cr_icons.css.
 * Option 2: SVG icons defined in a cr-iconset or iron-iconset-svg,
 *     with the name passed to cr-icon-button via the |ironIcon| property.
 *
 * Example of using CSS classes:
 * In the .html.ts template file (if using a .html template file instead, the
 * import should be in the corresponding .ts file):
 * import 'chrome://resources/cr_elements/cr_icons.css.js';
 *
 * export function getHtml() {
 *   return html`
 *     <cr-icon-button class="icon-class-name"></cr-icon-button>`;
 * }
 *
 * When an icon is specified using a class, the expectation is the
 * class will set an image to the --cr-icon-image variable.
 *
 * Example of using a cr-iconset to supply an icon via the iron-icon parameter:
 * In the .html.ts template file (if using a .html template file instead, the
 * import should be in the corresponding .ts file):
 * import 'chrome://resources/cr_elements/icons.html.js';
 *
 * export function getHtml() {
 *   return html`
 *     <cr-icon-button iron-icon="cr:icon-key"></cr-icon-button>`;
 * }
 *
 * The color of the icon can be overridden using CSS variables. When using
 * the ironIcon property to populate cr-icon-button's internal <cr-icon>, the
 * following CSS variables for fill and stroke can be overridden for cr-icon:
 * --iron-icon-button-fill-color
 * --iron-icon-button-stroke-color
 *
 * When not using the ironIcon property, cr-icon-button will not create a
 * <cr-icon>, so the cr-icon related CSS variables above are ignored.
 *
 * When using the ironIcon property, more than one icon can be specified by
 * setting the |ironIcon| property to a comma-delimited list of keys.
 */
const CrIconbuttonElementBase = CrRippleMixin(CrLitElement);
class CrIconButtonElement extends CrIconbuttonElementBase {
    static get is() {
        return 'cr-icon-button';
    }
    static get styles() {
        return getCss$t();
    }
    render() {
        return getHtml$j.bind(this)();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                reflect: true,
            },
            ironIcon: {
                type: String,
                reflect: true,
            },
            suppressRtlFlip: {
                type: Boolean,
                value: false,
                reflect: true,
            },
            multipleIcons_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #ironIcon_accessor_storage;
    get ironIcon() { return this.#ironIcon_accessor_storage; }
    set ironIcon(value) { this.#ironIcon_accessor_storage = value; }
    #suppressRtlFlip_accessor_storage = false;
    get suppressRtlFlip() { return this.#suppressRtlFlip_accessor_storage; }
    set suppressRtlFlip(value) { this.#suppressRtlFlip_accessor_storage = value; }
    #multipleIcons__accessor_storage = false;
    get multipleIcons_() { return this.#multipleIcons__accessor_storage; }
    set multipleIcons_(value) { this.#multipleIcons__accessor_storage = value; }
    /**
     * It is possible to activate a tab when the space key is pressed down. When
     * this element has focus, the keyup event for the space key should not
     * perform a 'click'. |spaceKeyDown_| tracks when a space pressed and
     * handled by this element. Space keyup will only result in a 'click' when
     * |spaceKeyDown_| is true. |spaceKeyDown_| is set to false when element
     * loses focus.
     */
    spaceKeyDown_ = false;
    constructor() {
        super();
        this.addEventListener('blur', this.onBlur_.bind(this));
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        this.ensureRippleOnPointerdown();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('ironIcon')) {
            const icons = (this.ironIcon || '').split(',');
            this.multipleIcons_ = icons.length > 1;
        }
    }
    firstUpdated() {
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('disabled')) {
            this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
            this.disabledChanged_(this.disabled, changedProperties.get('disabled'));
        }
        if (changedProperties.has('ironIcon')) {
            this.onIronIconChanged_();
        }
    }
    disabledChanged_(newValue, oldValue) {
        if (!newValue && oldValue === undefined) {
            return;
        }
        if (this.disabled) {
            this.blur();
        }
        this.setAttribute('tabindex', String(this.disabled ? -1 : 0));
    }
    onBlur_() {
        this.spaceKeyDown_ = false;
    }
    onClick_(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
        }
    }
    onIronIconChanged_() {
        this.shadowRoot.querySelectorAll('cr-icon').forEach(el => el.remove());
        if (!this.ironIcon) {
            return;
        }
        const icons = (this.ironIcon || '').split(',');
        icons.forEach(async (icon) => {
            const crIcon = document.createElement('cr-icon');
            crIcon.icon = icon;
            crIcon.setAttribute('part', 'icon');
            this.$.icon.appendChild(crIcon);
            await crIcon.updateComplete;
            crIcon.shadowRoot.querySelectorAll('svg, img')
                .forEach(child => child.setAttribute('role', 'none'));
        });
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && (e.key !== 'Enter' || (isMac && e.ctrlKey))) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        if (e.key === 'Enter') {
            this.click();
        }
        else if (e.key === ' ') {
            this.spaceKeyDown_ = true;
        }
    }
    onKeyUp_(e) {
        if (e.key === ' ' || (e.key === 'Enter' && !(isMac && e.ctrlKey))) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (this.spaceKeyDown_ && e.key === ' ') {
            this.spaceKeyDown_ = false;
            this.click();
        }
    }
}
customElements.define(CrIconButtonElement.is, CrIconButtonElement);

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Make a string safe for Polymer bindings that are inner-h-t-m-l or other
 * innerHTML use.
 * @param rawString The unsanitized string
 * @param opts Optional additional allowed tags and attributes.
 */
function sanitizeInnerHtmlInternal(rawString, opts) {
    opts = opts || {};
    const html = parseHtmlSubset(`<b>${rawString}</b>`, opts.tags, opts.attrs)
        .firstElementChild;
    return html.innerHTML;
}
// 
let sanitizedPolicy = null;
/**
 * Same as |sanitizeInnerHtmlInternal|, but it passes through sanitizedPolicy
 * to create a TrustedHTML.
 */
function sanitizeInnerHtml(rawString, opts) {
    assert(window.trustedTypes);
    if (sanitizedPolicy === null) {
        // Initialize |sanitizedPolicy| lazily.
        sanitizedPolicy = window.trustedTypes.createPolicy('sanitize-inner-html', {
            createHTML: sanitizeInnerHtmlInternal,
            createScript: () => assertNotReached(),
            createScriptURL: () => assertNotReached(),
        });
    }
    return sanitizedPolicy.createHTML(rawString, opts);
}
const allowAttribute = (_node, _value) => true;
/** Allow-list of attributes in parseHtmlSubset. */
const allowedAttributes = new Map([
    [
        'href',
        (node, value) => {
            // Only allow a[href] starting with chrome:// or https:// or equaling
            // to #.
            return node.tagName === 'A' &&
                (value.startsWith('chrome://') || value.startsWith('https://') ||
                    value === '#');
        },
    ],
    [
        'target',
        (node, value) => {
            // Only allow a[target='_blank'].
            // TODO(dbeam): are there valid use cases for target !== '_blank'?
            return node.tagName === 'A' && value === '_blank';
        },
    ],
]);
/** Allow-list of optional attributes in parseHtmlSubset. */
const allowedOptionalAttributes = new Map([
    ['class', allowAttribute],
    ['id', allowAttribute],
    ['is', (_node, value) => value === 'action-link' || value === ''],
    ['role', (_node, value) => value === 'link'],
    [
        'src',
        (node, value) => {
            // Only allow img[src] starting with chrome://
            return node.tagName === 'IMG' &&
                value.startsWith('chrome://');
        },
    ],
    ['tabindex', allowAttribute],
    ['aria-description', allowAttribute],
    ['aria-hidden', allowAttribute],
    ['aria-label', allowAttribute],
    ['aria-labelledby', allowAttribute],
]);
/** Allow-list of tag names in parseHtmlSubset. */
const allowedTags = new Set(['A', 'B', 'I', 'BR', 'DIV', 'EM', 'KBD', 'P', 'PRE', 'SPAN', 'STRONG']);
/** Allow-list of optional tag names in parseHtmlSubset. */
const allowedOptionalTags = new Set(['IMG', 'LI', 'UL']);
/**
 * This policy maps a given string to a `TrustedHTML` object
 * without performing any validation. Callsites must ensure
 * that the resulting object will only be used in inert
 * documents. Initialized lazily.
 */
let unsanitizedPolicy;
/**
 * @param optTags an Array to merge.
 * @return Set of allowed tags.
 */
function mergeTags(optTags) {
    const clone = new Set(allowedTags);
    optTags.forEach(str => {
        const tag = str.toUpperCase();
        if (allowedOptionalTags.has(tag)) {
            clone.add(tag);
        }
    });
    return clone;
}
/**
 * @param optAttrs an Array to merge.
 * @return Map of allowed attributes.
 */
function mergeAttrs(optAttrs) {
    const clone = new Map(allowedAttributes);
    optAttrs.forEach(key => {
        if (allowedOptionalAttributes.has(key)) {
            clone.set(key, allowedOptionalAttributes.get(key));
        }
    });
    return clone;
}
function walk(n, f) {
    f(n);
    for (let i = 0; i < n.childNodes.length; i++) {
        walk(n.childNodes[i], f);
    }
}
function assertElement(tags, node) {
    if (!tags.has(node.tagName)) {
        throw Error(node.tagName + ' is not supported');
    }
}
function assertAttribute(attrs, attrNode, node) {
    const n = attrNode.nodeName;
    const v = attrNode.nodeValue || '';
    if (!attrs.has(n) || !attrs.get(n)(node, v)) {
        throw Error(node.tagName + '[' + n + '="' + v +
            '"] is not supported');
    }
}
/**
 * Parses a very small subset of HTML. This ensures that insecure HTML /
 * javascript cannot be injected into WebUI.
 * @param s The string to parse.
 * @param extraTags Optional extra allowed tags.
 * @param extraAttrs
 *     Optional extra allowed attributes (all tags are run through these).
 * @throws an Error in case of non supported markup.
 * @return A document fragment containing the DOM tree.
 */
function parseHtmlSubset(s, extraTags, extraAttrs) {
    const tags = extraTags ? mergeTags(extraTags) : allowedTags;
    const attrs = extraAttrs ? mergeAttrs(extraAttrs) : allowedAttributes;
    const doc = document.implementation.createHTMLDocument('');
    const r = doc.createRange();
    r.selectNode(doc.body);
    if (window.trustedTypes) {
        if (!unsanitizedPolicy) {
            unsanitizedPolicy =
                window.trustedTypes.createPolicy('parse-html-subset', {
                    createHTML: (untrustedHTML) => untrustedHTML,
                    createScript: () => assertNotReached(),
                    createScriptURL: () => assertNotReached(),
                });
        }
        s = unsanitizedPolicy.createHTML(s);
    }
    // This does not execute any scripts because the document has no view.
    const df = r.createContextualFragment(s);
    walk(df, function (node) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                assertElement(tags, node);
                const nodeAttrs = node.attributes;
                for (let i = 0; i < nodeAttrs.length; ++i) {
                    assertAttribute(attrs, nodeAttrs[i], node);
                }
                break;
            case Node.COMMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
            case Node.TEXT_NODE:
                break;
            default:
                throw Error('Node type ' + node.nodeType + ' is not supported');
        }
    });
    return df;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'I18nMixinLit' is a Mixin offering loading of internationalization
 * strings. Typically it is used as [[i18n('someString')]] computed bindings or
 * for this.i18n('foo'). It is not needed for HTML $i18n{otherString}, which is
 * handled by a C++ templatizer.
 */
const I18nMixinLit = (superClass) => {
    class I18nMixinLit extends superClass {
        /**
         * Returns a translated string where $1 to $9 are replaced by the given
         * values.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, substituted string.
         */
        i18nRaw_(id, ...varArgs) {
            return varArgs.length === 0 ? loadTimeData.getString(id) :
                loadTimeData.getStringF(id, ...varArgs);
        }
        /**
         * Returns a translated string where $1 to $9 are replaced by the given
         * values. Also sanitizes the output to filter out dangerous HTML/JS.
         * Use with Lit bindings that are *not* innerHTML.
         * NOTE: This is not related to $i18n{foo} in HTML, see file overview.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, sanitized, substituted string.
         */
        i18n(id, ...varArgs) {
            const rawString = this.i18nRaw_(id, ...varArgs);
            return parseHtmlSubset(`<b>${rawString}</b>`).firstChild.textContent;
        }
        /**
         * Similar to 'i18n', returns a translated, sanitized, substituted
         * string. It receives the string ID and a dictionary containing the
         * substitutions as well as optional additional allowed tags and
         * attributes. Use with Lit bindings that are innerHTML.
         * @param id The ID of the string to translate.
         */
        i18nAdvanced(id, opts) {
            opts = opts || {};
            const rawString = this.i18nRaw_(id, ...(opts.substitutions || []));
            return sanitizeInnerHtml(rawString, opts);
        }
        /**
         * Similar to 'i18n', with an unused |locale| parameter used to trigger
         * updates when the locale changes.
         * @param locale The UI language used.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, sanitized, substituted string.
         */
        i18nDynamic(_locale, id, ...varArgs) {
            return this.i18n(id, ...varArgs);
        }
        /**
         * Similar to 'i18nDynamic', but varArgs values are interpreted as keys
         * in loadTimeData. This allows generation of strings that take other
         * localized strings as parameters.
         * @param locale The UI language used.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9
         *     in the string. Values are interpreted as strings IDs if found in
         * the list of localized strings.
         * @return A translated, sanitized, substituted string.
         */
        i18nRecursive(locale, id, ...varArgs) {
            let args = varArgs;
            if (args.length > 0) {
                // Try to replace IDs with localized values.
                args = args.map(str => {
                    return this.i18nExists(str) ? loadTimeData.getString(str) : str;
                });
            }
            return this.i18nDynamic(locale, id, ...args);
        }
        /**
         * Returns true if a translation exists for |id|.
         */
        i18nExists(id) {
            return loadTimeData.valueExists(id);
        }
    }
    return I18nMixinLit;
};

let instance$v = null;
function getCss$s() {
    return instance$v || (instance$v = [...[], css `.icon-arrow-back{--cr-icon-image:url(//resources/images/icon_arrow_back_old.svg)}.icon-arrow-dropdown{--cr-icon-image:url(//resources/images/icon_arrow_dropdown_old.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_down_cr23_old.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_up_cr23_old.svg)}.icon-arrow-upward{--cr-icon-image:url(//resources/images/icon_arrow_upward_old.svg)}.icon-arrow-forward{--cr-icon-image:url(//resources/images/icon_arrow_forward_old.svg)}.icon-cancel{--cr-icon-image:url(//resources/images/icon_cancel_old.svg)}.icon-clear{--cr-icon-image:url(//resources/images/icon_clear_old.svg)}.icon-copy-content{--cr-icon-image:url(//resources/images/icon_copy_content_old.svg)}.icon-delete-gray{--cr-icon-image:url(//resources/images/icon_delete_gray_old.svg)}.icon-edit{--cr-icon-image:url(//resources/images/icon_edit_old.svg)}.icon-file{--cr-icon-image:url(//resources/images/icon_filetype_generic_old.svg)}.icon-folder-open{--cr-icon-image:url(//resources/images/icon_folder_open_old.svg)}.icon-picture-delete{--cr-icon-image:url(//resources/images/icon_picture_delete_old.svg)}.icon-expand-less{--cr-icon-image:url(//resources/images/icon_expand_less_old.svg)}.icon-expand-more{--cr-icon-image:url(//resources/images/icon_expand_more_old.svg)}.icon-external{--cr-icon-image:url(//resources/images/open_in_new_old.svg)}.icon-more-vert{--cr-icon-image:url(//resources/images/icon_more_vert_old.svg)}.icon-refresh{--cr-icon-image:url(//resources/images/icon_refresh_old.svg)}.icon-search{--cr-icon-image:url(//resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(//resources/images/icon_settings_old.svg)}.icon-visibility{--cr-icon-image:url(//resources/images/icon_visibility_old.svg)}.icon-visibility-off{--cr-icon-image:url(//resources/images/icon_visibility_off_old.svg)}.subpage-arrow{--cr-icon-image:url(//resources/images/arrow_right_old.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}:host-context([webui-rounded-icons]){.icon-arrow-back{--cr-icon-image:url(//resources/images/icon_arrow_back.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_up_cr23.svg)}.icon-arrow-dropdown{--cr-icon-image:url(//resources/images/icon_arrow_dropdown.svg)}.icon-arrow-forward{--cr-icon-image:url(//resources/images/icon_arrow_forward.svg)}.icon-arrow-upward{--cr-icon-image:url(//resources/images/icon_arrow_upward.svg)}.icon-cancel{--cr-icon-image:url(//resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(//resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(//resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(//resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(//resources/images/icon_edit.svg)}.icon-expand-less{--cr-icon-image:url(//resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(//resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(//resources/images/open_in_new.svg)}.icon-file{--cr-icon-image:url(//resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(//resources/images/icon_folder_open.svg)}.icon-more-vert{--cr-icon-image:url(//resources/images/icon_more_vert.svg)}.icon-picture-delete{--cr-icon-image:url(//resources/images/icon_picture_delete.svg)}.icon-refresh{--cr-icon-image:url(//resources/images/icon_refresh.svg)}.icon-settings{--cr-icon-image:url(//resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(//resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(//resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(//resources/images/arrow_right.svg)}}`]);
}

let instance$u = null;
function getCss$r() {
    return instance$u || (instance$u = [...[getCss$s()], css `.icon-folder-open{--cr-icon-image:url(//resources/brave-icons/folder.svg)}.icon-edit{--cr-icon-image:url(//resources/brave-icons/edit-pencil.svg)}`]);
}

let instance$t = null;
function getCss$q() {
    return instance$t || (instance$t = [...[getCss$w(), getCss$r()], css `[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}.cr-separators>*:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--cr-scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--cr-scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus-visible,[selectable]:focus-visible,[selectable]>:focus-visible{outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.first,.cr-row.continuation{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip),cr-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}`]);
}

const sheet$1 = new CSSStyleSheet();
sheet$1.replaceSync(`html{--annotation-background-color:var(--google-green-50);--annotation-text-color:var(--google-green-600);--border-color:var(--google-grey-300);--entity-image-background-color:var(--google-grey-50);--icon-color:var(--google-grey-600);--url-color:var(--google-blue-600);--card-max-width:960px;--card-min-width:550px;--card-padding-between:16px;--card-padding-side:24px;--first-card-padding-top:24px;--cluster-max-width:var(--card-max-width);--cluster-min-width:var(--card-min-width);--cluster-padding-horizontal:var(--card-padding-side);--cluster-padding-vertical:var(--card-padding-between);--favicon-margin:16px;--favicon-size:16px;--first-cluster-padding-top:var(--first-card-padding-top);--pill-height:34px;--pill-padding-icon:12px;--pill-padding-text:16px;--top-visit-favicon-size:24px}@media (prefers-color-scheme:dark){html{--annotation-background-color:var(--google-green-300);--annotation-text-color:var(--google-grey-900);--border-color:var(--google-grey-700);--entity-image-background-color:var(--google-grey-800);--icon-color:white;--url-color:var(--google-blue-300)}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet$1];

let instance$s = null;
function getCss$p() {
    return instance$s || (instance$s = [...[getCss$q(), getCss$w()], css `.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pill{border:1px solid var(--border-color);border-radius:calc(var(--pill-height) / 2);box-sizing:border-box;font-size:0.75rem;height:var(--pill-height);line-height:1.5}.pill-icon-start{padding-inline-end:var(--pill-padding-text);padding-inline-start:var(--pill-padding-icon)}.pill-icon-start .icon{margin-inline-end:4px}.pill-icon-end{padding-inline-end:var(--pill-padding-icon);padding-inline-start:var(--pill-padding-text)}.pill-icon-end .icon{margin-inline-start:8px}.search-highlight-hit{--search-highlight-hit-background-color:none;--search-highlight-hit-color:none;font-weight:700}.timestamp-and-menu{align-items:center;display:flex;flex-shrink:0}.timestamp{color:var(--cr-secondary-text-color);flex-shrink:0}`]);
}

let instance$r = null;
function getCss$o() {
    return instance$r || (instance$r = [...[getCss$p()], css `#actionMenuButton{--cr-icon-button-icon-size:20px;--cr-icon-button-margin-end:16px}:host([in-side-panel_]) #actionMenuButton{--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-end:8px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$i() {
    return html `
<cr-icon-button id="actionMenuButton" class="icon-more-vert"
    title="${this.i18n('actionMenuDescription')}" aria-haspopup="menu"
    @click="${this.onActionMenuButtonClick_}">
</cr-icon-button>

${this.renderActionMenu_ ? html `<cr-action-menu auto-close-on-focusout
          role-description="${this.i18n('actionMenuDescription')}">
  <button id="openAllButton" class="dropdown-item"
      @click="${this.onOpenAllButtonClick_}">
    ${this.i18n('openAllInTabGroup')}
  </button>
  <button id="hideAllButton" class="dropdown-item"
      @click="${this.onHideAllButtonClick_}">
    ${this.i18n('hideAllVisits')}
  </button>
  <button id="removeAllButton" class="dropdown-item"
      @click="${this.onRemoveAllButtonClick_}"
      ?hidden="${!this.allowDeletingHistory_}">
    ${this.i18n('removeAllFromHistory')}
  </button>
</cr-action-menu>` :
        ''}`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file provides a custom element displaying an action menu.
 * It's meant to be flexible enough to be associated with either a specific
 * visit, or the whole cluster, or the top visit of unlabelled cluster.
 */
const ClusterMenuElementBase$1 = I18nMixinLit(CrLitElement);
class ClusterMenuElement extends ClusterMenuElementBase$1 {
    static get is() {
        return 'cluster-menu';
    }
    static get styles() {
        return getCss$o();
    }
    render() {
        return getHtml$i.bind(this)();
    }
    static get properties() {
        return {
            /**
             * Usually this is true, but this can be false if deleting history is
             * prohibited by Enterprise policy.
             */
            allowDeletingHistory_: { type: Boolean },
            /**
             * Whether the cluster is in the side panel.
             */
            inSidePanel_: {
                type: Boolean,
                reflect: true,
            },
            renderActionMenu_: { type: Boolean },
        };
    }
    #allowDeletingHistory__accessor_storage = loadTimeData.getBoolean('allowDeletingHistory');
    //============================================================================
    // Properties
    //============================================================================
    get allowDeletingHistory_() { return this.#allowDeletingHistory__accessor_storage; }
    set allowDeletingHistory_(value) { this.#allowDeletingHistory__accessor_storage = value; }
    #inSidePanel__accessor_storage = loadTimeData.getBoolean('inSidePanel');
    get inSidePanel_() { return this.#inSidePanel__accessor_storage; }
    set inSidePanel_(value) { this.#inSidePanel__accessor_storage = value; }
    #renderActionMenu__accessor_storage = false;
    get renderActionMenu_() { return this.#renderActionMenu__accessor_storage; }
    set renderActionMenu_(value) { this.#renderActionMenu__accessor_storage = value; }
    //============================================================================
    // Event handlers
    //============================================================================
    async onActionMenuButtonClick_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        if (!this.renderActionMenu_) {
            this.renderActionMenu_ = true;
            await this.updateComplete;
        }
        const menu = this.shadowRoot.querySelector('cr-action-menu');
        assert(menu);
        menu.showAt(this.$.actionMenuButton);
    }
    onOpenAllButtonClick_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        this.fire('open-all-visits');
        this.closeActionMenu_();
    }
    onHideAllButtonClick_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        this.fire('hide-all-visits');
        this.closeActionMenu_();
    }
    onRemoveAllButtonClick_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        this.fire('remove-all-visits');
        this.closeActionMenu_();
    }
    //============================================================================
    // Helper methods
    //============================================================================
    closeActionMenu_() {
        const menu = this.shadowRoot.querySelector('cr-action-menu');
        assert(menu);
        menu.close();
    }
}
customElements.define(ClusterMenuElement.is, ClusterMenuElement);

let instance$q = null;
function getCss$n() {
    return instance$q || (instance$q = [...[], css `:host{display:none}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$h() {
    return html `
<svg id="baseSvg" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 ${this.size} ${this.size}" preserveAspectRatio="xMidYMid meet"
    focusable="false">
</svg>
<slot></slot>`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const APPLIED_ICON_CLASS = 'cr-iconset-svg-icon_';
class CrIconsetElement extends CrLitElement {
    static get is() {
        return 'cr-iconset';
    }
    static get styles() {
        return getCss$n();
    }
    render() {
        return getHtml$h.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The name of the iconset.
             */
            name: { type: String },
            /**
             * The size of an individual icon. Note that icons must be square.
             */
            size: { type: Number },
        };
    }
    #name_accessor_storage = '';
    get name() { return this.#name_accessor_storage; }
    set name(value) { this.#name_accessor_storage = value; }
    #size_accessor_storage = 24;
    get size() { return this.#size_accessor_storage; }
    set size(value) { this.#size_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('name')) {
            assert(changedProperties.get('name') === undefined);
            IconsetMap.getInstance().set(this.name, this);
        }
    }
    /**
     * Applies an icon to the given element.
     *
     * An svg icon is prepended to the element's shadowRoot, which should always
     * exist.
     * @param element Element to which the icon is applied.
     * @param iconName Name of the icon to apply.
     * @return The svg element which renders the icon.
     */
    applyIcon(element, iconName) {
        // Remove old svg element
        this.removeIcon(element);
        // install new svg element
        const svg = this.cloneIcon_(iconName);
        if (svg) {
            // Add special class so we can identify it in remove.
            svg.classList.add(APPLIED_ICON_CLASS);
            // insert svg element into shadow root
            element.shadowRoot.insertBefore(svg, element.shadowRoot.childNodes[0]);
            return svg;
        }
        return null;
    }
    /**
     * Produce installable clone of the SVG element matching `id` in this
     * iconset, or null if there is no matching element.
     * @param iconName Name of the icon to apply.
     */
    createIcon(iconName) {
        return this.cloneIcon_(iconName);
    }
    /**
     * Remove an icon from the given element by undoing the changes effected
     * by `applyIcon`.
     */
    removeIcon(element) {
        // Remove old svg element
        const oldSvg = element.shadowRoot.querySelector(`.${APPLIED_ICON_CLASS}`);
        if (oldSvg) {
            oldSvg.remove();
        }
    }
    /**
     * Produce installable clone of the SVG element matching `id` in this
     * iconset, or `undefined` if there is no matching element.
     *
     * Returns an installable clone of the SVG element matching `id` or null if
     * no such element exists.
     */
    cloneIcon_(id) {
        const sourceSvg = this.querySelector(`g[id="${id}"]`);
        if (!sourceSvg) {
            return null;
        }
        const svgClone = this.$.baseSvg.cloneNode(true);
        const content = sourceSvg.cloneNode(true);
        content.removeAttribute('id');
        const contentViewBox = content.getAttribute('viewBox');
        if (contentViewBox) {
            svgClone.setAttribute('viewBox', contentViewBox);
        }
        svgClone.style.display = 'block';
        svgClone.style.height = '100%';
        svgClone.style.width = '100%';
        svgClone.style.pointerEvents = 'none';
        svgClone.appendChild(content);
        return svgClone;
    }
}
customElements.define(CrIconsetElement.is, CrIconsetElement);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return Whether the passed tagged template literal is a valid array.
 */
function isValidArray(arr) {
    if (arr instanceof Array && Object.isFrozen(arr)) {
        return true;
    }
    return false;
}
/**
 * Checks if the passed tagged template literal only contains static string.
 * And return the string in the literal if so.
 * Throws an Error if the passed argument is not supported literals.
 */
function getStaticString(literal) {
    const isStaticString = isValidArray(literal) && !!literal.raw &&
        isValidArray(literal.raw) && literal.length === literal.raw.length &&
        literal.length === 1;
    assert(isStaticString, 'static_types.js only allows static strings');
    return literal.join('');
}
function createTypes(_ignore, literal) {
    return getStaticString(literal);
}
/**
 * Rules used to enforce static literal checks.
 */
const rules = {
    createHTML: createTypes,
    createScript: createTypes,
    createScriptURL: createTypes,
};
/**
 * This policy returns Trusted Types if the passed literal is static.
 */
let staticPolicy;
if (window.trustedTypes) {
    staticPolicy = window.trustedTypes.createPolicy('static-types', rules);
}
else {
    staticPolicy = rules;
}
/**
 * Returns TrustedHTML if the passed literal is static.
 */
function getTrustedHTML(literal) {
    return staticPolicy.createHTML('', literal);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* List commonly used icons here to prevent duplication.
 * Do not add rarely used icons here; place those in your application.
 * Note that 20px and 24px icons are specified separately (size="", below).
 *
 * Icons are rendered at 20x20 px, but we don't have 20 px SVGs for everything.
 * The 24 px icons are used where 20 px icons are unavailable (which may appear
 * blurry at 20 px). Please use 20 px icons when available.
 */
const div$1 = document.createElement('div');
if (document.documentElement.hasAttribute('webui-rounded-icons')) {
    div$1.innerHTML = getTrustedHTML `
<cr-iconset name="cr20" size="20">
  <svg>
    <defs>
      <!--
      Keep these in sorted order by id="".
      -->
      <g id="cloud-off">
        <path d="M5 16c-1.113 0-2.063-.387-2.836-1.164C1.387 14.062 1 13.113 1 12a3.84 3.84 0 0 1 1.082-2.73A3.895 3.895 0 0 1 4.73 8.02c.047-.149.09-.293.137-.434.047-.14.106-.281.176-.418L2.395 4.52a.725.725 0 0 1-.227-.532c0-.199.074-.379.227-.531a.73.73 0 0 1 .53-.227c.204 0 .38.075.532.227l13.086 13.086a.712.712 0 0 1 .227.52.712.712 0 0 1-.227.519.729.729 0 0 1-1.063 0L13.875 16Zm0-1.5h7.375L6.207 8.332c-.055.184-.105.367-.156.555a8.152 8.152 0 0 1-.156.55l-1.063.083c-.664.058-1.223.32-1.664.785A2.375 2.375 0 0 0 2.5 12c0 .691.242 1.281.73 1.77A2.41 2.41 0 0 0 5 14.5Zm4.293-3.082Zm8.207 3.957-1.105-1.082c.32-.168.585-.41.793-.727.207-.316.312-.671.312-1.066 0-.559-.191-1.035-.578-1.422A1.936 1.936 0 0 0 15.5 10.5h-1.375L14 9.145a3.91 3.91 0 0 0-1.293-2.594A3.88 3.88 0 0 0 9.997 5.5c-.34 0-.669.043-.981.125a4.233 4.233 0 0 0-.91.355L7.02 4.895a6.34 6.34 0 0 1 1.41-.657A5.08 5.08 0 0 1 10 4c1.43 0 2.672.484 3.73 1.45 1.055.964 1.645 2.148 1.77 3.55.973 0 1.797.34 2.48 1.02.68.683 1.02 1.507 1.02 2.48 0 .598-.137 1.145-.406 1.645-.27.5-.637.91-1.094 1.23Zm-5.25-5.25Zm0 0"></path>
      </g>
      <g id="delete">
        <path d="M6.5 17c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 5 15.5v-10h-.25c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 4 4.754c0-.211.07-.39.215-.535A.73.73 0 0 1 4.75 4H8v-.25c0-.21.07-.39.215-.535A.727.727 0 0 1 8.75 3h2.5c.21 0 .39.07.535.215A.727.727 0 0 1 12 3.75V4h3.25c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219H15v9.992c0 .422-.148.778-.441 1.07A1.439 1.439 0 0 1 13.5 17Zm7-11.5h-7v10h7Zm-4.219 8.285a.73.73 0 0 0 .219-.535v-5.5c0-.21-.07-.39-.215-.535A.713.713 0 0 0 8.754 7c-.211 0-.39.07-.535.215A.73.73 0 0 0 8 7.75v5.5c0 .21.07.39.215.535.14.145.32.215.531.215.211 0 .39-.07.535-.215Zm2.5 0A.73.73 0 0 0 12 13.25v-5.5c0-.21-.07-.39-.215-.535A.713.713 0 0 0 11.254 7c-.211 0-.39.07-.535.215a.73.73 0 0 0-.219.535v5.5c0 .21.07.39.215.535.14.145.32.215.531.215.211 0 .39-.07.535-.215ZM6.5 5.5v10Zm0 0"></path>
      </g>
      <g id="domain">
        <path d="M2 15.5v-11c0-.414.148-.766.441-1.059A1.443 1.443 0 0 1 3.5 3h5c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059V6h6.5c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059v8c0 .414-.148.766-.441 1.059A1.443 1.443 0 0 1 16.5 17h-13c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 2 15.5Zm1.5 0H5V14H3.5Zm0-3.168H5v-1.5H3.5Zm0-3.164H5v-1.5H3.5ZM3.5 6H5V4.5H3.5ZM7 15.5h1.5V14H7Zm0-3.168h1.5v-1.5H7Zm0-3.164h1.5v-1.5H7ZM7 6h1.5V4.5H7Zm3 9.5h6.5v-8H10v1.668h1.5v1.5H10v1.664h1.5v1.5H10Zm3.5-4.832v-1.5H15v1.5Zm0 3.164v-1.5H15v1.5Zm0 0"></path>
      </g>
      <g id="family-link">
        <path d="M11.105 15.293 16 7.688 11.082 2.5 6.02 7.688Zm-.085-6.398ZM8.875 19a2.49 2.49 0 0 1-1.762-.7 3.291 3.291 0 0 1-.968-1.718 1.267 1.267 0 0 0-.442-.695 1.167 1.167 0 0 0-.766-.282c-.207 0-.402.04-.582.125a.889.889 0 0 0-.418.395c-.07.14-.164.258-.285.355a.65.65 0 0 1-.422.145.742.742 0 0 1-.542-.23.74.74 0 0 1-.231-.54c0-.09.016-.168.043-.234.027-.066.063-.137.105-.203a2.83 2.83 0 0 1 1-.969 2.603 2.603 0 0 1 1.352-.367c.684 0 1.262.223 1.742.668.477.445.793 1.008.946 1.688.07.304.214.558.43.761.214.2.48.301.8.301.234 0 .477-.07.719-.207.242-.14.43-.309.554-.504l.02-.039L4.75 8.52a1.27 1.27 0 0 1-.191-.395 1.66 1.66 0 0 1 .035-.984c.062-.176.172-.344.324-.496L10 1.457A1.55 1.55 0 0 1 11.09 1a1.526 1.526 0 0 1 1.078.457l4.914 5.188c.14.148.246.312.313.488a1.584 1.584 0 0 1 .047.992 1.27 1.27 0 0 1-.192.395l-5.98 9.062c-.348.527-.723.898-1.133 1.105A2.752 2.752 0 0 1 8.875 19Zm0 0"></path>
      </g>
      <g id="menu">
        <path d="M3.75 14.5c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 13.754c0-.211.07-.39.215-.535A.73.73 0 0 1 3.75 13h12.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219Zm0-3.75c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 10.004c0-.211.07-.39.215-.535a.73.73 0 0 1 .535-.219h12.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219Zm0-3.75c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 6.254c0-.211.07-.39.215-.535A.73.73 0 0 1 3.75 5.5h12.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535A.73.73 0 0 1 16.25 7Zm0 0"></path>
      </g>
      <g id="password-manager">
        <path d="M7.418 11.418C7.805 11.028 8 10.555 8 10c0-.555-.195-1.027-.582-1.418A1.943 1.943 0 0 0 6 8c-.555 0-1.027.195-1.418.582C4.195 8.972 4 9.445 4 10c0 .555.195 1.027.582 1.418.39.387.863.582 1.418.582.555 0 1.027-.195 1.418-.582ZM6 15c-1.39 0-2.57-.484-3.543-1.457C1.484 12.57 1 11.391 1 10c0-1.39.484-2.57 1.457-3.543C3.43 5.484 4.609 5 6 5c1 0 1.91.27 2.73.813A5.086 5.086 0 0 1 10.582 8H17.5c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059v4c0 .414-.148.766-.441 1.059A1.443 1.443 0 0 1 17.5 15h-3c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 13 13.5V12h-2.418a5.086 5.086 0 0 1-1.852 2.188A4.84 4.84 0 0 1 6 15Zm3.457-4.5H14.5v3h1V12c0-.145.047-.266.145-.36A.492.492 0 0 1 16 11.5c.14 0 .258.047.355.14a.477.477 0 0 1 .145.36v1.5h1v-4H9.457a3.27 3.27 0 0 0-1.156-2.156A3.452 3.452 0 0 0 6 6.5c-.973 0-1.797.34-2.48 1.02C2.84 8.203 2.5 9.027 2.5 10c0 .973.34 1.797 1.02 2.48.683.68 1.507 1.02 2.48 1.02.871 0 1.637-.281 2.3-.844A3.27 3.27 0 0 0 9.458 10.5Zm0 0"></path>
      </g>
      
  </svg>
</cr-iconset>

<!-- NOTE: In the common case that the final icon will be 20x20, export the SVG
     at 20px and place it in the section above. -->
<cr-iconset name="cr" size="24">
  <svg>
    <defs>
      <!--
      These icons are copied from Polymer's iron-icons and kept in sorted order.
      -->
      <g id="add">
        <path d="M11.102 12.898H6.898A.872.872 0 0 1 6 12.003c0-.253.086-.464.258-.64a.86.86 0 0 1 .64-.261h4.204V6.898A.872.872 0 0 1 11.997 6c.253 0 .464.086.64.258a.86.86 0 0 1 .261.64v4.204h4.204a.872.872 0 0 1 .898.895.878.878 0 0 1-.258.64.86.86 0 0 1-.64.261h-4.204v4.204a.872.872 0 0 1-.895.898.878.878 0 0 1-.64-.258.86.86 0 0 1-.261-.64Zm0 0"></path>
      </g>
      <g id="arrow-back">
        <path d="m8.25 12.898 4.406 4.407c.18.18.27.39.27.633a.913.913 0 0 1-.278.648.893.893 0 0 1-.636.266.855.855 0 0 1-.633-.274l-5.945-5.95a.894.894 0 0 1-.196-.292.891.891 0 0 1-.062-.34c0-.121.02-.234.062-.34.04-.105.102-.199.188-.281l5.949-5.95a.883.883 0 0 1 .64-.277c.247 0 .458.094.633.278a.847.847 0 0 1 .278.633c0 .246-.09.457-.274.636L8.25 11.102H18.3a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.64.261Zm0 0"></path>
      </g>
      <g id="arrow-drop-up">
        <path d="M8.273 14.398a.419.419 0 0 1-.324-.132.456.456 0 0 1-.125-.317c0-.015.051-.12.149-.32l3.55-3.555a.651.651 0 0 1 .227-.148.636.636 0 0 1 .5 0c.082.031.16.082.227.148l3.55 3.555a.47.47 0 0 1 .11.16c.027.059.039.113.039.172a.444.444 0 0 1-.125.309.43.43 0 0 1-.324.128Zm0 0"></path>
      </g>
      <g id="arrow-drop-down">
        <path d="m11.523 13.926-3.55-3.555a.47.47 0 0 1-.11-.16.393.393 0 0 1-.039-.172c0-.117.043-.219.125-.309a.43.43 0 0 1 .324-.128h7.454c.132 0 .242.043.324.132.082.09.125.196.125.317 0 .015-.051.12-.149.32l-3.55 3.555a.651.651 0 0 1-.227.148.636.636 0 0 1-.5 0 .651.651 0 0 1-.227-.148Zm0 0"></path>
      </g>
      <g id="arrow-forward">
        <path d="M15.75 12.898H5.7a.872.872 0 0 1-.898-.895c-.001-.253.085-.464.257-.64a.86.86 0 0 1 .64-.261H15.75l-4.406-4.407a.866.866 0 0 1-.27-.633c0-.242.094-.457.278-.648a.893.893 0 0 1 .636-.266c.242 0 .453.09.633.274l5.945 5.95c.09.093.157.19.196.292a.891.891 0 0 1 .062.34c0 .121-.02.234-.062.34a.742.742 0 0 1-.188.281l-5.949 5.95c-.184.183-.39.273-.625.26a.923.923 0 0 1-.625-.273.918.918 0 0 1-.273-.652c0-.246.09-.457.273-.637Zm0 0"></path>
      </g>
      <g id="arrow-right">
        <path d="M10.04 16.176a.444.444 0 0 1-.31-.125.43.43 0 0 1-.128-.324V8.273c0-.132.043-.242.132-.324a.456.456 0 0 1 .317-.125c.015 0 .12.051.32.149l3.555 3.55a.651.651 0 0 1 .148.227.636.636 0 0 1 0 .5.651.651 0 0 1-.148.227l-3.555 3.55a.47.47 0 0 1-.16.11.393.393 0 0 1-.172.039Zm0 0"></path>
      </g>
      <g id="cancel-filled">
        <path d="m12 13.273 2.898 2.903c.184.183.399.27.641.262a.926.926 0 0 0 .637-.29.87.87 0 0 0 .273-.636.87.87 0 0 0-.273-.637L13.273 12l2.903-2.898a.879.879 0 0 0 0-1.278.879.879 0 0 0-1.277 0L12 10.727 9.102 7.824a.864.864 0 0 0-.625-.273.857.857 0 0 0-.625.273.88.88 0 0 0-.278.637c0 .242.094.457.278.64L10.727 12l-2.903 2.898a.822.822 0 0 0-.261.625.907.907 0 0 0 .289.625.874.874 0 0 0 .636.278.874.874 0 0 0 .637-.278Zm0 8.329a9.369 9.369 0 0 1-3.727-.75 9.706 9.706 0 0 1-3.062-2.063 9.706 9.706 0 0 1-2.063-3.062A9.369 9.369 0 0 1 2.398 12c0-1.332.25-2.578.75-3.738A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063c1.168-.5 2.41-.75 3.727-.75 1.332 0 2.578.25 3.738.75a9.743 9.743 0 0 1 3.051 2.063 9.743 9.743 0 0 1 2.063 3.05c.5 1.16.75 2.407.75 3.739 0 1.316-.25 2.559-.75 3.727a9.706 9.706 0 0 1-2.063 3.062 9.743 9.743 0 0 1-3.05 2.063c-1.16.5-2.407.75-3.739.75Zm0 0"></path>
      </g>
      <g id="check">
        <path d="m9.727 14.773 7.472-7.472a.88.88 0 0 1 .637-.278c.242 0 .457.094.64.278a.87.87 0 0 1 .274.636.87.87 0 0 1-.273.637L10.375 16.7a.874.874 0 0 1-.637.278.874.874 0 0 1-.636-.278l-3.579-3.574a.87.87 0 0 1-.273-.637.87.87 0 0 1 .273-.636.883.883 0 0 1 .641-.278.88.88 0 0 1 .637.278Zm0 0"></path>
      </g>
      <g id="check-circle">
        <path d="m10.727 13.05-1.5-1.476a.864.864 0 0 0-.625-.273.857.857 0 0 0-.625.273.88.88 0 0 0-.278.637c0 .242.094.457.278.64l2.125 2.126c.183.183.39.273.625.273.23 0 .441-.09.625-.273l4.671-4.676a.88.88 0 0 0 .278-.637.883.883 0 0 0-.278-.64.857.857 0 0 0-.625-.274c-.23 0-.441.09-.625.273ZM12 21.603a9.369 9.369 0 0 1-3.727-.75 9.706 9.706 0 0 1-3.062-2.063 9.706 9.706 0 0 1-2.063-3.062A9.369 9.369 0 0 1 2.398 12c0-1.332.25-2.578.75-3.738A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063c1.168-.5 2.41-.75 3.727-.75 1.332 0 2.578.25 3.738.75a9.743 9.743 0 0 1 3.051 2.063 9.743 9.743 0 0 1 2.063 3.05c.5 1.16.75 2.407.75 3.739 0 1.316-.25 2.559-.75 3.727a9.706 9.706 0 0 1-2.063 3.062 9.743 9.743 0 0 1-3.05 2.063c-1.16.5-2.407.75-3.739.75Zm0-1.801c2.168 0 4.008-.758 5.523-2.278 1.52-1.515 2.278-3.355 2.278-5.523 0-2.168-.758-4.008-2.278-5.523-1.515-1.52-3.355-2.278-5.523-2.278-2.168 0-4.008.758-5.523 2.278C4.957 7.992 4.199 9.832 4.199 12c0 2.168.758 4.008 2.278 5.523 1.515 1.52 3.355 2.278 5.523 2.278ZM12 12Zm0 0"></path>
      </g>
      <g id="chevron-left">
        <path d="m10.95 12 4.1 4.102a.87.87 0 0 1 .274.636.87.87 0 0 1-.273.637.879.879 0 0 1-1.277 0l-4.75-4.75a.84.84 0 0 1-.188-.29.967.967 0 0 1-.063-.335c0-.117.024-.23.063-.336a.84.84 0 0 1 .187-.289l4.75-4.75a.879.879 0 0 1 1.278 0 .87.87 0 0 1 .273.637.87.87 0 0 1-.273.636Zm0 0"></path>
      </g>
      <g id="chevron-right">
        <path d="m13.05 12-4.1-4.102a.87.87 0 0 1-.274-.636.87.87 0 0 1 .273-.637.879.879 0 0 1 1.277 0l4.75 4.75a.84.84 0 0 1 .188.29c.04.105.063.218.063.335 0 .117-.024.23-.063.336a.84.84 0 0 1-.187.289l-4.75 4.75a.822.822 0 0 1-.625.262.902.902 0 0 1-.625-.285.883.883 0 0 1-.278-.641.88.88 0 0 1 .278-.637Zm0 0"></path>
      </g>
      <g id="chrome-product">
        <path d="M9.45 14.574c.698.7 1.55 1.051 2.55 1.051 1 0 1.852-.352 2.55-1.05.7-.7 1.052-1.552 1.052-2.552s-.352-1.847-1.051-2.546C13.85 8.773 13 8.426 12 8.426c-1 0-1.852.347-2.55 1.05-.7.7-1.052 1.547-1.052 2.547 0 1 .352 1.852 1.051 2.551ZM12 17.426c.184 0 .371-.004.563-.012.19-.012.378-.039.562-.09l-2.45 4.2c-2.402-.266-4.378-1.31-5.937-3.126-1.558-1.816-2.34-3.941-2.34-6.375 0-.714.082-1.418.239-2.109.16-.691.398-1.371.715-2.039l4 6.852A4.988 4.988 0 0 0 9.3 16.71a5.346 5.346 0 0 0 2.699.715Zm0-10.801a5.114 5.114 0 0 0-3.164 1.05 5.499 5.499 0 0 0-1.938 2.7L4.45 6.125a8.93 8.93 0 0 1 3.313-2.738A9.61 9.61 0 0 1 12 2.426c1.582 0 3.074.375 4.477 1.125a9.739 9.739 0 0 1 3.449 3.074Zm8.898 1.8c.25.583.43 1.177.54 1.774.109.602.164 1.211.164 1.824 0 2.586-.836 4.754-2.5 6.516-1.668 1.758-3.793 2.777-6.375 3.063l3.921-6.875c.235-.418.418-.852.551-1.301a5.058 5.058 0 0 0-.176-3.324A5.943 5.943 0 0 0 16 8.426Zm0 0"></path>
      </g>
      <g id="close">
        <path d="m12 13.273-4.102 4.102a.816.816 0 0 1-.625.262.91.91 0 0 1-.625-.285.879.879 0 0 1 0-1.278L10.727 12 6.625 7.898a.83.83 0 0 1-.262-.636.914.914 0 0 1 .285-.637.879.879 0 0 1 1.278 0L12 10.727l4.102-4.102a.87.87 0 0 1 .636-.273.87.87 0 0 1 .637.273.87.87 0 0 1 .273.637.87.87 0 0 1-.273.636L13.273 12l4.102 4.102c.184.183.273.39.273.625 0 .23-.09.441-.273.625a.87.87 0 0 1-.637.273.87.87 0 0 1-.636-.273Zm0 0"></path>
      </g>
      <g id="computer">
        <path d="M2.102 20.398a.872.872 0 0 1-.902-.895c0-.253.085-.464.257-.64a.869.869 0 0 1 .645-.261h19.796a.872.872 0 0 1 .902.895.878.878 0 0 1-.257.64.869.869 0 0 1-.645.261Zm2.097-3c-.496 0-.918-.175-1.27-.527a1.738 1.738 0 0 1-.53-1.27V5.399c0-.492.18-.918.53-1.27a1.729 1.729 0 0 1 1.27-.526h15.602c.496 0 .918.175 1.27.527.35.351.53.777.53 1.27v10.203c0 .492-.18.918-.53 1.27a1.729 1.729 0 0 1-1.27.526Zm0-1.796h15.602V5.398H4.199Zm0 0V5.398Zm0 0"></path>
      </g>
      <g id="edit-filled">
        <path d="M4.504 20.398a.878.878 0 0 1-.64-.257.846.846 0 0 1-.262-.637v-2.172c0-.238.039-.465.125-.684.082-.214.214-.414.398-.597L16.051 4.125a1.728 1.728 0 0 1 1.27-.523c.238 0 .464.039.679.125.215.082.418.214.602.398l1.273 1.273a1.773 1.773 0 0 1 .523 1.266c0 .242-.039.469-.125.688a1.639 1.639 0 0 1-.398.597L7.949 19.875a1.706 1.706 0 0 1-.597.398 1.81 1.81 0 0 1-.68.125ZM17.324 7.95l1.278-1.273-1.278-1.278-1.273 1.278Zm0 0"></path>
      </g>
      <g id="delete">
        <path d="M7.8 20.398c-.495 0-.917-.175-1.273-.527A1.735 1.735 0 0 1 6 18.601v-12h-.3a.872.872 0 0 1-.641-.257.87.87 0 0 1-.258-.637c0-.254.086-.469.258-.644a.86.86 0 0 1 .64-.262h3.903V4.5c0-.254.085-.469.257-.64a.872.872 0 0 1 .641-.258h3c.254 0 .469.086.64.257a.872.872 0 0 1 .258.641v.3h3.903c.254 0 .469.087.64.259a.863.863 0 0 1 .258.636.872.872 0 0 1-.258.64.864.864 0 0 1-.64.267H18V18.59c0 .508-.176.933-.527 1.285a1.74 1.74 0 0 1-1.274.523Zm8.4-13.796H7.8v12h8.4Zm-5.063 9.941a.869.869 0 0 0 .261-.645V9.301a.884.884 0 0 0-.894-.903.866.866 0 0 0-.64.262.86.86 0 0 0-.262.64v6.598a.872.872 0 0 0 .895.902.878.878 0 0 0 .64-.257Zm3 0a.869.869 0 0 0 .261-.645V9.301a.884.884 0 0 0-.894-.903.866.866 0 0 0-.64.262.86.86 0 0 0-.262.64v6.598a.872.872 0 0 0 .895.902.878.878 0 0 0 .64-.257ZM7.8 6.602v12Zm0 0"></path>
      </g>
      <g id="devices">
        <path d="M12.602 10.5Zm-.903 8.7H3.301a.872.872 0 0 1-.64-.259.852.852 0 0 1-.263-.636.86.86 0 0 1 .262-.64.864.864 0 0 1 .64-.267h8.4c.253 0 .468.086.64.258a.858.858 0 0 1 .262.637.875.875 0 0 1-.262.645.86.86 0 0 1-.64.261Zm-6.3-3c-.547 0-.985-.16-1.313-.49-.324-.323-.484-.76-.484-1.312V6.602c0-.551.16-.989.484-1.313.328-.328.766-.488 1.312-.488H19.5c.254 0 .469.086.64.258a.863.863 0 0 1 .258.636.872.872 0 0 1-.257.64.864.864 0 0 1-.641.267H5.398v7.796H11.7c.254 0 .469.086.64.258a.858.858 0 0 1 .263.637.875.875 0 0 1-.262.645.86.86 0 0 1-.64.261ZM19.8 17.397V10.2h-3.602v7.2ZM15.75 19.2c-.418 0-.746-.12-.988-.363-.242-.238-.364-.57-.364-.984V9.75c0-.418.122-.746.364-.988s.57-.364.988-.364h4.5c.418 0 .746.122.988.364s.364.57.364.988v8.102c0 .414-.122.746-.364.984-.242.242-.57.363-.988.363ZM17.992 12a.578.578 0 0 0 .434-.18.564.564 0 0 0 .176-.414.592.592 0 0 0-.61-.605.57.57 0 0 0-.418.172.577.577 0 0 0-.176.433c0 .164.063.301.18.418a.57.57 0 0 0 .414.176ZM18 13.8Zm0 0"></path>
      </g>
      <g id="domain">
        <path d="M2.398 18.602V5.398c0-.492.18-.918.532-1.27a1.729 1.729 0 0 1 1.27-.526h6c.495 0 .917.175 1.273.527.351.351.527.777.527 1.27v1.8h7.8c.497 0 .919.176 1.27.531.352.352.532.774.532 1.27v9.602c0 .492-.18.918-.532 1.27a1.729 1.729 0 0 1-1.27.526H4.2c-.497 0-.919-.175-1.27-.527a1.738 1.738 0 0 1-.532-1.27Zm1.801 0H6V16.8H4.2Zm0-3.801H6V13H4.2ZM4.2 11H6V9.2H4.2Zm0-3.8H6V5.397H4.2Zm4.2 11.402h1.8V16.8H8.4Zm0-3.801h1.8V13H8.4Zm0-3.801h1.8V9.2H8.4Zm0-3.8h1.8V5.397H8.4ZM12 18.601h7.8V9H12v2h1.8v1.8H12v2h1.8v1.802H12Zm4.2-5.801V11H18v1.8Zm0 3.8v-1.8H18v1.8Zm0 0"></path>
      </g>
      <g id="download">
        <path d="M11.656 15.164a.845.845 0 0 1-.281-.187l-3.55-3.551a.83.83 0 0 1-.263-.637.949.949 0 0 1 .278-.64.909.909 0 0 1 .648-.274.87.87 0 0 1 .637.273l1.977 2V4.5a.872.872 0 0 1 .895-.898c.253 0 .464.086.64.257a.86.86 0 0 1 .261.641v7.648l2-2c.18-.183.391-.27.637-.261a.97.97 0 0 1 .652.289.89.89 0 0 1-.011 1.273l-3.551 3.528a.983.983 0 0 1-.293.187.967.967 0 0 1-.336.063.972.972 0 0 1-.34-.063ZM6.594 19.2c-.496 0-.918-.176-1.27-.527a1.749 1.749 0 0 1-.523-1.274V16.5c0-.254.086-.469.258-.64a.863.863 0 0 1 .636-.258c.254 0 .47.085.64.257a.864.864 0 0 1 .267.641v.898h10.796V16.5c0-.254.086-.469.258-.64a.87.87 0 0 1 .637-.258c.254 0 .469.085.645.257a.86.86 0 0 1 .261.641v.898c0 .497-.176.922-.527 1.274a1.744 1.744 0 0 1-1.274.527Zm0 0"></path>
      </g>
      <!-- source: https://fonts.google.com/icons?selected=Material+Symbols+Outlined:family_link:FILL@0;wght@0;GRAD@0;opsz@24&icon.size=24&icon.color=%23e8eaed -->
      <g id="family-link">
        <path d="M13.324 18.352 19.2 9.227 13.301 3 7.227 9.227Zm-.097-7.676ZM10.648 22.8c-.816 0-1.52-.281-2.109-.84a3.954 3.954 0 0 1-1.164-2.063 1.562 1.562 0 0 0-.531-.835 1.389 1.389 0 0 0-.918-.336c-.25 0-.48.046-.7.148a1.039 1.039 0 0 0-.5.477c-.085.164-.199.308-.343.421a.787.787 0 0 1-.508.176.883.883 0 0 1-.648-.273.896.896 0 0 1-.278-.653c0-.105.016-.199.051-.277.035-.082.074-.164.125-.246.3-.484.7-.871 1.2-1.164.5-.29 1.042-.438 1.624-.438.817 0 1.512.27 2.09.801.574.535.953 1.211 1.137 2.028.082.363.254.668.511.91.258.242.579.363.961.363.286 0 .575-.082.864-.25a1.9 1.9 0 0 0 .668-.602l.02-.046-6.5-9.875a1.625 1.625 0 0 1-.231-.477 1.881 1.881 0 0 1-.07-.512c0-.234.038-.457.113-.672.074-.21.203-.406.386-.59L12 1.75c.184-.184.39-.32.617-.414.23-.09.461-.137.688-.137.23 0 .457.047.683.137.223.094.43.23.614.414L20.5 7.977c.168.175.293.37.375.585a1.91 1.91 0 0 1 .055 1.188 1.533 1.533 0 0 1-.23.477l-7.177 10.875c-.414.632-.867 1.074-1.355 1.324a3.31 3.31 0 0 1-1.52.375Zm0 0"></path>
      </g>
      <g id="error-filled">
        <path d="M12.637 16.543a.852.852 0 0 0 .261-.637.9.9 0 0 0-.253-.644.86.86 0 0 0-.641-.262.878.878 0 0 0-.64.258.852.852 0 0 0-.262.637.9.9 0 0 0 .253.644.875.875 0 0 0 .641.262.878.878 0 0 0 .64-.258Zm0-3.602a.86.86 0 0 0 .261-.64V8.1a.872.872 0 0 0-.895-.902.878.878 0 0 0-.64.258.869.869 0 0 0-.261.645V12.3a.872.872 0 0 0 .895.898.878.878 0 0 0 .64-.258Zm-.63 8.66c-1.32 0-2.566-.25-3.734-.75a9.706 9.706 0 0 1-3.062-2.062 9.706 9.706 0 0 1-2.063-3.062 9.398 9.398 0 0 1-.75-3.739c0-1.324.25-2.566.75-3.726A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063 9.398 9.398 0 0 1 3.739-.75c1.324 0 2.566.25 3.726.75a9.743 9.743 0 0 1 3.051 2.063 9.688 9.688 0 0 1 2.063 3.059c.5 1.16.75 2.402.75 3.722 0 1.32-.25 2.567-.75 3.735a9.706 9.706 0 0 1-2.063 3.062 9.688 9.688 0 0 1-3.059 2.063 9.31 9.31 0 0 1-3.722.75Zm0 0"></path>
      </g>
      <g id="error">
        <path d="M12.637 16.543a.852.852 0 0 0 .261-.637.9.9 0 0 0-.253-.644.86.86 0 0 0-.641-.262.878.878 0 0 0-.64.258.852.852 0 0 0-.262.637.9.9 0 0 0 .253.644.875.875 0 0 0 .641.262.878.878 0 0 0 .64-.258Zm0-3.602a.86.86 0 0 0 .261-.64V8.1a.872.872 0 0 0-.895-.902.878.878 0 0 0-.64.258.869.869 0 0 0-.261.645V12.3a.872.872 0 0 0 .895.898.878.878 0 0 0 .64-.258Zm-.63 8.66c-1.32 0-2.566-.25-3.734-.75a9.706 9.706 0 0 1-3.062-2.062 9.706 9.706 0 0 1-2.063-3.062 9.398 9.398 0 0 1-.75-3.739c0-1.324.25-2.566.75-3.726A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063 9.398 9.398 0 0 1 3.739-.75c1.324 0 2.566.25 3.726.75a9.743 9.743 0 0 1 3.051 2.063 9.688 9.688 0 0 1 2.063 3.059c.5 1.16.75 2.402.75 3.722 0 1.32-.25 2.567-.75 3.735a9.706 9.706 0 0 1-2.063 3.062 9.688 9.688 0 0 1-3.059 2.063 9.31 9.31 0 0 1-3.722.75Zm-.007-1.8c2.168 0 4.008-.758 5.523-2.278 1.52-1.515 2.278-3.355 2.278-5.523 0-2.168-.758-4.008-2.278-5.523-1.515-1.52-3.355-2.278-5.523-2.278-2.168 0-4.008.758-5.523 2.278C4.957 7.992 4.199 9.832 4.199 12c0 2.168.758 4.008 2.278 5.523 1.515 1.52 3.355 2.278 5.523 2.278ZM12 12Zm0 0"></path>
      </g>
      <g id="keyboard-arrow-up">
        <path d="m12 10.875-4.102 4.102a.87.87 0 0 1-.636.273.87.87 0 0 1-.637-.273.879.879 0 0 1 0-1.278l4.75-4.75A.857.857 0 0 1 12 8.676c.234 0 .441.09.625.273l4.75 4.75c.184.184.273.39.273.625s-.09.442-.273.625a.874.874 0 0 1-.637.278.874.874 0 0 1-.636-.278Zm0 0"></path>
      </g>
      <g id="keyboard-arrow-down">
        <path d="M11.664 15.238a.84.84 0 0 1-.289-.187l-4.75-4.75a.835.835 0 0 1-.262-.637.923.923 0 0 1 .285-.64.879.879 0 0 1 1.278 0L12 13.124l4.102-4.102a.83.83 0 0 1 .636-.261.919.919 0 0 1 .637.289.87.87 0 0 1 .273.636.87.87 0 0 1-.273.637l-4.75 4.727a.84.84 0 0 1-.29.187.967.967 0 0 1-.335.063.967.967 0 0 1-.336-.063Zm0 0"></path>
      </g>
      <g id="chrome-extension-filled">
        <path d="M5.398 20.398c-.492 0-.918-.175-1.27-.527a1.735 1.735 0 0 1-.526-1.27v-3.476c0-.219.066-.41.199-.578a.79.79 0 0 1 .523-.297 2.746 2.746 0 0 0 1.2-.875C5.84 12.977 6 12.515 6 12c0-.516-.16-.977-.477-1.375a2.746 2.746 0 0 0-1.199-.875.8.8 0 0 1-.523-.305.947.947 0 0 1-.2-.593V5.398c0-.492.176-.918.528-1.27a1.735 1.735 0 0 1 1.27-.526h4.203c0-.668.23-1.235.691-1.704a2.317 2.317 0 0 1 1.703-.699c.668 0 1.238.235 1.703.696.469.464.7 1.035.7 1.707h4.203c.492 0 .918.175 1.27.527.35.351.526.777.526 1.27v4.203c.668 0 1.235.23 1.704.691.464.465.699 1.031.699 1.703 0 .668-.235 1.238-.696 1.703-.464.469-1.035.7-1.707.7v4.203c0 .492-.175.918-.527 1.27a1.735 1.735 0 0 1-1.27.526Zm0 0"></path>
      </g>
      <g id="fullscreen">
        <path d="M5.398 18.602H7.5a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261h-3a.872.872 0 0 1-.64-.257.872.872 0 0 1-.258-.641v-3a.872.872 0 0 1 .895-.898c.253 0 .464.085.64.257a.86.86 0 0 1 .261.641Zm13.204 0V16.5a.872.872 0 0 1 .895-.898c.253 0 .464.085.64.257a.86.86 0 0 1 .261.641v3a.872.872 0 0 1-.257.64.872.872 0 0 1-.641.258h-3a.872.872 0 0 1-.898-.895c0-.253.085-.464.257-.64a.86.86 0 0 1 .641-.261ZM5.398 5.398V7.5a.872.872 0 0 1-.895.898.878.878 0 0 1-.64-.257.86.86 0 0 1-.261-.641v-3c0-.254.086-.469.257-.64a.872.872 0 0 1 .641-.258h3a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm13.204 0H16.5a.872.872 0 0 1-.898-.895c0-.253.085-.464.257-.64a.86.86 0 0 1 .641-.261h3c.254 0 .469.086.64.257a.872.872 0 0 1 .258.641v3a.872.872 0 0 1-.895.898.878.878 0 0 1-.64-.257.86.86 0 0 1-.261-.641Zm0 0"></path>
      </g>
      <g id="group-filled">
        <path d="M2.398 16.898a2.335 2.335 0 0 1 1.176-2.046 11.97 11.97 0 0 1 2.864-1.227 11.566 11.566 0 0 1 3.164-.426c1.097 0 2.152.14 3.16.426 1.008.285 1.965.691 2.863 1.227a2.335 2.335 0 0 1 1.176 2.047v.5c0 .5-.176.925-.528 1.277a1.736 1.736 0 0 1-1.273.523H4.2c-.5 0-.927-.176-1.274-.523a1.74 1.74 0 0 1-.528-1.278ZM18.125 19.2c.148-.281.266-.574.352-.875.082-.3.125-.61.125-.926v-.5c0-.699-.165-1.347-.489-1.949a4.215 4.215 0 0 0-1.312-1.472c.648.132 1.277.312 1.887.535.609.226 1.187.504 1.738.84a2.335 2.335 0 0 1 1.176 2.047v.5c0 .5-.176.925-.528 1.277a1.736 1.736 0 0 1-1.273.523ZM7.051 10.95C6.35 10.25 6 9.4 6 8.4c0-1 .352-1.848 1.05-2.547.7-.704 1.552-1.051 2.552-1.051s1.847.347 2.546 1.05c.704.7 1.051 1.547 1.051 2.547 0 1-.347 1.852-1.05 2.551-.7.7-1.547 1.051-2.547 1.051-1 0-1.852-.352-2.551-1.05Zm9.898 0C16.25 11.65 15.4 12 14.4 12c-.133 0-.258-.004-.376-.012a2.497 2.497 0 0 1-.375-.062 5.859 5.859 0 0 0 .989-1.614A5 5 0 0 0 15 8.399a4.98 4.98 0 0 0-.363-1.91 5.802 5.802 0 0 0-.989-1.613c.137-.035.262-.055.375-.063.118-.007.243-.011.375-.011 1 0 1.852.347 2.551 1.05.7.7 1.051 1.547 1.051 2.547 0 1-.352 1.852-1.05 2.551Zm0 0"></path>
      </g>
      <g id="help">
        <path d="M12.852 17.648c.23-.23.347-.515.347-.847 0-.336-.117-.617-.347-.852a1.158 1.158 0 0 0-.852-.347c-.332 0-.617.113-.852.347-.23.235-.347.516-.347.852 0 .332.117.617.347.847.235.235.52.352.852.352.332 0 .617-.117.852-.352ZM12 21.602a9.369 9.369 0 0 1-3.727-.75 9.706 9.706 0 0 1-3.062-2.063 9.706 9.706 0 0 1-2.063-3.062A9.369 9.369 0 0 1 2.398 12c0-1.332.25-2.578.75-3.738A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063c1.168-.5 2.41-.75 3.727-.75 1.332 0 2.578.25 3.738.75a9.743 9.743 0 0 1 3.051 2.063 9.743 9.743 0 0 1 2.063 3.05c.5 1.16.75 2.407.75 3.739 0 1.316-.25 2.559-.75 3.727a9.706 9.706 0 0 1-2.063 3.062 9.743 9.743 0 0 1-3.05 2.063c-1.16.5-2.407.75-3.739.75Zm0-1.801c2.168 0 4.008-.758 5.523-2.278 1.52-1.515 2.278-3.355 2.278-5.523 0-2.168-.758-4.008-2.278-5.523-1.515-1.52-3.355-2.278-5.523-2.278-2.168 0-4.008.758-5.523 2.278C4.957 7.992 4.199 9.832 4.199 12c0 2.168.758 4.008 2.278 5.523 1.515 1.52 3.355 2.278 5.523 2.278ZM12 12Zm.074-4.3c.434 0 .805.132 1.114.402.308.265.46.605.46 1.023 0 .367-.105.691-.324.977a4.67 4.67 0 0 1-.75.773A6.528 6.528 0 0 0 11.551 12c-.301.418-.442.883-.426 1.398 0 .235.082.422.25.563a.888.888 0 0 0 .602.215c.23 0 .433-.07.597-.215a.954.954 0 0 0 .324-.563 2.34 2.34 0 0 1 .477-.972c.234-.285.484-.551.75-.801.383-.367.695-.773.938-1.227a3.01 3.01 0 0 0 .363-1.449c0-.847-.328-1.554-.989-2.113C13.777 6.277 13 6 12.102 6a3.96 3.96 0 0 0-1.79.414 3.196 3.196 0 0 0-1.335 1.211.767.767 0 0 0-.114.648.71.71 0 0 0 .41.5.948.948 0 0 0 .704.079 1.14 1.14 0 0 0 .574-.375c.183-.235.406-.422.676-.563.265-.144.546-.215.847-.215Zm0 0"></path>
      </g>
      <g id="history">
        <path d="M12 20.398c-2.2 0-4.086-.726-5.664-2.187-1.574-1.457-2.469-3.254-2.688-5.387a.628.628 0 0 1 .215-.586A.908.908 0 0 1 4.5 12c.234 0 .441.066.625.2a.779.779 0 0 1 .324.55c.184 1.648.899 3.04 2.137 4.164C8.828 18.04 10.3 18.602 12 18.602c1.816 0 3.371-.649 4.664-1.938 1.29-1.293 1.938-2.848 1.938-4.664 0-1.816-.649-3.371-1.938-4.664-1.293-1.29-2.848-1.938-4.664-1.938a6.453 6.453 0 0 0-2.863.641 6.372 6.372 0 0 0-2.211 1.762h1.773c.254 0 .469.086.64.258a.852.852 0 0 1 .263.636.86.86 0 0 1-.262.64.864.864 0 0 1-.64.267H4.5a.86.86 0 0 1-.64-.262.872.872 0 0 1-.258-.64V4.5a.872.872 0 0 1 .895-.898c.253 0 .464.086.64.257a.86.86 0 0 1 .261.641v2.352c.77-1 1.723-1.793 2.864-2.375 1.14-.586 2.386-.875 3.738-.875 1.168 0 2.258.218 3.277.664a8.502 8.502 0 0 1 2.66 1.796 8.502 8.502 0 0 1 1.797 2.66c.446 1.02.664 2.11.664 3.278a8.086 8.086 0 0 1-.664 3.277 8.502 8.502 0 0 1-1.797 2.66 8.502 8.502 0 0 1-2.66 1.797 8.086 8.086 0 0 1-3.277.664Zm.898-9.148 2.25 2.25c.184.184.274.39.266.625a.924.924 0 0 1-.289.625.87.87 0 0 1-.637.273.87.87 0 0 1-.636-.273l-2.47-2.469a.97.97 0 0 1-.206-.297.83.83 0 0 1-.074-.347V8.094c0-.254.085-.465.261-.637A.875.875 0 0 1 12 7.199c.25 0 .46.086.637.258a.869.869 0 0 1 .261.645Zm0 0"></path>
      </g>
      <g id="info-filled">
        <path d="M12.637 16.543a.869.869 0 0 0 .261-.645V11.7a.872.872 0 0 0-.895-.898.878.878 0 0 0-.64.258.86.86 0 0 0-.261.64v4.2a.872.872 0 0 0 .895.902.878.878 0 0 0 .64-.258Zm0-7.8a.852.852 0 0 0 .261-.638.9.9 0 0 0-.253-.644.875.875 0 0 0-.641-.262.878.878 0 0 0-.64.258.852.852 0 0 0-.262.637.9.9 0 0 0 .253.644.86.86 0 0 0 .641.262.878.878 0 0 0 .64-.258Zm-.63 12.859c-1.32 0-2.566-.25-3.734-.75a9.706 9.706 0 0 1-3.062-2.063 9.706 9.706 0 0 1-2.063-3.062 9.398 9.398 0 0 1-.75-3.739c0-1.324.25-2.566.75-3.726A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063 9.398 9.398 0 0 1 3.739-.75c1.324 0 2.566.25 3.726.75a9.743 9.743 0 0 1 3.051 2.063 9.688 9.688 0 0 1 2.063 3.059c.5 1.16.75 2.402.75 3.722 0 1.32-.25 2.567-.75 3.735a9.706 9.706 0 0 1-2.063 3.062 9.688 9.688 0 0 1-3.059 2.063 9.31 9.31 0 0 1-3.722.75Zm0 0"></path>
      </g>
      <g id="info">
        <path d="M12.637 16.543a.869.869 0 0 0 .261-.645V11.7a.872.872 0 0 0-.895-.898.878.878 0 0 0-.64.258.86.86 0 0 0-.261.64v4.2a.872.872 0 0 0 .895.902.878.878 0 0 0 .64-.258Zm0-7.8a.852.852 0 0 0 .261-.638.9.9 0 0 0-.253-.644.875.875 0 0 0-.641-.262.878.878 0 0 0-.64.258.852.852 0 0 0-.262.637.9.9 0 0 0 .253.644.86.86 0 0 0 .641.262.878.878 0 0 0 .64-.258Zm-.63 12.859c-1.32 0-2.566-.25-3.734-.75a9.706 9.706 0 0 1-3.062-2.063 9.706 9.706 0 0 1-2.063-3.062 9.398 9.398 0 0 1-.75-3.739c0-1.324.25-2.566.75-3.726A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063 9.398 9.398 0 0 1 3.739-.75c1.324 0 2.566.25 3.726.75a9.743 9.743 0 0 1 3.051 2.063 9.688 9.688 0 0 1 2.063 3.059c.5 1.16.75 2.402.75 3.722 0 1.32-.25 2.567-.75 3.735a9.706 9.706 0 0 1-2.063 3.062 9.688 9.688 0 0 1-3.059 2.063 9.31 9.31 0 0 1-3.722.75ZM12 19.8c2.168 0 4.008-.758 5.523-2.278 1.52-1.515 2.278-3.355 2.278-5.523 0-2.168-.758-4.008-2.278-5.523-1.515-1.52-3.355-2.278-5.523-2.278-2.168 0-4.008.758-5.523 2.278C4.957 7.992 4.199 9.832 4.199 12c0 2.168.758 4.008 2.278 5.523 1.515 1.52 3.355 2.278 5.523 2.278ZM12 12Zm0 0"></path>
      </g>
      <g id="draft-filled">
        <path d="M6.594 21.602c-.496 0-.918-.18-1.27-.532a1.74 1.74 0 0 1-.523-1.27V4.2c0-.497.176-.919.527-1.27a1.74 1.74 0 0 1 1.274-.532h7.046c.235 0 .465.043.688.125.226.086.422.22.59.403l3.75 3.75c.183.164.316.363.398.586.086.226.125.453.125.687v11.852c0 .496-.176.918-.527 1.27a1.747 1.747 0 0 1-1.274.53ZM13.199 7.5a.88.88 0 0 0 .902.898h3.297L13.2 4.2Zm0 0"></path>
      </g>
      <g id="location-on-filled">
        <path d="M12.012 12.898c.742 0 1.375-.261 1.902-.785a2.629 2.629 0 0 0 .785-1.925c0-.743-.261-1.376-.785-1.899A2.603 2.603 0 0 0 12 7.5c-.75 0-1.387.262-1.914.79A2.6 2.6 0 0 0 9.3 10.2c0 .75.261 1.386.785 1.913a2.629 2.629 0 0 0 1.926.785ZM12 21.625a1.07 1.07 0 0 1-.504-.125.69.69 0 0 1-.328-.375l-.172-.352a9.497 9.497 0 0 0-.594-.953 17.9 17.9 0 0 0-.675-.894 26.445 26.445 0 0 0-2.23-2.113A10.273 10.273 0 0 1 5.5 14.55a7.304 7.304 0 0 1-.977-2.055 8.07 8.07 0 0 1-.324-2.27c0-2.164.75-4.007 2.254-5.535 1.5-1.527 3.336-2.293 5.512-2.293 2.172 0 4.023.766 5.547 2.29C19.039 6.21 19.8 8.063 19.8 10.233c0 .778-.117 1.532-.344 2.266a8.121 8.121 0 0 1-.98 2.05 11.185 11.185 0 0 1-2 2.266 25.79 25.79 0 0 0-2.176 2.11 9.348 9.348 0 0 0-.739.887 6.452 6.452 0 0 0-.585.96l-.176.352c-.086.148-.2.27-.344.363a.854.854 0 0 1-.457.137Zm0 0"></path>
      </g>
      <g id="mic-filled">
        <path d="M9.875 13.523A2.892 2.892 0 0 1 9 11.398v-6c0-.832.293-1.539.875-2.125A2.898 2.898 0 0 1 12 2.398c.832 0 1.543.293 2.125.875.582.586.875 1.293.875 2.125v6c0 .836-.293 1.543-.875 2.125-.582.586-1.293.875-2.125.875-.832 0-1.543-.289-2.125-.875Zm1.227 5.977v-1.574a6.285 6.285 0 0 1-3.766-1.84 6.399 6.399 0 0 1-1.86-3.762.768.768 0 0 1 .196-.652.817.817 0 0 1 .625-.274.87.87 0 0 1 .64.266c.176.172.29.387.336.637.22 1.148.774 2.086 1.665 2.812a4.722 4.722 0 0 0 3.05 1.086 4.716 4.716 0 0 0 3.075-1.097 4.676 4.676 0 0 0 1.664-2.801c.046-.25.16-.465.332-.637a.855.855 0 0 1 .636-.266c.254 0 .465.094.63.274.167.18.234.398.198.652a6.399 6.399 0 0 1-1.859 3.762 6.285 6.285 0 0 1-3.766 1.84V19.5a.872.872 0 0 1-.895.898.878.878 0 0 1-.64-.257.86.86 0 0 1-.261-.641Zm0 0"></path>
      </g>
      <g id="more-vert">
        <path d="M11.996 19.2c-.496 0-.922-.177-1.27-.532a1.737 1.737 0 0 1-.527-1.273c0-.497.176-.918.531-1.27a1.734 1.734 0 0 1 1.274-.523c.496 0 .922.175 1.27.527.351.355.527.781.527 1.277 0 .496-.176.918-.531 1.27a1.749 1.749 0 0 1-1.274.523Zm0-5.4c-.496 0-.922-.175-1.27-.53a1.737 1.737 0 0 1-.527-1.274c0-.496.176-.922.531-1.27a1.737 1.737 0 0 1 1.274-.527c.496 0 .922.176 1.27.531.351.352.527.778.527 1.274s-.176.922-.531 1.27a1.737 1.737 0 0 1-1.274.527Zm0-5.402c-.496 0-.922-.175-1.27-.527a1.752 1.752 0 0 1-.527-1.277c0-.496.176-.918.531-1.27a1.749 1.749 0 0 1 1.274-.523c.496 0 .922.176 1.27.531.351.352.527.777.527 1.273 0 .497-.176.918-.531 1.27a1.734 1.734 0 0 1-1.274.523Zm0 0"></path>
      </g>
      <g id="open-in-new">
        <path d="M5.398 20.398c-.492 0-.918-.175-1.27-.527a1.735 1.735 0 0 1-.526-1.27V5.399c0-.492.175-.918.527-1.27a1.735 1.735 0 0 1 1.27-.526h5.703a.872.872 0 0 1 .898.895.878.878 0 0 1-.258.64.86.86 0 0 1-.64.261H5.398v13.204h13.204v-5.704a.872.872 0 0 1 .895-.898c.253 0 .464.086.64.258a.86.86 0 0 1 .261.64v5.704c0 .492-.175.918-.527 1.27a1.735 1.735 0 0 1-1.27.526ZM18.602 6.676l-8.301 8.3a.816.816 0 0 1-.625.262.907.907 0 0 1-.625-.289.874.874 0 0 1-.278-.636c0-.243.094-.454.278-.637l8.273-8.278h-2.023a.884.884 0 0 1-.903-.894c0-.254.086-.465.262-.64a.86.86 0 0 1 .64-.262h4.2c.254 0 .469.086.64.257a.872.872 0 0 1 .258.641v4.2a.884.884 0 0 1-.894.902.866.866 0 0 1-.64-.262.86.86 0 0 1-.262-.64Zm0 0"></path>
      </g>
      <g id="person">
        <path
          d="M9.45 10.95c-.7-.7-1.052-1.552-1.052-2.552S8.75 6.551 9.45 5.852C10.15 5.148 11 4.8 12 4.8c1 0 1.852.347 2.55 1.05.7.7 1.052 1.547 1.052 2.547 0 1-.352 1.852-1.051 2.551C13.85 11.65 13 12 12 12c-1 0-1.852-.352-2.55-1.05ZM4.8 17.397v-.597c0-.383.102-.746.313-1.09a2.63 2.63 0 0 1 .864-.86 12.207 12.207 0 0 1 2.906-1.226 11.602 11.602 0 0 1 6.23 0c1.024.285 1.996.691 2.91 1.227.368.214.657.5.864.847.21.352.312.719.312 1.102v.597c0 .497-.176.922-.527 1.274a1.744 1.744 0 0 1-1.274.527H6.594c-.496 0-.918-.176-1.27-.527a1.749 1.749 0 0 1-.523-1.274Zm1.802 0h10.796v-.597a.39.39 0 0 0-.074-.235.49.49 0 0 0-.199-.168 9.306 9.306 0 0 0-2.45-1.046A10.203 10.203 0 0 0 12 15c-.918 0-1.809.117-2.676.352a9.306 9.306 0 0 0-2.449 1.046 1.357 1.357 0 0 0-.2.196.314.314 0 0 0-.073.207Zm6.671-7.73c.352-.352.528-.777.528-1.273 0-.497-.176-.918-.531-1.27a1.734 1.734 0 0 1-1.274-.523c-.496 0-.922.175-1.27.527a1.752 1.752 0 0 0-.527 1.277c0 .496.176.918.531 1.27.352.347.778.523 1.274.523s.922-.176 1.27-.531ZM12 8.398Zm0 9Zm0 0"
        </path>
      </g>
      <g id="person-filled">
        <path d="M9.45 10.95c-.7-.7-1.052-1.552-1.052-2.552S8.75 6.551 9.45 5.852C10.15 5.148 11 4.8 12 4.8c1 0 1.852.347 2.55 1.05.7.7 1.052 1.547 1.052 2.547 0 1-.352 1.852-1.051 2.551C13.85 11.65 13 12 12 12c-1 0-1.852-.352-2.55-1.05ZM4.8 17.397v-.597c0-.383.102-.746.313-1.09a2.63 2.63 0 0 1 .864-.86 12.235 12.235 0 0 1 2.91-1.226 11.573 11.573 0 0 1 6.226 0c1.024.285 1.996.691 2.91 1.227.368.214.657.5.864.847.21.352.312.719.312 1.102v.597c0 .5-.176.926-.523 1.278a1.751 1.751 0 0 1-1.278.523H6.602c-.5 0-.926-.176-1.278-.523a1.751 1.751 0 0 1-.523-1.278Zm0 0"></path>
      </g>
      <g id="print-filled">
        <path d="M7.8 20.398c-.495 0-.917-.175-1.273-.527A1.729 1.729 0 0 1 6 18.601v-1.796H4.2c-.497 0-.919-.176-1.27-.528A1.743 1.743 0 0 1 2.398 15v-4.2c0-.667.235-1.234.704-1.698A2.303 2.303 0 0 1 4.8 8.398h14.398c.668 0 1.235.235 1.7.704.468.464.703 1.03.703 1.699V15c0 .496-.176.918-.532 1.27a1.715 1.715 0 0 1-1.265.53h-1.801v1.802c0 .492-.176.918-.527 1.27a1.74 1.74 0 0 1-1.278.526ZM18 7.2H6V5.395c0-.497.176-.918.527-1.27a1.74 1.74 0 0 1 1.274-.523h8.398c.496 0 .918.175 1.274.527.351.351.527.777.527 1.27Zm-.305 5.403a.872.872 0 0 0 .64-.258.861.861 0 0 0 .267-.637.887.887 0 0 0-.258-.645.858.858 0 0 0-.637-.261.887.887 0 0 0-.645.258.852.852 0 0 0-.261.636c0 .254.086.47.258.64a.855.855 0 0 0 .636.267Zm-9.894 6h8.398V15H7.801Zm0 0"></path>
      </g>
      <g id="schedule">
        <path d="M12.898 11.25V6.898A.872.872 0 0 0 12.003 6a.878.878 0 0 0-.64.258.86.86 0 0 0-.261.64v4.727c0 .133.023.254.074.363.05.11.117.203.199.285l3.348 3.348a.828.828 0 0 0 .64.266.914.914 0 0 0 .637-.285.879.879 0 0 0 .273-.641.885.885 0 0 0-.28-.64ZM12 21.602a9.347 9.347 0 0 1-3.73-.75 9.688 9.688 0 0 1-3.06-2.063 9.706 9.706 0 0 1-2.062-3.062 9.398 9.398 0 0 1-.75-3.739c0-1.324.25-2.57.75-3.738A9.524 9.524 0 0 1 5.211 5.2a9.805 9.805 0 0 1 3.062-2.052 9.398 9.398 0 0 1 3.739-.75c1.324 0 2.57.254 3.738.758a9.689 9.689 0 0 1 3.047 2.051 9.762 9.762 0 0 1 2.047 3.05A9.342 9.342 0 0 1 21.602 12c0 1.324-.25 2.566-.75 3.73a9.788 9.788 0 0 1-2.051 3.06 9.541 9.541 0 0 1-3.055 2.062c-1.168.5-2.418.75-3.746.75ZM12 12Zm.012 7.8c2.156 0 3.996-.76 5.511-2.288 1.52-1.524 2.278-3.367 2.278-5.524 0-2.156-.758-3.996-2.278-5.511-1.515-1.52-3.355-2.278-5.511-2.278-2.157 0-4 .758-5.524 2.278C4.961 7.992 4.2 9.832 4.2 11.988c0 2.157.762 4 2.29 5.524 1.523 1.527 3.366 2.289 5.523 2.289Zm0 0"></path>
      </g>
      <g id="search">
        <path d="M9.602 15.602c-1.668 0-3.086-.586-4.25-1.75-1.168-1.168-1.75-2.586-1.75-4.25 0-1.668.582-3.086 1.75-4.25 1.164-1.168 2.582-1.75 4.25-1.75 1.664 0 3.082.582 4.25 1.75 1.164 1.164 1.75 2.582 1.75 4.25a5.75 5.75 0 0 1-.313 1.902 6.293 6.293 0 0 1-.863 1.644l5.347 5.352c.184.184.278.39.278.625a.862.862 0 0 1-.278.625.87.87 0 0 1-.636.273.87.87 0 0 1-.637-.273l-5.352-5.324c-.5.367-1.046.652-1.644.863a5.75 5.75 0 0 1-1.902.313Zm0-1.801c1.164 0 2.156-.41 2.972-1.227.817-.816 1.227-1.808 1.227-2.972 0-1.168-.41-2.16-1.227-2.977-.816-.816-1.808-1.227-2.972-1.227-1.168 0-2.16.41-2.977 1.227-.816.816-1.227 1.809-1.227 2.977 0 1.164.41 2.156 1.227 2.972.816.817 1.809 1.227 2.977 1.227Zm0 0"></path>
      </g>
      <g id="security">
        <path d="M12 19.727c1.617-.5 2.96-1.465 4.04-2.891A9.466 9.466 0 0 0 17.925 12H12V4.324L6 6.625v4.5c0 .148.008.297.023.438.02.14.036.289.051.437H12Zm-.3 1.761a1 1 0 0 1-.274-.062c-2.184-.719-3.934-2.043-5.25-3.977-1.317-1.933-1.977-4.039-1.977-6.324v-4.5a1.763 1.763 0 0 1 1.152-1.676l6-2.3A1.82 1.82 0 0 1 12 2.522c.215 0 .434.043.648.125l6 2.301a1.763 1.763 0 0 1 1.153 1.676v4.5c0 2.285-.66 4.39-1.977 6.324-1.316 1.934-3.066 3.258-5.25 3.977a1 1 0 0 1-.273.062 3.87 3.87 0 0 1-.602 0Zm0 0"></path>
      </g>
      <!-- The <g> IDs are exposed as global variables in Vulcanized mode, which
        conflicts with the "settings" namespace of MD Settings. Using an "_icon"
        suffix prevents the naming conflict. -->
      <g id="settings-filled">
        <path d="M11 21.602c-.285 0-.523-.086-.727-.25a1.097 1.097 0 0 1-.375-.653l-.375-1.949a8.72 8.72 0 0 1-1.109-.523c-.36-.204-.7-.434-1.016-.704l-1.875.653c-.25.082-.503.078-.761-.012a1.066 1.066 0 0 1-.586-.488l-1-1.75a1.045 1.045 0 0 1-.125-.739 1.2 1.2 0 0 1 .375-.664l1.472-1.296a8.15 8.15 0 0 1-.074-.602 8.05 8.05 0 0 1 .074-1.852L3.426 9.477a1.2 1.2 0 0 1-.375-.665 1.045 1.045 0 0 1 .125-.738l1-1.75c.133-.234.328-.394.586-.488.258-.09.511-.094.761-.012l1.875.653c.317-.27.657-.5 1.016-.704a8.72 8.72 0 0 1 1.11-.523l.374-1.95c.051-.265.176-.484.375-.652.204-.164.442-.25.727-.25h2c.285 0 .523.086.727.25.199.168.324.387.375.653l.375 1.949a8.72 8.72 0 0 1 1.109.523c.36.204.7.434 1.016.704l1.875-.653c.25-.082.503-.078.761.012.258.094.453.254.586.488l1 1.75c.133.235.176.48.125.739a1.2 1.2 0 0 1-.375.664l-1.472 1.296c.03.204.058.403.074.602a8.05 8.05 0 0 1-.074 1.852l1.472 1.296c.2.184.324.407.375.665.051.257.008.503-.125.738l-1 1.75a1.066 1.066 0 0 1-.586.488c-.258.09-.511.094-.761.012l-1.875-.653c-.317.27-.657.5-1.016.704a8.72 8.72 0 0 1-1.11.523l-.374 1.95c-.051.265-.176.484-.375.652-.204.164-.442.25-.727.25Zm1-6c1 0 1.852-.352 2.55-1.051.7-.7 1.052-1.551 1.052-2.551 0-1-.352-1.852-1.051-2.55C13.85 8.75 13 8.397 12 8.397c-1 0-1.852.352-2.55 1.051-.7.7-1.052 1.551-1.052 2.551 0 1 .352 1.852 1.051 2.55.7.7 1.551 1.052 2.551 1.052Zm0 0"></path>
      </g>
      <g id="star-filled">
        <path d="m12 16.875-4.102 2.45a.892.892 0 0 1-1-.05.876.876 0 0 1-.296-.412.849.849 0 0 1-.028-.539l1.074-4.574-3.625-3.074a.834.834 0 0 1-.273-.465 1.08 1.08 0 0 1 .023-.512.83.83 0 0 1 .278-.41c.133-.11.3-.172.5-.187l4.75-.426 1.875-4.352c.082-.183.199-.32.347-.41a.89.89 0 0 1 .477-.14.89.89 0 0 1 .477.14c.148.09.265.227.347.41L14.7 8.7l4.75.403c.2.015.367.082.5.199a.91.91 0 0 1 .278.426c.046.164.05.332.011.5a.892.892 0 0 1-.289.449l-3.597 3.074 1.074 4.574c.05.184.039.363-.028.54a.876.876 0 0 1-.761.585.915.915 0 0 1-.535-.125Zm0 0"></path>
      </g>
      <g id="sync">
        <path d="M6.602 12c0 .8.16 1.543.484 2.227a5.47 5.47 0 0 0 1.312 1.75V15.3c0-.254.086-.469.258-.64a.858.858 0 0 1 .637-.263c.254 0 .469.086.645.262a.86.86 0 0 1 .261.64v3a.872.872 0 0 1-.258.641.872.872 0 0 1-.64.258h-3a.872.872 0 0 1-.64-.258.852.852 0 0 1-.263-.636.86.86 0 0 1 .262-.64.864.864 0 0 1 .64-.267h.95a7.418 7.418 0 0 1-1.79-2.386A6.906 6.906 0 0 1 4.8 12c0-1.418.368-2.695 1.098-3.836A7.072 7.072 0 0 1 8.813 5.57a.659.659 0 0 1 .636-.011.862.862 0 0 1 .45.52.9.9 0 0 1-.012.683.98.98 0 0 1-.45.511 5.425 5.425 0 0 0-2.066 1.942c-.516.824-.77 1.75-.77 2.785Zm10.796 0c0-.8-.16-1.543-.484-2.227a5.47 5.47 0 0 0-1.312-1.75V8.7a.872.872 0 0 1-.258.64.858.858 0 0 1-.637.263.875.875 0 0 1-.645-.262.86.86 0 0 1-.261-.64v-3c0-.255.086-.47.258-.641a.872.872 0 0 1 .64-.258h3c.254 0 .469.086.64.258a.852.852 0 0 1 .263.636.86.86 0 0 1-.262.64.864.864 0 0 1-.64.267h-.95a7.418 7.418 0 0 1 1.79 2.386c.44.926.66 1.93.66 3.012 0 1.418-.368 2.695-1.098 3.836a7.072 7.072 0 0 1-2.915 2.594.649.649 0 0 1-.636.008.87.87 0 0 1-.45-.524.911.911 0 0 1 .422-1.164 5.458 5.458 0 0 0 2.079-1.926c.53-.832.796-1.773.796-2.824Zm0 0"></path>
      </g>
      <g id="thumb-down">
        <path d="M3 15.602c-.45 0-.863-.188-1.238-.563-.375-.375-.563-.789-.563-1.238v-1.426c0-.133.012-.258.04-.375.023-.117.062-.227.113-.324l2.972-6.977c.153-.347.43-.625.84-.824.406-.2.8-.3 1.188-.3l11.046.027v12l-5.847 5.847c-.317.317-.68.524-1.09.613-.406.09-.774.047-1.098-.136-.324-.184-.535-.48-.625-.887-.093-.41-.09-.855.012-1.34l.852-4.097Zm12.602-.75V5.398H6l-3 6.977v1.426h8.8l-1.226 6.05ZM21 3.602c.516 0 .945.175 1.29.527.339.351.51.777.51 1.27V13.8c0 .496-.171.918-.51 1.27a1.732 1.732 0 0 1-1.29.53h-3.602v-1.8H21V5.398h-3.602V3.602Zm-5.398 1.796v9.454Zm0 0"></path>
      </g>
      <g id="thumb-down-filled">
        <path d="M3 15.602c-.45 0-.863-.184-1.238-.551-.375-.367-.563-.785-.563-1.25v-1.426c0-.133.012-.254.04-.363.023-.11.062-.219.113-.336l2.972-6.977a1.72 1.72 0 0 1 .653-.8c.296-.2.64-.297 1.023-.297h9.602c.5 0 .921.168 1.273.511.352.34.523.77.523 1.285v9.454c0 .25-.046.484-.148.71a1.943 1.943 0 0 1-.398.586l-5.028 5.028c-.3.3-.664.492-1.097.574-.434.082-.801.035-1.102-.148a1.496 1.496 0 0 1-.738-.954 2.596 2.596 0 0 1-.035-1.222l.75-3.824Zm18-12c.484 0 .902.175 1.262.535.36.36.539.781.539 1.261v8.403c0 .484-.18.902-.54 1.261-.359.36-.777.54-1.261.54-.484 0-.902-.18-1.262-.54-.36-.359-.539-.777-.539-1.261V5.398c0-.48.18-.902.54-1.261A1.72 1.72 0 0 1 21 3.602Zm0 0"></path>
      </g>
      <g id="thumb-up">
        <path d="M21 8.375c.45 0 .863.188 1.238.563.375.374.563.789.563 1.238v1.426c0 .132-.012.257-.04.375a1.33 1.33 0 0 1-.113.324l-2.972 6.972c-.153.352-.43.625-.84.829-.406.199-.8.296-1.188.296l-11.046-.023v-12l5.847-5.852a2.18 2.18 0 0 1 1.09-.609c.406-.094.774-.047 1.098.137.324.183.535.476.625.886.093.41.09.856-.012 1.336l-.852 4.102Zm-12.602.75v9.45H18l3-6.973v-1.426h-8.8l1.226-6.051ZM3 20.375c-.516 0-.945-.176-1.29-.527a1.776 1.776 0 0 1-.51-1.274v-8.398c0-.496.171-.918.51-1.274.345-.351.774-.527 1.29-.527h3.602v1.8H3v8.4h3.602v1.8Zm5.398-1.8v-9.45Zm0 0"></path>
      </g>
      <g id="thumb-up-filled">
        <path d="M21 8.398c.45 0 .863.184 1.238.551.375.367.563.785.563 1.25v1.426c0 .133-.012.254-.04.363-.023.11-.062.219-.113.336l-2.972 6.977a1.72 1.72 0 0 1-.653.8c-.296.2-.64.297-1.023.297H8.398c-.5 0-.921-.168-1.273-.511-.352-.34-.523-.77-.523-1.285V9.148c0-.25.046-.484.148-.71.102-.227.234-.422.398-.586l5.028-5.028c.3-.3.664-.492 1.097-.574.434-.082.801-.035 1.102.148.383.22.629.536.738.954.11.414.121.824.035 1.222l-.75 3.824Zm-18 12a1.72 1.72 0 0 1-1.262-.535c-.36-.36-.539-.781-.539-1.261v-8.403c0-.484.18-.902.54-1.261.359-.36.777-.54 1.261-.54.484 0 .902.18 1.262.54.36.359.539.777.539 1.261v8.403c0 .48-.18.902-.54 1.261A1.72 1.72 0 0 1 3 20.398Zm0 0"></path>
      </g>
      <g id="videocam">
        <path d="M5.398 19.2c-.48 0-.902-.18-1.261-.536a1.729 1.729 0 0 1-.535-1.266V6.602c0-.497.175-.922.535-1.274a1.75 1.75 0 0 1 1.261-.527H16.2c.496 0 .918.176 1.274.527.351.352.527.777.527 1.274V10.8l2.824-2.824c.133-.137.297-.168.488-.098.192.07.29.203.29.394v7.45c0 .203-.098.336-.29.402-.19.066-.355.035-.488-.102L18 13.2v4.2c0 .484-.176.906-.527 1.265a1.736 1.736 0 0 1-1.274.535Zm0-1.802H16.2V6.602H5.4Zm0 0V6.602Zm0 0"></path>
      </g>
      <g id="warning-filled">
        <path d="M2.797 20.398a.91.91 0 0 1-.477-.12.86.86 0 0 1-.32-.329.765.765 0 0 1-.113-.449c.008-.168.054-.324.136-.477l9.204-15.347a.727.727 0 0 1 .335-.324c.145-.067.29-.102.438-.102.148 0 .297.035.438.102.14.066.253.171.335.324l9.204 15.347c.082.153.128.309.136.477a.765.765 0 0 1-.113.45.99.99 0 0 1-.324.323.855.855 0 0 1-.473.125Zm9.84-3.253a.86.86 0 0 0 .261-.641.89.89 0 0 0-.253-.64.86.86 0 0 0-.641-.262.89.89 0 0 0-.64.253.86.86 0 0 0-.262.641.89.89 0 0 0 .253.64.86.86 0 0 0 .641.262.89.89 0 0 0 .64-.253Zm0-3.004a.86.86 0 0 0 .261-.641v-3a.872.872 0 0 0-.895-.898.878.878 0 0 0-.64.257.86.86 0 0 0-.261.641v3a.872.872 0 0 0 .895.898.878.878 0 0 0 .64-.257Zm0 0"></path>
      </g>
    </defs>
  </svg>
</cr-iconset>`;
}
else {
    div$1.innerHTML = getTrustedHTML `
<cr-iconset name="cr20" size="20">
  <svg>
    <defs>
      <!--
      Keep these in sorted order by id="".
      -->
      <g id="cloud-off">
        <path
          d="M16 18.125L13.875 16H5C3.88889 16 2.94444 15.6111 2.16667 14.8333C1.38889 14.0556 1 13.1111 1 12C1 10.9444 1.36111 10.0347 2.08333 9.27083C2.80556 8.50694 3.6875 8.09028 4.72917 8.02083C4.77083 7.86805 4.8125 7.72222 4.85417 7.58333C4.90972 7.44444 4.97222 7.30555 5.04167 7.16667L1.875 4L2.9375 2.9375L17.0625 17.0625L16 18.125ZM5 14.5H12.375L6.20833 8.33333C6.15278 8.51389 6.09722 8.70139 6.04167 8.89583C6 9.07639 5.95139 9.25694 5.89583 9.4375L4.83333 9.52083C4.16667 9.57639 3.61111 9.84028 3.16667 10.3125C2.72222 10.7708 2.5 11.3333 2.5 12C2.5 12.6944 2.74306 13.2847 3.22917 13.7708C3.71528 14.2569 4.30556 14.5 5 14.5ZM17.5 15.375L16.3958 14.2917C16.7153 14.125 16.9792 13.8819 17.1875 13.5625C17.3958 13.2431 17.5 12.8889 17.5 12.5C17.5 11.9444 17.3056 11.4722 16.9167 11.0833C16.5278 10.6944 16.0556 10.5 15.5 10.5H14.125L14 9.14583C13.9028 8.11806 13.4722 7.25694 12.7083 6.5625C11.9444 5.85417 11.0417 5.5 10 5.5C9.65278 5.5 9.31944 5.54167 9 5.625C8.69444 5.70833 8.39583 5.82639 8.10417 5.97917L7.02083 4.89583C7.46528 4.61806 7.93056 4.40278 8.41667 4.25C8.91667 4.08333 9.44444 4 10 4C11.4306 4 12.6736 4.48611 13.7292 5.45833C14.7847 6.41667 15.375 7.59722 15.5 9C16.4722 9 17.2986 9.34028 17.9792 10.0208C18.6597 10.7014 19 11.5278 19 12.5C19 13.0972 18.8611 13.6458 18.5833 14.1458C18.3194 14.6458 17.9583 15.0556 17.5 15.375Z">
        </path>
      </g>
      <g id="delete">
        <path
          d="M 5.832031 17.5 C 5.375 17.5 4.984375 17.335938 4.65625 17.011719 C 4.328125 16.683594 4.167969 16.292969 4.167969 15.832031 L 4.167969 5 L 3.332031 5 L 3.332031 3.332031 L 7.5 3.332031 L 7.5 2.5 L 12.5 2.5 L 12.5 3.332031 L 16.667969 3.332031 L 16.667969 5 L 15.832031 5 L 15.832031 15.832031 C 15.832031 16.292969 15.671875 16.683594 15.34375 17.011719 C 15.015625 17.335938 14.625 17.5 14.167969 17.5 Z M 14.167969 5 L 5.832031 5 L 5.832031 15.832031 L 14.167969 15.832031 Z M 7.5 14.167969 L 9.167969 14.167969 L 9.167969 6.667969 L 7.5 6.667969 Z M 10.832031 14.167969 L 12.5 14.167969 L 12.5 6.667969 L 10.832031 6.667969 Z M 5.832031 5 L 5.832031 15.832031 Z M 5.832031 5 ">
        </path>
      </g>
      <g id="domain" viewBox="0 -960 960 960">
        <path d="M96-144v-672h384v144h384v528H96Zm72-72h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm168 456h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm144 456h312v-384H480v80h72v72h-72v80h72v72h-72v80Zm168-232v-72h72v72h-72Zm0 152v-72h72v72h-72Z"></path>
      </g>
      <g id="family-link">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4.6327 8.00094L10.3199 2L16 8.00094L10.1848 16.8673C10.0995 16.9873 10.0071 17.1074 9.90047 17.2199C9.42417 17.7225 8.79147 18 8.11611 18C7.44076 18 6.80806 17.7225 6.33175 17.2199C5.85545 16.7173 5.59242 16.0497 5.59242 15.3371C5.59242 14.977 5.46445 14.647 5.22275 14.3919C4.98104 14.1369 4.66825 14.0019 4.32701 14.0019H4V12.6667H4.32701C5.00237 12.6667 5.63507 12.9442 6.11137 13.4468C6.58768 13.9494 6.85071 14.617 6.85071 15.3296C6.85071 15.6896 6.97867 16.0197 7.22038 16.2747C7.46209 16.5298 7.77488 16.6648 8.11611 16.6648C8.45735 16.6648 8.77014 16.5223 9.01185 16.2747C9.02396 16.2601 9.03607 16.246 9.04808 16.2319C9.08541 16.1883 9.12176 16.1458 9.15403 16.0947L9.55213 15.4946L4.6327 8.00094ZM10.3199 13.9371L6.53802 8.17116L10.3199 4.1814L14.0963 8.17103L10.3199 13.9371Z">
        </path>
      </g>
      <g id="menu">
        <path d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"></path>
      </g>
      <g id="password-manager">
        <path d="M5.833 11.667c.458 0 .847-.16 1.167-.479.333-.333.5-.729.5-1.188s-.167-.847-.5-1.167a1.555 1.555 0 0 0-1.167-.5c-.458 0-.854.167-1.188.5A1.588 1.588 0 0 0 4.166 10c0 .458.16.854.479 1.188.333.319.729.479 1.188.479Zm0 3.333c-1.389 0-2.569-.486-3.542-1.458C1.319 12.569.833 11.389.833 10c0-1.389.486-2.569 1.458-3.542C3.264 5.486 4.444 5 5.833 5c.944 0 1.813.243 2.604.729a4.752 4.752 0 0 1 1.833 1.979h7.23c.458 0 .847.167 1.167.5.333.319.5.708.5 1.167v3.958c0 .458-.167.854-.5 1.188A1.588 1.588 0 0 1 17.5 15h-3.75a1.658 1.658 0 0 1-1.188-.479 1.658 1.658 0 0 1-.479-1.188v-1.042H10.27a4.59 4.59 0 0 1-1.813 2A5.1 5.1 0 0 1 5.833 15Zm3.292-4.375h4.625v2.708H15v-1.042a.592.592 0 0 1 .167-.438.623.623 0 0 1 .458-.188c.181 0 .327.063.438.188a.558.558 0 0 1 .188.438v1.042H17.5V9.375H9.125a3.312 3.312 0 0 0-1.167-1.938 3.203 3.203 0 0 0-2.125-.77 3.21 3.21 0 0 0-2.354.979C2.827 8.298 2.5 9.083 2.5 10s.327 1.702.979 2.354a3.21 3.21 0 0 0 2.354.979c.806 0 1.514-.25 2.125-.75.611-.514 1-1.167 1.167-1.958Z"></path>
      </g>
      
  </svg>
</cr-iconset>

<!-- NOTE: In the common case that the final icon will be 20x20, export the SVG
     at 20px and place it in the section above. -->
<cr-iconset name="cr" size="24">
  <svg>
    <defs>
      <!--
      These icons are copied from Polymer's iron-icons and kept in sorted order.
      -->
      <g id="add">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </g>
      <g id="arrow-back">
        <path
          d="m7.824 13 5.602 5.602L12 20l-8-8 8-8 1.426 1.398L7.824 11H20v2Zm0 0">
        </path>
      </g>
      <g id="arrow-drop-up">
        <path d="M7 14l5-5 5 5z"></path>
      </g>
      <g id="arrow-drop-down">
        <path d="M7 10l5 5 5-5z"></path>
      </g>
      <g id="arrow-forward">
        <path
          d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
        </path>
      </g>
      <g id="arrow-right">
        <path d="M10 7l5 5-5 5z"></path>
      </g>
      <g id="cancel-filled">
        <path
          d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
        </path>
      </g>
      <g id="check">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </g>
      <g id="check-circle" viewBox="0 -960 960 960">
        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path>
      </g>
      <g id="chevron-left">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="chrome-product" viewBox="0 -960 960 960">
        <path d="M336-479q0 60 42 102t102 42q60 0 102-42t42-102q0-60-42-102t-102-42q-60 0-102 42t-42 102Zm144 216q11 0 22.5-.5T525-267L427-99q-144-16-237.5-125T96-479q0-43 9.5-84.5T134-645l160 274q28 51 78 79.5T480-263Zm0-432q-71 0-126.5 42T276-545l-98-170q53-71 132.5-109.5T480-863q95 0 179 45t138 123H480Zm356 72q15 35 21.5 71t6.5 73q0 155-100 260.5T509-96l157-275q14-25 22-52t8-56q0-40-15-77t-41-67h196Z">
        </path>
      </g>
      <g id="close">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="computer">
        <path
          d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z">
        </path>
      </g>
      <g id="edit-filled">
        <path
          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
        </path>
      </g>
      <g id="delete" viewBox="0 -960 960 960">
        <path
          d="M309.37-135.87q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-474.5h-53.5v-83H378.5v-53.5h202.52v53.5h206.11v83h-53.5v474.07q0 35.21-24.26 59.32t-58.74 24.11H309.37Zm341.26-557.5H309.37v474.5h341.26v-474.5ZM379.7-288.24h77.5v-336h-77.5v336Zm123.1 0h77.5v-336h-77.5v336ZM309.37-693.37v474.5-474.5Z">
        </path>
      </g>
      <g id="devices">
        <path
          d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z">
        </path>
      </g>
      <g id="domain">
        <path
          d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
        </path>
      </g>
      <g id="download" viewBox="0 -960 960 960">
        <path d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z"></path>
      </g>
      <g id="draft-filled">
        <path
          d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <!-- source: https://fonts.google.com/icons?selected=Material+Symbols+Outlined:family_link:FILL@0;wght@0;GRAD@0;opsz@24&icon.size=24&icon.color=%23e8eaed -->
      <g id="family-link" viewBox="0 -960 960 960">
        <path
          d="M390-40q-51 0-90.5-30.5T246-149q-6-23-25-37t-43-14q-16 0-30 6.5T124-175l-61-51q21-26 51.5-40t63.5-14q51 0 91 30t54 79q6 23 25 37t42 14q19 0 34-10t26-25l1-2-276-381q-8-11-11.5-23t-3.5-24q0-16 6-30.5t18-26.5l260-255q11-11 26-17t30-6q15 0 30 6t26 17l260 255q12 12 18 26.5t6 30.5q0 12-3.5 24T825-538L500-88q-18 25-48 36.5T390-40Zm110-185 260-360-260-255-259 256 259 359Zm1-308Z"/>
        </path>
      </g>
      <g id="error-filled">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
        </path>
      </g>
      <g id="error">
        <path
          d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
        </path>
      </g>
      <g id="keyboard-arrow-up">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
      </g>
      <g id="keyboard-arrow-down">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </g>
      <g id="chrome-extension-filled">
        <path
          d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z">
        </path>
      </g>
      <g id="fullscreen">
        <path
          d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z">
        </path>
      </g>
      <g id="group-filled">
        <path
          d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z">
        </path>
      </g>
      <g id="help">
        <path
          d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
        </path>
      </g>
      <g id="history">
        <path
          d="M12.945312 22.75 C 10.320312 22.75 8.074219 21.839844 6.207031 20.019531 C 4.335938 18.199219 3.359375 15.972656 3.269531 13.34375 L 5.089844 13.34375 C 5.175781 15.472656 5.972656 17.273438 7.480469 18.742188 C 8.988281 20.210938 10.808594 20.945312 12.945312 20.945312 C 15.179688 20.945312 17.070312 20.164062 18.621094 18.601562 C 20.167969 17.039062 20.945312 15.144531 20.945312 12.910156 C 20.945312 10.714844 20.164062 8.855469 18.601562 7.335938 C 17.039062 5.816406 15.15625 5.054688 12.945312 5.054688 C 11.710938 5.054688 10.554688 5.339844 9.480469 5.902344 C 8.402344 6.46875 7.476562 7.226562 6.699219 8.179688 L 9.585938 8.179688 L 9.585938 9.984375 L 3.648438 9.984375 L 3.648438 4.0625 L 5.453125 4.0625 L 5.453125 6.824219 C 6.386719 5.707031 7.503906 4.828125 8.804688 4.199219 C 10.109375 3.566406 11.488281 3.25 12.945312 3.25 C 14.300781 3.25 15.570312 3.503906 16.761719 4.011719 C 17.949219 4.519531 18.988281 5.214844 19.875 6.089844 C 20.761719 6.964844 21.464844 7.992188 21.976562 9.167969 C 22.492188 10.34375 22.75 11.609375 22.75 12.964844 C 22.75 14.316406 22.492188 15.589844 21.976562 16.777344 C 21.464844 17.964844 20.761719 19.003906 19.875 19.882812 C 18.988281 20.765625 17.949219 21.464844 16.761719 21.976562 C 15.570312 22.492188 14.300781 22.75 12.945312 22.75 Z M 16.269531 17.460938 L 12.117188 13.34375 L 12.117188 7.527344 L 13.921875 7.527344 L 13.921875 12.601562 L 17.550781 16.179688 Z M 16.269531 17.460938">
        </path>
      </g>
      <g id="info-filled">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
        </path>
      </g>
      <g id="info">
        <path
          d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
        </path>
      </g>
      <g id="insert-drive-file">
        <path
          d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <g id="location-on-filled">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
        </path>
      </g>
      <g id="mic-filled">
        <path
          d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
        </path>
      </g>
      <g id="more-vert">
        <path
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
        </path>
      </g>
      <g id="open-in-new" viewBox="0 -960 960 960">
        <path
          d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z">
        </path>
      </g>
      <g id="person">
        <path
          d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="person-filled">
        <path
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="print-filled">
        <path
          d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z">
        </path>
      </g>
      <g id="schedule">
        <path
          d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z">
        </path>
      </g>
      <g id="search">
        <path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
      </g>
      <g id="security">
        <path
          d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z">
        </path>
      </g>
      <!-- The <g> IDs are exposed as global variables in Vulcanized mode, which
        conflicts with the "settings" namespace of MD Settings. Using an "_icon"
        suffix prevents the naming conflict. -->
      <g id="settings-filled">
        <path
          d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
        </path>
      </g>
      <g id="star-filled">
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
        </path>
      </g>
      <g id="sync" viewBox="0 -960 960 960">
        <path
          d="M216-192v-72h74q-45-40-71.5-95.5T192-480q0-101 61-177.5T408-758v75q-63 23-103.5 77.5T264-480q0 48 19.5 89t52.5 70v-63h72v192H216Zm336-10v-75q63-23 103.5-77.5T696-480q0-48-19.5-89T624-639v63h-72v-192h192v72h-74q45 40 71.5 95.5T768-480q0 101-61 177.5T552-202Z">
        </path>
      </g>
      <g id="thumb-down">
        <path
            d="M6 3h11v13l-7 7-1.25-1.25a1.454 1.454 0 0 1-.3-.475c-.067-.2-.1-.392-.1-.575v-.35L9.45 16H3c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3Zm9 2H6l-3 7v2h9l-1.35 5.5L15 15.15V5Zm0 10.15V5v10.15Zm2 .85v-2h3V5h-3V3h5v13h-5Z">
        </path>
      </g>
      <g id="thumb-down-filled">
        <path
            d="M6 3h10v13l-7 7-1.25-1.25a1.336 1.336 0 0 1-.29-.477 1.66 1.66 0 0 1-.108-.574v-.347L8.449 16H3c-.535 0-1-.2-1.398-.602C1.199 15 1 14.535 1 14v-2c0-.117.012-.242.04-.375.022-.133.062-.258.108-.375l3-7.05c.153-.333.403-.618.75-.848A1.957 1.957 0 0 1 6 3Zm12 13V3h4v13Zm0 0">
        </path>
      </g>
      <g id="thumb-up">
        <path
            d="M18 21H7V8l7-7 1.25 1.25c.117.117.208.275.275.475.083.2.125.392.125.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19ZM9 8.85V19 8.85ZM7 8v2H4v9h3v2H2V8h5Z">
        </path>
      </g>
      <g id="thumb-up-filled">
        <path
            d="M18 21H8V8l7-7 1.25 1.25c.117.117.21.273.29.477.073.199.108.39.108.574v.347L15.551 8H21c.535 0 1 .2 1.398.602C22.801 9 23 9.465 23 10v2c0 .117-.012.242-.04.375a1.897 1.897 0 0 1-.108.375l-3 7.05a2.037 2.037 0 0 1-.75.848A1.957 1.957 0 0 1 18 21ZM6 8v13H2V8Zm0 0">
      </g>
      <g id="videocam" viewBox="0 -960 960 960">
        <path
          d="M216-192q-29 0-50.5-21.5T144-264v-432q0-29.7 21.5-50.85Q187-768 216-768h432q29.7 0 50.85 21.15Q720-725.7 720-696v168l144-144v384L720-432v168q0 29-21.15 50.5T648-192H216Zm0-72h432v-432H216v432Zm0 0v-432 432Z">
        </path>
      </g>
      <g id="warning-filled">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </g>
    </defs>
  </svg>
</cr-iconset>`;
}
const iconsets$1 = div$1.querySelectorAll('cr-iconset');
for (const iconset of iconsets$1) {
    document.head.appendChild(iconset);
}

let instance$p = null;
function getCss$m() {
    return instance$p || (instance$p = [...[getCss$p()], css `:host{--cr-icon-button-margin-start:0px;--gradient-start:64px;--horizontal-carousel-button-center:calc(var(--horizontal-carousel-button-size) / 2 + var(--horizontal-carousel-button-margin));--horizontal-carousel-button-margin:14px;--horizontal-carousel-button-size:28px;display:flex;isolation:isolate;position:relative}.carousel-button,.hover-layer{border-radius:50%;display:none;position:absolute;top:50%;transform:translateY(-50%)}.carousel-button{--cr-icon-button-size:var(--horizontal-carousel-button-size);background-color:var(--color-button-background-tonal);margin:0;z-index:1}:host(:hover) .carousel-button{display:block}.hover-layer{background:var(--cr-hover-background-color);height:var(--horizontal-carousel-button-size);width:var(--horizontal-carousel-button-size);pointer-events:none;z-index:2}#backButton,#backHoverLayer{left:var(--horizontal-carousel-button-margin)}#forwardButton,#forwardHoverLayer{right:var(--horizontal-carousel-button-margin)}#backButton:hover~#backHoverLayer,#forwardButton:hover~#forwardHoverLayer{display:block}:host([show-back-button_]:hover) #carouselContainer{-webkit-mask-image:linear-gradient(to right,transparent var(--horizontal-carousel-button-center),black var(--gradient-start))}:host([show-forward-button_]:hover) #carouselContainer{-webkit-mask-image:linear-gradient(to right,black calc(100% - var(--gradient-start)),transparent calc(100% - var(--horizontal-carousel-button-center)))}:host([show-back-button_][show-forward-button_]:hover) #carouselContainer{-webkit-mask-image:linear-gradient(to right,transparent var(--horizontal-carousel-button-center),black var(--gradient-start),black calc(100% - var(--gradient-start)),transparent calc(100% - var(--horizontal-carousel-button-center)))}#carouselContainer{display:flex;flex-wrap:nowrap;min-width:0;padding:2px;overflow-x:hidden}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$g() {
    return html `
<cr-icon-button id="backButton" class="carousel-button"
    @click="${this.onCarouselBackClick_}" iron-icon="cr:chevron-left"
    ?hidden="${!this.showBackButton_}" tabindex="-1">
</cr-icon-button>
<div id="backHoverLayer" class="hover-layer"></div>

<cr-icon-button id="forwardButton" class="carousel-button"
    @click="${this.onCarouselForwardClick_}" iron-icon="cr:chevron-right"
    ?hidden="${!this.showForwardButton_}" tabindex="-1">
</cr-icon-button>
<div id="forwardHoverLayer" class="hover-layer"></div>

<div id="carouselContainer">
  <slot></slot>
</div>`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HorizontalCarouselElement extends CrLitElement {
    static get is() {
        return 'horizontal-carousel';
    }
    static get styles() {
        return getCss$m();
    }
    render() {
        return getHtml$g.bind(this)();
    }
    static get properties() {
        return {
            showForwardButton_: {
                type: Boolean,
                reflect: true,
            },
            showBackButton_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    //============================================================================
    // Properties
    //============================================================================
    resizeObserver_ = null;
    eventTracker_ = new EventTracker();
    #showBackButton__accessor_storage = false;
    get showBackButton_() { return this.#showBackButton__accessor_storage; }
    set showBackButton_(value) { this.#showBackButton__accessor_storage = value; }
    #showForwardButton__accessor_storage = false;
    get showForwardButton_() { return this.#showForwardButton__accessor_storage; }
    set showForwardButton_(value) { this.#showForwardButton__accessor_storage = value; }
    //============================================================================
    // Overridden methods
    //============================================================================
    connectedCallback() {
        super.connectedCallback();
        this.resizeObserver_ = new ResizeObserver(() => {
            this.setShowCarouselButtons_();
        });
        this.resizeObserver_.observe(this.$.carouselContainer);
        this.eventTracker_.add(this, 'keyup', this.onTabFocus_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.resizeObserver_) {
            this.resizeObserver_.unobserve(this.$.carouselContainer);
            this.resizeObserver_ = null;
        }
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onCarouselBackClick_() {
        const targetPosition = this.calculateTargetPosition_(-1);
        this.$.carouselContainer.scrollTo({ left: targetPosition, behavior: 'smooth' });
        this.showBackButton_ = targetPosition > 0;
        this.showForwardButton_ = true;
    }
    onCarouselForwardClick_() {
        const targetPosition = this.calculateTargetPosition_(1);
        this.$.carouselContainer.scrollTo({ left: targetPosition, behavior: 'smooth' });
        this.showForwardButton_ =
            targetPosition + this.$.carouselContainer.clientWidth <
                this.$.carouselContainer.scrollWidth;
        this.showBackButton_ = true;
    }
    onTabFocus_(event) {
        const element = event.target;
        if (event.code === 'Tab') {
            // -2px as offsetLeft includes padding
            this.$.carouselContainer.scrollTo({ left: element.offsetLeft - 2, behavior: 'smooth' });
        }
    }
    //============================================================================
    // Helper methods
    //============================================================================
    setShowCarouselButtons_() {
        if (Math.round(this.$.carouselContainer.scrollLeft) +
            this.$.carouselContainer.clientWidth <
            this.$.carouselContainer.scrollWidth) {
            // On shrinking the window, the forward button should show up again.
            this.showForwardButton_ = true;
        }
        else {
            // On expanding the window, the back and forward buttons should disappear.
            this.showBackButton_ = this.$.carouselContainer.scrollLeft > 0;
            this.showForwardButton_ = false;
        }
    }
    calculateTargetPosition_(direction) {
        const offset = this.$.carouselContainer.clientWidth / 2 * direction;
        const targetPosition = Math.floor(this.$.carouselContainer.scrollLeft + offset);
        return Math.max(0, Math.min(targetPosition, this.$.carouselContainer.scrollWidth -
            this.$.carouselContainer.clientWidth));
    }
}
customElements.define(HorizontalCarouselElement.is, HorizontalCarouselElement);

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Reusable factory that encapsulates singleton management, production Mojo pipe
 * binding, and test mock creation for WebUI browser proxies with precise Mojo
 * pipe types.
 */
// Disable clang-format to avoid mangling of long type list.
// clang-format off
class MojoBrowserProxyFactory {
    handlerRemoteCtor_;
    callbackRouterCtor_;
    bindFn_;
    //clang-format on
    instance_ = null;
    /**
     * @param handlerRemoteCtor Constructor for the production Mojo remote (e.g.,
     *     PageHandlerRemote).
     * @param callbackRouterCtor Constructor for the Mojo callback router (e.g.,
     *     PageCallbackRouter).
     * @param bindFn Callback invoked in production to bind the pipes via the
     *     factory.
     */
    constructor(handlerRemoteCtor_, callbackRouterCtor_, bindFn_) {
        this.handlerRemoteCtor_ = handlerRemoteCtor_;
        this.callbackRouterCtor_ = callbackRouterCtor_;
        this.bindFn_ = bindFn_;
    }
    /**
     * Retrieves or creates the production singleton instance.
     */
    getInstance() {
        if (!this.instance_) {
            const handler = new this.handlerRemoteCtor_();
            const callbackRouter = new this.callbackRouterCtor_();
            this.bindFn_(callbackRouter.$.bindNewPipeAndPassRemote(), handler.$.bindNewPipeAndPassReceiver());
            this.instance_ = { handler, callbackRouter };
        }
        return this.instance_;
    }
    /**
     * Sets the singleton instance directly (used during test setup).
     */
    setInstance(proxy) {
        this.instance_ = proxy;
    }
    /**
     * Creates a test proxy instance wrapped with a mock handler and a real
     * callback router.
     */
    createForTest(handler) {
        const callbackRouter = new this.callbackRouterCtor_();
        return {
            instance: { handler, callbackRouter },
            remote: callbackRouter.$.bindNewPipeAndPassRemote(),
        };
    }
}

// mojo/public/mojom/base/time.mojom-converters.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class JSTimeDataView {
    decoder_;
    version_;
    fieldSpecs_;
    constructor(decoder, version, fieldSpecs) {
        this.decoder_ = decoder;
        this.version_ = version;
        this.fieldSpecs_ = fieldSpecs;
    }
    get msec() {
        const field = this.fieldSpecs_[0];
        return mojo.internal.decodeStructField(this.decoder_, field, this.version_);
    }
}

class JsTimeConverter {
    // Encoding
    msec(date) {
        return date.valueOf();
    }
    // Decoding
    convert(view) {
        return new Date(view.msec);
    }
}

// mojo/public/mojom/base/time.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TimeSpec = { $: {} };
const JSTimeSpec = { $: {} };
const TimeDeltaSpec = { $: {} };
const TimeTicksSpec = { $: {} };
mojo.internal.Struct(TimeSpec.$, 'Time', [
    mojo.internal.StructField('internalValue', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
const converterForJSTime = new JsTimeConverter();
mojo.internal.TypemappedStruct(JSTimeSpec.$, 'JSTime', JSTimeDataView, converterForJSTime, [
    mojo.internal.StructField('msec', 0, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, ((value) => converterForJSTime.msec(value))),
], [[0, 16],]);
mojo.internal.Struct(TimeDeltaSpec.$, 'TimeDelta', [
    mojo.internal.StructField('microseconds', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TimeTicksSpec.$, 'TimeTicks', [
    mojo.internal.StructField('internalValue', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);

// url/mojom/url.mojom-converters.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class UrlDataView {
    decoder_;
    version_;
    fieldSpecs_;
    constructor(decoder, version, fieldSpecs) {
        this.decoder_ = decoder;
        this.version_ = version;
        this.fieldSpecs_ = fieldSpecs;
    }
    get url() {
        const field = this.fieldSpecs_[0];
        return mojo.internal.decodeStructField(this.decoder_, field, this.version_);
    }
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class UrlConverter {
    url(url) {
        return url;
    }
    convert(view) {
        return view.url;
    }
}

// url/mojom/url.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UrlSpec = { $: {} };
const converterForUrl = new UrlConverter();
mojo.internal.TypemappedStruct(UrlSpec.$, 'Url', UrlDataView, converterForUrl, [
    mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, ((value) => converterForUrl.url(value))),
], [[0, 16],]);

// components/history_clusters/public/mojom/history_cluster_types.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AnnotationSpec = { $: mojo.internal.Enum() };
var Annotation;
(function (Annotation) {
    Annotation[Annotation["MIN_VALUE"] = 0] = "MIN_VALUE";
    Annotation[Annotation["MAX_VALUE"] = 1] = "MAX_VALUE";
    Annotation[Annotation["kBookmarked"] = 0] = "kBookmarked";
    Annotation[Annotation["kSearchResultsPage"] = 1] = "kSearchResultsPage";
})(Annotation || (Annotation = {}));
({ $: mojo.internal.Enum() });
var InteractionState;
(function (InteractionState) {
    InteractionState[InteractionState["MIN_VALUE"] = 0] = "MIN_VALUE";
    InteractionState[InteractionState["MAX_VALUE"] = 2] = "MAX_VALUE";
    InteractionState[InteractionState["kDefault"] = 0] = "kDefault";
    InteractionState[InteractionState["kHidden"] = 1] = "kHidden";
    InteractionState[InteractionState["kDone"] = 2] = "kDone";
})(InteractionState || (InteractionState = {}));
const MatchPositionSpec = { $: {} };
const SearchQuerySpec$1 = { $: {} };
const RawVisitDataSpec = { $: {} };
const URLVisitSpec = { $: {} };
const ClusterSpec = { $: {} };
mojo.internal.Struct(MatchPositionSpec.$, 'MatchPosition', [
    mojo.internal.StructField('begin', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('end', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(SearchQuerySpec$1.$, 'SearchQuery', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(RawVisitDataSpec.$, 'RawVisitData', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('visitTime', 8, 0, TimeSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(URLVisitSpec.$, 'URLVisit', [
    mojo.internal.StructField('visitId', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('normalizedUrl', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('urlForDisplay', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('pageTitle', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('titleMatchPositions', 32, 0, mojo.internal.Array(MatchPositionSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('urlForDisplayMatchPositions', 40, 0, mojo.internal.Array(MatchPositionSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('rawVisitData', 48, 0, RawVisitDataSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('duplicates', 56, 0, mojo.internal.Array(RawVisitDataSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('relativeDate', 64, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('annotations', 72, 0, mojo.internal.Array(AnnotationSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isKnownToSync', 80, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('debugInfo', 88, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('hasUrlKeyedImage', 80, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 104],]);
mojo.internal.Struct(ClusterSpec.$, 'Cluster', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('visits', 8, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('label', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tabGroupName', 24, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('labelMatchPositions', 32, 0, mojo.internal.Array(MatchPositionSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('relatedSearches', 40, 0, mojo.internal.Array(SearchQuerySpec$1.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('imageUrl', 48, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fromPersistence', 56, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('debugInfo', 64, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 80],]);

// ui/base/mojom/window_open_disposition.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
({ $: mojo.internal.Enum() });
var WindowOpenDisposition;
(function (WindowOpenDisposition) {
    WindowOpenDisposition[WindowOpenDisposition["MIN_VALUE"] = 0] = "MIN_VALUE";
    WindowOpenDisposition[WindowOpenDisposition["MAX_VALUE"] = 12] = "MAX_VALUE";
    WindowOpenDisposition[WindowOpenDisposition["kUnknown"] = 0] = "kUnknown";
    WindowOpenDisposition[WindowOpenDisposition["kCurrentTab"] = 1] = "kCurrentTab";
    WindowOpenDisposition[WindowOpenDisposition["kSingletonTab"] = 2] = "kSingletonTab";
    WindowOpenDisposition[WindowOpenDisposition["kNewForegroundTab"] = 3] = "kNewForegroundTab";
    WindowOpenDisposition[WindowOpenDisposition["kNewBackgroundTab"] = 4] = "kNewBackgroundTab";
    WindowOpenDisposition[WindowOpenDisposition["kNewPopup"] = 5] = "kNewPopup";
    WindowOpenDisposition[WindowOpenDisposition["kNewWindow"] = 6] = "kNewWindow";
    WindowOpenDisposition[WindowOpenDisposition["kSaveToDisk"] = 7] = "kSaveToDisk";
    WindowOpenDisposition[WindowOpenDisposition["kOffTheRecord"] = 8] = "kOffTheRecord";
    WindowOpenDisposition[WindowOpenDisposition["kIgnoreAction"] = 9] = "kIgnoreAction";
    WindowOpenDisposition[WindowOpenDisposition["kSwitchToTab"] = 10] = "kSwitchToTab";
    WindowOpenDisposition[WindowOpenDisposition["kNewPictureInPicture"] = 11] = "kNewPictureInPicture";
    WindowOpenDisposition[WindowOpenDisposition["kNewSplitView"] = 12] = "kNewSplitView";
})(WindowOpenDisposition || (WindowOpenDisposition = {}));
const ClickModifiersSpec = { $: {} };
mojo.internal.Struct(ClickModifiersSpec.$, 'ClickModifiers', [
    mojo.internal.StructField('middleButton', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('altKey', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('ctrlKey', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('metaKey', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shiftKey', 0, 4, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);

// ui/gfx/geometry/mojom/geometry.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PointSpec = { $: {} };
const PointFSpec = { $: {} };
const Point3FSpec = { $: {} };
const SizeSpec = { $: {} };
const SizeFSpec = { $: {} };
const RectSpec = { $: {} };
const RectFSpec = { $: {} };
const InsetsSpec = { $: {} };
const InsetsFSpec = { $: {} };
const Vector2dSpec = { $: {} };
const Vector2dFSpec = { $: {} };
const Vector3dFSpec = { $: {} };
const QuaternionSpec = { $: {} };
const QuadFSpec = { $: {} };
const AxisTransform2dSpec = { $: {} };
mojo.internal.Struct(PointSpec.$, 'Point', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PointFSpec.$, 'PointF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Point3FSpec.$, 'Point3F', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(SizeSpec.$, 'Size', [
    mojo.internal.StructField('width', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('height', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(SizeFSpec.$, 'SizeF', [
    mojo.internal.StructField('width', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('height', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(RectSpec.$, 'Rect', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('height', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(RectFSpec.$, 'RectF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('width', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('height', 12, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(InsetsSpec.$, 'Insets', [
    mojo.internal.StructField('top', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('left', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('bottom', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('right', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(InsetsFSpec.$, 'InsetsF', [
    mojo.internal.StructField('top', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('left', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('bottom', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('right', 12, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Vector2dSpec.$, 'Vector2d', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Vector2dFSpec.$, 'Vector2dF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Vector3dFSpec.$, 'Vector3dF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(QuaternionSpec.$, 'Quaternion', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 8, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('z', 16, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('w', 24, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(QuadFSpec.$, 'QuadF', [
    mojo.internal.StructField('p1', 0, 0, PointFSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('p2', 8, 0, PointFSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('p3', 16, 0, PointFSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('p4', 24, 0, PointFSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(AxisTransform2dSpec.$, 'AxisTransform2d', [
    mojo.internal.StructField('scale', 0, 0, Vector2dFSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('translation', 8, 0, Vector2dFSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);

// ui/webui/resources/cr_components/history_clusters/history_clusters.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ClusterActionSpec = { $: mojo.internal.Enum() };
var ClusterAction;
(function (ClusterAction) {
    ClusterAction[ClusterAction["MIN_VALUE"] = 0] = "MIN_VALUE";
    ClusterAction[ClusterAction["MAX_VALUE"] = 3] = "MAX_VALUE";
    ClusterAction[ClusterAction["kDeleted"] = 0] = "kDeleted";
    ClusterAction[ClusterAction["kOpenedInTabGroup"] = 1] = "kOpenedInTabGroup";
    ClusterAction[ClusterAction["kRelatedSearchClicked"] = 2] = "kRelatedSearchClicked";
    ClusterAction[ClusterAction["kVisitClicked"] = 3] = "kVisitClicked";
})(ClusterAction || (ClusterAction = {}));
const RelatedSearchActionSpec = { $: mojo.internal.Enum() };
var RelatedSearchAction;
(function (RelatedSearchAction) {
    RelatedSearchAction[RelatedSearchAction["MIN_VALUE"] = 0] = "MIN_VALUE";
    RelatedSearchAction[RelatedSearchAction["MAX_VALUE"] = 0] = "MAX_VALUE";
    RelatedSearchAction[RelatedSearchAction["kClicked"] = 0] = "kClicked";
})(RelatedSearchAction || (RelatedSearchAction = {}));
const VisitActionSpec = { $: mojo.internal.Enum() };
var VisitAction;
(function (VisitAction) {
    VisitAction[VisitAction["MIN_VALUE"] = 0] = "MIN_VALUE";
    VisitAction[VisitAction["MAX_VALUE"] = 2] = "MAX_VALUE";
    VisitAction[VisitAction["kClicked"] = 0] = "kClicked";
    VisitAction[VisitAction["kHidden"] = 1] = "kHidden";
    VisitAction[VisitAction["kDeleted"] = 2] = "kDeleted";
})(VisitAction || (VisitAction = {}));
const VisitTypeSpec = { $: mojo.internal.Enum() };
var VisitType;
(function (VisitType) {
    VisitType[VisitType["MIN_VALUE"] = 0] = "MIN_VALUE";
    VisitType[VisitType["MAX_VALUE"] = 1] = "MAX_VALUE";
    VisitType[VisitType["kSRP"] = 0] = "kSRP";
    VisitType[VisitType["kNonSRP"] = 1] = "kNonSRP";
})(VisitType || (VisitType = {}));
let PageHandlerPendingReceiver$2 = class PageHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'history_clusters.mojom.PageHandler', scope);
    }
};
let PageHandlerRemote$2 = class PageHandlerRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver$2, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    openHistoryUrl(url, clickModifiers) {
        this.proxy.sendMessage(0, PageHandler_OpenHistoryUrl_ParamsSpec.$, null, [
            url,
            clickModifiers
        ], false);
    }
    showContextMenuForSearchbox(query, point) {
        this.proxy.sendMessage(1, PageHandler_ShowContextMenuForSearchbox_ParamsSpec.$, null, [
            query,
            point
        ], false);
    }
    showContextMenuForURL(url, point) {
        this.proxy.sendMessage(2, PageHandler_ShowContextMenuForURL_ParamsSpec.$, null, [
            url,
            point
        ], false);
    }
    showSidePanelUI() {
        this.proxy.sendMessage(3, PageHandler_ShowSidePanelUI_ParamsSpec.$, null, [], false);
    }
    toggleVisibility(visible) {
        return this.proxy.sendMessage(4, PageHandler_ToggleVisibility_ParamsSpec.$, PageHandler_ToggleVisibility_ResponseParamsSpec.$, [
            visible
        ], false);
    }
    startQueryClusters(query, beginTime, recluster) {
        this.proxy.sendMessage(5, PageHandler_StartQueryClusters_ParamsSpec.$, null, [
            query,
            beginTime,
            recluster
        ], false);
    }
    loadMoreClusters(query) {
        this.proxy.sendMessage(6, PageHandler_LoadMoreClusters_ParamsSpec.$, null, [
            query
        ], false);
    }
    hideVisits(visits) {
        return this.proxy.sendMessage(7, PageHandler_HideVisits_ParamsSpec.$, PageHandler_HideVisits_ResponseParamsSpec.$, [
            visits
        ], false);
    }
    removeVisits(visits) {
        return this.proxy.sendMessage(8, PageHandler_RemoveVisits_ParamsSpec.$, PageHandler_RemoveVisits_ResponseParamsSpec.$, [
            visits
        ], false);
    }
    removeVisitByUrlAndTime(url, timestamp) {
        return this.proxy.sendMessage(9, PageHandler_RemoveVisitByUrlAndTime_ParamsSpec.$, PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec.$, [
            url,
            timestamp
        ], false);
    }
    openVisitUrlsInTabGroup(visits, tabGroupName) {
        this.proxy.sendMessage(10, PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec.$, null, [
            visits,
            tabGroupName
        ], false);
    }
    recordVisitAction(visitAction, visitIndex, visitType) {
        this.proxy.sendMessage(11, PageHandler_RecordVisitAction_ParamsSpec.$, null, [
            visitAction,
            visitIndex,
            visitType
        ], false);
    }
    recordRelatedSearchAction(action, visitIndex) {
        this.proxy.sendMessage(12, PageHandler_RecordRelatedSearchAction_ParamsSpec.$, null, [
            action,
            visitIndex
        ], false);
    }
    recordClusterAction(clusterAction, clusterIndex) {
        this.proxy.sendMessage(13, PageHandler_RecordClusterAction_ParamsSpec.$, null, [
            clusterAction,
            clusterIndex
        ], false);
    }
    recordToggledVisibility(visible) {
        this.proxy.sendMessage(14, PageHandler_RecordToggledVisibility_ParamsSpec.$, null, [
            visible
        ], false);
    }
};
let PagePendingReceiver$2 = class PagePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'history_clusters.mojom.Page', scope);
    }
};
let PageRemote$2 = class PageRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver$2, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    onClustersQueryResult(result) {
        this.proxy.sendMessage(0, Page_OnClustersQueryResult_ParamsSpec.$, null, [
            result
        ], false);
    }
    onClusterImageUpdated(clusterIndex, imageUrl) {
        this.proxy.sendMessage(1, Page_OnClusterImageUpdated_ParamsSpec.$, null, [
            clusterIndex,
            imageUrl
        ], false);
    }
    onVisitsHidden(hiddenVisits) {
        this.proxy.sendMessage(2, Page_OnVisitsHidden_ParamsSpec.$, null, [
            hiddenVisits
        ], false);
    }
    onVisitsRemoved(removedVisits) {
        this.proxy.sendMessage(3, Page_OnVisitsRemoved_ParamsSpec.$, null, [
            removedVisits
        ], false);
    }
    onHistoryDeleted() {
        this.proxy.sendMessage(4, Page_OnHistoryDeleted_ParamsSpec.$, null, [], false);
    }
    onQueryChangedByUser(query) {
        this.proxy.sendMessage(5, Page_OnQueryChangedByUser_ParamsSpec.$, null, [
            query
        ], false);
    }
};
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
let PageCallbackRouter$2 = class PageCallbackRouter {
    helper_internal_;
    $;
    router_;
    onClustersQueryResult;
    onClusterImageUpdated;
    onVisitsHidden;
    onVisitsRemoved;
    onHistoryDeleted;
    onQueryChangedByUser;
    onConnectionError;
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote$2);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.onClustersQueryResult =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, Page_OnClustersQueryResult_ParamsSpec.$, null, this.onClustersQueryResult.createReceiverHandler(false /* expectsResponse */), false);
        this.onClusterImageUpdated =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1, Page_OnClusterImageUpdated_ParamsSpec.$, null, this.onClusterImageUpdated.createReceiverHandler(false /* expectsResponse */), false);
        this.onVisitsHidden =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2, Page_OnVisitsHidden_ParamsSpec.$, null, this.onVisitsHidden.createReceiverHandler(false /* expectsResponse */), false);
        this.onVisitsRemoved =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(3, Page_OnVisitsRemoved_ParamsSpec.$, null, this.onVisitsRemoved.createReceiverHandler(false /* expectsResponse */), false);
        this.onHistoryDeleted =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(4, Page_OnHistoryDeleted_ParamsSpec.$, null, this.onHistoryDeleted.createReceiverHandler(false /* expectsResponse */), false);
        this.onQueryChangedByUser =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(5, Page_OnQueryChangedByUser_ParamsSpec.$, null, this.onQueryChangedByUser.createReceiverHandler(false /* expectsResponse */), false);
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id) {
        return this.router_.removeListener(id);
    }
};
let PageHandlerFactoryPendingReceiver$1 = class PageHandlerFactoryPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'history_clusters.mojom.PageHandlerFactory', scope);
    }
};
let PageHandlerFactoryRemote$1 = class PageHandlerFactoryRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerFactoryPendingReceiver$1, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    createPageHandler(page, handler) {
        this.proxy.sendMessage(0, PageHandlerFactory_CreatePageHandler_ParamsSpec$1.$, null, [
            page,
            handler
        ], false);
    }
};
let PageHandlerFactory$1 = class PageHandlerFactory {
    static get $interfaceName() {
        return "history_clusters.mojom.PageHandlerFactory";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PageHandlerFactoryRemote$1;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
};
const QueryResultSpec = { $: {} };
const PageHandler_OpenHistoryUrl_ParamsSpec = { $: {} };
const PageHandler_ShowContextMenuForSearchbox_ParamsSpec = { $: {} };
const PageHandler_ShowContextMenuForURL_ParamsSpec = { $: {} };
const PageHandler_ShowSidePanelUI_ParamsSpec = { $: {} };
const PageHandler_ToggleVisibility_ParamsSpec = { $: {} };
const PageHandler_ToggleVisibility_ResponseParamsSpec = { $: {} };
const PageHandler_StartQueryClusters_ParamsSpec = { $: {} };
const PageHandler_LoadMoreClusters_ParamsSpec = { $: {} };
const PageHandler_HideVisits_ParamsSpec = { $: {} };
const PageHandler_HideVisits_ResponseParamsSpec = { $: {} };
const PageHandler_RemoveVisits_ParamsSpec = { $: {} };
const PageHandler_RemoveVisits_ResponseParamsSpec = { $: {} };
const PageHandler_RemoveVisitByUrlAndTime_ParamsSpec = { $: {} };
const PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec = { $: {} };
const PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec = { $: {} };
const PageHandler_RecordVisitAction_ParamsSpec = { $: {} };
const PageHandler_RecordRelatedSearchAction_ParamsSpec = { $: {} };
const PageHandler_RecordClusterAction_ParamsSpec = { $: {} };
const PageHandler_RecordToggledVisibility_ParamsSpec = { $: {} };
const Page_OnClustersQueryResult_ParamsSpec = { $: {} };
const Page_OnClusterImageUpdated_ParamsSpec = { $: {} };
const Page_OnVisitsHidden_ParamsSpec = { $: {} };
const Page_OnVisitsRemoved_ParamsSpec = { $: {} };
const Page_OnHistoryDeleted_ParamsSpec = { $: {} };
const Page_OnQueryChangedByUser_ParamsSpec = { $: {} };
const PageHandlerFactory_CreatePageHandler_ParamsSpec$1 = { $: {} };
mojo.internal.Struct(QueryResultSpec.$, 'QueryResult', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('clusters', 8, 0, mojo.internal.Array(ClusterSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('canLoadMore', 16, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isContinuation', 16, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_OpenHistoryUrl_ParamsSpec.$, 'PageHandler_OpenHistoryUrl_Params', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('clickModifiers', 8, 0, ClickModifiersSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_ShowContextMenuForSearchbox_ParamsSpec.$, 'PageHandler_ShowContextMenuForSearchbox_Params', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('point', 8, 0, PointSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_ShowContextMenuForURL_ParamsSpec.$, 'PageHandler_ShowContextMenuForURL_Params', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('point', 8, 0, PointSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_ShowSidePanelUI_ParamsSpec.$, 'PageHandler_ShowSidePanelUI_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_ToggleVisibility_ParamsSpec.$, 'PageHandler_ToggleVisibility_Params', [
    mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ToggleVisibility_ResponseParamsSpec.$, 'PageHandler_ToggleVisibility_ResponseParams', [
    mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_StartQueryClusters_ParamsSpec.$, 'PageHandler_StartQueryClusters_Params', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('beginTime', 8, 0, TimeSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('recluster', 16, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_LoadMoreClusters_ParamsSpec.$, 'PageHandler_LoadMoreClusters_Params', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_HideVisits_ParamsSpec.$, 'PageHandler_HideVisits_Params', [
    mojo.internal.StructField('visits', 0, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_HideVisits_ResponseParamsSpec.$, 'PageHandler_HideVisits_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RemoveVisits_ParamsSpec.$, 'PageHandler_RemoveVisits_Params', [
    mojo.internal.StructField('visits', 0, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RemoveVisits_ResponseParamsSpec.$, 'PageHandler_RemoveVisits_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RemoveVisitByUrlAndTime_ParamsSpec.$, 'PageHandler_RemoveVisitByUrlAndTime_Params', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('timestamp', 8, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec.$, 'PageHandler_RemoveVisitByUrlAndTime_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec.$, 'PageHandler_OpenVisitUrlsInTabGroup_Params', [
    mojo.internal.StructField('visits', 0, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tabGroupName', 8, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_RecordVisitAction_ParamsSpec.$, 'PageHandler_RecordVisitAction_Params', [
    mojo.internal.StructField('visitAction', 0, 0, VisitActionSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('visitIndex', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('visitType', 8, 0, VisitTypeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_RecordRelatedSearchAction_ParamsSpec.$, 'PageHandler_RecordRelatedSearchAction_Params', [
    mojo.internal.StructField('action', 0, 0, RelatedSearchActionSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('visitIndex', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordClusterAction_ParamsSpec.$, 'PageHandler_RecordClusterAction_Params', [
    mojo.internal.StructField('clusterAction', 0, 0, ClusterActionSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('clusterIndex', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordToggledVisibility_ParamsSpec.$, 'PageHandler_RecordToggledVisibility_Params', [
    mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnClustersQueryResult_ParamsSpec.$, 'Page_OnClustersQueryResult_Params', [
    mojo.internal.StructField('result', 0, 0, QueryResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnClusterImageUpdated_ParamsSpec.$, 'Page_OnClusterImageUpdated_Params', [
    mojo.internal.StructField('clusterIndex', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('imageUrl', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_OnVisitsHidden_ParamsSpec.$, 'Page_OnVisitsHidden_Params', [
    mojo.internal.StructField('hiddenVisits', 0, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnVisitsRemoved_ParamsSpec.$, 'Page_OnVisitsRemoved_Params', [
    mojo.internal.StructField('removedVisits', 0, 0, mojo.internal.Array(URLVisitSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnHistoryDeleted_ParamsSpec.$, 'Page_OnHistoryDeleted_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_OnQueryChangedByUser_ParamsSpec.$, 'Page_OnQueryChangedByUser_Params', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandlerFactory_CreatePageHandler_ParamsSpec$1.$, 'PageHandlerFactory_CreatePageHandler_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote$2), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(PageHandlerPendingReceiver$2), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
const browserProxyFactory$1 = new MojoBrowserProxyFactory(PageHandlerRemote$2, PageCallbackRouter$2, (remote, receiver) => PageHandlerFactory$1.getRemote().createPageHandler(remote, receiver));

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MetricsProxyImpl {
    recordClusterAction(action, index) {
        browserProxyFactory$1.getInstance().handler.recordClusterAction(action, index);
    }
    recordRelatedSearchAction(action, index) {
        browserProxyFactory$1.getInstance().handler.recordRelatedSearchAction(action, index);
    }
    recordToggledVisibility(visible) {
        browserProxyFactory$1.getInstance().handler.recordToggledVisibility(visible);
    }
    recordVisitAction(action, index, type) {
        browserProxyFactory$1.getInstance().handler.recordVisitAction(action, index, type);
    }
    static getInstance() {
        return instance$o || (instance$o = new MetricsProxyImpl());
    }
    static setInstance(obj) {
        instance$o = obj;
    }
    /**
     * Returns the VisitType based on whether this is a visit to the default
     * search provider's results page.
     */
    static getVisitType(visit) {
        return visit.annotations.includes(Annotation.kSearchResultsPage) ?
            VisitType.kSRP :
            VisitType.kNonSRP;
    }
}
let instance$o = null;

let instance$n = null;
function getCss$l() {
    return instance$n || (instance$n = [...[getCss$p()], css `:host{--border-color:var(--color-suggestion-chip-border,var(--cr-fallback-color-tonal-outline));--icon-color:var(--color-suggestion-chip-icon,var(--cr-fallback-color-primary));--pill-padding-text:12px;--pill-padding-icon:8px;--pill-height:28px;display:block;min-width:0}a{align-items:center;color:inherit;display:flex;outline:none;text-decoration:none;overflow:hidden;position:relative}:host-context(.focus-outline-visible) a:focus{--pill-padding-icon:9px;--pill-padding-text:13px;border:none;box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:0}span{position:relative;z-index:1}.icon{--cr-icon-button-margin-start:0;--cr-icon-color:var(--icon-color);--cr-icon-image:url(chrome://resources/images/icon_search.svg);--cr-icon-ripple-margin:0;--cr-icon-ripple-size:16px;--cr-icon-size:16px}cr-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}#hover-layer{display:none}:host(:hover) #hover-layer{background:var(--cr-hover-background-color);content:'';display:block;inset:0;pointer-events:none;position:absolute}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$f() {
    return html `
<a id="searchQueryLink" class="pill pill-icon-start"
    href="${this.searchQuery?.url || nothing}"
    @click="${this.onClick_}" @auxclick="${this.onAuxclick_}"
    @keydown="${this.onKeydown_}">
  <div id="hover-layer"></div>
  <span class="icon cr-icon"></span>
  <span class="truncate">${this.searchQuery?.query || ''}</span>
</a>`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SearchQueryElementBase = CrRippleMixin(CrLitElement);
class SearchQueryElement extends SearchQueryElementBase {
    static get is() {
        return 'search-query';
    }
    static get styles() {
        return getCss$l();
    }
    render() {
        return getHtml$f.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The index of the search query pill.
             */
            index: { type: Number },
            /**
             * The search query to display.
             */
            searchQuery: { type: Object },
        };
    }
    #index_accessor_storage = -1;
    //============================================================================
    // Properties
    //============================================================================
    get index() { return this.#index_accessor_storage; } // Initialized to an invalid value.
    set index(value) { this.#index_accessor_storage = value; }
    #searchQuery_accessor_storage;
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    //============================================================================
    // Event handlers
    //============================================================================
    firstUpdated() {
        this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
        this.addEventListener('pointercancel', this.onPointerCancel_.bind(this));
    }
    onAuxclick_() {
        MetricsProxyImpl.getInstance().recordRelatedSearchAction(RelatedSearchAction.kClicked, this.index);
        // Notify the parent <history-cluster> element of this event.
        this.fire('related-search-clicked');
    }
    onClick_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        // To record metrics.
        this.onAuxclick_();
        this.openUrl_(event);
    }
    onKeydown_(e) {
        // Disable ripple on Space.
        this.noink = e.key === ' ';
        // To be consistent with <history-list>, only handle Enter, and not Space.
        if (e.key !== 'Enter') {
            return;
        }
        this.getRipple().uiDownAction();
        // To record metrics.
        this.onAuxclick_();
        this.openUrl_(e);
        setTimeout(() => this.getRipple().uiUpAction(), 100);
    }
    onPointerDown_() {
        // Ensure ripple is visible.
        this.noink = false;
        this.ensureRipple();
    }
    onPointerCancel_() {
        this.getRipple().clear();
    }
    openUrl_(event) {
        assert(this.searchQuery);
        browserProxyFactory$1.getInstance().handler.openHistoryUrl(this.searchQuery.url, {
            middleButton: false,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
            shiftKey: event.shiftKey,
        });
    }
    // Overridden from CrRippleMixin
    createRipple() {
        this.rippleContainer = this.$.searchQueryLink;
        const ripple = super.createRipple();
        return ripple;
    }
}
customElements.define(SearchQueryElement.is, SearchQueryElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview <cr-auto-img> is a specialized <img> that facilitates embedding
 * images into WebUIs via its auto-src attribute. <cr-auto-img> automatically
 * determines if the image is local (e.g. chrome://) or external (e.g.
 * https://), and embeds the image directly or via the chrome://image data
 * source accordingly. Usage:
 *
 *   1. In C++ register |SanitizedImageSource| for your WebUI.
 *
 *   2. In HTML instantiate
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png">
 *
 *      If your image URL points to Google Photos storage, meaning it needs an
 *      auth token, you can use the is-google-photos attribute as follows:
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          is-google-photos>
 *
 *      If you want the image to reset to an empty state when auto-src changes
 *      and the new image is still loading, set the clear-src attribute:
 *
 *      <img is="cr-auto-img" auto-src="[[calculateSrc()]]" clear-src>
 *
 *      If you want your image to be always encoded as a static image (even if
 *      the source image is animated), set the static-encode attribute:
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          static-encode>
 *
 *      Static images are encoded as PNG by default. If you want your image to
 *      be encoded as a Webp image, set the encode-type attribute to "webp".
 *
 *      <img is="cr-auto-img" auto-src="https://foo.com/bar.png"
 *          static-encode encode-type="webp">
 *
 * NOTE: Since <cr-auto-img> may use the chrome://image data source some images
 * may be transcoded to PNG.
 */
const AUTO_SRC = 'auto-src';
const CLEAR_SRC = 'clear-src';
const IS_GOOGLE_PHOTOS = 'is-google-photos';
const STATIC_ENCODE = 'static-encode';
const ENCODE_TYPE = 'encode-type';
class CrAutoImgElement extends HTMLImageElement {
    static get observedAttributes() {
        return [AUTO_SRC, IS_GOOGLE_PHOTOS, STATIC_ENCODE, ENCODE_TYPE];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name !== AUTO_SRC && name !== IS_GOOGLE_PHOTOS &&
            name !== STATIC_ENCODE && name !== ENCODE_TYPE) {
            return;
        }
        // Changes to |IS_GOOGLE_PHOTOS| are only interesting when the attribute is
        // being added or removed.
        if (name === IS_GOOGLE_PHOTOS &&
            ((oldValue === null) === (newValue === null))) {
            return;
        }
        if (this.hasAttribute(CLEAR_SRC)) {
            // Remove the src attribute so that the old image is not shown while the
            // new one is loading.
            this.removeAttribute('src');
        }
        let url = null;
        try {
            url = new URL(this.getAttribute(AUTO_SRC) || '');
        }
        catch (_) {
        }
        if (!url || url.protocol === 'chrome-untrusted:' ||
            url.protocol === 'data:') {
            // Loading chrome-untrusted:// directly kills the renderer process.
            // Loading chrome-untrusted:// via the chrome://image data source
            // results in a broken image. Data URLs are not supported.
            this.removeAttribute('src');
            assert(!url || url.protocol !== 'data:', 'Loading data URLs is not supported; use a standard <img> ' +
                'element instead');
            return;
        }
        if (url.protocol === 'chrome:') {
            this.src = url.href;
            return;
        }
        if (!this.hasAttribute(IS_GOOGLE_PHOTOS) &&
            !this.hasAttribute(STATIC_ENCODE) && !this.hasAttribute(ENCODE_TYPE)) {
            this.src = 'chrome://image?' + url.href;
            return;
        }
        this.src = `chrome://image?url=${encodeURIComponent(url.href)}`;
        if (this.hasAttribute(IS_GOOGLE_PHOTOS)) {
            this.src += `&isGooglePhotos=true`;
        }
        if (this.hasAttribute(STATIC_ENCODE)) {
            this.src += `&staticEncode=true`;
        }
        if (this.hasAttribute(ENCODE_TYPE)) {
            this.src += `&encodeType=${this.getAttribute(ENCODE_TYPE)}`;
        }
    }
    set autoSrc(src) {
        this.setAttribute(AUTO_SRC, src);
    }
    get autoSrc() {
        return this.getAttribute(AUTO_SRC) || '';
    }
    set clearSrc(_) {
        this.setAttribute(CLEAR_SRC, '');
    }
    get clearSrc() {
        return this.getAttribute(CLEAR_SRC) || '';
    }
    set isGooglePhotos(enabled) {
        if (enabled) {
            this.setAttribute(IS_GOOGLE_PHOTOS, '');
        }
        else {
            this.removeAttribute(IS_GOOGLE_PHOTOS);
        }
    }
    get isGooglePhotos() {
        return this.hasAttribute(IS_GOOGLE_PHOTOS);
    }
    set staticEncode(enabled) {
        if (enabled) {
            this.setAttribute(STATIC_ENCODE, '');
        }
        else {
            this.removeAttribute(STATIC_ENCODE);
        }
    }
    get staticEncode() {
        return this.hasAttribute(STATIC_ENCODE);
    }
    set encodeType(type) {
        if (type) {
            this.setAttribute(ENCODE_TYPE, type);
        }
        else {
            this.removeAttribute(ENCODE_TYPE);
        }
    }
    get encodeType() {
        return this.getAttribute(ENCODE_TYPE) || '';
    }
}
customElements.define('cr-auto-img', CrAutoImgElement, { extends: 'img' });

// components/page_image_service/mojom/page_image_service.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ClientIdSpec = { $: mojo.internal.Enum() };
var ClientId;
(function (ClientId) {
    ClientId[ClientId["MIN_VALUE"] = 0] = "MIN_VALUE";
    ClientId[ClientId["MAX_VALUE"] = 7] = "MAX_VALUE";
    ClientId[ClientId["Journeys"] = 0] = "Journeys";
    ClientId[ClientId["JourneysSidePanel"] = 1] = "JourneysSidePanel";
    ClientId[ClientId["NtpRealbox"] = 2] = "NtpRealbox";
    ClientId[ClientId["NtpQuests"] = 3] = "NtpQuests";
    ClientId[ClientId["Bookmarks"] = 4] = "Bookmarks";
    ClientId[ClientId["NtpTabResumption"] = 5] = "NtpTabResumption";
    ClientId[ClientId["HistoryEmbeddings"] = 6] = "HistoryEmbeddings";
    ClientId[ClientId["ContextHubTopics"] = 7] = "ContextHubTopics";
})(ClientId || (ClientId = {}));
class PageImageServiceHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'page_image_service.mojom.PageImageServiceHandler', scope);
    }
}
class PageImageServiceHandlerRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageImageServiceHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    getPageImageUrl(clientId, pageUrl, options) {
        return this.proxy.sendMessage(0, PageImageServiceHandler_GetPageImageUrl_ParamsSpec.$, PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec.$, [
            clientId,
            pageUrl,
            options
        ], false);
    }
}
class PageImageServiceHandler {
    static get $interfaceName() {
        return "page_image_service.mojom.PageImageServiceHandler";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PageImageServiceHandlerRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
const OptionsSpec = { $: {} };
const ImageResultSpec = { $: {} };
const PageImageServiceHandler_GetPageImageUrl_ParamsSpec = { $: {} };
const PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec = { $: {} };
mojo.internal.Struct(OptionsSpec.$, 'Options', [
    mojo.internal.StructField('suggestImages', 0, 0, mojo.internal.Bool, true, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('optimizationGuideImages', 0, 1, mojo.internal.Bool, true, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ImageResultSpec.$, 'ImageResult', [
    mojo.internal.StructField('imageUrl', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageImageServiceHandler_GetPageImageUrl_ParamsSpec.$, 'PageImageServiceHandler_GetPageImageUrl_Params', [
    mojo.internal.StructField('clientId', 0, 0, ClientIdSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('pageUrl', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('options', 16, 0, OptionsSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec.$, 'PageImageServiceHandler_GetPageImageUrl_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, ImageResultSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageImageServiceBrowserProxy {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        return instance$m ||
            (instance$m = new PageImageServiceBrowserProxy(PageImageServiceHandler.getRemote()));
    }
    static setInstance(obj) {
        instance$m = obj;
    }
}
let instance$m = null;

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return The scale factors supported by this platform for webui resources.
 */
function getSupportedScaleFactors() {
    const supportedScaleFactors = [];
    if (!isIOS) {
        // This matches the code in ResourceBundle::InitSharedInstance() that
        // supports SCALE_FACTOR_100P on all non-iOS platforms.
        supportedScaleFactors.push(1);
    }
    if (!isIOS && !isAndroid) {
        // All desktop platforms support zooming which also updates the renderer's
        // device scale factors (a.k.a devicePixelRatio), and these platforms have
        // high DPI assets for 2x.  Let the renderer pick the closest image for
        // the current device scale factor.
        supportedScaleFactors.push(2);
    }
    else {
        // For other platforms that use fixed device scale factor, use
        // the window's device pixel ratio.
        // TODO(oshima): Investigate corresponding to
        // ResourceBundle::InitSharedInstance() more closely.
        supportedScaleFactors.push(window.devicePixelRatio);
    }
    return supportedScaleFactors;
}
/**
 * Generates a CSS url string.
 * @param s The URL to generate the CSS url for.
 * @return The CSS url string.
 */
function getUrlForCss(s) {
    // http://www.w3.org/TR/css3-values/#uris
    // Parentheses, commas, whitespace characters, single quotes (') and double
    // quotes (") appearing in a URI must be escaped with a backslash
    const s2 = s.replace(/(\(|\)|\,|\s|\'|\"|\\)/g, '\\$1');
    return `url("${s2}")`;
}
/**
 * Generates a CSS image-set for a chrome:// url.
 * An entry in the image set is added for each of getSupportedScaleFactors().
 * The scale-factor-specific url is generated by replacing the first instance
 * of 'scalefactor' in |path| with the numeric scale factor.
 *
 * @param path The URL to generate an image set for.
 *     'scalefactor' should be a substring of |path|.
 * @return The CSS image-set.
 */
function getImageSet(path) {
    const supportedScaleFactors = getSupportedScaleFactors();
    const replaceStartIndex = path.indexOf('SCALEFACTOR');
    if (replaceStartIndex < 0) {
        return getUrlForCss(path);
    }
    let s = '';
    for (let i = 0; i < supportedScaleFactors.length; ++i) {
        const scaleFactor = supportedScaleFactors[i];
        const pathWithScaleFactor = path.substr(0, replaceStartIndex) +
            scaleFactor + path.substr(replaceStartIndex + 'scalefactor'.length);
        s += getUrlForCss(pathWithScaleFactor) + ' ' + scaleFactor + 'x';
        if (i !== supportedScaleFactors.length - 1) {
            s += ', ';
        }
    }
    return 'image-set(' + s + ')';
}
function getBaseFaviconUrl() {
    const baseUrl = window.location.protocol === 'chrome-extension:' ?
        '/_favicon/' :
        'chrome://favicon2/';
    const faviconUrl = new URL(baseUrl, window.location.origin);
    faviconUrl.searchParams.set('size', '16');
    faviconUrl.searchParams.set('scaleFactor', 'SCALEFACTORx');
    return faviconUrl;
}
function getDefaultFaviconUrlParams() {
    return {
        isSyncedUrlForHistoryUi: false,
        remoteIconUrlForUma: '',
        size: 16,
        forceLightMode: false,
        fallbackToHost: true,
        forceEmptyDefaultFavicon: false,
        scaleFactor: '',
    };
}
/**
 * Creates a favicon request URL based on the given parameters.
 *
 * @param url URL of the original page
 * @param optionalParams Options object that specifies additional parameters to
 *     configure the favicon request URL that's constructed by this function.
 *
 * @return URL for the favicon request.
 */
function getFaviconUrl(url, optionalParams) {
    const params = Object.assign(getDefaultFaviconUrlParams(), optionalParams);
    // Note: URL param keys used below must match those in the description of
    // chrome://favicon2 format in components/favicon_base/favicon_url_parser.h.
    const faviconUrl = getBaseFaviconUrl();
    faviconUrl.searchParams.set('pageUrl', url);
    faviconUrl.searchParams.set('size', params.size.toString());
    // TODO(dbeam): use the presence of 'allowGoogleServerFallback' to
    // indicate true, otherwise false.
    const fallback = params.isSyncedUrlForHistoryUi ? '1' : '0';
    faviconUrl.searchParams.set('allowGoogleServerFallback', fallback);
    if (params.isSyncedUrlForHistoryUi) {
        faviconUrl.searchParams.set('iconUrl', params.remoteIconUrlForUma);
    }
    if (params.forceLightMode) {
        faviconUrl.searchParams.set('forceLightMode', 'true');
    }
    if (!params.fallbackToHost) {
        faviconUrl.searchParams.set('fallbackToHost', '0');
    }
    if (params.forceEmptyDefaultFavicon) {
        faviconUrl.searchParams.set('forceEmptyDefaultFavicon', '1');
    }
    if (params.scaleFactor) {
        faviconUrl.searchParams.set('scaleFactor', params.scaleFactor);
    }
    return faviconUrl.toString();
}
/**
 * Creates a CSS image-set for a favicon request based on a page URL.
 *
 * @param url URL of the original page
 * @param isSyncedUrlForHistoryUi Should be set to true only if the
 *     caller is an UI aimed at displaying user history, and the requested url
 *     is known to be present in Chrome sync data.
 * @param remoteIconUrlForUma In case the entry is contained in sync
 *     data, we can pass the associated icon url.
 * @param size The favicon size.
 * @param forceLightMode Flag to force the service to show the light
 *     mode version of the default favicon.
 * @param fallbackToHost To allow for disabling the best match fallback
 *     behavior.
 * @param forceEmptyDefaultFavicon Flag to force the service to return an empty
 *     image as the default favicon.
 * @param scaleFactor The scale factor for the requested favicon (e.g. '2x').
 *
 * @return image-set for the favicon.
 */
function getFaviconForPageURL(url, isSyncedUrlForHistoryUi, remoteIconUrlForUma = '', size = 16, forceLightMode = false, fallbackToHost = true, forceEmptyDefaultFavicon = false, scaleFactor = '') {
    return getImageSet(getFaviconUrl(url, {
        isSyncedUrlForHistoryUi,
        remoteIconUrlForUma,
        size,
        forceLightMode,
        fallbackToHost,
        forceEmptyDefaultFavicon,
        scaleFactor,
    }));
}

let instance$l = null;
function getCss$k() {
    return instance$l || (instance$l = [...[], css `:host{align-items:center;background-color:var(--entity-image-background-color);background-position:center;background-repeat:no-repeat;border-radius:8px;display:flex;flex-shrink:0;height:40px;justify-content:center;margin-inline:0 16px;width:40px}:host([in-side-panel_]){margin-inline:8px 16px}#page-image{border-radius:5px;max-height:100%;max-width:100%}:host([is-image-cover_]) #page-image{height:100%;object-fit:cover;width:100%}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$e() {
    return html `
${this.imageUrl_ ? html `
  <img id="page-image" is="cr-auto-img" auto-src="${this.imageUrl_}"></img>
` : ''}
`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file provides a custom element displaying a page favicon.
 */
/**
 * TODO(tommycli): This element should be renamed to reflect the reality that
 * it's used to both render the visit's "important image" if it exists, and
 * falls back to the favicon if it doesn't exist.
 */
class PageFaviconElement extends CrLitElement {
    static get is() {
        return 'page-favicon';
    }
    static get styles() {
        return getCss$k();
    }
    render() {
        return getHtml$e.bind(this)();
    }
    static get properties() {
        return {
            /**
             * Whether the cluster is in the side panel.
             */
            inSidePanel_: {
                type: Boolean,
                reflect: true,
            },
            /**
             * The URL for which the favicon is shown.
             */
            url: { type: String },
            /**
             * Whether this visit is known to sync already. Used for the purpose of
             * fetching higher quality favicons in that case.
             */
            isKnownToSync: { type: Boolean },
            /**
             * The URL of the representative image for the page. Not every page has
             * this defined, in which case we fallback to the favicon.
             * Mojo Url type is type mapped to a TS string.
             */
            imageUrl_: { type: String },
            isImageCover_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #isKnownToSync_accessor_storage = false;
    //============================================================================
    // Properties
    //============================================================================
    get isKnownToSync() { return this.#isKnownToSync_accessor_storage; }
    set isKnownToSync(value) { this.#isKnownToSync_accessor_storage = value; }
    #url_accessor_storage = null;
    get url() { return this.#url_accessor_storage; }
    set url(value) { this.#url_accessor_storage = value; }
    #imageUrl__accessor_storage = null;
    get imageUrl_() { return this.#imageUrl__accessor_storage; }
    set imageUrl_(value) { this.#imageUrl__accessor_storage = value; }
    #inSidePanel__accessor_storage = loadTimeData.getBoolean('inSidePanel');
    get inSidePanel_() { return this.#inSidePanel__accessor_storage; }
    set inSidePanel_(value) { this.#inSidePanel__accessor_storage = value; }
    #isImageCover__accessor_storage = loadTimeData.getBoolean('isHistoryClustersImageCover');
    get isImageCover_() { return this.#isImageCover__accessor_storage; }
    set isImageCover_(value) { this.#isImageCover__accessor_storage = value; }
    //============================================================================
    // Helper methods
    //============================================================================
    getImageUrlForTesting() {
        return this.imageUrl_;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('url') ||
            changedProperties.has('imageUrl_')) {
            if (this.imageUrl_ || !this.url) {
                // Pages with a pre-set image URL or no favicon URL don't show the
                // favicon.
                this.style.setProperty('background-image', '');
            }
            else {
                this.style.setProperty('background-image', getFaviconForPageURL(this.url, this.isKnownToSync, '', 
                /* --favicon-size */ 16));
            }
        }
        if (changedProperties.has('url') ||
            changedProperties.has('isKnownToSync')) {
            this.urlAndIsKnownToSyncChanged_();
        }
    }
    async urlAndIsKnownToSyncChanged_() {
        if (!this.url || !this.isKnownToSync ||
            !loadTimeData.getBoolean('isHistoryClustersImagesEnabled')) {
            this.imageUrl_ = null;
            return;
        }
        // Fetch the representative image for this page, if possible.
        const { result } = await PageImageServiceBrowserProxy.getInstance()
            .handler.getPageImageUrl(ClientId.Journeys, this.url, { suggestImages: true, optimizationGuideImages: true });
        if (result) {
            this.imageUrl_ = result.imageUrl;
        }
        else {
            // We must reset imageUrl_ to null, because sometimes the Virtual DOM will
            // reuse the same element for the infinite scrolling list.
            this.imageUrl_ = null;
        }
    }
}
customElements.define(PageFaviconElement.is, PageFaviconElement);

let instance$k = null;
function getCss$j() {
    return instance$k || (instance$k = [...[getCss$p()], css `:host{align-items:center;cursor:pointer;display:flex;min-height:48px}:host(:hover){background-color:var(--cr-hover-background-color)}.suffix-icons{display:flex;opacity:0;position:absolute;--cr-icon-button-margin-end:8px}:host(:hover) .suffix-icons,.suffix-icons:focus-within{opacity:1;position:static}.hide-visit-icon{--cr-icon-image:url(chrome://resources/cr_components/history_clusters/hide_source_gm_grey_24dp.svg);--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px}.icon-more-vert{--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:21px;--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px}:host([in-side-panel_]) .icon-more-vert{--cr-icon-button-margin-end:8px}#header{align-items:center;display:flex;flex-grow:1;justify-content:space-between;min-width:0;padding-inline-start:var(--cluster-padding-horizontal)}:host([in-side-panel_]) #header{padding-inline-start:8px}a{color:inherit;text-decoration:none}#link-container{align-items:center;display:flex;margin-inline-end:var(--cluster-padding-horizontal);min-width:0;outline:none;padding-inline:2px}:host(:hover) #link-container{margin-inline-end:0}:host([in-side-panel_]) #icon{background-color:var(--color-list-item-url-favicon-background,var(--cr-fallback-color-neutral-container));height:40px;width:40px}:host-context(.focus-outline-visible) #link-container:focus{box-shadow:0 0 0 2px var(--cr-focus-outline-color)}#page-info{display:flex;flex-direction:column;min-width:0;gap:4px}#title-and-annotations{align-items:center;display:flex;line-height:2}.annotation{align-items:center;background-color:var(--annotation-background-color);border-radius:4px;color:var(--annotation-text-color);display:inline-flex;flex-shrink:0;font-weight:500;margin-inline-start:12px;padding:0 8px}.annotation+.annotation{margin-inline-start:8px}#title{font-size:12px;font-weight:500;line-height:16px}:host([in-side-panel_]) #title{font-size:.75rem;font-weight:500}#url{font-size:11px;color:var(--cr-secondary-text-color);line-height:14px}:host([in-side-panel_]) #url{color:var(--color-history-clusters-side-panel-card-secondary-foreground)}#debug-info{color:var(--cr-secondary-text-color)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$d() {
    return html `
<div id="header" @click="${this.onClick_}" @auxclick="${this.onAuxclick_}"
    @keydown="${this.onKeydown_}" @contextmenu="${this.onContextmenu_}">
  <a id="link-container" href="${this.visit?.normalizedUrl || nothing}">
    <page-favicon id="icon" .url="${this.visit?.normalizedUrl || null}"
        .isKnownToSync="${this.visit?.isKnownToSync || false}">
    </page-favicon>
    <div id="page-info">
      <div id="title-and-annotations">
        <span id="title" class="truncate"></span>
        ${this.computeAnnotations_().map(item => html `<span class="annotation">${item}</span>`)}
      </div>
      <span id="url" class="truncate"
          title="${this.inSidePanel_ && this.visit ?
        this.visit.urlForDisplay :
        nothing}"></span>
      <span id="debug-info" ?hidden="${!this.computeDebugInfo_()}">
        ${this.computeDebugInfo_()}
      </span>
    </div>
  </a>
  <div class="suffix-icons">
    <cr-icon-button class="hide-visit-icon"
        title="${this.i18n('hideFromCluster')}"
        @click="${this.onHideSelfButtonClick_}"
        ?hidden="${!this.fromPersistence}"></cr-icon-button>
    <cr-icon-button id="actionMenuButton" class="icon-more-vert"
        title="${this.i18n('actionMenuDescription')}" aria-haspopup="menu"
        @click="${this.onActionMenuButtonClick_}"
        ?hidden="${!this.allowDeletingHistory_}">
    </cr-icon-button>
  </div>
</div>

${this.renderActionMenu_ ? html `
    <cr-action-menu auto-close-on-focusout
        role-description="${this.i18n('actionMenuDescription')}">
      <button id="removeSelfButton" class="dropdown-item"
          ?hidden="${!this.allowDeletingHistory_}"
          @click="${this.onRemoveSelfButtonClick_}">
        ${this.i18n('removeFromHistory')}
      </button>
    </cr-action-menu>` :
        ''}`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WRAPPER_CSS_CLASS = 'search-highlight-wrapper';
const ORIGINAL_CONTENT_CSS_CLASS = 'search-highlight-original-content';
const HIT_CSS_CLASS = 'search-highlight-hit';
/**
 * Applies the highlight UI (yellow rectangle) around all matches in |node|.
 * @param node The text node to be highlighted. |node| ends up
 *     being hidden.
 * @return The new highlight wrapper.
 */
function highlight(node, ranges) {
    assert(ranges.length > 0);
    const wrapper = document.createElement('span');
    wrapper.classList.add(WRAPPER_CSS_CLASS);
    // Ensure hit-testing resolves to the enclosing element (e.g., an <a> link)
    // rather than the decorative highlight spans, preventing settings toggles
    // from inadvertently switching when a highlighted link is clicked.
    wrapper.style.pointerEvents = 'none';
    // Use existing node as placeholder to determine where to insert the
    // replacement content.
    assert(node.parentNode);
    node.parentNode.replaceChild(wrapper, node);
    // Keep the existing node around for when the highlights are removed. The
    // existing text node might be involved in data-binding and therefore should
    // not be discarded.
    const span = document.createElement('span');
    span.classList.add(ORIGINAL_CONTENT_CSS_CLASS);
    span.style.display = 'none';
    span.appendChild(node);
    wrapper.appendChild(span);
    const text = node.textContent;
    const tokens = [];
    for (let i = 0; i < ranges.length; ++i) {
        const range = ranges[i];
        const prev = ranges[i - 1] || { start: 0, length: 0 };
        const start = prev.start + prev.length;
        const length = range.start - start;
        tokens.push(text.substr(start, length));
        tokens.push(text.substr(range.start, range.length));
    }
    const last = ranges.slice(-1)[0];
    tokens.push(text.substr(last.start + last.length));
    for (let i = 0; i < tokens.length; ++i) {
        if (i % 2 === 0) {
            wrapper.appendChild(document.createTextNode(tokens[i]));
        }
        else {
            const hitSpan = document.createElement('span');
            hitSpan.classList.add(HIT_CSS_CLASS);
            // Defaults to the color associated with --paper-yellow-500.
            hitSpan.style.backgroundColor =
                'var(--search-highlight-hit-background-color, #ffeb3b)';
            // Defaults to the color associated with --google-grey-900.
            hitSpan.style.color = 'var(--search-highlight-hit-color, #202124)';
            hitSpan.style.fontWeight = 'var(--search-highlight-hit-font-weight)';
            hitSpan.textContent = tokens[i];
            wrapper.appendChild(hitSpan);
        }
    }
    return wrapper;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Populates `container` with the highlighted `text` based on the mojom provided
 * `match_positions`. This function takes care of converting from the mojom
 * format to the format expected by search_highlight_utils.
 */
function insertHighlightedTextWithMatchesIntoElement(container, text, matches) {
    container.textContent = '';
    const node = document.createTextNode(text);
    container.appendChild(node);
    const ranges = [];
    for (const match of matches) {
        ranges.push({
            start: match.begin,
            length: match.end - match.begin,
        });
    }
    if (ranges.length > 0) {
        highlight(node, ranges);
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file provides a custom element displaying a visit to a
 * page within a cluster. A visit features the page favicon, title, a timestamp,
 * as well as an action menu.
 */
/**
 * Maps supported annotations to localized string identifiers.
 */
const annotationToStringId = new Map([
    [Annotation.kBookmarked, 'bookmarked'],
]);
const ClusterMenuElementBase = I18nMixinLit(CrLitElement);
class UrlVisitElement extends ClusterMenuElementBase {
    static get is() {
        return 'url-visit';
    }
    static get styles() {
        return getCss$j();
    }
    render() {
        return getHtml$d.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The current query for which related clusters are requested and shown.
             */
            query: { type: String },
            /**
             * The visit to display.
             */
            visit: { type: Object },
            /**
             * Whether this visit is within a persisted cluster.
             */
            fromPersistence: { type: Boolean },
            /**
             * Usually this is true, but this can be false if deleting history is
             * prohibited by Enterprise policy.
             */
            allowDeletingHistory_: { type: Boolean },
            /**
             * Whether the cluster is in the side panel.
             */
            inSidePanel_: {
                type: Boolean,
                reflect: true,
            },
            renderActionMenu_: { type: Boolean },
        };
    }
    #query_accessor_storage = '';
    //============================================================================
    // Properties
    //============================================================================
    get query() { return this.#query_accessor_storage; }
    set query(value) { this.#query_accessor_storage = value; }
    #visit_accessor_storage;
    get visit() { return this.#visit_accessor_storage; }
    set visit(value) { this.#visit_accessor_storage = value; }
    #fromPersistence_accessor_storage = false;
    get fromPersistence() { return this.#fromPersistence_accessor_storage; }
    set fromPersistence(value) { this.#fromPersistence_accessor_storage = value; }
    annotations_ = [];
    #allowDeletingHistory__accessor_storage = loadTimeData.getBoolean('allowDeletingHistory');
    get allowDeletingHistory_() { return this.#allowDeletingHistory__accessor_storage; }
    set allowDeletingHistory_(value) { this.#allowDeletingHistory__accessor_storage = value; }
    #inSidePanel__accessor_storage = loadTimeData.getBoolean('inSidePanel');
    get inSidePanel_() { return this.#inSidePanel__accessor_storage; }
    set inSidePanel_(value) { this.#inSidePanel__accessor_storage = value; }
    #renderActionMenu__accessor_storage = false;
    get renderActionMenu_() { return this.#renderActionMenu__accessor_storage; }
    set renderActionMenu_(value) { this.#renderActionMenu__accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('visit')) {
            assert(this.visit);
            insertHighlightedTextWithMatchesIntoElement(this.$.title, this.visit.pageTitle, this.visit.titleMatchPositions);
            insertHighlightedTextWithMatchesIntoElement(this.$.url, this.visit.urlForDisplay, this.visit.urlForDisplayMatchPositions);
        }
    }
    //============================================================================
    // Event handlers
    //============================================================================
    fireVisitClickedEvent_() {
        // Notify the parent <history-cluster> element of this event.
        this.fire('visit-clicked', this.visit);
    }
    onAuxclick_(event) {
        this.onClick_(event);
    }
    onClick_(event) {
        // Ignore previously handled events.
        if (event.defaultPrevented) {
            return;
        }
        event.preventDefault(); // Prevent default browser action (navigation).
        // To record metrics.
        this.fireVisitClickedEvent_();
        this.openUrl_(event);
    }
    onContextmenu_(event) {
        // Because WebUI has a Blink-provided context menu that's suitable, and
        // Side Panel always UIs always have a custom context menu.
        if (!loadTimeData.getBoolean('inSidePanel') || !this.visit) {
            return;
        }
        browserProxyFactory$1.getInstance().handler.showContextMenuForURL(this.visit.normalizedUrl, { x: event.clientX, y: event.clientY });
    }
    onKeydown_(e) {
        // To be consistent with <history-list>, only handle Enter, and not Space.
        if (e.key !== 'Enter') {
            return;
        }
        // To record metrics.
        this.fireVisitClickedEvent_();
        this.openUrl_(e);
    }
    async onActionMenuButtonClick_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        if (!this.renderActionMenu_) {
            this.renderActionMenu_ = true;
            await this.updateComplete;
        }
        const menu = this.shadowRoot.querySelector('cr-action-menu');
        assert(menu);
        menu.showAt(this.$.actionMenuButton);
    }
    onHideSelfButtonClick_(event) {
        this.emitMenuButtonClick_(event, 'hide-visit');
    }
    onRemoveSelfButtonClick_(event) {
        this.emitMenuButtonClick_(event, 'remove-visit');
    }
    emitMenuButtonClick_(event, emitEventName) {
        event.preventDefault(); // Prevent default browser action (navigation).
        this.fire(emitEventName, this.visit);
        // This can also be triggered from the hide visit icon, in which case the
        // menu may not be rendered.
        if (this.renderActionMenu_) {
            const menu = this.shadowRoot.querySelector('cr-action-menu');
            assert(menu);
            menu.close();
        }
    }
    //============================================================================
    // Helper methods
    //============================================================================
    computeAnnotations_() {
        // Disabling annotations until more appropriate design for annotations in
        // the side panel is complete.
        if (this.inSidePanel_ || !this.visit) {
            return [];
        }
        return this.visit.annotations
            .map((annotation) => annotationToStringId.get(annotation))
            .filter((id) => {
            return !!id;
        })
            .map((id) => loadTimeData.getString(id));
    }
    computeDebugInfo_() {
        if (!loadTimeData.getBoolean('isHistoryClustersDebug') || !this.visit) {
            return '';
        }
        return JSON.stringify(this.visit.debugInfo);
    }
    openUrl_(event) {
        assert(this.visit);
        browserProxyFactory$1.getInstance().handler.openHistoryUrl(this.visit.normalizedUrl, {
            middleButton: event.button === 1,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
            shiftKey: event.shiftKey,
        });
    }
}
customElements.define(UrlVisitElement.is, UrlVisitElement);

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Histogram buckets for UMA tracking of which type of result the History user
 * clicked.
 */
var HistoryResultType;
(function (HistoryResultType) {
    HistoryResultType[HistoryResultType["TRADITIONAL"] = 0] = "TRADITIONAL";
    HistoryResultType[HistoryResultType["GROUPED"] = 1] = "GROUPED";
    HistoryResultType[HistoryResultType["EMBEDDINGS"] = 2] = "EMBEDDINGS";
    HistoryResultType[HistoryResultType["END"] = 3] = "END";
})(HistoryResultType || (HistoryResultType = {}));
/**
 * Histogram buckets for UMA tracking of Embeddings-related UMA actions. They
 * are defined here rather than in the history_embeddings component, because
 * History component itself needs to call this to provide a proper comparison
 * for users that don't have Embeddings enabled.
 */
var HistoryEmbeddingsUserActions;
(function (HistoryEmbeddingsUserActions) {
    HistoryEmbeddingsUserActions[HistoryEmbeddingsUserActions["NON_EMPTY_QUERY_HISTORY_SEARCH"] = 0] = "NON_EMPTY_QUERY_HISTORY_SEARCH";
    // Intermediate values are omitted because they are never used from WebUI.
    // This is a total count, not the "last" usable enum value. It should be
    // updated to `HistoryEmbeddingsUserActions::kMaxValue + 1` if that changes.
    // See related comment in
    // chrome/browser/ui/webui/cr_components/history_embeddings/history_embeddings_handler.h
    // HistoryEmbeddingsUserActions::kMaxValue = 6
    HistoryEmbeddingsUserActions[HistoryEmbeddingsUserActions["END"] = 7] = "END";
})(HistoryEmbeddingsUserActions || (HistoryEmbeddingsUserActions = {}));
// Unclicked query results that live for less than this amount of milliseconds
// are ignored from the metrics perspective. This is to account for the fact
// that new query results are fetched per user keystroke.
const QUERY_RESULT_MINIMUM_AGE = 2000;

let instance$j = null;
function getCss$i() {
    return instance$j || (instance$j = [...[getCss$p(), getCss$r()], css `:host{--indentation:52px;--search-query-margin:10px;display:block;padding-bottom:var(--cluster-padding-vertical)}:host([in-side-panel]){--cr-icon-button-margin-start:18px;--search-query-margin:4px;padding-bottom:0;padding-top:8px}:host([in-side-panel]) #container{background:var(--color-side-panel-card-background);border-radius:12px;overflow:hidden}:host([in-side-panel][is-first]){padding-top:0}:host(:focus:focus-visible) #container{box-shadow:inset 0 0 0 2px var(--cr-focus-outline-color)}:host([has-hidden-visits_]) #container{margin-bottom:var(--cluster-padding-vertical)}:host([in-side-panel]) #container url-visit:last-of-type{margin-bottom:8px}:host(:not([in-side-panel])) #container{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);padding:var(--cluster-padding-vertical) 0}.label-row{align-items:center;display:flex;flex-grow:1;justify-content:space-between;min-height:24px;min-width:0;padding-block-end:13px;padding-inline-start:var(--cluster-padding-horizontal)}:host([in-side-panel]) .label-row{min-height:44px;padding-block-end:0;padding-inline-start:16px}#label{color:var(--cr-primary-text-color);font-size:16px;font-weight:500}:host([in-side-panel]) #label{font-size:.875rem;line-height:calc(10/7);margin-inline-end:16px}.timestamp{font-size:11px}:host([in-side-panel]) .timestamp{font-size:.6875rem;line-height:calc(5/3)}.debug-info{color:var(--cr-secondary-text-color)}#related-searches-divider{display:none}:host([in-side-panel]) #related-searches-divider{display:block;background-color:var(--color-history-clusters-side-panel-divider);height:1px;margin:8px 16px}#related-searches{margin:16px var(--cluster-padding-horizontal) 0}:host([in-side-panel]) #related-searches{margin:16px 2px}:host([in-side-panel]) search-query{flex-shrink:0;margin-top:0}search-query:not(:last-of-type){margin-inline-end:var(--search-query-margin)}:host([in-side-panel]) search-query:first-of-type{margin-inline-start:16px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$c() {
    return html `
<div id="container" @visit-clicked="${this.onVisitClicked_}"
    @open-all-visits="${this.onOpenAllVisits_}"
    @hide-all-visits="${this.onHideAllVisits_}"
    @remove-all-visits="${this.onRemoveAllVisits_}"
    @hide-visit="${this.onHideVisit_}"
    @remove-visit="${this.onRemoveVisit_}">
  <div class="label-row">
    <span id="label" class="truncate"></span>
    <img is="cr-auto-img" auto-src="${this.imageUrl_}">
    <div class="debug-info">${this.debugInfo_()}</div>
    <div class="timestamp-and-menu">
      <div class="timestamp">${this.timestamp_()}</div>
      <cluster-menu></cluster-menu>
    </div>
  </div>
  ${this.visits_().map(item => html `<url-visit .visit="${item}"
      .query="${this.query}"
      .fromPersistence="${this.cluster.fromPersistence}">
    </url-visit>`)}
  <div id="related-searches-divider" ?hidden="${this.hideRelatedSearches_()}">
  </div>
  <horizontal-carousel id="related-searches"
      ?hidden="${this.hideRelatedSearches_()}"
      role="list" aria-label="${this.i18n('relatedSearchesHeader')}"
      @related-search-clicked="${this.onRelatedSearchClicked_}"
      @pointerdown="${this.onHorizontalCarouselPointerdown_}"
      ?in-side-panel="${this.inSidePanel}">
    ${this.relatedSearches_.map((item, index) => html `<search-query
        .searchQuery="${item}" .index="${index}" role="listitem">
      </search-query>`)}
  </horizontal-carousel>
</div>`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file provides a custom element displaying a cluster.
 */
const ClusterElementBase = I18nMixinLit(CrLitElement);
class ClusterElement extends ClusterElementBase {
    static get is() {
        return 'history-cluster';
    }
    static get styles() {
        return getCss$i();
    }
    render() {
        return getHtml$c.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The cluster displayed by this element.
             */
            cluster: { type: Object },
            /**
             * The index of the cluster.
             */
            index: { type: Number },
            /**
             * Whether the cluster is in the side panel.
             */
            inSidePanel: {
                type: Boolean,
                reflect: true,
            },
            /**
             * The current query for which related clusters are requested and shown.
             */
            query: { type: String },
            /**
             * The visible related searches.
             */
            relatedSearches_: { type: Array },
            /**
             * The label for the cluster. This property is actually unused. The side
             * effect of the compute function is used to insert the HTML elements for
             * highlighting into this.$.label element.
             */
            label_: {
                type: String,
                state: true,
            },
            /**
             * The cluster's image URL in a form easily passed to cr-auto-img.
             * Also notifies the outer iron-list of a resize.
             */
            imageUrl_: { type: String },
        };
    }
    #cluster_accessor_storage;
    //============================================================================
    // Properties
    //============================================================================
    get cluster() { return this.#cluster_accessor_storage; }
    set cluster(value) { this.#cluster_accessor_storage = value; }
    #index_accessor_storage = -1;
    get index() { return this.#index_accessor_storage; } // Initialized to an invalid value.
    set index(value) { this.#index_accessor_storage = value; }
    #inSidePanel_accessor_storage = loadTimeData.getBoolean('inSidePanel');
    get inSidePanel() { return this.#inSidePanel_accessor_storage; }
    set inSidePanel(value) { this.#inSidePanel_accessor_storage = value; }
    #query_accessor_storage = '';
    get query() { return this.#query_accessor_storage; }
    set query(value) { this.#query_accessor_storage = value; }
    #imageUrl__accessor_storage = '';
    get imageUrl_() { return this.#imageUrl__accessor_storage; }
    set imageUrl_(value) { this.#imageUrl__accessor_storage = value; }
    #relatedSearches__accessor_storage = [];
    get relatedSearches_() { return this.#relatedSearches__accessor_storage; }
    set relatedSearches_(value) { this.#relatedSearches__accessor_storage = value; }
    callbackRouter_;
    onVisitsHiddenListenerId_ = null;
    onVisitsRemovedListenerId_ = null;
    #label__accessor_storage = 'no_label';
    get label_() { return this.#label__accessor_storage; }
    set label_(value) { this.#label__accessor_storage = value; }
    //============================================================================
    // Overridden methods
    //============================================================================
    constructor() {
        super();
        this.callbackRouter_ = browserProxyFactory$1.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        this.onVisitsHiddenListenerId_ =
            this.callbackRouter_.onVisitsHidden.addListener(this.onVisitsRemovedOrHidden_.bind(this));
        this.onVisitsRemovedListenerId_ =
            this.callbackRouter_.onVisitsRemoved.addListener(this.onVisitsRemovedOrHidden_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.onVisitsHiddenListenerId_);
        this.callbackRouter_.removeListener(this.onVisitsHiddenListenerId_);
        this.onVisitsHiddenListenerId_ = null;
        assert(this.onVisitsRemovedListenerId_);
        this.callbackRouter_.removeListener(this.onVisitsRemovedListenerId_);
        this.onVisitsRemovedListenerId_ = null;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('cluster')) {
            assert(this.cluster);
            this.label_ = this.cluster.label ? this.cluster.label : 'no_label';
            this.imageUrl_ = this.cluster.imageUrl ? this.cluster.imageUrl : '';
            this.relatedSearches_ = this.cluster.relatedSearches.filter((query, index) => {
                return query && !(this.inSidePanel && index > 2);
            });
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('label_') && this.label_ !== 'no_label' &&
            this.cluster) {
            insertHighlightedTextWithMatchesIntoElement(this.$.label, this.cluster.label, this.cluster.labelMatchPositions);
        }
        if (changedPrivateProperties.has('imageUrl_')) {
            // iron-list can't handle our size changing because of loading an image
            // without an explicit event. But we also can't send this until we have
            // updated the image property, so send it on the next idle.
            requestIdleCallback(() => {
                this.fire('iron-resize');
            });
        }
        else if (changedProperties.has('cluster')) {
            // Iron-list re-assigns the `cluster` property to reuse existing elements
            // as the user scrolls. Since this property can change the height of this
            // element, we need to notify iron-list that this element's height may
            // need to be re-calculated.
            this.fire('iron-resize');
        }
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onRelatedSearchClicked_() {
        MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kRelatedSearchClicked, this.index);
    }
    /* Clears selection on non alt mouse clicks. Need to wait for browser to
     *  update the DOM fully. */
    onHorizontalCarouselPointerdown_(event) {
        this.onBrowserIdle_().then(() => {
            if (window.getSelection() && !event.altKey) {
                window.getSelection()?.empty();
            }
        });
    }
    onVisitClicked_(event) {
        MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kVisitClicked, this.index);
        const visit = event.detail;
        const visitIndex = this.getVisitIndex_(visit);
        MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kClicked, visitIndex, MetricsProxyImpl.getVisitType(visit));
        this.fire('record-history-link-click', {
            resultType: HistoryResultType.GROUPED,
            index: visitIndex,
        });
    }
    onOpenAllVisits_() {
        assert(this.cluster);
        browserProxyFactory$1.getInstance().handler.openVisitUrlsInTabGroup(this.cluster.visits, this.cluster.tabGroupName ?? null);
        MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kOpenedInTabGroup, this.index);
    }
    onHideAllVisits_() {
        this.fire('hide-visits', this.cluster ? this.cluster.visits : []);
    }
    onRemoveAllVisits_() {
        // Pass event up with new detail of all this cluster's visits.
        this.fire('remove-visits', this.cluster ? this.cluster.visits : []);
    }
    onHideVisit_(event) {
        // The actual hiding is handled in clusters.ts. This is just a good place to
        // record the metric.
        const visit = event.detail;
        MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kHidden, this.getVisitIndex_(visit), MetricsProxyImpl.getVisitType(visit));
    }
    onRemoveVisit_(event) {
        // The actual removal is handled in clusters.ts. This is just a good place
        // to record the metric.
        const visit = event.detail;
        MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kDeleted, this.getVisitIndex_(visit), MetricsProxyImpl.getVisitType(visit));
        this.fire('remove-visits', [visit]);
    }
    //============================================================================
    // Helper methods
    //============================================================================
    /**
     * Returns a promise that resolves when the browser is idle.
     */
    onBrowserIdle_() {
        return new Promise(resolve => {
            requestIdleCallback(() => {
                resolve();
            });
        });
    }
    /**
     * Called with the original remove or hide params when the last accepted
     * request to browser to remove or hide visits succeeds. Since the same visit
     * may appear in multiple Clusters, all Clusters receive this callback in
     * order to get a chance to remove their matching visits.
     */
    onVisitsRemovedOrHidden_(removedVisits) {
        assert(this.cluster);
        const visitHasBeenRemoved = (visit) => {
            return removedVisits.findIndex((removedVisit) => {
                if (visit.normalizedUrl !== removedVisit.normalizedUrl) {
                    return false;
                }
                // Remove the visit element if any of the removed visit's raw timestamps
                // matches the canonical raw timestamp.
                const rawVisitTime = visit.rawVisitData.visitTime.internalValue;
                return (removedVisit.rawVisitData.visitTime.internalValue ===
                    rawVisitTime) ||
                    removedVisit.duplicates.map(data => data.visitTime.internalValue)
                        .includes(rawVisitTime);
            }) !== -1;
        };
        const allVisits = this.cluster.visits;
        const remainingVisits = allVisits.filter(v => !visitHasBeenRemoved(v));
        if (allVisits.length === remainingVisits.length) {
            return;
        }
        if (!remainingVisits.length) {
            // If all the visits are removed, fire an event to also remove this
            // cluster from the list of clusters.
            this.fire('remove-cluster', this.index);
            MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kDeleted, this.index);
        }
        else {
            this.cluster.visits = remainingVisits;
            this.requestUpdate();
        }
        this.updateComplete.then(() => {
            this.fire('iron-resize');
        });
    }
    /**
     * Returns the index of `visit` among the visits in the cluster. Returns -1
     * if the visit is not found in the cluster at all.
     */
    getVisitIndex_(visit) {
        return this.cluster ? this.cluster.visits.indexOf(visit) : -1;
    }
    hideRelatedSearches_() {
        return !this.cluster || !this.cluster.relatedSearches.length;
    }
    debugInfo_() {
        return this.cluster && this.cluster.debugInfo ? this.cluster.debugInfo : '';
    }
    timestamp_() {
        return this.cluster && this.cluster.visits.length > 0 ?
            this.cluster.visits[0].relativeDate :
            '';
    }
    visits_() {
        return this.cluster ? this.cluster.visits : [];
    }
}
customElements.define(ClusterElement.is, ClusterElement);

// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
function getHtml$b() {
    return html `
<leo-button id="button" kind="outline" size="${this.size}">
  <slot slot="icon-before" name="prefix-icon"></slot>
  <slot></slot>
  <slot slot="icon-after" name="suffix-icon"></slot>
</leo-button>`;
}

// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
class CrButtonElement extends CrLitElement {
    static get is() {
        return 'cr-button';
    }
    static get styles() {
        return css `
      :host {
        display: inline-block;
        height: min-content;
      }

      :host(.cancel-button) {
        margin-inline-end: var(--leo-spacing-m);
      }

      leo-button {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
      }
    `;
    }
    render() {
        return getHtml$b.bind(this)();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                reflect: true,
            },
            class: {
                type: String,
                reflect: true,
            },
            size: {
                type: String,
                reflect: true,
            },
            noink: { type: Boolean },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #class_accessor_storage = '';
    get class() { return this.#class_accessor_storage; }
    set class(value) { this.#class_accessor_storage = value; }
    #size_accessor_storage = 'small';
    get size() { return this.#size_accessor_storage; }
    set size(value) { this.#size_accessor_storage = value; }
    #noink_accessor_storage = false;
    // Upstream's CrRippleMixin API; there is no ripple to disable here.
    get noink() { return this.#noink_accessor_storage; }
    set noink(value) { this.#noink_accessor_storage = value; }
    onClick_(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this.onClick_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('click', this.onClick_);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('class')) {
            this.classChanged();
        }
        if (changedProperties.has('disabled')) {
            // TODO(petemill): This should be a $= binding but the leo-button
            // has a bug with treating it as a boolean attribute
            // https://github.com/brave/leo/issues/690.
            if (this.disabled) {
                this.$.button.setAttribute('isDisabled', '_');
            }
            else {
                this.$.button.removeAttribute('isDisabled');
            }
        }
        if (changedProperties.has('size')) {
            this.$.button.setAttribute('size', this.size);
        }
    }
    classChanged() {
        let kind = 'outline';
        if (this.classList.contains('action-button')) {
            kind = 'filled';
        }
        // Avatar buttons should not have a border
        const avatar = this.classList.contains('avatar');
        if (avatar || this.classList.contains('plain')) {
            kind = 'plain';
        }
        // Avatar buttons should be round.
        if (avatar) {
            this.$.button.setAttribute('fab', '');
        }
        this.$.button.setAttribute('kind', kind);
    }
    // Shim for Chromium
    getRipple() { return null; }
    hasRipple() { return false; }
}
customElements.define(CrButtonElement.is, CrButtonElement);

let instance$i = null;
function getCss$h() {
    return instance$i || (instance$i = [...[], css `.cr-scrollable{anchor-name:--cr-scrollable;anchor-scope:--cr-scrollable;container-type:scroll-state;overflow:auto}.cr-scrollable-top,.cr-scrollable-top-shadow,.cr-scrollable-bottom,.cr-scrollable-bottom-shadow{display:none;position:fixed;position-anchor:--cr-scrollable;left:anchor(left);width:anchor-size(width);pointer-events:none;&:where(.force-on){display:block}}.cr-scrollable-top{top:anchor(top);border-top:1px solid var(--cr-scrollable-border-color);@container scroll-state(scrollable:top){display:block}}.cr-scrollable-bottom{bottom:anchor(bottom);border-bottom:1px solid var(--cr-scrollable-border-color);@container scroll-state(scrollable:bottom){display:block}}.cr-scrollable-top-shadow,.cr-scrollable-bottom-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);display:block;height:8px;opacity:0;top:anchor(top);transition:opacity 500ms;z-index:1;&:where(.force-on){opacity:1}}.cr-scrollable-top-shadow{@container scroll-state(scrollable:top){opacity:1}}.cr-scrollable-bottom-shadow{top:auto;bottom:anchor(bottom);transform:scale(-1);@container scroll-state(scrollable:bottom){opacity:1}}`]);
}

let instance$h = null;
function getCss$g() {
    return instance$h || (instance$h = [...[getCss$w(), getCss$r(), getCss$h()], css `dialog{background-color:var(--cr-dialog-background-color,white);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,0.12),0 16px 16px rgba(0,0,0,0.24);color:inherit;line-height:20px;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}:host-context([webui-refresh-2026]){dialog{background-color:var(--cr-dialog-background-color,var(--color-webui-dialog-background))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,0.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:none}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}@container style(--cr-dialog-body-border-top){.cr-scrollable-top{display:block;border-top:var(--cr-dialog-body-border-top)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$a() {
    // clang-format off
    return html `
<dialog id="dialog" @close="${this.onNativeDialogClose_}"
    @cancel="${this.onNativeDialogCancel_}" part="dialog"
    aria-labelledby="title"
    aria-description="${this.ariaDescriptionText || nothing}"
    closedby="${this.noCancel ? 'none' : nothing}">
  <!-- This wrapper is necessary, such that the "pulse" animation is not
    erroneously played when the user clicks on the outer-most scrollbar. -->
  <div id="content-wrapper" part="wrapper">
    <div class="top-container">
      <h2 id="title" class="title-container" tabindex="-1">
        <slot name="title"></slot>
      </h2>
      ${this.showCloseButton ? html `
        <cr-icon-button id="close" class="icon-clear"
            aria-label="${this.closeText || nothing}"
            title="${this.closeText || nothing}" @click="${this.onCloseClick_}"
            @keypress="${this.onCloseKeypress_}">
        </cr-icon-button>
      ` : ''}
    </div>
    <slot name="header"></slot>
    <div class="body-container cr-scrollable" id="container"
        part="body-container">
      <div class="cr-scrollable-top"></div>
      <slot name="body"></slot>
      <div class="cr-scrollable-bottom"></div>
    </div>
    <slot name="button-container"></slot>
    <slot name="footer"></slot>
  </div>
</dialog>`;
    // clang-format on
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-dialog' is a component for showing a modal dialog. If the
 * dialog is closed via close(), a 'close' event is fired. If the dialog is
 * canceled via cancel(), a 'cancel' event is fired followed by a 'close' event.
 *
 * Additionally clients can get a reference to the internal native <dialog> via
 * calling getNative() and inspecting the |returnValue| property inside
 * the 'close' event listener to determine whether it was canceled or just
 * closed, where a truthy value means success, and a falsy value means it was
 * canceled.
 *
 * Note that <cr-dialog> wrapper itself always has 0x0 dimensions, and
 * specifying width/height on <cr-dialog> directly will have no effect on the
 * internal native <dialog>. Instead use cr-dialog::part(dialog) to specify
 * width/height (as well as other available mixins to style other parts of the
 * dialog contents).
 */
class CrDialogElement extends CrLitElement {
    static get is() {
        return 'cr-dialog';
    }
    static get styles() {
        return getCss$g();
    }
    render() {
        return getHtml$a.bind(this)();
    }
    static get properties() {
        return {
            open: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Alt-text for the dialog close button.
             */
            closeText: { type: String },
            /**
             * True if the dialog should remain open on 'popstate' events. This is
             * used for navigable dialogs that have their separate navigation handling
             * code.
             */
            ignorePopstate: { type: Boolean },
            /**
             * True if the dialog should ignore 'Enter' keypresses.
             */
            ignoreEnterKey: { type: Boolean },
            /**
             * True if the dialog should consume 'keydown' events. If ignoreEnterKey
             * is true, 'Enter' key won't be consumed.
             */
            consumeKeydownEvent: { type: Boolean },
            /**
             * True if the dialog should not be able to be cancelled, which will
             * prevent 'Escape' key presses from closing the dialog.
             */
            noCancel: { type: Boolean },
            // True if dialog should show the 'X' close button.
            showCloseButton: { type: Boolean },
            showOnAttach: { type: Boolean },
            /**
             * Text for the aria description.
             */
            ariaDescriptionText: { type: String },
        };
    }
    #closeText_accessor_storage;
    get closeText() { return this.#closeText_accessor_storage; }
    set closeText(value) { this.#closeText_accessor_storage = value; }
    #consumeKeydownEvent_accessor_storage = false;
    get consumeKeydownEvent() { return this.#consumeKeydownEvent_accessor_storage; }
    set consumeKeydownEvent(value) { this.#consumeKeydownEvent_accessor_storage = value; }
    #ignoreEnterKey_accessor_storage = false;
    get ignoreEnterKey() { return this.#ignoreEnterKey_accessor_storage; }
    set ignoreEnterKey(value) { this.#ignoreEnterKey_accessor_storage = value; }
    #ignorePopstate_accessor_storage = false;
    get ignorePopstate() { return this.#ignorePopstate_accessor_storage; }
    set ignorePopstate(value) { this.#ignorePopstate_accessor_storage = value; }
    #noCancel_accessor_storage = false;
    get noCancel() { return this.#noCancel_accessor_storage; }
    set noCancel(value) { this.#noCancel_accessor_storage = value; }
    #open_accessor_storage = false;
    get open() { return this.#open_accessor_storage; }
    set open(value) { this.#open_accessor_storage = value; }
    #showCloseButton_accessor_storage = false;
    get showCloseButton() { return this.#showCloseButton_accessor_storage; }
    set showCloseButton(value) { this.#showCloseButton_accessor_storage = value; }
    #showOnAttach_accessor_storage = false;
    get showOnAttach() { return this.#showOnAttach_accessor_storage; }
    set showOnAttach(value) { this.#showOnAttach_accessor_storage = value; }
    #ariaDescriptionText_accessor_storage;
    get ariaDescriptionText() { return this.#ariaDescriptionText_accessor_storage; }
    set ariaDescriptionText(value) { this.#ariaDescriptionText_accessor_storage = value; }
    mutationObserver_ = null;
    boundKeydown_ = null;
    tracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        const mutationObserverCallback = () => {
            if (this.$.dialog.open) {
                this.addKeydownListener_();
            }
            else {
                this.removeKeydownListener_();
            }
        };
        this.mutationObserver_ = new MutationObserver(mutationObserverCallback);
        this.mutationObserver_.observe(this.$.dialog, {
            attributes: true,
            attributeFilter: ['open'],
        });
        // In some cases dialog already has the 'open' attribute by this point.
        mutationObserverCallback();
        if (this.showOnAttach) {
            this.showModal();
        }
        this.tracker_.add(window, 'popstate', () => {
            if (!this.ignorePopstate && this.$.dialog.open) {
                this.cancel();
            }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeKeydownListener_();
        if (this.mutationObserver_) {
            this.mutationObserver_.disconnect();
            this.mutationObserver_ = null;
        }
        this.tracker_.removeAll();
    }
    firstUpdated() {
        if (!this.ignoreEnterKey) {
            this.addEventListener('keypress', this.onKeypress_.bind(this));
        }
        this.addEventListener('pointerdown', e => this.onPointerdown_(e));
    }
    addKeydownListener_() {
        if (!this.consumeKeydownEvent) {
            return;
        }
        this.boundKeydown_ = this.boundKeydown_ || this.onKeydown_.bind(this);
        this.addEventListener('keydown', this.boundKeydown_);
        // Sometimes <body> is key event's target and in that case the event
        // will bypass cr-dialog. We should consume those events too in order to
        // behave modally. This prevents accidentally triggering keyboard commands.
        document.body.addEventListener('keydown', this.boundKeydown_);
    }
    removeKeydownListener_() {
        if (!this.boundKeydown_) {
            return;
        }
        this.removeEventListener('keydown', this.boundKeydown_);
        document.body.removeEventListener('keydown', this.boundKeydown_);
        this.boundKeydown_ = null;
    }
    async showModal() {
        if (this.showOnAttach) {
            const element = this.querySelector('[autofocus]');
            if (element && element instanceof CrLitElement && !element.shadowRoot) {
                // Force initial render, so that any inner elements with [autofocus] are
                // picked up by the browser.
                element.ensureInitialRender();
            }
        }
        this.$.dialog.showModal();
        assert(this.$.dialog.open);
        this.open = true;
        await this.updateComplete;
        this.fire('cr-dialog-open');
    }
    onCloseClick_() {
        this.cancel();
    }
    cancel() {
        this.fire('cancel');
        this.$.dialog.close();
        assert(!this.$.dialog.open);
        this.open = false;
    }
    close() {
        this.$.dialog.close('success');
        assert(!this.$.dialog.open);
        this.open = false;
    }
    /**
     * Set the title of the dialog for a11y reader.
     * @param title Title of the dialog.
     */
    setTitleAriaLabel(title) {
        this.$.dialog.removeAttribute('aria-labelledby');
        this.$.dialog.setAttribute('aria-label', title);
    }
    onCloseKeypress_(e) {
        // Because the dialog may have a default Enter key handler, prevent
        // keypress events from bubbling up from this element.
        e.stopPropagation();
    }
    onNativeDialogClose_(e) {
        // Ignore any 'close' events not fired directly by the <dialog> element.
        if (e.target !== this.getNative()) {
            return;
        }
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.fire('close');
    }
    async onNativeDialogCancel_(e) {
        // Ignore any 'cancel' events not fired directly by the <dialog> element.
        if (e.target !== this.getNative()) {
            return;
        }
        // When the dialog is dismissed using the 'Esc' key, need to manually update
        // the |open| property (since close() is not called).
        this.open = false;
        await this.updateComplete;
        // Catch and re-fire the native 'cancel' event such that it bubbles across
        // Shadow DOM v1.
        this.fire('cancel');
    }
    /**
     * Expose the inner native <dialog> for some rare cases where it needs to be
     * directly accessed (for example to programmatically setheight/width, which
     * would not work on the wrapper).
     */
    getNative() {
        return this.$.dialog;
    }
    onKeypress_(e) {
        if (e.key !== 'Enter') {
            return;
        }
        // Accept Enter keys from either the dialog itself, or a child cr-input,
        // considering that the event may have been retargeted, for example if the
        // cr-input is nested inside another element. Also exclude inputs of type
        // 'search', since hitting 'Enter' on a search field most likely intends to
        // trigger searching.
        const accept = e.target === this ||
            e.composedPath().some(el => el.tagName === 'CR-INPUT' &&
                el.type !== 'search' || el.tagName === 'LEO-INPUT');
        if (!accept) {
            return;
        }
        const actionButton = this.querySelector('.action-button:not([disabled]):not([hidden])');
        if (actionButton) {
            actionButton.click();
            e.preventDefault();
        }
    }
    onKeydown_(e) {
        assert(this.consumeKeydownEvent);
        if (!this.getNative().open) {
            return;
        }
        if (this.ignoreEnterKey && e.key === 'Enter') {
            return;
        }
        // Stop propagation to behave modally.
        e.stopPropagation();
    }
    onPointerdown_(e) {
        // Only show pulse animation if user left-clicked outside of the dialog
        // contents.
        if (e.button !== 0 ||
            e.composedPath()[0].tagName !== 'DIALOG') {
            return;
        }
        this.$.dialog.animate([
            { transform: 'scale(1)', offset: 0 },
            { transform: 'scale(1.02)', offset: 0.4 },
            { transform: 'scale(1.02)', offset: 0.6 },
            { transform: 'scale(1)', offset: 1 },
        ], {
            duration: 180,
            easing: 'ease-in-out',
            iterations: 1,
        });
        // Prevent any text from being selected within the dialog when clicking in
        // the backdrop area.
        e.preventDefault();
    }
    focus() {
        const titleContainer = this.shadowRoot.querySelector('.title-container');
        assert(titleContainer);
        titleContainer.focus();
    }
}
customElements.define(CrDialogElement.is, CrDialogElement);

let instance$g = null;
function getCss$f() {
    return instance$g || (instance$g = [...[], css `:host{display:block;position:relative}:host([chunk-size='0']) #container>::slotted(*){box-sizing:border-box;contain-intrinsic-size:var(--list-item-size,100px) auto;content-visibility:auto;width:100%}:host(:not([chunk-size='0'])) #container>::slotted(.chunk){box-sizing:border-box;contain-intrinsic-size:calc(var(--chunk-size) * var(--list-item-size,100px)) auto;content-visibility:auto;width:100%}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-lazy-list' is a component optimized for showing a list of
 * items that overflows the view and requires scrolling. For performance
 * reasons, the DOM items are incrementally added to the view as the user
 * scrolls through the list. The component expects a `scrollTarget` property
 * to be specified indicating the scrolling container. This container is
 * used for observing scroll events and resizes. The container should have
 * bounded height so that cr-lazy-list can determine how many HTML elements to
 * render initially.
 * If using a container that can shrink arbitrarily small to the height of the
 * contents, a 'minViewportHeight' property should also be provided specifying
 * the minimum viewport height to try to fill with items.
 * Each list item's HTML element is created using the `template` property,
 * which should be set to a function returning a TemplateResult corresponding
 * to a passed in list item and selection index.
 * Set `listItemHost` to the `this` context for any event handlers in this
 * template. If this property is not provided, cr-lazy-list is assumed to be
 * residing in a ShadowRoot, and the shadowRoot's |host| is used.
 * The `items` property specifies an array of list item data.
 * The `itemSize` property should be set to an estimate of the list item size.
 * This is used when setting contain-intrinsic-size styling for list items.
 * To restore focus to a specific item if it is focused when the items
 * array changes, set `restoreFocusItem` to that HTMLElement. If the element
 * is focused when the items array is updated, focus will be restored.
 * To set content-visibility on chunks of elements rather than on individual
 * elements, use the `chunkSize` property and specify the number of elements
 * to group. This is useful when rendering large numbers of short items, as
 * the intersection observers added by content-visibility: auto can slow down
 * the UI for very large numbers of elements.
 */
class CrLazyListElement extends CrLitElement {
    static get is() {
        return 'cr-lazy-list';
    }
    static get styles() {
        return getCss$f();
    }
    render() {
        const host = this.listItemHost === undefined ?
            this.getRootNode().host :
            this.listItemHost;
        // Render items into light DOM using the client provided template
        if (this.chunkSize === 0) {
            render(this.items.slice(0, this.numItemsDisplayed_).map((item, index) => {
                return this.template(item, index);
            }), this, { host });
        }
        else {
            const chunks = Math.ceil(this.numItemsDisplayed_ / this.chunkSize);
            const chunkArray = new Array(chunks).fill(0);
            // Render chunk divs.
            render(chunkArray.map((_item, index) => html `<div id="chunk-${index}" class="chunk">
                                     </div>`), this, { host });
            // Render items into chunk divs.
            for (let chunkIndex = 0; chunkIndex < chunks; chunkIndex++) {
                const start = chunkIndex * this.chunkSize;
                const end = Math.min(this.numItemsDisplayed_, (chunkIndex + 1) * this.chunkSize);
                const chunk = this.querySelector(`#chunk-${chunkIndex}`);
                assert(chunk);
                render(this.items.slice(start, end).map((item, index) => {
                    return this.template(item, start + index);
                }), chunk, { host });
            }
        }
        // Render container + slot into shadow DOM
        return html `<div id="container"><slot id="slot"></slot></div>`;
    }
    static get properties() {
        return {
            chunkSize: {
                type: Number,
                reflect: true,
            },
            items: { type: Array },
            itemSize: { type: Number },
            listItemHost: { type: Object },
            minViewportHeight: { type: Number },
            scrollOffset: { type: Number },
            scrollTarget: { type: Object },
            restoreFocusElement: { type: Object },
            template: { type: Object },
            numItemsDisplayed_: {
                state: true,
                type: Number,
            },
        };
    }
    #items_accessor_storage = [];
    get items() { return this.#items_accessor_storage; }
    set items(value) { this.#items_accessor_storage = value; }
    #itemSize_accessor_storage = undefined;
    get itemSize() { return this.#itemSize_accessor_storage; }
    set itemSize(value) { this.#itemSize_accessor_storage = value; }
    #listItemHost_accessor_storage;
    get listItemHost() { return this.#listItemHost_accessor_storage; }
    set listItemHost(value) { this.#listItemHost_accessor_storage = value; }
    #minViewportHeight_accessor_storage;
    get minViewportHeight() { return this.#minViewportHeight_accessor_storage; }
    set minViewportHeight(value) { this.#minViewportHeight_accessor_storage = value; }
    #scrollOffset_accessor_storage = 0;
    get scrollOffset() { return this.#scrollOffset_accessor_storage; }
    set scrollOffset(value) { this.#scrollOffset_accessor_storage = value; }
    #scrollTarget_accessor_storage = document.documentElement;
    get scrollTarget() { return this.#scrollTarget_accessor_storage; }
    set scrollTarget(value) { this.#scrollTarget_accessor_storage = value; }
    #restoreFocusElement_accessor_storage = null;
    get restoreFocusElement() { return this.#restoreFocusElement_accessor_storage; }
    set restoreFocusElement(value) { this.#restoreFocusElement_accessor_storage = value; }
    #template_accessor_storage = () => html ``;
    get template() { return this.#template_accessor_storage; }
    set template(value) { this.#template_accessor_storage = value; }
    #chunkSize_accessor_storage = 0;
    get chunkSize() { return this.#chunkSize_accessor_storage; }
    set chunkSize(value) { this.#chunkSize_accessor_storage = value; }
    #numItemsDisplayed__accessor_storage = 0;
    get numItemsDisplayed_() { return this.#numItemsDisplayed__accessor_storage; }
    set numItemsDisplayed_(value) { this.#numItemsDisplayed__accessor_storage = value; }
    // Internal state
    lastItemsLength_ = 0;
    lastRenderedHeight_ = 0;
    resizeObserver_ = null;
    scrollListener_ = () => this.onScroll_();
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('items')) {
            this.lastItemsLength_ = this.items.length;
            this.numItemsDisplayed_ = this.items.length === 0 ?
                0 :
                Math.min(this.numItemsDisplayed_, this.items.length);
        }
        else {
            assert(this.items.length === this.lastItemsLength_, 'Items array changed in place; rendered result may be incorrect.');
        }
        if (changedProperties.has('itemSize')) {
            this.style.setProperty('--list-item-size', `${this.itemSize}px`);
        }
        if (changedProperties.has('chunkSize')) {
            this.style.setProperty('--chunk-size', `${this.chunkSize}`);
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        let itemsChanged = false;
        if (changedProperties.has('items') ||
            changedProperties.has('minViewportHeight') ||
            changedProperties.has('scrollOffset')) {
            const previous = changedProperties.get('items');
            if (previous !== undefined || this.items.length !== 0) {
                this.onItemsChanged_();
                itemsChanged = true;
            }
        }
        if (changedProperties.has('scrollTarget')) {
            this.addRemoveScrollTargetListeners_(changedProperties.get('scrollTarget') || null);
            // Only re-render if there are items to display and we are not already
            // re-rendering for the items.
            if (this.scrollTarget && this.items.length > 0 && !itemsChanged) {
                this.fillCurrentViewport();
            }
        }
    }
    // Public API
    // Forces the list to fill the current viewport. Called when the viewport
    // size or position changes.
    fillCurrentViewport() {
        if (this.items.length === 0) {
            return Promise.resolve();
        }
        // Update the height if the previous height calculation was done when this
        // element was not visible or if new DOM items were added.
        return this.update_(this.$.container.style.height === '0px');
    }
    // Forces the list to render |numItems| items. If |numItems| are already
    // rendered, this is a no-op.
    async ensureItemRendered(index) {
        if (index < this.numItemsDisplayed_) {
            return this.domItems()[index];
        }
        assert(index < this.items.length);
        await this.updateNumItemsDisplayed_(index + 1);
        return this.domItems()[index];
    }
    // Private methods
    addRemoveScrollTargetListeners_(oldTarget) {
        if (oldTarget) {
            const target = oldTarget === document.documentElement ? window : oldTarget;
            target.removeEventListener('scroll', this.scrollListener_);
            assert(this.resizeObserver_);
            this.resizeObserver_.disconnect();
        }
        if (this.scrollTarget) {
            const target = this.scrollTarget === document.documentElement ?
                window :
                this.scrollTarget;
            target.addEventListener('scroll', this.scrollListener_);
            this.resizeObserver_ = new ResizeObserver(() => {
                requestAnimationFrame(() => {
                    const newHeight = this.getViewHeight_();
                    if (newHeight > 0 && newHeight !== this.lastRenderedHeight_) {
                        this.fillCurrentViewport();
                    }
                });
            });
            this.resizeObserver_.observe(this.scrollTarget);
        }
    }
    shouldRestoreFocus_() {
        if (!this.restoreFocusElement) {
            return false;
        }
        const active = getDeepActiveElement();
        return this.restoreFocusElement === active ||
            (!!this.restoreFocusElement.shadowRoot &&
                this.restoreFocusElement.shadowRoot.activeElement === active);
    }
    async onItemsChanged_() {
        if (this.items.length > 0) {
            const restoreFocus = this.shouldRestoreFocus_();
            await this.update_(true);
            if (restoreFocus) {
                // Async to allow clients to update in response to viewport-filled.
                setTimeout(() => {
                    // The element may have been removed from the DOM by the client.
                    if (!this.restoreFocusElement) {
                        return;
                    }
                    this.restoreFocusElement.focus();
                    this.fire('focus-restored-for-test');
                }, 0);
            }
        }
        else {
            // Update the container height to 0 since there are no items.
            this.$.container.style.height = '0px';
            this.fire('items-rendered');
            this.fire('viewport-filled');
        }
    }
    getScrollTop_() {
        return this.scrollTarget === document.documentElement ?
            window.pageYOffset :
            this.scrollTarget.scrollTop;
    }
    getViewHeight_() {
        const offsetHeight = this.scrollTarget === document.documentElement ?
            window.innerHeight :
            this.scrollTarget.offsetHeight;
        return this.getScrollTop_() - this.scrollOffset +
            Math.max(this.minViewportHeight || 0, offsetHeight);
    }
    async update_(forceUpdateHeight) {
        if (!this.scrollTarget) {
            return;
        }
        const height = this.getViewHeight_();
        if (height <= 0) {
            return;
        }
        const added = await this.fillViewHeight_(height);
        this.fire('items-rendered');
        if (added || forceUpdateHeight) {
            await this.updateHeight_();
            this.fire('viewport-filled');
        }
    }
    /**
     * @return Whether DOM items were created or not.
     */
    async fillViewHeight_(height) {
        this.fire('fill-height-start');
        this.lastRenderedHeight_ = height;
        // Ensure we have added enough DOM items so that we are able to estimate
        // item average height.
        assert(this.items.length);
        const initialDomItemCount = this.domItems().length;
        if (initialDomItemCount === 0) {
            await this.updateNumItemsDisplayed_(1);
        }
        const itemHeight = this.domItemAverageHeight_();
        // If this happens, the math below will be incorrect and we will render
        // all items. So return early, and correct |lastRenderedHeight_|.
        if (itemHeight === 0) {
            this.lastRenderedHeight_ = 0;
            return false;
        }
        const desiredDomItemCount = Math.min(Math.ceil(height / itemHeight), this.items.length);
        if (desiredDomItemCount > this.numItemsDisplayed_) {
            await this.updateNumItemsDisplayed_(desiredDomItemCount);
        }
        const added = initialDomItemCount !== desiredDomItemCount;
        if (added) {
            this.fire('fill-height-end');
        }
        return added;
    }
    async updateNumItemsDisplayed_(itemsToDisplay) {
        this.numItemsDisplayed_ = itemsToDisplay;
        if (this.numItemsDisplayed_ > 200 && this.chunkSize < 2) {
            console.warn(`cr-lazy-list: ${this.numItemsDisplayed_} list items rendered. ` +
                'If this is expected, consider chunking mode (chunkSize > 1) ' +
                'to improve scrolling performance.');
        }
        await this.updateComplete;
    }
    /**
     * @return The currently rendered list items, particularly useful for clients
     *     using chunking mode.
     */
    domItems() {
        return this.chunkSize === 0 ?
            this.$.slot.assignedElements() :
            Array.from(this.querySelectorAll('.chunk > *'));
    }
    /**
     * @return The average DOM item height.
     */
    domItemAverageHeight_() {
        // This logic should only be invoked if the list is non-empty and at least
        // one DOM item has been rendered so that an item average height can be
        // estimated. This is ensured by the callers.
        assert(this.items.length > 0);
        const domItems = this.domItems();
        assert(domItems.length > 0);
        const firstDomItem = domItems.at(0);
        const lastDomItem = domItems.at(-1);
        const lastDomItemHeight = lastDomItem.offsetHeight;
        if (firstDomItem === lastDomItem && lastDomItemHeight === 0) {
            // If there is only 1 item and it has a height of 0, return early. This
            // likely means the UI is still hidden or there is no content.
            return 0;
        }
        else if (this.itemSize) {
            // Once items are actually visible and have a height > 0, assume that it
            // is an accurate representation of the average item size.
            return this.itemSize;
        }
        let totalHeight = lastDomItem.offsetTop + lastDomItemHeight;
        if (this.chunkSize > 0) {
            // Add the parent's offsetTop. The offsetParent will be the chunk div.
            // Subtract the offsetTop of the first chunk div to avoid counting any
            // padding.
            totalHeight += lastDomItem.offsetParent.offsetTop -
                firstDomItem.offsetParent.offsetTop;
        }
        else {
            // Subtract the offsetTop of the first item to avoid counting any padding.
            totalHeight -= firstDomItem.offsetTop;
        }
        return totalHeight / domItems.length;
    }
    /**
     * Sets the height of the component based on an estimated average DOM item
     * height and the total number of items.
     */
    async updateHeight_() {
        // Await 1 cycle to ensure any child Lit elements have time to finish
        // rendering, or the height estimated below will be incorrect.
        await new Promise(resolve => setTimeout(resolve, 0));
        const estScrollHeight = this.items.length > 0 ?
            this.items.length * this.domItemAverageHeight_() :
            0;
        this.$.container.style.height = estScrollHeight + 'px';
    }
    /**
     * Adds additional DOM items as needed to fill the view based on user scroll
     * interactions.
     */
    async onScroll_() {
        const scrollTop = this.getScrollTop_();
        if (scrollTop <= 0 || this.numItemsDisplayed_ === this.items.length) {
            return;
        }
        await this.fillCurrentViewport();
    }
}
customElements.define(CrLazyListElement.is, CrLazyListElement);

let instance$f = null;
function getCss$e() {
    return instance$f || (instance$f = [...[], css `:host{display:block;position:relative}:host([using-default-scroll-target]){overflow-y:auto}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-infinite-list' is a thin wrapper around 'cr-lazy-list' that
 * emulates some of the behavior of 'iron-list'.
 * In particular, 'cr-infinite-list':
 *   - Tracks a `focusedIndex`, and uses this to pass a `tabindex` to the
 *     template method.
 *   - If list items change while focus is within the element at
 *     `focusedIndex`, 'cr-infinite-list' will restore focus once rendering is
 *     complete. Before restoring focus, a restore-list-focus event is fired.
 *     Clients using FocusRowMixinLit should reset listBlurred = false when
 *     this event is fired so the mixin correctly handles the following focus()
 *     call.
 *   - Implements the arrow key up/down navigation behavior that was provided
 *     by 'iron-list'.
 */
class CrInfiniteListElement extends CrLitElement {
    static get is() {
        return 'cr-infinite-list';
    }
    static get styles() {
        return getCss$e();
    }
    render() {
        // Render items into light DOM using the client provided template
        render(html `<cr-lazy-list id="list" .scrollTarget="${this.scrollTarget}"
          .chunkSize="${this.chunkSize}"
          .scrollOffset="${this.scrollOffset}"
          .listItemHost="${this.getRootNode().host}"
          .items="${this.items}" .itemSize="${this.itemSize}"
          .template="${(item, index) => this.template(item, index, index === this.focusedIndex ? 0 : -1)}"
          @keydown="${this.onKeyDown_}"
          @focusin="${this.onFocusIn_}"
          @viewport-filled="${this.onViewportFilled_}">
        </cr-lazy-list>`, this, {
            host: this,
        });
        return html `<slot></slot>`;
    }
    static get properties() {
        return {
            chunkSize: { type: Number },
            scrollOffset: { type: Number },
            scrollTarget: { type: Object },
            usingDefaultScrollTarget: {
                type: Boolean,
                reflect: true,
            },
            items: { type: Array },
            focusedIndex: { type: Number },
            itemSize: { type: Number },
            template: { type: Object },
        };
    }
    #chunkSize_accessor_storage = 0;
    get chunkSize() { return this.#chunkSize_accessor_storage; }
    set chunkSize(value) { this.#chunkSize_accessor_storage = value; }
    #scrollOffset_accessor_storage = 0;
    get scrollOffset() { return this.#scrollOffset_accessor_storage; }
    set scrollOffset(value) { this.#scrollOffset_accessor_storage = value; }
    #scrollTarget_accessor_storage = this;
    get scrollTarget() { return this.#scrollTarget_accessor_storage; }
    set scrollTarget(value) { this.#scrollTarget_accessor_storage = value; }
    #usingDefaultScrollTarget_accessor_storage = true;
    get usingDefaultScrollTarget() { return this.#usingDefaultScrollTarget_accessor_storage; }
    set usingDefaultScrollTarget(value) { this.#usingDefaultScrollTarget_accessor_storage = value; }
    #items_accessor_storage = [];
    get items() { return this.#items_accessor_storage; }
    set items(value) { this.#items_accessor_storage = value; }
    #itemSize_accessor_storage = undefined;
    get itemSize() { return this.#itemSize_accessor_storage; }
    set itemSize(value) { this.#itemSize_accessor_storage = value; }
    #template_accessor_storage = () => html ``;
    // Unlike cr-lazy-list, cr-infinite-list provides a tabindex parameter for
    // clients as is provided by iron-list. Like iron-list, cr-infinite-list will
    // pass 0 for this parameter if the list item should be keyboard focusable,
    // and -1 otherwise.
    get template() { return this.#template_accessor_storage; }
    set template(value) { this.#template_accessor_storage = value; }
    #focusedIndex_accessor_storage = -1;
    get focusedIndex() { return this.#focusedIndex_accessor_storage; }
    set focusedIndex(value) { this.#focusedIndex_accessor_storage = value; }
    restoreFocus_ = false;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('scrollTarget')) {
            this.usingDefaultScrollTarget = this.scrollTarget === this;
        }
        if (changedProperties.has('items')) {
            if (this.isFocusWithinList_()) {
                this.restoreFocus_ = true;
            }
            if (this.focusedIndex >= this.items.length) {
                this.focusedIndex = this.items.length - 1;
            }
            else if (this.focusedIndex === -1 && this.items.length > 0) {
                this.focusedIndex = 0;
            }
        }
    }
    isFocusWithinList_() {
        if (this.focusedIndex === -1) {
            return false;
        }
        const list = this.querySelector('cr-lazy-list');
        assert(list);
        const renderedItems = list.domItems();
        if (renderedItems.length <= this.focusedIndex) {
            return false;
        }
        return renderedItems[this.focusedIndex].matches(':focus-within');
    }
    fillCurrentViewport() {
        const list = this.querySelector('cr-lazy-list');
        assert(list);
        return list.fillCurrentViewport();
    }
    ensureItemRendered(index) {
        const list = this.querySelector('cr-lazy-list');
        assert(list);
        return list.ensureItemRendered(index);
    }
    onViewportFilled_() {
        if (!this.restoreFocus_) {
            return;
        }
        this.restoreFocus_ = false;
        // Wait 1 macrotask for clients to catch the event and propagate the
        // state via data bindings before focusing the relevant item.
        this.fire('restore-list-focus');
        setTimeout(async () => {
            if (this.focusedIndex >= 0 && this.focusedIndex < this.items.length) {
                const item = await this.ensureItemRendered(this.focusedIndex);
                item.focus();
            }
        }, 0);
    }
    onFocusIn_(e) {
        const list = this.querySelector('cr-lazy-list');
        assert(list);
        const renderedItems = list.domItems();
        const focusedIdx = Array.from(renderedItems).findIndex(item => {
            return item === e.target || item.contains(e.target) ||
                item.shadowRoot?.activeElement === e.target;
        });
        if (focusedIdx !== -1) {
            this.focusedIndex = focusedIdx;
        }
    }
    /**
     * Handles key events when list item elements have focus.
     */
    async onKeyDown_(e) {
        // Do not interfere with any parent component that manages 'shift' related
        // key events.
        if (e.shiftKey || (e.key !== 'ArrowUp' && e.key !== 'ArrowDown')) {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        // Identify the new focused index.
        const newIndex = e.key === 'ArrowUp' ?
            Math.max(0, this.focusedIndex - 1) :
            Math.min(this.items.length - 1, this.focusedIndex + 1);
        if (newIndex === this.focusedIndex) {
            return;
        }
        // Await updateComplete to allow the focusedIndex change to properly
        // propagate to the DOM before focusing the relevant item.
        this.focusedIndex = newIndex;
        await this.updateComplete;
        const list = this.querySelector('cr-lazy-list');
        assert(list);
        const element = await list.ensureItemRendered(this.focusedIndex);
        element.focus();
        element.scrollIntoViewIfNeeded();
    }
}
customElements.define(CrInfiniteListElement.is, CrInfiniteListElement);

let instance$e = null;
function getCss$d() {
    return instance$e || (instance$e = [...[], css `:host{--cr-toast-background:var(--color-toast-background,var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,var(--cr-fallback-color-inverse-on-surface));--cr-focus-outline-color:var(--cr-focus-outline-inverse-color);align-items:center;background:var(--cr-toast-background);border-radius:8px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,0.28);box-sizing:border-box;display:flex;line-height:20px;margin:24px;max-width:var(--cr-toast-max-width,568px);min-height:52px;min-width:288px;opacity:0;padding:0 16px;position:fixed;transform:translateY(100px);transition:opacity 300ms,transform 300ms;visibility:hidden;z-index:1}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host(:not([open])) ::slotted(*){display:none}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent !important;border:none !important;color:var(--cr-toast-button-color) !important;margin-inline-start:32px !important;min-width:52px !important;padding:8px !important}:host ::slotted(cr-button:hover){background-color:transparent !important}::slotted(cr-button:last-of-type){margin-inline-end:-8px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$9() {
    return html `<slot></slot>`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A lightweight toast.
 */
class CrToastElement extends CrLitElement {
    static get is() {
        return 'cr-toast';
    }
    static get styles() {
        return getCss$d();
    }
    render() {
        return getHtml$9.bind(this)();
    }
    static get properties() {
        return {
            duration: {
                type: Number,
            },
            open: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #duration_accessor_storage = 0;
    get duration() { return this.#duration_accessor_storage; }
    set duration(value) { this.#duration_accessor_storage = value; }
    #open_accessor_storage = false;
    get open() { return this.#open_accessor_storage; }
    set open(value) { this.#open_accessor_storage = value; }
    hideTimeoutId_ = null;
    constructor() {
        super();
        this.addEventListener('focusin', this.clearTimeout_);
        this.addEventListener('focusout', this.resetAutoHide_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('duration') || changedProperties.has('open')) {
            this.resetAutoHide_();
        }
    }
    clearTimeout_() {
        if (this.hideTimeoutId_ !== null) {
            window.clearTimeout(this.hideTimeoutId_);
            this.hideTimeoutId_ = null;
        }
    }
    /**
     * Cancels existing auto-hide, and sets up new auto-hide.
     */
    resetAutoHide_() {
        this.clearTimeout_();
        if (this.open && this.duration !== 0) {
            this.hideTimeoutId_ = window.setTimeout(() => {
                this.hide();
            }, this.duration);
        }
    }
    /**
     * Shows the toast and auto-hides after |this.duration| milliseconds has
     * passed. If the toast is currently being shown, any preexisting auto-hide
     * is cancelled and replaced with a new auto-hide.
     */
    async show() {
        // Force autohide to reset if calling show on an already shown toast.
        const shouldResetAutohide = this.open;
        // The role attribute is removed first so that screen readers to better
        // ensure that screen readers will read out the content inside the toast.
        // If the role is not removed and re-added back in, certain screen readers
        // do not read out the contents, especially if the text remains exactly
        // the same as a previous toast.
        this.removeAttribute('role');
        this.open = true;
        await this.updateComplete;
        this.setAttribute('role', 'alert');
        if (shouldResetAutohide) {
            this.resetAutoHide_();
        }
    }
    /**
     * Hides the toast and ensures that its contents can not be focused while
     * hidden.
     */
    async hide() {
        this.open = false;
        await this.updateComplete;
    }
}
customElements.define(CrToastElement.is, CrToastElement);

let instance$d = null;
function getCss$c() {
    return instance$d || (instance$d = [...[getCss$p()], css `:host{color:var(--cr-primary-text-color);display:block;font-size:0.875rem}:host([is-empty]){padding-block:80px}cr-dialog::part(dialog){--cr-dialog-width:min(calc(100% - 32px),512px)}:host([in-side-panel_]) cr-toast{margin:16px}#clusters{margin:0 auto;max-width:var(--cluster-max-width);min-width:var(--cluster-min-width);padding:var(--first-cluster-padding-top) var(--cluster-padding-horizontal) 0}:host([in-side-panel_]) #clusters{min-width:0;padding:0}:host(:not([in-side-panel_])) history-cluster{overflow-clip-margin:8px}:host-context(.focus-outline-visible) history-cluster:focus,history-cluster:focus-visible{outline:none}:host([in-side-panel_]) history-cluster{border-bottom:none}:host([in-side-panel_]) history-cluster[is-last]{border-bottom:none}#placeholder{align-items:center;color:var(--md-loading-message-color);display:flex;flex:1;font-size:inherit;font-weight:500;height:100%;justify-content:center}#footer{display:flex;justify-content:center;padding:0 var(--cluster-padding-horizontal) var(--cluster-padding-vertical)}:host([in-side-panel_]) #footer{padding-top:var(--cluster-padding-vertical)}:host([in-side-panel_]) cr-dialog{--cr-dialog-background-color:var(--color-history-clusters-side-panel-dialog-background);--cr-primary-text-color:var(--color-history-clusters-side-panel-dialog-primary-foreground);--cr-secondary-text-color:var(--color-history-clusters-side-panel-dialog-secondary-foreground);--cr-dialog-title-font-size:16px;--cr-dialog-title-slot-padding-bottom:8px;font-weight:500}:host([in-side-panel_]) cr-dialog::part(dialog){--cr-scrollable-border-color:var(--color-history-clusters-side-panel-dialog-divider);border-radius:12px;box-shadow:var(--cr-elevation-3)}.spinner-icon{height:100%;width:100%}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
function getHtml$8() {
    return html `
<div id="placeholder" ?hidden="${!this.computePlaceholderText_()}">
  ${this.computePlaceholderText_()}
</div>
<cr-infinite-list id="clusters"
    .items="${this.clusters_}"
    @hide-visit="${this.onHideVisit_}" @hide-visits="${this.onHideVisits_}"
    @remove-visits="${this.onRemoveVisits_}"
    ?hidden="${!this.clusters_.length}" .scrollTarget="${this.scrollTarget}"
    .scrollOffset="${this.scrollOffset}"
    .template="${(item, index, tabindex) => html `
      <history-cluster .cluster="${item}" .index="${index}"
          .query="${this.resultQuery_}" tabindex="${tabindex}"
          @remove-cluster="${this.onRemoveCluster_}" ?is-first="${!index}"
          ?is-last="${this.isLastCluster_(index)}">
      </history-cluster>`}">
</cr-infinite-list>
<div id="footer" ?hidden="${this.getLoadMoreButtonHidden_()}">
  <cr-button id="loadMoreButton" @click="${this.onLoadMoreButtonClick_}"
      ?hidden="${this.showSpinner_}">
    ${this.i18n('loadMoreButtonLabel')}
  </cr-button>
  <img class="spinner-icon" src="chrome://resources/images/throbber_small.svg"
      ?hidden="${!this.showSpinner_}"></img>
</div>
${this.showConfirmationDialog_ ? html `<cr-dialog consume-keydown-event
    @cancel="${this.onConfirmationDialogCancel_}">
      <div slot="title">${this.i18n('removeSelected')}</div>
      <div slot="body">${this.i18n('deleteWarning')}</div>
      <div slot="button-container">
        <cr-button class="cancel-button" @click="${this.onCancelButtonClick_}">
          ${this.i18n('cancel')}
        </cr-button>
        <cr-button class="action-button" @click="${this.onRemoveButtonClick_}">
          ${this.i18n('deleteConfirm')}
        </cr-button>
      </div>
    </cr-dialog>` : ''}
<cr-toast id="confirmationToast" duration="5000">
  <div>${this.i18n('removeFromHistoryToast')}</div>
</cr-toast>`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function jsDateToMojoDate$1(date) {
    const windowsEpoch = Date.UTC(1601, 0, 1, 0, 0, 0, 0);
    const unixEpoch = Date.UTC(1970, 0, 1, 0, 0, 0, 0);
    const epochDeltaInMs = unixEpoch - windowsEpoch;
    const internalValue = BigInt(date.valueOf() + epochDeltaInMs) * BigInt(1000);
    return { internalValue };
}
/**
 * @fileoverview This file provides a custom element that requests and shows
 * history clusters given a query. It handles loading more clusters using
 * infinite scrolling as well as deletion of visits within the clusters.
 */
const HistoryClustersElementBase = I18nMixinLit(CrLitElement);
class HistoryClustersElement extends HistoryClustersElementBase {
    static get is() {
        return 'history-clusters';
    }
    static get styles() {
        return getCss$c();
    }
    render() {
        return getHtml$8.bind(this)();
    }
    static get properties() {
        return {
            /**
             * Whether the clusters are in the side panel.
             */
            inSidePanel_: {
                type: Boolean,
                reflect: true,
            },
            /**
             * The current query for which related clusters are requested and shown.
             */
            query: { type: String },
            timeRangeStart: { type: Object },
            /**
             * These 3 properties are components of the browser response to a request
             * for the freshest clusters related to  a given query until an optional
             * given end time (or the present time).
             */
            canLoadMore_: { type: Boolean },
            clusters_: { type: Array },
            hasResult_: { type: Boolean },
            resultQuery_: { type: String },
            /**
             * Boolean determining if spinner shows instead of load more button.
             */
            showSpinner_: { type: Boolean },
            showConfirmationDialog_: { type: Boolean },
            /**
             * The list of visits to be removed. A non-empty array indicates a pending
             * remove request to the browser.
             */
            visitsToBeRemoved_: { type: Array },
            scrollOffset: { type: Number },
            scrollTarget: { type: Object },
            // Whether this element is active, i.e. visible to the user. Defaults to
            // true. Clients should set to false when this element is inactive,
            // e.g. in a tabbed UI when the active tab doesn't contain this element.
            isActive: {
                type: Boolean,
                reflect: true,
            },
            isEmpty: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #isActive_accessor_storage = true;
    //============================================================================
    // Properties
    //============================================================================
    get isActive() { return this.#isActive_accessor_storage; }
    set isActive(value) { this.#isActive_accessor_storage = value; }
    #isEmpty_accessor_storage = true;
    get isEmpty() { return this.#isEmpty_accessor_storage; }
    set isEmpty(value) { this.#isEmpty_accessor_storage = value; }
    #query_accessor_storage = '';
    get query() { return this.#query_accessor_storage; }
    set query(value) { this.#query_accessor_storage = value; }
    #scrollOffset_accessor_storage = 0;
    get scrollOffset() { return this.#scrollOffset_accessor_storage; }
    set scrollOffset(value) { this.#scrollOffset_accessor_storage = value; }
    #scrollTarget_accessor_storage = document.documentElement;
    get scrollTarget() { return this.#scrollTarget_accessor_storage; }
    set scrollTarget(value) { this.#scrollTarget_accessor_storage = value; }
    #timeRangeStart_accessor_storage;
    get timeRangeStart() { return this.#timeRangeStart_accessor_storage; }
    set timeRangeStart(value) { this.#timeRangeStart_accessor_storage = value; }
    #canLoadMore__accessor_storage = false;
    get canLoadMore_() { return this.#canLoadMore__accessor_storage; }
    set canLoadMore_(value) { this.#canLoadMore__accessor_storage = value; }
    #clusters__accessor_storage = [];
    get clusters_() { return this.#clusters__accessor_storage; }
    set clusters_(value) { this.#clusters__accessor_storage = value; }
    #hasResult__accessor_storage = false;
    get hasResult_() { return this.#hasResult__accessor_storage; }
    set hasResult_(value) { this.#hasResult__accessor_storage = value; }
    #resultQuery__accessor_storage = '';
    get resultQuery_() { return this.#resultQuery__accessor_storage; }
    set resultQuery_(value) { this.#resultQuery__accessor_storage = value; }
    browserProxy_;
    #inSidePanel__accessor_storage = loadTimeData.getBoolean('inSidePanel');
    get inSidePanel_() { return this.#inSidePanel__accessor_storage; }
    set inSidePanel_(value) { this.#inSidePanel__accessor_storage = value; }
    lastOffsetHeight_ = 0;
    resizeObserver_ = new ResizeObserver(() => {
        if (this.lastOffsetHeight_ === 0) {
            this.lastOffsetHeight_ = this.scrollTarget.offsetHeight;
            return;
        }
        if (this.scrollTarget.offsetHeight > this.lastOffsetHeight_) {
            this.lastOffsetHeight_ = this.scrollTarget.offsetHeight;
            this.onScrollOrResize_();
        }
    });
    scrollDebounce_ = 200;
    scrollListener_ = () => this.onScrollOrResize_();
    onClustersQueryResultListenerId_ = null;
    onClusterImageUpdatedListenerId_ = null;
    onVisitsRemovedListenerId_ = null;
    onHistoryDeletedListenerId_ = null;
    onQueryChangedByUserListenerId_ = null;
    #showConfirmationDialog__accessor_storage = false;
    get showConfirmationDialog_() { return this.#showConfirmationDialog__accessor_storage; }
    set showConfirmationDialog_(value) { this.#showConfirmationDialog__accessor_storage = value; }
    #showSpinner__accessor_storage = false;
    get showSpinner_() { return this.#showSpinner__accessor_storage; }
    set showSpinner_(value) { this.#showSpinner__accessor_storage = value; }
    scrollTimeout_ = null;
    #visitsToBeRemoved__accessor_storage = [];
    get visitsToBeRemoved_() { return this.#visitsToBeRemoved__accessor_storage; }
    set visitsToBeRemoved_(value) { this.#visitsToBeRemoved__accessor_storage = value; }
    //============================================================================
    // Overridden methods
    //============================================================================
    constructor() {
        super();
        this.browserProxy_ = browserProxyFactory$1.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        // Register a per-document singleton focus outline manager. Some of our
        // child elements depend on the CSS classes set by this singleton.
        FocusOutlineManager.forDocument(document);
        this.onClustersQueryResultListenerId_ =
            this.browserProxy_.callbackRouter.onClustersQueryResult.addListener(this.onClustersQueryResult_.bind(this));
        this.onClusterImageUpdatedListenerId_ =
            this.browserProxy_.callbackRouter.onClusterImageUpdated.addListener(this.onClusterImageUpdated_.bind(this));
        this.onVisitsRemovedListenerId_ =
            this.browserProxy_.callbackRouter.onVisitsRemoved.addListener(this.onVisitsRemoved_.bind(this));
        this.onHistoryDeletedListenerId_ =
            this.browserProxy_.callbackRouter.onHistoryDeleted.addListener(this.onHistoryDeleted_.bind(this));
        this.onQueryChangedByUserListenerId_ =
            this.browserProxy_.callbackRouter.onQueryChangedByUser.addListener(this.onQueryChangedByUser_.bind(this));
        if (this.inSidePanel_) {
            this.browserProxy_.handler.showSidePanelUI();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.onClustersQueryResultListenerId_);
        this.browserProxy_.callbackRouter.removeListener(this.onClustersQueryResultListenerId_);
        this.onClustersQueryResultListenerId_ = null;
        assert(this.onVisitsRemovedListenerId_);
        this.browserProxy_.callbackRouter.removeListener(this.onVisitsRemovedListenerId_);
        this.onVisitsRemovedListenerId_ = null;
        assert(this.onHistoryDeletedListenerId_);
        this.browserProxy_.callbackRouter.removeListener(this.onHistoryDeletedListenerId_);
        this.onHistoryDeletedListenerId_ = null;
        assert(this.onQueryChangedByUserListenerId_);
        this.browserProxy_.callbackRouter.removeListener(this.onQueryChangedByUserListenerId_);
        this.onQueryChangedByUserListenerId_ = null;
        assert(this.onClusterImageUpdatedListenerId_);
        this.browserProxy_.callbackRouter.removeListener(this.onClusterImageUpdatedListenerId_);
        this.onClusterImageUpdatedListenerId_ = null;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('query') ||
            changedProperties.has('timeRangeStart')) {
            this.onQueryChanged_();
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('hasResult_') ||
            changedPrivateProperties.has('clusters_')) {
            this.isEmpty = this.hasResult_ && this.clusters_.length === 0;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('scrollTarget')) {
            const oldTarget = changedProperties.get('scrollTarget');
            // Remove old listeners. ResizeObserver always listens, scroll observer
            // is only on when this element is active.
            if (oldTarget) {
                this.resizeObserver_.disconnect();
                // Also remove the scroll listener if the element is currently active
                // or was active and changed to inactive this lifecycle.
                if (this.isActive || changedProperties.has('isActive')) {
                    oldTarget.removeEventListener('scroll', this.scrollListener_);
                }
            }
            if (this.scrollTarget) {
                this.resizeObserver_.observe(this.scrollTarget);
                if (this.isActive) {
                    this.scrollTarget.addEventListener('scroll', this.scrollListener_);
                }
            }
        }
        else if (changedProperties.has('isActive')) {
            if (this.isActive) {
                // Active changed from false to true. Add the scroll observer.
                this.scrollTarget.addEventListener('scroll', this.scrollListener_);
            }
            else {
                // Active changed from true to false. Remove scroll observer.
                this.scrollTarget.removeEventListener('scroll', this.scrollListener_);
            }
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('clusters_')) {
            const previous = changedPrivateProperties.get('clusters_');
            const clustersRemoved = previous && (previous.length > this.clusters_.length);
            if (clustersRemoved && this.canLoadMore_ &&
                this.$.clusters.offsetHeight < this.scrollTarget.offsetHeight) {
                this.onLoadMoreButtonClick_();
            }
        }
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onCancelButtonClick_() {
        this.visitsToBeRemoved_ = [];
        this.getConfirmationDialog_().close();
    }
    onConfirmationDialogCancel_() {
        this.visitsToBeRemoved_ = [];
    }
    onLoadMoreButtonClick_() {
        if (this.hasResult_ && this.canLoadMore_) {
            this.showSpinner_ = true;
            // Prevent sending further load-more requests until this one finishes.
            this.canLoadMore_ = false;
            this.browserProxy_.handler.loadMoreClusters(this.resultQuery_);
        }
    }
    onRemoveButtonClick_() {
        this.removeVisits_();
        this.getConfirmationDialog_().close();
    }
    /**
     * Called with `event` received from a visit requesting to be hidden.
     */
    onHideVisit_(event) {
        this.browserProxy_.handler.hideVisits([event.detail]);
    }
    /**
     * Called with `event` received from visits requesting to be hidden.
     */
    onHideVisits_(event) {
        this.browserProxy_.handler.hideVisits(event.detail);
    }
    /**
     * Called with `event` received from a cluster requesting to be removed from
     * the list when all its visits have been removed. Contains the cluster index.
     */
    onRemoveCluster_(event) {
        const index = event.detail;
        this.clusters_ =
            [...this.clusters_.slice(0, index), ...this.clusters_.slice(index + 1)];
    }
    /**
     * Called with `event` received from a visit requesting to be removed. `event`
     * may contain the related visits of the said visit, if applicable.
     */
    async onRemoveVisits_(event) {
        // Return early if there is a pending remove request.
        if (this.visitsToBeRemoved_.length) {
            return;
        }
        this.visitsToBeRemoved_ = event.detail;
        // Bypass the confirmation dialog if removing one visit only.
        if (this.visitsToBeRemoved_.length === 1) {
            this.removeVisits_();
            return;
        }
        // Show a confirmation dialog.
        if (!this.showConfirmationDialog_) {
            this.showConfirmationDialog_ = true;
            await this.updateComplete;
        }
        this.getConfirmationDialog_().showModal();
    }
    setScrollDebounceForTest(debounce) {
        this.scrollDebounce_ = debounce;
    }
    /**
     * Called when the scrollable area has been scrolled nearly to the bottom.
     */
    onScrolledToBottom_() {
        if (this.shadowRoot.querySelector(':focus-visible')) {
            // If some element of ours is keyboard-focused, don't automatically load
            // more clusters. It loses the user's position and messes up screen
            // readers. Let the user manually click the "Load More" button, if needed.
            // We use :focus-visible here, because :focus is triggered by mouse focus
            // too. And `FocusOutlineManager.visible()` is too primitive. It's true
            // on page load, and whenever the user is typing in the searchbox.
            return;
        }
        this.onLoadMoreButtonClick_();
    }
    //============================================================================
    // Helper methods
    //============================================================================
    getConfirmationDialog_() {
        const dialog = this.shadowRoot.querySelector('cr-dialog');
        assert(dialog);
        return dialog;
    }
    computePlaceholderText_() {
        if (!this.hasResult_) {
            return '';
        }
        return this.clusters_.length ?
            '' :
            loadTimeData.getString(this.resultQuery_ ? 'noSearchResults' : 'historyClustersNoResults');
    }
    /**
     * Returns true and hides the button unless we actually have more results to
     * load. Note we don't actually hide this button based on keyboard-focus
     * state. This is because if the user is using the mouse, more clusters are
     * loaded before the user ever gets a chance to see this button.
     */
    getLoadMoreButtonHidden_() {
        return !this.hasResult_ || this.clusters_.length === 0 ||
            !this.canLoadMore_;
    }
    /**
     * Returns whether the given index corresponds to the last cluster.
     */
    isLastCluster_(index) {
        return index === this.clusters_.length - 1;
    }
    /**
     * Returns a promise that resolves when the browser is idle.
     */
    onBrowserIdle_() {
        return new Promise(resolve => {
            requestIdleCallback(() => {
                resolve();
            });
        });
    }
    onClustersQueryResult_(result) {
        this.hasResult_ = true;
        this.canLoadMore_ = result.canLoadMore;
        if (result.isContinuation) {
            // Append the new set of clusters to the existing ones, since this is a
            // continuation of the existing clusters.
            this.clusters_ = [...this.clusters_.slice(), ...result.clusters];
        }
        else {
            // Scroll to the top when `result` contains a new set of clusters.
            this.scrollTarget.scrollTop = 0;
            this.clusters_ = result.clusters;
            this.resultQuery_ = result.query;
        }
        // Handle the "tall monitor" edge case: if the returned results are are
        // shorter than the vertical viewport, the <history-clusters> element will
        // not have a scrollbar, and the user will never be able to trigger the
        // iron-scroll-threshold to request more results. Therefore, immediately
        // request more results if there is no scrollbar to fill the viewport.
        //
        // This should happen quite rarely in the queryless state since the backend
        // transparently tries to get at least ~100 visits to cluster.
        //
        // This is likely to happen very frequently in the search query state, since
        // many clusters will not match the search query and will be discarded.
        //
        // Do this on browser idle to avoid jank and to give the DOM a chance to be
        // updated with the results we just got.
        this.onBrowserIdle_().then(() => {
            if ((this.$.clusters.offsetHeight < this.scrollTarget.offsetHeight ||
                this.scrollTarget.scrollHeight <= this.scrollTarget.clientHeight) &&
                this.canLoadMore_) {
                this.onLoadMoreButtonClick_();
            }
        });
        this.showSpinner_ = false;
    }
    /**
     * Called when an image has become available for `clusterIndex`.
     */
    onClusterImageUpdated_(clusterIndex, imageUrl) {
        const cluster = this.clusters_[clusterIndex];
        const newCluster = Object.assign({}, cluster);
        newCluster.imageUrl = imageUrl;
        // TODO(tommycli): Make deletions handle `clusterIndex` properly.
        this.clusters_[clusterIndex] = newCluster;
        this.requestUpdate();
    }
    /**
     * Called when the user entered search query changes. Also used to fetch the
     * initial set of clusters when the page loads.
     */
    onQueryChanged_() {
        this.onBrowserIdle_().then(() => {
            if (this.hasResult_ && this.canLoadMore_) {
                // Prevent sending further load-more requests until this one finishes.
                this.canLoadMore_ = false;
            }
            this.browserProxy_.handler.startQueryClusters(this.query.trim(), this.timeRangeStart ? jsDateToMojoDate$1(this.timeRangeStart) : null, new URLSearchParams(window.location.search).has('recluster'));
        });
    }
    /**
     * Called with the original remove params when the last accepted request to
     * browser to remove visits succeeds.
     */
    onVisitsRemoved_(removedVisits) {
        // Show the confirmation toast once done removing one visit only; since a
        // confirmation dialog was not shown prior to the action.
        if (removedVisits.length === 1) {
            this.$.confirmationToast.show();
        }
    }
    /**
     * Called when History is deleted from a different tab.
     */
    onHistoryDeleted_() {
        // Just re-issue the existing query to "reload" the results and display
        // the externally deleted History. It would be nice if we could save the
        // user's scroll position, but History doesn't do that either.
        this.onQueryChanged_();
    }
    /**
     * Called when the query is changed by the user externally.
     */
    onQueryChangedByUser_(query) {
        // Don't directly change the query, but instead let the containing element
        // update the searchbox UI. That in turn will cause this object to issue
        // a new query to the backend.
        this.fire('query-changed-by-user', query);
    }
    onScrollOrResize_() {
        // Debounce by 200ms.
        if (this.scrollTimeout_) {
            clearTimeout(this.scrollTimeout_);
        }
        this.scrollTimeout_ =
            setTimeout(() => this.onScrollTimeout_(), this.scrollDebounce_);
    }
    onScrollTimeout_() {
        this.scrollTimeout_ = null;
        const lowerScroll = this.scrollTarget.scrollHeight -
            this.scrollTarget.scrollTop - this.scrollTarget.offsetHeight;
        if (lowerScroll < 500) {
            this.onScrolledToBottom_();
        }
    }
    removeVisits_() {
        this.browserProxy_.handler.removeVisits(this.visitsToBeRemoved_)
            .then(() => {
            // The returned promise resolves with whether the request succeeded in
            // the browser. That value may be used to show a toast but is ignored
            // for now. Allow remove requests again.
            this.visitsToBeRemoved_ = [];
        });
    }
}
customElements.define(HistoryClustersElement.is, HistoryClustersElement);

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * cr-lazy-render-lit helps with lazy rendering elements only when they are
 * actually needed (requested to be shown by the user). The lazy rendered
 * node is rendered right before the cr-lazy-render-lit node itself, such that
 * it can be fully styled by the parent, or use Lit bindings referring to the
 * parent's reactive properties.
 *
 * Example usage:
 *   <cr-lazy-render-lit id="menu"
 *       .template="${() => html`<heavy-menu></heavy-menu>`}">
 *   </cr-lazy-render-lit>
 *
 * Note that the provided template should create exactly one top-level DOM node,
 * otherwise the result of this.get() will not be correct.
 *
 *   this.$.menu.get().show();
 */
class CrLazyRenderLitElement extends CrLitElement {
    static get is() {
        return 'cr-lazy-render-lit';
    }
    render() {
        if (this.rendered_) {
            // Render items into the parent's DOM using the client provided template.
            render(this.template(), this.parentNode, {
                host: this.getRootNode().host,
                // Specify 'renderBefore', so that the lazy rendered node can be
                // easily located in get() later on.
                renderBefore: this,
            });
        }
        return html ``;
    }
    static get properties() {
        return {
            template: { type: Object },
            rendered_: {
                type: Boolean,
                state: true,
            },
        };
    }
    #rendered__accessor_storage = false;
    get rendered_() { return this.#rendered__accessor_storage; }
    set rendered_(value) { this.#rendered__accessor_storage = value; }
    #template_accessor_storage = () => html ``;
    get template() { return this.#template_accessor_storage; }
    set template(value) { this.#template_accessor_storage = value; }
    child_ = null;
    /**
     * Stamp the template into the DOM tree synchronously
     * @return Child element which has been stamped into the DOM tree.
     */
    get() {
        if (!this.rendered_) {
            this.rendered_ = true;
            this.performUpdate();
            this.child_ = this.previousElementSibling;
        }
        assert(this.child_);
        return this.child_;
    }
    /**
     * @return The element contained in the template, if it has
     *   already been stamped.
     */
    getIfExists() {
        return this.child_;
    }
}
customElements.define(CrLazyRenderLitElement.is, CrLazyRenderLitElement);

let instance$c = null;
function getCss$b() {
    return instance$c || (instance$c = [...[], css `.buttons{--cr-feedback-buttons-icon-size_:16px;display:grid;grid-auto-columns:var(--cr-feedback-buttons-icon-size_);grid-auto-rows:var(--cr-feedback-buttons-icon-size_);grid-auto-flow:column;gap:12px;align-items:center;justify-items:center}cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-icon-size:var(--cr-feedback-buttons-icon-size_);--cr-icon-button-size:24px;margin:0}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$7() {
    return html `
<div class="buttons">
  <cr-icon-button id="thumbsUp" iron-icon="${this.getThumbsUpIcon_()}"
      aria-label="${this.thumbsUpLabel_}" title="${this.thumbsUpLabel_}"
      aria-pressed="${this.getThumbsUpAriaPressed_()}"
      @click="${this.onThumbsUpClick_}" ?disabled="${this.disabled}">
  </cr-icon-button>
  <cr-icon-button id="thumbsDown" iron-icon="${this.getThumbsDownIcon_()}"
      aria-label="${this.thumbsDownLabel_}" title="${this.thumbsDownLabel_}"
      aria-pressed="${this.getThumbsDownAriaPressed_()}"
      @click="${this.onThumbsDownClick_}" ?disabled="${this.disabled}">
  </cr-icon-button>
</div>`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrFeedbackOption;
(function (CrFeedbackOption) {
    CrFeedbackOption[CrFeedbackOption["THUMBS_DOWN"] = 0] = "THUMBS_DOWN";
    CrFeedbackOption[CrFeedbackOption["THUMBS_UP"] = 1] = "THUMBS_UP";
    CrFeedbackOption[CrFeedbackOption["UNSPECIFIED"] = 2] = "UNSPECIFIED";
})(CrFeedbackOption || (CrFeedbackOption = {}));
class CrFeedbackButtonsElement extends CrLitElement {
    static get is() {
        return 'cr-feedback-buttons';
    }
    static get styles() {
        return getCss$b();
    }
    render() {
        return getHtml$7.bind(this)();
    }
    static get properties() {
        return {
            selectedOption: { type: Number },
            thumbsDownLabel_: { type: String },
            thumbsUpLabel_: { type: String },
            disabled: { type: Boolean },
        };
    }
    #selectedOption_accessor_storage = CrFeedbackOption.UNSPECIFIED;
    get selectedOption() { return this.#selectedOption_accessor_storage; }
    set selectedOption(value) { this.#selectedOption_accessor_storage = value; }
    #thumbsDownLabel__accessor_storage = loadTimeData.getString('thumbsDown');
    get thumbsDownLabel_() { return this.#thumbsDownLabel__accessor_storage; }
    set thumbsDownLabel_(value) { this.#thumbsDownLabel__accessor_storage = value; }
    #thumbsUpLabel__accessor_storage = loadTimeData.getString('thumbsUp');
    get thumbsUpLabel_() { return this.#thumbsUpLabel__accessor_storage; }
    set thumbsUpLabel_(value) { this.#thumbsUpLabel__accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    getThumbsDownAriaPressed_() {
        return this.selectedOption === CrFeedbackOption.THUMBS_DOWN;
    }
    getThumbsDownIcon_() {
        return this.selectedOption === CrFeedbackOption.THUMBS_DOWN ?
            'cr:thumb-down-filled' :
            'cr:thumb-down';
    }
    getThumbsUpAriaPressed_() {
        return this.selectedOption === CrFeedbackOption.THUMBS_UP;
    }
    getThumbsUpIcon_() {
        return this.selectedOption === CrFeedbackOption.THUMBS_UP ?
            'cr:thumb-up-filled' :
            'cr:thumb-up';
    }
    async notifySelectedOptionChanged_() {
        // Wait for the element's DOM to be updated before dispatching
        // selected-option-changed event.
        await this.updateComplete;
        this.fire('selected-option-changed', { value: this.selectedOption });
    }
    onThumbsDownClick_() {
        this.selectedOption = this.selectedOption === CrFeedbackOption.THUMBS_DOWN ?
            CrFeedbackOption.UNSPECIFIED :
            CrFeedbackOption.THUMBS_DOWN;
        this.notifySelectedOptionChanged_();
    }
    onThumbsUpClick_() {
        this.selectedOption = this.selectedOption === CrFeedbackOption.THUMBS_UP ?
            CrFeedbackOption.UNSPECIFIED :
            CrFeedbackOption.THUMBS_UP;
        this.notifySelectedOptionChanged_();
    }
}
customElements.define(CrFeedbackButtonsElement.is, CrFeedbackButtonsElement);

let instance$b = null;
function getCss$a() {
    return instance$b || (instance$b = [...[], css `:host{--cr-loading-gradient-color-start:var(--color-loading-gradient-start,transparent);--cr-loading-gradient-color-middle:var(--color-loading-gradient-middle,var(--cr-fallback-color-primary-container));--cr-loading-gradient-color-end:var(--color-loading-gradient-end,rgb(231,248,237));display:flex;width:100%;height:fit-content;position:relative}@media (prefers-color-scheme:dark){:host{--cr-loading-gradient-color-end:var(--color-loading-gradient-end,rgb(15,82,35))}}#gradient{position:absolute;inset:0;background:linear-gradient(135deg,var(--cr-loading-gradient-color-start) 0%,var(--cr-loading-gradient-color-middle) 20%,var(--cr-loading-gradient-color-end) 40%,var(--cr-loading-gradient-color-start) 60%,var(--cr-loading-gradient-color-middle) 80%,var(--cr-loading-gradient-color-end) 100%);background-position:100% 100%;background-size:250% 250%;animation:gradient 2s infinite linear}@keyframes gradient{0%{background-position:100% 100%}100%{background-position:0% 0%}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$6() {
    return html `
<div id="gradient"></div>
<slot @slotchange="${this.onSlotchange_}"></slot>`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* Count of cr-loading-gradient elements created. Used to assign unique IDs.
 * Unique IDs are necessary since clipPaths are slotted in from the light DOM,
 * so there can be leakages across multiple <cr-loading-gradient> instances. */
let count = 0;
class CrLoadingGradientElement extends CrLitElement {
    static get is() {
        return 'cr-loading-gradient';
    }
    static get styles() {
        return getCss$a();
    }
    render() {
        return getHtml$6.bind(this)();
    }
    onSlotchange_() {
        const clipPath = this.querySelector('svg clipPath');
        assert(clipPath);
        const generatedId = `crLoadingGradient${count++}`;
        clipPath.id = generatedId;
        this.style.clipPath = `url(#${generatedId})`;
    }
}
customElements.define(CrLoadingGradientElement.is, CrLoadingGradientElement);

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HOVERED_STYLE = 'hovered';
const MouseHoverableMixinLit = (superClass) => {
    class MouseHoverableMixinLit extends superClass {
        firstUpdated(changedProperties) {
            super.firstUpdated(changedProperties);
            this.addEventListener('pointerenter', (e) => {
                const hostElement = e.currentTarget;
                hostElement.classList.toggle(HOVERED_STYLE, e.pointerType === 'mouse');
            });
            this.addEventListener('pointerleave', (e) => {
                if (e.pointerType !== 'mouse') {
                    return;
                }
                const hostElement = e.currentTarget;
                hostElement.classList.remove(HOVERED_STYLE);
            });
        }
    }
    return MouseHoverableMixinLit;
};

let instance$a = null;
function getCss$9() {
    return instance$a || (instance$a = [...[getCss$w(), getCss$r()], css `:host{box-sizing:border-box;display:block;position:relative;width:100%}#item{--cr-url-list-item-image-container-border_:2px solid white;--cr-url-list-item-image-container-border-radius_:5px;align-items:center;box-sizing:border-box;cursor:default;display:flex;height:var(--cr-url-list-item-height,48px);padding:var(--cr-url-list-item-padding,4px 16px);width:100%}@media (prefers-color-scheme:dark){#item{--cr-url-list-item-image-container-border_:2px solid black}}:host([size=compact]) #item{padding:var(--cr-url-list-item-padding,6px 16px);height:var(--cr-url-list-item-height,36px)}:host([size=large]) #item{padding:var(--cr-url-list-item-padding,6px 16px);height:var(--cr-url-list-item-height,68px)}:host([size=medium]) #item,:host([size=large]) #item{--cr-url-list-item-image-container-border-radius_:9px}:host(.hovered),:host([force-hover]){background:var(--cr-hover-background-color)}:host(.active),:host-context(.focus-outline-visible):host(:focus-within){background:var(--cr-active-background-color)}#anchor,#button{appearance:none;background:transparent;border:0;position:absolute;inset:0}#anchor:focus,#button:focus{outline:0}@media (forced-colors:active){:host(.hovered),:host([force-hover]){outline:1px solid Highlight;outline-offset:-1px}#anchor:focus,#button:focus{outline:var(--cr-focus-outline-hcm)}#iconContainer{border:1px solid CanvasText;box-sizing:border-box}}::slotted([slot=prefix]){margin-inline-end:16px}#iconContainer{align-items:center;background:var(--color-list-item-url-favicon-background,var(--cr-fallback-color-neutral-container));border-radius:4px;display:flex;flex-shrink:0;height:var(--cr-url-list-item-container-height,40px);justify-content:center;margin-inline-end:var(--cr-url-list-item-icon-margin-end,16px);overflow:hidden;width:var(--cr-url-list-item-container-width,40px)}:host([size=compact]) #iconContainer{height:24px;margin-inline-end:8px;width:24px}:host([is-folder_]) #iconContainer{background:var(--color-list-item-folder-icon-background,var(--cr-fallback-color-primary-container));color:var(--color-list-item-folder-icon-foreground,var(--cr-fallback-color-on-primary-container))}:host([size=large]) #iconContainer{height:56px;margin-inline-end:16px;width:56px}:host([size=medium]) #iconContainer,:host([size=large]) #iconContainer{border-radius:8px}#folder-icon{display:flex}.favicon{background-position:center center;background-repeat:no-repeat;height:16px;width:16px}:host([size=large]) .folder-and-count{align-items:center;display:grid;grid-template-columns:repeat(2,50%);grid-template-rows:repeat(2,50%);height:100%;justify-items:center;width:100%}.folder-and-count .image-container{border-bottom:var(--cr-url-list-item-image-container-border_);border-radius:0 var(--cr-url-list-item-image-container-border-radius_) 0 0;box-sizing:border-box;height:100%;width:100%}:host-context([dir=rtl]) .folder-and-count .image-container{border-radius:var(--cr-url-list-item-image-container-border-radius_) 0 0 0}.folder-and-count .image-container img{height:100%;object-fit:cover;opacity:95%;width:100%}.folder-and-count:not(:has(div:nth-child(3)))
.image-container:first-of-type{border-bottom:none;border-inline-end:var(--cr-url-list-item-image-container-border_);border-radius:var(--cr-url-list-item-image-container-border-radius_) 0 0 var(--cr-url-list-item-image-container-border-radius_);grid-row:1/span 2}:host-context([dir=rtl]) .folder-and-count:not(:has(div:nth-child(3)))
.image-container:first-of-type{border-radius:0 var(--cr-url-list-item-image-container-border-radius_) var(--cr-url-list-item-image-container-border-radius_) 0}.folder-and-count:not(:has(div:nth-child(2))) .image-container:first-of-type{border:none;border-radius:var(--cr-url-list-item-image-container-border-radius_);grid-column:1/span 2;grid-row:1/span 2}.folder{--cr-icon-color:currentColor;--cr-icon-size:20px;height:var(--cr-icon-size);margin:0;width:var(--cr-icon-size)}:host([size=compact]) .folder{--cr-icon-size:16px}.count{--cr-url-list-item-count-border-radius:4px;display:none}:host([size=large]) .count{align-items:center;background:var(--color-list-item-folder-icon-background,var(--cr-fallback-color-primary-container));border-radius:var(--cr-url-list-item-count-border-radius) 0 0 0;color:var(--color-list-item-folder-icon-foreground,var(--cr-fallback-color-on-primary-container));display:flex;font-weight:500;grid-column:2;grid-row:2;height:100%;justify-content:center;width:100%;z-index:1}:host-context([dir=rtl]):host([size=large]) .count{border-radius:0 var(--cr-url-list-item-count-border-radius) 0 0}.folder-and-count:has(div:nth-child(2)) .count{border-radius:0}:host([size=large]) .folder-and-count:not(:has(div:nth-child(2))):has(.image-container) .count{border-inline-start:var(--cr-url-list-item-image-container-border_);border-top:var(--cr-url-list-item-image-container-border_)}.image-container{background:black;border-radius:var(--cr-url-list-item-image-container-border-radius_);height:100%;width:100%}@media (prefers-color-scheme:dark){.image-container{background:transparent}}.metadata{display:flex;flex-direction:column;gap:8px;min-width:0;width:100%}:host([has-slotted-content_]) .metadata{display:none}:host([size=compact]) .metadata{align-items:center;flex-direction:row}:host([size=compact]) .metadata,:host([size=medium]) .metadata{gap:var(--cr-url-list-item-metadata-gap,4px)}:host([size=large]) .metadata{gap:var(--cr-url-list-item-metadata-gap,2px)}.title{color:var(--cr-primary-text-color);font-family:inherit;font-size:12px;font-weight:500}.title:focus{outline:none}.descriptions{align-items:center;display:flex;gap:3px;height:14px}:host([size=compact]) .descriptions{display:contents}:host([size=large]) .descriptions{align-items:flex-start;flex-direction:column;gap:4px;height:auto}:host(:not([has-descriptions_])) .descriptions{display:none}.description{color:var(--cr-secondary-text-color);display:flex;font-size:11px;font-weight:400;max-width:100%}.description-text:has(+.description-meta:not([hidden])){flex-shrink:1}:host([reverse-elide-description]) .description-text{direction:rtl}:host([size=compact]) .description{font-size:12px}.title,.description-text,.description-meta{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.description-meta{flex-shrink:0;padding-inline-start:4px}.badges{align-items:flex-start;display:flex;gap:4px;min-width:fit-content}:host(:not([has-badges])) .badges{display:none}:host([has-badges]) .badges{margin-inline-start:4px}.suffix{align-items:center;color:var(--cr-secondary-text-color);display:flex;flex-shrink:0;font-size:11px;font-weight:400;line-height:20px;margin-inline-end:-4px;margin-inline-start:auto}::slotted([slot=suffix]){display:none}::slotted(cr-icon-button[slot=suffix]){--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}::slotted([slot=suffix]:not(cr-icon-button)){margin-inline-end:16px}:host(.hovered) ::slotted([slot=suffix]),:host-context(.focus-outline-visible):host(:focus-within) ::slotted([slot=suffix]),:host([always-show-suffix]) ::slotted([slot=suffix]){display:block}.url-image{height:100%;object-fit:cover;object-position:center center;opacity:95%;width:100%}`]);
}

let instance$9 = null;
function getCss$8() {
    return instance$9 || (instance$9 = [...[getCss$9()], css `:host([is-folder_]) #iconContainer:not(#z){background:var(--leo-color-container-interactive);border:1px solid var(--leo-color-divider-interactive);border-radius:var(--leo-radius-s);color:var(--leo-color-icon-interactive)}
`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$5() {
    // clang-format off
    return html `
<a id="anchor" .href="${this.url || nothing}" ?hidden="${!this.asAnchor}"
    target="${this.asAnchorTarget}"
    aria-label="${this.getAnchorAriaLabel_() || nothing}"
    aria-description="${this.getAnchorAriaDescription_() || nothing}">
</a>
<button id="button" ?hidden="${this.asAnchor}"
    aria-label="${this.getButtonAriaLabel_() || nothing}"
    aria-description="${this.getButtonAriaDescription_() || nothing}">
</button>

<div id="item">
  <slot name="prefix"></slot>
  <div id="iconContainer" part="iconContainer">
    <slot id="customIcon" name="customIcon">
      <div class="favicon" ?hidden="${!this.shouldShowFavicon_()}"
          .style="background-image: ${this.getFavicon_()};">
      </div>
      <div class="image-container" ?hidden="${!this.shouldShowUrlImage_()}">
        <img class="url-image" is="cr-auto-img" auto-src="${this.imageUrls[0]}"
            draggable="false">
      </div>
      <div class="folder-and-count" ?hidden="${!this.shouldShowFolderCount_()}">
        ${this.shouldShowFolderImages_() ? html `
          ${this.imageUrls.map((item, index) => html `
            ${this.shouldShowImageUrl_(item, index) ? html `
              <div class="image-container" ?hidden="${!this.firstImageLoaded_}">
                <img class="folder-image" is="cr-auto-img" auto-src="${item}"
                    draggable="false">
              </div>
            ` : ''}
          `)}
        ` : ''}
        <slot id="folder-icon" name="folder-icon">
          <div class="folder cr-icon icon-folder-open"
              ?hidden="${!this.shouldShowFolderIcon_()}">
          </div>
        </slot>
        <div class="count">${this.getDisplayedCount_()}</div>
      </div>
    </slot>
  </div>
  <slot id="content" name="content" @slotchange="${this.onContentSlotchange_}">
  </slot>
  <div id="metadata" class="metadata">
    <span class="title">${this.title}</span>
    <div class="descriptions">
      <div class="description" ?hidden="${!this.description}">
        <span class="description-text">
          <bdi>${this.description}</bdi>
        </span>
        <span class="description-meta" ?hidden="${!this.descriptionMeta}">
          · ${this.descriptionMeta}
        </span>
      </div>
      <div id="badgesContainer" class="badges">
        <slot id="badges" name="badges"
            @slotchange="${this.onBadgesSlotchange_}">
        </slot>
      </div>
    </div>
  </div>
  <div class="suffix" part="suffix">
    <slot name="suffix"></slot>
  </div>
</div>
<slot name="footer"></slot>`;
    // clang-format on
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrUrlListItemSize;
(function (CrUrlListItemSize) {
    CrUrlListItemSize["COMPACT"] = "compact";
    CrUrlListItemSize["MEDIUM"] = "medium";
    CrUrlListItemSize["LARGE"] = "large";
})(CrUrlListItemSize || (CrUrlListItemSize = {}));
const CrUrlListItemElementBase = MouseHoverableMixinLit(CrLitElement);
class CrUrlListItemElement extends CrUrlListItemElementBase {
    static get is() {
        return 'cr-url-list-item';
    }
    static get styles() {
        return getCss$8();
    }
    render() {
        return getHtml$5.bind(this)();
    }
    static get properties() {
        return {
            alwaysShowSuffix: {
                type: Boolean,
                reflect: true,
            },
            itemAriaLabel: { type: String },
            itemAriaDescription: { type: String },
            count: { type: Number },
            description: { type: String },
            url: { type: String },
            title: {
                reflect: true,
                type: String,
            },
            hasBadges: {
                type: Boolean,
                reflect: true,
            },
            hasDescriptions_: {
                type: Boolean,
                reflect: true,
            },
            hasSlottedContent_: {
                type: Boolean,
                reflect: true,
            },
            reverseElideDescription: {
                type: Boolean,
                reflect: true,
            },
            isFolder_: {
                type: Boolean,
                reflect: true,
            },
            size: {
                type: String,
                reflect: true,
            },
            imageUrls: { type: Array },
            firstImageLoaded_: {
                type: Boolean,
                state: true,
            },
            forceHover: {
                reflect: true,
                type: Boolean,
            },
            descriptionMeta: { type: String },
            /**
             * Flag that determines if the element should use an anchor tag or a
             * button element as its focusable item. An anchor provides the native
             * context menu and browser interactions for links, while a button
             * provides its own unique functionality, such as pressing space to
             * activate.
             */
            asAnchor: { type: Boolean },
            asAnchorTarget: { type: String },
        };
    }
    #alwaysShowSuffix_accessor_storage = false;
    get alwaysShowSuffix() { return this.#alwaysShowSuffix_accessor_storage; }
    set alwaysShowSuffix(value) { this.#alwaysShowSuffix_accessor_storage = value; }
    #asAnchor_accessor_storage = false;
    get asAnchor() { return this.#asAnchor_accessor_storage; }
    set asAnchor(value) { this.#asAnchor_accessor_storage = value; }
    #asAnchorTarget_accessor_storage = '_self';
    get asAnchorTarget() { return this.#asAnchorTarget_accessor_storage; }
    set asAnchorTarget(value) { this.#asAnchorTarget_accessor_storage = value; }
    #itemAriaLabel_accessor_storage;
    get itemAriaLabel() { return this.#itemAriaLabel_accessor_storage; }
    set itemAriaLabel(value) { this.#itemAriaLabel_accessor_storage = value; }
    #itemAriaDescription_accessor_storage;
    get itemAriaDescription() { return this.#itemAriaDescription_accessor_storage; }
    set itemAriaDescription(value) { this.#itemAriaDescription_accessor_storage = value; }
    #count_accessor_storage;
    get count() { return this.#count_accessor_storage; }
    set count(value) { this.#count_accessor_storage = value; }
    #description_accessor_storage;
    get description() { return this.#description_accessor_storage; }
    set description(value) { this.#description_accessor_storage = value; }
    #reverseElideDescription_accessor_storage = false;
    get reverseElideDescription() { return this.#reverseElideDescription_accessor_storage; }
    set reverseElideDescription(value) { this.#reverseElideDescription_accessor_storage = value; }
    #hasBadges_accessor_storage = false;
    get hasBadges() { return this.#hasBadges_accessor_storage; }
    set hasBadges(value) { this.#hasBadges_accessor_storage = value; }
    #hasDescriptions__accessor_storage = false;
    get hasDescriptions_() { return this.#hasDescriptions__accessor_storage; }
    set hasDescriptions_(value) { this.#hasDescriptions__accessor_storage = value; }
    #hasSlottedContent__accessor_storage = false;
    get hasSlottedContent_() { return this.#hasSlottedContent__accessor_storage; }
    set hasSlottedContent_(value) { this.#hasSlottedContent__accessor_storage = value; }
    #isFolder__accessor_storage = false;
    get isFolder_() { return this.#isFolder__accessor_storage; }
    set isFolder_(value) { this.#isFolder__accessor_storage = value; }
    #size_accessor_storage = CrUrlListItemSize.MEDIUM;
    get size() { return this.#size_accessor_storage; }
    set size(value) { this.#size_accessor_storage = value; }
    #title_accessor_storage = '';
    get title() { return this.#title_accessor_storage; }
    set title(value) { this.#title_accessor_storage = value; }
    #url_accessor_storage;
    get url() { return this.#url_accessor_storage; }
    set url(value) { this.#url_accessor_storage = value; }
    #imageUrls_accessor_storage = [];
    get imageUrls() { return this.#imageUrls_accessor_storage; }
    set imageUrls(value) { this.#imageUrls_accessor_storage = value; }
    #firstImageLoaded__accessor_storage = false;
    get firstImageLoaded_() { return this.#firstImageLoaded__accessor_storage; }
    set firstImageLoaded_(value) { this.#firstImageLoaded__accessor_storage = value; }
    #forceHover_accessor_storage = false;
    get forceHover() { return this.#forceHover_accessor_storage; }
    set forceHover(value) { this.#forceHover_accessor_storage = value; }
    #descriptionMeta_accessor_storage = '';
    get descriptionMeta() { return this.#descriptionMeta_accessor_storage; }
    set descriptionMeta(value) { this.#descriptionMeta_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.resetFirstImageLoaded_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('hasBadges') ||
            changedProperties.has('description')) {
            this.hasDescriptions_ =
                !!this.description || this.hasBadges || !!this.descriptionMeta;
        }
        if (changedProperties.has('count')) {
            this.isFolder_ = this.count !== undefined;
        }
        if (changedProperties.has('size')) {
            assert(Object.values(CrUrlListItemSize).includes(this.size));
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        FocusOutlineManager.forDocument(document);
        this.addEventListener('pointerdown', () => this.setActiveState_(true));
        this.addEventListener('pointerup', () => this.setActiveState_(false));
        this.addEventListener('pointerleave', () => this.setActiveState_(false));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('imageUrls')) {
            this.resetFirstImageLoaded_();
        }
    }
    focus() {
        this.getFocusableElement().focus();
    }
    getFocusableElement() {
        if (this.asAnchor) {
            return this.$.anchor;
        }
        else {
            return this.$.button;
        }
    }
    resetFirstImageLoaded_() {
        this.firstImageLoaded_ = false;
        const image = this.shadowRoot.querySelector('img');
        if (!image) {
            return;
        }
        if (image.complete) {
            this.firstImageLoaded_ = true;
            return;
        }
        image.addEventListener('load', () => {
            this.firstImageLoaded_ = true;
        }, { once: true });
    }
    getItemAriaDescription_() {
        return this.itemAriaDescription || this.description;
    }
    getItemAriaLabel_() {
        return this.itemAriaLabel || this.title;
    }
    getAnchorAriaDescription_() {
        return this.asAnchor ? this.getItemAriaDescription_() : undefined;
    }
    getAnchorAriaLabel_() {
        return this.asAnchor ? this.getItemAriaLabel_() : undefined;
    }
    getButtonAriaDescription_() {
        return !this.asAnchor ? this.getItemAriaDescription_() : undefined;
    }
    getButtonAriaLabel_() {
        return !this.asAnchor ? this.getItemAriaLabel_() : undefined;
    }
    getDisplayedCount_() {
        if (this.count && this.count > 999) {
            // The square to display the count only fits 3 characters.
            return '99+';
        }
        return this.count === undefined ? '' : this.count.toString();
    }
    getFavicon_() {
        return getFaviconForPageURL(this.url || '', false);
    }
    shouldShowImageUrl_(_url, index) {
        return index <= 1;
    }
    onBadgesSlotchange_() {
        this.hasBadges = this.$.badges.assignedElements({ flatten: true }).length > 0;
    }
    onContentSlotchange_() {
        this.hasSlottedContent_ =
            this.$.content.assignedElements({ flatten: true }).length > 0;
    }
    setActiveState_(active) {
        this.classList.toggle('active', active);
    }
    shouldShowFavicon_() {
        return this.url !== undefined &&
            (this.size === CrUrlListItemSize.COMPACT ||
                this.imageUrls.length === 0);
    }
    shouldShowUrlImage_() {
        return this.url !== undefined &&
            !(this.size === CrUrlListItemSize.COMPACT ||
                this.imageUrls.length === 0) &&
            this.firstImageLoaded_;
    }
    shouldShowFolderImages_() {
        return this.size !== CrUrlListItemSize.COMPACT;
    }
    shouldShowFolderIcon_() {
        return this.size === CrUrlListItemSize.COMPACT ||
            this.imageUrls.length === 0;
    }
    shouldShowFolderCount_() {
        return this.url === undefined;
    }
}
customElements.define(CrUrlListItemElement.is, CrUrlListItemElement);

const div = document.createElement('div');
div.innerHTML = getTrustedHTML `<!-- TODO(b/328300718): Replace icons. -->
<cr-iconset name="history-embeddings" size="24">
  <svg>
    <defs>
      <g id="search-old">
        <path d="M16.6 20L10.3 13.7C9.8 14.1 9.225 14.4167 8.575 14.65C7.925 14.8833 7.23333 15 6.5 15C4.68333 15 3.14167 14.375 1.875 13.125C0.625 11.8583 0 10.3167 0 8.5C0 6.68333 0.625 5.15 1.875 3.9C3.14167 2.63333 4.68333 2 6.5 2C7.01667 2 7.51667 2.05833 8 2.175C8.48333 2.275 8.94167 2.43333 9.375 2.65L7.825 4.2C7.60833 4.13333 7.39167 4.08333 7.175 4.05C6.95833 4.01667 6.73333 4 6.5 4C5.25 4 4.18333 4.44167 3.3 5.325C2.43333 6.19167 2 7.25 2 8.5C2 9.75 2.43333 10.8167 3.3 11.7C4.18333 12.5667 5.25 13 6.5 13C7.66667 13 8.66667 12.625 9.5 11.875C10.35 11.1083 10.8417 10.15 10.975 9H12.975C12.925 9.63333 12.7833 10.2333 12.55 10.8C12.3333 11.3667 12.05 11.8667 11.7 12.3L18 18.6L16.6 20ZM14.5 11C14.5 9.46667 13.9667 8.16667 12.9 7.1C11.8333 6.03333 10.5333 5.5 9 5.5C10.5333 5.5 11.8333 4.96667 12.9 3.9C13.9667 2.83333 14.5 1.53333 14.5 -9.53674e-07C14.5 1.53333 15.0333 2.83333 16.1 3.9C17.1667 4.96667 18.4667 5.5 20 5.5C18.4667 5.5 17.1667 6.03333 16.1 7.1C15.0333 8.16667 14.5 9.46667 14.5 11Z">
        </path>
      </g>
      <g id="search-spark">
        <path d="M18.602 9.602c-.102 0-.168-.051-.204-.153a5.135 5.135 0 0 0-1.386-2.46 5.135 5.135 0 0 0-2.461-1.387c-.102-.036-.153-.102-.153-.204 0-.113.051-.183.153-.199a5.167 5.167 0 0 0 2.46-1.386 5.135 5.135 0 0 0 1.387-2.461c.036-.102.102-.153.204-.153.113 0 .183.051.199.153.25.949.715 1.765 1.398 2.449a5.312 5.312 0 0 0 2.45 1.398c.101.016.152.086.152.2 0 .101-.051.167-.153.203-.949.23-1.77.695-2.46 1.386A5.167 5.167 0 0 0 18.8 9.45c-.016.102-.086.153-.2.153Zm-9 6c-1.668 0-3.086-.586-4.25-1.75-1.168-1.168-1.75-2.586-1.75-4.25 0-1.668.582-3.086 1.75-4.25 1.164-1.168 2.582-1.75 4.25-1.75.28 0 .562.015.835.046.274.036.547.094.813.176.316.086.523.239.625.465a.972.972 0 0 1 .05.688.921.921 0 0 1-.386.535c-.191.125-.43.148-.715.062a2.999 2.999 0 0 0-.597-.136 5.422 5.422 0 0 0-.625-.04c-1.168 0-2.16.41-2.977 1.227-.816.816-1.227 1.809-1.227 2.977 0 1.164.41 2.156 1.227 2.972.816.817 1.809 1.227 2.977 1.227 1.164 0 2.156-.41 2.972-1.227.817-.816 1.227-1.808 1.227-2.972 0-.301.09-.528.273-.676a.948.948 0 0 1 .625-.227c.235 0 .442.074.625.227.184.148.278.375.278.676a5.92 5.92 0 0 1-.301 1.859c-.2.61-.492 1.172-.875 1.687l5.347 5.352a.874.874 0 0 1 .278.637.874.874 0 0 1-.278.636.874.874 0 0 1-.636.278.874.874 0 0 1-.637-.278l-5.352-5.347a5.881 5.881 0 0 1-1.687.875c-.606.199-1.227.3-1.86.3Zm0 0"></path>
      </g>
      <g id="heading-old">
        <path d="M19 9L17.75 6.25L15 5L17.75 3.75L19 0.999999L20.25 3.75L23 5L20.25 6.25L19 9ZM19 23L17.75 20.25L15 19L17.75 17.75L19 15L20.25 17.75L23 19L20.25 20.25L19 23ZM10 20L7.5 14.5L2 12L7.5 9.5L10 4L12.5 9.5L18 12L12.5 14.5L10 20ZM10 15.15L11 13L13.15 12L11 11L10 8.85L9 11L6.85 12L9 13L10 15.15Z">
        </path>
      </g>
      <g id="astrophotography-mode">
        <path d="m17.3 6.676-2-.875a.345.345 0 0 1-.187-.176.538.538 0 0 1-.062-.25c0-.082.02-.164.062-.238a.333.333 0 0 1 .188-.16l2-.903.875-1.972a.32.32 0 0 1 .176-.188.527.527 0 0 1 .25-.062c.082 0 .16.02.234.062a.34.34 0 0 1 .164.188l.898 1.972 1.977.903a.36.36 0 0 1 .188.16.473.473 0 0 1 .062.238c0 .082-.02.168-.063.25a.373.373 0 0 1-.187.176l-1.977.875-.898 2a.367.367 0 0 1-.164.187.5.5 0 0 1-.234.063.577.577 0 0 1-.25-.063.343.343 0 0 1-.176-.187Zm-9.527 7.722-4-1.796a.707.707 0 0 1-.296-.266.665.665 0 0 1-.102-.36.678.678 0 0 1 .398-.624l4-1.801 1.801-4a.738.738 0 0 1 .262-.301.688.688 0 0 1 .363-.102c.133 0 .254.036.364.102a.71.71 0 0 1 .261.3l1.801 4 4 1.802a.71.71 0 0 1 .3.261c.067.11.098.227.098.364a.662.662 0 0 1-.097.359.718.718 0 0 1-.301.266l-4 1.796-1.8 4a.688.688 0 0 1-.262.301.688.688 0 0 1-.364.102.688.688 0 0 1-.363-.102.713.713 0 0 1-.262-.3Zm2.426 1.028 1.074-2.375 2.375-1.074-2.375-1.079L10.2 8.523l-1.074 2.375-2.375 1.079 2.375 1.074Zm0-3.45Zm7.102 7.899-1.977-.898a.453.453 0 0 1-.199-.165.41.41 0 0 1-.074-.238.427.427 0 0 1 .273-.398l1.977-.903.898-1.972a.414.414 0 0 1 .164-.2.413.413 0 0 1 .239-.078.41.41 0 0 1 .234.079.394.394 0 0 1 .164.199l.898 1.972 1.977.903a.427.427 0 0 1 .273.398.41.41 0 0 1-.074.239.453.453 0 0 1-.199.164l-1.977.898L19 21.852a.429.429 0 0 1-.164.199.41.41 0 0 1-.473 0 .453.453 0 0 1-.164-.2Zm0 0"></path>
      </g>
    </defs>
  </svg>
</cr-iconset>
`;
const iconsets = div.querySelectorAll('cr-iconset');
for (const iconset of iconsets) {
    document.head.appendChild(iconset);
}

let instance$8 = null;
function getCss$7() {
    return instance$8 || (instance$8 = [...[], css `:host{--gradient-start-color_:var(--color-history-embeddings-image-background-gradient-start,var(--cr-fallback-color-primary-container));--gradient-end-color_:var(--color-history-embeddings-image-background-gradient-end,rgb(231,248,237));--illustration-color_:var(--gradient-end-color_);align-items:center;background:linear-gradient(131deg,var(--gradient-start-color_) 12.23%,var(--gradient-end-color_) 78.96%);display:flex;height:100%;justify-content:center;overflow:hidden;position:relative;width:100%}#illustrationPath{fill:var(--illustration-color_)}#image{height:100%;inset:0;object-fit:cover;position:absolute;width:100%}@media (prefers-color-scheme:dark){:host{--gradient-end-color_:var(--color-history-embeddings-image-background-gradient-end,rgb(15,82,35));--illustration-color_:var(--gradient-start-color_)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$4() {
    return html `
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="42"
    height="42" viewBox="0 0 42 42">
  <path id="illustrationPath"
      d="M15.1906 0.931046C6.16922 -2.98707 -2.98707 6.16923 0.931046 15.1906L1.57886 16.6822C2.77508 19.4364 2.77508 22.5636 1.57885 25.3178L0.931044 26.8094C-2.98707 35.8308 6.16923 44.9871 15.1906 41.069L16.6822 40.4211C19.4364 39.2249 22.5636 39.2249 25.3178 40.4211L26.8094 41.069C35.8308 44.9871 44.9871 35.8308 41.0689 26.8094L40.4211 25.3178C39.2249 22.5636 39.2249 19.4364 40.4211 16.6822L41.069 15.1906C44.9871 6.16922 35.8308 -2.98706 26.8094 0.931049L25.3178 1.57886C22.5635 2.77508 19.4364 2.77508 16.6822 1.57886L15.1906 0.931046Z">
  </path>
</svg>

<img id="image" is="cr-auto-img" auto-src="${this.imageUrl_}"
    ?hidden="${!this.hasImage}" alt="">`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HistoryEmbeddingsResultImageElement extends CrLitElement {
    static get is() {
        return 'cr-history-embeddings-result-image';
    }
    static get styles() {
        return getCss$7();
    }
    render() {
        return getHtml$4.bind(this)();
    }
    static get properties() {
        return {
            hasImage: { type: Boolean, reflect: true },
            imageUrl_: { type: String },
            inSidePanel: { type: Boolean, reflect: true },
            searchResult: { type: Object },
        };
    }
    #hasImage_accessor_storage = false;
    get hasImage() { return this.#hasImage_accessor_storage; }
    set hasImage(value) { this.#hasImage_accessor_storage = value; }
    #imageUrl__accessor_storage = null;
    get imageUrl_() { return this.#imageUrl__accessor_storage; }
    set imageUrl_(value) { this.#imageUrl__accessor_storage = value; }
    #inSidePanel_accessor_storage = false;
    get inSidePanel() { return this.#inSidePanel_accessor_storage; }
    set inSidePanel(value) { this.#inSidePanel_accessor_storage = value; }
    #searchResult_accessor_storage = null;
    get searchResult() { return this.#searchResult_accessor_storage; }
    set searchResult(value) { this.#searchResult_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (!loadTimeData.getBoolean('enableHistoryEmbeddingsImages')) {
            return;
        }
        if (changedProperties.has('searchResult')) {
            // Reset image state while it is being fetched.
            this.imageUrl_ = null;
            this.hasImage = false;
            if (this.searchResult?.isUrlKnownToSync) {
                this.fetchImageForSearchResult_();
            }
        }
    }
    async fetchImageForSearchResult_() {
        assert(this.searchResult);
        const searchResultUrl = this.searchResult.url;
        const { result } = await PageImageServiceBrowserProxy.getInstance()
            .handler.getPageImageUrl(ClientId.HistoryEmbeddings, searchResultUrl, { suggestImages: true, optimizationGuideImages: true });
        if (result && searchResultUrl === this.searchResult.url) {
            this.imageUrl_ = result.imageUrl;
            this.hasImage = true;
        }
    }
}
customElements.define(HistoryEmbeddingsResultImageElement.is, HistoryEmbeddingsResultImageElement);

let instance$7 = null;
function getCss$6() {
    return instance$7 || (instance$7 = [...[], css `:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}`]);
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$3() {
    return html `
<div id="messages" role="alert" aria-live="polite" aria-relevant="additions">
</div>`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * 150ms seems to be around the minimum time required for screen readers to
 * read out consecutively queued messages.
 */
const TIMEOUT_MS = 150;
/**
 * A map of an HTML element to its corresponding CrA11yAnnouncerElement. There
 * may be multiple CrA11yAnnouncerElements on a page, especially for cases in
 * which the DocumentElement's CrA11yAnnouncerElement becomes hidden or
 * deactivated (eg. when a modal dialog causes the CrA11yAnnouncerElement to
 * become inaccessible).
 */
const instances = new Map();
function getInstance(container = document.body) {
    if (instances.has(container)) {
        return instances.get(container);
    }
    assert(container.isConnected);
    const instance = new CrA11yAnnouncerElement();
    container.appendChild(instance);
    instances.set(container, instance);
    return instance;
}
class CrA11yAnnouncerElement extends CrLitElement {
    static get is() {
        return 'cr-a11y-announcer';
    }
    static get styles() {
        return getCss$6();
    }
    render() {
        return getHtml$3.bind(this)();
    }
    currentTimeout_ = null;
    messages_ = [];
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.currentTimeout_ !== null) {
            clearTimeout(this.currentTimeout_);
            this.currentTimeout_ = null;
        }
        for (const [parent, instance] of instances) {
            if (instance === this) {
                instances.delete(parent);
                break;
            }
        }
    }
    announce(message, timeout = TIMEOUT_MS) {
        if (this.currentTimeout_ !== null) {
            clearTimeout(this.currentTimeout_);
            this.currentTimeout_ = null;
        }
        this.messages_.push(message);
        this.currentTimeout_ = setTimeout(() => {
            const messagesDiv = this.shadowRoot.querySelector('#messages');
            messagesDiv.innerHTML = window.trustedTypes.emptyHTML;
            // 
            for (const message of this.messages_) {
                const div = document.createElement('div');
                div.textContent = message;
                messagesDiv.appendChild(div);
            }
            // Dispatch a custom event to allow consumers to know when certain alerts
            // have been sent to the screen reader.
            this.dispatchEvent(new CustomEvent('cr-a11y-announcer-messages-sent', { bubbles: true, detail: { messages: this.messages_.slice() } }));
            this.messages_.length = 0;
            this.currentTimeout_ = null;
        }, timeout);
    }
}
customElements.define(CrA11yAnnouncerElement.is, CrA11yAnnouncerElement);

let instance$6 = null;
function getCss$5() {
    return instance$6 || (instance$6 = [...[getCss$w()], css `:host{display:block}:host([is-empty]){display:none}.card{background:var(--color-history-embeddings-background,var(--cr-card-background-color));border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);padding-block:var(--cr-history-embeddings-card-padding-block,0)}:host([enable-answers_]) .card{padding-block:var(--cr-history-embeddings-card-padding-block-with-answers,16px)}h2{display:flex;align-items:center;gap:14px;margin:0;padding:var(--cr-history-embeddings-heading-padding,23px 24px 13px);font-size:var(--cr-history-embeddings-heading-font-size,16px);font-weight:500;line-height:var(--cr-history-embeddings-heading-line-height,24px);color:var(--color-history-embeddings-foreground,var(--cr-primary-text-color))}h2 cr-icon{flex-shrink:0}:host([enable-answers_]) h2{font-size:var(--cr-history-embeddings-heading-font-size,14px);line-height:var(--cr-history-embeddings-heading-line-height,20px);padding:var(--cr-history-embeddings-heading-padding,8px 24px)}:host([enable-answers_]) .answer-section{margin-block-end:var(--cr-history-embeddings-answer-section-margin-block-end,16px)}:host([enable-answers_]) .answer{font-size:16px;font-weight:500;line-height:24px;padding:var(--cr-history-embeddings-answer-padding,8px 24px)}:host([enable-answers_]) .answer[is-error]{color:var(--cr-secondary-text-color);font-size:11px;font-weight:400}:host([enable-answers_]) .answer-source{align-items:center;color:var(--color-history-embeddings-foreground-subtle,var(--cr-secondary-text-color));display:inline-flex;font-size:11px;gap:4px;margin:var(--cr-history-embeddings-answer-source-margin,8px 24px);max-width:calc(100% - 48px);line-height:16px;text-decoration:none}:host([enable-answers_]) .answer-link{align-items:center;display:flex;gap:4px;min-width:0}:host([enable-answers_]) .answer-link .result-url{text-decoration:underline}:host([enable-answers_]) .answer-source .time{margin-inline-start:0}.loading{padding:var(--cr-history-embeddings-loading-padding,4px 24px 24px 24px)}:host([enable-answers_]) .loading{padding:var(--cr-history-embeddings-loading-padding,4px 24px 8px 24px)}hr{border:0;display:var(--cr-history-embeddings-hr-display,block);height:1px;background:var(--color-history-embeddings-divider,var(--cr-fallback-color-divider));margin:0 24px}:host([enable-answers_]) hr{display:none}hr:last-of-type{display:none}cr-url-list-item{--cr-url-list-item-height:auto;--cr-url-list-item-padding:var(--cr-history-embeddings-url-list-item-padding,14px 24px)}cr-url-list-item:has(.source-passage:not([hidden])){--cr-url-list-item-padding:14px 24px 6px}hr:has(+cr-url-list-item:hover),cr-url-list-item:hover+hr{opacity:0}:host([enable-answers_]) cr-url-list-item{--cr-url-list-item-padding:var(--cr-history-embeddings-url-list-item-padding,8px 24px)}:host([enable-answers_]) .result-item{align-items:center;color:var(--color-history-embeddings-foreground,var(--cr-primary-text-color));display:flex;gap:16px;padding:8px 24px;text-decoration:none}:host([enable-answers_][in-side-panel]) .result-item{padding:4px 16px}:host([enable-answers_]) .result-image{align-items:center;background:var(--color-history-embeddings-image-background,var(--cr-fallback-color-neutral-container));border-radius:8px;display:flex;flex-shrink:0;justify-content:center;height:58px;overflow:hidden;width:104px}:host([enable-answers_][in-side-panel]) .result-image{height:40px;width:40px}:host([enable-answers_][in-side-panel]) cr-history-embeddings-result-image:not([has-image]){display:none}:host([enable-answers_]:not([in-side-panel])) .result-image .favicon{display:none}:host([enable-answers_][in-side-panel]) cr-history-embeddings-result-image[has-image]~.favicon{display:none}:host([enable-answers_]) .result-metadata{display:flex;flex:1;flex-direction:column;gap:4px;min-width:0}:host([enable-answers_]) .result-title,:host([enable-answers_]) .result-url{line-height:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([enable-answers_]) .result-title{font-size:12px;font-weight:500}:host([enable-answers_]) .result-url-and-favicon{align-items:center;display:flex;gap:4px}:host([enable-answers_]) .result-url{color:var(--color-history-embeddings-foreground-subtle,var(--cr-secondary-text-color));font-size:11px}:host([enable-answers_]) .favicon{background-position:center center;background-repeat:no-repeat;flex-shrink:0;height:16px;width:16px}:host([enable-answers_][in-side-panel]) .result-url-and-favicon .favicon{display:none}.time{margin-inline-start:16px}:host([enable-answers_]) .time{color:var(--color-history-embeddings-foreground-subtle,var(--cr-secondary-text-color));font-size:11px;line-height:16px;white-space:nowrap}:host([enable-answers_]) .more-actions{--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}.footer{display:flex;align-items:center;font-size:var(--cr-history-embeddings-footer-font-size,inherit);line-height:var(--cr-history-embeddings-footer-line-height,inherit);gap:8px;padding:var(--cr-history-embeddings-footer-padding,16px 24px 24px);color:var(--color-history-embeddings-foreground-subtle,var(--cr-secondary-text-color))}:host([enable-answers_]) .footer{padding:var(--cr-history-embeddings-footer-padding-with-answers,16px 24px 24px)}.source-passage{display:flex;font-size:11px;font-style:italic;line-height:16px;padding:6px 24px 14px}.source-passage-line{background:var(--color-history-embeddings-divider,var(--cr-fallback-color-divider));width:1px;margin-inline-start:20px;margin-inline-end:36px}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$2() {
    // clang-format off
    return html `<!--_html_template_start_-->
${!this.enableAnswers_ ? html `
  <div id="cardWithoutAnswers" class="card">
    <h2 class="heading results-heading">
      <cr-icon
          icon="${this.webuiRoundedIconsEnabled_ ?
        'history-embeddings:astrophotography-mode' :
        'history-embeddings:heading-old'}">
      </cr-icon>
      ${this.getHeadingText_()}
    </h2>

    ${this.loadingResults_ ? html `
      <div class="loading loading-results">
        <cr-loading-gradient>
          <svg width="482" height="40">
            <clipPath>
              <rect width="40" height="40" rx="8" ry="8"></rect>
              <rect x="55" y="4" width="calc(100% - 55px)" height="14" rx="4"
                  ry="4">
              </rect>
              <rect x="55" y="24" width="calc(78% - 55px)" height="14" rx="4"
                  ry="4">
              </rect>
            </clipPath>
          </svg>
        </cr-loading-gradient>
      </div>
    ` : html `
      <div>
        <div class="result-items">
          ${this.searchResult_?.items.map((item, index) => html `
            <cr-url-list-item url="${item.url}" title="${item.title}"
                description="${item.urlForDisplay}"
                @click="${this.onResultClick_}"
                @auxclick="${this.onResultAuxclick_}" data-index="${index}"
                @contextmenu="${this.onResultContextmenu_}" as-anchor
                as-anchor-target="_blank" always-show-suffix>
              <span class="time" slot="suffix">${this.getDateTime_(item)}</span>
              <cr-icon-button slot="suffix" iron-icon="cr:more-vert"
                  data-index="${index}" @click="${this.onMoreActionsClick_}"
                  aria-label="${this.i18n('actionMenuDescription')}"
                  aria-description="${item.title}">
              </cr-icon-button>
              <div slot="footer" class="source-passage"
                  ?hidden="${!item.sourcePassage}">
                <div class="source-passage-line"></div>
                ${item.sourcePassage}
              </div>
            </cr-url-list-item>
            <hr>
          `)}
        </div>

        <div class="footer">
          <div>${this.i18n('historyEmbeddingsFooter')}</div>
        </div>
      </div>
    `}
  </div>
` : ''}

${this.enableAnswers_ ? html `
  <div id="cardWithAnswers" class="card">
    ${this.showAnswerSection_() ? html `
      <div class="answer-section">
        <h2 class="heading">${this.getHeadingTextForAnswerSection_()}</h2>
        ${this.loadingAnswer_ ? html `
          <div class="loading loading-answer">
            <cr-loading-gradient>
              <svg width="100%" height="72" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <clipPath>
                  <rect width="100%" height="12" rx="4"></rect>
                  <rect y="20" width="85%" height="12" rx="4"></rect>
                  <rect y="40" width="75%" height="12" rx="4"></rect>
                  <rect y="60" width="33%" height="12" rx="4"></rect>
                </clipPath>
              </svg>
            </cr-loading-gradient>
          </div>
        ` : html `
          <div class="answer" ?is-error="${this.isAnswerErrorState_()}">
            ${this.getAnswerOrError_()}
          </div>
        `}
        ${this.answerSource_ ? html `
          <div class="answer-source">
            <a class="answer-link" href="${this.getAnswerSourceUrl_()}"
                target="_blank" @click="${this.onAnswerLinkClick_}"
                @auxclick="${this.onAnswerLinkAuxclick_}"
                @contextmenu="${this.onAnswerLinkContextmenu_}">
              <div class="favicon"
                  .style="background-image: ${this.getFavicon_(this.answerSource_)}">
              </div>
              <div class="result-url">${this.answerSource_.urlForDisplay}</div>
            </a>
            •
            <div class="time">${this.getAnswerDateTime_()}</div>
          </div>
        ` : ''}
      </div>
    ` : ''}

    <h2 class="heading results-heading">${this.getHeadingText_()}</h2>
    ${this.loadingResults_ ? html `
      <div class="loading loading-results">
        <cr-loading-gradient>
          <svg width="100%" height="40">
            <clipPath>
              <rect width="40" height="40" rx="8" ry="8"></rect>
              <rect x="55" y="4" width="calc(100% - 55px)" height="14" rx="4"
                  ry="4">
              </rect>
              <rect x="55" y="24" width="calc(78% - 55px)" height="14" rx="4"
                  ry="4">
              </rect>
            </clipPath>
          </svg>
        </cr-loading-gradient>
      </div>
    ` : html `
      <div class="result-items">
        ${this.searchResult_?.items.map((item, index) => html `
          ${this.enableImages_ ? html `
            <a class="result-item" href="${item.url}" target="_blank"
                @click="${this.onResultClick_}"
                @auxclick="${this.onResultAuxclick_}" data-index="${index}"
                @contextmenu="${this.onResultContextmenu_}">
              <div class="result-image">
                <cr-history-embeddings-result-image
                    ?in-side-panel="${this.inSidePanel}"
                    .searchResult="${item}">
                </cr-history-embeddings-result-image>
                <div class="favicon"
                    .style="background-image: ${this.getFavicon_(item)}">
                </div>
              </div>
              <div class="result-metadata">
                <div class="result-title">${item.title}</div>
                <div class="result-url-and-favicon">
                  <div class="favicon"
                      .style="background-image: ${this.getFavicon_(item)}">
                  </div>
                  <div class="result-url">${item.urlForDisplay}</div>
                </div>
              </div>
              <span class="time">${this.getDateTime_(item)}</span>
              <cr-icon-button class="more-actions" iron-icon="cr:more-vert"
                  data-index="${index}" @click="${this.onMoreActionsClick_}"
                  aria-label="${this.i18n('actionMenuDescription')}"
                  aria-description="${item.title}">
              </cr-icon-button>
            </a>
          ` : html `
            <cr-url-list-item url="${item.url}" title="${item.title}"
                description="${item.urlForDisplay}"
                @click="${this.onResultClick_}"
                @auxclick="${this.onResultAuxclick_}"
                @contextmenu="${this.onResultContextmenu_}"
                data-index="${index}" as-anchor as-anchor-target="_blank"
                always-show-suffix>
              <span class="time" slot="suffix">${this.getDateTime_(item)}</span>
              <cr-icon-button slot="suffix" iron-icon="cr:more-vert"
                  data-index="${index}" @click="${this.onMoreActionsClick_}"
                  aria-label="${this.i18n('actionMenuDescription')}"
                  aria-description="${item.title}">
              </cr-icon-button>
              <div slot="footer" class="source-passage"
                  ?hidden="${!item.sourcePassage}">
                <div class="source-passage-line"></div>
                ${item.sourcePassage}
              </div>
            </cr-url-list-item>
            <hr>
          `}
        `)}
      </div>
    `}
  </div>
  <div class="footer">
    <div>${this.i18n('historyEmbeddingsFooter')}</div>
  </div>
` : ''}

<cr-lazy-render-lit id="sharedMenu"
    .template="${() => html `
      <cr-action-menu role-description="${this.i18n('actionMenuDescription')}">
        ${this.showMoreFromSiteMenuOption ? html `
          <button id="moreFromSiteOption" class="dropdown-item"
              @click="${this.onMoreFromSiteClick_}">
            ${this.i18n('moreFromSite')}
          </button>
        ` : ''}
        <button id="removeFromHistoryOption" class="dropdown-item"
            @click="${this.onRemoveFromHistoryClick_}">
          ${this.i18n('removeFromHistory')}
        </button>
      </cr-action-menu>
    `}">
</cr-lazy-render-lit>
<!--_html_template_end_-->`;
    // clang-format on
}

// ui/webui/resources/cr_components/history_embeddings/history_embeddings.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AnswerStatusSpec = { $: mojo.internal.Enum() };
var AnswerStatus;
(function (AnswerStatus) {
    AnswerStatus[AnswerStatus["MIN_VALUE"] = 0] = "MIN_VALUE";
    AnswerStatus[AnswerStatus["MAX_VALUE"] = 7] = "MAX_VALUE";
    AnswerStatus[AnswerStatus["kUnspecified"] = 0] = "kUnspecified";
    AnswerStatus[AnswerStatus["kLoading"] = 1] = "kLoading";
    AnswerStatus[AnswerStatus["kSuccess"] = 2] = "kSuccess";
    AnswerStatus[AnswerStatus["kUnanswerable"] = 3] = "kUnanswerable";
    AnswerStatus[AnswerStatus["kModelUnavailable"] = 4] = "kModelUnavailable";
    AnswerStatus[AnswerStatus["kExecutionFailure"] = 5] = "kExecutionFailure";
    AnswerStatus[AnswerStatus["kExecutionCanceled"] = 6] = "kExecutionCanceled";
    AnswerStatus[AnswerStatus["kFiltered"] = 7] = "kFiltered";
})(AnswerStatus || (AnswerStatus = {}));
const UserFeedbackSpec = { $: mojo.internal.Enum() };
var UserFeedback;
(function (UserFeedback) {
    UserFeedback[UserFeedback["MIN_VALUE"] = 0] = "MIN_VALUE";
    UserFeedback[UserFeedback["MAX_VALUE"] = 2] = "MAX_VALUE";
    UserFeedback[UserFeedback["kUserFeedbackUnspecified"] = 0] = "kUserFeedbackUnspecified";
    UserFeedback[UserFeedback["kUserFeedbackNegative"] = 1] = "kUserFeedbackNegative";
    UserFeedback[UserFeedback["kUserFeedbackPositive"] = 2] = "kUserFeedbackPositive";
})(UserFeedback || (UserFeedback = {}));
class PageHandlerFactoryPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'history_embeddings.mojom.PageHandlerFactory', scope);
    }
}
class PageHandlerFactoryRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerFactoryPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    createPageHandler(page, handler) {
        this.proxy.sendMessage(0, PageHandlerFactory_CreatePageHandler_ParamsSpec.$, null, [
            page,
            handler
        ], false);
    }
}
class PageHandlerFactory {
    static get $interfaceName() {
        return "history_embeddings.mojom.PageHandlerFactory";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PageHandlerFactoryRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
let PageHandlerPendingReceiver$1 = class PageHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'history_embeddings.mojom.PageHandler', scope);
    }
};
let PageHandlerRemote$1 = class PageHandlerRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver$1, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    search(query) {
        this.proxy.sendMessage(0, PageHandler_Search_ParamsSpec.$, null, [
            query
        ], false);
    }
    sendQualityLog(selectedIndices, numEnteredChars) {
        this.proxy.sendMessage(1, PageHandler_SendQualityLog_ParamsSpec.$, null, [
            selectedIndices,
            numEnteredChars
        ], false);
    }
    recordSearchResultsMetrics(nonEmptyResults, userClickedResult, answerShown, answerCitationClicked, otherHistoryResultClicked, queryWordCount) {
        this.proxy.sendMessage(2, PageHandler_RecordSearchResultsMetrics_ParamsSpec.$, null, [
            nonEmptyResults,
            userClickedResult,
            answerShown,
            answerCitationClicked,
            otherHistoryResultClicked,
            queryWordCount
        ], false);
    }
    setUserFeedback(feedback) {
        this.proxy.sendMessage(3, PageHandler_SetUserFeedback_ParamsSpec.$, null, [
            feedback
        ], false);
    }
    openSettingsPage() {
        this.proxy.sendMessage(4, PageHandler_OpenSettingsPage_ParamsSpec.$, null, [], false);
    }
};
let PagePendingReceiver$1 = class PagePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'history_embeddings.mojom.Page', scope);
    }
};
let PageRemote$1 = class PageRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver$1, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    searchResultChanged(result) {
        this.proxy.sendMessage(0, Page_SearchResultChanged_ParamsSpec.$, null, [
            result
        ], false);
    }
};
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
let PageCallbackRouter$1 = class PageCallbackRouter {
    helper_internal_;
    $;
    router_;
    searchResultChanged;
    onConnectionError;
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote$1);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.searchResultChanged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, Page_SearchResultChanged_ParamsSpec.$, null, this.searchResultChanged.createReceiverHandler(false /* expectsResponse */), false);
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id) {
        return this.router_.removeListener(id);
    }
};
const AnswerDataSpec = { $: {} };
const SearchResultItemSpec = { $: {} };
const SearchQuerySpec = { $: {} };
const SearchResultSpec = { $: {} };
const PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
const PageHandler_Search_ParamsSpec = { $: {} };
const PageHandler_SendQualityLog_ParamsSpec = { $: {} };
const PageHandler_RecordSearchResultsMetrics_ParamsSpec = { $: {} };
const PageHandler_SetUserFeedback_ParamsSpec = { $: {} };
const PageHandler_OpenSettingsPage_ParamsSpec = { $: {} };
const Page_SearchResultChanged_ParamsSpec = { $: {} };
mojo.internal.Struct(AnswerDataSpec.$, 'AnswerData', [
    mojo.internal.StructField('answerTextDirectives', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(SearchResultItemSpec.$, 'SearchResultItem', [
    mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('urlForDisplay', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('relativeTime', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shortDateTime', 32, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('lastUrlVisitTimestamp', 40, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('sourcePassage', 48, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('answerData', 56, 0, AnswerDataSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isUrlKnownToSync', 64, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 80],]);
mojo.internal.Struct(SearchQuerySpec.$, 'SearchQuery', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('timeRangeStart', 8, 0, TimeSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(SearchResultSpec.$, 'SearchResult', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('answerStatus', 8, 0, AnswerStatusSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('answer', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('items', 24, 0, mojo.internal.Array(SearchResultItemSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(PageHandlerFactory_CreatePageHandler_ParamsSpec.$, 'PageHandlerFactory_CreatePageHandler_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote$1), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(PageHandlerPendingReceiver$1), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_Search_ParamsSpec.$, 'PageHandler_Search_Params', [
    mojo.internal.StructField('query', 0, 0, SearchQuerySpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SendQualityLog_ParamsSpec.$, 'PageHandler_SendQualityLog_Params', [
    mojo.internal.StructField('selectedIndices', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('numEnteredChars', 8, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_RecordSearchResultsMetrics_ParamsSpec.$, 'PageHandler_RecordSearchResultsMetrics_Params', [
    mojo.internal.StructField('nonEmptyResults', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('userClickedResult', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('answerShown', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('answerCitationClicked', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('otherHistoryResultClicked', 0, 4, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('queryWordCount', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SetUserFeedback_ParamsSpec.$, 'PageHandler_SetUserFeedback_Params', [
    mojo.internal.StructField('feedback', 0, 0, UserFeedbackSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenSettingsPage_ParamsSpec.$, 'PageHandler_OpenSettingsPage_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_SearchResultChanged_ParamsSpec.$, 'Page_SearchResultChanged_Params', [
    mojo.internal.StructField('result', 0, 0, SearchResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
const browserProxyFactory = new MojoBrowserProxyFactory(PageHandlerRemote$1, PageCallbackRouter$1, (remote, receiver) => PageHandlerFactory.getRemote().createPageHandler(remote, receiver));

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function jsDateToMojoDate(date) {
    const windowsEpoch = Date.UTC(1601, 0, 1, 0, 0, 0, 0);
    const unixEpoch = Date.UTC(1970, 0, 1, 0, 0, 0, 0);
    const epochDeltaInMs = unixEpoch - windowsEpoch;
    const internalValue = BigInt(date.valueOf() + epochDeltaInMs) * BigInt(1000);
    return { internalValue };
}
/* Minimum time the loading state should be visible. This is to prevent the
 * loading animation from flashing. */
const LOADING_STATE_MINIMUM_MS = 300;
const HistoryEmbeddingsElementBase = I18nMixinLit(CrLitElement);
class HistoryEmbeddingsElement extends HistoryEmbeddingsElementBase {
    static get is() {
        return 'cr-history-embeddings';
    }
    static get styles() {
        return getCss$5();
    }
    render() {
        return getHtml$2.bind(this)();
    }
    static get properties() {
        return {
            clickedIndices_: { type: Object },
            forceSuppressLogging: { type: Boolean },
            numCharsForQuery: { type: Number },
            feedbackState_: { type: Number },
            loadingAnswer_: { type: Boolean },
            loadingResults_: { type: Boolean },
            searchResult_: { type: Object },
            searchResultDirty_: { type: Boolean },
            searchQuery: { type: String },
            timeRangeStart: { type: Object },
            isEmpty: {
                type: Boolean,
                reflect: true,
                notify: true,
            },
            enableAnswers_: {
                type: Boolean,
                reflect: true,
            },
            enableImages_: { type: Boolean },
            answerSource_: { type: Object },
            showMoreFromSiteMenuOption: { type: Boolean },
            showRelativeTimes: { type: Boolean },
            otherHistoryResultClicked: { type: Boolean },
            inSidePanel: {
                type: Boolean,
                reflect: true,
            },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    actionMenuItem_ = null;
    #answerSource__accessor_storage = null;
    get answerSource_() { return this.#answerSource__accessor_storage; }
    set answerSource_(value) { this.#answerSource__accessor_storage = value; }
    answerLinkClicked_ = false;
    browserProxy_ = browserProxyFactory.getInstance();
    #clickedIndices__accessor_storage = new Set();
    get clickedIndices_() { return this.#clickedIndices__accessor_storage; }
    set clickedIndices_(value) { this.#clickedIndices__accessor_storage = value; }
    #enableAnswers__accessor_storage = loadTimeData.getBoolean('enableHistoryEmbeddingsAnswers');
    get enableAnswers_() { return this.#enableAnswers__accessor_storage; }
    set enableAnswers_(value) { this.#enableAnswers__accessor_storage = value; }
    #enableImages__accessor_storage = loadTimeData.getBoolean('enableHistoryEmbeddingsImages');
    get enableImages_() { return this.#enableImages__accessor_storage; }
    set enableImages_(value) { this.#enableImages__accessor_storage = value; }
    #feedbackState__accessor_storage = CrFeedbackOption.UNSPECIFIED;
    get feedbackState_() { return this.#feedbackState__accessor_storage; }
    set feedbackState_(value) { this.#feedbackState__accessor_storage = value; }
    #loadingAnswer__accessor_storage = false;
    get loadingAnswer_() { return this.#loadingAnswer__accessor_storage; }
    set loadingAnswer_(value) { this.#loadingAnswer__accessor_storage = value; }
    #loadingResults__accessor_storage = false;
    get loadingResults_() { return this.#loadingResults__accessor_storage; }
    set loadingResults_(value) { this.#loadingResults__accessor_storage = value; }
    loadingStateMinimumMs_ = LOADING_STATE_MINIMUM_MS;
    queryResultMinAge_ = QUERY_RESULT_MINIMUM_AGE;
    #searchResult__accessor_storage = null;
    get searchResult_() { return this.#searchResult__accessor_storage; }
    set searchResult_(value) { this.#searchResult__accessor_storage = value; }
    #searchResultDirty__accessor_storage = false;
    get searchResultDirty_() { return this.#searchResultDirty__accessor_storage; }
    set searchResultDirty_(value) { this.#searchResultDirty__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    searchTimestamp_ = 0;
    /**
     * When this is non-null, that means there's a SearchResult that's pending
     * metrics logging since this debouncer timestamp. The debouncing is needed
     * because queries are issued as the user types, and we want to skip logging
     * these trivial queries the user typed through.
     */
    resultPendingMetricsTimestamp_ = null;
    eventTracker_ = new EventTracker();
    #forceSuppressLogging_accessor_storage = false;
    get forceSuppressLogging() { return this.#forceSuppressLogging_accessor_storage; }
    set forceSuppressLogging(value) { this.#forceSuppressLogging_accessor_storage = value; }
    #isEmpty_accessor_storage = true;
    get isEmpty() { return this.#isEmpty_accessor_storage; }
    set isEmpty(value) { this.#isEmpty_accessor_storage = value; }
    #numCharsForQuery_accessor_storage = 0;
    get numCharsForQuery() { return this.#numCharsForQuery_accessor_storage; }
    set numCharsForQuery(value) { this.#numCharsForQuery_accessor_storage = value; }
    numCharsForLastResultQuery_ = 0;
    #searchQuery_accessor_storage = '';
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    #timeRangeStart_accessor_storage;
    get timeRangeStart() { return this.#timeRangeStart_accessor_storage; }
    set timeRangeStart(value) { this.#timeRangeStart_accessor_storage = value; }
    searchResultChangedId_ = null;
    /**
     * A promise of a setTimeout for the first set of search results to come back
     * from a search. The loading state has a minimum time it needs to be on the
     * screen before showing the first set of search results, and any subsequent
     * search result for the same query is queued after it.
     */
    searchResultPromise_ = null;
    #showRelativeTimes_accessor_storage = false;
    get showRelativeTimes() { return this.#showRelativeTimes_accessor_storage; }
    set showRelativeTimes(value) { this.#showRelativeTimes_accessor_storage = value; }
    #showMoreFromSiteMenuOption_accessor_storage = false;
    get showMoreFromSiteMenuOption() { return this.#showMoreFromSiteMenuOption_accessor_storage; }
    set showMoreFromSiteMenuOption(value) { this.#showMoreFromSiteMenuOption_accessor_storage = value; }
    #otherHistoryResultClicked_accessor_storage = false;
    get otherHistoryResultClicked() { return this.#otherHistoryResultClicked_accessor_storage; }
    set otherHistoryResultClicked(value) { this.#otherHistoryResultClicked_accessor_storage = value; }
    #inSidePanel_accessor_storage = false;
    get inSidePanel() { return this.#inSidePanel_accessor_storage; }
    set inSidePanel(value) { this.#inSidePanel_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker_.add(window, 'beforeunload', () => {
            // Flush any metrics or logs when the user leaves the page, such as
            // closing the tab or navigating to another URL.
            this.flushDebouncedUserMetrics_(/* forceFlush= */ true);
        });
        if (this.inSidePanel) {
            // Side panel UI does not fire 'beforeunload' events. Instead, the
            // visibilityState is changed when the side panel is closed.
            this.eventTracker_.add(document, 'visibilitychange', () => {
                if (document.visibilityState === 'hidden') {
                    this.flushDebouncedUserMetrics_();
                }
            });
        }
        this.searchResultChangedId_ =
            this.browserProxy_.callbackRouter.searchResultChanged.addListener(this.searchResultChanged_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        // Flush any metrics or logs when the component is removed, which can
        // happen if there are no history embedding results left or if the user
        // navigated to another history page.
        this.flushDebouncedUserMetrics_(/* forceFlush= */ true);
        this.eventTracker_.removeAll();
        if (this.searchResultChangedId_ !== null) {
            this.browserProxy_.callbackRouter.removeListener(this.searchResultChangedId_);
            this.searchResultChangedId_ = null;
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('loadingResults_') ||
            changedPrivateProperties.has('searchResult_') ||
            (changedPrivateProperties.has('searchResultDirty_') &&
                this.searchResultDirty_)) {
            this.isEmpty = this.computeIsEmpty_();
        }
        if (changedPrivateProperties.has('loadingAnswer_') ||
            changedPrivateProperties.has('searchResult_') ||
            (changedPrivateProperties.has('searchResultDirty_') &&
                this.searchResultDirty_)) {
            this.answerSource_ = this.computeAnswerSource_();
        }
        const isSearchQueryInitialization = changedProperties.get('searchQuery') === undefined &&
            this.searchQuery === '';
        if ((changedProperties.has('searchQuery') &&
            !isSearchQueryInitialization) ||
            changedProperties.has('timeRangeStart')) {
            this.onSearchQueryChanged_();
        }
        if (changedPrivateProperties.has('searchResultDirty_') &&
            this.searchResultDirty_) {
            this.searchResultDirty_ = false;
        }
    }
    computeAnswerSource_() {
        if (!this.enableAnswers_ || this.loadingAnswer_) {
            return null;
        }
        return this.searchResult_?.items.find(item => item.answerData) || null;
    }
    computeIsEmpty_() {
        return !this.loadingResults_ && this.searchResult_?.items.length === 0;
    }
    getAnswerOrError_() {
        if (!this.searchResult_) {
            return undefined;
        }
        switch (this.searchResult_.answerStatus) {
            case AnswerStatus.kUnspecified:
            case AnswerStatus.kLoading:
            case AnswerStatus.kExecutionCanceled:
            case AnswerStatus.kUnanswerable:
            case AnswerStatus.kFiltered:
            case AnswerStatus.kModelUnavailable:
                // Still loading or answer section is not displayed.
                return undefined;
            case AnswerStatus.kSuccess:
                return this.searchResult_.answer;
            case AnswerStatus.kExecutionFailure:
                return this.i18n('historyEmbeddingsAnswererErrorTryAgain');
            default:
                assertNotReachedCase(this.searchResult_.answerStatus);
        }
    }
    getAnswerSourceUrl_() {
        if (!this.answerSource_) {
            return undefined;
        }
        const sourceUrl = new URL(this.answerSource_.url);
        const textDirectives = this.answerSource_.answerData?.answerTextDirectives;
        if (textDirectives && textDirectives.length > 0) {
            // Only the first directive is used for now until there's a way to show
            // multiple links in the UI. If the directive contains a comma, it is
            // intended to be part of the start,end syntax and should not be encoded.
            sourceUrl.hash = `:~:text=${textDirectives[0].split(',').map(encodeURIComponent).join(',')}`;
        }
        return sourceUrl.toString();
    }
    getFavicon_(item) {
        return getFaviconForPageURL(item?.url || '', /*isSyncedUrlForHistoryUi=*/ true);
    }
    getHeadingText_() {
        if (this.loadingResults_) {
            return this.i18n('historyEmbeddingsHeadingLoading', this.searchQuery);
        }
        if (this.enableAnswers_) {
            return this.i18n('historyEmbeddingsWithAnswersResultsHeading');
        }
        return this.i18n('historyEmbeddingsHeading', this.searchQuery);
    }
    getHeadingTextForAnswerSection_() {
        if (this.loadingAnswer_) {
            return this.i18n('historyEmbeddingsAnswerLoadingHeading');
        }
        return this.i18n('historyEmbeddingsAnswerHeading');
    }
    getAnswerDateTime_() {
        if (!this.answerSource_) {
            return '';
        }
        const dateTime = this.getDateTime_(this.answerSource_);
        return this.i18n('historyEmbeddingsAnswerSourceDate', dateTime);
    }
    getDateTime_(item) {
        if (this.showRelativeTimes) {
            return item.relativeTime;
        }
        return item.shortDateTime;
    }
    hasAnswer_() {
        if (!this.enableAnswers_) {
            return false;
        }
        return this.searchResult_?.answer !== '';
    }
    isAnswerErrorState_() {
        if (!this.searchResult_) {
            return false;
        }
        return this.searchResult_.answerStatus === AnswerStatus.kExecutionFailure;
    }
    onFeedbackSelectedOptionChanged_(e) {
        this.feedbackState_ = e.detail.value;
        switch (e.detail.value) {
            case CrFeedbackOption.UNSPECIFIED:
                this.browserProxy_.handler.setUserFeedback(UserFeedback.kUserFeedbackUnspecified);
                return;
            case CrFeedbackOption.THUMBS_UP:
                this.browserProxy_.handler.setUserFeedback(UserFeedback.kUserFeedbackPositive);
                return;
            case CrFeedbackOption.THUMBS_DOWN:
                this.browserProxy_.handler.setUserFeedback(UserFeedback.kUserFeedbackNegative);
                return;
            default:
                assertNotReachedCase(e.detail.value);
        }
    }
    onAnswerLinkContextmenu_(e) {
        this.fire('answer-context-menu', {
            item: this.answerSource_,
            x: e.clientX,
            y: e.clientY,
        });
    }
    onAnswerLinkAuxclick_(e) {
        this.onAnswerLinkClick_(e);
    }
    onAnswerLinkClick_(e) {
        this.answerLinkClicked_ = true;
        this.fire('answer-click', {
            item: this.answerSource_,
            middleButton: e.button === 1,
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
        });
    }
    onMoreActionsClick_(e) {
        e.preventDefault();
        e.stopPropagation();
        assert(this.searchResult_);
        const target = e.target;
        const index = Number(target.dataset['index']);
        const item = this.searchResult_.items[index];
        assert(item);
        this.actionMenuItem_ = item;
        this.$.sharedMenu.get().showAt(target);
    }
    onMoreFromSiteClick_() {
        assert(this.actionMenuItem_);
        this.fire('more-from-site-click', this.actionMenuItem_);
        this.$.sharedMenu.get().close();
    }
    async onRemoveFromHistoryClick_() {
        assert(this.searchResult_);
        assert(this.actionMenuItem_);
        this.searchResult_.items.splice(this.searchResult_.items.indexOf(this.actionMenuItem_), 1);
        this.searchResultDirty_ = true;
        await this.updateComplete;
        this.fire('remove-item-click', this.actionMenuItem_);
        this.$.sharedMenu.get().close();
    }
    onResultContextmenu_(e) {
        assert(this.searchResult_);
        const index = Number(e.currentTarget.dataset['index']);
        this.fire('result-context-menu', {
            item: this.searchResult_.items[index],
            x: e.clientX,
            y: e.clientY,
        });
    }
    onResultAuxclick_(e) {
        this.onResultClick_(e);
    }
    onResultClick_(e) {
        assert(this.searchResult_);
        const index = Number(e.currentTarget.dataset['index']);
        this.fire('result-click', {
            item: this.searchResult_.items[index],
            middleButton: e.button === 1,
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
        });
        this.fire('record-history-link-click', {
            resultType: HistoryResultType.EMBEDDINGS,
            index,
        });
        this.clickedIndices_.add(index);
        this.browserProxy_.handler.recordSearchResultsMetrics(
        /* nonEmptyResults= */ true, /* userClickedResult= */ true, 
        /* answerShown= */ this.hasAnswer_(), 
        /* answerCitationClicked= */ this.answerLinkClicked_, 
        /* otherHistoryResultClicked= */ this.otherHistoryResultClicked, 
        /* queryWordCount= */ this.searchQuery.split(' ').length);
    }
    onSearchQueryChanged_() {
        // Flush any old results metrics before overwriting the member variable.
        this.flushDebouncedUserMetrics_();
        this.clickedIndices_.clear();
        this.answerLinkClicked_ = false;
        // Cache the amount of characters that the user typed for this query so
        // that it can be sent with the quality log since `numCharsForQuery` will
        // immediately change when a new query is performed.
        this.numCharsForLastResultQuery_ = this.numCharsForQuery;
        this.searchResultPromise_ = null;
        this.loadingResults_ = true;
        this.loadingAnswer_ = false;
        const query = {
            query: this.searchQuery,
            timeRangeStart: this.timeRangeStart ? jsDateToMojoDate(this.timeRangeStart) : null,
        };
        this.searchTimestamp_ = performance.now();
        this.browserProxy_.handler.search(query);
    }
    searchResultChanged_(result) {
        if (this.searchResultPromise_) {
            // If there is already a search result waiting to be processed, chain
            // this result to it so that it immediately runs after the previous
            // result was processed.
            this.searchResultPromise_ = this.searchResultPromise_.then(() => this.searchResultChangedImpl_(result));
        }
        else {
            // Artificial delay of loadingStateMinimumMs_ for UX.
            this.searchResultPromise_ = new Promise((resolve) => {
                setTimeout(() => {
                    this.searchResultChangedImpl_(result);
                    resolve();
                }, Math.max(0, this.searchTimestamp_ + this.loadingStateMinimumMs_ -
                    performance.now()));
            });
        }
    }
    searchResultChangedImpl_(result) {
        if (result.query !== this.searchQuery) {
            // Results are for an outdated query. Skip these results.
            return;
        }
        const isNewQuery = this.searchResult_?.query !== result.query;
        const hasResults = result.items.length > 0;
        const hasNewResults = this.searchResult_?.items.length !== result.items.length;
        const shouldAnnounceForResults = (isNewQuery && hasResults) || (!isNewQuery && hasNewResults);
        // Reset feedback state for new results.
        this.feedbackState_ = CrFeedbackOption.UNSPECIFIED;
        this.searchResult_ = result;
        this.loadingResults_ = false;
        this.loadingAnswer_ = result.answerStatus === AnswerStatus.kLoading;
        this.resultPendingMetricsTimestamp_ = performance.now();
        if (shouldAnnounceForResults) {
            const resultsLabelId = result.items.length === 1 ?
                'historyEmbeddingsMatch' :
                'historyEmbeddingsMatches';
            const message = loadTimeData.getStringF('foundSearchResults', result.items.length, loadTimeData.getString(resultsLabelId), result.query);
            getInstance().announce(message);
        }
    }
    showAnswerSection_() {
        if (!this.searchResult_) {
            // If there is no search result yet, the search has just started and it
            // is not yet known if an answer is being attempted.
            return false;
        }
        else if (this.searchResult_.query !== this.searchQuery) {
            // The current search result and its answer is outdated.
            return false;
        }
        else {
            // These answer statuses indicate there is no answer to show and no
            // loading state to show.
            return this.searchResult_.answerStatus !== AnswerStatus.kUnspecified &&
                this.searchResult_.answerStatus !== AnswerStatus.kUnanswerable &&
                this.searchResult_.answerStatus !== AnswerStatus.kFiltered &&
                this.searchResult_.answerStatus !== AnswerStatus.kModelUnavailable;
        }
    }
    /**
     * Flushes any pending query result metric or log waiting to be logged.
     */
    flushDebouncedUserMetrics_(forceFlush = false) {
        if (this.resultPendingMetricsTimestamp_ === null) {
            return;
        }
        const userClickedResult = this.clickedIndices_.size > 0;
        // Search results are fetched as the user is typing, so make sure that
        // the last set of results were visible on the page for at least 2s. This is
        // to avoid logging results that may have been transient as the user was
        // still typing their full query.
        const resultsWereStable = (performance.now() - this.resultPendingMetricsTimestamp_) >=
            this.queryResultMinAge_;
        const canLog = resultsWereStable || forceFlush;
        // Record a metric if a user did not click any results.
        if (canLog && !userClickedResult) {
            const nonEmptyResults = !!this.searchResult_ &&
                this.searchResult_.items && this.searchResult_.items.length > 0;
            this.browserProxy_.handler.recordSearchResultsMetrics(nonEmptyResults, /* userClickedResult= */ false, 
            /* answerShown= */ this.hasAnswer_(), 
            /* answerCitationClicked= */ this.answerLinkClicked_, 
            /* otherHistoryResultClicked= */ this.otherHistoryResultClicked, 
            /* queryWordCount= */ this.searchQuery.split(' ').length);
        }
        if (!this.forceSuppressLogging && canLog) {
            this.browserProxy_.handler.sendQualityLog(Array.from(this.clickedIndices_), this.numCharsForLastResultQuery_);
        }
        // Clear this regardless if it was recorded or not, because we don't want
        // to "try again" to record the same query.
        this.resultPendingMetricsTimestamp_ = null;
    }
    overrideLoadingStateMinimumMsForTesting(ms) {
        this.loadingStateMinimumMs_ = ms;
    }
    overrideQueryResultMinAgeForTesting(ms) {
        this.queryResultMinAge_ = ms;
    }
    searchResultChangedForTesting(result) {
        this.searchResultChanged_(result);
    }
}
customElements.define(HistoryEmbeddingsElement.is, HistoryEmbeddingsElement);

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Helper functions for implementing an incremental search field. See
 * <settings-subpage-search> for a simple implementation.
 */
const CrSearchFieldMixinLit = (superClass) => {
    class CrSearchFieldMixinLit extends superClass {
        static get properties() {
            return {
                // Prompt text to display in the search field.
                label: {
                    type: String,
                },
                // Tooltip to display on the clear search button.
                clearLabel: {
                    type: String,
                },
                hasSearchText: {
                    type: Boolean,
                    reflect: true,
                },
                // When set, overrides the default search delay (in ms) before
                // dispatching the 'search' event.
                searchDelay: {
                    type: Number,
                },
            };
        }
        #label_accessor_storage = '';
        get label() { return this.#label_accessor_storage; }
        set label(value) { this.#label_accessor_storage = value; }
        #clearLabel_accessor_storage = '';
        get clearLabel() { return this.#clearLabel_accessor_storage; }
        set clearLabel(value) { this.#clearLabel_accessor_storage = value; }
        #hasSearchText_accessor_storage = false;
        get hasSearchText() { return this.#hasSearchText_accessor_storage; }
        set hasSearchText(value) { this.#hasSearchText_accessor_storage = value; }
        #searchDelay_accessor_storage = undefined;
        get searchDelay() { return this.#searchDelay_accessor_storage; }
        set searchDelay(value) { this.#searchDelay_accessor_storage = value; }
        effectiveValue_ = '';
        searchDelayTimer_ = -1;
        /**
         * @return The input field element the behavior should use.
         */
        getSearchInput() {
            assertNotReached();
        }
        /**
         * @return The value of the search field.
         */
        getValue() {
            return this.getSearchInput().value;
        }
        /**
         * Sets the value of the search field.
         * @param noEvent Whether to prevent a 'search-changed' event
         *     firing for this change.
         */
        setValue(value, noEvent) {
            const updated = this.updateEffectiveValue_(value);
            this.getSearchInput().value = this.effectiveValue_;
            if (!updated) {
                // If the input is only whitespace and value is empty,
                // |hasSearchText| needs to be updated.
                if (value === '' && this.hasSearchText) {
                    this.hasSearchText = false;
                }
                return;
            }
            this.onSearchTermInput();
            if (!noEvent) {
                this.fire('search-changed', this.effectiveValue_);
            }
        }
        scheduleSearch_() {
            if (this.searchDelayTimer_ >= 0) {
                clearTimeout(this.searchDelayTimer_);
            }
            // If searchDelay is not specified, dispatch 'search' event after:
            //    0ms if the value is empty
            //  500ms if the value length is 1
            //  400ms if the value length is 2
            //  300ms if the value length is 3
            //  200ms if the value length is 4 or greater.
            // The logic here was copied from WebKit's native 'search' event.
            const length = this.getValue().length;
            let timeoutMs = 0;
            if (length > 0) {
                timeoutMs =
                    this.searchDelay ?? (500 - 100 * (Math.min(length, 4) - 1));
            }
            this.searchDelayTimer_ = setTimeout(() => {
                this.getSearchInput().dispatchEvent(new CustomEvent('search', { composed: true, detail: this.getValue() }));
                this.searchDelayTimer_ = -1;
            }, timeoutMs);
        }
        onSearchTermSearch() {
            this.onValueChanged_(this.getValue(), false);
        }
        /**
         * Update the state of the search field whenever the underlying input
         * value changes. Unlike onsearch or onkeypress, this is reliably called
         * immediately after any change, whether the result of user input or JS
         * modification.
         */
        onSearchTermInput() {
            this.hasSearchText = this.getSearchInput().value !== '';
            this.scheduleSearch_();
        }
        /**
         * Updates the internal state of the search field based on a change that
         * has already happened.
         * @param noEvent Whether to prevent a 'search-changed' event
         *     firing for this change.
         */
        onValueChanged_(newValue, noEvent) {
            const updated = this.updateEffectiveValue_(newValue);
            if (updated && !noEvent) {
                this.fire('search-changed', this.effectiveValue_);
            }
        }
        /**
         * Trim leading whitespace and replace consecutive whitespace with
         * single space. This will prevent empty string searches and searches
         * for effectively the same query.
         */
        updateEffectiveValue_(value) {
            const effectiveValue = value.replace(/\s+/g, ' ').replace(/^\s/, '');
            if (effectiveValue === this.effectiveValue_) {
                return false;
            }
            this.effectiveValue_ = effectiveValue;
            return true;
        }
    }
    return CrSearchFieldMixinLit;
};

let instance$5 = null;
function getCss$4() {
    return instance$5 || (instance$5 = [...[], css `.spinner{--cr-spinner-size:28px;mask-image:url(//resources/images/throbber_small.svg);mask-position:center;mask-repeat:no-repeat;mask-size:var(--cr-spinner-size) var(--cr-spinner-size);background-color:var(--cr-spinner-color,var(--google-blue-500));height:var(--cr-spinner-size);width:var(--cr-spinner-size)}@media (prefers-color-scheme:dark){.spinner{background-color:var(--cr-spinner-color,var(--google-blue-300))}}`]);
}

let instance$4 = null;
function getCss$3() {
    return instance$4 || (instance$4 = [...[getCss$q(), getCss$r(), getCss$4()], css `:host{display:block;height:40px;isolation:isolate;transition:background-color 150ms cubic-bezier(0.4,0,0.2,1),width 150ms cubic-bezier(0.4,0,0.2,1);width:44px}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none !important}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-input-icon-color,var(--google-grey-700));--cr-icon-button-focus-outline-color:var(--cr-toolbar-icon-button-focus-outline-color,var(--cr-focus-outline-color))}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-input-icon-color,var(--google-grey-500))}}cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,var(--color-toolbar-search-field-icon,var(--cr-secondary-text-color)));--cr-icon-button-size:var(--cr-toolbar-icon-container-size,28px);--cr-icon-button-icon-size:20px;margin:var(--cr-toolbar-icon-margin,0)}#icon{transition:margin 150ms,opacity 200ms}#prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--color-toolbar-search-field-foreground-placeholder,var(--cr-secondary-text-color)));opacity:0;transition:opacity 200ms}@media (prefers-color-scheme:dark){#prompt{color:var(--cr-toolbar-search-field-prompt-color,white)}}@media (prefers-color-scheme:dark){#prompt{--cr-toolbar-search-field-prompt-opacity:1;color:var(--cr-secondary-text-color,white)}}.spinner{--cr-spinner-color:var(--cr-toolbar-search-field-input-icon-color,var(--google-grey-700));--cr-spinner-size:var(--cr-icon-size);margin:0;opacity:1;padding:2px;position:absolute}@media (prefers-color-scheme:dark){.spinner{--cr-spinner-color:var(--cr-toolbar-search-field-input-icon-color,white)}}#searchTerm{-webkit-font-smoothing:antialiased;flex:1;font-size:12px;font-weight:500;line-height:185%;margin:var(--cr-toolbar-search-field-term-margin,0);min-width:0;position:relative}label{bottom:0;cursor:var(--cr-toolbar-search-field-cursor,text);left:0;overflow:hidden;position:absolute;right:0;text-overflow:ellipsis;top:0;white-space:nowrap}:host([has-search-text]) label{visibility:hidden}input{-webkit-appearance:none;background:transparent;border:none;caret-color:var(--cr-toolbar-search-field-input-caret-color,currentColor);color:var(--cr-toolbar-search-field-input-text-color,var(--color-toolbar-search-field-foreground,var(--cr-fallback-color-on-surface)));font:inherit;font-size:12px;font-weight:500;outline:none;padding:0;position:relative;width:100%}@media (prefers-color-scheme:dark){input{color:var(--cr-toolbar-search-field-input-text-color,white)}}input[type='search']::-webkit-search-cancel-button{display:none}:host([narrow]){border-radius:var(--cr-toolbar-search-field-border-radius,0)}:host(:not([narrow])){background:none;border-radius:var(--cr-toolbar-search-field-border-radius,46px);cursor:var(--cr-toolbar-search-field-cursor,default);height:36px;max-width:var(--cr-toolbar-field-max-width,none);overflow:hidden;padding:0 6px;position:relative;width:var(--cr-toolbar-field-width,680px);--cr-toolbar-search-field-border-radius:100px}@media (prefers-color-scheme:dark){:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,rgba(0,0,0,0.22))}}#background,#stateBackground{display:none}:host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-base-container)));border-radius:inherit;display:block;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([webui-refresh-2026]){&:host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-surface4)))}}:host([search-focused_]:not([narrow])){outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host(:not([narrow])) #stateBackground{display:block;inset:0;pointer-events:none;position:absolute}:host(:hover:not([search-focused_],[narrow])) #stateBackground{background:var(--color-toolbar-search-field-background-hover,var(--cr-hover-background-color));z-index:1}:host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,1)}:host(:not([narrow])) #prompt{opacity:var(--cr-toolbar-search-field-prompt-opacity,1)}:host([narrow]) #prompt{opacity:var(--cr-toolbar-search-field-narrow-mode-prompt-opacity,0)}:host([narrow]:not([showing-search])) #searchTerm{display:none}:host([showing-search][spinner-active]) #icon{opacity:0}:host([narrow][showing-search]){width:100%}:host([narrow][showing-search]) #icon,:host([narrow][showing-search]) .spinner{margin-inline-start:var(--cr-toolbar-search-icon-margin-inline-start,18px)}#content{align-items:center;display:flex;height:100%;position:relative;z-index:2}`]);
}

let instance$3 = null;
function getCss$2() {
    return instance$3 || (instance$3 = [...[getCss$3()], css `:host(:not([narrow])){border-radius:var(--leo-radius-m);height:44px}:host(:not([narrow])) #background{border:1px solid var(--leo-color-divider-subtle);border-radius:var(--leo-radius-m);background:var(--leo-color-container-background)}@media (prefers-color-scheme:dark){:host(:not([narrow])) #background{background:transparent;border-color:var(--leo-color-divider-subtle)}}input{font-family:system-ui,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.1px}#prompt{font-family:system-ui,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.1px;color:var(--leo-color-text-tertiary)}cr-icon-button{--cr-icon-button-fill-color:var(--leo-color-icon-default)}:host(:hover:not([search-focused_],[narrow])) #stateBackground{background:rgba(0,0,0,0.05)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$1() {
    // clang-format off
    return html `
<div id="background"></div>
<div id="stateBackground"></div>
<div id="content">
  ${this.shouldShowSpinner_() ? html `
    <div class="spinner"></div>
  ` : ''}
  <cr-icon-button id="icon" iron-icon="${this.iconOverride || 'cr:search'}"
      title="${this.label}" tabindex="${this.getIconTabIndex_()}"
      aria-hidden="${this.getIconAriaHidden_()}" suppress-rtl-flip
      @click="${this.onSearchIconClick_}" ?disabled="${this.disabled}">
  </cr-icon-button>
  <div id="searchTerm">
    <label id="prompt" for="searchInput" aria-hidden="true">
      ${this.label}
    </label>
    <input id="searchInput" aria-labelledby="prompt"
        aria-description="${this.inputAriaDescription}" autocapitalize="off"
        autocomplete="off" type="search"
        @beforeinput="${this.onSearchTermNativeBeforeinput}"
        @input="${this.onSearchTermNativeInput}"
        @search="${this.onSearchTermSearch}"
        @keydown="${this.onSearchTermKeydown_}" @focus="${this.onInputFocus_}"
        @blur="${this.onInputBlur_}" ?autofocus="${this.autofocus}"
        spellcheck="false" ?disabled="${this.disabled}">
  </div>
  ${this.hasSearchText ? html `
    <cr-icon-button id="clearSearch" iron-icon="cr:cancel-filled"
        title="${this.clearLabel}" @click="${this.onClearSearchClick_}"
        ?disabled="${this.disabled}">
    </cr-icon-button>
  ` : html `
    <slot name="suffixElement"></slot>
  `}
</div>`;
    // clang-format on
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrToolbarSearchFieldElementBase = CrSearchFieldMixinLit(CrLitElement);
class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase {
    static get is() {
        return 'cr-toolbar-search-field';
    }
    static get styles() {
        return getCss$2();
    }
    render() {
        return getHtml$1.bind(this)();
    }
    static get properties() {
        return {
            narrow: {
                type: Boolean,
                reflect: true,
            },
            showingSearch: {
                type: Boolean,
                notify: true,
                reflect: true,
            },
            disabled: {
                type: Boolean,
                reflect: true,
            },
            autofocus: {
                type: Boolean,
                reflect: true,
            },
            // When true, show a loading spinner to indicate that the backend is
            // processing the search. Will only show if the search field is open.
            spinnerActive: {
                type: Boolean,
                reflect: true,
            },
            searchFocused_: {
                type: Boolean,
                reflect: true,
            },
            iconOverride: { type: String },
            inputAriaDescription: { type: String },
        };
    }
    #narrow_accessor_storage = false;
    get narrow() { return this.#narrow_accessor_storage; }
    set narrow(value) { this.#narrow_accessor_storage = value; }
    #showingSearch_accessor_storage = false;
    get showingSearch() { return this.#showingSearch_accessor_storage; }
    set showingSearch(value) { this.#showingSearch_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #autofocus_accessor_storage = false;
    get autofocus() { return this.#autofocus_accessor_storage; }
    set autofocus(value) { this.#autofocus_accessor_storage = value; }
    #spinnerActive_accessor_storage = false;
    get spinnerActive() { return this.#spinnerActive_accessor_storage; }
    set spinnerActive(value) { this.#spinnerActive_accessor_storage = value; }
    #searchFocused__accessor_storage = false;
    get searchFocused_() { return this.#searchFocused__accessor_storage; }
    set searchFocused_(value) { this.#searchFocused__accessor_storage = value; }
    #iconOverride_accessor_storage;
    get iconOverride() { return this.#iconOverride_accessor_storage; }
    set iconOverride(value) { this.#iconOverride_accessor_storage = value; }
    #inputAriaDescription_accessor_storage = '';
    get inputAriaDescription() { return this.#inputAriaDescription_accessor_storage; }
    set inputAriaDescription(value) { this.#inputAriaDescription_accessor_storage = value; }
    firstUpdated() {
        this.addEventListener('click', e => this.showSearch_(e));
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    isSearchFocused() {
        return this.searchFocused_;
    }
    async showAndFocus() {
        this.showingSearch = true;
        await this.updateComplete;
        this.focus_();
    }
    onSearchTermNativeBeforeinput(e) {
        this.fire('search-term-native-before-input', { e });
    }
    onSearchTermInput() {
        super.onSearchTermInput();
        this.showingSearch = this.hasSearchText || this.isSearchFocused();
    }
    onSearchTermNativeInput(e) {
        this.onSearchTermInput();
        this.fire('search-term-native-input', { e, inputValue: this.getValue() });
    }
    getIconTabIndex_() {
        return this.narrow && !this.hasSearchText ? 0 : -1;
    }
    getIconAriaHidden_() {
        return (!this.narrow || this.hasSearchText).toString();
    }
    shouldShowSpinner_() {
        return this.spinnerActive && this.showingSearch;
    }
    onSearchIconClick_() {
        this.fire('search-icon-clicked');
    }
    focus_() {
        this.getSearchInput().focus();
    }
    onInputFocus_() {
        this.searchFocused_ = true;
    }
    onInputBlur_() {
        this.searchFocused_ = false;
        if (!this.hasSearchText) {
            this.showingSearch = false;
        }
    }
    onSearchTermKeydown_(e) {
        if (e.key === 'Escape') {
            this.showingSearch = false;
            this.setValue('');
            this.getSearchInput().blur();
        }
    }
    async showSearch_(e) {
        if (e.target !== this.shadowRoot.querySelector('#clearSearch')) {
            this.showingSearch = true;
        }
        if (this.narrow) {
            await this.updateComplete; // Wait for input to become focusable.
            this.focus_();
        }
    }
    onClearSearchClick_() {
        this.setValue('');
        this.focus_();
        this.spinnerActive = false;
        this.fire('search-term-cleared');
    }
}
customElements.define(CrToolbarSearchFieldElement.is, CrToolbarSearchFieldElement);

// ui/webui/resources/cr_components/color_change_listener/color_change_listener.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'color_change_listener.mojom.PageHandler', scope);
    }
}
class PageHandlerRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    setPage(page) {
        this.proxy.sendMessage(0, PageHandler_SetPage_ParamsSpec.$, null, [
            page
        ], false);
    }
}
class PageHandler {
    static get $interfaceName() {
        return "color_change_listener.mojom.PageHandler";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PageHandlerRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class PagePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'color_change_listener.mojom.Page', scope);
    }
}
class PageRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    onColorProviderChanged() {
        this.proxy.sendMessage(0, Page_OnColorProviderChanged_ParamsSpec.$, null, [], false);
    }
}
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class PageCallbackRouter {
    helper_internal_;
    $;
    router_;
    onColorProviderChanged;
    onConnectionError;
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.onColorProviderChanged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, Page_OnColorProviderChanged_ParamsSpec.$, null, this.onColorProviderChanged.createReceiverHandler(false /* expectsResponse */), false);
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id) {
        return this.router_.removeListener(id);
    }
}
const PageHandler_SetPage_ParamsSpec = { $: {} };
const Page_OnColorProviderChanged_ParamsSpec = { $: {} };
mojo.internal.Struct(PageHandler_SetPage_ParamsSpec.$, 'PageHandler_SetPage_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnColorProviderChanged_ParamsSpec.$, 'Page_OnColorProviderChanged_Params', [], [[0, 8],]);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file provides a singleton class that exposes the Mojo
 * handler interface used for one way communication between the JS and the
 * browser.
 * TODO(tluk): Convert this into typescript once all dependencies have been
 * fully migrated.
 */
let instance$2 = null;
class BrowserProxy {
    callbackRouter;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        const pageHandlerRemote = PageHandler.getRemote();
        pageHandlerRemote.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    static getInstance() {
        return instance$2 || (instance$2 = new BrowserProxy());
    }
    static setInstance(newInstance) {
        instance$2 = newInstance;
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file holds the functions that allow WebUI to update its
 * colors CSS stylesheet when a ColorProvider change in the browser is detected.
 */
/**
 * The CSS selector used to get the <link> node with the colors.css stylesheet.
 * The wildcard is needed since the URL ends with a timestamp.
 */
const COLORS_CSS_SELECTOR = 'link[href*=\'//theme/colors.css\']';
let documentInstance = null;
// Event fired after updated colors have been fetched and applied.
const COLOR_PROVIDER_CHANGED = 'color-provider-changed';
class ColorChangeUpdater {
    listenerId_ = null;
    root_;
    eventTarget = new EventTarget();
    constructor(root) {
        assert(documentInstance === null || root !== document);
        this.root_ = root;
    }
    /**
     * Starts listening for ColorProvider changes from the browser and updates the
     * `root_` whenever changes occur.
     */
    start() {
        if (this.listenerId_ !== null) {
            return;
        }
        this.listenerId_ = BrowserProxy.getInstance()
            .callbackRouter.onColorProviderChanged.addListener(this.onColorProviderChanged.bind(this));
    }
    // TODO(dpapad): Figure out how to properly trigger
    // `callbackRouter.onColorProviderChanged` listeners from tests and make this
    // method private.
    async onColorProviderChanged() {
        await this.refreshColorsCss();
        this.eventTarget.dispatchEvent(new CustomEvent(COLOR_PROVIDER_CHANGED));
    }
    /**
     * Forces `root_` to refresh its colors.css stylesheet. This is used to
     * fetch an updated stylesheet when the ColorProvider associated with the
     * WebUI has changed.
     * @return A promise which resolves to true once the new colors are loaded and
     *     installed into the DOM. In the case of an error returns false. When a
     *     new colors.css is loaded, this will always freshly query the existing
     *     colors.css, allowing multiple calls to successfully remove existing,
     *     outdated CSS.
     */
    async refreshColorsCss() {
        const colorCssNode = this.root_.querySelector(COLORS_CSS_SELECTOR);
        if (!colorCssNode) {
            return false;
        }
        const href = colorCssNode.getAttribute('href');
        if (!href) {
            return false;
        }
        const hrefURL = new URL(href, location.href);
        const params = new URLSearchParams(hrefURL.search);
        params.set('version', new Date().getTime().toString());
        const newHref = `${hrefURL.origin}${hrefURL.pathname}?${params.toString()}`;
        // A flickering effect may take place when setting the href property of
        // the existing color css node with a new value. In order to avoid
        // flickering, we create a new link element and once it is loaded we
        // remove the old one. See crbug.com/1365320 for additional details.
        const newColorsCssLink = document.createElement('link');
        newColorsCssLink.setAttribute('href', newHref);
        newColorsCssLink.rel = 'stylesheet';
        newColorsCssLink.type = 'text/css';
        const newColorsLoaded = new Promise(resolve => {
            newColorsCssLink.onload = resolve;
        });
        if (this.root_ === document) {
            document.getElementsByTagName('body')[0].appendChild(newColorsCssLink);
        }
        else {
            this.root_.appendChild(newColorsCssLink);
        }
        await newColorsLoaded;
        const oldColorCssNode = document.querySelector(COLORS_CSS_SELECTOR);
        if (oldColorCssNode) {
            oldColorCssNode.remove();
        }
        return true;
    }
    static forDocument() {
        return documentInstance ||
            (documentInstance = new ColorChangeUpdater(document));
    }
}

// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
const DEFAULT_COLORS_HREF = '//theme/colors.css?sets=ui';
const oldStart = ColorChangeUpdater.prototype.start;
ColorChangeUpdater.prototype.start = function () {
    const root = this.root_;
    // Ensure that we load colors.css or the ColorChangeUpdater won't update them
    // when the theme changes.
    // We need this because we want all WebUI pages to use the dynamic colors,
    // whereas upstream only opts in specific pages (where they explicitly include
    // the CSS).
    const colorCssNode = root.querySelector(COLORS_CSS_SELECTOR);
    if (!colorCssNode) {
        const colorsCssLink = document.createElement('link');
        colorsCssLink.rel = 'stylesheet';
        colorsCssLink.type = 'text/css';
        colorsCssLink.setAttribute('href', DEFAULT_COLORS_HREF);
        if (root === document) {
            document.getElementsByTagName('body')[0].appendChild(colorsCssLink);
        }
        else {
            root.appendChild(colorsCssLink);
        }
    }
    oldStart.call(this);
};

const sheet = new CSSStyleSheet();
sheet.replaceSync(`html{--sp-body-padding:8px;--sp-card-block-padding:8px;--sp-card-inline-padding:16px;--sp-card-padding:var(--sp-card-block-padding) var(--sp-card-inline-padding);--sp-card-gap:12px;--cr-primary-text-color:var(--color-side-panel-card-primary-foreground);--cr-secondary-text-color:var(--color-side-panel-card-secondary-foreground)}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

let instance$1 = null;
function getCss$1() {
    return instance$1 || (instance$1 = [...[], css `.sp-card{background:var(--color-side-panel-card-background);border-radius:12px;display:block;margin:0 var(--sp-body-padding);padding:var(--sp-card-block-padding) 0}.sp-card sp-heading{margin:0;padding:0 var(--sp-card-inline-padding)}.sp-scroller{display:block;overflow-x:hidden;overflow-y:auto;scrollbar-gutter:stable}.sp-scroller::-webkit-scrollbar{background:transparent;width:var(--sp-body-padding)}.sp-scroller::-webkit-scrollbar-thumb{background:var(--color-side-panel-scrollbar-thumb);background-clip:content-box;border:solid 1.5px transparent;border-radius:100px}.sp-scroller-top-of-page::-webkit-scrollbar-track{margin-block-start:var(--sp-body-padding)}.sp-scroller-bottom-of-page::-webkit-scrollbar-track{margin-block-end:var(--sp-body-padding)}.sp-scroller .sp-card,:host-context(.sp-scroller) .sp-card{margin-inline-end:0}.sp-icon-buttons-row{align-items:center;display:grid;gap:12px;grid-auto-columns:16px;grid-auto-flow:column;justify-items:center}.sp-icon-buttons-row cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px}.sp-hr{background:var(--color-side-panel-divider);border:none;height:1px;width:100%}.sp-cards-separator{border:0;flex-shrink:0;height:8px;margin:0;width:100%}cr-dialog{--cr-dialog-background-color:var(--color-side-panel-dialog-background);--cr-primary-text-color:var(--color-side-panel-dialog-primary-foreground);--cr-secondary-text-color:var(--color-side-panel-dialog-secondary-foreground);--cr-dialog-title-font-size:16px;--cr-dialog-title-slot-padding-bottom:8px;font-weight:500}cr-dialog::part(dialog){--cr-scrollable-border-color:var(--color-side-panel-dialog-divider);border-radius:12px;box-shadow:var(--cr-elevation-3)}`]);
}

let instance = null;
function getCss() {
    return instance || (instance = [...[getCss$1()], css `:host{display:flex;flex-direction:column;height:100%}#searchbox{margin:var(--sp-body-padding);flex-shrink:0;width:auto}#historyClusters{flex:1;margin-inline-start:var(--sp-body-padding);padding-block-start:0;padding-block-end:var(--sp-body-padding)}#historyEmbeddingsDisclaimer{color:var(--cr-secondary-text-color);font-size:11px;line-height:16px;margin-block-end:24px;padding:0 16px}#historyEmbeddingsDisclaimer a{color:var(--cr-link-color)}#embeddingsScrollContainer{display:contents}:host([enable-history-embeddings_]) #embeddingsScrollContainer{display:flex;flex:1;flex-direction:column;overflow:auto}cr-history-embeddings{--cr-card-shadow:none;--cr-history-embeddings-answer-padding:8px 16px 6px 16px;--cr-history-embeddings-answer-section-margin-block-end:0;--cr-history-embeddings-answer-source-margin:0 16px 12px 16px;--cr-history-embeddings-card-padding-block:8px 0;--cr-history-embeddings-card-padding-block-with-answers:8px 12px;--cr-history-embeddings-footer-font-size:11px;--cr-history-embeddings-footer-line-height:16px;--cr-history-embeddings-footer-padding:16px;--cr-history-embeddings-footer-padding-with-answers:16px 8px 8px;--cr-history-embeddings-heading-font-size:12px;--cr-history-embeddings-heading-line-height:16px;--cr-history-embeddings-heading-padding:8px 16px;--cr-history-embeddings-hr-display:none;--cr-history-embeddings-loading-padding:8px 16px 6px 16px;--cr-history-embeddings-url-list-item-padding:4px 16px;align-self:center;margin:0 0 16px 8px;max-width:var(--cluster-max-width);width:calc(100% - 8px)}:host([has-history-embeddings-results_]) history-clusters[is-empty]{display:none}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml() {
    return html `<!--_html_template_start_-->
<cr-toolbar-search-field id="searchbox"
    @search-changed="${this.onSearchChanged_}"
    label="$i18n{historyClustersSearchPrompt}" clear-label="$i18n{clearSearch}"
    @contextmenu="${this.onContextmenu_}" icon-override="${this.searchIcon_}"
    @search-term-native-input="${this.onSearchTermNativeInput_}"
    @search-term-cleared="${this.onSearchTermCleared_}">
</cr-toolbar-search-field>
${this.enableHistoryEmbeddings_ ? html `
  <div id="historyEmbeddingsDisclaimer">
    $i18n{historyEmbeddingsDisclaimer}
  </div>
` : ''}
<div id="embeddingsScrollContainer"
    class="sp-scroller sp-scroller-bottom-of-page">
  ${this.shouldShowHistoryEmbeddingsResults_() ? html `
    <cr-history-embeddings show-relative-times in-side-panel
        .searchQuery="${this.query}" ?force-suppress-logging="${this.historyEmbeddingsDisclaimerLinkClicked_}"
        ?other-history-result-clicked="${this.nonEmbeddingsResultClicked_}"
        .numCharsForQuery="${this.numCharsTypedInSearch_}"
        @answer-click="${this.onHistoryEmbeddingsAnswerClick_}"
        @answer-context-menu="${this.onAnswerContextMenu_}"
        @is-empty-changed="${this.onHistoryEmbeddingsIsEmptyChanged_}"
        @result-click="${this.onHistoryEmbeddingsResultClick_}"
        @result-context-menu="${this.onHistoryEmbeddingsResultContextMenu_}"
        @remove-item-click="${this.onHistoryEmbeddingsRemoveItemClick_}">

    </cr-history-embeddings>
  ` : ''}
  <history-clusters id="historyClusters" query="${this.query}" path="journeys"
      @query-changed-by-user="${this.onQueryChangedByUser_}"
      @record-history-link-click="${this.onClusterRecordHistoryLinkClick_}"
      class="${this.getClustersComponentClass_()}"
      .scrollTarget="${this.scrollTarget_}">
  </history-clusters>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HistoryClustersAppElement extends CrLitElement {
    static get is() {
        return 'history-clusters-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enableHistoryEmbeddings_: { type: Boolean, reflect: true },
            hasHistoryEmbeddingsResults_: { type: Boolean, reflect: true },
            historyEmbeddingsDisclaimerLinkClicked_: { type: Boolean },
            nonEmbeddingsResultClicked_: { type: Boolean },
            numCharsTypedInSearch_: { type: Number },
            /**
             * The current query for which related clusters are requested and shown.
             */
            query: { type: String },
            scrollTarget_: { type: Object },
            searchIcon_: { type: String },
        };
    }
    constructor() {
        super();
        ColorChangeUpdater.forDocument().start();
    }
    #enableHistoryEmbeddings__accessor_storage = loadTimeData.getBoolean('enableHistoryEmbeddings');
    //============================================================================
    // Properties
    //============================================================================
    get enableHistoryEmbeddings_() { return this.#enableHistoryEmbeddings__accessor_storage; }
    set enableHistoryEmbeddings_(value) { this.#enableHistoryEmbeddings__accessor_storage = value; }
    #hasHistoryEmbeddingsResults__accessor_storage = false;
    get hasHistoryEmbeddingsResults_() { return this.#hasHistoryEmbeddingsResults__accessor_storage; }
    set hasHistoryEmbeddingsResults_(value) { this.#hasHistoryEmbeddingsResults__accessor_storage = value; }
    #historyEmbeddingsDisclaimerLinkClicked__accessor_storage = false;
    get historyEmbeddingsDisclaimerLinkClicked_() { return this.#historyEmbeddingsDisclaimerLinkClicked__accessor_storage; }
    set historyEmbeddingsDisclaimerLinkClicked_(value) { this.#historyEmbeddingsDisclaimerLinkClicked__accessor_storage = value; }
    #query_accessor_storage = '';
    get query() { return this.#query_accessor_storage; }
    set query(value) { this.#query_accessor_storage = value; }
    #nonEmbeddingsResultClicked__accessor_storage = false;
    get nonEmbeddingsResultClicked_() { return this.#nonEmbeddingsResultClicked__accessor_storage; }
    set nonEmbeddingsResultClicked_(value) { this.#nonEmbeddingsResultClicked__accessor_storage = value; }
    #numCharsTypedInSearch__accessor_storage = 0;
    get numCharsTypedInSearch_() { return this.#numCharsTypedInSearch__accessor_storage; }
    set numCharsTypedInSearch_(value) { this.#numCharsTypedInSearch__accessor_storage = value; }
    #scrollTarget__accessor_storage = document.documentElement;
    get scrollTarget_() { return this.#scrollTarget__accessor_storage; }
    set scrollTarget_(value) { this.#scrollTarget__accessor_storage = value; }
    #searchIcon__accessor_storage;
    get searchIcon_() { return this.#searchIcon__accessor_storage; }
    set searchIcon_(value) { this.#searchIcon__accessor_storage = value; }
    //============================================================================
    // Event Handlers
    //============================================================================
    onContextmenu_(event) {
        browserProxyFactory$1.getInstance().handler.showContextMenuForSearchbox(this.query, { x: event.clientX, y: event.clientY });
    }
    //============================================================================
    // Overridden methods
    //============================================================================
    connectedCallback() {
        super.connectedCallback();
        this.scrollTarget_ = this.enableHistoryEmbeddings_ ?
            this.$.embeddingsScrollContainer :
            this.$.historyClusters;
        if (this.enableHistoryEmbeddings_) {
            this.searchIcon_ = loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'history-embeddings:search-spark' :
                'history-embeddings:search-old';
        }
        // Populate the initial query from the URL parameter. Other methods are
        // mostly racy.
        const initialQuery = new URLSearchParams(window.location.search).get('initial_query');
        if (initialQuery) {
            this.$.searchbox.setValue(initialQuery);
        }
    }
    getClustersComponentClass_() {
        return this.enableHistoryEmbeddings_ ?
            '' :
            'sp-scroller sp-scroller-bottom-of-page';
    }
    onHistoryEmbeddingsDisclaimerLinkAuxclick_(e) {
        this.onHistoryEmbeddingsDisclaimerLinkClick_(e);
    }
    onHistoryEmbeddingsDisclaimerLinkClick_(e) {
        e.preventDefault();
        this.historyEmbeddingsDisclaimerLinkClicked_ = true;
        browserProxyFactory.getInstance()
            .handler.openSettingsPage();
    }
    /**
     * Called when the value of the search field changes.
     */
    onSearchChanged_(event) {
        // Update the query based on the value of the search field, if necessary.
        this.query = event.detail;
        this.nonEmbeddingsResultClicked_ = false;
    }
    onHistoryEmbeddingsAnswerClick_(event) {
        this.onHistoryEmbeddingsResultClick_(event);
    }
    onHistoryEmbeddingsResultClick_(event) {
        browserProxyFactory$1.getInstance().handler.openHistoryUrl(event.detail.item.url, {
            middleButton: event.detail.middleButton,
            altKey: event.detail.altKey,
            ctrlKey: event.detail.ctrlKey,
            metaKey: event.detail.metaKey,
            shiftKey: event.detail.shiftKey,
        });
    }
    onAnswerContextMenu_(event) {
        this.onHistoryEmbeddingsResultContextMenu_(event);
    }
    onHistoryEmbeddingsResultContextMenu_(event) {
        event.preventDefault();
        browserProxyFactory$1.getInstance().handler.showContextMenuForURL(event.detail.item.url, {
            x: event.detail.x,
            y: event.detail.y,
        });
    }
    onHistoryEmbeddingsIsEmptyChanged_(e) {
        this.hasHistoryEmbeddingsResults_ = !e.detail.value;
    }
    onHistoryEmbeddingsRemoveItemClick_(e) {
        e.preventDefault();
        const historyEmbeddingsItem = e.detail;
        browserProxyFactory$1.getInstance().handler.removeVisitByUrlAndTime(historyEmbeddingsItem.url, historyEmbeddingsItem.lastUrlVisitTimestamp);
    }
    /**
     * Called when the browser handler forces us to change our query.
     */
    onQueryChangedByUser_(event) {
        // This will in turn fire `onSearchChanged_()`.
        if (this.$.searchbox) {
            this.$.searchbox.setValue(event.detail);
        }
    }
    onClusterRecordHistoryLinkClick_() {
        this.nonEmbeddingsResultClicked_ = true;
    }
    onSearchTermCleared_() {
        if (!this.enableHistoryEmbeddings_) {
            return;
        }
        this.numCharsTypedInSearch_ = 0;
    }
    onSearchTermNativeInput_(e) {
        if (!this.enableHistoryEmbeddings_) {
            return;
        }
        if (e.detail.inputValue.length === 0) {
            // Input was cleared (eg. backspace/delete was hit).
            this.numCharsTypedInSearch_ = 0;
        }
        else if (e.detail.e.data === e.detail.inputValue) {
            // If the inserted text matches exactly with the current value of the
            // input, that implies that the previous input value was cleared or
            // was empty to begin with. So, reset the num chars typed and count this
            // input event as 1 char typed.
            this.numCharsTypedInSearch_ = 1;
        }
        else {
            this.numCharsTypedInSearch_++;
        }
    }
    shouldShowHistoryEmbeddingsResults_() {
        if (!this.enableHistoryEmbeddings_) {
            return false;
        }
        if (!this.query) {
            return false;
        }
        return this.query.split(' ').filter(part => part.length > 0).length >=
            loadTimeData.getInteger('historyEmbeddingsSearchMinimumWordCount');
    }
}
customElements.define(HistoryClustersAppElement.is, HistoryClustersAppElement);

export { PageHandlerRemote$1 as HistoryEmbeddingsPageHandlerRemote, PageCallbackRouter$2 as PageCallbackRouter, PageHandlerRemote$2 as PageHandlerRemote, browserProxyFactory$1 as historyClustersBrowserProxyFactory, browserProxyFactory as historyEmbeddingsBrowserProxyFactory };
//# sourceMappingURL=history_clusters.rollup.js.map
