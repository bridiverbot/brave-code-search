// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getContextMenuPosition, getEventDispositionFlags, HelpBubbleAnchorMixin, playIconAnimation, PressHandler, roundedIconsEnabled } from '/shared/toolbar_button.js';
import { ContextMenuType } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import { getCss } from './back_forward_button.css.js';
import { getHtml } from './back_forward_button.html.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { OverflowableButtonMixin } from './overflowable_button.js';
const BackForwardButtonElementBase = HelpBubbleAnchorMixin(OverflowableButtonMixin(CrLitElement));
export class BackForwardButtonElement extends BackForwardButtonElementBase {
    static get is() {
        return 'back-forward-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ...super.properties,
            direction: { type: String },
            state: { type: Object },
            windowIsMaximizedOrFullscreen: { type: Boolean },
            touchUi: { type: Boolean },
            glowUpEnabled: { type: Boolean },
        };
    }
    #direction_accessor_storage = 'back';
    get direction() { return this.#direction_accessor_storage; }
    set direction(value) { this.#direction_accessor_storage = value; }
    #state_accessor_storage = {
        enabled: false,
        // These fields are from OverflowableButtonState (in addition to
        // BackForwardButtonState), and are used by OverflowableButtonMixin.
        shouldBeShown: true,
        isContextMenuVisible: false,
    };
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #windowIsMaximizedOrFullscreen_accessor_storage = false;
    get windowIsMaximizedOrFullscreen() { return this.#windowIsMaximizedOrFullscreen_accessor_storage; }
    set windowIsMaximizedOrFullscreen(value) { this.#windowIsMaximizedOrFullscreen_accessor_storage = value; }
    #touchUi_accessor_storage = false;
    get touchUi() { return this.#touchUi_accessor_storage; }
    set touchUi(value) { this.#touchUi_accessor_storage = value; }
    #glowUpEnabled_accessor_storage = loadTimeData.getBoolean('enableBackForwardGlowUp');
    get glowUpEnabled() { return this.#glowUpEnabled_accessor_storage; }
    set glowUpEnabled(value) { this.#glowUpEnabled_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('windowIsMaximizedOrFullscreen')) {
            this.toggleAttribute('window-is-maximized-or-fullscreen', this.windowIsMaximizedOrFullscreen);
        }
    }
    manualRippleTriggered_ = false;
    // True when the button is actively playing the Glow Up click animation.
    // While true, the icon is switched to the animated version. Once the
    // animation completes, this is reset to false to fall back to the static
    // icon.
    animating_ = false;
    browserProxy_ = BrowserProxyImpl.getInstance();
    pressHandler_ = new PressHandler(this.onLongPress_.bind(this), this.onShortPress_.bind(this));
    get contextMenuType_() {
        return this.direction === 'back' ? ContextMenuType.kBack :
            ContextMenuType.kForward;
    }
    onLongPress_(source) {
        if (!this.state.enabled) {
            return;
        }
        this.browserProxy_.toolbarUIHandler.showContextMenu(this.contextMenuType_, getContextMenuPosition(this), source, 
        /*showMenuToken=*/ null);
    }
    onShortPress_(e) {
        if (!this.state.enabled) {
            return;
        }
        TrackedElementManager.getInstance().notifyElementActivated(this);
        const flags = getEventDispositionFlags(e);
        if (this.direction === 'back') {
            this.browserProxy_.browserControlsHandler.back(flags);
        }
        else {
            this.browserProxy_.browserControlsHandler.forward(flags);
        }
        if (this.glowUpEnabled) {
            // The glow up animation should only trigger for physical mouse clicks.
            // - Keyboard interactions trigger a synthetic 'click' event (handled via
            // onClick_ -> onShortPress_).
            // - Touch interactions trigger 'pointerup' but with a pointerType of
            // 'touch' or 'pen'.
            // - We also exclude middle/right clicks (button !== 0) and touch UI mode.
            const isPointerUp = e.type === 'pointerup';
            const isMouse = isPointerUp && e.pointerType === 'mouse';
            const isLeftClick = e.button === 0;
            if (!this.touchUi && isMouse && isLeftClick) {
                if (this.animating_) {
                    this.updateComplete.then(() => {
                        playIconAnimation(this.$.button);
                    });
                }
                else {
                    this.animating_ = true;
                    this.requestUpdate();
                    this.playAnimation_();
                }
            }
        }
    }
    /**
     * Triggers the SMIL icon animation after the DOM has updated with the
     * animated SVG icon.
     */
    async playAnimation_() {
        await this.updateComplete;
        await this.$.button.updateComplete;
        const crIcon = this.$.button.shadowRoot?.querySelector('cr-icon');
        if (crIcon && 'updateComplete' in crIcon) {
            await crIcon.updateComplete;
        }
        playIconAnimation(this.$.button);
        this.listenToAnimationEnd_();
    }
    /**
     * Listens to the SMIL animation end event on the animate element.
     * Resets the animating state once the animation finishes to fall back to the
     * static icon.
     */
    listenToAnimationEnd_() {
        // Query for either 'animate' or 'animateTransform' elements that have
        // 'begin="indefinite"', which indicates they are triggerable animations.
        const animate = this.$.button.shadowRoot?.querySelector('cr-icon')?.shadowRoot?.querySelector('animate[begin="indefinite"], animateTransform[begin="indefinite"]');
        if (!animate) {
            this.animating_ = false;
            this.requestUpdate();
            return;
        }
        const handler = () => {
            animate.removeEventListener('endEvent', handler);
            this.animating_ = false;
            this.requestUpdate();
        };
        animate.addEventListener('endEvent', handler);
    }
    getAriaLabel_() {
        return this.direction === 'back' ?
            loadTimeData.getString('backButtonAccName') :
            loadTimeData.getString('forwardButtonAccName');
    }
    getTooltip_() {
        return this.adjustTooltipForHelpBubble(this.direction === 'back' ?
            loadTimeData.getString('backButtonTooltip') :
            loadTimeData.getString('forwardButtonTooltip'));
    }
    // Note on keyboard accessibility: Since `<cr-icon-button>` is natively
    // focusable, keyboard navigation (Space/Enter) targets the button directly
    // rather than `#buttonWrapper`. Keyboard activations bypass `onPointerdown_`
    // and manual ripple triggers entirely, naturally activating native button
    // ripples and actions without interference (Fitts' law does not apply to
    // keyboard navigation).
    onPointerdown_(e) {
        if (!this.state.enabled) {
            return;
        }
        this.pressHandler_.onPointerdown(e);
        // When clicking the expanded Fitts' law wrapper space outside the button,
        // manually start the button's ripple and set a tracking flag.
        if (!e.composedPath().includes(this.$.button)) {
            this.manualRippleTriggered_ = true;
            this.$.button.getRipple().uiDownAction(e);
        }
    }
    clearManualRipple_() {
        // Only clean up the ripple if a manual down action was initiated earlier
        // (`manualRippleTriggered_`) by pressing the outer wrapper space.
        // By strictly checking this flag, we reliably clear the ripple even if
        // the pointer was subsequently dragged over onto `#button` before release,
        // while completely avoiding redundant double `uiUpAction()` executions if
        // both pointerleave and pointerup fire sequentially during drag-outs.
        if (this.manualRippleTriggered_) {
            this.manualRippleTriggered_ = false;
            this.$.button.getRipple().uiUpAction();
        }
    }
    onPointerup_(e) {
        this.pressHandler_.onPointerup(e);
        this.clearManualRipple_();
    }
    onPointercancel_(e) {
        this.pressHandler_.onPointercancel(e);
        this.clearManualRipple_();
    }
    onPointerleave_() {
        this.clearManualRipple_();
    }
    onPointerenter_() {
        if (!this.state.enabled) {
            return;
        }
        if (this.direction === 'back') {
            this.browserProxy_.browserControlsHandler.backButtonHovered();
        }
    }
    onClick_(e) {
        // Only handle keyboard 'click', which triggers a left-click equivalent.
        // Other events like mouse 'click' are handled in onShortPress_.
        if (e.detail === 0) {
            this.onShortPress_(e);
        }
    }
    getIronIcon_() {
        if (this.glowUpEnabled && this.animating_) {
            return this.direction === 'back' ? 'webui-toolbar:back_arrow_glow_up' :
                'webui-toolbar:forward_arrow_glow_up';
        }
        if (this.direction === 'back') {
            if (roundedIconsEnabled()) {
                return 'webui-toolbar:arrow_back';
            }
            else {
                return this.touchUi ? 'webui-toolbar:back_arrow_touch_old' :
                    'webui-toolbar:back_arrow_chrome_refresh_old';
            }
        }
        else {
            if (roundedIconsEnabled()) {
                return 'webui-toolbar:arrow_forward';
            }
            else {
                return this.touchUi ? 'webui-toolbar:forward_arrow_touch_old' :
                    'webui-toolbar:forward_arrow_chrome_refresh_old';
            }
        }
    }
}
customElements.define(BackForwardButtonElement.is, BackForwardButtonElement);
