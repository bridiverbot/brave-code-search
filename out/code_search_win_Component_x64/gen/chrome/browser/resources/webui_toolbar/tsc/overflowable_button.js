// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { getContextMenuPosition } from '/shared/toolbar_button.js';
import { BrowserProxyImpl } from './browser_proxy.js';
/**
 * A mixin for buttons and controls that, when they do not fit on the toolbar,
 * should have the "overflow-display-none" class added, and should be added to
 * the overflow menu.
 *
 * Implements all methods of ResponsiveControl, so classes using the mixin only
 * need to provide a `state` field and call showContextMenuAndPreventOverflow()
 * when appropriate. See `OverflowableButtonState` above for more details.
 * Subclasses also need to bubble up a `request-layout` event to the app-toolbar
 * if their preferred or minimum size changes, except when `state.shouldBeShown`
 * changes, indicating they've been removed or added to the toolbar.
 *
 * This class is primarily designed to be used in combination with
 * cr-icon-buttons. It expects the CrLitElement to be the ancestor of an
 * element with the id "button". It's that element whose disabled state is
 * checked to determine if the button should be enabled on the overflow menu.
 */
export const OverflowableButtonMixin = (superClass) => {
    class OverflowableButtonMixin extends superClass {
        static get properties() {
            return {
                state: { type: Object },
            };
        }
        #state_accessor_storage = {};
        get state() { return this.#state_accessor_storage; }
        set state(value) { this.#state_accessor_storage = value; }
        // Local count of context menu requests sent to the browser. Wraps
        // around at 2^32.
        menuOpenToken_ = 0;
        shouldBeShown() {
            return this.state.shouldBeShown ?? true;
        }
        /**
         * True if the button is currently not allowed to overflow, either
         * because the browser has set `preventOverflow` or because its context
         * menu is showing.
         */
        shouldPreventOverflow_() {
            // These use `=== true` because both can be undefined or bool, and
            // `preventOverflow` may also be null, when `shouldBeShown` is false.
            return this.state.preventOverflow === true ||
                this.state.isContextMenuVisible === true;
        }
        setToMinWidth() {
            // The minimum width hides the button using `overflow-display-none`.
            // If overflow is currently prevented, leave at full width.
            if (this.shouldPreventOverflow_()) {
                return;
            }
            this.classList.add('overflow-display-none');
        }
        expandUpToPreferredWidth() {
            // For a button, the preferred width has the button displayed, so
            // removes the "overflow-display-none" class, checks if the parent
            // element fits in the window, and if not, adds back the
            // "overflow-display-none" class. Expects only to be called after an
            // initial setToMinWidth() call, and only if shouldBeShown() returns
            // true.
            // If overflow is currently prevented, should already be at preferred
            // width, so do nothing.
            if (this.shouldPreventOverflow_()) {
                return;
            }
            this.setToPreferredWidth();
            const shadowRoot = this.getRootNode();
            const toolbarApp = shadowRoot.host;
            if (toolbarApp.getAvailableWidth() < 0) {
                this.setToMinWidth();
            }
        }
        setToPreferredWidth() {
            // Unconditionally sets width to preferred width without considering
            // window sizing or other control state. Note that this only sets the
            // button not to be hidden due to overflow; it does not affect
            // `shouldBeShown()`.
            this.classList.remove('overflow-display-none');
        }
        controlsToAddToOverflowMenu() {
            // If this element is hidden or has not overflowed, nothing to add to
            // the overflow menu.
            if (!this.shouldBeShown() ||
                !this.classList.contains('overflow-display-none')) {
                return [];
            }
            // Otherwise, return information about this button. Even disabled
            // buttons should be shown on the menu, if they've overflowed.
            const innerControl = this.shadowRoot.querySelector('#button');
            // Most controls register their own element with
            // TrackedElementManager, but the Avatar button registers its button
            // element instead, so we have to handle both cases here.
            const id = TrackedElementManager.getElementId(this) ||
                TrackedElementManager.getElementId(innerControl);
            assert(id, `No TrackedElementIdentifier found for element ${this.id}`);
            return [{
                    id: {
                        trackedElementId: id,
                    },
                    isEnabled: !innerControl.hasAttribute('disabled'),
                }];
        }
        willUpdate(changedProperties) {
            super.willUpdate(changedProperties);
            if (changedProperties.has('state')) {
                const oldState = changedProperties.get('state');
                if (this.state.menuOpenToken !== undefined) {
                    if (!oldState) {
                        // Set `menuOpenToken_` to `state.menuOpenToken` if this is the
                        // first state update - this is to prevent any issues restarting
                        // the WebUI process after a crash. Doesn't matter if this is in
                        // updated() or willUpdated(), just here because the else clause
                        // needs to be here.
                        this.menuOpenToken_ = this.state.menuOpenToken;
                    }
                    else if (this.state.menuOpenToken !== this.menuOpenToken_) {
                        // If the browser hasn't caught up with `menuOpenToken_` yet,
                        // keep `isContextMenuVisible` set to true. Since this modifies
                        // `state`, needs to in willUpdate() rather than updated().
                        this.state.isContextMenuVisible = true;
                    }
                }
            }
        }
        updated(changedProperties) {
            super.updated(changedProperties);
            if (changedProperties.has('state')) {
                const oldState = changedProperties.get('state');
                // When overflow is prevented, this class should never hide the
                // control. Note that the child class may still be hiding the
                // control itself, based on `shouldBeShown`.
                if (this.shouldPreventOverflow_()) {
                    this.setToPreferredWidth();
                }
                // Need to run a layout if this is the first state update, if the
                // visibility of `this` changed, or if the control's ability to
                // overflow changed. Technically we don't need to do a layout if the
                // control is no longer allowed to overflow but wasn't overflowed in
                // the first place, but that's a bit tricky to check.
                if (!oldState ||
                    oldState.shouldBeShown !== this.state.shouldBeShown ||
                    oldState.isContextMenuVisible !==
                        this.state.isContextMenuVisible ||
                    oldState.preventOverflow !== this.state.preventOverflow) {
                    this.fire('request-layout');
                }
            }
        }
        /**
         * Shows the context menu with the provided parameters, and makes the
         * button not overflow until the browser process has echoed back the
         * updated `menuOpenToken_` value. May only be used when the button's
         * State has `menuOpenToken` and `isContextMenuVisible` fields.
         */
        showContextMenuAndPreventOverflow(menuType, sourceType) {
            // This is only supported if `state` has both `menuOpenToken` and
            // `isContextMenuVisible` fields.
            assert(this.state.menuOpenToken !== undefined);
            assert(this.state.isContextMenuVisible !== undefined);
            // `shouldBeShown` is currently handled entirely by subclasses. Since
            // we need a visible button to get the location when showing a context
            // menu, just give up if the button can't be shown. We could consider
            // making this class set `shouldBeShow` to true whenever it sets
            // `isContextMenuVisible` to true, to ensure buttons with context
            // menus are always shown, as opposed to only preventing them from
            // overflowing.
            if (!this.shouldBeShown()) {
                return;
            }
            // `>>> 0` is logically equivalent to casting to a uint32, which is
            // the type of the `menuOpenToken` field.
            this.menuOpenToken_ = (this.menuOpenToken_ + 1) >>> 0;
            this.state.isContextMenuVisible = true;
            // If this was overflowed, need to make visible and do a new layout
            // before getting the location to place the context menu.
            if (this.classList.contains('overflow-display-none')) {
                this.setToPreferredWidth();
                this.fire('layout-now');
            }
            BrowserProxyImpl.getInstance().toolbarUIHandler.showContextMenu(menuType, getContextMenuPosition(this), sourceType, this.menuOpenToken_);
        }
    }
    return OverflowableButtonMixin;
};
