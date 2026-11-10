// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import { getInstance as getAnnouncerInstance } from '//resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { isMac } from '//resources/js/platform.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_shortcut_input.css.js';
import { getHtml } from './cr_shortcut_input.html.js';
import { formatShortcutText, hasValidModifiers, isValidKeyCode, Key, keystrokeToString } from './cr_shortcut_util.js';
var ShortcutError;
(function (ShortcutError) {
    ShortcutError[ShortcutError["NO_ERROR"] = 0] = "NO_ERROR";
    ShortcutError[ShortcutError["INCLUDE_START_MODIFIER"] = 1] = "INCLUDE_START_MODIFIER";
    ShortcutError[ShortcutError["TOO_MANY_MODIFIERS"] = 2] = "TOO_MANY_MODIFIERS";
    ShortcutError[ShortcutError["NEED_CHARACTER"] = 3] = "NEED_CHARACTER";
})(ShortcutError || (ShortcutError = {}));
const CrShortcutInputElementBase = I18nMixinLit(CrLitElement);
export class CrShortcutInputElement extends CrShortcutInputElementBase {
    static get is() {
        return 'cr-shortcut-input';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            shortcut: { type: String },
            inputAriaLabel: { type: String },
            editButtonAriaLabel: { type: String },
            clearButtonAriaLabel: { type: String },
            inputDisabled: { type: Boolean },
            allowCtrlAltShortcuts: { type: Boolean },
            error_: { type: Number },
            readonly_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #shortcut_accessor_storage = '';
    get shortcut() { return this.#shortcut_accessor_storage; }
    set shortcut(value) { this.#shortcut_accessor_storage = value; }
    #inputAriaLabel_accessor_storage = '';
    get inputAriaLabel() { return this.#inputAriaLabel_accessor_storage; }
    set inputAriaLabel(value) { this.#inputAriaLabel_accessor_storage = value; }
    #editButtonAriaLabel_accessor_storage = '';
    get editButtonAriaLabel() { return this.#editButtonAriaLabel_accessor_storage; }
    set editButtonAriaLabel(value) { this.#editButtonAriaLabel_accessor_storage = value; }
    #clearButtonAriaLabel_accessor_storage = '';
    get clearButtonAriaLabel() { return this.#clearButtonAriaLabel_accessor_storage; }
    set clearButtonAriaLabel(value) { this.#clearButtonAriaLabel_accessor_storage = value; }
    #inputDisabled_accessor_storage = false;
    get inputDisabled() { return this.#inputDisabled_accessor_storage; }
    set inputDisabled(value) { this.#inputDisabled_accessor_storage = value; }
    #allowCtrlAltShortcuts_accessor_storage = false;
    get allowCtrlAltShortcuts() { return this.#allowCtrlAltShortcuts_accessor_storage; }
    set allowCtrlAltShortcuts(value) { this.#allowCtrlAltShortcuts_accessor_storage = value; }
    #readonly__accessor_storage = true;
    get readonly_() { return this.#readonly__accessor_storage; }
    set readonly_(value) { this.#readonly__accessor_storage = value; }
    capturing_ = false;
    #error__accessor_storage = ShortcutError.NO_ERROR;
    get error_() { return this.#error__accessor_storage; }
    set error_(value) { this.#error__accessor_storage = value; }
    pendingShortcut_ = '';
    firstUpdated() {
        const node = this.$.input;
        node.addEventListener('mouseup', this.startCapture_.bind(this));
        node.addEventListener('blur', this.endCapture_.bind(this));
        node.addEventListener('focus', this.startCapture_.bind(this));
        node.addEventListener('keydown', this.onKeyDown_.bind(this));
        node.addEventListener('keyup', this.onKeyUp_.bind(this));
    }
    getBubbleAnchor() {
        return this.$.edit;
    }
    async startCapture_() {
        if (this.capturing_ || this.readonly_) {
            return;
        }
        this.capturing_ = true;
        await this.updateComplete;
        this.fire('input-capture-change', true);
    }
    async endCapture_() {
        if (!this.capturing_) {
            return;
        }
        this.pendingShortcut_ = '';
        this.capturing_ = false;
        this.$.input.blur();
        this.error_ = ShortcutError.NO_ERROR;
        this.readonly_ = true;
        await this.updateComplete;
        this.fire('input-capture-change', false);
    }
    async clearShortcut_() {
        this.pendingShortcut_ = '';
        // Commit the empty shortcut in order to clear the current shortcut.
        await this.commitPending_();
        if (this.capturing_) {
            // Cleared while an edit was in progress - perform proper cleanup.
            await this.endCapture_();
        }
        else {
            // Cleared while not capturing - just fire the event to signal to the
            // page that the shortcut has been cleared.
            this.fire('input-capture-change', false);
        }
    }
    onKeyDown_(e) {
        if (this.readonly_) {
            return;
        }
        if (e.target === this.$.edit) {
            return;
        }
        if (e.keyCode === Key.ESCAPE) {
            if (!this.capturing_) {
                // If not currently capturing, allow escape to propagate.
                return;
            }
            // Otherwise, escape cancels capturing.
            this.endCapture_();
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        if (e.keyCode === Key.TAB) {
            // Allow tab propagation for keyboard navigation.
            return;
        }
        if (!this.capturing_) {
            this.startCapture_();
        }
        this.handleKey_(e);
    }
    onKeyUp_(e) {
        // Ignores pressing 'Space' or 'Enter' on the edit button. In 'Enter's
        // case, the edit button disappears before key-up, so 'Enter's key-up
        // target becomes the input field, not the edit button, and needs to
        // be caught explicitly.
        if (this.readonly_) {
            return;
        }
        if (e.target === this.$.edit || e.key === 'Enter') {
            return;
        }
        if (e.keyCode === Key.ESCAPE || e.keyCode === Key.TAB) {
            return;
        }
        this.handleKey_(e);
    }
    getErrorString_() {
        switch (this.error_) {
            case ShortcutError.INCLUDE_START_MODIFIER:
                return this.i18n('shortcutIncludeStartModifier');
            case ShortcutError.TOO_MANY_MODIFIERS:
                return this.i18n('shortcutTooManyModifiers');
            case ShortcutError.NEED_CHARACTER:
                return this.i18n('shortcutNeedCharacter');
            default:
                assert(this.error_ === ShortcutError.NO_ERROR);
                return '';
        }
    }
    handleKey_(e) {
        // While capturing, prevent all events from bubbling, to prevent
        // shortcuts lacking the right modifier (F3 for example) from activating
        // and ending capture prematurely.
        e.preventDefault();
        e.stopPropagation();
        // Don't allow both Ctrl and Alt in the same keybinding. Profile saved
        // shortcuts convert command to Ctrl so command + alt is not allowed either.
        // See https://devblogs.microsoft.com/oldnewthing/20040329-00/?p=40003 for
        // more information.
        // TODO(devlin): This really should go in hasValidModifiers,
        // but that requires updating the existing page as well.
        if (!this.allowCtrlAltShortcuts && e.altKey &&
            (e.ctrlKey || (isMac && e.metaKey))) {
            this.error_ = ShortcutError.TOO_MANY_MODIFIERS;
            return;
        }
        // 
        if (!hasValidModifiers(e)) {
            this.pendingShortcut_ = '';
            this.error_ = ShortcutError.INCLUDE_START_MODIFIER;
            return;
        }
        this.pendingShortcut_ = keystrokeToString(e);
        if (!isValidKeyCode(e.keyCode)) {
            this.error_ = ShortcutError.NEED_CHARACTER;
            return;
        }
        this.error_ = ShortcutError.NO_ERROR;
        getAnnouncerInstance().announce(this.i18n('shortcutSet', formatShortcutText(this.pendingShortcut_)));
        this.commitPending_();
        this.endCapture_();
    }
    async commitPending_() {
        this.shortcut = this.pendingShortcut_;
        await this.updateComplete;
        this.fire('shortcut-updated', this.shortcut);
    }
    computePlaceholder_() {
        if (this.readonly_) {
            return this.shortcut ? this.i18n('shortcutSet', this.computeText_()) :
                this.i18n('shortcutNotSet');
        }
        return this.i18n('shortcutTypeAShortcut');
    }
    /**
     * @return The text to be displayed in the shortcut field.
     */
    computeText_() {
        if (this.inputDisabled) {
            return this.i18n('setShortcutInSystemSettings');
        }
        return formatShortcutText(this.readonly_ ? this.shortcut : '');
    }
    getIsInvalid_() {
        return this.error_ !== ShortcutError.NO_ERROR;
    }
    onEditClick_() {
        this.readonly_ = false;
        this.$.input.focus();
    }
    onClearClick_() {
        void this.clearShortcut_();
    }
}
customElements.define(CrShortcutInputElement.is, CrShortcutInputElement);
