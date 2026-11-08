// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/shared/icon_from_table.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import './toolbar_chip_button.js';
import { skColorToRgba } from '//resources/js/color_utils.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { ensureTransitionEndEvent } from '//resources/js/util.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { MenuSourceType } from '//resources/mojo/ui/base/mojom/menu_source_type.mojom-webui.js';
import { AnimationTracker } from '/shared/animation_tracker.js';
import { IconTable } from '/shared/icon_table.js';
import { getClickSourceType, playIconAnimation } from '/shared/toolbar_button.js';
import { PageActionAnimationStyle, PageActionId, PageActionTrigger } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getCss } from './page_action_icon.css.js';
import { getHtml } from './page_action_icon.html.js';
import { ToolbarActionMixin } from './toolbar_action_mixin.js';
const initialState = {
    pageActionId: PageActionId.kActionAiMode,
    accessibleName: '',
    tooltipText: '',
    icon: { handleId: 0n },
    text: '',
    shouldShowChip: false,
    shouldAnimateChipIn: false,
    shouldAnimateChipOut: false,
    backgroundColorOverride: null,
    foregroundColorOverride: null,
    identifier: {
        nativeIdentifier: '',
        secondaryIdentifier: '',
    },
    isActive: false,
    tabSwitchToken: 0,
    animationStyle: PageActionAnimationStyle.kStandard,
    trailingIcon: null,
    showTrailingIcon: false,
};
const PageActionIconElementBase = ToolbarActionMixin(CrLitElement, initialState);
export class PageActionIconElement extends PageActionIconElementBase {
    static get is() {
        return 'page-action-icon';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // Draw a focus ring as if focused (e.g., the AI mode chip when the user
            // tabs through the Omnibox suggestions, keeping real focus in the text
            // field).
            forceFocusRing: { type: Boolean },
            // Some additional style attributes for the chip element.
            chipStyleOverride_: { type: String, state: true },
            glowUpEnabled: { type: Boolean },
            activeIconAnimation_: { type: String, state: true },
        };
    }
    getElementId(state) {
        return state.identifier?.nativeIdentifier || undefined;
    }
    #forceFocusRing_accessor_storage = false;
    get forceFocusRing() { return this.#forceFocusRing_accessor_storage; }
    set forceFocusRing(value) { this.#forceFocusRing_accessor_storage = value; }
    #chipStyleOverride__accessor_storage = null;
    get chipStyleOverride_() { return this.#chipStyleOverride__accessor_storage; }
    set chipStyleOverride_(value) { this.#chipStyleOverride__accessor_storage = value; }
    #glowUpEnabled_accessor_storage = loadTimeData.getBoolean('enableBookmarkGlowUp');
    get glowUpEnabled() { return this.#glowUpEnabled_accessor_storage; }
    set glowUpEnabled(value) { this.#glowUpEnabled_accessor_storage = value; }
    #activeIconAnimation__accessor_storage = 'none';
    get activeIconAnimation_() { return this.#activeIconAnimation__accessor_storage; }
    set activeIconAnimation_(value) { this.#activeIconAnimation__accessor_storage = value; }
    currentIconName_ = '';
    animatedIconColor_ = '';
    browserProxy_ = BrowserProxyImpl.getInstance();
    wasShowingChip_ = false;
    // Tracks the active 'endEvent' handler for the SVG animation to allow
    // cleanup.
    animationEndHandler_ = null;
    // Reference to the SVG animation element that currently has a listener
    // attached.
    animationElement_ = null;
    focus() {
        this.$.button.focus();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        // Clean up animation event listeners on disconnect to prevent memory leaks
        // when dynamic page action icons are detached from the DOM.
        this.cleanupAnimationListener_();
        this.activeIconAnimation_ = 'none';
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('state')) {
            const oldState = changedProperties.get('state');
            this.wasShowingChip_ =
                oldState?.pageActionId === this.state.pageActionId &&
                    (oldState?.shouldShowChip ?? false);
            // If the tab switch token changed, it indicates a tab switch or
            // navigation. In this case, we suppress any transition icon animations
            // and reset the animation state to avoid carrying over animations.
            const isTabSwitch = !oldState || this.state.tabSwitchToken !== oldState.tabSwitchToken;
            if (isTabSwitch) {
                this.cleanupAnimationListener_();
                this.activeIconAnimation_ = 'none';
            }
            const styleOverrides = [];
            if (this.state.backgroundColorOverride) {
                styleOverrides.push(`--toolbar-chip-bg-color: ${skColorToRgba(this.state.backgroundColorOverride)};`);
            }
            if (this.state.foregroundColorOverride) {
                styleOverrides.push(`--toolbar-chip-fg-color: ${skColorToRgba(this.state.foregroundColorOverride)};`);
            }
            this.chipStyleOverride_ =
                styleOverrides.length > 0 ? styleOverrides.join(' ') : null;
            this.updateIconAnimationState_(isTabSwitch);
        }
    }
    updateIconAnimationState_(isTabSwitch) {
        const newIconName = IconTable.getInstance().getIconName(this.state.icon) || '';
        const newIconColor = IconTable.getInstance().getIconColor(this.state.icon) || '';
        const oldIconName = this.currentIconName_;
        let playAnimation = false;
        // Only play the bookmark transition icon animation if the feature is
        // enabled, we have a previous icon state to compare against, and this
        // update is not due to a tab switch.
        if (this.state.pageActionId === PageActionId.kActionBookmarkThisTab &&
            this.glowUpEnabled && oldIconName && !isTabSwitch) {
            if (oldIconName !== newIconName) {
                if (oldIconName === 'webui-toolbar:star' &&
                    newIconName === 'webui-toolbar:star_filled') {
                    this.activeIconAnimation_ = 'start';
                    playAnimation = true;
                }
                else if (oldIconName === 'webui-toolbar:star_filled' &&
                    newIconName === 'webui-toolbar:star') {
                    this.activeIconAnimation_ = 'end';
                    playAnimation = true;
                }
            }
        }
        this.animatedIconColor_ = newIconColor;
        if (newIconName) {
            this.currentIconName_ = newIconName;
        }
        if (playAnimation) {
            this.playIconAnimation_();
        }
    }
    shouldShowLabel_() {
        return this.state.shouldShowChip && !!this.state.text;
    }
    shouldAnimate_() {
        if (!this.state.text) {
            return false;
        }
        return this.state.shouldShowChip ?
            this.state.shouldAnimateChipIn :
            (this.wasShowingChip_ && this.state.shouldAnimateChipOut);
    }
    // Returns whether a trailing icon should be rendered in the DOM. For chips
    // using kSlideAndCrossfade (such as AIM), the controller sets a persistent
    // trailing icon handle up front, keeping the element mounted in the DOM so
    // CSS transitions (opacity and transform) play smoothly as `showTrailingIcon`
    // toggles during user typing.
    hasTrailingIcon_() {
        const { animationStyle, trailingIcon } = this.state;
        return animationStyle === PageActionAnimationStyle.kSlideAndCrossfade &&
            Boolean(trailingIcon?.handleId);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('forceFocusRing')) {
            this.$.button.toggleAttribute('force-focus-ring', this.forceFocusRing);
        }
        if (changedProperties.has('state')) {
            const isSlideAndCrossfade = this.state.animationStyle ===
                PageActionAnimationStyle.kSlideAndCrossfade;
            this.toggleAttribute('is-aim', this.state.pageActionId === PageActionId.kActionAiMode);
            this.toggleAttribute('slide-and-crossfade', isSlideAndCrossfade);
            this.toggleAttribute('show-trailing-icon', this.hasTrailingIcon_() && this.state.showTrailingIcon);
            const oldState = changedProperties.get('state');
            const isTabSwitch = !oldState || this.state.tabSwitchToken !== oldState.tabSwitchToken;
            if (isTabSwitch ||
                oldState?.shouldShowChip !== this.state.shouldShowChip) {
                const fireIpc = () => {
                    this.browserProxy_.toolbarUIHandler.onPageActionChipShowingChanged(this.state.pageActionId, this.shouldShowLabel_());
                };
                if (isTabSwitch || !this.shouldAnimate_() ||
                    !AnimationTracker.showAnimations) {
                    fireIpc();
                }
                else {
                    const button = this.$.button;
                    button.addEventListener('transitionend', fireIpc, { once: true });
                    ensureTransitionEndEvent(button);
                }
            }
        }
    }
    isIconAnimating_() {
        return this.activeIconAnimation_ !== 'none';
    }
    getAnimatedIcon_() {
        return this.activeIconAnimation_ === 'start' ?
            'webui-toolbar:star_glow_up' :
            'webui-toolbar:star_filled_glow_up';
    }
    getAnimatedIconStyle_() {
        const color = this.animatedIconColor_;
        return color ? `color: ${color};` : undefined;
    }
    async playIconAnimation_() {
        // Wait for Lit update to complete so the DOM has rendered the new
        // <cr-icon> containing the animated SVG, then wait for the cr-icon's
        // own update if necessary, and finally trigger the SVG animation.
        await this.updateComplete;
        const crIcon = this.shadowRoot.querySelector('#animatedIcon');
        if (crIcon) {
            await crIcon.updateComplete;
        }
        requestAnimationFrame(() => {
            playIconAnimation(this);
            this.listenToAnimationEnd_();
        });
    }
    /**
     * Listens to the SMIL animation end event on the SVG element and resets
     * the animation state to 'none' once finished, switching back to the static
     * icon.
     */
    listenToAnimationEnd_() {
        this.cleanupAnimationListener_();
        const animationElement = this.shadowRoot.querySelector('#animatedIcon')
            ?.shadowRoot?.querySelector('animate, animateTransform');
        if (!animationElement) {
            this.activeIconAnimation_ = 'none';
            return;
        }
        this.animationElement_ = animationElement;
        this.animationEndHandler_ = () => {
            this.cleanupAnimationListener_();
            this.activeIconAnimation_ = 'none';
        };
        animationElement.addEventListener('endEvent', this.animationEndHandler_);
    }
    /**
     * Safely removes the animation 'endEvent' listener and clears references.
     */
    cleanupAnimationListener_() {
        if (this.animationElement_ && this.animationEndHandler_) {
            this.animationElement_.removeEventListener('endEvent', this.animationEndHandler_);
        }
        this.animationElement_ = null;
        this.animationEndHandler_ = null;
    }
    getAriaLabel_() {
        return this.state.accessibleName;
    }
    onClick_(e) {
        if (this.highlightTracker.shouldSkipClick(e)) {
            return;
        }
        TrackedElementManager.getInstance().notifyElementActivated(this);
        this.browserProxy_.toolbarUIHandler.onPageActionClick(this.state.pageActionId, this.getPageActionTrigger_(e));
    }
    getPageActionTrigger_(e) {
        const sourceType = getClickSourceType(e);
        switch (sourceType) {
            case MenuSourceType.kTouch:
                return PageActionTrigger.kGesture;
            case MenuSourceType.kKeyboard:
                return PageActionTrigger.kKeyboard;
            case MenuSourceType.kMouse:
                return PageActionTrigger.kMouse;
            default:
                throw new Error('Unknown sourceType ' + sourceType);
        }
    }
    onPointerdown_(e) {
        this.highlightTracker.onPointerdown(e);
        // Prevent us from taking focus, since that may cause the omnibox popup
        // to close, and disable the AIM button in turn.
        e.preventDefault();
    }
    getTooltip_() {
        return this.adjustTooltipForHelpBubble(this.state.tooltipText);
    }
    onPointerenter_() {
        this.fire('chip-pointerenter');
    }
    onPointerleave_() {
        this.fire('chip-pointerleave');
    }
    onPointercancel_() {
        this.fire('chip-pointercancel');
    }
}
customElements.define(PageActionIconElement.is, PageActionIconElement);
