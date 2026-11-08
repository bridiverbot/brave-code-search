// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Tooltip with simple fade-in/out animations. Forked/migrated
 * from Polymer's paper-tooltip.
 */
import { assertNotReachedCase } from '//resources/js/assert.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_tooltip.css.js';
import { getHtml } from './cr_tooltip.html.js';
export var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition["TOP"] = "top";
    TooltipPosition["BOTTOM"] = "bottom";
    TooltipPosition["LEFT"] = "left";
    TooltipPosition["RIGHT"] = "right";
})(TooltipPosition || (TooltipPosition = {}));
export class CrTooltipElement extends CrLitElement {
    static get is() {
        return 'cr-tooltip';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
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
