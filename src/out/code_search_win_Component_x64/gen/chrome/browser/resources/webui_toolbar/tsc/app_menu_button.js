// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './toolbar_chip_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import './icons.js';
import '//resources/cr_elements/icons.html.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { TimerHelper } from '/shared/timer_helper.js';
import { BUTTON_LEFT, getClickSourceType, getContextMenuPosition, HelpBubbleAnchorMixin } from '/shared/toolbar_button.js';
import { AppMenuIconType, AppMenuSeverity, ContextMenuType, FocusRequestTarget } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import { getCss } from './app_menu_button.css.js';
import { getHtml } from './app_menu_button.html.js';
import { BrowserProxyImpl, INVALID_FOCUS_REQUEST_HANDLE } from './browser_proxy.js';
import { CollapsibleLabelButtonMixin } from './collapsible_label_button.js';
// Matches the 250ms animation in icons.ts and Views BrowserAppMenuButton.
const APP_MENU_GLOW_UP_DURATION_MS = 250;
const AppMenuButtonElementBase = HelpBubbleAnchorMixin(CollapsibleLabelButtonMixin(CrLitElement));
export class AppMenuButtonElement extends AppMenuButtonElementBase {
    static get is() {
        return 'app-menu-button';
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
            state: { type: Object },
            glowUpEnabled: { type: Boolean },
            glowUpActive: {
                type: Boolean,
                reflect: true,
                attribute: 'glow-up-active',
            },
            isAnimating_: { type: Boolean, state: true },
        };
    }
    #state_accessor_storage = {
        // Note: iconType is used by the backend to determine strings/labels
        // The frontend icon glyph remains a constant three-dot menu.
        iconType: AppMenuIconType.kNone,
        severity: AppMenuSeverity.kNone,
        labelText: null,
        accessibilityText: '',
        tooltip: '',
        isContextMenuVisible: false,
        windowIsMaximizedOrFullscreen: false,
    };
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #glowUpEnabled_accessor_storage = loadTimeData.getBoolean('enableGlowUp');
    get glowUpEnabled() { return this.#glowUpEnabled_accessor_storage; }
    set glowUpEnabled(value) { this.#glowUpEnabled_accessor_storage = value; }
    #glowUpActive_accessor_storage = false;
    get glowUpActive() { return this.#glowUpActive_accessor_storage; }
    set glowUpActive(value) { this.#glowUpActive_accessor_storage = value; }
    get isAnimating() {
        return this.isAnimating_;
    }
    browserProxy_ = BrowserProxyImpl.getInstance();
    focusRequestHandle_ = INVALID_FOCUS_REQUEST_HANDLE;
    #isAnimating__accessor_storage = false;
    get isAnimating_() { return this.#isAnimating__accessor_storage; }
    set isAnimating_(value) { this.#isAnimating__accessor_storage = value; }
    animationTimer_ = new TimerHelper();
    // Manage the lifecycle of the focus listener.
    connectedCallback() {
        super.connectedCallback();
        this.focusRequestHandle_ = this.browserProxy_.addFocusRequestListener(this.onFocusRequest_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.browserProxy_.removeFocusRequestListener(this.focusRequestHandle_);
        this.finishAnimation_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('glowUpEnabled') && !this.glowUpEnabled) {
            this.finishAnimation_();
        }
        this.glowUpActive = this.computeGlowUpActive_(changedProperties);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('state')) {
            this.toggleAttribute('window-is-maximized-or-fullscreen', this.state.windowIsMaximizedOrFullscreen);
            const oldState = changedProperties.get('state');
            if (!oldState || oldState.labelText !== this.state.labelText) {
                this.fire('request-layout');
            }
            const oldShowing = oldState ? oldState.isContextMenuVisible : false;
            const newShowing = this.state.isContextMenuVisible;
            if (oldShowing !== newShowing) {
                this.onContextMenuVisibleChanged_();
            }
        }
    }
    hasLabel_() {
        return !!this.state.labelText;
    }
    computeGlowUpActive_(changedProperties) {
        if (!this.glowUpEnabled) {
            return false;
        }
        const oldState = changedProperties.get('state');
        const wasContextMenuVisible = oldState ? oldState.isContextMenuVisible : false;
        const isContextMenuClosing = wasContextMenuVisible && !this.state.isContextMenuVisible;
        return this.state.isContextMenuVisible || this.isAnimating_ ||
            isContextMenuClosing;
    }
    onContextMenuVisibleChanged_() {
        if (!this.glowUpEnabled) {
            return;
        }
        this.animationTimer_.clearTimeout();
        this.isAnimating_ = true;
        this.animationTimer_.setTimeout(() => {
            this.finishAnimation_();
        }, APP_MENU_GLOW_UP_DURATION_MS);
    }
    finishAnimation_() {
        this.animationTimer_.clearTimeout();
        this.isAnimating_ = false;
    }
    getAnimatedIcon_() {
        return this.state.isContextMenuVisible ?
            'webui-toolbar:app_menu_glow_up' :
            'webui-toolbar:app_menu_glow_up_end';
    }
    focus() {
        this.$.button.focus();
    }
    // Handles focus requests from the C++ side.
    onFocusRequest_(target) {
        if (target === FocusRequestTarget.kAppMenu) {
            this.focus();
        }
    }
    // Reports focus changes to the C++ side.
    onFocusin_() {
        this.browserProxy_.toolbarUIHandler.onAppMenuFocusChanged(true);
    }
    onFocusout_() {
        this.browserProxy_.toolbarUIHandler.onAppMenuFocusChanged(false);
    }
    onPointerdown_(e) {
        // To match Views' MenuButtonController behavior:
        // Mouse events trigger the menu immediately on press.
        // Touch/Gesture events are ignored on press and instead trigger on tap
        // (release).
        if (e.pointerType !== 'mouse' || e.button !== BUTTON_LEFT) {
            return;
        }
        this.handleMenuClick_(e);
    }
    onClick_(e) {
        // Handle keyboard (detail === 0) and touch clicks (tap/release) here.
        // Mouse clicks (detail > 0) are ignored here because they were already
        // handled immediately on pointerdown to match Views' behavior.
        if (e.detail === 0 || (e.pointerType && e.pointerType !== 'mouse')) {
            this.handleMenuClick_(e);
        }
    }
    handleMenuClick_(e) {
        TrackedElementManager.getInstance().notifyElementActivated(this);
        this.browserProxy_.toolbarUIHandler.showContextMenu(ContextMenuType.kAppMenu, getContextMenuPosition(this), getClickSourceType(e), /*showMenuToken=*/ null);
    }
    getTooltip_() {
        return this.adjustTooltipForHelpBubble(this.state.tooltip);
    }
    getHighlightClass_() {
        const classes = [];
        if (this.hasHelpBubble) {
            classes.push('help-anchor-highlight');
        }
        if (this.state.severity !== AppMenuSeverity.kNone) {
            classes.push('has-severity');
        }
        return classes.join(' ');
    }
}
customElements.define(AppMenuButtonElement.is, AppMenuButtonElement);
