import { css, CrLitElement, html, nothing } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { deserializeKeyEvent, LoadState } from './pdf_scripting_api.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';
import 'chrome://resources/brave/leo.bundle.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { ZoomBehavior } from './browser_api.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync(`html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-100-rgb:244,199,195;--google-red-100:rgb(var(--google-red-100-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-red-700-rgb:197,57,41;--google-red-700:rgb(var(--google-red-700-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--google-yellow-700-rgb:240,147,0;--google-yellow-700:rgb(var(--google-yellow-700-rgb));--cr-card-background-color:white;--cr-shadow-key-color_:color-mix(in srgb,var(--cr-shadow-color) 30%,transparent);--cr-shadow-ambient-color_:color-mix(in srgb,var(--cr-shadow-color) 15%,transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb),0.1);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:var(--cr-elevation-2);--cr-separator-color:rgba(0,0,0,.06);--cr-title-text-color:rgb(90,90,90);--cr-scrollable-border-color:var(--google-grey-300);--cr-button-edge-spacing:12px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb),.14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1;--cr-fallback-color-outline:rgb(116,119,117);--cr-fallback-color-primary:rgb(11,87,208);--cr-fallback-color-on-primary:rgb(255,255,255);--cr-fallback-color-primary-container:rgb(211,227,253);--cr-fallback-color-on-primary-container:rgb(4,30,73);--cr-fallback-color-secondary-container:rgb(194,231,255);--cr-fallback-color-on-secondary-container:rgb(0,29,53);--cr-fallback-color-neutral-container:rgb(242,242,242);--cr-fallback-color-neutral-outline:rgb(199,199,199);--cr-fallback-color-surface:rgb(255,255,255);--cr-fallback-color-surface1:rgb(248,250,253);--cr-fallback-color-surface2:rgb(243,246,252);--cr-fallback-color-surface3:rgb(239,243,250);--cr-fallback-color-surface4:rgb(237,242,250);--cr-fallback-color-surface5:rgb(234,240,249);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225,227,225);--cr-fallback-color-on-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-subtle:rgb(71,71,71);--cr-fallback-color-inverse-primary:rgb(168,199,250);--cr-fallback-color-inverse-surface:rgb(48,48,48);--cr-fallback-color-inverse-on-surface:rgb(242,242,242);--cr-fallback-color-tonal-container:rgb(211,227,253);--cr-fallback-color-on-tonal-container:rgb(4,30,73);--cr-fallback-color-tonal-outline:rgb(168,199,250);--cr-fallback-color-error:rgb(179,38,30);--cr-fallback-color-divider:rgb(211,227,253);--cr-fallback-color-state-hover-on-prominent_:rgba(253,252,251,.1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(var(--cr-fallback-color-state-ripple-primary-rgb_),0.32);--cr-fallback-color-base-container:rgb(236,239,247);--cr-fallback-color-disabled-background:rgba(var(--cr-fallback-color-on-surface-rgb),.12);--cr-fallback-color-disabled-foreground:rgba(var(--cr-fallback-color-on-surface-rgb),var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,rgba(var(--cr-fallback-color-on-surface-rgb),.08));--cr-hover-on-prominent-background-color:var(--color-sys-state-hover-on-prominent,var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(--color-sys-state-hover-on-subtle,var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,rgba(var(--cr-fallback-color-on-surface-rgb),.12));--cr-active-on-primary-background-color:var(--color-sys-state-ripple-primary,var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(--color-sys-state-ripple-neutral-on-subtle,var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,var(--cr-fallback-color-primary));--cr-focus-outline-inverse-color:var(--color-sys-state-focus-ring-inverse,var(--cr-fallback-color-inverse-primary));--cr-primary-text-color:var(--color-primary-foreground,var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow,rgb(0,0,0));--cr-checked-color:var(--color-checkbox-foreground-checked,var(--cr-fallback-color-primary))}html[webui-refresh-2026]{--cr-card-background-color:var(--color-webui-card-background)}@media (prefers-color-scheme:dark){html{--cr-fallback-color-outline:rgb(142,145,143);--cr-fallback-color-primary:rgb(168,199,250);--cr-fallback-color-on-primary:rgb(6,46,111);--cr-fallback-color-primary-container:rgb(8,66,160);--cr-fallback-color-on-primary-container:rgb(211,227,253);--cr-fallback-color-secondary-container:rgb(0,74,119);--cr-fallback-color-on-secondary-container:rgb(194,231,255);--cr-fallback-color-neutral-container:rgb(40,40,40);--cr-fallback-color-neutral-outline:rgb(117,117,117);--cr-fallback-color-surface:rgb(31,31,31);--cr-fallback-color-surface1:rgb(39,40,42);--cr-fallback-color-surface2:rgb(45,47,49);--cr-fallback-color-surface3:rgb(51,52,56);--cr-fallback-color-surface4:rgb(52,54,58);--cr-fallback-color-surface5:rgb(56,58,62);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-variant:rgb(196,199,197);--cr-fallback-color-on-surface-subtle:rgb(199,199,199);--cr-fallback-color-inverse-primary:rgb(11,87,208);--cr-fallback-color-inverse-surface:rgb(227,227,227);--cr-fallback-color-inverse-on-surface:rgb(31,31,31);--cr-fallback-color-tonal-container:rgb(0,74,119);--cr-fallback-color-on-tonal-container:rgb(194,231,255);--cr-fallback-color-tonal-outline:rgb(4,125,183);--cr-fallback-color-error:rgb(242,184,181);--cr-fallback-color-divider:rgb(94,94,94);--cr-fallback-color-state-hover-on-prominent_:rgba(31,31,31,.06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40,40,40,1);--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb),0.1);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255,255,255,.06);--cr-menu-shadow:rgba(0,0,0,.3) 0 1px 2px 0,rgba(0,0,0,.15) 0 3px 6px 2px;--cr-separator-color:rgba(255,255,255,.1);--cr-title-text-color:var(--cr-primary-text-color);--cr-scrollable-border-color:var(--google-grey-700)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent;--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}@media (prefers-reduced-motion:reduce){html{--cr-animations-disabled:1}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

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
 * Calls |callback| and stops listening the first time any event in |eventNames|
 * is triggered on |target|.
 * @param eventNames Array or space-delimited string of event names to listen to
 *     (e.g. 'click mousedown').
 * @param callback Called at most once. The optional return value is passed on
 *     by the listener.
 */
function listenOnce(target, eventNames, callback) {
    const eventNamesArray = Array.isArray(eventNames) ? eventNames : eventNames.split(/ +/);
    const removeAllAndCallCallback = function (event) {
        eventNamesArray.forEach(function (eventName) {
            target.removeEventListener(eventName, removeAllAndCallCallback, false);
        });
        return callback(event);
    };
    eventNamesArray.forEach(function (eventName) {
        target.addEventListener(eventName, removeAllAndCallCallback, false);
    });
}
/**
 * @return Whether a modifier key was down when processing |e|.
 */
function hasKeyModifiers(e) {
    return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
}
/**
 * Debounces the given function for the given time. The function is invoked at
 * the end of the debounce period. This is useful for preventing an expensive
 * function from being invoked repeatedly over short periods of time.
 * @param fn The function to debounce.
 * @param time The time in milliseconds to debounce for.
 * @return A function that can be called to cancel the debounce.
 */
function debounceEnd(fn, time = 50) {
    let timerId;
    return () => {
        clearTimeout(timerId);
        timerId = setTimeout(fn, time);
    };
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* @fileoverview Utilities for determining the current platform. */
/** Whether we are using a Mac or not. */
const isMac = /Mac/.test(navigator.platform);
/** Whether this is on the Windows platform or not. */
const isWindows = /Win/.test(navigator.platform);

let instance$e = null;
function getCss$b() {
    return instance$e || (instance$e = [...[], css `[hidden],:host([hidden]){display:none !important}`]);
}

let instance$d = null;
function getCss$a() {
    return instance$d || (instance$d = [...[getCss$b()], css `:host{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle;fill:var(--iron-icon-fill-color,currentcolor);stroke:var(--iron-icon-stroke-color,none);width:var(--iron-icon-width,24px);height:var(--iron-icon-height,24px)}:host-context([webui-refresh-2026]){&:host(:focus){border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}`]);
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
        return getCss$a();
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

let instance$c = null;
function getCss$9() {
    return instance$c || (instance$c = [...[], css `:host{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transform:translate3d(0,0,0)}.ripple{background-color:currentcolor;left:0;opacity:var(--paper-ripple-opacity,0.25);pointer-events:none;position:absolute;will-change:height,transform,width}.ripple,:host(.circle){border-radius:50%}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_RADIUS_PX = 300;
const MIN_DURATION_MS = 800;
/** @return The distance between (x1, y1) and (x2, y2). */
function distance$1(x1, y1, x2, y2) {
    const xDelta = x1 - x2;
    const yDelta = y1 - y2;
    return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
}
class CrRippleElement extends CrLitElement {
    static get is() {
        return 'cr-ripple';
    }
    static get styles() {
        return getCss$9();
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
            return Math.round(distance$1(x, y, corner.x, corner.y));
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

let instance$b = null;
function getCss$8() {
    return instance$b || (instance$b = [...[], css `:host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:32px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:none;overflow:hidden;pointer-events:auto;position:relative;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host(:hover:not([disabled])){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}#ink{--paper-ripple-opacity:1;color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([suppress-rtl-flip]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([suppress-rtl-flip])[multiple-icons_]) cr-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);pointer-events:none;position:relative;width:100%}cr-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color,none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$6() {
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
        return getCss$8();
    }
    render() {
        return getHtml$6.bind(this)();
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
/**
 * @fileoverview PromiseResolver is a helper class that allows creating a
 * Promise that will be fulfilled (resolved or rejected) some time later.
 *
 * Example:
 *  const resolver = new PromiseResolver();
 *  resolver.promise.then(function(result) {
 *    console.log('resolved with', result);
 *  });
 *  ...
 *  ...
 *  resolver.resolve({hello: 'world'});
 */
class PromiseResolver {
    resolve_ = () => { };
    reject_ = () => { };
    isFulfilled_ = false;
    promise_;
    constructor() {
        this.promise_ = new Promise((resolve, reject) => {
            this.resolve_ = (resolution) => {
                resolve(resolution);
                this.isFulfilled_ = true;
            };
            this.reject_ = (reason) => {
                reject(reason);
                this.isFulfilled_ = true;
            };
        });
    }
    /** Whether this resolver has been resolved or rejected. */
    get isFulfilled() {
        return this.isFulfilled_;
    }
    get promise() {
        return this.promise_;
    }
    get resolve() {
        return this.resolve_;
    }
    get reject() {
        return this.reject_;
    }
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
// LINT.IfChange(HighlighterOpacity)
const HIGHLIGHTER_OPACITY = 0.4;
// LINT.ThenChange(//pdf/pdf_ink_brush.cc:HighlighterOpacity)
// 
// 
const SAVE_TO_DRIVE_ACCOUNT_CHOOSER_URL = 'https://accounts.google.com/AccountChooser';
const SAVE_TO_DRIVE_CONSUMER_MANAGE_STORAGE_URL = 'https://one.google.com/storage' +
    '?utm_source=drive' +
    '&utm_medium=desktop' +
    '&utm_campaign=error_dialog_oos';
const SAVE_TO_DRIVE_DASHER_MANAGE_STORAGE_URL = 'https://drive.google.com/drive/quota';
const SAVE_TO_DRIVE_DRIVE_URL = 'https://drive.google.com';
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
// 
/**
 * Determines if the event matches the platform shortcut for strikethrough.
 * Alt+Shift+5 on non-Mac, and Cmd+Shift+X on Mac.
 */
function isStrikethroughShortcut(e) {
    // 
    return e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey &&
        e.key.toLowerCase() === 'x';
    // 
    // 
}
/**
 * Returns the `TextStyle` corresponding to the keyboard shortcut event `e`, or
 * `null` if `e` does not match any text style shortcut.
 */
function getTextStyleForShortcut(e) {
    if (hasCtrlModifierOnly(e)) {
        switch (e.key.toLowerCase()) {
            case 'b':
                return TextStyle.BOLD;
            case 'i':
                return TextStyle.ITALIC;
            case 'u':
                return TextStyle.UNDERLINE;
            default:
                return null;
        }
    }
    return isStrikethroughShortcut(e) ? TextStyle.STRIKETHROUGH : null;
}
// 
/**
 * Whether keydown events should currently be ignored. Events are ignored when
 * an editable element has focus, to allow for proper editing controls.
 * @return Whether keydown events should be ignored.
 */
function shouldIgnoreKeyEvents() {
    const activeElement = getDeepActiveElement();
    assert(activeElement);
    return activeElement.isContentEditable ||
        (activeElement.tagName === 'INPUT' &&
            activeElement.type !== 'radio') ||
        activeElement.tagName === 'TEXTAREA';
}
// 
/**
 * Blends `colorValue` with highlighter opacity on a white background.
 * @param colorValue The red, green, or blue value of a color.
 * @returns The new respective red, green, or blue value of a color that has
 * been transformed using the highlighter transparency on a white background.
 */
function blendHighlighterColorValue(colorValue) {
    return Math.round(colorValue * HIGHLIGHTER_OPACITY + 255 * (1 - HIGHLIGHTER_OPACITY));
}
/**
 * @param color The `Color` in RGB values.
 * @returns A hex-coded color string, formatted as '#ffffff'.
 */
function colorToHex(color) {
    const rgb = [color.r, color.g, color.b]
        .map(value => value.toString(16).padStart(2, '0'))
        .join('');
    return `#${rgb}`;
}
/**
 * @param hex A hex-coded color string, formatted as '#ffffff'.
 * @returns The `Color` in RGB values.
 */
function hexToColor(hex) {
    assert(/^#[0-9a-f]{6}$/.test(hex));
    return {
        r: Number.parseInt(hex.substring(1, 3), 16),
        g: Number.parseInt(hex.substring(3, 5), 16),
        b: Number.parseInt(hex.substring(5, 7), 16),
    };
}
/**
 * @returns Whether `color1` and `color2` have the same RGB values or not.
 */
function colorsEqual(color1, color2) {
    return color1.r === color2.r && color1.g === color2.g &&
        color1.b === color2.b;
}
// 
/* Verifies that the array buffer is suitable for the beginning of a PDF.
 *
 * @param buffer The beginning of data for a PDF.
 */
function verifyPdfHeader(buffer) {
    const MIN_FILE_SIZE = '%PDF1.0'.length;
    // Verify the first bytes to make sure it's a PDF.
    const bufView = new Uint8Array(buffer);
    assert(bufView.length >= MIN_FILE_SIZE);
    assert(String.fromCharCode(bufView[0], bufView[1], bufView[2], bufView[3]) === '%PDF');
}
// 
function getChooserRequiredUrl(accountEmail, redirectUrl) {
    const url = new URL(SAVE_TO_DRIVE_ACCOUNT_CHOOSER_URL);
    url.searchParams.set('Email', accountEmail);
    url.searchParams.set('faa', '1');
    url.searchParams.set('continue', redirectUrl);
    return url.href;
}
function getSaveToDriveManageStorageUrl(accountEmail, accountIsManaged) {
    const redirectUrl = accountIsManaged ?
        SAVE_TO_DRIVE_DASHER_MANAGE_STORAGE_URL :
        SAVE_TO_DRIVE_CONSUMER_MANAGE_STORAGE_URL;
    return getChooserRequiredUrl(accountEmail, redirectUrl);
}
function getSaveToDriveOpenInDriveUrl(accountEmail, driveItemId) {
    const url = new URL(SAVE_TO_DRIVE_DRIVE_URL);
    url.searchParams.set('action', 'locate');
    url.searchParams.set('id', driveItemId);
    return getChooserRequiredUrl(accountEmail, url.href);
}
//  enable_pdf_save_to_drive

let instance$a = null;
function getCss$7() {
    return instance$a || (instance$a = [...[], css `:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}`]);
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$5() {
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
        return getCss$7();
    }
    render() {
        return getHtml$5.bind(this)();
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
            // VoiceOver on Mac does not seem to consistently read out the contents of
            // a static alert element. Toggling the role of alert seems to force VO
            // to consistently read out the messages.
            messagesDiv.removeAttribute('role');
            messagesDiv.setAttribute('role', 'alert');
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

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MIN_ZOOM_DELTA = 0.01;
/** @return Whether two numbers are approximately equal. */
function floatingPointEquals(a, b) {
    // If the zoom level is close enough to the current zoom level, don't
    // change it. This avoids us getting into an infinite loop of zoom changes
    // due to floating point error.
    return Math.abs(a - b) <= MIN_ZOOM_DELTA;
}
// Abstract parent of classes that manage updating the browser with zoom changes
// and/or updating the viewer's zoom when the browser zoom changes.
class ZoomManager {
    browserZoom;
    getViewportZoom;
    eventTarget_ = new EventTarget();
    /**
     * @param getViewportZoomCallback Callback to get the viewport's current zoom
     *     level.
     * @param initialZoom The initial browser zoom level.
     */
    constructor(getViewportZoomCallback, initialZoom) {
        this.browserZoom = initialZoom;
        this.getViewportZoom = getViewportZoomCallback;
    }
    getEventTarget() {
        return this.eventTarget_;
    }
    /**
     * Creates the appropriate kind of zoom manager given the zoom behavior.
     * @param zoomBehavior How to manage zoom.
     * @param getViewportZoom A function that gets the current viewport zoom.
     * @param setBrowserZoomFunction A function that sets the browser zoom to the
     *     provided value.
     * @param initialZoom The initial browser zoom level.
     */
    static create(zoomBehavior, getViewportZoom, setBrowserZoomFunction, initialZoom) {
        switch (zoomBehavior) {
            case ZoomBehavior.MANAGE:
                return new ActiveZoomManager(getViewportZoom, setBrowserZoomFunction, initialZoom);
            case ZoomBehavior.PROPAGATE_PARENT:
                return new EmbeddedZoomManager(getViewportZoom, initialZoom);
            default:
                return new InactiveZoomManager(getViewportZoom, initialZoom);
        }
    }
    /**
     * Combines the internal pdf zoom and the browser zoom to
     * produce the total zoom level for the viewer.
     * @param internalZoom the zoom level internal to the viewer.
     * @return the total zoom level.
     */
    applyBrowserZoom(internalZoom) {
        return this.browserZoom * internalZoom;
    }
    /**
     * Given a zoom level, return the internal zoom level needed to
     * produce that zoom level.
     * @param totalZoom the total zoom level.
     * @return the zoom level internal to the viewer.
     */
    internalZoomComponent(totalZoom) {
        return totalZoom / this.browserZoom;
    }
}
// Has no control over the browser's zoom and does not respond to browser zoom
// changes.
class InactiveZoomManager extends ZoomManager {
    onBrowserZoomChange(_newZoom) { }
    onPdfZoomChange() { }
}
// ActiveZoomManager controls the browser's zoom.
class ActiveZoomManager extends ZoomManager {
    setBrowserZoomFunction_;
    changingBrowserZoom_ = null;
    /**
     * Constructs a ActiveZoomManager.
     * @param getViewportZoom A function that gets the current viewport zoom level
     * @param setBrowserZoomFunction A function that sets the browser zoom to the
     *     provided value.
     * @param initialZoom The initial browser zoom level.
     */
    constructor(getViewportZoom, setBrowserZoomFunction, initialZoom) {
        super(getViewportZoom, initialZoom);
        this.setBrowserZoomFunction_ = setBrowserZoomFunction;
    }
    onBrowserZoomChange(newZoom) {
        // If we are changing the browser zoom level, ignore any browser zoom level
        // change events. Either, the change occurred before our update and will be
        // overwritten, or the change being reported is the change we are making,
        // which we have already handled.
        if (this.changingBrowserZoom_) {
            return;
        }
        if (floatingPointEquals(this.browserZoom, newZoom)) {
            return;
        }
        this.browserZoom = newZoom;
        this.getEventTarget().dispatchEvent(new CustomEvent('set-zoom', { detail: newZoom }));
    }
    onPdfZoomChange() {
        // If we are already changing the browser zoom level in response to a
        // previous extension-initiated zoom-level change, ignore this zoom change.
        // Once the browser zoom level is changed, we check whether the extension's
        // zoom level matches the most recently sent zoom level.
        if (this.changingBrowserZoom_) {
            return;
        }
        const viewportZoom = this.getViewportZoom();
        if (floatingPointEquals(this.browserZoom, viewportZoom)) {
            return;
        }
        this.changingBrowserZoom_ =
            this.setBrowserZoomFunction_(viewportZoom).then(() => {
                this.browserZoom = viewportZoom;
                this.changingBrowserZoom_ = null;
                // The extension's zoom level may have changed while the browser zoom
                // change was in progress. We call back into onPdfZoomChange to ensure
                // the browser zoom is up to date.
                this.onPdfZoomChange();
            });
    }
    /**
     * Combines the internal pdf zoom and the browser zoom to
     * produce the total zoom level for the viewer.
     * @param internalZoom the zoom level internal to the viewer.
     * @return the total zoom level.
     */
    applyBrowserZoom(internalZoom) {
        // The internal zoom and browser zoom are changed together, so the
        // browser zoom is already applied.
        return internalZoom;
    }
    /**
     * Given a zoom level, return the internal zoom level needed to
     * produce that zoom level.
     * @param totalZoom the total zoom level.
     * @return the zoom level internal to the viewer.
     */
    internalZoomComponent(totalZoom) {
        // The internal zoom and browser zoom are changed together, so the
        // internal zoom is the total zoom.
        return totalZoom;
    }
}
// Responds to changes in the browser zoom, but does not control the browser
// zoom.
class EmbeddedZoomManager extends ZoomManager {
    /**
     * Invoked when a browser-initiated zoom-level change occurs.
     * @param newZoom the new browser zoom level.
     */
    onBrowserZoomChange(newZoom) {
        const oldZoom = this.browserZoom;
        this.browserZoom = newZoom;
        this.getEventTarget().dispatchEvent(new CustomEvent('update-zoom-from-browser', { detail: oldZoom }));
    }
    onPdfZoomChange() { }
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @return The area of the intersection of the rects */
function getIntersectionArea(rect1, rect2) {
    const left = Math.max(rect1.x, rect2.x);
    const top = Math.max(rect1.y, rect2.y);
    const right = Math.min(rect1.x + rect1.width, rect2.x + rect2.width);
    const bottom = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
    if (left >= right || top >= bottom) {
        return 0;
    }
    return (right - left) * (bottom - top);
}
/** @return The vector between the two points. */
function vectorDelta(p1, p2) {
    return { x: p2.x - p1.x, y: p2.y - p1.y };
}
// TODO(crbug.com/40808900): Would Viewport be better as a Polymer element?
class Viewport {
    window_;
    scrollContent_;
    defaultZoom_;
    viewportChangedCallback_;
    beforeZoomCallback_;
    afterZoomCallback_;
    userInitiatedCallback_;
    allowedToChangeZoom_ = false;
    internalZoom_ = 1;
    /**
     * Zoom state used to change zoom and fitting type to what it was
     * originally when saved.
     */
    savedZoom_ = null;
    savedFittingType_ = null;
    /**
     * Predefined zoom factors to be used when zooming in/out. These are in
     * ascending order.
     */
    presetZoomFactors_ = [];
    zoomManager_ = null;
    documentDimensions_ = null;
    pageDimensions_ = [];
    fittingType_ = FittingType.NONE;
    prevScale_ = 1;
    smoothScrolling_ = false;
    pinchPhase_ = PinchPhase.NONE;
    pinchPanVector_ = null;
    pinchCenter_ = null;
    firstPinchCenterInFrame_ = null;
    oldCenterInContent_ = null;
    keepContentCentered_ = false;
    tracker_ = new EventTracker();
    gestureDetector_;
    swipeDetector_;
    sentPinchEvent_ = false;
    fullscreenForTesting_ = false;
    /**
     * @param container The element which contains the scrollable content.
     * @param sizer The element which represents the size of the scrollable
     *     content in the viewport
     * @param content The element which is the parent of the plugin in the viewer.
     * @param scrollbarWidth The width of scrollbars on the page
     * @param defaultZoom The default zoom level.
     */
    constructor(container, sizer, content, scrollbarWidth, defaultZoom) {
        this.window_ = container;
        this.scrollContent_ =
            new ScrollContent(this.window_, sizer, content, scrollbarWidth);
        this.defaultZoom_ = defaultZoom;
        this.viewportChangedCallback_ = function () { };
        this.beforeZoomCallback_ = function () { };
        this.afterZoomCallback_ = function () { };
        this.userInitiatedCallback_ = function () { };
        this.gestureDetector_ = new GestureDetector(content);
        this.gestureDetector_.getEventTarget().addEventListener('pinchstart', e => this.onPinchStart_(e));
        this.gestureDetector_.getEventTarget().addEventListener('pinchupdate', e => this.onPinchUpdate_(e));
        this.gestureDetector_.getEventTarget().addEventListener('pinchend', e => this.onPinchEnd_(e));
        this.gestureDetector_.getEventTarget().addEventListener('wheel', e => this.onWheel_(e));
        this.swipeDetector_ = new SwipeDetector(content);
        this.swipeDetector_.getEventTarget().addEventListener('swipe', e => this.onSwipe_(e));
        // Set to a default zoom manager - used in tests.
        this.setZoomManager(new InactiveZoomManager(this.getZoom.bind(this), 1));
        // Print Preview
        if (this.window_ === document.documentElement) {
            window.addEventListener('scroll', this.updateViewport_.bind(this));
            this.scrollContent_.setEventTarget(window);
            window.addEventListener('resize', this.resizeWrapper_.bind(this));
        }
        else if (!(this.window_ instanceof HTMLElement)) {
            // Test case (fake DOM element / MockElement)
            this.scrollContent_.setEventTarget(this.window_);
            // The following line is only used in tests, since they expect
            // |scrollCallback| to be called on the mock |window_| object (legacy).
            this.window_.scrollCallback =
                this.updateViewport_.bind(this);
            // The following line is only used in tests, since they expect
            // |resizeCallback| to be called on the mock |window_| object (legacy).
            this.window_.resizeCallback =
                this.resizeWrapper_.bind(this);
        }
        else {
            // Standard PDF viewer
            this.window_.addEventListener('scroll', this.updateViewport_.bind(this));
            this.scrollContent_.setEventTarget(this.window_);
            const resizeObserver = new ResizeObserver(_ => this.resizeWrapper_());
            const target = this.window_.parentElement;
            assert(target.id === 'main');
            resizeObserver.observe(target);
        }
        document.body.addEventListener('change-zoom', e => this.setZoom(e.detail.zoom));
    }
    /**
     * Sets whether the viewport is in Presentation mode.
     */
    setPresentationMode(enabled) {
        assert((document.fullscreenElement !== null) === enabled);
        this.gestureDetector_.setPresentationMode(enabled);
        this.swipeDetector_.setPresentationMode(enabled);
    }
    /**
     * Sets the contents of the viewport, scrolling within the viewport's window.
     * @param content The new viewport contents, or null to clear the viewport.
     */
    setContent(content) {
        this.scrollContent_.setContent(content);
    }
    /**
     * Sets the contents of the viewport, scrolling within the content's window.
     * @param content The new viewport contents.
     */
    setRemoteContent(content) {
        this.scrollContent_.setRemoteContent(content);
    }
    /**
     * Synchronizes scroll position from remote content.
     */
    syncScrollFromRemote(position) {
        this.scrollContent_.syncScrollFromRemote(position);
    }
    /**
     * Receives acknowledgment of scroll position synchronized to remote content.
     */
    ackScrollToRemote(position) {
        this.scrollContent_.ackScrollToRemote(position);
    }
    setViewportChangedCallback(viewportChangedCallback) {
        this.viewportChangedCallback_ = viewportChangedCallback;
    }
    setBeforeZoomCallback(beforeZoomCallback) {
        this.beforeZoomCallback_ = beforeZoomCallback;
    }
    setAfterZoomCallback(afterZoomCallback) {
        this.afterZoomCallback_ = afterZoomCallback;
    }
    setUserInitiatedCallback(userInitiatedCallback) {
        this.userInitiatedCallback_ = userInitiatedCallback;
    }
    /**
     * @return The number of clockwise 90-degree rotations that have been applied.
     */
    getClockwiseRotations() {
        const options = this.getLayoutOptions();
        return options ? options.defaultPageOrientation : 0;
    }
    /** @return Whether viewport is in two-up view mode. */
    twoUpViewEnabled() {
        const options = this.getLayoutOptions();
        return !!options && options.twoUpViewEnabled;
    }
    /**
     * Clamps the zoom factor (or page scale factor) to be within the limits.
     * @param factor The zoom/scale factor.
     * @return The factor clamped within the limits.
     */
    clampZoom_(factor) {
        assert(this.presetZoomFactors_.length > 0);
        return Math.max(this.presetZoomFactors_[0], Math.min(factor, this.presetZoomFactors_[this.presetZoomFactors_.length - 1]));
    }
    /** @param factors Array containing zoom/scale factors. */
    setZoomFactorRange(factors) {
        assert(factors.length !== 0);
        this.presetZoomFactors_ = factors;
    }
    /**
     * Converts a page position (e.g. the location of a bookmark) to a screen
     * position.
     * @param point The position on `page`.
     * @return The screen position.
     */
    convertPageToScreen(page, point) {
        const dimensions = this.getPageInsetDimensions(page);
        // width & height are already rotated.
        const height = dimensions.height;
        const width = dimensions.width;
        const matrix = new DOMMatrix();
        const rotation = this.getClockwiseRotations() * 90;
        // Set origin for rotation.
        if (rotation === 90) {
            matrix.translateSelf(width, 0);
        }
        else if (rotation === 180) {
            matrix.translateSelf(width, height);
        }
        else if (rotation === 270) {
            matrix.translateSelf(0, height);
        }
        matrix.rotateSelf(0, 0, rotation);
        // Invert Y position with respect to height as page coordinates are
        // measured from the bottom left.
        matrix.translateSelf(0, height);
        matrix.scaleSelf(1, -1);
        const pointsToPixels = 96 / 72;
        const result = matrix.transformPoint(new DOMPoint(point.x * pointsToPixels, point.y * pointsToPixels));
        return {
            x: result.x + PAGE_SHADOW.left,
            y: result.y + PAGE_SHADOW.top,
        };
    }
    /**
     * Returns the zoomed and rounded document dimensions for the given zoom.
     * Rounding is necessary when interacting with the renderer which tends to
     * operate in integral values (for example for determining if scrollbars
     * should be shown).
     * @param zoom The zoom to use to compute the scaled dimensions.
     * @return Scaled 'width' and 'height' of the document.
     */
    getZoomedDocumentDimensions_(zoom) {
        if (!this.documentDimensions_) {
            return null;
        }
        return {
            width: Math.round(this.documentDimensions_.width * zoom),
            height: Math.round(this.documentDimensions_.height * zoom),
        };
    }
    /** @return A dictionary with the 'width'/'height' of the document. */
    getDocumentDimensions() {
        return {
            width: this.documentDimensions_.width,
            height: this.documentDimensions_.height,
        };
    }
    /** @return A dictionary carrying layout options from the plugin. */
    getLayoutOptions() {
        return this.documentDimensions_ ? this.documentDimensions_.layoutOptions :
            undefined;
    }
    /** @return ViewportRect for the viewport given current zoom. */
    getViewportRect_() {
        const zoom = this.getZoom();
        // Zoom can be 0 in the case of a PDF that is in a hidden iframe. Avoid
        // returning undefined values in this case. See https://crbug.com/40763077.
        if (zoom === 0) {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            };
        }
        return {
            x: this.position.x / zoom,
            y: this.position.y / zoom,
            width: this.size.width / zoom,
            height: this.size.height / zoom,
        };
    }
    /**
     * @param zoom Zoom to compute scrollbars for
     * @return Whether horizontal or vertical scrollbars are needed.
     * Public so tests can call it directly.
     */
    documentNeedsScrollbars(zoom) {
        const zoomedDimensions = this.getZoomedDocumentDimensions_(zoom);
        if (!zoomedDimensions) {
            return { horizontal: false, vertical: false };
        }
        return {
            horizontal: zoomedDimensions.width > this.window_.offsetWidth,
            vertical: zoomedDimensions.height > this.window_.offsetHeight,
        };
    }
    /**
     * @return Whether horizontal and vertical scrollbars are needed.
     */
    documentHasScrollbars() {
        return this.documentNeedsScrollbars(this.getZoom());
    }
    /**
     * Helper function called when the zoomed document size changes. Updates the
     * sizer's width and height.
     */
    contentSizeChanged_() {
        const zoomedDimensions = this.getZoomedDocumentDimensions_(this.getZoom());
        if (zoomedDimensions) {
            this.scrollContent_.setSize(zoomedDimensions.width, zoomedDimensions.height);
        }
    }
    /** Called when the viewport should be updated. */
    updateViewport_() {
        this.viewportChangedCallback_();
    }
    /** Called when the browser window size changes. */
    resizeWrapper_() {
        this.userInitiatedCallback_(false);
        this.resize_();
        this.userInitiatedCallback_(true);
    }
    /** Called when the viewport size changes. */
    resize_() {
        // Force fit-to-height when resizing happens as a result of entering full
        // screen mode.
        if (document.fullscreenElement !== null) {
            this.fittingType_ = FittingType.FIT_TO_HEIGHT;
            this.window_.dispatchEvent(new CustomEvent('fitting-type-changed-for-testing'));
        }
        if (this.fittingType_ === FittingType.FIT_TO_PAGE) {
            this.fitToPage({ scrollToTop: false });
        }
        else if (this.fittingType_ === FittingType.FIT_TO_WIDTH) {
            this.fitToWidth();
        }
        else if (this.fittingType_ === FittingType.FIT_TO_HEIGHT) {
            this.fitToHeight();
        }
        else if (this.internalZoom_ === 0) {
            this.fitToNone();
        }
        else {
            this.updateViewport_();
        }
    }
    /** @return The scroll position of the viewport. */
    get position() {
        return {
            x: this.scrollContent_.scrollLeft,
            y: this.scrollContent_.scrollTop,
        };
    }
    /**
     * Scroll the viewport to the specified position.
     * @param position The position to scroll to.
     * @param isSmooth Whether to scroll smoothly.
     */
    setPosition(position, isSmooth = false) {
        this.scrollContent_.scrollTo(position.x, position.y, isSmooth);
    }
    /** @return The size of the viewport. */
    get size() {
        return {
            width: this.window_.offsetWidth,
            height: this.window_.offsetHeight,
        };
    }
    /** Gets the content size. */
    get contentSize() {
        return this.scrollContent_.size;
    }
    /** @return The current zoom. */
    getZoom() {
        return this.zoomManager_.applyBrowserZoom(this.internalZoom_);
    }
    /** @return The preset zoom factors. */
    get presetZoomFactors() {
        return this.presetZoomFactors_;
    }
    setZoomManager(manager) {
        this.resetTracker();
        this.zoomManager_ = manager;
        this.tracker_.add(this.zoomManager_.getEventTarget(), 'set-zoom', (e) => this.setZoom(e.detail));
        this.tracker_.add(this.zoomManager_.getEventTarget(), 'update-zoom-from-browser', this.updateZoomFromBrowserChange_.bind(this));
    }
    /**
     * @return The phase of the current pinch gesture for the viewport.
     */
    get pinchPhase() {
        return this.pinchPhase_;
    }
    /**
     * @return The panning caused by the current pinch gesture (as the deltas of
     *     the x and y coordinates).
     */
    get pinchPanVector() {
        return this.pinchPanVector_;
    }
    /**
     * @return The coordinates of the center of the current pinch gesture.
     */
    get pinchCenter() {
        return this.pinchCenter_;
    }
    /**
     * Used to wrap a function that might perform zooming on the viewport. This is
     * required so that we can notify the plugin that zooming is in progress
     * so that while zooming is taking place it can stop reacting to scroll events
     * from the viewport. This is to avoid flickering.
     */
    mightZoom_(f) {
        this.beforeZoomCallback_();
        this.allowedToChangeZoom_ = true;
        f();
        this.allowedToChangeZoom_ = false;
        this.afterZoomCallback_();
        this.zoomManager_.onPdfZoomChange();
    }
    /**
     * @param currentScrollPos Optional starting position to zoom into. Otherwise,
     *     use the current position.
     */
    setZoomInternal_(newZoom, currentScrollPos) {
        assert(this.allowedToChangeZoom_, 'Called Viewport.setZoomInternal_ without calling ' +
            'Viewport.mightZoom_.');
        // Record the scroll position (relative to the top-left of the window).
        let zoom = this.getZoom();
        if (!currentScrollPos) {
            currentScrollPos = {
                x: this.position.x / zoom,
                y: this.position.y / zoom,
            };
        }
        this.internalZoom_ = newZoom;
        this.contentSizeChanged_();
        // Scroll to the scaled scroll position.
        zoom = this.getZoom();
        this.setPosition({
            x: currentScrollPos.x * zoom,
            y: currentScrollPos.y * zoom,
        });
    }
    /**
     * Sets the zoom of the viewport.
     * Same as setZoomInternal_ but for pinch zoom we have some more operations.
     * @param scaleDelta The zoom delta.
     * @param center The pinch center in plugin coordinates.
     */
    setPinchZoomInternal_(scaleDelta, center) {
        assert(this.allowedToChangeZoom_, 'Called Viewport.setPinchZoomInternal_ without calling ' +
            'Viewport.mightZoom_.');
        this.internalZoom_ = this.clampZoom_(this.internalZoom_ * scaleDelta);
        assert(this.oldCenterInContent_);
        const delta = vectorDelta(this.oldCenterInContent_, this.pluginToContent_(center));
        // Record the scroll position (relative to the pinch center).
        const zoom = this.getZoom();
        const currentScrollPos = {
            x: this.position.x - delta.x * zoom,
            y: this.position.y - delta.y * zoom,
        };
        this.contentSizeChanged_();
        // Scroll to the scaled scroll position.
        this.setPosition(currentScrollPos);
    }
    /**
     *  Converts a point from plugin to content coordinates.
     *  @param pluginPoint The plugin coordinates.
     *  @return The content coordinates.
     */
    pluginToContent_(pluginPoint) {
        // TODO(mcnee) Add a helper Point class to avoid duplicating operations
        // on plain {x,y} objects.
        const zoom = this.getZoom();
        return {
            x: (pluginPoint.x + this.position.x) / zoom,
            y: (pluginPoint.y + this.position.y) / zoom,
        };
    }
    /** @param newZoom The zoom level to zoom to. */
    setZoom(newZoom) {
        this.fittingType_ = FittingType.NONE;
        this.mightZoom_(() => {
            this.setZoomInternal_(this.clampZoom_(newZoom));
            this.updateViewport_();
        });
    }
    /**
     * Save the current zoom and fitting type.
     */
    saveZoomState() {
        // Fitting to bounding box does not need to be saved, so set the fitting
        // type to none.
        if (this.fittingType_ === FittingType.FIT_TO_BOUNDING_BOX) {
            this.setFittingType(FittingType.NONE);
        }
        this.savedZoom_ = this.internalZoom_;
        this.savedFittingType_ = this.fittingType_;
    }
    /**
     * Set zoom and fitting type to what it was when saved. See saveZoomState().
     */
    restoreZoomState() {
        assert(this.savedZoom_ !== null && this.savedFittingType_ !== null, 'No saved zoom state exists');
        if (this.savedFittingType_ === FittingType.NONE) {
            this.setZoom(this.savedZoom_);
        }
        else {
            this.setFittingType(this.savedFittingType_);
        }
        this.savedZoom_ = null;
        this.savedFittingType_ = null;
    }
    /** @param e Event containing the old browser zoom. */
    updateZoomFromBrowserChange_(e) {
        const oldBrowserZoom = e.detail;
        this.mightZoom_(() => {
            // Record the scroll position (relative to the top-left of the window).
            const oldZoom = oldBrowserZoom * this.internalZoom_;
            const currentScrollPos = {
                x: this.position.x / oldZoom,
                y: this.position.y / oldZoom,
            };
            this.contentSizeChanged_();
            const newZoom = this.getZoom();
            // Scroll to the scaled scroll position.
            this.setPosition({
                x: currentScrollPos.x * newZoom,
                y: currentScrollPos.y * newZoom,
            });
            this.updateViewport_();
        });
    }
    /**
     * Gets the width of scrollbars in the viewport in pixels.
     */
    get scrollbarWidth() {
        return this.scrollContent_.scrollbarWidth;
    }
    /**
     * Gets the width of overlay scrollbars in the viewport in pixels, or 0 if not
     * using overlay scrollbars.
     */
    get overlayScrollbarWidth() {
        return this.scrollContent_.overlayScrollbarWidth;
    }
    /** @return The fitting type the viewport is currently in. */
    get fittingType() {
        return this.fittingType_;
    }
    /** @return The y coordinate of the bottom of the given page. */
    getPageBottom_(index) {
        // Called in getPageAtY_ in a loop that already checks |index| is in bounds.
        return this.pageDimensions_[index].y + this.pageDimensions_[index].height;
    }
    /**
     * Get the page at a given y position. If there are multiple pages
     * overlapping the given y-coordinate, returns one of the two of them (does
     * a binary search so returns whichever of the two happens to be hit first).
     * Note: May return the wrong result in two-up view. See getTwoUpPageAtY_()
     * for a version of this method that accounts for two-up view.
     * @param y The y-coordinate to get the page at.
     * @return The index of a page overlapping the given y-coordinate.
     */
    getPageAtY_(y) {
        assert(y >= 0);
        // Drop decimal part of |y| otherwise it can appear as larger than the
        // bottom of the last page in the document (even without the presence of a
        // horizontal scrollbar).
        y = Math.floor(y);
        let min = 0;
        let max = this.pageDimensions_.length - 1;
        if (max === min) {
            return min;
        }
        while (max >= min) {
            const page = min + Math.floor((max - min) / 2);
            // There might be a gap between the pages, in which case use the bottom
            // of the previous page as the top for finding the page.
            const top = page > 0 ? this.getPageBottom_(page - 1) : 0;
            const bottom = this.getPageBottom_(page);
            if (top <= y && y <= bottom) {
                return page;
            }
            // If the search reached the last page just return that page. |y| is
            // larger than the last page's |bottom|, which can happen either because a
            // horizontal scrollbar exists, or the document is zoomed out enough for
            // free space to exist at the bottom.
            if (page === this.pageDimensions_.length - 1) {
                return page;
            }
            if (top > y) {
                max = page - 1;
            }
            else {
                min = page + 1;
            }
        }
        // Should always return within the while loop above.
        assertNotReached('Could not find page for Y position: ' + y);
    }
    /**
     * Get the first page at a given y position in two up view. Always returns
     * the lower index page at the y position.
     * @param y The y-coordinate to get the page at.
     * @return The index of a page overlapping the given y-coordinate.
     */
    getTwoUpPageAtY_(y) {
        assert(y >= 0);
        // Drop decimal part of |y| otherwise it can appear as larger than the
        // bottom of the last page in the document (even without the presence of a
        // horizontal scrollbar).
        y = Math.floor(y);
        // Search through pairs of pages. min and max are in terms of page pairs.
        let min = 0;
        const numPairs = Math.ceil(this.pageDimensions_.length / 2);
        let max = numPairs - 1;
        if (max === min) {
            return min;
        }
        while (max >= min) {
            const pair = min + Math.floor((max - min) / 2);
            // page is always the even page, i.e. the first page in the pair.
            const page = 2 * pair;
            // There might be a gap between pairs of pages. Use the bottom of the
            // previous pair as the top for finding the correct pair.
            const top = page > 0 ?
                Math.max(this.getPageBottom_(page - 2), this.getPageBottom_(page - 1)) :
                0;
            // Use the bottom of the longer of the two pages in the pair as the
            // pair's bottom.
            let bottom = this.getPageBottom_(page);
            if (page < this.pageDimensions_.length - 1) {
                bottom = Math.max(bottom, this.getPageBottom_(page + 1));
            }
            if (top <= y && y <= bottom) {
                return page;
            }
            // If the search reached the last pair, return the first page in that pair
            // (may be the only page if document length is odd). |y| is larger than
            // the last pair's |bottom|, which can happen either because a
            // horizontal scrollbar exists, or the document is zoomed out enough for
            // free space to exist at the bottom.
            if (pair === numPairs - 1) {
                return page;
            }
            if (top > y) {
                max = pair - 1;
            }
            else {
                min = pair + 1;
            }
        }
        // Should always return within the while loop above.
        assertNotReached('Could not find page for Y position: ' + y);
    }
    /**
     * Return the last page visible in the viewport. Returns the last index of the
     * document if the viewport is below the document.
     * @return The highest index of the pages visible in the viewport.
     */
    getLastPageInViewport_(viewportRect) {
        const pageAtY = this.getPageAtY_(viewportRect.y + viewportRect.height);
        if (!this.twoUpViewEnabled() || pageAtY % 2 === 1 ||
            pageAtY + 1 >= this.pageDimensions_.length) {
            return pageAtY;
        }
        const nextPage = this.pageDimensions_[pageAtY + 1];
        return getIntersectionArea(viewportRect, nextPage) > 0 ? pageAtY + 1 :
            pageAtY;
    }
    /** @return Whether |point| (in screen coordinates) is inside a page. */
    isPointInsidePage(point) {
        const zoom = this.getZoom();
        const size = this.size;
        const position = this.position;
        // getPageAtY_() always returns a value in range of pageDimensions_.
        const page = this.getPageAtY_((position.y + point.y) / zoom);
        const pageWidth = this.pageDimensions_[page].width * zoom;
        const documentWidth = this.getDocumentDimensions().width * zoom;
        const outerWidth = Math.max(size.width, documentWidth);
        if (pageWidth >= outerWidth) {
            return true;
        }
        const x = point.x + position.x;
        const minX = (outerWidth - pageWidth) / 2;
        const maxX = outerWidth - minX;
        return x >= minX && x <= maxX;
    }
    /**
     * @return The page at |point|, or -1 if there is no page at |point|.
     */
    getPageAtPoint(point) {
        const zoom = this.getZoom();
        const position = this.position;
        const size = this.size;
        const documentWidth = this.getDocumentDimensions().width * zoom;
        const y = position.y + point.y;
        const pageDimensions = this.pageDimensions_;
        // Checks if y is actually on `page`, and not just closer to it than other
        // pages.
        function yOnPage(page) {
            const minY = pageDimensions[page].y * zoom;
            const maxY = pageDimensions[page].height * zoom + minY;
            return y >= minY && y <= maxY;
        }
        if (!this.twoUpViewEnabled()) {
            const page = this.getPageAtY_(y / zoom);
            if (!yOnPage(page)) {
                // The point is in the space between pages.
                return -1;
            }
            const outerWidth = Math.max(size.width, documentWidth);
            const pageWidth = pageDimensions[page].width * zoom;
            if (pageWidth >= outerWidth) {
                return page;
            }
            const minX = (outerWidth - pageWidth) / 2;
            const maxX = outerWidth - minX;
            const x = point.x + position.x;
            return x >= minX && x <= maxX ? page : -1;
        }
        // Handle two-up view.
        const pageAtY = this.getTwoUpPageAtY_(y / zoom);
        const pageX = pageDimensions[pageAtY].x * zoom;
        const x = point.x + position.x;
        const documentMargin = Math.max(0, (size.width - documentWidth) / 2);
        const minX = pageX + documentMargin;
        if (x < minX) {
            // The point is outside the left page boundary.
            return -1;
        }
        const boundaryX = minX + pageDimensions[pageAtY].width * zoom;
        if (x <= boundaryX) {
            // x is in range for the left page. Check that y is actually on the page.
            return yOnPage(pageAtY) ? pageAtY : -1;
        }
        if (pageAtY === pageDimensions.length - 1) {
            // x is out of bounds for the left page, and there is no right page.
            return -1;
        }
        // Check if x is in bounds for the right side of the right page, and y is on
        // the page.
        const maxX = pageDimensions[pageAtY + 1].width * zoom + boundaryX;
        return x <= maxX && yOnPage(pageAtY + 1) ? pageAtY + 1 : -1;
    }
    /**
     * @return Whether `location` is on a scrollbar.
     */
    isPointOnScrollbar(location) {
        const hasScrollbars = this.documentHasScrollbars();
        if (hasScrollbars.vertical &&
            ((isRTL() && location.x <= this.scrollbarWidth) ||
                (!isRTL() && location.x >= this.size.width - this.scrollbarWidth))) {
            return true;
        }
        return hasScrollbars.horizontal &&
            location.y >= (this.size.height - this.scrollbarWidth);
    }
    /**
     * @return The index of the page with the greatest proportion of its area in
     *     the current viewport.
     */
    getMostVisiblePage() {
        const viewportRect = this.getViewportRect_();
        // These methods always return a page that is >= 0 and
        // < pageDimensions_.length.
        const firstVisiblePage = this.getPageAtY_(viewportRect.y);
        const lastPossibleVisiblePage = this.getLastPageInViewport_(viewportRect);
        assert(firstVisiblePage <= lastPossibleVisiblePage);
        if (firstVisiblePage === lastPossibleVisiblePage) {
            return firstVisiblePage;
        }
        let mostVisiblePage = firstVisiblePage;
        let largestIntersection = 0;
        for (let i = firstVisiblePage; i < lastPossibleVisiblePage + 1; i++) {
            const pageArea = this.pageDimensions_[i].width * this.pageDimensions_[i].height;
            // TODO(thestig): check whether we can remove this check.
            if (pageArea <= 0) {
                continue;
            }
            const pageIntersectionArea = getIntersectionArea(this.pageDimensions_[i], viewportRect) /
                pageArea;
            if (pageIntersectionArea > largestIntersection) {
                mostVisiblePage = i;
                largestIntersection = pageIntersectionArea;
            }
        }
        return mostVisiblePage;
    }
    /**
     * Compute the zoom level for fit-to-page, fit-to-width or fit-to-height.
     * At least one of {fitWidth, fitHeight} must be true.
     * @param pageDimensions The dimensions of a given page in px.
     * @param fitWidth Whether the whole width of the page needs to be in the
     *     viewport.
     * @param fitHeight Whether the whole height of the page needs to be in the
     *     viewport.
     */
    computeFittingZoom_(pageDimensions, fitWidth, fitHeight) {
        assert(fitWidth || fitHeight, 'Invalid parameters. At least one of fitWidth and fitHeight must be ' +
            'true.');
        // First compute the zoom without scrollbars.
        let zoom = this.computeFittingZoomGivenDimensions_(fitWidth, fitHeight, this.window_.offsetWidth, this.window_.offsetHeight, pageDimensions.width, pageDimensions.height);
        // Check if there needs to be any scrollbars.
        const needsScrollbars = this.documentNeedsScrollbars(zoom);
        // If the document fits, just return the zoom.
        if (!needsScrollbars.horizontal && !needsScrollbars.vertical) {
            return zoom;
        }
        const zoomedDimensions = this.getZoomedDocumentDimensions_(zoom);
        assert(zoomedDimensions !== null);
        // Check if adding a scrollbar will result in needing the other scrollbar.
        const scrollbarWidth = this.scrollContent_.scrollbarWidth;
        if (needsScrollbars.horizontal &&
            zoomedDimensions.height > this.window_.offsetHeight - scrollbarWidth) {
            needsScrollbars.vertical = true;
        }
        if (needsScrollbars.vertical &&
            zoomedDimensions.width > this.window_.offsetWidth - scrollbarWidth) {
            needsScrollbars.horizontal = true;
        }
        // Compute available window space.
        const windowWithScrollbars = {
            width: this.window_.offsetWidth,
            height: this.window_.offsetHeight,
        };
        if (needsScrollbars.horizontal) {
            windowWithScrollbars.height -= scrollbarWidth;
        }
        if (needsScrollbars.vertical) {
            windowWithScrollbars.width -= scrollbarWidth;
        }
        // Recompute the zoom.
        zoom = this.computeFittingZoomGivenDimensions_(fitWidth, fitHeight, windowWithScrollbars.width, windowWithScrollbars.height, pageDimensions.width, pageDimensions.height);
        return this.zoomManager_.internalZoomComponent(zoom);
    }
    /**
     * Compute a zoom level given the dimensions to fit and the actual numbers
     * in those dimensions.
     * @param fitWidth Whether to constrain the page width to the window.
     * @param fitHeight Whether to constrain the page height to the window.
     * @param windowWidth Width of the window in px.
     * @param windowHeight Height of the window in px.
     * @param pageWidth Width of the page in px.
     * @param pageHeight Height of the page in px.
     */
    computeFittingZoomGivenDimensions_(fitWidth, fitHeight, windowWidth, windowHeight, pageWidth, pageHeight) {
        // Assumes at least one of {fitWidth, fitHeight} is set.
        let zoomWidth = null;
        let zoomHeight = null;
        if (fitWidth) {
            zoomWidth = windowWidth / pageWidth;
        }
        if (fitHeight) {
            zoomHeight = windowHeight / pageHeight;
        }
        let zoom;
        if (!fitWidth && fitHeight) {
            zoom = zoomHeight;
        }
        else if (fitWidth && !fitHeight) {
            zoom = zoomWidth;
        }
        else {
            // Assume fitWidth && fitHeight
            zoom = Math.min(zoomWidth, zoomHeight);
        }
        return Math.max(zoom, 0);
    }
    /**
     * Set the fitting type and fit within the viewport accordingly.
     * @param params Params needed to determine the page, position, and zoom for
     *     certain fitting types.
     */
    setFittingType(fittingType, params) {
        switch (fittingType) {
            case FittingType.FIT_TO_PAGE:
                this.fitToPage(params);
                return;
            case FittingType.FIT_TO_WIDTH:
                this.fitToWidth(params);
                return;
            case FittingType.FIT_TO_HEIGHT:
                this.fitToHeight(params);
                return;
            case FittingType.FIT_TO_BOUNDING_BOX:
                this.fitToBoundingBox(params);
                return;
            case FittingType.FIT_TO_BOUNDING_BOX_WIDTH:
                this.fitToBoundingBoxDimension(params);
                return;
            case FittingType.FIT_TO_BOUNDING_BOX_HEIGHT:
                this.fitToBoundingBoxDimension(params);
                return;
            case FittingType.NONE:
                // Does not take any params.
                this.fittingType_ = fittingType;
                return;
            default:
                assertNotReached('Invalid fittingType');
        }
    }
    /**
     * Zoom the viewport so that the page width consumes the entire viewport.
     * @param params Optional params that may contain the page to scroll to the
     *     top of. Otherwise, remain at the current scroll position. Params may
     *     also contain the y offset from the top of the page.
     */
    fitToWidth(params) {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.FIT_TO_WIDTH;
            if (!this.documentDimensions_) {
                return;
            }
            const scrollPosition = {
                x: this.position.x / this.getZoom(),
                y: this.position.y / this.getZoom(),
            };
            if (params?.pageIndex !== undefined) {
                assert(params.pageIndex < this.pageDimensions_.length);
                scrollPosition.y = this.pageDimensions_[params.pageIndex].y;
            }
            if (params?.viewPosition !== undefined) {
                if (params.pageIndex === undefined) {
                    // getMostVisiblePage() always returns an index in range of
                    // pageDimensions_.
                    scrollPosition.y = this.pageDimensions_[this.getMostVisiblePage()].y;
                }
                scrollPosition.y += params.viewPosition;
            }
            // When computing fit-to-width, the maximum width of a page in the
            // document is used, which is equal to the size of the document width.
            this.setZoomInternal_(this.computeFittingZoom_(this.documentDimensions_, true, false), scrollPosition);
            this.updateViewport_();
        });
    }
    /**
     * Zoom the viewport so that the page height consumes the entire viewport.
     * @param params Optional params that may contain the page to scroll to the
     *     top of. Otherwise, remain at the current scroll position. Params may
     *     also contain the x offset from the left of the page.
     */
    fitToHeight(params) {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.FIT_TO_HEIGHT;
            if (!this.documentDimensions_) {
                return;
            }
            const scrollPosition = {
                x: this.position.x / this.getZoom(),
                y: this.position.y / this.getZoom(),
            };
            const page = params?.pageIndex !== undefined ? params.pageIndex :
                this.getMostVisiblePage();
            assert(this.pageDimensions_.length > page);
            if (params?.pageIndex !== undefined ||
                document.fullscreenElement !== null) {
                scrollPosition.y = this.pageDimensions_[page].y;
            }
            if (params?.viewPosition !== undefined) {
                scrollPosition.x = this.pageDimensions_[page].x + params.viewPosition;
            }
            // When computing fit-to-height, the maximum height of the page is used.
            const dimensions = {
                width: 0,
                height: this.pageDimensions_[page].height,
            };
            this.setZoomInternal_(this.computeFittingZoom_(dimensions, false, true), scrollPosition);
            this.updateViewport_();
        });
    }
    /**
     * Zoom the viewport so that a page consumes as much as of the viewport as
     * possible.
     * @param params Optional params that may contain the page to scroll to the
     *     top of. Also may contain `scrollToTop`, whether to scroll to the top of
     *     the page or not. Defaults to true. Ignored if a page value is provided.
     */
    fitToPage(params) {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.FIT_TO_PAGE;
            if (!this.documentDimensions_) {
                return;
            }
            const scrollPosition = {
                x: this.position.x / this.getZoom(),
                y: this.position.y / this.getZoom(),
            };
            const pageIndex = params?.pageIndex !== undefined ?
                params.pageIndex :
                this.getMostVisiblePage();
            assert(pageIndex < this.pageDimensions_.length);
            if (params?.pageIndex !== undefined || params?.scrollToTop !== false) {
                // Scroll to top of page.
                scrollPosition.x = 0;
                scrollPosition.y = this.pageDimensions_[pageIndex].y;
            }
            // Fit to the page's height and the widest page's width.
            const dimensions = {
                width: this.documentDimensions_.width,
                height: this.pageDimensions_[pageIndex].height,
            };
            this.setZoomInternal_(this.computeFittingZoom_(dimensions, true, true), scrollPosition);
            this.updateViewport_();
        });
    }
    /** Zoom the viewport to the default zoom. */
    fitToNone() {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.NONE;
            if (!this.documentDimensions_) {
                return;
            }
            this.setZoomInternal_(Math.min(this.defaultZoom_, this.computeFittingZoom_(this.documentDimensions_, true, false)));
            this.updateViewport_();
        });
    }
    /**
     * Zoom the viewport so that the bounding box of a page consumes the entire
     * viewport.
     * @param params Required params containing the bounding box to fit to and the
     *     page to scroll to.
     */
    fitToBoundingBox(params) {
        const boundingBox = params.boundingBox;
        // Ignore invalid bounding boxes, which can occur if the plugin fails to
        // give a valid box.
        if (!boundingBox.width || !boundingBox.height) {
            return;
        }
        this.fittingType_ = FittingType.FIT_TO_BOUNDING_BOX;
        // Use the smallest zoom that fits the full bounding box on screen.
        const boundingBoxSize = {
            width: boundingBox.width,
            height: boundingBox.height,
        };
        const zoomFitToWidth = this.computeFittingZoom_(boundingBoxSize, true, false);
        const zoomFitToHeight = this.computeFittingZoom_(boundingBoxSize, false, true);
        const newZoom = this.clampZoom_(Math.min(zoomFitToWidth, zoomFitToHeight));
        // Calculate the position.
        const pageInsetDimensions = this.getPageInsetDimensions(params.pageIndex);
        const viewportSize = this.size;
        const screenPosition = {
            x: pageInsetDimensions.x + boundingBox.x,
            y: pageInsetDimensions.y + boundingBox.y,
        };
        // Center the bounding box in the dimension that isn't fully zoomed in.
        if (newZoom !== zoomFitToWidth) {
            screenPosition.x -=
                ((viewportSize.width / newZoom) - boundingBox.width) / 2;
        }
        if (newZoom !== zoomFitToHeight) {
            screenPosition.y -=
                ((viewportSize.height / newZoom) - boundingBox.height) / 2;
        }
        this.mightZoom_(() => {
            this.setZoomInternal_(newZoom, screenPosition);
        });
    }
    /**
     * If params.viewPosition is defined, use it as the x offset of the given
     * page.
     */
    getBoundingBoxHeightPosition_(params, zoomFitToDimension, newZoom) {
        const boundingBox = params.boundingBox;
        const pageInsetDimensions = this.getPageInsetDimensions(params.pageIndex);
        const screenPosition = {
            x: pageInsetDimensions.x,
            y: pageInsetDimensions.y + boundingBox.y,
        };
        // Center the bounding box in the y dimension if not fully zoomed in.
        if (newZoom !== zoomFitToDimension) {
            screenPosition.y -=
                ((this.size.height / newZoom) - boundingBox.height) / 2;
        }
        if (params.viewPosition !== undefined) {
            screenPosition.x += params.viewPosition;
        }
        return screenPosition;
    }
    /**
     * If params.viewPosition is defined, use it as the y offset of the given
     * page.
     */
    getBoundingBoxWidthPosition_(params, zoomFitToDimension, newZoom) {
        const boundingBox = params.boundingBox;
        const pageInsetDimensions = this.getPageInsetDimensions(params.pageIndex);
        const screenPosition = {
            x: pageInsetDimensions.x + boundingBox.x,
            y: pageInsetDimensions.y,
        };
        // Center the bounding box in the x dimension if not fully zoomed in.
        if (newZoom !== zoomFitToDimension) {
            screenPosition.x -= ((this.size.width / newZoom) - boundingBox.width) / 2;
        }
        if (params.viewPosition !== undefined) {
            screenPosition.y += params.viewPosition;
        }
        return screenPosition;
    }
    /**
     * Zoom the viewport so that the given dimension of the bounding box of a page
     * consumes the entire viewport.
     * @param params Required params containing the bounding box to fit to, the
     *     page to scroll to, and the dimension to fit to. Optionally contains the
     *     offset of the given page.
     */
    fitToBoundingBoxDimension(params) {
        const boundingBox = params.boundingBox;
        const fitToWidth = params.fitToWidth;
        // Ignore invalid bounding boxes, which can occur if the plugin fails to
        // give a valid box.
        if (!boundingBox.width || !boundingBox.height) {
            return;
        }
        this.fittingType_ = fitToWidth ? FittingType.FIT_TO_BOUNDING_BOX_WIDTH :
            FittingType.FIT_TO_BOUNDING_BOX_HEIGHT;
        const zoomFitToDimension = this.computeFittingZoom_(boundingBox, fitToWidth, !fitToWidth);
        const newZoom = this.clampZoom_(zoomFitToDimension);
        const screenPosition = fitToWidth ?
            this.getBoundingBoxWidthPosition_(params, zoomFitToDimension, newZoom) :
            this.getBoundingBoxHeightPosition_(params, zoomFitToDimension, newZoom);
        this.mightZoom_(() => {
            this.setZoomInternal_(newZoom, screenPosition);
        });
    }
    /** Zoom out to the next predefined zoom level. */
    zoomOut() {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.NONE;
            assert(this.presetZoomFactors.length > 0);
            let nextZoom = this.presetZoomFactors_[0];
            for (let i = 0; i < this.presetZoomFactors_.length; i++) {
                if (this.presetZoomFactors_[i] < this.internalZoom_) {
                    nextZoom = this.presetZoomFactors_[i];
                }
            }
            this.setZoomInternal_(nextZoom);
            this.updateViewport_();
            this.announceZoom_();
        });
    }
    /** Zoom in to the next predefined zoom level. */
    zoomIn() {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.NONE;
            assert(this.presetZoomFactors_.length > 0);
            const maxZoomIndex = this.presetZoomFactors_.length - 1;
            let nextZoom = this.presetZoomFactors_[maxZoomIndex];
            for (let i = maxZoomIndex; i >= 0; i--) {
                if (this.presetZoomFactors_[i] > this.internalZoom_) {
                    nextZoom = this.presetZoomFactors_[i];
                }
            }
            this.setZoomInternal_(nextZoom);
            this.updateViewport_();
            this.announceZoom_();
        });
    }
    /** Announce zoom level for screen readers. */
    announceZoom_() {
        const announcer = getInstance();
        const ariaLabel = loadTimeData.getString('zoomTextInputAriaLabel');
        const zoom = Math.round(100 * this.getZoom());
        announcer.announce(`${ariaLabel}: ${zoom}%`);
    }
    pageUpDownSpaceHandler_(e, formFieldFocused) {
        // Avoid scrolling if the space key is down while a form field is focused
        // on since the user might be typing space into the field.
        if (formFieldFocused && e.key === ' ') {
            this.window_.dispatchEvent(new CustomEvent('scroll-avoided-for-testing'));
            return;
        }
        const isDown = e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey);
        // Go to the previous/next page if we are fit-to-page or fit-to-height.
        if (this.isPagedMode_()) {
            isDown ? this.goToNextPage() : this.goToPreviousPage();
            // Since we do the movement of the page.
            e.preventDefault();
        }
        else if (isCrossFrameKeyEvent(e)) {
            // Web scrolls by a fraction of the viewport height. Use the same
            // fractional value as `cc::kMinFractionToStepWhenPaging` in
            // cc/input/scroll_utils.h. The values must be kept in sync.
            const MIN_FRACTION_TO_STEP_WHEN_PAGING = 0.875;
            const scrollOffset = (isDown ? 1 : -1) * this.size.height *
                MIN_FRACTION_TO_STEP_WHEN_PAGING;
            // TODO(crbug.com/40218278): Re-enable smooth scrolling for all codepaths.
            this.setPosition({
                x: this.position.x,
                y: this.position.y + scrollOffset,
            });
        }
        this.window_.dispatchEvent(new CustomEvent('scroll-proceeded-for-testing'));
    }
    arrowLeftRightHandler_(e, formFieldFocused) {
        if (formFieldFocused || hasKeyModifiers(e)) {
            return;
        }
        // Go to the previous/next page if there are no horizontal scrollbars.
        const isRight = e.key === 'ArrowRight';
        if (!this.documentHasScrollbars().horizontal) {
            isRight ? this.goToNextPage() : this.goToPreviousPage();
            // Since we do the movement of the page.
            e.preventDefault();
        }
        else if (isCrossFrameKeyEvent(e)) {
            const scrollOffset = (isRight ? 1 : -1) * SCROLL_INCREMENT;
            this.setPosition({
                x: this.position.x + scrollOffset,
                y: this.position.y,
            }, this.smoothScrolling_);
        }
    }
    arrowUpDownHandler_(e, formFieldFocused) {
        if (formFieldFocused || hasKeyModifiers(e)) {
            return;
        }
        // Go to the previous/next page if Presentation mode is on.
        const isDown = e.key === 'ArrowDown';
        if (document.fullscreenElement !== null) {
            isDown ? this.goToNextPage() : this.goToPreviousPage();
            e.preventDefault();
        }
        else if (isCrossFrameKeyEvent(e)) {
            const scrollOffset = (isDown ? 1 : -1) * SCROLL_INCREMENT;
            this.setPosition({
                x: this.position.x,
                y: this.position.y + scrollOffset,
            });
        }
    }
    /**
     * Handle certain directional key events.
     * @param formFieldFocused Whether a form field is currently focused.
     * @param caretBrowsingEnabled Whether caret browsing mode is currently
     *     enabled.
     * @return Whether the event was handled.
     */
    handleDirectionalKeyEvent(e, formFieldFocused, caretBrowsingEnabled) {
        switch (e.key) {
            case ' ':
                this.pageUpDownSpaceHandler_(e, formFieldFocused);
                return true;
            case 'PageUp':
            case 'PageDown':
                if (hasKeyModifiers(e)) {
                    return false;
                }
                this.pageUpDownSpaceHandler_(e, formFieldFocused);
                return true;
            case 'ArrowLeft':
            case 'ArrowRight':
                if (!caretBrowsingEnabled) {
                    this.arrowLeftRightHandler_(e, formFieldFocused);
                }
                return true;
            case 'ArrowDown':
            case 'ArrowUp':
                if (!caretBrowsingEnabled) {
                    this.arrowUpDownHandler_(e, formFieldFocused);
                }
                return true;
            default:
                return false;
        }
    }
    /**
     * Go to the next page. If the document is in two-up view, go to the left page
     * of the next row. Public for tests.
     */
    goToNextPage() {
        const currentPage = this.getMostVisiblePage();
        const nextPageOffset = (this.twoUpViewEnabled() && currentPage % 2 === 0) ? 2 : 1;
        this.goToPage(currentPage + nextPageOffset);
    }
    /**
     * Go to the previous page. If the document is in two-up view, go to the left
     * page of the previous row. Public for tests.
     */
    goToPreviousPage() {
        const currentPage = this.getMostVisiblePage();
        let previousPageOffset = -1;
        if (this.twoUpViewEnabled()) {
            previousPageOffset = (currentPage % 2 === 0) ? -2 : -3;
        }
        this.goToPage(currentPage + previousPageOffset);
    }
    /**
     * Go to the given page index.
     * @param page the index of the page to go to. zero-based.
     */
    goToPage(page) {
        this.goToPageAndXy(page, 0, 0);
    }
    /**
     * Go to the given y position in the given page index.
     * @param page the index of the page to go to. zero-based.
     */
    goToPageAndXy(page, x, y) {
        this.mightZoom_(() => {
            if (this.pageDimensions_.length === 0) {
                return;
            }
            if (page < 0) {
                page = 0;
            }
            if (page >= this.pageDimensions_.length) {
                page = this.pageDimensions_.length - 1;
            }
            const dimensions = this.pageDimensions_[page];
            // If `x` or `y` is not a valid number or specified, then that
            // coordinate of the current viewport position should be retained.
            const currentCoords = this.retrieveCurrentScreenCoordinates_();
            if (x === undefined || Number.isNaN(x)) {
                x = currentCoords.x;
            }
            if (y === undefined || Number.isNaN(y)) {
                y = currentCoords.y;
            }
            this.setPosition({
                x: (dimensions.x + x) * this.getZoom(),
                y: (dimensions.y + y) * this.getZoom(),
            });
            this.updateViewport_();
        });
    }
    setDocumentDimensions(documentDimensions) {
        this.mightZoom_(() => {
            const initialDimensions = !this.documentDimensions_;
            const initialRotations = this.getClockwiseRotations();
            this.documentDimensions_ = documentDimensions;
            // Override layout direction based on isRTL().
            if (this.documentDimensions_.layoutOptions) {
                if (isRTL()) {
                    // `base::i18n::TextDirection::RIGHT_TO_LEFT`
                    this.documentDimensions_.layoutOptions.direction = 1;
                }
                else {
                    // `base::i18n::TextDirection::LEFT_TO_RIGHT`
                    this.documentDimensions_.layoutOptions.direction = 2;
                }
            }
            this.pageDimensions_ = this.documentDimensions_.pageDimensions;
            if (initialDimensions) {
                this.setZoomInternal_(Math.min(this.defaultZoom_, this.computeFittingZoom_(this.documentDimensions_, true, false)));
                this.setPosition({ x: 0, y: 0 });
            }
            this.contentSizeChanged_();
            this.resize_();
            if (initialRotations !== this.getClockwiseRotations()) {
                this.announceRotation_();
            }
        });
    }
    /** Announce state of rotation, clockwise, for screen readers. */
    announceRotation_() {
        const announcer = getInstance();
        const clockwiseRotationsDegrees = this.getClockwiseRotations() * 90;
        const rotationStateLabel = loadTimeData.getString(`rotationStateLabel${clockwiseRotationsDegrees}`);
        announcer.announce(rotationStateLabel);
    }
    /** @return The bounds for page `page` minus the shadows. */
    getPageInsetDimensions(page) {
        const pageDimensions = this.pageDimensions_[page];
        assert(pageDimensions);
        const shadow = PAGE_SHADOW;
        return {
            x: pageDimensions.x + shadow.left,
            y: pageDimensions.y + shadow.top,
            width: pageDimensions.width - shadow.left - shadow.right,
            height: pageDimensions.height - shadow.top - shadow.bottom,
        };
    }
    /**
     * Get the coordinates of the page contents (excluding the page shadow)
     * relative to the screen.
     * @param page The index of the page to get the rect for.
     * @return A rect representing the page in screen coordinates.
     */
    getPageScreenRect(page) {
        if (!this.documentDimensions_) {
            return { x: 0, y: 0, width: 0, height: 0 };
        }
        if (page >= this.pageDimensions_.length) {
            page = this.pageDimensions_.length - 1;
        }
        const pageDimensions = this.pageDimensions_[page];
        // Compute the page dimensions minus the shadows.
        const insetDimensions = this.getPageInsetDimensions(page);
        // Compute the x-coordinate of the page within the document.
        // TODO(raymes): This should really be set when the PDF plugin passes the
        // page coordinates, but it isn't yet except for in two-up view.
        const x = this.twoUpViewEnabled() ?
            pageDimensions.x + PAGE_SHADOW.left :
            (this.documentDimensions_.width - pageDimensions.width) / 2 +
                PAGE_SHADOW.left;
        // Compute the space on the left of the document if the document fits
        // completely in the screen.
        const zoom = this.getZoom();
        const scrollbarWidth = this.documentHasScrollbars().vertical ?
            this.scrollContent_.scrollbarWidth :
            0;
        let spaceOnLeft = (this.size.width - scrollbarWidth -
            this.documentDimensions_.width * zoom) /
            2;
        spaceOnLeft = Math.max(spaceOnLeft, 0);
        return {
            x: x * zoom + spaceOnLeft - this.scrollContent_.scrollLeft,
            y: insetDimensions.y * zoom - this.scrollContent_.scrollTop,
            width: insetDimensions.width * zoom,
            height: insetDimensions.height * zoom,
        };
    }
    /**
     * Check if the current fitting type is a paged mode.
     * In a paged mode, page up and page down scroll to the top of the
     * previous/next page and part of the page is under the toolbar.
     * @return Whether the current fitting type is a paged mode.
     */
    isPagedMode_() {
        return (this.fittingType_ === FittingType.FIT_TO_PAGE ||
            this.fittingType_ === FittingType.FIT_TO_HEIGHT);
    }
    /**
     * Retrieves the in-screen coordinates of the current viewport position.
     */
    retrieveCurrentScreenCoordinates_() {
        // getMostVisiblePage() always returns an index in range of pageDimensions_.
        const currentPage = this.getMostVisiblePage();
        const dimension = this.pageDimensions_[currentPage];
        const x = this.position.x / this.getZoom() - dimension.x;
        const y = this.position.y / this.getZoom() - dimension.y;
        return { x: x, y: y };
    }
    /**
     * Handles a navigation request to a destination from the current controller.
     * @param x The in-screen x coordinate for the destination.
     *     If `x` is undefined, retain current x coordinate value.
     * @param y The in-screen y coordinate for the destination.
     *     If `y` is undefined, retain current y coordinate value.
     */
    handleNavigateToDestination(page, x, y, zoom) {
        // TODO(crbug.com/40262954): Handle view parameters and fitting types.
        if (zoom) {
            this.setZoom(zoom);
        }
        this.goToPageAndXy(page, x, y);
    }
    setSmoothScrolling(isSmooth) {
        this.smoothScrolling_ = isSmooth;
    }
    /**
     * @param scrollData The position to scroll the viewport to, and the smooth
     *     scrolling option.
     */
    scrollTo(scrollData) {
        let changed = false;
        const newPosition = this.position;
        if (scrollData.x !== undefined && scrollData.x !== newPosition.x) {
            newPosition.x = scrollData.x;
            changed = true;
        }
        if (scrollData.y !== undefined && scrollData.y !== newPosition.y) {
            newPosition.y = scrollData.y;
            changed = true;
        }
        if (changed) {
            // TODO(crbug.com/40218278): Re-enable smooth scrolling for all codepaths.
            //
            // {@link smoothScrolling_} is bypassed entirely unless certain caller
            // explicitly forces smooth scrolling
            // (e.g., `PdfViewWebPlugin::ScrollTextFragmentIntoView()`).
            // Also see crbug.com/40218278 and crbug.com/40218245 for more context.
            this.setPosition(newPosition, scrollData.forceSmoothScroll ?? false);
        }
    }
    /** @param delta The delta by which to scroll the viewport. */
    scrollBy(delta) {
        const newPosition = this.position;
        newPosition.x += delta.x;
        newPosition.y += delta.y;
        this.scrollTo({ ...newPosition, forceSmoothScroll: false });
    }
    /** Removes all events being tracked from the tracker. */
    resetTracker() {
        if (this.tracker_) {
            this.tracker_.removeAll();
        }
    }
    /**
     * Dispatches a gesture external to this viewport.
     */
    dispatchGesture(gesture) {
        this.gestureDetector_.getEventTarget().dispatchEvent(new CustomEvent(gesture.type, { detail: gesture.detail }));
    }
    /**
     * Dispatches a swipe event of |direction| external to this viewport.
     */
    dispatchSwipe(direction) {
        this.swipeDetector_.getEventTarget().dispatchEvent(new CustomEvent('swipe', { detail: direction }));
    }
    /**
     * A callback that's called when an update to a pinch zoom is detected.
     */
    onPinchUpdate_(e) {
        // Throttle number of pinch events to one per frame.
        if (this.sentPinchEvent_) {
            return;
        }
        this.sentPinchEvent_ = true;
        window.requestAnimationFrame(() => {
            this.sentPinchEvent_ = false;
            this.mightZoom_(() => {
                const { direction, center, startScaleRatio } = e.detail;
                this.pinchPhase_ = direction === 'out' ? PinchPhase.UPDATE_ZOOM_OUT :
                    PinchPhase.UPDATE_ZOOM_IN;
                const scaleDelta = startScaleRatio / this.prevScale_;
                if (this.firstPinchCenterInFrame_ != null) {
                    this.pinchPanVector_ =
                        vectorDelta(center, this.firstPinchCenterInFrame_);
                }
                const needsScrollbars = this.documentNeedsScrollbars(this.zoomManager_.applyBrowserZoom(this.clampZoom_(this.internalZoom_ * scaleDelta)));
                this.pinchCenter_ = center;
                // If there's no horizontal scrolling, keep the content centered so
                // the user can't zoom in on the non-content area.
                // TODO(mcnee) Investigate other ways of scaling when we don't have
                // horizontal scrolling. We want to keep the document centered,
                // but this causes a potentially awkward transition when we start
                // using the gesture center.
                if (!needsScrollbars.horizontal) {
                    this.pinchCenter_ = {
                        x: this.window_.offsetWidth / 2,
                        y: this.window_.offsetHeight / 2,
                    };
                }
                else if (this.keepContentCentered_) {
                    this.oldCenterInContent_ = this.pluginToContent_(this.pinchCenter_);
                    this.keepContentCentered_ = false;
                }
                this.fittingType_ = FittingType.NONE;
                this.setPinchZoomInternal_(scaleDelta, center);
                this.updateViewport_();
                this.prevScale_ = startScaleRatio;
            });
        });
    }
    /**
     * A callback that's called when the end of a pinch zoom is detected.
     */
    onPinchEnd_(e) {
        // Using rAF for pinch end prevents pinch updates scheduled by rAF getting
        // sent after the pinch end.
        window.requestAnimationFrame(() => {
            this.mightZoom_(() => {
                const { center, startScaleRatio } = e.detail;
                this.pinchPhase_ = PinchPhase.END;
                const scaleDelta = startScaleRatio / this.prevScale_;
                this.pinchCenter_ = center;
                this.setPinchZoomInternal_(scaleDelta, this.pinchCenter_);
                this.updateViewport_();
            });
            this.pinchPhase_ = PinchPhase.NONE;
            this.pinchPanVector_ = null;
            this.pinchCenter_ = null;
            this.firstPinchCenterInFrame_ = null;
        });
    }
    /**
     * A callback that's called when the start of a pinch zoom is detected.
     */
    onPinchStart_(e) {
        // Disable pinch gestures in Presentation mode.
        if (document.fullscreenElement !== null) {
            return;
        }
        // We also use rAF for pinch start, so that if there is a pinch end event
        // scheduled by rAF, this pinch start will be sent after.
        window.requestAnimationFrame(() => {
            this.pinchPhase_ = PinchPhase.START;
            this.prevScale_ = 1;
            this.oldCenterInContent_ = this.pluginToContent_(e.detail.center);
            const needsScrollbars = this.documentNeedsScrollbars(this.getZoom());
            this.keepContentCentered_ = !needsScrollbars.horizontal;
            // We keep track of beginning of the pinch.
            // By doing so we will be able to compute the pan distance.
            this.firstPinchCenterInFrame_ = e.detail.center;
        });
    }
    /**
     * A callback that's called when a Presentation mode wheel event is detected.
     */
    onWheel_(e) {
        if (e.detail.direction === 'down') {
            this.goToNextPage();
        }
        else {
            this.goToPreviousPage();
        }
    }
    getGestureDetectorForTesting() {
        return this.gestureDetector_;
    }
    /**
     * A callback that's called when a left/right swipe is detected in
     * Presentation mode.
     */
    onSwipe_(e) {
        // Left and right swipes are enabled only in Presentation mode.
        if (document.fullscreenElement === null && !this.fullscreenForTesting_) {
            return;
        }
        if ((e.detail === SwipeDirection.RIGHT_TO_LEFT && !isRTL()) ||
            (e.detail === SwipeDirection.LEFT_TO_RIGHT && isRTL())) {
            this.goToNextPage();
        }
        else {
            this.goToPreviousPage();
        }
    }
    enableFullscreenForTesting() {
        this.fullscreenForTesting_ = true;
    }
}
/**
 * Enumeration of pinch states.
 */
// LINT.IfChange(PinchPhase)
var PinchPhase;
(function (PinchPhase) {
    PinchPhase[PinchPhase["NONE"] = 0] = "NONE";
    PinchPhase[PinchPhase["START"] = 1] = "START";
    PinchPhase[PinchPhase["UPDATE_ZOOM_OUT"] = 2] = "UPDATE_ZOOM_OUT";
    PinchPhase[PinchPhase["UPDATE_ZOOM_IN"] = 3] = "UPDATE_ZOOM_IN";
    PinchPhase[PinchPhase["END"] = 4] = "END";
})(PinchPhase || (PinchPhase = {}));
// LINT.ThenChange(//pdf/pdf_view_web_plugin.cc:PinchPhase)
/**
 * The increment to scroll a page by in pixels when up/down/left/right arrow
 * keys are pressed. Usually we just let the browser handle scrolling on the
 * window when these keys are pressed but in certain cases we need to simulate
 * these events.
 */
const SCROLL_INCREMENT = 40;
/**
 * Returns whether a keyboard event came from another frame.
 */
function isCrossFrameKeyEvent(keyEvent) {
    return !!keyEvent.fromPlugin || !!keyEvent.fromScriptingAPI;
}
/**
 * The width of the page shadow around pages in pixels.
 */
const PAGE_SHADOW = {
    top: 3,
    bottom: 7,
    left: 5,
    right: 5,
};
/**
 * A wrapper around the viewport's scrollable content. This abstraction isolates
 * details concerning internal vs. external scrolling behavior.
 */
class ScrollContent {
    container_;
    sizer_;
    target_ = null;
    content_;
    scrollbarWidth_;
    plugin_ = null;
    width_ = 0;
    height_ = 0;
    scrollLeft_ = 0;
    scrollTop_ = 0;
    unackedScrollsToRemote_ = 0;
    /**
     * @param container The element which contains the scrollable content.
     * @param sizer The element which represents the size of the scrollable
     *     content.
     * @param content The element which is the parent of the scrollable content.
     * @param scrollbarWidth The width of any scrollbars.
     */
    constructor(container, sizer, content, scrollbarWidth) {
        this.container_ = container;
        this.sizer_ = sizer;
        this.content_ = content;
        this.scrollbarWidth_ = scrollbarWidth;
    }
    /**
     * Sets the target for dispatching "scroll" events.
     */
    setEventTarget(target) {
        this.target_ = target;
    }
    /**
     * Dispatches a "scroll" event.
     */
    dispatchScroll_() {
        this.target_ && this.target_.dispatchEvent(new Event('scroll'));
    }
    /**
     * Sets the contents, switching to scrolling locally.
     * @param content The new contents, or null to clear.
     */
    setContent(content) {
        if (content === null) {
            this.sizer_.style.display = 'none';
            return;
        }
        this.attachContent_(content);
        // Switch to local content.
        this.sizer_.style.display = 'block';
        if (!this.plugin_) {
            return;
        }
        this.plugin_ = null;
        // Synchronize remote state to local.
        this.updateSize_();
        this.scrollTo(this.scrollLeft_, this.scrollTop_);
    }
    /**
     * Sets the contents, switching to scrolling remotely.
     * @param content The new contents.
     */
    setRemoteContent(content) {
        this.attachContent_(content);
        // Switch to remote content.
        const previousScrollLeft = this.scrollLeft;
        const previousScrollTop = this.scrollTop;
        this.sizer_.style.display = 'none';
        assert(!this.plugin_);
        this.plugin_ = content;
        // Synchronize local state to remote.
        this.updateSize_();
        this.scrollTo(previousScrollLeft, previousScrollTop);
    }
    /**
     * Attaches the contents to the DOM.
     * @param content The new contents.
     */
    attachContent_(content) {
        // We don't actually replace the content in the DOM, as the controller
        // implementations take care of "removal" in controller-specific ways:
        //
        // 1. Plugin content gets added once, then hidden and revealed using CSS.
        // 2. Ink content gets removed directly from the DOM on unload.
        if (!content.parentNode) {
            this.content_.appendChild(content);
        }
        assert(content.parentNode === this.content_);
    }
    /**
     * Synchronizes scroll position from remote content.
     */
    syncScrollFromRemote(position) {
        if (this.unackedScrollsToRemote_ > 0) {
            // Don't overwrite scroll position while scrolls-to-remote are pending.
            // TODO(crbug.com/40789211): Don't need this if we make this synchronous
            // again, by moving more logic to the plugin frame.
            return;
        }
        if (this.scrollLeft_ === position.x && this.scrollTop_ === position.y) {
            // Don't trigger scroll event if scroll position hasn't changed.
            return;
        }
        this.scrollLeft_ = position.x;
        this.scrollTop_ = position.y;
        this.dispatchScroll_();
    }
    /**
     * Receives acknowledgment of scroll position synchronized to remote content.
     */
    ackScrollToRemote(position) {
        assert(this.unackedScrollsToRemote_ > 0);
        if (--this.unackedScrollsToRemote_ === 0) {
            // Accept remote adjustment when there are no pending scrolls-to-remote.
            this.scrollLeft_ = position.x;
            this.scrollTop_ = position.y;
        }
        this.dispatchScroll_();
    }
    get scrollbarWidth() {
        return this.scrollbarWidth_;
    }
    get overlayScrollbarWidth() {
        return this.scrollbarWidth_;
    }
    /** Gets the content size. */
    get size() {
        return {
            width: this.width_,
            height: this.height_,
        };
    }
    /** Sets the content size. */
    setSize(width, height) {
        this.width_ = width;
        this.height_ = height;
        this.updateSize_();
    }
    updateSize_() {
        if (this.plugin_) {
            this.plugin_.postMessage({
                type: 'updateSize',
                width: this.width_,
                height: this.height_,
            });
        }
        else {
            this.sizer_.style.width = `${this.width_}px`;
            this.sizer_.style.height = `${this.height_}px`;
        }
    }
    /**
     * Gets the scroll offset from the left edge.
     */
    get scrollLeft() {
        return this.plugin_ ? this.scrollLeft_ : this.container_.scrollLeft;
    }
    /**
     * Gets the scroll offset from the top edge.
     */
    get scrollTop() {
        return this.plugin_ ? this.scrollTop_ : this.container_.scrollTop;
    }
    /**
     * Scrolls to the given coordinates.
     * @param isSmooth Whether to scroll smoothly.
     */
    scrollTo(x, y, isSmooth = false) {
        if (this.plugin_) {
            // TODO(crbug.com/40809449): Can get NaN if zoom calculations divide by 0.
            x = Number.isNaN(x) ? 0 : x;
            y = Number.isNaN(y) ? 0 : y;
            // Clamp coordinates to scroll limits. Note that the order of min() and
            // max() operations is significant, as each "maximum" can be negative.
            const maxX = this.maxScroll_(this.width_, this.container_.clientWidth, this.height_ > this.container_.clientHeight);
            const maxY = this.maxScroll_(this.height_, this.container_.clientHeight, this.width_ > this.container_.clientWidth);
            if (this.container_.dir === 'rtl') {
                // Right-to-left. If `maxX` > 0, clamp to [-maxX, 0]. Else set to 0.
                x = Math.min(Math.max(-maxX, x), 0);
            }
            else {
                // Left-to-right. If `maxX` > 0, clamp to [0, maxX]. Else set to 0.
                x = Math.max(0, Math.min(x, maxX));
            }
            // If `maxY` > 0, clamp to [0, maxY]. Else set to 0.
            y = Math.max(0, Math.min(y, maxY));
            // To match the DOM's scrollTo() behavior, update the scroll position
            // immediately, but fire the scroll event later (when the remote side
            // triggers `ackScrollToRemote()`).
            this.scrollLeft_ = x;
            this.scrollTop_ = y;
            ++this.unackedScrollsToRemote_;
            this.plugin_.postMessage({
                type: 'syncScrollToRemote',
                x: this.scrollLeft_,
                y: this.scrollTop_,
                isSmooth: isSmooth,
            });
        }
        else {
            this.container_.scrollTo(x, y);
        }
    }
    /**
     * Computes maximum scroll position.
     * @param maxContent The maximum content dimension.
     * @param maxContainer The maximum container dimension.
     * @param hasScrollbar Whether to compensate for a scrollbar.
     */
    maxScroll_(maxContent, maxContainer, hasScrollbar) {
        if (hasScrollbar) {
            maxContainer -= this.scrollbarWidth_;
        }
        // This may return a negative value, which is fine because scroll positions
        // are clamped to a minimum of 0.
        return maxContent - maxContainer;
    }
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Creates a cryptographically secure pseudorandom 128-bit token.
 * @return The generated token as a hex string.
 */
function createToken() {
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    return Array.from(randomBytes, b => b.toString(16).padStart(2, '0')).join('');
}
/** Event types dispatched by the plugin controller. */
var PluginControllerEventType;
(function (PluginControllerEventType) {
    // 
    PluginControllerEventType["FINISH_INK_STROKE"] = "PluginControllerEventType.FINISH_INK_STROKE";
    PluginControllerEventType["START_INK_STROKE"] = "PluginControllerEventType.START_INK_STROKE";
    PluginControllerEventType["UPDATE_THUMBNAIL"] = "PluginControllerEventType.UPDATE_THUMBNAIL";
    // 
    PluginControllerEventType["IS_ACTIVE_CHANGED"] = "PluginControllerEventType.IS_ACTIVE_CHANGED";
    PluginControllerEventType["PLUGIN_MESSAGE"] = "PluginControllerEventType.PLUGIN_MESSAGE";
})(PluginControllerEventType || (PluginControllerEventType = {}));
/**
 * PDF plugin controller singleton, responsible for communicating with the
 * embedded plugin element. Dispatches a
 * `PluginControllerEventType.PLUGIN_MESSAGE` event containing the message from
 * the plugin, if a message type not handled by this controller is received.
 */
class PluginController {
    eventTarget_ = new EventTarget();
    isActive_ = false;
    plugin_;
    delayedMessages_ = [];
    viewport_;
    getIsUserInitiatedCallback_ = () => false;
    pendingSaveTokens_ = new Map();
    pendingSaveDataBlockTokens_ = new Map();
    requestResolverMap_ = new Map();
    uidCounter_ = 1;
    port_ = null;
    init(plugin, viewport, getIsUserInitiatedCallback) {
        if (this.port_) {
            this.port_.onmessage = null;
            this.port_ = null;
        }
        this.viewport_ = viewport;
        this.getIsUserInitiatedCallback_ = getIsUserInitiatedCallback;
        this.pendingSaveTokens_ = new Map();
        this.pendingSaveDataBlockTokens_ = new Map();
        this.requestResolverMap_ = new Map();
        this.setPlugin_(plugin);
    }
    get isActive() {
        // Check whether `plugin_` is defined as a signal that `init()` was called.
        return !!this.plugin_ && this.isActive_;
    }
    set isActive(isActive) {
        const wasActive = this.isActive;
        this.isActive_ = isActive;
        if (this.isActive === wasActive) {
            return;
        }
        this.eventTarget_.dispatchEvent(new CustomEvent(PluginControllerEventType.IS_ACTIVE_CHANGED, { detail: this.isActive }));
    }
    setPlugin_(plugin) {
        this.plugin_ = plugin;
        this.plugin_.addEventListener('message', e => this.handlePluginMessage_(e), false);
        if (this.delayedMessages_) {
            this.plugin_.postMessage = (message, transfer) => {
                this.delayedMessages_.push({ message, transfer });
            };
        }
        // Called only from init() which always initializes |viewport_|.
        this.viewport_.setContent(this.plugin_);
        this.viewport_.setRemoteContent(this.plugin_);
    }
    createUid_() {
        return this.uidCounter_++;
    }
    getEventTarget() {
        return this.eventTarget_;
    }
    viewportChanged() { }
    // 
    setAnnotationMode(mode) {
        this.postMessage_({
            type: 'setAnnotationMode',
            mode,
        });
    }
    getAnnotationBrush(brushType) {
        return this.postMessageWithReply_({
            type: 'getAnnotationBrush',
            brushType,
        });
    }
    setAnnotationBrush(brush) {
        const message = {
            type: 'setAnnotationBrush',
            data: brush,
        };
        this.postMessage_(message);
    }
    getAllTextAnnotations() {
        return this.postMessageWithReply_({
            type: 'getAllTextAnnotations',
        });
    }
    deleteTextAnnotation(data) {
        const message = {
            type: 'deleteTextAnnotation',
            data,
        };
        this.postMessage_(message);
    }
    editTextAnnotation(id) {
        const message = {
            type: 'editTextAnnotation',
            data: id,
        };
        this.postMessage_(message);
    }
    finishTextAnnotation(annotation) {
        const message = {
            type: 'finishTextAnnotation',
            data: annotation,
        };
        this.postMessage_(message);
    }
    // 
    redo() {
        // 
        this.postMessage_({ type: 'annotationRedo' });
        // 
    }
    undo() {
        // 
        this.postMessage_({ type: 'annotationUndo' });
        // 
    }
    /**
     * Notify the plugin to stop reacting to scroll events while zoom is taking
     * place to avoid flickering.
     */
    beforeZoom() {
        this.postMessage_({ type: 'stopScrolling' });
        assert(this.viewport_);
        if (this.viewport_.pinchPhase === PinchPhase.START) {
            const position = this.viewport_.position;
            const zoom = this.viewport_.getZoom();
            const pinchPhase = this.viewport_.pinchPhase;
            const layoutOptions = this.viewport_.getLayoutOptions();
            this.postMessage_({
                type: 'viewport',
                userInitiated: true,
                zoom: zoom,
                layoutOptions: layoutOptions,
                xOffset: position.x,
                yOffset: position.y,
                pinchPhase: pinchPhase,
            });
        }
    }
    /**
     * Notify the plugin of the zoom change and to continue reacting to scroll
     * events.
     */
    afterZoom() {
        assert(this.viewport_);
        const position = this.viewport_.position;
        const zoom = this.viewport_.getZoom();
        const layoutOptions = this.viewport_.getLayoutOptions();
        const pinchVector = this.viewport_.pinchPanVector || { x: 0, y: 0 };
        const pinchCenter = this.viewport_.pinchCenter || { x: 0, y: 0 };
        const pinchPhase = this.viewport_.pinchPhase;
        this.postMessage_({
            type: 'viewport',
            userInitiated: this.getIsUserInitiatedCallback_(),
            zoom: zoom,
            layoutOptions: layoutOptions,
            xOffset: position.x,
            yOffset: position.y,
            pinchPhase: pinchPhase,
            pinchX: pinchCenter.x,
            pinchY: pinchCenter.y,
            pinchVectorX: pinchVector.x,
            pinchVectorY: pinchVector.y,
        });
    }
    /**
     * Post a message to the plugin. Some messages will cause an async reply to be
     * received through handlePluginMessage_().
     */
    postMessage_(message) {
        assert(this.plugin_);
        this.plugin_.postMessage(message);
    }
    /**
     * Post a message to the plugin, for cases where direct response is expected
     * from the plugin.
     * @return A promise holding the response from the plugin.
     */
    postMessageWithReply_(message) {
        const promiseResolver = new PromiseResolver();
        const messageId = `${message.type}_${this.createUid_()}`;
        message.messageId = messageId;
        this.requestResolverMap_.set(messageId, promiseResolver);
        this.postMessage_(message);
        return promiseResolver.promise;
    }
    rotateClockwise() {
        this.postMessage_({ type: 'rotateClockwise' });
    }
    rotateCounterclockwise() {
        this.postMessage_({ type: 'rotateCounterclockwise' });
    }
    setDisplayAnnotations(displayAnnotations) {
        this.postMessage_({
            type: 'displayAnnotations',
            display: displayAnnotations,
        });
    }
    setTwoUpView(enableTwoUpView) {
        this.postMessage_({
            type: 'setTwoUpView',
            enableTwoUpView: enableTwoUpView,
        });
    }
    print() {
        this.postMessage_({ type: 'print' });
    }
    selectAll() {
        this.postMessage_({ type: 'selectAll' });
    }
    highlightTextFragments(textFragments) {
        this.postMessage_({
            type: 'highlightTextFragments',
            textFragments,
        });
    }
    getSelectedText() {
        return this.postMessageWithReply_({ type: 'getSelectedText' });
    }
    /**
     * Post a thumbnail request message to the plugin.
     * @return A promise holding the thumbnail response from the plugin.
     */
    requestThumbnail(pageIndex) {
        return this.postMessageWithReply_({
            type: 'getThumbnail',
            pageIndex: pageIndex,
        });
    }
    resetPrintPreviewMode(printPreviewParams) {
        this.postMessage_({
            type: 'resetPrintPreviewMode',
            url: printPreviewParams.url,
            grayscale: printPreviewParams.grayscale,
            // If the PDF isn't modifiable we send 0 as the page count so that no
            // blank placeholder pages get appended to the PDF.
            pageCount: (printPreviewParams.modifiable ?
                printPreviewParams.pageNumbers.length :
                0),
        });
    }
    /**
     * @param color New color, as a 32-bit integer, of the PDF plugin
     *     background.
     */
    setBackgroundColor(color) {
        this.postMessage_({
            type: 'setBackgroundColor',
            color: color,
        });
    }
    loadPreviewPage(url, index) {
        this.postMessage_({ type: 'loadPreviewPage', url: url, index: index });
    }
    getPageBoundingBox(page) {
        return this.postMessageWithReply_({
            type: 'getPageBoundingBox',
            page,
        });
    }
    getPasswordComplete(password) {
        this.postMessage_({ type: 'getPasswordComplete', password: password });
    }
    /**
     * @return A promise holding the named destination information from the
     *     plugin.
     */
    getNamedDestination(destination) {
        return this.postMessageWithReply_({
            type: 'getNamedDestination',
            namedDestination: destination,
        });
    }
    focus() {
        this.postMessage_({ type: 'focus' });
    }
    setPresentationMode(enablePresentationMode) {
        this.postMessage_({
            type: 'setPresentationMode',
            enablePresentationMode,
        });
    }
    save(requestType) {
        const resolver = new PromiseResolver();
        const newToken = createToken();
        this.pendingSaveTokens_.set(newToken, resolver);
        this.postMessage_({
            type: 'save',
            token: newToken,
            saveRequestType: requestType,
        });
        return resolver.promise;
    }
    /**
     * Requests data to save a block of the current document. The reply will
     * include bytes to save and total file size. A 0 total file size is an error
     * indicator.
     * @param requestType The type of save request.
     * @param offset The offset of the requested data.
     * @param blockSize The size of requested data. This parameter can be 0 when
     *     the offset is 0 since the caller may not know yet the total file size.
     *     Otherwise it specifies the upper limit on the returned data and the
     *     plugin may return less data than requested.
     */
    getSaveDataBlock(requestType, offset, blockSize) {
        const resolver = new PromiseResolver();
        const newToken = createToken();
        this.pendingSaveDataBlockTokens_.set(newToken, resolver);
        this.postMessage_({
            type: 'getSaveDataBlock',
            token: newToken,
            saveRequestType: requestType,
            offset: offset,
            blockSize: blockSize,
        });
        return resolver.promise;
    }
    /**
     * Requests suggested filename for saving the current document.
     * @param requestType The type of the request, only used for testing.
     */
    getSuggestedFileName(requestType) {
        return this.postMessageWithReply_({
            type: 'getSuggestedFileName',
            saveRequestTypeForTesting: requestType,
        });
    }
    /**
     * Releases any memory buffers kept for saving the PDF in blocks.
     */
    releaseSaveInBlockBuffers() {
        this.postMessage_({
            type: 'releaseSaveInBlockBuffers',
        });
    }
    saveAttachment(index) {
        return this.postMessageWithReply_({
            type: 'saveAttachment',
            attachmentIndex: index,
        });
    }
    /**
     * Binds an event handler for messages received from the plugin.
     *
     * TODO(crbug.com/40189769): Remove this method when a permanent postMessage()
     * bridge is implemented for the viewer.
     */
    bindMessageHandler(port) {
        assert(this.delayedMessages_ !== null);
        assert(this.plugin_);
        const delayedMessages = this.delayedMessages_;
        this.delayedMessages_ = null;
        this.port_ = port;
        this.plugin_.postMessage = port.postMessage.bind(port);
        port.onmessage = e => this.handlePluginMessage_(e);
        for (const { message, transfer } of delayedMessages) {
            this.plugin_.postMessage(message, transfer);
        }
    }
    /**
     * An event handler for handling message events received from the plugin.
     */
    handlePluginMessage_(messageEvent) {
        const messageData = messageEvent.data;
        // Handle case where this Plugin->Page message is a direct response
        // to a previous Page->Plugin message
        if (messageData.messageId !== undefined) {
            const resolver = this.requestResolverMap_.get(messageData.messageId) || null;
            assert(resolver !== null);
            this.requestResolverMap_.delete(messageData.messageId);
            resolver.resolve(messageData);
            return;
        }
        assert(this.viewport_);
        switch (messageData.type) {
            case 'ackScrollToRemote':
                this.viewport_.ackScrollToRemote(messageData);
                break;
            case 'consumeSaveToken':
                const resolver = this.pendingSaveTokens_.get(messageData.token);
                assert(resolver);
                assert(this.pendingSaveTokens_.delete(messageData.token));
                resolver.resolve(null);
                break;
            case 'gesture':
                this.viewport_.dispatchGesture(messageData.gesture);
                break;
            case 'goToPage':
                this.viewport_.goToPage(messageData.page);
                break;
            case 'navigateToDestination':
                const destinationData = messageData;
                this.viewport_.handleNavigateToDestination(destinationData.page, destinationData.x, destinationData.y, destinationData.zoom);
                return;
            case 'saveData':
                this.saveData_(messageData);
                break;
            case 'saveDataBlock':
                this.saveDataBlock_(messageData);
                break;
            case 'scrollBy':
                this.viewport_.scrollBy(messageData);
                break;
            case 'setScrollPosition':
                this.viewport_.scrollTo(messageData);
                break;
            case 'setSmoothScrolling':
                this.viewport_.setSmoothScrolling(messageData.smoothScrolling);
                return;
            case 'swipe':
                this.viewport_.dispatchSwipe(messageData.direction);
                break;
            case 'syncScrollFromRemote':
                this.viewport_.syncScrollFromRemote(messageData);
                break;
            default:
                this.eventTarget_.dispatchEvent(new CustomEvent(PluginControllerEventType.PLUGIN_MESSAGE, { detail: messageData }));
        }
    }
    /** Handles the pdf file buffer received from the plugin. */
    saveData_(messageData) {
        // Verify a token that was created by this instance is included to avoid
        // being spammed.
        const resolver = this.pendingSaveTokens_.get(messageData.token);
        assert(resolver);
        assert(this.pendingSaveTokens_.delete(messageData.token));
        if (!messageData.dataToSave) {
            resolver.reject();
            return;
        }
        // Verify the file size is capped at 100 MB. This cap should be kept in sync
        // with and is also enforced in pdf/out_of_process_instance.cc.
        const MAX_FILE_SIZE = 100 * 1000 * 1000;
        assert(messageData.dataToSave.byteLength <= MAX_FILE_SIZE, `File too large to be saved: ${messageData.dataToSave.byteLength} bytes.`);
        verifyPdfHeader(messageData.dataToSave);
        resolver.resolve(messageData);
    }
    /** Handles the partial pdf file buffer received from the plugin. */
    saveDataBlock_(messageData) {
        // Verify a token that was created by this instance is included to avoid
        // being spammed.
        const resolver = this.pendingSaveDataBlockTokens_.get(messageData.token);
        assert(resolver);
        assert(this.pendingSaveDataBlockTokens_.delete(messageData.token));
        if (!messageData.dataToSave) {
            resolver.reject();
            return;
        }
        resolver.resolve(messageData);
    }
    setPluginForTesting(plugin) {
        this.setPlugin_(plugin);
    }
    static getInstance() {
        return instance$9 || (instance$9 = new PluginController());
    }
}
let instance$9 = null;

let instance$8 = null;
function getCss$6() {
    return instance$8 || (instance$8 = [...[], css `:host{display:none}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$4() {
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
        return getCss$6();
    }
    render() {
        return getHtml$4.bind(this)();
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

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const div$2 = document.createElement('div');
if (document.documentElement.hasAttribute('webui-rounded-icons')) {
    div$2.innerHTML = getTrustedHTML `<cr-iconset size="20" name="pdf">
  <svg>
    <defs>
      <g id="add"><path d="M9.25 10.75h-3.5c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 5 10.004c0-.211.07-.39.215-.535a.73.73 0 0 1 .535-.219h3.5v-3.5c0-.21.07-.39.215-.535A.713.713 0 0 1 9.996 5c.211 0 .39.07.535.215a.73.73 0 0 1 .219.535v3.5h3.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219h-3.5v3.5c0 .21-.07.39-.215.535a.713.713 0 0 1-.531.215c-.211 0-.39-.07-.535-.215a.73.73 0 0 1-.219-.535Zm0 0"></path></g>
      <g id="attach-file"><path d="M14.5 13.5c0 1.25-.438 2.309-1.313 3.188C12.31 17.563 11.25 18 10 18c-1.266 0-2.328-.453-3.2-1.363-.866-.91-1.3-2.004-1.3-3.282V5.25c0-.902.316-1.672.95-2.3.628-.634 1.398-.95 2.3-.95.918 0 1.688.332 2.313 1 .624.668.937 1.465.937 2.395V13a1.93 1.93 0 0 1-.582 1.418A1.93 1.93 0 0 1 10 15a1.88 1.88 0 0 1-1.426-.605A2.075 2.075 0 0 1 8 12.918V5.75c0-.21.07-.39.215-.535A.713.713 0 0 1 8.746 5c.211 0 .39.07.535.215a.73.73 0 0 1 .219.535V13c0 .145.047.266.14.36.094.093.215.14.36.14a.489.489 0 0 0 .36-.14.489.489 0 0 0 .14-.36V5.25a1.69 1.69 0 0 0-.512-1.238A1.692 1.692 0 0 0 8.746 3.5c-.488 0-.902.176-1.238.531-.34.356-.508.774-.508 1.262V13.5c0 .832.293 1.54.875 2.113.582.578 1.293.871 2.125.887.832.016 1.543-.285 2.125-.895a3.095 3.095 0 0 0 .875-2.21V5.75c0-.21.07-.39.215-.535A.713.713 0 0 1 13.746 5c.211 0 .39.07.535.215a.73.73 0 0 1 .219.535Zm0 0"></path></g>
      <g id="check-small"><path d="m8.332 11.605 5.086-5.085a.725.725 0 0 1 .531-.227c.2 0 .38.074.531.227a.73.73 0 0 1 .227.53.725.725 0 0 1-.227.532l-5.625 5.625a.729.729 0 0 1-1.062 0l-2.273-2.27a.725.725 0 0 1-.227-.53c0-.204.074-.38.227-.532a.729.729 0 0 1 1.063 0Zm0 0"></path></g>
      <g id="fit-page-height"><path d="M5.496 18c-.414 0-.766-.148-1.059-.441A1.439 1.439 0 0 1 4 16.5v-13c0-.414.148-.766.441-1.059A1.449 1.449 0 0 1 5.5 2h9.004c.414 0 .766.148 1.059.441.292.293.437.645.437 1.059v13c0 .414-.148.766-.441 1.059A1.449 1.449 0 0 1 14.5 18Zm9.004-1.5v-13h-9v13Zm0-13h-9Zm-6.105 4h3.21c.16 0 .27-.078.329-.238.058-.16.03-.297-.079-.407L10.52 5.52a.691.691 0 0 0-.516-.227.72.72 0 0 0-.524.227L8.145 6.855c-.11.11-.137.247-.079.407.059.16.168.238.329.238Zm2.125 6.98 1.335-1.335c.11-.11.137-.247.079-.407-.059-.16-.168-.238-.329-.238h-3.21c-.16 0-.27.078-.329.238-.058.16-.03.297.079.407L9.48 14.48c.145.153.32.227.516.227a.72.72 0 0 0 .524-.227Zm0 0"></path></g>
      <g id="fit-page-width"><path d="M3.5 16c-.414 0-.766-.148-1.059-.441A1.449 1.449 0 0 1 2 14.5V5.496c0-.414.148-.766.441-1.059A1.439 1.439 0 0 1 3.5 4h13c.414 0 .766.148 1.059.441.293.293.441.649.441 1.059v9.004c0 .414-.148.766-.441 1.059A1.439 1.439 0 0 1 16.5 16Zm13-10.5h-13v9h13Zm-13 0v9Zm4 6.105v-3.21c0-.16-.078-.27-.238-.329-.16-.058-.297-.03-.407.079L5.52 9.48a.691.691 0 0 0-.227.516.72.72 0 0 0 .227.524l1.335 1.335c.11.11.247.137.407.079.16-.059.238-.168.238-.329Zm6.98-2.125-1.335-1.335c-.11-.11-.247-.137-.407-.079-.16.059-.238.168-.238.329v3.21c0 .16.078.27.238.329.16.058.297.03.407-.079l1.335-1.335a.691.691 0 0 0 .227-.516.72.72 0 0 0-.227-.524Zm0 0"></path></g>
      <g id="fullscreen-exit"><path d="M5.5 14.5H3.75c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 13.754c0-.211.07-.39.215-.535A.73.73 0 0 1 3.75 13h2.5c.21 0 .39.07.535.215A.727.727 0 0 1 7 13.75v2.5c0 .21-.07.39-.215.535a.713.713 0 0 1-.531.215c-.211 0-.39-.07-.535-.215a.73.73 0 0 1-.219-.535Zm9 0v1.75c0 .21-.07.39-.215.535a.713.713 0 0 1-.531.215c-.211 0-.39-.07-.535-.215A.73.73 0 0 1 13 16.25v-2.5c0-.21.07-.39.215-.535A.727.727 0 0 1 13.75 13h2.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219Zm-9-9V3.75c0-.21.07-.39.215-.535A.713.713 0 0 1 6.246 3c.211 0 .39.07.535.215A.73.73 0 0 1 7 3.75v2.5c0 .21-.07.39-.215.535A.727.727 0 0 1 6.25 7h-2.5c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 6.254c0-.211.07-.39.215-.535A.73.73 0 0 1 3.75 5.5Zm9 0h1.75c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535A.73.73 0 0 1 16.25 7h-2.5c-.21 0-.39-.07-.535-.215A.727.727 0 0 1 13 6.25v-2.5c0-.21.07-.39.215-.535A.713.713 0 0 1 13.746 3c.211 0 .39.07.535.215a.73.73 0 0 1 .219.535Zm0 0"></path></g>
      <g id="image"><path d="M4.5 17a1.42 1.42 0 0 1-1.059-.45A1.45 1.45 0 0 1 3 15.5v-11c0-.402.148-.754.441-1.05C3.734 3.147 4.086 3 4.5 3h11c.414 0 .766.148 1.059.45.293.296.441.648.441 1.05v11c0 .402-.148.754-.441 1.05-.293.302-.645.45-1.059.45Zm0-1.5h11v-11h-11Zm0 0v-11ZM6.25 14h7.504c.148 0 .262-.07.328-.207a.348.348 0 0 0-.039-.398l-2.25-3a.34.34 0 0 0-.293-.165.34.34 0 0 0-.293.165L9.25 13l-1.207-1.605a.34.34 0 0 0-.293-.165.34.34 0 0 0-.293.165l-1.496 2a.342.342 0 0 0-.04.398c.075.137.184.207.329.207Zm0 0"></path></g>
      <g id="list-alt"><path d="M7.281 13.785a.716.716 0 0 0 .219-.531c0-.211-.07-.39-.215-.535a.716.716 0 0 0-.531-.219c-.211 0-.39.07-.535.215a.716.716 0 0 0-.219.531c0 .211.07.39.215.535.14.145.32.219.531.219.211 0 .39-.07.535-.215Zm0-3.25a.716.716 0 0 0 .219-.531c0-.211-.07-.39-.215-.535a.716.716 0 0 0-.531-.219c-.211 0-.39.07-.535.215A.716.716 0 0 0 6 9.996c0 .211.07.39.215.535.14.145.32.219.531.219.211 0 .39-.07.535-.215Zm0-3.25a.716.716 0 0 0 .219-.531c0-.211-.07-.39-.215-.535A.716.716 0 0 0 6.754 6c-.211 0-.39.07-.535.215A.716.716 0 0 0 6 6.746c0 .211.07.39.215.535.14.145.32.219.531.219.211 0 .39-.07.535-.215ZM9.75 14h3.5c.21 0 .39-.07.535-.215a.713.713 0 0 0 .215-.531c0-.211-.07-.39-.215-.535a.73.73 0 0 0-.535-.219h-3.5c-.21 0-.39.07-.535.215a.713.713 0 0 0-.215.531c0 .211.07.39.215.535A.73.73 0 0 0 9.75 14Zm0-3.25h3.5c.21 0 .39-.07.535-.215a.713.713 0 0 0 .215-.531c0-.211-.07-.39-.215-.535a.73.73 0 0 0-.535-.219h-3.5c-.21 0-.39.07-.535.215A.713.713 0 0 0 9 9.996c0 .211.07.39.215.535a.73.73 0 0 0 .535.219Zm0-3.25h3.5c.21 0 .39-.07.535-.215A.713.713 0 0 0 14 6.754c0-.211-.07-.39-.215-.535A.73.73 0 0 0 13.25 6h-3.5c-.21 0-.39.07-.535.215A.713.713 0 0 0 9 6.746c0 .211.07.39.215.535a.73.73 0 0 0 .535.219ZM4.5 17c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 3 15.5v-11c0-.414.148-.766.441-1.059A1.443 1.443 0 0 1 4.5 3h11c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059v11c0 .414-.148.766-.441 1.059A1.443 1.443 0 0 1 15.5 17Zm0-1.5h11v-11h-11Zm0-11v11Zm0 0"></path></g>
      <g id="menu"><path d="M3.75 14.5c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 13.754c0-.211.07-.39.215-.535A.73.73 0 0 1 3.75 13h12.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219Zm0-3.75c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 10.004c0-.211.07-.39.215-.535a.73.73 0 0 1 .535-.219h12.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219Zm0-3.75c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 6.254c0-.211.07-.39.215-.535A.73.73 0 0 1 3.75 5.5h12.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535A.73.73 0 0 1 16.25 7Zm0 0"></path></g>
      <g id="more-vert"><path d="M9.996 16c-.414 0-.766-.148-1.059-.441a1.454 1.454 0 0 1-.437-1.063c0-.414.148-.766.441-1.059A1.454 1.454 0 0 1 10.004 13c.414 0 .766.148 1.059.441.292.297.437.649.437 1.063 0 .414-.148.766-.441 1.059A1.454 1.454 0 0 1 9.996 16Zm0-4.5c-.414 0-.766-.148-1.059-.441A1.454 1.454 0 0 1 8.5 9.996c0-.414.148-.766.441-1.059a1.454 1.454 0 0 1 1.063-.437c.414 0 .766.148 1.059.441.292.297.437.649.437 1.063 0 .414-.148.766-.441 1.059a1.454 1.454 0 0 1-1.063.437Zm0-4.5c-.414 0-.766-.148-1.059-.441A1.454 1.454 0 0 1 8.5 5.496c0-.414.148-.766.441-1.059A1.454 1.454 0 0 1 10.004 4c.414 0 .766.148 1.059.441.292.297.437.649.437 1.063 0 .414-.148.766-.441 1.059A1.454 1.454 0 0 1 9.996 7Zm0 0"></path></g>
      <g id="print"><path d="M6.5 17c-.414 0-.766-.148-1.059-.441A1.44 1.44 0 0 1 5 15.504v-1.5H3.5c-.414 0-.766-.145-1.059-.438A1.454 1.454 0 0 1 2 12.5V9c0-.555.195-1.027.582-1.418C2.972 7.195 3.445 7 4 7h12c.555 0 1.027.195 1.418.582.387.39.582.863.582 1.418v3.5c0 .414-.148.766-.441 1.059a1.44 1.44 0 0 1-1.055.441h-1.5v1.5c0 .414-.145.766-.438 1.059A1.454 1.454 0 0 1 13.5 17Zm-3-4.5H5c0-.414.148-.766.441-1.059A1.443 1.443 0 0 1 6.5 11h7c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059h1.52V9.297a.73.73 0 0 0-.25-.567.83.83 0 0 0-.582-.23H4.293a.769.769 0 0 0-.566.23.774.774 0 0 0-.227.57Zm10-5.5V4.5h-7V7H5V4.5c0-.418.148-.77.441-1.063A1.439 1.439 0 0 1 6.5 3h7c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059V7Zm1.246 3.5c.211 0 .39-.07.535-.215a.716.716 0 0 0 .219-.531c0-.211-.07-.39-.215-.535A.716.716 0 0 0 14.754 9c-.211 0-.39.07-.535.215a.716.716 0 0 0-.219.531c0 .211.07.39.215.535.14.145.32.219.531.219Zm-1.246 5v-3h-7v3Zm-10-7h13.02Zm0 0"></path></g>
      <g id="redo"><path d="M13.125 9.5H8c-.695 0-1.285.242-1.77.73A2.397 2.397 0 0 0 5.5 12c0 .695.242 1.285.73 1.77.485.488 1.075.73 1.77.73h5.25c.207 0 .387.074.531.219a.728.728 0 0 1 .219.531.728.728 0 0 1-.219.531.728.728 0 0 1-.531.219H8c-1.11 0-2.055-.39-2.832-1.168C4.391 14.055 4 13.109 4 12c0-1.11.39-2.055 1.168-2.832C5.945 8.391 6.891 8 8 8h5.125l-1.418-1.418a.725.725 0 0 1-.227-.531c0-.2.075-.38.227-.531a.73.73 0 0 1 .531-.227c.203 0 .38.074.532.227l2.71 2.71a.702.702 0 0 1 .207.52.702.702 0 0 1-.207.52l-2.71 2.71a.689.689 0 0 1-.52.22.762.762 0 0 1-.52-.243.729.729 0 0 1 0-1.062Zm0 0"></path></g>
      <g id="remove"><path d="M5.582 10.75a.731.731 0 0 1-.531-.215.716.716 0 0 1-.219-.531c0-.211.074-.39.219-.535a.716.716 0 0 1 .531-.219h8.836c.207 0 .383.07.531.215.145.14.219.32.219.531a.73.73 0 0 1-.219.535.716.716 0 0 1-.531.219Zm0 0"></path></g>
      <g id="rotate-90-degrees-ccw"><path d="M11.188 18.25a7.02 7.02 0 0 1-1.543-.168 8.032 8.032 0 0 1-1.477-.477.623.623 0 0 1-.355-.406.8.8 0 0 1 .05-.574.713.713 0 0 1 .43-.395.772.772 0 0 1 .582.02c.363.168.738.293 1.125.375.387.082.781.125 1.188.125 1.527 0 2.82-.543 3.882-1.625 1.067-1.082 1.598-2.395 1.598-3.938 0-1.515-.547-2.8-1.637-3.855-1.09-1.055-2.406-1.582-3.949-1.582h-.062l.687.668a.688.688 0 0 1 .219.531.76.76 0 0 1-.239.531.718.718 0 0 1-.519.227.72.72 0 0 1-.523-.227L8.688 5.52a.648.648 0 0 1-.157-.239.763.763 0 0 1-.05-.281c0-.098.015-.191.05-.281a.648.648 0 0 1 .156-.239l1.958-1.96a.72.72 0 0 1 .523-.227c.191 0 .367.074.52.227a.817.817 0 0 1 .25.523.643.643 0 0 1-.208.52l-.71.687h.125c1.945 0 3.601.672 4.968 2.012 1.371 1.34 2.055 2.984 2.055 4.937 0 1.95-.68 3.614-2.035 4.989-1.36 1.375-3.008 2.062-4.945 2.062Zm-5.305-2.363a.742.742 0 0 1-.238-.157l-3.957-3.96a.735.735 0 0 1-.207-.523c0-.102.015-.196.05-.282a.667.667 0 0 1 .157-.235l3.957-3.96a.735.735 0 0 1 .527-.207c.098 0 .191.015.281.05a.77.77 0 0 1 .234.157l3.958 3.96c.07.075.12.157.156.243a.737.737 0 0 1 0 .562.667.667 0 0 1-.156.235l-3.957 3.96a.855.855 0 0 1-.243.157.763.763 0 0 1-.28.05.735.735 0 0 1-.282-.05Zm.285-1.762 2.875-2.875-2.875-2.875-2.875 2.875Zm0-2.875Zm0 0"></path></g>
      <g id="undo"><path d="M6.75 16a.728.728 0 0 1-.531-.219A.728.728 0 0 1 6 15.25c0-.207.074-.387.219-.531a.728.728 0 0 1 .531-.219H12c.695 0 1.285-.242 1.77-.73.488-.485.73-1.075.73-1.77 0-.695-.242-1.285-.73-1.77A2.397 2.397 0 0 0 12 9.5H6.875l1.395 1.418a.729.729 0 0 1 0 1.062.712.712 0 0 1-.52.227.712.712 0 0 1-.52-.227L4.52 9.27a.702.702 0 0 1-.207-.52.702.702 0 0 1 .207-.52l2.687-2.687a.729.729 0 0 1 1.063 0 .762.762 0 0 1 .242.52.689.689 0 0 1-.219.519L6.875 8H12c1.11 0 2.055.39 2.832 1.168C15.609 9.945 16 10.891 16 12c0 1.11-.39 2.055-1.168 2.832C14.055 15.609 13.109 16 12 16Zm0 0"></path></g>
    </defs>
  </svg>
</cr-iconset>

<cr-iconset size="24" name="pdf-glic">
  <svg>
    <defs>
      <g id="summarize-auto-2"><path d="M8.102 15a.88.88 0 0 1-.903-.895.887.887 0 0 1 .903-.906H19.5c.254 0 .469.086.64.258a.863.863 0 0 1 .258.637.887.887 0 0 1-.257.644.86.86 0 0 1-.641.262Zm0 3.602a.88.88 0 0 1-.903-.895.887.887 0 0 1 .903-.906H19.5c.254 0 .469.086.64.258a.863.863 0 0 1 .258.636.872.872 0 0 1-.257.64.864.864 0 0 1-.641.267ZM4.5 11.398a.857.857 0 0 1-.625-.273.87.87 0 0 1-.273-.637c0-.242.09-.449.273-.625a.89.89 0 0 1 .637-.261c.242 0 .449.085.625.257a.86.86 0 0 1 .261.641.888.888 0 0 1-.257.625.842.842 0 0 1-.641.273ZM4.5 15a.857.857 0 0 1-.625-.273.879.879 0 0 1-.273-.641c0-.238.09-.45.273-.625a.905.905 0 0 1 .637-.262c.242 0 .449.086.625.258a.869.869 0 0 1 .261.645c0 .23-.085.441-.257.625A.842.842 0 0 1 4.5 15Zm0 3.602a.862.862 0 0 1-.625-.278.87.87 0 0 1-.273-.637c0-.242.09-.449.273-.625a.89.89 0 0 1 .637-.261c.242 0 .449.086.625.258a.86.86 0 0 1 .261.64.888.888 0 0 1-.257.625.846.846 0 0 1-.641.278Zm14.102-9c-.102 0-.168-.051-.204-.153a5.135 5.135 0 0 0-1.386-2.46 5.213 5.213 0 0 0-2.473-1.395c-.094-.028-.14-.094-.14-.196 0-.113.05-.183.152-.199a5.167 5.167 0 0 0 2.46-1.386 5.213 5.213 0 0 0 1.395-2.473c.028-.094.094-.14.196-.14.113 0 .183.05.199.152a5.351 5.351 0 0 0 3.86 3.851c.093.016.14.082.14.195 0 .102-.051.168-.153.204-.949.23-1.77.695-2.46 1.386a5.174 5.174 0 0 0-1.391 2.473c-.016.094-.082.14-.195.14Zm-10.5 1.796a.872.872 0 0 1-.902-.895c0-.253.085-.464.257-.64a.869.869 0 0 1 .645-.261h6.597a.884.884 0 0 1 .903.894.866.866 0 0 1-.262.64.86.86 0 0 1-.64.262Zm0 0"></path></g>
    </defs>
  </svg>
</cr-iconset>


  <cr-iconset size="24" name="pdf-ink">
    <svg>
      <defs>
      <g id="format-align-center"><path d="M4.5 20.398a.872.872 0 0 1-.898-.895c0-.253.086-.464.257-.64a.86.86 0 0 1 .641-.261h15a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm3.602-3.75a.872.872 0 0 1-.902-.895c0-.253.085-.464.257-.64a.869.869 0 0 1 .645-.261h7.796a.872.872 0 0 1 .902.895.878.878 0 0 1-.257.64.869.869 0 0 1-.645.261ZM4.5 12.898a.872.872 0 0 1-.898-.895c0-.253.086-.464.257-.64a.86.86 0 0 1 .641-.261h15a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm3.602-3.75a.872.872 0 0 1-.902-.895c0-.253.085-.464.257-.64a.869.869 0 0 1 .645-.261h7.796a.872.872 0 0 1 .902.895.878.878 0 0 1-.257.64.869.869 0 0 1-.645.261ZM4.5 5.398a.872.872 0 0 1-.898-.895c0-.253.086-.464.257-.64a.86.86 0 0 1 .641-.261h15a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm0 0"></path></g>
      <g id="format-align-left"><path d="M4.5 20.398a.872.872 0 0 1-.898-.895c0-.253.086-.464.257-.64a.86.86 0 0 1 .641-.261h15a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm0-3.75a.872.872 0 0 1-.898-.895c0-.253.086-.464.257-.64a.86.86 0 0 1 .641-.261h10.2a.884.884 0 0 1 .902.894.866.866 0 0 1-.262.64.86.86 0 0 1-.64.262Zm0-3.75a.872.872 0 0 1-.898-.895c0-.253.086-.464.257-.64a.86.86 0 0 1 .641-.261h15a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm0-3.75a.872.872 0 0 1-.898-.895c0-.253.086-.464.257-.64a.86.86 0 0 1 .641-.261h10.2a.884.884 0 0 1 .902.894.866.866 0 0 1-.262.64.86.86 0 0 1-.64.262Zm0-3.75a.872.872 0 0 1-.898-.895c0-.253.086-.464.257-.64a.86.86 0 0 1 .641-.261h15a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm0 0"></path></g>
      <g id="format-align-right"><path d="M4.5 5.398a.872.872 0 0 1-.898-.895c0-.253.086-.464.257-.64a.86.86 0 0 1 .641-.261h15a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm4.8 3.75a.884.884 0 0 1-.902-.894c0-.254.086-.465.262-.64a.86.86 0 0 1 .64-.262h10.2a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm-4.8 3.75a.872.872 0 0 1-.898-.895c0-.253.086-.464.257-.64a.86.86 0 0 1 .641-.261h15a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm4.8 3.75a.884.884 0 0 1-.902-.894c0-.254.086-.465.262-.64a.86.86 0 0 1 .64-.262h10.2a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm-4.8 3.75a.872.872 0 0 1-.898-.895c0-.253.086-.464.257-.64a.86.86 0 0 1 .641-.261h15a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm0 0"></path></g>
      <g id="format-bold"><path d="M8.45 19.2c-.497 0-.919-.177-1.27-.528a1.74 1.74 0 0 1-.532-1.274V6.602c0-.497.18-.922.532-1.274a1.729 1.729 0 0 1 1.27-.527h3.902c1.113 0 2.14.344 3.085 1.031.942.691 1.415 1.645 1.415 2.867 0 .852-.188 1.512-.563 1.989-.375.476-.73.82-1.062 1.039.433.199.898.558 1.398 1.074.5.515.75 1.273.75 2.273 0 1.516-.559 2.586-1.676 3.2-1.12.617-2.168.925-3.148.925Zm1.374-2.95h2.617c.805 0 1.293-.203 1.457-.613.168-.407.25-.703.25-.887 0-.184-.085-.48-.261-.887-.176-.41-.688-.613-1.535-.613H9.824Zm0-5.8h2.324c.551 0 .957-.145 1.215-.438.258-.29.387-.602.387-.938 0-.398-.145-.722-.43-.972-.285-.25-.652-.375-1.105-.375h-2.39Zm0 0"></path></g>
      <g id="format-italic"><path d="M6.602 19.2a1.16 1.16 0 0 1-.856-.348 1.152 1.152 0 0 1-.348-.848c0-.336.118-.621.348-.856.234-.23.52-.347.856-.347h2.796L12.5 7.199H9.602a1.16 1.16 0 0 1-.856-.347 1.152 1.152 0 0 1-.348-.848c0-.336.118-.621.348-.856.234-.23.52-.347.856-.347h7.796c.336 0 .622.113.856.347.23.23.348.512.348.848 0 .336-.118.621-.348.856-.234.23-.52.347-.856.347h-2.5l-3.097 9.602h2.597c.336 0 .622.113.856.347.23.23.348.512.348.848 0 .336-.118.621-.348.856-.234.23-.52.347-.856.347Zm0 0"></path></g>
      <g id="format-underlined"><path d="M6.898 20.398A.872.872 0 0 1 6 19.503c0-.253.086-.464.258-.64a.86.86 0 0 1 .64-.261h10.204a.872.872 0 0 1 .898.895.878.878 0 0 1-.258.64.86.86 0 0 1-.64.261Zm1.391-5.085c-.875-.989-1.312-2.301-1.312-3.938V4.797c0-.332.12-.613.363-.848.246-.234.531-.347.863-.347.332 0 .613.117.852.351.234.238.351.52.351.852v6.722c0 .88.223 1.598.66 2.149.442.55 1.086.824 1.934.824.852 0 1.496-.277 1.938-.828.44-.55.664-1.266.664-2.149V4.797c0-.332.113-.613.347-.848a1.16 1.16 0 0 1 .856-.347c.332 0 .62.117.86.351.241.235.358.52.358.848v6.574c0 1.633-.437 2.945-1.312 3.938-.875.992-2.11 1.488-3.711 1.488-1.602 0-2.836-.496-3.71-1.488Zm0 0"></path></g>
      <g id="gesture"><path d="M13.676 20.398c-.766 0-1.41-.265-1.926-.796-.516-.536-.773-1.204-.773-2 0-1.153.52-2.215 1.562-3.188a6.63 6.63 0 0 1 3.688-1.766c-.118-.796-.336-1.406-.653-1.824-.316-.414-.722-.625-1.222-.625-.586 0-1.207.281-1.864.84-.66.559-1.34 1.379-2.039 2.461-.734 1.133-1.441 1.965-2.125 2.5-.683.535-1.375.8-2.074.8-.75 0-1.355-.26-1.813-.788-.457-.524-.687-1.211-.687-2.063 0-.699.168-1.453.5-2.261.332-.81.84-1.696 1.523-2.665.485-.683.848-1.27 1.09-1.761.242-.492.364-.903.364-1.239a.764.764 0 0 0-.114-.437.363.363 0 0 0-.312-.16c-.133 0-.301.058-.5.176-.2.113-.45.316-.75.597a.952.952 0 0 1-.664.29.857.857 0 0 1-.66-.262.77.77 0 0 1-.239-.653 1.03 1.03 0 0 1 .313-.648c.531-.485.992-.824 1.375-1.028.383-.199.765-.296 1.148-.296a2.03 2.03 0 0 1 1.551.671c.418.454.625 1.02.625 1.704 0 .546-.16 1.175-.477 1.886-.316.707-.765 1.461-1.347 2.262-.535.734-.942 1.414-1.227 2.04-.281.624-.426 1.187-.426 1.687 0 .332.079.605.227.824.148.215.34.324.574.324.2 0 .399-.055.59-.164.191-.106.418-.3.688-.586.183-.184.378-.414.585-.688.208-.273.43-.585.665-.937.949-1.418 1.882-2.477 2.796-3.176.918-.699 1.829-1.05 2.727-1.05 1 0 1.832.386 2.5 1.152.668.765 1.05 1.781 1.148 3.05H19.5c.25 0 .46.086.637.262a.864.864 0 0 1 .261.637c0 .25-.085.46-.261.637a.864.864 0 0 1-.637.261h-1.398c0 1.586-.45 2.98-1.34 4.188-.89 1.21-1.922 1.812-3.086 1.812Zm.074-1.773c.617 0 1.195-.441 1.738-1.324.54-.883.813-1.824.813-2.824-.883.148-1.696.543-2.438 1.187-.742.64-1.113 1.27-1.113 1.887 0 .3.098.554.29.762a.927.927 0 0 0 .71.312Zm0 0"></path></g>
      <g id="highlighter-size-1"><path d="m6.773 18.773-1.546-1.546a.883.883 0 0 1-.278-.641.88.88 0 0 1 .278-.637L15.949 5.227a.88.88 0 0 1 .637-.278c.242 0 .457.094.64.278l1.547 1.546a.883.883 0 0 1 .278.641.88.88 0 0 1-.278.637L8.051 18.773a.88.88 0 0 1-.637.278.883.883 0 0 1-.64-.278Zm0 0"></path></g>
      <g id="highlighter-size-2"><path d="m7.148 19.148-2.273-2.273a.87.87 0 0 1-.273-.637.87.87 0 0 1 .273-.636L15.602 4.875a.87.87 0 0 1 .636-.273.87.87 0 0 1 .637.273l2.273 2.273a.868.868 0 0 1 .278.625.862.862 0 0 1-.278.625l-10.75 10.75a.862.862 0 0 1-.625.278.868.868 0 0 1-.625-.278Zm0 0"></path></g>
      <g id="highlighter-size-3"><path d="m7.824 19.824-3.648-3.648a.88.88 0 0 1-.278-.637c0-.242.094-.457.278-.64L14.898 4.175a.883.883 0 0 1 .641-.278.88.88 0 0 1 .637.278l3.648 3.648a.88.88 0 0 1 .278.637.883.883 0 0 1-.278.64L9.102 19.825a.883.883 0 0 1-.641.278.88.88 0 0 1-.637-.278Zm0 0"></path></g>
      <g id="highlighter-size-4"><path d="m8.898 20.898-5.796-5.796a.883.883 0 0 1-.278-.641.88.88 0 0 1 .278-.637L13.824 3.102a.88.88 0 0 1 .637-.278c.242 0 .457.094.64.278l5.797 5.796a.883.883 0 0 1 .278.641.88.88 0 0 1-.278.637L10.176 20.898a.88.88 0 0 1-.637.278.883.883 0 0 1-.64-.278Zm0 0"></path></g>
      <g id="highlighter-size-5"><path d="m10.32 22.32-8.617-8.617a.883.883 0 0 1-.277-.64c0-.243.094-.458.277-.641L12.422 1.703a.885.885 0 0 1 .644-.277c.246 0 .457.09.633.273l8.621 8.621a.885.885 0 0 1 .282.64.872.872 0 0 1-.282.642L11.602 22.32a.872.872 0 0 1-.641.282.885.885 0 0 1-.64-.282Zm0 0"></path></g>
      <g id="ink-eraser"><path d="M16.8 17.398h3.9c.25 0 .464.09.636.266a.861.861 0 0 1 .266.637c0 .25-.09.46-.266.637a.858.858 0 0 1-.637.261H15ZM6.25 19.2a.851.851 0 0 1-.363-.074.985.985 0 0 1-.285-.2L2.926 16.25a1.76 1.76 0 0 1-.54-1.262c-.007-.492.173-.922.54-1.289L13.699 2.926c.367-.367.793-.551 1.278-.551.48 0 .906.184 1.273.55l4.824 4.825c.352.352.531.77.54 1.262.007.492-.173.922-.54 1.289l-8.625 8.625a1.04 1.04 0 0 1-.285.199.851.851 0 0 1-.363.074Zm5.176-1.8L19.8 9.022 14.977 4.2 4.199 14.977l2.426 2.421ZM12 12Zm0 0"></path></g>
      <g id="ink-eraser-filled"><path d="M16.8 17.398h3.9c.25 0 .464.09.636.266a.861.861 0 0 1 .266.637c0 .25-.09.46-.266.637a.858.858 0 0 1-.637.261H15ZM6.25 19.2a.851.851 0 0 1-.363-.074.985.985 0 0 1-.285-.2L2.926 16.25a1.76 1.76 0 0 1-.54-1.262c-.007-.492.173-.922.54-1.289L13.699 2.926c.367-.367.793-.551 1.278-.551.48 0 .906.184 1.273.55l4.824 4.825c.352.352.531.77.54 1.262.007.492-.173.922-.54 1.289l-8.625 8.625a1.04 1.04 0 0 1-.285.199.851.851 0 0 1-.363.074Zm0 0"></path></g>
      <g id="ink-highlighter"><path d="m13.7 13.75-2.25-2.273L6.624 16.3l2.273 2.273Zm-.95-3.574L15 12.449l4.8-4.8-2.25-2.274Zm-1.926-.602 4.801 4.801-5.45 5.45a1.99 1.99 0 0 1-1.26.538 1.534 1.534 0 0 1-1.216-.465 1.608 1.608 0 0 1-.55.375c-.2.086-.415.125-.649.125H3.477c-.204 0-.336-.093-.403-.285-.066-.191-.031-.355.102-.488L5.3 17.5a1.56 1.56 0 0 1-.5-1.238c.015-.492.207-.903.574-1.239Zm0 0 5.45-5.449a1.736 1.736 0 0 1 1.277-.523c.5 0 .926.171 1.273.523l2.25 2.25c.336.367.5.793.5 1.273 0 .485-.164.91-.5 1.278l-5.449 5.449Zm0 0"></path></g>
      <g id="ink-highlighter-filled"><path d="m10.176 10.227 4.8 4.796-4.8 4.801a1.99 1.99 0 0 1-1.262.54 1.534 1.534 0 0 1-1.215-.466 1.608 1.608 0 0 1-.55.375c-.2.086-.415.125-.649.125H3.477c-.204 0-.336-.093-.403-.285-.066-.191-.031-.355.102-.488L5.3 17.5a1.56 1.56 0 0 1-.5-1.238c.015-.492.207-.903.574-1.239Zm1.3-1.301 4.797-4.801a1.736 1.736 0 0 1 1.278-.523c.5 0 .926.171 1.273.523l2.25 2.25c.336.367.5.793.5 1.273 0 .485-.164.91-.5 1.278l-4.8 4.8Zm0 0"></path></g>
      <g id="ink-pen"><path d="m12.102 10.852 1.046 1.046L18.352 6.7 17.3 5.65Zm-6.704 7.75H6.45l5.45-5.454-1.047-1.046-5.454 5.449Zm8.403-4.801-3.602-3.602 3.403-3.398-1.278-1.278-4.398 4.403a.857.857 0 0 1-.625.273.857.857 0 0 1-.625-.273.88.88 0 0 1-.278-.637c0-.242.094-.457.278-.64l4.398-4.399a1.72 1.72 0 0 1 1.262-.523c.492 0 .914.171 1.266.523l1.273 1.273 1.574-1.574c.235-.234.516-.347.852-.347.332 0 .617.113.847.347l1.903 1.903c.234.23.344.511.336.835a1.342 1.342 0 0 1-.336.864ZM4.5 20.398a.864.864 0 0 1-.637-.261.864.864 0 0 1-.261-.637v-1.95c0-.234.039-.46.125-.675a1.72 1.72 0 0 1 .398-.602l6.074-6.074 3.602 3.602-6.074 6.074a1.72 1.72 0 0 1-.602.398 1.804 1.804 0 0 1-.676.125Zm0 0"></path></g>
      <g id="ink-pen-filled"><path d="m15.05 12.55-3.6-3.6 2.152-2.15-1.278-1.277-4.398 4.403a.857.857 0 0 1-.625.273.857.857 0 0 1-.625-.273.88.88 0 0 1-.278-.637c0-.242.094-.457.278-.64l4.398-4.399a1.72 1.72 0 0 1 1.262-.523c.492 0 .914.171 1.266.523l1.273 1.273 1.574-1.574c.235-.234.516-.347.852-.347.332 0 .617.113.847.347l1.903 1.903c.234.23.344.511.336.835a1.342 1.342 0 0 1-.336.864ZM4.5 20.399a.864.864 0 0 1-.637-.261.864.864 0 0 1-.261-.637v-1.95c0-.234.039-.46.125-.675a1.72 1.72 0 0 1 .398-.602l6.05-6.046 3.598 3.597-6.046 6.051a1.72 1.72 0 0 1-.602.398 1.804 1.804 0 0 1-.676.125Zm0 0"></path></g>
      <g id="pen-size-1"><path d="M6.176 17.824A.578.578 0 0 1 6 17.398a.57.57 0 0 1 .176-.421l10.8-10.801A.57.57 0 0 1 17.399 6c.168 0 .309.059.426.176a.578.578 0 0 1 .176.426.57.57 0 0 1-.176.421l-10.8 10.801a.618.618 0 0 1-.45.2.473.473 0 0 1-.398-.2Zm0 0"></path></g>
      <g id="pen-size-2"><path d="M6 17.102c0-.235.09-.442.273-.625L16.477 6.273A.857.857 0 0 1 17.102 6c.23 0 .441.09.625.273a.864.864 0 0 1 .273.625c0 .235-.09.442-.273.625L7.523 17.727a.857.857 0 0 1-.625.273.864.864 0 0 1-.625-.273.864.864 0 0 1-.273-.625Zm0 0"></path></g>
      <g id="pen-size-3"><path d="M6.426 17.574C6.14 17.293 6 16.937 6 16.512c0-.426.14-.778.426-1.063l9-9c.3-.3.656-.449 1.074-.449.418 0 .766.148 1.05.45.282.284.427.636.427 1.062 0 .426-.145.781-.426 1.062l-9 9A1.437 1.437 0 0 1 7.488 18c-.426 0-.781-.14-1.062-.426Zm0 0"></path></g>
      <g id="pen-size-4"><path d="M6 16.203c0-.5.176-.93.523-1.277l8.403-8.403c.347-.347.77-.523 1.27-.523.503 0 .929.172 1.28.52.348.347.524.773.524 1.277 0 .5-.176.93-.523 1.277l-8.403 8.403c-.347.347-.77.523-1.27.523a1.75 1.75 0 0 1-1.28-.52A1.739 1.739 0 0 1 6 16.203Zm0 0"></path></g>
      <g id="pen-size-5"><path d="M5.977 15.602c0-.653.238-1.22.722-1.704L13.9 6.7c.484-.484 1.054-.722 1.714-.722.657 0 1.219.238 1.688.722.484.485.722 1.051.722 1.7 0 .652-.238 1.218-.722 1.703L10.1 17.3c-.484.484-1.05.722-1.703.722-.648 0-1.214-.238-1.699-.722-.484-.485-.722-1.051-.722-1.7Zm0 0"></path></g>
      <g id="signature"><path d="M14 12.824c1.215-.914 2.188-1.941 2.914-3.074C17.637 8.617 18 7.484 18 6.352c0-.52-.086-.907-.262-1.165-.175-.257-.437-.386-.789-.386-.847 0-1.57.625-2.16 1.875-.594 1.25-.89 2.765-.89 4.55 0 .297.011.583.027.848.015.266.039.516.074.75Zm-9.7 3.352a.816.816 0 0 1-.624.262.907.907 0 0 1-.625-.29.874.874 0 0 1-.278-.636c0-.242.094-.453.278-.637l1.074-1.074-1.102-1.102a.83.83 0 0 1-.261-.636.919.919 0 0 1 .289-.637.874.874 0 0 1 .636-.278c.243 0 .454.094.637.278l1.074 1.097L6.5 11.426a.874.874 0 0 1 .637-.278c.242 0 .453.094.636.278a.874.874 0 0 1 .278.636.874.874 0 0 1-.278.637l-1.097 1.102 1.097 1.097a.868.868 0 0 1 .278.625.862.862 0 0 1-.278.625.874.874 0 0 1-.636.278.874.874 0 0 1-.637-.278l-1.102-1.074Zm11.075.625c-.484 0-.918-.11-1.3-.324a3.158 3.158 0 0 1-1-.926c-.282.148-.567.289-.848.426-.286.132-.579.265-.875.398a.85.85 0 0 1-.704 0 .83.83 0 0 1-.472-.5.818.818 0 0 1 .05-.688c.114-.226.29-.386.524-.488.285-.117.559-.242.824-.375.266-.133.535-.273.801-.426a8.678 8.678 0 0 1-.227-1.234 13.629 13.629 0 0 1-.074-1.437c.016-2.454.473-4.434 1.364-5.954C14.328 3.758 15.5 3 16.948 3c.903 0 1.602.297 2.102.887.5.593.75 1.414.75 2.465 0 1.515-.45 2.984-1.352 4.41-.898 1.425-2.164 2.703-3.8 3.84.117.132.238.23.363.296a.927.927 0 0 0 .437.102c.403 0 .852-.2 1.352-.602.5-.398.972-.949 1.426-1.648a.984.984 0 0 1 .562-.438.995.995 0 0 1 .711.04.867.867 0 0 1 .488.5c.09.23.114.472.063.722a4.15 4.15 0 0 0-.074.778c0 .25.03.457.097.625.102-.051.223-.13.363-.239.141-.11.29-.23.438-.363a.977.977 0 0 1 1.3-.102c.2.153.313.352.337.602a.762.762 0 0 1-.239.648 5.377 5.377 0 0 1-1.199.938c-.398.227-.773.34-1.125.34-.367 0-.695-.121-.988-.363a2.073 2.073 0 0 1-.637-.989c-.484.485-.969.828-1.46 1.04a3.812 3.812 0 0 1-1.489.312ZM3.863 20.137a.864.864 0 0 1-.261-.637c0-.25.086-.46.261-.637a.864.864 0 0 1 .637-.261c.25 0 .46.085.637.261a.864.864 0 0 1 .261.637c0 .25-.085.46-.261.637a.864.864 0 0 1-.637.261.864.864 0 0 1-.637-.261Zm3.75 0a.864.864 0 0 1-.261-.637c0-.25.085-.46.261-.637a.864.864 0 0 1 .637-.261c.25 0 .46.085.637.261a.864.864 0 0 1 .261.637c0 .25-.085.46-.261.637a.864.864 0 0 1-.637.261.864.864 0 0 1-.637-.261Zm3.75 0a.864.864 0 0 1-.261-.637c0-.25.085-.46.261-.637a.864.864 0 0 1 .637-.261c.25 0 .46.085.637.261a.864.864 0 0 1 .261.637c0 .25-.085.46-.261.637a.864.864 0 0 1-.637.261.864.864 0 0 1-.637-.261Zm3.75 0a.864.864 0 0 1-.261-.637c0-.25.085-.46.261-.637a.864.864 0 0 1 .637-.261c.25 0 .46.085.637.261a.864.864 0 0 1 .261.637c0 .25-.085.46-.261.637a.864.864 0 0 1-.637.261.864.864 0 0 1-.637-.261Zm3.75 0a.864.864 0 0 1-.261-.637c0-.25.085-.46.261-.637a.864.864 0 0 1 .637-.261c.25 0 .46.085.637.261a.864.864 0 0 1 .261.637c0 .25-.085.46-.261.637a.864.864 0 0 1-.637.261.864.864 0 0 1-.637-.261Zm0 0"></path></g>
      <g id="strikethrough-s"><path d="M12.148 19.102a5.1 5.1 0 0 1-2.671-.739A4.94 4.94 0 0 1 7.59 16.32a.913.913 0 0 1-.04-.77c.102-.265.286-.464.552-.6.28-.134.566-.15.859-.048.289.102.516.293.68.575.265.468.625.843 1.078 1.125.453.28.945.421 1.48.421.668 0 1.242-.214 1.727-.648.484-.434.722-.973.722-1.617 0-.305.106-.563.317-.77.207-.21.46-.312.762-.312.3 0 .558.105.773.312.215.211.324.465.324.766v.27c0 1.195-.469 2.171-1.402 2.933-.938.762-2.027 1.145-3.274 1.145Zm-8.847-7.204a.884.884 0 0 1-.903-.894c0-.254.086-.465.262-.64a.86.86 0 0 1 .64-.262h17.4a.884.884 0 0 1 .902.894.866.866 0 0 1-.262.64.86.86 0 0 1-.64.262Zm5.176-3.773a.969.969 0 0 1-.5-.648 1.11 1.11 0 0 1 .125-.829 3.36 3.36 0 0 1 1.636-1.484 5.57 5.57 0 0 1 2.254-.465c.703 0 1.371.121 1.996.364a3.757 3.757 0 0 1 1.586 1.164.874.874 0 0 1 .215.722 1.087 1.087 0 0 1-.39.676c-.231.184-.5.262-.797.238a1.179 1.179 0 0 1-.778-.39 2.463 2.463 0 0 0-.812-.575 2.407 2.407 0 0 0-.961-.199c-.434 0-.84.086-1.215.25-.375.168-.66.434-.86.801a.99.99 0 0 1-.664.5 1.14 1.14 0 0 1-.835-.125Zm0 0"></path></g>
      <g id="text-fields"><path d="M7.55 18.852A1.162 1.162 0 0 1 7.2 18V7.2H3.601c-.336 0-.618-.118-.852-.348A1.162 1.162 0 0 1 2.398 6c0-.332.118-.617.352-.852.234-.23.516-.347.852-.347h9.597c.336 0 .617.117.852.347.234.235.347.52.347.852 0 .332-.113.617-.347.852-.235.23-.516.347-.852.347H9.602V18c0 .332-.118.617-.352.852-.234.23-.516.347-.852.347-.332 0-.613-.117-.847-.347Zm9 0A1.162 1.162 0 0 1 16.2 18v-6h-1.802c-.332 0-.613-.117-.847-.352a1.147 1.147 0 0 1-.352-.847c0-.336.117-.617.352-.852a1.15 1.15 0 0 1 .847-.347h6c.336 0 .618.113.852.347.234.235.352.516.352.852 0 .332-.118.617-.352.847a1.156 1.156 0 0 1-.852.352h-1.796v6c0 .332-.118.617-.352.852-.234.23-.516.347-.852.347-.332 0-.613-.117-.847-.347Zm0 0"></path></g>
    </defs>
    </svg>
  </cr-iconset>



  <cr-iconset size="20" name="pdf-save-to-drive">
    <svg>
      <defs>
      <g id="add-to-drive"><path d="M5.938 15.5h4.125l-2.876-5H5.356l-1.168 2c-.18.32-.269.652-.269 1s.09.68.27 1c.18.32.425.566.742.738a2.02 2.02 0 0 0 1.008.262ZM10 12.395l1.082-1.895H8.918ZM6.23 9h5.707l.918-1.582L11.73 5.5a1.913 1.913 0 0 0-.726-.738 1.96 1.96 0 0 0-1-.262c-.363 0-.7.086-1.004.262a1.923 1.923 0 0 0-.73.738Zm4.5 8H5.937a3.44 3.44 0 0 1-1.753-.469 3.536 3.536 0 0 1-1.29-1.285 3.427 3.427 0 0 1-.476-1.75c0-.621.16-1.203.477-1.746l4.085-7a3.505 3.505 0 0 1 1.282-1.281A3.384 3.384 0 0 1 10 3c.625 0 1.203.156 1.738.469.535.312.965.738 1.282 1.281l3.937 6.75a4.373 4.373 0 0 0-2-.457L13.73 8.918l-2.023 3.52a4.723 4.723 0 0 0-.895 1.386 4.235 4.235 0 0 0-.332 1.676 4.514 4.514 0 0 0 .25 1.5Zm3.524-.754H12.75a.73.73 0 0 1-.535-.219.719.719 0 0 1-.215-.53c0-.212.07-.392.215-.532a.727.727 0 0 1 .535-.215h1.5v-1.496c0-.211.07-.39.215-.535a.716.716 0 0 1 .531-.219c.211 0 .387.07.531.215a.73.73 0 0 1 .22.535v1.504h1.503c.21 0 .39.074.535.219.145.144.215.32.215.53 0 .212-.07.392-.215.532a.727.727 0 0 1-.535.215h-1.5v1.496c0 .211-.07.39-.215.535a.716.716 0 0 1-.531.219.719.719 0 0 1-.531-.215.73.73 0 0 1-.22-.535Zm-.524-7.328Zm0 0"></path></g>
      <g id="arrow-upward-alt"><path d="m9.25 8.875-1.668 1.668a.725.725 0 0 1-.531.227.73.73 0 0 1-.531-.227.73.73 0 0 1-.227-.531c0-.203.074-.38.227-.532l2.96-2.96a.712.712 0 0 1 .52-.227c.195 0 .367.074.52.227l2.96 2.96a.712.712 0 0 1 .227.52.712.712 0 0 1-.227.52.729.729 0 0 1-1.063 0l-1.667-1.645v5.375a.728.728 0 0 1-.219.531A.728.728 0 0 1 10 15a.728.728 0 0 1-.531-.219.728.728 0 0 1-.219-.531Zm0 0"></path></g>
      <g id="cancel"><path d="m10 11.063 2.418 2.417a.702.702 0 0 0 .531.22.78.78 0 0 0 .531-.243.725.725 0 0 0 .227-.531.73.73 0 0 0-.227-.531L11.062 10l2.418-2.418a.725.725 0 0 0 .227-.531.73.73 0 0 0-.227-.531.73.73 0 0 0-.53-.227.725.725 0 0 0-.532.227L10 8.938 7.582 6.52a.712.712 0 0 0-.52-.227.712.712 0 0 0-.519.227.729.729 0 0 0 0 1.063l2.394 2.417-2.417 2.418a.689.689 0 0 0-.22.52c.009.195.09.367.243.519a.729.729 0 0 0 1.062 0ZM10 18a7.78 7.78 0 0 1-3.105-.625 8.068 8.068 0 0 1-2.551-1.719 8.068 8.068 0 0 1-1.719-2.55A7.78 7.78 0 0 1 2 10c0-1.11.207-2.148.625-3.113a8.122 8.122 0 0 1 1.719-2.543c.73-.73 1.578-1.301 2.55-1.719A7.78 7.78 0 0 1 10 2a7.75 7.75 0 0 1 3.113.625 8.122 8.122 0 0 1 2.543 1.719c.73.73 1.301 1.578 1.719 2.543A7.75 7.75 0 0 1 18 10a7.78 7.78 0 0 1-.625 3.105 8.068 8.068 0 0 1-1.719 2.551c-.73.73-1.578 1.301-2.543 1.719A7.75 7.75 0 0 1 10 18Zm0-1.5c1.805 0 3.34-.633 4.605-1.895C15.867 13.34 16.5 11.805 16.5 10c0-1.805-.633-3.34-1.895-4.605C13.34 4.133 11.805 3.5 10 3.5c-1.805 0-3.34.633-4.605 1.895C4.133 6.66 3.5 8.195 3.5 10c0 1.805.633 3.34 1.895 4.605C6.66 15.867 8.195 16.5 10 16.5Zm0-6.5Zm0 0"></path></g>
      <g id="drive-pdf-filled"><path d="M13.742 10.66h.504a.492.492 0 0 0 .363-.144.474.474 0 0 0 .141-.348.477.477 0 0 0-.14-.352.477.477 0 0 0-.36-.144h-.5V9h.5a.477.477 0 0 0 .36-.145.492.492 0 0 0 .14-.355.492.492 0 0 0-.14-.355.477.477 0 0 0-.36-.145h-.5a.963.963 0 0 0-.71.29.963.963 0 0 0-.29.71v2.5c0 .145.047.266.145.36.097.093.214.14.355.14.14 0 .254-.047.352-.14a.498.498 0 0 0 .14-.364Zm-7.492.008H7c.285 0 .52-.098.71-.29a.97.97 0 0 0 .29-.71V9a.963.963 0 0 0-.29-.71A.963.963 0 0 0 7 8H5.918a.642.642 0 0 0-.477.191.64.64 0 0 0-.191.473v2.828a.492.492 0 0 0 .5.508c.14 0 .258-.047.355-.14a.477.477 0 0 0 .145-.36Zm0-1V9H7v.668ZM10.75 12c.285 0 .52-.098.71-.29a.963.963 0 0 0 .29-.71V9a.963.963 0 0 0-.29-.71.963.963 0 0 0-.71-.29H9.187c-.062 0-.109.016-.14.047-.031.031-.047.078-.047.14v3.626a.2.2 0 0 0 .047.136c.031.035.078.051.14.051ZM10 11V9h.75v2Zm-5.5 6c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 3 15.5v-11c0-.414.148-.766.441-1.059A1.443 1.443 0 0 1 4.5 3h11c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059v11c0 .414-.148.766-.441 1.059A1.443 1.443 0 0 1 15.5 17Zm0 0"></path></g>
    </defs>
    </svg>
  </cr-iconset>

`;
}
else {
    div$2.innerHTML = getTrustedHTML `<cr-iconset size="20" name="pdf">
  <svg>
    <defs>
      <g id="add" viewBox="0 -960 960 960"><path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z"></path></g>
      <g id="attach-file" viewBox="0 -960 960 960"><path d="M696-312q0 89.86-63.07 152.93Q569.86-96 480-96q-91 0-153.5-65.5T264-319v-389q0-65 45.5-110.5T420-864q66 0 111 48t45 115v365q0 40.15-27.93 68.07Q520.15-240 480-240q-41 0-68.5-29.09T384-340v-380h72v384q0 10.4 6.8 17.2 6.8 6.8 17.2 6.8 10.4 0 17.2-6.8 6.8-6.8 6.8-17.2v-372q0-35-24.5-59.5T419.8-792q-35.19 0-59.5 25.5Q336-741 336-706v394q0 60 42 101.5T480-168q60 1 102-43t42-106v-403h72v408Z"></path></g>
      <g id="check-small" viewBox="0 -960 960 960"><path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z"></path></g>
      <g id="fit-page-height" viewBox="0 -960 960 960"><path d="M263.72-96Q234-96 213-117.15T192-168v-624q0-29.7 21.16-50.85Q234.32-864 264.04-864h432.24Q726-864 747-842.85T768-792v624q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72ZM696-168v-624H264v624h432Zm0-624H264h432ZM360-600h240L480-720 360-600Zm120 360 120-120H360l120 120Z"></path></g>
      <g id="fit-page-width" viewBox="0 -960 960 960"><path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm624-504H168v432h624v-432Zm-624 0v432-432Zm192 336v-240L240-480l120 120Zm360-120L600-600v240l120-120Z"></path></g>
      <g id="fullscreen-exit" viewBox="0 -960 960 960"><path d="M264-144v-120H144v-72h192v192h-72Zm360 0v-192h192v72H696v120h-72ZM144-624v-72h120v-120h72v192H144Zm480 0v-192h72v120h120v72H624Z"></path></g>
      <g id="image" viewBox="0 -960 960 960"><path d="M216-144q-29.7 0-50.85-21.5Q144-187 144-216v-528q0-29 21.15-50.5T216-816h528q29.7 0 50.85 21.5Q816-773 816-744v528q0 29-21.15 50.5T744-144H216Zm0-72h528v-528H216v528Zm48-72h432L552-480 444-336l-72-96-108 144Zm-48 72v-528 528Z"></path></g>
      <g id="list-alt" viewBox="0 -960 960 960"><path d="M323.79-288q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-156q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-156q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM432-288h240v-72H432v72Zm0-156h240v-72H432v72Zm0-156h240v-72H432v72ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z"></path></g>
      <g id="menu" viewBox="0 -960 960 960"><path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z"></path></g>
      <g id="more-vert" viewBox="0 -960 960 960"><path d="M479.79-192Q450-192 429-213.21t-21-51Q408-294 429.21-315t51-21Q510-336 531-314.79t21 51Q552-234 530.79-213t-51 21Zm0-216Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm0-216Q450-624 429-645.21t-21-51Q408-726 429.21-747t51-21Q510-768 531-746.79t21 51Q552-666 530.79-645t-51 21Z"></path></g>
      <g id="print" viewBox="0 -960 960 960"><path d="M648-624v-120H312v120h-72v-192h480v192h-72Zm-480 72h625-625Zm539.79 96q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM648-216v-144H312v144h336Zm72 72H240v-144H96v-240q0-40 28-68t68-28h576q40 0 68 28t28 68v240H720v144Zm73-216v-153.67Q793-530 781-541t-28-11H206q-16.15 0-27.07 11.04Q168-529.92 168-513.6V-360h72v-72h480v72h73Z"></path></g>
      <g id="redo" viewBox="0 -960 960 960"><path d="M384-192q-80 0-136-56t-56-136q0-80 56-136t136-56h246l-93-93 51-51 180 180-180 180-51-51 93-93H384q-50 0-85 35t-35 85q0 50 35 85t85 35h288v72H384Z"></path></g>
      <g id="remove" viewBox="0 -960 960 960"><path d="M232-444v-72h496v72H232Z"></path></g>
      <g id="rotate-90-degrees-ccw" viewBox="0 -960 960 960"><path d="M528-84q-52 0-98.5-14.5T343-140l52-52q29 17 63 26.5t70 9.5q109 0 186.5-77.5T792-420q0-109-77.5-187.5T522-684l57 57-51 51-144-144 144-144 51 51-57 57q144-3 243 96.5T864-420q0 70-26.5 131t-72 106.5Q720-137 659-110.5T528-84Zm-240-96L48-420l240-240 240 240-240 240Zm0-102 138-138-138-138-138 138 138 138Zm0-138Z"></path></g>
      <g id="undo" viewBox="0 -960 960 960"><path d="M288-192v-72h288q50 0 85-35t35-85q0-50-35-85t-85-35H330l93 93-51 51-180-180 180-180 51 51-93 93h246q80 0 136 56t56 136q0 80-56 136t-136 56H288Z"></path></g>
    </defs>
  </svg>
</cr-iconset>

<cr-iconset size="24" name="pdf-glic">
  <svg>
    <defs>
      <g id="summarize-auto-2" viewBox="0 -960 960 960"><path d="M280-520v-80h320v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-520q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600q17 0 28.5 11.5T200-560q0 17-11.5 28.5T160-520Zm0 160q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440q17 0 28.5 11.5T200-400q0 17-11.5 28.5T160-360Zm0 160q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280q17 0 28.5 11.5T200-240q0 17-11.5 28.5T160-200Zm580-360q-1 0-8-6-16-61-60.5-105.5T566-732q-2-1-6-8 0-2 6-8 61-16 105.5-60.5T732-914q1-2 8-6 2 0 8 6 17 61 61 105.5T914-748q2 0 6 8 0 1-6 8-61 16-105.5 60.5T748-566q0 2-8 6Z"></path></g>
    </defs>
  </svg>
</cr-iconset>


  <cr-iconset size="24" name="pdf-ink">
    <svg>
      <defs>
      <g id="format-align-center" viewBox="0 -960 960 960"><path d="M120-120v-80h720v80H120Zm160-160v-80h400v80H280ZM120-440v-80h720v80H120Zm160-160v-80h400v80H280ZM120-760v-80h720v80H120Z"></path></g>
      <g id="format-align-left" viewBox="0 -960 960 960"><path d="M120-120v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Z"></path></g>
      <g id="format-align-right" viewBox="0 -960 960 960"><path d="M120-760v-80h720v80H120Zm240 160v-80h480v80H360ZM120-440v-80h720v80H120Zm240 160v-80h480v80H360ZM120-120v-80h720v80H120Z"></path></g>
      <g id="format-bold" viewBox="0 -960 960 960"><path d="M272-200v-560h221q65 0 120 40t55 111q0 51-23 78.5T602-491q25 11 55.5 41t30.5 90q0 89-65 124.5T501-200H272Zm121-112h104q48 0 58.5-24.5T566-372q0-11-10.5-35.5T494-432H393v120Zm0-228h93q33 0 48-17t15-38q0-24-17-39t-44-15h-95v109Z"></path></g>
      <g id="format-italic" viewBox="0 -960 960 960"><path d="M200-200v-100h160l120-360H320v-100h400v100H580L460-300h140v100H200Z"></path></g>
      <g id="format-underlined" viewBox="0 -960 960 960"><path d="M200-120v-80h560v80H200Zm280-160q-101 0-157-63t-56-167v-330h103v336q0 56 28 91t82 35q54 0 82-35t28-91v-336h103v330q0 104-56 167t-157 63Z"></path></g>
      <g id="gesture" viewBox="0 -960 960 960"><path d="M547-144q-46 0-77-32t-31-80q0-69 62.5-127.5T649-454q-7-48-26-73t-49-25q-35 0-74.5 33.5T418-420q-44 68-85 100t-83 32q-45 0-72.5-31.5T150-402q0-42 20-90.5T231-599q29-41 43.5-70.5T289-719q0-11-4.5-17.5T272-743q-11 0-29 13.5T195-686l-51-50q44-44 73-62t56-18q37 0 62 27t25 68q0 33-19 75.5T287-555q-32 44-49 81.5T221-406q0 20 9 33t23 13q12 0 23.5-6.5T304-390q11-11 23.5-27.5T354-455q57-85 112-127t109-42q60 0 100 46t46 122h95v72h-92q0 95-53.5 167.5T547-144Zm3-71q37 0 69.5-53T652-381q-53 9-97.5 47.5T510-258q0 18 11.5 30.5T550-215Z"></path></g>
      <g id="highlighter-size-1" viewBox="0 -960 960 960"><path d="m268-212-56-56q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t28.5 12l56 56q12 12 12 28.5T748-635L324-212q-11 11-28 11t-28-11Z"></path></g>
      <g id="highlighter-size-2" viewBox="0 -960 960 960"><path d="m282-198-84-84q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t28.5 12l84 85q11 11 11 28t-11 28L339-198q-12 12-28.5 12T282-198Z"></path></g>
      <g id="highlighter-size-3" viewBox="0 -960 960 960"><path d="M310-170 169-311q-11-11-11-28t11-28l423-424q12-12 29-12t28 12l141 142q11 11 11 28t-11 28L367-170q-12 12-28.5 12T310-170Z"></path></g>
      <g id="highlighter-size-4" viewBox="0 -960 960 960"><path d="M353-127 127-353q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t27.5 12l227 226q12 12 12 28.5T833-550L410-127q-12 12-28.5 12T353-127Z"></path></g>
      <g id="highlighter-size-5" viewBox="0 -960 960 960"><path d="M410-70 70-410q-11-11-11-28t11-28l424-424q11-11 27.5-11t28.5 12l340 339q11 11 11 28t-11 28L466-70q-11 11-28 11t-28-11Z"></path></g>
      <g id="ink-eraser" viewBox="0 -960 960 960"><path d="M672-264h192v72H600l72-72Zm-437 72L117-310q-21-21-21.5-50.5T117-412l431-431q22-22 51-22t51.27 22.27L843-650q21 21 21.5 50.5T843-548L487-192H235Zm222-72 335-335-193-193-431 431 97 97h192Zm23-216Z"></path></g>
      <g id="ink-eraser-filled" viewBox="0 -960 960 960"><path d="M672-264h192v72H600l72-72Zm-437 72L117-310q-21-21-21.5-50.5T117-412l431-431q22-22 51-22t51 22l193 193q21 21 21.5 50.5T843-548L487-192H235Z"></path></g>
      <g id="ink-highlighter" viewBox="0 -960 960 960"><path d="m548-410-90-91-193 193 91 91 192-193Zm-38-143 90 91 192-192-90-91-192 192Zm-77-24 192 192-218 218q-22 20-50.5 21.5T308-164l-20 20H96l116-116q-21-20-20-49.5t23-49.5l218-218Zm0 0 218-218q21-21 51-21t51 21l90 90q20 22 20 51t-20 51L625-385 433-577Z"></path></g>
      <g id="ink-highlighter-filled" viewBox="0 -960 960 960"><path d="m407-551 192 192-192 192q-22 20-50.5 21.5T308-164l-20 20H96l116-116q-21-20-20-49.5t23-49.5l192-192Zm52-52 192-192q21-21 51-21t51 21l90 90q20 22 20 51t-20 51L651-411 459-603Z"></path></g>
      <g id="ink-pen" viewBox="0 -960 960 960"><path d="m484-526 42 42 208-208-42-42-208 208ZM216-216h42l218-218-42-42-218 218v42Zm336-192L408-552l136-136-51-51-201 201-51-51 202-201q21-21 50.5-21t50.5 21l51 51 63-63q14-14 34-14t34 14l76 76q14 14 13.5 33.5T802-658L552-408ZM288-144H144v-144l264-264 144 144-264 264Z"></path></g>
      <g id="ink-pen-filled" viewBox="0 -960 960 960"><path d="M602-458 458-602l86-86-51-51-201 201-51-51 202-201q21-21 50.5-21t50.5 21l51 51 63-63q14-14 34-14t34 14l76 76q14 14 13.5 33.5T802-658L602-458ZM288-144H144v-144l263-263 144 144-263 263Z"></path></g>
      <g id="pen-size-1" viewBox="0 -960 960 960"><path d="M199-199q-9-9-9-21t9-21l520-520q9-9 21-9t21 9q9 9 9 21t-9 21L241-199q-9 9-21 9t-21-9Z"></path></g>
      <g id="pen-size-2" viewBox="0 -960 960 960"><path d="M212-212q-11-11-11-28t11-28l480-480q11-12 27.5-12t28.5 12q11 11 11 28t-11 28L268-212q-11 11-28 11t-28-11Z"></path></g>
      <g id="pen-size-3" viewBox="0 -960 960 960"><path d="M218-218q-17-17-17-42t17-42l440-440q17-18 42-17.5t42 17.5q17 17 17.5 42T742-658L302-218q-17 17-42 17.5T218-218Z"></path></g>
      <g id="pen-size-4" viewBox="0 -960 960 960"><path d="M229-229q-29-29-29-71t29-71l360-360q29-29 71-29t71 29q29 29 29 71t-29 71L371-229q-29 29-71 29t-71-29Z"></path></g>
      <g id="pen-size-5" viewBox="0 -960 960 960"><path d="M235-235q-35-35-35-85t35-85l320-320q35-35 85-35t85 35q35 35 35 85t-35 85L405-235q-35 35-85 35t-85-35Z"></path></g>
      <g id="signature" viewBox="0 -960 960 960"><path d="M563-491q73-54 114-118.5T718-738q0-32-10.5-47T679-800q-47 0-83 79.5T560-541q0 14 .5 26.5T563-491ZM164-308q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l36 36 36-36q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36 36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36-36 36Zm454-12q-30 0-55-11.5T520-369q-16 8-33 16l-34 16q-16 7-31.5.5T400-359q-6-16 1.5-31t23.5-22q17-8 33-15.5t31-15.5q-5-22-7.5-48t-2.5-56q0-144 57-238.5T679-880q52 0 85 38.5T797-734q0 86-54.5 170T591-413q7 7 14.5 10.5T621-399q21 0 49-23t54-62q10-14 25.5-19.5T780-502q15 8 22 23.5t4 32.5q-2 12-2 23t3 21q5-2 11.5-6.5T832-420q12-11 28.5-12.5T890-424q14 11 15 27t-10 27q-23 23-48.5 36.5T798-320q-21 0-37.5-12.5T733-371q-28 25-57 38t-58 13ZM131.5-131.5Q120-143 120-160t11.5-28.5Q143-200 160-200t28.5 11.5Q200-177 200-160t-11.5 28.5Q177-120 160-120t-28.5-11.5Zm160 0Q280-143 280-160t11.5-28.5Q303-200 320-200t28.5 11.5Q360-177 360-160t-11.5 28.5Q337-120 320-120t-28.5-11.5Zm160 0Q440-143 440-160t11.5-28.5Q463-200 480-200t28.5 11.5Q520-177 520-160t-11.5 28.5Q497-120 480-120t-28.5-11.5Zm160 0Q600-143 600-160t11.5-28.5Q623-200 640-200t28.5 11.5Q680-177 680-160t-11.5 28.5Q657-120 640-120t-28.5-11.5Zm160 0Q760-143 760-160t11.5-28.5Q783-200 800-200t28.5 11.5Q840-177 840-160t-11.5 28.5Q817-120 800-120t-28.5-11.5Z"></path></g>
      <g id="strikethrough-s" viewBox="0 -960 960 960"><path d="M486-160q-63 0-116.5-33.5T285-283q-9-16-2.5-33.5T306-343q18-10 37.5-3.5T374-322q18 30 48.5 48t65.5 18q44 0 76.5-27t32.5-69q0-20 14-34t34-14q20 0 34.5 14t14.5 34v12q0 79-62.5 129.5T486-160ZM120-480q-17 0-28.5-11.5T80-520q0-17 11.5-28.5T120-560h720q17 0 28.5 11.5T880-520q0 17-11.5 28.5T840-480H120Zm208-165q-17-10-23-29.5t4-36.5q25-47 72-71t101-24q48 0 90.5 20t71.5 58q11 14 7 32t-19 29q-17 12-36.5 9T562-677q-15-17-35-25t-43-8q-27 0-52 11t-38 34q-10 18-29.5 24t-36.5-4Z"></path></g>
      <g id="text-fields" viewBox="0 -960 960 960"><path d="M280-160v-520H80v-120h520v120H400v520H280Zm360 0v-320H520v-120h360v120H760v320H640Z"></path></g>
    </defs>
    </svg>
  </cr-iconset>



  <cr-iconset size="20" name="pdf-save-to-drive">
    <svg>
      <defs>
      <g id="add-to-drive" viewBox="0 -960 960 960"><path d="M271-200h197L330-440h-93l-53 91q-14 23-13.5 49.5T184-250q13 23 36.5 36.5T271-200Zm209-140 58-100H422l58 100ZM283-520h301l46-80-64-110q-14-23-36.5-36.5T480-760q-27 0-50 13.5T393-710L283-520Zm249 400H271q-49 0-91-24t-66-66q-24-42-24-90t24-90l210-360q24-42 66-66t90-24q48 0 90 24t66 66l187 320q-24-6-48.5-8t-48.5 2l-50-85-90 156q-32 32-49.5 75T519-198q0 20 3.5 40t9.5 38Zm188 80v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-44-481Z"></path></g>
      <g id="arrow-upward-alt" viewBox="0 -960 960 960"><path d="M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"></path></g>
      <g id="cancel" viewBox="0 -960 960 960"><path d="m339-288 141-141 141 141 51-51-141-141 141-141-51-51-141 141-141-141-51 51 141 141-141 141 51 51ZM480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"></path></g>
      <g id="drive-pdf-filled" viewBox="0 -960 960 960"><path d="M612-384h48v-64h48v-48h-48v-32h48v-48h-96v192Zm-360 0h48v-64h36q20.4 0 34.2-13.8Q384-475.6 384-496v-32q0-20.4-13.8-34.2Q356.4-576 336-576h-84v192Zm48-112v-32h36v32h-36Zm132 112h84q20.4 0 34.2-13.8Q564-411.6 564-432v-96q0-20.4-13.8-34.2Q536.4-576 516-576h-84v192Zm48-48v-96h36v96h-36ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Z"></path></g>
    </defs>
    </svg>
  </cr-iconset>

`;
}
const iconsets$2 = div$2.querySelectorAll('cr-iconset');
for (const iconset of iconsets$2) {
    document.head.appendChild(iconset);
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Handles events specific to the PDF viewer and logs the corresponding metrics.
/**
 * These values are persisted to logs. Entries should not be renumbered, removed
 * or reused.
 */
var PostMessageDataType;
(function (PostMessageDataType) {
    // LINT.IfChange(PostMessageDataType)
    PostMessageDataType[PostMessageDataType["GET_SELECTED_TEXT"] = 0] = "GET_SELECTED_TEXT";
    PostMessageDataType[PostMessageDataType["PRINT"] = 1] = "PRINT";
    PostMessageDataType[PostMessageDataType["SELECT_ALL"] = 2] = "SELECT_ALL";
    // LINT.ThenChange(//tools/metrics/histograms/metadata/pdf/enums.xml:PDFPostMessageDataType)
    // Must be the last one.
    PostMessageDataType[PostMessageDataType["COUNT"] = 3] = "COUNT";
})(PostMessageDataType || (PostMessageDataType = {}));
/**
 * Records when the zoom mode is changed to fit a FittingType.
 * @param fittingType the new FittingType.
 */
function recordFitTo(fittingType) {
    if (fittingType === FittingType.FIT_TO_PAGE) {
        record(UserAction.FIT_TO_PAGE);
    }
    else if (fittingType === FittingType.FIT_TO_WIDTH) {
        record(UserAction.FIT_TO_WIDTH);
    }
    // There is no user action to do a fit-to-height, this only happens with the
    // the open param "view=FitV".
}
/** Records the given action to chrome.metricsPrivate. */
function record(action) {
    if (!chrome.metricsPrivate) {
        return;
    }
    if (!actionsMetric) {
        actionsMetric = {
            'metricName': 'PDF.Actions',
            'type': chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LOG,
            'min': 1,
            'max': UserAction.NUMBER_OF_ACTIONS,
            'buckets': UserAction.NUMBER_OF_ACTIONS + 1,
        };
    }
    chrome.metricsPrivate.recordValue(actionsMetric, action);
    if (firstMap.has(action)) {
        const firstAction = firstMap.get(action);
        if (!firstActionRecorded.has(firstAction)) {
            chrome.metricsPrivate.recordValue(actionsMetric, firstAction);
            firstActionRecorded.add(firstAction);
        }
    }
}
/** Records the given enumeration to chrome.metricsPrivate. */
function recordEnumeration(enumKey, enumValue, enumSize) {
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordEnumerationValue(enumKey, enumValue, enumSize);
}
function resetForTesting() {
    firstActionRecorded.clear();
    actionsMetric = null;
}
let actionsMetric = null;
const firstActionRecorded = new Set();
/**
 * Keep in sync with the values for enum ChromePDFViewerActions in
 * tools/metrics/histograms/metadata/pdf/enums.xml.
 * These values are persisted to logs. Entries should not be renumbered, removed
 * or reused.
 *
 * User Actions that can be recorded by calling record.
 * The *_FIRST values are recorded automaticlly,
 * eg. record(...ROTATE) will also record ROTATE_FIRST
 * on the first instance.
 */
var UserAction;
(function (UserAction) {
    // Recorded when the document is first loaded. This event serves as
    // denominator to determine percentages of documents in which an action was
    // taken as well as average number of each action per document.
    UserAction[UserAction["DOCUMENT_OPENED"] = 0] = "DOCUMENT_OPENED";
    // Recorded when the document is rotated clockwise or counter-clockwise.
    UserAction[UserAction["ROTATE_FIRST"] = 1] = "ROTATE_FIRST";
    UserAction[UserAction["ROTATE"] = 2] = "ROTATE";
    UserAction[UserAction["FIT_TO_WIDTH_FIRST"] = 3] = "FIT_TO_WIDTH_FIRST";
    UserAction[UserAction["FIT_TO_WIDTH"] = 4] = "FIT_TO_WIDTH";
    UserAction[UserAction["FIT_TO_PAGE_FIRST"] = 5] = "FIT_TO_PAGE_FIRST";
    UserAction[UserAction["FIT_TO_PAGE"] = 6] = "FIT_TO_PAGE";
    // Recorded when a bookmark is followed.
    UserAction[UserAction["FOLLOW_BOOKMARK_FIRST"] = 9] = "FOLLOW_BOOKMARK_FIRST";
    UserAction[UserAction["FOLLOW_BOOKMARK"] = 10] = "FOLLOW_BOOKMARK";
    // Recorded when the page selection is used to navigate to another page.
    UserAction[UserAction["PAGE_SELECTOR_NAVIGATE_FIRST"] = 11] = "PAGE_SELECTOR_NAVIGATE_FIRST";
    UserAction[UserAction["PAGE_SELECTOR_NAVIGATE"] = 12] = "PAGE_SELECTOR_NAVIGATE";
    // Recorded when the user triggers a save of the document.
    UserAction[UserAction["SAVE_FIRST"] = 13] = "SAVE_FIRST";
    UserAction[UserAction["SAVE"] = 14] = "SAVE";
    UserAction[UserAction["PRINT_FIRST"] = 17] = "PRINT_FIRST";
    UserAction[UserAction["PRINT"] = 18] = "PRINT";
    UserAction[UserAction["ENTER_ANNOTATION_MODE_FIRST"] = 19] = "ENTER_ANNOTATION_MODE_FIRST";
    UserAction[UserAction["ENTER_ANNOTATION_MODE"] = 20] = "ENTER_ANNOTATION_MODE";
    UserAction[UserAction["EXIT_ANNOTATION_MODE_FIRST"] = 21] = "EXIT_ANNOTATION_MODE_FIRST";
    UserAction[UserAction["EXIT_ANNOTATION_MODE"] = 22] = "EXIT_ANNOTATION_MODE";
    // Recorded when a pen stroke is made.
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_PEN_FIRST"] = 23] = "ANNOTATE_STROKE_TOOL_PEN_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_PEN"] = 24] = "ANNOTATE_STROKE_TOOL_PEN";
    // Recorded when an eraser stroke is made.
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_ERASER_FIRST"] = 25] = "ANNOTATE_STROKE_TOOL_ERASER_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_ERASER"] = 26] = "ANNOTATE_STROKE_TOOL_ERASER";
    // Recorded when a highlighter stroke is made.
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_HIGHLIGHTER_FIRST"] = 27] = "ANNOTATE_STROKE_TOOL_HIGHLIGHTER_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_HIGHLIGHTER"] = 28] = "ANNOTATE_STROKE_TOOL_HIGHLIGHTER";
    // Recorded when a stroke is made using touch.
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_TOUCH_FIRST"] = 29] = "ANNOTATE_STROKE_DEVICE_TOUCH_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_TOUCH"] = 30] = "ANNOTATE_STROKE_DEVICE_TOUCH";
    // Recorded when a stroke is made using mouse.
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_MOUSE_FIRST"] = 31] = "ANNOTATE_STROKE_DEVICE_MOUSE_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_MOUSE"] = 32] = "ANNOTATE_STROKE_DEVICE_MOUSE";
    // Recorded when a stroke is made using pen.
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_PEN_FIRST"] = 33] = "ANNOTATE_STROKE_DEVICE_PEN_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_PEN"] = 34] = "ANNOTATE_STROKE_DEVICE_PEN";
    // Recorded when two-up view mode is enabled.
    UserAction[UserAction["TWO_UP_VIEW_ENABLE_FIRST"] = 35] = "TWO_UP_VIEW_ENABLE_FIRST";
    UserAction[UserAction["TWO_UP_VIEW_ENABLE"] = 36] = "TWO_UP_VIEW_ENABLE";
    // Recorded when two-up view mode is disabled.
    UserAction[UserAction["TWO_UP_VIEW_DISABLE_FIRST"] = 37] = "TWO_UP_VIEW_DISABLE_FIRST";
    UserAction[UserAction["TWO_UP_VIEW_DISABLE"] = 38] = "TWO_UP_VIEW_DISABLE";
    // Recorded when zoom in button is clicked.
    UserAction[UserAction["ZOOM_IN_FIRST"] = 39] = "ZOOM_IN_FIRST";
    UserAction[UserAction["ZOOM_IN"] = 40] = "ZOOM_IN";
    // Recorded when zoom out button is clicked.
    UserAction[UserAction["ZOOM_OUT_FIRST"] = 41] = "ZOOM_OUT_FIRST";
    UserAction[UserAction["ZOOM_OUT"] = 42] = "ZOOM_OUT";
    // Recorded when the custom zoom input field is modified.
    UserAction[UserAction["ZOOM_CUSTOM_FIRST"] = 43] = "ZOOM_CUSTOM_FIRST";
    UserAction[UserAction["ZOOM_CUSTOM"] = 44] = "ZOOM_CUSTOM";
    // Recorded when a thumbnail is used for navigation.
    UserAction[UserAction["THUMBNAIL_NAVIGATE_FIRST"] = 45] = "THUMBNAIL_NAVIGATE_FIRST";
    UserAction[UserAction["THUMBNAIL_NAVIGATE"] = 46] = "THUMBNAIL_NAVIGATE";
    // Recorded when the user triggers a save of the document and the document
    // has never been modified.
    UserAction[UserAction["SAVE_ORIGINAL_ONLY_FIRST"] = 47] = "SAVE_ORIGINAL_ONLY_FIRST";
    UserAction[UserAction["SAVE_ORIGINAL_ONLY"] = 48] = "SAVE_ORIGINAL_ONLY";
    // Recorded when the user triggers a save of the original document, even
    // though the document has been modified.
    UserAction[UserAction["SAVE_ORIGINAL_FIRST"] = 49] = "SAVE_ORIGINAL_FIRST";
    UserAction[UserAction["SAVE_ORIGINAL"] = 50] = "SAVE_ORIGINAL";
    // Recorded when the user triggers a save of the edited document.
    UserAction[UserAction["SAVE_EDITED_FIRST"] = 51] = "SAVE_EDITED_FIRST";
    UserAction[UserAction["SAVE_EDITED"] = 52] = "SAVE_EDITED";
    // Recorded when the sidenav menu button is clicked.
    UserAction[UserAction["TOGGLE_SIDENAV_FIRST"] = 53] = "TOGGLE_SIDENAV_FIRST";
    UserAction[UserAction["TOGGLE_SIDENAV"] = 54] = "TOGGLE_SIDENAV";
    // Recorded when the thumbnails button in the sidenav is clicked.
    UserAction[UserAction["SELECT_SIDENAV_THUMBNAILS_FIRST"] = 55] = "SELECT_SIDENAV_THUMBNAILS_FIRST";
    UserAction[UserAction["SELECT_SIDENAV_THUMBNAILS"] = 56] = "SELECT_SIDENAV_THUMBNAILS";
    // Recorded when the outline button in the sidenav is clicked.
    UserAction[UserAction["SELECT_SIDENAV_OUTLINE_FIRST"] = 57] = "SELECT_SIDENAV_OUTLINE_FIRST";
    UserAction[UserAction["SELECT_SIDENAV_OUTLINE"] = 58] = "SELECT_SIDENAV_OUTLINE";
    // Recorded when the show/hide annotations overflow menu item is clicked.
    UserAction[UserAction["TOGGLE_DISPLAY_ANNOTATIONS_FIRST"] = 59] = "TOGGLE_DISPLAY_ANNOTATIONS_FIRST";
    UserAction[UserAction["TOGGLE_DISPLAY_ANNOTATIONS"] = 60] = "TOGGLE_DISPLAY_ANNOTATIONS";
    // Recorded when the present menu item is clicked.
    UserAction[UserAction["PRESENT_FIRST"] = 61] = "PRESENT_FIRST";
    UserAction[UserAction["PRESENT"] = 62] = "PRESENT";
    // Recorded when the document properties menu item is clicked.
    UserAction[UserAction["PROPERTIES_FIRST"] = 63] = "PROPERTIES_FIRST";
    UserAction[UserAction["PROPERTIES"] = 64] = "PROPERTIES";
    // Recorded when the attachment button in the sidenav is clicked.
    UserAction[UserAction["SELECT_SIDENAV_ATTACHMENT_FIRST"] = 65] = "SELECT_SIDENAV_ATTACHMENT_FIRST";
    UserAction[UserAction["SELECT_SIDENAV_ATTACHMENT"] = 66] = "SELECT_SIDENAV_ATTACHMENT";
    // Recorded cut/copy/paste/find commands.
    UserAction[UserAction["CUT_FIRST"] = 67] = "CUT_FIRST";
    UserAction[UserAction["CUT"] = 68] = "CUT";
    UserAction[UserAction["COPY_FIRST"] = 69] = "COPY_FIRST";
    UserAction[UserAction["COPY"] = 70] = "COPY";
    UserAction[UserAction["PASTE_FIRST"] = 71] = "PASTE_FIRST";
    UserAction[UserAction["PASTE"] = 72] = "PASTE";
    UserAction[UserAction["FIND_IN_PAGE_FIRST"] = 73] = "FIND_IN_PAGE_FIRST";
    UserAction[UserAction["FIND_IN_PAGE"] = 74] = "FIND_IN_PAGE";
    // Recorded copy/find commands for searchified PDFs.
    UserAction[UserAction["COPY_SEARCHIFIED_FIRST"] = 75] = "COPY_SEARCHIFIED_FIRST";
    UserAction[UserAction["COPY_SEARCHIFIED"] = 76] = "COPY_SEARCHIFIED";
    UserAction[UserAction["FIND_IN_PAGE_SEARCHIFIED_FIRST"] = 77] = "FIND_IN_PAGE_SEARCHIFIED_FIRST";
    UserAction[UserAction["FIND_IN_PAGE_SEARCHIFIED"] = 78] = "FIND_IN_PAGE_SEARCHIFIED";
    // Recorded when the user enters Ink2 annotation mode.
    UserAction[UserAction["ENTER_INK2_ANNOTATION_MODE_FIRST"] = 79] = "ENTER_INK2_ANNOTATION_MODE_FIRST";
    UserAction[UserAction["ENTER_INK2_ANNOTATION_MODE"] = 80] = "ENTER_INK2_ANNOTATION_MODE";
    // Recorded when the user exits Ink2 annotation mode.
    UserAction[UserAction["EXIT_INK2_ANNOTATION_MODE_FIRST"] = 81] = "EXIT_INK2_ANNOTATION_MODE_FIRST";
    UserAction[UserAction["EXIT_INK2_ANNOTATION_MODE"] = 82] = "EXIT_INK2_ANNOTATION_MODE";
    // Recorded when the user triggers a save of the document and the document
    // has been modified by Ink2 annotations.
    UserAction[UserAction["SAVE_WITH_INK2_ANNOTATION_FIRST"] = 83] = "SAVE_WITH_INK2_ANNOTATION_FIRST";
    UserAction[UserAction["SAVE_WITH_INK2_ANNOTATION"] = 84] = "SAVE_WITH_INK2_ANNOTATION";
    // Recorded when the user selects an Ink2 eraser.
    UserAction[UserAction["SELECT_INK2_BRUSH_ERASER_FIRST"] = 85] = "SELECT_INK2_BRUSH_ERASER_FIRST";
    UserAction[UserAction["SELECT_INK2_BRUSH_ERASER"] = 86] = "SELECT_INK2_BRUSH_ERASER";
    // Recorded when the user selects an Ink2 highlighter.
    UserAction[UserAction["SELECT_INK2_BRUSH_HIGHLIGHTER_FIRST"] = 87] = "SELECT_INK2_BRUSH_HIGHLIGHTER_FIRST";
    UserAction[UserAction["SELECT_INK2_BRUSH_HIGHLIGHTER"] = 88] = "SELECT_INK2_BRUSH_HIGHLIGHTER";
    // Recorded when the user selects an Ink2 pen.
    UserAction[UserAction["SELECT_INK2_BRUSH_PEN_FIRST"] = 89] = "SELECT_INK2_BRUSH_PEN_FIRST";
    UserAction[UserAction["SELECT_INK2_BRUSH_PEN"] = 90] = "SELECT_INK2_BRUSH_PEN";
    // Recorded when the user undos an Ink2 action.
    UserAction[UserAction["UNDO_INK2_FIRST"] = 91] = "UNDO_INK2_FIRST";
    UserAction[UserAction["UNDO_INK2"] = 92] = "UNDO_INK2";
    // Recorded when the user redos an Ink2 action.
    UserAction[UserAction["REDO_INK2_FIRST"] = 93] = "REDO_INK2_FIRST";
    UserAction[UserAction["REDO_INK2"] = 94] = "REDO_INK2";
    // Recorded when the user opens the Ink2 side panel.
    UserAction[UserAction["OPEN_INK2_SIDE_PANEL_FIRST"] = 95] = "OPEN_INK2_SIDE_PANEL_FIRST";
    UserAction[UserAction["OPEN_INK2_SIDE_PANEL"] = 96] = "OPEN_INK2_SIDE_PANEL";
    // Recorded when the user opens the Ink2 bottom toolbar.
    UserAction[UserAction["OPEN_INK2_BOTTOM_TOOLBAR_FIRST"] = 97] = "OPEN_INK2_BOTTOM_TOOLBAR_FIRST";
    UserAction[UserAction["OPEN_INK2_BOTTOM_TOOLBAR"] = 98] = "OPEN_INK2_BOTTOM_TOOLBAR";
    // Recorded when the user triggers a save of the searchified document.
    UserAction[UserAction["SAVE_SEARCHIFIED_FIRST"] = 99] = "SAVE_SEARCHIFIED_FIRST";
    UserAction[UserAction["SAVE_SEARCHIFIED"] = 100] = "SAVE_SEARCHIFIED";
    // Recorded when the user enters Ink2 text annotation mode.
    UserAction[UserAction["ENTER_INK2_TEXT_ANNOTATION_MODE_FIRST"] = 101] = "ENTER_INK2_TEXT_ANNOTATION_MODE_FIRST";
    UserAction[UserAction["ENTER_INK2_TEXT_ANNOTATION_MODE"] = 102] = "ENTER_INK2_TEXT_ANNOTATION_MODE";
    // Recorded when the user exits Ink2 text annotation mode.
    UserAction[UserAction["EXIT_INK2_TEXT_ANNOTATION_MODE_FIRST"] = 103] = "EXIT_INK2_TEXT_ANNOTATION_MODE_FIRST";
    UserAction[UserAction["EXIT_INK2_TEXT_ANNOTATION_MODE"] = 104] = "EXIT_INK2_TEXT_ANNOTATION_MODE";
    // Recorded when the user adds a new, non-empty text annotation.
    UserAction[UserAction["ADD_INK2_TEXT_ANNOTATION_FIRST"] = 105] = "ADD_INK2_TEXT_ANNOTATION_FIRST";
    UserAction[UserAction["ADD_INK2_TEXT_ANNOTATION"] = 106] = "ADD_INK2_TEXT_ANNOTATION";
    // Recorded when the user starts adding a text annotation, but did not add any
    // text.
    UserAction[UserAction["ADD_INK2_TEXT_ANNOTATION_ABORTED_FIRST"] = 107] = "ADD_INK2_TEXT_ANNOTATION_ABORTED_FIRST";
    UserAction[UserAction["ADD_INK2_TEXT_ANNOTATION_ABORTED"] = 108] = "ADD_INK2_TEXT_ANNOTATION_ABORTED";
    // Recorded when the user edits a text annotation.
    UserAction[UserAction["EDIT_INK2_TEXT_ANNOTATION_FIRST"] = 109] = "EDIT_INK2_TEXT_ANNOTATION_FIRST";
    UserAction[UserAction["EDIT_INK2_TEXT_ANNOTATION"] = 110] = "EDIT_INK2_TEXT_ANNOTATION";
    // Recorded when the user starts editing a text annotation, but did not change
    // any text.
    UserAction[UserAction["EDIT_INK2_TEXT_ANNOTATION_ABORTED_FIRST"] = 111] = "EDIT_INK2_TEXT_ANNOTATION_ABORTED_FIRST";
    UserAction[UserAction["EDIT_INK2_TEXT_ANNOTATION_ABORTED"] = 112] = "EDIT_INK2_TEXT_ANNOTATION_ABORTED";
    // Recorded when the user deletes a text annotation.
    UserAction[UserAction["DELETE_INK2_TEXT_ANNOTATION_FIRST"] = 113] = "DELETE_INK2_TEXT_ANNOTATION_FIRST";
    UserAction[UserAction["DELETE_INK2_TEXT_ANNOTATION"] = 114] = "DELETE_INK2_TEXT_ANNOTATION";
    // Recorded when the user enters Ink2 signature mode.
    UserAction[UserAction["ENTER_INK2_SIGNATURE_MODE_FIRST"] = 115] = "ENTER_INK2_SIGNATURE_MODE_FIRST";
    UserAction[UserAction["ENTER_INK2_SIGNATURE_MODE"] = 116] = "ENTER_INK2_SIGNATURE_MODE";
    // Recorded when the user exits Ink2 signature mode.
    UserAction[UserAction["EXIT_INK2_SIGNATURE_MODE_FIRST"] = 117] = "EXIT_INK2_SIGNATURE_MODE_FIRST";
    UserAction[UserAction["EXIT_INK2_SIGNATURE_MODE"] = 118] = "EXIT_INK2_SIGNATURE_MODE";
    UserAction[UserAction["NUMBER_OF_ACTIONS"] = 119] = "NUMBER_OF_ACTIONS";
})(UserAction || (UserAction = {}));
function createFirstMap() {
    const entries = Object.entries(UserAction)
        .filter(x => Number.isInteger(x[1]))
        .sort((a, b) => a[1] - b[1]);
    // Exclude the first and last entries (DOCUMENT_OPENED, and NUMBER_OF_ACTIONS)
    // which don't have an equivalent "_FIRST" UserAction.
    const entriesWithFirst = entries.slice(1, entries.length - 1);
    const map = new Map();
    for (let i = 0; i < entriesWithFirst.length - 1; i += 2) {
        map.set(entriesWithFirst[i + 1][1], entriesWithFirst[i][1]);
    }
    return map;
}
// Map from UserAction to the 'FIRST' action. These metrics are recorded
// by PDFMetrics.log the first time each corresponding action occurs.
const firstMap = createFirstMap();

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

// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
function getHtml$3() {
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
        return getHtml$3.bind(this)();
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

let instance$7 = null;
function getCss$5() {
    return instance$7 || (instance$7 = [...[], css `.icon-arrow-back{--cr-icon-image:url(//resources/images/icon_arrow_back_old.svg)}.icon-arrow-dropdown{--cr-icon-image:url(//resources/images/icon_arrow_dropdown_old.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_down_cr23_old.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_up_cr23_old.svg)}.icon-arrow-upward{--cr-icon-image:url(//resources/images/icon_arrow_upward_old.svg)}.icon-arrow-forward{--cr-icon-image:url(//resources/images/icon_arrow_forward_old.svg)}.icon-cancel{--cr-icon-image:url(//resources/images/icon_cancel_old.svg)}.icon-clear{--cr-icon-image:url(//resources/images/icon_clear_old.svg)}.icon-copy-content{--cr-icon-image:url(//resources/images/icon_copy_content_old.svg)}.icon-delete-gray{--cr-icon-image:url(//resources/images/icon_delete_gray_old.svg)}.icon-edit{--cr-icon-image:url(//resources/images/icon_edit_old.svg)}.icon-file{--cr-icon-image:url(//resources/images/icon_filetype_generic_old.svg)}.icon-folder-open{--cr-icon-image:url(//resources/images/icon_folder_open_old.svg)}.icon-picture-delete{--cr-icon-image:url(//resources/images/icon_picture_delete_old.svg)}.icon-expand-less{--cr-icon-image:url(//resources/images/icon_expand_less_old.svg)}.icon-expand-more{--cr-icon-image:url(//resources/images/icon_expand_more_old.svg)}.icon-external{--cr-icon-image:url(//resources/images/open_in_new_old.svg)}.icon-more-vert{--cr-icon-image:url(//resources/images/icon_more_vert_old.svg)}.icon-refresh{--cr-icon-image:url(//resources/images/icon_refresh_old.svg)}.icon-search{--cr-icon-image:url(//resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(//resources/images/icon_settings_old.svg)}.icon-visibility{--cr-icon-image:url(//resources/images/icon_visibility_old.svg)}.icon-visibility-off{--cr-icon-image:url(//resources/images/icon_visibility_off_old.svg)}.subpage-arrow{--cr-icon-image:url(//resources/images/arrow_right_old.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}:host-context([webui-rounded-icons]){.icon-arrow-back{--cr-icon-image:url(//resources/images/icon_arrow_back.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_up_cr23.svg)}.icon-arrow-dropdown{--cr-icon-image:url(//resources/images/icon_arrow_dropdown.svg)}.icon-arrow-forward{--cr-icon-image:url(//resources/images/icon_arrow_forward.svg)}.icon-arrow-upward{--cr-icon-image:url(//resources/images/icon_arrow_upward.svg)}.icon-cancel{--cr-icon-image:url(//resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(//resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(//resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(//resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(//resources/images/icon_edit.svg)}.icon-expand-less{--cr-icon-image:url(//resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(//resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(//resources/images/open_in_new.svg)}.icon-file{--cr-icon-image:url(//resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(//resources/images/icon_folder_open.svg)}.icon-more-vert{--cr-icon-image:url(//resources/images/icon_more_vert.svg)}.icon-picture-delete{--cr-icon-image:url(//resources/images/icon_picture_delete.svg)}.icon-refresh{--cr-icon-image:url(//resources/images/icon_refresh.svg)}.icon-settings{--cr-icon-image:url(//resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(//resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(//resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(//resources/images/arrow_right.svg)}}`]);
}

let instance$6 = null;
function getCss$4() {
    return instance$6 || (instance$6 = [...[getCss$5()], css `.icon-folder-open{--cr-icon-image:url(//resources/brave-icons/folder.svg)}.icon-edit{--cr-icon-image:url(//resources/brave-icons/edit-pencil.svg)}`]);
}

let instance$5 = null;
function getCss$3() {
    return instance$5 || (instance$5 = [...[], css `.cr-scrollable{anchor-name:--cr-scrollable;anchor-scope:--cr-scrollable;container-type:scroll-state;overflow:auto}.cr-scrollable-top,.cr-scrollable-top-shadow,.cr-scrollable-bottom,.cr-scrollable-bottom-shadow{display:none;position:fixed;position-anchor:--cr-scrollable;left:anchor(left);width:anchor-size(width);pointer-events:none;&:where(.force-on){display:block}}.cr-scrollable-top{top:anchor(top);border-top:1px solid var(--cr-scrollable-border-color);@container scroll-state(scrollable:top){display:block}}.cr-scrollable-bottom{bottom:anchor(bottom);border-bottom:1px solid var(--cr-scrollable-border-color);@container scroll-state(scrollable:bottom){display:block}}.cr-scrollable-top-shadow,.cr-scrollable-bottom-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);display:block;height:8px;opacity:0;top:anchor(top);transition:opacity 500ms;z-index:1;&:where(.force-on){opacity:1}}.cr-scrollable-top-shadow{@container scroll-state(scrollable:top){opacity:1}}.cr-scrollable-bottom-shadow{top:auto;bottom:anchor(bottom);transform:scale(-1);@container scroll-state(scrollable:bottom){opacity:1}}`]);
}

let instance$4 = null;
function getCss$2() {
    return instance$4 || (instance$4 = [...[getCss$b(), getCss$4(), getCss$3()], css `dialog{background-color:var(--cr-dialog-background-color,white);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,0.12),0 16px 16px rgba(0,0,0,0.24);color:inherit;line-height:20px;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}:host-context([webui-refresh-2026]){dialog{background-color:var(--cr-dialog-background-color,var(--color-webui-dialog-background))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,0.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:none}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}@container style(--cr-dialog-body-border-top){.cr-scrollable-top{display:block;border-top:var(--cr-dialog-body-border-top)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$2() {
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
        return getCss$2();
    }
    render() {
        return getHtml$2.bind(this)();
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

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ViewMode;
(function (ViewMode) {
    ViewMode["FIT"] = "fit";
    ViewMode["FIT_B"] = "fitb";
    ViewMode["FIT_BH"] = "fitbh";
    ViewMode["FIT_BV"] = "fitbv";
    ViewMode["FIT_H"] = "fith";
    ViewMode["FIT_R"] = "fitr";
    ViewMode["FIT_V"] = "fitv";
    ViewMode["XYZ"] = "xyz";
})(ViewMode || (ViewMode = {}));
const FRAGMENT_DIRECTIVE_DELIMITER = ':~:';
// Parses the open pdf parameters passed in the url to set initial viewport
// settings for opening the pdf.
class OpenPdfParamsParser {
    getNamedDestinationCallback_;
    getPageBoundingBoxCallback_;
    pageCount_;
    viewportDimensions_;
    /**
     * @param getNamedDestinationCallback Function called to fetch information for
     *     a named destination.
     * @param getPageBoundingBoxCallback Function called to fetch information for
     *     a page's bounding box.
     */
    constructor(getNamedDestinationCallback, getPageBoundingBoxCallback) {
        this.getNamedDestinationCallback_ = getNamedDestinationCallback;
        this.getPageBoundingBoxCallback_ = getPageBoundingBoxCallback;
    }
    /**
     * Calculate the zoom level needed for making viewport focus on a rectangular
     * area in the PDF document.
     * @param size The dimensions of the rectangular area to be focused on.
     * @return The zoom level needed for focusing on the rectangular area. A zoom
     *     level of 0 indicates that the zoom level cannot be calculated with the
     *     given information.
     */
    calculateRectZoomLevel_(size) {
        if (size.height === 0 || size.width === 0) {
            return 0;
        }
        assert(this.viewportDimensions_);
        return Math.min(this.viewportDimensions_.height / size.height, this.viewportDimensions_.width / size.width);
    }
    /**
     * Parse zoom parameter of open PDF parameters. The PDF should be opened at
     * the specified zoom level.
     * @return Map with zoom parameters (zoom and position).
     */
    parseZoomParam_(paramValue) {
        const paramValueSplit = paramValue.split(',');
        if (paramValueSplit.length !== 1 && paramValueSplit.length !== 3) {
            return {};
        }
        // User scale of 100 means zoom value of 100% i.e. zoom factor of 1.0.
        const zoomFactor = parseFloat(paramValueSplit[0]) / 100;
        if (Number.isNaN(zoomFactor)) {
            return {};
        }
        // Handle #zoom=scale.
        if (paramValueSplit.length === 1) {
            return { 'zoom': zoomFactor };
        }
        // Handle #zoom=scale,left,top.
        const position = {
            x: parseFloat(paramValueSplit[1]),
            y: parseFloat(paramValueSplit[2]),
        };
        return { 'position': position, 'zoom': zoomFactor };
    }
    /**
     * Parse view parameter of open PDF parameters. The PDF should be opened at
     * the specified fitting type mode and position.
     * @param paramValue Params to parse.
     * @param pageNumber Page number for bounding box, if there is a fit bounding
     *     box param. `pageNumber` is 1-indexed and must be bounded by 1 and the
     *     number of pages in the PDF, inclusive.
     * @return Map with view parameters (view and viewPosition).
     */
    async parseViewParam_(paramValue, pageNumber) {
        assert(pageNumber > 0);
        if (this.pageCount_) {
            assert(pageNumber <= this.pageCount_);
        }
        const viewModeComponents = paramValue.toLowerCase().split(',');
        if (viewModeComponents.length === 0) {
            return {};
        }
        const params = {};
        const viewMode = viewModeComponents[0];
        let acceptsPositionParam = false;
        // Note that `pageNumber` is 1-indexed, but PDF Viewer is 0-indexed.
        switch (viewMode) {
            case ViewMode.FIT:
                params['view'] = FittingType.FIT_TO_PAGE;
                break;
            case ViewMode.FIT_H:
                params['view'] = FittingType.FIT_TO_WIDTH;
                acceptsPositionParam = true;
                break;
            case ViewMode.FIT_V:
                params['view'] = FittingType.FIT_TO_HEIGHT;
                acceptsPositionParam = true;
                break;
            case ViewMode.FIT_B:
                if (this.pageCount_) {
                    params['view'] = FittingType.FIT_TO_BOUNDING_BOX;
                    params['boundingBox'] =
                        await this.getPageBoundingBoxCallback_(pageNumber - 1);
                }
                break;
            case ViewMode.FIT_BH:
                if (this.pageCount_) {
                    params['view'] = FittingType.FIT_TO_BOUNDING_BOX_WIDTH;
                    params['boundingBox'] =
                        await this.getPageBoundingBoxCallback_(pageNumber - 1);
                    acceptsPositionParam = true;
                }
                break;
            case ViewMode.FIT_BV:
                if (this.pageCount_) {
                    params['view'] = FittingType.FIT_TO_BOUNDING_BOX_HEIGHT;
                    params['boundingBox'] =
                        await this.getPageBoundingBoxCallback_(pageNumber - 1);
                    acceptsPositionParam = true;
                }
                break;
            case ViewMode.FIT_R:
            case ViewMode.XYZ:
                // Should have already been handled in `parseNameddestViewParam_()`.
                break;
            // Invalid view parameter, do nothing.
        }
        if (!acceptsPositionParam || viewModeComponents.length === 1) {
            return params;
        }
        const position = parseFloat(viewModeComponents[1]);
        if (!Number.isNaN(position)) {
            params['viewPosition'] = position;
        }
        return params;
    }
    /**
     * Parse view parameters which come from nameddest.
     * @param paramValue Params to parse.
     * @param pageNumber Page number for bounding box, if there is a fit bounding
     *     box param.
     * @return Map with view parameters.
     */
    async parseNameddestViewParam_(paramValue, pageNumber) {
        const viewModeComponents = paramValue.toLowerCase().split(',');
        assert(viewModeComponents.length > 0);
        const viewMode = viewModeComponents[0];
        const params = {};
        if (viewMode === ViewMode.XYZ && viewModeComponents.length === 4) {
            const x = parseFloat(viewModeComponents[1]);
            const y = parseFloat(viewModeComponents[2]);
            const zoom = parseFloat(viewModeComponents[3]);
            // If zoom is originally 0 for the XYZ view, it is guaranteed to be
            // transformed into "null" by the backend.
            assert(zoom !== 0);
            if (!Number.isNaN(zoom)) {
                params['zoom'] = zoom;
            }
            if (!Number.isNaN(x) || !Number.isNaN(y)) {
                params['position'] = { x: x, y: y };
            }
            return params;
        }
        if (viewMode === ViewMode.FIT_R && viewModeComponents.length === 5) {
            assert(this.viewportDimensions_ !== undefined);
            let x1 = parseFloat(viewModeComponents[1]);
            let y1 = parseFloat(viewModeComponents[2]);
            let x2 = parseFloat(viewModeComponents[3]);
            let y2 = parseFloat(viewModeComponents[4]);
            if (!Number.isNaN(x1) && !Number.isNaN(y1) && !Number.isNaN(x2) &&
                !Number.isNaN(y2)) {
                if (x1 > x2) {
                    [x1, x2] = [x2, x1];
                }
                if (y1 > y2) {
                    [y1, y2] = [y2, y1];
                }
                const rectSize = { width: x2 - x1, height: y2 - y1 };
                params['position'] = { x: x1, y: y1 };
                const zoom = this.calculateRectZoomLevel_(rectSize);
                if (zoom !== 0) {
                    params['zoom'] = zoom;
                }
            }
            return params;
        }
        return this.parseViewParam_(paramValue, pageNumber);
    }
    /** Parse the parameters encoded in the fragment of a URL. */
    parseUrlParams_(url) {
        const hash = new URL(url).hash;
        const params = new URLSearchParams(hash.substring(1));
        // Handle the case of http://foo.com/bar#NAMEDDEST. This is not
        // explicitly mentioned except by example in the Adobe
        // "PDF Open Parameters" document.
        if (Array.from(params).length === 1) {
            const key = Array.from(params.keys())[0];
            if (params.get(key) === '') {
                params.append('nameddest', key);
                params.delete(key);
            }
        }
        return params;
    }
    /** Store the number of pages. */
    setPageCount(pageCount) {
        this.pageCount_ = pageCount;
    }
    /** Store current viewport's dimensions. */
    setViewportDimensions(dimensions) {
        this.viewportDimensions_ = dimensions;
    }
    /**
     * @param url that needs to be parsed.
     * @return Whether the toolbar UI element should be shown.
     */
    shouldShowToolbar(url) {
        const urlParams = this.parseUrlParams_(url);
        const navpanes = urlParams.get('navpanes');
        const toolbar = urlParams.get('toolbar');
        // If navpanes is set to '1', then the toolbar must be shown, regardless of
        // the value of toolbar.
        return navpanes === '1' || toolbar !== '0';
    }
    /**
     * @param url that needs to be parsed.
     * @param sidenavCollapsed the default sidenav state if there are no
     *     overriding open parameters.
     * @return Whether the sidenav UI element should be shown.
     */
    shouldShowSidenav(url, sidenavCollapsed) {
        const urlParams = this.parseUrlParams_(url);
        const navpanes = urlParams.get('navpanes');
        const toolbar = urlParams.get('toolbar');
        // If there are no relevant open parameters, default to the original value.
        if (navpanes === null && toolbar === null) {
            return !sidenavCollapsed;
        }
        return navpanes === '1';
    }
    /**
     * Fetch text fragment directives that appear in the PDF URL if any.
     *
     * @param url that needs to be parsed.
     * @return The text fragment directives or an empty array if they do not
     *     exist.
     */
    getTextFragments(url) {
        // The hash of the URL object decodes the escaped characters in our
        // fragment. So in order to keep characters such as `,` or `-` which could
        // be part of the prefix or suffix, the fragment of the URL needs to be
        // fetched directly from the `url` string instead of using the URL
        // interface.
        const hashSplit = url.split('#');
        if (hashSplit.length !== 2) {
            return [];
        }
        const hash = hashSplit[1];
        assert(hash !== undefined);
        // Handle the case of text directives included in the URL.
        const fragmentDirectiveSplit = hash.split(FRAGMENT_DIRECTIVE_DELIMITER);
        if (fragmentDirectiveSplit.length !== 2) {
            return [];
        }
        const fragmentDirective = fragmentDirectiveSplit[1];
        assert(fragmentDirective !== undefined);
        // Loop through the directive split at character `&` in case of multiple
        // text directives. This cannot be done with URLSearchParams since the `get`
        // and `getAll` functions decode the parameter values which can result in a
        // broken text fragment parse.
        const textFragmentDirectives = [];
        for (const param of fragmentDirective.split('&')) {
            const [key, value] = param.split('=');
            if (key === 'text' && value) {
                textFragmentDirectives.push(value);
            }
        }
        return textFragmentDirectives;
    }
    /**
     * Parse PDF url parameters. These parameters are mentioned in the url
     * and specify actions to be performed when opening pdf files.
     * See http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/
     * pdfs/pdf_open_parameters.pdf for details.
     * @param url that needs to be parsed.
     */
    async getViewportFromUrlParams(url) {
        const params = { url };
        const urlParams = this.parseUrlParams_(url);
        // `pageNumber` is 1-based.
        let pageNumber = 1;
        if (urlParams.has('page')) {
            pageNumber = parseInt(urlParams.get('page'), 10);
            if (!Number.isNaN(pageNumber) && this.pageCount_) {
                // If necessary, clip `pageNumber` to stay within bounds.
                if (pageNumber < 1) {
                    pageNumber = 1;
                }
                else if (pageNumber > this.pageCount_) {
                    pageNumber = this.pageCount_;
                }
                // goToPage() takes a zero-based page index.
                params['pageIndex'] = pageNumber - 1;
            }
        }
        if (urlParams.has('view')) {
            Object.assign(params, await this.parseViewParam_(urlParams.get('view'), pageNumber));
        }
        if (urlParams.has('zoom')) {
            Object.assign(params, this.parseZoomParam_(urlParams.get('zoom')));
        }
        if (params.pageIndex === undefined && urlParams.has('nameddest')) {
            const data = await this.getNamedDestinationCallback_(urlParams.get('nameddest'));
            if (data.pageIndex !== -1) {
                params.pageIndex = data.pageIndex;
                pageNumber = data.pageIndex + 1;
            }
            if (data.namedDestinationView) {
                Object.assign(params, await this.parseNameddestViewParam_(data.namedDestinationView, pageNumber));
            }
            return params;
        }
        return params;
    }
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$1() {
    return html `<!--_html_template_start_-->
<cr-dialog id="dialog" no-cancel show-on-attach>
  <div slot="title">$i18n{errorDialogTitle}</div>
  <div slot="body">$i18n{pageLoadFailed}</div>
  <div slot="button-container" ?hidden="${!this.reloadFn}">
    <cr-button class="action-button" @click="${this.onReloadClick_}">
      $i18n{pageReload}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerErrorDialogElement extends CrLitElement {
    static get is() {
        return 'viewer-error-dialog';
    }
    static get styles() {
        return getCss$b();
    }
    render() {
        return getHtml$1.bind(this)();
    }
    static get properties() {
        return {
            reloadFn: { type: Object },
        };
    }
    #reloadFn_accessor_storage;
    get reloadFn() { return this.#reloadFn_accessor_storage; }
    set reloadFn(value) { this.#reloadFn_accessor_storage = value; }
    onReloadClick_() {
        if (this.reloadFn) {
            this.reloadFn();
        }
    }
}
customElements.define(ViewerErrorDialogElement.is, ViewerErrorDialogElement);

// mojo/public/mojom/base/big_buffer.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const BigBufferSharedMemoryRegionSpec = { $: {} };
const BigBufferSpec = { $: {} };
mojo.internal.Struct(BigBufferSharedMemoryRegionSpec.$, 'BigBufferSharedMemoryRegion', [
    mojo.internal.StructField('bufferHandle', 0, 0, mojo.internal.Handle, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('size', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Union(BigBufferSpec.$, 'BigBuffer', {
    'bytes': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
    },
    'sharedMemory': {
        'ordinal': 1,
        'type': BigBufferSharedMemoryRegionSpec.$,
    },
    'invalidBuffer': {
        'ordinal': 2,
        'type': mojo.internal.Bool,
    },
});
var BigBufferFieldTags;
(function (BigBufferFieldTags) {
    BigBufferFieldTags[BigBufferFieldTags["BYTES"] = 0] = "BYTES";
    BigBufferFieldTags[BigBufferFieldTags["SHARED_MEMORY"] = 1] = "SHARED_MEMORY";
    BigBufferFieldTags[BigBufferFieldTags["INVALID_BUFFER"] = 2] = "INVALID_BUFFER";
})(BigBufferFieldTags || (BigBufferFieldTags = {}));

// mojo/public/mojom/base/string16.mojom-converters.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class String16DataView {
    decoder_;
    version_;
    fieldSpecs_;
    constructor(decoder, version, fieldSpecs) {
        this.decoder_ = decoder;
        this.version_ = version;
        this.fieldSpecs_ = fieldSpecs;
    }
    get data() {
        const field = this.fieldSpecs_[0];
        return mojo.internal.decodeStructField(this.decoder_, field, this.version_);
    }
}

class String16Converter {
    data(str) {
        const arr = [];
        for (let i = 0; i < str.length; ++i) {
            arr.push(str.charCodeAt(i));
        }
        return arr;
    }
    convert(view) {
        const data = view.data;
        return this.convertImpl(data);
    }
    // Exported for testing.
    // TODO(crbug.com/448737199): we should not have to expose a separate method
    // just to facilitate testing.
    convertImpl(data) {
        // Taken from chunk size used in goog.crypt.byteArrayToBinaryString in
        // Closure Library. The value is equal to 2^13.
        const CHUNK_SIZE = 8192;
        if (data.length < CHUNK_SIZE) {
            return String.fromCharCode(...data);
        }
        // Convert the array to a string in chunks, to avoid passing too many
        // arguments to String.fromCharCode() at once, which can exceed the max call
        // stack size (c.f. crbug.com/1509792).
        let str = '';
        for (let i = 0; i < data.length; i += CHUNK_SIZE) {
            const chunk = data.slice(i, i + CHUNK_SIZE);
            str += String.fromCharCode(...chunk);
        }
        return str;
    }
}

// mojo/public/mojom/base/string16.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const String16Spec = { $: {} };
const BigString16Spec = { $: {} };
const converterForString16 = new String16Converter();
mojo.internal.TypemappedStruct(String16Spec.$, 'String16', String16DataView, converterForString16, [
    mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false /* nullable */, 0, undefined, ((value) => converterForString16.data(value))),
], [[0, 16],]);
mojo.internal.Struct(BigString16Spec.$, 'BigString16', [
    mojo.internal.StructField('data', 0, 0, BigBufferSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);

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

// ui/webui/resources/js/tracked_element/tracked_element.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const InputTypeSpec = { $: mojo.internal.Enum() };
var InputType;
(function (InputType) {
    InputType[InputType["MIN_VALUE"] = 0] = "MIN_VALUE";
    InputType[InputType["MAX_VALUE"] = 3] = "MAX_VALUE";
    InputType[InputType["kDontCare"] = 0] = "kDontCare";
    InputType[InputType["kMouse"] = 1] = "kMouse";
    InputType[InputType["kKeyboard"] = 2] = "kKeyboard";
    InputType[InputType["kTouch"] = 3] = "kTouch";
})(InputType || (InputType = {}));
const TextEntryModeSpec = { $: mojo.internal.Enum() };
var TextEntryMode;
(function (TextEntryMode) {
    TextEntryMode[TextEntryMode["MIN_VALUE"] = 0] = "MIN_VALUE";
    TextEntryMode[TextEntryMode["MAX_VALUE"] = 2] = "MAX_VALUE";
    TextEntryMode[TextEntryMode["kReplaceAll"] = 0] = "kReplaceAll";
    TextEntryMode[TextEntryMode["kInsertOrReplace"] = 1] = "kInsertOrReplace";
    TextEntryMode[TextEntryMode["kAppend"] = 2] = "kAppend";
})(TextEntryMode || (TextEntryMode = {}));
class TrackedElementHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'tracked_element.mojom.TrackedElementHandler', scope);
    }
}
class TrackedElementHandlerRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(TrackedElementHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    setManager(observer) {
        this.proxy.sendMessage(0, TrackedElementHandler_SetManager_ParamsSpec.$, null, [
            observer
        ], false);
    }
    trackedElementCanHighlightChanged(identifier, canHiglight) {
        this.proxy.sendMessage(1, TrackedElementHandler_TrackedElementCanHighlightChanged_ParamsSpec.$, null, [
            identifier,
            canHiglight
        ], false);
    }
    trackedElementVisibilityChanged(identifier, visible, rect) {
        this.proxy.sendMessage(2, TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec.$, null, [
            identifier,
            visible,
            rect
        ], false);
    }
    trackedElementActivated(identifier) {
        this.proxy.sendMessage(3, TrackedElementHandler_TrackedElementActivated_ParamsSpec.$, null, [
            identifier
        ], false);
    }
    trackedElementCustomEvent(identifier, customEventName) {
        this.proxy.sendMessage(4, TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec.$, null, [
            identifier,
            customEventName
        ], false);
    }
}
class TrackedElementHandler {
    static get $interfaceName() {
        return "tracked_element.mojom.TrackedElementHandler";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new TrackedElementHandlerRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class TrackedElementManagerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'tracked_element.mojom.TrackedElementManager', scope);
    }
}
class TrackedElementManagerRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(TrackedElementManagerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    onElementHighlightChanged(identifier, highlighted) {
        this.proxy.sendMessage(0, TrackedElementManager_OnElementHighlightChanged_ParamsSpec.$, null, [
            identifier,
            highlighted
        ], false);
    }
    clickElement(identifier, inputType) {
        return this.proxy.sendMessage(1, TrackedElementManager_ClickElement_ParamsSpec.$, TrackedElementManager_ClickElement_ResponseParamsSpec.$, [
            identifier,
            inputType
        ], false);
    }
    focusElement(identifier) {
        return this.proxy.sendMessage(2, TrackedElementManager_FocusElement_ParamsSpec.$, TrackedElementManager_FocusElement_ResponseParamsSpec.$, [
            identifier
        ], false);
    }
    selectTab(identifier, index) {
        return this.proxy.sendMessage(3, TrackedElementManager_SelectTab_ParamsSpec.$, TrackedElementManager_SelectTab_ResponseParamsSpec.$, [
            identifier,
            index
        ], false);
    }
    selectDropdownItem(identifier, index) {
        return this.proxy.sendMessage(4, TrackedElementManager_SelectDropdownItem_ParamsSpec.$, TrackedElementManager_SelectDropdownItem_ResponseParamsSpec.$, [
            identifier,
            index
        ], false);
    }
    enterText(identifier, text, mode) {
        return this.proxy.sendMessage(5, TrackedElementManager_EnterText_ParamsSpec.$, TrackedElementManager_EnterText_ResponseParamsSpec.$, [
            identifier,
            text,
            mode
        ], false);
    }
    confirm(identifier) {
        return this.proxy.sendMessage(6, TrackedElementManager_Confirm_ParamsSpec.$, TrackedElementManager_Confirm_ResponseParamsSpec.$, [
            identifier
        ], false);
    }
}
/**
 * An object which receives request messages for the TrackedElementManager
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class TrackedElementManagerCallbackRouter {
    helper_internal_;
    $;
    router_;
    onElementHighlightChanged;
    clickElement;
    focusElement;
    selectTab;
    selectDropdownItem;
    enterText;
    confirm;
    onConnectionError;
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(TrackedElementManagerRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.onElementHighlightChanged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, TrackedElementManager_OnElementHighlightChanged_ParamsSpec.$, null, this.onElementHighlightChanged.createReceiverHandler(false /* expectsResponse */), false);
        this.clickElement =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1, TrackedElementManager_ClickElement_ParamsSpec.$, TrackedElementManager_ClickElement_ResponseParamsSpec.$, this.clickElement.createReceiverHandler(true /* expectsResponse */), false);
        this.focusElement =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2, TrackedElementManager_FocusElement_ParamsSpec.$, TrackedElementManager_FocusElement_ResponseParamsSpec.$, this.focusElement.createReceiverHandler(true /* expectsResponse */), false);
        this.selectTab =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(3, TrackedElementManager_SelectTab_ParamsSpec.$, TrackedElementManager_SelectTab_ResponseParamsSpec.$, this.selectTab.createReceiverHandler(true /* expectsResponse */), false);
        this.selectDropdownItem =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(4, TrackedElementManager_SelectDropdownItem_ParamsSpec.$, TrackedElementManager_SelectDropdownItem_ResponseParamsSpec.$, this.selectDropdownItem.createReceiverHandler(true /* expectsResponse */), false);
        this.enterText =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(5, TrackedElementManager_EnterText_ParamsSpec.$, TrackedElementManager_EnterText_ResponseParamsSpec.$, this.enterText.createReceiverHandler(true /* expectsResponse */), false);
        this.confirm =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(6, TrackedElementManager_Confirm_ParamsSpec.$, TrackedElementManager_Confirm_ResponseParamsSpec.$, this.confirm.createReceiverHandler(true /* expectsResponse */), false);
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
const TrackedElementIdentifierSpec = { $: {} };
const TrackedElementHandler_SetManager_ParamsSpec = { $: {} };
const TrackedElementHandler_TrackedElementCanHighlightChanged_ParamsSpec = { $: {} };
const TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec = { $: {} };
const TrackedElementHandler_TrackedElementActivated_ParamsSpec = { $: {} };
const TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec = { $: {} };
const TrackedElementManager_OnElementHighlightChanged_ParamsSpec = { $: {} };
const TrackedElementManager_ClickElement_ParamsSpec = { $: {} };
const TrackedElementManager_ClickElement_ResponseParamsSpec = { $: {} };
const TrackedElementManager_FocusElement_ParamsSpec = { $: {} };
const TrackedElementManager_FocusElement_ResponseParamsSpec = { $: {} };
const TrackedElementManager_SelectTab_ParamsSpec = { $: {} };
const TrackedElementManager_SelectTab_ResponseParamsSpec = { $: {} };
const TrackedElementManager_SelectDropdownItem_ParamsSpec = { $: {} };
const TrackedElementManager_SelectDropdownItem_ResponseParamsSpec = { $: {} };
const TrackedElementManager_EnterText_ParamsSpec = { $: {} };
const TrackedElementManager_EnterText_ResponseParamsSpec = { $: {} };
const TrackedElementManager_Confirm_ParamsSpec = { $: {} };
const TrackedElementManager_Confirm_ResponseParamsSpec = { $: {} };
mojo.internal.Struct(TrackedElementIdentifierSpec.$, 'TrackedElementIdentifier', [
    mojo.internal.StructField('nativeIdentifier', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('secondaryIdentifier', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(TrackedElementHandler_SetManager_ParamsSpec.$, 'TrackedElementHandler_SetManager_Params', [
    mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(TrackedElementManagerRemote), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TrackedElementHandler_TrackedElementCanHighlightChanged_ParamsSpec.$, 'TrackedElementHandler_TrackedElementCanHighlightChanged_Params', [
    mojo.internal.StructField('identifier', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('canHiglight', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(TrackedElementHandler_TrackedElementVisibilityChanged_ParamsSpec.$, 'TrackedElementHandler_TrackedElementVisibilityChanged_Params', [
    mojo.internal.StructField('identifier', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('visible', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('rect', 16, 0, RectFSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(TrackedElementHandler_TrackedElementActivated_ParamsSpec.$, 'TrackedElementHandler_TrackedElementActivated_Params', [
    mojo.internal.StructField('identifier', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TrackedElementHandler_TrackedElementCustomEvent_ParamsSpec.$, 'TrackedElementHandler_TrackedElementCustomEvent_Params', [
    mojo.internal.StructField('identifier', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('customEventName', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(TrackedElementManager_OnElementHighlightChanged_ParamsSpec.$, 'TrackedElementManager_OnElementHighlightChanged_Params', [
    mojo.internal.StructField('identifier', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('highlighted', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(TrackedElementManager_ClickElement_ParamsSpec.$, 'TrackedElementManager_ClickElement_Params', [
    mojo.internal.StructField('identifier', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('inputType', 8, 0, InputTypeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(TrackedElementManager_ClickElement_ResponseParamsSpec.$, 'TrackedElementManager_ClickElement_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TrackedElementManager_FocusElement_ParamsSpec.$, 'TrackedElementManager_FocusElement_Params', [
    mojo.internal.StructField('identifier', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TrackedElementManager_FocusElement_ResponseParamsSpec.$, 'TrackedElementManager_FocusElement_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TrackedElementManager_SelectTab_ParamsSpec.$, 'TrackedElementManager_SelectTab_Params', [
    mojo.internal.StructField('identifier', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(TrackedElementManager_SelectTab_ResponseParamsSpec.$, 'TrackedElementManager_SelectTab_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TrackedElementManager_SelectDropdownItem_ParamsSpec.$, 'TrackedElementManager_SelectDropdownItem_Params', [
    mojo.internal.StructField('identifier', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(TrackedElementManager_SelectDropdownItem_ResponseParamsSpec.$, 'TrackedElementManager_SelectDropdownItem_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TrackedElementManager_EnterText_ParamsSpec.$, 'TrackedElementManager_EnterText_Params', [
    mojo.internal.StructField('identifier', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('text', 8, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mode', 16, 0, TextEntryModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(TrackedElementManager_EnterText_ResponseParamsSpec.$, 'TrackedElementManager_EnterText_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TrackedElementManager_Confirm_ParamsSpec.$, 'TrackedElementManager_Confirm_Params', [
    mojo.internal.StructField('identifier', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TrackedElementManager_Confirm_ResponseParamsSpec.$, 'TrackedElementManager_Confirm_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Event type triggered when a tracked element's visibility changes.
 */
const TRACKED_ELEMENT_VISIBILITY_CHANGED_EVENT = 'tracked-element-visibility-changed';
/**
 * Holds all data for a particular native ID, including individual
 * `TrackedElement`s and native-id-wide visibility callbacks.
 */
class ElementData {
    elements = new Map();
    /**
     * Callbacks are routed through an `EventTarget` to avoid concurrency and
     * re-entry issues.
     */
    eventTarget = new EventTarget();
}
const NATIVE_ELEMENT_IDENTIFIER_KEY = 'nativeId';
const SECONDARY_ELEMENT_IDENTIFIER_KEY = 'secondaryId';
function areBoundsEqual(a, b) {
    if (!a || !b) {
        return a === b;
    }
    return a.x === b.x && a.y === b.y && a.width === b.width &&
        a.height === b.height;
}
function parseOptions(options) {
    if (!options) {
        return {
            padding: { top: 0, bottom: 0, left: 0, right: 0 },
            fixed: false,
        };
    }
    const padding = { top: 0, bottom: 0, left: 0, right: 0 };
    padding.top = clampPadding$1(options.paddingTop);
    padding.left = clampPadding$1(options.paddingLeft);
    padding.bottom = clampPadding$1(options.paddingBottom);
    padding.right = clampPadding$1(options.paddingRight);
    return {
        padding,
        fixed: !!options.fixed,
    };
}
function clampPadding$1(n = 0) {
    return Math.max(0, Math.min(20, n));
}
function computeIsVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.height > 0 && rect.width > 0;
}
class TrackedElementManager {
    static getInstance() {
        if (!window._trackedElementManager) {
            window._trackedElementManager = new TrackedElementManager();
        }
        return window._trackedElementManager;
    }
    static setInstance(instance) {
        window._trackedElementManager = instance;
    }
    trackedElementHandler_;
    // Mapped from native ID.
    trackedElements_ = new Map();
    fixedElementObserver_;
    resizeObserver_;
    // Observes attribute changes (style/class) on tracked elements.
    attributeMutationObserver_;
    // Observes document subtree for detached elements being added to DOM.
    documentMutationObserver_;
    debouncedUpdateAllBoundsCallback_;
    constructor() {
        this.trackedElementHandler_ =
            TrackedElementProxyImpl.getInstance().getHandler();
        const callbackRouter = TrackedElementProxyImpl.getInstance().callbackRouter;
        this.trackedElementHandler_.setManager(callbackRouter.$.bindNewPipeAndPassRemote());
        callbackRouter.onElementHighlightChanged.addListener(this.onElementHighlightChanged_.bind(this));
        callbackRouter.clickElement.addListener(this.clickElement_.bind(this));
        callbackRouter.focusElement.addListener(this.focusElement_.bind(this));
        callbackRouter.selectTab.addListener(this.selectTab_.bind(this));
        callbackRouter.selectDropdownItem.addListener(this.selectDropdownItem_.bind(this));
        callbackRouter.enterText.addListener(this.enterText_.bind(this));
        callbackRouter.confirm.addListener(this.confirm_.bind(this));
        this.debouncedUpdateAllBoundsCallback_ =
            debounceEnd(this.updateAllBounds_.bind(this), 50);
        this.resizeObserver_ =
            new ResizeObserver(entries => entries.forEach(({ target }) => {
                // A resize of any element can potentially cause layout shifts in any
                // other elements. Send an update to the resized element immediately
                // and use debounced updates for all other elements.
                if (target !== document.body) {
                    this.onElementVisibilityChanged_(target, computeIsVisible(target));
                }
                this.debouncedUpdateAllBoundsCallback_();
            }));
        this.fixedElementObserver_ = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => this.onElementVisibilityChanged_(target, isIntersecting)), { root: null });
        // Observer for attribute changes on tracked elements.
        this.attributeMutationObserver_ = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                // Style or class attribute changed on a tracked element.
                const target = mutation.target;
                if (this.getDataForElement_(target)) {
                    this.onElementVisibilityChanged_(target, computeIsVisible(target));
                }
            }
        });
        // Helper to check if a node or its descendants are tracked elements.
        const checkTrackedNodes = (nodes) => {
            nodes.forEach(node => {
                if (node instanceof HTMLElement) {
                    // Check if the node is a tracked element.
                    if (this.getDataForElement_(node)) {
                        this.onElementVisibilityChanged_(node, computeIsVisible(node));
                    }
                    // Check if any descendants are tracked elements.
                    node.querySelectorAll('*').forEach(descendant => {
                        if (descendant instanceof HTMLElement &&
                            this.getDataForElement_(descendant)) {
                            this.onElementVisibilityChanged_(descendant, computeIsVisible(descendant));
                        }
                    });
                }
            });
        };
        // Observer for document-level changes to catch tracked elements being
        // added to or removed from the DOM tree.
        this.documentMutationObserver_ = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                checkTrackedNodes(mutation.removedNodes);
                checkTrackedNodes(mutation.addedNodes);
            }
        });
        document.addEventListener('scroll', this.debouncedUpdateAllBoundsCallback_, { passive: true });
        this.resizeObserver_.observe(document.body);
        // Observe the entire document to catch detached elements being added.
        this.documentMutationObserver_.observe(document, { childList: true, subtree: true });
    }
    static getElementId(element) {
        const nativeIdentifier = element.dataset[NATIVE_ELEMENT_IDENTIFIER_KEY];
        const secondaryIdentifier = element.dataset[SECONDARY_ELEMENT_IDENTIFIER_KEY];
        if (!nativeIdentifier) {
            return undefined;
        }
        assert(secondaryIdentifier, 'Element has native identifier ' + nativeIdentifier +
            ' but no secondary id.');
        return { nativeIdentifier, secondaryIdentifier };
    }
    getDataForElement_(element) {
        const id = TrackedElementManager.getElementId(element);
        if (!id) {
            return undefined;
        }
        const maybeTrackedElement = this.trackedElements_.get(id.nativeIdentifier)
            ?.elements.get(id.secondaryIdentifier);
        if (!maybeTrackedElement) {
            return undefined;
        }
        assert(maybeTrackedElement.element === element, `Found different element with same native (${id.nativeIdentifier}) and secondary (${id.secondaryIdentifier}) ids!`);
        return maybeTrackedElement;
    }
    getDataForId_(id) {
        const nativeId = id.nativeIdentifier;
        const secondaryId = id.secondaryIdentifier;
        if (!nativeId || !secondaryId) {
            return undefined;
        }
        return this.trackedElements_.get(nativeId)?.elements.get(secondaryId);
    }
    getElementFor(element) {
        const id = TrackedElementManager.getElementId(element);
        return id ? this.getElementWithId(id) : undefined;
    }
    getElementWithId(id, visibleOnly = false) {
        const el = this.getDataForId_(id);
        if (!el || (visibleOnly && !el.visible)) {
            return undefined;
        }
        return { element: el.element, visible: el.visible, bounds: el.bounds };
    }
    getAllElementsWithNativeId(nativeIdentifier, visibleOnly = false) {
        const result = [];
        const data = this.trackedElements_.get(nativeIdentifier);
        if (data) {
            for (const el of data.elements.values()) {
                if (!visibleOnly || el.visible) {
                    result.push({ element: el.element, visible: el.visible, bounds: el.bounds });
                }
            }
        }
        return result;
    }
    static idToString_(id) {
        return id.nativeIdentifier + ' - ' + id.secondaryIdentifier;
    }
    reset() {
        this.resizeObserver_.disconnect();
        this.fixedElementObserver_.disconnect();
        this.attributeMutationObserver_.disconnect();
        this.documentMutationObserver_.disconnect();
        document.removeEventListener('scroll', this.debouncedUpdateAllBoundsCallback_);
        this.trackedElements_.clear();
        // Reconnect global observers after clearing.
        this.resizeObserver_.observe(document.body);
        this.documentMutationObserver_.observe(document, { childList: true, subtree: true });
    }
    /**
     * Starts tracking an element.
     * A visibility update event will be sent immediately.
     *
     * @param element The element to track.
     * @param nativeId The ElementIdentifier name that C++ uses.
     * @param options Optional options. See `Options` in this file.
     * @param onVisibilityChanged Optional callback for visibility changes for
     *     `element`.
     *
     * Note that `onVisibilityChanged` will only receive updates for `element` and
     * an initial visibility callback will be sent. Contrast this with adding a
     * listener to the result of calling `getVisibilityEventTarget(nativeId)`,
     * which will receive all future events for elements with `nativeId` (and only
     * future events).
     */
    startTracking(element, nativeId, options, onVisibilityChanged) {
        // Remove tracking of the old element before registering the nativeId to a
        // new element.
        if (this.getDataForElement_(element)) {
            this.stopTracking(element);
        }
        const secondaryId = options?.secondaryId ||
            TrackedElementProxyImpl.getAutoGeneratedSecondaryId();
        element.dataset[NATIVE_ELEMENT_IDENTIFIER_KEY] = nativeId;
        element.dataset[SECONDARY_ELEMENT_IDENTIFIER_KEY] = secondaryId;
        const parsedOptions = parseOptions(options);
        const initialVisible = computeIsVisible(element);
        const trackedElement = {
            element,
            nativeId,
            secondaryId,
            padding: parsedOptions.padding,
            fixed: parsedOptions.fixed,
            visible: initialVisible,
            bounds: { x: 0, y: 0, width: 0, height: 0 },
            onVisibilityChanged: onVisibilityChanged,
            onHighlightChanged: options?.onHighlightChanged,
        };
        if (!this.trackedElements_.has(nativeId)) {
            this.trackedElements_.set(nativeId, new ElementData());
        }
        const data = this.trackedElements_.get(nativeId);
        assert(!data.elements.has(secondaryId), 'Attempted to track an element with native id ' + nativeId +
            ' twice, or two elements with conflicting secondary id ' +
            secondaryId);
        data.elements.set(secondaryId, trackedElement);
        if (trackedElement.fixed) {
            this.fixedElementObserver_.observe(element);
        }
        else {
            this.resizeObserver_.observe(element);
        }
        // Observe the element itself for style/class changes that affect position.
        this.attributeMutationObserver_.observe(element, {
            attributes: true,
            attributeFilter: ['style', 'class', 'hidden'],
        });
        if (options?.onHighlightChanged) {
            this.trackedElementHandler_.trackedElementCanHighlightChanged(TrackedElementManager.elementToIdentifier_(trackedElement), true);
        }
        this.onElementVisibilityChanged_(element, initialVisible);
    }
    /**
     * Gets the event target for visibility for a native id. Listeners will only
     * receive events of type `TrackedElementVisibilityChangedEvent`.
     *
     * @param nativeId the native id.
     *
     * @returns the event target
     */
    getVisibilityEventTarget(nativeId) {
        if (!this.trackedElements_.has(nativeId)) {
            this.trackedElements_.set(nativeId, new ElementData());
        }
        return this.trackedElements_.get(nativeId).eventTarget;
    }
    /**
     * Stops tracking an element.
     * A visibility event with `visible: false` will be sent immediately.
     *
     * @param element The element to stop tracking.
     */
    stopTracking(element) {
        const trackedElement = this.getDataForElement_(element);
        if (!trackedElement) {
            return;
        }
        if (trackedElement.onHighlightChanged) {
            this.trackedElementHandler_.trackedElementCanHighlightChanged(TrackedElementManager.elementToIdentifier_(trackedElement), false);
        }
        this.onElementVisibilityChanged_(element, false);
        if (trackedElement.fixed) {
            this.fixedElementObserver_.unobserve(element);
        }
        else {
            this.resizeObserver_.unobserve(element);
        }
        // Note: MutationObservers don't have unobserve(). The
        // attributeMutationObserver_ and documentMutationObserver_ will still be
        // observing, but since the element is no longer in trackedElements_,
        // callbacks won't trigger.
        this.trackedElements_.get(trackedElement.nativeId)
            ?.elements.delete(trackedElement.secondaryId);
        delete element.dataset[NATIVE_ELEMENT_IDENTIFIER_KEY];
        delete element.dataset[SECONDARY_ELEMENT_IDENTIFIER_KEY];
    }
    notifyElementActivated(element) {
        const el = this.getDataForElement_(element);
        if (!el) {
            return;
        }
        this.trackedElementHandler_.trackedElementActivated(TrackedElementManager.elementToIdentifier_(el));
    }
    notifyCustomEvent(element, customEventName) {
        const el = this.getDataForElement_(element);
        assert(el);
        this.trackedElementHandler_.trackedElementCustomEvent(TrackedElementManager.elementToIdentifier_(el), customEventName);
    }
    onElementVisibilityChanged_(element, visible) {
        const trackedElement = this.getDataForElement_(element);
        if (!trackedElement) {
            // When we stop tracking an element we continue to get events for it. Just
            // ignore these events.
            return;
        }
        const bounds = visible ? this.getElementBounds_(trackedElement) :
            { x: 0, y: 0, width: 0, height: 0 };
        const update = { visible, bounds, element };
        // Invoke specific visibility changed event.
        if (trackedElement.onVisibilityChanged) {
            trackedElement.onVisibilityChanged(update);
        }
        // Invoke general visibility changed events.
        this.trackedElements_.get(trackedElement.nativeId).eventTarget
            .dispatchEvent(new CustomEvent(TRACKED_ELEMENT_VISIBILITY_CHANGED_EVENT, { detail: update }));
        // Deduplicate TS -> C++ updates if visibility and bounds haven't changed.
        if (trackedElement.lastReportedVisible === visible &&
            areBoundsEqual(trackedElement.lastReportedBounds, bounds)) {
            return;
        }
        trackedElement.lastReportedVisible = visible;
        trackedElement.lastReportedBounds = bounds;
        const wasVisible = trackedElement.visible;
        trackedElement.visible = visible;
        trackedElement.bounds = bounds;
        if (visible && !wasVisible && trackedElement.onHighlightChanged) {
            // The C++ tracker drops its state when it is destroyed and recreated
            // during a visibility bounce (e.g., from a 0x0 size during a CSS
            // animation or variable evaluation). We must explicitly restore the
            // highlight capability on the newly recreated C++ tracking object.
            this.trackedElementHandler_.trackedElementCanHighlightChanged(TrackedElementManager.elementToIdentifier_(trackedElement), true);
        }
        this.trackedElementHandler_.trackedElementVisibilityChanged(TrackedElementManager.elementToIdentifier_(trackedElement), visible, bounds);
    }
    updateAllBounds_() {
        this.trackedElements_.forEach((elementData, _) => {
            elementData.elements.forEach((trackedElement, _) => {
                const element = trackedElement.element;
                this.onElementVisibilityChanged_(element, computeIsVisible(element));
            });
        });
    }
    getElementBounds_(trackedElement) {
        const rect = { x: 0, y: 0, width: 0, height: 0 };
        const bounds = trackedElement.element.getBoundingClientRect();
        rect.x = bounds.x;
        rect.y = bounds.y;
        rect.width = bounds.width;
        rect.height = bounds.height;
        const padding = trackedElement.padding;
        rect.x -= padding.left;
        rect.y -= padding.top;
        rect.width += padding.left + padding.right;
        rect.height += padding.top + padding.bottom;
        return rect;
    }
    /* Called from browser to add/remove highlights. */
    onElementHighlightChanged_(id, highlighted) {
        const trackedElement = this.getDataForId_(id);
        const maybeCallback = trackedElement?.onHighlightChanged;
        if (maybeCallback) {
            maybeCallback(highlighted, trackedElement.element);
        }
    }
    async waitUntilNotDisabled_(element, id) {
        if (!element.hasAttribute('disabled')) {
            return;
        }
        console.info(`TrackedElementManager: Element ${TrackedElementManager.idToString_(id)} is disabled, ` +
            `waiting...`);
        return new Promise((resolve) => {
            const observer = new MutationObserver(() => {
                if (!element.hasAttribute('disabled')) {
                    observer.disconnect();
                    console.info(`TrackedElementManager: Element ${TrackedElementManager.idToString_(id)} is no ` +
                        `longer disabled.`);
                    resolve();
                }
            });
            observer.observe(element, { attributes: true, attributeFilter: ['disabled'] });
        });
    }
    findInteractiveElement_(root) {
        const inner = root.querySelector('button, [role="button"], cr-icon-button, cr-button');
        if (inner) {
            if (inner.shadowRoot) {
                return this.findInteractiveElement_(inner.shadowRoot) ?? inner;
            }
            return inner;
        }
        for (const child of root.querySelectorAll('*')) {
            if (child.shadowRoot) {
                const found = this.findInteractiveElement_(child.shadowRoot);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    }
    async clickElement_(id, inputType) {
        const trackedElement = this.getDataForId_(id);
        if (!trackedElement) {
            console.error(`TrackedElementManager: Click failed, element not found: ${TrackedElementManager.idToString_(id)}`);
            return { success: false };
        }
        let target = trackedElement.element;
        // If the element is a container with a shadow root, try to find the actual
        // interactive element inside, recursing across nested shadow roots if
        // needed.
        if (target.shadowRoot &&
            !['BUTTON', 'INPUT', 'A', 'SELECT'].includes(target.tagName)) {
            target = this.findInteractiveElement_(target.shadowRoot) ?? target;
        }
        await this.waitUntilNotDisabled_(target, id);
        switch (inputType) {
            case InputType.kKeyboard:
                // When activating elements via keyboard (e.g. Space or Enter), browsers
                // synthesize a click event with detail = 0 and without preceding
                // pointer events (unlike mouse/pointer clicks, which emit pointerdown,
                // pointerup, and click with detail = 1).
                target.dispatchEvent(new MouseEvent('click', {
                    bubbles: true,
                    composed: true,
                    button: 0, // Left
                    detail: 0, // Keyboard synthesized click has detail === 0
                }));
                return { success: true };
            case InputType.kTouch:
            case InputType.kMouse:
            case InputType.kDontCare:
            default: {
                // For kMouse, kTouch, and kDontCare:
                // kDontCare explicitly defaults to mouse input simulation. Simulating
                // pointer events (pointerdown, pointerup, click) is the most reliable
                // way to trigger both click listeners and components relying on pointer
                // events.
                const pointerType = inputType === InputType.kTouch ? 'touch' : 'mouse';
                // Some components (like the reload button) listen to pointer events
                // instead of click. We also need to fake pointer capture for some
                // tests.
                const oldPointerCapture = {
                    setPointerCapture: target.setPointerCapture,
                    hasPointerCapture: target.hasPointerCapture,
                    releasePointerCapture: target.releasePointerCapture,
                };
                {
                    let hasCapture = null;
                    target.setPointerCapture = (id) => {
                        hasCapture = id;
                    };
                    target.hasPointerCapture = (id) => {
                        return id === hasCapture;
                    };
                    target.releasePointerCapture = (id) => {
                        if (id === hasCapture) {
                            hasCapture = null;
                        }
                    };
                }
                const bounds = target.getBoundingClientRect();
                target.dispatchEvent(new PointerEvent('pointerdown', {
                    bubbles: true,
                    composed: true,
                    button: 0, // Left
                    pointerId: 1,
                    pointerType,
                    isPrimary: true,
                    buttons: 1,
                    clientX: bounds.left + bounds.width / 2,
                    clientY: bounds.top + bounds.height / 2,
                }));
                target.dispatchEvent(new PointerEvent('pointerup', {
                    bubbles: true,
                    composed: true,
                    button: 0, // Left
                    pointerId: 1,
                    pointerType,
                    isPrimary: true,
                    buttons: 0,
                    clientX: bounds.left + bounds.width / 2,
                    clientY: bounds.top + bounds.height / 2,
                }));
                target.dispatchEvent(new PointerEvent('click', {
                    bubbles: true,
                    composed: true,
                    button: 0, // Left
                    detail: 1, // Single click
                    pointerId: 1,
                    pointerType,
                    isPrimary: true,
                    clientX: bounds.left + bounds.width / 2,
                    clientY: bounds.top + bounds.height / 2,
                }));
                target.setPointerCapture = oldPointerCapture.setPointerCapture;
                target.hasPointerCapture = oldPointerCapture.hasPointerCapture;
                target.releasePointerCapture = oldPointerCapture.releasePointerCapture;
                return { success: true };
            }
        }
    }
    focusElement_(id) {
        const trackedElement = this.getDataForId_(id);
        if (!trackedElement) {
            console.error(`TrackedElementManager: Focus failed, element not found: ${TrackedElementManager.idToString_(id)}`);
            return { success: false };
        }
        trackedElement.element.focus();
        return { success: true };
    }
    selectTab_(id, index) {
        const trackedElement = this.getDataForId_(id);
        if (!trackedElement) {
            console.error(`TrackedElementManager: SelectTab failed, element not found: ${TrackedElementManager.idToString_(id)}`);
            return { success: false };
        }
        const element = trackedElement.element;
        // Special handling for <cr-tabs>
        if (element.tagName === 'CR-TABS') {
            element.selected = index;
            return { success: true };
        }
        // Try to find tabs by ARIA role.
        const tabs = element.querySelectorAll('[role="tab"]');
        if (tabs.length > index) {
            tabs[index].click();
            return { success: true };
        }
        // Fallback: try to find child elements that look like tabs.
        const childTabs = element.children;
        if (childTabs.length > index) {
            childTabs[index].click();
            return { success: true };
        }
        console.error(`TrackedElementManager: SelectTab failed, tab index ${index} not found in ${TrackedElementManager.idToString_(id)}`);
        return { success: false };
    }
    selectDropdownItem_(id, index) {
        const trackedElement = this.getDataForId_(id);
        if (!trackedElement) {
            console.error(`TrackedElementManager: SelectDropdownItem failed, element not found: ${TrackedElementManager.idToString_(id)}`);
            return { success: false };
        }
        const element = trackedElement.element;
        if (element instanceof HTMLSelectElement) {
            if (index >= element.options.length) {
                console.error(`TrackedElementManager: SelectDropdownItem failed, index ${index} out of bounds for ${TrackedElementManager.idToString_(id)}`);
                return { success: false };
            }
            element.selectedIndex = index;
            element.dispatchEvent(new Event('change', { bubbles: true }));
            return { success: true };
        }
        // Special handling for <cr-select>
        if (element.tagName === 'CR-SELECT') {
            const select = element.shadowRoot?.querySelector('select');
            if (select && index < select.options.length) {
                select.selectedIndex = index;
                select.dispatchEvent(new Event('change', { bubbles: true }));
                return { success: true };
            }
        }
        console.error(`TrackedElementManager: SelectDropdownItem failed for ${TrackedElementManager.idToString_(id)}. Not a supported dropdown type or index ${index} out of bounds.`);
        return { success: false };
    }
    static elementToIdentifier_(element) {
        return {
            nativeIdentifier: element.nativeId,
            secondaryIdentifier: element.secondaryId,
        };
    }
    enterText_(id, text, mode) {
        const trackedElement = this.getDataForId_(id);
        if (!trackedElement) {
            console.error(`TrackedElementManager: EnterText failed, element not found: ${TrackedElementManager.idToString_(id)}`);
            return { success: false };
        }
        const element = trackedElement.element;
        if (!(element instanceof HTMLInputElement ||
            element instanceof HTMLTextAreaElement)) {
            // Check if it's a custom element wrapping an input (like <cr-input>)
            const input = element.shadowRoot?.querySelector('input, textarea');
            if (input instanceof HTMLInputElement ||
                input instanceof HTMLTextAreaElement) {
                return this.enterTextIntoInput_(input, text, mode);
            }
            console.error(`TrackedElementManager: EnterText failed, element is not an input: ${TrackedElementManager.idToString_(id)}`);
            return { success: false };
        }
        return this.enterTextIntoInput_(element, text, mode);
    }
    enterTextIntoInput_(input, text, mode) {
        switch (mode) {
            case TextEntryMode.kReplaceAll:
                input.value = text;
                break;
            case TextEntryMode.kAppend:
                input.value += text;
                break;
            case TextEntryMode.kInsertOrReplace:
                const start = input.selectionStart || 0;
                const end = input.selectionEnd || 0;
                input.value =
                    input.value.substring(0, start) + text + input.value.substring(end);
                input.selectionStart = input.selectionEnd = start + text.length;
                break;
            default:
                console.error(`TrackedElementManager: Invalid TextEntryMode: ${mode}`);
                return { success: false };
        }
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
        return { success: true };
    }
    confirm_(id) {
        const trackedElement = this.getDataForId_(id);
        if (!trackedElement) {
            console.error(`TrackedElementManager: Confirm failed, element not found: ${TrackedElementManager.idToString_(id)}`);
            return { success: false };
        }
        let element = trackedElement.element;
        if (!(element instanceof HTMLInputElement ||
            element instanceof HTMLTextAreaElement)) {
            const input = element.shadowRoot?.querySelector('input, textarea');
            if (input instanceof HTMLInputElement ||
                input instanceof HTMLTextAreaElement) {
                element = input;
            }
        }
        element.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13,
            bubbles: true,
            composed: true,
        }));
        return { success: true };
    }
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Proxy for the TrackedElementHandler mojo interface.
 */
class TrackedElementProxyImpl {
    handler_ = TrackedElementHandler.getRemote();
    callbackRouter = new TrackedElementManagerCallbackRouter();
    getHandler() {
        return this.handler_;
    }
    static getInstance() {
        return instance$3 || (instance$3 = new TrackedElementProxyImpl());
    }
    static setInstance(obj) {
        instance$3 = obj;
        // Since we changed the proxy, we need to trigger the TrackedElementManager
        // to use the new proxy. The easiest way to do that is to recreate it.
        TrackedElementManager.setInstance(undefined);
    }
    static getAutoGeneratedSecondaryId() {
        return 'webui:' + crypto.randomUUID();
    }
}
let instance$3 = null;

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

// ui/webui/resources/cr_components/help_bubble/help_bubble.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HelpBubbleArrowPositionSpec = { $: mojo.internal.Enum() };
var HelpBubbleArrowPosition;
(function (HelpBubbleArrowPosition) {
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["MIN_VALUE"] = 0] = "MIN_VALUE";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["MAX_VALUE"] = 11] = "MAX_VALUE";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["TOP_LEFT"] = 0] = "TOP_LEFT";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["TOP_CENTER"] = 1] = "TOP_CENTER";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["BOTTOM_CENTER"] = 4] = "BOTTOM_CENTER";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["LEFT_TOP"] = 6] = "LEFT_TOP";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["LEFT_CENTER"] = 7] = "LEFT_CENTER";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["LEFT_BOTTOM"] = 8] = "LEFT_BOTTOM";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["RIGHT_TOP"] = 9] = "RIGHT_TOP";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["RIGHT_CENTER"] = 10] = "RIGHT_CENTER";
    HelpBubbleArrowPosition[HelpBubbleArrowPosition["RIGHT_BOTTOM"] = 11] = "RIGHT_BOTTOM";
})(HelpBubbleArrowPosition || (HelpBubbleArrowPosition = {}));
const HelpBubbleClosedReasonSpec = { $: mojo.internal.Enum() };
var HelpBubbleClosedReason;
(function (HelpBubbleClosedReason) {
    HelpBubbleClosedReason[HelpBubbleClosedReason["MIN_VALUE"] = 0] = "MIN_VALUE";
    HelpBubbleClosedReason[HelpBubbleClosedReason["MAX_VALUE"] = 2] = "MAX_VALUE";
    HelpBubbleClosedReason[HelpBubbleClosedReason["kPageChanged"] = 0] = "kPageChanged";
    HelpBubbleClosedReason[HelpBubbleClosedReason["kDismissedByUser"] = 1] = "kDismissedByUser";
    HelpBubbleClosedReason[HelpBubbleClosedReason["kTimedOut"] = 2] = "kTimedOut";
})(HelpBubbleClosedReason || (HelpBubbleClosedReason = {}));
class HelpBubbleHandlerFactoryPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'help_bubble.mojom.HelpBubbleHandlerFactory', scope);
    }
}
class HelpBubbleHandlerFactoryRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(HelpBubbleHandlerFactoryPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    createHelpBubbleHandler(client, handler) {
        this.proxy.sendMessage(0, HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$, null, [
            client,
            handler
        ], false);
    }
}
class HelpBubbleHandlerFactory {
    static get $interfaceName() {
        return "help_bubble.mojom.HelpBubbleHandlerFactory";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new HelpBubbleHandlerFactoryRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class PdfHelpBubbleHandlerFactoryPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'help_bubble.mojom.PdfHelpBubbleHandlerFactory', scope);
    }
}
class PdfHelpBubbleHandlerFactoryRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PdfHelpBubbleHandlerFactoryPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    createHelpBubbleHandler(client, helpBubbleHandler, trackedElementHandler) {
        this.proxy.sendMessage(0, PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$, null, [
            client,
            helpBubbleHandler,
            trackedElementHandler
        ], false);
    }
}
class PdfHelpBubbleHandlerFactory {
    static get $interfaceName() {
        return "help_bubble.mojom.PdfHelpBubbleHandlerFactory";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PdfHelpBubbleHandlerFactoryRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class HelpBubbleHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'help_bubble.mojom.HelpBubbleHandler', scope);
    }
}
class HelpBubbleHandlerRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(HelpBubbleHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    helpBubbleButtonPressed(id, buttonIndex) {
        this.proxy.sendMessage(0, HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec.$, null, [
            id,
            buttonIndex
        ], false);
    }
    helpBubbleClosed(id, reason) {
        this.proxy.sendMessage(1, HelpBubbleHandler_HelpBubbleClosed_ParamsSpec.$, null, [
            id,
            reason
        ], false);
    }
}
class HelpBubbleClientPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'help_bubble.mojom.HelpBubbleClient', scope);
    }
}
class HelpBubbleClientRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(HelpBubbleClientPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    showHelpBubble(params) {
        this.proxy.sendMessage(0, HelpBubbleClient_ShowHelpBubble_ParamsSpec.$, null, [
            params
        ], false);
    }
    toggleFocusForAccessibility(id) {
        this.proxy.sendMessage(1, HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec.$, null, [
            id
        ], false);
    }
    hideHelpBubble(id) {
        this.proxy.sendMessage(2, HelpBubbleClient_HideHelpBubble_ParamsSpec.$, null, [
            id
        ], false);
    }
    externalHelpBubbleUpdated(id, shown) {
        this.proxy.sendMessage(3, HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec.$, null, [
            id,
            shown
        ], false);
    }
}
/**
 * An object which receives request messages for the HelpBubbleClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class HelpBubbleClientCallbackRouter {
    helper_internal_;
    $;
    router_;
    showHelpBubble;
    toggleFocusForAccessibility;
    hideHelpBubble;
    externalHelpBubbleUpdated;
    onConnectionError;
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(HelpBubbleClientRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.showHelpBubble =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, HelpBubbleClient_ShowHelpBubble_ParamsSpec.$, null, this.showHelpBubble.createReceiverHandler(false /* expectsResponse */), false);
        this.toggleFocusForAccessibility =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1, HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec.$, null, this.toggleFocusForAccessibility.createReceiverHandler(false /* expectsResponse */), false);
        this.hideHelpBubble =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2, HelpBubbleClient_HideHelpBubble_ParamsSpec.$, null, this.hideHelpBubble.createReceiverHandler(false /* expectsResponse */), false);
        this.externalHelpBubbleUpdated =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(3, HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec.$, null, this.externalHelpBubbleUpdated.createReceiverHandler(false /* expectsResponse */), false);
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
const HelpBubbleButtonParamsSpec = { $: {} };
const ProgressSpec = { $: {} };
const HelpBubbleParamsSpec = { $: {} };
const HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec = { $: {} };
const PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec = { $: {} };
const HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec = { $: {} };
const HelpBubbleHandler_HelpBubbleClosed_ParamsSpec = { $: {} };
const HelpBubbleClient_ShowHelpBubble_ParamsSpec = { $: {} };
const HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec = { $: {} };
const HelpBubbleClient_HideHelpBubble_ParamsSpec = { $: {} };
const HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec = { $: {} };
mojo.internal.Struct(HelpBubbleButtonParamsSpec.$, 'HelpBubbleButtonParams', [
    mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isDefault', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ProgressSpec.$, 'Progress', [
    mojo.internal.StructField('current', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('total', 1, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(HelpBubbleParamsSpec.$, 'HelpBubbleParams', [
    mojo.internal.StructField('id', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('position', 8, 0, HelpBubbleArrowPositionSpec.$, HelpBubbleArrowPosition.TOP_CENTER, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('titleText', 16, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('bodyText', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('closeButtonAltText', 32, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('bodyIconName', 40, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('bodyIconAltText', 48, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('progress', 56, 0, ProgressSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('buttons', 64, 0, mojo.internal.Array(HelpBubbleButtonParamsSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('focus_on_show_hint_$flag', 12, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "focus_on_show_hint_$value",
        originalFieldName: "focusOnShowHint",
    }, undefined),
    mojo.internal.StructField('focus_on_show_hint_$value', 12, 1, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "focusOnShowHint",
    }, undefined),
    mojo.internal.StructField('timeout', 72, 0, TimeDeltaSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 88],]);
mojo.internal.Struct(HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$, 'HelpBubbleHandlerFactory_CreateHelpBubbleHandler_Params', [
    mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(HelpBubbleClientRemote), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(HelpBubbleHandlerPendingReceiver), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$, 'PdfHelpBubbleHandlerFactory_CreateHelpBubbleHandler_Params', [
    mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(HelpBubbleClientRemote), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('helpBubbleHandler', 8, 0, mojo.internal.InterfaceRequest(HelpBubbleHandlerPendingReceiver), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('trackedElementHandler', 12, 0, mojo.internal.InterfaceRequest(TrackedElementHandlerPendingReceiver), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec.$, 'HelpBubbleHandler_HelpBubbleButtonPressed_Params', [
    mojo.internal.StructField('id', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('buttonIndex', 8, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(HelpBubbleHandler_HelpBubbleClosed_ParamsSpec.$, 'HelpBubbleHandler_HelpBubbleClosed_Params', [
    mojo.internal.StructField('id', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('reason', 8, 0, HelpBubbleClosedReasonSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(HelpBubbleClient_ShowHelpBubble_ParamsSpec.$, 'HelpBubbleClient_ShowHelpBubble_Params', [
    mojo.internal.StructField('params', 0, 0, HelpBubbleParamsSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec.$, 'HelpBubbleClient_ToggleFocusForAccessibility_Params', [
    mojo.internal.StructField('id', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(HelpBubbleClient_HideHelpBubble_ParamsSpec.$, 'HelpBubbleClient_HideHelpBubble_Params', [
    mojo.internal.StructField('id', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec.$, 'HelpBubbleClient_ExternalHelpBubbleUpdated_Params', [
    mojo.internal.StructField('id', 0, 0, TrackedElementIdentifierSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shown', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
const browserProxyFactory = new MojoBrowserProxyFactory(HelpBubbleHandlerRemote, HelpBubbleClientCallbackRouter, (remote, receiver) => HelpBubbleHandlerFactory.getRemote().createHelpBubbleHandler(remote, receiver));

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PdfTrackedElementProxyImpl {
    handler_;
    callbackRouter = new TrackedElementManagerCallbackRouter();
    constructor(handler) {
        this.handler_ = handler;
    }
    getHandler() {
        return this.handler_;
    }
}
class PdfHelpBubbleProxyImpl {
    trackedElementHandler_ = new TrackedElementHandlerRemote();
    callbackRouter = new HelpBubbleClientCallbackRouter();
    handler = new HelpBubbleHandlerRemote();
    constructor(connectToMojo) {
        if (connectToMojo) {
            const factory = PdfHelpBubbleHandlerFactory.getRemote();
            factory.createHelpBubbleHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver(), this.trackedElementHandler_.$.bindNewPipeAndPassReceiver());
            TrackedElementProxyImpl.setInstance(new PdfTrackedElementProxyImpl(this.trackedElementHandler_));
        }
    }
    static getInstance() {
        return instance$2 || (instance$2 = new PdfHelpBubbleProxyImpl(false));
    }
    static createConnectedInstance() {
        assert(!instance$2);
        instance$2 = new PdfHelpBubbleProxyImpl(true);
    }
}
let instance$2 = null;

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function convertDocumentDimensionsMessage(message) {
    return message;
}
function convertFormFocusChangeMessage(message) {
    return message;
}
function convertLoadProgressMessage(message) {
    return message;
}
function convertSendKeyEventMessage(message) {
    const keyEventData = message;
    return deserializeKeyEvent(keyEventData.keyEvent);
}

let instance$1 = null;
function getCss$1() {
    return instance$1 || (instance$1 = [...[], css `#content{height:100%;position:fixed;width:100%;z-index:1}#plugin{display:block;height:100%;position:absolute;width:100%}#sizer{position:absolute;z-index:0}`]);
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const div = document.createElement('div');
if (document.documentElement.hasAttribute('rounded-icons')) {
    div.innerHTML = getTrustedHTML `
<cr-iconset name="iph" size="24">
  <svg>
    <defs>
      <g id="celebration">
        <path d="m5.352 18.523 7.546-2.671-4.875-4.875ZM22.8 7.051c-.133.133-.278.199-.426.199-.148 0-.293-.066-.426-.2l-.426-.425a1.149 1.149 0 0 0-.859-.352c-.348 0-.633.118-.863.352l-5.074 5.102a.619.619 0 0 1-.43.171.587.587 0 0 1-.422-.171.575.575 0 0 1-.176-.422.6.6 0 0 1 .176-.43l5.074-5.102a2.313 2.313 0 0 1 1.688-.699c.66 0 1.23.235 1.715.7l.449.453a.564.564 0 0 1 .176.414.562.562 0 0 1-.176.41ZM10.449 4.074a.606.606 0 0 1 .852 0l.426.426c.449.477.671 1.04.671 1.695 0 .653-.222 1.223-.671 1.703l-.426.426a.606.606 0 0 1-.852 0 .6.6 0 0 1 0-.848l.426-.425c.234-.23.352-.512.352-.84 0-.328-.118-.606-.352-.836l-.45-.45a.57.57 0 0 1-.175-.413c0-.157.066-.305.2-.438Zm2.977-1.25a.6.6 0 0 1 .848 0l1.277 1.278c.484.48.722 1.05.722 1.71 0 .657-.238 1.22-.722 1.688l-2.528 2.523a.564.564 0 0 1-.414.176.643.643 0 0 1-.433-.176.542.542 0 0 1-.2-.43c0-.167.067-.316.2-.445l2.523-2.523c.235-.227.352-.512.352-.852 0-.34-.117-.62-.352-.847l-1.273-1.25a.606.606 0 0 1 0-.852ZM21.926 13a.606.606 0 0 1-.852 0l-1.273-1.273a1.137 1.137 0 0 0-.852-.352c-.34 0-.62.117-.847.352l-1.704 1.699a.6.6 0 0 1-1.023-.422c0-.164.059-.305.176-.43l1.699-1.699a2.481 2.481 0 0 1 1.71-.688 2.26 2.26 0 0 1 1.688.688l1.278 1.273a.606.606 0 0 1 0 .852ZM5.352 18.523ZM3.023 19.7 6.801 9.051a.893.893 0 0 1 .336-.438.874.874 0 0 1 .508-.164c.12 0 .234.024.34.063.1.043.199.105.288.187l6.926 6.903a.873.873 0 0 1 .25.628.907.907 0 0 1-.597.844L4.176 20.852a.786.786 0 0 1-.516.023 1.013 1.013 0 0 1-.66-.66.786.786 0 0 1 .023-.516Zm0 0"></path>
      </g>
      <g id="lightbulb-2">
        <path
          d="M10.727 21.07a1.729 1.729 0 0 1-.528-1.27h3.602c0 .5-.176.927-.531 1.274a1.737 1.737 0 0 1-1.274.528c-.496 0-.922-.18-1.27-.532Zm-1.418-2.468a.874.874 0 0 1-.645-.258.861.861 0 0 1-.266-.637c0-.254.086-.469.262-.645a.854.854 0 0 1 .64-.261h5.391c.258 0 .473.086.645.258a.855.855 0 0 1 .266.636.86.86 0 0 1-.262.64.857.857 0 0 1-.64.267Zm-1.286-3a6.467 6.467 0 0 1-2.386-2.563A7.362 7.362 0 0 1 4.8 9.602c0-2 .699-3.704 2.097-5.102C8.301 3.102 10 2.398 12 2.398c2 0 3.7.704 5.102 2.102 1.398 1.398 2.097 3.102 2.097 5.102 0 1.214-.277 2.359-.836 3.437a6.467 6.467 0 0 1-2.386 2.563Zm.579-1.801h6.796a5.35 5.35 0 0 0 1.477-1.875 5.309 5.309 0 0 0 .523-2.324c0-1.508-.523-2.786-1.566-3.832-1.047-1.047-2.324-1.57-3.828-1.57s-2.777.523-3.828 1.57C7.125 6.816 6.602 8.094 6.602 9.602c0 .816.171 1.59.523 2.324A5.35 5.35 0 0 0 8.602 13.8Zm3.398 0Zm0 0">
        </path>
      </g>
      <g id="lightbulb" width="20" height="20" viewBox="0 -960 960 960">
        <path
          d="M479.779-81.413q-30.975 0-52.812-22.704-21.837-22.704-21.837-55.035h149.74q0 32.631-22.058 55.185-22.058 22.554-53.033 22.554ZM333.848-209.065v-75.587h292.304v75.587H333.848Zm-15-125.5Q254.696-374 219.282-440.533q-35.413-66.532-35.413-142.163 0-123.288 86.364-209.59 86.363-86.301 209.739-86.301t209.767 86.301q86.392 86.302 86.392 209.59 0 75.87-35.413 142.283Q705.304-374 641.152-334.565H318.848Zm26.348-83h269.608q37.283-30.522 57.805-73.566 20.521-43.043 20.521-91.512 0-89.424-61.812-151.184-61.813-61.76-151.087-61.76-89.274 0-151.318 61.76-62.043 61.76-62.043 151.184 0 48.469 20.521 91.512 20.522 43.044 57.805 73.566Zm134.804 0Z">
        </path>
      </g>
      <g id="spark" width="20" height="20" viewBox="0 0 20 20">
        <path
          d="M10 18a7.7 7.7 0 0 0-.625-3.104 7.858 7.858 0 0 0-1.73-2.542 7.86 7.86 0 0 0-2.54-1.729A7.7 7.7 0 0 0 2 10a7.7 7.7 0 0 0 3.104-.625 8.027 8.027 0 0 0 4.271-4.27A7.797 7.797 0 0 0 10 2a7.79 7.79 0 0 0 .625 3.104 8.28 8.28 0 0 0 1.708 2.563 8.28 8.28 0 0 0 2.563 1.708A7.797 7.797 0 0 0 18 10a7.797 7.797 0 0 0-3.104.625 8.027 8.027 0 0 0-4.27 4.27A7.7 7.7 0 0 0 9.999 18Z">
        </path>
      </g>
      <g id="wb_incandescent" viewBox="0 0 16 16">
        <path
          d="M7.398 13.8v-.402a.583.583 0 0 1 .598-.597c.168 0 .313.058.43.172a.572.572 0 0 1 .176.425v.403a.583.583 0 0 1-.598.597.583.583 0 0 1-.43-.171.572.572 0 0 1-.176-.426ZM2.2 7.399h.403a.583.583 0 0 1 .597.598.599.599 0 0 1-.172.43.572.572 0 0 1-.425.176h-.403a.583.583 0 0 1-.597-.598c0-.168.054-.313.171-.43a.572.572 0 0 1 .426-.176Zm11.2 0h.402a.583.583 0 0 1 .597.598.583.583 0 0 1-.171.43.572.572 0 0 1-.426.176h-.403a.583.583 0 0 1-.597-.598c0-.168.058-.313.172-.43a.572.572 0 0 1 .425-.176Zm-1.715 5.118-.301-.282a.572.572 0 0 1-.176-.425.63.63 0 0 1 .191-.426.596.596 0 0 1 .426-.184.59.59 0 0 1 .426.184l.285.3a.574.574 0 0 1 0 .833.58.58 0 0 1-.426.183.568.568 0 0 1-.425-.183Zm-8.2-.848.282-.285a.596.596 0 0 1 .425-.184.59.59 0 0 1 .426.184.59.59 0 0 1 .184.426c0 .16-.063.3-.184.425l-.3.301a.538.538 0 0 1-.419.172.586.586 0 0 1-.414-.191.568.568 0 0 1-.183-.426c0-.16.058-.3.183-.422Zm2.25-1.402C5.11 9.64 4.801 8.886 4.801 8c0-.488.101-.953.308-1.39.204-.442.5-.805.891-1.094V3.602c0-.332.117-.614.352-.848.234-.238.52-.356.847-.356h1.602c.328 0 .613.118.847.356.235.234.352.516.352.848v1.914c.39.289.688.652.89 1.093.208.438.31.903.31 1.391 0 .887-.313 1.64-.938 2.266a3.096 3.096 0 0 1-2.266.933c-.887 0-1.64-.312-2.262-.933ZM7.2 4.918a2.732 2.732 0 0 1 .8-.117 2.732 2.732 0 0 1 .802.117V3.602H7.199ZM8.012 10c.558 0 1.031-.195 1.414-.582C9.809 9.028 10 8.555 10 8c0-.555-.191-1.027-.574-1.418A1.916 1.916 0 0 0 8.012 6c-.559 0-1.035.191-1.426.574C6.196 6.957 6 7.43 6 7.992c0 .563.195 1.035.586 1.426.39.387.867.582 1.426.582ZM8 7.984Zm0 0">
        </path>
      </g>
    </defs>
  </svg>
</cr-iconset>`;
}
else {
    div.innerHTML = getTrustedHTML `
<cr-iconset name="iph" size="24">
  <svg>
    <defs>
      <g id="celebration">
        <path fill="none" d="M0 0h20v20H0z"></path>
        <path fill-rule="evenodd"
          d="m2 22 14-5-9-9-5 14Zm10.35-5.82L5.3 18.7l2.52-7.05 4.53 4.53ZM14.53 12.53l5.59-5.59a1.25 1.25 0 0 1 1.77 0l.59.59 1.06-1.06-.59-.59a2.758 2.758 0 0 0-3.89 0l-5.59 5.59 1.06 1.06ZM10.06 6.88l-.59.59 1.06 1.06.59-.59a2.758 2.758 0 0 0 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76ZM17.06 11.88l-1.59 1.59 1.06 1.06 1.59-1.59a1.25 1.25 0 0 1 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61a2.758 2.758 0 0 0-3.89 0ZM15.06 5.88l-3.59 3.59 1.06 1.06 3.59-3.59a2.758 2.758 0 0 0 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77Z">
        </path>
      </g>
      <g id="lightbulb_outline">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2 11.7V16h-4v-2.3C8.48 12.63 7 11.53 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.49-1.51 3.65-3 4.7z">
        </path>
      </g>
      <g id="lightbulb_outline_chrome_refresh" width="20" height="20" viewBox="0 -960 960 960">
        <path
          d="M479.779-81.413q-30.975 0-52.812-22.704-21.837-22.704-21.837-55.035h149.74q0 32.631-22.058 55.185-22.058 22.554-53.033 22.554ZM333.848-209.065v-75.587h292.304v75.587H333.848Zm-15-125.5Q254.696-374 219.282-440.533q-35.413-66.532-35.413-142.163 0-123.288 86.364-209.59 86.363-86.301 209.739-86.301t209.767 86.301q86.392 86.302 86.392 209.59 0 75.87-35.413 142.283Q705.304-374 641.152-334.565H318.848Zm26.348-83h269.608q37.283-30.522 57.805-73.566 20.521-43.043 20.521-91.512 0-89.424-61.812-151.184-61.813-61.76-151.087-61.76-89.274 0-151.318 61.76-62.043 61.76-62.043 151.184 0 48.469 20.521 91.512 20.522 43.044 57.805 73.566Zm134.804 0Z">
        </path>
      </g>
      <g id="chat_spark" width="20" height="20" viewBox="0 0 20 20">
        <path
          d="M10 18a7.7 7.7 0 0 0-.625-3.104 7.858 7.858 0 0 0-1.73-2.542 7.86 7.86 0 0 0-2.54-1.729A7.7 7.7 0 0 0 2 10a7.7 7.7 0 0 0 3.104-.625 8.027 8.027 0 0 0 4.271-4.27A7.797 7.797 0 0 0 10 2a7.79 7.79 0 0 0 .625 3.104 8.28 8.28 0 0 0 1.708 2.563 8.28 8.28 0 0 0 2.563 1.708A7.797 7.797 0 0 0 18 10a7.797 7.797 0 0 0-3.104.625 8.027 8.027 0 0 0-4.27 4.27A7.7 7.7 0 0 0 9.999 18Z">
        </path>
      </g>
      <g id="wb_incandescent" viewBox="0 0 16 16">
        <path
          d="M7.4 14.4V12.8H8.6V14.4H7.4ZM1.6 8.6V7.4H3.2V8.6H1.6ZM12.8 8.6V7.4H14.4V8.6H12.8ZM12.1 12.95L10.9667 11.8167L11.8167 10.9667L12.95 12.1L12.1 12.95ZM3.9 12.95L3.05 12.1L4.18333 10.9667L5.03333 11.8167L3.9 12.95ZM8 11.2C7.11111 11.2 6.35556 10.8889 5.73333 10.2667C5.11111 9.64444 4.8 8.88889 4.8 8C4.8 7.51111 4.9 7.05 5.1 6.61667C5.31111 6.17222 5.61111 5.80556 6 5.51667V2.4H10V5.51667C10.3889 5.80556 10.6833 6.17222 10.8833 6.61667C11.0944 7.05 11.2 7.51111 11.2 8C11.2 8.88889 10.8889 9.64444 10.2667 10.2667C9.64445 10.8889 8.88889 11.2 8 11.2ZM7.2 4.91667C7.33333 4.87222 7.46667 4.84444 7.6 4.83333C7.73333 4.81111 7.86667 4.8 8 4.8C8.13333 4.8 8.26667 4.81111 8.4 4.83333C8.53333 4.84444 8.66667 4.87222 8.8 4.91667V3.6H7.2V4.91667ZM8.01667 10C8.57222 10 9.03889 9.80556 9.41667 9.41667C9.80556 9.02778 10 8.55556 10 8C10 7.44444 9.80556 6.97222 9.41667 6.58333C9.03889 6.19444 8.57222 6 8.01667 6C7.45 6 6.97222 6.19444 6.58333 6.58333C6.19444 6.96111 6 7.43333 6 8C6 8.55556 6.19444 9.02778 6.58333 9.41667C6.97222 9.80556 7.45 10 8.01667 10Z">
        </path>
      </g>
    </defs>
  </svg>
</cr-iconset>`;
}
const iconsets = div.querySelectorAll('cr-iconset');
for (const iconset of iconsets) {
    document.head.appendChild(iconset);
}

let instance = null;
function getCss() {
    return instance || (instance = [...[getCss$b()], css `:host{--help-bubble-background:var(--color-feature-promo-bubble-background,var(--google-blue-700));--help-bubble-foreground:var(--color-feature-promo-bubble-foreground,var(--google-grey-200));--help-bubble-border-radius:12px;--help-bubble-close-button-icon-size:16px;--help-bubble-close-button-size:20px;--help-bubble-element-spacing:8px;--help-bubble-padding:20px;--help-bubble-font-weight:400;border-radius:var(--help-bubble-border-radius);box-shadow:0 6px 10px 4px rgba(60,64,67,0.15),0 2px 3px rgba(60,64,67,0.3);box-sizing:border-box;position:absolute;z-index:1}#arrow{--help-bubble-arrow-size:11.3px;--help-bubble-arrow-size-half:calc(var(--help-bubble-arrow-size) / 2);--help-bubble-arrow-diameter:16px;--help-bubble-arrow-radius:calc(var(--help-bubble-arrow-diameter) / 2);--help-bubble-arrow-edge-offset:22px;--help-bubble-arrow-offset:calc(var(--help-bubble-arrow-edge-offset) + var(--help-bubble-arrow-radius));--help-bubble-arrow-border-radius:2px;position:absolute}#inner-arrow{background-color:var(--help-bubble-background);height:var(--help-bubble-arrow-size);left:calc(0px - var(--help-bubble-arrow-size-half));position:absolute;top:calc(0px - var(--help-bubble-arrow-size-half));transform:rotate(45deg);width:var(--help-bubble-arrow-size);z-index:-1}#arrow.bottom-edge{bottom:0}#arrow.bottom-edge #inner-arrow{border-bottom-right-radius:var(--help-bubble-arrow-border-radius)}#arrow.top-edge{top:0}#arrow.top-edge #inner-arrow{border-top-left-radius:var(--help-bubble-arrow-border-radius)}#arrow.right-edge{right:0}#arrow.right-edge #inner-arrow{border-top-right-radius:var(--help-bubble-arrow-border-radius)}#arrow.left-edge{left:0}#arrow.left-edge #inner-arrow{border-bottom-left-radius:var(--help-bubble-arrow-border-radius)}#arrow.top-position{top:var(--help-bubble-arrow-offset)}#arrow.vertical-center-position{top:50%}#arrow.bottom-position{bottom:var(--help-bubble-arrow-offset)}#arrow.left-position{left:var(--help-bubble-arrow-offset)}#arrow.horizontal-center-position{left:50%}#arrow.right-position{right:var(--help-bubble-arrow-offset)}#topContainer{display:flex;flex-direction:row}#progress{display:inline-block;flex:auto}#progress div{--help-bubble-progress-size:8px;background-color:var(--help-bubble-foreground);border:1px solid var(--help-bubble-foreground);border-radius:50%;display:inline-block;height:var(--help-bubble-progress-size);margin-inline-end:var(--help-bubble-element-spacing);margin-top:5px;width:var(--help-bubble-progress-size)}#progress .total-progress{background-color:var(--help-bubble-background)}#topBody,#mainBody{flex:1;font-size:14px;font-style:normal;font-weight:var(--help-bubble-font-weight);letter-spacing:0.3px;line-height:20px;margin:0}#title{flex:1;font-size:18px;font-style:normal;font-weight:500;line-height:24px;margin:0}.help-bubble{--cr-focus-outline-color:var(--help-bubble-foreground);background-color:var(--help-bubble-background);border-radius:var(--help-bubble-border-radius);box-sizing:border-box;color:var(--help-bubble-foreground);display:flex;flex-direction:column;justify-content:space-between;max-width:350px;min-width:200px;padding:var(--help-bubble-padding);position:relative}#main{display:flex;flex-direction:row;justify-content:flex-start;margin-top:var(--help-bubble-element-spacing)}#middleRowSpacer{margin-inline-start:32px}cr-icon-button,cr-button{--help-bubble-button-foreground:var(--help-bubble-foreground);--help-bubble-button-background:var(--help-bubble-background);--help-bubble-button-hover-alpha:10%}cr-button.default-button{--help-bubble-button-foreground:var(--color-feature-promo-bubble-default-button-foreground,var(--help-bubble-background));--help-bubble-button-background:var(--color-feature-promo-bubble-default-button-background,var(--help-bubble-foreground));--help-bubble-button-hover-alpha:6%}@media (prefers-color-scheme:dark){cr-icon-button,cr-button{--help-bubble-button-hover-alpha:6%}cr-button.default-button{--help-bubble-button-hover-alpha:10%}}cr-icon-button:hover,#buttons cr-button:hover{background-color:color-mix(in srgb,var(--help-bubble-button-foreground) var(--help-bubble-button-hover-alpha),var(--help-bubble-button-background))}cr-icon-button{--cr-icon-button-fill-color:var(--help-bubble-button-foreground);--cr-icon-button-icon-size:var(--help-bubble-close-button-icon-size);--cr-icon-button-size:var(--help-bubble-close-button-size);--cr-icon-button-stroke-color:var(--help-bubble-button-foreground);box-sizing:border-box;display:block;flex:none;float:right;height:var(--cr-icon-button-size);margin:0;margin-inline-start:var(--help-bubble-element-spacing);order:2;width:var(--cr-icon-button-size)}cr-icon-button:focus-visible:focus{box-shadow:inset 0 0 0 1px var(--cr-focus-outline-color)}#bodyIcon{--help-bubble-body-icon-image-size:18px;--help-bubble-body-icon-size:24px;--iron-icon-height:var(--help-bubble-body-icon-image-size);--iron-icon-width:var(--help-bubble-body-icon-image-size);background-color:var(--help-bubble-foreground);border-radius:50%;box-sizing:border-box;color:var(--help-bubble-background);height:var(--help-bubble-body-icon-size);margin-inline-end:var(--help-bubble-element-spacing);padding:calc((var(--help-bubble-body-icon-size) - var(--help-bubble-body-icon-image-size)) / 2);text-align:center;width:var(--help-bubble-body-icon-size)}#bodyIcon cr-icon{display:block}#buttons{display:flex;flex-direction:row;justify-content:flex-end;margin-top:16px}#buttons cr-button{--cr-button-border-color:var(--help-bubble-foreground);--cr-button-text-color:var(--help-bubble-button-foreground);--cr-button-background-color:var(--help-bubble-button-background)}#buttons cr-button:focus{box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:1px}#buttons cr-button:not(:first-child){margin-inline-start:var(--help-bubble-element-spacing)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml() {
    // clang-format off
    return html `
<link rel="stylesheet"
    href="chrome://theme/colors.css?sets=ui,chrome&shadow_host=true">
<div class="help-bubble" role="alertdialog" aria-modal="true"
    aria-labelledby="title" aria-describedby="body" aria-live="assertive"
    @keydown="${this.onKeydown_}" @click="${this.onHelpBubbleClick_}">
  <div id="topContainer">
    <div id="bodyIcon" ?hidden="${!this.shouldShowBodyIcon_()}" role="image"
        aria-label="${this.bodyIconAltText}">
      <cr-icon icon="iph:${this.bodyIconName}"></cr-icon>
    </div>
    <div id="progress" ?hidden="${!this.progress}" role="progressbar"
        aria-valuenow="${this.progress ? this.progress.current : nothing}"
        aria-valuemin="1"
        aria-valuemax="${this.progress ? this.progress.total : nothing}">
      ${this.progressData_.map((_item, index) => html `
        <div class="${this.getProgressClass_(index)}"></div>
      `)}
    </div>
    <h1 id="title" ?hidden="${!this.shouldShowTitleInTopContainer_()}">
      ${this.titleText}
    </h1>
    <p id="topBody" ?hidden="${!this.shouldShowBodyInTopContainer_()}">
      ${this.bodyText}
    </p>
    <cr-icon-button id="close" iron-icon="cr:close"
        aria-label="${this.closeButtonAltText}"
        @click="${this.onCloseButtonClick_}"
        tabindex="${this.closeButtonTabIndex}">
    </cr-icon-button>
  </div>
  <div id="main" ?hidden="${!this.shouldShowBodyInMain_()}">
    <div id="middleRowSpacer" ?hidden="${!this.shouldShowBodyIcon_()}"></div>
    <p id="mainBody">${this.bodyText}</p>
  </div>
  <div id="buttons" ?hidden="${!this.buttons.length}">
    ${this.sortedButtons.map(item => html `
      <cr-button id="${this.getButtonId_(item)}"
          tabindex="${this.getButtonTabIndex_(item)}"
          class="${this.getButtonClass_(item.isDefault)}"
          @click="${this.onButtonClick_}" role="button"
          aria-label="${item.text}"><!--
        -->${item.text}<!--
      --></cr-button>
    `)}
  </div>
  <div id="arrow" class="${this.getArrowClass_()}">
    <div id="inner-arrow"></div>
  </div>
</div>`;
    // clang-format on
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A bubble for displaying in-product help. These are created
 * dynamically by HelpBubbleMixin, and their API should be considered an
 * implementation detail and subject to change (you should not add them to your
 * components directly).
 */
const ACTION_BUTTON_ID_PREFIX = 'action-button-';
const HELP_BUBBLE_DISMISSED_EVENT = 'help-bubble-dismissed';
const HELP_BUBBLE_TIMED_OUT_EVENT = 'help-bubble-timed-out';
const HELP_BUBBLE_SCROLL_ANCHOR_OPTIONS = {
    behavior: 'smooth',
    block: 'center',
};
class HelpBubbleElement extends CrLitElement {
    static get is() {
        return 'help-bubble';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            nativeId: {
                type: String,
                reflect: true,
            },
            secondaryId: {
                type: String,
                reflect: true,
            },
            position: {
                type: Number,
                reflect: true,
            },
            bodyIconName: { type: String },
            bodyIconAltText: { type: String },
            progress: { type: Object },
            titleText: { type: String },
            bodyText: { type: String },
            buttons: { type: Array },
            sortedButtons: { type: Array },
            closeButtonAltText: { type: String },
            closeButtonTabIndex: { type: Number },
            progressData_: {
                type: Array,
                state: true,
            },
        };
    }
    #nativeId_accessor_storage = '';
    get nativeId() { return this.#nativeId_accessor_storage; }
    set nativeId(value) { this.#nativeId_accessor_storage = value; }
    #secondaryId_accessor_storage = '';
    get secondaryId() { return this.#secondaryId_accessor_storage; }
    set secondaryId(value) { this.#secondaryId_accessor_storage = value; }
    #bodyText_accessor_storage = '';
    get bodyText() { return this.#bodyText_accessor_storage; }
    set bodyText(value) { this.#bodyText_accessor_storage = value; }
    #titleText_accessor_storage = '';
    get titleText() { return this.#titleText_accessor_storage; }
    set titleText(value) { this.#titleText_accessor_storage = value; }
    #closeButtonAltText_accessor_storage = '';
    get closeButtonAltText() { return this.#closeButtonAltText_accessor_storage; }
    set closeButtonAltText(value) { this.#closeButtonAltText_accessor_storage = value; }
    #closeButtonTabIndex_accessor_storage = 0;
    get closeButtonTabIndex() { return this.#closeButtonTabIndex_accessor_storage; }
    set closeButtonTabIndex(value) { this.#closeButtonTabIndex_accessor_storage = value; }
    #position_accessor_storage = HelpBubbleArrowPosition.TOP_CENTER;
    get position() { return this.#position_accessor_storage; }
    set position(value) { this.#position_accessor_storage = value; }
    #buttons_accessor_storage = [];
    get buttons() { return this.#buttons_accessor_storage; }
    set buttons(value) { this.#buttons_accessor_storage = value; }
    #sortedButtons_accessor_storage = [];
    get sortedButtons() { return this.#sortedButtons_accessor_storage; }
    set sortedButtons(value) { this.#sortedButtons_accessor_storage = value; }
    #progress_accessor_storage = null;
    get progress() { return this.#progress_accessor_storage; }
    set progress(value) { this.#progress_accessor_storage = value; }
    #bodyIconName_accessor_storage = null;
    get bodyIconName() { return this.#bodyIconName_accessor_storage; }
    set bodyIconName(value) { this.#bodyIconName_accessor_storage = value; }
    #bodyIconAltText_accessor_storage = '';
    get bodyIconAltText() { return this.#bodyIconAltText_accessor_storage; }
    set bodyIconAltText(value) { this.#bodyIconAltText_accessor_storage = value; }
    timeoutMs = null;
    timeoutTimerId = null;
    debouncedUpdate = null;
    padding = { top: 0, bottom: 0, left: 0, right: 0 };
    fixed = false;
    focusAnchor = false;
    buttonListObserver_ = null;
    /**
     * HTMLElement corresponding to |this.nativeId|.
     */
    anchorElement_ = null;
    #progressData__accessor_storage = [];
    /**
     * Backing data for the dom-repeat that generates progress indicators.
     * The elements are placeholders only.
     */
    get progressData_() { return this.#progressData__accessor_storage; }
    set progressData_(value) { this.#progressData__accessor_storage = value; }
    /**
     * Watches the offsetParent for resize events, allowing the bubble to be
     * repositioned in response. Useful for when the content around a help bubble
     * target can be filtered/expanded/repositioned.
     */
    resizeObserver_ = null;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('buttons')) {
            this.sortedButtons = this.buttons.toSorted(this.buttonSortFunc_);
        }
    }
    /**
     * Shows the bubble.
     */
    show(anchorElement) {
        this.anchorElement_ = anchorElement;
        // Set up the progress track.
        if (this.progress) {
            this.progressData_ = new Array(this.progress.total);
            this.progressData_.fill(true);
        }
        else {
            this.progressData_ = [];
        }
        this.closeButtonTabIndex =
            this.buttons.length ? this.buttons.length + 2 : 1;
        assert(this.anchorElement_, 'Tried to show a help bubble but anchorElement does not exist');
        // Reset the aria-hidden attribute as screen readers need to access the
        // contents of an opened bubble.
        this.style.display = 'block';
        this.style.position = this.fixed ? 'fixed' : 'absolute';
        this.style.visibility = 'visible';
        this.removeAttribute('aria-hidden');
        this.updatePosition();
        if (this.timeoutMs !== null) {
            const timedOutCallback = () => {
                this.fire(HELP_BUBBLE_TIMED_OUT_EVENT, {
                    nativeId: this.nativeId,
                    secondaryId: this.secondaryId,
                });
            };
            this.timeoutTimerId = setTimeout(timedOutCallback, this.timeoutMs);
        }
    }
    /**
     * Hides the bubble, clears out its contents, and ensures that screen readers
     * ignore it while hidden.
     *
     * TODO(dfried): We are moving towards formalizing help bubbles as single-use;
     * in which case most of this tear-down logic can be removed since the entire
     * bubble will go away on hide.
     */
    hide() {
        this.style.display = 'none';
        this.style.visibility = 'hidden';
        this.setAttribute('aria-hidden', 'true');
        this.anchorElement_ = null;
        if (this.timeoutTimerId !== null) {
            clearInterval(this.timeoutTimerId);
            this.timeoutTimerId = null;
        }
    }
    /**
     * Retrieves the current anchor element, if set and the bubble is showing,
     * otherwise null.
     */
    getAnchorElement() {
        return this.anchorElement_;
    }
    /**
     * Returns the button with the given `buttonIndex`, or null if not found.
     */
    getButtonForTesting(buttonIndex) {
        return this.$.buttons.querySelector(`[id="${ACTION_BUTTON_ID_PREFIX + buttonIndex}"]`);
    }
    /**
     * Focuses a button in the bubble.
     */
    focus() {
        // First try to focus either the default button or any action button.
        const defaultButton = this.$.buttons.querySelector('cr-button.default-button') ||
            this.$.buttons.querySelector('cr-button');
        if (defaultButton) {
            defaultButton.focus();
            return;
        }
        // As a fallback, focus the close button before trying to focus the anchor;
        // this will allow the focus to stay on the close button if the anchor
        // cannot be focused.
        this.$.close.focus();
        // Maybe try to focus the anchor. This is preferable to focusing the close
        // button, but not every element can be focused.
        if (this.anchorElement_ && this.focusAnchor) {
            this.anchorElement_.focus();
        }
    }
    /**
     * Returns whether the default button is leading (true on Windows) vs trailing
     * (all other platforms).
     */
    static isDefaultButtonLeading() {
        return isWindows;
    }
    onCloseButtonClick_() {
        this.dismiss_();
    }
    dismiss_() {
        assert(this.nativeId, 'Dismiss: expected help bubble to have a native id.');
        this.fire(HELP_BUBBLE_DISMISSED_EVENT, {
            nativeId: this.nativeId,
            secondaryId: this.secondaryId,
            fromActionButton: false,
        });
    }
    /**
     * Handles ESC keypress (dismiss bubble) and prevents it from propagating up
     * to parent elements.
     */
    onKeydown_(e) {
        if (e.key === 'Escape') {
            e.stopPropagation();
            this.dismiss_();
        }
    }
    /**
     * Prevent event propagation. Attach to any event that should not bubble up
     * out of the help bubble.
     */
    onHelpBubbleClick_(e) {
        e.stopPropagation();
    }
    getProgressClass_(index) {
        return index < this.progress.current ? 'current-progress' :
            'total-progress';
    }
    shouldShowTitleInTopContainer_() {
        return !!this.titleText && !this.progress;
    }
    shouldShowBodyInTopContainer_() {
        return !this.progress && !this.titleText;
    }
    shouldShowBodyInMain_() {
        return !!this.progress || !!this.titleText;
    }
    shouldShowBodyIcon_() {
        return this.bodyIconName !== null && this.bodyIconName !== '';
    }
    onButtonClick_(e) {
        assert(this.nativeId, 'Action button clicked: expected help bubble to have a native ID.');
        assert(this.secondaryId, 'Action button clicked: expected help bubble to have a secondary ID.');
        // There is no access to the model index here due to limitations of
        // dom-repeat. However, the index is stored in the node's identifier.
        const index = parseInt(e.target.id.substring(ACTION_BUTTON_ID_PREFIX.length));
        this.fire(HELP_BUBBLE_DISMISSED_EVENT, {
            nativeId: this.nativeId,
            secondaryId: this.secondaryId,
            fromActionButton: true,
            buttonIndex: index,
        });
    }
    getButtonId_(item) {
        const index = this.buttons.indexOf(item);
        assert(index > -1);
        return ACTION_BUTTON_ID_PREFIX + index;
    }
    getButtonClass_(isDefault) {
        return isDefault ? 'default-button focus-outline-visible' :
            'focus-outline-visible';
    }
    getButtonTabIndex_(item) {
        const index = this.buttons.indexOf(item);
        assert(index > -1);
        return item.isDefault ? 1 : index + 2;
    }
    buttonSortFunc_(button1, button2) {
        // Default button is leading on Windows, trailing on other platforms.
        if (button1.isDefault) {
            return isWindows ? -1 : 1;
        }
        if (button2.isDefault) {
            return isWindows ? 1 : -1;
        }
        return 0;
    }
    /**
     * Determine classes that describe the arrow position relative to the
     * HelpBubble
     */
    getArrowClass_() {
        let classList = '';
        // `*-edge` classes move arrow to a HelpBubble edge
        switch (this.position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.TOP_RIGHT:
                classList = 'top-edge ';
                break;
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                classList = 'bottom-edge ';
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
                classList = 'left-edge ';
                break;
            case HelpBubbleArrowPosition.RIGHT_TOP:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                classList = 'right-edge ';
                break;
            default:
                assertNotReached('Unknown help bubble position: ' + this.position);
        }
        // `*-position` classes move arrow along the HelpBubble edge
        switch (this.position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
                classList += 'left-position';
                break;
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
                classList += 'horizontal-center-position';
                break;
            case HelpBubbleArrowPosition.TOP_RIGHT:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                classList += 'right-position';
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.RIGHT_TOP:
                classList += 'top-position';
                break;
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
                classList += 'vertical-center-position';
                break;
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                classList += 'bottom-position';
                break;
            default:
                assertNotReached('Unknown help bubble position: ' + this.position);
        }
        return classList;
    }
    /**
     * Sets the bubble position, as relative to that of the anchor element and
     * |this.position|.
     */
    updatePosition() {
        assert(this.anchorElement_, 'Update position: expected valid anchor element.');
        // How far HelpBubble is from anchorElement
        const ANCHOR_OFFSET = 16;
        const ARROW_WIDTH = 16;
        // The nearest an arrow can be to the adjacent HelpBubble edge
        const ARROW_OFFSET_FROM_EDGE = 22 + (ARROW_WIDTH / 2);
        // Inclusive of 8px visible arrow and 8px margin.
        const anchorRect = this.anchorElement_.getBoundingClientRect();
        const anchorRectCenter = {
            x: anchorRect.left + (anchorRect.width / 2),
            y: anchorRect.top + (anchorRect.height / 2),
        };
        const helpBubbleRect = this.getBoundingClientRect();
        // component is inserted at mixin root so start with anchor offsets
        let offsetX = this.anchorElement_.offsetLeft;
        let offsetY = this.anchorElement_.offsetTop;
        // Move HelpBubble to correct side of the anchorElement
        switch (this.position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.TOP_RIGHT:
                offsetY += anchorRect.height + ANCHOR_OFFSET + this.padding.bottom;
                break;
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                offsetY -= (helpBubbleRect.height + ANCHOR_OFFSET + this.padding.top);
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
                offsetX += anchorRect.width + ANCHOR_OFFSET + this.padding.right;
                break;
            case HelpBubbleArrowPosition.RIGHT_TOP:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                offsetX -= (helpBubbleRect.width + ANCHOR_OFFSET + this.padding.left);
                break;
            default:
                assertNotReached();
        }
        // Move HelpBubble along the anchorElement edge according to arrow position
        switch (this.position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
                // If anchor element width is small, point arrow to center of anchor
                // element
                if ((anchorRect.left + ARROW_OFFSET_FROM_EDGE) > anchorRectCenter.x) {
                    offsetX += (anchorRect.width / 2) - ARROW_OFFSET_FROM_EDGE;
                }
                break;
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
                offsetX += (anchorRect.width / 2) - (helpBubbleRect.width / 2);
                break;
            case HelpBubbleArrowPosition.TOP_RIGHT:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                // If anchor element width is small, point arrow to center of anchor
                // element
                if ((anchorRect.right - ARROW_OFFSET_FROM_EDGE) < anchorRectCenter.x) {
                    offsetX += (anchorRect.width / 2) - helpBubbleRect.width +
                        ARROW_OFFSET_FROM_EDGE;
                }
                else {
                    // Right-align bubble and anchor elements
                    offsetX += anchorRect.width - helpBubbleRect.width;
                }
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.RIGHT_TOP:
                // If anchor element height is small, point arrow to center of anchor
                // element
                if ((anchorRect.top + ARROW_OFFSET_FROM_EDGE) > anchorRectCenter.y) {
                    offsetY += (anchorRect.height / 2) - ARROW_OFFSET_FROM_EDGE;
                }
                break;
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
                offsetY += (anchorRect.height / 2) - (helpBubbleRect.height / 2);
                break;
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                // If anchor element height is small, point arrow to center of anchor
                // element
                if ((anchorRect.bottom - ARROW_OFFSET_FROM_EDGE) < anchorRectCenter.y) {
                    offsetY += (anchorRect.height / 2) - helpBubbleRect.height +
                        ARROW_OFFSET_FROM_EDGE;
                }
                else {
                    // Bottom-align bubble and anchor elements
                    offsetY += anchorRect.height - helpBubbleRect.height;
                }
                break;
            default:
                assertNotReached();
        }
        this.style.top = offsetY.toString() + 'px';
        this.style.left = offsetX.toString() + 'px';
    }
}
customElements.define(HelpBubbleElement.is, HelpBubbleElement);

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ANCHOR_HIGHLIGHT_CLASS = 'help-anchor-highlight';
function clampPadding(n = 0) {
    return Math.max(0, Math.min(20, n));
}
// Return whether the current language is right-to-left
function isRtlLang(element) {
    return window.getComputedStyle(element).direction === 'rtl';
}
// Reflect arrow position across y-axis
function reflectArrowPosition(position) {
    switch (position) {
        case HelpBubbleArrowPosition.TOP_LEFT:
            return HelpBubbleArrowPosition.TOP_RIGHT;
        case HelpBubbleArrowPosition.TOP_RIGHT:
            return HelpBubbleArrowPosition.TOP_LEFT;
        case HelpBubbleArrowPosition.BOTTOM_LEFT:
            return HelpBubbleArrowPosition.BOTTOM_RIGHT;
        case HelpBubbleArrowPosition.BOTTOM_RIGHT:
            return HelpBubbleArrowPosition.BOTTOM_LEFT;
        case HelpBubbleArrowPosition.LEFT_TOP:
            return HelpBubbleArrowPosition.RIGHT_TOP;
        case HelpBubbleArrowPosition.LEFT_CENTER:
            return HelpBubbleArrowPosition.RIGHT_CENTER;
        case HelpBubbleArrowPosition.LEFT_BOTTOM:
            return HelpBubbleArrowPosition.RIGHT_BOTTOM;
        case HelpBubbleArrowPosition.RIGHT_TOP:
            return HelpBubbleArrowPosition.LEFT_TOP;
        case HelpBubbleArrowPosition.RIGHT_CENTER:
            return HelpBubbleArrowPosition.LEFT_CENTER;
        case HelpBubbleArrowPosition.RIGHT_BOTTOM:
            return HelpBubbleArrowPosition.LEFT_BOTTOM;
        default:
            return position;
    }
}
/**
 * HelpBubble controller class
 * - There should exist only one HelpBubble instance for each nativeId
 * - The mapping between nativeId and htmlId is held within this instance
 * - The rest of the parameters are passed to createBubble
 */
class HelpBubbleController {
    nativeId_;
    root_;
    anchor_ = null;
    bubble_ = null;
    options_ = {};
    /**
     * Whether a help bubble (webui or external) is being shown for this
     * controller
     */
    isBubbleShowing_ = false;
    /** Keep track of last known anchor visibility status. */
    isAnchorVisible_ = false;
    /** Keep track of last known anchor bounds. */
    lastAnchorBounds_ = { x: 0, y: 0, width: 0, height: 0 };
    /*
     * This flag is used to know whether to send position updates for
     * external bubbles
     */
    isExternal_ = false;
    constructor(nativeId, root) {
        assert(nativeId, 'HelpBubble: nativeId was not defined when registering help bubble');
        assert(root, 'HelpBubble: shadowRoot was not defined when registering help bubble');
        this.nativeId_ = nativeId;
        this.root_ = root;
    }
    isBubbleShowing() {
        return this.isBubbleShowing_;
    }
    canShowBubble() {
        return this.hasAnchor();
    }
    hasBubble() {
        return !!this.bubble_;
    }
    getBubble() {
        return this.bubble_;
    }
    hasAnchor() {
        return !!this.anchor_;
    }
    getAnchor() {
        return this.anchor_;
    }
    getNativeId() {
        return this.nativeId_;
    }
    /** Returns the original options passed during registration. */
    getOptions() {
        return this.options_;
    }
    getPadding() {
        const padding = { top: 0, bottom: 0, left: 0, right: 0 };
        padding.top = clampPadding(this.options_.paddingTop);
        padding.left = clampPadding(this.options_.paddingLeft);
        padding.bottom = clampPadding(this.options_.paddingBottom);
        padding.right = clampPadding(this.options_.paddingRight);
        return padding;
    }
    getAnchorVisibility() {
        return this.isAnchorVisible_;
    }
    getLastAnchorBounds() {
        return this.lastAnchorBounds_;
    }
    updateAnchorVisibility(isVisible, bounds) {
        const changed = isVisible !== this.isAnchorVisible_ ||
            bounds.x !== this.lastAnchorBounds_.x ||
            bounds.y !== this.lastAnchorBounds_.y ||
            bounds.width !== this.lastAnchorBounds_.width ||
            bounds.height !== this.lastAnchorBounds_.height;
        this.isAnchorVisible_ = isVisible;
        this.lastAnchorBounds_ = bounds;
        if (changed && this.bubble_ && isVisible) {
            this.bubble_.updatePosition();
        }
        return changed;
    }
    isAnchorFixed() {
        return !!this.options_.fixed;
    }
    isExternal() {
        return this.isExternal_;
    }
    updateExternalShowingStatus(isShowing) {
        this.isExternal_ = true;
        this.isBubbleShowing_ = isShowing;
        this.setAnchorHighlight_(isShowing);
        if (isShowing) {
            this.options_.onHelpBubbleShown?.();
        }
        else {
            this.options_.onHelpBubbleHidden?.();
        }
    }
    track(trackable, options) {
        assert(!this.anchor_);
        let anchor = null;
        if (typeof trackable === 'string') {
            anchor = this.root_.querySelector(trackable);
        }
        else if (Array.isArray(trackable)) {
            anchor = this.deepQuery(trackable);
        }
        else if (trackable instanceof HTMLElement) {
            anchor = trackable;
        }
        else {
            assertNotReached('HelpBubble: anchor argument was unrecognized when registering ' +
                'help bubble');
        }
        if (!anchor) {
            return false;
        }
        this.anchor_ = anchor;
        this.options_ = options;
        return true;
    }
    deepQuery(selectors) {
        let cur = this.root_;
        for (const selector of selectors) {
            if (cur.shadowRoot) {
                cur = cur.shadowRoot;
            }
            const el = cur.querySelector(selector);
            if (!el) {
                return null;
            }
            else {
                cur = el;
            }
        }
        return cur;
    }
    show() {
        this.isExternal_ = false;
        if (!(this.bubble_ && this.anchor_)) {
            return;
        }
        this.bubble_.show(this.anchor_);
        this.isBubbleShowing_ = true;
        this.setAnchorHighlight_(true);
        this.options_.onHelpBubbleShown?.();
    }
    hide() {
        if (!this.bubble_) {
            return;
        }
        this.bubble_.hide();
        this.bubble_.remove();
        this.bubble_ = null;
        this.isBubbleShowing_ = false;
        this.setAnchorHighlight_(false);
        this.options_.onHelpBubbleHidden?.();
    }
    createBubble(params) {
        assert(this.anchor_, 'HelpBubble: anchor was not defined when showing help bubble');
        assert(this.anchor_.parentNode, 'HelpBubble: anchor element not in DOM');
        this.bubble_ = document.createElement('help-bubble');
        this.bubble_.nativeId = this.nativeId_;
        this.bubble_.secondaryId = params.id.secondaryIdentifier;
        this.bubble_.position = isRtlLang(this.anchor_) ?
            reflectArrowPosition(params.position) :
            params.position;
        this.bubble_.closeButtonAltText = params.closeButtonAltText;
        this.bubble_.bodyText = params.bodyText;
        this.bubble_.bodyIconName = params.bodyIconName || null;
        this.bubble_.bodyIconAltText = params.bodyIconAltText;
        this.bubble_.titleText = params.titleText || '';
        this.bubble_.progress = params.progress || null;
        this.bubble_.buttons = params.buttons;
        this.bubble_.padding = this.getPadding();
        this.bubble_.focusAnchor = params.focusOnShowHint === false;
        if (params.timeout) {
            this.bubble_.timeoutMs = Number(params.timeout.microseconds / 1000n);
            assert(this.bubble_.timeoutMs > 0);
        }
        assert(!this.bubble_.progress ||
            this.bubble_.progress.total >= this.bubble_.progress.current);
        assert(this.root_);
        // Because the help bubble uses either absolute or fixed positioning, it
        // need only be placed within the offset parent of the anchor. However it is
        // placed as a sibling to the anchor because that guarantees proper tab
        // order.
        if (getComputedStyle(this.anchor_).getPropertyValue('position') ===
            'fixed') {
            this.bubble_.fixed = true;
        }
        const container = this.options_.containerElement;
        if (container) {
            container.appendChild(this.bubble_);
        }
        else {
            this.anchor_.parentNode.insertBefore(this.bubble_, this.anchor_);
        }
        return this.bubble_;
    }
    /**
     * Styles the anchor element to appear highlighted while the bubble is open,
     * or removes the highlight.
     */
    setAnchorHighlight_(highlight) {
        assert(this.anchor_, 'Set anchor highlight: expected valid anchor element.');
        this.anchor_.classList.toggle(ANCHOR_HIGHLIGHT_CLASS, highlight);
        if (highlight) {
            (this.bubble_ || this.anchor_).focus();
            this.anchor_.scrollIntoView(HELP_BUBBLE_SCROLL_ANCHOR_OPTIONS);
        }
    }
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Logic common to mixing implementations for supporting help
 * bubbles.
 *
 * See README.md for more information.
 */
/**
 * Internal implementation for help bubble mixins. See HelpBubbleMixinInterface
 * for documentation for public methods.
 */
class HelpBubbleMixinCommon {
    helpBubbleProxy_;
    host_;
    isConnected_ = false;
    /**
     * A map from the name of the native identifier used in the tutorial or
     * IPH definition to the target element's HTML ID.
     *
     * Example entry:
     *   "kHeightenSecuritySettingsElementId" => "toggleSecureMode"
     */
    helpBubbleControllerById_ = new Map();
    helpBubbleListenerIds_ = [];
    helpBubbleDismissedEventTracker_ = new EventTracker();
    constructor(proxy, host) {
        assert(proxy);
        assert(host);
        this.helpBubbleProxy_ = proxy;
        this.host_ = host;
    }
    get controllers() {
        return Array.from(this.helpBubbleControllerById_.values());
    }
    onConnected() {
        const router = this.helpBubbleProxy_.callbackRouter;
        this.helpBubbleListenerIds_.push(router.showHelpBubble.addListener(this.onShowHelpBubble_.bind(this)), router.toggleFocusForAccessibility.addListener(this.onToggleHelpBubbleFocusForAccessibility_.bind(this)), router.hideHelpBubble.addListener(this.onHideHelpBubble_.bind(this)), router.externalHelpBubbleUpdated.addListener(this.onExternalHelpBubbleUpdated_.bind(this)));
        // When the component is connected, if the target elements were
        // already registered, they should be observed now. Any targets
        // registered from this point forward will observed on registration.
        this.controllers.forEach(ctrl => this.observeControllerAnchor_(ctrl, ctrl.getOptions()));
        this.isConnected_ = true;
    }
    onDisconnected() {
        this.isConnected_ = false;
        for (const listenerId of this.helpBubbleListenerIds_) {
            this.helpBubbleProxy_.callbackRouter.removeListener(listenerId);
        }
        this.helpBubbleListenerIds_ = [];
        this.helpBubbleDismissedEventTracker_.removeAll();
        for (const nativeId of this.helpBubbleControllerById_.keys()) {
            this.unregisterHelpBubble(nativeId);
        }
        this.helpBubbleControllerById_.clear();
    }
    registerHelpBubble(nativeId, trackable, options = {}) {
        if (this.helpBubbleControllerById_.has(nativeId)) {
            const ctrl = this.helpBubbleControllerById_.get(nativeId);
            if (ctrl && ctrl.isBubbleShowing()) {
                return false;
            }
            this.unregisterHelpBubble(nativeId);
        }
        const controller = new HelpBubbleController(nativeId, this.host_.shadowRoot);
        controller.track(trackable, options);
        this.helpBubbleControllerById_.set(nativeId, controller);
        // This can be called before or after `connectedCallback()`, so if the
        // component isn't connected and the observer set up yet, delay
        // observation until it is.
        if (this.isConnected_) {
            this.observeControllerAnchor_(controller, options);
        }
        return true;
    }
    unregisterHelpBubble(nativeId) {
        const ctrl = this.helpBubbleControllerById_.get(nativeId);
        if (ctrl && ctrl.hasAnchor()) {
            this.unobserveControllerAnchor_(ctrl);
        }
        this.helpBubbleControllerById_.delete(nativeId);
    }
    observeControllerAnchor_(controller, options) {
        const anchor = controller.getAnchor();
        TrackedElementManager.getInstance().startTracking(anchor, controller.getNativeId(), options, this.onAnchorVisibilityChanged_.bind(this));
    }
    unobserveControllerAnchor_(controller) {
        const anchor = controller.getAnchor();
        TrackedElementManager.getInstance().stopTracking(anchor);
    }
    isHelpBubbleShowing() {
        return this.controllers.some(ctrl => ctrl.isBubbleShowing());
    }
    isHelpBubbleShowingForTesting(target) {
        const controllers = this.controllers.filter(this.filterControllersForTesting_(target));
        return !!controllers[0];
    }
    getHelpBubbleForTesting(target) {
        const controllers = this.controllers.filter(this.filterControllersForTesting_(target));
        return controllers[0] ? controllers[0].getBubble() : null;
    }
    static matchesAnchor_(ctrl, target) {
        const anchor = ctrl.getAnchor();
        if (!anchor) {
            return false;
        }
        if (target instanceof HTMLElement) {
            return anchor === target;
        }
        return anchor.id === target || ctrl.getNativeId() === target;
    }
    filterControllersForTesting_(target) {
        return ctrl => ctrl.isBubbleShowing() &&
            HelpBubbleMixinCommon.matchesAnchor_(ctrl, target);
    }
    getSortedAnchorStatusesForTesting() {
        return this.controllers
            .sort((a, b) => a.getNativeId().localeCompare(b.getNativeId()))
            .map(ctrl => ([ctrl.getNativeId(), ctrl.hasAnchor()]));
    }
    canShowHelpBubble(anchorId) {
        const controller = this.helpBubbleControllerById_.get(anchorId);
        if (!controller) {
            return false;
        }
        if (!controller.canShowBubble()) {
            return false;
        }
        const anchor = controller.getAnchor();
        // Make sure no other help bubble is showing for this anchor.
        const anchorIsUsed = this.controllers.some(otherCtrl => otherCtrl.isBubbleShowing() && otherCtrl.getAnchor() === anchor);
        return !anchorIsUsed;
    }
    showHelpBubble(params) {
        assert(this.canShowHelpBubble(params.id.nativeIdentifier), 'Can\'t show help bubble');
        const controller = this.helpBubbleControllerById_.get(params.id.nativeIdentifier);
        const bubble = controller.createBubble(params);
        this.helpBubbleDismissedEventTracker_.add(bubble, HELP_BUBBLE_DISMISSED_EVENT, this.onHelpBubbleDismissed_.bind(this));
        this.helpBubbleDismissedEventTracker_.add(bubble, HELP_BUBBLE_TIMED_OUT_EVENT, this.onHelpBubbleTimedOut_.bind(this));
        controller.show();
    }
    hideHelpBubble(nativeId) {
        const ctrl = this.helpBubbleControllerById_.get(nativeId);
        if (!ctrl || !ctrl.hasBubble()) {
            // `!ctrl` means this identifier is not handled by this mixin
            return false;
        }
        this.helpBubbleDismissedEventTracker_.remove(ctrl.getBubble(), HELP_BUBBLE_DISMISSED_EVENT);
        this.helpBubbleDismissedEventTracker_.remove(ctrl.getBubble(), HELP_BUBBLE_TIMED_OUT_EVENT);
        ctrl.hide();
        return true;
    }
    notifyHelpBubbleAnchorActivated(nativeId) {
        const ctrl = this.helpBubbleControllerById_.get(nativeId);
        if (!ctrl || !ctrl.isBubbleShowing()) {
            return false;
        }
        const anchor = ctrl.getAnchor();
        TrackedElementManager.getInstance().notifyElementActivated(anchor);
        return true;
    }
    notifyHelpBubbleAnchorCustomEvent(nativeId, customEvent) {
        const ctrl = this.helpBubbleControllerById_.get(nativeId);
        if (!ctrl || !ctrl.isBubbleShowing()) {
            return false;
        }
        const anchor = ctrl.getAnchor();
        if (anchor) {
            TrackedElementManager.getInstance().notifyCustomEvent(anchor, customEvent);
        }
        return true;
    }
    /**
     * This event is emitted by the TrackedElementManager
     */
    onAnchorVisibilityChanged_(update) {
        const id = TrackedElementManager.getElementId(update.element);
        assert(id, 'Got visibility event for element without an identifier.');
        const ctrl = this.helpBubbleControllerById_.get(id.nativeIdentifier);
        if (!ctrl || ctrl.getAnchor() !== update.element) {
            // If we've signed up for broader notifications than usual, we might get
            // one that doesn't apply to our specific anchor. Ignore it.
            return;
        }
        if (!update.visible) {
            const hidden = this.hideHelpBubble(id.nativeIdentifier);
            if (hidden) {
                this.helpBubbleProxy_.handler.helpBubbleClosed(id, HelpBubbleClosedReason.kPageChanged);
            }
        }
        if (ctrl) {
            ctrl.updateAnchorVisibility(update.visible, update.bounds);
        }
    }
    /**
     * This event is emitted by the mojo router
     */
    onShowHelpBubble_(params) {
        if (!this.helpBubbleControllerById_.has(params.id.nativeIdentifier)) {
            // Identifier not handled by this mixin.
            return;
        }
        this.showHelpBubble(params);
    }
    /**
     * This event is emitted by the mojo router
     */
    onToggleHelpBubbleFocusForAccessibility_(id) {
        if (!this.helpBubbleControllerById_.has(id.nativeIdentifier)) {
            // Identifier not handled by this mixin.
            return;
        }
        const ctrl = this.helpBubbleControllerById_.get(id.nativeIdentifier);
        if (ctrl) {
            const anchor = ctrl.getAnchor();
            if (anchor) {
                anchor.focus();
            }
        }
    }
    /**
     * This event is emitted by the mojo router
     */
    onHideHelpBubble_(id) {
        // This may be called with nativeId not handled by this mixin
        // Ignore return value to silently fail
        this.hideHelpBubble(id.nativeIdentifier);
    }
    /**
     * This event is emitted by the mojo router.
     */
    onExternalHelpBubbleUpdated_(id, shown) {
        if (!this.helpBubbleControllerById_.has(id.nativeIdentifier)) {
            // Identifier not handled by this mixin.
            return;
        }
        // Get the associated bubble and update status
        const ctrl = this.helpBubbleControllerById_.get(id.nativeIdentifier);
        ctrl.updateExternalShowingStatus(shown);
    }
    /**
     * This event is emitted by the help-bubble component
     */
    onHelpBubbleDismissed_(e) {
        const nativeIdentifier = e.detail.nativeId;
        const secondaryIdentifier = e.detail.secondaryId;
        assert(nativeIdentifier);
        assert(secondaryIdentifier);
        const hidden = this.hideHelpBubble(nativeIdentifier);
        assert(hidden);
        if (e.detail.fromActionButton) {
            this.helpBubbleProxy_.handler.helpBubbleButtonPressed({ nativeIdentifier, secondaryIdentifier }, e.detail.buttonIndex);
        }
        else {
            this.helpBubbleProxy_.handler.helpBubbleClosed({ nativeIdentifier, secondaryIdentifier }, HelpBubbleClosedReason.kDismissedByUser);
        }
    }
    /**
     * This event is emitted by the help-bubble component
     */
    onHelpBubbleTimedOut_(e) {
        const nativeIdentifier = e.detail.nativeId;
        const secondaryIdentifier = e.detail.secondaryId;
        assert(nativeIdentifier);
        assert(secondaryIdentifier);
        const hidden = this.hideHelpBubble(nativeIdentifier);
        assert(hidden);
        this.helpBubbleProxy_.handler.helpBubbleClosed({ nativeIdentifier, secondaryIdentifier }, HelpBubbleClosedReason.kTimedOut);
    }
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * See HelpBubbleMixinInterface for documentation.
 */
const HelpBubbleMixinLit = (superClass) => {
    class HelpBubbleMixinLit extends superClass {
        impl_;
        constructor(...args) {
            super(...args);
            this.impl_ =
                new HelpBubbleMixinCommon(this.createHelpBubbleProxy(), this);
        }
        createHelpBubbleProxy() {
            return browserProxyFactory.getInstance();
        }
        connectedCallback() {
            super.connectedCallback();
            this.impl_.onConnected();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.impl_.onDisconnected();
        }
        registerHelpBubble(nativeId, trackable, options = {}) {
            return this.impl_.registerHelpBubble(nativeId, trackable, options);
        }
        unregisterHelpBubble(nativeId) {
            this.impl_.unregisterHelpBubble(nativeId);
        }
        isHelpBubbleShowing() {
            return this.impl_.isHelpBubbleShowing();
        }
        isHelpBubbleShowingForTesting(target) {
            return this.impl_.isHelpBubbleShowingForTesting(target); // IN-TEST
        }
        getHelpBubbleForTesting(target) {
            return this.impl_.getHelpBubbleForTesting(target); // IN-TEST
        }
        getSortedAnchorStatusesForTesting() {
            return this.impl_.getSortedAnchorStatusesForTesting(); // IN-TEST
        }
        canShowHelpBubble(anchorId) {
            return this.impl_.canShowHelpBubble(anchorId);
        }
        showHelpBubble(params) {
            this.impl_.showHelpBubble(params);
        }
        hideHelpBubble(nativeId) {
            return this.impl_.hideHelpBubble(nativeId);
        }
        notifyHelpBubbleAnchorActivated(nativeId) {
            return this.impl_.notifyHelpBubbleAnchorActivated(nativeId);
        }
        notifyHelpBubbleAnchorCustomEvent(nativeId, customEvent) {
            return this.impl_.notifyHelpBubbleAnchorCustomEvent(nativeId, customEvent);
        }
    }
    return HelpBubbleMixinLit;
};

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// LINT.IfChange(ScrollbarWidth)
/** @return Width of a scrollbar in pixels */
function getScrollbarWidth() {
    return 14;
}
// LINT.ThenChange(
//   //components/pdf/browser/plugin_response_writer.cc:CPPScrollbarCSS,
//   //chrome/browser/resources/pdf/elements/scrollbar.css
// )
const HelpBubbleCrLitElementBase = HelpBubbleMixinLit(CrLitElement);
class PdfViewerBaseElement extends HelpBubbleCrLitElementBase {
    static get properties() {
        return {
            showErrorDialog: { type: Boolean },
            strings: { type: Object },
        };
    }
    browserApi = null;
    currentController = null;
    documentDimensions = null;
    isUserInitiatedEvent = true;
    lastViewportPosition = null;
    originalUrl = '';
    paramsParser = null;
    pdfOopifEnabled = false;
    #showErrorDialog_accessor_storage = false;
    get showErrorDialog() { return this.#showErrorDialog_accessor_storage; }
    set showErrorDialog(value) { this.#showErrorDialog_accessor_storage = value; }
    #strings_accessor_storage;
    get strings() { return this.#strings_accessor_storage; }
    set strings(value) { this.#strings_accessor_storage = value; }
    tracker = new EventTracker();
    delayedScriptingMessages_ = [];
    initialLoadComplete_ = false;
    loaded_ = null;
    loadState_ = LoadState.LOADING;
    overrideSendScriptingMessageForTest_ = false;
    parentOrigin_ = null;
    parentWindow_ = null;
    plugin_ = null;
    viewport_ = null;
    zoomManager_ = null;
    createHelpBubbleProxy() {
        return PdfHelpBubbleProxyImpl.getInstance();
    }
    /** Whether to enable the new UI. */
    isNewUiEnabled() {
        return true;
    }
    /** Creates the plugin element. */
    createPlugin_() {
        // Create the plugin object dynamically. The plugin element is sized to
        // fill the entire window and is set to be fixed positioning, acting as a
        // viewport. The plugin renders into this viewport according to the scroll
        // position of the window.
        //
        // LINT.IfChange(CreateEmbed)
        const plugin = document.createElement('embed');
        // LINT.ThenChange(//chrome/renderer/printing/chrome_print_render_frame_helper_delegate.cc:GetPdfElement)
        plugin.id = 'plugin';
        plugin.type = 'application/x-google-chrome-pdf';
        plugin.setAttribute('original-url', this.originalUrl);
        this.setPluginSrc(plugin);
        plugin.setAttribute('background-color', this.getBackgroundColor().toString());
        const javascript = this.browserApi.getStreamInfo().javascript || 'block';
        plugin.setAttribute('javascript', javascript);
        if (this.browserApi.getStreamInfo().embedded) {
            plugin.setAttribute('top-level-url', this.browserApi.getStreamInfo().tabUrl);
        }
        else {
            plugin.toggleAttribute('full-frame', true);
        }
        if (this.isNewUiEnabled()) {
            plugin.toggleAttribute('pdf-viewer-update-enabled', true);
        }
        // Pass the attributes for loading PDF plugin through the `pdfViewerPrivate`
        // API if OOPIF PDF is enabled, or the `mimeHandlerPrivate` API.
        const attributesForLoading = {
            backgroundColor: this.getBackgroundColor(),
            allowJavascript: javascript === 'allow',
        };
        // PDF viewer only, as Print Preview doesn't set PDF plugin attributes.
        if (this.pdfOopifEnabled) {
            if (chrome.pdfViewerPrivate) {
                chrome.pdfViewerPrivate.setPdfPluginAttributes(attributesForLoading);
            }
        }
        else if (chrome.mimeHandlerPrivate) {
            chrome.mimeHandlerPrivate.setPdfPluginAttributes(attributesForLoading);
        }
        return plugin;
    }
    /**
     * Initializes the PDF viewer.
     * @param browserApi The interface with the browser.
     * @param scroller The viewport's scroller element.
     * @param sizer The viewport's sizer element.
     * @param content The viewport's content element.
     */
    initInternal(browserApi, scroller, sizer, content) {
        this.browserApi = browserApi;
        this.originalUrl = this.browserApi.getStreamInfo().originalUrl;
        this.pdfOopifEnabled =
            document.documentElement.hasAttribute('pdfOopifEnabled');
        record(UserAction.DOCUMENT_OPENED);
        // Create the viewport.
        const defaultZoom = this.browserApi.getZoomBehavior() === ZoomBehavior.MANAGE ?
            this.browserApi.getDefaultZoom() :
            1.0;
        assert(!this.viewport_);
        this.viewport_ = new Viewport(scroller, sizer, content, getScrollbarWidth(), defaultZoom);
        this.viewport_.setViewportChangedCallback(() => this.viewportChanged_());
        this.viewport_.setBeforeZoomCallback(() => this.currentController.beforeZoom());
        this.viewport_.setAfterZoomCallback(() => {
            this.currentController.afterZoom();
            this.afterZoom(this.viewport_.getZoom());
        });
        this.viewport_.setUserInitiatedCallback(userInitiated => this.setUserInitiated_(userInitiated));
        // Handle scripting messages from outside the extension that wish to
        // interact with it. We also send a message indicating that extension has
        // loaded and is ready to receive messages.
        window.addEventListener('message', message => {
            this.handleScriptingMessage(message);
        }, false);
        // Create the plugin.
        this.plugin_ = this.createPlugin_();
        const pluginController = PluginController.getInstance();
        pluginController.init(this.plugin_, this.viewport_, () => this.isUserInitiatedEvent);
        pluginController.isActive = true;
        this.currentController = pluginController;
        // Parse open pdf parameters.
        const getNamedDestinationCallback = (destination) => {
            return PluginController.getInstance().getNamedDestination(destination);
        };
        const getPageBoundingBoxCallback = (page) => {
            return PluginController.getInstance().getPageBoundingBox(page);
        };
        this.paramsParser = new OpenPdfParamsParser(getNamedDestinationCallback, getPageBoundingBoxCallback);
        this.tracker.add(pluginController.getEventTarget(), PluginControllerEventType.PLUGIN_MESSAGE, (e) => this.handlePluginMessage(e));
        document.body.addEventListener('change-page-and-xy', e => {
            const point = this.viewport_.convertPageToScreen(e.detail.page, e.detail);
            this.viewport_.goToPageAndXy(e.detail.page, point.x, point.y);
        });
        // Setup the keyboard event listener.
        document.addEventListener('keydown', this.handleKeyEvent.bind(this));
        // Set up the ZoomManager.
        this.zoomManager_ = ZoomManager.create(this.browserApi.getZoomBehavior(), () => this.viewport_.getZoom(), zoom => this.browserApi.setZoom(zoom), this.browserApi.getInitialZoom());
        this.viewport_.setZoomManager(this.zoomManager_);
        this.browserApi.addZoomEventListener((zoom) => this.zoomManager_.onBrowserZoomChange(zoom));
        // Request translated strings.
        chrome.resourcesPrivate.getStrings(chrome.resourcesPrivate.Component.PDF, strings => this.handleStrings(strings));
    }
    /**
     * Updates the loading progress of the document in response to a progress
     * message being received from the content controller.
     * @param progress The progress as a percentage.
     */
    updateProgress(progress) {
        if (progress === -1) {
            // Document load failed.
            this.showErrorDialog = true;
            this.viewport_.setContent(null);
            this.setLoadState(LoadState.FAILED);
            this.sendDocumentLoadedMessage();
        }
        else if (progress === 100) {
            // Document load complete.
            if (this.lastViewportPosition) {
                this.viewport_.setPosition(this.lastViewportPosition);
            }
            this.paramsParser.getViewportFromUrlParams(this.originalUrl)
                .then(params => this.handleUrlParams(params));
            this.setLoadState(LoadState.SUCCESS);
            this.sendDocumentLoadedMessage();
            while (this.delayedScriptingMessages_.length > 0) {
                this.handleScriptingMessage(this.delayedScriptingMessages_.shift());
            }
        }
        else {
            this.setLoadState(LoadState.LOADING);
        }
    }
    /** @return Whether the documentLoaded message can be sent. */
    readyToSendLoadMessage() {
        return true;
    }
    /**
     * Sends a 'documentLoaded' message to the PdfScriptingApi if the document has
     * finished loading.
     */
    sendDocumentLoadedMessage() {
        if (this.loadState_ === LoadState.LOADING ||
            !this.readyToSendLoadMessage()) {
            return;
        }
        this.sendScriptingMessage({ type: 'documentLoaded', load_state: this.loadState_ });
    }
    /** A callback to be called after the viewport changes. */
    viewportChanged_() {
        if (!this.documentDimensions) {
            return;
        }
        this.updateUiForViewportChange();
        const visiblePage = this.viewport_.getMostVisiblePage();
        const visiblePageDimensions = this.viewport_.getPageScreenRect(visiblePage);
        const size = this.viewport_.size;
        this.paramsParser.setViewportDimensions(size);
        this.sendScriptingMessage({
            type: 'viewport',
            pageX: visiblePageDimensions.x,
            pageY: visiblePageDimensions.y,
            pageWidth: visiblePageDimensions.width,
            viewportWidth: size.width,
            viewportHeight: size.height,
        });
    }
    /**
     * Handles a scripting message from outside the extension (typically sent by
     * PdfScriptingApi in a page containing the extension) to interact with the
     * plugin.
     * @return Whether the message was handled.
     */
    handleScriptingMessage(message) {
        // TODO(crbug.com/40189769): Remove this message handler when a permanent
        // postMessage() bridge is implemented for the viewer.
        if (message.data.type === 'connect') {
            const token = message.data.token;
            if (token === this.browserApi.getStreamInfo().streamUrl) {
                assert(message.ports[0] !== undefined);
                PluginController.getInstance().bindMessageHandler(message.ports[0]);
            }
            else {
                this.dispatchEvent(new CustomEvent('connection-denied-for-testing'));
            }
            return true;
        }
        if (this.parentWindow_ !== message.source) {
            this.parentWindow_ = message.source;
            this.parentOrigin_ = message.origin;
            // Ensure that we notify the embedder if the document is loaded.
            if (this.loadState_ !== LoadState.LOADING) {
                this.sendDocumentLoadedMessage();
            }
        }
        return false;
    }
    /**
     * @return Whether the message was delayed and added to the queue.
     */
    delayScriptingMessage(message) {
        // Delay scripting messages from users of the scripting API until the
        // document is loaded. This simplifies use of the APIs.
        if (this.loadState_ !== LoadState.SUCCESS) {
            this.delayedScriptingMessages_.push(message);
            return true;
        }
        return false;
    }
    /** Sets document dimensions from the current controller. */
    setDocumentDimensions(documentDimensions) {
        this.documentDimensions = documentDimensions;
        this.isUserInitiatedEvent = false;
        this.viewport_.setDocumentDimensions(this.documentDimensions);
        this.paramsParser.setPageCount(documentDimensions.pageDimensions.length);
        this.paramsParser.setViewportDimensions(this.viewport_.size);
        this.isUserInitiatedEvent = true;
    }
    /**
     * @return True if OOPIF PDF is enabled, false otherwise.
     */
    get isPdfOopifEnabled() {
        return this.pdfOopifEnabled;
    }
    /**
     * @return Resolved when the load state reaches LOADED, rejects on FAILED.
     *     Returns null if no promise has been created, which is the case for
     *     initial load of the PDF.
     */
    get loaded() {
        return this.loaded_ ? this.loaded_.promise : null;
    }
    get viewport() {
        assert(this.viewport_);
        return this.viewport_;
    }
    /**
     * Updates the load state and triggers completion of the `loaded`
     * promise if necessary.
     */
    setLoadState(loadState) {
        if (this.loadState_ === loadState) {
            return;
        }
        assert(loadState === LoadState.LOADING ||
            this.loadState_ === LoadState.LOADING);
        this.loadState_ = loadState;
        if (!this.initialLoadComplete_) {
            this.initialLoadComplete_ = true;
            return;
        }
        if (loadState === LoadState.SUCCESS) {
            this.loaded_.resolve();
        }
        else if (loadState === LoadState.FAILED) {
            this.loaded_.reject();
        }
        else {
            this.loaded_ = new PromiseResolver();
        }
    }
    getLoadSucceededForTesting() {
        return this.loadState_ === LoadState.SUCCESS;
    }
    /**
     * Load a dictionary of translated strings into the UI. Used as a callback for
     * chrome.resourcesPrivate.
     * @param strings Dictionary of translated strings
     */
    handleStrings(strings) {
        if (!strings) {
            return;
        }
        loadTimeData.data = strings;
        // Predefined zoom factors to be used when zooming in/out. These are in
        // ascending order.
        const presetZoomFactors = JSON.parse(loadTimeData.getString('presetZoomFactors'));
        this.viewport_.setZoomFactorRange(presetZoomFactors);
        this.strings = strings;
    }
    /**
     * Handles open pdf parameters. This function updates the viewport as per the
     * parameters appended to the URL when opening pdf. The order is important as
     * later actions can override the effects of previous actions.
     * @param params The open params passed in the URL.
     */
    handleUrlParams(params) {
        assert(this.viewport_);
        if (params.zoom) {
            this.viewport_.setZoom(params.zoom);
        }
        if (params.position) {
            this.viewport_.goToPageAndXy(params.pageIndex || 0, params.position.x, params.position.y);
        }
        if (params.view) {
            this.isUserInitiatedEvent = false;
            const fittingTypeParams = {
                boundingBox: params.boundingBox,
                pageIndex: params.pageIndex || 0,
                viewPosition: params.viewPosition,
                fitToWidth: params.view === FittingType.FIT_TO_BOUNDING_BOX_WIDTH,
            };
            this.viewport_.setFittingType(params.view, fittingTypeParams);
            this.forceFit(params.view);
            this.isUserInitiatedEvent = true;
        }
        else if (!params.position && params.pageIndex !== undefined) {
            // No fitting type provided, so just go to page.
            this.viewport_.goToPage(params.pageIndex);
        }
    }
    /**
     * A callback that sets `isUserInitiatedEvent` to `userInitiated`.
     * @param userInitiated The value to which to set `isUserInitiatedEvent`.
     */
    setUserInitiated_(userInitiated) {
        assert(this.isUserInitiatedEvent !== userInitiated);
        this.isUserInitiatedEvent = userInitiated;
    }
    overrideSendScriptingMessageForTest() {
        this.overrideSendScriptingMessageForTest_ = true;
    }
    /**
     * Send a scripting message outside the extension (typically to
     * PdfScriptingApi in a page containing the extension).
     */
    sendScriptingMessage(message) {
        if (this.parentWindow_ && this.parentOrigin_) {
            let targetOrigin;
            // Only send data back to the embedder if it is from the same origin,
            // unless we're sending it to ourselves (which could happen in the case
            // of tests). We also allow 'documentLoaded' and 'passwordPrompted'
            // messages through as they do not leak sensitive information.
            if (this.parentOrigin_ === window.location.origin) {
                targetOrigin = this.parentOrigin_;
            }
            else if ('type' in message &&
                (message.type === 'documentLoaded' ||
                    message.type === 'passwordPrompted')) {
                // Address these to the origin the embedder had when it contacted the
                // viewer, so that they are not delivered to a different origin if the
                // embedder has since navigated away. An embedder with an opaque
                // origin, such as one loaded from a data: or file: URL, reports its
                // origin as 'null', which cannot be named as a target origin, so the
                // wildcard remains the only way to reach it.
                targetOrigin = this.parentOrigin_ === 'null' ? '*' : this.parentOrigin_;
            }
            else {
                targetOrigin = this.originalUrl;
            }
            try {
                this.parentWindow_.postMessage(message, targetOrigin);
            }
            catch (ok) {
                // TODO(crbug.com/40647731): targetOrigin probably was rejected, such as
                // a "data:" URL. This shouldn't cause this method to throw, though.
            }
        }
    }
    /** Requests to change the viewport fitting type. */
    onFitToChanged(e) {
        this.viewport_.setFittingType(e.detail);
        recordFitTo(e.detail);
    }
    onZoomIn() {
        this.viewport_.zoomIn();
        record(UserAction.ZOOM_IN);
    }
    onZoomChanged(e) {
        this.viewport_.setZoom(e.detail / 100);
        record(UserAction.ZOOM_CUSTOM);
    }
    onZoomOut() {
        this.viewport_.zoomOut();
        record(UserAction.ZOOM_OUT);
    }
    /** Handles a selected text reply from the current controller. */
    handleSelectedTextReply(message) {
        if (this.overrideSendScriptingMessageForTest_) {
            this.overrideSendScriptingMessageForTest_ = false;
            try {
                this.sendScriptingMessage(message);
            }
            finally {
                this.parentWindow_.postMessage('flush', '*');
            }
            return;
        }
        this.sendScriptingMessage(message);
    }
    rotateClockwise() {
        record(UserAction.ROTATE);
        this.currentController.rotateClockwise();
    }
    rotateCounterclockwise() {
        record(UserAction.ROTATE);
        this.currentController.rotateCounterclockwise();
    }
}

export { recordFitTo as $, AnnotationBrushType as A, SaveToDriveBubbleRequestType as B, CrRippleMixin as C, AnnotationMode as D, EventTracker as E, FormFieldFocusType as F, FittingType as G, getCss$1 as H, recordEnumeration as I, PdfViewerBaseElement as J, PdfHelpBubbleProxyImpl as K, shouldIgnoreKeyEvents as L, PostMessageDataType as M, convertSendKeyEventMessage as N, convertDocumentDimensionsMessage as O, PluginController as P, getSaveToDriveOpenInDriveUrl as Q, getSaveToDriveManageStorageUrl as R, SaveToDriveState as S, TextTypeface as T, UserAction as U, verifyPdfHeader as V, listenOnce as W, convertLoadProgressMessage as X, convertFormFocusChangeMessage as Y, CrIconButtonElement as Z, GestureDetector as _, assertInstanceof as a, resetForTesting as a0, OpenPdfParamsParser as a1, ViewMode as a2, SwipeDetector as a3, SwipeDirection as a4, PAGE_SHADOW as a5, Viewport as a6, ZoomManager as a7, assert as b, isMac as c, isWindows as d, assertNotReachedCase as e, assertNotReached as f, getDeepActiveElement as g, hasKeyModifiers as h, isRTL as i, TextAlignment as j, TextStyle as k, PluginControllerEventType as l, PromiseResolver as m, colorsEqual as n, TextAnnotationSource as o, getCss$b as p, hexToColor as q, record as r, getTextStyleForShortcut as s, hasCtrlModifierOnly as t, getInstance as u, colorToHex as v, hasCtrlModifier as w, blendHighlighterColorValue as x, getCss$4 as y, debounceEnd as z };
//# sourceMappingURL=shared.rollup.js.map
