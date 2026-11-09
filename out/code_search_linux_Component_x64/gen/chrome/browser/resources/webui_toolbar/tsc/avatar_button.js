// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './toolbar_chip_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '/shared/icon_from_table.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { HelpBubbleAnchorMixin, HighlightTracker } from '/shared/toolbar_button.js';
import { AvatarToolbarButtonState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import { getCss } from './avatar_button.css.js';
import { getHtml } from './avatar_button.html.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { OverflowableButtonMixin } from './overflowable_button.js';
const AvatarButtonElementBase = HelpBubbleAnchorMixin(OverflowableButtonMixin(CrLitElement));
export class AvatarButtonElement extends AvatarButtonElementBase {
    static get is() {
        return 'avatar-button';
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
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('initial-load');
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('hasHelpBubble')) {
            BrowserProxyImpl.getInstance()
                .toolbarUIHandler.setAvatarButtonIphPromoShowing(this.hasHelpBubble);
        }
        if (changedProperties.has('state')) {
            this.toggleAttribute('has-label', !!this.state.text);
        }
    }
    #state_accessor_storage = {
        state: AvatarToolbarButtonState.kNormal,
        icon: { handleId: 0n },
        text: '',
        tooltip: '',
        accessibilityName: '',
        accessibilityDescription: '',
        enabled: true,
        hasLinearGradientRing: false,
        // This field is from OverflowableButtonState (in addition to
        // AvatarControlState), and is used by OverflowableButtonMixin.
        preventOverflow: false,
    };
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    highlightTracker = new HighlightTracker();
    getTooltip_() {
        return this.adjustTooltipForHelpBubble(this.state?.tooltip || '');
    }
    shouldPaintBorder() {
        return !!this.state.text &&
            this.state.state === AvatarToolbarButtonState.kGuestSession;
    }
    getButtonClass_() {
        const classes = [];
        if (this.hasHelpBubble) {
            classes.push('help-anchor-highlight');
        }
        if (this.state.text) {
            switch (this.state.state) {
                case AvatarToolbarButtonState.kSyncError:
                    classes.push('highlight-sync-error');
                    break;
                case AvatarToolbarButtonState.kGuestSession:
                    classes.push('highlight-guest');
                    break;
                case AvatarToolbarButtonState.kIncognitoProfile:
                    classes.push('highlight-incognito');
                    break;
                default:
                    classes.push('highlight-default');
                    break;
            }
        }
        return classes.join(' ');
    }
    onClick_(e) {
        if (!this.highlightTracker.shouldSkipClick(e)) {
            TrackedElementManager.getInstance().notifyElementActivated(this);
            // TODO(behamilton): Log an error if this fails.
            BrowserProxyImpl.getInstance().toolbarUIHandler.showAvatarMenu();
        }
    }
    onMouseenter_() {
        BrowserProxyImpl.getInstance().toolbarUIHandler.setAvatarButtonHovered(true);
    }
    onMouseleave_() {
        BrowserProxyImpl.getInstance().toolbarUIHandler.setAvatarButtonHovered(false);
    }
    onFocusin_() {
        BrowserProxyImpl.getInstance().toolbarUIHandler.setAvatarButtonFocused(true);
    }
    onFocusout_() {
        BrowserProxyImpl.getInstance().toolbarUIHandler.setAvatarButtonFocused(false);
    }
}
customElements.define(AvatarButtonElement.is, AvatarButtonElement);
