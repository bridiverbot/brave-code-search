// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './info_tooltip.css.js';
import { getHtml } from './info_tooltip.html.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { BrowserProxyImpl } from './contextual_tasks_browser_proxy.js';
/**
 * Caret border width is 8px, producing a 16px wide triangle.
 * Subtracting half the caret width (8px) aligns its apex to the target center.
 */
const CARET_HALF_WIDTH_PX = 8;
export class ContextualTasksInfoTooltipElement extends CrLitElement {
    static get is() {
        return 'contextual-tasks-info-tooltip';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            target: { type: Object },
            container: { type: Object },
            titleText: { type: String },
            bodyText: { type: String },
            closeButtonType: {
                type: String,
                reflect: true,
            },
            buttonText: { type: String },
            horizontalAlign: {
                type: String,
                reflect: true,
            },
            sideMargin: { type: Number },
            isCoinsEnabled: {
                type: Boolean,
                reflect: true,
            },
            linkUrl: { type: String },
            linkText: { type: String },
        };
    }
    #target_accessor_storage = null;
    get target() { return this.#target_accessor_storage; }
    set target(value) { this.#target_accessor_storage = value; }
    #container_accessor_storage = null;
    get container() { return this.#container_accessor_storage; }
    set container(value) { this.#container_accessor_storage = value; }
    #titleText_accessor_storage = '';
    get titleText() { return this.#titleText_accessor_storage; }
    set titleText(value) { this.#titleText_accessor_storage = value; }
    #bodyText_accessor_storage = '';
    get bodyText() { return this.#bodyText_accessor_storage; }
    set bodyText(value) { this.#bodyText_accessor_storage = value; }
    #closeButtonType_accessor_storage = 'text';
    get closeButtonType() { return this.#closeButtonType_accessor_storage; }
    set closeButtonType(value) { this.#closeButtonType_accessor_storage = value; }
    #buttonText_accessor_storage = '';
    get buttonText() { return this.#buttonText_accessor_storage; }
    set buttonText(value) { this.#buttonText_accessor_storage = value; }
    #horizontalAlign_accessor_storage = 'left';
    get horizontalAlign() { return this.#horizontalAlign_accessor_storage; }
    set horizontalAlign(value) { this.#horizontalAlign_accessor_storage = value; }
    #sideMargin_accessor_storage = 24;
    get sideMargin() { return this.#sideMargin_accessor_storage; }
    set sideMargin(value) { this.#sideMargin_accessor_storage = value; }
    #isCoinsEnabled_accessor_storage = loadTimeData.getBoolean('tabFaviconChipsToCoinsEnabled');
    get isCoinsEnabled() { return this.#isCoinsEnabled_accessor_storage; }
    set isCoinsEnabled(value) { this.#isCoinsEnabled_accessor_storage = value; }
    #linkUrl_accessor_storage = '';
    get linkUrl() { return this.#linkUrl_accessor_storage; }
    set linkUrl(value) { this.#linkUrl_accessor_storage = value; }
    #linkText_accessor_storage = '';
    get linkText() { return this.#linkText_accessor_storage; }
    set linkText(value) { this.#linkText_accessor_storage = value; }
    tooltipResizeObserver_ = null;
    tooltipMutationObserver_ = null;
    eventTracker_ = new EventTracker();
    updateScheduled_ = false;
    get tooltip_() {
        return this.shadowRoot.querySelector('cr-tooltip');
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.stopObserving_();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('target') || changedProperties.has('container')) {
            if (this.target) {
                this.tooltip_.target = this.target;
                this.show();
                this.startObserving_();
            }
            else {
                this.hide();
                this.stopObserving_();
            }
        }
    }
    show() {
        if (this.tooltip_) {
            this.tooltip_.show();
            this.updatePosition();
        }
    }
    hide() {
        if (this.tooltip_) {
            this.tooltip_.hide();
        }
    }
    /**
     * Batches position updates into a single animation frame to avoid
     * layout thrashing during typing or fast animations.
     */
    scheduleUpdatePosition() {
        if (this.updateScheduled_) {
            return;
        }
        this.updateScheduled_ = true;
        requestAnimationFrame(() => {
            this.updateScheduled_ = false;
            this.updatePosition();
        });
    }
    async updatePosition() {
        if (!this.tooltip_ || !this.target) {
            return;
        }
        await this.updateComplete;
        const targetRect = this.target.getBoundingClientRect();
        const parentRect = this.tooltip_.offsetParent?.getBoundingClientRect();
        const tooltipRect = this.tooltip_.getBoundingClientRect();
        if (!parentRect) {
            return;
        }
        this.updateVerticalPosition_(targetRect, parentRect, tooltipRect);
        if (this.horizontalAlign === 'left') {
            this.updateLeftAlignedPosition_(targetRect, parentRect);
        }
        else {
            this.updateRightAlignedPosition_(targetRect, parentRect);
        }
    }
    updateVerticalPosition_(targetRect, parentRect, tooltipRect) {
        const top = (targetRect.top - parentRect.top) - tooltipRect.height;
        this.tooltip_.style.top = `${top}px`;
        this.tooltip_.style.bottom = 'auto';
    }
    updateLeftAlignedPosition_(targetRect, parentRect) {
        const availableWidth = window.innerWidth - targetRect.left - this.sideMargin;
        this.tooltip_.style.setProperty('--info-tooltip-width', `${availableWidth}px`);
        this.tooltip_.style.left = `${targetRect.left - parentRect.left}px`;
        this.tooltip_.style.right = 'auto';
    }
    updateRightAlignedPosition_(targetRect, parentRect) {
        const availableWidth = targetRect.right - this.sideMargin;
        this.tooltip_.style.setProperty('--info-tooltip-width', `${availableWidth}px`);
        this.tooltip_.style.right = `${parentRect.right - targetRect.right}px`;
        this.tooltip_.style.left = 'auto';
        this.updateCaretCenterOffset_(targetRect.width);
    }
    updateCaretCenterOffset_(targetWidth) {
        const caretInlineEnd = Math.max(0, (targetWidth / 2) - CARET_HALF_WIDTH_PX);
        this.tooltip_.style.setProperty('--info-tooltip-caret-inline-end', `${caretInlineEnd}px`);
    }
    getTargetShadowHost_() {
        const root = this.target?.getRootNode();
        return (root instanceof ShadowRoot) ? root.host : null;
    }
    startObserving_() {
        this.stopObserving_();
        // 1. Observe size/viewport changes.
        this.tooltipResizeObserver_ = new ResizeObserver(() => {
            this.scheduleUpdatePosition();
        });
        if (this.target) {
            this.tooltipResizeObserver_.observe(this.target);
        }
        if (this.container) {
            this.tooltipResizeObserver_.observe(this.container);
        }
        // 2. Observe layout/state attribute changes on the host elements.
        this.tooltipMutationObserver_ = new MutationObserver(() => {
            this.scheduleUpdatePosition();
        });
        const mutationOptions = {
            attributes: true,
            attributeFilter: ['style', 'class', 'submit-enabled', 'is-side-panel'],
        };
        const targetHost = this.getTargetShadowHost_();
        if (targetHost) {
            this.tooltipMutationObserver_.observe(targetHost, mutationOptions);
        }
        if (this.container) {
            this.tooltipMutationObserver_.observe(this.container, mutationOptions);
        }
        if (this.target) {
            this.tooltipMutationObserver_.observe(this.target, mutationOptions);
        }
        // 3. Lock in exact resting coordinates once the target button's CSS motion finishes.
        if (this.target) {
            this.eventTracker_.add(this.target, 'transitionend', () => {
                this.scheduleUpdatePosition();
            });
        }
    }
    stopObserving_() {
        if (this.tooltipResizeObserver_) {
            this.tooltipResizeObserver_.disconnect();
            this.tooltipResizeObserver_ = null;
        }
        if (this.tooltipMutationObserver_) {
            this.tooltipMutationObserver_.disconnect();
            this.tooltipMutationObserver_ = null;
        }
        this.eventTracker_.removeAll();
        this.updateScheduled_ = false;
    }
    onLinkClick_(e) {
        e.preventDefault();
        BrowserProxyImpl.getInstance().handler.openAskGHelpUi();
    }
    onTooltipCloseClick_(e) {
        e.stopPropagation();
        this.hide();
        this.fire('tooltip-dismissed');
    }
}
customElements.define(ContextualTasksInfoTooltipElement.is, ContextualTasksInfoTooltipElement);
export class TooltipState {
    isDismissCountBelowCap;
    sessionImpressionCap;
    dismissCallback;
    showCount_ = 0;
    userDismissed_ = false;
    isActive_ = false;
    get showCount() {
        return this.showCount_;
    }
    get userDismissed() {
        return this.userDismissed_;
    }
    get isActive() {
        return this.isActive_;
    }
    constructor(isDismissCountBelowCap, sessionImpressionCap, dismissCallback) {
        this.isDismissCountBelowCap = isDismissCountBelowCap;
        this.sessionImpressionCap = sessionImpressionCap;
        this.dismissCallback = dismissCallback;
    }
    shouldShow(dependencyMet = true) {
        if (this.userDismissed_) {
            return false;
        }
        if (!this.isDismissCountBelowCap) {
            return false;
        }
        if (this.isActive_) {
            return dependencyMet;
        }
        if (this.showCount_ >= this.sessionImpressionCap) {
            return false;
        }
        if (dependencyMet) {
            this.isActive_ = true;
            this.showCount_++;
        }
        return dependencyMet;
    }
    dismiss() {
        this.userDismissed_ = true;
        this.isActive_ = false;
        this.dismissCallback();
    }
}
