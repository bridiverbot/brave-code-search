// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { AnchorAlignment } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { MouseHoverableMixinLit } from '//resources/cr_elements/mouse_hoverable_mixin_lit.js';
import { FocusOutlineManager } from '//resources/js/focus_outline_manager.js';
import { isRTL } from '//resources/js/util.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './organizer_list_section_header.css.js';
import { getHtml } from './organizer_list_section_header.html.js';
const OrganizerListSectionHeaderElementBase = MouseHoverableMixinLit(CrLitElement);
export class OrganizerListSectionHeaderElement extends OrganizerListSectionHeaderElementBase {
    static get is() {
        return 'organizer-list-section-header';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                reflect: true,
            },
            expanded: {
                type: Boolean,
                notify: true,
                reflect: true,
            },
            menuOpen_: {
                type: Boolean,
                reflect: true,
            },
            showAll: {
                type: Boolean,
                notify: true,
                reflect: true,
            },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #expanded_accessor_storage = false;
    get expanded() { return this.#expanded_accessor_storage; }
    set expanded(value) { this.#expanded_accessor_storage = value; }
    #menuOpen__accessor_storage = false;
    get menuOpen_() { return this.#menuOpen__accessor_storage; }
    set menuOpen_(value) { this.#menuOpen__accessor_storage = value; }
    #showAll_accessor_storage = false;
    get showAll() { return this.#showAll_accessor_storage; }
    set showAll(value) { this.#showAll_accessor_storage = value; }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        // Clicking the header label focuses the inner icon button via script, which
        // still triggers :focus-visible; track keyboard vs mouse input so CSS can
        // hide the focus ring on mouse clicks.
        FocusOutlineManager.forDocument(document);
    }
    focus() {
        this.$.expandButton.focus();
    }
    focusMenuButton() {
        this.$.menuButton.focus();
    }
    isMenuButtonVisible() {
        return this.expanded && !this.disabled;
    }
    onExpandButtonKeydown_(e) {
        const isRtl = isRTL();
        const forwardKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
        const backwardKey = isRtl ? 'ArrowRight' : 'ArrowLeft';
        if (e.key === forwardKey) {
            if (!this.disabled && !this.expanded) {
                this.expanded = true;
                e.preventDefault();
                e.stopPropagation();
            }
            return;
        }
        if (e.key === backwardKey) {
            if (!this.disabled && this.expanded) {
                this.expanded = false;
                e.preventDefault();
                e.stopPropagation();
            }
            return;
        }
        if (e.key === 'Tab') {
            if (!e.shiftKey) {
                if (this.isMenuButtonVisible()) {
                    this.focusMenuButton();
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    this.fire('focus-next-section', { sourceEvent: e });
                }
            }
            else {
                this.fire('focus-previous-section', { sourceEvent: e });
            }
        }
    }
    onMenuButtonKeydown_(e) {
        if (e.key === 'Tab') {
            if (!e.shiftKey) {
                this.fire('focus-next-section', { sourceEvent: e });
            }
            else {
                this.focus();
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }
    onExpandedChanged_(e) {
        this.expanded = e.detail.value;
    }
    onMenuButtonClick_(e) {
        e.stopPropagation();
        this.$.menu.showAt(this.$.menuButton, {
            anchorAlignmentY: AnchorAlignment.AFTER_END,
            noOffset: true,
        });
    }
    onMenuOpenChanged_(e) {
        this.menuOpen_ = e.detail.value;
    }
    onShowSomeClick_() {
        this.$.menu.close();
        this.showAll = false;
    }
    onShowAllClick_() {
        this.$.menu.close();
        this.showAll = true;
    }
}
customElements.define(OrganizerListSectionHeaderElement.is, OrganizerListSectionHeaderElement);
