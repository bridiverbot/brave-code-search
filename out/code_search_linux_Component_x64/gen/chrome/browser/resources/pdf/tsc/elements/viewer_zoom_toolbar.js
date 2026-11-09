// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/icons.html.js';
import './icons.html.js';
import './viewer_zoom_button.js';
import { isRTL } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { FittingType } from '../constants.js';
import { getCss } from './viewer_zoom_toolbar.css.js';
import { getHtml } from './viewer_zoom_toolbar.html.js';
const FIT_TO_PAGE_BUTTON_STATE = 0;
const FIT_TO_WIDTH_BUTTON_STATE = 1;
export class ViewerZoomToolbarElement extends CrLitElement {
    static get is() {
        return 'viewer-zoom-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            keyboardNavigationActive_: { type: Boolean },
            visible_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #keyboardNavigationActive__accessor_storage = false;
    get keyboardNavigationActive_() { return this.#keyboardNavigationActive__accessor_storage; }
    set keyboardNavigationActive_(value) { this.#keyboardNavigationActive__accessor_storage = value; }
    #visible__accessor_storage = false;
    get visible_() { return this.#visible__accessor_storage; }
    set visible_(value) { this.#visible__accessor_storage = value; }
    firstUpdated() {
        this.addEventListener('focus', this.onFocus_);
        this.addEventListener('keyup', this.onKeyUp_);
        this.addEventListener('pointerdown', this.onPointerDown_);
    }
    isVisible() {
        return this.visible_;
    }
    onFocus_() {
        if (this.visible_) {
            return;
        }
        // For Print Preview, ensure the parent element knows that keyboard
        // navigation is now active and show the toolbar.
        this.fire('keyboard-navigation-active', true);
        this.show();
    }
    onKeyUp_() {
        this.fire('keyboard-navigation-active', true);
        this.keyboardNavigationActive_ = true;
    }
    onPointerDown_() {
        this.fire('keyboard-navigation-active', false);
        this.keyboardNavigationActive_ = false;
    }
    onFitButtonFabclick_() {
        this.fitToggle();
    }
    /** Handle clicks of the fit-button. */
    fitToggle() {
        this.fireFitToChangedEvent_(this.$.fitButton.activeIndex === FIT_TO_WIDTH_BUTTON_STATE ?
            FittingType.FIT_TO_WIDTH :
            FittingType.FIT_TO_PAGE);
    }
    /** Handle the keyboard shortcut equivalent of fit-button clicks. */
    fitToggleFromHotKey() {
        this.fitToggle();
        // Toggle the button state since there was no mouse click.
        const button = this.$.fitButton;
        button.activeIndex =
            (button.activeIndex === FIT_TO_WIDTH_BUTTON_STATE ?
                FIT_TO_PAGE_BUTTON_STATE :
                FIT_TO_WIDTH_BUTTON_STATE);
    }
    /**
     * Handle forcing zoom via scripting to a fitting type.
     * @param fittingType Page fitting type to force.
     */
    forceFit(fittingType) {
        // Set the button state since there was no mouse click.
        const nextButtonState = (fittingType === FittingType.FIT_TO_WIDTH ? FIT_TO_PAGE_BUTTON_STATE :
            FIT_TO_WIDTH_BUTTON_STATE);
        this.$.fitButton.activeIndex = nextButtonState;
    }
    /**
     * Fire a 'fit-to-changed' {CustomEvent} with the given FittingType as detail.
     * @param fittingType to include as payload.
     */
    fireFitToChangedEvent_(fittingType) {
        this.fire('fit-to-changed', fittingType);
    }
    /** Handle clicks of the zoom-in-button. */
    onZoomInFabclick_() {
        this.fire('zoom-in');
    }
    /** Handle clicks of the zoom-out-button. */
    onZoomOutFabclick_() {
        this.fire('zoom-out');
    }
    show() {
        this.visible_ = true;
    }
    hide() {
        this.visible_ = false;
    }
    /**
     * Offsets the toolbar position so that it doesn't move if scrollbars appear.
     */
    shiftForScrollbars(hasScrollbars, scrollbarWidth) {
        const verticalScrollbarWidth = hasScrollbars.vertical ? scrollbarWidth : 0;
        const horizontalScrollbarWidth = hasScrollbars.horizontal ? scrollbarWidth : 0;
        // Shift the zoom toolbar to the left by half a scrollbar width. This
        // gives a compromise: if there is no scrollbar visible then the toolbar
        // will be half a scrollbar width further left than the spec but if there
        // is a scrollbar visible it will be half a scrollbar width further right
        // than the spec. In RTL layout normally, the zoom toolbar is on the left
        // left side, but the scrollbar is still on the right, so this is not
        // necessary.
        if (!isRTL()) {
            this.style.right = -verticalScrollbarWidth + (scrollbarWidth / 2) + 'px';
        }
        // Having a horizontal scrollbar is much rarer so we don't offset the
        // toolbar from the bottom any more than what the spec says. This means
        // that when there is a scrollbar visible, it will be a full scrollbar
        // width closer to the bottom of the screen than usual, but this is ok.
        this.style.bottom = -horizontalScrollbarWidth + 'px';
    }
}
customElements.define(ViewerZoomToolbarElement.is, ViewerZoomToolbarElement);
