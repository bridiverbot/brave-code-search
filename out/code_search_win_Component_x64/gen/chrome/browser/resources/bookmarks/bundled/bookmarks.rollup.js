import { css, CrLitElement, html, nothing, render } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/brave/leo.bundle.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { addWebUiListener, removeWebUiListener, sendWithPromise } from 'chrome://resources/js/cr.js';
import 'chrome://bookmarks/strings.m.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';

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

let instance$F = null;
function getCss$w() {
    return instance$F || (instance$F = [...[], css `[hidden],:host([hidden]){display:none !important}`]);
}

let instance$E = null;
function getCss$v() {
    return instance$E || (instance$E = [...[getCss$w()], css `:host{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle;fill:var(--iron-icon-fill-color,currentcolor);stroke:var(--iron-icon-stroke-color,none);width:var(--iron-icon-width,24px);height:var(--iron-icon-height,24px)}:host-context([webui-refresh-2026]){&:host(:focus){border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}`]);
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

let instance$D = null;
function getCss$u() {
    return instance$D || (instance$D = [...[], css `:host{display:none}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$k() {
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
        return getCss$u();
    }
    render() {
        return getHtml$k.bind(this)();
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

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WebUiListenerMixinLit = (superClass) => {
    class WebUiListenerMixinLit extends superClass {
        /**
         * Holds WebUI listeners that need to be removed when this element is
         * destroyed.
         */
        webUiListeners_ = [];
        /**
         * Adds a WebUI listener and registers it for automatic removal when
         * this element is detached. Note: Do not use this method if you intend
         * to remove this listener manually (use addWebUiListener directly
         * instead).
         *
         * @param eventName The event to listen to.
         * @param callback The callback run when the event is fired.
         */
        addWebUiListener(eventName, callback) {
            this.webUiListeners_.push(addWebUiListener(eventName, callback));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            while (this.webUiListeners_.length > 0) {
                removeWebUiListener(this.webUiListeners_.pop());
            }
        }
    }
    return WebUiListenerMixinLit;
};

const sheet$1 = new CSSStyleSheet();
sheet$1.replaceSync(`html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-100-rgb:244,199,195;--google-red-100:rgb(var(--google-red-100-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-red-700-rgb:197,57,41;--google-red-700:rgb(var(--google-red-700-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--google-yellow-700-rgb:240,147,0;--google-yellow-700:rgb(var(--google-yellow-700-rgb));--cr-card-background-color:white;--cr-shadow-key-color_:color-mix(in srgb,var(--cr-shadow-color) 30%,transparent);--cr-shadow-ambient-color_:color-mix(in srgb,var(--cr-shadow-color) 15%,transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb),0.1);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:var(--cr-elevation-2);--cr-separator-color:rgba(0,0,0,.06);--cr-title-text-color:rgb(90,90,90);--cr-scrollable-border-color:var(--google-grey-300);--cr-button-edge-spacing:12px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb),.14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1;--cr-fallback-color-outline:rgb(116,119,117);--cr-fallback-color-primary:rgb(11,87,208);--cr-fallback-color-on-primary:rgb(255,255,255);--cr-fallback-color-primary-container:rgb(211,227,253);--cr-fallback-color-on-primary-container:rgb(4,30,73);--cr-fallback-color-secondary-container:rgb(194,231,255);--cr-fallback-color-on-secondary-container:rgb(0,29,53);--cr-fallback-color-neutral-container:rgb(242,242,242);--cr-fallback-color-neutral-outline:rgb(199,199,199);--cr-fallback-color-surface:rgb(255,255,255);--cr-fallback-color-surface1:rgb(248,250,253);--cr-fallback-color-surface2:rgb(243,246,252);--cr-fallback-color-surface3:rgb(239,243,250);--cr-fallback-color-surface4:rgb(237,242,250);--cr-fallback-color-surface5:rgb(234,240,249);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225,227,225);--cr-fallback-color-on-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-subtle:rgb(71,71,71);--cr-fallback-color-inverse-primary:rgb(168,199,250);--cr-fallback-color-inverse-surface:rgb(48,48,48);--cr-fallback-color-inverse-on-surface:rgb(242,242,242);--cr-fallback-color-tonal-container:rgb(211,227,253);--cr-fallback-color-on-tonal-container:rgb(4,30,73);--cr-fallback-color-tonal-outline:rgb(168,199,250);--cr-fallback-color-error:rgb(179,38,30);--cr-fallback-color-divider:rgb(211,227,253);--cr-fallback-color-state-hover-on-prominent_:rgba(253,252,251,.1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(var(--cr-fallback-color-state-ripple-primary-rgb_),0.32);--cr-fallback-color-base-container:rgb(236,239,247);--cr-fallback-color-disabled-background:rgba(var(--cr-fallback-color-on-surface-rgb),.12);--cr-fallback-color-disabled-foreground:rgba(var(--cr-fallback-color-on-surface-rgb),var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,rgba(var(--cr-fallback-color-on-surface-rgb),.08));--cr-hover-on-prominent-background-color:var(--color-sys-state-hover-on-prominent,var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(--color-sys-state-hover-on-subtle,var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,rgba(var(--cr-fallback-color-on-surface-rgb),.12));--cr-active-on-primary-background-color:var(--color-sys-state-ripple-primary,var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(--color-sys-state-ripple-neutral-on-subtle,var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,var(--cr-fallback-color-primary));--cr-focus-outline-inverse-color:var(--color-sys-state-focus-ring-inverse,var(--cr-fallback-color-inverse-primary));--cr-primary-text-color:var(--color-primary-foreground,var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow,rgb(0,0,0));--cr-checked-color:var(--color-checkbox-foreground-checked,var(--cr-fallback-color-primary))}html[webui-refresh-2026]{--cr-card-background-color:var(--color-webui-card-background)}@media (prefers-color-scheme:dark){html{--cr-fallback-color-outline:rgb(142,145,143);--cr-fallback-color-primary:rgb(168,199,250);--cr-fallback-color-on-primary:rgb(6,46,111);--cr-fallback-color-primary-container:rgb(8,66,160);--cr-fallback-color-on-primary-container:rgb(211,227,253);--cr-fallback-color-secondary-container:rgb(0,74,119);--cr-fallback-color-on-secondary-container:rgb(194,231,255);--cr-fallback-color-neutral-container:rgb(40,40,40);--cr-fallback-color-neutral-outline:rgb(117,117,117);--cr-fallback-color-surface:rgb(31,31,31);--cr-fallback-color-surface1:rgb(39,40,42);--cr-fallback-color-surface2:rgb(45,47,49);--cr-fallback-color-surface3:rgb(51,52,56);--cr-fallback-color-surface4:rgb(52,54,58);--cr-fallback-color-surface5:rgb(56,58,62);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-variant:rgb(196,199,197);--cr-fallback-color-on-surface-subtle:rgb(199,199,199);--cr-fallback-color-inverse-primary:rgb(11,87,208);--cr-fallback-color-inverse-surface:rgb(227,227,227);--cr-fallback-color-inverse-on-surface:rgb(31,31,31);--cr-fallback-color-tonal-container:rgb(0,74,119);--cr-fallback-color-on-tonal-container:rgb(194,231,255);--cr-fallback-color-tonal-outline:rgb(4,125,183);--cr-fallback-color-error:rgb(242,184,181);--cr-fallback-color-divider:rgb(94,94,94);--cr-fallback-color-state-hover-on-prominent_:rgba(31,31,31,.06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40,40,40,1);--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb),0.1);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255,255,255,.06);--cr-menu-shadow:rgba(0,0,0,.3) 0 1px 2px 0,rgba(0,0,0,.15) 0 3px 6px 2px;--cr-separator-color:rgba(255,255,255,.1);--cr-title-text-color:var(--cr-primary-text-color);--cr-scrollable-border-color:var(--google-grey-700)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent;--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}@media (prefers-reduced-motion:reduce){html{--cr-animations-disabled:1}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet$1];

let instance$C = null;
function getCss$t() {
    return instance$C || (instance$C = [...[], css `:host{align-items:center;border-top:1px solid var(--cr-separator-color);color:var(--cr-secondary-text-color);display:none;font-size:0.8125rem;justify-content:center;padding:0 24px}:host-context([webui-refresh-2026]){a:focus{border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}:host([is-managed_]){display:flex}a[href]{color:var(--cr-link-color)}cr-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:var(--managed-footnote-icon-padding,8px);width:20px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$j() {
    return html `
${this.isManaged_ ? html `
  <cr-icon .icon="${this.managedByIcon_}"></cr-icon>
  <div id="content" .innerHTML="${this.getManagementString_()}"></div>
` : ''}`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview UI element for indicating that this user is managed by
 * their organization. This component uses the |isManaged| boolean in
 * loadTimeData, and the |managedByOrg| i18n string.
 *
 * If |isManaged| is false, this component is hidden. If |isManaged| is true, it
 * becomes visible.
 */
const ManagedFootnoteElementBase = I18nMixinLit(WebUiListenerMixinLit(CrLitElement));
class ManagedFootnoteElement extends ManagedFootnoteElementBase {
    static get is() {
        return 'managed-footnote';
    }
    static get styles() {
        return getCss$t();
    }
    render() {
        return getHtml$j.bind(this)();
    }
    static get properties() {
        return {
            /**
             * Whether the user is managed by their organization through enterprise
             * policies.
             */
            isManaged_: {
                reflect: true,
                type: Boolean,
            },
            // 
            /**
             * The name of the icon to display in the footer.
             * Should only be read if isManaged_ is true.
             */
            managedByIcon_: {
                reflect: true,
                type: String,
            },
        };
    }
    #isManaged__accessor_storage = loadTimeData.getBoolean('isManaged');
    get isManaged_() { return this.#isManaged__accessor_storage; }
    set isManaged_(value) { this.#isManaged__accessor_storage = value; }
    #managedByIcon__accessor_storage = loadTimeData.getString('managedByIcon');
    get managedByIcon_() { return this.#managedByIcon__accessor_storage; }
    set managedByIcon_(value) { this.#managedByIcon__accessor_storage = value; }
    // 
    firstUpdated() {
        this.addWebUiListener('is-managed-changed', (managed) => {
            loadTimeData.overrideValues({ isManaged: managed });
            this.isManaged_ = managed;
        });
    }
    /** @return Message to display to the user. */
    getManagementString_() {
        // 
        return this.i18nAdvanced('browserManagedByOrg');
    }
}
customElements.define(ManagedFootnoteElement.is, ManagedFootnoteElement);
chrome.send('observeManagedUI');

// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// Don't show the managed footnote on the downloads, extensions, or the settings
// pages. Our downloads page doesn't have a static area to display the footnote
// and it thus interferes with the hit box for the "Clear All" button. On the
// extensions and the settings pages we just don't want to see this footnote
// displayed.
if (window.location.href === 'chrome://downloads/' ||
    window.location.href === 'chrome://extensions/' ||
    window.location.href.startsWith('chrome://settings/')) {
    injectStyle(ManagedFootnoteElement, css `
    :host([is-managed_]) {
      display: none !important;
    }
  `);
}

// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
function getHtml$i() {
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
        return getHtml$i.bind(this)();
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

let instance$B = null;
function getCss$s() {
    return instance$B || (instance$B = [...[], css `:host{--cr-toast-background:var(--color-toast-background,var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,var(--cr-fallback-color-inverse-on-surface));--cr-focus-outline-color:var(--cr-focus-outline-inverse-color);align-items:center;background:var(--cr-toast-background);border-radius:8px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,0.28);box-sizing:border-box;display:flex;line-height:20px;margin:24px;max-width:var(--cr-toast-max-width,568px);min-height:52px;min-width:288px;opacity:0;padding:0 16px;position:fixed;transform:translateY(100px);transition:opacity 300ms,transform 300ms;visibility:hidden;z-index:1}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host(:not([open])) ::slotted(*){display:none}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent !important;border:none !important;color:var(--cr-toast-button-color) !important;margin-inline-start:32px !important;min-width:52px !important;padding:8px !important}:host ::slotted(cr-button:hover){background-color:transparent !important}::slotted(cr-button:last-of-type){margin-inline-end:-8px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$h() {
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
        return getCss$s();
    }
    render() {
        return getHtml$h.bind(this)();
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

let instance$A = null;
function getCss$r() {
    return instance$A || (instance$A = [...[getCss$w()], css `#content{display:flex;flex:1}.collapsible{overflow:hidden;text-overflow:ellipsis}span{white-space:pre}.elided-text{overflow:hidden;text-overflow:ellipsis;white-space:var(--cr-toast-white-space,nowrap)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$g() {
    return html `
<cr-toast id="toast" .duration="${this.duration}">
  <div id="content" class="elided-text"></div>
  <slot id="slotted"></slot>
</cr-toast>`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Element which shows toasts with optional undo button. */
let toastManagerInstance = null;
function getToastManager() {
    assert(toastManagerInstance);
    return toastManagerInstance;
}
function setInstance(instance) {
    assert(!instance || !toastManagerInstance);
    toastManagerInstance = instance;
}
class CrToastManagerElement extends CrLitElement {
    static get is() {
        return 'cr-toast-manager';
    }
    static get styles() {
        return getCss$r();
    }
    render() {
        return getHtml$g.bind(this)();
    }
    static get properties() {
        return {
            duration: {
                type: Number,
            },
        };
    }
    #duration_accessor_storage = 0;
    get duration() { return this.#duration_accessor_storage; }
    set duration(value) { this.#duration_accessor_storage = value; }
    get isToastOpen() {
        return this.$.toast.open;
    }
    get slottedHidden() {
        return this.$.slotted.hidden;
    }
    connectedCallback() {
        super.connectedCallback();
        setInstance(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        setInstance(null);
    }
    /**
     * @param label The label to display inside the toast.
     */
    show(label, hideSlotted = false) {
        this.$.content.textContent = label;
        this.showInternal_(hideSlotted);
    }
    /**
     * Shows the toast, making certain text fragments collapsible.
     */
    showForStringPieces(pieces, hideSlotted = false) {
        const content = this.$.content;
        content.textContent = '';
        pieces.forEach(function (p) {
            if (p.value.length === 0) {
                return;
            }
            const span = document.createElement('span');
            span.textContent = p.value;
            if (p.collapsible) {
                span.classList.add('collapsible');
            }
            content.appendChild(span);
        });
        this.showInternal_(hideSlotted);
    }
    showInternal_(hideSlotted) {
        this.$.slotted.hidden = hideSlotted;
        this.$.toast.show();
    }
    hide() {
        this.$.toast.hide();
    }
}
customElements.define(CrToastManagerElement.is, CrToastManagerElement);

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrSplitterElement extends HTMLElement {
    static get is() {
        return 'cr-splitter';
    }
    handlers_ = null;
    startX_ = 0;
    startWidth_ = -1;
    resizeNextElement = false;
    constructor() {
        super();
        this.addEventListener('mousedown', e => this.onMouseDown_(e));
        this.addEventListener('touchstart', e => this.onTouchStart_(e));
    }
    connectedCallback() {
        this.handlers_ = new Map();
    }
    disconnectedCallback() {
        this.removeAllHandlers_();
        this.handlers_ = null;
    }
    /**
     * Starts the dragging of the splitter. Adds listeners for mouse or touch
     * events and calls splitter drag start handler.
     * @param clientX X position of the mouse or touch event that started the
     *     drag.
     * @param isTouchEvent True if the drag started by touch event.
     */
    startDrag(clientX, isTouchEvent) {
        assert(!!this.handlers_);
        if (this.handlers_.size > 0) {
            // Concurrent drags
            this.endDrag_();
        }
        if (isTouchEvent) {
            const endDragBound = this.endDrag_.bind(this);
            this.handlers_.set('touchmove', this.handleTouchMove_.bind(this));
            this.handlers_.set('touchend', endDragBound);
            this.handlers_.set('touchcancel', endDragBound);
            // Another touch start (we somehow missed touchend or touchcancel).
            this.handlers_.set('touchstart', endDragBound);
        }
        else {
            this.handlers_.set('mousemove', this.handleMouseMove_.bind(this));
            this.handlers_.set('mouseup', this.handleMouseUp_.bind(this));
        }
        const doc = this.ownerDocument;
        // Use capturing events on the document to get events when the mouse
        // leaves the document.
        for (const [eventType, handler] of this.handlers_) {
            doc.addEventListener(eventType, handler, true);
        }
        this.startX_ = clientX;
        this.handleSplitterDragStart_();
    }
    removeAllHandlers_() {
        const doc = this.ownerDocument;
        assert(!!this.handlers_);
        for (const [eventType, handler] of this.handlers_) {
            doc.removeEventListener(eventType, handler, true);
        }
        this.handlers_.clear();
    }
    /**
     * Ends the dragging of the splitter. Removes listeners set in startDrag
     * and calls splitter drag end handler.
     */
    endDrag_() {
        this.removeAllHandlers_();
        this.handleSplitterDragEnd_();
    }
    getResizeTarget_() {
        const target = this.resizeNextElement ? this.nextElementSibling :
            this.previousElementSibling;
        return target;
    }
    /**
     * Calculate width to resize target element.
     * @param deltaX horizontal drag amount
     */
    calcDeltaX_(deltaX) {
        return this.resizeNextElement ? -deltaX : deltaX;
    }
    /**
     * Handles the mousedown event which starts the dragging of the splitter.
     */
    onMouseDown_(e) {
        if (e.button) {
            return;
        }
        this.startDrag(e.clientX, false);
        // Default action is to start selection and to move focus.
        e.preventDefault();
    }
    /**
     * Handles the touchstart event which starts the dragging of the splitter.
     */
    onTouchStart_(e) {
        if (e.touches.length === 1) {
            this.startDrag(e.touches[0].clientX, true);
            e.preventDefault();
        }
    }
    /**
     * Handles the mousemove event which moves the splitter as the user moves
     * the mouse.
     */
    handleMouseMove_(e) {
        this.handleMove_(e.clientX);
    }
    /**
     * Handles the touch move event.
     */
    handleTouchMove_(e) {
        if (e.touches.length === 1) {
            this.handleMove_(e.touches[0].clientX);
        }
    }
    /**
     * Common part of handling mousemove and touchmove. Calls splitter drag
     * move handler.
     * @param clientX X position of the mouse or touch event.
     */
    handleMove_(clientX) {
        const deltaX = this.matches(':host-context([dir=rtl]) cr-splitter') ?
            this.startX_ - clientX :
            clientX - this.startX_;
        this.handleSplitterDragMove_(deltaX);
    }
    /**
     * Handles the mouse up event which ends the dragging of the splitter.
     */
    handleMouseUp_(_e) {
        this.endDrag_();
    }
    /**
     * Handles start of the splitter dragging. Saves current width of the
     * element being resized.
     */
    handleSplitterDragStart_() {
        // Use the computed width style as the base so that we can ignore what
        // box sizing the element has. Add the difference between offset and
        // client widths to account for any scrollbars.
        const targetElement = this.getResizeTarget_();
        const doc = targetElement.ownerDocument;
        this.startWidth_ =
            parseFloat(doc.defaultView.getComputedStyle(targetElement).width) +
                targetElement.offsetWidth - targetElement.clientWidth;
        this.classList.add('splitter-active');
    }
    /**
     * Handles splitter moves. Updates width of the element being resized.
     * @param deltaX The change of splitter horizontal position.
     */
    handleSplitterDragMove_(deltaX) {
        const targetElement = this.getResizeTarget_();
        const newWidth = this.startWidth_ + this.calcDeltaX_(deltaX);
        targetElement.style.width = newWidth + 'px';
        this.dispatchEvent(new CustomEvent('dragmove'));
    }
    /**
     * Handles end of the splitter dragging. This fires a 'resize' event if the
     * size changed.
     */
    handleSplitterDragEnd_() {
        // Check if the size changed.
        const targetElement = this.getResizeTarget_();
        const doc = targetElement.ownerDocument;
        const computedWidth = parseFloat(doc.defaultView.getComputedStyle(targetElement).width);
        if (this.startWidth_ !== computedWidth) {
            this.dispatchEvent(new CustomEvent('resize'));
        }
        this.classList.remove('splitter-active');
    }
}
customElements.define(CrSplitterElement.is, CrSplitterElement);

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

let instance$z = null;
function getCss$q() {
    return instance$z || (instance$z = [...[], css `:host{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transform:translate3d(0,0,0)}.ripple{background-color:currentcolor;left:0;opacity:var(--paper-ripple-opacity,0.25);pointer-events:none;position:absolute;will-change:height,transform,width}.ripple,:host(.circle){border-radius:50%}`]);
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
        return getCss$q();
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

let instance$y = null;
function getCss$p() {
    return instance$y || (instance$y = [...[], css `:host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:32px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:none;overflow:hidden;pointer-events:auto;position:relative;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host(:hover:not([disabled])){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}#ink{--paper-ripple-opacity:1;color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([suppress-rtl-flip]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([suppress-rtl-flip])[multiple-icons_]) cr-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);pointer-events:none;position:relative;width:100%}cr-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color,none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$f() {
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
        return getCss$p();
    }
    render() {
        return getHtml$f.bind(this)();
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

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enumeration of valid drop locations relative to an element. These are
 * bit masks to allow combining multiple locations in a single value.
 */
var DropPosition;
(function (DropPosition) {
    DropPosition[DropPosition["NONE"] = 0] = "NONE";
    DropPosition[DropPosition["ABOVE"] = 1] = "ABOVE";
    DropPosition[DropPosition["ON"] = 2] = "ON";
    DropPosition[DropPosition["BELOW"] = 4] = "BELOW";
})(DropPosition || (DropPosition = {}));
// LINT.IfChange(Command)
/**
 * Commands which can be handled by the CommandManager. This enum is also used
 * for metrics and should be kept in sync with BookmarkManagerCommand in
 * enums.xml. Values must never be renumbered or reused.
 */
var Command;
(function (Command) {
    Command[Command["EDIT"] = 0] = "EDIT";
    // REMOVED_COPY_URL = 1  // Removed as being redundant with COPY
    Command[Command["SHOW_IN_FOLDER"] = 2] = "SHOW_IN_FOLDER";
    Command[Command["DELETE"] = 3] = "DELETE";
    Command[Command["OPEN_NEW_TAB"] = 4] = "OPEN_NEW_TAB";
    Command[Command["OPEN_NEW_WINDOW"] = 5] = "OPEN_NEW_WINDOW";
    Command[Command["OPEN_INCOGNITO"] = 6] = "OPEN_INCOGNITO";
    Command[Command["UNDO"] = 7] = "UNDO";
    Command[Command["REDO"] = 8] = "REDO";
    // OPEN triggers when you double-click an item. NOT USED FOR METRICS.
    Command[Command["OPEN"] = 9] = "OPEN";
    Command[Command["SELECT_ALL"] = 10] = "SELECT_ALL";
    Command[Command["DESELECT_ALL"] = 11] = "DESELECT_ALL";
    Command[Command["COPY"] = 12] = "COPY";
    Command[Command["CUT"] = 13] = "CUT";
    Command[Command["PASTE"] = 14] = "PASTE";
    Command[Command["SORT"] = 15] = "SORT";
    Command[Command["ADD_BOOKMARK"] = 16] = "ADD_BOOKMARK";
    Command[Command["ADD_FOLDER"] = 17] = "ADD_FOLDER";
    Command[Command["IMPORT"] = 18] = "IMPORT";
    Command[Command["EXPORT"] = 19] = "EXPORT";
    Command[Command["HELP_CENTER"] = 20] = "HELP_CENTER";
    // Added for more precise metrics purposes. OPEN is re-mapped to one of these.
    Command[Command["OPEN_BOOKMARK"] = 21] = "OPEN_BOOKMARK";
    Command[Command["OPEN_FOLDER"] = 22] = "OPEN_FOLDER";
    Command[Command["OPEN_SPLIT_VIEW"] = 23] = "OPEN_SPLIT_VIEW";
    Command[Command["OPEN_NEW_GROUP"] = 24] = "OPEN_NEW_GROUP";
    Command[Command["OPEN_ISOLATED"] = 25] = "OPEN_ISOLATED";
    // Append new values to the end of the enum.
    Command[Command["MAX_VALUE"] = 26] = "MAX_VALUE";
})(Command || (Command = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/bookmarks/enums.xml:BookmarkManagerCommand)
/**
 * Where the menu was opened from. Values must never be renumbered or reused.
 */
var MenuSource;
(function (MenuSource) {
    MenuSource[MenuSource["NONE"] = 0] = "NONE";
    MenuSource[MenuSource["ITEM"] = 1] = "ITEM";
    MenuSource[MenuSource["TREE"] = 2] = "TREE";
    MenuSource[MenuSource["TOOLBAR"] = 3] = "TOOLBAR";
    MenuSource[MenuSource["LIST"] = 4] = "LIST";
    // Append new values to the end of the enum.
    MenuSource[MenuSource["NUM_VALUES"] = 5] = "NUM_VALUES";
})(MenuSource || (MenuSource = {}));
/**
 * Mirrors the C++ enum from IncognitoModePrefs.
 */
var IncognitoAvailability;
(function (IncognitoAvailability) {
    IncognitoAvailability[IncognitoAvailability["ENABLED"] = 0] = "ENABLED";
    IncognitoAvailability[IncognitoAvailability["DISABLED"] = 1] = "DISABLED";
    IncognitoAvailability[IncognitoAvailability["FORCED"] = 2] = "FORCED";
})(IncognitoAvailability || (IncognitoAvailability = {}));
// LINT.IfChange(BookmarkPromoType)
/**
 * Mirrors the C++ BookmarkPromoType enum.
 */
var BookmarkPromoType;
(function (BookmarkPromoType) {
    BookmarkPromoType[BookmarkPromoType["NONE"] = 0] = "NONE";
    BookmarkPromoType[BookmarkPromoType["BATCH_UPLOAD"] = 1] = "BATCH_UPLOAD";
    BookmarkPromoType[BookmarkPromoType["ACCOUNT_AWARE_SIGNIN"] = 2] = "ACCOUNT_AWARE_SIGNIN";
})(BookmarkPromoType || (BookmarkPromoType = {}));
// LINT.ThenChange(//chrome/browser/ui/webui/bookmarks/bookmark_promo_delegate.h:BookmarkPromoType)
const LOCAL_STORAGE_FOLDER_STATE_KEY = 'folderOpenState';
const LOCAL_STORAGE_TREE_WIDTH_KEY = 'treeWidth';
const ROOT_NODE_ID = '0';
// The IDs of the heading nodes that may be inserted into the tree.
const ACCOUNT_HEADING_NODE_ID = 'account_heading';
const LOCAL_HEADING_NODE_ID = 'local_heading';
const OPEN_CONFIRMATION_LIMIT = 15;
// Maximum allowed length for a bookmark URL and title.
// Limit to 500KB to match Chrome address bar (Omnibox) behavior.
const MAX_BOOKMARK_INPUT_LENGTH = 500 * 1024;

// mojo/public/mojom/base/empty.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EmptySpec = { $: {} };
mojo.internal.Struct(EmptySpec.$, 'Empty', [], [[0, 8],]);

// mojo/public/mojom/base/error.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CodeSpec = { $: mojo.internal.Enum() };
var Code;
(function (Code) {
    Code[Code["MIN_VALUE"] = 1] = "MIN_VALUE";
    Code[Code["MAX_VALUE"] = 16] = "MAX_VALUE";
    Code[Code["kCancelled"] = 1] = "kCancelled";
    Code[Code["kUnknown"] = 2] = "kUnknown";
    Code[Code["kInvalidArgument"] = 3] = "kInvalidArgument";
    Code[Code["kDeadlineExceeded"] = 4] = "kDeadlineExceeded";
    Code[Code["kNotFound"] = 5] = "kNotFound";
    Code[Code["kAlreadyExists"] = 6] = "kAlreadyExists";
    Code[Code["kPermissionDenied"] = 7] = "kPermissionDenied";
    Code[Code["kResourceExhausted"] = 8] = "kResourceExhausted";
    Code[Code["kFailedPrecondition"] = 9] = "kFailedPrecondition";
    Code[Code["kAborted"] = 10] = "kAborted";
    Code[Code["kOutOfRange"] = 11] = "kOutOfRange";
    Code[Code["kUnimplemented"] = 12] = "kUnimplemented";
    Code[Code["kInternal"] = 13] = "kInternal";
    Code[Code["kUnavailable"] = 14] = "kUnavailable";
    Code[Code["kDataLoss"] = 15] = "kDataLoss";
    Code[Code["kUnauthenticated"] = 16] = "kUnauthenticated";
})(Code || (Code = {}));
const ErrorSpec = { $: {} };
mojo.internal.Struct(ErrorSpec.$, 'Error', [
    mojo.internal.StructField('code', 0, 0, CodeSpec.$, 1, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);

// mojo/public/mojom/base/uuid.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UuidSpec = { $: {} };
mojo.internal.Struct(UuidSpec.$, 'Uuid', [
    mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
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
const UrlSpec$1 = { $: {} };
const converterForUrl = new UrlConverter();
mojo.internal.TypemappedStruct(UrlSpec$1.$, 'Url', UrlDataView, converterForUrl, [
    mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, ((value) => converterForUrl.url(value))),
], [[0, 16],]);

// components/browser_apis/bookmarks/bookmarks_api.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PermanentFolderTypeSpec = { $: mojo.internal.Enum() };
var PermanentFolderType;
(function (PermanentFolderType) {
    PermanentFolderType[PermanentFolderType["MIN_VALUE"] = 0] = "MIN_VALUE";
    PermanentFolderType[PermanentFolderType["MAX_VALUE"] = 4] = "MAX_VALUE";
    PermanentFolderType[PermanentFolderType["kUnknown"] = 0] = "kUnknown";
    PermanentFolderType[PermanentFolderType["kBookmarkBar"] = 1] = "kBookmarkBar";
    PermanentFolderType[PermanentFolderType["kOther"] = 2] = "kOther";
    PermanentFolderType[PermanentFolderType["kMobile"] = 3] = "kMobile";
    PermanentFolderType[PermanentFolderType["kManaged"] = 4] = "kManaged";
})(PermanentFolderType || (PermanentFolderType = {}));
class BookmarksObserverPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'bookmarks_api.mojom.BookmarksObserver', scope);
    }
}
class BookmarksObserverRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(BookmarksObserverPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    onBookmarksEvents(events) {
        this.proxy.sendMessage(0, BookmarksObserver_OnBookmarksEvents_ParamsSpec.$, null, [
            events
        ], false);
    }
}
/**
 * An object which receives request messages for the BookmarksObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class BookmarksObserverReceiver {
    helper_internal_;
    $;
    onConnectionError;
    constructor(impl) {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(BookmarksObserverRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.helper_internal_.registerHandler(0, BookmarksObserver_OnBookmarksEvents_ParamsSpec.$, null, impl.onBookmarksEvents.bind(impl), false);
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
}
class BookmarksServicePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'bookmarks_api.mojom.BookmarksService', scope);
    }
}
class BookmarksServiceRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(BookmarksServicePendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    getBookmarks() {
        return this.proxy.sendMessage(0, BookmarksService_GetBookmarks_ParamsSpec.$, BookmarksService_GetBookmarks_ResponseParamsSpec.$, [], true);
    }
    getBookmark(id) {
        return this.proxy.sendMessage(1, BookmarksService_GetBookmark_ParamsSpec.$, BookmarksService_GetBookmark_ResponseParamsSpec.$, [
            id
        ], true);
    }
    createBookmarkNode(parentId, index, node) {
        return this.proxy.sendMessage(2, BookmarksService_CreateBookmarkNode_ParamsSpec.$, BookmarksService_CreateBookmarkNode_ResponseParamsSpec.$, [
            parentId,
            index,
            node
        ], true);
    }
    updateBookmarkNode(node) {
        return this.proxy.sendMessage(3, BookmarksService_UpdateBookmarkNode_ParamsSpec.$, BookmarksService_UpdateBookmarkNode_ResponseParamsSpec.$, [
            node
        ], true);
    }
    moveBookmarkNode(id, newParentId, index) {
        return this.proxy.sendMessage(4, BookmarksService_MoveBookmarkNode_ParamsSpec.$, BookmarksService_MoveBookmarkNode_ResponseParamsSpec.$, [
            id,
            newParentId,
            index
        ], true);
    }
    deleteBookmarkNodes(ids) {
        return this.proxy.sendMessage(5, BookmarksService_DeleteBookmarkNodes_ParamsSpec.$, BookmarksService_DeleteBookmarkNodes_ResponseParamsSpec.$, [
            ids
        ], true);
    }
}
class BookmarksService {
    static get $interfaceName() {
        return "bookmarks_api.mojom.BookmarksService";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new BookmarksServiceRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
const LegacyFieldsSpec = { $: {} };
const RootNodeSpec = { $: {} };
const UrlSpec = { $: {} };
const FolderSpec = { $: {} };
const BookmarksSnapshotSpec = { $: {} };
const BookmarkNodeCreatedSpec = { $: {} };
const BookmarkNodeRemovedSpec = { $: {} };
const BookmarkNodeMovedSpec = { $: {} };
const BookmarkNodeChangedSpec = { $: {} };
const BookmarksObserver_OnBookmarksEvents_ParamsSpec = { $: {} };
const BookmarksService_GetBookmarks_ParamsSpec = { $: {} };
const BookmarksService_GetBookmarks_ResponseParamsSpec = { $: {} };
const BookmarksService_GetBookmark_ParamsSpec = { $: {} };
const BookmarksService_GetBookmark_ResponseParamsSpec = { $: {} };
const BookmarksService_CreateBookmarkNode_ParamsSpec = { $: {} };
const BookmarksService_CreateBookmarkNode_ResponseParamsSpec = { $: {} };
const BookmarksService_UpdateBookmarkNode_ParamsSpec = { $: {} };
const BookmarksService_UpdateBookmarkNode_ResponseParamsSpec = { $: {} };
const BookmarksService_MoveBookmarkNode_ParamsSpec = { $: {} };
const BookmarksService_MoveBookmarkNode_ResponseParamsSpec = { $: {} };
const BookmarksService_DeleteBookmarkNodes_ParamsSpec = { $: {} };
const BookmarksService_DeleteBookmarkNodes_ResponseParamsSpec = { $: {} };
const BookmarkNodeSpec = { $: {} };
const BookmarksEventSpec = { $: {} };
const BookmarksService_GetBookmarks_ResponseParam_ResultSpec = { $: {} };
const BookmarksService_GetBookmark_ResponseParam_ResultSpec = { $: {} };
const BookmarksService_CreateBookmarkNode_ResponseParam_ResultSpec = { $: {} };
const BookmarksService_UpdateBookmarkNode_ResponseParam_ResultSpec = { $: {} };
const BookmarksService_MoveBookmarkNode_ResponseParam_ResultSpec = { $: {} };
const BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultSpec = { $: {} };
mojo.internal.Struct(LegacyFieldsSpec.$, 'LegacyFields', [
    mojo.internal.StructField('id_$flag', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "id_$value",
        originalFieldName: "id",
    }, undefined),
    mojo.internal.StructField('id_$value', 8, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "id",
    }, undefined),
], [[0, 24],]);
mojo.internal.Struct(RootNodeSpec.$, 'RootNode', [
    mojo.internal.StructField('id', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('children', 8, 0, mojo.internal.Array(FolderSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(UrlSpec.$, 'Url', [
    mojo.internal.StructField('id', 0, 0, UuidSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('legacy', 8, 0, LegacyFieldsSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 24, 0, UrlSpec$1.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('faviconUrl', 32, 0, UrlSpec$1.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isSynced', 40, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 56],]);
mojo.internal.Struct(FolderSpec.$, 'Folder', [
    mojo.internal.StructField('id', 0, 0, UuidSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('legacy', 8, 0, LegacyFieldsSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('children', 24, 0, mojo.internal.Array(BookmarkNodeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('permanent_folder_type_$flag', 32, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "permanent_folder_type_$value",
        originalFieldName: "permanentFolderType",
    }, undefined),
    mojo.internal.StructField('permanent_folder_type_$value', 36, 0, PermanentFolderTypeSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "permanentFolderType",
    }, undefined),
    mojo.internal.StructField('isSynced', 32, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(BookmarksSnapshotSpec.$, 'BookmarksSnapshot', [
    mojo.internal.StructField('root', 0, 0, RootNodeSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('stream', 8, 0, mojo.internal.AssociatedInterfaceRequest(BookmarksObserverPendingReceiver), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(BookmarkNodeCreatedSpec.$, 'BookmarkNodeCreated', [
    mojo.internal.StructField('parentId', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('index', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('node', 16, 0, BookmarkNodeSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(BookmarkNodeRemovedSpec.$, 'BookmarkNodeRemoved', [
    mojo.internal.StructField('id', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(BookmarkNodeMovedSpec.$, 'BookmarkNodeMoved', [
    mojo.internal.StructField('oldParentId', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('oldIndex', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('newParentId', 16, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('newIndex', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(BookmarkNodeChangedSpec.$, 'BookmarkNodeChanged', [
    mojo.internal.StructField('node', 0, 0, BookmarkNodeSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(BookmarksObserver_OnBookmarksEvents_ParamsSpec.$, 'BookmarksObserver_OnBookmarksEvents_Params', [
    mojo.internal.StructField('events', 0, 0, mojo.internal.Array(BookmarksEventSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(BookmarksService_GetBookmarks_ParamsSpec.$, 'BookmarksService_GetBookmarks_Params', [], [[0, 8],]);
mojo.internal.Struct(BookmarksService_GetBookmarks_ResponseParamsSpec.$, 'BookmarksService_GetBookmarks_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, BookmarksService_GetBookmarks_ResponseParam_ResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(BookmarksService_GetBookmark_ParamsSpec.$, 'BookmarksService_GetBookmark_Params', [
    mojo.internal.StructField('id', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(BookmarksService_GetBookmark_ResponseParamsSpec.$, 'BookmarksService_GetBookmark_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, BookmarksService_GetBookmark_ResponseParam_ResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(BookmarksService_CreateBookmarkNode_ParamsSpec.$, 'BookmarksService_CreateBookmarkNode_Params', [
    mojo.internal.StructField('parentId', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('index_$flag', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "index_$value",
        originalFieldName: "index",
    }, undefined),
    mojo.internal.StructField('index_$value', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "index",
    }, undefined),
    mojo.internal.StructField('node', 16, 0, BookmarkNodeSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(BookmarksService_CreateBookmarkNode_ResponseParamsSpec.$, 'BookmarksService_CreateBookmarkNode_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, BookmarksService_CreateBookmarkNode_ResponseParam_ResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(BookmarksService_UpdateBookmarkNode_ParamsSpec.$, 'BookmarksService_UpdateBookmarkNode_Params', [
    mojo.internal.StructField('node', 0, 0, BookmarkNodeSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(BookmarksService_UpdateBookmarkNode_ResponseParamsSpec.$, 'BookmarksService_UpdateBookmarkNode_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, BookmarksService_UpdateBookmarkNode_ResponseParam_ResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(BookmarksService_MoveBookmarkNode_ParamsSpec.$, 'BookmarksService_MoveBookmarkNode_Params', [
    mojo.internal.StructField('id', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('newParentId', 8, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('index_$flag', 16, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "index_$value",
        originalFieldName: "index",
    }, undefined),
    mojo.internal.StructField('index_$value', 20, 0, mojo.internal.Int32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "index",
    }, undefined),
], [[0, 32],]);
mojo.internal.Struct(BookmarksService_MoveBookmarkNode_ResponseParamsSpec.$, 'BookmarksService_MoveBookmarkNode_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, BookmarksService_MoveBookmarkNode_ResponseParam_ResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(BookmarksService_DeleteBookmarkNodes_ParamsSpec.$, 'BookmarksService_DeleteBookmarkNodes_Params', [
    mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(UuidSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(BookmarksService_DeleteBookmarkNodes_ResponseParamsSpec.$, 'BookmarksService_DeleteBookmarkNodes_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Union(BookmarkNodeSpec.$, 'BookmarkNode', {
    'url': {
        'ordinal': 0,
        'type': UrlSpec.$,
    },
    'folder': {
        'ordinal': 1,
        'type': FolderSpec.$,
    },
});
var BookmarkNodeFieldTags;
(function (BookmarkNodeFieldTags) {
    BookmarkNodeFieldTags[BookmarkNodeFieldTags["URL"] = 0] = "URL";
    BookmarkNodeFieldTags[BookmarkNodeFieldTags["FOLDER"] = 1] = "FOLDER";
})(BookmarkNodeFieldTags || (BookmarkNodeFieldTags = {}));
mojo.internal.Union(BookmarksEventSpec.$, 'BookmarksEvent', {
    'added': {
        'ordinal': 0,
        'type': BookmarkNodeCreatedSpec.$,
    },
    'removed': {
        'ordinal': 1,
        'type': BookmarkNodeRemovedSpec.$,
    },
    'moved': {
        'ordinal': 2,
        'type': BookmarkNodeMovedSpec.$,
    },
    'changed': {
        'ordinal': 3,
        'type': BookmarkNodeChangedSpec.$,
    },
});
var BookmarksEventFieldTags;
(function (BookmarksEventFieldTags) {
    BookmarksEventFieldTags[BookmarksEventFieldTags["ADDED"] = 0] = "ADDED";
    BookmarksEventFieldTags[BookmarksEventFieldTags["REMOVED"] = 1] = "REMOVED";
    BookmarksEventFieldTags[BookmarksEventFieldTags["MOVED"] = 2] = "MOVED";
    BookmarksEventFieldTags[BookmarksEventFieldTags["CHANGED"] = 3] = "CHANGED";
})(BookmarksEventFieldTags || (BookmarksEventFieldTags = {}));
function whichBookmarksEvent(u) {
    if (u.added !== null && u.added !== undefined) {
        return BookmarksEventFieldTags.ADDED;
    }
    if (u.removed !== null && u.removed !== undefined) {
        return BookmarksEventFieldTags.REMOVED;
    }
    if (u.moved !== null && u.moved !== undefined) {
        return BookmarksEventFieldTags.MOVED;
    }
    if (u.changed !== null && u.changed !== undefined) {
        return BookmarksEventFieldTags.CHANGED;
    }
    throw new Error("no union field has been set, this is an illegal state");
}
mojo.internal.Union(BookmarksService_GetBookmarks_ResponseParam_ResultSpec.$, 'BookmarksService_GetBookmarks_ResponseParam_Result', {
    'success': {
        'ordinal': 0,
        'type': BookmarksSnapshotSpec.$,
    },
    'failure': {
        'ordinal': 1,
        'type': ErrorSpec.$,
    },
});
var BookmarksService_GetBookmarks_ResponseParam_ResultFieldTags;
(function (BookmarksService_GetBookmarks_ResponseParam_ResultFieldTags) {
    BookmarksService_GetBookmarks_ResponseParam_ResultFieldTags[BookmarksService_GetBookmarks_ResponseParam_ResultFieldTags["SUCCESS"] = 0] = "SUCCESS";
    BookmarksService_GetBookmarks_ResponseParam_ResultFieldTags[BookmarksService_GetBookmarks_ResponseParam_ResultFieldTags["FAILURE"] = 1] = "FAILURE";
})(BookmarksService_GetBookmarks_ResponseParam_ResultFieldTags || (BookmarksService_GetBookmarks_ResponseParam_ResultFieldTags = {}));
mojo.internal.Union(BookmarksService_GetBookmark_ResponseParam_ResultSpec.$, 'BookmarksService_GetBookmark_ResponseParam_Result', {
    'success': {
        'ordinal': 0,
        'type': BookmarkNodeSpec.$,
    },
    'failure': {
        'ordinal': 1,
        'type': ErrorSpec.$,
    },
});
var BookmarksService_GetBookmark_ResponseParam_ResultFieldTags;
(function (BookmarksService_GetBookmark_ResponseParam_ResultFieldTags) {
    BookmarksService_GetBookmark_ResponseParam_ResultFieldTags[BookmarksService_GetBookmark_ResponseParam_ResultFieldTags["SUCCESS"] = 0] = "SUCCESS";
    BookmarksService_GetBookmark_ResponseParam_ResultFieldTags[BookmarksService_GetBookmark_ResponseParam_ResultFieldTags["FAILURE"] = 1] = "FAILURE";
})(BookmarksService_GetBookmark_ResponseParam_ResultFieldTags || (BookmarksService_GetBookmark_ResponseParam_ResultFieldTags = {}));
mojo.internal.Union(BookmarksService_CreateBookmarkNode_ResponseParam_ResultSpec.$, 'BookmarksService_CreateBookmarkNode_ResponseParam_Result', {
    'success': {
        'ordinal': 0,
        'type': BookmarkNodeSpec.$,
    },
    'failure': {
        'ordinal': 1,
        'type': ErrorSpec.$,
    },
});
var BookmarksService_CreateBookmarkNode_ResponseParam_ResultFieldTags;
(function (BookmarksService_CreateBookmarkNode_ResponseParam_ResultFieldTags) {
    BookmarksService_CreateBookmarkNode_ResponseParam_ResultFieldTags[BookmarksService_CreateBookmarkNode_ResponseParam_ResultFieldTags["SUCCESS"] = 0] = "SUCCESS";
    BookmarksService_CreateBookmarkNode_ResponseParam_ResultFieldTags[BookmarksService_CreateBookmarkNode_ResponseParam_ResultFieldTags["FAILURE"] = 1] = "FAILURE";
})(BookmarksService_CreateBookmarkNode_ResponseParam_ResultFieldTags || (BookmarksService_CreateBookmarkNode_ResponseParam_ResultFieldTags = {}));
mojo.internal.Union(BookmarksService_UpdateBookmarkNode_ResponseParam_ResultSpec.$, 'BookmarksService_UpdateBookmarkNode_ResponseParam_Result', {
    'success': {
        'ordinal': 0,
        'type': BookmarkNodeSpec.$,
    },
    'failure': {
        'ordinal': 1,
        'type': ErrorSpec.$,
    },
});
var BookmarksService_UpdateBookmarkNode_ResponseParam_ResultFieldTags;
(function (BookmarksService_UpdateBookmarkNode_ResponseParam_ResultFieldTags) {
    BookmarksService_UpdateBookmarkNode_ResponseParam_ResultFieldTags[BookmarksService_UpdateBookmarkNode_ResponseParam_ResultFieldTags["SUCCESS"] = 0] = "SUCCESS";
    BookmarksService_UpdateBookmarkNode_ResponseParam_ResultFieldTags[BookmarksService_UpdateBookmarkNode_ResponseParam_ResultFieldTags["FAILURE"] = 1] = "FAILURE";
})(BookmarksService_UpdateBookmarkNode_ResponseParam_ResultFieldTags || (BookmarksService_UpdateBookmarkNode_ResponseParam_ResultFieldTags = {}));
mojo.internal.Union(BookmarksService_MoveBookmarkNode_ResponseParam_ResultSpec.$, 'BookmarksService_MoveBookmarkNode_ResponseParam_Result', {
    'success': {
        'ordinal': 0,
        'type': EmptySpec.$,
    },
    'failure': {
        'ordinal': 1,
        'type': ErrorSpec.$,
    },
});
var BookmarksService_MoveBookmarkNode_ResponseParam_ResultFieldTags;
(function (BookmarksService_MoveBookmarkNode_ResponseParam_ResultFieldTags) {
    BookmarksService_MoveBookmarkNode_ResponseParam_ResultFieldTags[BookmarksService_MoveBookmarkNode_ResponseParam_ResultFieldTags["SUCCESS"] = 0] = "SUCCESS";
    BookmarksService_MoveBookmarkNode_ResponseParam_ResultFieldTags[BookmarksService_MoveBookmarkNode_ResponseParam_ResultFieldTags["FAILURE"] = 1] = "FAILURE";
})(BookmarksService_MoveBookmarkNode_ResponseParam_ResultFieldTags || (BookmarksService_MoveBookmarkNode_ResponseParam_ResultFieldTags = {}));
mojo.internal.Union(BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultSpec.$, 'BookmarksService_DeleteBookmarkNodes_ResponseParam_Result', {
    'success': {
        'ordinal': 0,
        'type': EmptySpec.$,
    },
    'failure': {
        'ordinal': 1,
        'type': ErrorSpec.$,
    },
});
var BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultFieldTags;
(function (BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultFieldTags) {
    BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultFieldTags[BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultFieldTags["SUCCESS"] = 0] = "SUCCESS";
    BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultFieldTags[BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultFieldTags["FAILURE"] = 1] = "FAILURE";
})(BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultFieldTags || (BookmarksService_DeleteBookmarkNodes_ResponseParam_ResultFieldTags = {}));

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Utility functions for the Bookmarks page.
 */
function getDisplayedList(state) {
    if (isShowingSearch(state)) {
        assert(state.search.results);
        return state.search.results;
    }
    const selectedNode = state.nodes[state.selectedFolder];
    assert(selectedNode);
    const children = selectedNode.children;
    assert(children);
    return children;
}
function getDefaultSelectedFolder(nodes) {
    const selectedFolderParent = nodes[ACCOUNT_HEADING_NODE_ID] || nodes[ROOT_NODE_ID];
    assert(selectedFolderParent);
    assert(selectedFolderParent.children);
    let selectedFolder = '';
    // Select the account bookmarks bar if it exists. If not, use the local
    // bookmarks bar.
    for (const id of selectedFolderParent.children) {
        const node = nodes[id];
        assert(node);
        if (node.permanentFolderType === PermanentFolderType.kBookmarkBar) {
            selectedFolder = id;
            if (node.isSynced) {
                // If this is the account bookmarks bar, stop immediately so it
                // takes precedence over the local counterpart.
                break;
            }
        }
    }
    assert(selectedFolder);
    return selectedFolder;
}
function normalizeMojoRootNode(mojoRoot) {
    return {
        id: ROOT_NODE_ID,
        title: '',
        isSynced: false,
        children: mojoRoot.children.map(child => child.id.value),
    };
}
function normalizeMojoNode(mojoNode, parentId) {
    if (mojoNode.url) {
        const urlNode = mojoNode.url;
        const result = {
            id: urlNode.id.value,
            title: urlNode.title,
            url: urlNode.url,
            parentId: parentId,
            isSynced: urlNode.isSynced,
        };
        if (urlNode.legacy?.id !== undefined && urlNode.legacy?.id !== null) {
            result.legacyId = Number(urlNode.legacy.id);
        }
        return result;
    }
    if (mojoNode.folder) {
        const folderNode = mojoNode.folder;
        const result = {
            id: folderNode.id?.value || '',
            title: folderNode.title,
            children: folderNode.children.map(child => {
                return child.url?.id?.value || child.folder?.id?.value || '';
            }),
            parentId: parentId,
            isSynced: folderNode.isSynced,
        };
        if (folderNode.permanentFolderType !== null &&
            folderNode.permanentFolderType !== undefined &&
            folderNode.permanentFolderType !== PermanentFolderType.kUnknown) {
            result.permanentFolderType = folderNode.permanentFolderType;
        }
        if (folderNode.legacy?.id !== undefined && folderNode.legacy?.id !== null) {
            result.legacyId = Number(folderNode.legacy.id);
        }
        return result;
    }
    assertNotReached();
}
/**
 * Converts a storage BookmarkNode to a MojoBookmarkNode.
 * Inverse of normalizeMojoNode.
 */
function toMojoNode(node) {
    const id = node.id ? { value: node.id } : null;
    const title = node.title;
    const isSynced = node.isSynced ?? false;
    const legacy = node.legacyId !== undefined ? { id: BigInt(node.legacyId) } : null;
    if (node.url !== undefined) {
        return {
            url: {
                id: id,
                title: title,
                url: node.url,
                faviconUrl: null,
                isSynced: isSynced,
                legacy: legacy,
            },
        };
    }
    return {
        folder: {
            id: id,
            title: title,
            children: [],
            permanentFolderType: node.permanentFolderType ?? null,
            isSynced: isSynced,
            legacy: legacy,
        },
    };
}
function hasBothLocalAndAccountBookmarksBar(nodes) {
    return nodes.some(child => child.permanentFolderType ===
        PermanentFolderType.kBookmarkBar &&
        child.isSynced) &&
        nodes.some(child => child.permanentFolderType === PermanentFolderType.kBookmarkBar &&
            !child.isSynced);
}
function buildAccountHeadingNode() {
    return {
        id: ACCOUNT_HEADING_NODE_ID,
        title: loadTimeData.getString('accountBookmarksTitle'),
        parentId: ROOT_NODE_ID,
        children: [],
    };
}
function buildLocalHeadingNode() {
    return {
        id: LOCAL_HEADING_NODE_ID,
        title: loadTimeData.getString('localBookmarksTitle'),
        parentId: ROOT_NODE_ID,
        children: [],
    };
}
function normalizeNodes(rootNode) {
    const nodeMap = {};
    const stack = [];
    const normalizedRoot = normalizeMojoRootNode(rootNode);
    nodeMap[normalizedRoot.id] = normalizedRoot;
    const addHeadingNodes = hasBothLocalAndAccountBookmarksBar(rootNode.children);
    if (addHeadingNodes) {
        normalizedRoot.children = [];
        for (const headingNode of [buildAccountHeadingNode(), buildLocalHeadingNode()]) {
            nodeMap[headingNode.id] = headingNode;
            normalizedRoot.children.push(headingNode.id);
        }
    }
    rootNode.children.forEach(child => {
        let parentId = normalizedRoot.id;
        if (addHeadingNodes) {
            parentId =
                child.isSynced ? ACCOUNT_HEADING_NODE_ID : LOCAL_HEADING_NODE_ID;
            nodeMap[parentId].children.push(child.id?.value || '');
        }
        stack.push({ node: { folder: child }, parentId: parentId });
    });
    while (stack.length > 0) {
        const { node, parentId } = stack.pop();
        const normalized = normalizeMojoNode(node, parentId);
        nodeMap[normalized.id] = normalized;
        const folder = node.folder;
        if (folder && folder.children) {
            folder.children.forEach(child => {
                stack.push({ node: child, parentId: normalized.id });
            });
        }
    }
    return nodeMap;
}
function createEmptyState() {
    return {
        nodes: {},
        selectedFolder: '',
        folderOpenState: new Map(),
        prefs: {
            canEdit: true,
            incognitoAvailability: IncognitoAvailability.ENABLED,
        },
        search: {
            term: '',
            inProgress: false,
            results: null,
        },
        selection: {
            items: new Set(),
            anchor: null,
        },
    };
}
function isShowingSearch(state) {
    return state.search.results != null;
}
function isManaged(nodes, itemId) {
    let id = itemId;
    while (id) {
        const node = nodes[id];
        if (!node) {
            break;
        }
        if (node.permanentFolderType === PermanentFolderType.kManaged) {
            return true;
        }
        id = node.parentId || '';
    }
    return false;
}
/**
 * Returns true if the node with ID |itemId| is modifiable, allowing
 * the node to be renamed, moved or deleted. Note that if a node is
 * uneditable, it may still have editable children (for example, the top-level
 * folders).
 */
function canEditNode(state, itemId) {
    return !isRootOrChildOfRoot(state, itemId) && !!state.nodes[itemId] &&
        !isManaged(state.nodes, itemId) && state.prefs.canEdit;
}
/**
 * Returns true if it is possible to modify the children list of the node with
 * ID |itemId|. This includes rearranging the children or adding new ones.
 */
function canReorderChildren(state, itemId) {
    return !isRootNode(itemId) && !!state.nodes[itemId] &&
        !isManaged(state.nodes, itemId) && state.prefs.canEdit;
}
function hasChildFolders(id, nodes) {
    if (!nodes[id] || !nodes[id].children) {
        return false;
    }
    const children = nodes[id].children;
    for (let i = 0; i < children.length; i++) {
        if (nodes[children[i]]?.children) {
            return true;
        }
    }
    return false;
}
function getDescendants(nodes, baseId) {
    const descendants = new Set();
    const stack = [];
    stack.push(baseId);
    while (stack.length > 0) {
        const id = stack.pop();
        const node = nodes[id];
        if (!node) {
            continue;
        }
        descendants.add(id);
        if (!node.children) {
            continue;
        }
        node.children.forEach(function (childId) {
            stack.push(childId);
        });
    }
    return descendants;
}
function removeIdsFromObject(map, ids) {
    const newObject = Object.assign({}, map);
    ids.forEach(function (id) {
        delete newObject[id];
    });
    return newObject;
}
function removeIdsFromMap(map, ids) {
    const newMap = new Map(map);
    ids.forEach(function (id) {
        newMap.delete(id);
    });
    return newMap;
}
function removeIdsFromSet(set, ids) {
    const difference = new Set(set);
    ids.forEach(function (id) {
        difference.delete(id);
    });
    return difference;
}
// Whether this is either the root node, or one of the account/local heading
// nodes.
function isRootNode(itemId) {
    const rootNodesIds = new Set([ROOT_NODE_ID, ACCOUNT_HEADING_NODE_ID, LOCAL_HEADING_NODE_ID]);
    return rootNodesIds.has(itemId);
}
/**
 * Whether the node with ID `itemId` satisfies `isRootNode()`, or its parent
 * satisfies `isRootNode()`.
 */
function isRootOrChildOfRoot(state, itemId) {
    if (isRootNode(itemId)) {
        return true;
    }
    const node = state.nodes[itemId];
    if (!node) {
        return false;
    }
    assert(node.parentId);
    return isRootNode(node.parentId);
}
/**
 * Flattens the bookmark hierarchy into an ordered array of BookmarkNodes
 * in hierarchical (pre-order depth-first) order. Root and permanent folder
 * container nodes are excluded from the result list.
 */
function flattenNodes(nodes, baseId = ROOT_NODE_ID) {
    const flattened = [];
    function traverse(id) {
        const node = nodes[id];
        if (!node) {
            return;
        }
        if (!isRootNode(node.id) && node.permanentFolderType === undefined) {
            flattened.push(node);
        }
        if (node.children) {
            for (const childId of node.children) {
                traverse(childId);
            }
        }
    }
    traverse(baseId);
    return flattened;
}
function searchBookmarks(nodes, term) {
    const tokens = term.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    if (tokens.length === 0) {
        return [];
    }
    return flattenNodes(nodes).filter(node => {
        const title = node.title.toLowerCase();
        const url = node.url ? node.url.toLowerCase() : '';
        return tokens.every(token => title.includes(token) || (!!url && url.includes(token)));
    });
}
function getLegacyId(node) {
    // This is mainly to work around the annoying redux store lookup, which might
    // yield undefined for an id. Once we move off of this, we don't need this
    // shim anymore.
    assert(!!node && (!!node.legacyId || node.legacyId === 0));
    return node.legacyId.toString();
}
/**
 * Returns the id of the node whose legacy (numeric) id matches `legacyId`, or
 * null if there is no such node. Used to support URLs such as
 * chrome://bookmarks/?id=123 which are generated by the browser (e.g. the
 * "Bookmark manager" context menu entry) or saved by users before node ids
 * were migrated to UUIDs.
 */
function findIdByLegacyId(nodes, legacyId) {
    const numericId = Number(legacyId);
    if (Number.isNaN(numericId)) {
        return null;
    }
    for (const node of Object.values(nodes)) {
        if (node.legacyId === numericId) {
            return node.id;
        }
    }
    return null;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function createBookmark$1(parentId, parentIndex, node) {
    return {
        name: 'create-bookmark',
        id: node.id,
        parentId: parentId,
        parentIndex: parentIndex,
        node: node,
    };
}
function editBookmark$1(id, changeInfo) {
    return {
        name: 'edit-bookmark',
        id: id,
        changeInfo: changeInfo,
    };
}
function moveBookmark$1(id, parentId, index, oldParentId, oldIndex) {
    return {
        name: 'move-bookmark',
        id: id,
        parentId: parentId,
        index: index,
        oldParentId: oldParentId,
        oldIndex: oldIndex,
    };
}
function reorderChildren$1(id, newChildIds) {
    return {
        name: 'reorder-children',
        id: id,
        children: newChildIds,
    };
}
function removeBookmark$1(id, parentId, index, nodes) {
    const descendants = getDescendants(nodes, id);
    return {
        name: 'remove-bookmark',
        id: id,
        descendants: descendants,
        parentId: parentId,
        index: index,
    };
}
function refreshNodes(nodeMap) {
    return {
        name: 'refresh-nodes',
        nodes: nodeMap,
    };
}
function selectFolder(id, nodes) {
    if (nodes && (id === ROOT_NODE_ID || !nodes[id] || nodes[id].url)) {
        console.warn('Tried to select invalid folder: ' + id);
        return null;
    }
    return {
        name: 'select-folder',
        id: id,
    };
}
function changeFolderOpen$1(id, open) {
    return {
        name: 'change-folder-open',
        id: id,
        open: open,
    };
}
function clearSearch$1() {
    return {
        name: 'clear-search',
    };
}
function deselectItems$1() {
    return {
        name: 'deselect-items',
    };
}
function selectItem(id, state, config) {
    assert(!config.toggle || !config.range);
    assert(!config.toggle || !config.clear);
    const anchor = state.selection.anchor;
    const toSelect = [];
    let newAnchor = id;
    if (config.range && anchor) {
        const displayedList = getDisplayedList(state);
        const selectedIndex = displayedList.indexOf(id);
        assert(selectedIndex !== -1);
        let anchorIndex = displayedList.indexOf(anchor);
        if (anchorIndex === -1) {
            anchorIndex = selectedIndex;
        }
        // When performing a range selection, don't change the anchor from what
        // was used in this selection.
        newAnchor = displayedList[anchorIndex];
        const startIndex = Math.min(anchorIndex, selectedIndex);
        const endIndex = Math.max(anchorIndex, selectedIndex);
        for (let i = startIndex; i <= endIndex; i++) {
            toSelect.push(displayedList[i]);
        }
    }
    else {
        toSelect.push(id);
    }
    return {
        name: 'select-items',
        clear: config.clear,
        toggle: config.toggle,
        anchor: newAnchor,
        items: toSelect,
    };
}
function selectAll(ids, state, anchor) {
    const finalAnchor = anchor ? anchor : state.selection.anchor;
    return {
        name: 'select-items',
        clear: true,
        toggle: false,
        anchor: finalAnchor,
        items: ids,
    };
}
function updateAnchor$1(id) {
    return {
        name: 'update-anchor',
        anchor: id,
    };
}
function setSearchTerm(term) {
    if (!term) {
        return clearSearch$1();
    }
    return {
        name: 'start-search',
        term: term,
    };
}
function setSearchResults(ids) {
    return {
        name: 'finish-search',
        results: ids,
    };
}
function setIncognitoAvailability(availability) {
    assert(availability !== IncognitoAvailability.FORCED);
    return {
        name: 'set-incognito-availability',
        value: availability,
    };
}
function setCanEditBookmarks(canEdit) {
    return {
        name: 'set-can-edit',
        value: canEdit,
    };
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

let instance$x = null;
function getCss$o() {
    return instance$x || (instance$x = [...[], css `:host{--cr-hairline:1px solid var(--color-menu-separator,var(--cr-fallback-color-divider));--cr-action-menu-disabled-item-color:var(--color-menu-item-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-action-menu-disabled-item-opacity:1;--cr-menu-background-color:var(--color-menu-background,var(--cr-fallback-color-surface));--cr-menu-background-focus-color:var(--cr-hover-background-color);--cr-menu-shadow:var(--cr-elevation-2);--cr-primary-text-color:var(--color-menu-item-foreground,var(--cr-fallback-color-on-surface))}:host dialog{background-color:var(--cr-menu-background-color);border:none;border-radius:var(--cr-menu-border-radius,4px);box-shadow:var(--cr-menu-shadow);margin:0;min-width:128px;outline:none;overflow:var(--cr-action-menu-overflow,auto);padding:0;position:absolute}:host([use-unbounded]) dialog{max-height:none;position:fixed}@media (forced-colors:active){:host dialog{border:var(--cr-border-hcm)}}:host dialog::backdrop{background-color:transparent}:host ::slotted(.dropdown-item){-webkit-tap-highlight-color:transparent;background:none;border:none;border-radius:0;box-sizing:border-box;color:var(--cr-primary-text-color);font:inherit;min-height:32px;padding:8px 24px;text-align:start;user-select:none;width:100%}:host ::slotted(.dropdown-item:not([hidden])){align-items:center;display:flex}:host ::slotted(.dropdown-item[disabled]){color:var(--cr-action-menu-disabled-item-color,var(--cr-primary-text-color));opacity:var(--cr-action-menu-disabled-item-opacity,0.65)}:host ::slotted(.dropdown-item:not([disabled])){cursor:pointer}:host ::slotted(.dropdown-item:focus){background-color:var(--cr-menu-background-focus-color);outline:none}:host dialog[open] ::slotted(.dropdown-item){user-select:auto}:host ::slotted(.dropdown-item:focus-visible){outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px}@media (forced-colors:active){:host ::slotted(.dropdown-item:focus){outline:var(--cr-focus-outline-hcm)}}.item-wrapper{outline:none;padding:var(--cr-action-menu-padding,8px 0)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$e() {
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
        return getCss$o();
    }
    render() {
        return getHtml$e.bind(this)();
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

let instance$w = null;
function getCss$n() {
    return instance$w || (instance$w = [...[], css `.icon-arrow-back{--cr-icon-image:url(//resources/images/icon_arrow_back_old.svg)}.icon-arrow-dropdown{--cr-icon-image:url(//resources/images/icon_arrow_dropdown_old.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_down_cr23_old.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_up_cr23_old.svg)}.icon-arrow-upward{--cr-icon-image:url(//resources/images/icon_arrow_upward_old.svg)}.icon-arrow-forward{--cr-icon-image:url(//resources/images/icon_arrow_forward_old.svg)}.icon-cancel{--cr-icon-image:url(//resources/images/icon_cancel_old.svg)}.icon-clear{--cr-icon-image:url(//resources/images/icon_clear_old.svg)}.icon-copy-content{--cr-icon-image:url(//resources/images/icon_copy_content_old.svg)}.icon-delete-gray{--cr-icon-image:url(//resources/images/icon_delete_gray_old.svg)}.icon-edit{--cr-icon-image:url(//resources/images/icon_edit_old.svg)}.icon-file{--cr-icon-image:url(//resources/images/icon_filetype_generic_old.svg)}.icon-folder-open{--cr-icon-image:url(//resources/images/icon_folder_open_old.svg)}.icon-picture-delete{--cr-icon-image:url(//resources/images/icon_picture_delete_old.svg)}.icon-expand-less{--cr-icon-image:url(//resources/images/icon_expand_less_old.svg)}.icon-expand-more{--cr-icon-image:url(//resources/images/icon_expand_more_old.svg)}.icon-external{--cr-icon-image:url(//resources/images/open_in_new_old.svg)}.icon-more-vert{--cr-icon-image:url(//resources/images/icon_more_vert_old.svg)}.icon-refresh{--cr-icon-image:url(//resources/images/icon_refresh_old.svg)}.icon-search{--cr-icon-image:url(//resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(//resources/images/icon_settings_old.svg)}.icon-visibility{--cr-icon-image:url(//resources/images/icon_visibility_old.svg)}.icon-visibility-off{--cr-icon-image:url(//resources/images/icon_visibility_off_old.svg)}.subpage-arrow{--cr-icon-image:url(//resources/images/arrow_right_old.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}:host-context([webui-rounded-icons]){.icon-arrow-back{--cr-icon-image:url(//resources/images/icon_arrow_back.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_up_cr23.svg)}.icon-arrow-dropdown{--cr-icon-image:url(//resources/images/icon_arrow_dropdown.svg)}.icon-arrow-forward{--cr-icon-image:url(//resources/images/icon_arrow_forward.svg)}.icon-arrow-upward{--cr-icon-image:url(//resources/images/icon_arrow_upward.svg)}.icon-cancel{--cr-icon-image:url(//resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(//resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(//resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(//resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(//resources/images/icon_edit.svg)}.icon-expand-less{--cr-icon-image:url(//resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(//resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(//resources/images/open_in_new.svg)}.icon-file{--cr-icon-image:url(//resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(//resources/images/icon_folder_open.svg)}.icon-more-vert{--cr-icon-image:url(//resources/images/icon_more_vert.svg)}.icon-picture-delete{--cr-icon-image:url(//resources/images/icon_picture_delete.svg)}.icon-refresh{--cr-icon-image:url(//resources/images/icon_refresh.svg)}.icon-settings{--cr-icon-image:url(//resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(//resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(//resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(//resources/images/arrow_right.svg)}}`]);
}

let instance$v = null;
function getCss$m() {
    return instance$v || (instance$v = [...[getCss$n()], css `.icon-folder-open{--cr-icon-image:url(//resources/brave-icons/folder.svg)}.icon-edit{--cr-icon-image:url(//resources/brave-icons/edit-pencil.svg)}`]);
}

let instance$u = null;
function getCss$l() {
    return instance$u || (instance$u = [...[], css `.cr-scrollable{anchor-name:--cr-scrollable;anchor-scope:--cr-scrollable;container-type:scroll-state;overflow:auto}.cr-scrollable-top,.cr-scrollable-top-shadow,.cr-scrollable-bottom,.cr-scrollable-bottom-shadow{display:none;position:fixed;position-anchor:--cr-scrollable;left:anchor(left);width:anchor-size(width);pointer-events:none;&:where(.force-on){display:block}}.cr-scrollable-top{top:anchor(top);border-top:1px solid var(--cr-scrollable-border-color);@container scroll-state(scrollable:top){display:block}}.cr-scrollable-bottom{bottom:anchor(bottom);border-bottom:1px solid var(--cr-scrollable-border-color);@container scroll-state(scrollable:bottom){display:block}}.cr-scrollable-top-shadow,.cr-scrollable-bottom-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);display:block;height:8px;opacity:0;top:anchor(top);transition:opacity 500ms;z-index:1;&:where(.force-on){opacity:1}}.cr-scrollable-top-shadow{@container scroll-state(scrollable:top){opacity:1}}.cr-scrollable-bottom-shadow{top:auto;bottom:anchor(bottom);transform:scale(-1);@container scroll-state(scrollable:bottom){opacity:1}}`]);
}

let instance$t = null;
function getCss$k() {
    return instance$t || (instance$t = [...[getCss$w(), getCss$m(), getCss$l()], css `dialog{background-color:var(--cr-dialog-background-color,white);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,0.12),0 16px 16px rgba(0,0,0,0.24);color:inherit;line-height:20px;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}:host-context([webui-refresh-2026]){dialog{background-color:var(--cr-dialog-background-color,var(--color-webui-dialog-background))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,0.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:none}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}@container style(--cr-dialog-body-border-top){.cr-scrollable-top{display:block;border-top:var(--cr-dialog-body-border-top)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$d() {
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
        return getCss$k();
    }
    render() {
        return getHtml$d.bind(this)();
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

let instance$s = null;
function getCss$j() {
    return instance$s || (instance$s = [...[getCss$w(), getCss$m()], css `[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}.cr-separators>*:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--cr-scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--cr-scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus-visible,[selectable]:focus-visible,[selectable]>:focus-visible{outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.first,.cr-row.continuation{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip),cr-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}`]);
}

let instance$r = null;
function getCss$i() {
    return instance$r || (instance$r = [...[], css `:host{--cr-input-background-color:var(--color-textfield-filled-background,var(--cr-fallback-color-surface-variant));--cr-input-border-bottom:1px solid var(--color-textfield-filled-underline,var(--cr-fallback-color-outline));--cr-input-border-radius:8px 8px 0 0;--cr-input-color:var(--cr-primary-text-color);--cr-input-error-color:var(--color-textfield-filled-error,var(--cr-fallback-color-error));--cr-input-focus-color:var(--color-textfield-filled-underline-focused,var(--cr-fallback-color-primary));--cr-input-hover-background-color:var(--cr-hover-background-color);--cr-input-label-color:var(--color-textfield-foreground-label,var(--cr-fallback-color-on-surface-subtle));--cr-input-padding-bottom:10px;--cr-input-padding-end:10px;--cr-input-padding-start:10px;--cr-input-padding-top:10px;--cr-input-placeholder-color:var(--color-textfield-foreground-placeholder,var(--cr-fallback-on-surface-subtle));display:block;isolation:isolate;outline:none}:host([readonly]){--cr-input-border-radius:8px 8px}#label{color:var(--cr-input-label-color);font-size:11px;line-height:16px}:host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-label-color,var(--cr-input-label-color))}#input-container{border-radius:var(--cr-input-border-radius,4px);overflow:hidden;position:relative;width:var(--cr-input-width,100%)}:host([focused_]) #input-container{outline:var(--cr-input-focus-outline,none)}#inner-input-container{background-color:var(--cr-input-background-color);box-sizing:border-box;padding:0}#inner-input-content ::slotted(*){--cr-icon-button-fill-color:var(--color-textfield-foreground-icon,var(--cr-fallback-color-on-surface-subtle));--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-textfield-foreground-icon,var(--cr-fallback-color-on-surface-subtle))}#inner-input-content ::slotted([slot='inline-prefix']){--cr-icon-button-margin-start:-8px}#inner-input-content ::slotted([slot='inline-suffix']){--cr-icon-button-margin-end:-4px}:host([invalid]) #inner-input-content ::slotted(*){--cr-icon-color:var(--cr-input-error-color);--cr-icon-button-fill-color:var(--cr-input-error-color)}#hover-layer{background-color:var(--cr-input-hover-background-color);display:none;inset:0;pointer-events:none;position:absolute;z-index:0}:host(:not([readonly]):not([disabled])) #input-container:hover #hover-layer{display:block}#input{-webkit-appearance:none;background-color:transparent;border:none;box-sizing:border-box;caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);font-family:inherit;font-size:var(--cr-input-font-size,12px);font-weight:inherit;line-height:16px;min-height:var(--cr-input-min-height,auto);outline:none;padding:0;text-align:inherit;text-overflow:ellipsis;width:100%}#inner-input-content{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#underline{border-bottom:2px solid var(--cr-input-focus-color);border-radius:var(--cr-input-underline-border-radius,0);bottom:0;box-sizing:border-box;display:var(--cr-input-underline-display);height:var(--cr-input-underline-height,0);left:0;margin:auto;opacity:0;position:absolute;right:0;transition:opacity 120ms ease-out,width 0s linear 180ms;width:0}:host([invalid]) #underline,:host([force-underline]) #underline,:host([focused_]) #underline{opacity:1;transition:opacity 120ms ease-in,width 180ms ease-out;width:100%}#underline-base{display:none}:host([readonly]) #underline{display:none}:host(:not([readonly])) #underline-base{border-bottom:var(--cr-input-border-bottom);bottom:0;display:block;left:0;position:absolute;right:0}:host([disabled]){color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-input-border-bottom:1px solid currentColor;--cr-input-placeholder-color:currentColor;--cr-input-color:currentColor;--cr-input-background-color:var(--color-textfield-background-disabled,var(--cr-fallback-color-disabled-background))}:host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}:host(.stroked){--cr-input-background-color:transparent;--cr-input-border:1px solid var(--color-side-panel-textfield-border,var(--cr-fallback-color-neutral-outline));--cr-input-border-bottom:none;--cr-input-border-radius:8px;--cr-input-padding-bottom:9px;--cr-input-padding-end:9px;--cr-input-padding-start:9px;--cr-input-padding-top:9px;--cr-input-underline-display:none;--cr-input-min-height:36px;line-height:16px}:host(.stroked[focused_]){--cr-input-border:2px solid var(--cr-focus-outline-color);--cr-input-padding-bottom:8px;--cr-input-padding-end:8px;--cr-input-padding-start:8px;--cr-input-padding-top:8px}:host(.stroked[invalid]){--cr-input-border:1px solid var(--cr-input-error-color)}:host(.stroked[focused_][invalid]){--cr-input-border:2px solid var(--cr-input-error-color)}`]);
}

let instance$q = null;
function getCss$h() {
    return instance$q || (instance$q = [...[getCss$w(), getCss$i(), getCss$j()], css `:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing) !important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:none;letter-spacing:var(--cr-input-letter-spacing)}#input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,0.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:11px;min-height:var(--cr-form-field-label-height);line-height:16px;margin:4px 10px;visibility:hidden;white-space:var(--cr-input-error-white-space);height:auto;overflow:hidden;text-overflow:ellipsis}:host([invalid]) #error{visibility:visible}#row-container,#inner-input-content{align-items:center;display:flex;justify-content:space-between;position:relative}#inner-input-content{gap:4px;height:16px;z-index:1}#input[type='search']::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$c() {
    return html `
<div id="label" class="cr-form-field-label" ?hidden="${!this.label}"
    aria-hidden="${this.getLabelAriaHidden_() || nothing}">
  ${this.label}
</div>
<div id="row-container" part="row-container">
  <div id="input-container">
    <div id="inner-input-container">
      <div id="hover-layer"></div>
      <div id="inner-input-content">
        <slot name="inline-prefix"></slot>
        <input id="input" ?disabled="${this.disabled}"
            ?autofocus="${this.autofocus}" .value="${this.internalValue_}"
            tabindex="${this.inputTabindex}" .type="${this.type}"
            ?readonly="${this.readonly}" maxlength="${this.maxlength}"
            pattern="${this.pattern || nothing}" ?required="${this.required}"
            minlength="${this.minlength}" inputmode="${this.inputmode}"
            aria-description="${this.ariaDescription || nothing}"
            aria-errormessage="${this.getAriaErrorMessage_() || nothing}"
            aria-labelledby="${this.getAriaLabelledBy_() || nothing}"
            aria-label="${this.getAriaLabel_()}"
            aria-invalid="${this.getAriaInvalid_()}"
            .max="${this.max || nothing}" .min="${this.min || nothing}"
            @focus="${this.onInputFocus_}" @blur="${this.onInputBlur_}"
            @change="${this.onInputChange_}" @input="${this.onInput_}"
            part="input" autocomplete="off">
        <slot name="inline-suffix"></slot>
      </div>
    </div>
    <div id="underline-base"></div>
    <div id="underline"></div>
  </div>
  <slot name="suffix"></slot>
</div>
<div id="error" role="${this.getErrorRole_() || nothing}"
    aria-live="assertive"><!--
  -->${this.getErrorMessage_()}<!--
--></div>`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Input types supported by cr-input.
 */
const SUPPORTED_INPUT_TYPES = new Set([
    'number',
    'password',
    'search',
    'text',
    'url',
]);
class CrInputElement extends CrLitElement {
    static get is() {
        return 'cr-input';
    }
    static get styles() {
        return getCss$h();
    }
    render() {
        return getHtml$c.bind(this)();
    }
    static get properties() {
        return {
            ariaDescription: { type: String },
            ariaLabel: { type: String },
            autofocus: {
                type: Boolean,
                reflect: true,
            },
            autoValidate: { type: Boolean },
            disabled: {
                type: Boolean,
                reflect: true,
            },
            errorMessage: { type: String },
            /**
             * This is strictly used internally for styling, do not attempt to use
             * this to set focus.
             */
            focused_: {
                type: Boolean,
                reflect: true,
            },
            invalid: {
                type: Boolean,
                notify: true,
                reflect: true,
            },
            max: {
                type: Number,
                reflect: true,
            },
            min: {
                type: Number,
                reflect: true,
            },
            maxlength: {
                type: Number,
                reflect: true,
            },
            minlength: {
                type: Number,
                reflect: true,
            },
            pattern: {
                type: String,
                reflect: true,
            },
            inputmode: { type: String },
            label: { type: String },
            placeholder: { type: String },
            readonly: {
                type: Boolean,
                reflect: true,
            },
            required: {
                type: Boolean,
                reflect: true,
            },
            inputTabindex: { type: Number },
            type: { type: String },
            value: {
                type: String,
                notify: true,
            },
            internalValue_: {
                type: String,
                state: true,
            },
        };
    }
    #ariaDescription_accessor_storage = null;
    get ariaDescription() { return this.#ariaDescription_accessor_storage; }
    set ariaDescription(value) { this.#ariaDescription_accessor_storage = value; }
    #ariaLabel_accessor_storage = '';
    get ariaLabel() { return this.#ariaLabel_accessor_storage; }
    set ariaLabel(value) { this.#ariaLabel_accessor_storage = value; }
    #autofocus_accessor_storage = false;
    get autofocus() { return this.#autofocus_accessor_storage; }
    set autofocus(value) { this.#autofocus_accessor_storage = value; }
    #autoValidate_accessor_storage = false;
    get autoValidate() { return this.#autoValidate_accessor_storage; }
    set autoValidate(value) { this.#autoValidate_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #errorMessage_accessor_storage = '';
    get errorMessage() { return this.#errorMessage_accessor_storage; }
    set errorMessage(value) { this.#errorMessage_accessor_storage = value; }
    #inputmode_accessor_storage;
    get inputmode() { return this.#inputmode_accessor_storage; }
    set inputmode(value) { this.#inputmode_accessor_storage = value; }
    #inputTabindex_accessor_storage = 0;
    get inputTabindex() { return this.#inputTabindex_accessor_storage; }
    set inputTabindex(value) { this.#inputTabindex_accessor_storage = value; }
    #invalid_accessor_storage = false;
    get invalid() { return this.#invalid_accessor_storage; }
    set invalid(value) { this.#invalid_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #max_accessor_storage;
    get max() { return this.#max_accessor_storage; }
    set max(value) { this.#max_accessor_storage = value; }
    #min_accessor_storage;
    get min() { return this.#min_accessor_storage; }
    set min(value) { this.#min_accessor_storage = value; }
    #maxlength_accessor_storage;
    get maxlength() { return this.#maxlength_accessor_storage; }
    set maxlength(value) { this.#maxlength_accessor_storage = value; }
    #minlength_accessor_storage;
    get minlength() { return this.#minlength_accessor_storage; }
    set minlength(value) { this.#minlength_accessor_storage = value; }
    #pattern_accessor_storage;
    get pattern() { return this.#pattern_accessor_storage; }
    set pattern(value) { this.#pattern_accessor_storage = value; }
    #placeholder_accessor_storage = null;
    get placeholder() { return this.#placeholder_accessor_storage; }
    set placeholder(value) { this.#placeholder_accessor_storage = value; }
    #readonly_accessor_storage = false;
    get readonly() { return this.#readonly_accessor_storage; }
    set readonly(value) { this.#readonly_accessor_storage = value; }
    #required_accessor_storage = false;
    get required() { return this.#required_accessor_storage; }
    set required(value) { this.#required_accessor_storage = value; }
    #type_accessor_storage = 'text';
    get type() { return this.#type_accessor_storage; }
    set type(value) { this.#type_accessor_storage = value; }
    #value_accessor_storage = '';
    get value() { return this.#value_accessor_storage; }
    set value(value) { this.#value_accessor_storage = value; }
    #internalValue__accessor_storage = '';
    get internalValue_() { return this.#internalValue__accessor_storage; }
    set internalValue_(value) { this.#internalValue__accessor_storage = value; }
    #focused__accessor_storage = false;
    get focused_() { return this.#focused__accessor_storage; }
    set focused_(value) { this.#focused__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('value')) {
            // Don't allow null or undefined as these will render in the input.
            // cr-input cannot use Lit's "nothing" in the HTML template; this breaks
            // the underlying native input's auto validation if |required| is set.
            this.internalValue_ =
                (this.value === undefined || this.value === null) ? '' : this.value;
        }
        if (changedProperties.has('inputTabindex')) {
            // CrInput only supports 0 or -1 values for the input's tabindex to allow
            // having the input in tab order or not. Values greater than 0 will not
            // work as the shadow root encapsulates tabindices.
            assert(this.inputTabindex === 0 || this.inputTabindex === -1);
        }
        if (changedProperties.has('type')) {
            // Check that the 'type' is one of the supported types.
            assert(SUPPORTED_INPUT_TYPES.has(this.type));
        }
    }
    firstUpdated() {
        // Use inputTabindex instead.
        assert(!this.hasAttribute('tabindex'));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('value')) {
            const previous = changedProperties.get('value');
            if ((!!this.value || !!previous) && this.autoValidate) {
                this.invalid = !this.inputElement.checkValidity();
            }
        }
        if (changedProperties.has('placeholder')) {
            if (this.placeholder === null || this.placeholder === undefined) {
                this.inputElement.removeAttribute('placeholder');
            }
            else {
                this.inputElement.setAttribute('placeholder', this.placeholder);
            }
        }
    }
    get inputElement() {
        return this.$.input;
    }
    focus() {
        this.focusInput();
    }
    /**
     * Focuses the input element.
     * TODO(crbug.com/40593040): Replace this with focus() after resolving the text
     * selection issue described in onFocus_().
     * @return Whether the <input> element was focused.
     */
    focusInput() {
        if (this.shadowRoot.activeElement === this.inputElement) {
            return false;
        }
        this.inputElement.focus();
        return true;
    }
    /**
     * 'change' event fires when <input> value changes and user presses 'Enter'.
     * This function helps propagate it to host since change events don't
     * propagate across Shadow DOM boundary by default.
     */
    async onInputChange_(e) {
        // Ensure that |value| has been updated before re-firing 'change'.
        await this.updateComplete;
        this.fire('change', { sourceEvent: e });
    }
    onInput_(e) {
        this.internalValue_ = e.target.value;
        this.value = this.internalValue_;
    }
    onInputFocus_() {
        this.focused_ = true;
    }
    onInputBlur_() {
        this.focused_ = false;
    }
    getAriaLabel_() {
        return this.ariaLabel || this.label || this.placeholder;
    }
    // Returns the id of the visible label element when aria-labelledby
    // should reference it, or null otherwise. Some accessibility frameworks
    // (notably ATK/AT-SPI used by Orca on Linux) do not reliably surface
    // the input's accessible name from aria-label alone in this layout.
    // Skipped when the host sets its own aria-label, so that takes
    // precedence as before.
    getAriaLabelledBy_() {
        if (this.label && !this.ariaLabel) {
            return 'label';
        }
        return null;
    }
    // The visible label is exposed to a11y only when referenced via
    // aria-labelledby; otherwise it stays aria-hidden to avoid duplicating
    // the inner input's aria-label.
    getLabelAriaHidden_() {
        return this.getAriaLabelledBy_() ? null : 'true';
    }
    getAriaInvalid_() {
        return this.invalid ? 'true' : 'false';
    }
    getErrorMessage_() {
        return this.invalid ? this.errorMessage : '';
    }
    getErrorRole_() {
        // On VoiceOver role="alert" is not consistently announced when its
        // content changes. Adding and removing the |role| attribute every time
        // there is an error, triggers VoiceOver to consistently announce.
        return this.invalid ? 'alert' : '';
    }
    getAriaErrorMessage_() {
        return this.invalid ? 'error' : '';
    }
    /**
     * Selects the text within the input. If no parameters are passed, it will
     * select the entire string. Either no params or both params should be passed.
     * Publicly, this function should be used instead of inputElement.select() or
     * manipulating inputElement.selectionStart/selectionEnd because the order of
     * execution between focus() and select() is sensitive.
     */
    select(start, end) {
        this.inputElement.focus();
        if (start !== undefined && end !== undefined) {
            this.inputElement.setSelectionRange(start, end);
        }
        else {
            // Can't just pass one param.
            assert(start === undefined && end === undefined);
            this.inputElement.select();
        }
    }
    // Note: In order to preserve it as a synchronous API, validate() forces 2
    // rendering updates to cr-input. This allows this function to be used to
    // synchronously determine the validity of a <cr-input>, however, as a result
    // of these 2 forced updates it may result in slower performance. validate()
    // should not be called internally from within cr_input.ts, and should only
    // be called where necessary from clients.
    validate() {
        // Ensure that any changes to |value| have propagated to the native <input>.
        this.performUpdate();
        this.invalid = !this.inputElement.checkValidity();
        // Perform update again to ensure change propagates via 2 way binding to
        // Polymer parent before returning.
        this.performUpdate();
        return !this.invalid;
    }
}
customElements.define(CrInputElement.is, CrInputElement);

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

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A generic datastore for the state of a page, where the state is publicly
 * readable but can only be modified by dispatching an Action.
 * The Store should be extended by specifying S, the page state type
 * associated with the store.
 */
let Store$1 = class Store {
    data;
    reducer_;
    initialized_ = false;
    queuedActions_ = [];
    observers_ = new Set();
    batchMode_ = false;
    constructor(emptyState, reducer) {
        this.data = emptyState;
        this.reducer_ = reducer;
    }
    init(initialState) {
        this.data = initialState;
        this.queuedActions_.forEach((action) => {
            this.dispatchInternal_(action);
        });
        this.queuedActions_ = [];
        this.initialized_ = true;
        this.notifyObservers_(this.data);
    }
    isInitialized() {
        return this.initialized_;
    }
    addObserver(observer) {
        this.observers_.add(observer);
    }
    removeObserver(observer) {
        this.observers_.delete(observer);
    }
    hasObserver(observer) {
        return this.observers_.has(observer);
    }
    /**
     * Begin a batch update to store data, which will disable updates to the
     * UI until `endBatchUpdate` is called. This is useful when a single UI
     * operation is likely to cause many sequential model updates (eg, deleting
     * 100 bookmarks).
     */
    beginBatchUpdate() {
        this.batchMode_ = true;
    }
    /**
     * End a batch update to the store data, notifying the UI of any changes
     * which occurred while batch mode was enabled.
     */
    endBatchUpdate() {
        this.batchMode_ = false;
        this.notifyObservers_(this.data);
    }
    /**
     * Handles a 'deferred' action, which can asynchronously dispatch actions
     * to the Store in order to reach a new UI state. DeferredActions have the
     * form `dispatchAsync(function(dispatch) { ... })`). Inside that function,
     * the |dispatch| callback can be called asynchronously to dispatch Actions
     * directly to the Store.
     */
    dispatchAsync(action) {
        if (!this.initialized_) {
            this.queuedActions_.push(action);
            return;
        }
        this.dispatchInternal_(action);
    }
    /**
     * Transition to a new UI state based on the supplied |action|, and notify
     * observers of the change. If the Store has not yet been initialized, the
     * action will be queued and performed upon initialization.
     */
    dispatch(action) {
        this.dispatchAsync(function (dispatch) {
            dispatch(action);
        });
    }
    dispatchInternal_(action) {
        action(this.reduce.bind(this));
    }
    reduce(action) {
        if (!action) {
            return;
        }
        this.data = this.reducer_(this.data, action);
        // Batch notifications until after all initialization queuedActions are
        // resolved.
        if (this.isInitialized() && !this.batchMode_) {
            this.notifyObservers_(this.data);
        }
    }
    notifyObservers_(state) {
        this.observers_.forEach(function (o) {
            o.onStateChanged(state);
        });
    }
};

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Module of functions which produce a new page state in response
 * to an action. Reducers (in the same sense as Array.prototype.reduce) must be
 * pure functions: they must not modify existing state objects, or make any API
 * calls.
 */
function selectItems(selectionState, action) {
    let newItems = new Set();
    if (!action.clear) {
        newItems = new Set(selectionState.items);
    }
    action.items.forEach(function (id) {
        let add = true;
        if (action.toggle) {
            add = !newItems.has(id);
        }
        if (add) {
            newItems.add(id);
        }
        else {
            newItems.delete(id);
        }
    });
    return Object.assign({}, selectionState, {
        items: newItems,
        anchor: action.anchor,
    });
}
function deselectAll(_selectionState) {
    return {
        items: new Set(),
        anchor: null,
    };
}
function deselectItems(selectionState, deleted) {
    return /** @type {SelectionState} */ (Object.assign({}, selectionState, {
        items: removeIdsFromSet(selectionState.items, deleted),
        anchor: !selectionState.anchor || deleted.has(selectionState.anchor) ?
            null :
            selectionState.anchor,
    }));
}
function updateAnchor(selectionState, action) {
    return Object.assign({}, selectionState, {
        anchor: action.anchor,
    });
}
// Exported for tests.
function updateSelection(selection, action) {
    switch (action.name) {
        case 'clear-search':
        case 'finish-search':
        case 'select-folder':
        case 'deselect-items':
            return deselectAll();
        case 'select-items':
            return selectItems(selection, action);
        case 'remove-bookmark':
            return deselectItems(selection, action.descendants);
        case 'move-bookmark':
            // Deselect items when they are moved to another folder, since they will
            // no longer be visible on screen (for simplicity, ignores items visible
            // in search results).
            const moveAction = action;
            if (moveAction.parentId !== moveAction.oldParentId &&
                selection.items.has(moveAction.id)) {
                return deselectItems(selection, new Set([moveAction.id]));
            }
            return selection;
        case 'update-anchor':
            return updateAnchor(selection, action);
        default:
            return selection;
    }
}
function startSearch(search, action) {
    return {
        term: action.term,
        inProgress: true,
        results: search.results,
    };
}
function finishSearch(search, action) {
    return /** @type {SearchState} */ (Object.assign({}, search, {
        inProgress: false,
        results: action.results,
    }));
}
function clearSearch() {
    return {
        term: '',
        inProgress: false,
        results: null,
    };
}
function removeDeletedResults(search, deletedIds) {
    if (!search.results) {
        return search;
    }
    const newResults = [];
    search.results.forEach(function (id) {
        if (!deletedIds.has(id)) {
            newResults.push(id);
        }
    });
    return Object.assign({}, search, {
        results: newResults,
    });
}
function updateSearch(search, action) {
    switch (action.name) {
        case 'start-search':
            return startSearch(search, action);
        case 'select-folder':
        case 'clear-search':
            return clearSearch();
        case 'finish-search':
            return finishSearch(search, action);
        case 'remove-bookmark':
            return removeDeletedResults(search, action.descendants);
        default:
            return search;
    }
}
function modifyNode(nodes, id, callback) {
    const nodeModification = {};
    nodeModification[id] = callback(nodes[id]);
    return Object.assign({}, nodes, nodeModification);
}
function createBookmark(nodes, action) {
    let parentId = action.parentId;
    let parentIndex = action.parentIndex;
    const isPermanent = action.node.permanentFolderType !== undefined;
    if (isPermanent) {
        if (ACCOUNT_HEADING_NODE_ID in nodes) {
            parentId = action.node.isSynced ? ACCOUNT_HEADING_NODE_ID :
                LOCAL_HEADING_NODE_ID;
            parentIndex = nodes[parentId].children.length;
        }
        else {
            // TODO(crbug.com/565516225): The bookmarks API has a "true" UUID for the
            // root node. Unfortunately, the current webui is using a hardcoded id for
            // the root. This is problematic when the UI tries to create new permanent
            // nodes, because the UUID returned by the browser does not match the
            // hardcoded ROOT_NODE_ID. When we collapse the webui structure and remove
            // the redux pattern, we can actually set the root node to the correct
            // UUID, instead of this hack.
            //
            // This is assuming that we need to reroot, because the user is signing
            // in.
            parentId = ROOT_NODE_ID;
        }
    }
    const parentNode = nodes[parentId];
    if (!parentNode || !parentNode.children) {
        return nodes;
    }
    const nodeModifications = {};
    nodeModifications[action.id] =
        Object.assign({}, action.node, { parentId: parentId });
    const newChildren = parentNode.children.slice();
    newChildren.splice(parentIndex, 0, action.id);
    nodeModifications[parentId] = Object.assign({}, parentNode, {
        children: newChildren,
    });
    let newNodes = Object.assign({}, nodes, nodeModifications);
    // If headings are not created yet, check if adding this permanent node causes
    // both local and account bookmark bars to exist.
    if (!newNodes[ACCOUNT_HEADING_NODE_ID] && isPermanent) {
        const rootChildren = newNodes[ROOT_NODE_ID].children || [];
        const rootChildNodes = rootChildren.map(id => newNodes[id]).filter(Boolean);
        const hasAccountBar = rootChildNodes.some(n => n.permanentFolderType === PermanentFolderType.kBookmarkBar &&
            n.isSynced);
        const hasLocalBar = rootChildNodes.some(n => n.permanentFolderType === PermanentFolderType.kBookmarkBar &&
            !n.isSynced);
        if (hasAccountBar && hasLocalBar) {
            const accountHeading = buildAccountHeadingNode();
            const localHeading = buildLocalHeadingNode();
            const headingModifications = {
                [accountHeading.id]: accountHeading,
                [localHeading.id]: localHeading,
            };
            rootChildNodes.forEach(child => {
                const hParentId = child.isSynced ? ACCOUNT_HEADING_NODE_ID : LOCAL_HEADING_NODE_ID;
                headingModifications[hParentId].children.push(child.id);
                headingModifications[child.id] =
                    Object.assign({}, child, { parentId: hParentId });
            });
            headingModifications[ROOT_NODE_ID] =
                Object.assign({}, newNodes[ROOT_NODE_ID], {
                    children: [accountHeading.id, localHeading.id],
                });
            newNodes = Object.assign({}, newNodes, headingModifications);
        }
    }
    return newNodes;
}
function editBookmark(nodes, action) {
    // Do not allow folders to change URL (making them no longer folders).
    if (!nodes[action.id].url && action.changeInfo.url) {
        delete action.changeInfo.url;
    }
    return modifyNode(nodes, action.id, function (node) {
        return Object.assign({}, node, action.changeInfo);
    });
}
function moveBookmark(nodes, action) {
    const nodeModifications = {};
    const id = action.id;
    // Skip when new/old parent is invisible (Pending Bookmarks)
    if (!nodes[action.oldParentId] || !nodes[action.parentId])
        return nodes;
    // Change node's parent.
    nodeModifications[id] =
        Object.assign({}, nodes[id], { parentId: action.parentId });
    // Remove from old parent.
    const oldParentId = action.oldParentId;
    const oldParentChildren = nodes[oldParentId].children.slice();
    oldParentChildren.splice(action.oldIndex, 1);
    nodeModifications[oldParentId] =
        Object.assign({}, nodes[oldParentId], { children: oldParentChildren });
    // Add to new parent.
    const parentId = action.parentId;
    const parentChildren = oldParentId === parentId ?
        oldParentChildren :
        nodes[parentId].children.slice();
    parentChildren.splice(action.index, 0, action.id);
    nodeModifications[parentId] =
        Object.assign({}, nodes[parentId], { children: parentChildren });
    return Object.assign({}, nodes, nodeModifications);
}
function removeBookmark(nodes, action) {
    // Permanent folders in the bookmark model are direct children of the root.
    // However, within the NodeMap, these permanent folders might be children of
    // either the root or custom "heading nodes" if those headings have been
    // created.
    const isHeadingChild = action.parentId === ROOT_NODE_ID ||
        action.parentId === ACCOUNT_HEADING_NODE_ID ||
        action.parentId === LOCAL_HEADING_NODE_ID;
    if (isHeadingChild && ACCOUNT_HEADING_NODE_ID in nodes) {
        const accountHeadingNode = nodes[ACCOUNT_HEADING_NODE_ID];
        const localHeadingNode = nodes[LOCAL_HEADING_NODE_ID];
        const parentHeading = accountHeadingNode.children.includes(action.id) ?
            accountHeadingNode :
            (localHeadingNode.children.includes(action.id) ? localHeadingNode :
                null);
        if (parentHeading) {
            // Update the chosen heading node.
            const newState = modifyNode(nodes, parentHeading.id, function (node) {
                return Object.assign({}, node, { children: node.children.filter(id => id !== action.id) });
            });
            // Prune the headings if either heading node has become empty.
            return pruneHeadings(removeIdsFromObject(newState, action.descendants));
        }
    }
    const newState = modifyNode(nodes, action.parentId, function (node) {
        const newChildren = node.children.slice();
        newChildren.splice(action.index, 1);
        return Object.assign({}, node, { children: newChildren });
    });
    return removeIdsFromObject(newState, action.descendants);
}
function pruneHeadings(nodes) {
    if (!nodes[ACCOUNT_HEADING_NODE_ID]) {
        // Heading nodes are not created.
        return nodes;
    }
    const accountHeadingChildren = nodes[ACCOUNT_HEADING_NODE_ID].children;
    const localHeadingChildren = nodes[LOCAL_HEADING_NODE_ID].children;
    // Heading nodes are removed iff one of them has no children left.
    if (accountHeadingChildren.length > 0 && localHeadingChildren.length > 0) {
        return nodes;
    }
    const newRootChildren = accountHeadingChildren.length === 0 ?
        localHeadingChildren :
        accountHeadingChildren;
    assert(newRootChildren.length > 0);
    const updatedNodes = Object.assign({}, nodes);
    // Set the children (i.e. permanent folders) of the non-empty heading to be
    // children of root.
    newRootChildren.forEach(childId => {
        if (updatedNodes[childId]) {
            updatedNodes[childId] =
                Object.assign({}, updatedNodes[childId], { parentId: ROOT_NODE_ID });
        }
    });
    updatedNodes[ROOT_NODE_ID] = Object.assign({}, updatedNodes[ROOT_NODE_ID], {
        children: structuredClone(newRootChildren),
    });
    // Remove the headings.
    return removeIdsFromObject(updatedNodes, new Set([LOCAL_HEADING_NODE_ID, ACCOUNT_HEADING_NODE_ID]));
}
function reorderChildren(nodes, action) {
    return modifyNode(nodes, action.id, function (node) {
        return Object.assign({}, node, { children: action.children });
    });
}
function updateNodes(nodes, action) {
    switch (action.name) {
        case 'create-bookmark':
            return createBookmark(nodes, action);
        case 'edit-bookmark':
            return editBookmark(nodes, action);
        case 'move-bookmark':
            return moveBookmark(nodes, action);
        case 'remove-bookmark':
            return removeBookmark(nodes, action);
        case 'reorder-children':
            return reorderChildren(nodes, action);
        case 'refresh-nodes':
            return action.nodes;
        default:
            return nodes;
    }
}
function isAncestorOf(nodes, ancestorId, childId) {
    let currentId = childId;
    // Work upwards through the tree from child.
    while (currentId) {
        if (currentId === ancestorId) {
            return true;
        }
        currentId = nodes[currentId].parentId;
    }
    return false;
}
function updateSelectedFolder(selectedFolder, action, nodes) {
    switch (action.name) {
        case 'select-folder':
            return action.id;
        case 'change-folder-open':
            // When hiding the selected folder by closing its ancestor, select
            // that ancestor instead.
            const changeFolderAction = action;
            if (!changeFolderAction.open && selectedFolder &&
                isAncestorOf(nodes, changeFolderAction.id, selectedFolder)) {
                return changeFolderAction.id;
            }
            return selectedFolder;
        case 'remove-bookmark':
            return getSelectedFolderAfterBookmarkRemove(selectedFolder, action, nodes);
        case 'refresh-nodes': {
            const refreshedNodes = action.nodes;
            if (!selectedFolder || !refreshedNodes[selectedFolder]) {
                // If the selected folder was removed, select the default folder.
                return getDefaultSelectedFolder(refreshedNodes);
            }
            return selectedFolder;
        }
        default:
            return selectedFolder;
    }
}
function getSelectedFolderAfterBookmarkRemove(selectedFolder, action, nodes) {
    const id = action.id;
    // If no folder is currently selected, return as is.
    if (selectedFolder === '') {
        return selectedFolder;
    }
    // Handle removal of permanent bookmark folders (e.g., 'Mobile Bookmarks',
    // 'Bookmark Bar', 'Other Bookmarks'). Such removals can also implicitly
    // prune headings that would be selected.
    const isHeadingChild = action.parentId === ROOT_NODE_ID ||
        action.parentId === ACCOUNT_HEADING_NODE_ID ||
        action.parentId === LOCAL_HEADING_NODE_ID;
    if (isHeadingChild) {
        // If the currently selected folder or its ancestor is being deleted, update
        // selection to the parent of the deleted node.
        const newSelection = isAncestorOf(nodes, id, selectedFolder) ?
            nodes[id].parentId :
            selectedFolder;
        if (newSelection !== ROOT_NODE_ID &&
            newSelection !== ACCOUNT_HEADING_NODE_ID &&
            newSelection !== LOCAL_HEADING_NODE_ID) {
            // The selection can safely be returned if it is neither root nor a
            // heading node.
            return newSelection;
        }
        // The selection is invalid iff it is root or a heading node that is being
        // removed. Resolve to the new first child of root, which should be the
        // remaining bookmark bar, to prevent stale UI.
        const updatedNodes = removeBookmark(nodes, action);
        if (newSelection === ROOT_NODE_ID || !updatedNodes[newSelection]) {
            return updatedNodes[ROOT_NODE_ID].children[0];
        }
        return newSelection;
    }
    // When deleting the selected folder (or its non-permanent ancestor), select
    // the parent of the deleted node.
    if (isAncestorOf(nodes, id, selectedFolder)) {
        return nodes[id].parentId;
    }
    return selectedFolder;
}
function openFolderAndAncestors(folderOpenState, id, nodes) {
    const newFolderOpenState = new Map(folderOpenState);
    for (let currentId = id; currentId; currentId = nodes[currentId].parentId) {
        newFolderOpenState.set(currentId, true);
    }
    return newFolderOpenState;
}
function changeFolderOpen(folderOpenState, action) {
    const newFolderOpenState = new Map(folderOpenState);
    newFolderOpenState.set(action.id, action.open);
    return newFolderOpenState;
}
function updateFolderOpenState(folderOpenState, action, nodes) {
    switch (action.name) {
        case 'change-folder-open':
            return changeFolderOpen(folderOpenState, action);
        case 'select-folder':
            return openFolderAndAncestors(folderOpenState, nodes[action.id].parentId, nodes);
        case 'move-bookmark':
            if (!nodes[action.id] || !nodes[action.id].children) {
                return folderOpenState;
            }
            return openFolderAndAncestors(folderOpenState, action.parentId, nodes);
        case 'remove-bookmark':
            return removeIdsFromMap(folderOpenState, action.descendants);
        default:
            return folderOpenState;
    }
}
function updatePrefs(prefs, action) {
    const prefAction = action;
    switch (prefAction.name) {
        case 'set-incognito-availability':
            return /** @type {PreferencesState} */ (Object.assign({}, prefs, {
                incognitoAvailability: prefAction.value,
            }));
        case 'set-can-edit':
            return /** @type {PreferencesState} */ (Object.assign({}, prefs, {
                canEdit: prefAction.value,
            }));
        default:
            return prefs;
    }
}
function reduceAction(state, action) {
    return {
        nodes: updateNodes(state.nodes, action),
        selectedFolder: updateSelectedFolder(state.selectedFolder, action, state.nodes),
        folderOpenState: updateFolderOpenState(state.folderOpenState, action, state.nodes),
        prefs: updatePrefs(state.prefs, action),
        search: updateSearch(state.search, action),
        selection: updateSelection(state.selection, action),
    };
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A singleton datastore for the Bookmarks page. Page state is
 * publicly readable, but can only be modified by dispatching an Action to
 * the store.
 */
class Store extends Store$1 {
    constructor() {
        super(createEmptyState(), reduceAction);
    }
    static getInstance() {
        return instance$p || (instance$p = new Store());
    }
    static setInstance(obj) {
        instance$p = obj;
    }
}
let instance$p = null;

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BookmarkEventForwarder {
    listeners_ = [];
    addListener(listener) {
        this.listeners_.push(listener);
    }
    removeListener(listener) {
        this.listeners_ = this.listeners_.filter(l => l !== listener);
    }
    forward(...args) {
        this.listeners_.forEach(l => l(...args));
    }
}
// Directs mojo events to our proxy. Once the migration is complete, we should
// collapse this indirection.
class MojoObserver {
    proxy_;
    constructor(proxy) {
        this.proxy_ = proxy;
    }
    onBookmarksEvents(events) {
        this.proxy_.handleMojoEvents(events);
    }
}
class BookmarksApiProxyImpl {
    receiver_ = null;
    rootNodeResolver_ = new PromiseResolver();
    onCreated = new BookmarkEventForwarder();
    onRemoved = new BookmarkEventForwarder();
    onChanged = new BookmarkEventForwarder();
    onMoved = new BookmarkEventForwarder();
    onChildrenReordered = new BookmarkEventForwarder();
    constructor() {
        BookmarksService.getRemote().getBookmarks().then(snapshot => {
            const nodes = normalizeNodes(snapshot.root);
            this.rootNodeResolver_.resolve(nodes);
            // Defer binding the observer to a subsequent microtask so that listeners
            // on rootNodeResolver_ (such as Store initialization) have completed.
            this.rootNodeResolver_.promise.then(() => {
                const observer = new MojoObserver(this);
                this.receiver_ = new BookmarksObserverReceiver(observer);
                this.receiver_.$.bindHandle(snapshot.stream.handle);
            });
        });
    }
    getTree() {
        return this.rootNodeResolver_.promise;
    }
    update(id, changes) {
        const store = Store.getInstance();
        const node = store.data.nodes[id];
        if (!node) {
            throw new Error('Node not found in store: ' + id);
        }
        const mojoNode = toMojoNode(node);
        if (mojoNode.url) {
            // Url node type.
            if (changes.title !== undefined) {
                mojoNode.url.title = changes.title;
            }
            if (changes.url !== undefined) {
                mojoNode.url.url = changes.url;
            }
        }
        else if (mojoNode.folder) {
            // Folder node type. We ignore the url field.
            if (changes.title !== undefined) {
                mojoNode.folder.title = changes.title;
            }
        }
        else {
            throw new Error('unexpected bookmark node type encountered');
        }
        const parentId = Store.getInstance().data.nodes[id].parentId;
        return BookmarksService.getRemote().updateBookmarkNode(mojoNode).then(updated => {
            return normalizeMojoNode(updated, parentId);
        });
    }
    create(parentId, index, title, url) {
        // The url vs folder is implicitly determined by whether or not url is
        // defined.
        const mojoNode = toMojoNode({ id: '', title, url });
        return BookmarksService.getRemote()
            .createBookmarkNode({ value: parentId }, index, mojoNode)
            .then(mojoResponseNode => normalizeMojoNode(mojoResponseNode, parentId));
    }
    delete(idList) {
        const uuids = idList.map(id => {
            return { value: id };
        });
        return BookmarksService.getRemote().deleteBookmarkNodes(uuids).then(() => { });
    }
    handleMojoEvents(events) {
        for (const event of events) {
            const eventType = whichBookmarksEvent(event);
            switch (eventType) {
                case BookmarksEventFieldTags.ADDED:
                    this.handleMojoAdded_(event.added);
                    break;
                case BookmarksEventFieldTags.REMOVED:
                    this.handleMojoRemoved_(event.removed);
                    break;
                case BookmarksEventFieldTags.MOVED:
                    this.handleMojoMoved_(event.moved);
                    break;
                case BookmarksEventFieldTags.CHANGED:
                    this.handleMojoChanged_(event.changed);
                    break;
                default:
                    assertNotReachedCase();
            }
        }
    }
    handleMojoAdded_(event) {
        this.onCreated.forward(event.parentId.value, event.index, normalizeMojoNode(event.node, event.parentId.value));
    }
    handleMojoRemoved_(event) {
        const id = event.id.value;
        const store = Store.getInstance();
        const node = store.data.nodes[id];
        if (node) {
            const parentId = node.parentId;
            const parentNode = store.data.nodes[parentId];
            const index = parentNode ? parentNode.children.indexOf(id) : -1;
            this.onRemoved.forward(id, parentId, index);
        }
    }
    handleMojoMoved_(event) {
        const oldParentId = event.oldParentId.value;
        const newParentId = event.newParentId.value;
        const store = Store.getInstance();
        const oldParentNode = store.data.nodes[oldParentId];
        // Folder node type is implicitly determined by existence of "children"
        // field.
        assert(!!oldParentNode && !!oldParentNode.children, 'expected node: ' + oldParentId + ' to be a folder, but it is not');
        const id = oldParentNode.children[event.oldIndex];
        assert(id !== undefined, 'expected to find [' + event.oldIndex + '], at folder: ' + oldParentId +
            ', but could not find a node at that index');
        this.onMoved.forward(id, oldParentId, event.oldIndex, newParentId, event.newIndex);
    }
    handleMojoChanged_(event) {
        const id = event.node.url?.id?.value || event.node.folder?.id?.value || '';
        const targetNode = Store.getInstance().data.nodes[id];
        assert(!!targetNode, 'change target not found');
        const parentId = targetNode.parentId;
        // All non-root nodes should have a parentId and root nodes cannot be
        // changed
        assert(!!parentId, 'target node does not have a parent, this is an invalid state');
        this.onChanged.forward(id, normalizeMojoNode(event.node, parentId));
    }
    static getInstance() {
        return instance$o || (instance$o = new BookmarksApiProxyImpl());
    }
    static setInstance(obj) {
        instance$o = obj;
    }
}
let instance$o = null;

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BrowserProxyImpl {
    getIncognitoAvailability() {
        return sendWithPromise('getIncognitoAvailability');
    }
    getCanEditBookmarks() {
        return sendWithPromise('getCanEditBookmarks');
    }
    getCanUploadBookmarkToAccountStorage(id) {
        return sendWithPromise('getCanUploadBookmarkToAccountStorage', id);
    }
    recordInHistogram(histogram, bucket, maxBucket) {
        chrome.send('metricsHandler:recordInHistogram', [histogram, bucket, maxBucket]);
    }
    onSingleBookmarkUploadClicked(bookmarkId) {
        chrome.send('onSingleBookmarkUploadClicked', [bookmarkId]);
    }
    getPromoData() {
        return sendWithPromise('getPromoData');
    }
    onPromoShown() {
        chrome.send('onPromoShown');
    }
    onPromoClicked() {
        chrome.send('onPromoClicked');
    }
    onPromoDismissed() {
        chrome.send('onPromoDismissed');
    }
    static getInstance() {
        return instance$n || (instance$n = new BrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$n = obj;
    }
}
let instance$n = null;

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A debouncer which fires the given callback after a delay. The
 * delay can be refreshed by calling restartTimeout. Resetting the timeout with
 * no delay moves the callback to the end of the task queue.
 */
class Debouncer {
    callback_;
    timer_ = null;
    timerProxy_;
    boundTimerCallback_;
    isDone_ = false;
    promiseResolver_;
    constructor(callback) {
        this.callback_ = callback;
        this.timerProxy_ = window;
        this.boundTimerCallback_ = this.timerCallback_.bind(this);
        this.promiseResolver_ = new PromiseResolver();
    }
    /**
     * Starts the timer for the callback, cancelling the old timer if there is
     * one.
     */
    restartTimeout(delay) {
        assert(!this.isDone_);
        this.cancelTimeout_();
        this.timer_ =
            this.timerProxy_.setTimeout(this.boundTimerCallback_, delay || 0);
    }
    done() {
        return this.isDone_;
    }
    get promise() {
        return this.promiseResolver_.promise;
    }
    /**
     * Resets the debouncer as if it had been newly instantiated.
     */
    reset() {
        this.isDone_ = false;
        this.promiseResolver_ = new PromiseResolver();
        this.cancelTimeout_();
    }
    /**
     * Cancel the timer callback, which can be restarted by calling
     * restartTimeout().
     */
    cancelTimeout_() {
        if (this.timer_) {
            this.timerProxy_.clearTimeout(this.timer_);
        }
    }
    timerCallback_() {
        this.isDone_ = true;
        this.callback_.call(this);
        this.promiseResolver_.resolve();
    }
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Listener functions which translate events from the
 * chrome.bookmarks API into actions to modify the local page state.
 */
let trackUpdates = false;
let updatedItems = [];
let debouncer = null;
/**
 * Batches UI updates so that no changes will be made to UI until the next
 * task after the last call to this method. This is useful for listeners which
 * can be called in a tight loop by UI actions.
 */
function batchUIUpdates() {
    if (debouncer === null) {
        debouncer = new Debouncer(() => Store.getInstance().endBatchUpdate());
    }
    if (debouncer.done()) {
        Store.getInstance().beginBatchUpdate();
        debouncer.reset();
    }
    debouncer.restartTimeout();
}
/**
 * Tracks any items that are created or moved.
 */
function trackUpdatedItems() {
    trackUpdates = true;
}
function highlightUpdatedItemsImpl() {
    if (!trackUpdates) {
        return;
    }
    document.dispatchEvent(new CustomEvent('highlight-items', {
        detail: updatedItems,
    }));
    updatedItems = [];
    trackUpdates = false;
}
/**
 * Highlights any items that have been updated since |trackUpdatedItems| was
 * called. Should be called after a user action causes new items to appear in
 * the main list.
 */
function highlightUpdatedItems() {
    // Ensure that the items are highlighted after the current batch update (if
    // there is one) is completed.
    if (!debouncer) {
        highlightUpdatedItemsImpl();
        return;
    }
    debouncer.promise.then(highlightUpdatedItemsImpl);
}
function dispatch(action) {
    Store.getInstance().dispatch(action);
}
function onBookmarkChanged(id, node) {
    dispatch(editBookmark$1(id, { title: node.title, url: node.url }));
}
function onBookmarkCreated(parentId, index, node) {
    batchUIUpdates();
    if (trackUpdates) {
        updatedItems.push(node.id);
    }
    dispatch(createBookmark$1(parentId, index, node));
}
function onBookmarkRemoved(id, parentId, index) {
    batchUIUpdates();
    const nodes = Store.getInstance().data.nodes;
    dispatch(removeBookmark$1(id, parentId, index, nodes));
}
function onBookmarkMoved(id, oldParentId, oldIndex, newParentId, newIndex) {
    batchUIUpdates();
    if (trackUpdates) {
        updatedItems.push(id);
    }
    dispatch(moveBookmark$1(id, newParentId, newIndex, oldParentId, oldIndex));
}
function onChildrenReordered(id, reorderInfo) {
    dispatch(reorderChildren$1(id, reorderInfo.childIds));
}
function onIncognitoAvailabilityChanged(availability) {
    dispatch(setIncognitoAvailability(availability));
}
function onCanEditBookmarksChanged(canEdit) {
    dispatch(setCanEditBookmarks(canEdit));
}
let incognitoAvailabilityListener = null;
let canEditBookmarksListener = null;
function init() {
    const apiProxy = BookmarksApiProxyImpl.getInstance();
    apiProxy.onChanged.addListener(onBookmarkChanged);
    apiProxy.onChildrenReordered.addListener(onChildrenReordered);
    apiProxy.onCreated.addListener(onBookmarkCreated);
    apiProxy.onMoved.addListener(onBookmarkMoved);
    apiProxy.onRemoved.addListener(onBookmarkRemoved);
    const browserProxy = BrowserProxyImpl.getInstance();
    browserProxy.getIncognitoAvailability().then(onIncognitoAvailabilityChanged);
    incognitoAvailabilityListener = addWebUiListener('incognito-availability-changed', onIncognitoAvailabilityChanged);
    browserProxy.getCanEditBookmarks().then(onCanEditBookmarksChanged);
    canEditBookmarksListener =
        addWebUiListener('can-edit-bookmarks-changed', onCanEditBookmarksChanged);
}
function destroy() {
    const apiProxy = BookmarksApiProxyImpl.getInstance();
    apiProxy.onChanged.removeListener(onBookmarkChanged);
    apiProxy.onChildrenReordered.removeListener(onChildrenReordered);
    apiProxy.onCreated.removeListener(onBookmarkCreated);
    apiProxy.onMoved.removeListener(onBookmarkMoved);
    apiProxy.onRemoved.removeListener(onBookmarkRemoved);
    if (incognitoAvailabilityListener) {
        removeWebUiListener(incognitoAvailabilityListener);
    }
    if (canEditBookmarksListener) {
        removeWebUiListener(canEditBookmarksListener);
    }
}
function setDebouncerForTesting() {
    debouncer = new Debouncer(() => { });
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Manages focus restoration for modal dialogs. After the final dialog in a
 * stack is closed, restores focus to the element which was focused when the
 * first dialog was opened.
 */
class DialogFocusManager {
    previousFocusElement_ = null;
    dialogs_ = new Set();
    showDialog(dialog, showFn) {
        if (!showFn) {
            showFn = function () {
                dialog.showModal();
            };
        }
        // Update the focus if there are no open dialogs or if this is the only
        // dialog and it's getting reshown.
        if (!this.dialogs_.size ||
            (this.dialogs_.has(dialog) && this.dialogs_.size === 1)) {
            this.updatePreviousFocus_();
        }
        if (!this.dialogs_.has(dialog)) {
            dialog.addEventListener('close', this.getCloseListener_(dialog));
            this.dialogs_.add(dialog);
        }
        showFn();
    }
    /**
     * @return True if the document currently has an open dialog.
     */
    hasOpenDialog() {
        return this.dialogs_.size > 0;
    }
    /**
     * Clears the stored focus element, so that focus does not restore when all
     * dialogs are closed.
     */
    clearFocus() {
        this.previousFocusElement_ = null;
    }
    updatePreviousFocus_() {
        this.previousFocusElement_ = this.getFocusedElement_();
    }
    getFocusedElement_() {
        let focus = document.activeElement;
        while (focus.shadowRoot && focus.shadowRoot.activeElement) {
            focus = focus.shadowRoot.activeElement;
        }
        return focus;
    }
    getCloseListener_(dialog) {
        const closeListener = (_e) => {
            // If the dialog is open, then it got reshown immediately and we
            // shouldn't clear it until it is closed again.
            if (dialog.open) {
                return;
            }
            assert(this.dialogs_.delete(dialog));
            // Focus the originally focused element if there are no more dialogs.
            if (!this.hasOpenDialog() && this.previousFocusElement_) {
                this.previousFocusElement_.focus();
            }
            dialog.removeEventListener('close', closeListener);
        };
        return closeListener;
    }
    static getInstance() {
        return instance$m || (instance$m = new DialogFocusManager());
    }
    static setInstance(obj) {
        instance$m = obj;
    }
}
let instance$m = null;

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$b() {
    // clang-format off
    return html `<!--_html_template_start_-->
<cr-dialog id="dialog">
  <div slot="title">${this.getDialogTitle_()}</div>
  <div slot="body">
    <cr-input id="name" label="$i18n{editDialogNameInput}"
        value="${this.titleValue_}"
        @value-changed="${this.onTitleValueChanged_}" autofocus>
    </cr-input>
    <cr-input id="url" type="url" label="$i18n{editDialogUrlInput}"
        error-message="$i18n{editDialogInvalidUrl}" value="${this.urlValue_}"
        @value-changed="${this.onUrlValueChanged_}" ?hidden="${this.isFolder_}"
        required>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" @click="${this.onCancelButtonClick_}">
      $i18n{cancel}
    </cr-button>
    <cr-button id="saveButton" class="action-button"
        @click="${this.onSaveButtonClick_}">
      $i18n{saveEdit}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BookmarksEditDialogElement extends CrLitElement {
    static get is() {
        return 'bookmarks-edit-dialog';
    }
    static get styles() {
        return getCss$j();
    }
    render() {
        return getHtml$b.bind(this)();
    }
    static get properties() {
        return {
            isFolder_: { type: Boolean },
            isEdit_: { type: Boolean },
            /**
             * Item that is being edited, or null when adding.
             */
            editItem_: { type: Object },
            /**
             * Parent node for the item being added, or null when editing.
             */
            parentId_: { type: String },
            titleValue_: { type: String },
            urlValue_: { type: String },
        };
    }
    #isFolder__accessor_storage = false;
    get isFolder_() { return this.#isFolder__accessor_storage; }
    set isFolder_(value) { this.#isFolder__accessor_storage = value; }
    #isEdit__accessor_storage = false;
    get isEdit_() { return this.#isEdit__accessor_storage; }
    set isEdit_(value) { this.#isEdit__accessor_storage = value; }
    #editItem__accessor_storage = null;
    get editItem_() { return this.#editItem__accessor_storage; }
    set editItem_(value) { this.#editItem__accessor_storage = value; }
    #parentId__accessor_storage = null;
    get parentId_() { return this.#parentId__accessor_storage; }
    set parentId_(value) { this.#parentId__accessor_storage = value; }
    #titleValue__accessor_storage = '';
    get titleValue_() { return this.#titleValue__accessor_storage; }
    set titleValue_(value) { this.#titleValue__accessor_storage = value; }
    #urlValue__accessor_storage = '';
    get urlValue_() { return this.#urlValue__accessor_storage; }
    set urlValue_(value) { this.#urlValue__accessor_storage = value; }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const urlInput = this.$.url;
        const nameInput = this.$.name;
        // Intercept paste for the URL and name textfields
        // provide sanitized clipboard text
        urlInput.addEventListener('paste', this.onPaste_.bind(this, urlInput));
        nameInput.addEventListener('paste', this.onPaste_.bind(this, nameInput));
    }
    onPaste_(inputComponent, e) {
        const text = e.clipboardData?.getData('text/plain');
        if (!text) {
            return;
        }
        // Limit to 500KB to match Chrome address bar (Omnibox) behavior and
        // prevent performance issues with extremely long strings.
        if (text.length <= MAX_BOOKMARK_INPUT_LENGTH) {
            return;
        }
        e.preventDefault();
        const truncated = text.substring(0, MAX_BOOKMARK_INPUT_LENGTH);
        // Insert the truncated text using setRangeText, which is the modern
        // replacement for execCommand('insertText').
        // Note: This may not preserve the undo history as robustly as execCommand
        // in all cases, but it is the standard API.
        const input = inputComponent.inputElement;
        const start = input.selectionStart || 0;
        const end = input.selectionEnd || 0;
        input.setRangeText(truncated, start, end, 'end');
        // Manually trigger input/change events so cr-input updates its value.
        input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
        input.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }
    /**
     * Show the dialog to add a new folder (if |isFolder|) or item, which will be
     * inserted into the tree as a child of |parentId|.
     */
    showAddDialog(isFolder, parentId) {
        this.reset_();
        this.isEdit_ = false;
        this.isFolder_ = isFolder;
        this.parentId_ = parentId;
        DialogFocusManager.getInstance().showDialog(this.$.dialog);
    }
    /** Show the edit dialog for |editItem|. */
    showEditDialog(editItem) {
        this.reset_();
        this.isEdit_ = true;
        this.isFolder_ = !editItem.url;
        this.editItem_ = editItem;
        this.titleValue_ = editItem.title;
        if (!this.isFolder_) {
            assert(editItem.url);
            this.urlValue_ = editItem.url;
        }
        DialogFocusManager.getInstance().showDialog(this.$.dialog);
    }
    /**
     * Clear out existing values from the dialog, allowing it to be reused.
     */
    reset_() {
        this.editItem_ = null;
        this.parentId_ = null;
        this.$.url.invalid = false;
        this.titleValue_ = '';
        this.urlValue_ = '';
    }
    getDialogTitle_() {
        let title;
        if (this.isEdit_) {
            title = this.isFolder_ ? 'renameFolderTitle' : 'editBookmarkTitle';
        }
        else {
            title = this.isFolder_ ? 'addFolderTitle' : 'addBookmarkTitle';
        }
        return loadTimeData.getString(title);
    }
    onTitleValueChanged_(e) {
        this.titleValue_ = e.detail.value;
    }
    onUrlValueChanged_(e) {
        this.urlValue_ = e.detail.value;
    }
    /**
     * Validates the value of the URL field, returning true if it is a valid URL.
     * May modify the value by prepending 'http://' in order to make it valid.
     * Note: Made public only for the purposes of testing.
     */
    validateUrl() {
        const urlInput = this.$.url;
        // Early check for URL length
        // avoid performance issues with extremely long URLs.
        // Limit to 500KB to match Chrome address bar (Omnibox) behavior.
        if (this.urlValue_.length > MAX_BOOKMARK_INPUT_LENGTH) {
            return false;
        }
        if (urlInput.validate()) {
            return true;
        }
        const originalValue = this.urlValue_;
        this.urlValue_ = 'http://' + originalValue;
        // Force an update to propagate this to the cr-input synchronously. This is
        // not best for performance, but validate() already forces an update to
        // the cr-input by calling performUpdate() on that element below, and this
        // method is not expected to be frequently called.
        this.performUpdate();
        if (urlInput.validate()) {
            return true;
        }
        this.urlValue_ = originalValue;
        return false;
    }
    onSaveButtonClick_() {
        const edit = {
            'title': this.titleValue_.substring(0, MAX_BOOKMARK_INPUT_LENGTH),
        };
        if (!this.isFolder_) {
            if (!this.validateUrl()) {
                return;
            }
            edit['url'] = this.urlValue_;
        }
        if (this.isEdit_) {
            BookmarksApiProxyImpl.getInstance().update(this.editItem_.id, edit);
        }
        else {
            trackUpdatedItems();
            // Editable nodes all have parents. The only nodes that do not have
            // parents are permanent nodes, which are not editable.
            assert(this.parentId_ !== null);
            BookmarksApiProxyImpl.getInstance()
                .create(this.parentId_, null, edit.title, edit.url)
                .then(highlightUpdatedItems);
        }
        this.$.dialog.close();
    }
    onCancelButtonClick_() {
        this.$.dialog.cancel();
    }
}
customElements.define(BookmarksEditDialogElement.is, BookmarksEditDialogElement);

let instance$l = null;
function getCss$g() {
    return instance$l || (instance$l = [...[], css `:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}`]);
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$a() {
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
        return getCss$g();
    }
    render() {
        return getHtml$a.bind(this)();
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

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** This is used to identify keyboard shortcuts. */
class KeyboardShortcut {
    useKeyCode_ = false;
    mods_ = {};
    key_ = null;
    keyCode_ = null;
    /**
     * @param shortcut The text used to describe the keys for this
     *     keyboard shortcut.
     */
    constructor(shortcut) {
        shortcut.split('|').forEach((part) => {
            const partLc = part.toLowerCase();
            switch (partLc) {
                case 'alt':
                case 'ctrl':
                case 'meta':
                case 'shift':
                    this.mods_[partLc + 'Key'] = true;
                    break;
                default:
                    if (this.key_) {
                        throw Error('Invalid shortcut');
                    }
                    this.key_ = part;
                    // For single key alpha shortcuts use event.keyCode rather than
                    // event.key to match how chrome handles shortcuts and allow
                    // non-english language input to work.
                    if (part.match(/^[a-z]$/)) {
                        this.useKeyCode_ = true;
                        this.keyCode_ = part.toUpperCase().charCodeAt(0);
                    }
            }
        });
    }
    /**
     * Whether the keyboard shortcut object matches a keyboard event.
     * @param e The keyboard event object.
     * @return Whether we found a match or not.
     */
    matchesEvent(e) {
        if ((this.useKeyCode_ && e.keyCode === this.keyCode_) ||
            e.key === this.key_) {
            // All keyboard modifiers need to match.
            const mods = this.mods_;
            return ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].every(function (k) {
                return e[k] === !!mods[k];
            });
        }
        return false;
    }
}
/** A list of keyboard shortcuts which all perform one command. */
class KeyboardShortcutList {
    shortcuts_;
    /**
     * @param shortcuts Text-based representation of one or more
     *     keyboard shortcuts, separated by spaces.
     */
    constructor(shortcuts) {
        this.shortcuts_ = shortcuts.split(/\s+/).map(function (shortcut) {
            return new KeyboardShortcut(shortcut);
        });
    }
    /**
     * Returns true if any of the keyboard shortcuts in the list matches a
     * keyboard event.
     */
    matchesEvent(e) {
        return this.shortcuts_.some(function (keyboardShortcut) {
            return keyboardShortcut.matchesEvent(e);
        });
    }
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used to get a pluralized string.
 */
// clang-format off
class PluralStringProxyImpl {
    getPluralString(messageName, itemCount) {
        return sendWithPromise('getPluralString', messageName, itemCount);
    }
    getPluralStringTupleWithComma(messageName1, itemCount1, messageName2, itemCount2) {
        return sendWithPromise('getPluralStringTupleWithComma', messageName1, itemCount1, messageName2, itemCount2);
    }
    getPluralStringTupleWithPeriods(messageName1, itemCount1, messageName2, itemCount2) {
        return sendWithPromise('getPluralStringTupleWithPeriods', messageName1, itemCount1, messageName2, itemCount2);
    }
    static getInstance() {
        return instance$k || (instance$k = new PluralStringProxyImpl());
    }
    static setInstance(obj) {
        instance$k = obj;
    }
}
let instance$k = null;

class BookmarkManagerApiProxyImpl {
    onDragEnter = chrome.bookmarkManagerPrivate.onDragEnter;
    drop(parentId, index) {
        return chrome.bookmarkManagerPrivate.drop(parentId, index);
    }
    startDrag(idList, dragNodeIndex, isFromTouch, x, y) {
        return chrome.bookmarkManagerPrivate.startDrag(idList, dragNodeIndex, isFromTouch, x, y);
    }
    removeTrees(idList) {
        return chrome.bookmarkManagerPrivate.removeTrees(idList);
    }
    canPaste(parentId) {
        return chrome.bookmarkManagerPrivate.canPaste(parentId);
    }
    isActiveTabInSplit() {
        return chrome.bookmarkManagerPrivate.isActiveTabInSplit();
    }
    openInNewWindow(idList, incognito) {
        chrome.bookmarkManagerPrivate.openInNewWindow(idList, incognito);
    }
    openInNewTab(id, params) {
        chrome.bookmarkManagerPrivate.openInNewTab(id, { active: params.active, split: params.split });
    }
    openInNewTabGroup(idList) {
        chrome.bookmarkManagerPrivate.openInNewTabGroup(idList);
    }
    cut(idList) {
        return chrome.bookmarkManagerPrivate.cut(idList);
    }
    paste(parentId, selectedIdList) {
        return chrome.bookmarkManagerPrivate.paste(parentId, selectedIdList);
    }
    copy(idList) {
        return chrome.bookmarkManagerPrivate.copy(idList);
    }
    static getInstance() {
        return instance$j || (instance$j = new BookmarkManagerApiProxyImpl());
    }
    static setInstance(obj) {
        instance$j = obj;
    }
}
let instance$j = null;

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$9() {
    // clang-format off
    return html `<!--_html_template_start_-->
<cr-lazy-render-lit id="dropdown"
    .template="${() => html `
      <cr-action-menu @mousedown="${this.onMenuMousedown_}"
          role-description="$i18n{menu}">
        ${this.computeMenuCommands_().map(command => html `
          <button class="dropdown-item" data-command="${command}"
              ?hidden="${!this.isCommandVisible_(command, this.menuIds_)}"
              ?disabled="${!this.isCommandEnabled_(command, this.menuIds_)}"
              @click="${this.onCommandClick_}">
            ${this.getCommandLabel_(command)}
          </button>
          <hr ?hidden="${!this.showDividerAfter_(command)}" aria-hidden="true">
        `)}
      </cr-action-menu>
    `}">
</cr-lazy-render-lit>
${this.showEditDialog_ ? html `
  <bookmarks-edit-dialog></bookmarks-edit-dialog>
` : ''}
${this.showOpenDialog_ ? html `
  <cr-dialog>
    <div slot="title">$i18n{openDialogTitle}</div>
    <div slot="body"></div>
    <div slot="button-container">
      <cr-button class="cancel-button" @click="${this.onOpenCancelClick_}">
        $i18n{cancel}
      </cr-button>
      <cr-button class="action-button" @click="${this.onOpenConfirmClick_}">
        $i18n{openDialogConfirm}
      </cr-button>
    </div>
  </cr-dialog>
` : ''}
<!--_html_template_end_-->`;
    // clang-format on
}

const sheet = new CSSStyleSheet();
sheet.replaceSync(`html{--card-max-width:960px;--card-padding-side:32px;--folder-icon-color:#757575;--folder-inactive-color:#5a5a5a;--highlight-color:var(--google-blue-50);--interactive-color:var(--google-blue-500);--iron-icon-height:20px;--iron-icon-width:20px;--min-sidebar-width:256px;--splitter-width:15px}@media (prefers-color-scheme:dark){html{--folder-icon-color:var(--google-grey-500);--folder-inactive-color:var(--google-grey-500);--highlight-color:var(--google-blue-300);--interactive-color:var(--google-blue-300)}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

let instance$i = null;
function getCss$f() {
    return instance$i || (instance$i = [...[getCss$j()], css `hr{background:rgba(0,0,0,0.11);border-width:0;height:1px;margin:8px 0}@media (prefers-color-scheme:dark){hr{background:var(--cr-separator-color)}}.drag-above::before,.drag-below::after{background-clip:padding-box;background-color:var(--interactive-color);border:3px solid var(--interactive-color);border-bottom-color:transparent;border-radius:0;border-top-color:transparent;box-sizing:border-box;content:'';display:block;height:8px;left:0;position:absolute;right:0;z-index:1}.drag-above::before{top:0;transform:translateY(-50%)}.drag-below::after{bottom:0;transform:translateY(50%)}.drag-on{background-color:var(--highlight-color)}:host-context([hide-focus-ring]) [tabindex]:focus{outline:none}.folder-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--iron-icon-fill-color);height:var(--cr-icon-size);width:var(--cr-icon-size)}:host-context([dir=rtl]) .folder-icon{transform:scaleX(-1)}.website-icon{background-repeat:no-repeat;height:16px;margin:2px;width:16px}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const StoreClientMixinLit = (superClass) => {
    class StoreClientMixinLit extends superClass {
        connectedCallback() {
            super.connectedCallback();
            Store.getInstance().addObserver(this);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            Store.getInstance().removeObserver(this);
        }
        dispatch(action) {
            Store.getInstance().dispatch(action);
        }
        dispatchAsync(action) {
            Store.getInstance().dispatchAsync(action);
        }
        updateFromStore() {
            if (Store.getInstance().isInitialized()) {
                this.onStateChanged(this.getState());
            }
        }
        onStateChanged(_state) {
            // Should be overridden by clients who want to modify private state
            // in response to state changes.
        }
        getState() {
            return Store.getInstance().data;
        }
        getStore() {
            return Store.getInstance();
        }
    }
    return StoreClientMixinLit;
};

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Element which shows context menus and handles keyboard
 * shortcuts.
 */
const BookmarksCommandManagerElementBase = StoreClientMixinLit(CrLitElement);
let instance$h = null;
class BookmarksCommandManagerElement extends BookmarksCommandManagerElementBase {
    static get is() {
        return 'bookmarks-command-manager';
    }
    static get styles() {
        return getCss$f();
    }
    render() {
        return getHtml$9.bind(this)();
    }
    static get properties() {
        return {
            menuIds_: { type: Object },
            menuSource_: { type: Number },
            canPaste_: { type: Boolean },
            isActiveTabInSplit_: { type: Boolean },
            globalCanEdit_: { type: Boolean },
            showEditDialog_: { type: Boolean },
            showOpenDialog_: { type: Boolean },
        };
    }
    #menuSource__accessor_storage = MenuSource.NONE;
    /**
     * Indicates where the context menu was opened from. Will be NONE if
     * menu is not open, indicating that commands are from keyboard shortcuts
     * or elsewhere in the UI.
     */
    get menuSource_() { return this.#menuSource__accessor_storage; }
    set menuSource_(value) { this.#menuSource__accessor_storage = value; }
    confirmOpenCallback_ = null;
    #canPaste__accessor_storage = false;
    get canPaste_() { return this.#canPaste__accessor_storage; }
    set canPaste_(value) { this.#canPaste__accessor_storage = value; }
    #isActiveTabInSplit__accessor_storage = false;
    get isActiveTabInSplit_() { return this.#isActiveTabInSplit__accessor_storage; }
    set isActiveTabInSplit_(value) { this.#isActiveTabInSplit__accessor_storage = value; }
    #globalCanEdit__accessor_storage = false;
    get globalCanEdit_() { return this.#globalCanEdit__accessor_storage; }
    set globalCanEdit_(value) { this.#globalCanEdit__accessor_storage = value; }
    #menuIds__accessor_storage = new Set();
    get menuIds_() { return this.#menuIds__accessor_storage; }
    set menuIds_(value) { this.#menuIds__accessor_storage = value; }
    #showEditDialog__accessor_storage = false;
    get showEditDialog_() { return this.#showEditDialog__accessor_storage; }
    set showEditDialog_(value) { this.#showEditDialog__accessor_storage = value; }
    #showOpenDialog__accessor_storage = false;
    get showOpenDialog_() { return this.#showOpenDialog__accessor_storage; }
    set showOpenDialog_(value) { this.#showOpenDialog__accessor_storage = value; }
    browserProxy_ = BrowserProxyImpl.getInstance();
    shortcuts_ = new Map();
    eventTracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        assert(instance$h === null);
        instance$h = this;
        this.updateFromStore();
        this.addShortcut_(Command.EDIT, 'F2', 'Enter');
        this.addShortcut_(Command.DELETE, 'Delete', 'Delete Backspace');
        this.addShortcut_(Command.OPEN, 'Enter', 'Meta|o');
        this.addShortcut_(Command.OPEN_NEW_TAB, 'Ctrl|Enter', 'Meta|Enter');
        this.addShortcut_(Command.OPEN_NEW_WINDOW, 'Shift|Enter');
        // Note: the undo shortcut is also defined in bookmarks_ui.cc
        // TODO(b/893033): de-duplicate shortcut by moving all shortcut
        // definitions from JS to C++.
        this.addShortcut_(Command.UNDO, 'Ctrl|z', 'Meta|z');
        this.addShortcut_(Command.REDO, 'Ctrl|y Ctrl|Shift|Z', 'Meta|Shift|Z');
        this.addShortcut_(Command.SELECT_ALL, 'Ctrl|a', 'Meta|a');
        this.addShortcut_(Command.DESELECT_ALL, 'Escape');
        this.addShortcut_(Command.CUT, 'Ctrl|x', 'Meta|x');
        this.addShortcut_(Command.COPY, 'Ctrl|c', 'Meta|c');
        this.addShortcut_(Command.PASTE, 'Ctrl|v', 'Meta|v');
        this.eventTracker_.add(document, 'open-command-menu', (e) => this.onOpenCommandMenu_(e));
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeydown_(e));
        const addDocumentListenerForCommand = (eventName, command) => {
            this.eventTracker_.add(document, eventName, (e) => {
                if (e.composedPath()[0].tagName === 'INPUT') {
                    return;
                }
                const items = this.getState().selection.items;
                if (this.canExecute(command, items)) {
                    this.handle(command, items);
                }
            });
        };
        addDocumentListenerForCommand('command-undo', Command.UNDO);
        addDocumentListenerForCommand('cut', Command.CUT);
        addDocumentListenerForCommand('copy', Command.COPY);
        addDocumentListenerForCommand('paste', Command.PASTE);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        instance$h = null;
        this.eventTracker_.removeAll();
        this.menuIds_.clear();
        this.shortcuts_.clear();
    }
    onStateChanged(state) {
        this.globalCanEdit_ = state.prefs.canEdit;
    }
    getMenuIdsForTesting() {
        return this.menuIds_;
    }
    getMenuSourceForTesting() {
        return this.menuSource_;
    }
    /**
     * Display the command context menu at (|x|, |y|) in window coordinates.
     * Commands will execute on |items| if given, or on the currently selected
     * items.
     */
    openCommandMenuAtPosition(x, y, source, items) {
        this.menuSource_ = source;
        this.menuIds_ = items || this.getState().selection.items;
        // Wait for the changes above to reflect in the DOM before showing the menu.
        this.updateComplete.then(() => {
            const dropdown = this.$.dropdown.get();
            DialogFocusManager.getInstance().showDialog(dropdown.getDialog(), function () {
                dropdown.showAtPosition({ top: y, left: x });
            });
        });
    }
    /**
     * Display the command context menu positioned to cover the |target|
     * element. Commands will execute on the currently selected items.
     */
    openCommandMenuAtElement(target, source) {
        this.menuSource_ = source;
        this.menuIds_ = this.getState().selection.items;
        // Wait for the changes above to reflect in the DOM before showing the menu.
        this.updateComplete.then(() => {
            const dropdown = this.$.dropdown.get();
            DialogFocusManager.getInstance().showDialog(dropdown.getDialog(), function () {
                dropdown.showAt(target);
            });
        });
    }
    closeCommandMenu() {
        this.menuIds_ = new Set();
        this.menuSource_ = MenuSource.NONE;
        this.$.dropdown.get().close();
    }
    ////////////////////////////////////////////////////////////////////////////
    // Command handlers:
    /**
     * Determine if the |command| can be executed with the given |itemIds|.
     * Commands which appear in the context menu should be implemented
     * separately using `isCommandVisible_` and `isCommandEnabled_`.
     */
    canExecute(command, itemIds) {
        const state = this.getState();
        switch (command) {
            case Command.OPEN:
                return itemIds.size > 0;
            case Command.UNDO:
            case Command.REDO:
                return this.globalCanEdit_;
            case Command.SELECT_ALL:
            case Command.DESELECT_ALL:
                return true;
            case Command.COPY:
            case Command.CUT:
                return itemIds.size > 0 && this.isCommandEnabled_(command, itemIds);
            case Command.PASTE:
                return state.search.term === '' &&
                    canReorderChildren(state, state.selectedFolder);
            default:
                return this.isCommandVisible_(command, itemIds) &&
                    this.isCommandEnabled_(command, itemIds);
        }
    }
    isCommandVisible_(command, itemIds) {
        switch (command) {
            case Command.EDIT:
                return itemIds.size === 1 && this.globalCanEdit_;
            case Command.PASTE:
                return this.globalCanEdit_;
            case Command.CUT:
            case Command.COPY:
                return itemIds.size >= 1 && this.globalCanEdit_;
            case Command.DELETE:
                return itemIds.size > 0 && this.globalCanEdit_;
            case Command.SHOW_IN_FOLDER:
                return this.menuSource_ === MenuSource.ITEM && itemIds.size === 1 &&
                    this.getState().search.term !== '' &&
                    !isRootOrChildOfRoot(this.getState(), Array.from(itemIds)[0]);
            case Command.OPEN_INCOGNITO:
            case Command.OPEN_NEW_GROUP:
            case Command.OPEN_NEW_TAB:
            case Command.OPEN_NEW_WINDOW:
            case Command.OPEN_SPLIT_VIEW:
                return itemIds.size > 0;
            case Command.OPEN_ISOLATED:
                return itemIds.size > 0 &&
                    loadTimeData.getBoolean('isIsolatedModeEnabled');
            case Command.ADD_BOOKMARK:
            case Command.ADD_FOLDER:
            case Command.SORT:
            case Command.EXPORT:
            case Command.IMPORT:
            case Command.HELP_CENTER:
                return true;
            case Command.COPY:
            case Command.CUT:
            case Command.DESELECT_ALL:
            case Command.OPEN:
            case Command.OPEN_BOOKMARK:
            case Command.OPEN_FOLDER:
            case Command.PASTE:
            case Command.REDO:
            case Command.SELECT_ALL:
            case Command.UNDO:
            case Command.MAX_VALUE:
                return false;
            default:
                assertNotReachedCase();
        }
    }
    isCommandEnabled_(command, itemIds) {
        const state = this.getState();
        switch (command) {
            case Command.EDIT:
            case Command.DELETE:
            case Command.CUT:
                return !this.containsMatchingNode_(itemIds, function (node) {
                    return !canEditNode(state, node.id);
                });
            case Command.OPEN_NEW_GROUP:
            case Command.OPEN_NEW_TAB:
            case Command.OPEN_NEW_WINDOW:
                return this.expandIds_(itemIds).length > 0;
            case Command.OPEN_INCOGNITO:
                return this.expandIds_(itemIds).length > 0 &&
                    state.prefs.incognitoAvailability !==
                        IncognitoAvailability.DISABLED &&
                    !loadTimeData.getBoolean('isIsolatedModeEnabled');
            case Command.OPEN_ISOLATED:
                return this.expandIds_(itemIds).length > 0 &&
                    state.prefs.incognitoAvailability !==
                        IncognitoAvailability.DISABLED &&
                    loadTimeData.getBoolean('isIsolatedModeEnabled');
            case Command.OPEN_SPLIT_VIEW:
                return this.expandIds_(itemIds).length === 1 &&
                    !this.isActiveTabInSplit_;
            case Command.SORT:
                return this.canChangeList_() &&
                    state.nodes[state.selectedFolder].children.length > 1;
            case Command.ADD_BOOKMARK:
            case Command.ADD_FOLDER:
                return this.canChangeList_();
            case Command.IMPORT:
                return this.globalCanEdit_;
            case Command.COPY:
                return !this.containsMatchingNode_(itemIds, function (node) {
                    return isRootNode(node.id);
                });
            case Command.PASTE:
                return this.canPaste_;
            default:
                return true;
        }
    }
    /**
     * Returns whether the currently displayed bookmarks list can be changed.
     */
    canChangeList_() {
        const state = this.getState();
        return state.search.term === '' &&
            canReorderChildren(state, state.selectedFolder);
    }
    async ensureEditDialog_() {
        if (!this.showEditDialog_) {
            this.showEditDialog_ = true;
            await this.updateComplete;
        }
        const editDialog = this.shadowRoot.querySelector('bookmarks-edit-dialog');
        assert(editDialog);
        return editDialog;
    }
    async ensureOpenDialog_() {
        if (!this.showOpenDialog_) {
            this.showOpenDialog_ = true;
            await this.updateComplete;
        }
        const openDialog = this.shadowRoot.querySelector('cr-dialog');
        assert(openDialog);
        return openDialog;
    }
    handle(command, itemIds) {
        const state = this.getState();
        switch (command) {
            case Command.EDIT: {
                const id = Array.from(itemIds)[0];
                this.ensureEditDialog_().then(dialog => dialog.showEditDialog(state.nodes[id]));
                break;
            }
            case Command.COPY: {
                const firstId = Array.from(itemIds)[0];
                const idList = Array.from(itemIds).map(id => getLegacyId(state.nodes[id]));
                BookmarkManagerApiProxyImpl.getInstance().copy(idList).then(() => {
                    let labelPromise;
                    if (idList.length === 1) {
                        labelPromise =
                            Promise.resolve(loadTimeData.getString('toastItemCopied'));
                    }
                    else {
                        labelPromise = PluralStringProxyImpl.getInstance().getPluralString('toastItemsCopied', idList.length);
                    }
                    this.showTitleToast_(labelPromise, state.nodes[firstId].title, false);
                });
                break;
            }
            case Command.SHOW_IN_FOLDER: {
                const id = Array.from(itemIds)[0];
                const parentId = state.nodes[id].parentId;
                assert(parentId);
                this.dispatch(selectFolder(parentId, state.nodes));
                DialogFocusManager.getInstance().clearFocus();
                this.fire('highlight-items', [id]);
                break;
            }
            case Command.DELETE: {
                const idList = Array.from(this.minimizeDeletionSet_(itemIds));
                const title = state.nodes[idList[0]].title;
                let labelPromise;
                if (idList.length === 1) {
                    labelPromise =
                        Promise.resolve(loadTimeData.getString('toastItemDeleted'));
                }
                else {
                    labelPromise = PluralStringProxyImpl.getInstance().getPluralString('toastItemsDeleted', idList.length);
                }
                BookmarksApiProxyImpl.getInstance().delete(idList).then(() => {
                    this.showTitleToast_(labelPromise, title, true);
                });
                break;
            }
            case Command.UNDO:
                chrome.bookmarkManagerPrivate.undo();
                getToastManager().hide();
                break;
            case Command.REDO:
                chrome.bookmarkManagerPrivate.redo();
                break;
            case Command.OPEN_INCOGNITO:
            case Command.OPEN_ISOLATED:
            case Command.OPEN_NEW_TAB:
            case Command.OPEN_NEW_WINDOW:
            case Command.OPEN_SPLIT_VIEW:
                this.openBookmarkIds_(this.expandIds_(itemIds), command);
                break;
            case Command.OPEN_NEW_GROUP:
                // Do not expand itemsIds because the folder node is needed to associate
                // with a tab group.
                this.openBookmarkIds_(Array.from(itemIds), command);
                break;
            case Command.OPEN:
                if (this.isFolder_(itemIds)) {
                    const folderId = Array.from(itemIds)[0];
                    this.dispatch(selectFolder(folderId, state.nodes));
                }
                else {
                    this.openBookmarkIds_(Array.from(itemIds), command);
                }
                break;
            case Command.SELECT_ALL:
                const displayedIds = getDisplayedList(state);
                this.dispatch(selectAll(displayedIds, state));
                break;
            case Command.DESELECT_ALL:
                this.dispatch(deselectItems$1());
                getInstance().announce(loadTimeData.getString('itemsUnselected'));
                break;
            case Command.CUT:
                BookmarkManagerApiProxyImpl.getInstance().cut(Array.from(itemIds).map(id => getLegacyId(state.nodes[id])));
                break;
            case Command.PASTE:
                const selectedFolder = state.selectedFolder;
                const selectedItems = state.selection.items;
                trackUpdatedItems();
                BookmarkManagerApiProxyImpl.getInstance()
                    .paste(getLegacyId(state.nodes[selectedFolder]), Array.from(selectedItems)
                    .map(id => getLegacyId(state.nodes[id])))
                    .then(highlightUpdatedItems);
                break;
            case Command.SORT:
                chrome.bookmarkManagerPrivate.sortChildren(getLegacyId(state.nodes[state.selectedFolder]));
                getToastManager().show(loadTimeData.getString('toastFolderSorted'));
                break;
            case Command.ADD_BOOKMARK:
                this.ensureEditDialog_().then(dialog => dialog.showAddDialog(false, state.selectedFolder));
                break;
            case Command.ADD_FOLDER:
                this.ensureEditDialog_().then(dialog => dialog.showAddDialog(true, state.selectedFolder));
                break;
            case Command.IMPORT:
                chrome.bookmarkManagerPrivate.import();
                break;
            case Command.EXPORT:
                chrome.bookmarkManagerPrivate.export();
                break;
            case Command.HELP_CENTER:
                window.open('https://community.brave.app', undefined, 'noreferrer');
                break;
            case Command.OPEN_BOOKMARK:
            case Command.OPEN_FOLDER:
            case Command.MAX_VALUE:
                break;
            default:
                assertNotReachedCase();
        }
        this.recordCommandHistogram_(itemIds, 'BookmarkManager.CommandExecuted', command);
    }
    handleKeyEvent(e, itemIds) {
        for (const commandTuple of this.shortcuts_) {
            const command = commandTuple[0];
            const shortcut = commandTuple[1];
            if (shortcut.matchesEvent(e) && this.canExecute(command, itemIds)) {
                this.handle(command, itemIds);
                e.stopPropagation();
                e.preventDefault();
                return true;
            }
        }
        return false;
    }
    ////////////////////////////////////////////////////////////////////////////
    // Private functions:
    /**
     * Register a keyboard shortcut for a command.
     */
    addShortcut_(command, shortcut, macShortcut) {
        shortcut = (isMac && macShortcut) ? macShortcut : shortcut;
        this.shortcuts_.set(command, new KeyboardShortcutList(shortcut));
    }
    /**
     * Minimize the set of |itemIds| by removing any node which has an ancestor
     * node already in the set. This ensures that instead of trying to delete
     * both a node and its descendant, we will only try to delete the topmost
     * node, preventing an error in the bookmarkManagerPrivate.removeTrees API
     * call.
     */
    minimizeDeletionSet_(itemIds) {
        const minimizedSet = new Set();
        const nodes = this.getState().nodes;
        itemIds.forEach(function (itemId) {
            let currentId = itemId;
            while (!isRootNode(currentId)) {
                const parentId = nodes[currentId].parentId;
                assert(parentId);
                currentId = parentId;
                if (itemIds.has(currentId)) {
                    return;
                }
            }
            minimizedSet.add(itemId);
        });
        return minimizedSet;
    }
    /**
     * Open the given |ids| in response to a |command|. May show a confirmation
     * dialog before opening large numbers of URLs.
     */
    openBookmarkIds_(ids, command) {
        assert(command === Command.OPEN || command === Command.OPEN_NEW_TAB ||
            command === Command.OPEN_NEW_WINDOW ||
            command === Command.OPEN_INCOGNITO ||
            command === Command.OPEN_ISOLATED ||
            command === Command.OPEN_SPLIT_VIEW ||
            command === Command.OPEN_NEW_GROUP);
        if (ids.length === 0) {
            return;
        }
        if (command === Command.OPEN_SPLIT_VIEW) {
            assert(ids.length === 1);
        }
        const openBookmarkIdsCallback = () => {
            const state = this.getState();
            const legacyIds = ids.map(id => getLegacyId(state.nodes[id]));
            const incognito = command === Command.OPEN_INCOGNITO ||
                command === Command.OPEN_ISOLATED;
            if (command === Command.OPEN_NEW_WINDOW || incognito) {
                BookmarkManagerApiProxyImpl.getInstance().openInNewWindow(legacyIds, incognito);
            }
            else if (command === Command.OPEN_SPLIT_VIEW) {
                BookmarkManagerApiProxyImpl.getInstance().openInNewTab(legacyIds.shift(), { active: false, split: true });
            }
            else if (command === Command.OPEN_NEW_GROUP) {
                BookmarkManagerApiProxyImpl.getInstance().openInNewTabGroup(legacyIds);
            }
            else {
                if (command === Command.OPEN) {
                    BookmarkManagerApiProxyImpl.getInstance().openInNewTab(legacyIds.shift(), { active: true, split: false });
                }
                legacyIds.forEach(function (id) {
                    BookmarkManagerApiProxyImpl.getInstance().openInNewTab(id, { active: false, split: false });
                });
            }
        };
        if (ids.length <= OPEN_CONFIRMATION_LIMIT) {
            openBookmarkIdsCallback();
            return;
        }
        this.confirmOpenCallback_ = openBookmarkIdsCallback;
        this.ensureOpenDialog_().then(dialog => {
            dialog.querySelector('[slot=body]').textContent =
                loadTimeData.getStringF('openDialogBody', ids.length);
            DialogFocusManager.getInstance().showDialog(dialog);
        });
    }
    /**
     * Returns all ids in the given set of nodes and their immediate children.
     * Note that these will be ordered by insertion order into the |itemIds|
     * set, and that it is possible to duplicate a id by passing in both the
     * parent ID and child ID.
     */
    expandIds_(itemIds) {
        const result = [];
        const nodes = this.getState().nodes;
        itemIds.forEach(function (itemId) {
            const node = nodes[itemId];
            if (node.url) {
                result.push(node.id);
            }
            else {
                node.children.forEach(function (child) {
                    const childNode = nodes[child];
                    if (childNode.id && childNode.url) {
                        result.push(childNode.id);
                    }
                });
            }
        });
        return result;
    }
    containsMatchingNode_(itemIds, predicate) {
        const nodes = this.getState().nodes;
        return Array.from(itemIds).some(function (id) {
            return !!nodes[id] && predicate(nodes[id]);
        });
    }
    isSingleBookmark_(itemIds) {
        return itemIds.size === 1 &&
            this.containsMatchingNode_(itemIds, function (node) {
                return !!node.url;
            });
    }
    isFolder_(itemIds) {
        return itemIds.size === 1 &&
            this.containsMatchingNode_(itemIds, node => !node.url);
    }
    getCommandLabel_(command) {
        // Handle non-pluralized strings first.
        let label = null;
        switch (command) {
            case Command.EDIT:
                if (this.menuIds_.size !== 1) {
                    return '';
                }
                const id = Array.from(this.menuIds_)[0];
                const itemUrl = this.getState().nodes[id].url;
                label = itemUrl ? 'menuEdit' : 'menuRename';
                break;
            case Command.CUT:
                label = 'menuCut';
                break;
            case Command.COPY:
                label = 'menuCopy';
                break;
            case Command.PASTE:
                label = 'menuPaste';
                break;
            case Command.DELETE:
                label = 'menuDelete';
                break;
            case Command.SHOW_IN_FOLDER:
                label = 'menuShowInFolder';
                break;
            case Command.SORT:
                label = 'menuSort';
                break;
            case Command.ADD_BOOKMARK:
                label = 'menuAddBookmark';
                break;
            case Command.ADD_FOLDER:
                label = 'menuAddFolder';
                break;
            case Command.IMPORT:
                label = 'menuImport';
                break;
            case Command.EXPORT:
                label = 'menuExport';
                break;
            case Command.HELP_CENTER:
                label = 'menuHelpCenter';
                break;
            case Command.OPEN_SPLIT_VIEW:
                label = 'menuOpenSplitView';
                break;
        }
        if (label !== null) {
            return loadTimeData.getString(label);
        }
        // Handle pluralized strings.
        switch (command) {
            case Command.OPEN_NEW_TAB:
                return this.getPluralizedOpenAllString_('menuOpenAllNewTab', 'menuOpenNewTab', 'menuOpenAllNewTabWithCount');
            case Command.OPEN_NEW_WINDOW:
                return this.getPluralizedOpenAllString_('menuOpenAllNewWindow', 'menuOpenNewWindow', 'menuOpenAllNewWindowWithCount');
            case Command.OPEN_INCOGNITO:
                return this.getPluralizedOpenAllString_('menuOpenAllIncognito', 'menuOpenIncognito', 'menuOpenAllIncognitoWithCount');
            case Command.OPEN_ISOLATED:
                return this.getPluralizedOpenAllString_('menuOpenAllIsolated', 'menuOpenIsolated', 'menuOpenAllIsolatedWithCount');
            case Command.OPEN_NEW_GROUP:
                return this.getPluralizedOpenAllString_('menuOpenAllNewTabGroup', 'menuOpenNewTabGroup', 'menuOpenAllNewTabGroupWithCount');
        }
        assertNotReached();
    }
    getPluralizedOpenAllString_(case0, case1, caseOther) {
        const multipleNodes = this.menuIds_.size > 1 ||
            this.containsMatchingNode_(this.menuIds_, node => !node.url);
        const ids = this.expandIds_(this.menuIds_);
        if (ids.length === 0) {
            return loadTimeData.getStringF(case0, ids.length);
        }
        if (ids.length === 1 && !multipleNodes) {
            return loadTimeData.getString(case1);
        }
        return loadTimeData.getStringF(caseOther, ids.length);
    }
    computeMenuCommands_() {
        switch (this.menuSource_) {
            case MenuSource.ITEM:
            case MenuSource.TREE:
                const defaultItemTreeCommands = [
                    Command.EDIT,
                    Command.SHOW_IN_FOLDER,
                    Command.DELETE,
                    Command.CUT,
                    Command.COPY,
                    Command.PASTE,
                    Command.OPEN_INCOGNITO,
                    Command.OPEN_ISOLATED,
                    Command.OPEN_NEW_GROUP,
                    Command.OPEN_NEW_TAB,
                    Command.OPEN_NEW_WINDOW,
                    Command.OPEN_SPLIT_VIEW,
                ];
                if (loadTimeData.getBoolean('menuSimplification')) {
                    return [
                        Command.EDIT,
                        Command.SHOW_IN_FOLDER,
                        Command.CUT,
                        Command.COPY,
                        Command.PASTE,
                        Command.DELETE,
                        Command.OPEN_NEW_TAB,
                        Command.OPEN_NEW_WINDOW,
                        Command.OPEN_SPLIT_VIEW,
                        Command.OPEN_NEW_GROUP,
                        Command.OPEN_INCOGNITO,
                        Command.OPEN_ISOLATED,
                    ];
                }
                return defaultItemTreeCommands;
            case MenuSource.TOOLBAR:
                return [
                    Command.SORT,
                    // <hr>
                    Command.ADD_BOOKMARK,
                    Command.ADD_FOLDER,
                    // <hr>
                    Command.IMPORT,
                    Command.EXPORT,
                    // <hr>
                    Command.HELP_CENTER,
                ];
            case MenuSource.LIST:
                return [
                    Command.ADD_BOOKMARK,
                    Command.ADD_FOLDER,
                ];
            case MenuSource.NUM_VALUES:
            case MenuSource.NONE:
                return [];
            default:
                assertNotReachedCase(this.menuSource_);
        }
    }
    showDividerAfter_(command) {
        if ((this.menuSource_ === MenuSource.ITEM ||
            this.menuSource_ === MenuSource.TREE) &&
            loadTimeData.getBoolean('menuSimplification')) {
            switch (command) {
                case Command.EDIT:
                    return !this.isCommandVisible_(Command.SHOW_IN_FOLDER, this.menuIds_) &&
                        this.isCommandVisible_(Command.EDIT, this.menuIds_);
                case Command.SHOW_IN_FOLDER:
                    return this.isCommandVisible_(Command.SHOW_IN_FOLDER, this.menuIds_);
                case Command.PASTE:
                    return this.isCommandVisible_(Command.PASTE, this.menuIds_);
                case Command.DELETE:
                    return this.isCommandVisible_(Command.DELETE, this.menuIds_);
                default:
                    return false;
            }
        }
        switch (command) {
            case Command.SORT:
            case Command.ADD_FOLDER:
            case Command.EXPORT:
                return this.menuSource_ === MenuSource.TOOLBAR;
            case Command.DELETE:
                return this.globalCanEdit_;
            case Command.PASTE:
                return this.globalCanEdit_ || this.isSingleBookmark_(this.menuIds_);
            default:
                return false;
        }
    }
    recordCommandHistogram_(itemIds, histogram, command) {
        if (command === Command.OPEN) {
            command =
                this.isFolder_(itemIds) ? Command.OPEN_FOLDER : Command.OPEN_BOOKMARK;
        }
        this.browserProxy_.recordInHistogram(histogram, command, Command.MAX_VALUE);
    }
    /**
     * Show a toast with a bookmark |title| inserted into a label, with the
     * title ellipsised if necessary.
     */
    async showTitleToast_(labelPromise, title, canUndo) {
        const label = await labelPromise;
        const pieces = loadTimeData.getSubstitutedStringPieces(label, title).map(function (p) {
            // Make the bookmark name collapsible.
            const result = p;
            result.collapsible = !!p.arg;
            return result;
        });
        getToastManager().showForStringPieces(pieces, /*hideSlotted*/ !canUndo);
    }
    ////////////////////////////////////////////////////////////////////////////
    // Event handlers:
    async onOpenCommandMenu_(e) {
        this.isActiveTabInSplit_ =
            await BookmarkManagerApiProxyImpl.getInstance().isActiveTabInSplit();
        if (e.detail.targetId) {
            this.canPaste_ = await BookmarkManagerApiProxyImpl.getInstance().canPaste(getLegacyId(this.getState().nodes[e.detail.targetId]));
        }
        if (e.detail.targetElement) {
            this.openCommandMenuAtElement(e.detail.targetElement, e.detail.source);
        }
        else {
            this.openCommandMenuAtPosition(e.detail.x, e.detail.y, e.detail.source);
        }
    }
    onCommandClick_(e) {
        assert(this.menuIds_);
        this.handle(Number(e.currentTarget.dataset['command']), this.menuIds_);
        this.closeCommandMenu();
    }
    onKeydown_(e) {
        const path = e.composedPath();
        if (path[0].tagName === 'INPUT') {
            return;
        }
        if ((e.target === document.body ||
            path.some(el => el.tagName === 'BOOKMARKS-TOOLBAR')) &&
            !DialogFocusManager.getInstance().hasOpenDialog()) {
            this.handleKeyEvent(e, this.getState().selection.items);
        }
    }
    /**
     * Close the menu on mousedown so clicks can propagate to the underlying UI.
     * This allows the user to right click the list while a context menu is
     * showing and get another context menu.
     */
    onMenuMousedown_(e) {
        if (e.composedPath()[0].tagName !== 'DIALOG') {
            return;
        }
        this.closeCommandMenu();
    }
    onOpenCancelClick_() {
        this.ensureOpenDialog_().then(dialog => dialog.cancel());
    }
    onOpenConfirmClick_() {
        assert(this.confirmOpenCallback_);
        this.confirmOpenCallback_();
        this.ensureOpenDialog_().then(dialog => dialog.close());
    }
    static getInstance() {
        assert(instance$h);
        return instance$h;
    }
}
customElements.define(BookmarksCommandManagerElement.is, BookmarksCommandManagerElement);

let instance$g = null;
function getCss$e() {
    return instance$g || (instance$g = [...[], css `.cr-nav-menu-item{--cr-nav-menu-item-color:var(--google-grey-900);--cr-nav-menu-item-color-selected:var(--google-blue-700);--cr-nav-menu-item-background-color-hover:var(--google-grey-200);--cr-nav-menu-item-background-color-selected:var(--google-blue-50);--cr-nav-menu-item-icon-color:var(--google-grey-700);--cr-nav-menu-item-icon-color-hover:var(--google-grey-700);--cr-nav-menu-item-icon-color-selected:var(--google-blue-600);--iron-icon-fill-color:var(--cr-nav-menu-item-icon-color);--iron-icon-height:20px;--iron-icon-width:20px;--cr-icon-ripple-size:20px;align-items:center;border-end-end-radius:100px;border-start-end-radius:100px;box-sizing:border-box;color:var(--cr-nav-menu-item-color);display:flex;font-size:14px;font-weight:500;line-height:14px;margin-inline-end:2px;margin-inline-start:1px;min-height:40px;overflow:hidden;padding-block-end:10px;padding-block-start:10px;padding-inline-start:23px;padding-inline-end:16px;position:relative;text-decoration:none}:host-context([webui-refresh-2026]){.cr-nav-menu-item{--cr-nav-menu-item-color:var(--color-nav-menu-item);--cr-nav-menu-item-color-selected:var(--color-nav-menu-item-selected);--cr-nav-menu-item-background-color-hover:var(--color-nav-menu-item-background-hover);--cr-nav-menu-item-background-color-selected:var(--color-nav-menu-item-background-selected);--cr-nav-menu-item-icon-color:var(--color-nav-menu-item);--cr-nav-menu-item-icon-color-selected:var(--color-nav-menu-item-selected)}.cr-nav-menu-item:focus{outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px;border-start-start-radius:10px;border-end-start-radius:10px}}:host-context(cr-drawer) .cr-nav-menu-item{margin-inline-end:8px}.cr-nav-menu-item:hover{--iron-icon-fill-color:var(--cr-nav-menu-item-icon-color-hover);background:var(--cr-nav-menu-item-background-color-hover)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:var(--cr-nav-menu-item-icon-color-selected);background:var(--cr-nav-menu-item-background-color-selected);color:var(--cr-nav-menu-item-color-selected)}@media (prefers-color-scheme:dark){.cr-nav-menu-item{--cr-nav-menu-item-color:white;--cr-nav-menu-item-color-selected:var(--google-grey-900);--cr-nav-menu-item-background-color-hover:var(--google-grey-800);--cr-nav-menu-item-background-color-selected:var(--google-blue-300);--cr-nav-menu-item-icon-color:var(--google-grey-500);--cr-nav-menu-item-icon-color-hover:white;--cr-nav-menu-item-icon-color-selected:black}}.cr-nav-menu-item:focus{outline:auto 5px -webkit-focus-ring-color;z-index:1}.cr-nav-menu-item:focus:not([selected]):not(:hover){background:transparent}.cr-nav-menu-item cr-icon,.cr-nav-menu-item iron-icon{flex-shrink:0;margin-inline-end:20px;pointer-events:none;vertical-align:top}@media (forced-colors:active){.cr-nav-menu-item[selected]{background:Highlight;color:HighlightText;--iron-icon-fill-color:HighlightText;forced-color-adjust:none}}`]);
}

let instance$f = null;
function getCss$d() {
    return instance$f || (instance$f = [...[getCss$j(), getCss$f(), getCss$e(), getCss$m()], css `:host{display:block;--cr-vertical-tab-height:33px}:host-context([webui-refresh-2026]){.cr-nav-menu-item{color:initial}.cr-nav-menu-item.drag-on{background:var(--color-nav-menu-item-background-selected)}.cr-nav-menu-item[selected],.cr-nav-menu-item.drag-on{--iron-icon-fill-color:var(--color-nav-menu-item-selected);color:var(--color-nav-menu-item-selected)}@media (prefers-color-scheme:dark){.cr-nav-menu-item[selected] #arrow,.cr-nav-menu-item.drag-on #arrow{--cr-icon-button-fill-color:var(--color-nav-menu-item-selected)}}}.cr-nav-menu-item{color:var(--folder-inactive-color);margin-inline-end:3px;padding:0}#inner-container{align-items:center;cursor:pointer;display:grid;flex:1;grid-template-areas:'arrow folder label';grid-template-columns:40px 24px auto;min-height:0;min-width:fit-content;overflow:hidden;padding-inline-start:calc(var(--node-depth,0) * 15px + 4px)}#arrow{--cr-icon-button-size:40px;grid-area:arrow;justify-self:center;margin:0}#arrow:not([is-open]){transform:rotate(-90deg);transition:transform 150ms}.folder-icon{grid-area:folder;justify-self:center}.menu-label{font-weight:500;grid-area:label;padding:0 6px;white-space:nowrap}@media (prefers-color-scheme:dark){.cr-nav-menu-item.drag-on{color:var(--google-grey-700)}}:host-context([dir='rtl']) #arrow:not([is-open]){transform:rotate(90deg)}#arrow[is-open]{transform:initial}.cr-vertical-tab::before{display:none}#container{min-width:fit-content;padding-inline-end:10px}@media (prefers-color-scheme:dark){.cr-nav-menu-item[selected] #arrow,.cr-nav-menu-item.drag-on #arrow{--cr-icon-button-fill-color:black}.cr-nav-menu-item.drag-on{--iron-icon-fill-color:black;background:var(--google-blue-300);color:var(--google-grey-900)}}@media (forced-colors:active){.cr-nav-menu-item[selected] #arrow,.cr-nav-menu-item.drag-on #arrow{--cr-icon-button-fill-color:FieldText}.cr-nav-menu-item[selected],.cr-nav-menu-item.drag-on{outline:var(--cr-focus-outline-hcm) !important}}`]);
}

let instance$e = null;
function getCss$c() {
    return instance$e || (instance$e = [...[getCss$d()], css `.cr-nav-menu-item{border-end-end-radius:0 !important;border-start-end-radius:0 !important;box-sizing:content-box !important}.cr-nav-menu-item:hover{background:transparent !important}.cr-nav-menu-item[selected]{--iron-icon-fill-color:var(--cr-link-color) !important;color:var(--cr-link-color) !important;background:transparent !important}.cr-nav-menu-item.drag-on{color:var(--cr-link-color) !important}@media (prefers-color-scheme:dark){.cr-nav-menu-item[selected] #arrow,.cr-nav-menu-item.drag-on #arrow{--cr-icon-button-fill-color:var(--cr-link-color) !important}.cr-nav-menu-item.drag-on{--iron-icon-fill-color:var(--cr-link-color) !important;background:transparent !important;color:var(--cr-link-color) !important}}.cr-nav-menu-item cr-ripple{display:none !important}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$8() {
    // clang-format off
    return html `<!--_html_template_start_-->
<div id="container"
    class="cr-vertical-tab cr-nav-menu-item ${this.getContainerClass_()}"
    ?hidden="${this.isRootFolder_()}" role="treeitem"
    aria-level="${this.getAriaLevel_()}" aria-owns="descendants"
    tabindex="${this.getTabIndex_()}" @click="${this.onFolderClick_}"
    @dblclick="${this.onFolderDblclick_}" @contextmenu="${this.onContextmenu_}"
    ?selected="${this.isSelectedFolder_}"
    aria-selected="${this.isSelectedFolder_}">
  <div id="inner-container">
    ${this.hasChildFolder_ ? html `
      <cr-icon-button id="arrow" iron-icon="cr:arrow-drop-down"
          @click="${this.onArrowClick_}" @mousedown="${this.onArrowMousedown_}"
          tabindex="-1" ?is-open="${this.isOpen}" noink aria-hidden="true">
      </cr-icon-button>
    ` : ''}
    <div class="folder-icon icon-folder-open" ?open="${this.isSelectedFolder_}"
        ?no-children="${!this.hasChildFolder_}">
    </div>
    <div class="menu-label" title="${this.getItemTitle_()}">
      ${this.getItemTitle_()}
    </div>
    <cr-ripple></cr-ripple>
  </div>
</div>
<div id="descendants" role="group">
  ${this.isOpen ? html `
    ${this.getFolderChildren_().map(child => html `
      <bookmarks-folder-node item-id="${child}" draggable="true"
          depth="${this.getChildDepth_()}">
      </bookmarks-folder-node>
    `)}
  ` : ''}
</div>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const BookmarksFolderNodeElementBase = StoreClientMixinLit(CrLitElement);
class BookmarksFolderNodeElement extends BookmarksFolderNodeElementBase {
    static get is() {
        return 'bookmarks-folder-node';
    }
    static get styles() {
        return getCss$c();
    }
    render() {
        return getHtml$8.bind(this)();
    }
    static get properties() {
        return {
            itemId: { type: String },
            depth: { type: Number },
            isOpen: { type: Boolean },
            item_: { type: Object },
            openState_: { type: Boolean },
            selectedFolder_: { type: String },
            searchActive_: { type: Boolean },
            isSelectedFolder_: {
                type: Boolean,
                reflect: true,
            },
            hasChildFolder_: { type: Boolean },
        };
    }
    #depth_accessor_storage = -1;
    get depth() { return this.#depth_accessor_storage; }
    set depth(value) { this.#depth_accessor_storage = value; }
    #isOpen_accessor_storage = false;
    get isOpen() { return this.#isOpen_accessor_storage; }
    set isOpen(value) { this.#isOpen_accessor_storage = value; }
    #itemId_accessor_storage = '';
    get itemId() { return this.#itemId_accessor_storage; }
    set itemId(value) { this.#itemId_accessor_storage = value; }
    #item__accessor_storage;
    get item_() { return this.#item__accessor_storage; }
    set item_(value) { this.#item__accessor_storage = value; }
    #openState__accessor_storage = null;
    get openState_() { return this.#openState__accessor_storage; }
    set openState_(value) { this.#openState__accessor_storage = value; }
    #selectedFolder__accessor_storage = '';
    get selectedFolder_() { return this.#selectedFolder__accessor_storage; }
    set selectedFolder_(value) { this.#selectedFolder__accessor_storage = value; }
    #searchActive__accessor_storage = false;
    get searchActive_() { return this.#searchActive__accessor_storage; }
    set searchActive_(value) { this.#searchActive__accessor_storage = value; }
    #isSelectedFolder__accessor_storage = false;
    get isSelectedFolder_() { return this.#isSelectedFolder__accessor_storage; }
    set isSelectedFolder_(value) { this.#isSelectedFolder__accessor_storage = value; }
    #hasChildFolder__accessor_storage = false;
    get hasChildFolder_() { return this.#hasChildFolder__accessor_storage; }
    set hasChildFolder_(value) { this.#hasChildFolder__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.updateFromStore();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('itemId')) {
            this.updateFromStore();
        }
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('depth') ||
            changedPrivateProperties.has('openState_')) {
            // If account nodes exist, the permanent account nodes should be visible,
            // while the local ones are collapsed.
            const defaultOpenState = isRootNode(this.itemId) && this.itemId !== LOCAL_HEADING_NODE_ID;
            this.isOpen =
                this.openState_ !== null ? this.openState_ : defaultOpenState;
        }
        if (changedProperties.has('itemId') ||
            changedPrivateProperties.has('selectedFolder_') ||
            changedPrivateProperties.has('searchActive_')) {
            const previous = this.isSelectedFolder_;
            this.isSelectedFolder_ =
                this.itemId === this.selectedFolder_ && !this.searchActive_;
            if (previous !== this.isSelectedFolder_ && this.isSelectedFolder_) {
                this.scrollIntoViewIfNeeded_();
            }
        }
        if (changedPrivateProperties.has('item_')) {
            this.hasChildFolder_ =
                hasChildFolders(this.itemId, this.getState().nodes);
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addEventListener('keydown', e => this.onKeydown_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('depth')) {
            this.style.setProperty('--node-depth', String(this.depth));
            if (this.depth === -1) {
                this.$.descendants.removeAttribute('role');
            }
        }
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('isOpen') ||
            changedPrivateProperties.has('hasChildFolder_')) {
            this.updateAriaExpanded_();
        }
    }
    // StoreClientMixinLit
    onStateChanged(state) {
        this.item_ = state.nodes[this.itemId];
        this.openState_ = state.folderOpenState.has(this.itemId) ?
            state.folderOpenState.get(this.itemId) :
            null;
        this.selectedFolder_ = state.selectedFolder;
        this.searchActive_ = isShowingSearch(state);
    }
    getContainerClass_() {
        return this.isSelectedFolder_ ? 'selected' : '';
    }
    getItemTitle_() {
        return this.item_?.title || '';
    }
    getFocusTarget() {
        return this.$.container;
    }
    getDropTarget() {
        return this.$.container;
    }
    onKeydown_(e) {
        let yDirection = 0;
        let xDirection = 0;
        let handled = true;
        if (e.key === 'ArrowUp') {
            yDirection = -1;
        }
        else if (e.key === 'ArrowDown') {
            yDirection = 1;
        }
        else if (e.key === 'ArrowLeft') {
            xDirection = -1;
        }
        else if (e.key === 'ArrowRight') {
            xDirection = 1;
        }
        else if (e.key === ' ') {
            this.selectFolder_();
        }
        else {
            handled = false;
        }
        if (isRTL()) {
            xDirection *= -1;
        }
        this.changeKeyboardSelection_(xDirection, yDirection, this.shadowRoot.activeElement);
        if (!handled) {
            handled = BookmarksCommandManagerElement.getInstance().handleKeyEvent(e, new Set([this.itemId]));
        }
        if (!handled) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
    }
    changeKeyboardSelection_(xDirection, yDirection, currentFocus) {
        let newFocusFolderNode = null;
        const isChildFolderNodeFocused = currentFocus &&
            currentFocus.tagName === 'BOOKMARKS-FOLDER-NODE';
        if (xDirection === 1) {
            // The right arrow opens a folder if closed and goes to the first child
            // otherwise.
            if (this.hasChildFolder_) {
                if (!this.isOpen) {
                    this.dispatch(changeFolderOpen$1(this.item_.id, true));
                }
                else {
                    yDirection = 1;
                }
            }
        }
        else if (xDirection === -1) {
            // The left arrow closes a folder if open and goes to the parent
            // otherwise.
            if (this.hasChildFolder_ && this.isOpen) {
                this.dispatch(changeFolderOpen$1(this.item_.id, false));
            }
            else {
                const parentFolderNode = this.getParentFolderNode();
                if (parentFolderNode && parentFolderNode.itemId !== ROOT_NODE_ID) {
                    parentFolderNode.getFocusTarget().focus();
                }
            }
        }
        if (!yDirection) {
            return;
        }
        // The current node's successor is its first child when open.
        if (!isChildFolderNodeFocused && yDirection === 1 && this.isOpen) {
            const children = this.getChildFolderNodes_();
            if (children.length) {
                newFocusFolderNode = children[0];
            }
        }
        if (isChildFolderNodeFocused) {
            // Get the next child folder node if a child is focused.
            if (!newFocusFolderNode) {
                newFocusFolderNode = this.getNextChild(yDirection === -1, currentFocus);
            }
            // The first child's predecessor is this node.
            if (!newFocusFolderNode && yDirection === -1) {
                newFocusFolderNode = this;
            }
        }
        // If there is no newly focused node, allow the parent to handle the change.
        if (!newFocusFolderNode) {
            const parentFolderNode = this.getParentFolderNode();
            if (parentFolderNode && this.itemId !== ROOT_NODE_ID) {
                parentFolderNode.changeKeyboardSelection_(0, yDirection, this);
            }
            return;
        }
        // The root node is not navigable.
        if (newFocusFolderNode.itemId !== ROOT_NODE_ID) {
            newFocusFolderNode.getFocusTarget().focus();
        }
    }
    /**
     * Returns the next or previous visible bookmark node relative to |child|.
     */
    getNextChild(reverse, child) {
        let newFocus = null;
        const children = this.getChildFolderNodes_();
        const index = children.indexOf(child);
        assert(index !== -1);
        if (reverse) {
            // A child node's predecessor is either the previous child's last visible
            // descendant, or this node, which is its immediate parent.
            newFocus =
                index === 0 ? null : children[index - 1].getLastVisibleDescendant();
        }
        else if (index < children.length - 1) {
            // A successor to a child is the next child.
            newFocus = children[index + 1];
        }
        return newFocus;
    }
    /**
     * Returns the immediate parent folder node, or null if there is none.
     */
    getParentFolderNode() {
        let parentFolderNode = this.parentNode;
        while (parentFolderNode &&
            parentFolderNode.tagName !==
                'BOOKMARKS-FOLDER-NODE') {
            parentFolderNode =
                parentFolderNode.parentNode || parentFolderNode.host;
        }
        return parentFolderNode || null;
    }
    getLastVisibleDescendant() {
        const children = this.getChildFolderNodes_();
        if (!this.isOpen || children.length === 0) {
            return this;
        }
        return children.pop().getLastVisibleDescendant();
    }
    onFolderClick_() {
        this.selectFolder_();
    }
    selectFolder_() {
        if (!this.isSelectedFolder_) {
            this.dispatch(selectFolder(this.itemId, this.getState().nodes));
        }
    }
    onContextmenu_(e) {
        e.preventDefault();
        this.selectFolder_();
        // Disable the context menu for root nodes.
        if (isRootNode(this.itemId)) {
            return;
        }
        BookmarksCommandManagerElement.getInstance().openCommandMenuAtPosition(e.clientX, e.clientY, MenuSource.TREE, new Set([this.itemId]));
    }
    getChildFolderNodes_() {
        return Array.from(this.shadowRoot.querySelectorAll('bookmarks-folder-node'));
    }
    /**
     * Toggles whether the folder is open.
     */
    toggleFolder_(e) {
        this.dispatch(changeFolderOpen$1(this.itemId, !this.isOpen));
        e.stopPropagation();
    }
    onFolderDblclick_(e) {
        this.toggleFolder_(e);
    }
    onArrowClick_(e) {
        this.toggleFolder_(e);
    }
    onArrowMousedown_(e) {
        e.preventDefault();
    }
    getChildDepth_() {
        return this.depth + 1;
    }
    getFolderChildren_() {
        const children = this.item_?.children;
        const nodes = this.getState()?.nodes;
        if (!Array.isArray(children) || !nodes) {
            return [];
        }
        return children.filter(itemId => {
            const node = nodes[itemId];
            // Exclude url nodes.
            return !node?.url;
        });
    }
    isRootFolder_() {
        return this.itemId === ROOT_NODE_ID;
    }
    getTabIndex_() {
        // This returns a tab index of 0 for the cached selected folder when the
        // search is active, even though this node is not technically selected. This
        // allows the sidebar to be focusable during a search.
        return this.selectedFolder_ === this.itemId ? '0' : '-1';
    }
    getAriaLevel_() {
        // Converts (-1)-indexed depth to 1-based ARIA level.
        return this.depth + 2;
    }
    /**
     * Sets the 'aria-expanded' accessibility on nodes which need it. Note that
     * aria-expanded="false" is different to having the attribute be undefined.
     */
    updateAriaExpanded_() {
        if (this.hasChildFolder_) {
            this.getFocusTarget().setAttribute('aria-expanded', String(this.isOpen));
        }
        else {
            this.getFocusTarget().removeAttribute('aria-expanded');
        }
    }
    /**
     * Scrolls the folder node into view when the folder is selected.
     */
    async scrollIntoViewIfNeeded_() {
        await this.updateComplete;
        this.$.container.scrollIntoViewIfNeeded();
    }
}
customElements.define(BookmarksFolderNodeElement.is, BookmarksFolderNodeElement);

let instance$d = null;
function getCss$b() {
    return instance$d || (instance$d = [...[], css `:host{display:block;position:relative}:host([chunk-size='0']) #container>::slotted(*){box-sizing:border-box;contain-intrinsic-size:var(--list-item-size,100px) auto;content-visibility:auto;width:100%}:host(:not([chunk-size='0'])) #container>::slotted(.chunk){box-sizing:border-box;contain-intrinsic-size:calc(var(--chunk-size) * var(--list-item-size,100px)) auto;content-visibility:auto;width:100%}`]);
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
        return getCss$b();
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

let instance$c = null;
function getCss$a() {
    return instance$c || (instance$c = [...[getCss$f(), getCss$m()], css `:host{--cr-icon-button-focus-outline-color:var(--color-bookmark-manager-item-outline);--iron-icon-fill-color:var(--google-grey-700);align-items:center;color:inherit;display:flex;flex-direction:row;height:40px;padding-inline-start:20px;position:relative;text-decoration:none;user-select:none}:host([is-selected-item_]){--iron-icon-fill-color:var(--google-blue-600);background-color:var(--highlight-color)}:host-context([webui-refresh-2026]){&:host{--iron-icon-fill-color:var(--color-bookmark-manager-item-text);color:var(--color-bookmark-manager-item-text)}&:host([is-selected-item_]){background-color:var(--color-bookmark-manager-item-background-selected)}&:host(:focus-visible){outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px}#website-title{color:var(--color-bookmark-manager-item-title)}#website-url{color:var(--color-bookmark-manager-item-text)}cr-icon-button{--cr-icon-button-fill-color:var(--color-bookmark-manager-item-text)}@media (prefers-color-scheme:dark){&:host([is-selected-item_]),&:host([is-selected-item_]) .folder-icon{--cr-icon-button-focus-outline-color:var(--color-bookmark-manager-item-outline);--iron-icon-fill-color:var(--color-bookmark-manager-item-text);color:var(--color-bookmark-manager-item-text)}&:host([is-selected-item_]) #website-title{color:var(--color-bookmark-manager-item-title)}&:host([is-selected-item_]) cr-icon-button{--cr-icon-button-fill-color:var(--color-bookmark-manager-item-text)}}}@media (prefers-color-scheme:dark){:host([is-selected-item_]),:host([is-selected-item_]) .folder-icon{--cr-icon-button-focus-outline-color:white;--iron-icon-fill-color:var(--google-grey-500);color:var(--google-grey-700)}:host([is-selected-item_]){--iron-icon-fill-color:black}}#website-text{display:flex;flex:1;overflow:hidden}#website-title{color:var(--cr-primary-text-color);flex:1;margin-inline-start:20px;text-decoration:none}:host([is-selected-item_]) #website-title{flex:0 auto}@media (prefers-color-scheme:dark){:host([is-selected-item_]) #website-title{color:var(--google-grey-900)}}#website-url{color:rgba(0,0,0,0.54);display:none;flex:1;margin-inline-start:20px;min-width:100px}@media (prefers-color-scheme:dark){#website-url{color:var(--google-grey-800)}}:host([is-selected-item_]) #website-url{display:block}#icon{flex:none}cr-icon-button{margin-inline-start:0;margin-inline-end:12px}@media (prefers-color-scheme:dark){:host([is-selected-item_]) cr-icon-button{--cr-icon-button-fill-color:var(--google-grey-700)}}:host(:focus){z-index:1}.elided-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`]);
}

const div = document.createElement('div');
div.innerHTML = getTrustedHTML `<cr-iconset name="bookmarks" size="24">
  <svg>
    <defs>
      <!-- Icon for uploading a bookmark to the user's account. -->
      <!--
        These icons are copied from Material Design's icons and kept
        in sorted order.
      -->
      <g id="bookmark-cloud-upload-old" viewBox="0 -960 960 960"><path d="M240-192q-80 0-136-56.5T48-385q0-76 51.5-131.5T227-576q23.43-85.75 93.7-138.87Q390.98-768 480-768q107 0 185.5 68.5T744-528q70 0 119 49t49 118q0 70.42-49 119.71Q814-192 744-192H516q-29.7 0-50.85-21.15Q444-234.3 444-264v-174l-57 57-51-51 144-144 144 144-51 51-57-57v174h228q40.32 0 68.16-27.77 27.84-27.78 27.84-68Q840-400 812.16-428q-27.84-28-68.16-28h-72v-72q0-73-57.5-120.5t-135-47.5Q402-696 348-639.5T283-504h-43q-49.71 0-84.86 35.2-35.14 35.2-35.14 85t35.14 84.8q35.15 35 84.86 35h132v72H240Zm240-246Z"></path></g>
      <g id="cloud-upload"><path d="m11.102 13.05-.801.802a.879.879 0 0 1-.64.273.858.858 0 0 1-.638-.273.879.879 0 0 1 0-1.278l2.356-2.351a.851.851 0 0 1 .625-.274c.238 0 .445.094.621.278l2.352 2.347c.183.184.273.39.273.625s-.09.442-.273.625a.883.883 0 0 1-.641.278.88.88 0 0 1-.637-.278l-.8-.773v4.347h5.703c.671 0 1.238-.23 1.703-.691.465-.465.695-1.031.695-1.703a2.32 2.32 0 0 0-.695-1.703c-.465-.469-1.032-.7-1.703-.7H16.8v-1.8c0-1.219-.48-2.223-1.438-3.012-.96-.793-2.086-1.187-3.375-1.187-1.293 0-2.386.468-3.289 1.41-.898.941-1.441 2.07-1.625 3.386H6c-.828 0-1.535.293-2.121.883A2.893 2.893 0 0 0 3 14.406c0 .828.293 1.535.879 2.117A2.887 2.887 0 0 0 6 17.398h2.398a.88.88 0 0 1 .903.895.887.887 0 0 1-.903.906H6c-1.332 0-2.465-.469-3.398-1.41-.934-.941-1.403-2.082-1.403-3.414 0-1.266.43-2.363 1.29-3.29.859-.92 1.921-1.417 3.187-1.483.39-1.43 1.172-2.59 2.34-3.473C9.187 5.242 10.516 4.8 12 4.8c1.785 0 3.328.57 4.637 1.71 1.308 1.141 1.965 2.571 1.965 4.29 1.164 0 2.156.406 2.972 1.222.817.817 1.227 1.801 1.227 2.954 0 1.171-.41 2.168-1.227 2.992-.816.82-1.808 1.23-2.972 1.23h-5.704c-.492 0-.918-.176-1.27-.527a1.737 1.737 0 0 1-.526-1.274Zm.898 0Zm0 0"></path></g>
    </defs>
  </svg>
</cr-iconset>`;
const iconsets = div.querySelectorAll('cr-iconset');
for (const iconset of iconsets) {
    document.head.appendChild(iconset);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$7() {
    // clang-format off
    return html `<!--_html_template_start_-->
<div id="icon"></div>
<div id="website-text" role="gridcell">
  <div id="website-title" class="elided-text" title="${this.getItemTitle_()}">
    ${this.getItemTitle_()}
  </div>
  <div id="website-url" class="elided-text" title="${this.getItemUrl_()}">
    ${this.getItemUrl_()}
  </div>
</div>
<div role="gridcell">
  ${this.canUploadAsAccountBookmark_ ? html `
    <cr-icon-button id="account-upload-button" class="no-overlap"
        iron-icon="${this.webuiRoundedIconsEnabled_ ?
        'bookmarks:cloud-upload' :
        'bookmarks:bookmark-cloud-upload-old'}"
        title="$i18n{uploadBookmarkButtonTitle}"
        aria-label="$i18n{uploadBookmarkButtonTitle}"
        @click="${this.onUploadButtonClick_}">
    </cr-icon-button>
  ` : ''}
</div>
<div role="gridcell">
  <cr-icon-button class="icon-more-vert" id="menuButton"
      tabindex="${this.ironListTabIndex}" title="$i18n{moreActionsButtonTitle}"
      aria-label="${this.getButtonAriaLabel_()}"
      @click="${this.onMenuButtonClick_}" aria-haspopup="menu">
  </cr-icon-button>
</div>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const BookmarksItemElementBase = WebUiListenerMixinLit(StoreClientMixinLit(CrLitElement));
class BookmarksItemElement extends BookmarksItemElementBase {
    static get is() {
        return 'bookmarks-item';
    }
    static get styles() {
        return getCss$a();
    }
    render() {
        return getHtml$7.bind(this)();
    }
    static get properties() {
        return {
            itemId: { type: String },
            ironListTabIndex: { type: Number },
            item_: { type: Object },
            isSelectedItem_: {
                type: Boolean,
                reflect: true,
            },
            isMultiSelect_: { type: Boolean },
            isFolder_: { type: Boolean },
            lastTouchPoints_: { type: Number },
            canUploadAsAccountBookmark_: { type: Boolean },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #itemId_accessor_storage = '';
    get itemId() { return this.#itemId_accessor_storage; }
    set itemId(value) { this.#itemId_accessor_storage = value; }
    #ironListTabIndex_accessor_storage;
    get ironListTabIndex() { return this.#ironListTabIndex_accessor_storage; }
    set ironListTabIndex(value) { this.#ironListTabIndex_accessor_storage = value; }
    #item__accessor_storage;
    get item_() { return this.#item__accessor_storage; }
    set item_(value) { this.#item__accessor_storage = value; }
    #isSelectedItem__accessor_storage = false;
    get isSelectedItem_() { return this.#isSelectedItem__accessor_storage; }
    set isSelectedItem_(value) { this.#isSelectedItem__accessor_storage = value; }
    #isMultiSelect__accessor_storage = false;
    get isMultiSelect_() { return this.#isMultiSelect__accessor_storage; }
    set isMultiSelect_(value) { this.#isMultiSelect__accessor_storage = value; }
    #isFolder__accessor_storage = false;
    get isFolder_() { return this.#isFolder__accessor_storage; }
    set isFolder_(value) { this.#isFolder__accessor_storage = value; }
    #lastTouchPoints__accessor_storage = -1;
    get lastTouchPoints_() { return this.#lastTouchPoints__accessor_storage; }
    set lastTouchPoints_(value) { this.#lastTouchPoints__accessor_storage = value; }
    #canUploadAsAccountBookmark__accessor_storage = false;
    // This is always false if `SyncEnableBookmarksInTransportMode` is disabled.
    get canUploadAsAccountBookmark_() { return this.#canUploadAsAccountBookmark__accessor_storage; }
    set canUploadAsAccountBookmark_(value) { this.#canUploadAsAccountBookmark__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.updateFromStore();
        this.addWebUiListener('bookmarks-sync-state-changed', this.updateCanUploadAsAccountBookmark_.bind(this));
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('itemId') && this.itemId !== '') {
            this.updateFromStore();
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('item_')) {
            this.isFolder_ = !!this.item_ && !this.item_.url;
            this.ariaLabel = this.item_?.title || this.item_?.url ||
                loadTimeData.getString('folderLabel');
            this.updateCanUploadAsAccountBookmark_();
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addEventListener('click', e => this.onClick_(e));
        this.addEventListener('dblclick', e => this.onDblClick_(e));
        this.addEventListener('contextmenu', e => this.onContextMenu_(e));
        this.addEventListener('keydown', e => this.onKeydown_(e));
        this.addEventListener('auxclick', e => this.onMiddleClick_(e));
        this.addEventListener('mousedown', e => this.cancelMiddleMouseBehavior_(e));
        this.addEventListener('mouseup', e => this.cancelMiddleMouseBehavior_(e));
        this.addEventListener('touchstart', e => this.onTouchStart_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('item_')) {
            this.updateFavicon_(this.item_?.url);
        }
    }
    onStateChanged(state) {
        this.item_ = state.nodes[this.itemId];
        this.isSelectedItem_ = state.selection.items.has(this.itemId);
        this.isMultiSelect_ = state.selection.items.size > 1;
    }
    setIsSelectedItemForTesting(selected) {
        this.isSelectedItem_ = selected;
    }
    focusMenuButton() {
        focusWithoutInk(this.$.menuButton);
    }
    getDropTarget() {
        return this;
    }
    onContextMenu_(e) {
        e.preventDefault();
        e.stopPropagation();
        // Prevent context menu from appearing after a drag, but allow opening the
        // context menu through 2 taps
        const capabilities = e.sourceCapabilities;
        if (capabilities && capabilities.firesTouchEvents &&
            this.lastTouchPoints_ !== 2) {
            return;
        }
        this.focus();
        if (!this.isSelectedItem_) {
            this.selectThisItem_();
        }
        this.fire('open-command-menu', {
            x: e.clientX,
            y: e.clientY,
            source: MenuSource.ITEM,
            targetId: this.itemId,
        });
    }
    onMenuButtonClick_(e) {
        e.stopPropagation();
        e.preventDefault();
        // Skip selecting the item if this item is part of a multi-selected group.
        if (!this.isMultiSelectMenu_()) {
            this.selectThisItem_();
        }
        this.fire('open-command-menu', {
            targetElement: e.target,
            source: MenuSource.ITEM,
            targetId: this.itemId,
        });
    }
    onUploadButtonClick_() {
        // Skip selecting the item if this item is part of a multi-selected group.
        if (!this.isMultiSelectMenu_()) {
            this.selectThisItem_();
        }
        // The handler identifies bookmarks by their legacy numeric id.
        assert(this.item_?.legacyId !== undefined);
        BrowserProxyImpl.getInstance().onSingleBookmarkUploadClicked(this.item_.legacyId.toString());
    }
    selectThisItem_() {
        this.dispatch(selectItem(this.itemId, this.getState(), {
            clear: true,
            range: false,
            toggle: false,
        }));
    }
    getItemUrl_() {
        return this.item_?.url || '';
    }
    getItemTitle_() {
        return this.item_?.title || '';
    }
    onClick_(e) {
        // Ignore double clicks so that Ctrl double-clicking an item won't deselect
        // the item before opening.
        if (e.detail !== 2) {
            const addKey = isMac ? e.metaKey : e.ctrlKey;
            this.dispatch(selectItem(this.itemId, this.getState(), {
                clear: !addKey,
                range: e.shiftKey,
                toggle: addKey && !e.shiftKey,
            }));
        }
        e.stopPropagation();
        e.preventDefault();
    }
    onKeydown_(e) {
        const cursorModifier = isMac ? e.metaKey : e.ctrlKey;
        if (e.key === 'ArrowLeft') {
            this.focus();
        }
        else if (e.key === 'ArrowRight') {
            this.$.menuButton.focus();
        }
        else if (e.key === ' ' && !cursorModifier) {
            // Spacebar with the modifier is handled by the list.
            this.dispatch(selectItem(this.itemId, this.getState(), {
                clear: false,
                range: false,
                toggle: true,
            }));
        }
    }
    onDblClick_(_e) {
        if (!this.isSelectedItem_) {
            this.selectThisItem_();
        }
        const commandManager = BookmarksCommandManagerElement.getInstance();
        const itemSet = this.getState().selection.items;
        if (commandManager.canExecute(Command.OPEN, itemSet)) {
            commandManager.handle(Command.OPEN, itemSet);
        }
    }
    onMiddleClick_(e) {
        if (e.button !== 1) {
            return;
        }
        this.selectThisItem_();
        if (this.isFolder_) {
            return;
        }
        const commandManager = BookmarksCommandManagerElement.getInstance();
        const itemSet = this.getState().selection.items;
        const command = e.shiftKey ? Command.OPEN : Command.OPEN_NEW_TAB;
        if (commandManager.canExecute(command, itemSet)) {
            commandManager.handle(command, itemSet);
        }
    }
    onTouchStart_(e) {
        this.lastTouchPoints_ = e.touches.length;
    }
    /**
     * Prevent default middle-mouse behavior. On Windows, this prevents autoscroll
     * (during mousedown), and on Linux this prevents paste (during mouseup).
     */
    cancelMiddleMouseBehavior_(e) {
        if (e.button === 1) {
            e.preventDefault();
        }
    }
    updateFavicon_(url) {
        this.$.icon.className =
            url ? 'website-icon' : 'folder-icon icon-folder-open';
        this.$.icon.style.backgroundImage =
            url ? getFaviconForPageURL(url, false) : '';
    }
    getButtonAriaLabel_() {
        if (!this.item_) {
            return ''; // Item hasn't loaded, skip for now.
        }
        if (this.isMultiSelectMenu_()) {
            return loadTimeData.getStringF('moreActionsMultiButtonAxLabel');
        }
        return loadTimeData.getStringF('moreActionsButtonAxLabel', this.item_.title);
    }
    /**
     * This item is part of a group selection.
     */
    isMultiSelectMenu_() {
        return this.isSelectedItem_ && this.isMultiSelect_;
    }
    updateCanUploadAsAccountBookmark_() {
        // The handler identifies bookmarks by their legacy numeric id.
        if (this.item_?.legacyId === undefined) {
            this.canUploadAsAccountBookmark_ = false;
            return;
        }
        BrowserProxyImpl.getInstance()
            .getCanUploadBookmarkToAccountStorage(this.item_.legacyId.toString())
            .then((canUpload) => {
            this.canUploadAsAccountBookmark_ = canUpload;
        });
    }
}
customElements.define(BookmarksItemElement.is, BookmarksItemElement);

let instance$b = null;
function getCss$9() {
    return instance$b || (instance$b = [...[getCss$j()], css `:host{align-items:center;display:flex}#promoCard{column-gap:8px;display:flex;flex-direction:row;padding:12px 16px;width:100%}#image{content:url(images/batch_upload_bookmarks_promo.svg);margin:auto}#title{font-size:14px;font-weight:500;line-height:20px;margin:0}#description{font-size:12px;font-weight:400;line-height:16px}#promoContent{display:flex;flex:1;flex-direction:column;justify-content:center;row-gap:4px}#actionButton{margin-bottom:4px;margin-top:8px;width:fit-content}#avatar{border-radius:50%;height:20px;width:20px}@media (prefers-color-scheme:dark){#image{content:url(images/batch_upload_bookmarks_promo_dark.svg)}}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$6() {
    return html `<!--_html_template_start_-->
<div id="promoCard" role="dialog">
  <img id="image" class="banner" alt="">
  <div id="promoContent">
    <h2 id="title" class="label">
      ${this.promoData_.promoTitle}
    </h2>
    <div id="description" class="cr-secondary-text label">
      ${this.promoData_.promoSubtitle}
    </div>
    <cr-button id="actionButton" class="action-button"
        @click="${this.onActionButtonClick_}">
      ${this.promoData_.promoAvatarUrl ? html `
        <img id="avatar" slot="prefix-icon"
            src="${this.promoData_.promoAvatarUrl}" alt="">
      ` : ''}
      ${this.promoData_.actionButtonText}
    </cr-button>
  </div>
  <cr-icon-button id="closeButton" class="icon-clear no-overlap"
      @click="${this.onCloseClick_}" title="$i18n{close}">
  </cr-icon-button>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PromoCardElementBase = WebUiListenerMixinLit(CrLitElement);
class PromoCardElement extends PromoCardElementBase {
    static get is() {
        return 'promo-card';
    }
    static get styles() {
        return getCss$9();
    }
    render() {
        return getHtml$6.bind(this)();
    }
    static get properties() {
        return {
            promoData_: { type: Object },
        };
    }
    #promoData__accessor_storage = {
        promoType: BookmarkPromoType.NONE,
        canShow: false,
        promoTitle: '',
        promoSubtitle: '',
        actionButtonText: '',
        promoAvatarUrl: '',
    };
    get promoData_() { return this.#promoData__accessor_storage; }
    set promoData_(value) { this.#promoData__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy_.getPromoData().then(this.updatePromoData_.bind(this));
        this.addWebUiListener('promo-data-updated', this.updatePromoData_.bind(this));
    }
    browserProxy_ = BrowserProxyImpl.getInstance();
    updatePromoData_(promoData) {
        const isNewPromoShown = (this.promoData_.canShow !== promoData.canShow ||
            this.promoData_.promoType !== promoData.promoType) &&
            promoData.canShow;
        this.promoData_ = promoData;
        if (isNewPromoShown) {
            this.browserProxy_.onPromoShown();
        }
        this.propagateShouldShowPromo_(this.promoData_.canShow);
    }
    onActionButtonClick_() {
        this.browserProxy_.onPromoClicked();
    }
    onCloseClick_() {
        this.promoData_.canShow = false;
        this.promoData_.promoType = BookmarkPromoType.NONE;
        this.browserProxy_.onPromoDismissed();
        // Allows to close the promo right away instead of waiting for the
        // notification from the browser.
        this.propagateShouldShowPromo_(false);
    }
    // Trigger update on the list.
    propagateShouldShowPromo_(shouldShow) {
        this.fire('should-show-promo-card', { shouldShowPromoCard: shouldShow });
    }
}
customElements.define(PromoCardElement.is, PromoCardElement);

let instance$a = null;
function getCss$8() {
    return instance$a || (instance$a = [...[getCss$f()], css `:host{color:var(--cr-secondary-text-color);overflow-y:auto;padding-bottom:24px;padding-inline-end:var(--card-padding-side);padding-inline-start:calc(var(--card-padding-side) - var(--splitter-width));padding-top:24px}.card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);margin:0 auto;min-width:300px;max-width:var(--card-max-width);padding:8px 0}#promoCard{margin-bottom:18px;padding:0}.centered-message{align-items:center;color:var(--md-loading-message-color);cursor:default;display:flex;font-size:14px;font-weight:500;height:100%;justify-content:center;user-select:none;white-space:nowrap}[role='row']:focus-within{z-index:1}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$5() {
    // clang-format off
    return html `<!--_html_template_start_-->
<promo-card id="promoCard" class="card" ?hidden="${!this.shouldShowPromoCard_}"
    @should-show-promo-card="${this.onShouldShowPromoCard_}">
</promo-card>
<cr-lazy-list id="list" class="card" .items="${this.displayedIds_}"
    .scrollTarget="${this}" item-size="40" chunk-size="10"
    ?hidden="${this.isEmptyList_()}" role="grid" no-restore-focus
    aria-label="$i18n{listAxLabel}" aria-multiselectable="true"
    .template="${(id, index) => html `
      <bookmarks-item data-index="${index}" id="bookmark_${index}"
          item-id="${id}" draggable="true" role="row"
          tabindex="${this.getTabindex_(index)}"
          .ironListTabIndex="${this.getTabindex_(index)}"
          @keydown="${this.onItemKeydown_}" @focus="${this.onItemFocus_}"
          aria-rowindex="${this.getAriaRowindex_(index)}"
          aria-selected="${this.getAriaSelected_(id)}">
      </bookmarks-item>
    `}">
</cr-lazy-list>
<div id="message" class="centered-message" ?hidden="${!this.isEmptyList_()}">
  ${this.emptyListMessage_()}
</div>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const BookmarksListElementBase = WebUiListenerMixinLit(StoreClientMixinLit(CrLitElement));
class BookmarksListElement extends BookmarksListElementBase {
    static get is() {
        return 'bookmarks-list';
    }
    static get styles() {
        return getCss$8();
    }
    render() {
        return getHtml$5.bind(this)();
    }
    static get properties() {
        return {
            displayedIds_: { type: Array },
            searchTerm_: { type: String },
            selectedFolder_: { type: String },
            selectedItems_: { type: Object },
            focusedIndex_: { type: Number },
            shouldShowPromoCard_: { type: Boolean },
        };
    }
    #displayedIds__accessor_storage = [];
    get displayedIds_() { return this.#displayedIds__accessor_storage; }
    set displayedIds_(value) { this.#displayedIds__accessor_storage = value; }
    #focusedIndex__accessor_storage = 0;
    get focusedIndex_() { return this.#focusedIndex__accessor_storage; }
    set focusedIndex_(value) { this.#focusedIndex__accessor_storage = value; }
    eventTracker_ = new EventTracker();
    #searchTerm__accessor_storage = '';
    get searchTerm_() { return this.#searchTerm__accessor_storage; }
    set searchTerm_(value) { this.#searchTerm__accessor_storage = value; }
    #selectedFolder__accessor_storage = '';
    get selectedFolder_() { return this.#selectedFolder__accessor_storage; }
    set selectedFolder_(value) { this.#selectedFolder__accessor_storage = value; }
    #selectedItems__accessor_storage = new Set();
    get selectedItems_() { return this.#selectedItems__accessor_storage; }
    set selectedItems_(value) { this.#selectedItems__accessor_storage = value; }
    #shouldShowPromoCard__accessor_storage = false;
    get shouldShowPromoCard_() { return this.#shouldShowPromoCard__accessor_storage; }
    set shouldShowPromoCard_(value) { this.#shouldShowPromoCard__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.updateFromStore();
        this.eventTracker_.add(document, 'highlight-items', (e) => this.onHighlightItems_(e));
        this.addWebUiListener('import-began', () => this.onImportBegan_());
        this.addWebUiListener('import-ended', () => this.onImportEnded_());
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.remove(document, 'highlight-items');
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('displayedIds_')) {
            // Reset the focused index if it's out of bounds for the new array value.
            if (this.focusedIndex_ > this.displayedIds_.length - 1) {
                this.focusedIndex_ = 0;
            }
        }
    }
    firstUpdated() {
        this.addEventListener('click', () => this.deselectItems_());
        this.addEventListener('contextmenu', e => this.onContextMenu_(e));
        this.addEventListener('open-command-menu', e => this.onOpenCommandMenu_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('searchTerm_') ||
            changedPrivateProperties.has('selectedFolder_')) {
            this.scrollTop = 0;
        }
        if (changedPrivateProperties.has('displayedIds_')) {
            // Get the last selection from the previous value of selectedItems_ if
            // selectedItems_ also changed, and was not previously undefined (as
            // is the case at initialization). Otherwise, get the last selection from
            // the current value of selectedItems_, since it is the same as the prior
            // value.
            let lastSelectedItems = this.selectedItems_;
            if (changedPrivateProperties.has('selectedItems_') &&
                changedPrivateProperties.get('selectedItems_') !== undefined) {
                lastSelectedItems =
                    changedPrivateProperties.get('selectedItems_');
            }
            const lastSelection = lastSelectedItems.size > 0 ? Array.from(lastSelectedItems)[0] : null;
            this.onDisplayedIdsChanged_(changedPrivateProperties.get('displayedIds_'), lastSelection);
        }
    }
    onStateChanged(state) {
        // The tree may be ill-formed, temporarily during updates. In that case,
        // ignore the update.
        const children = state.nodes?.[ROOT_NODE_ID]?.children;
        if (!children || children.length === 0) {
            return;
        }
        this.displayedIds_ = getDisplayedList(state);
        this.searchTerm_ = state.search.term;
        this.selectedFolder_ = state.selectedFolder;
        this.selectedItems_ = state.selection.items;
    }
    getDropTarget() {
        return this.$.message;
    }
    onDisplayedIdsChanged_(previous, lastSelected) {
        // Clear any previous 'items-rendered' listener when the list changes, as
        // the |selectIndex| from last time may no longer be valid.
        this.eventTracker_.remove(this.$.list, 'items-rendered');
        let selectIndex = -1;
        let skipFocus = false;
        if (this.matches(':focus-within')) {
            if (lastSelected !== null) {
                skipFocus = this.displayedIds_.some(id => lastSelected === id);
                selectIndex =
                    previous ? previous.findIndex(id => lastSelected === id) : -1;
            }
            if (selectIndex === -1 && this.displayedIds_.length > 0) {
                selectIndex = 0;
            }
            else {
                selectIndex = Math.min(selectIndex, this.displayedIds_.length - 1);
            }
        }
        if (selectIndex > -1) {
            if (skipFocus) {
                // Mimic iron-list by blurring the item in this case.
                const active = this.shadowRoot.activeElement;
                if (active) {
                    active.blur();
                }
            }
            else {
                this.eventTracker_.add(this.$.list, 'items-rendered', () => this.focusMenuButton_(selectIndex));
            }
        }
        PluralStringProxyImpl.getInstance()
            .getPluralString('listChanged', this.displayedIds_.length)
            .then(label => {
            getInstance().announce(label);
        });
    }
    async focusMenuButton_(index) {
        const element = await this.$.list.ensureItemRendered(index);
        if (isMac && this.getState().selection.items.size === 0) {
            element.focus();
            // On macOS, auto-select the first focused item when entering a
            // folder (when selection is empty) without overriding existing
            // selections during multi-select navigation (Cmd + Arrow).
            this.dispatch(selectItem(this.displayedIds_[index], this.getState(), { clear: true, range: false, toggle: false }));
        }
        else {
            element.focusMenuButton();
        }
    }
    /**
     * Scroll the list so that |itemId| is visible, if it is not already.
     */
    scrollToId_(itemId) {
        const index = this.displayedIds_.indexOf(itemId);
        const list = this.$.list;
        if (index >= 0 && index < list.domItems().length) {
            list.domItems()[index].scrollIntoViewIfNeeded();
        }
    }
    emptyListMessage_() {
        let emptyListMessage = 'noSearchResults';
        if (!this.searchTerm_) {
            emptyListMessage =
                canReorderChildren(this.getState(), this.getState().selectedFolder) ?
                    'emptyList' :
                    'emptyUnmodifiableList';
        }
        return loadTimeData.getString(emptyListMessage);
    }
    isEmptyList_() {
        return this.displayedIds_.length === 0;
    }
    deselectItems_() {
        this.dispatch(deselectItems$1());
    }
    onOpenCommandMenu_(e) {
        // If the item is not visible, scroll to it before rendering the menu.
        if (e.detail.source === MenuSource.ITEM) {
            this.scrollToId_(e.composedPath()[0].itemId);
        }
    }
    /**
     * Highlight a list of items by selecting them, scrolling them into view and
     * focusing the first item.
     */
    async onHighlightItems_(e) {
        // Ensure that we only select items which are actually being displayed.
        // This should only matter if an unrelated update to the bookmark model
        // happens with the perfect timing to end up in a tracked batch update.
        const toHighlight = e.detail.filter((item) => this.displayedIds_.indexOf(item) !== -1);
        if (toHighlight.length <= 0) {
            return;
        }
        const leadId = toHighlight[0];
        this.dispatch(selectAll(toHighlight, this.getState(), leadId));
        // Wait for the change to selectedItems_ to reflect in the DOM.
        await this.updateComplete;
        const leadIndex = this.displayedIds_.indexOf(leadId);
        assert(leadIndex !== -1);
        // Ensure the new list addition has been rendered by cr-lazy-list.
        const element = await this.$.list.ensureItemRendered(leadIndex);
        element.scrollIntoViewIfNeeded();
        element.focus();
    }
    onImportBegan_() {
        getInstance().announce(loadTimeData.getString('importBegan'));
    }
    onImportEnded_() {
        getInstance().announce(loadTimeData.getString('importEnded'));
    }
    onItemKeydown_(e) {
        let handled = true;
        let focusMoved = false;
        let focusedIndex = Number(e.target.dataset['index']);
        const oldFocusedIndex = focusedIndex;
        const cursorModifier = isMac ? e.metaKey : e.ctrlKey;
        if (e.key === 'ArrowUp') {
            focusedIndex--;
            focusMoved = true;
        }
        else if (e.key === 'ArrowDown') {
            focusedIndex++;
            focusMoved = true;
            e.preventDefault();
        }
        else if (e.key === 'Home') {
            focusedIndex = 0;
            focusMoved = true;
        }
        else if (e.key === 'End') {
            focusedIndex = this.displayedIds_.length - 1;
            focusMoved = true;
        }
        else if (e.key === ' ' && cursorModifier) {
            this.dispatch(selectItem(this.displayedIds_[focusedIndex], this.getState(), {
                clear: false,
                range: false,
                toggle: true,
            }));
        }
        else {
            handled = false;
        }
        if (focusMoved) {
            // Focus only moves if the key is an arrow key or page up/down, which
            // means we've handled the key event.
            focusedIndex =
                Math.min(this.displayedIds_.length - 1, Math.max(0, focusedIndex));
            this.focusedIndex_ = focusedIndex;
            assert(handled);
            e.stopPropagation();
            // Once the item is rendered, update the anchor and config if needed.
            this.updateAnchorsAndSelectionForFocusChange_(e.shiftKey, cursorModifier, oldFocusedIndex, focusedIndex);
            return;
        }
        // Prevent the cr-lazy-list from changing focus on enter.
        if (e.key === 'Enter') {
            if (e.composedPath()[0].tagName === 'CR-ICON-BUTTON') {
                return;
            }
            if (e.composedPath()[0] instanceof HTMLButtonElement) {
                handled = true;
            }
        }
        if (!handled) {
            handled = BookmarksCommandManagerElement.getInstance().handleKeyEvent(e, this.getState().selection.items);
        }
        if (handled) {
            e.stopPropagation();
        }
    }
    async updateAnchorsAndSelectionForFocusChange_(shiftKey, cursorModifier, oldFocusedIndex, focusedIndex) {
        const element = await this.$.list.ensureItemRendered(focusedIndex);
        element.focus();
        if (cursorModifier && !shiftKey) {
            this.dispatch(updateAnchor$1(this.displayedIds_[focusedIndex]));
        }
        else {
            // If shift-selecting with no anchor, use the old focus index.
            if (shiftKey && this.getState().selection.anchor === null) {
                this.dispatch(updateAnchor$1(this.displayedIds_[oldFocusedIndex]));
            }
            // If the focus moved from something other than a Ctrl + move event,
            // update the selection.
            const config = {
                clear: !cursorModifier,
                range: shiftKey,
                toggle: false,
            };
            this.dispatch(selectItem(this.displayedIds_[focusedIndex], this.getState(), config));
        }
    }
    onContextMenu_(e) {
        e.preventDefault();
        this.deselectItems_();
        this.fire('open-command-menu', {
            x: e.clientX,
            y: e.clientY,
            source: MenuSource.LIST,
        });
    }
    onItemFocus_(e) {
        const renderedItems = this.$.list.domItems();
        const focusedIdx = Array.from(renderedItems).findIndex(item => {
            return item === e.target || item.shadowRoot?.activeElement === e.target;
        });
        if (focusedIdx !== -1) {
            this.focusedIndex_ = focusedIdx;
            // On macOS, auto-select focused item when tabbing into the list
            // from outside (when selection is empty). Ignore programmatic focus
            // changes in unit tests and internal Shadow DOM movements.
            const related = e.relatedTarget;
            const isInsideList = related &&
                (this.contains(related) ||
                    (this.shadowRoot && this.shadowRoot.contains(related)));
            const enteringFromOutside = related && related !== document.body && !isInsideList;
            if (isMac && this.getState().selection.items.size === 0 &&
                enteringFromOutside) {
                this.dispatch(selectItem(this.displayedIds_[focusedIdx], this.getState(), { clear: true, range: false, toggle: false }));
            }
        }
    }
    getAriaRowindex_(index) {
        return index + 1;
    }
    getTabindex_(index) {
        return index === this.focusedIndex_ ? 0 : -1;
    }
    getAriaSelected_(id) {
        return this.selectedItems_.has(id);
    }
    onShouldShowPromoCard_(e) {
        this.shouldShowPromoCard_ = e.detail.shouldShowPromoCard;
    }
    setDisplayedIdsForTesting(ids) {
        this.displayedIds_ = ids;
    }
}
customElements.define(BookmarksListElement.is, BookmarksListElement);

let instance$9 = null;
function getCss$7() {
    return instance$9 || (instance$9 = [...[], css `:host{background-color:white;border-bottom:1px solid var(--google-grey-300);bottom:0;color:var(--cr-primary-text-color);display:flex;left:0;opacity:0;padding-inline-start:var(--cr-toolbar-field-margin,0);pointer-events:none;position:absolute;right:0;top:0;transition:opacity var(--cr-toolbar-overlay-animation-duration),visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}@media (prefers-color-scheme:dark){:host{background-color:var(--google-grey-900);background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04));border-bottom-color:var(--cr-separator-color)}}:host([show]){opacity:1;pointer-events:initial;visibility:initial}#overlay-content{align-items:center;display:flex;flex:1;margin:0 auto;max-width:var(--cr-toolbar-selection-overlay-max-width,initial);padding:0 var(--cr-toolbar-selection-overlay-padding,24px)}#number-selected{flex:1}cr-icon-button{height:36px;margin-inline-end:24px;margin-inline-start:2px;width:36px}#slot{align-items:center;display:flex;gap:var(--cr-toolbar-selection-overlay-slot-gap,16px);margin-inline-start:8px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$4() {
    return html `
<div id="overlay-content">
  <cr-icon-button part="clearIcon" title="${this.cancelLabel}"
      iron-icon="cr:close" @click="${this.onClearSelectionClick_}">
  </cr-icon-button>
  <div id="number-selected">${this.selectionLabel}</div>
  <div id="slot">
    <slot></slot>
  </div>
</div>`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Element which displays the number of selected items, designed
 * to be used as an overlay on top of <cr-toolbar>. See <history-toolbar> for an
 * example usage.
 *
 * Note that the embedder is expected to set position: relative to make the
 * absolute positioning of this element work, and the cr-toolbar should have the
 * has-overlay attribute set when its overlay is shown to prevent access through
 * tab-traversal.
 */
class CrToolbarSelectionOverlayElement extends CrLitElement {
    static get is() {
        return 'cr-toolbar-selection-overlay';
    }
    static get styles() {
        return getCss$7();
    }
    render() {
        return getHtml$4.bind(this)();
    }
    static get properties() {
        return {
            show: {
                type: Boolean,
                reflect: true,
            },
            cancelLabel: { type: String },
            selectionLabel: { type: String },
        };
    }
    #show_accessor_storage = false;
    get show() { return this.#show_accessor_storage; }
    set show(value) { this.#show_accessor_storage = value; }
    #cancelLabel_accessor_storage = '';
    get cancelLabel() { return this.#cancelLabel_accessor_storage; }
    set cancelLabel(value) { this.#cancelLabel_accessor_storage = value; }
    #selectionLabel_accessor_storage = '';
    get selectionLabel() { return this.#selectionLabel_accessor_storage; }
    set selectionLabel(value) { this.#selectionLabel_accessor_storage = value; }
    firstUpdated() {
        this.setAttribute('role', 'toolbar');
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // Parent element is responsible for updating `selectionLabel` when `show`
        // changes.
        if (changedProperties.has('selectionLabel')) {
            if (changedProperties.get('selectionLabel') === undefined &&
                this.selectionLabel === '') {
                return;
            }
            this.setAttribute('aria-label', this.selectionLabel);
            const announcer = getInstance();
            announcer.announce(this.selectionLabel);
        }
    }
    onClearSelectionClick_() {
        this.fire('clear-selected-items');
    }
}
customElements.define(CrToolbarSelectionOverlayElement.is, CrToolbarSelectionOverlayElement);

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

let instance$8 = null;
function getCss$6() {
    return instance$8 || (instance$8 = [...[], css `.spinner{--cr-spinner-size:28px;mask-image:url(//resources/images/throbber_small.svg);mask-position:center;mask-repeat:no-repeat;mask-size:var(--cr-spinner-size) var(--cr-spinner-size);background-color:var(--cr-spinner-color,var(--google-blue-500));height:var(--cr-spinner-size);width:var(--cr-spinner-size)}@media (prefers-color-scheme:dark){.spinner{background-color:var(--cr-spinner-color,var(--google-blue-300))}}`]);
}

let instance$7 = null;
function getCss$5() {
    return instance$7 || (instance$7 = [...[getCss$j(), getCss$m(), getCss$6()], css `:host{display:block;height:40px;isolation:isolate;transition:background-color 150ms cubic-bezier(0.4,0,0.2,1),width 150ms cubic-bezier(0.4,0,0.2,1);width:44px}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none !important}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-input-icon-color,var(--google-grey-700));--cr-icon-button-focus-outline-color:var(--cr-toolbar-icon-button-focus-outline-color,var(--cr-focus-outline-color))}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-input-icon-color,var(--google-grey-500))}}cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,var(--color-toolbar-search-field-icon,var(--cr-secondary-text-color)));--cr-icon-button-size:var(--cr-toolbar-icon-container-size,28px);--cr-icon-button-icon-size:20px;margin:var(--cr-toolbar-icon-margin,0)}#icon{transition:margin 150ms,opacity 200ms}#prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--color-toolbar-search-field-foreground-placeholder,var(--cr-secondary-text-color)));opacity:0;transition:opacity 200ms}@media (prefers-color-scheme:dark){#prompt{color:var(--cr-toolbar-search-field-prompt-color,white)}}@media (prefers-color-scheme:dark){#prompt{--cr-toolbar-search-field-prompt-opacity:1;color:var(--cr-secondary-text-color,white)}}.spinner{--cr-spinner-color:var(--cr-toolbar-search-field-input-icon-color,var(--google-grey-700));--cr-spinner-size:var(--cr-icon-size);margin:0;opacity:1;padding:2px;position:absolute}@media (prefers-color-scheme:dark){.spinner{--cr-spinner-color:var(--cr-toolbar-search-field-input-icon-color,white)}}#searchTerm{-webkit-font-smoothing:antialiased;flex:1;font-size:12px;font-weight:500;line-height:185%;margin:var(--cr-toolbar-search-field-term-margin,0);min-width:0;position:relative}label{bottom:0;cursor:var(--cr-toolbar-search-field-cursor,text);left:0;overflow:hidden;position:absolute;right:0;text-overflow:ellipsis;top:0;white-space:nowrap}:host([has-search-text]) label{visibility:hidden}input{-webkit-appearance:none;background:transparent;border:none;caret-color:var(--cr-toolbar-search-field-input-caret-color,currentColor);color:var(--cr-toolbar-search-field-input-text-color,var(--color-toolbar-search-field-foreground,var(--cr-fallback-color-on-surface)));font:inherit;font-size:12px;font-weight:500;outline:none;padding:0;position:relative;width:100%}@media (prefers-color-scheme:dark){input{color:var(--cr-toolbar-search-field-input-text-color,white)}}input[type='search']::-webkit-search-cancel-button{display:none}:host([narrow]){border-radius:var(--cr-toolbar-search-field-border-radius,0)}:host(:not([narrow])){background:none;border-radius:var(--cr-toolbar-search-field-border-radius,46px);cursor:var(--cr-toolbar-search-field-cursor,default);height:36px;max-width:var(--cr-toolbar-field-max-width,none);overflow:hidden;padding:0 6px;position:relative;width:var(--cr-toolbar-field-width,680px);--cr-toolbar-search-field-border-radius:100px}@media (prefers-color-scheme:dark){:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,rgba(0,0,0,0.22))}}#background,#stateBackground{display:none}:host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-base-container)));border-radius:inherit;display:block;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([webui-refresh-2026]){&:host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-surface4)))}}:host([search-focused_]:not([narrow])){outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host(:not([narrow])) #stateBackground{display:block;inset:0;pointer-events:none;position:absolute}:host(:hover:not([search-focused_],[narrow])) #stateBackground{background:var(--color-toolbar-search-field-background-hover,var(--cr-hover-background-color));z-index:1}:host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,1)}:host(:not([narrow])) #prompt{opacity:var(--cr-toolbar-search-field-prompt-opacity,1)}:host([narrow]) #prompt{opacity:var(--cr-toolbar-search-field-narrow-mode-prompt-opacity,0)}:host([narrow]:not([showing-search])) #searchTerm{display:none}:host([showing-search][spinner-active]) #icon{opacity:0}:host([narrow][showing-search]){width:100%}:host([narrow][showing-search]) #icon,:host([narrow][showing-search]) .spinner{margin-inline-start:var(--cr-toolbar-search-icon-margin-inline-start,18px)}#content{align-items:center;display:flex;height:100%;position:relative;z-index:2}`]);
}

let instance$6 = null;
function getCss$4() {
    return instance$6 || (instance$6 = [...[getCss$5()], css `:host(:not([narrow])){border-radius:var(--leo-radius-m);height:44px}:host(:not([narrow])) #background{border:1px solid var(--leo-color-divider-subtle);border-radius:var(--leo-radius-m);background:var(--leo-color-container-background)}@media (prefers-color-scheme:dark){:host(:not([narrow])) #background{background:transparent;border-color:var(--leo-color-divider-subtle)}}input{font-family:system-ui,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.1px}#prompt{font-family:system-ui,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.1px;color:var(--leo-color-text-tertiary)}cr-icon-button{--cr-icon-button-fill-color:var(--leo-color-icon-default)}:host(:hover:not([search-focused_],[narrow])) #stateBackground{background:rgba(0,0,0,0.05)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$3() {
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
        return getCss$4();
    }
    render() {
        return getHtml$3.bind(this)();
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

let instance$5 = null;
function getCss$3() {
    return instance$5 || (instance$5 = [...[getCss$w(), getCss$m()], css `:host{align-items:center;box-sizing:border-box;color:var(--google-grey-900);display:flex;height:var(--cr-toolbar-height)}@media (prefers-color-scheme:dark){:host{color:var(--cr-secondary-text-color)}}h1{flex:1;font-size:170%;font-weight:var(--cr-toolbar-header-font-weight,500);letter-spacing:.25px;line-height:normal;margin-inline-start:6px;padding-inline-end:12px;white-space:var(--cr-toolbar-header-white-space,normal)}@media (prefers-color-scheme:dark){h1{color:var(--cr-primary-text-color)}}#leftContent{position:relative;transition:opacity 100ms}#leftSpacer{align-items:center;box-sizing:border-box;display:flex;padding-inline-start:calc(12px + 6px);width:var(--cr-toolbar-left-spacer-width,auto)}cr-icon-button{--cr-icon-button-size:32px;min-width:32px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}#centeredContent{display:flex;flex:1 1 0;justify-content:center}#rightSpacer{padding-inline-end:12px}:host([narrow]) #centeredContent{justify-content:flex-end}:host([has-overlay]){transition:visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}:host([narrow][showing-search_]) #leftContent{opacity:0;position:absolute}:host(:not([narrow])) #leftContent{flex:1 1 var(--cr-toolbar-field-margin,0)}:host(:not([narrow])) #centeredContent{flex-basis:var(--cr-toolbar-center-basis,0)}:host(:not([narrow])[disable-right-content-grow]) #centeredContent{justify-content:start;padding-inline-start:12px}:host(:not([narrow])) #rightContent{flex:1 1 0;text-align:end}:host(:not([narrow])[disable-right-content-grow]) #rightContent{flex:0 1 0}picture{display:none}#menuButton{margin-inline-end:9px}#menuButton~h1{margin-inline-start:0}:host([always-show-logo]) picture,:host(:not([narrow])) picture{display:initial;margin-inline-end:16px}:host([always-show-logo]) #leftSpacer,:host(:not([narrow])) #leftSpacer{padding-inline-start:calc(12px + 9px)}:host([always-show-logo]) :is(picture,#product-logo),:host(:not([narrow])) :is(picture,#product-logo){height:24px;width:24px}`]);
}

let instance$4 = null;
function getCss$2() {
    return instance$4 || (instance$4 = [...[getCss$3(), getCss$w(), getCss$m()], css `:host(:not([narrow])) #leftContent{flex:0 1 var(--cr-toolbar-field-margin,0)}:host(:not([narrow])) #centeredContent{flex-basis:var(--cr-toolbar-center-basis,0)}:host(:not([narrow])[disable-right-content-grow]) #centeredContent{justify-content:center;padding-inline-start:12px}:host(:not([narrow])) #rightContent{flex:0 1 0;text-align:end}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$2() {
    // clang-format off
    return html `
<div id="leftContent">
  <div id="leftSpacer">
    ${this.showMenu ? html `
      <cr-icon-button id="menuButton" class="no-overlap" iron-icon="cr20:menu"
          @click="${this.onMenuClick_}"
          aria-label="${this.menuLabel || nothing}" title="${this.menuLabel}">
      </cr-icon-button>
    ` : ''}
    <slot name="product-logo">
      <picture>
        <source media="(prefers-color-scheme: dark)"
            srcset="//resources/images/chrome_logo_dark.svg">
        <img id="product-logo"
            srcset="chrome://theme/current-channel-logo@1x 1x,
                    chrome://theme/current-channel-logo@2x 2x"
            role="presentation">
      </picture>
    </slot>
    <h1>${this.pageName}</h1>
  </div>
</div>

<div id="centeredContent" ?hidden="${!this.showSearch}">
  <cr-toolbar-search-field id="search" ?narrow="${this.narrow}"
      part="search-field" exportparts="search-input"
      label="${this.searchPrompt}" clear-label="${this.clearLabel}"
      ?spinner-active="${this.spinnerActive}"
      ?showing-search="${this.showingSearch_}"
      @showing-search-changed="${this.onShowingSearchChanged_}"
      ?autofocus="${this.autofocus}" icon-override="${this.searchIconOverride}"
      input-aria-description="${this.searchInputAriaDescription}">
  </cr-toolbar-search-field>
</div>

<div id="rightContent">
  <div id="rightSpacer">
    <slot></slot>
  </div>
</div>`;
    // clang-format on
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToolbarElement extends CrLitElement {
    static get is() {
        return 'cr-toolbar';
    }
    static get styles() {
        return getCss$2();
    }
    render() {
        return getHtml$2.bind(this)();
    }
    static get properties() {
        return {
            // Name to display in the toolbar, in titlecase.
            pageName: { type: String },
            // Prompt text to display in the search field.
            searchPrompt: { type: String },
            // Tooltip to display on the clear search button.
            clearLabel: { type: String },
            // Tooltip to display on the menu button.
            menuLabel: { type: String },
            // Value is proxied through to cr-toolbar-search-field. When true,
            // the search field will show a processing spinner.
            spinnerActive: { type: Boolean },
            // Controls whether the menu button is shown at the start of the menu.
            showMenu: { type: Boolean },
            // Controls whether the search field is shown.
            showSearch: { type: Boolean },
            // Controls whether the search field is autofocused.
            autofocus: {
                type: Boolean,
                reflect: true,
            },
            // True when the toolbar is displaying in narrow mode.
            narrow: {
                type: Boolean,
                reflect: true,
                notify: true,
            },
            /**
             * The threshold at which the toolbar will change from normal to narrow
             * mode, in px.
             */
            narrowThreshold: {
                type: Number,
            },
            alwaysShowLogo: {
                type: Boolean,
                reflect: true,
            },
            showingSearch_: {
                type: Boolean,
                reflect: true,
            },
            searchIconOverride: { type: String },
            searchInputAriaDescription: { type: String },
        };
    }
    #pageName_accessor_storage = '';
    get pageName() { return this.#pageName_accessor_storage; }
    set pageName(value) { this.#pageName_accessor_storage = value; }
    #searchPrompt_accessor_storage = '';
    get searchPrompt() { return this.#searchPrompt_accessor_storage; }
    set searchPrompt(value) { this.#searchPrompt_accessor_storage = value; }
    #clearLabel_accessor_storage = '';
    get clearLabel() { return this.#clearLabel_accessor_storage; }
    set clearLabel(value) { this.#clearLabel_accessor_storage = value; }
    #menuLabel_accessor_storage;
    get menuLabel() { return this.#menuLabel_accessor_storage; }
    set menuLabel(value) { this.#menuLabel_accessor_storage = value; }
    #spinnerActive_accessor_storage = false;
    get spinnerActive() { return this.#spinnerActive_accessor_storage; }
    set spinnerActive(value) { this.#spinnerActive_accessor_storage = value; }
    #showMenu_accessor_storage = false;
    get showMenu() { return this.#showMenu_accessor_storage; }
    set showMenu(value) { this.#showMenu_accessor_storage = value; }
    #showSearch_accessor_storage = true;
    get showSearch() { return this.#showSearch_accessor_storage; }
    set showSearch(value) { this.#showSearch_accessor_storage = value; }
    #autofocus_accessor_storage = false;
    get autofocus() { return this.#autofocus_accessor_storage; }
    set autofocus(value) { this.#autofocus_accessor_storage = value; }
    #narrow_accessor_storage = false;
    get narrow() { return this.#narrow_accessor_storage; }
    set narrow(value) { this.#narrow_accessor_storage = value; }
    #narrowThreshold_accessor_storage = 900;
    get narrowThreshold() { return this.#narrowThreshold_accessor_storage; }
    set narrowThreshold(value) { this.#narrowThreshold_accessor_storage = value; }
    #alwaysShowLogo_accessor_storage = false;
    get alwaysShowLogo() { return this.#alwaysShowLogo_accessor_storage; }
    set alwaysShowLogo(value) { this.#alwaysShowLogo_accessor_storage = value; }
    #showingSearch__accessor_storage = false;
    get showingSearch_() { return this.#showingSearch__accessor_storage; }
    set showingSearch_(value) { this.#showingSearch__accessor_storage = value; }
    #searchIconOverride_accessor_storage;
    get searchIconOverride() { return this.#searchIconOverride_accessor_storage; }
    set searchIconOverride(value) { this.#searchIconOverride_accessor_storage = value; }
    #searchInputAriaDescription_accessor_storage = '';
    get searchInputAriaDescription() { return this.#searchInputAriaDescription_accessor_storage; }
    set searchInputAriaDescription(value) { this.#searchInputAriaDescription_accessor_storage = value; }
    narrowQuery_ = null;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('narrowThreshold')) {
            this.narrowQuery_ =
                window.matchMedia(`(max-width: ${this.narrowThreshold}px)`);
            this.narrow = this.narrowQuery_.matches;
            this.narrowQuery_.addListener(() => this.onQueryChanged_());
        }
    }
    getSearchField() {
        return this.$.search;
    }
    onMenuClick_() {
        this.fire('cr-toolbar-menu-click');
    }
    async focusMenuButton() {
        assert(this.showMenu);
        // Wait for rendering to finish to ensure menuButton exists on the DOM.
        await this.updateComplete;
        const menuButton = this.shadowRoot.querySelector('#menuButton');
        assert(!!menuButton);
        menuButton.focus();
    }
    isMenuFocused() {
        return !!this.shadowRoot.activeElement &&
            this.shadowRoot.activeElement.id === 'menuButton';
    }
    onShowingSearchChanged_(e) {
        this.showingSearch_ = e.detail.value;
    }
    onQueryChanged_() {
        assert(this.narrowQuery_);
        this.narrow = this.narrowQuery_.matches;
    }
}
customElements.define(CrToolbarElement.is, CrToolbarElement);

let instance$3 = null;
function getCss$1() {
    return instance$3 || (instance$3 = [...[getCss$f()], css `:host{position:relative}cr-toolbar{flex:1;--cr-toolbar-field-margin:calc(var(--sidebar-width) + var(--splitter-width))}cr-icon-button{justify-content:flex-end;margin:4px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}:host(:not([narrow_])) cr-toolbar-selection-overlay{--cr-toolbar-selection-overlay-padding:var(--card-padding-side);--cr-toolbar-field-margin:var(--sidebar-width);--cr-toolbar-selection-overlay-max-width:var(--card-max-width)}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$1() {
    // clang-format off
    return html `<!--_html_template_start_-->
<cr-toolbar page-name="$i18n{title}" ?has-overlay="${this.showSelectionOverlay}"
    clear-label="$i18n{clearSearch}" search-prompt="$i18n{searchPrompt}"
    ?narrow="${this.narrow_}" @narrow-changed="${this.onNarrowChanged_}"
    autofocus always-show-logo @search-changed="${this.onSearchChanged_}">
  <cr-icon-button iron-icon="cr:more-vert" id="menuButton"
      title="$i18n{organizeButtonTitle}" @click="${this.onMenuButtonOpenClick_}"
      aria-haspopup="menu">
  </cr-icon-button>
</cr-toolbar>
<cr-toolbar-selection-overlay ?show="${this.showSelectionOverlay}"
    cancel-label="$i18n{cancel}"
    selection-label="${this.getItemsSelectedString_()}"
    @clear-selected-items="${this.onClearSelectedItems_}">
  <cr-button @click="${this.onDeleteSelectionClick_}"
      ?disabled="${!this.canDeleteSelection_()}">
    $i18n{delete}
  </cr-button>
</cr-toolbar-selection-overlay>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const BookmarksToolbarElementBase = StoreClientMixinLit(CrLitElement);
class BookmarksToolbarElement extends BookmarksToolbarElementBase {
    static get is() {
        return 'bookmarks-toolbar';
    }
    static get styles() {
        return getCss$1();
    }
    render() {
        return getHtml$1.bind(this)();
    }
    static get properties() {
        return {
            sidebarWidth: { type: String },
            showSelectionOverlay: { type: Boolean },
            narrow_: {
                type: Boolean,
                reflect: true,
            },
            searchTerm_: { type: String },
            selectedItems_: { type: Object },
            globalCanEdit_: { type: Boolean },
        };
    }
    #sidebarWidth_accessor_storage = '';
    get sidebarWidth() { return this.#sidebarWidth_accessor_storage; }
    set sidebarWidth(value) { this.#sidebarWidth_accessor_storage = value; }
    #showSelectionOverlay_accessor_storage = false;
    get showSelectionOverlay() { return this.#showSelectionOverlay_accessor_storage; }
    set showSelectionOverlay(value) { this.#showSelectionOverlay_accessor_storage = value; }
    #narrow__accessor_storage = false;
    get narrow_() { return this.#narrow__accessor_storage; }
    set narrow_(value) { this.#narrow__accessor_storage = value; }
    #searchTerm__accessor_storage = '';
    get searchTerm_() { return this.#searchTerm__accessor_storage; }
    set searchTerm_(value) { this.#searchTerm__accessor_storage = value; }
    #selectedItems__accessor_storage = new Set();
    get selectedItems_() { return this.#selectedItems__accessor_storage; }
    set selectedItems_(value) { this.#selectedItems__accessor_storage = value; }
    #globalCanEdit__accessor_storage = false;
    get globalCanEdit_() { return this.#globalCanEdit__accessor_storage; }
    set globalCanEdit_(value) { this.#globalCanEdit__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.updateFromStore();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('selectedItems_') ||
            changedPrivateProperties.has('globalCanEdit_')) {
            this.showSelectionOverlay =
                this.selectedItems_.size > 1 && this.globalCanEdit_;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('sidebarWidth')) {
            this.style.setProperty('--sidebar-width', this.sidebarWidth);
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('searchTerm_')) {
            // Note: searchField getter accesses the DOM.
            this.searchField.setValue(this.searchTerm_ || '');
        }
    }
    onStateChanged(state) {
        this.searchTerm_ = state.search.term;
        this.selectedItems_ = state.selection.items;
        this.globalCanEdit_ = state.prefs.canEdit;
    }
    get searchField() {
        return this.shadowRoot.querySelector('cr-toolbar').getSearchField();
    }
    onMenuButtonOpenClick_(e) {
        this.fire('open-command-menu', {
            targetElement: e.target,
            source: MenuSource.TOOLBAR,
        });
    }
    onDeleteSelectionClick_() {
        const selection = this.selectedItems_;
        const commandManager = BookmarksCommandManagerElement.getInstance();
        assert(commandManager.canExecute(Command.DELETE, selection));
        commandManager.handle(Command.DELETE, selection);
    }
    onClearSelectedItems_() {
        const commandManager = BookmarksCommandManagerElement.getInstance();
        assert(commandManager.canExecute(Command.DESELECT_ALL, this.selectedItems_));
        commandManager.handle(Command.DESELECT_ALL, this.selectedItems_);
    }
    onSearchChanged_(e) {
        if (e.detail !== this.searchTerm_) {
            this.dispatch(setSearchTerm(e.detail));
        }
    }
    onNarrowChanged_(e) {
        this.narrow_ = e.detail.value;
    }
    canDeleteSelection_() {
        return this.showSelectionOverlay &&
            BookmarksCommandManagerElement.getInstance().canExecute(Command.DELETE, this.selectedItems_);
    }
    getItemsSelectedString_() {
        return loadTimeData.getStringF('itemsSelected', this.selectedItems_.size);
    }
}
customElements.define(BookmarksToolbarElement.is, BookmarksToolbarElement);

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

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Listens for a find keyboard shortcut (i.e. Ctrl/Cmd+f or /)
 * and keeps track of an stack of potential listeners. Only the listener at the
 * top of the stack will be notified that a find shortcut has been invoked.
 */
const FindShortcutManager = (() => {
    /**
     * Stack of listeners. Only the top listener will handle the shortcut.
     */
    const listeners = [];
    /**
     * Tracks if any modal context is open in settings. This assumes only one
     * modal can be open at a time. The modals that are being tracked include
     * cr-dialog and cr-drawer.
     * @type {boolean}
     */
    let modalContextOpen = false;
    const shortcutCtrlF = new KeyboardShortcutList(isMac ? 'meta|f' : 'ctrl|f');
    const shortcutSlash = new KeyboardShortcutList('/');
    window.addEventListener('keydown', e => {
        if (e.defaultPrevented || listeners.length === 0) {
            return;
        }
        const element = e.composedPath()[0];
        if (!shortcutCtrlF.matchesEvent(e) &&
            (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' ||
                !shortcutSlash.matchesEvent(e))) {
            return;
        }
        const focusIndex = listeners.findIndex(listener => listener.searchInputHasFocus());
        // If no listener has focus or the first (outer-most) listener has focus,
        // try the last (inner-most) listener.
        // If a listener has a search input with focus, the next listener that
        // should be called is the right before it in |listeners| such that the
        // goes from inner-most to outer-most.
        const index = focusIndex <= 0 ? listeners.length - 1 : focusIndex - 1;
        if (listeners[index].handleFindShortcut(modalContextOpen)) {
            e.preventDefault();
        }
    });
    window.addEventListener('cr-dialog-open', () => {
        modalContextOpen = true;
    });
    window.addEventListener('cr-drawer-opened', () => {
        modalContextOpen = true;
    });
    window.addEventListener('close', e => {
        if (['CR-DIALOG', 'CR-DRAWER'].includes(e.composedPath()[0].nodeName)) {
            modalContextOpen = false;
        }
    });
    return Object.freeze({ listeners: listeners });
})();

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Used to determine how to handle find shortcut invocations.
 */
const FindShortcutMixinLit = (superClass) => {
    class FindShortcutMixinLit extends superClass {
        findShortcutListenOnAttach = true;
        connectedCallback() {
            super.connectedCallback();
            if (this.findShortcutListenOnAttach) {
                this.becomeActiveFindShortcutListener();
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this.findShortcutListenOnAttach) {
                this.removeSelfAsFindShortcutListener();
            }
        }
        becomeActiveFindShortcutListener() {
            const listeners = FindShortcutManager.listeners;
            assert(!listeners.includes(this), 'Already listening for find shortcuts.');
            listeners.push(this);
        }
        handleFindShortcutInternal_() {
            assertNotReached('Must override handleFindShortcut()');
        }
        handleFindShortcut(_modalContextOpen) {
            this.handleFindShortcutInternal_();
            return false;
        }
        removeSelfAsFindShortcutListener() {
            const listeners = FindShortcutManager.listeners;
            const index = listeners.indexOf(this);
            assert(listeners.includes(this), 'Find shortcut listener not found.');
            listeners.splice(index, 1);
        }
        searchInputHasFocusInternal_() {
            assertNotReached('Must override searchInputHasFocus()');
        }
        searchInputHasFocus() {
            this.searchInputHasFocusInternal_();
            return false;
        }
    }
    return FindShortcutMixinLit;
};

let instance$1 = null;
function getCss() {
    return instance$1 || (instance$1 = [...[getCss$j(), getCss$l()], css `:host{color:var(--cr-primary-text-color);display:flex;flex-direction:column;height:100%;line-height:1.54}#main-container{anchor-name:--main-container;display:flex;flex-direction:row;flex-grow:1;overflow:hidden}#splitter{box-sizing:border-box;cursor:e-resize;flex:0 0 var(--splitter-width);opacity:0}#splitter:hover,#splitter.splitter-active{border-inline-start:1px solid rgba(0,0,0,0.1);opacity:1;transition:opacity 100ms ease-out}@media (prefers-color-scheme:dark){#splitter:hover,#splitter.splitter-active{border-inline-start-color:var(--cr-separator-color)}}#sidebar{display:flex;flex-direction:column;max-width:40%;min-width:var(--min-sidebar-width);width:var(--min-sidebar-width)}#sidebar-folders{display:flex;flex-direction:column;flex-grow:1;overflow:auto}bookmarks-folder-node{flex:1;overflow-y:auto;padding:8px 0;user-select:none}managed-footnote{--managed-footnote-icon-padding:12px;flex:0;padding-bottom:24px;padding-top:24px}bookmarks-list{flex:1;overflow-x:auto}.cr-scrollable-top-shadow{position-anchor:--main-container}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml() {
    // clang-format off
    return html `<!--_html_template_start_-->
<bookmarks-toolbar sidebar-width="${this.sidebarWidth_}" role="banner">
</bookmarks-toolbar>
<div id="main-container">
  <div
      class="cr-scrollable-top-shadow ${this.toolbarShadow_ ? 'force-on' : ''}">
  </div>
  <div id="sidebar">
    <div id="sidebar-folders" role="tree" aria-label="$i18n{sidebarAxLabel}">
      <bookmarks-folder-node item-id="0" depth="-1"></bookmarks-folder-node>
    </div>
    <managed-footnote></managed-footnote>
  </div>
  <cr-splitter id="splitter"></cr-splitter>
  <bookmarks-list @scroll="${this.onListScroll_}"></bookmarks-list>
</div>
<bookmarks-command-manager></bookmarks-command-manager>
<cr-toast-manager duration="10000">
  <cr-button @click="${this.onUndoClick_}" aria-label="$i18n{undoDescription}">
    $i18n{undo}
  </cr-button>
</cr-toast-manager>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isBookmarkItem(element) {
    return element.tagName === 'BOOKMARKS-ITEM';
}
function isBookmarkFolderNode(element) {
    return element.tagName === 'BOOKMARKS-FOLDER-NODE';
}
function isBookmarkList(element) {
    return element.tagName === 'BOOKMARKS-LIST';
}
function isClosedBookmarkFolderNode(element) {
    return isBookmarkFolderNode(element) &&
        !(element.isOpen);
}
function getBookmarkElement(path) {
    if (!path) {
        return null;
    }
    for (let i = 0; i < path.length; i++) {
        const element = path[i];
        if (isBookmarkItem(element) || isBookmarkFolderNode(element) ||
            isBookmarkList(element)) {
            return path[i];
        }
    }
    return null;
}
function getDragElement(path) {
    const dragElement = getBookmarkElement(path);
    for (let i = 0; i < path.length; i++) {
        if (path[i].tagName === 'BUTTON') {
            return null;
        }
    }
    return dragElement && dragElement.getAttribute('draggable') ? dragElement :
        null;
}
function getBookmarkNode(bookmarkElement) {
    return Store.getInstance().data.nodes[bookmarkElement.itemId];
}
function isTextInputElement(element) {
    return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
}
/**
 * Contains and provides utility methods for drag data sent by the
 * bookmarkManagerPrivate API.
 */
class DragInfo {
    dragData = null;
    setNativeDragData(newDragData) {
        // The bookmarkManagerPrivate API identifies nodes by their legacy numeric
        // id, whereas the store is keyed by the UUID-based id. Translate the ids so
        // that they can be compared against store ids. Nodes from another profile
        // do not exist in the store, so there is nothing to translate.
        const nodes = Store.getInstance().data.nodes;
        function toStoreId(legacyId) {
            if (!newDragData.sameProfile) {
                return legacyId;
            }
            const uuid = findIdByLegacyId(nodes, legacyId);
            return uuid == null ? legacyId : uuid;
        }
        this.dragData = {
            sameProfile: newDragData.sameProfile,
            elements: (newDragData.elements ||
                []).map(x => ({
                id: toStoreId(x.id),
                parentId: x.parentId === undefined ? undefined :
                    toStoreId(x.parentId),
                url: x.url,
            })),
        };
    }
    clearDragData() {
        this.dragData = null;
    }
    isDragValid() {
        return !!this.dragData;
    }
    isSameProfile() {
        return !!this.dragData && this.dragData.sameProfile;
    }
    isDraggingFolders() {
        return !!this.dragData && this.dragData.elements.some(function (node) {
            return !node.url;
        });
    }
    isDraggingBookmark(bookmarkId) {
        return !!this.dragData && this.isSameProfile() &&
            this.dragData.elements.some(function (node) {
                return node.id === bookmarkId;
            });
    }
    isDraggingChildBookmark(folderId) {
        return !!this.dragData && this.isSameProfile() &&
            this.dragData.elements.some(function (node) {
                return node.parentId === folderId;
            });
    }
    isDraggingFolderToDescendant(itemId, nodes) {
        if (!this.isSameProfile()) {
            return false;
        }
        let parentId = nodes[itemId].parentId;
        const parents = {};
        while (parentId) {
            parents[parentId] = true;
            parentId = nodes[parentId].parentId;
        }
        return !!this.dragData && this.dragData.elements.some(function (node) {
            return parents[node.id];
        });
    }
}
// Ms to wait during a dragover to open closed folder.
let folderOpenerTimeoutDelay = 400;
function overrideFolderOpenerTimeoutDelay(ms) {
    folderOpenerTimeoutDelay = ms;
}
/**
 * Manages auto expanding of sidebar folders on hover while dragging.
 */
class AutoExpander {
    lastElement_ = null;
    debouncer_;
    lastX_ = null;
    lastY_ = null;
    constructor() {
        this.debouncer_ = new Debouncer(() => {
            const store = Store.getInstance();
            store.dispatch(changeFolderOpen$1(this.lastElement_.itemId, true));
            this.reset();
        });
    }
    update(e, overElement, dropPosition) {
        const x = e.clientX;
        const y = e.clientY;
        const itemId = overElement ? overElement.itemId : null;
        const store = Store.getInstance();
        // If dragging over a new closed folder node with children reset the
        // expander. Falls through to reset the expander delay.
        if (overElement && overElement !== this.lastElement_ &&
            isClosedBookmarkFolderNode(overElement) &&
            hasChildFolders(itemId, store.data.nodes)) {
            this.reset();
            this.lastElement_ = overElement;
        }
        // If dragging over the same node, reset the expander delay.
        if (overElement && overElement === this.lastElement_ &&
            dropPosition === DropPosition.ON) {
            if (x !== this.lastX_ || y !== this.lastY_) {
                this.debouncer_.restartTimeout(folderOpenerTimeoutDelay);
            }
        }
        else {
            // Otherwise, cancel the expander.
            this.reset();
        }
        this.lastX_ = x;
        this.lastY_ = y;
    }
    reset() {
        this.debouncer_.reset();
        this.lastElement_ = null;
    }
}
/**
 * Encapsulates the behavior of the drag and drop indicator which puts a line
 * between items or highlights folders which are valid drop targets.
 */
class DropIndicator {
    removeDropIndicatorTimeoutId_;
    lastIndicatorElement_;
    lastIndicatorClassName_;
    timerProxy;
    constructor() {
        this.removeDropIndicatorTimeoutId_ = null;
        this.lastIndicatorElement_ = null;
        this.lastIndicatorClassName_ = null;
        this.timerProxy = window;
    }
    /**
     * Applies the drop indicator style on the target element and stores that
     * information to easily remove the style in the future.
     */
    addDropIndicatorStyle(indicatorElement, position) {
        const indicatorStyleName = position === DropPosition.ABOVE ?
            'drag-above' :
            position === DropPosition.BELOW ? 'drag-below' : 'drag-on';
        this.lastIndicatorElement_ = indicatorElement;
        this.lastIndicatorClassName_ = indicatorStyleName;
        indicatorElement.classList.add(indicatorStyleName);
    }
    /**
     * Clears the drop indicator style from the last drop target.
     */
    removeDropIndicatorStyle() {
        if (!this.lastIndicatorElement_ || !this.lastIndicatorClassName_) {
            return;
        }
        this.lastIndicatorElement_.classList.remove(this.lastIndicatorClassName_);
        this.lastIndicatorElement_ = null;
        this.lastIndicatorClassName_ = null;
    }
    /**
     * Displays the drop indicator on the current drop target to give the
     * user feedback on where the drop will occur.
     */
    update(dropDest) {
        this.timerProxy.clearTimeout(this.removeDropIndicatorTimeoutId_);
        this.removeDropIndicatorTimeoutId_ = null;
        const indicatorElement = dropDest.element.getDropTarget();
        const position = dropDest.position;
        this.removeDropIndicatorStyle();
        this.addDropIndicatorStyle(indicatorElement, position);
    }
    /**
     * Stop displaying the drop indicator.
     */
    finish() {
        if (this.removeDropIndicatorTimeoutId_) {
            return;
        }
        // The use of a timeout is in order to reduce flickering as we move
        // between valid drop targets.
        this.removeDropIndicatorTimeoutId_ = this.timerProxy.setTimeout(() => {
            this.removeDropIndicatorStyle();
        }, 100);
    }
}
/**
 * Manages drag and drop events for the bookmarks-app.
 */
class DndManager {
    dragInfo_;
    dropDestination_;
    dropIndicator_;
    eventTracker_ = new EventTracker();
    autoExpander_;
    timerProxy_;
    lastPointerWasTouch_;
    dragStarted_ = false;
    constructor() {
        this.dragInfo_ = null;
        this.dropDestination_ = null;
        this.dropIndicator_ = null;
        this.autoExpander_ = null;
        this.timerProxy_ = window;
        this.lastPointerWasTouch_ = false;
    }
    init() {
        this.dragInfo_ = new DragInfo();
        this.dropIndicator_ = new DropIndicator();
        this.autoExpander_ = new AutoExpander();
        this.eventTracker_.add(document, 'dragstart', (e) => this.onDragStart_(e));
        this.eventTracker_.add(document, 'dragenter', (e) => this.onDragEnter_(e));
        this.eventTracker_.add(document, 'dragover', (e) => this.onDragOver_(e));
        this.eventTracker_.add(document, 'dragleave', () => this.onDragLeave_());
        this.eventTracker_.add(document, 'drop', (e) => this.onDrop_(e));
        this.eventTracker_.add(document, 'dragend', () => this.clearDragData_());
        this.eventTracker_.add(document, 'mousedown', () => this.onMouseDown_());
        this.eventTracker_.add(document, 'touchstart', () => this.onTouchStart_());
        BookmarkManagerApiProxyImpl.getInstance().onDragEnter.addListener(this.handleChromeDragEnter_.bind(this));
        chrome.bookmarkManagerPrivate.onDragLeave.addListener(this.clearDragData_.bind(this));
    }
    destroy() {
        this.eventTracker_.removeAll();
    }
    ////////////////////////////////////////////////////////////////////////////
    // DragEvent handlers:
    onDragStart_(e) {
        if (this.dragStarted_) {
            e.preventDefault();
            return;
        }
        const dragElement = getDragElement(e.composedPath());
        if (!dragElement) {
            return;
        }
        e.preventDefault();
        const dragData = this.calculateDragData_(dragElement);
        if (!dragData) {
            this.clearDragData_();
            return;
        }
        const state = Store.getInstance().data;
        let draggedNodes = [];
        if (isBookmarkItem(dragElement)) {
            const displayingItems = getDisplayedList(state);
            // TODO(crbug.com/41468833): Make this search more time efficient to avoid
            // delay on large amount of bookmark dragging.
            for (const itemId of displayingItems) {
                for (const element of dragData.elements) {
                    if (element.id === itemId) {
                        draggedNodes.push(element.id);
                        break;
                    }
                }
            }
        }
        else {
            draggedNodes = dragData.elements.map((item) => item.id);
        }
        assert(draggedNodes.length === dragData.elements.length);
        const dragNodeIndex = draggedNodes.indexOf(dragElement.itemId);
        assert(dragNodeIndex !== -1);
        this.dragStarted_ = true;
        const legacyDraggedNodes = draggedNodes.map(id => getLegacyId(state.nodes[id]));
        BookmarkManagerApiProxyImpl.getInstance().startDrag(legacyDraggedNodes, dragNodeIndex, this.lastPointerWasTouch_, e.clientX, e.clientY);
    }
    onDragLeave_() {
        this.dropIndicator_.finish();
    }
    onDrop_(e) {
        // Allow normal DND on text inputs.
        if (isTextInputElement(e.composedPath()[0])) {
            return;
        }
        e.preventDefault();
        if (this.dropDestination_) {
            const dropInfo = this.calculateDropInfo_(this.dropDestination_);
            const index = dropInfo.index !== -1 ? dropInfo.index : undefined;
            const shouldHighlight = this.shouldHighlight_(this.dropDestination_);
            if (shouldHighlight) {
                trackUpdatedItems();
            }
            const state = Store.getInstance().data;
            const legacyParentId = getLegacyId(state.nodes[dropInfo.parentId]);
            BookmarkManagerApiProxyImpl.getInstance()
                .drop(legacyParentId, index)
                .then(shouldHighlight ? highlightUpdatedItems : undefined);
        }
        this.clearDragData_();
    }
    onDragEnter_(e) {
        e.preventDefault();
    }
    onDragOver_(e) {
        this.dropDestination_ = null;
        // Allow normal DND on text inputs.
        if (isTextInputElement(e.composedPath()[0])) {
            return;
        }
        // The default operation is to allow dropping links etc to do
        // navigation. We never want to do that for the bookmark manager.
        e.preventDefault();
        if (!this.dragInfo_.isDragValid()) {
            return;
        }
        const overElement = getBookmarkElement(e.composedPath());
        if (!overElement) {
            this.autoExpander_.update(e, overElement);
            this.dropIndicator_.finish();
            return;
        }
        // Now we know that we can drop. Determine if we will drop above, on or
        // below based on mouse position etc.
        this.dropDestination_ =
            this.calculateDropDestination_(e.clientY, overElement);
        if (!this.dropDestination_) {
            this.autoExpander_.update(e, overElement);
            this.dropIndicator_.finish();
            return;
        }
        this.autoExpander_.update(e, overElement, this.dropDestination_.position);
        this.dropIndicator_.update(this.dropDestination_);
    }
    onMouseDown_() {
        this.lastPointerWasTouch_ = false;
        this.dragStarted_ = false;
    }
    onTouchStart_() {
        this.lastPointerWasTouch_ = true;
        this.dragStarted_ = false;
    }
    handleChromeDragEnter_(dragData) {
        this.dragInfo_.setNativeDragData(dragData);
    }
    ////////////////////////////////////////////////////////////////////////////
    // Helper methods:
    clearDragData_() {
        this.dragStarted_ = false;
        this.autoExpander_.reset();
        // Defer the clearing of the data so that the bookmark manager API's drop
        // event doesn't clear the drop data before the web drop event has a
        // chance to execute (on Mac).
        this.timerProxy_.setTimeout(() => {
            this.dragInfo_.clearDragData();
            this.dropDestination_ = null;
            this.dropIndicator_.finish();
        }, 0);
    }
    calculateDropInfo_(dropDestination) {
        if (isBookmarkList(dropDestination.element)) {
            return {
                index: 0,
                parentId: Store.getInstance().data.selectedFolder,
            };
        }
        const node = getBookmarkNode(dropDestination.element);
        const position = dropDestination.position;
        let index = -1;
        let parentId = node.id;
        if (position !== DropPosition.ON) {
            const state = Store.getInstance().data;
            // Drops between items in the normal list and the sidebar use the drop
            // destination node's parent.
            assert(node.parentId);
            parentId = node.parentId;
            index = state.nodes[parentId].children.indexOf(node.id);
            if (position === DropPosition.BELOW) {
                index++;
            }
        }
        return {
            index: index,
            parentId: parentId,
        };
    }
    /**
     * Calculates which items should be dragged based on the initial drag item
     * and the current selection. Dragged items will end up selected.
     */
    calculateDragData_(dragElement) {
        const dragId = dragElement.itemId;
        const store = Store.getInstance();
        const state = store.data;
        // Determine the selected bookmarks.
        let draggedNodes = Array.from(state.selection.items);
        // Change selection to the dragged node if the node is not part of the
        // existing selection.
        if (isBookmarkFolderNode(dragElement) ||
            draggedNodes.indexOf(dragId) === -1) {
            store.dispatch(deselectItems$1());
            if (!isBookmarkFolderNode(dragElement)) {
                store.dispatch(selectItem(dragId, state, {
                    clear: false,
                    range: false,
                    toggle: false,
                }));
            }
            draggedNodes = [dragId];
        }
        // If any node can't be dragged, end the drag.
        const anyUnmodifiable = draggedNodes.some((itemId) => !canEditNode(state, itemId));
        if (anyUnmodifiable) {
            return null;
        }
        return {
            elements: draggedNodes.map((id) => state.nodes[id]),
            sameProfile: true,
        };
    }
    /**
     * This function determines where the drop will occur.
     */
    calculateDropDestination_(elementClientY, overElement) {
        const validDropPositions = this.calculateValidDropPositions_(overElement);
        if (validDropPositions === DropPosition.NONE) {
            return null;
        }
        const above = validDropPositions & DropPosition.ABOVE;
        const below = validDropPositions & DropPosition.BELOW;
        const on = validDropPositions & DropPosition.ON;
        const rect = overElement.getDropTarget().getBoundingClientRect();
        const yRatio = (elementClientY - rect.top) / rect.height;
        if (above && (yRatio <= .25 || yRatio <= .5 && (!below || !on))) {
            return { element: overElement, position: DropPosition.ABOVE };
        }
        if (below && (yRatio > .75 || yRatio > .5 && (!above || !on))) {
            return { element: overElement, position: DropPosition.BELOW };
        }
        if (on) {
            return { element: overElement, position: DropPosition.ON };
        }
        return null;
    }
    /**
     * Determines the valid drop positions for the given target element.
     */
    calculateValidDropPositions_(overElement) {
        const dragInfo = this.dragInfo_;
        const state = Store.getInstance().data;
        let itemId = overElement.itemId;
        // Drags aren't allowed onto the search result list.
        if ((isBookmarkList(overElement) || isBookmarkItem(overElement)) &&
            isShowingSearch(state)) {
            return DropPosition.NONE;
        }
        if (isBookmarkList(overElement)) {
            itemId = state.selectedFolder;
        }
        if (!canReorderChildren(state, itemId)) {
            return DropPosition.NONE;
        }
        // Drags of a bookmark onto itself or of a folder into its children aren't
        // allowed.
        if (dragInfo.isDraggingBookmark(itemId) ||
            dragInfo.isDraggingFolderToDescendant(itemId, state.nodes)) {
            return DropPosition.NONE;
        }
        let validDropPositions = this.calculateDropAboveBelow_(overElement);
        if (this.canDropOn_(overElement)) {
            validDropPositions |= DropPosition.ON;
        }
        return validDropPositions;
    }
    calculateDropAboveBelow_(overElement) {
        const dragInfo = this.dragInfo_;
        const state = Store.getInstance().data;
        if (isBookmarkList(overElement)) {
            return DropPosition.NONE;
        }
        // We cannot drop between Bookmarks bar and Other bookmarks.
        if (isRootOrChildOfRoot(state, getBookmarkNode(overElement).id)) {
            return DropPosition.NONE;
        }
        const isOverFolderNode = isBookmarkFolderNode(overElement);
        // We can only drop between items in the tree if we have any folders.
        if (isOverFolderNode && !dragInfo.isDraggingFolders()) {
            return DropPosition.NONE;
        }
        let validDropPositions = DropPosition.NONE;
        // Cannot drop above if the item above is already in the drag source.
        const previousElem = overElement.previousElementSibling;
        if (!previousElem || !dragInfo.isDraggingBookmark(previousElem.itemId)) {
            validDropPositions |= DropPosition.ABOVE;
        }
        // Don't allow dropping below an expanded sidebar folder item since it is
        // confusing to the user anyway.
        if (isOverFolderNode && !isClosedBookmarkFolderNode(overElement) &&
            hasChildFolders(overElement.itemId, state.nodes)) {
            return validDropPositions;
        }
        const nextElement = overElement.nextElementSibling;
        // Cannot drop below if the item below is already in the drag source.
        if (!nextElement || !dragInfo.isDraggingBookmark(nextElement.itemId)) {
            validDropPositions |= DropPosition.BELOW;
        }
        return validDropPositions;
    }
    /**
     * Determine whether we can drop the dragged items on the drop target.
     */
    canDropOn_(overElement) {
        // Allow dragging onto empty bookmark lists.
        if (isBookmarkList(overElement)) {
            const state = Store.getInstance().data;
            return !!state.selectedFolder && !!state.nodes[state.selectedFolder] &&
                state.nodes[state.selectedFolder].children.length === 0;
        }
        // We can only drop on a folder.
        if (getBookmarkNode(overElement).url) {
            return false;
        }
        return !this.dragInfo_.isDraggingChildBookmark(overElement.itemId);
    }
    shouldHighlight_(dropDestination) {
        return isBookmarkItem(dropDestination.element) ||
            isBookmarkList(dropDestination.element);
    }
    setTimerProxyForTesting(timerProxy) {
        this.timerProxy_ = timerProxy;
        this.dropIndicator_.timerProxy = timerProxy;
    }
    getDragInfoForTesting() {
        return this.dragInfo_;
    }
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function safeDecodeURIComponent(s) {
    try {
        return window.decodeURIComponent(s);
    }
    catch (_e) {
        // If the string can't be decoded, return it verbatim.
        return s;
    }
}
function getCurrentPathname() {
    return safeDecodeURIComponent(window.location.pathname);
}
function getCurrentHash() {
    return safeDecodeURIComponent(window.location.hash.slice(1));
}
let instance = null;
class CrRouter extends EventTarget {
    path_ = getCurrentPathname();
    query_ = window.location.search.slice(1);
    hash_ = getCurrentHash();
    /**
     * If the user was on a URL for less than `dwellTime_` milliseconds, it
     * won't be added to the browser's history, but instead will be replaced
     * by the next entry.
     *
     * This is to prevent large numbers of entries from clogging up the user's
     * browser history. Disable by setting to a negative number.
     */
    dwellTime_ = 2000;
    lastChangedAt_;
    constructor() {
        super();
        this.lastChangedAt_ = window.performance.now() - (this.dwellTime_ - 200);
        window.addEventListener('hashchange', () => this.hashChanged_());
        window.addEventListener('popstate', () => this.urlChanged_());
    }
    setDwellTime(dwellTime) {
        this.dwellTime_ = dwellTime;
        this.lastChangedAt_ = window.performance.now() - this.dwellTime_;
    }
    getPath() {
        return this.path_;
    }
    getQueryParams() {
        return new URLSearchParams(this.query_);
    }
    getHash() {
        return this.hash_;
    }
    setHash(hash) {
        this.hash_ = safeDecodeURIComponent(hash);
        if (this.hash_ !== getCurrentHash()) {
            this.updateState_();
        }
    }
    setQueryParams(params) {
        this.query_ = params.toString();
        if (this.query_ !== window.location.search.substring(1)) {
            this.updateState_();
        }
    }
    setPath(path) {
        assert(path.startsWith('/'));
        this.path_ = safeDecodeURIComponent(path);
        if (this.path_ !== getCurrentPathname()) {
            this.updateState_();
        }
    }
    hashChanged_() {
        const oldHash = this.hash_;
        this.hash_ = getCurrentHash();
        if (this.hash_ !== oldHash) {
            this.dispatchEvent(new CustomEvent('cr-router-hash-changed', { bubbles: true, composed: true, detail: this.hash_ }));
        }
    }
    // Dispatches cr-router-*-changed events if portions of the URL change from
    // window events.
    urlChanged_() {
        this.hashChanged_();
        const oldPath = this.path_;
        this.path_ = getCurrentPathname();
        if (oldPath !== this.path_) {
            this.dispatchEvent(new CustomEvent('cr-router-path-changed', { bubbles: true, composed: true, detail: this.path_ }));
        }
        const oldQuery = this.query_;
        this.query_ = window.location.search.substring(1);
        if (oldQuery !== this.query_) {
            this.dispatchEvent(new CustomEvent('cr-router-query-params-changed', { bubbles: true, composed: true, detail: this.getQueryParams() }));
        }
    }
    // Updates the window history state if the URL is updated from setters.
    updateState_() {
        const url = new URL(window.location.origin);
        const pathPieces = this.path_.split('/');
        url.pathname =
            pathPieces.map(piece => window.encodeURIComponent(piece)).join('/');
        if (this.query_) {
            url.search = this.query_;
        }
        if (this.hash_) {
            url.hash = window.encodeURIComponent(this.hash_);
        }
        const now = window.performance.now();
        const shouldReplace = this.lastChangedAt_ + this.dwellTime_ > now;
        this.lastChangedAt_ = now;
        if (shouldReplace) {
            window.history.replaceState({}, '', url.href);
        }
        else {
            window.history.pushState({}, '', url.href);
        }
    }
    static getInstance() {
        return instance || (instance = new CrRouter());
    }
    static resetForTesting() {
        instance = null;
    }
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * This element is a one way bound interface that routes the page URL to
 * the searchTerm and selectedId. Clients must initialize themselves by
 * reading the router's fields after attach.
 */
class BookmarksRouter {
    searchTerm_ = '';
    selectedId_ = '';
    // The id shown in the URL for `selectedId_`. See `getUrlId_()`.
    selectedUrlId_ = '';
    defaultId_ = '';
    updateStateTimeout_ = null;
    tracker_ = new EventTracker();
    initialize() {
        const store = Store.getInstance();
        store.addObserver(this);
        if (store.isInitialized()) {
            this.onStateChanged(store.data);
        }
        const router = CrRouter.getInstance();
        router.setDwellTime(200);
        this.onQueryParamsChanged_(router.getQueryParams());
        this.tracker_.add(router, 'cr-router-query-params-changed', (e) => this.onQueryParamsChanged_(e.detail));
    }
    teardown() {
        if (this.updateStateTimeout_) {
            clearTimeout(this.updateStateTimeout_);
            this.updateStateTimeout_ = null;
        }
        this.tracker_.removeAll();
        Store.getInstance().removeObserver(this);
    }
    onQueryParamsChanged_(newParams) {
        const searchTerm = newParams.get('q') || '';
        let selectedId = newParams.get('id');
        if (!selectedId && !searchTerm) {
            selectedId = this.defaultId_;
        }
        if (searchTerm !== this.searchTerm_) {
            this.searchTerm_ = searchTerm;
            Store.getInstance().dispatch(setSearchTerm(searchTerm));
        }
        if (selectedId && selectedId !== this.selectedId_ &&
            selectedId !== this.selectedUrlId_) {
            this.selectedId_ = selectedId;
            this.selectedUrlId_ = selectedId;
            // Need to dispatch a deferred action so that during page load
            // `Store.getInstance().data` will only evaluate after the Store is
            // initialized.
            Store.getInstance().dispatchAsync((dispatch) => {
                const nodes = Store.getInstance().data.nodes;
                // The browser (e.g. the bookmark bar context menu) and older saved
                // URLs refer to folders by their legacy numeric id. Map those to the
                // UUID-based ids used by the store.
                const resolvedId = nodes[selectedId] ?
                    selectedId :
                    (findIdByLegacyId(nodes, selectedId) ?? selectedId);
                const action = selectFolder(resolvedId, nodes);
                if (action) {
                    dispatch(action);
                }
            });
        }
    }
    onStateChanged(state) {
        this.selectedId_ = state.selectedFolder;
        this.selectedUrlId_ = this.getUrlId_(state, state.selectedFolder);
        this.searchTerm_ = state.search.term;
        // Default to the first child of root, which could be
        // ACCOUNT_HEADING_NODE_ID, the local bookmark bar, or the account bookmark
        // bar.
        this.defaultId_ = state.nodes[ROOT_NODE_ID].children[0];
        if (this.updateStateTimeout_) {
            clearTimeout(this.updateStateTimeout_);
        }
        // Debounce to microtask timing.
        this.updateStateTimeout_ = setTimeout(() => this.updateQueryParams_(), 0);
    }
    /**
     * Returns the id to show in the URL for the node with store id `id`.
     *
     * IMPORTANT: chrome://bookmarks/?id=<numeric id> is effectively a public
     * API and must not change. Users bookmark and share these URLs, and
     * automation reads the id from the URL and passes it to the
     * chrome.bookmarks extension API, which uses the same numeric ids. The
     * UUID-based store ids are an implementation detail and must not leak into
     * the URL. This is covered by end-to-end browser tests.
     *
     * Nodes without a numeric id (e.g. the synthetic account/local headings)
     * fall back to their store id.
     */
    getUrlId_(state, id) {
        return String(state.nodes[id]?.legacyId ?? id);
    }
    updateQueryParams_() {
        assert(this.updateStateTimeout_);
        clearTimeout(this.updateStateTimeout_);
        this.updateStateTimeout_ = null;
        const queryParams = new URLSearchParams();
        if (this.searchTerm_) {
            queryParams.set('q', this.searchTerm_);
        }
        else if (this.selectedId_ !== this.defaultId_) {
            queryParams.set('id', this.selectedUrlId_);
        }
        CrRouter.getInstance().setQueryParams(queryParams);
    }
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HIDE_FOCUS_RING_ATTRIBUTE = 'hide-focus-ring';
const BookmarksAppElementBase = StoreClientMixinLit(FindShortcutMixinLit(CrLitElement));
class BookmarksAppElement extends BookmarksAppElementBase {
    static get is() {
        return 'bookmarks-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            searchTerm_: { type: String },
            folderOpenState_: { type: Object },
            sidebarWidth_: { type: String },
            toolbarShadow_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #folderOpenState__accessor_storage;
    get folderOpenState_() { return this.#folderOpenState__accessor_storage; }
    set folderOpenState_(value) { this.#folderOpenState__accessor_storage = value; }
    #searchTerm__accessor_storage;
    get searchTerm_() { return this.#searchTerm__accessor_storage; }
    set searchTerm_(value) { this.#searchTerm__accessor_storage = value; }
    #sidebarWidth__accessor_storage = '';
    get sidebarWidth_() { return this.#sidebarWidth__accessor_storage; }
    set sidebarWidth_(value) { this.#sidebarWidth__accessor_storage = value; }
    #toolbarShadow__accessor_storage = false;
    get toolbarShadow_() { return this.#toolbarShadow__accessor_storage; }
    set toolbarShadow_(value) { this.#toolbarShadow__accessor_storage = value; }
    eventTracker_ = new EventTracker();
    dndManager_ = null;
    router_ = new BookmarksRouter();
    constructor() {
        super();
        // Regular expression that captures the leading slash, the content and the
        // trailing slash in three different groups.
        const CANONICAL_PATH_REGEX = /(^\/)([\/-\w]+)(\/$)/;
        const path = location.pathname.replace(CANONICAL_PATH_REGEX, '$1$2');
        if (path !== '/') { // Only queries are supported, not subpages.
            window.history.replaceState(undefined /* stateObject */, '', '/');
        }
    }
    connectedCallback() {
        super.connectedCallback();
        const enableWebuiRefresh2026 = loadTimeData.getString('webuiRefresh2026') !== '';
        if (enableWebuiRefresh2026) {
            this.addThemedColors_();
            ColorChangeUpdater.forDocument().start();
        }
        document.documentElement.classList.remove('loading');
        // These events are added to the document because capture doesn't work
        // properly when listeners are added to a Polymer element, because the
        // event is considered AT_TARGET for the element, and is evaluated
        // after inner captures.
        this.eventTracker_.add(document, 'mousedown', () => this.onMousedown_(), true);
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeydown_(e), true);
        this.router_.initialize();
        this.updateFromStore();
        BookmarksApiProxyImpl.getInstance().getTree().then((nodeMap) => {
            const initialState = createEmptyState();
            initialState.nodes = nodeMap;
            initialState.selectedFolder = getDefaultSelectedFolder(nodeMap);
            const folderStateString = window.localStorage[LOCAL_STORAGE_FOLDER_STATE_KEY];
            initialState.folderOpenState = folderStateString ?
                new Map(JSON.parse(folderStateString)) :
                new Map();
            Store.getInstance().init(initialState);
            init();
            setTimeout(function () {
                chrome.metricsPrivate.recordTime('BookmarkManager.ResultsRenderedTime', Math.floor(window.performance.now()));
            });
        });
        this.initializeSplitter_();
        this.dndManager_ = new DndManager();
        this.dndManager_.init();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.router_.teardown();
        this.eventTracker_.remove(document, 'mousedown');
        this.eventTracker_.remove(document, 'keydown');
        this.eventTracker_.remove(window, 'resize');
        assert(this.dndManager_);
        this.dndManager_.destroy();
        this.dndManager_ = null;
        destroy();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('searchTerm_')) {
            this.searchTermChanged_(this.searchTerm_, changedPrivateProperties.get('searchTerm_'));
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('folderOpenState_')) {
            this.folderOpenStateChanged_();
        }
    }
    onStateChanged(state) {
        this.searchTerm_ = state.search.term;
        this.folderOpenState_ = state.folderOpenState;
    }
    initializeSplitter_() {
        const splitter = this.$.splitter;
        const splitterTarget = this.$.sidebar;
        // The splitter persists the size of the left component in the local store.
        if (LOCAL_STORAGE_TREE_WIDTH_KEY in window.localStorage) {
            splitterTarget.style.width =
                window.localStorage[LOCAL_STORAGE_TREE_WIDTH_KEY];
        }
        this.sidebarWidth_ = getComputedStyle(splitterTarget).width;
        splitter.addEventListener('resize', (_e) => {
            window.localStorage[LOCAL_STORAGE_TREE_WIDTH_KEY] =
                splitterTarget.style.width;
            this.updateSidebarWidth_();
        });
        this.eventTracker_.add(splitter, 'dragmove', () => this.updateSidebarWidth_());
        this.eventTracker_.add(window, 'resize', () => this.updateSidebarWidth_());
    }
    updateSidebarWidth_() {
        this.sidebarWidth_ = getComputedStyle(this.$.sidebar).width;
    }
    onMousedown_() {
        this.toggleAttribute(HIDE_FOCUS_RING_ATTRIBUTE, true);
    }
    onKeydown_(e) {
        if (!['Shift', 'Alt', 'Control', 'Meta'].includes(e.key)) {
            this.toggleAttribute(HIDE_FOCUS_RING_ATTRIBUTE, false);
        }
    }
    searchTermChanged_(newValue, oldValue) {
        if (oldValue !== undefined && !newValue) {
            getInstance().announce(loadTimeData.getString('searchCleared'));
        }
        if (!this.searchTerm_) {
            return;
        }
        const searchTerm = this.searchTerm_;
        const results = searchBookmarks(this.getState().nodes, searchTerm);
        const ids = results.map(node => node.id);
        this.dispatch(setSearchResults(ids));
        getInstance().announce(ids.length > 0 ? loadTimeData.getStringF('searchResults', searchTerm) :
            loadTimeData.getString('noSearchResults'));
    }
    folderOpenStateChanged_() {
        assert(this.folderOpenState_);
        window.localStorage[LOCAL_STORAGE_FOLDER_STATE_KEY] =
            JSON.stringify(Array.from(this.folderOpenState_));
    }
    // Override FindShortcutMixinLit methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        this.shadowRoot.querySelector('bookmarks-toolbar').searchField.showAndFocus();
        return true;
    }
    // Override FindShortcutMixinLit methods.
    searchInputHasFocus() {
        return this.shadowRoot.querySelector('bookmarks-toolbar').searchField
            .isSearchFocused();
    }
    onUndoClick_() {
        this.fire('command-undo');
    }
    onListScroll_(e) {
        this.toolbarShadow_ = e.target.scrollTop !== 0;
    }
    getDndManagerForTesting() {
        return this.dndManager_;
    }
    addThemedColors_() {
        assert(document.body.querySelector(COLORS_CSS_SELECTOR) === null);
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'chrome://theme/colors.css?sets=ui,chrome';
        document.body.appendChild(link);
    }
}
customElements.define(BookmarksAppElement.is, BookmarksAppElement);

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BookmarkElement extends HTMLElement {
    itemId = '';
    getDropTarget() {
        return null;
    }
}

export { ACCOUNT_HEADING_NODE_ID, BookmarkElement, BookmarkManagerApiProxyImpl, BookmarkPromoType, BookmarksApiProxyImpl, BookmarksAppElement, BookmarksCommandManagerElement, BookmarksEditDialogElement, BookmarksFolderNodeElement, BookmarksItemElement, BookmarksListElement, BookmarksRouter, BookmarksToolbarElement, BrowserProxyImpl, Command, CrRouter, DialogFocusManager, DndManager, DragInfo, DropPosition, HIDE_FOCUS_RING_ATTRIBUTE, IncognitoAvailability, LOCAL_HEADING_NODE_ID, LOCAL_STORAGE_FOLDER_STATE_KEY, LOCAL_STORAGE_TREE_WIDTH_KEY, MAX_BOOKMARK_INPUT_LENGTH, MenuSource, PermanentFolderType, ROOT_NODE_ID, Store, StoreClientMixinLit, canEditNode, canReorderChildren, changeFolderOpen$1 as changeFolderOpen, clearSearch$1 as clearSearch, createBookmark$1 as createBookmark, createEmptyState, deselectItems$1 as deselectItems, editBookmark$1 as editBookmark, flattenNodes, getDefaultSelectedFolder, getDescendants, getDisplayedList, isRootNode, isRootOrChildOfRoot, isShowingSearch, moveBookmark$1 as moveBookmark, normalizeMojoNode, normalizeNodes, overrideFolderOpenerTimeoutDelay, reduceAction, refreshNodes, removeBookmark$1 as removeBookmark, removeIdsFromObject, removeIdsFromSet, reorderChildren$1 as reorderChildren, searchBookmarks, selectFolder, selectItem, setDebouncerForTesting, setSearchResults, setSearchTerm, toMojoNode, updateAnchor$1 as updateAnchor, updateFolderOpenState, updateNodes, updateSelection };
//# sourceMappingURL=bookmarks.rollup.js.map
