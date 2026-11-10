// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/composebox/contextual_entrypoint_button.js';
import { getInstance as getA11yAnnouncer } from '//resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from './omnibox_popup.mojom-webui.js';
import { getHtml } from './omnibox_popup_contextual_entrypoint_button.html.js';
export class OmniboxPopupContextualEntrypointButtonElement extends CrLitElement {
    static get is() {
        return 'omnibox-popup-contextual-entrypoint-button';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            inputState: { type: Object },
            applyContextButtonBackground: {
                type: Boolean,
                reflect: true,
            },
            isOblongShape: {
                type: Boolean,
                reflect: true,
            },
            hasVirtualFocus: {
                type: Boolean,
                reflect: true,
            },
            isMenuOpen_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #inputState_accessor_storage = null;
    get inputState() { return this.#inputState_accessor_storage; }
    set inputState(value) { this.#inputState_accessor_storage = value; }
    #applyContextButtonBackground_accessor_storage = false;
    get applyContextButtonBackground() { return this.#applyContextButtonBackground_accessor_storage; }
    set applyContextButtonBackground(value) { this.#applyContextButtonBackground_accessor_storage = value; }
    #isOblongShape_accessor_storage = false;
    get isOblongShape() { return this.#isOblongShape_accessor_storage; }
    set isOblongShape(value) { this.#isOblongShape_accessor_storage = value; }
    #hasVirtualFocus_accessor_storage = false;
    get hasVirtualFocus() { return this.#hasVirtualFocus_accessor_storage; }
    set hasVirtualFocus(value) { this.#hasVirtualFocus_accessor_storage = value; }
    #isMenuOpen__accessor_storage = false;
    get isMenuOpen_() { return this.#isMenuOpen__accessor_storage; }
    set isMenuOpen_(value) { this.#isMenuOpen__accessor_storage = value; }
    // Whether gaining virtual focus announces `getA11yLabel()`. Hosts that
    // narrate virtual focus themselves set this to false, so the two don't
    // compete.
    announcesVirtualFocus = true;
    browserProxy_;
    eventTracker_ = new EventTracker();
    popupListenerIds_ = [];
    constructor() {
        super();
        this.browserProxy_ = browserProxyFactory.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.popupListenerIds_ = [
            this.browserProxy_.callbackRouter.onShow.addListener(this.onShow_.bind(this)),
            this.browserProxy_.callbackRouter.onContextMenuClosed.addListener(this.onContextMenuClosed_.bind(this)),
        ];
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.isMenuOpen_ = false;
        this.classList.remove('menu-open');
        this.eventTracker_.removeAll();
        for (const listenerId of this.popupListenerIds_) {
            this.browserProxy_.callbackRouter.removeListener(listenerId);
        }
        this.popupListenerIds_ = [];
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('hasVirtualFocus') && this.hasVirtualFocus &&
            this.announcesVirtualFocus) {
            this.announce_();
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('isMenuOpen_')) {
            this.classList.toggle('menu-open', this.isMenuOpen_);
        }
    }
    showContextMenu(point = { x: 0, y: 0 }) {
        this.isMenuOpen_ = true;
        this.classList.add('menu-open');
        this.browserProxy_.handler.showContextMenu(point);
    }
    onContextMenuEntrypointClick_(e) {
        e.preventDefault();
        this.showContextMenu({ x: e.detail?.x ?? 0, y: e.detail?.y ?? 0 });
    }
    onShow_() {
        // When the popup is shown, blur the contextual entrypoint button and reset
        // menu state.
        this.isMenuOpen_ = false;
        this.classList.remove('menu-open');
        this.blur();
        this.shadowRoot
            ?.querySelector('cr-composebox-contextual-entrypoint-button')
            ?.blur();
    }
    onContextMenuClosed_() {
        this.isMenuOpen_ = false;
        this.classList.remove('menu-open');
    }
    /** Returns the label screen readers narrate for this button. */
    getA11yLabel() {
        const entrypoint = this.shadowRoot?.querySelector('cr-composebox-contextual-entrypoint-button');
        return entrypoint?.shadowRoot?.querySelector('#entrypoint')
            ?.getAttribute('aria-label') ||
            '';
    }
    announce_() {
        const message = this.getA11yLabel();
        if (message) {
            if (this.ariaNotify) {
                this.ariaNotify(message);
            }
            else {
                getA11yAnnouncer(this).announce(message);
            }
        }
    }
}
customElements.define(OmniboxPopupContextualEntrypointButtonElement.is, OmniboxPopupContextualEntrypointButtonElement);
