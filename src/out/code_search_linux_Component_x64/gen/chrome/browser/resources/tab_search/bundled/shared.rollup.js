import 'chrome://tab-search.top-chrome/strings.m.js';
import { css, CrLitElement, html, render } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/brave/leo.bundle.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';

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

let instance$e = null;
function getCss$c() {
    return instance$e || (instance$e = [...[], css `[hidden],:host([hidden]){display:none !important}`]);
}

let instance$d = null;
function getCss$b() {
    return instance$d || (instance$d = [...[getCss$c()], css `:host{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle;fill:var(--iron-icon-fill-color,currentcolor);stroke:var(--iron-icon-stroke-color,none);width:var(--iron-icon-width,24px);height:var(--iron-icon-height,24px)}:host-context([webui-refresh-2026]){&:host(:focus){border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}`]);
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
        return getCss$b();
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

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* @fileoverview Utilities for determining the current platform. */
/** Whether we are using a Mac or not. */
const isMac = /Mac/.test(navigator.platform);
/** Whether this is on Android. */
const isAndroid = /Android/.test(navigator.userAgent);
/** Whether this is on iOS. */
const isIOS = /CriOS/.test(navigator.userAgent);

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

let instance$c = null;
function getCss$a() {
    return instance$c || (instance$c = [...[], css `:host{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transform:translate3d(0,0,0)}.ripple{background-color:currentcolor;left:0;opacity:var(--paper-ripple-opacity,0.25);pointer-events:none;position:absolute;will-change:height,transform,width}.ripple,:host(.circle){border-radius:50%}`]);
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
        return getCss$a();
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

const sheet$2 = new CSSStyleSheet();
sheet$2.replaceSync(`html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-100-rgb:244,199,195;--google-red-100:rgb(var(--google-red-100-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-red-700-rgb:197,57,41;--google-red-700:rgb(var(--google-red-700-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--google-yellow-700-rgb:240,147,0;--google-yellow-700:rgb(var(--google-yellow-700-rgb));--cr-card-background-color:white;--cr-shadow-key-color_:color-mix(in srgb,var(--cr-shadow-color) 30%,transparent);--cr-shadow-ambient-color_:color-mix(in srgb,var(--cr-shadow-color) 15%,transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb),0.1);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:var(--cr-elevation-2);--cr-separator-color:rgba(0,0,0,.06);--cr-title-text-color:rgb(90,90,90);--cr-scrollable-border-color:var(--google-grey-300);--cr-button-edge-spacing:12px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb),.14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1;--cr-fallback-color-outline:rgb(116,119,117);--cr-fallback-color-primary:rgb(11,87,208);--cr-fallback-color-on-primary:rgb(255,255,255);--cr-fallback-color-primary-container:rgb(211,227,253);--cr-fallback-color-on-primary-container:rgb(4,30,73);--cr-fallback-color-secondary-container:rgb(194,231,255);--cr-fallback-color-on-secondary-container:rgb(0,29,53);--cr-fallback-color-neutral-container:rgb(242,242,242);--cr-fallback-color-neutral-outline:rgb(199,199,199);--cr-fallback-color-surface:rgb(255,255,255);--cr-fallback-color-surface1:rgb(248,250,253);--cr-fallback-color-surface2:rgb(243,246,252);--cr-fallback-color-surface3:rgb(239,243,250);--cr-fallback-color-surface4:rgb(237,242,250);--cr-fallback-color-surface5:rgb(234,240,249);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225,227,225);--cr-fallback-color-on-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-subtle:rgb(71,71,71);--cr-fallback-color-inverse-primary:rgb(168,199,250);--cr-fallback-color-inverse-surface:rgb(48,48,48);--cr-fallback-color-inverse-on-surface:rgb(242,242,242);--cr-fallback-color-tonal-container:rgb(211,227,253);--cr-fallback-color-on-tonal-container:rgb(4,30,73);--cr-fallback-color-tonal-outline:rgb(168,199,250);--cr-fallback-color-error:rgb(179,38,30);--cr-fallback-color-divider:rgb(211,227,253);--cr-fallback-color-state-hover-on-prominent_:rgba(253,252,251,.1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(var(--cr-fallback-color-state-ripple-primary-rgb_),0.32);--cr-fallback-color-base-container:rgb(236,239,247);--cr-fallback-color-disabled-background:rgba(var(--cr-fallback-color-on-surface-rgb),.12);--cr-fallback-color-disabled-foreground:rgba(var(--cr-fallback-color-on-surface-rgb),var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,rgba(var(--cr-fallback-color-on-surface-rgb),.08));--cr-hover-on-prominent-background-color:var(--color-sys-state-hover-on-prominent,var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(--color-sys-state-hover-on-subtle,var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,rgba(var(--cr-fallback-color-on-surface-rgb),.12));--cr-active-on-primary-background-color:var(--color-sys-state-ripple-primary,var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(--color-sys-state-ripple-neutral-on-subtle,var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,var(--cr-fallback-color-primary));--cr-focus-outline-inverse-color:var(--color-sys-state-focus-ring-inverse,var(--cr-fallback-color-inverse-primary));--cr-primary-text-color:var(--color-primary-foreground,var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow,rgb(0,0,0));--cr-checked-color:var(--color-checkbox-foreground-checked,var(--cr-fallback-color-primary))}html[webui-refresh-2026]{--cr-card-background-color:var(--color-webui-card-background)}@media (prefers-color-scheme:dark){html{--cr-fallback-color-outline:rgb(142,145,143);--cr-fallback-color-primary:rgb(168,199,250);--cr-fallback-color-on-primary:rgb(6,46,111);--cr-fallback-color-primary-container:rgb(8,66,160);--cr-fallback-color-on-primary-container:rgb(211,227,253);--cr-fallback-color-secondary-container:rgb(0,74,119);--cr-fallback-color-on-secondary-container:rgb(194,231,255);--cr-fallback-color-neutral-container:rgb(40,40,40);--cr-fallback-color-neutral-outline:rgb(117,117,117);--cr-fallback-color-surface:rgb(31,31,31);--cr-fallback-color-surface1:rgb(39,40,42);--cr-fallback-color-surface2:rgb(45,47,49);--cr-fallback-color-surface3:rgb(51,52,56);--cr-fallback-color-surface4:rgb(52,54,58);--cr-fallback-color-surface5:rgb(56,58,62);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-variant:rgb(196,199,197);--cr-fallback-color-on-surface-subtle:rgb(199,199,199);--cr-fallback-color-inverse-primary:rgb(11,87,208);--cr-fallback-color-inverse-surface:rgb(227,227,227);--cr-fallback-color-inverse-on-surface:rgb(31,31,31);--cr-fallback-color-tonal-container:rgb(0,74,119);--cr-fallback-color-on-tonal-container:rgb(194,231,255);--cr-fallback-color-tonal-outline:rgb(4,125,183);--cr-fallback-color-error:rgb(242,184,181);--cr-fallback-color-divider:rgb(94,94,94);--cr-fallback-color-state-hover-on-prominent_:rgba(31,31,31,.06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40,40,40,1);--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb),0.1);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255,255,255,.06);--cr-menu-shadow:rgba(0,0,0,.3) 0 1px 2px 0,rgba(0,0,0,.15) 0 3px 6px 2px;--cr-separator-color:rgba(255,255,255,.1);--cr-title-text-color:var(--cr-primary-text-color);--cr-scrollable-border-color:var(--google-grey-700)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent;--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}@media (prefers-reduced-motion:reduce){html{--cr-animations-disabled:1}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet$2];

let instance$b = null;
function getCss$9() {
    return instance$b || (instance$b = [...[], css `:host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:32px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:none;overflow:hidden;pointer-events:auto;position:relative;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host(:hover:not([disabled])){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}#ink{--paper-ripple-opacity:1;color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([suppress-rtl-flip]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([suppress-rtl-flip])[multiple-icons_]) cr-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);pointer-events:none;position:relative;width:100%}cr-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color,none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$5() {
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
        return getCss$9();
    }
    render() {
        return getHtml$5.bind(this)();
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

let instance$a = null;
function getCss$8() {
    return instance$a || (instance$a = [...[getCss$c()], css `:host{display:block;position:absolute;outline:none;z-index:1002;user-select:none;cursor:default}#tooltip{display:block;outline:none;font-size:10px;line-height:1;background-color:var(--paper-tooltip-background,#616161);color:var(--paper-tooltip-text-color,white);padding:8px;border-radius:2px}@keyframes keyFrameFadeInOpacity{0%{opacity:0}100%{opacity:var(--paper-tooltip-opacity,0.9)}}@keyframes keyFrameFadeOutOpacity{0%{opacity:var(--paper-tooltip-opacity,0.9)}100%{opacity:0}}.fade-in-animation{opacity:0;animation-delay:var(--paper-tooltip-delay-in,500ms);animation-name:keyFrameFadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--paper-tooltip-duration-in,500ms);animation-fill-mode:forwards}.fade-out-animation{opacity:var(--paper-tooltip-opacity,0.9);animation-delay:var(--paper-tooltip-delay-out,0ms);animation-name:keyFrameFadeOutOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--paper-tooltip-duration-out,500ms);animation-fill-mode:forwards}#tooltipOffsetFiller{position:absolute;:host([position='top']) &{top:100%}:host([position='bottom']) &{bottom:100%}:host([position='left']) &{left:100%}:host([position='right']) &{right:100%}:host(:is([position='top'],[position='bottom'])) &{left:0;height:var(--cr-tooltip-offset);width:100%}:host(:is([position='left'],[position='right'])) &{top:0;height:100%;width:var(--cr-tooltip-offset)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$4() {
    return html `
<div id="tooltip" hidden part="tooltip">
  <slot></slot>
</div>
<div id="tooltipOffsetFiller"></div>`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Tooltip with simple fade-in/out animations. Forked/migrated
 * from Polymer's paper-tooltip.
 */
var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition["TOP"] = "top";
    TooltipPosition["BOTTOM"] = "bottom";
    TooltipPosition["LEFT"] = "left";
    TooltipPosition["RIGHT"] = "right";
})(TooltipPosition || (TooltipPosition = {}));
class CrTooltipElement extends CrLitElement {
    static get is() {
        return 'cr-tooltip';
    }
    static get styles() {
        return getCss$8();
    }
    render() {
        return getHtml$4.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The id of the element that the tooltip is anchored to. This element
             * must be a sibling of the tooltip. If this property is not set,
             * then the tooltip will be centered to the parent node containing it.
             */
            for: { type: String },
            /**
             * Set this to true if you want to manually control when the tooltip
             * is shown or hidden.
             */
            manualMode: { type: Boolean },
            /**
             * Positions the tooltip to the top, right, bottom, left of its content.
             */
            position: { type: String, reflect: true },
            /**
             * If true, no parts of the tooltip will ever be shown offscreen.
             */
            fitToVisibleBounds: { type: Boolean },
            /**
             * The spacing between the top of the tooltip and the element it is
             * anchored to.
             */
            offset: { type: Number },
            /**
             * The delay that will be applied before the `entry` animation is
             * played when showing the tooltip.
             */
            animationDelay: { type: Number },
            /**
             * The delay before the tooltip hides itself after moving the pointer
             * away from the tooltip or target.
             */
            hideDelay: { type: Number },
        };
    }
    #animationDelay_accessor_storage = 500;
    get animationDelay() { return this.#animationDelay_accessor_storage; }
    set animationDelay(value) { this.#animationDelay_accessor_storage = value; }
    #fitToVisibleBounds_accessor_storage = false;
    get fitToVisibleBounds() { return this.#fitToVisibleBounds_accessor_storage; }
    set fitToVisibleBounds(value) { this.#fitToVisibleBounds_accessor_storage = value; }
    #hideDelay_accessor_storage = 600;
    get hideDelay() { return this.#hideDelay_accessor_storage; }
    set hideDelay(value) { this.#hideDelay_accessor_storage = value; }
    #for_accessor_storage = '';
    get for() { return this.#for_accessor_storage; }
    set for(value) { this.#for_accessor_storage = value; }
    #manualMode_accessor_storage = false;
    get manualMode() { return this.#manualMode_accessor_storage; }
    set manualMode(value) { this.#manualMode_accessor_storage = value; }
    #offset_accessor_storage = 14;
    get offset() { return this.#offset_accessor_storage; }
    set offset(value) { this.#offset_accessor_storage = value; }
    #position_accessor_storage = TooltipPosition.BOTTOM;
    get position() { return this.#position_accessor_storage; }
    set position(value) { this.#position_accessor_storage = value; }
    animationPlaying_ = false;
    showing_ = false;
    manualTarget_;
    target_ = null;
    tracker_ = new EventTracker();
    hideTimeout_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.findTarget_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (!this.manualMode) {
            this.removeListeners_();
        }
        this.resetHideTimeout_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('animationDelay')) {
            this.style.setProperty('--paper-tooltip-delay-in', `${this.animationDelay}ms`);
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addEventListener('animationend', () => this.onAnimationEnd_());
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('for')) {
            this.findTarget_();
        }
        if (changedProperties.has('manualMode')) {
            if (this.manualMode) {
                this.removeListeners_();
            }
            else {
                this.addListeners_();
            }
        }
        if (changedProperties.has('offset')) {
            this.style.setProperty('--cr-tooltip-offset', `${this.offset}px`);
        }
    }
    /**
     * Returns the target element that this tooltip is anchored to. It is
     * either the element given by the `for` attribute, the element manually
     * specified through the `target` attribute, or the immediate parent of
     * the tooltip.
     */
    get target() {
        if (this.manualTarget_) {
            return this.manualTarget_;
        }
        const ownerRoot = this.getRootNode();
        if (this.for) {
            return ownerRoot.querySelector(`#${this.for}`);
        }
        // If the parentNode is a document fragment, then we need to use the host.
        const parentNode = this.parentNode;
        return !!parentNode && parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ?
            ownerRoot.host :
            parentNode;
    }
    /**
     * Sets the target element that this tooltip will be anchored to.
     */
    set target(target) {
        this.manualTarget_ = target;
        this.findTarget_();
    }
    /**
     * Shows the tooltip programmatically
     */
    show() {
        this.resetHideTimeout_();
        // If the tooltip is already showing, there's nothing to do.
        if (this.showing_) {
            return;
        }
        if (!!this.textContent && this.textContent.trim() === '') {
            const children = this.shadowRoot.querySelector('slot').assignedElements();
            const hasNonEmptyChild = Array.from(children).some((el) => !!el.textContent && el.textContent.trim() !== '');
            if (!hasNonEmptyChild) {
                return;
            }
        }
        this.showing_ = true;
        this.$.tooltip.hidden = false;
        this.$.tooltip.classList.remove('fade-out-animation');
        this.updatePosition();
        this.animationPlaying_ = true;
        this.$.tooltip.classList.add('fade-in-animation');
    }
    /**
     * Hides the tooltip programmatically
     */
    hide() {
        // If the tooltip is already hidden, there's nothing to do.
        if (!this.showing_) {
            return;
        }
        // If the entry animation is still playing, don't try to play the exit
        // animation since this will reset the opacity to 1. Just end the animation.
        if (this.animationPlaying_) {
            this.showing_ = false;
            // Short-cut and cancel all animations and hide
            this.$.tooltip.classList.remove('fade-in-animation', 'fade-out-animation');
            this.$.tooltip.hidden = true;
            return;
        }
        // Play Exit Animation
        this.$.tooltip.classList.remove('fade-in-animation');
        this.$.tooltip.classList.add('fade-out-animation');
        this.showing_ = false;
        this.animationPlaying_ = true;
    }
    queueHide_() {
        this.resetHideTimeout_();
        this.hideTimeout_ = setTimeout(() => {
            this.hide();
            this.hideTimeout_ = null;
        }, this.hideDelay);
    }
    resetHideTimeout_() {
        if (this.hideTimeout_ !== null) {
            clearTimeout(this.hideTimeout_);
            this.hideTimeout_ = null;
        }
    }
    updatePosition() {
        if (!this.target_) {
            return;
        }
        const offsetParent = this.offsetParent || this.composedOffsetParent_();
        if (!offsetParent) {
            return;
        }
        const offset = this.offset;
        const parentRect = offsetParent.getBoundingClientRect();
        const targetRect = this.target_.getBoundingClientRect();
        const tooltipRect = this.$.tooltip.getBoundingClientRect();
        const horizontalCenterOffset = (targetRect.width - tooltipRect.width) / 2;
        const verticalCenterOffset = (targetRect.height - tooltipRect.height) / 2;
        const targetLeft = targetRect.left - parentRect.left;
        const targetTop = targetRect.top - parentRect.top;
        let tooltipLeft;
        let tooltipTop;
        switch (this.position) {
            case TooltipPosition.TOP:
                tooltipLeft = targetLeft + horizontalCenterOffset;
                tooltipTop = targetTop - tooltipRect.height - offset;
                break;
            case TooltipPosition.BOTTOM:
                tooltipLeft = targetLeft + horizontalCenterOffset;
                tooltipTop = targetTop + targetRect.height + offset;
                break;
            case TooltipPosition.LEFT:
                tooltipLeft = targetLeft - tooltipRect.width - offset;
                tooltipTop = targetTop + verticalCenterOffset;
                break;
            case TooltipPosition.RIGHT:
                tooltipLeft = targetLeft + targetRect.width + offset;
                tooltipTop = targetTop + verticalCenterOffset;
                break;
            default:
                assertNotReachedCase(this.position);
        }
        if (this.fitToVisibleBounds) {
            // Clip the left/right side
            if (parentRect.left + tooltipLeft + tooltipRect.width >
                window.innerWidth) {
                this.style.right = '0px';
                this.style.left = 'auto';
            }
            else {
                this.style.left = Math.max(0, tooltipLeft) + 'px';
                this.style.right = 'auto';
            }
            // Clip the top/bottom side.
            if (parentRect.top + tooltipTop + tooltipRect.height >
                window.innerHeight) {
                this.style.bottom = (parentRect.height - targetTop + offset) + 'px';
                this.style.top = 'auto';
            }
            else {
                this.style.top = Math.max(-parentRect.top, tooltipTop) + 'px';
                this.style.bottom = 'auto';
            }
        }
        else {
            this.style.left = tooltipLeft + 'px';
            this.style.top = tooltipTop + 'px';
        }
    }
    findTarget_() {
        if (!this.manualMode) {
            this.removeListeners_();
        }
        this.target_ = this.target;
        if (!this.manualMode) {
            this.addListeners_();
        }
    }
    onAnimationEnd_() {
        // If no longer showing add class hidden to completely hide tooltip
        this.animationPlaying_ = false;
        if (!this.showing_) {
            this.$.tooltip.classList.remove('fade-out-animation');
            this.$.tooltip.hidden = true;
        }
    }
    addListeners_() {
        if (this.target_) {
            this.tracker_.add(this.target_, 'pointerenter', () => this.show());
            this.tracker_.add(this.target_, 'focus', () => this.show());
            this.tracker_.add(this.target_, 'pointerleave', () => this.queueHide_());
            this.tracker_.add(this.target_, 'blur', () => this.hide());
            this.tracker_.add(this.target_, 'click', () => this.hide());
        }
        this.tracker_.add(this.$.tooltip, 'animationend', () => this.onAnimationEnd_());
        this.tracker_.add(this, 'pointerenter', () => this.show());
        this.tracker_.add(this, 'pointerleave', () => this.queueHide_());
    }
    removeListeners_() {
        this.tracker_.removeAll();
    }
    /**
     * Polyfills the old offsetParent behavior from before the spec was changed:
     * https://github.com/w3c/csswg-drafts/issues/159
     * This is necessary when the tooltip is inside a <slot>, e.g. when it
     * is used inside a cr-dialog. In such cases, the tooltip's offsetParent
     * will be null.
     */
    composedOffsetParent_() {
        if (this.computedStyleMap().get('display').value ===
            'none') {
            return null;
        }
        for (let ancestor = flatTreeParent(this); ancestor !== null; ancestor = flatTreeParent(ancestor)) {
            if (!(ancestor instanceof Element)) {
                continue;
            }
            const style = ancestor.computedStyleMap();
            if (style.get('display').value === 'none') {
                return null;
            }
            if (style.get('display').value === 'contents') {
                // display:contents nodes aren't in the layout tree so they should be
                // skipped.
                continue;
            }
            if (style.get('position').value !== 'static') {
                return ancestor;
            }
            if (ancestor.tagName === 'BODY') {
                return ancestor;
            }
        }
        return null;
        function flatTreeParent(element) {
            if (element.assignedSlot) {
                return element.assignedSlot;
            }
            if (element.parentNode instanceof ShadowRoot) {
                return element.parentNode.host;
            }
            return element.parentElement;
        }
    }
}
customElements.define(CrTooltipElement.is, CrTooltipElement);

const sheet$1 = new CSSStyleSheet();
sheet$1.replaceSync(`html{--google-blue-300-rgb:123,170,247;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-cyan-300-rgb:120,217,236;--google-cyan-300:rgb(var(--google-cyan-300-rgb));--google-cyan-900-rgb:0,123,131;--google-cyan-900:rgb(var(--google-cyan-900-rgb));--google-green-300-rgb:87,187,138;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-pink-300-rgb:255,139,203;--google-pink-300:rgb(var(--google-pink-300-rgb));--google-pink-700-rgb:208,24,132;--google-pink-700:rgb(var(--google-pink-700-rgb));--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-600-rgb:147,52,230;--google-purple-600:rgb(var(--google-purple-600-rgb));--google-red-300-rgb:230,124,115;--google-red-300:rgb(var(--google-red-300-rgb));--google-yellow-300-rgb:247,203,77;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-900-rgb:227,116,0;--google-yellow-900:rgb(var(--google-yellow-900-rgb));--google-orange-300-rgb:252,173,112;--google-orange-300:rgb(var(--google-orange-300-rgb));--google-orange-400-rgb:250,144,62;--google-orange-400:rgb(var(--google-orange-400-rgb));--tab-group-color-grey:var(--google-grey-700);--tab-group-color-blue:var(--google-blue-600);--tab-group-color-red:var(--google-red-600);--tab-group-color-yellow:var(--google-yellow-900);--tab-group-color-green:var(--google-green-600);--tab-group-color-pink:var(--google-pink-700);--tab-group-color-purple:var(--google-purple-600);--tab-group-color-cyan:var(--google-cyan-900);--tab-group-color-orange:var(--google-orange-400);--tab-group-refresh-color-grey-rgb:95,99,105;--tab-group-refresh-color-blue-rgb:67,107,215;--tab-group-refresh-color-red-rgb:219,27,43;--tab-group-refresh-color-pink-rgb:200,9,168;--tab-group-refresh-color-green-rgb:24,129,41;--tab-group-refresh-color-yellow-rgb:255,208,54;--tab-group-refresh-color-purple-rgb:157,57,243;--tab-group-refresh-color-cyan-rgb:0,123,131;--tab-group-refresh-color-orange-rgb:255,148,54;--tab-group-refresh-color-grey:rgb(var(--tab-group-refresh-color-grey-rgb));--tab-group-refresh-color-blue:rgb(var(--tab-group-refresh-color-blue-rgb));--tab-group-refresh-color-red:rgb(var(--tab-group-refresh-color-red-rgb));--tab-group-refresh-color-pink:rgb(var(--tab-group-refresh-color-pink-rgb));--tab-group-refresh-color-green:rgb(var(--tab-group-refresh-color-green-rgb));--tab-group-refresh-color-yellow:rgb(var(--tab-group-refresh-color-yellow-rgb));--tab-group-refresh-color-purple:rgb(var(--tab-group-refresh-color-purple-rgb));--tab-group-refresh-color-cyan:rgb(var(--tab-group-refresh-color-cyan-rgb));--tab-group-refresh-color-orange:rgb(var(--tab-group-refresh-color-orange-rgb))}@media (prefers-color-scheme:dark){html{--tab-group-color-grey:var(--google-grey-400);--tab-group-color-blue:var(--google-blue-300);--tab-group-color-red:var(--google-red-300);--tab-group-color-yellow:var(--google-yellow-300);--tab-group-color-green:var(--google-green-300);--tab-group-color-pink:var(--google-pink-300);--tab-group-color-purple:var(--google-purple-200);--tab-group-color-cyan:var(--google-cyan-300);--tab-group-color-orange:var(--google-orange-300);--tab-group-refresh-color-grey-rgb:223,226,233;--tab-group-refresh-color-blue-rgb:168,188,255;--tab-group-refresh-color-red-rgb:255,146,139;--tab-group-refresh-color-pink-rgb:255,150,222;--tab-group-refresh-color-green-rgb:135,235,132;--tab-group-refresh-color-yellow-rgb:255,221,122;--tab-group-refresh-color-purple-rgb:203,147,255;--tab-group-refresh-color-cyan-rgb:136,227,235;--tab-group-refresh-color-orange-rgb:255,179,121;--tab-group-refresh-color-grey:rgb(var(--tab-group-refresh-color-grey-rgb));--tab-group-refresh-color-blue:rgb(var(--tab-group-refresh-color-blue-rgb));--tab-group-refresh-color-red:rgb(var(--tab-group-refresh-color-red-rgb));--tab-group-refresh-color-pink:rgb(var(--tab-group-refresh-color-pink-rgb));--tab-group-refresh-color-green:rgb(var(--tab-group-refresh-color-green-rgb));--tab-group-refresh-color-yellow:rgb(var(--tab-group-refresh-color-yellow-rgb));--tab-group-refresh-color-purple:rgb(var(--tab-group-refresh-color-purple-rgb));--tab-group-refresh-color-cyan:rgb(var(--tab-group-refresh-color-cyan-rgb));--tab-group-refresh-color-orange:rgb(var(--tab-group-refresh-color-orange-rgb))}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet$1];

// components/tab_groups/public/mojom/tab_group_types.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ColorSpec$1 = { $: mojo.internal.Enum() };
var Color$1;
(function (Color) {
    Color[Color["MIN_VALUE"] = 0] = "MIN_VALUE";
    Color[Color["MAX_VALUE"] = 8] = "MAX_VALUE";
    Color[Color["kGrey"] = 0] = "kGrey";
    Color[Color["kBlue"] = 1] = "kBlue";
    Color[Color["kRed"] = 2] = "kRed";
    Color[Color["kYellow"] = 3] = "kYellow";
    Color[Color["kGreen"] = 4] = "kGreen";
    Color[Color["kPink"] = 5] = "kPink";
    Color[Color["kPurple"] = 6] = "kPurple";
    Color[Color["kCyan"] = 7] = "kCyan";
    Color[Color["kOrange"] = 8] = "kOrange";
})(Color$1 || (Color$1 = {}));

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const colorMap = new Map([
    [Color$1.kGrey, 'grey'],
    [Color$1.kBlue, 'blue'],
    [Color$1.kRed, 'red'],
    [Color$1.kYellow, 'yellow'],
    [Color$1.kGreen, 'green'],
    [Color$1.kPink, 'pink'],
    [Color$1.kPurple, 'purple'],
    [Color$1.kCyan, 'cyan'],
    [Color$1.kOrange, 'orange'],
]);
function colorName(color) {
    assert(colorMap.has(color), 'Undefined color id');
    return colorMap.get(color);
}
function getTabGroupColorVar(color, isRefresh) {
    const name = colorName(color);
    return isRefresh ? `var(--tab-group-refresh-color-${name})` :
        `var(--tab-group-color-${name})`;
}

let instance$9 = null;
function getCss$7() {
    return instance$9 || (instance$9 = [...[], css `:host{display:block}:host([hidden]){display:none}#groupSvg,svg{display:block;height:6px;width:6px}:host([size=large]) #groupSvg,:host([size=large]) svg{height:12px;width:12px}#groupDot,circle{fill:var(--group-dot-color)}:host(:not([filled])) #groupDot,:host(:not([filled])) circle{fill:none;stroke:var(--group-dot-color)}`]);
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$3() {
    // clang-format off
    return html `<!--_html_template_start_-->
<svg id="groupSvg" viewBox="${this.getViewBox_()}"
    xmlns="http://www.w3.org/2000/svg">
  <circle id="groupDot" cx="0" cy="0" r="${this.getRadius_()}"
      stroke-width="${this.getStrokeWidth_()}">
  </circle>
</svg>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var TabGroupDotSize;
(function (TabGroupDotSize) {
    TabGroupDotSize["SMALL"] = "small";
    TabGroupDotSize["LARGE"] = "large";
})(TabGroupDotSize || (TabGroupDotSize = {}));
class TabGroupDotElement extends CrLitElement {
    static get is() {
        return 'tab-group-dot';
    }
    static get styles() {
        return getCss$7();
    }
    render() {
        return getHtml$3.bind(this)();
    }
    static get properties() {
        return {
            color: { type: Number },
            filled: {
                type: Boolean,
                reflect: true,
            },
            size: {
                type: String,
                reflect: true,
            },
            tabGroupColorRefresh_: { type: Boolean },
        };
    }
    #color_accessor_storage = Color$1.kGrey;
    get color() { return this.#color_accessor_storage; }
    set color(value) { this.#color_accessor_storage = value; }
    #filled_accessor_storage = true;
    get filled() { return this.#filled_accessor_storage; }
    set filled(value) { this.#filled_accessor_storage = value; }
    #size_accessor_storage = TabGroupDotSize.SMALL;
    get size() { return this.#size_accessor_storage; }
    set size(value) { this.#size_accessor_storage = value; }
    #tabGroupColorRefresh__accessor_storage = loadTimeData.valueExists('useTabGroupColorRefresh') ?
        loadTimeData.getBoolean('useTabGroupColorRefresh') :
        false;
    get tabGroupColorRefresh_() { return this.#tabGroupColorRefresh__accessor_storage; }
    set tabGroupColorRefresh_(value) { this.#tabGroupColorRefresh__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('color') ||
            changedProperties.has('tabGroupColorRefresh_')) {
            this.style.setProperty('--group-dot-color', getTabGroupColorVar(this.color, this.tabGroupColorRefresh_));
        }
        if (changedProperties.has('size')) {
            assert(Object.values(TabGroupDotSize).includes(this.size));
        }
    }
    getViewBox_() {
        return this.size === TabGroupDotSize.LARGE ? '-6 -6 12 12' : '-3 -3 6 6';
    }
    getOuterRadius_() {
        return this.size === TabGroupDotSize.LARGE ? 6 : 3;
    }
    getRadius_() {
        const outerRadius = this.getOuterRadius_();
        if (this.filled) {
            return outerRadius;
        }
        return outerRadius - this.getStrokeWidth_() / 2;
    }
    getStrokeWidth_() {
        if (this.filled) {
            return 0;
        }
        return 2;
    }
}
customElements.define(TabGroupDotElement.is, TabGroupDotElement);

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

// components/tab_groups/public/mojom/tab_group_types.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ColorSpec = { $: mojo.internal.Enum() };
var Color;
(function (Color) {
    Color[Color["MIN_VALUE"] = 0] = "MIN_VALUE";
    Color[Color["MAX_VALUE"] = 8] = "MAX_VALUE";
    Color[Color["kGrey"] = 0] = "kGrey";
    Color[Color["kBlue"] = 1] = "kBlue";
    Color[Color["kRed"] = 2] = "kRed";
    Color[Color["kYellow"] = 3] = "kYellow";
    Color[Color["kGreen"] = 4] = "kGreen";
    Color[Color["kPink"] = 5] = "kPink";
    Color[Color["kPurple"] = 6] = "kPurple";
    Color[Color["kCyan"] = 7] = "kCyan";
    Color[Color["kOrange"] = 8] = "kOrange";
})(Color || (Color = {}));

// components/tabs/public/mojom/tabs.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TabAlertStateSpec = { $: mojo.internal.Enum() };
var TabAlertState;
(function (TabAlertState) {
    TabAlertState[TabAlertState["MIN_VALUE"] = 0] = "MIN_VALUE";
    TabAlertState[TabAlertState["MAX_VALUE"] = 19] = "MAX_VALUE";
    TabAlertState[TabAlertState["kNone"] = 0] = "kNone";
    TabAlertState[TabAlertState["kAudioMuting"] = 1] = "kAudioMuting";
    TabAlertState[TabAlertState["kAudioRecording"] = 2] = "kAudioRecording";
    TabAlertState[TabAlertState["kAudioPlaying"] = 3] = "kAudioPlaying";
    TabAlertState[TabAlertState["kBluetoothConnected"] = 4] = "kBluetoothConnected";
    TabAlertState[TabAlertState["kBluetoothScanActive"] = 5] = "kBluetoothScanActive";
    TabAlertState[TabAlertState["kDesktopCapturing"] = 6] = "kDesktopCapturing";
    TabAlertState[TabAlertState["kActorAccessing"] = 7] = "kActorAccessing";
    TabAlertState[TabAlertState["kActorWaitingOnUser"] = 8] = "kActorWaitingOnUser";
    TabAlertState[TabAlertState["kGlicAccessing"] = 9] = "kGlicAccessing";
    TabAlertState[TabAlertState["kGlicSharing"] = 10] = "kGlicSharing";
    TabAlertState[TabAlertState["kAiModeSharing"] = 11] = "kAiModeSharing";
    TabAlertState[TabAlertState["kHidConnected"] = 12] = "kHidConnected";
    TabAlertState[TabAlertState["kMediaRecording"] = 13] = "kMediaRecording";
    TabAlertState[TabAlertState["kPipPlaying"] = 14] = "kPipPlaying";
    TabAlertState[TabAlertState["kSerialConnected"] = 15] = "kSerialConnected";
    TabAlertState[TabAlertState["kTabCapturing"] = 16] = "kTabCapturing";
    TabAlertState[TabAlertState["kUsbConnected"] = 17] = "kUsbConnected";
    TabAlertState[TabAlertState["kVideoRecording"] = 18] = "kVideoRecording";
    TabAlertState[TabAlertState["kVrPresentingInHeadset"] = 19] = "kVrPresentingInHeadset";
})(TabAlertState || (TabAlertState = {}));
({ $: mojo.internal.Enum() });
var TabNetworkState;
(function (TabNetworkState) {
    TabNetworkState[TabNetworkState["MIN_VALUE"] = 0] = "MIN_VALUE";
    TabNetworkState[TabNetworkState["MAX_VALUE"] = 3] = "MAX_VALUE";
    TabNetworkState[TabNetworkState["kNone"] = 0] = "kNone";
    TabNetworkState[TabNetworkState["kWaiting"] = 1] = "kWaiting";
    TabNetworkState[TabNetworkState["kLoading"] = 2] = "kLoading";
    TabNetworkState[TabNetworkState["kError"] = 3] = "kError";
})(TabNetworkState || (TabNetworkState = {}));

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

// mojo/public/mojom/base/token.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TokenSpec = { $: {} };
mojo.internal.Struct(TokenSpec.$, 'Token', [
    mojo.internal.StructField('high', 0, 0, mojo.internal.Uint64, BigInt(0), false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('low', 8, 0, mojo.internal.Uint64, BigInt(0), false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);

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

// chrome/browser/ui/webui/tab_search/tab_search.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SplitTabLayoutSpec = { $: mojo.internal.Enum() };
var SplitTabLayout;
(function (SplitTabLayout) {
    SplitTabLayout[SplitTabLayout["MIN_VALUE"] = 0] = "MIN_VALUE";
    SplitTabLayout[SplitTabLayout["MAX_VALUE"] = 1] = "MAX_VALUE";
    SplitTabLayout[SplitTabLayout["kSideBySide"] = 0] = "kSideBySide";
    SplitTabLayout[SplitTabLayout["kStacked"] = 1] = "kStacked";
})(SplitTabLayout || (SplitTabLayout = {}));
class PageHandlerFactoryPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'tab_search.mojom.PageHandlerFactory', scope);
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
        return "tab_search.mojom.PageHandlerFactory";
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
        mojo.internal.interfaceSupport.bind(this.handle, 'tab_search.mojom.PageHandler', scope);
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
    closeTab(tabId) {
        this.proxy.sendMessage(0, PageHandler_CloseTab_ParamsSpec.$, null, [
            tabId
        ], false);
    }
    closeTabs(tabIds) {
        this.proxy.sendMessage(1, PageHandler_CloseTabs_ParamsSpec.$, null, [
            tabIds
        ], false);
    }
    closeWebUiTab() {
        this.proxy.sendMessage(2, PageHandler_CloseWebUiTab_ParamsSpec.$, null, [], false);
    }
    getProfileData() {
        return this.proxy.sendMessage(3, PageHandler_GetProfileData_ParamsSpec.$, PageHandler_GetProfileData_ResponseParamsSpec.$, [], false);
    }
    getIsSplit() {
        return this.proxy.sendMessage(4, PageHandler_GetIsSplit_ParamsSpec.$, PageHandler_GetIsSplit_ResponseParamsSpec.$, [], false);
    }
    switchToTab(switchToTabInfo) {
        this.proxy.sendMessage(5, PageHandler_SwitchToTab_ParamsSpec.$, null, [
            switchToTabInfo
        ], false);
    }
    openRecentlyClosedEntry(sessionId) {
        this.proxy.sendMessage(6, PageHandler_OpenRecentlyClosedEntry_ParamsSpec.$, null, [
            sessionId
        ], false);
    }
    replaceActiveSplitTab(replacementTabId) {
        this.proxy.sendMessage(7, PageHandler_ReplaceActiveSplitTab_ParamsSpec.$, null, [
            replacementTabId
        ], false);
    }
    saveRecentlyClosedExpandedPref(expanded) {
        this.proxy.sendMessage(8, PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec.$, null, [
            expanded
        ], false);
    }
    startTabGroupTutorial() {
        this.proxy.sendMessage(9, PageHandler_StartTabGroupTutorial_ParamsSpec.$, null, [], false);
    }
    maybeShowUI() {
        this.proxy.sendMessage(10, PageHandler_MaybeShowUI_ParamsSpec.$, null, [], false);
    }
    getSuggestedTopics() {
        return this.proxy.sendMessage(11, PageHandler_GetSuggestedTopics_ParamsSpec.$, PageHandler_GetSuggestedTopics_ResponseParamsSpec.$, [], false);
    }
    getFocusTabs(topic) {
        return this.proxy.sendMessage(12, PageHandler_GetFocusTabs_ParamsSpec.$, PageHandler_GetFocusTabs_ResponseParamsSpec.$, [
            topic
        ], false);
    }
    undoFocusTabs() {
        return this.proxy.sendMessage(13, PageHandler_UndoFocusTabs_ParamsSpec.$, PageHandler_UndoFocusTabs_ResponseParamsSpec.$, [], false);
    }
    openLeoGoPremiumPage() {
        this.proxy.sendMessage(14, PageHandler_OpenLeoGoPremiumPage_ParamsSpec.$, null, [], false);
    }
    openLearnMorePage() {
        this.proxy.sendMessage(15, PageHandler_OpenLearnMorePage_ParamsSpec.$, null, [], false);
    }
    setTabFocusEnabled() {
        this.proxy.sendMessage(16, PageHandler_SetTabFocusEnabled_ParamsSpec.$, null, [], false);
    }
    getTabFocusShowFRE() {
        return this.proxy.sendMessage(17, PageHandler_GetTabFocusShowFRE_ParamsSpec.$, PageHandler_GetTabFocusShowFRE_ResponseParamsSpec.$, [], false);
    }
    searchTabsByContent(query) {
        return this.proxy.sendMessage(18, PageHandler_SearchTabsByContent_ParamsSpec.$, PageHandler_SearchTabsByContent_ResponseParamsSpec.$, [
            query
        ], false);
    }
};
let PagePendingReceiver$1 = class PagePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'tab_search.mojom.Page', scope);
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
    hostWindowChanged() {
        this.proxy.sendMessage(0, Page_HostWindowChanged_ParamsSpec.$, null, [], false);
    }
    tabsChanged(profileTabs) {
        this.proxy.sendMessage(1, Page_TabsChanged_ParamsSpec.$, null, [
            profileTabs
        ], false);
    }
    tabUpdated(tabUpdateInfo) {
        this.proxy.sendMessage(2, Page_TabUpdated_ParamsSpec.$, null, [
            tabUpdateInfo
        ], false);
    }
    tabsRemoved(tabsRemovedInfo) {
        this.proxy.sendMessage(3, Page_TabsRemoved_ParamsSpec.$, null, [
            tabsRemovedInfo
        ], false);
    }
    tabUnsplit() {
        this.proxy.sendMessage(4, Page_TabUnsplit_ParamsSpec.$, null, [], false);
    }
    tabFocusShowFREChanged(show) {
        this.proxy.sendMessage(5, Page_TabFocusShowFREChanged_ParamsSpec.$, null, [
            show
        ], false);
    }
    tabFocusEnabledChanged(enabled) {
        this.proxy.sendMessage(6, Page_TabFocusEnabledChanged_ParamsSpec.$, null, [
            enabled
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
    hostWindowChanged;
    tabsChanged;
    tabUpdated;
    tabsRemoved;
    tabUnsplit;
    tabFocusShowFREChanged;
    tabFocusEnabledChanged;
    onConnectionError;
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote$1);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.hostWindowChanged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, Page_HostWindowChanged_ParamsSpec.$, null, this.hostWindowChanged.createReceiverHandler(false /* expectsResponse */), false);
        this.tabsChanged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1, Page_TabsChanged_ParamsSpec.$, null, this.tabsChanged.createReceiverHandler(false /* expectsResponse */), false);
        this.tabUpdated =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2, Page_TabUpdated_ParamsSpec.$, null, this.tabUpdated.createReceiverHandler(false /* expectsResponse */), false);
        this.tabsRemoved =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(3, Page_TabsRemoved_ParamsSpec.$, null, this.tabsRemoved.createReceiverHandler(false /* expectsResponse */), false);
        this.tabUnsplit =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(4, Page_TabUnsplit_ParamsSpec.$, null, this.tabUnsplit.createReceiverHandler(false /* expectsResponse */), false);
        this.tabFocusShowFREChanged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(5, Page_TabFocusShowFREChanged_ParamsSpec.$, null, this.tabFocusShowFREChanged.createReceiverHandler(false /* expectsResponse */), false);
        this.tabFocusEnabledChanged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(6, Page_TabFocusEnabledChanged_ParamsSpec.$, null, this.tabFocusEnabledChanged.createReceiverHandler(false /* expectsResponse */), false);
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
const RateLimitedInfoSpec = { $: {} };
const ErrorSpec = { $: {} };
const ProfileDataSpec = { $: {} };
const TokenRangeSpec = { $: {} };
const WindowSpec = { $: {} };
const TabSpec = { $: {} };
const RecentlyClosedTabSpec = { $: {} };
const TabGroupSpec = { $: {} };
const RecentlyClosedTabGroupSpec = { $: {} };
const RecentlyClosedSplitViewSpec = { $: {} };
const SwitchToTabInfoSpec = { $: {} };
const TabUpdateInfoSpec = { $: {} };
const TabsRemovedInfoSpec = { $: {} };
const SearchHandler_GetRangesIgnoringCaseAndAccents_ParamsSpec = { $: {} };
const SearchHandler_GetRangesIgnoringCaseAndAccents_ResponseParamsSpec = { $: {} };
const PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
const PageHandler_CloseTab_ParamsSpec = { $: {} };
const PageHandler_CloseTabs_ParamsSpec = { $: {} };
const PageHandler_CloseWebUiTab_ParamsSpec = { $: {} };
const PageHandler_GetProfileData_ParamsSpec = { $: {} };
const PageHandler_GetProfileData_ResponseParamsSpec = { $: {} };
const PageHandler_GetIsSplit_ParamsSpec = { $: {} };
const PageHandler_GetIsSplit_ResponseParamsSpec = { $: {} };
const PageHandler_SwitchToTab_ParamsSpec = { $: {} };
const PageHandler_OpenRecentlyClosedEntry_ParamsSpec = { $: {} };
const PageHandler_ReplaceActiveSplitTab_ParamsSpec = { $: {} };
const PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec = { $: {} };
const PageHandler_StartTabGroupTutorial_ParamsSpec = { $: {} };
const PageHandler_MaybeShowUI_ParamsSpec = { $: {} };
const PageHandler_GetSuggestedTopics_ParamsSpec = { $: {} };
const PageHandler_GetSuggestedTopics_ResponseParamsSpec = { $: {} };
const PageHandler_GetFocusTabs_ParamsSpec = { $: {} };
const PageHandler_GetFocusTabs_ResponseParamsSpec = { $: {} };
const PageHandler_UndoFocusTabs_ParamsSpec = { $: {} };
const PageHandler_UndoFocusTabs_ResponseParamsSpec = { $: {} };
const PageHandler_OpenLeoGoPremiumPage_ParamsSpec = { $: {} };
const PageHandler_OpenLearnMorePage_ParamsSpec = { $: {} };
const PageHandler_SetTabFocusEnabled_ParamsSpec = { $: {} };
const PageHandler_GetTabFocusShowFRE_ParamsSpec = { $: {} };
const PageHandler_GetTabFocusShowFRE_ResponseParamsSpec = { $: {} };
const PageHandler_SearchTabsByContent_ParamsSpec = { $: {} };
const PageHandler_SearchTabsByContent_ResponseParamsSpec = { $: {} };
const Page_HostWindowChanged_ParamsSpec = { $: {} };
const Page_TabsChanged_ParamsSpec = { $: {} };
const Page_TabUpdated_ParamsSpec = { $: {} };
const Page_TabsRemoved_ParamsSpec = { $: {} };
const Page_TabUnsplit_ParamsSpec = { $: {} };
const Page_TabFocusShowFREChanged_ParamsSpec = { $: {} };
const Page_TabFocusEnabledChanged_ParamsSpec = { $: {} };
mojo.internal.Struct(RateLimitedInfoSpec.$, 'RateLimitedInfo', [
    mojo.internal.StructField('isPremium', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ErrorSpec.$, 'Error', [
    mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('rateLimitedInfo', 8, 0, RateLimitedInfoSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ProfileDataSpec.$, 'ProfileData', [
    mojo.internal.StructField('windows', 0, 0, mojo.internal.Array(WindowSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tabGroups', 8, 0, mojo.internal.Array(TabGroupSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('recentlyClosedTabs', 16, 0, mojo.internal.Array(RecentlyClosedTabSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('recentlyClosedTabGroups', 24, 0, mojo.internal.Array(RecentlyClosedTabGroupSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('recentlyClosedSplitViews', 32, 0, mojo.internal.Array(RecentlyClosedSplitViewSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('recentlyClosedSectionExpanded', 40, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 56],]);
mojo.internal.Struct(TokenRangeSpec.$, 'TokenRange', [
    mojo.internal.StructField('start', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('length', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(WindowSpec.$, 'Window', [
    mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isHostWindow', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('height', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tabs', 8, 0, mojo.internal.Array(TabSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(TabSpec.$, 'Tab', [
    mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('visible', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('alertStates', 8, 0, mojo.internal.Array(TabAlertStateSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tabId', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('groupId', 16, 0, TokenSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('pinned', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('split', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('splitId', 24, 0, TokenSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('split_layout_$flag', 0, 4, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "split_layout_$value",
        originalFieldName: "splitLayout",
    }, undefined),
    mojo.internal.StructField('split_layout_$value', 32, 0, SplitTabLayoutSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "splitLayout",
    }, undefined),
    mojo.internal.StructField('title', 40, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 48, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('faviconUrl', 56, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isDefaultFavicon', 0, 5, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('showIcon', 0, 6, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('lastActiveTimeTicks', 64, 0, TimeTicksSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('lastActiveElapsedText', 72, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 88],]);
mojo.internal.Struct(RecentlyClosedTabSpec.$, 'RecentlyClosedTab', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('groupId', 8, 0, TokenSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('splitId', 16, 0, TokenSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('title', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 32, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('lastActiveTime', 40, 0, TimeSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('lastActiveElapsedText', 48, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 64],]);
mojo.internal.Struct(TabGroupSpec.$, 'TabGroup', [
    mojo.internal.StructField('id', 0, 0, TokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('color', 8, 0, ColorSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(RecentlyClosedTabGroupSpec.$, 'RecentlyClosedTabGroup', [
    mojo.internal.StructField('sessionId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('id', 8, 0, TokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('color', 4, 0, ColorSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tabCount', 24, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('lastActiveTime', 32, 0, TimeSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('lastActiveElapsedText', 40, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 56],]);
mojo.internal.Struct(RecentlyClosedSplitViewSpec.$, 'RecentlyClosedSplitView', [
    mojo.internal.StructField('sessionId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('id', 8, 0, TokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tabCount', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('lastActiveTime', 16, 0, TimeSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('lastActiveElapsedText', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tabUrls', 32, 0, mojo.internal.Array(UrlSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tabTitles', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('layout', 48, 0, SplitTabLayoutSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('groupId', 56, 0, TokenSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 72],]);
mojo.internal.Struct(SwitchToTabInfoSpec.$, 'SwitchToTabInfo', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TabUpdateInfoSpec.$, 'TabUpdateInfo', [
    mojo.internal.StructField('inActiveWindow', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('inHostWindow', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tab', 8, 0, TabSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(TabsRemovedInfoSpec.$, 'TabsRemovedInfo', [
    mojo.internal.StructField('tabIds', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('recentlyClosedTabs', 8, 0, mojo.internal.Array(RecentlyClosedTabSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(SearchHandler_GetRangesIgnoringCaseAndAccents_ParamsSpec.$, 'SearchHandler_GetRangesIgnoringCaseAndAccents_Params', [
    mojo.internal.StructField('searchText', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('targets', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(SearchHandler_GetRangesIgnoringCaseAndAccents_ResponseParamsSpec.$, 'SearchHandler_GetRangesIgnoringCaseAndAccents_ResponseParams', [
    mojo.internal.StructField('ranges', 0, 0, mojo.internal.Array(mojo.internal.Array(TokenRangeSpec.$, false), false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandlerFactory_CreatePageHandler_ParamsSpec.$, 'PageHandlerFactory_CreatePageHandler_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote$1), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(PageHandlerPendingReceiver$1), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_CloseTab_ParamsSpec.$, 'PageHandler_CloseTab_Params', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_CloseTabs_ParamsSpec.$, 'PageHandler_CloseTabs_Params', [
    mojo.internal.StructField('tabIds', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_CloseWebUiTab_ParamsSpec.$, 'PageHandler_CloseWebUiTab_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetProfileData_ParamsSpec.$, 'PageHandler_GetProfileData_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetProfileData_ResponseParamsSpec.$, 'PageHandler_GetProfileData_ResponseParams', [
    mojo.internal.StructField('profileData', 0, 0, ProfileDataSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetIsSplit_ParamsSpec.$, 'PageHandler_GetIsSplit_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetIsSplit_ResponseParamsSpec.$, 'PageHandler_GetIsSplit_ResponseParams', [
    mojo.internal.StructField('isSplit', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SwitchToTab_ParamsSpec.$, 'PageHandler_SwitchToTab_Params', [
    mojo.internal.StructField('switchToTabInfo', 0, 0, SwitchToTabInfoSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenRecentlyClosedEntry_ParamsSpec.$, 'PageHandler_OpenRecentlyClosedEntry_Params', [
    mojo.internal.StructField('sessionId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ReplaceActiveSplitTab_ParamsSpec.$, 'PageHandler_ReplaceActiveSplitTab_Params', [
    mojo.internal.StructField('replacementTabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec.$, 'PageHandler_SaveRecentlyClosedExpandedPref_Params', [
    mojo.internal.StructField('expanded', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_StartTabGroupTutorial_ParamsSpec.$, 'PageHandler_StartTabGroupTutorial_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_MaybeShowUI_ParamsSpec.$, 'PageHandler_MaybeShowUI_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetSuggestedTopics_ParamsSpec.$, 'PageHandler_GetSuggestedTopics_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetSuggestedTopics_ResponseParamsSpec.$, 'PageHandler_GetSuggestedTopics_ResponseParams', [
    mojo.internal.StructField('topics', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('error', 8, 0, ErrorSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_GetFocusTabs_ParamsSpec.$, 'PageHandler_GetFocusTabs_Params', [
    mojo.internal.StructField('topic', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetFocusTabs_ResponseParamsSpec.$, 'PageHandler_GetFocusTabs_ResponseParams', [
    mojo.internal.StructField('windowCreated', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('error', 8, 0, ErrorSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_UndoFocusTabs_ParamsSpec.$, 'PageHandler_UndoFocusTabs_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_UndoFocusTabs_ResponseParamsSpec.$, 'PageHandler_UndoFocusTabs_ResponseParams', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OpenLeoGoPremiumPage_ParamsSpec.$, 'PageHandler_OpenLeoGoPremiumPage_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OpenLearnMorePage_ParamsSpec.$, 'PageHandler_OpenLearnMorePage_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_SetTabFocusEnabled_ParamsSpec.$, 'PageHandler_SetTabFocusEnabled_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetTabFocusShowFRE_ParamsSpec.$, 'PageHandler_GetTabFocusShowFRE_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetTabFocusShowFRE_ResponseParamsSpec.$, 'PageHandler_GetTabFocusShowFRE_ResponseParams', [
    mojo.internal.StructField('showFRE', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SearchTabsByContent_ParamsSpec.$, 'PageHandler_SearchTabsByContent_Params', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SearchTabsByContent_ResponseParamsSpec.$, 'PageHandler_SearchTabsByContent_ResponseParams', [
    mojo.internal.StructField('tabIds', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_HostWindowChanged_ParamsSpec.$, 'Page_HostWindowChanged_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_TabsChanged_ParamsSpec.$, 'Page_TabsChanged_Params', [
    mojo.internal.StructField('profileTabs', 0, 0, ProfileDataSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_TabUpdated_ParamsSpec.$, 'Page_TabUpdated_Params', [
    mojo.internal.StructField('tabUpdateInfo', 0, 0, TabUpdateInfoSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_TabsRemoved_ParamsSpec.$, 'Page_TabsRemoved_Params', [
    mojo.internal.StructField('tabsRemovedInfo', 0, 0, TabsRemovedInfoSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_TabUnsplit_ParamsSpec.$, 'Page_TabUnsplit_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_TabFocusShowFREChanged_ParamsSpec.$, 'Page_TabFocusShowFREChanged_Params', [
    mojo.internal.StructField('show', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_TabFocusEnabledChanged_ParamsSpec.$, 'Page_TabFocusEnabledChanged_Params', [
    mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);

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

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function highlightText(container, text, ranges) {
    container.textContent = '';
    const node = document.createTextNode(text);
    container.appendChild(node);
    if (ranges) {
        highlight(node, ranges);
    }
}
function tabHasMediaAlerts(tab) {
    return tab.alertStates.length > 0;
}
function getMediaAlertImageClass(tab) {
    if (!tabHasMediaAlerts(tab)) {
        return '';
    }
    const alert = tab.alertStates[0];
    switch (alert) {
        case TabAlertState.kMediaRecording:
            return 'media-recording';
        case TabAlertState.kAudioRecording:
            return 'audio-recording';
        case TabAlertState.kVideoRecording:
            return 'video-recording';
        case TabAlertState.kAudioPlaying:
            return 'audio-playing';
        case TabAlertState.kAudioMuting:
            return 'audio-muting';
        case TabAlertState.kGlicAccessing:
            return 'glic-accessing';
        default:
            return '';
    }
}
function getFaviconUrlForTab(url, tab) {
    if (tab?.faviconUrl) {
        return `url("${tab.faviconUrl}")`;
    }
    const faviconPageUrl = tab?.isDefaultFavicon ? 'chrome://newtab' : url;
    return getFaviconForPageURL(faviconPageUrl, false);
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var TabItemType;
(function (TabItemType) {
    TabItemType[TabItemType["OPEN_TAB"] = 1] = "OPEN_TAB";
    TabItemType[TabItemType["RECENTLY_CLOSED_TAB"] = 2] = "RECENTLY_CLOSED_TAB";
    TabItemType[TabItemType["RECENTLY_CLOSED_TAB_GROUP"] = 3] = "RECENTLY_CLOSED_TAB_GROUP";
    TabItemType[TabItemType["OPEN_SPLIT"] = 4] = "OPEN_SPLIT";
    TabItemType[TabItemType["RECENTLY_CLOSED_SPLIT"] = 5] = "RECENTLY_CLOSED_SPLIT";
})(TabItemType || (TabItemType = {}));
class ItemData {
    inActiveWindow = false;
    type = TabItemType.OPEN_TAB;
    a11yTypeText = '';
    tabGroup;
    highlightRanges = {};
}
/**
 * TabData contains tabSearch.mojom.Tab and data derived from it.
 * It makes tabSearch.mojom.Tab immutable and works well for TypeScript type
 * checking.
 */
class TabData extends ItemData {
    tab;
    hostname;
    constructor(tab, type, hostname) {
        super();
        this.tab = tab;
        this.type = type;
        this.hostname = hostname;
    }
}
class TabGroupData extends ItemData {
    tabGroup;
    constructor(tabGroup) {
        super();
        this.tabGroup = tabGroup;
        this.type = TabItemType.RECENTLY_CLOSED_TAB_GROUP;
    }
}
class SplitViewData extends ItemData {
    splitView;
    tabs;
    constructor(options) {
        super();
        if (!options.splitView && !options.tabs) {
            throw new Error('SplitViewData must be initialized with splitView or tabs.');
        }
        this.splitView = options.splitView;
        this.tabs = options.tabs;
        this.type = options.splitView ? TabItemType.RECENTLY_CLOSED_SPLIT :
            TabItemType.OPEN_SPLIT;
        this.a11yTypeText = loadTimeData.getString(options.splitView ? 'a11yRecentlyClosedSplitView' :
            'a11yOpenSplitView');
    }
    get title() {
        return 'Split View';
    }
    get sessionId() {
        return this.splitView ? this.splitView.sessionId : -1;
    }
    get splitId() {
        if (this.splitView) {
            return this.splitView.id;
        }
        return this.tabs[0].splitId ?? undefined;
    }
    get tabCount() {
        return this.splitView ? this.splitView.tabCount : 2;
    }
    get lastActiveElapsedText() {
        if (this.splitView) {
            return this.splitView.lastActiveElapsedText;
        }
        return this.tabs[0].lastActiveElapsedText;
    }
    get tabUrls() {
        if (this.splitView) {
            return this.splitView.tabUrls;
        }
        return [this.tabs[0].url, this.tabs[1].url];
    }
    get layout() {
        if (this.splitView) {
            return this.splitView.layout;
        }
        return this.tabs[0].splitLayout ?? SplitTabLayout.kSideBySide;
    }
}
/**
 * Converts a token to a string by combining the high and low values as strings
 * with a hashtag as the separator.
 */
function tokenToString(token) {
    return `${token.high.toString()}#${token.low.toString()}`;
}
function tokenEquals(a, b) {
    return a.high === b.high && a.low === b.low;
}
function titleAndAlertAriaLabel(tabData) {
    const tabTitle = tabData.tab.title;
    if (tabData.type === TabItemType.OPEN_TAB &&
        tabHasMediaAlerts(tabData.tab)) {
        // GetTabAlertStatesForContents adds alert indicators in the order of their
        // priority. Only relevant media alerts are sent over mojo so the first
        // element in alertStates will be the highest priority media alert to
        // display.
        const alert = tabData.tab.alertStates[0];
        switch (alert) {
            case TabAlertState.kMediaRecording:
                return loadTimeData.getStringF('mediaRecording', tabTitle);
            case TabAlertState.kAudioRecording:
                return loadTimeData.getStringF('audioRecording', tabTitle);
            case TabAlertState.kVideoRecording:
                return loadTimeData.getStringF('videoRecording', tabTitle);
            case TabAlertState.kAudioPlaying:
                return loadTimeData.getStringF('audioPlaying', tabTitle);
            case TabAlertState.kAudioMuting:
                return loadTimeData.getStringF('audioMuting', tabTitle);
            default:
                return tabTitle;
        }
    }
    return tabTitle;
}
function ariaLabel(itemData) {
    if (itemData instanceof TabGroupData &&
        itemData.type === TabItemType.RECENTLY_CLOSED_TAB_GROUP) {
        const tabGroup = itemData.tabGroup;
        const tabCountText = loadTimeData.getStringF(tabGroup.tabCount === 1 ? 'oneTab' : 'tabCount', tabGroup.tabCount);
        return `${tabGroup.title} ${tabCountText} ${tabGroup.lastActiveElapsedText} ${itemData.a11yTypeText}`;
    }
    if (itemData instanceof SplitViewData) {
        const hostnames = itemData.tabUrls.slice(0, 2).map(url => getDisplayHostnameForUrl(new URL(normalizeURL(url))));
        const lastActive = itemData.lastActiveElapsedText;
        const lastActivePart = lastActive ? `, ${lastActive}` : '';
        return `${loadTimeData.getString('a11ySplitView')}, ${hostnames[0]}, ${hostnames[1]}${lastActivePart}. ${itemData.a11yTypeText}`;
    }
    if (itemData instanceof TabData) {
        const tabData = itemData;
        const groupTitleOrEmpty = tabData.tabGroup ? tabData.tabGroup.title : '';
        const titleAndAlerts = titleAndAlertAriaLabel(tabData);
        return `${titleAndAlerts} ${groupTitleOrEmpty} ${tabData.hostname} ${tabData.tab.lastActiveElapsedText} ${tabData.a11yTypeText}`;
    }
    throw new Error('Invalid data provided.');
}
function normalizeURL(url) {
    // When a navigation is cancelled before completion, the tab's URL can be
    // empty, which leads to errors when attempting to construct a URL object with
    // it. To handle this, we substitute any empty URL with 'about:blank'. This is
    // consistent with how the Omnibox handles empty URLs.
    return url || 'about:blank';
}
function getDisplayHostnameForUrl(url) {
    if (url.protocol === 'blob:') {
        return loadTimeData.getString('blobUrlSource');
    }
    else if (url.protocol === 'file:') {
        return loadTimeData.getString('fileUrlSource');
    }
    else if (url.protocol === 'about:' && url.pathname === 'blank') {
        return 'about:blank';
    }
    else if (url.protocol === 'view-source:') {
        return loadTimeData.getString('viewSourceSource');
    }
    else {
        return url.hostname;
    }
}
function getTitle(data) {
    if (data.type === TabItemType.RECENTLY_CLOSED_TAB_GROUP) {
        return undefined;
    }
    if (data instanceof SplitViewData) {
        if (data.tabs) {
            // Returns "Split View" followed by the joined titles of both sub-tabs to
            // allow search matching against either "Split View" or either tab's
            // title.
            return `${data.title} ${data.tabs[0].title} ${data.tabs[1].title}`;
        }
        return data.title;
    }
    return data.tab.title;
}
function getHostname(data) {
    if (data.type === TabItemType.RECENTLY_CLOSED_TAB_GROUP) {
        return undefined;
    }
    if (data instanceof SplitViewData) {
        // Returns the joined display hostnames of both sub-tabs to allow search
        // matching against either tab's URL/domain.
        return data.tabUrls
            .map(url => {
            try {
                return getDisplayHostnameForUrl(new URL(normalizeURL(url)));
            }
            catch (e) {
                return 'about:blank';
            }
        })
            .join(' ');
    }
    return data.hostname;
}
function getTabGroupTitle(data) {
    return data.tabGroup?.title;
}

const sheet = new CSSStyleSheet();
sheet.replaceSync(`html{--mwb-background-color:white;--mwb-icon-button-fill-color:var(--google-grey-700);--mwb-icon-size:16px;--mwb-item-height:48px;--mwb-list-item-horizontal-margin:20px;--mwb-list-item-hover-background-color:rgba(var(--google-grey-900-rgb),0.1);--mwb-list-item-selected-background-color:rgba(var(--google-grey-900-rgb),0.14);--mwb-list-section-title-font-size:11px;--mwb-list-section-title-height:48px;--mwb-primary-text-font-size:13px;--mwb-primary-text-font-weight:normal;--mwb-scrollbar-thumb-color:var(--google-grey-300);--mwb-scrollbar-thumb-hover-color:var(--google-grey-500);--mwb-scrollbar-track-color:var(--mwb-background-color);--mwb-scrollbar-width:4px;--mwb-secondary-text-font-size:12px;--mwb-secondary-text-font-weight:normal}@media (prefers-color-scheme:dark){html{--mwb-background-color:var(--google-grey-900);--mwb-icon-button-fill-color:var(--google-grey-300);--mwb-list-item-hover-background-color:rgb(55,56,58);--mwb-list-item-selected-background-color:rgb(68,69,71);--mwb-scrollbar-thumb-color:var(--google-grey-500);--mwb-scrollbar-thumb-hover-color:var(--google-grey-300)}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

let instance$8 = null;
function getCss$6() {
    return instance$8 || (instance$8 = [...[], css `a,cr-button,cr-icon-button,div{cursor:default}cr-icon-button{--cr-icon-button-icon-size:var(--mwb-icon-size);--cr-icon-button-size:calc(var(--mwb-icon-size) * 1.5)}`]);
}

let instance$7 = null;
function getCss$5() {
    return instance$7 || (instance$7 = [...[], css `:host{display:none}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$2() {
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
        return getCss$5();
    }
    render() {
        return getHtml$2.bind(this)();
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

const div = document.createElement('div');
div.innerHTML = getTrustedHTML `<cr-iconset name="tab-search" size="16">
  <svg>
    <defs>
      <g id="close">
        <path d="m8 8.852-2.734 2.73a.526.526 0 0 1-.414.176.604.604 0 0 1-.418-.192.583.583 0 0 1 0-.851L7.148 8l-2.73-2.734a.534.534 0 0 1-.176-.426c.004-.16.07-.3.192-.422a.568.568 0 0 1 .425-.184c.16 0 .301.059.426.184L8 7.148l2.734-2.73a.568.568 0 0 1 .426-.184c.16 0 .3.059.422.184a.566.566 0 0 1 .184.422.568.568 0 0 1-.184.426L8.852 8l2.73 2.734a.562.562 0 0 1 0 .832.58.58 0 0 1-.848 0Zm0 0"></path>
      </g>
      <g id="close-old">
        <path d="M13 4.00714L11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714Z">
        </path>
      </g>
      <g id="search">
        <path d="M6.402 10.398c-1.113 0-2.058-.386-2.836-1.164-.777-.777-1.168-1.722-1.168-2.836 0-1.109.391-2.054 1.168-2.832.778-.777 1.723-1.168 2.832-1.168 1.114 0 2.059.391 2.836 1.168.778.778 1.164 1.723 1.164 2.836 0 .446-.066.871-.207 1.27a4.178 4.178 0 0 1-.574 1.094l3.567 3.566a.585.585 0 0 1 .183.418.585.585 0 0 1-.183.418.59.59 0 0 1-.426.184c-.16 0-.301-.063-.426-.184l-3.566-3.55c-.332.241-.7.437-1.094.573-.399.141-.824.207-1.27.207ZM6.398 9.2c.782 0 1.442-.27 1.985-.816.547-.543.816-1.203.816-1.985 0-.777-.27-1.437-.816-1.98-.543-.547-1.203-.816-1.985-.816-.777 0-1.437.27-1.98.816-.547.543-.816 1.203-.816 1.98 0 .782.27 1.442.816 1.985.543.547 1.203.816 1.98.816Zm0 0"></path>
      </g>
      <g id="search-old">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.8619 10.2981L10.6177 10.0578C11.484 9.05905 12.0874 7.68174 12.0874 5.97468C12.0874 2.82136 9.23365 0 6.04368 0C2.85486 0 0 2.82136 0 5.97468C0 9.12687 3.45353 11.9462 6.17606 11.9482C7.77044 11.9494 9.0094 11.5085 9.98871 10.6796L10.2341 10.921V11.6156L14.6752 16L16 14.6904L11.5681 10.2981H10.8619ZM6.04422 10.2423C3.65985 10.2423 1.72676 8.33212 1.72676 5.97468C1.72676 3.61724 3.65985 1.70705 6.04422 1.70705C8.42749 1.70705 10.3606 3.61724 10.3606 5.97468C10.3606 8.33212 8.42749 10.2423 6.04422 10.2423V10.2423Z">
        </path>
      </g>
    </defs>
  </svg>
</cr-iconset>
`;
const iconsets = div.querySelectorAll('cr-iconset');
for (const iconset of iconsets) {
    document.head.appendChild(iconset);
}

let instance$6 = null;
function getCss$4() {
    return instance$6 || (instance$6 = [...[getCss$6()], css `:host{--audio-icon-color:var(--color-tab-search-media-icon);--glic-active-icon-color:var(--color-tab-search-media-glic-active-icon);--media-recording-icon-color:var(--color-tab-search-media-recording-icon);position:relative}:host([size=large]){--mwb-item-height:66px}:host(:focus){outline:none}:host(:is(.hovered,.selected)) .button-container{height:auto;overflow:visible;visibility:visible;width:auto}@media (forced-colors:active){:host(:is(.hovered,.selected)){border:1px solid ActiveBorder}}.button-container{height:0;margin-inline-start:2px;overflow:hidden;width:0}.button-container.allocate-space-while-hidden{height:auto;overflow:visible;visibility:hidden;width:auto}.button-container cr-icon-button{--cr-icon-button-fill-color:var(--mwb-icon-button-fill-color)}.favicon{background-repeat:no-repeat;background-size:var(--mwb-icon-size);flex-shrink:0;height:var(--mwb-icon-size);width:var(--mwb-icon-size)}.text-container{flex-grow:1;overflow:hidden;user-select:none}#groupTitle,#primaryText,#secondaryText{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#secondaryText{direction:rtl}#primaryText{color:var(--cr-primary-text-color);font-size:var(--mwb-primary-text-font-size);font-weight:var(--mwb-primary-text-font-weight)}#secondaryContainer{align-items:center;color:var(--cr-secondary-text-color);display:flex;font-size:var(--mwb-secondary-text-font-size);font-weight:var(--mwb-secondary-text-font-weight)}:host([size=compact]) #secondaryContainer{display:none}#primaryContainer{display:flex;gap:3px}#secondaryTimestamp{flex-shrink:0}#textAriaLabel{clip:rect(0,0,0,0);display:inline-block;position:fixed}.separator{margin-inline-end:4px;margin-inline-start:4px}cr-icon-button{--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}.search-highlight-hit{--search-highlight-hit-background-color:none;--search-highlight-hit-color:none;--search-highlight-hit-font-weight:bold;font-weight:bold}#groupDot{flex-shrink:0;margin-inline-end:6px}#mediaAlert[display='block']{-webkit-mask:center/contain no-repeat;flex-shrink:0;height:var(--mwb-icon-size);margin-inline-end:8px;margin-inline-start:4px;width:var(--mwb-icon-size)}#mediaAlert[class='media-recording'],#mediaAlert[class='audio-recording'],#mediaAlert[class='video-recording']{-webkit-mask-image:url(alert_indicators/tab_media_recording.svg);background-color:var(--media-recording-icon-color)}#mediaAlert[class='audio-playing']{-webkit-mask-image:url(alert_indicators/tab_audio_rounded_old.svg);background-color:var(--audio-icon-color)}#mediaAlert[class='audio-muting']{-webkit-mask-image:url(alert_indicators/tab_audio_muting_rounded_old.svg);background-color:var(--audio-icon-color)}#mediaAlert[class='glic-accessing']{-webkit-mask-image:url(alert_indicators/tab_media_glic_active.svg);background-color:var(--glic-active-icon-color)}#iconContainer{align-items:center;background:var(--tab-search-favicon-background,var(--color-list-item-url-favicon-background));border-radius:8px;display:flex;flex-shrink:0;height:40px;justify-content:center;overflow:hidden;margin-inline-end:var(--tab-search-item-icon-margin,16px);width:40px}:host([size=compact]) #iconContainer{height:24px;width:24px}:host([size=large]) #iconContainer{height:56px;width:56px}cr-tooltip{white-space:nowrap}:host-context([webui-rounded-icons]){#mediaAlert[class='audio-muting']{-webkit-mask-image:url(alert_indicators/tab_audio_muting_rounded.svg)}#mediaAlert[class='audio-playing']{-webkit-mask-image:url(alert_indicators/tab_audio_rounded.svg)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$1() {
    return html `<!--_html_template_start_-->
<div id="iconContainer">
  <div class="favicon" .style="background-image:${this.faviconUrl_()}"></div>
</div>
<div class="text-container" aria-hidden="true">
  <div id="primaryContainer">
    <div id="primaryText" title="${this.data.tab.title}"></div>
    <img id="mediaAlert" display="${this.mediaAlertVisibility_()}"
        class="${this.getMediaAlertImageClass_()}">
  </div>
  <div id="secondaryContainer">
    <!-- We do not leverage a dom-if element as the element highlighting logic
        may trigger before the stamping has taken place -->
    <tab-group-dot id="groupDot" ?hidden="${!this.data.tabGroup}"
        .color="${this.data.tabGroup?.color ?? 0}">
    </tab-group-dot>
    ${this.data.tabGroup?.title ? html `
      <div id="groupTitle"></div>
      <div class="separator">•</div>
    ` : ''}
    <div id="secondaryText" ?hidden="${this.hideUrl}">
      <bdi id="secondaryTextInner"></bdi>
    </div>
    ${!this.hideTimestamp ? html `
      <div class="separator" ?hidden="${!this.data.hostname || this.hideUrl}">
        •
      </div>
      <div id="secondaryTimestamp">${this.data.tab.lastActiveElapsedText}</div>
    ` : ''}
  </div>
</div>
${this.isCloseable_() ? html `
  <div class="${this.getButtonContainerStyles_()}">
    <cr-icon-button id="closeButton" role="${this.getCloseButtonRole_()}"
        aria-label="${this.ariaLabelForButton_()}"
        iron-icon="${this.closeButtonIcon}" ?noink="${!this.buttonRipples_}"
        no-ripple-on-focus @click="${this.onCloseButtonClick_}"
        title="${this.tooltipForButton_()}" @focus="${this.onCloseButtonFocus_}"
        @blur="${this.onCloseButtonBlur_}">
    </cr-icon-button>
    <cr-tooltip for="closeButton" position="top" offset="0"
        fit-to-visible-bounds manual-mode>
      ${this.tooltipForButton_()}
    </cr-tooltip>
  </div>
` : ''}
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function deepGet(obj, path) {
    let value = obj;
    const parts = path.split('.');
    for (const part of parts) {
        if (value[part] === undefined) {
            return undefined;
        }
        value = value[part];
    }
    return value;
}
var TabSearchItemSize;
(function (TabSearchItemSize) {
    TabSearchItemSize["COMPACT"] = "compact";
    TabSearchItemSize["MEDIUM"] = "medium";
    TabSearchItemSize["LARGE"] = "large";
})(TabSearchItemSize || (TabSearchItemSize = {}));
const TabSearchItemBase = MouseHoverableMixinLit(CrLitElement);
class TabSearchItemElement extends TabSearchItemBase {
    static get is() {
        return 'tab-search-item';
    }
    static get styles() {
        return getCss$4();
    }
    render() {
        return getHtml$1.bind(this)();
    }
    static get properties() {
        return {
            data: { type: Object },
            buttonRipples_: { type: Boolean },
            hideTimestamp: { type: Boolean },
            hideUrl: { type: Boolean },
            hideCloseButton: { type: Boolean },
            closeButtonAriaLabel: { type: String },
            closeButtonTooltip: { type: String },
            closeButtonIcon: { type: String },
            size: { type: String, reflect: true },
        };
    }
    #data_accessor_storage = new TabData({
        active: false,
        visible: false,
        faviconUrl: null,
        groupId: null,
        alertStates: [],
        isDefaultFavicon: false,
        lastActiveElapsedText: '',
        lastActiveTimeTicks: { internalValue: BigInt(0) },
        pinned: false,
        split: false,
        splitId: null,
        splitLayout: null,
        showIcon: false,
        tabId: 1,
        title: '',
        url: '',
    }, TabItemType.OPEN_TAB, '');
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    #buttonRipples__accessor_storage = loadTimeData.getBoolean('useRipples');
    get buttonRipples_() { return this.#buttonRipples__accessor_storage; }
    set buttonRipples_(value) { this.#buttonRipples__accessor_storage = value; }
    #hideTimestamp_accessor_storage = false;
    get hideTimestamp() { return this.#hideTimestamp_accessor_storage; }
    set hideTimestamp(value) { this.#hideTimestamp_accessor_storage = value; }
    #size_accessor_storage = TabSearchItemSize.MEDIUM;
    get size() { return this.#size_accessor_storage; }
    set size(value) { this.#size_accessor_storage = value; }
    #hideUrl_accessor_storage = false;
    get hideUrl() { return this.#hideUrl_accessor_storage; }
    set hideUrl(value) { this.#hideUrl_accessor_storage = value; }
    #hideCloseButton_accessor_storage = false;
    get hideCloseButton() { return this.#hideCloseButton_accessor_storage; }
    set hideCloseButton(value) { this.#hideCloseButton_accessor_storage = value; }
    #closeButtonIcon_accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
        'tab-search:close' :
        'tab-search:close-old';
    get closeButtonIcon() { return this.#closeButtonIcon_accessor_storage; }
    set closeButtonIcon(value) { this.#closeButtonIcon_accessor_storage = value; }
    #closeButtonAriaLabel_accessor_storage = '';
    get closeButtonAriaLabel() { return this.#closeButtonAriaLabel_accessor_storage; }
    set closeButtonAriaLabel(value) { this.#closeButtonAriaLabel_accessor_storage = value; }
    #closeButtonTooltip_accessor_storage = '';
    get closeButtonTooltip() { return this.#closeButtonTooltip_accessor_storage; }
    set closeButtonTooltip(value) { this.#closeButtonTooltip_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('data') && changedProperties.has('size')) {
            assert(Object.values(TabSearchItemSize).includes(this.size));
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('data')) {
            this.dataChanged_();
        }
    }
    /**
     * @return Whether a close action can be performed on the item.
     */
    isCloseable_() {
        return !this.hideCloseButton && this.data.type === TabItemType.OPEN_TAB;
    }
    /**
     * @return the class name for the close button including a second class to
     *     preallocate space for the close button even while hidden if the tab
     *     will display a media alert.
     */
    getButtonContainerStyles_() {
        return 'button-container' +
            (this.isOpenTabAndHasMediaAlert_() ? ' allocate-space-while-hidden' :
                '');
    }
    getCloseButtonRole_() {
        // If this tab search item is an option within a list, the button
        // should also be treated as an option in a list to ensure the correct
        // focus traversal behavior when a screenreader is on.
        return this.role === 'option' ? 'option' : 'button';
    }
    onCloseButtonClick_(e) {
        this.dispatchEvent(new CustomEvent('close'));
        e.stopPropagation();
    }
    onCloseButtonFocus_() {
        // Manual tooltip control for keyboard focus.
        const tooltip = this.shadowRoot.querySelector('cr-tooltip');
        assert(tooltip);
        tooltip.show();
    }
    onCloseButtonBlur_() {
        const tooltip = this.shadowRoot.querySelector('cr-tooltip');
        assert(tooltip);
        tooltip.hide();
    }
    faviconUrl_() {
        return getFaviconUrlForTab(this.data.tab.url, this.data.tab);
    }
    isOpenTabAndHasMediaAlert_() {
        const tabData = this.data;
        return tabData.type === TabItemType.OPEN_TAB &&
            tabHasMediaAlerts(tabData.tab);
    }
    /**
     * Determines the display attribute value for the media indicator.
     */
    mediaAlertVisibility_() {
        return this.isOpenTabAndHasMediaAlert_() ? 'block' : 'none';
    }
    /**
     * Returns the correct media alert indicator class name.
     */
    getMediaAlertImageClass_() {
        return this.isOpenTabAndHasMediaAlert_() ?
            getMediaAlertImageClass(this.data.tab) :
            '';
    }
    dataChanged_() {
        const data = this.data;
        [
            ['tab.title', this.$.primaryText],
            ['hostname', this.$.secondaryTextInner],
            ['tabGroup.title', this.shadowRoot.querySelector('#groupTitle')],
        ]
            .forEach(([path, element]) => {
            if (element) {
                const highlightRanges = data.highlightRanges ? data.highlightRanges[path] : undefined;
                highlightText(element, deepGet(data, path), highlightRanges);
            }
        });
        // Show chrome:// if it's a chrome internal url
        const protocol = new URL(normalizeURL(data.tab.url)).protocol;
        if (protocol === 'chrome:') {
            this.$.secondaryTextInner.prepend(document.createTextNode('brave://'));
        }
    }
    ariaLabelForButton_() {
        if (this.closeButtonAriaLabel) {
            return this.closeButtonAriaLabel;
        }
        return `${loadTimeData.getString('closeTab')} ${this.data.tab.title}`;
    }
    tooltipForButton_() {
        if (this.closeButtonTooltip) {
            return this.closeButtonTooltip;
        }
        return loadTimeData.getString('closeTab');
    }
}
customElements.define(TabSearchItemElement.is, TabSearchItemElement);

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

let instance$5 = null;
function getCss$3() {
    return instance$5 || (instance$5 = [...[], css `:host{display:block;position:relative}:host([chunk-size='0']) #container>::slotted(*){box-sizing:border-box;contain-intrinsic-size:var(--list-item-size,100px) auto;content-visibility:auto;width:100%}:host(:not([chunk-size='0'])) #container>::slotted(.chunk){box-sizing:border-box;contain-intrinsic-size:calc(var(--chunk-size) * var(--list-item-size,100px)) auto;content-visibility:auto;width:100%}`]);
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
        return getCss$3();
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

let instance$4 = null;
function getCss$2() {
    return instance$4 || (instance$4 = [...[], css `:host{display:block;overflow-x:hidden;overflow-y:auto;position:relative}`]);
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'selectable-lazy-list' is a wrapper around `lazy-list` that
 * provides list selection and navigation as required by the Tab Search UI.
 * The component expects a `max-height` property to be specified in order to
 * determine how many HTML elements to render initially.
 * The `items`, `itemSize` and `template` properties are passed through to the
 * inner `cr-lazy-list'.
 * `expandedList` is an attribute for showing an extra 16px padding at the
 * bottom of the innner list (tab search desired styling).
 * The `isSelectable()` property should return true when a selectable list
 * item from `items` is passed in, and false otherwise. It defaults to returning
 * true for all items. This is used for navigating through the list in response
 * to key presses as non-selectable items are treated as non-navigable. Note
 * that the list assumes the majority of items are selectable/navigable (as is
 * the case in tab search). Passing in a list with a very large number of
 * non-selectable items may result in reduced performance when navigating.
 * The `selected` property is the index of the selected item in the list, or
 * NO_SELECTION if nothing is selected.
 */
const NO_SELECTION = -1;
const selectorNavigationKeys = Object.freeze(['ArrowUp', 'ArrowDown', 'Home', 'End']);
class SelectableLazyListElement extends CrLitElement {
    static get is() {
        return 'selectable-lazy-list';
    }
    static get styles() {
        return getCss$2();
    }
    render() {
        // Render items into light DOM using the client provided template
        render(html `<cr-lazy-list id="list" .scrollTarget="${this}" role="presentation"
          .listItemHost="${this.getRootNode().host}"
          .itemSize="${this.itemSize}" .items="${this.items}"
          .minViewportHeight="${this.maxHeight}"
          .template="${this.template}"
          .restoreFocusElement="${this.selectedItem_}"
          .style="${this.getListPaddingStyle_()}"
          @keydown="${this.onKeyDown_}"
          @viewport-filled="${this.updateSelectedItem_}"
          @fill-height-start="${this.onFillHeightStart_}"
          @fill-height-end="${this.onFillHeightEnd_}">
        </cr-lazy-list>`, this, {
            host: this,
        });
        return html `<slot></slot>`;
    }
    static get properties() {
        return {
            expandedList: { type: Boolean },
            maxHeight: { type: Number },
            items: { type: Array },
            itemSize: { type: Number },
            isSelectable: { type: Object },
            selected: { type: Number },
            template: { type: Object },
            selectedItem_: { type: Object },
        };
    }
    #expandedList_accessor_storage = false;
    get expandedList() { return this.#expandedList_accessor_storage; }
    set expandedList(value) { this.#expandedList_accessor_storage = value; }
    #maxHeight_accessor_storage;
    get maxHeight() { return this.#maxHeight_accessor_storage; }
    set maxHeight(value) { this.#maxHeight_accessor_storage = value; }
    #items_accessor_storage = [];
    get items() { return this.#items_accessor_storage; }
    set items(value) { this.#items_accessor_storage = value; }
    #itemSize_accessor_storage = 100;
    get itemSize() { return this.#itemSize_accessor_storage; }
    set itemSize(value) { this.#itemSize_accessor_storage = value; }
    #template_accessor_storage = () => html ``;
    get template() { return this.#template_accessor_storage; }
    set template(value) { this.#template_accessor_storage = value; }
    #selected_accessor_storage = NO_SELECTION;
    get selected() { return this.#selected_accessor_storage; }
    set selected(value) { this.#selected_accessor_storage = value; }
    #isSelectable_accessor_storage = (_item) => true;
    get isSelectable() { return this.#isSelectable_accessor_storage; }
    set isSelectable(value) { this.#isSelectable_accessor_storage = value; }
    // Extracted to a member so that it can be overridden in tests.
    scrollBehavior = 'smooth';
    #selectedItem__accessor_storage = null;
    get selectedItem_() { return this.#selectedItem__accessor_storage; }
    set selectedItem_(value) { this.#selectedItem__accessor_storage = value; }
    firstSelectableIndex_ = NO_SELECTION;
    lastSelectableIndex_ = NO_SELECTION;
    viewportFillStartTime_ = 0;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('items') ||
            changedProperties.has('isSelectable')) {
            // Perform selection state updates.
            if (this.items.length === 0) {
                this.resetSelected();
            }
            this.firstSelectableIndex_ = this.getNextSelectableIndex_(-1);
            this.lastSelectableIndex_ =
                this.getPreviousSelectableIndex_(this.items.length);
            if (this.selected > this.lastSelectableIndex_) {
                this.selected = this.lastSelectableIndex_;
            }
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('maxHeight') && this.maxHeight !== 0) {
            this.style.maxHeight = `${this.maxHeight}px`;
        }
        if (changedProperties.has('selected')) {
            this.updateSelectedItem_();
            this.onSelectedChanged_();
        }
    }
    getListPaddingStyle_() {
        return this.expandedList ? 'padding-bottom: 16px' : '';
    }
    // Utilities
    getNextSelectableIndex_(index) {
        const increment = this.items.slice(index + 1).findIndex(item => this.isSelectable(item));
        return increment === -1 ? NO_SELECTION : index + 1 + increment;
    }
    getPreviousSelectableIndex_(index) {
        return index < 0 ? NO_SELECTION :
            this.items.slice(0, index).findLastIndex(item => this.isSelectable(item));
    }
    getDomItem_(index) {
        return this.querySelector(`cr-lazy-list > *:nth-child(${index + 1})`);
    }
    lazyList_() {
        const list = this.querySelector('cr-lazy-list');
        assert(list);
        return list;
    }
    updateSelectedItem_() {
        if (!this.items) {
            return;
        }
        const domItem = this.selected === NO_SELECTION ? null : this.getDomItem_(this.selected);
        if (domItem === this.selectedItem_) {
            return;
        }
        if (this.selectedItem_ !== null) {
            this.selectedItem_.classList.toggle('selected', false);
        }
        if (domItem !== null) {
            domItem.classList.toggle('selected', true);
        }
        this.selectedItem_ = domItem;
        this.fire('selected-change', { item: this.selectedItem_ });
    }
    // Public methods
    get selectedItem() {
        return this.selectedItem_;
    }
    fillCurrentViewport() {
        return this.lazyList_().fillCurrentViewport();
    }
    /**
     * Create and insert as many DOM items as necessary to ensure all items are
     * rendered.
     */
    async ensureAllDomItemsAvailable() {
        await this.lazyList_().ensureItemRendered(this.items.length - 1);
    }
    async scrollIndexIntoView(index) {
        assert(index >= this.firstSelectableIndex_ &&
            index <= this.lastSelectableIndex_, 'Index is out of range.');
        const newItem = await this.lazyList_().ensureItemRendered(index);
        newItem.scrollIntoView({ behavior: this.scrollBehavior, block: 'nearest' });
    }
    /**
     * @param key Keyboard event key value.
     * @param focusItem Whether to focus the selected item.
     */
    async navigate(key, focusItem) {
        if ((key === 'ArrowUp' && this.selected === this.firstSelectableIndex_) ||
            key === 'End') {
            await this.ensureAllDomItemsAvailable();
            this.selected = this.lastSelectableIndex_;
        }
        else {
            switch (key) {
                case 'ArrowUp':
                    this.selected = this.getPreviousSelectableIndex_(this.selected);
                    break;
                case 'ArrowDown':
                    const next = this.getNextSelectableIndex_(this.selected);
                    this.selected =
                        next === NO_SELECTION ? this.getNextSelectableIndex_(-1) : next;
                    break;
                case 'Home':
                    this.selected = this.firstSelectableIndex_;
                    break;
                case 'End':
                    this.selected = this.lastSelectableIndex_;
                    break;
            }
        }
        if (focusItem) {
            await this.updateComplete;
            this.selectedItem_.focus({ preventScroll: true });
        }
    }
    // Event handlers
    onFillHeightStart_() {
        this.viewportFillStartTime_ = performance.now();
    }
    onFillHeightEnd_() {
        performance.mark(`tab_search:infinite_list_view_updated:${performance.now() - this.viewportFillStartTime_}:metric_value`);
    }
    /**
     * Handles key events when list item elements have focus.
     */
    onKeyDown_(e) {
        // Do not interfere with any parent component that manages 'shift' related
        // key events.
        if (e.shiftKey) {
            return;
        }
        if (this.selected === undefined) {
            // No tabs matching the search text criteria.
            return;
        }
        if (selectorNavigationKeys.includes(e.key)) {
            this.navigate(e.key, true);
            e.stopPropagation();
            e.preventDefault();
        }
    }
    /**
     * Ensure the scroll view can fully display a preceding or following list item
     * to the one selected, if existing.
     */
    async onSelectedChanged_() {
        if (this.selected === undefined) {
            return;
        }
        const selectedIndex = this.selected;
        if (selectedIndex === this.firstSelectableIndex_) {
            this.scrollTo({ top: 0, behavior: this.scrollBehavior });
            return;
        }
        if (selectedIndex === this.lastSelectableIndex_) {
            this.selectedItem_.scrollIntoView({ behavior: this.scrollBehavior });
            return;
        }
        const previousIndex = this.getPreviousSelectableIndex_(this.selected);
        const previousItem = previousIndex === NO_SELECTION ? null : this.getDomItem_(previousIndex);
        if (!!previousItem && (previousItem.offsetTop < this.scrollTop)) {
            previousItem.scrollIntoView({ behavior: this.scrollBehavior, block: 'nearest' });
            return;
        }
        const nextItemIndex = this.getNextSelectableIndex_(this.selected);
        if (nextItemIndex !== NO_SELECTION) {
            const nextItem = await this.lazyList_().ensureItemRendered(nextItemIndex);
            if (nextItem.offsetTop + nextItem.offsetHeight >
                this.scrollTop + this.offsetHeight) {
                nextItem.scrollIntoView({ behavior: this.scrollBehavior, block: 'nearest' });
            }
        }
    }
    resetSelected() {
        this.selected = NO_SELECTION;
    }
    async setSelected(index) {
        if (index === NO_SELECTION) {
            this.resetSelected();
            return;
        }
        if (index !== this.selected) {
            assert(index <= this.lastSelectableIndex_, 'Selection index is out of range.');
            await this.lazyList_().ensureItemRendered(index);
            this.selected = index;
        }
    }
}
customElements.define(SelectableLazyListElement.is, SelectableLazyListElement);

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
let instance$3 = null;
class BrowserProxy {
    callbackRouter;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        const pageHandlerRemote = PageHandler.getRemote();
        pageHandlerRemote.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    static getInstance() {
        return instance$3 || (instance$3 = new BrowserProxy());
    }
    static setInstance(newInstance) {
        instance$3 = newInstance;
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

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// LINT.IfChange(TabSearchRecentlyClosedItemOpenAction)
/**
 * These values are persisted to logs and should not be renumbered or reused.
 * See tools/metrics/histograms/metadata/tab/enums.xml.
 */
var RecentlyClosedItemOpenAction;
(function (RecentlyClosedItemOpenAction) {
    RecentlyClosedItemOpenAction[RecentlyClosedItemOpenAction["WITHOUT_SEARCH"] = 0] = "WITHOUT_SEARCH";
    RecentlyClosedItemOpenAction[RecentlyClosedItemOpenAction["WITH_SEARCH"] = 1] = "WITH_SEARCH";
    RecentlyClosedItemOpenAction[RecentlyClosedItemOpenAction["COUNT"] = 2] = "COUNT";
})(RecentlyClosedItemOpenAction || (RecentlyClosedItemOpenAction = {}));
class TabSearchApiProxyImpl {
    callbackRouter = new PageCallbackRouter$1();
    handler = new PageHandlerRemote$1();
    constructor() {
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    closeTab(tabId) {
        this.handler.closeTab(tabId);
    }
    closeTabs(tabIds) {
        this.handler.closeTabs(tabIds);
    }
    closeWebUiTab() {
        this.handler.closeWebUiTab();
    }
    getProfileData() {
        return this.handler.getProfileData();
    }
    getIsSplit() {
        return this.handler.getIsSplit();
    }
    openRecentlyClosedEntry(id, withSearch, isTab) {
        chrome.metricsPrivate.recordEnumerationValue(isTab ? 'Tabs.TabSearch.WebUI.RecentlyClosedTabOpenAction' :
            'Tabs.TabSearch.WebUI.RecentlyClosedGroupOpenAction', withSearch ? RecentlyClosedItemOpenAction.WITH_SEARCH :
            RecentlyClosedItemOpenAction.WITHOUT_SEARCH, RecentlyClosedItemOpenAction.COUNT);
        this.handler.openRecentlyClosedEntry(id);
    }
    switchToTab(info) {
        this.handler.switchToTab(info);
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    replaceActiveSplitTab(replacementSplitTabId) {
        this.handler.replaceActiveSplitTab(replacementSplitTabId);
    }
    saveRecentlyClosedExpandedPref(expanded) {
        this.handler.saveRecentlyClosedExpandedPref(expanded);
    }
    maybeShowUi() {
        this.handler.maybeShowUI();
    }
    redirectToNtp() {
        window.location.replace(loadTimeData.getString('newTabPageUrl'));
    }
    static getInstance() {
        return instance$2 || (instance$2 = new TabSearchApiProxyImpl());
    }
    static setInstance(obj) {
        instance$2 = obj;
    }
}
let instance$2 = null;

// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
class BraveTabSearchApiProxyImpl extends TabSearchApiProxyImpl {
    // Shadow the parent's `getInstance` with a `BraveTabSearchApiProxy`-typed
    // return so callers using the Brave class name get the extended interface
    // without an `as` cast.
    static getInstance() {
        return braveInstance || (braveInstance = new BraveTabSearchApiProxyImpl());
    }
    getSuggestedTopics() {
        return this.handler.getSuggestedTopics();
    }
    getFocusTabs(topic) {
        return this.handler.getFocusTabs(topic);
    }
    undoFocusTabs() {
        return this.handler.undoFocusTabs();
    }
    openLeoGoPremiumPage() {
        this.handler.openLeoGoPremiumPage();
    }
    openLearnMorePage() {
        this.handler.openLearnMorePage();
    }
    setTabFocusEnabled() {
        this.handler.setTabFocusEnabled();
    }
    getTabFocusShowFRE() {
        return this.handler.getTabFocusShowFRE();
    }
    searchTabsByContent(query) {
        return this.handler.searchTabsByContent(query);
    }
}
let braveInstance = null;
// Re-point upstream's static `getInstance` so callers that only know the
// `TabSearchApiProxyImpl` class name also receive the Brave singleton.
TabSearchApiProxyImpl.getInstance = BraveTabSearchApiProxyImpl.getInstance;

let instance$1 = null;
function getCss$1() {
    return instance$1 || (instance$1 = [...[], css `::-webkit-scrollbar-thumb{background-color:var(--mwb-scrollbar-thumb-color)}::-webkit-scrollbar-thumb:hover{background-color:var(--mwb-scrollbar-thumb-hover-color)}::-webkit-scrollbar-track{background-color:var(--mwb-scrollbar-track-color)}::-webkit-scrollbar{width:var(--mwb-scrollbar-width)}.mwb-list-item{align-items:center;background-color:var(--mwb-background-color);contain-intrinsic-size:var(--mwb-item-height);content-visibility:auto;display:flex;height:var(--mwb-item-height);padding:0 var(--mwb-list-item-horizontal-margin)}.mwb-list-item.hovered{background-color:var(--mwb-list-item-hover-background-color)}.mwb-list-item.selected{background-color:var(--mwb-list-item-selected-background-color)}`]);
}

let instance = null;
function getCss() {
    return instance || (instance = [...[getCss$1()], css `:host{display:flex;flex-direction:column;height:100vh}#header{display:flex;flex-direction:column}picture{align-items:center;align-self:center;display:flex;height:130px;justify-content:center;width:130px;margin-block-end:16px;margin-block-start:32px}#closeButton{--cr-icon-button-size:20px;--cr-icon-button-icon-size:16px;align-self:flex-end;margin:24px}.title{align-self:center;text-align:center;color:var(--cr-primary-text-color);font-size:16px;font-weight:500;line-height:24px;margin:0 16px}.body{align-self:center;color:var(--cr-primary-text-color);font-size:14px;font-weight:400;line-height:20px;margin:4px 16px;text-align:center}.tab-list:not([hidden]){display:flex;max-height:calc(100% - 92px - 4 * 16px);background:var(--color-tab-search-background);border-radius:16px;margin:16px auto;width:calc(min(100% - 2*16px,394px));padding:16px 0}.scroller{flex:1;max-height:none;display:block;overflow-x:hidden;overflow-y:auto;scrollbar-gutter:stable}.scroller::-webkit-scrollbar{width:8px}.scroller::-webkit-scrollbar-thumb{border-radius:8px}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml() {
    return html `<!--_html_template_start_-->
<div id="header" ?hidden="${this.allEligibleTabs_.length === 0}">
  <cr-icon-button id="closeButton"
      iron-icon="${this.webuiRoundedIconsEnabled_ ? 'tab-search:close' :
        'tab-search:close-old'}"
      title="$i18n{splitViewCloseButtonAriaLabel}"
      @click="${this.onCloseClick_}" @focus="${this.onCloseButtonFocus_}"
      @blur="${this.onCloseButtonBlur_}">
  </cr-icon-button>
  <cr-tooltip for="closeButton" position="top" offset="0" fit-to-visible-bounds
      manual-mode>
    $i18n{splitViewCloseButtonAriaLabel}
  </cr-tooltip>
</div>
<div class="tab-list" ?hidden="${this.allEligibleTabs_.length === 0}">
  <selectable-lazy-list id="splitTabsList" class="scroller"
      .items="${this.allEligibleTabs_}" item-size="66"
      max-height="${this.minViewportHeight_}" role="listbox"
      .template="${(item, index) => html `
        <tab-search-item class="mwb-list-item selectable" hide-close-button
            hide-timestamp size="large" .data="${item}" data-index="${index}"
            @click="${this.onTabClick_}" @focus="${this.onTabFocus_}"
            @focusout="${this.onTabFocusout_}" @keydown="${this.onTabKeydown_}"
            role="option" aria-label="${ariaLabel(item)}" tabindex="0">
        </tab-search-item>
      `}">
  </selectable-lazy-list>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SplitNewTabPageAppElement extends CrLitElement {
    static get is() {
        return 'split-new-tab-page-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            allEligibleTabs_: { type: Array },
            minViewportHeight_: { type: Number },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #allEligibleTabs__accessor_storage = [];
    get allEligibleTabs_() { return this.#allEligibleTabs__accessor_storage; }
    set allEligibleTabs_(value) { this.#allEligibleTabs__accessor_storage = value; }
    #minViewportHeight__accessor_storage = 0;
    get minViewportHeight_() { return this.#minViewportHeight__accessor_storage; }
    set minViewportHeight_(value) { this.#minViewportHeight__accessor_storage = value; }
    title_ = '';
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    apiProxy_ = TabSearchApiProxyImpl.getInstance();
    initialFocusPromise_ = null;
    listenerIds_ = [];
    visibilityChangedListener_;
    get initialFocusPromiseForTesting() {
        return this.initialFocusPromise_;
    }
    constructor() {
        super();
        ColorChangeUpdater.forDocument().start();
        this.visibilityChangedListener_ = () => {
            if (document.visibilityState === 'visible') {
                this.apiProxy_.getProfileData().then(({ profileData }) => {
                    this.onTabsChanged_(profileData);
                });
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.apiProxy_.getIsSplit().then(({ isSplit }) => {
            if (!isSplit) {
                this.redirectToNtp_();
            }
        });
        const callbackRouter = this.apiProxy_.getCallbackRouter();
        this.listenerIds_.push(callbackRouter.tabsChanged.addListener(this.onTabsChanged_.bind(this)), callbackRouter.tabUpdated.addListener(this.onTabUpdated_.bind(this)), callbackRouter.tabsRemoved.addListener(this.onTabsRemoved_.bind(this)), callbackRouter.tabUnsplit.addListener(this.redirectToNtp_.bind(this)), callbackRouter.hostWindowChanged.addListener(this.hostWindowChanged_.bind(this)));
        this.apiProxy_.getProfileData().then(({ profileData }) => {
            this.onTabsChanged_(profileData);
        });
        document.addEventListener('visibilitychange', this.visibilityChangedListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => this.apiProxy_.getCallbackRouter().removeListener(id));
        this.listenerIds_ = [];
        document.removeEventListener('visibilitychange', this.visibilityChangedListener_);
    }
    onCloseClick_() {
        this.apiProxy_.closeWebUiTab();
    }
    onCloseButtonFocus_() {
        const tooltip = this.shadowRoot.querySelector('cr-tooltip');
        assert(tooltip);
        tooltip.show();
    }
    onCloseButtonBlur_() {
        const tooltip = this.shadowRoot.querySelector('cr-tooltip');
        assert(tooltip);
        tooltip.hide();
    }
    onTabClick_(e) {
        const target = e.currentTarget;
        this.apiProxy_.replaceActiveSplitTab(target.data.tab.tabId);
    }
    onTabFocus_(e) {
        // Ensure that when a TabSearchItem receives focus, it becomes the selected
        // item in the list.
        const target = e.currentTarget;
        const index = Number(target.dataset['index']);
        this.$.splitTabsList.setSelected(index);
    }
    onTabFocusout_(_) {
        // Ensure that when a TabSearchItem loses focus, it resets the selected
        // item.
        this.$.splitTabsList.resetSelected();
    }
    onTabKeydown_(e) {
        if (e.key !== 'Enter' && e.key !== ' ') {
            return;
        }
        this.onTabClick_(e);
    }
    onTabsChanged_(profileData) {
        const hostWindow = profileData.windows.find(({ isHostWindow }) => isHostWindow);
        this.allEligibleTabs_ =
            hostWindow?.tabs?.filter(tab => !tab.visible && !tab.split)
                .map(tab => this.getTabData_(tab, true, TabItemType.OPEN_TAB)) ||
                [];
        this.sortTabs_();
        if (!this.initialFocusPromise_) {
            this.initialFocusPromise_ = this.focusFirstTab_();
        }
        this.updateComplete.then(() => {
            this.updateViewportHeight_(profileData);
        });
    }
    async focusFirstTab_() {
        await this.updateComplete;
        await this.$.splitTabsList.updateComplete;
        if (!this.isConnected || this.allEligibleTabs_.length === 0) {
            return;
        }
        // setSelected(0) ensures the first item is rendered by the underlying
        // cr-lazy-list before we attempt to query and focus it.
        await this.$.splitTabsList.setSelected(0);
        const firstItem = this.shadowRoot.querySelector('tab-search-item');
        if (firstItem) {
            firstItem.focus();
        }
    }
    onTabUpdated_(tabUpdateInfo) {
        const { tab, inActiveWindow, inHostWindow } = tabUpdateInfo;
        if (!inHostWindow) {
            return;
        }
        const tabData = this.getTabData_(tab, inActiveWindow, TabItemType.OPEN_TAB);
        const tabIndex = this.allEligibleTabs_.findIndex(el => el.tab.tabId === tab.tabId);
        if (tabIndex >= 0) {
            this.allEligibleTabs_[tabIndex] = tabData;
        }
        else {
            this.allEligibleTabs_.push(tabData);
        }
        this.allEligibleTabs_ = this.allEligibleTabs_.filter(tab => !tab.tab.visible && !tab.tab.split);
        this.sortTabs_();
    }
    onTabsRemoved_(tabsRemovedInfo) {
        if (this.allEligibleTabs_.length === 0) {
            return;
        }
        const ids = new Set(tabsRemovedInfo.tabIds);
        this.allEligibleTabs_ =
            this.allEligibleTabs_.filter(tab => !ids.has(tab.tab.tabId));
        this.sortTabs_();
    }
    sortTabs_() {
        // If no tabs are eligible for selection, redirect to the regular NTP.
        if (this.allEligibleTabs_.length === 0) {
            this.redirectToNtp_();
        }
        this.allEligibleTabs_.sort((a, b) => {
            const tabA = a.tab;
            const tabB = b.tab;
            // Move tabs with media alerts to the top of the list.
            if (tabHasMediaAlerts(tabA) && !tabHasMediaAlerts(tabB)) {
                return -1;
            }
            else if (!tabHasMediaAlerts(tabA) && tabHasMediaAlerts(tabB)) {
                return 1;
            }
            return (tabB.lastActiveTimeTicks && tabA.lastActiveTimeTicks) ?
                Number(tabB.lastActiveTimeTicks.internalValue -
                    tabA.lastActiveTimeTicks.internalValue) :
                0;
        });
        this.title_ = this.allEligibleTabs_.length === 0 ?
            loadTimeData.getString('splitViewEmptyTitle') :
            loadTimeData.getString('splitViewTitle');
    }
    getTabData_(tab, inActiveWindow, type) {
        const displayUrl = getDisplayHostnameForUrl(new URL(normalizeURL(tab.url)));
        const tabData = new TabData(tab, type, displayUrl);
        if (type === TabItemType.OPEN_TAB) {
            tabData.inActiveWindow = inActiveWindow;
        }
        tabData.a11yTypeText = loadTimeData.getString('a11yOpenTab');
        return tabData;
    }
    redirectToNtp_() {
        this.apiProxy_.redirectToNtp();
    }
    hostWindowChanged_() {
        this.apiProxy_.getProfileData().then(({ profileData }) => {
            this.onTabsChanged_(profileData);
        });
    }
    updateViewportHeight_(profileData) {
        const hostWindow = profileData.windows.find(({ isHostWindow }) => isHostWindow);
        this.minViewportHeight_ =
            hostWindow ? hostWindow.height - this.$.header.offsetHeight : 0;
    }
}
customElements.define(SplitNewTabPageAppElement.is, SplitNewTabPageAppElement);

export { tokenEquals as A, assertNotReachedCase as B, Color as C, selectorNavigationKeys as D, ariaLabel as E, BraveTabSearchApiProxyImpl as F, getCss$c as G, SelectableLazyListElement as H, SplitNewTabPageAppElement as I, ItemData as J, PageRemote$1 as K, TabSearchItemElement as L, MouseHoverableMixinLit as M, NO_SELECTION as N, TabAlertState as O, PageCallbackRouter$1 as P, SplitTabLayout as S, TabGroupData as T, UrlSpec as U, assert as a, getCss$6 as b, SplitViewData as c, getFaviconUrlForTab as d, getDisplayHostnameForUrl as e, TabItemType as f, getTrustedHTML as g, highlightText as h, getMediaAlertImageClass as i, TokenSpec as j, TimeTicksSpec as k, TimeSpec as l, ColorSpec$1 as m, normalizeURL as n, assertNotReached as o, TimeDeltaSpec as p, getCss$1 as q, tokenToString as r, getTitle as s, tabHasMediaAlerts as t, getHostname as u, getTabGroupTitle as v, TabSearchApiProxyImpl as w, ColorChangeUpdater as x, listenOnce as y, TabData as z };
//# sourceMappingURL=shared.rollup.js.map
