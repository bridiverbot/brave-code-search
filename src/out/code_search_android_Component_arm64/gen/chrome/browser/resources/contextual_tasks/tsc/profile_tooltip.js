// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './profile_tooltip.css.js';
import { getHtml } from './profile_tooltip.html.js';
// Hover delays matching the OneGoogle Bar account tooltip (`ogb.ui.Tooltip`,
// which keeps the `goog.ui.Tooltip` 500ms show delay and sets a 100ms hide
// delay).
const SHOW_DELAY_MS = 500;
const HIDE_DELAY_MS = 100;
// Space between the tooltip and the anchor or the viewport edges.
const TOOLTIP_ANCHOR_GAP_PX = 4;
const TOOLTIP_VIEWPORT_MARGIN_PX = 8;
/** Returns the "Google Account" header shown at the top of the tooltip. */
function getGoogleAccountHeader() {
    // TODO(crbug.com/578985445): `googleAccount` temporarily reuses an existing
    // string; switch to a dedicated string.
    return loadTimeData.valueExists('googleAccount') ?
        loadTimeData.getString('googleAccount') :
        '';
}
/**
 * Hover tooltip for the toolbar profile avatar showing the Google Account
 * header, full name, and email. Uses the Unbounded Element API when available
 * so the tooltip can overflow the short toolbar WebView.
 */
export class ProfileTooltipElement extends CrLitElement {
    static get is() {
        return 'contextual-tasks-profile-tooltip';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            fullName: { type: String },
            email: { type: String },
            open_: { type: Boolean },
            useUnbounded_: { type: Boolean },
        };
    }
    #fullName_accessor_storage = '';
    get fullName() { return this.#fullName_accessor_storage; }
    set fullName(value) { this.#fullName_accessor_storage = value; }
    #email_accessor_storage = '';
    get email() { return this.#email_accessor_storage; }
    set email(value) { this.#email_accessor_storage = value; }
    #open__accessor_storage = false;
    get open_() { return this.#open__accessor_storage; }
    set open_(value) { this.#open__accessor_storage = value; }
    #useUnbounded__accessor_storage = false;
    get useUnbounded_() { return this.#useUnbounded__accessor_storage; }
    set useUnbounded_(value) { this.#useUnbounded__accessor_storage = value; }
    anchor_ = null;
    showTimer_ = null;
    hideTimer_ = null;
    get isOpen() {
        return this.open_;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.hide();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // Recenter under the anchor when the content width changes while open.
        if (this.open_ && this.anchor_ &&
            (changedProperties.has('fullName') || changedProperties.has('email'))) {
            this.position_(this.anchor_);
        }
    }
    /**
     * Shows the tooltip below `anchor` after the hover delay. Cancels a pending
     * hide, so moving back onto the anchor keeps an open tooltip visible.
     */
    scheduleShow(anchor) {
        this.clearHideTimer_();
        if (this.open_ || this.showTimer_ !== null) {
            return;
        }
        this.showTimer_ = setTimeout(() => {
            this.showTimer_ = null;
            this.show(anchor);
        }, SHOW_DELAY_MS);
    }
    /** Hides the tooltip after the hide delay and cancels a pending show. */
    scheduleHide() {
        this.clearShowTimer_();
        if (!this.open_ || this.hideTimer_ !== null) {
            return;
        }
        this.hideTimer_ = setTimeout(() => {
            this.hideTimer_ = null;
            this.hide();
        }, HIDE_DELAY_MS);
    }
    /** Shows the tooltip centered below `anchor` immediately. */
    async show(anchor) {
        this.anchor_ = anchor;
        const useUnbounded = this.isUnboundedSupported_();
        this.useUnbounded_ = useUnbounded;
        this.open_ = true;
        await this.updateComplete;
        if (!this.open_ || !this.isConnected) {
            return;
        }
        this.position_(anchor);
        if (useUnbounded) {
            this.$.tooltip.showUnboundedElement?.().catch(err => {
                if (err instanceof DOMException && err.name === 'AbortError') {
                    return;
                }
                this.useUnbounded_ = false;
            });
        }
    }
    /** Hides the tooltip immediately and cancels any pending show or hide. */
    hide(unboundedAlreadyDismissed = false) {
        this.clearShowTimer_();
        this.clearHideTimer_();
        if (!this.open_) {
            return;
        }
        this.open_ = false;
        this.anchor_ = null;
        if (this.useUnbounded_ && !unboundedAlreadyDismissed) {
            this.$.tooltip.hideUnboundedElement?.().catch(() => { });
        }
    }
    getHeader_() {
        return getGoogleAccountHeader();
    }
    onBeforetoggle_(e) {
        if (!this.useUnbounded_) {
            return;
        }
        const toggleEvent = e;
        if (toggleEvent.newState === 'closed' && this.open_) {
            this.hide(/*unboundedAlreadyDismissed=*/ true);
        }
    }
    clearShowTimer_() {
        if (this.showTimer_ !== null) {
            clearTimeout(this.showTimer_);
            this.showTimer_ = null;
        }
    }
    clearHideTimer_() {
        if (this.hideTimer_ !== null) {
            clearTimeout(this.hideTimer_);
            this.hideTimer_ = null;
        }
    }
    isUnboundedSupported_() {
        const flagEnabled = loadTimeData.valueExists('contextualTasksUnboundedMenuEnabled') &&
            loadTimeData.getBoolean('contextualTasksUnboundedMenuEnabled');
        if (!flagEnabled) {
            return false;
        }
        return typeof this.$.tooltip.showUnboundedElement === 'function';
    }
    position_(anchor) {
        const tooltip = this.$.tooltip;
        const rect = anchor.getBoundingClientRect();
        const tooltipWidth = tooltip.offsetWidth;
        const viewportWidth = document.documentElement.clientWidth;
        const desiredLeft = rect.left + (rect.width - tooltipWidth) / 2;
        const left = viewportWidth > 0 ?
            Math.max(TOOLTIP_VIEWPORT_MARGIN_PX, Math.min(desiredLeft, Math.max(TOOLTIP_VIEWPORT_MARGIN_PX, viewportWidth - tooltipWidth -
                TOOLTIP_VIEWPORT_MARGIN_PX))) :
            Math.max(0, desiredLeft);
        const top = rect.bottom + TOOLTIP_ANCHOR_GAP_PX;
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    }
}
customElements.define(ProfileTooltipElement.is, ProfileTooltipElement);
