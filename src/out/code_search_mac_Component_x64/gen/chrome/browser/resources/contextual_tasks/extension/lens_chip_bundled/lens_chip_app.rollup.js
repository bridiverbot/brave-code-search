import { css, CrLitElement, html } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/brave/leo.bundle.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';

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

let instance$5 = null;
function getCss$5() {
    return instance$5 || (instance$5 = [...[], css `[hidden],:host([hidden]){display:none !important}`]);
}

let instance$4 = null;
function getCss$4() {
    return instance$4 || (instance$4 = [...[getCss$5()], css `:host{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle;fill:var(--iron-icon-fill-color,currentcolor);stroke:var(--iron-icon-stroke-color,none);width:var(--iron-icon-width,24px);height:var(--iron-icon-height,24px)}:host-context([webui-refresh-2026]){&:host(:focus){border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}`]);
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
        return getCss$4();
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

let instance$3 = null;
function getCss$3() {
    return instance$3 || (instance$3 = [...[], css `:host{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transform:translate3d(0,0,0)}.ripple{background-color:currentcolor;left:0;opacity:var(--paper-ripple-opacity,0.25);pointer-events:none;position:absolute;will-change:height,transform,width}.ripple,:host(.circle){border-radius:50%}`]);
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
        return getCss$3();
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

const sheet = new CSSStyleSheet();
sheet.replaceSync(`html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-100-rgb:244,199,195;--google-red-100:rgb(var(--google-red-100-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-red-700-rgb:197,57,41;--google-red-700:rgb(var(--google-red-700-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--google-yellow-700-rgb:240,147,0;--google-yellow-700:rgb(var(--google-yellow-700-rgb));--cr-card-background-color:white;--cr-shadow-key-color_:color-mix(in srgb,var(--cr-shadow-color) 30%,transparent);--cr-shadow-ambient-color_:color-mix(in srgb,var(--cr-shadow-color) 15%,transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb),0.1);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:var(--cr-elevation-2);--cr-separator-color:rgba(0,0,0,.06);--cr-title-text-color:rgb(90,90,90);--cr-scrollable-border-color:var(--google-grey-300);--cr-button-edge-spacing:12px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb),.14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1;--cr-fallback-color-outline:rgb(116,119,117);--cr-fallback-color-primary:rgb(11,87,208);--cr-fallback-color-on-primary:rgb(255,255,255);--cr-fallback-color-primary-container:rgb(211,227,253);--cr-fallback-color-on-primary-container:rgb(4,30,73);--cr-fallback-color-secondary-container:rgb(194,231,255);--cr-fallback-color-on-secondary-container:rgb(0,29,53);--cr-fallback-color-neutral-container:rgb(242,242,242);--cr-fallback-color-neutral-outline:rgb(199,199,199);--cr-fallback-color-surface:rgb(255,255,255);--cr-fallback-color-surface1:rgb(248,250,253);--cr-fallback-color-surface2:rgb(243,246,252);--cr-fallback-color-surface3:rgb(239,243,250);--cr-fallback-color-surface4:rgb(237,242,250);--cr-fallback-color-surface5:rgb(234,240,249);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225,227,225);--cr-fallback-color-on-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-subtle:rgb(71,71,71);--cr-fallback-color-inverse-primary:rgb(168,199,250);--cr-fallback-color-inverse-surface:rgb(48,48,48);--cr-fallback-color-inverse-on-surface:rgb(242,242,242);--cr-fallback-color-tonal-container:rgb(211,227,253);--cr-fallback-color-on-tonal-container:rgb(4,30,73);--cr-fallback-color-tonal-outline:rgb(168,199,250);--cr-fallback-color-error:rgb(179,38,30);--cr-fallback-color-divider:rgb(211,227,253);--cr-fallback-color-state-hover-on-prominent_:rgba(253,252,251,.1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(var(--cr-fallback-color-state-ripple-primary-rgb_),0.32);--cr-fallback-color-base-container:rgb(236,239,247);--cr-fallback-color-disabled-background:rgba(var(--cr-fallback-color-on-surface-rgb),.12);--cr-fallback-color-disabled-foreground:rgba(var(--cr-fallback-color-on-surface-rgb),var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,rgba(var(--cr-fallback-color-on-surface-rgb),.08));--cr-hover-on-prominent-background-color:var(--color-sys-state-hover-on-prominent,var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(--color-sys-state-hover-on-subtle,var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,rgba(var(--cr-fallback-color-on-surface-rgb),.12));--cr-active-on-primary-background-color:var(--color-sys-state-ripple-primary,var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(--color-sys-state-ripple-neutral-on-subtle,var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,var(--cr-fallback-color-primary));--cr-focus-outline-inverse-color:var(--color-sys-state-focus-ring-inverse,var(--cr-fallback-color-inverse-primary));--cr-primary-text-color:var(--color-primary-foreground,var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow,rgb(0,0,0));--cr-checked-color:var(--color-checkbox-foreground-checked,var(--cr-fallback-color-primary))}html[webui-refresh-2026]{--cr-card-background-color:var(--color-webui-card-background)}@media (prefers-color-scheme:dark){html{--cr-fallback-color-outline:rgb(142,145,143);--cr-fallback-color-primary:rgb(168,199,250);--cr-fallback-color-on-primary:rgb(6,46,111);--cr-fallback-color-primary-container:rgb(8,66,160);--cr-fallback-color-on-primary-container:rgb(211,227,253);--cr-fallback-color-secondary-container:rgb(0,74,119);--cr-fallback-color-on-secondary-container:rgb(194,231,255);--cr-fallback-color-neutral-container:rgb(40,40,40);--cr-fallback-color-neutral-outline:rgb(117,117,117);--cr-fallback-color-surface:rgb(31,31,31);--cr-fallback-color-surface1:rgb(39,40,42);--cr-fallback-color-surface2:rgb(45,47,49);--cr-fallback-color-surface3:rgb(51,52,56);--cr-fallback-color-surface4:rgb(52,54,58);--cr-fallback-color-surface5:rgb(56,58,62);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-variant:rgb(196,199,197);--cr-fallback-color-on-surface-subtle:rgb(199,199,199);--cr-fallback-color-inverse-primary:rgb(11,87,208);--cr-fallback-color-inverse-surface:rgb(227,227,227);--cr-fallback-color-inverse-on-surface:rgb(31,31,31);--cr-fallback-color-tonal-container:rgb(0,74,119);--cr-fallback-color-on-tonal-container:rgb(194,231,255);--cr-fallback-color-tonal-outline:rgb(4,125,183);--cr-fallback-color-error:rgb(242,184,181);--cr-fallback-color-divider:rgb(94,94,94);--cr-fallback-color-state-hover-on-prominent_:rgba(31,31,31,.06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40,40,40,1);--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb),0.1);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255,255,255,.06);--cr-menu-shadow:rgba(0,0,0,.3) 0 1px 2px 0,rgba(0,0,0,.15) 0 3px 6px 2px;--cr-separator-color:rgba(255,255,255,.1);--cr-title-text-color:var(--cr-primary-text-color);--cr-scrollable-border-color:var(--google-grey-700)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent;--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}@media (prefers-reduced-motion:reduce){html{--cr-animations-disabled:1}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

let instance$2 = null;
function getCss$2() {
    return instance$2 || (instance$2 = [...[], css `:host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:32px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:none;overflow:hidden;pointer-events:auto;position:relative;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host(:hover:not([disabled])){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}#ink{--paper-ripple-opacity:1;color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([suppress-rtl-flip]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([suppress-rtl-flip])[multiple-icons_]) cr-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);pointer-events:none;position:relative;width:100%}cr-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color,none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$2() {
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
        return getCss$2();
    }
    render() {
        return getHtml$2.bind(this)();
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

let instance$1 = null;
function getCss$1() {
    return instance$1 || (instance$1 = [...[], css `:host{display:none}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$1() {
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
        return getCss$1();
    }
    render() {
        return getHtml$1.bind(this)();
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
const div = document.createElement('div');
if (document.documentElement.hasAttribute('webui-rounded-icons')) {
    div.innerHTML = getTrustedHTML `
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
    div.innerHTML = getTrustedHTML `
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
const iconsets = div.querySelectorAll('cr-iconset');
for (const iconset of iconsets) {
    document.head.appendChild(iconset);
}

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

// mojo/public/mojom/base/unguessable_token.mojom-converters.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class UnguessableTokenDataView {
    decoder_;
    version_;
    fieldSpecs_;
    constructor(decoder, version, fieldSpecs) {
        this.decoder_ = decoder;
        this.version_ = version;
        this.fieldSpecs_ = fieldSpecs;
    }
    get high() {
        const field = this.fieldSpecs_[0];
        return mojo.internal.decodeStructField(this.decoder_, field, this.version_);
    }
    get low() {
        const field = this.fieldSpecs_[1];
        return mojo.internal.decodeStructField(this.decoder_, field, this.version_);
    }
}

const HEX_BASE = 16;
// Token component is 64 bits, hex is 4 bits. This gives us a necessary
// string length.
const TOKEN_COMPONENT_STR_LENGTH = 64 / 4;
class UnguessableTokenConverter {
    // Field accessors for encoding a typemap to a mojo type.
    validate(token) {
        if (token.length !== (2 * TOKEN_COMPONENT_STR_LENGTH)) {
            throw new Error('token is malformed: ' + token);
        }
        if (token !== token.toUpperCase()) {
            throw new Error('token is not uppercase: ' + token);
        }
    }
    high(token) {
        this.validate(token);
        return BigInt(`0x${token.slice(0, TOKEN_COMPONENT_STR_LENGTH)}`);
    }
    low(token) {
        this.validate(token);
        return BigInt(`0x${token.slice(TOKEN_COMPONENT_STR_LENGTH)}`);
    }
    // Converts a mojo type to the typemap.
    convert(view) {
        return (view.high.toString(HEX_BASE).padStart(TOKEN_COMPONENT_STR_LENGTH, '0') +
            view.low.toString(HEX_BASE).padStart(TOKEN_COMPONENT_STR_LENGTH, '0'))
            .toUpperCase();
    }
}

// mojo/public/mojom/base/unguessable_token.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UnguessableTokenSpec = { $: {} };
const converterForUnguessableToken = new UnguessableTokenConverter();
mojo.internal.TypemappedStruct(UnguessableTokenSpec.$, 'UnguessableToken', UnguessableTokenDataView, converterForUnguessableToken, [
    mojo.internal.StructField('high', 0, 0, mojo.internal.Uint64, BigInt(0), false /* nullable */, 0, undefined, ((value) => converterForUnguessableToken.high(value))),
    mojo.internal.StructField('low', 8, 0, mojo.internal.Uint64, BigInt(0), false /* nullable */, 0, undefined, ((value) => converterForUnguessableToken.low(value))),
], [[0, 24],]);

// ui/base/mojom/window_open_disposition.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WindowOpenDispositionSpec = { $: mojo.internal.Enum() };
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

// ui/gfx/range/mojom/range.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const RangeSpec = { $: {} };
const RangeFSpec = { $: {} };
mojo.internal.Struct(RangeSpec.$, 'Range', [
    mojo.internal.StructField('start', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('end', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(RangeFSpec.$, 'RangeF', [
    mojo.internal.StructField('start', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('end', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
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

// components/omnibox/composebox/composebox_query.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ContextUploadStatusSpec = { $: mojo.internal.Enum() };
var ContextUploadStatus;
(function (ContextUploadStatus) {
    ContextUploadStatus[ContextUploadStatus["MIN_VALUE"] = 0] = "MIN_VALUE";
    ContextUploadStatus[ContextUploadStatus["MAX_VALUE"] = 8] = "MAX_VALUE";
    ContextUploadStatus[ContextUploadStatus["kNotUploaded"] = 0] = "kNotUploaded";
    ContextUploadStatus[ContextUploadStatus["kProcessing"] = 1] = "kProcessing";
    ContextUploadStatus[ContextUploadStatus["kValidationFailed"] = 2] = "kValidationFailed";
    ContextUploadStatus[ContextUploadStatus["kUploadStarted"] = 3] = "kUploadStarted";
    ContextUploadStatus[ContextUploadStatus["kUploadSuccessful"] = 4] = "kUploadSuccessful";
    ContextUploadStatus[ContextUploadStatus["kUploadFailed"] = 5] = "kUploadFailed";
    ContextUploadStatus[ContextUploadStatus["kUploadExpired"] = 6] = "kUploadExpired";
    ContextUploadStatus[ContextUploadStatus["kProcessingSuggestSignalsReady"] = 7] = "kProcessingSuggestSignalsReady";
    ContextUploadStatus[ContextUploadStatus["kUploadReplaced"] = 8] = "kUploadReplaced";
})(ContextUploadStatus || (ContextUploadStatus = {}));
const ContextUploadErrorTypeSpec = { $: mojo.internal.Enum() };
var ContextUploadErrorType;
(function (ContextUploadErrorType) {
    ContextUploadErrorType[ContextUploadErrorType["MIN_VALUE"] = 0] = "MIN_VALUE";
    ContextUploadErrorType[ContextUploadErrorType["MAX_VALUE"] = 13] = "MAX_VALUE";
    ContextUploadErrorType[ContextUploadErrorType["kUnknown"] = 0] = "kUnknown";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingError"] = 1] = "kBrowserProcessingError";
    ContextUploadErrorType[ContextUploadErrorType["kNetworkError"] = 2] = "kNetworkError";
    ContextUploadErrorType[ContextUploadErrorType["kServerError"] = 3] = "kServerError";
    ContextUploadErrorType[ContextUploadErrorType["kServerSizeLimitExceeded"] = 4] = "kServerSizeLimitExceeded";
    ContextUploadErrorType[ContextUploadErrorType["kAborted"] = 5] = "kAborted";
    ContextUploadErrorType[ContextUploadErrorType["kImageProcessingError"] = 6] = "kImageProcessingError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingFileTooLargeError"] = 7] = "kBrowserProcessingFileTooLargeError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingFileEmptyError"] = 8] = "kBrowserProcessingFileEmptyError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingMaxFilesExceededError"] = 9] = "kBrowserProcessingMaxFilesExceededError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingUnsupportedFileTypeError"] = 10] = "kBrowserProcessingUnsupportedFileTypeError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingFileUploadNotAllowedError"] = 11] = "kBrowserProcessingFileUploadNotAllowedError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingMaxImagesExceededError"] = 12] = "kBrowserProcessingMaxImagesExceededError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingMaxPdfsExceededError"] = 13] = "kBrowserProcessingMaxPdfsExceededError";
})(ContextUploadErrorType || (ContextUploadErrorType = {}));
const ModelModeSpec = { $: mojo.internal.Enum() };
var ModelMode;
(function (ModelMode) {
    ModelMode[ModelMode["MIN_VALUE"] = 0] = "MIN_VALUE";
    ModelMode[ModelMode["MAX_VALUE"] = 7] = "MAX_VALUE";
    ModelMode[ModelMode["kUnspecified"] = 0] = "kUnspecified";
    ModelMode[ModelMode["kGeminiRegular"] = 1] = "kGeminiRegular";
    ModelMode[ModelMode["kGeminiPro"] = 2] = "kGeminiPro";
    ModelMode[ModelMode["kGeminiProAutoroute"] = 3] = "kGeminiProAutoroute";
    ModelMode[ModelMode["kGeminiProNoGenUi"] = 4] = "kGeminiProNoGenUi";
    ModelMode[ModelMode["kGeminiFlashLatest"] = 5] = "kGeminiFlashLatest";
    ModelMode[ModelMode["kGeminiProLatest"] = 6] = "kGeminiProLatest";
    ModelMode[ModelMode["kGeminiPreview"] = 7] = "kGeminiPreview";
})(ModelMode || (ModelMode = {}));
const ToolModeSpec = { $: mojo.internal.Enum() };
var ToolMode;
(function (ToolMode) {
    ToolMode[ToolMode["MIN_VALUE"] = 0] = "MIN_VALUE";
    ToolMode[ToolMode["MAX_VALUE"] = 12] = "MAX_VALUE";
    ToolMode[ToolMode["kUnspecified"] = 0] = "kUnspecified";
    ToolMode[ToolMode["kDeepSearch"] = 1] = "kDeepSearch";
    ToolMode[ToolMode["kCanvas"] = 2] = "kCanvas";
    ToolMode[ToolMode["kGeminiPro"] = 3] = "kGeminiPro";
    ToolMode[ToolMode["kImageGen"] = 4] = "kImageGen";
    ToolMode[ToolMode["kDeepBrowse"] = 5] = "kDeepBrowse";
    ToolMode[ToolMode["kImageGenSelfie"] = 6] = "kImageGenSelfie";
    ToolMode[ToolMode["kImageGenUpload"] = 7] = "kImageGenUpload";
    ToolMode[ToolMode["kDisableSuggest"] = 8] = "kDisableSuggest";
    ToolMode[ToolMode["kAim"] = 9] = "kAim";
    ToolMode[ToolMode["kAimGenPrompt"] = 10] = "kAimGenPrompt";
    ToolMode[ToolMode["kAgentTask"] = 11] = "kAgentTask";
    ToolMode[ToolMode["kSearchMore"] = 12] = "kSearchMore";
})(ToolMode || (ToolMode = {}));
const InputTypeSpec = { $: mojo.internal.Enum() };
var InputType;
(function (InputType) {
    InputType[InputType["MIN_VALUE"] = 0] = "MIN_VALUE";
    InputType[InputType["MAX_VALUE"] = 4] = "MAX_VALUE";
    InputType[InputType["kUnspecified"] = 0] = "kUnspecified";
    InputType[InputType["kLensImage"] = 1] = "kLensImage";
    InputType[InputType["kLensFile"] = 2] = "kLensFile";
    InputType[InputType["kBrowserTab"] = 3] = "kBrowserTab";
    InputType[InputType["kDrive"] = 4] = "kDrive";
})(InputType || (InputType = {}));
const AimUrlParamSpec = { $: {} };
const InputTypeConfigSpec = { $: {} };
const ToolConfigSpec = { $: {} };
const ModelConfigSpec = { $: {} };
const SectionConfigSpec = { $: {} };
const InputStateSpec = { $: {} };
mojo.internal.Struct(AimUrlParamSpec.$, 'AimUrlParam', [
    mojo.internal.StructField('paramKey', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('paramValue', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(InputTypeConfigSpec.$, 'InputTypeConfig', [
    mojo.internal.StructField('inputType', 0, 0, InputTypeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('menuLabel', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ToolConfigSpec.$, 'ToolConfig', [
    mojo.internal.StructField('tool', 0, 0, ToolModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('disableActiveModelSelection', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('menuLabel', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('chipLabel', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('hintText', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('aimUrlParams', 32, 0, mojo.internal.Array(AimUrlParamSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('menuTooltip', 40, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('icon', 48, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 64],]);
mojo.internal.Struct(ModelConfigSpec.$, 'ModelConfig', [
    mojo.internal.StructField('model', 0, 0, ModelModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('menuLabel', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('hintText', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('aimUrlParams', 24, 0, mojo.internal.Array(AimUrlParamSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('menuTooltip', 32, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('icon', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(SectionConfigSpec.$, 'SectionConfig', [
    mojo.internal.StructField('header', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(InputStateSpec.$, 'InputState', [
    mojo.internal.StructField('allowedModels', 0, 0, mojo.internal.Array(ModelModeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('allowedTools', 8, 0, mojo.internal.Array(ToolModeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('allowedInputTypes', 16, 0, mojo.internal.Array(InputTypeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('activeModel', 24, 0, ModelModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('activeTool', 28, 0, ToolModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('disabledModels', 32, 0, mojo.internal.Array(ModelModeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('disabledTools', 40, 0, mojo.internal.Array(ToolModeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('disabledInputTypes', 48, 0, mojo.internal.Array(InputTypeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('toolConfigs', 56, 0, mojo.internal.Array(ToolConfigSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('modelConfigs', 64, 0, mojo.internal.Array(ModelConfigSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('inputTypeConfigs', 72, 0, mojo.internal.Array(InputTypeConfigSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('toolsSectionConfig', 80, 0, SectionConfigSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('modelSectionConfig', 88, 0, SectionConfigSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('hintText', 96, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('maxInputsByType', 104, 0, mojo.internal.Map(InputTypeSpec.$, mojo.internal.Int32, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('maxTotalInputs', 112, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isCanvasQuerySubmitted', 116, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('willFulfillInAim', 116, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 128],]);

// components/omnibox/browser/fusebox_action.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SuggestInventorySpec = { $: mojo.internal.Enum() };
var SuggestInventory;
(function (SuggestInventory) {
    SuggestInventory[SuggestInventory["MIN_VALUE"] = 0] = "MIN_VALUE";
    SuggestInventory[SuggestInventory["MAX_VALUE"] = 15] = "MAX_VALUE";
    SuggestInventory[SuggestInventory["kDefault"] = 0] = "kDefault";
    SuggestInventory[SuggestInventory["kTravel"] = 1] = "kTravel";
    SuggestInventory[SuggestInventory["kAimTakeover"] = 2] = "kAimTakeover";
    SuggestInventory[SuggestInventory["kImageGenTakeover"] = 3] = "kImageGenTakeover";
    SuggestInventory[SuggestInventory["kConversationStarters"] = 4] = "kConversationStarters";
    SuggestInventory[SuggestInventory["kAiHpCreateChip"] = 5] = "kAiHpCreateChip";
    SuggestInventory[SuggestInventory["kAiHpGetItDoneChip"] = 6] = "kAiHpGetItDoneChip";
    SuggestInventory[SuggestInventory["kAiHpSimplifyChip"] = 7] = "kAiHpSimplifyChip";
    SuggestInventory[SuggestInventory["kAiHpIfl"] = 8] = "kAiHpIfl";
    SuggestInventory[SuggestInventory["kAiHpReservations"] = 9] = "kAiHpReservations";
    SuggestInventory[SuggestInventory["kBrainstorm"] = 10] = "kBrainstorm";
    SuggestInventory[SuggestInventory["kHelpMeLearn"] = 11] = "kHelpMeLearn";
    SuggestInventory[SuggestInventory["kWriteOrEdit"] = 12] = "kWriteOrEdit";
    SuggestInventory[SuggestInventory["kAddFile"] = 13] = "kAddFile";
    SuggestInventory[SuggestInventory["kAddTab"] = 14] = "kAddTab";
    SuggestInventory[SuggestInventory["kAimImages"] = 15] = "kAimImages";
})(SuggestInventory || (SuggestInventory = {}));
const QueryActionOverrideSpec = { $: mojo.internal.Enum() };
var QueryActionOverride;
(function (QueryActionOverride) {
    QueryActionOverride[QueryActionOverride["MIN_VALUE"] = 0] = "MIN_VALUE";
    QueryActionOverride[QueryActionOverride["MAX_VALUE"] = 2] = "MAX_VALUE";
    QueryActionOverride[QueryActionOverride["kDefault"] = 0] = "kDefault";
    QueryActionOverride[QueryActionOverride["kPaste"] = 1] = "kPaste";
    QueryActionOverride[QueryActionOverride["kHint"] = 2] = "kHint";
})(QueryActionOverride || (QueryActionOverride = {}));
const InputSourceSpec = { $: mojo.internal.Enum() };
var InputSource;
(function (InputSource) {
    InputSource[InputSource["MIN_VALUE"] = 0] = "MIN_VALUE";
    InputSource[InputSource["MAX_VALUE"] = 6] = "MAX_VALUE";
    InputSource[InputSource["kInputSourceUnspecified"] = 0] = "kInputSourceUnspecified";
    InputSource[InputSource["kInputSourceGallery"] = 1] = "kInputSourceGallery";
    InputSource[InputSource["kInputSourceCamera"] = 2] = "kInputSourceCamera";
    InputSource[InputSource["kInputSourceFilePicker"] = 3] = "kInputSourceFilePicker";
    InputSource[InputSource["kInputSourceDrive"] = 4] = "kInputSourceDrive";
    InputSource[InputSource["kInputSourceTabPicker"] = 5] = "kInputSourceTabPicker";
    InputSource[InputSource["kInputSourceVoice"] = 6] = "kInputSourceVoice";
})(InputSource || (InputSource = {}));
const SearchboxOverrideSpec = { $: mojo.internal.Enum() };
var SearchboxOverride;
(function (SearchboxOverride) {
    SearchboxOverride[SearchboxOverride["MIN_VALUE"] = 0] = "MIN_VALUE";
    SearchboxOverride[SearchboxOverride["MAX_VALUE"] = 2] = "MAX_VALUE";
    SearchboxOverride[SearchboxOverride["kUnspecified"] = 0] = "kUnspecified";
    SearchboxOverride[SearchboxOverride["kRealbox"] = 1] = "kRealbox";
    SearchboxOverride[SearchboxOverride["kComposebox"] = 2] = "kComposebox";
})(SearchboxOverride || (SearchboxOverride = {}));
const SearchboxTutorialSpec = { $: mojo.internal.Enum() };
var SearchboxTutorial;
(function (SearchboxTutorial) {
    SearchboxTutorial[SearchboxTutorial["MIN_VALUE"] = 0] = "MIN_VALUE";
    SearchboxTutorial[SearchboxTutorial["MAX_VALUE"] = 1] = "MAX_VALUE";
    SearchboxTutorial[SearchboxTutorial["kUnspecified"] = 0] = "kUnspecified";
    SearchboxTutorial[SearchboxTutorial["kGlowPlusButton"] = 1] = "kGlowPlusButton";
})(SearchboxTutorial || (SearchboxTutorial = {}));
const FuseboxActionSpec = { $: {} };
mojo.internal.Struct(FuseboxActionSpec.$, 'FuseboxAction', [
    mojo.internal.StructField('preselected_tool_$flag', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "preselected_tool_$value",
        originalFieldName: "preselectedTool",
    }, undefined),
    mojo.internal.StructField('preselected_tool_$value', 4, 0, ToolModeSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "preselectedTool",
    }, undefined),
    mojo.internal.StructField('preferred_inventory_$flag', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "preferred_inventory_$value",
        originalFieldName: "preferredInventory",
    }, undefined),
    mojo.internal.StructField('preferred_inventory_$value', 8, 0, SuggestInventorySpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "preferredInventory",
    }, undefined),
    mojo.internal.StructField('preselected_model_$flag', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "preselected_model_$value",
        originalFieldName: "preselectedModel",
    }, undefined),
    mojo.internal.StructField('preselected_model_$value', 12, 0, ModelModeSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "preselectedModel",
    }, undefined),
    mojo.internal.StructField('query_action_override_$flag', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "query_action_override_$value",
        originalFieldName: "queryActionOverride",
    }, undefined),
    mojo.internal.StructField('query_action_override_$value', 16, 0, QueryActionOverrideSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "queryActionOverride",
    }, undefined),
    mojo.internal.StructField('preselected_input_source_$flag', 0, 4, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "preselected_input_source_$value",
        originalFieldName: "preselectedInputSource",
    }, undefined),
    mojo.internal.StructField('preselected_input_source_$value', 20, 0, InputSourceSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "preselectedInputSource",
    }, undefined),
    mojo.internal.StructField('searchbox_override_$flag', 0, 5, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "searchbox_override_$value",
        originalFieldName: "searchboxOverride",
    }, undefined),
    mojo.internal.StructField('searchbox_override_$value', 24, 0, SearchboxOverrideSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "searchboxOverride",
    }, undefined),
    mojo.internal.StructField('searchbox_tutorial_$flag', 0, 6, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "searchbox_tutorial_$value",
        originalFieldName: "searchboxTutorial",
    }, undefined),
    mojo.internal.StructField('searchbox_tutorial_$value', 28, 0, SearchboxTutorialSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "searchboxTutorial",
    }, undefined),
], [[0, 40],]);

// components/omnibox/browser/omnibox.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NavigationPredictorSpec = { $: mojo.internal.Enum() };
var NavigationPredictor;
(function (NavigationPredictor) {
    NavigationPredictor[NavigationPredictor["MIN_VALUE"] = 1] = "MIN_VALUE";
    NavigationPredictor[NavigationPredictor["MAX_VALUE"] = 3] = "MAX_VALUE";
    NavigationPredictor[NavigationPredictor["kMouseDown"] = 1] = "kMouseDown";
    NavigationPredictor[NavigationPredictor["kUpOrDownArrowButton"] = 2] = "kUpOrDownArrowButton";
    NavigationPredictor[NavigationPredictor["kTouchDown"] = 3] = "kTouchDown";
})(NavigationPredictor || (NavigationPredictor = {}));
({ $: mojo.internal.Enum() });
var PageClassification;
(function (PageClassification) {
    PageClassification[PageClassification["MIN_VALUE"] = 0] = "MIN_VALUE";
    PageClassification[PageClassification["MAX_VALUE"] = 41] = "MAX_VALUE";
    PageClassification[PageClassification["INVALID_SPEC"] = 0] = "INVALID_SPEC";
    PageClassification[PageClassification["NTP"] = 1] = "NTP";
    PageClassification[PageClassification["BLANK"] = 2] = "BLANK";
    PageClassification[PageClassification["HOME_PAGE"] = 3] = "HOME_PAGE";
    PageClassification[PageClassification["OTHER"] = 4] = "OTHER";
    PageClassification[PageClassification["SEARCH_RESULT_PAGE_DOING_SEARCH_TERM_REPLACEMENT"] = 6] = "SEARCH_RESULT_PAGE_DOING_SEARCH_TERM_REPLACEMENT";
    PageClassification[PageClassification["INSTANT_NTP_WITH_OMNIBOX_AS_STARTING_FOCUS"] = 7] = "INSTANT_NTP_WITH_OMNIBOX_AS_STARTING_FOCUS";
    PageClassification[PageClassification["SEARCH_RESULT_PAGE_NO_SEARCH_TERM_REPLACEMENT"] = 9] = "SEARCH_RESULT_PAGE_NO_SEARCH_TERM_REPLACEMENT";
    PageClassification[PageClassification["APP_HOME"] = 10] = "APP_HOME";
    PageClassification[PageClassification["APP_SEARCH"] = 11] = "APP_SEARCH";
    PageClassification[PageClassification["APP_MAPS"] = 12] = "APP_MAPS";
    PageClassification[PageClassification["SEARCH_BUTTON_AS_STARTING_FOCUS"] = 13] = "SEARCH_BUTTON_AS_STARTING_FOCUS";
    PageClassification[PageClassification["CHROMEOS_APP_LIST"] = 14] = "CHROMEOS_APP_LIST";
    PageClassification[PageClassification["NTP_REALBOX"] = 15] = "NTP_REALBOX";
    PageClassification[PageClassification["ANDROID_SEARCH_WIDGET"] = 16] = "ANDROID_SEARCH_WIDGET";
    PageClassification[PageClassification["ANDROID_SHORTCUTS_WIDGET"] = 19] = "ANDROID_SHORTCUTS_WIDGET";
    PageClassification[PageClassification["NTP_ZPS_PREFETCH"] = 20] = "NTP_ZPS_PREFETCH";
    PageClassification[PageClassification["JOURNEYS"] = 21] = "JOURNEYS";
    PageClassification[PageClassification["SRP_ZPS_PREFETCH"] = 22] = "SRP_ZPS_PREFETCH";
    PageClassification[PageClassification["OTHER_ZPS_PREFETCH"] = 23] = "OTHER_ZPS_PREFETCH";
    PageClassification[PageClassification["CONTEXTUAL_SEARCHBOX"] = 24] = "CONTEXTUAL_SEARCHBOX";
    PageClassification[PageClassification["SEARCH_SIDE_PANEL_SEARCHBOX"] = 25] = "SEARCH_SIDE_PANEL_SEARCHBOX";
    PageClassification[PageClassification["LENS_SIDE_PANEL_SEARCHBOX"] = 26] = "LENS_SIDE_PANEL_SEARCHBOX";
    PageClassification[PageClassification["SEARCH_RESULT_PAGE_ON_CCT"] = 27] = "SEARCH_RESULT_PAGE_ON_CCT";
    PageClassification[PageClassification["OTHER_ON_CCT"] = 28] = "OTHER_ON_CCT";
    PageClassification[PageClassification["ANDROID_HUB"] = 29] = "ANDROID_HUB";
    PageClassification[PageClassification["JUMP_START"] = 30] = "JUMP_START";
    PageClassification[PageClassification["NTP_COMPOSEBOX"] = 31] = "NTP_COMPOSEBOX";
    PageClassification[PageClassification["LENS_SIDE_PANEL_COMPOSEBOX"] = 32] = "LENS_SIDE_PANEL_COMPOSEBOX";
    PageClassification[PageClassification["NTP_OMNIBOX_COMPOSEBOX"] = 33] = "NTP_OMNIBOX_COMPOSEBOX";
    PageClassification[PageClassification["SRP_OMNIBOX_COMPOSEBOX"] = 34] = "SRP_OMNIBOX_COMPOSEBOX";
    PageClassification[PageClassification["OTHER_OMNIBOX_COMPOSEBOX"] = 35] = "OTHER_OMNIBOX_COMPOSEBOX";
    PageClassification[PageClassification["CO_BROWSING_COMPOSEBOX"] = 36] = "CO_BROWSING_COMPOSEBOX";
    PageClassification[PageClassification["NTP_COMPOSEBOX_PREFETCH"] = 37] = "NTP_COMPOSEBOX_PREFETCH";
    PageClassification[PageClassification["OMNIBOX_EVERYWHERE"] = 38] = "OMNIBOX_EVERYWHERE";
    PageClassification[PageClassification["COMPOSEBOX_EVERYWHERE"] = 39] = "COMPOSEBOX_EVERYWHERE";
    PageClassification[PageClassification["ANDROID_TAB_SEARCH_OVERLAY"] = 40] = "ANDROID_TAB_SEARCH_OVERLAY";
    PageClassification[PageClassification["NTP_ACTION_CHIPS"] = 41] = "NTP_ACTION_CHIPS";
})(PageClassification || (PageClassification = {}));

// components/omnibox/browser/suggest_template_info.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ColorTypeSpec = { $: mojo.internal.Enum() };
var ColorType;
(function (ColorType) {
    ColorType[ColorType["MIN_VALUE"] = 0] = "MIN_VALUE";
    ColorType[ColorType["MAX_VALUE"] = 16] = "MAX_VALUE";
    ColorType[ColorType["kUnknown"] = 0] = "kUnknown";
    ColorType[ColorType["kCanvas"] = 1] = "kCanvas";
    ColorType[ColorType["kSurface"] = 2] = "kSurface";
    ColorType[ColorType["kPrimary"] = 3] = "kPrimary";
    ColorType[ColorType["kTertiary"] = 4] = "kTertiary";
    ColorType[ColorType["kOnTertiary"] = 5] = "kOnTertiary";
    ColorType[ColorType["kOnSurfaceLinkVisited"] = 6] = "kOnSurfaceLinkVisited";
    ColorType[ColorType["kOnSurfaceDefault"] = 7] = "kOnSurfaceDefault";
    ColorType[ColorType["kOnSurfacePositive"] = 8] = "kOnSurfacePositive";
    ColorType[ColorType["kOnSurfaceNegative"] = 9] = "kOnSurfaceNegative";
    ColorType[ColorType["kOnSurfaceEmphasis"] = 10] = "kOnSurfaceEmphasis";
    ColorType[ColorType["kOnSurfaceDeemphasis"] = 11] = "kOnSurfaceDeemphasis";
    ColorType[ColorType["kOutlineDefault"] = 12] = "kOutlineDefault";
    ColorType[ColorType["kSubtitleText"] = 13] = "kSubtitleText";
    ColorType[ColorType["kSuggestQueryText"] = 14] = "kSuggestQueryText";
    ColorType[ColorType["kSuggestHintText"] = 15] = "kSuggestHintText";
    ColorType[ColorType["kSuggestActionHigh"] = 16] = "kSuggestActionHigh";
})(ColorType || (ColorType = {}));
const SuggestStyleSpec = { $: mojo.internal.Enum() };
var SuggestStyle;
(function (SuggestStyle) {
    SuggestStyle[SuggestStyle["MIN_VALUE"] = 0] = "MIN_VALUE";
    SuggestStyle[SuggestStyle["MAX_VALUE"] = 4] = "MAX_VALUE";
    SuggestStyle[SuggestStyle["kUnspecified"] = 0] = "kUnspecified";
    SuggestStyle[SuggestStyle["kDefault"] = 1] = "kDefault";
    SuggestStyle[SuggestStyle["kEnriched"] = 2] = "kEnriched";
    SuggestStyle[SuggestStyle["kAnnotated"] = 3] = "kAnnotated";
    SuggestStyle[SuggestStyle["kRichImage"] = 4] = "kRichImage";
})(SuggestStyle || (SuggestStyle = {}));
const IconTypeSpec$1 = { $: mojo.internal.Enum() };
var IconType$1;
(function (IconType) {
    IconType[IconType["MIN_VALUE"] = 0] = "MIN_VALUE";
    IconType[IconType["MAX_VALUE"] = 18] = "MAX_VALUE";
    IconType[IconType["kIconTypeUnspecified"] = 0] = "kIconTypeUnspecified";
    IconType[IconType["kHistory"] = 1] = "kHistory";
    IconType[IconType["kSearchLoop"] = 2] = "kSearchLoop";
    IconType[IconType["kSearchLoopWithSparkle"] = 3] = "kSearchLoopWithSparkle";
    IconType[IconType["kTrending"] = 4] = "kTrending";
    IconType[IconType["kSubArrowRight"] = 5] = "kSubArrowRight";
    IconType[IconType["kGlobeWithSearchLoop"] = 6] = "kGlobeWithSearchLoop";
    IconType[IconType["kBanana"] = 7] = "kBanana";
    IconType[IconType["kFavicon"] = 8] = "kFavicon";
    IconType[IconType["kNotesSpark"] = 9] = "kNotesSpark";
    IconType[IconType["kDraftSpark"] = 10] = "kDraftSpark";
    IconType[IconType["kLightbulb"] = 11] = "kLightbulb";
    IconType[IconType["kAttachFile"] = 12] = "kAttachFile";
    IconType[IconType["kSchool"] = 13] = "kSchool";
    IconType[IconType["kInkPen"] = 14] = "kInkPen";
    IconType[IconType["kTab"] = 15] = "kTab";
    IconType[IconType["kPhotoSpark"] = 16] = "kPhotoSpark";
    IconType[IconType["kBolt"] = 17] = "kBolt";
    IconType[IconType["kImageCreate"] = 18] = "kImageCreate";
})(IconType$1 || (IconType$1 = {}));
const SecondaryTextPlacementSpec = { $: mojo.internal.Enum() };
var SecondaryTextPlacement;
(function (SecondaryTextPlacement) {
    SecondaryTextPlacement[SecondaryTextPlacement["MIN_VALUE"] = 0] = "MIN_VALUE";
    SecondaryTextPlacement[SecondaryTextPlacement["MAX_VALUE"] = 2] = "MAX_VALUE";
    SecondaryTextPlacement[SecondaryTextPlacement["kUnspecified"] = 0] = "kUnspecified";
    SecondaryTextPlacement[SecondaryTextPlacement["kInFrontOfPrimaryText"] = 1] = "kInFrontOfPrimaryText";
    SecondaryTextPlacement[SecondaryTextPlacement["kBelowPrimaryText"] = 2] = "kBelowPrimaryText";
})(SecondaryTextPlacement || (SecondaryTextPlacement = {}));
const FormattedStringFragmentSpec = { $: {} };
const FormattedStringSpec = { $: {} };
const ImageSpec = { $: {} };
const SuggestTemplateInfoSpec = { $: {} };
mojo.internal.Struct(FormattedStringFragmentSpec.$, 'FormattedStringFragment', [
    mojo.internal.StructField('startIndex', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('color', 4, 0, ColorTypeSpec.$, ColorType.kUnknown, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isBolded', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(FormattedStringSpec.$, 'FormattedString', [
    mojo.internal.StructField('text', 0, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fragments', 8, 0, mojo.internal.Array(FormattedStringFragmentSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('a11yText', 16, 0, String16Spec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(ImageSpec.$, 'Image', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('dominantColor', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(SuggestTemplateInfoSpec.$, 'SuggestTemplateInfo', [
    mojo.internal.StructField('primaryText', 0, 0, FormattedStringSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('secondaryText', 8, 0, FormattedStringSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('secondaryTextPlacement', 16, 0, SecondaryTextPlacementSpec.$, SecondaryTextPlacement.kUnspecified, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('image', 24, 0, ImageSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('style', 20, 0, SuggestStyleSpec.$, SuggestStyle.kUnspecified, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('typeIcon', 32, 0, IconTypeSpec$1.$, IconType$1.kIconTypeUnspecified, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fuseboxAction', 40, 0, FuseboxActionSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 56],]);

// components/omnibox/browser/searchbox.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UrlDeemphasisModeSpec = { $: mojo.internal.Enum() };
var UrlDeemphasisMode;
(function (UrlDeemphasisMode) {
    UrlDeemphasisMode[UrlDeemphasisMode["MIN_VALUE"] = 0] = "MIN_VALUE";
    UrlDeemphasisMode[UrlDeemphasisMode["MAX_VALUE"] = 3] = "MAX_VALUE";
    UrlDeemphasisMode[UrlDeemphasisMode["kEverything"] = 0] = "kEverything";
    UrlDeemphasisMode[UrlDeemphasisMode["kAllButScheme"] = 1] = "kAllButScheme";
    UrlDeemphasisMode[UrlDeemphasisMode["kAllButHost"] = 2] = "kAllButHost";
    UrlDeemphasisMode[UrlDeemphasisMode["kNothing"] = 3] = "kNothing";
})(UrlDeemphasisMode || (UrlDeemphasisMode = {}));
const KeywordTypeSpec = { $: mojo.internal.Enum() };
var KeywordType;
(function (KeywordType) {
    KeywordType[KeywordType["MIN_VALUE"] = 0] = "MIN_VALUE";
    KeywordType[KeywordType["MAX_VALUE"] = 2] = "MAX_VALUE";
    KeywordType[KeywordType["kChip"] = 0] = "kChip";
    KeywordType[KeywordType["kInKeyword"] = 1] = "kInKeyword";
    KeywordType[KeywordType["kInstant"] = 2] = "kInstant";
})(KeywordType || (KeywordType = {}));
const KeywordActivationMethodSpec = { $: mojo.internal.Enum() };
var KeywordActivationMethod;
(function (KeywordActivationMethod) {
    KeywordActivationMethod[KeywordActivationMethod["MIN_VALUE"] = 0] = "MIN_VALUE";
    KeywordActivationMethod[KeywordActivationMethod["MAX_VALUE"] = 2] = "MAX_VALUE";
    KeywordActivationMethod[KeywordActivationMethod["kClick"] = 0] = "kClick";
    KeywordActivationMethod[KeywordActivationMethod["kTap"] = 1] = "kTap";
    KeywordActivationMethod[KeywordActivationMethod["kKeyboard"] = 2] = "kKeyboard";
})(KeywordActivationMethod || (KeywordActivationMethod = {}));
const TabAttachmentSourceSpec = { $: mojo.internal.Enum() };
var TabAttachmentSource;
(function (TabAttachmentSource) {
    TabAttachmentSource[TabAttachmentSource["MIN_VALUE"] = 0] = "MIN_VALUE";
    TabAttachmentSource[TabAttachmentSource["MAX_VALUE"] = 5] = "MAX_VALUE";
    TabAttachmentSource[TabAttachmentSource["kOther"] = 0] = "kOther";
    TabAttachmentSource[TabAttachmentSource["kContextMenu"] = 1] = "kContextMenu";
    TabAttachmentSource[TabAttachmentSource["kCurrentTabChip"] = 2] = "kCurrentTabChip";
    TabAttachmentSource[TabAttachmentSource["kActionChip"] = 3] = "kActionChip";
    TabAttachmentSource[TabAttachmentSource["kAutoActive"] = 4] = "kAutoActive";
    TabAttachmentSource[TabAttachmentSource["kAutoAdded"] = 5] = "kAutoAdded";
})(TabAttachmentSource || (TabAttachmentSource = {}));
const FreStageSpec = { $: mojo.internal.Enum() };
var FreStage;
(function (FreStage) {
    FreStage[FreStage["MIN_VALUE"] = 0] = "MIN_VALUE";
    FreStage[FreStage["MAX_VALUE"] = 3] = "MAX_VALUE";
    FreStage[FreStage["kNone"] = 0] = "kNone";
    FreStage[FreStage["kIntroModal"] = 1] = "kIntroModal";
    FreStage[FreStage["kShortcutSetupChin"] = 2] = "kShortcutSetupChin";
    FreStage[FreStage["kShortcutReminderChin"] = 3] = "kShortcutReminderChin";
})(FreStage || (FreStage = {}));
const SideTypeSpec = { $: mojo.internal.Enum() };
var SideType;
(function (SideType) {
    SideType[SideType["MIN_VALUE"] = 0] = "MIN_VALUE";
    SideType[SideType["MAX_VALUE"] = 1] = "MAX_VALUE";
    SideType[SideType["kDefaultPrimary"] = 0] = "kDefaultPrimary";
    SideType[SideType["kSecondary"] = 1] = "kSecondary";
})(SideType || (SideType = {}));
const RenderTypeSpec = { $: mojo.internal.Enum() };
var RenderType;
(function (RenderType) {
    RenderType[RenderType["MIN_VALUE"] = 0] = "MIN_VALUE";
    RenderType[RenderType["MAX_VALUE"] = 2] = "MAX_VALUE";
    RenderType[RenderType["kDefaultVertical"] = 0] = "kDefaultVertical";
    RenderType[RenderType["kHorizontal"] = 1] = "kHorizontal";
    RenderType[RenderType["kGrid"] = 2] = "kGrid";
})(RenderType || (RenderType = {}));
const SelectionLineStateSpec = { $: mojo.internal.Enum() };
var SelectionLineState;
(function (SelectionLineState) {
    SelectionLineState[SelectionLineState["MIN_VALUE"] = 1] = "MIN_VALUE";
    SelectionLineState[SelectionLineState["MAX_VALUE"] = 10] = "MAX_VALUE";
    SelectionLineState[SelectionLineState["kNormal"] = 1] = "kNormal";
    SelectionLineState[SelectionLineState["kKeywordMode"] = 2] = "kKeywordMode";
    SelectionLineState[SelectionLineState["kFocusedButtonAction"] = 3] = "kFocusedButtonAction";
    SelectionLineState[SelectionLineState["kFocusedButtonRemoveSuggestion"] = 4] = "kFocusedButtonRemoveSuggestion";
    SelectionLineState[SelectionLineState["kFocusedButtonAim"] = 5] = "kFocusedButtonAim";
    SelectionLineState[SelectionLineState["kFocusedButtonContextEntrypoint"] = 6] = "kFocusedButtonContextEntrypoint";
    SelectionLineState[SelectionLineState["kCtrlEnter"] = 7] = "kCtrlEnter";
    SelectionLineState[SelectionLineState["kFocusedButtonVoiceSearch"] = 8] = "kFocusedButtonVoiceSearch";
    SelectionLineState[SelectionLineState["kFocusedButtonLensSearch"] = 9] = "kFocusedButtonLensSearch";
    SelectionLineState[SelectionLineState["kFocusedButtonContextualChip"] = 10] = "kFocusedButtonContextualChip";
})(SelectionLineState || (SelectionLineState = {}));
const SelectionDirectionSpec = { $: mojo.internal.Enum() };
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["MIN_VALUE"] = 1] = "MIN_VALUE";
    SelectionDirection[SelectionDirection["MAX_VALUE"] = 2] = "MAX_VALUE";
    SelectionDirection[SelectionDirection["kForward"] = 1] = "kForward";
    SelectionDirection[SelectionDirection["kBackward"] = 2] = "kBackward";
})(SelectionDirection || (SelectionDirection = {}));
const SelectionStepSpec = { $: mojo.internal.Enum() };
var SelectionStep;
(function (SelectionStep) {
    SelectionStep[SelectionStep["MIN_VALUE"] = 1] = "MIN_VALUE";
    SelectionStep[SelectionStep["MAX_VALUE"] = 3] = "MAX_VALUE";
    SelectionStep[SelectionStep["kWholeLine"] = 1] = "kWholeLine";
    SelectionStep[SelectionStep["kStateOrLine"] = 2] = "kStateOrLine";
    SelectionStep[SelectionStep["kAllLines"] = 3] = "kAllLines";
})(SelectionStep || (SelectionStep = {}));
const DriveUploadErrorSpec = { $: mojo.internal.Enum() };
var DriveUploadError;
(function (DriveUploadError) {
    DriveUploadError[DriveUploadError["MIN_VALUE"] = 0] = "MIN_VALUE";
    DriveUploadError[DriveUploadError["MAX_VALUE"] = 1] = "MAX_VALUE";
    DriveUploadError[DriveUploadError["kSizeLimitExceeded"] = 0] = "kSizeLimitExceeded";
    DriveUploadError[DriveUploadError["kMaxFilesExceeded"] = 1] = "kMaxFilesExceeded";
})(DriveUploadError || (DriveUploadError = {}));
const DriveDisclaimerStatusSpec = { $: mojo.internal.Enum() };
var DriveDisclaimerStatus;
(function (DriveDisclaimerStatus) {
    DriveDisclaimerStatus[DriveDisclaimerStatus["MIN_VALUE"] = 0] = "MIN_VALUE";
    DriveDisclaimerStatus[DriveDisclaimerStatus["MAX_VALUE"] = 2] = "MAX_VALUE";
    DriveDisclaimerStatus[DriveDisclaimerStatus["kNotAccepted"] = 0] = "kNotAccepted";
    DriveDisclaimerStatus[DriveDisclaimerStatus["kAccepted"] = 1] = "kAccepted";
    DriveDisclaimerStatus[DriveDisclaimerStatus["kRestricted"] = 2] = "kRestricted";
})(DriveDisclaimerStatus || (DriveDisclaimerStatus = {}));
const InputMethodSpec = { $: mojo.internal.Enum() };
var InputMethod;
(function (InputMethod) {
    InputMethod[InputMethod["MIN_VALUE"] = 1] = "MIN_VALUE";
    InputMethod[InputMethod["MAX_VALUE"] = 11] = "MAX_VALUE";
    InputMethod[InputMethod["kKeyboard"] = 1] = "kKeyboard";
    InputMethod[InputMethod["kPaste"] = 2] = "kPaste";
    InputMethod[InputMethod["kSpeech"] = 6] = "kSpeech";
    InputMethod[InputMethod["kTab"] = 8] = "kTab";
    InputMethod[InputMethod["kLensCamera"] = 10] = "kLensCamera";
    InputMethod[InputMethod["kSmartCompose"] = 11] = "kSmartCompose";
})(InputMethod || (InputMethod = {}));
let PageHandlerPendingReceiver$1 = class PageHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'searchbox.mojom.PageHandler', scope);
    }
};
let PagePendingReceiver$1 = class PagePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'searchbox.mojom.Page', scope);
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
    setFreState(state) {
        this.proxy.sendMessage(0, Page_SetFreState_ParamsSpec.$, null, [
            state
        ], false);
    }
    autocompleteResultChanged(result) {
        this.proxy.sendMessage(1, Page_AutocompleteResultChanged_ParamsSpec.$, null, [
            result
        ], false);
    }
    updateSelection(oldSelection, selection) {
        this.proxy.sendMessage(2, Page_UpdateSelection_ParamsSpec.$, null, [
            oldSelection,
            selection
        ], false);
    }
    stepSelection(direction, step) {
        this.proxy.sendMessage(3, Page_StepSelection_ParamsSpec.$, null, [
            direction,
            step
        ], false);
    }
    openCurrentSelection(disposition) {
        this.proxy.sendMessage(4, Page_OpenCurrentSelection_ParamsSpec.$, null, [
            disposition
        ], false);
    }
    setAimButtonVisible(visible) {
        this.proxy.sendMessage(5, Page_SetAimButtonVisible_ParamsSpec.$, null, [
            visible
        ], false);
    }
    setAimButtonConfig(text, tooltip, a11yLabel, iconUrl) {
        this.proxy.sendMessage(6, Page_SetAimButtonConfig_ParamsSpec.$, null, [
            text,
            tooltip,
            a11yLabel,
            iconUrl
        ], false);
    }
    setInputText(input) {
        this.proxy.sendMessage(7, Page_SetInputText_ParamsSpec.$, null, [
            input
        ], false);
    }
    setKeywordSpaceTriggeringEnabled(enabled) {
        this.proxy.sendMessage(8, Page_SetKeywordSpaceTriggeringEnabled_ParamsSpec.$, null, [
            enabled
        ], false);
    }
    setAvailableKeywordModels(models, defaultSearchProviderKeyword) {
        this.proxy.sendMessage(9, Page_SetAvailableKeywordModels_ParamsSpec.$, null, [
            models,
            defaultSearchProviderKeyword
        ], false);
    }
    setThumbnail(thumbnailUrl, isDeletable) {
        this.proxy.sendMessage(10, Page_SetThumbnail_ParamsSpec.$, null, [
            thumbnailUrl,
            isDeletable
        ], false);
    }
    onContextualInputStatusChanged(token, status, errorType) {
        this.proxy.sendMessage(11, Page_OnContextualInputStatusChanged_ParamsSpec.$, null, [
            token,
            status,
            errorType
        ], false);
    }
    onTabStripChanged() {
        this.proxy.sendMessage(12, Page_OnTabStripChanged_ParamsSpec.$, null, [], false);
    }
    onInputStateChanged(inputState) {
        this.proxy.sendMessage(13, Page_OnInputStateChanged_ParamsSpec.$, null, [
            inputState
        ], false);
    }
    addFileContext(token, fileInfo) {
        this.proxy.sendMessage(14, Page_AddFileContext_ParamsSpec.$, null, [
            token,
            fileInfo
        ], false);
    }
    updateAutoSuggestedTabContext(tab, invocationSource) {
        this.proxy.sendMessage(15, Page_UpdateAutoSuggestedTabContext_ParamsSpec.$, null, [
            tab,
            invocationSource
        ], false);
    }
    updateLensSearchEligibility(eligible) {
        this.proxy.sendMessage(16, Page_UpdateLensSearchEligibility_ParamsSpec.$, null, [
            eligible
        ], false);
    }
    updateContentSharingPolicy(enabled) {
        this.proxy.sendMessage(17, Page_UpdateContentSharingPolicy_ParamsSpec.$, null, [
            enabled
        ], false);
    }
    updateAimPopupEligibility(eligible) {
        this.proxy.sendMessage(18, Page_UpdateAimPopupEligibility_ParamsSpec.$, null, [
            eligible
        ], false);
    }
    updateSmartTabSharingActive(active) {
        this.proxy.sendMessage(19, Page_UpdateSmartTabSharingActive_ParamsSpec.$, null, [
            active
        ], false);
    }
    onPermissionPromptChanged(isShowing, promptSize) {
        this.proxy.sendMessage(20, Page_OnPermissionPromptChanged_ParamsSpec.$, null, [
            isShowing,
            promptSize
        ], false);
    }
    setRestoredTabIds(ids) {
        this.proxy.sendMessage(21, Page_SetRestoredTabIds_ParamsSpec.$, null, [
            ids
        ], false);
    }
    setAimThreadRestoredTabs(tabs) {
        this.proxy.sendMessage(22, Page_SetAimThreadRestoredTabs_ParamsSpec.$, null, [
            tabs
        ], false);
    }
    onScreenshotMenuClosed() {
        this.proxy.sendMessage(23, Page_OnScreenshotMenuClosed_ParamsSpec.$, null, [], false);
    }
    updateProfileInfo(avatarUrl, name, email) {
        this.proxy.sendMessage(24, Page_UpdateProfileInfo_ParamsSpec.$, null, [
            avatarUrl,
            name,
            email
        ], false);
    }
};
const UrlEmphasisSpec = { $: {} };
const ACMatchClassificationSpec = { $: {} };
const ActionSpec = { $: {} };
const InputKeywordModelSpec = { $: {} };
const MatchKeywordModelSpec = { $: {} };
const AutocompleteMatchSpec = { $: {} };
const TabInfoSpec = { $: {} };
const FileAttachmentSpec = { $: {} };
const TabAttachmentSpec = { $: {} };
const SearchContextSpec = { $: {} };
const FreStateSpec = { $: {} };
const SelectedFileInfoSpec = { $: {} };
const SuggestionGroupSpec = { $: {} };
const SmartComposeStatsSpec = { $: {} };
const AutocompleteResultSpec = { $: {} };
const OmniboxPopupSelectionSpec = { $: {} };
const ActionModifiersSpec = { $: {} };
const PlaceholderConfigSpec = { $: {} };
const DriveFileSpec = { $: {} };
const DriveUploadResponseSpec = { $: {} };
const PageHandlerFactory_CreatePageHandler_ParamsSpec$1 = { $: {} };
const PageHandler_OnFocusChanged_ParamsSpec = { $: {} };
const PageHandler_QueryAutocomplete_ParamsSpec = { $: {} };
const PageHandler_StopAutocomplete_ParamsSpec = { $: {} };
const PageHandler_OpenAutocompleteMatch_ParamsSpec = { $: {} };
const PageHandler_SetSmartComposeStats_ParamsSpec = { $: {} };
const PageHandler_SetPopupSelection_ParamsSpec = { $: {} };
const PageHandler_OpenPopupSelection_ParamsSpec = { $: {} };
const PageHandler_OnNavigationLikely_ParamsSpec = { $: {} };
const PageHandler_DeleteAutocompleteMatch_ParamsSpec = { $: {} };
const PageHandler_ActivateKeyword_ParamsSpec = { $: {} };
const PageHandler_ExecuteAction_ParamsSpec = { $: {} };
const PageHandler_OnThumbnailRemoved_ParamsSpec = { $: {} };
const PageHandler_GetCyclingPlaceholderConfig_ParamsSpec = { $: {} };
const PageHandler_GetCyclingPlaceholderConfig_ResponseParamsSpec = { $: {} };
const PageHandler_GetRecentTabs_ParamsSpec = { $: {} };
const PageHandler_GetRecentTabs_ResponseParamsSpec = { $: {} };
const PageHandler_GetTabPreview_ParamsSpec = { $: {} };
const PageHandler_GetTabPreview_ResponseParamsSpec = { $: {} };
const PageHandler_WaitForTabFaviconLoad_ParamsSpec = { $: {} };
const PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec = { $: {} };
const PageHandler_GetInputState_ParamsSpec = { $: {} };
const PageHandler_GetInputState_ResponseParamsSpec = { $: {} };
const PageHandler_NotifySessionStarted_ParamsSpec = { $: {} };
const PageHandler_NotifySessionAbandoned_ParamsSpec = { $: {} };
const PageHandler_AddFileContext_ParamsSpec = { $: {} };
const PageHandler_AddFileContext_ResponseParamsSpec = { $: {} };
const PageHandler_AddTabContext_ParamsSpec = { $: {} };
const PageHandler_AddTabContext_ResponseParamsSpec = { $: {} };
const PageHandler_DeleteContext_ParamsSpec = { $: {} };
const PageHandler_DeleteTabContext_ParamsSpec = { $: {} };
const PageHandler_ClearFiles_ParamsSpec = { $: {} };
const PageHandler_SubmitQuery_ParamsSpec = { $: {} };
const PageHandler_OpenLensSearch_ParamsSpec = { $: {} };
const PageHandler_SetActiveToolMode_ParamsSpec = { $: {} };
const PageHandler_SetActiveModelMode_ParamsSpec = { $: {} };
const PageHandler_ActivateMetricsFunnel_ParamsSpec = { $: {} };
const PageHandler_RecordToolSelectionAction_ParamsSpec = { $: {} };
const PageHandler_RecordModelSelectionAction_ParamsSpec = { $: {} };
const PageHandler_GetDriveDisclaimerStatus_ParamsSpec = { $: {} };
const PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec = { $: {} };
const PageHandler_OnDriveDisclaimerAccepted_ParamsSpec = { $: {} };
const PageHandler_OnDriveUploadClicked_ParamsSpec = { $: {} };
const PageHandler_OnDriveUploadClicked_ResponseParamsSpec = { $: {} };
const PageHandler_OpenProfilePicker_ParamsSpec = { $: {} };
const PageHandler_ShowScreenshotMenu_ParamsSpec = { $: {} };
const PageHandler_StartScreenshare_ParamsSpec = { $: {} };
const PageHandler_StartScreenshare_ResponseParamsSpec = { $: {} };
const PageHandler_CaptureRegionScreenshot_ParamsSpec = { $: {} };
const PageHandler_CaptureRegionScreenshot_ResponseParamsSpec = { $: {} };
const PageHandler_GetPageClassification_ParamsSpec = { $: {} };
const PageHandler_GetPageClassification_ResponseParamsSpec = { $: {} };
const PageHandler_SetSmartTabSharingActive_ParamsSpec = { $: {} };
const PageHandler_GetSmartTabSharingActive_ParamsSpec = { $: {} };
const PageHandler_GetSmartTabSharingActive_ResponseParamsSpec = { $: {} };
const PageHandler_ResetSmartTabSharing_ParamsSpec = { $: {} };
const PageHandler_ResetSmartTabSharing_ResponseParamsSpec = { $: {} };
const PageHandler_DismissFre_ParamsSpec = { $: {} };
const PageHandler_ShowHotkeyDropdown_ParamsSpec = { $: {} };
const PageHandler_ShowHotkeyDropdown_ResponseParamsSpec = { $: {} };
const PageHandler_OpenHotkeySettings_ParamsSpec = { $: {} };
const PageHandler_OnEscapePressed_ParamsSpec = { $: {} };
const Page_SetFreState_ParamsSpec = { $: {} };
const Page_AutocompleteResultChanged_ParamsSpec = { $: {} };
const Page_UpdateSelection_ParamsSpec = { $: {} };
const Page_StepSelection_ParamsSpec = { $: {} };
const Page_OpenCurrentSelection_ParamsSpec = { $: {} };
const Page_SetAimButtonVisible_ParamsSpec = { $: {} };
const Page_SetAimButtonConfig_ParamsSpec = { $: {} };
const Page_SetInputText_ParamsSpec = { $: {} };
const Page_SetKeywordSpaceTriggeringEnabled_ParamsSpec = { $: {} };
const Page_SetAvailableKeywordModels_ParamsSpec = { $: {} };
const Page_SetThumbnail_ParamsSpec = { $: {} };
const Page_OnContextualInputStatusChanged_ParamsSpec = { $: {} };
const Page_OnTabStripChanged_ParamsSpec = { $: {} };
const Page_OnInputStateChanged_ParamsSpec = { $: {} };
const Page_AddFileContext_ParamsSpec = { $: {} };
const Page_UpdateAutoSuggestedTabContext_ParamsSpec = { $: {} };
const Page_UpdateLensSearchEligibility_ParamsSpec = { $: {} };
const Page_UpdateContentSharingPolicy_ParamsSpec = { $: {} };
const Page_UpdateAimPopupEligibility_ParamsSpec = { $: {} };
const Page_UpdateSmartTabSharingActive_ParamsSpec = { $: {} };
const Page_OnPermissionPromptChanged_ParamsSpec = { $: {} };
const Page_SetRestoredTabIds_ParamsSpec = { $: {} };
const Page_SetAimThreadRestoredTabs_ParamsSpec = { $: {} };
const Page_OnScreenshotMenuClosed_ParamsSpec = { $: {} };
const Page_UpdateProfileInfo_ParamsSpec = { $: {} };
const SearchContextAttachmentSpec = { $: {} };
const PageHandler_AddFileContext_ResponseParam_ResultSpec = { $: {} };
const PageHandler_AddTabContext_ResponseParam_ResultSpec = { $: {} };
mojo.internal.Struct(UrlEmphasisSpec.$, 'UrlEmphasis', [
    mojo.internal.StructField('textIsUrl', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('deemphasisMode', 4, 0, UrlDeemphasisModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('schemeRange', 8, 0, RangeSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('hostRange', 16, 0, RangeSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('schemeStrikeThrough', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('schemeDangerous', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(ACMatchClassificationSpec.$, 'ACMatchClassification', [
    mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('style', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ActionSpec.$, 'Action', [
    mojo.internal.StructField('hint', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('suggestionContents', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconPath', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('a11yLabel', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(InputKeywordModelSpec.$, 'InputKeywordModel', [
    mojo.internal.StructField('type', 0, 0, KeywordTypeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('keyword', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('displayText', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconPath', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('placeholder', 32, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(MatchKeywordModelSpec.$, 'MatchKeywordModel', [
    mojo.internal.StructField('type', 0, 0, KeywordTypeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('chipHint', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('chipA11y', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('placeholder', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('keyword', 32, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(AutocompleteMatchSpec.$, 'AutocompleteMatch', [
    mojo.internal.StructField('isHidden', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('a11yLabel', 8, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('allowedToBeDefaultMatch', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('actions', 16, 0, mojo.internal.Array(ActionSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('destinationUrl', 24, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('inlineAutocompletion', 32, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fillIntoEdit', 40, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconPath', 48, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconUrl', 56, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('suggestTemplate', 64, 0, SuggestTemplateInfoSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('secondaryTextIsUrl', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isSearchType', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isEnterpriseSearchAggregatorPeopleType', 0, 4, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('type', 72, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('removeButtonA11yLabel', 80, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('descriptionIconPath', 88, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('showSecondaryTextOnlyOnSelection', 0, 5, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('suggestionGroupId', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('supportsDeletion', 0, 6, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tailSuggestCommonPrefix', 96, 0, String16Spec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('keywordModel', 104, 0, MatchKeywordModelSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('urlEmphasis', 112, 0, UrlEmphasisSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 128],]);
mojo.internal.Struct(TabInfoSpec.$, 'TabInfo', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 16, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('showInCurrentTabChip', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('showInPreviousTabChip', 4, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('lastActive', 24, 0, TimeTicksSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isLoading', 4, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(FileAttachmentSpec.$, 'FileAttachment', [
    mojo.internal.StructField('uuid', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mimeType', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('imageDataUrl', 24, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('error_type_$flag', 32, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "error_type_$value",
        originalFieldName: "errorType",
    }, undefined),
    mojo.internal.StructField('error_type_$value', 36, 0, ContextUploadErrorTypeSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "errorType",
    }, undefined),
    mojo.internal.StructField('iconUrl', 40, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('thumbnailUrl', 48, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 64],]);
mojo.internal.Struct(TabAttachmentSpec.$, 'TabAttachment', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 16, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('source', 4, 0, TabAttachmentSourceSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fromSingleTabMenuItem', 24, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isActiveTab', 24, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(SearchContextSpec.$, 'SearchContext', [
    mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('attachments', 8, 0, mojo.internal.Array(SearchContextAttachmentSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('toolMode', 16, 0, ToolModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('modelMode', 20, 0, ModelModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(FreStateSpec.$, 'FreState', [
    mojo.internal.StructField('stage', 0, 0, FreStageSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('currentHotkeyTokens', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(SelectedFileInfoSpec.$, 'SelectedFileInfo', [
    mojo.internal.StructField('fileName', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mimeType', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('imageDataUrl', 16, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isDeletable', 24, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('selectionTime', 32, 0, JSTimeSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('thumbnailUrl', 40, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 56],]);
mojo.internal.Struct(SuggestionGroupSpec.$, 'SuggestionGroup', [
    mojo.internal.StructField('header', 0, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('renderType', 8, 0, RenderTypeSpec.$, RenderType.kDefaultVertical, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('sideType', 12, 0, SideTypeSpec.$, SideType.kDefaultPrimary, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(SmartComposeStatsSpec.$, 'SmartComposeStats', [
    mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shownCount', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('acceptedCount', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('charactersAccepted', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shownLength', 16, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(AutocompleteResultSpec.$, 'AutocompleteResult', [
    mojo.internal.StructField('queryId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('sequenceId', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('input', 8, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('suggestionGroupsMap', 16, 0, mojo.internal.Map(mojo.internal.Int32, SuggestionGroupSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('matches', 24, 0, mojo.internal.Array(AutocompleteMatchSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('smartComposeInlineHint', 32, 0, String16Spec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('showAimActivityLink', 40, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 56],]);
mojo.internal.Struct(OmniboxPopupSelectionSpec.$, 'OmniboxPopupSelection', [
    mojo.internal.StructField('line', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('state', 4, 0, SelectionLineStateSpec.$, 1, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('actionIndex', 1, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ActionModifiersSpec.$, 'ActionModifiers', [
    mojo.internal.StructField('altKey', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('ctrlKey', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('metaKey', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shiftKey', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PlaceholderConfigSpec.$, 'PlaceholderConfig', [
    mojo.internal.StructField('texts', 0, 0, mojo.internal.Array(String16Spec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('changeTextAnimationInterval', 8, 0, TimeDeltaSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fadeTextAnimationDuration', 16, 0, TimeDeltaSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(DriveFileSpec.$, 'DriveFile', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mimeType', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fileName', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('thumbnailUrl', 24, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconUrl', 32, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(DriveUploadResponseSpec.$, 'DriveUploadResponse', [
    mojo.internal.StructField('files', 0, 0, mojo.internal.Array(DriveFileSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('error_$flag', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "error_$value",
        originalFieldName: "error",
    }, undefined),
    mojo.internal.StructField('error_$value', 12, 0, DriveUploadErrorSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "error",
    }, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandlerFactory_CreatePageHandler_ParamsSpec$1.$, 'PageHandlerFactory_CreatePageHandler_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote$1), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(PageHandlerPendingReceiver$1), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_OnFocusChanged_ParamsSpec.$, 'PageHandler_OnFocusChanged_Params', [
    mojo.internal.StructField('focused', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_QueryAutocomplete_ParamsSpec.$, 'PageHandler_QueryAutocomplete_Params', [
    mojo.internal.StructField('queryId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tab_id_$flag', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "tab_id_$value",
        originalFieldName: "tabId",
    }, undefined),
    mojo.internal.StructField('tab_id_$value', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "tabId",
    }, undefined),
    mojo.internal.StructField('input', 16, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('preventInlineAutocomplete', 4, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('cursorPosition', 12, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('suggestInventory', 24, 0, SuggestInventorySpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isOnFocus', 4, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('keyword', 32, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('inputMethod', 28, 0, InputMethodSpec.$, 1, false /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(PageHandler_StopAutocomplete_ParamsSpec.$, 'PageHandler_StopAutocomplete_Params', [
    mojo.internal.StructField('clearResult', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenAutocompleteMatch_ParamsSpec.$, 'PageHandler_OpenAutocompleteMatch_Params', [
    mojo.internal.StructField('resultSequenceId', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('line', 4, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('areMatchesShowing', 5, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mouseButton', 6, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('modifiers', 16, 0, ActionModifiersSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('viaKeyboard', 5, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_SetSmartComposeStats_ParamsSpec.$, 'PageHandler_SetSmartComposeStats_Params', [
    mojo.internal.StructField('smartComposeStats', 0, 0, SmartComposeStatsSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SetPopupSelection_ParamsSpec.$, 'PageHandler_SetPopupSelection_Params', [
    mojo.internal.StructField('selection', 0, 0, OmniboxPopupSelectionSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenPopupSelection_ParamsSpec.$, 'PageHandler_OpenPopupSelection_Params', [
    mojo.internal.StructField('resultSequenceId', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('selection', 8, 0, OmniboxPopupSelectionSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('disposition', 4, 0, WindowOpenDispositionSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_OnNavigationLikely_ParamsSpec.$, 'PageHandler_OnNavigationLikely_Params', [
    mojo.internal.StructField('line', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('navigationPredictor', 4, 0, NavigationPredictorSpec.$, 1, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_DeleteAutocompleteMatch_ParamsSpec.$, 'PageHandler_DeleteAutocompleteMatch_Params', [
    mojo.internal.StructField('line', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_ActivateKeyword_ParamsSpec.$, 'PageHandler_ActivateKeyword_Params', [
    mojo.internal.StructField('line', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('matchSelectionTimestamp', 16, 0, TimeTicksSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('activationMethod', 4, 0, KeywordActivationMethodSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_ExecuteAction_ParamsSpec.$, 'PageHandler_ExecuteAction_Params', [
    mojo.internal.StructField('line', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('actionIndex', 1, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('matchSelectionTimestamp', 16, 0, TimeTicksSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mouseButton', 2, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('altKey', 3, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('ctrlKey', 3, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('metaKey', 3, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shiftKey', 3, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_OnThumbnailRemoved_ParamsSpec.$, 'PageHandler_OnThumbnailRemoved_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetCyclingPlaceholderConfig_ParamsSpec.$, 'PageHandler_GetCyclingPlaceholderConfig_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetCyclingPlaceholderConfig_ResponseParamsSpec.$, 'PageHandler_GetCyclingPlaceholderConfig_ResponseParams', [
    mojo.internal.StructField('config', 0, 0, PlaceholderConfigSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetRecentTabs_ParamsSpec.$, 'PageHandler_GetRecentTabs_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetRecentTabs_ResponseParamsSpec.$, 'PageHandler_GetRecentTabs_ResponseParams', [
    mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(TabInfoSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetTabPreview_ParamsSpec.$, 'PageHandler_GetTabPreview_Params', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetTabPreview_ResponseParamsSpec.$, 'PageHandler_GetTabPreview_ResponseParams', [
    mojo.internal.StructField('previewDataUrl', 0, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_WaitForTabFaviconLoad_ParamsSpec.$, 'PageHandler_WaitForTabFaviconLoad_Params', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec.$, 'PageHandler_WaitForTabFaviconLoad_ResponseParams', [
    mojo.internal.StructField('faviconDataUrl', 0, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetInputState_ParamsSpec.$, 'PageHandler_GetInputState_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetInputState_ResponseParamsSpec.$, 'PageHandler_GetInputState_ResponseParams', [
    mojo.internal.StructField('state', 0, 0, InputStateSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_NotifySessionStarted_ParamsSpec.$, 'PageHandler_NotifySessionStarted_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_NotifySessionAbandoned_ParamsSpec.$, 'PageHandler_NotifySessionAbandoned_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_AddFileContext_ParamsSpec.$, 'PageHandler_AddFileContext_Params', [
    mojo.internal.StructField('fileInfo', 0, 0, SelectedFileInfoSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fileBytes', 8, 0, BigBufferSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_AddFileContext_ResponseParamsSpec.$, 'PageHandler_AddFileContext_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, PageHandler_AddFileContext_ResponseParam_ResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_AddTabContext_ParamsSpec.$, 'PageHandler_AddTabContext_Params', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('delayUpload', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('source', 8, 0, TabAttachmentSourceSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_AddTabContext_ResponseParamsSpec.$, 'PageHandler_AddTabContext_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, PageHandler_AddTabContext_ResponseParam_ResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_DeleteContext_ParamsSpec.$, 'PageHandler_DeleteContext_Params', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fromAutomaticChip', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_DeleteTabContext_ParamsSpec.$, 'PageHandler_DeleteTabContext_Params', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ClearFiles_ParamsSpec.$, 'PageHandler_ClearFiles_Params', [
    mojo.internal.StructField('shouldBlockAutoSuggestedTabs', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SubmitQuery_ParamsSpec.$, 'PageHandler_SubmitQuery_Params', [
    mojo.internal.StructField('queryText', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mouseButton', 8, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('altKey', 9, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('ctrlKey', 9, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('metaKey', 9, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shiftKey', 9, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isVoiceSearch', 9, 4, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_OpenLensSearch_ParamsSpec.$, 'PageHandler_OpenLensSearch_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_SetActiveToolMode_ParamsSpec.$, 'PageHandler_SetActiveToolMode_Params', [
    mojo.internal.StructField('tool', 0, 0, ToolModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isSetByAim', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SetActiveModelMode_ParamsSpec.$, 'PageHandler_SetActiveModelMode_Params', [
    mojo.internal.StructField('model', 0, 0, ModelModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isSetByAim', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ActivateMetricsFunnel_ParamsSpec.$, 'PageHandler_ActivateMetricsFunnel_Params', [
    mojo.internal.StructField('funnelName', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordToolSelectionAction_ParamsSpec.$, 'PageHandler_RecordToolSelectionAction_Params', [
    mojo.internal.StructField('tool', 0, 0, ToolModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordModelSelectionAction_ParamsSpec.$, 'PageHandler_RecordModelSelectionAction_Params', [
    mojo.internal.StructField('model', 0, 0, ModelModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetDriveDisclaimerStatus_ParamsSpec.$, 'PageHandler_GetDriveDisclaimerStatus_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec.$, 'PageHandler_GetDriveDisclaimerStatus_ResponseParams', [
    mojo.internal.StructField('status', 0, 0, DriveDisclaimerStatusSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OnDriveDisclaimerAccepted_ParamsSpec.$, 'PageHandler_OnDriveDisclaimerAccepted_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OnDriveUploadClicked_ParamsSpec.$, 'PageHandler_OnDriveUploadClicked_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OnDriveUploadClicked_ResponseParamsSpec.$, 'PageHandler_OnDriveUploadClicked_ResponseParams', [
    mojo.internal.StructField('response', 0, 0, DriveUploadResponseSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenProfilePicker_ParamsSpec.$, 'PageHandler_OpenProfilePicker_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_ShowScreenshotMenu_ParamsSpec.$, 'PageHandler_ShowScreenshotMenu_Params', [
    mojo.internal.StructField('anchorRect', 0, 0, RectSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_StartScreenshare_ParamsSpec.$, 'PageHandler_StartScreenshare_Params', [
    mojo.internal.StructField('preferEntireScreen', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_StartScreenshare_ResponseParamsSpec.$, 'PageHandler_StartScreenshare_ResponseParams', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_CaptureRegionScreenshot_ParamsSpec.$, 'PageHandler_CaptureRegionScreenshot_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_CaptureRegionScreenshot_ResponseParamsSpec.$, 'PageHandler_CaptureRegionScreenshot_ResponseParams', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetPageClassification_ParamsSpec.$, 'PageHandler_GetPageClassification_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetPageClassification_ResponseParamsSpec.$, 'PageHandler_GetPageClassification_ResponseParams', [
    mojo.internal.StructField('metricSource', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SetSmartTabSharingActive_ParamsSpec.$, 'PageHandler_SetSmartTabSharingActive_Params', [
    mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetSmartTabSharingActive_ParamsSpec.$, 'PageHandler_GetSmartTabSharingActive_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetSmartTabSharingActive_ResponseParamsSpec.$, 'PageHandler_GetSmartTabSharingActive_ResponseParams', [
    mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ResetSmartTabSharing_ParamsSpec.$, 'PageHandler_ResetSmartTabSharing_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_ResetSmartTabSharing_ResponseParamsSpec.$, 'PageHandler_ResetSmartTabSharing_ResponseParams', [
    mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_DismissFre_ParamsSpec.$, 'PageHandler_DismissFre_Params', [
    mojo.internal.StructField('stage', 0, 0, FreStageSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ShowHotkeyDropdown_ParamsSpec.$, 'PageHandler_ShowHotkeyDropdown_Params', [
    mojo.internal.StructField('anchorBounds', 0, 0, RectSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ShowHotkeyDropdown_ResponseParamsSpec.$, 'PageHandler_ShowHotkeyDropdown_ResponseParams', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OpenHotkeySettings_ParamsSpec.$, 'PageHandler_OpenHotkeySettings_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OnEscapePressed_ParamsSpec.$, 'PageHandler_OnEscapePressed_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_SetFreState_ParamsSpec.$, 'Page_SetFreState_Params', [
    mojo.internal.StructField('state', 0, 0, FreStateSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_AutocompleteResultChanged_ParamsSpec.$, 'Page_AutocompleteResultChanged_Params', [
    mojo.internal.StructField('result', 0, 0, AutocompleteResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_UpdateSelection_ParamsSpec.$, 'Page_UpdateSelection_Params', [
    mojo.internal.StructField('oldSelection', 0, 0, OmniboxPopupSelectionSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('selection', 8, 0, OmniboxPopupSelectionSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_StepSelection_ParamsSpec.$, 'Page_StepSelection_Params', [
    mojo.internal.StructField('direction', 0, 0, SelectionDirectionSpec.$, 1, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('step', 4, 0, SelectionStepSpec.$, 1, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OpenCurrentSelection_ParamsSpec.$, 'Page_OpenCurrentSelection_Params', [
    mojo.internal.StructField('disposition', 0, 0, WindowOpenDispositionSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetAimButtonVisible_ParamsSpec.$, 'Page_SetAimButtonVisible_Params', [
    mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetAimButtonConfig_ParamsSpec.$, 'Page_SetAimButtonConfig_Params', [
    mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tooltip', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('a11yLabel', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconUrl', 24, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(Page_SetInputText_ParamsSpec.$, 'Page_SetInputText_Params', [
    mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetKeywordSpaceTriggeringEnabled_ParamsSpec.$, 'Page_SetKeywordSpaceTriggeringEnabled_Params', [
    mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetAvailableKeywordModels_ParamsSpec.$, 'Page_SetAvailableKeywordModels_Params', [
    mojo.internal.StructField('models', 0, 0, mojo.internal.Array(InputKeywordModelSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('defaultSearchProviderKeyword', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_SetThumbnail_ParamsSpec.$, 'Page_SetThumbnail_Params', [
    mojo.internal.StructField('thumbnailUrl', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isDeletable', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_OnContextualInputStatusChanged_ParamsSpec.$, 'Page_OnContextualInputStatusChanged_Params', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('status', 8, 0, ContextUploadStatusSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('error_type_$flag', 12, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "error_type_$value",
        originalFieldName: "errorType",
    }, undefined),
    mojo.internal.StructField('error_type_$value', 16, 0, ContextUploadErrorTypeSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "errorType",
    }, undefined),
], [[0, 32],]);
mojo.internal.Struct(Page_OnTabStripChanged_ParamsSpec.$, 'Page_OnTabStripChanged_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_OnInputStateChanged_ParamsSpec.$, 'Page_OnInputStateChanged_Params', [
    mojo.internal.StructField('inputState', 0, 0, InputStateSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_AddFileContext_ParamsSpec.$, 'Page_AddFileContext_Params', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fileInfo', 8, 0, SelectedFileInfoSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_UpdateAutoSuggestedTabContext_ParamsSpec.$, 'Page_UpdateAutoSuggestedTabContext_Params', [
    mojo.internal.StructField('tab', 0, 0, TabInfoSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('invocationSource', 8, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_UpdateLensSearchEligibility_ParamsSpec.$, 'Page_UpdateLensSearchEligibility_Params', [
    mojo.internal.StructField('eligible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_UpdateContentSharingPolicy_ParamsSpec.$, 'Page_UpdateContentSharingPolicy_Params', [
    mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_UpdateAimPopupEligibility_ParamsSpec.$, 'Page_UpdateAimPopupEligibility_Params', [
    mojo.internal.StructField('eligible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_UpdateSmartTabSharingActive_ParamsSpec.$, 'Page_UpdateSmartTabSharingActive_Params', [
    mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnPermissionPromptChanged_ParamsSpec.$, 'Page_OnPermissionPromptChanged_Params', [
    mojo.internal.StructField('isShowing', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('promptSize', 8, 0, SizeSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_SetRestoredTabIds_ParamsSpec.$, 'Page_SetRestoredTabIds_Params', [
    mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetAimThreadRestoredTabs_ParamsSpec.$, 'Page_SetAimThreadRestoredTabs_Params', [
    mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(TabInfoSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnScreenshotMenuClosed_ParamsSpec.$, 'Page_OnScreenshotMenuClosed_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_UpdateProfileInfo_ParamsSpec.$, 'Page_UpdateProfileInfo_Params', [
    mojo.internal.StructField('avatarUrl', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('email', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Union(SearchContextAttachmentSpec.$, 'SearchContextAttachment', {
    'fileAttachment': {
        'ordinal': 0,
        'type': FileAttachmentSpec.$,
    },
    'tabAttachment': {
        'ordinal': 1,
        'type': TabAttachmentSpec.$,
    },
});
var SearchContextAttachmentFieldTags;
(function (SearchContextAttachmentFieldTags) {
    SearchContextAttachmentFieldTags[SearchContextAttachmentFieldTags["FILE_ATTACHMENT"] = 0] = "FILE_ATTACHMENT";
    SearchContextAttachmentFieldTags[SearchContextAttachmentFieldTags["TAB_ATTACHMENT"] = 1] = "TAB_ATTACHMENT";
})(SearchContextAttachmentFieldTags || (SearchContextAttachmentFieldTags = {}));
mojo.internal.Union(PageHandler_AddFileContext_ResponseParam_ResultSpec.$, 'PageHandler_AddFileContext_ResponseParam_Result', {
    'success': {
        'ordinal': 0,
        'type': UnguessableTokenSpec.$,
    },
    'failure': {
        'ordinal': 1,
        'type': ContextUploadErrorTypeSpec.$,
    },
});
var PageHandler_AddFileContext_ResponseParam_ResultFieldTags;
(function (PageHandler_AddFileContext_ResponseParam_ResultFieldTags) {
    PageHandler_AddFileContext_ResponseParam_ResultFieldTags[PageHandler_AddFileContext_ResponseParam_ResultFieldTags["SUCCESS"] = 0] = "SUCCESS";
    PageHandler_AddFileContext_ResponseParam_ResultFieldTags[PageHandler_AddFileContext_ResponseParam_ResultFieldTags["FAILURE"] = 1] = "FAILURE";
})(PageHandler_AddFileContext_ResponseParam_ResultFieldTags || (PageHandler_AddFileContext_ResponseParam_ResultFieldTags = {}));
mojo.internal.Union(PageHandler_AddTabContext_ResponseParam_ResultSpec.$, 'PageHandler_AddTabContext_ResponseParam_Result', {
    'success': {
        'ordinal': 0,
        'type': UnguessableTokenSpec.$,
    },
    'failure': {
        'ordinal': 1,
        'type': ContextUploadErrorTypeSpec.$,
    },
});
var PageHandler_AddTabContext_ResponseParam_ResultFieldTags;
(function (PageHandler_AddTabContext_ResponseParam_ResultFieldTags) {
    PageHandler_AddTabContext_ResponseParam_ResultFieldTags[PageHandler_AddTabContext_ResponseParam_ResultFieldTags["SUCCESS"] = 0] = "SUCCESS";
    PageHandler_AddTabContext_ResponseParam_ResultFieldTags[PageHandler_AddTabContext_ResponseParam_ResultFieldTags["FAILURE"] = 1] = "FAILURE";
})(PageHandler_AddTabContext_ResponseParam_ResultFieldTags || (PageHandler_AddTabContext_ResponseParam_ResultFieldTags = {}));

// mojo/public/mojom/base/proto_wrapper.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProtoWrapperSpec = { $: {} };
mojo.internal.Struct(ProtoWrapperSpec.$, 'ProtoWrapper', [
    mojo.internal.StructField('protoName', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('smuggled', 8, 0, BigBufferSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);

// mojo/public/mojom/base/uuid.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UuidSpec = { $: {} };
mojo.internal.Struct(UuidSpec.$, 'Uuid', [
    mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);

// chrome/browser/contextual_tasks/contextual_tasks.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const IconTypeSpec = { $: mojo.internal.Enum() };
var IconType;
(function (IconType) {
    IconType[IconType["MIN_VALUE"] = 0] = "MIN_VALUE";
    IconType[IconType["MAX_VALUE"] = 186] = "MAX_VALUE";
    IconType[IconType["kUnspecified"] = 0] = "kUnspecified";
    IconType[IconType["kAdd"] = 9] = "kAdd";
    IconType[IconType["kCheck"] = 30] = "kCheck";
    IconType[IconType["kFormatQuoteFilled"] = 79] = "kFormatQuoteFilled";
    IconType[IconType["kImage"] = 84] = "kImage";
    IconType[IconType["kFollowUp"] = 100] = "kFollowUp";
    IconType[IconType["kDrivePdf"] = 101] = "kDrivePdf";
    IconType[IconType["kInvertedFormatQuoteFilled"] = 186] = "kInvertedFormatQuoteFilled";
})(IconType || (IconType = {}));
class PageHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'contextual_tasks.mojom.PageHandler', scope);
    }
}
class PagePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'contextual_tasks.mojom.Page', scope);
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
    setThreadTitle(title) {
        this.proxy.sendMessage(0, Page_SetThreadTitle_ParamsSpec.$, null, [
            title
        ], false);
    }
    setTaskDetails(uuid, url, replaceNavigationEntry) {
        this.proxy.sendMessage(1, Page_SetTaskDetails_ParamsSpec.$, null, [
            uuid,
            url,
            replaceNavigationEntry
        ], false);
    }
    onSidePanelStateChanged() {
        this.proxy.sendMessage(2, Page_OnSidePanelStateChanged_ParamsSpec.$, null, [], false);
    }
    focusComposebox() {
        this.proxy.sendMessage(3, Page_FocusComposebox_ParamsSpec.$, null, [], false);
    }
    postAimMessage(message) {
        this.proxy.sendMessage(4, Page_PostAimMessage_ParamsSpec.$, null, [
            message
        ], false);
    }
    onHandshakeComplete() {
        this.proxy.sendMessage(5, Page_OnHandshakeComplete_ParamsSpec.$, null, [], false);
    }
    setOAuthToken(oauthToken) {
        this.proxy.sendMessage(6, Page_SetOAuthToken_ParamsSpec.$, null, [
            oauthToken
        ], false);
    }
    onCookieSyncCompleted() {
        this.proxy.sendMessage(7, Page_OnCookieSyncCompleted_ParamsSpec.$, null, [], false);
    }
    hideInput() {
        this.proxy.sendMessage(8, Page_HideInput_ParamsSpec.$, null, [], false);
    }
    restoreInput() {
        this.proxy.sendMessage(9, Page_RestoreInput_ParamsSpec.$, null, [], false);
    }
    enterBasicMode() {
        this.proxy.sendMessage(10, Page_EnterBasicMode_ParamsSpec.$, null, [], false);
    }
    exitBasicMode() {
        this.proxy.sendMessage(11, Page_ExitBasicMode_ParamsSpec.$, null, [], false);
    }
    injectInput(input) {
        this.proxy.sendMessage(12, Page_InjectInput_ParamsSpec.$, null, [
            input
        ], false);
    }
    removeInjectedInput(fileToken) {
        this.proxy.sendMessage(13, Page_RemoveInjectedInput_ParamsSpec.$, null, [
            fileToken
        ], false);
    }
    onZeroStateChange(isZeroState) {
        this.proxy.sendMessage(14, Page_OnZeroStateChange_ParamsSpec.$, null, [
            isZeroState
        ], false);
    }
    setInNlm(inNlm) {
        this.proxy.sendMessage(15, Page_SetInNlm_ParamsSpec.$, null, [
            inNlm
        ], false);
    }
    onLensOverlayStateChanged(isShowing, maybeShowOverlayHintText) {
        this.proxy.sendMessage(16, Page_OnLensOverlayStateChanged_ParamsSpec.$, null, [
            isShowing,
            maybeShowOverlayHintText
        ], false);
    }
    showErrorPage() {
        this.proxy.sendMessage(17, Page_ShowErrorPage_ParamsSpec.$, null, [], false);
    }
    hideErrorPage() {
        this.proxy.sendMessage(18, Page_HideErrorPage_ParamsSpec.$, null, [], false);
    }
    showOauthErrorDialog() {
        this.proxy.sendMessage(19, Page_ShowOauthErrorDialog_ParamsSpec.$, null, [], false);
    }
    updateComposeboxPosition(position) {
        this.proxy.sendMessage(20, Page_UpdateComposeboxPosition_ParamsSpec.$, null, [
            position
        ], false);
    }
    lockInput() {
        this.proxy.sendMessage(21, Page_LockInput_ParamsSpec.$, null, [], false);
    }
    unlockInput() {
        this.proxy.sendMessage(22, Page_UnlockInput_ParamsSpec.$, null, [], false);
    }
    turnOnSmartTabSharing() {
        this.proxy.sendMessage(23, Page_TurnOnSmartTabSharing_ParamsSpec.$, null, [], false);
    }
    showSmartTabSharingTryItIph() {
        this.proxy.sendMessage(24, Page_ShowSmartTabSharingTryItIph_ParamsSpec.$, null, [], false);
    }
    showSmartTabSharingDefaultOnIph() {
        this.proxy.sendMessage(25, Page_ShowSmartTabSharingDefaultOnIph_ParamsSpec.$, null, [], false);
    }
    onWindowClosed(windowId) {
        this.proxy.sendMessage(26, Page_OnWindowClosed_ParamsSpec.$, null, [
            windowId
        ], false);
    }
    resetForNewThread(taskId, threadUrl) {
        this.proxy.sendMessage(27, Page_ResetForNewThread_ParamsSpec.$, null, [
            taskId,
            threadUrl
        ], false);
    }
}
class ExtensionPageHandlerFactoryPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'contextual_tasks.mojom.ExtensionPageHandlerFactory', scope);
    }
}
class ExtensionPageHandlerFactoryRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(ExtensionPageHandlerFactoryPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    createExtensionPageHandler(page, receiver) {
        this.proxy.sendMessage(0, ExtensionPageHandlerFactory_CreateExtensionPageHandler_ParamsSpec.$, null, [
            page,
            receiver
        ], false);
    }
}
class ExtensionPageHandlerFactory {
    static get $interfaceName() {
        return "contextual_tasks.mojom.ExtensionPageHandlerFactory";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new ExtensionPageHandlerFactoryRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class ExtensionPageHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'contextual_tasks.mojom.ExtensionPageHandler', scope);
    }
}
class ExtensionPageHandlerRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(ExtensionPageHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    getHandshakeMessage(documentId) {
        return this.proxy.sendMessage(0, ExtensionPageHandler_GetHandshakeMessage_ParamsSpec.$, ExtensionPageHandler_GetHandshakeMessage_ResponseParamsSpec.$, [
            documentId
        ], false);
    }
    onWebviewMessage(message, documentId) {
        this.proxy.sendMessage(1, ExtensionPageHandler_OnWebviewMessage_ParamsSpec.$, null, [
            message,
            documentId
        ], false);
    }
    setTaskId(uuid) {
        this.proxy.sendMessage(2, ExtensionPageHandler_SetTaskId_ParamsSpec.$, null, [
            uuid
        ], false);
    }
    getLensCropPreview() {
        return this.proxy.sendMessage(3, ExtensionPageHandler_GetLensCropPreview_ParamsSpec.$, ExtensionPageHandler_GetLensCropPreview_ResponseParamsSpec.$, [], false);
    }
    removeLensCrop() {
        this.proxy.sendMessage(4, ExtensionPageHandler_RemoveLensCrop_ParamsSpec.$, null, [], false);
    }
}
class ExtensionPagePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'contextual_tasks.mojom.ExtensionPage', scope);
    }
}
class ExtensionPageRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(ExtensionPagePendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    postAimMessage(message) {
        this.proxy.sendMessage(0, ExtensionPage_PostAimMessage_ParamsSpec.$, null, [
            message
        ], false);
    }
    postSearchMessage(message, documentId) {
        this.proxy.sendMessage(1, ExtensionPage_PostSearchMessage_ParamsSpec.$, null, [
            message,
            documentId
        ], false);
    }
    onHandshakeComplete() {
        this.proxy.sendMessage(2, ExtensionPage_OnHandshakeComplete_ParamsSpec.$, null, [], false);
    }
    onLensOverlayStateChanged(isShowing) {
        this.proxy.sendMessage(3, ExtensionPage_OnLensOverlayStateChanged_ParamsSpec.$, null, [
            isShowing
        ], false);
    }
    onLensCropUpdated(dataUri) {
        this.proxy.sendMessage(4, ExtensionPage_OnLensCropUpdated_ParamsSpec.$, null, [
            dataUri
        ], false);
    }
    onTabContextUpdated(tabs, submittedTabIds) {
        this.proxy.sendMessage(5, ExtensionPage_OnTabContextUpdated_ParamsSpec.$, null, [
            tabs,
            submittedTabIds
        ], false);
    }
}
/**
 * An object which receives request messages for the ExtensionPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class ExtensionPageCallbackRouter {
    helper_internal_;
    $;
    router_;
    postAimMessage;
    postSearchMessage;
    onHandshakeComplete;
    onLensOverlayStateChanged;
    onLensCropUpdated;
    onTabContextUpdated;
    onConnectionError;
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(ExtensionPageRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.postAimMessage =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, ExtensionPage_PostAimMessage_ParamsSpec.$, null, this.postAimMessage.createReceiverHandler(false /* expectsResponse */), false);
        this.postSearchMessage =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1, ExtensionPage_PostSearchMessage_ParamsSpec.$, null, this.postSearchMessage.createReceiverHandler(false /* expectsResponse */), false);
        this.onHandshakeComplete =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2, ExtensionPage_OnHandshakeComplete_ParamsSpec.$, null, this.onHandshakeComplete.createReceiverHandler(false /* expectsResponse */), false);
        this.onLensOverlayStateChanged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(3, ExtensionPage_OnLensOverlayStateChanged_ParamsSpec.$, null, this.onLensOverlayStateChanged.createReceiverHandler(false /* expectsResponse */), false);
        this.onLensCropUpdated =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(4, ExtensionPage_OnLensCropUpdated_ParamsSpec.$, null, this.onLensCropUpdated.createReceiverHandler(false /* expectsResponse */), false);
        this.onTabContextUpdated =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(5, ExtensionPage_OnTabContextUpdated_ParamsSpec.$, null, this.onTabContextUpdated.createReceiverHandler(false /* expectsResponse */), false);
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
const InjectedInputSpec = { $: {} };
const ContextualTaskIdSpec = { $: {} };
const ContextualWindowIdSpec = { $: {} };
const ComposeboxPositionSpec = { $: {} };
const PageHandler_GetThreadUrl_ParamsSpec = { $: {} };
const PageHandler_GetThreadUrl_ResponseParamsSpec = { $: {} };
const PageHandler_MoveActiveTabToNewThreadIfShared_ParamsSpec = { $: {} };
const PageHandler_MoveActiveTabToNewThreadIfShared_ResponseParamsSpec = { $: {} };
const PageHandler_GetUrlForTask_ParamsSpec = { $: {} };
const PageHandler_GetUrlForTask_ResponseParamsSpec = { $: {} };
const PageHandler_SetTaskId_ParamsSpec = { $: {} };
const PageHandler_IsZeroState_ParamsSpec = { $: {} };
const PageHandler_IsZeroState_ResponseParamsSpec = { $: {} };
const PageHandler_IsAiPage_ParamsSpec = { $: {} };
const PageHandler_IsAiPage_ResponseParamsSpec = { $: {} };
const PageHandler_IsPendingErrorPage_ParamsSpec = { $: {} };
const PageHandler_IsPendingErrorPage_ResponseParamsSpec = { $: {} };
const PageHandler_IsEmbeddedPageErrorDocument_ParamsSpec = { $: {} };
const PageHandler_IsEmbeddedPageErrorDocument_ResponseParamsSpec = { $: {} };
const PageHandler_SetThreadTitle_ParamsSpec = { $: {} };
const PageHandler_IsShownInTab_ParamsSpec = { $: {} };
const PageHandler_IsShownInTab_ResponseParamsSpec = { $: {} };
const PageHandler_OpenOnboardingHelpUi_ParamsSpec = { $: {} };
const PageHandler_OpenAskGHelpUi_ParamsSpec = { $: {} };
const PageHandler_OnWebviewMessage_ParamsSpec = { $: {} };
const PageHandler_GetCommonSearchParams_ParamsSpec = { $: {} };
const PageHandler_GetCommonSearchParams_ResponseParamsSpec = { $: {} };
const PageHandler_OnboardingTooltipDismissed_ParamsSpec = { $: {} };
const PageHandler_AskGTooltipDismissed_ParamsSpec = { $: {} };
const PageHandler_OnContextMenuOpened_ParamsSpec = { $: {} };
const PageHandler_NotifySmartTabSharingTryItIphResult_ParamsSpec = { $: {} };
const PageHandler_NotifySmartTabSharingDefaultOnIphResult_ParamsSpec = { $: {} };
const PageHandler_RegisterWindow_ParamsSpec = { $: {} };
const PageHandler_CloseWindow_ParamsSpec = { $: {} };
const Page_SetThreadTitle_ParamsSpec = { $: {} };
const Page_SetTaskDetails_ParamsSpec = { $: {} };
const Page_OnSidePanelStateChanged_ParamsSpec = { $: {} };
const Page_FocusComposebox_ParamsSpec = { $: {} };
const Page_PostAimMessage_ParamsSpec = { $: {} };
const Page_OnHandshakeComplete_ParamsSpec = { $: {} };
const Page_SetOAuthToken_ParamsSpec = { $: {} };
const Page_OnCookieSyncCompleted_ParamsSpec = { $: {} };
const Page_HideInput_ParamsSpec = { $: {} };
const Page_RestoreInput_ParamsSpec = { $: {} };
const Page_EnterBasicMode_ParamsSpec = { $: {} };
const Page_ExitBasicMode_ParamsSpec = { $: {} };
const Page_InjectInput_ParamsSpec = { $: {} };
const Page_RemoveInjectedInput_ParamsSpec = { $: {} };
const Page_OnZeroStateChange_ParamsSpec = { $: {} };
const Page_SetInNlm_ParamsSpec = { $: {} };
const Page_OnLensOverlayStateChanged_ParamsSpec = { $: {} };
const Page_ShowErrorPage_ParamsSpec = { $: {} };
const Page_HideErrorPage_ParamsSpec = { $: {} };
const Page_ShowOauthErrorDialog_ParamsSpec = { $: {} };
const Page_UpdateComposeboxPosition_ParamsSpec = { $: {} };
const Page_LockInput_ParamsSpec = { $: {} };
const Page_UnlockInput_ParamsSpec = { $: {} };
const Page_TurnOnSmartTabSharing_ParamsSpec = { $: {} };
const Page_ShowSmartTabSharingTryItIph_ParamsSpec = { $: {} };
const Page_ShowSmartTabSharingDefaultOnIph_ParamsSpec = { $: {} };
const Page_OnWindowClosed_ParamsSpec = { $: {} };
const Page_ResetForNewThread_ParamsSpec = { $: {} };
const PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
const ExtensionPageHandlerFactory_CreateExtensionPageHandler_ParamsSpec = { $: {} };
const ExtensionPageHandler_GetHandshakeMessage_ParamsSpec = { $: {} };
const ExtensionPageHandler_GetHandshakeMessage_ResponseParamsSpec = { $: {} };
const ExtensionPageHandler_OnWebviewMessage_ParamsSpec = { $: {} };
const ExtensionPageHandler_SetTaskId_ParamsSpec = { $: {} };
const ExtensionPageHandler_GetLensCropPreview_ParamsSpec = { $: {} };
const ExtensionPageHandler_GetLensCropPreview_ResponseParamsSpec = { $: {} };
const ExtensionPageHandler_RemoveLensCrop_ParamsSpec = { $: {} };
const ExtensionPage_PostAimMessage_ParamsSpec = { $: {} };
const ExtensionPage_PostSearchMessage_ParamsSpec = { $: {} };
const ExtensionPage_OnHandshakeComplete_ParamsSpec = { $: {} };
const ExtensionPage_OnLensOverlayStateChanged_ParamsSpec = { $: {} };
const ExtensionPage_OnLensCropUpdated_ParamsSpec = { $: {} };
const ExtensionPage_OnTabContextUpdated_ParamsSpec = { $: {} };
mojo.internal.Struct(InjectedInputSpec.$, 'InjectedInput', [
    mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('thumbnail', 8, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconId', 16, 0, IconTypeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fileToken', 24, 0, UnguessableTokenSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('supportsUnimodal', 20, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('queryText', 32, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('submitAfterInjection', 20, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(ContextualTaskIdSpec.$, 'ContextualTaskId', [
    mojo.internal.StructField('value', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ContextualWindowIdSpec.$, 'ContextualWindowId', [
    mojo.internal.StructField('value', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ComposeboxPositionSpec.$, 'ComposeboxPosition', [
    mojo.internal.StructField('max_width_$flag', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "max_width_$value",
        originalFieldName: "maxWidth",
    }, undefined),
    mojo.internal.StructField('max_width_$value', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "maxWidth",
    }, undefined),
    mojo.internal.StructField('max_height_$flag', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "max_height_$value",
        originalFieldName: "maxHeight",
    }, undefined),
    mojo.internal.StructField('max_height_$value', 8, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "maxHeight",
    }, undefined),
    mojo.internal.StructField('margin_bottom_$flag', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "margin_bottom_$value",
        originalFieldName: "marginBottom",
    }, undefined),
    mojo.internal.StructField('margin_bottom_$value', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "marginBottom",
    }, undefined),
    mojo.internal.StructField('margin_left_$flag', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "margin_left_$value",
        originalFieldName: "marginLeft",
    }, undefined),
    mojo.internal.StructField('margin_left_$value', 16, 0, mojo.internal.Int32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "marginLeft",
    }, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_GetThreadUrl_ParamsSpec.$, 'PageHandler_GetThreadUrl_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetThreadUrl_ResponseParamsSpec.$, 'PageHandler_GetThreadUrl_ResponseParams', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_MoveActiveTabToNewThreadIfShared_ParamsSpec.$, 'PageHandler_MoveActiveTabToNewThreadIfShared_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_MoveActiveTabToNewThreadIfShared_ResponseParamsSpec.$, 'PageHandler_MoveActiveTabToNewThreadIfShared_ResponseParams', [
    mojo.internal.StructField('moved', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetUrlForTask_ParamsSpec.$, 'PageHandler_GetUrlForTask_Params', [
    mojo.internal.StructField('uuid', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetUrlForTask_ResponseParamsSpec.$, 'PageHandler_GetUrlForTask_ResponseParams', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SetTaskId_ParamsSpec.$, 'PageHandler_SetTaskId_Params', [
    mojo.internal.StructField('uuid', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsZeroState_ParamsSpec.$, 'PageHandler_IsZeroState_Params', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsZeroState_ResponseParamsSpec.$, 'PageHandler_IsZeroState_ResponseParams', [
    mojo.internal.StructField('isZeroState', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsAiPage_ParamsSpec.$, 'PageHandler_IsAiPage_Params', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsAiPage_ResponseParamsSpec.$, 'PageHandler_IsAiPage_ResponseParams', [
    mojo.internal.StructField('isAiPage', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsPendingErrorPage_ParamsSpec.$, 'PageHandler_IsPendingErrorPage_Params', [
    mojo.internal.StructField('taskId', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsPendingErrorPage_ResponseParamsSpec.$, 'PageHandler_IsPendingErrorPage_ResponseParams', [
    mojo.internal.StructField('isPendingErrorPage', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsEmbeddedPageErrorDocument_ParamsSpec.$, 'PageHandler_IsEmbeddedPageErrorDocument_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_IsEmbeddedPageErrorDocument_ResponseParamsSpec.$, 'PageHandler_IsEmbeddedPageErrorDocument_ResponseParams', [
    mojo.internal.StructField('isErrorDocument', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SetThreadTitle_ParamsSpec.$, 'PageHandler_SetThreadTitle_Params', [
    mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsShownInTab_ParamsSpec.$, 'PageHandler_IsShownInTab_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_IsShownInTab_ResponseParamsSpec.$, 'PageHandler_IsShownInTab_ResponseParams', [
    mojo.internal.StructField('isInTab', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenOnboardingHelpUi_ParamsSpec.$, 'PageHandler_OpenOnboardingHelpUi_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OpenAskGHelpUi_ParamsSpec.$, 'PageHandler_OpenAskGHelpUi_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OnWebviewMessage_ParamsSpec.$, 'PageHandler_OnWebviewMessage_Params', [
    mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetCommonSearchParams_ParamsSpec.$, 'PageHandler_GetCommonSearchParams_Params', [
    mojo.internal.StructField('isDarkMode', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isSidePanel', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetCommonSearchParams_ResponseParamsSpec.$, 'PageHandler_GetCommonSearchParams_ResponseParams', [
    mojo.internal.StructField('params', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OnboardingTooltipDismissed_ParamsSpec.$, 'PageHandler_OnboardingTooltipDismissed_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_AskGTooltipDismissed_ParamsSpec.$, 'PageHandler_AskGTooltipDismissed_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OnContextMenuOpened_ParamsSpec.$, 'PageHandler_OnContextMenuOpened_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_NotifySmartTabSharingTryItIphResult_ParamsSpec.$, 'PageHandler_NotifySmartTabSharingTryItIphResult_Params', [
    mojo.internal.StructField('accepted', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_NotifySmartTabSharingDefaultOnIphResult_ParamsSpec.$, 'PageHandler_NotifySmartTabSharingDefaultOnIphResult_Params', [
    mojo.internal.StructField('accepted', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RegisterWindow_ParamsSpec.$, 'PageHandler_RegisterWindow_Params', [
    mojo.internal.StructField('taskId', 0, 0, ContextualTaskIdSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('windowId', 16, 0, ContextualWindowIdSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_CloseWindow_ParamsSpec.$, 'PageHandler_CloseWindow_Params', [
    mojo.internal.StructField('windowId', 0, 0, ContextualWindowIdSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetThreadTitle_ParamsSpec.$, 'Page_SetThreadTitle_Params', [
    mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetTaskDetails_ParamsSpec.$, 'Page_SetTaskDetails_Params', [
    mojo.internal.StructField('uuid', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('replaceNavigationEntry', 16, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(Page_OnSidePanelStateChanged_ParamsSpec.$, 'Page_OnSidePanelStateChanged_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_FocusComposebox_ParamsSpec.$, 'Page_FocusComposebox_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_PostAimMessage_ParamsSpec.$, 'Page_PostAimMessage_Params', [
    mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnHandshakeComplete_ParamsSpec.$, 'Page_OnHandshakeComplete_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_SetOAuthToken_ParamsSpec.$, 'Page_SetOAuthToken_Params', [
    mojo.internal.StructField('oauthToken', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnCookieSyncCompleted_ParamsSpec.$, 'Page_OnCookieSyncCompleted_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_HideInput_ParamsSpec.$, 'Page_HideInput_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_RestoreInput_ParamsSpec.$, 'Page_RestoreInput_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_EnterBasicMode_ParamsSpec.$, 'Page_EnterBasicMode_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_ExitBasicMode_ParamsSpec.$, 'Page_ExitBasicMode_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_InjectInput_ParamsSpec.$, 'Page_InjectInput_Params', [
    mojo.internal.StructField('input', 0, 0, InjectedInputSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_RemoveInjectedInput_ParamsSpec.$, 'Page_RemoveInjectedInput_Params', [
    mojo.internal.StructField('fileToken', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnZeroStateChange_ParamsSpec.$, 'Page_OnZeroStateChange_Params', [
    mojo.internal.StructField('isZeroState', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetInNlm_ParamsSpec.$, 'Page_SetInNlm_Params', [
    mojo.internal.StructField('inNlm', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnLensOverlayStateChanged_ParamsSpec.$, 'Page_OnLensOverlayStateChanged_Params', [
    mojo.internal.StructField('isShowing', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('maybeShowOverlayHintText', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_ShowErrorPage_ParamsSpec.$, 'Page_ShowErrorPage_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_HideErrorPage_ParamsSpec.$, 'Page_HideErrorPage_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_ShowOauthErrorDialog_ParamsSpec.$, 'Page_ShowOauthErrorDialog_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_UpdateComposeboxPosition_ParamsSpec.$, 'Page_UpdateComposeboxPosition_Params', [
    mojo.internal.StructField('position', 0, 0, ComposeboxPositionSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_LockInput_ParamsSpec.$, 'Page_LockInput_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_UnlockInput_ParamsSpec.$, 'Page_UnlockInput_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_TurnOnSmartTabSharing_ParamsSpec.$, 'Page_TurnOnSmartTabSharing_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_ShowSmartTabSharingTryItIph_ParamsSpec.$, 'Page_ShowSmartTabSharingTryItIph_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_ShowSmartTabSharingDefaultOnIph_ParamsSpec.$, 'Page_ShowSmartTabSharingDefaultOnIph_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_OnWindowClosed_ParamsSpec.$, 'Page_OnWindowClosed_Params', [
    mojo.internal.StructField('windowId', 0, 0, ContextualWindowIdSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_ResetForNewThread_ParamsSpec.$, 'Page_ResetForNewThread_Params', [
    mojo.internal.StructField('taskId', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('threadUrl', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandlerFactory_CreatePageHandler_ParamsSpec.$, 'PageHandlerFactory_CreatePageHandler_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('pageHandler', 8, 0, mojo.internal.InterfaceRequest(PageHandlerPendingReceiver), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ExtensionPageHandlerFactory_CreateExtensionPageHandler_ParamsSpec.$, 'ExtensionPageHandlerFactory_CreateExtensionPageHandler_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ExtensionPageRemote), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(ExtensionPageHandlerPendingReceiver), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ExtensionPageHandler_GetHandshakeMessage_ParamsSpec.$, 'ExtensionPageHandler_GetHandshakeMessage_Params', [
    mojo.internal.StructField('documentId', 0, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPageHandler_GetHandshakeMessage_ResponseParamsSpec.$, 'ExtensionPageHandler_GetHandshakeMessage_ResponseParams', [
    mojo.internal.StructField('message', 0, 0, ProtoWrapperSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPageHandler_OnWebviewMessage_ParamsSpec.$, 'ExtensionPageHandler_OnWebviewMessage_Params', [
    mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('documentId', 8, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ExtensionPageHandler_SetTaskId_ParamsSpec.$, 'ExtensionPageHandler_SetTaskId_Params', [
    mojo.internal.StructField('uuid', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPageHandler_GetLensCropPreview_ParamsSpec.$, 'ExtensionPageHandler_GetLensCropPreview_Params', [], [[0, 8],]);
mojo.internal.Struct(ExtensionPageHandler_GetLensCropPreview_ResponseParamsSpec.$, 'ExtensionPageHandler_GetLensCropPreview_ResponseParams', [
    mojo.internal.StructField('dataUri', 0, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPageHandler_RemoveLensCrop_ParamsSpec.$, 'ExtensionPageHandler_RemoveLensCrop_Params', [], [[0, 8],]);
mojo.internal.Struct(ExtensionPage_PostAimMessage_ParamsSpec.$, 'ExtensionPage_PostAimMessage_Params', [
    mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPage_PostSearchMessage_ParamsSpec.$, 'ExtensionPage_PostSearchMessage_Params', [
    mojo.internal.StructField('message', 0, 0, ProtoWrapperSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('documentId', 8, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ExtensionPage_OnHandshakeComplete_ParamsSpec.$, 'ExtensionPage_OnHandshakeComplete_Params', [], [[0, 8],]);
mojo.internal.Struct(ExtensionPage_OnLensOverlayStateChanged_ParamsSpec.$, 'ExtensionPage_OnLensOverlayStateChanged_Params', [
    mojo.internal.StructField('isShowing', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPage_OnLensCropUpdated_ParamsSpec.$, 'ExtensionPage_OnLensCropUpdated_Params', [
    mojo.internal.StructField('dataUri', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPage_OnTabContextUpdated_ParamsSpec.$, 'ExtensionPage_OnTabContextUpdated_Params', [
    mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(TabInfoSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('submittedTabIds', 8, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionBrowserProxyImpl {
    callbackRouter;
    handler;
    constructor() {
        this.callbackRouter = new ExtensionPageCallbackRouter();
        this.handler = new ExtensionPageHandlerRemote();
        const factory = ExtensionPageHandlerFactory.getRemote();
        factory.createExtensionPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler
            .$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return window.__extensionBrowserProxyInstance ||
            (window.__extensionBrowserProxyInstance =
                new ExtensionBrowserProxyImpl());
    }
    static setInstance(proxy) {
        window.__extensionBrowserProxyInstance = proxy;
    }
}

let instance = null;
function getCss() {
    return instance || (instance = [...[], css `:host{border-radius:8px;box-sizing:border-box;color-scheme:light;display:block;height:100%;margin:0;overflow:hidden;padding:0;user-select:none;width:100%}:host([dark-mode]){color-scheme:dark}.chip{align-items:center;border-radius:8px;box-sizing:border-box;display:flex;height:100%;justify-content:center;overflow:hidden;position:relative;width:100%}#cropImage{box-sizing:border-box;display:block;height:100%;object-fit:cover;object-position:center;pointer-events:none;width:100%}#closeButton{--cr-icon-button-active-background-color:rgba(255,255,255,0.16);--cr-icon-button-fill-color:#fff;--cr-icon-button-focus-outline-color:#0b57d0;--cr-icon-button-hover-background-color:rgba(0,0,0,0.6);--cr-icon-button-icon-size:20px;--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0;--cr-icon-button-size:100%;background-color:rgba(0,0,0,0.6);border-radius:inherit;display:flex;height:100%;inset:0;margin:0;opacity:0;pointer-events:none;position:absolute;transition:opacity 150ms ease-in-out;width:100%;z-index:2}:host([dark-mode]) #closeButton{--cr-icon-button-focus-outline-color:#a8c7fa}.chip:hover #closeButton,.chip:focus-within #closeButton{opacity:1;pointer-events:auto}:host([dir='rtl']),:host-context([dir='rtl']){direction:rtl}@media (forced-colors:active){.chip{border:1px solid ButtonText}#closeButton{--cr-icon-button-fill-color:ButtonText;--cr-icon-button-hover-background-color:ButtonFace;background-color:ButtonFace;border:1px solid ButtonText;box-sizing:border-box;forced-color-adjust:none}}`]);
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml() {
    return html `<!--_html_template_start_-->
    ${this.dataUri ? html `
      <div id="chipRoot" class="chip">
        <img id="cropImage"
            src="${this.dataUri}"
            alt="${this.label_}"
            draggable="false">
        <cr-icon-button id="closeButton"
            iron-icon="cr:close"
            noink
            aria-label="${this.dismissLabel_}"
            title="${this.dismissLabel_}"
            @click="${this.onCloseClick_}">
        </cr-icon-button>
      </div>
    ` : ''}
  <!--_html_template_end_-->`;
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class LensChipAppElement extends CrLitElement {
    static get is() {
        return 'lens-chip-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dataUri: { type: String },
            darkMode: {
                type: Boolean,
                reflect: true,
                attribute: 'dark-mode',
            },
            label_: { type: String },
            dismissLabel_: { type: String },
        };
    }
    #dataUri_accessor_storage = '';
    get dataUri() { return this.#dataUri_accessor_storage; }
    set dataUri(value) { this.#dataUri_accessor_storage = value; }
    #darkMode_accessor_storage = false;
    get darkMode() { return this.#darkMode_accessor_storage; }
    set darkMode(value) { this.#darkMode_accessor_storage = value; }
    #label__accessor_storage = loadTimeData.getString('lensRegionChipLabel');
    get label_() { return this.#label__accessor_storage; }
    set label_(value) { this.#label__accessor_storage = value; }
    #dismissLabel__accessor_storage = loadTimeData.getString('lensRegionChipDismissA11yLabel');
    get dismissLabel_() { return this.#dismissLabel__accessor_storage; }
    set dismissLabel_(value) { this.#dismissLabel__accessor_storage = value; }
    pageHandler_ = null;
    listenerIds_ = [];
    connectedCallback() {
        super.connectedCallback();
        const params = new URLSearchParams(window.location.search);
        this.darkMode = params.get('cs') === '1';
        this.fetchPreview_();
        const callbackRouter = ExtensionBrowserProxyImpl.getInstance().callbackRouter;
        this.listenerIds_.push(callbackRouter.onLensCropUpdated.addListener((dataUri) => {
            this.dataUri = dataUri;
        }));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const callbackRouter = ExtensionBrowserProxyImpl.getInstance().callbackRouter;
        for (const id of this.listenerIds_) {
            callbackRouter.removeListener(id);
        }
        this.listenerIds_ = [];
    }
    setPageHandlerForTesting(handler) {
        this.pageHandler_ = handler;
    }
    setDataUriForTesting(dataUri) {
        this.dataUri = dataUri;
    }
    getDataUriForTesting() {
        return this.dataUri;
    }
    setDarkModeForTesting(darkMode) {
        this.darkMode = darkMode;
    }
    getDarkModeForTesting() {
        return this.darkMode;
    }
    getPageHandler_() {
        return this.pageHandler_ || ExtensionBrowserProxyImpl.getInstance().handler;
    }
    async fetchPreview_() {
        const startTime = performance.now();
        try {
            const response = await this.getPageHandler_().getLensCropPreview();
            this.dataUri = response?.dataUri ?? '';
            if (response?.dataUri) {
                chrome.metricsPrivate?.recordTime('ContextualTasks.LensRegionChip.PreviewLoadLatency', Math.round(performance.now() - startTime));
            }
        }
        catch (e) {
            this.dataUri = '';
        }
    }
    async onCloseClick_() {
        this.fire('close-chip');
        if (this.dataUri) {
            this.dataUri = '';
            try {
                await this.getPageHandler_().removeLensCrop();
            }
            catch (e) {
                // Ignore
            }
        }
    }
}
customElements.define(LensChipAppElement.is, LensChipAppElement);

export { LensChipAppElement };
//# sourceMappingURL=lens_chip_app.rollup.js.map
