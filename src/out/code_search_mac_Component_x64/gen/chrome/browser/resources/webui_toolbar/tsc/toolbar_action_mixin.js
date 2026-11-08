// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertNotReached } from '//resources/js/assert.js';
import { HelpBubbleAnchorMixin, HighlightTracker, setHasHelpBubble } from '/shared/toolbar_button.js';
/**
 * A mixin for individual WebUI toolbar action buttons (such as pinned toolbar
 * actions and extensions).
 *
 * It manages help bubble registration and tracking, waiting for any entrance
 * or movement animations to finish before registering help bubbles so they
 * anchor at the button's final DOM location. It also handles cleanup on
 * disconnect and updating bubble registration when the element's identifier
 * changes.
 */
export const ToolbarActionMixin = (superClass, initialState) => {
    const superClassBase = HelpBubbleAnchorMixin(superClass);
    class ToolbarActionMixin extends superClassBase {
        static get properties() {
            return {
                state: { type: Object },
                trackedHighlighted: { type: Boolean },
            };
        }
        #state_accessor_storage = initialState;
        get state() { return this.#state_accessor_storage; }
        set state(value) { this.#state_accessor_storage = value; }
        #trackedHighlighted_accessor_storage = false;
        get trackedHighlighted() { return this.#trackedHighlighted_accessor_storage; }
        set trackedHighlighted(value) { this.#trackedHighlighted_accessor_storage = value; }
        highlightTracker = new HighlightTracker();
        registerHelpBubbleController_ = null;
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this.registerHelpBubbleController_) {
                this.registerHelpBubbleController_.abort();
                this.registerHelpBubbleController_ = null;
            }
        }
        updated(changedProperties) {
            super.updated(changedProperties);
            if (changedProperties.has('state')) {
                const oldState = changedProperties.get('state');
                const oldId = oldState ? this.getElementId(oldState) : undefined;
                const newId = this.state ? this.getElementId(this.state) : undefined;
                if (oldId !== newId) {
                    if (this.registerHelpBubbleController_) {
                        this.registerHelpBubbleController_.abort();
                        this.registerHelpBubbleController_ = null;
                    }
                    if (oldId) {
                        this.unregisterHelpBubble(oldId);
                    }
                    if (newId) {
                        this.registerHelpBubble_(newId);
                    }
                }
            }
        }
        /**
         * Returns the primary ElementIdentifier for help bubbles, or null/empty
         * if this item does not support help bubbles.
         */
        getElementId(_state) {
            return undefined;
        }
        /**
         * Optionally returns a secondary identifier for help bubbles (e.g.
         * 'ext:id').
         */
        getSecondaryElementId() {
            return undefined;
        }
        async registerHelpBubble_(newId) {
            this.registerHelpBubbleController_ = new AbortController();
            const signal = this.registerHelpBubbleController_.signal;
            const animations = this.getAnimations().filter(animation => {
                const timing = animation.effect?.getTiming();
                if (!timing) {
                    return true;
                }
                // Ignore infinite animations (e.g. pulsing for IPH).
                return timing.iterations !== Infinity &&
                    timing.duration !== Infinity;
            });
            // Wait for any animations to complete, so button is in final
            // location.
            if (animations.length > 0) {
                try {
                    await Promise.all(animations.map(a => a.finished));
                }
                catch (e) {
                    // Ignore animation cancellation.
                }
            }
            if (signal.aborted) {
                return;
            }
            this.registerHelpBubble(newId, this, {
                secondaryId: this.getSecondaryElementId(),
                onHighlightChanged: (highlighted) => {
                    this.highlightTracker.onHighlightChanged(highlighted);
                    this.trackedHighlighted = highlighted;
                },
                onHelpBubbleShown: () => setHasHelpBubble(this, true),
                onHelpBubbleHidden: () => setHasHelpBubble(this, false),
            });
            this.registerHelpBubbleController_ = null;
        }
        // Delegate focus to the internal button element. Custom elements do not
        // automatically delegate focus to their shadow DOM content unless
        // configured with delegatesFocus, which Lit doesn't do by default for
        // wrapper elements.
        focus() {
            const button = this.shadowRoot?.querySelector('toolbar-chip-button, cr-icon-button, cr-button');
            if (button) {
                button.focus();
            }
        }
        getMimeType() {
            assertNotReached();
        }
        getItemId() {
            assertNotReached();
        }
        isDraggable() {
            return assertNotReached();
        }
        moveItemBy(_delta) {
            assertNotReached();
        }
        onDragstart(e) {
            if (!this.isDraggable() || !e.dataTransfer) {
                e.preventDefault();
                return;
            }
            const payload = JSON.stringify({
                itemId: this.getItemId(),
            });
            e.dataTransfer.setData(this.getMimeType(), payload);
            e.dataTransfer.effectAllowed = 'move';
            this.fire('toolbar-action-drag-start', { itemId: this.getItemId() });
        }
        onDragend(e) {
            this.fire('toolbar-action-drag-end', {
                itemId: this.getItemId(),
                dropEffect: e.dataTransfer?.dropEffect,
            });
        }
        onKeydown(e) {
            const isModifier = e.ctrlKey || e.metaKey;
            if (!isModifier ||
                (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            const delta = e.key === 'ArrowLeft' ? -1 : 1;
            // Notify the parent container that a keyboard reorder is occurring.
            // The container will use this to lock and restore focus to this
            // action button after the DOM updates with the new order.
            this.fire('toolbar-action-keyboard-reorder', { itemId: this.getItemId() });
            this.moveItemBy(delta);
        }
    }
    return ToolbarActionMixin;
};
