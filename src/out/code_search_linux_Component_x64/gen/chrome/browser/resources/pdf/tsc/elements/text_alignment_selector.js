// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import './selectable_icon_button.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { TextAlignment } from '../constants.js';
import { Ink2Manager } from '../ink2_manager.js';
import { InkTextObserverMixin } from './ink_text_observer_mixin.js';
import { getCss } from './text_alignment_selector.css.js';
import { getHtml } from './text_alignment_selector.html.js';
const TextAlignmentSelectorElementBase = InkTextObserverMixin(CrLitElement);
export class TextAlignmentSelectorElement extends TextAlignmentSelectorElementBase {
    static get is() {
        return 'text-alignment-selector';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            currentAlignment_: { type: String },
        };
    }
    #currentAlignment__accessor_storage = TextAlignment.LEFT;
    get currentAlignment_() { return this.#currentAlignment__accessor_storage; }
    set currentAlignment_(value) { this.#currentAlignment__accessor_storage = value; }
    focus() {
        const selectedButton = this.shadowRoot.querySelector('selectable-icon-button[checked]');
        assert(selectedButton);
        selectedButton.focus();
    }
    onAlignmentClick_(e) {
        const button = e.currentTarget;
        const newAlignment = button.getAttribute('name');
        assert(newAlignment);
        this.setAlignment_(newAlignment);
    }
    onAlignmentKeydown_(e) {
        if (!['ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown',
            'Home',
            'End',
            ' ',
            'Enter',
        ].includes(e.key)) {
            return;
        }
        // Wait for cr-radio-group to handle the keyboard navigation and update its
        // `selected` property before updating the alignment in Ink2Manager.
        setTimeout(() => {
            const radioGroup = this.shadowRoot.querySelector('cr-radio-group');
            assert(radioGroup);
            if (radioGroup.selected) {
                this.setAlignment_(radioGroup.selected);
            }
        }, 0);
    }
    setAlignment_(newAlignment) {
        if (newAlignment === this.currentAlignment_) {
            return;
        }
        this.currentAlignment_ = newAlignment;
        // Intentionally only update Ink2Manager when alignment is changed from user
        // interaction (click/keydown), and not whenever it is updated from
        // onTextAttributesChanged via property binding.
        Ink2Manager.getInstance().setTextAlignment(newAlignment);
    }
    onTextAttributesChanged(attributes) {
        this.currentAlignment_ = attributes.alignment;
    }
}
customElements.define(TextAlignmentSelectorElement.is, TextAlignmentSelectorElement);
