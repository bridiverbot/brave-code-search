// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReached } from '//resources/js/assert.js';
/**
 * A mixin for responsive controls that manage multiple child actions
 * and optional dividers. Each child action will be hidden if it doesn't fit.
 * Actions that don't fit will be added to the overflow menu, if needed.
 * Consumers only need to implement getActions(). All non-divider actions must
 * be of equal size.
 *
 * Does not hide the top-level element when all sub-elements are overflowed.
 * That's currently not needed for any subtype, though could be added, if
 * needed.
 */
export const OverflowableToolbarActionContainerMixin = (superClass) => {
    class OverflowableToolbarActionContainer extends superClass {
        // Cached return value of getActions(). Cached primarily so we can
        // detect changes in updated() to trigger layout requests, though it's
        // also used to reduce calls to getActions().
        cachedActions_ = [];
        // See documentation in OverflowableToolbarActionContainer, above.
        // Subclasses need to override this.
        getActions() {
            assertNotReached();
        }
        shouldBeShown() {
            // Only need to show this if there is at least one action.
            return this.cachedActions_.length > 0;
        }
        setToMinWidth() {
            // Sets actions as overflowed, except for actions where
            // `preventOverflow` is true. Each divider is shown only if an action
            // in its group is shown.
            for (const group of this.getActionGroupsInPriorityOrder_()) {
                let groupHasVisibleAction = false;
                for (const action of group.actions) {
                    this.setOverflowed_([action], !action.preventOverflow);
                    groupHasVisibleAction ||= action.preventOverflow;
                }
                if (group.divider) {
                    this.setOverflowed_([group.divider], !groupHasVisibleAction);
                }
            }
        }
        setToPreferredWidth() {
            // Sets all actions as not overflowed.
            this.setOverflowed_(this.cachedActions_, false);
        }
        expandUpToPreferredWidth() {
            // Expects actions to currently be overflowed due to an earlier
            // setToMinWidth() call. Tries to set overflowed to false for each
            // hidden action, from highest priority to lowest. A hidden divider is
            // shown together with the first action shown from its group. If we
            // try to show an action (or action+divider pair) and it doesn't fit,
            // it is hidden again, and we immediately return, leaving all lower
            // priority actions hidden.
            const shadowRoot = this.getRootNode();
            const toolbarApp = shadowRoot?.host;
            assert(toolbarApp);
            for (const group of this.getActionGroupsInPriorityOrder_()) {
                // If the divider is hidden, setToMinWidth() hid all actions in the
                // group, so the divider needs to be made visible if the first
                // action in the group becomes visible.
                let hiddenDivider = null;
                if (group.divider && this.isOverflowed_(group.divider)) {
                    hiddenDivider = group.divider;
                }
                for (const action of group.actions) {
                    // Skip anything that's already visible - setToMinWidth() should
                    // have been called before, leaving all `preventOverflow` actions
                    // visible.
                    if (!this.isOverflowed_(action)) {
                        assert(!hiddenDivider);
                        continue;
                    }
                    const toShow = hiddenDivider ? [action, hiddenDivider] : [action];
                    hiddenDivider = null;
                    // Try showing the action, and the divider, if needed.
                    this.setOverflowed_(toShow, false);
                    // If they don't fit, hide them again, and return.
                    if (toolbarApp.getAvailableWidth() < 0) {
                        this.setOverflowed_(toShow, true);
                        return;
                    }
                }
            }
        }
        updated(changedProperties) {
            super.updated(changedProperties);
            // Determine if a new layout is needed, and if so, request a new
            // layout be done.
            const currentActions = this.getActions();
            let layoutNeeded = false;
            if (this.cachedActions_.length !== currentActions.length) {
                layoutNeeded = true;
            }
            else {
                for (let i = 0; i < currentActions.length; i++) {
                    if (this.cachedActions_[i] !== currentActions[i]) {
                        layoutNeeded = true;
                        break;
                    }
                }
            }
            if (layoutNeeded) {
                this.fire('request-layout');
            }
            // Safe to do this after the layout request, as layout happens
            // asynchronously.
            this.cachedActions_ = currentActions;
        }
        controlsToAddToOverflowMenu() {
            const overflowItems = [];
            for (const action of this.cachedActions_) {
                if (action.isDivider || !this.isOverflowed_(action)) {
                    continue;
                }
                const item = action.getOverflowMenuItem();
                if (item) {
                    overflowItems.push(item);
                }
            }
            return overflowItems;
        }
        isOverflowed_(action) {
            return action.classList.contains('overflow-display-none');
        }
        // Splits `cachedActions_` into groups, each ending with a divider,
        // except possibly the rightmost group. Returns the groups in priority
        // order, from right to left, with the actions within each group also
        // ordered from right to left.
        getActionGroupsInPriorityOrder_() {
            const groups = [];
            let actions = [];
            for (const action of this.cachedActions_) {
                if (action.isDivider) {
                    // This follows from the restrictions documented with
                    // getActions(): No two dividers may be adjacent, and the first
                    // element may not be a divider.
                    assert(actions.length > 0);
                    groups.push({ actions: actions.reverse(), divider: action });
                    actions = [];
                }
                else {
                    actions.push(action);
                }
            }
            if (actions.length > 0) {
                groups.push({ actions: actions.reverse(), divider: null });
            }
            return groups.reverse();
        }
        // Helper to hide/show actions due to overflow.
        setOverflowed_(actions, overflowed) {
            for (const action of actions) {
                action.classList.toggle('overflow-display-none', overflowed);
            }
        }
    }
    return OverflowableToolbarActionContainer;
};
