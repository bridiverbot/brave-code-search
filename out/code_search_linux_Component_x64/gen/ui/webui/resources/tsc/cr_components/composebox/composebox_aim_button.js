// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import { assertNotReachedCase } from '//resources/js/assert.js';
import { isMac } from '//resources/js/platform.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './composebox_aim_button.css.js';
import { getHtml } from './composebox_aim_button.html.js';
export var AimButtonMode;
(function (AimButtonMode) {
    AimButtonMode["EXIT"] = "exit";
    AimButtonMode["SEND"] = "send";
})(AimButtonMode || (AimButtonMode = {}));
// The string is used as the CSS class of the trailing icon element (close icon,
// arrow icon, or collapsed). Keep the string in sync with the selectors in the
// stylesheet.
var TrailingIcon;
(function (TrailingIcon) {
    TrailingIcon["NONE"] = "collapsed";
    TrailingIcon["ARROW"] = "arrow-icon";
    TrailingIcon["EXIT"] = "icon-clear";
})(TrailingIcon || (TrailingIcon = {}));
export class ComposeboxAimButtonElement extends CrLitElement {
    static get is() {
        return 'cr-composebox-aim-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            mode: { type: String, reflect: true },
            showExitIcon: { type: Boolean },
            disabled: { type: Boolean, reflect: true },
            label: { type: String },
            exitTitle: { type: String },
            sendTitle: { type: String },
            energyEffectAnimationEnabled: { type: Boolean },
        };
    }
    #mode_accessor_storage = AimButtonMode.EXIT;
    get mode() { return this.#mode_accessor_storage; }
    set mode(value) { this.#mode_accessor_storage = value; }
    #showExitIcon_accessor_storage = false;
    get showExitIcon() { return this.#showExitIcon_accessor_storage; }
    set showExitIcon(value) { this.#showExitIcon_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #exitTitle_accessor_storage = '';
    get exitTitle() { return this.#exitTitle_accessor_storage; }
    set exitTitle(value) { this.#exitTitle_accessor_storage = value; }
    #sendTitle_accessor_storage = '';
    get sendTitle() { return this.#sendTitle_accessor_storage; }
    set sendTitle(value) { this.#sendTitle_accessor_storage = value; }
    #energyEffectAnimationEnabled_accessor_storage = false;
    get energyEffectAnimationEnabled() { return this.#energyEffectAnimationEnabled_accessor_storage; }
    set energyEffectAnimationEnabled(value) { this.#energyEffectAnimationEnabled_accessor_storage = value; }
    keyboardActivationEvent_ = null;
    constructor() {
        super();
        // cr-button calls click() on Enter/Space, and the synthesized click
        // carries no modifier keys. Capture the keyboard event so
        // `getActivationEvent_()` can forward it instead.
        const onKeyboardActivation = this.onKeyboardActivation_.bind(this);
        this.addEventListener('keydown', onKeyboardActivation, { capture: true });
        this.addEventListener('keyup', onKeyboardActivation, { capture: true });
    }
    focus() {
        this.$.button?.focus();
    }
    blur() {
        this.$.button?.blur();
    }
    // Only the exit state without X (exit icon) shows the leading icon. The
    // returned class must match the stylesheet's `.collapsed` selector.
    getLeadingIconClass_() {
        const shown = this.mode === AimButtonMode.EXIT && !this.showExitIcon;
        return shown ? '' : 'collapsed';
    }
    // The energy effect only runs in SEND; EXIT keeps the plain button.
    showEnergyEffect_() {
        return this.energyEffectAnimationEnabled &&
            this.mode === AimButtonMode.SEND;
    }
    getButtonClass_() {
        return this.showEnergyEffect_() ? 'energy-effect' : '';
    }
    // Send state shows the arrow icon; exit state with X (exit icon) shows the
    // exit icon; exit state without X doesn't show any trailing icon.
    getTrailingIcon_() {
        switch (this.mode) {
            case AimButtonMode.SEND:
                return TrailingIcon.ARROW;
            case AimButtonMode.EXIT:
                return this.showExitIcon ? TrailingIcon.EXIT : TrailingIcon.NONE;
            default:
                assertNotReachedCase(this.mode);
        }
    }
    getTitle_() {
        switch (this.mode) {
            case AimButtonMode.EXIT:
                return this.exitTitle;
            case AimButtonMode.SEND:
                return this.sendTitle;
            default:
                assertNotReachedCase(this.mode);
        }
    }
    onClick_(e) {
        e.preventDefault();
        if (this.disabled) {
            return;
        }
        // The label (text) and X (exit icon) share this single click entry point.
        this.fire('aim-button-click', this.getActivationEvent_(e));
    }
    onKeyboardActivation_(e) {
        // Clear the cache on every key event so stale modifiers never linger.
        this.keyboardActivationEvent_ = null;
        if (this.disabled) {
            return;
        }
        // Same conditions under which cr-button triggers a click(): Enter on
        // keydown (excluding repeats), or Space on keyup.
        const keyDownActivated = e.type === 'keydown' && e.key === 'Enter' &&
            !e.repeat && !(isMac && e.ctrlKey);
        const keyUpActivated = e.type === 'keyup' && e.key === ' ';
        if ((keyDownActivated || keyUpActivated) &&
            e.composedPath()[0] === this.$.button) {
            this.keyboardActivationEvent_ = e;
        }
    }
    getActivationEvent_(e) {
        const keyboardEvent = this.keyboardActivationEvent_;
        this.keyboardActivationEvent_ = null;
        // Use the keyboard event only when the click was synthesized from the
        // keyboard (detail === 0) and the cached event is still being dispatched
        // on the same button. Otherwise the cache is stale, so use the click
        // event itself.
        if (e.detail === 0 && keyboardEvent &&
            keyboardEvent.eventPhase === Event.AT_TARGET &&
            keyboardEvent.currentTarget === e.currentTarget) {
            return keyboardEvent;
        }
        return e;
    }
}
customElements.define(ComposeboxAimButtonElement.is, ComposeboxAimButtonElement);
