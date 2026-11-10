// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A mixin for toolbar chip buttons (such as the Glic button and App Menu
 * button) that collapse their text label down to an icon-only button when
 * toolbar space is constrained, without ever disappearing into the overflow
 * menu.
 *
 * Expects the host CrLitElement to contain a `#button` child (typically a
 * `<toolbar-chip-button id="button">`). Subclasses should override
 * `hasLabel_()` (and `shouldBeShown()` if the button can be hidden) and
 * dispatch a `request-layout` event when their label or visibility state
 * changes.
 */
export const CollapsibleLabelButtonMixin = (superClass) => {
    class CollapsibleLabelButtonMixin extends superClass {
        static get properties() {
            return {
                collapsed: {
                    type: Boolean,
                    reflect: true,
                },
            };
        }
        #collapsed_accessor_storage = false;
        get collapsed() { return this.#collapsed_accessor_storage; }
        set collapsed(value) { this.#collapsed_accessor_storage = value; }
        updated(changedProperties) {
            super.updated(changedProperties);
            if (this.collapsed && !this.hasLabel_()) {
                this.setCollapsed_(false);
            }
            else {
                this.toggleAttribute('has-label', this.shouldShowLabel_());
            }
        }
        hasLabel_() {
            return false;
        }
        shouldShowLabel_() {
            return this.hasLabel_() && !this.collapsed;
        }
        shouldBeShown() {
            return true;
        }
        setToMinWidth() {
            this.setCollapsed_(this.hasLabel_());
        }
        setToPreferredWidth() {
            this.setCollapsed_(false);
        }
        expandUpToPreferredWidth() {
            if (!this.hasLabel_()) {
                return;
            }
            this.setToPreferredWidth();
            const shadowRoot = this.getRootNode();
            const toolbarApp = shadowRoot?.host;
            if (toolbarApp && toolbarApp.getAvailableWidth() < 0) {
                this.setToMinWidth();
            }
        }
        controlsToAddToOverflowMenu() {
            return [];
        }
        setCollapsed_(collapsed) {
            if (this.collapsed === collapsed) {
                return;
            }
            this.collapsed = collapsed;
            this.toggleAttribute('collapsed', collapsed);
            const showLabel = this.shouldShowLabel_();
            this.toggleAttribute('has-label', showLabel);
            const innerButton = this.shadowRoot?.querySelector('#button');
            // Toggle `has-label` directly rather than relying on Lit's
            // asynchronous data binding (`shouldShowLabel_()`) so
            // `toolbar-chip-button` updates its padding immediately for
            // synchronous layout width measurements in
            // `ToolbarAppElement.layoutResponsiveControls()`.
            innerButton?.toggleAttribute('has-label', showLabel);
        }
    }
    return CollapsibleLabelButtonMixin;
};
