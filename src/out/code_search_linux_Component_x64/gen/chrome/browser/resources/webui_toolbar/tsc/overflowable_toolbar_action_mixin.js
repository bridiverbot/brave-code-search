// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertNotReached } from '//resources/js/assert.js';
/**
 * A mixin for actions contained within an OverflowableToolbarActionContainer.
 * Actions are hidden if they cannot be entirely fit on the toolbar.
 *
 * Each action must either be a divider or a button. Button actions must
 * override getOverflowMenuItem(), and may return a non-null value if they
 * should be added to the overflow menu when overflowed.
 *
 * Requests a new layout whenever `preventOverflow` changes, as that can
 * affect which controls should be overflowed.
 */
export const OverflowableToolbarActionMixin = (superClass) => {
    class OverflowableToolbarActionMixin extends superClass {
        static get properties() {
            return {
                preventOverflow: { type: Boolean },
            };
        }
        #preventOverflow_accessor_storage = false;
        get preventOverflow() { return this.#preventOverflow_accessor_storage; }
        set preventOverflow(value) { this.#preventOverflow_accessor_storage = value; }
        // This is not expected to change after construction, so is not a
        // reactive property.
        isDivider = false;
        updated(changedProperties) {
            super.updated(changedProperties);
            // Only request a layout if `preventOverflow` was modified after it
            // was initialized, which is indicated by the old value being
            // defined. Initial values are included in `changedProperties` during
            // the first update, but containers already request a layout when an
            // action is added to or removed from them.
            //
            // When `preventOverflow` goes from false to true, and the element is
            // visible, a new layout is not needed, but this requests one anyway.
            // Users likely don't open side panels often enough for it to be worth
            // optimizing for this specific case.
            if (changedProperties.get('preventOverflow') !== undefined) {
                this.fire('request-layout');
            }
        }
        // See documentation in OverflowableToolbarActionMixinInterface, above.
        // Must be overridden by non-divider actions.
        getOverflowMenuItem() {
            assertNotReached('getOverflowMenuItem() must be overridden by non-divider ' +
                'actions, and never called on dividers');
        }
    }
    return OverflowableToolbarActionMixin;
};
