import { b as assert, c as isMac, E as ExtensionBrowserProxyImpl, C as ComposeboxProxyImpl } from './shared.rollup.js';
import { css, CrLitElement, html } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/brave/leo.bundle.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import 'chrome://resources/mojo/mojo/public/js/bindings.js';

let instance$4 = null;
function getCss$4() {
    return instance$4 || (instance$4 = [...[], css `[hidden],:host([hidden]){display:none !important}`]);
}

let instance$3 = null;
function getCss$3() {
    return instance$3 || (instance$3 = [...[getCss$4()], css `:host{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle;fill:var(--iron-icon-fill-color,currentcolor);stroke:var(--iron-icon-stroke-color,none);width:var(--iron-icon-width,24px);height:var(--iron-icon-height,24px)}:host-context([webui-refresh-2026]){&:host(:focus){border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}`]);
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
        return getCss$3();
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

let instance$2 = null;
function getCss$2() {
    return instance$2 || (instance$2 = [...[], css `:host{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transform:translate3d(0,0,0)}.ripple{background-color:currentcolor;left:0;opacity:var(--paper-ripple-opacity,0.25);pointer-events:none;position:absolute;will-change:height,transform,width}.ripple,:host(.circle){border-radius:50%}`]);
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
        return getCss$2();
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

let instance$1 = null;
function getCss$1() {
    return instance$1 || (instance$1 = [...[], css `:host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:32px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:none;overflow:hidden;pointer-events:auto;position:relative;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host(:hover:not([disabled])){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}#ink{--paper-ripple-opacity:1;color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([suppress-rtl-flip]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([suppress-rtl-flip])[multiple-icons_]) cr-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);pointer-events:none;position:relative;width:100%}cr-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color,none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$1() {
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
        return getCss$1();
    }
    render() {
        return getHtml$1.bind(this)();
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

let instance = null;
function getCss() {
    return instance || (instance = [...[getCss$1()], css `:host{align-items:center;color-scheme:light;display:flex;height:100%;justify-content:center;margin:0;overflow:hidden;padding:0;user-select:none;width:100%}:host([dark-mode]){color-scheme:dark}#lensButton{--cr-icon-button-active-background-color:rgba(31,31,31,0.12);--cr-icon-button-fill-color:var(--color-composebox-voice-lens-button,rgba(10,10,10,1));--cr-icon-button-focus-outline-color:var(--color-searchbox-results-icon-focused-outline,#0b57d0);--cr-icon-button-hover-background-color:var(--color-composebox-lens-button-hover-background,rgba(31,31,31,0.06));--cr-icon-button-icon-size:24px;--cr-icon-button-size:36px;--cr-icon-image:url(chrome://resources/cr_components/searchbox/icons/camera.svg);margin:0}:host([dark-mode]) #lensButton{--cr-icon-button-active-background-color:rgba(227,227,227,0.12);--cr-icon-button-fill-color:var(--color-composebox-voice-lens-button,rgba(230,232,240,1));--cr-icon-button-focus-outline-color:var(--color-searchbox-results-icon-focused-outline,#a8c7fa);--cr-icon-button-hover-background-color:var(--color-composebox-lens-button-hover-background,rgba(66,68,77,1))}#lensButton[active],#lensButton.active{background-color:var(--color-composebox-lens-active-background,rgba(225,227,232,1));border-radius:50%}:host([dark-mode]) #lensButton[active],:host([dark-mode]) #lensButton.active{background-color:var(--color-composebox-lens-active-background,rgba(66,68,77,1))}#lensButton:focus-visible:focus{box-shadow:none;outline:2px solid var(--color-searchbox-results-icon-focused-outline,#0b57d0);outline-offset:2px}:host([dark-mode]) #lensButton:focus-visible:focus{outline-color:var(--color-searchbox-results-icon-focused-outline,#a8c7fa)}@media (forced-colors:active){#lensButton{--cr-icon-button-fill-color:ButtonText;border:1px solid transparent}#lensButton:focus-visible:focus{outline-color:Highlight}}`]);
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml() {
    return html `<!--_html_template_start_-->
    <cr-icon-button id="lensButton"
        class="action-icon"
        noink
        aria-label="${this.label_}"
        title="${this.label_}"
        aria-pressed="${this.active ? 'true' : 'false'}"
        ?active="${this.active}"
        ?disabled="${this.disabled}"
        @click="${this.onClick_}"
        @mousedown="${this.onMousedown_}">
    </cr-icon-button>
  <!--_html_template_end_-->`;
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class LensButtonAppElement extends CrLitElement {
    static get is() {
        return 'lens-button-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            active: {
                type: Boolean,
                reflect: true,
            },
            disabled: {
                type: Boolean,
                reflect: true,
            },
            darkMode: {
                type: Boolean,
                reflect: true,
            },
            label_: { type: String },
        };
    }
    #active_accessor_storage = false;
    get active() { return this.#active_accessor_storage; }
    set active(value) { this.#active_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #darkMode_accessor_storage = false;
    get darkMode() { return this.#darkMode_accessor_storage; }
    set darkMode(value) { this.#darkMode_accessor_storage = value; }
    #label__accessor_storage = loadTimeData.isInitialized() &&
        loadTimeData.valueExists('lensSearchButtonLabel') ?
        loadTimeData.getString('lensSearchButtonLabel') :
        '';
    get label_() { return this.#label__accessor_storage; }
    set label_(value) { this.#label__accessor_storage = value; }
    pageHandler_ = null;
    overlayStateListenerId_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.darkMode = this.isDarkModeEnabled_();
        const browserProxy = ExtensionBrowserProxyImpl.getInstance();
        if (this.overlayStateListenerId_ === null) {
            this.overlayStateListenerId_ =
                browserProxy.callbackRouter.onLensOverlayStateChanged.addListener((isShowing) => {
                    this.active = isShowing;
                });
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.overlayStateListenerId_ !== null) {
            const browserProxy = ExtensionBrowserProxyImpl.getInstance();
            browserProxy.callbackRouter.removeListener(this.overlayStateListenerId_);
            this.overlayStateListenerId_ = null;
        }
    }
    isDarkModeEnabled_() {
        const params = new URLSearchParams(window.location.search);
        return params.get('cs') === '1';
    }
    setPageHandlerForTesting(handler) {
        this.pageHandler_ = handler;
    }
    getPageHandler_() {
        return this.pageHandler_ || ComposeboxProxyImpl.getInstance().handler;
    }
    onClick_() {
        if (this.disabled) {
            return;
        }
        this.getPageHandler_().handleLensButtonClick();
    }
    onMousedown_(e) {
        e.preventDefault();
    }
}
customElements.define(LensButtonAppElement.is, LensButtonAppElement);

export { LensButtonAppElement };
//# sourceMappingURL=lens_button_app.rollup.js.map
