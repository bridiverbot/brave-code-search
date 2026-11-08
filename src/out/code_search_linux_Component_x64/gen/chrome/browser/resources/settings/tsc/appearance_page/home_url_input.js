// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * `home-url-input` is a single-line text field intending to be used with
 * prefs.homepage
 */
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { CrPolicyPrefMixinLit } from '/shared/settings/controls/cr_policy_pref_mixin_lit.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AppearanceBrowserProxyImpl } from './appearance_browser_proxy.js';
import { getCss } from './home_url_input.css.js';
import { getHtml } from './home_url_input.html.js';
const HOMEPAGE_PREF_KEY = 'homepage';
const HomeUrlInputElementBase = CrPolicyPrefMixinLit(PrefServiceObserverMixinLit(CrLitElement));
export class HomeUrlInputElement extends HomeUrlInputElementBase {
    static get is() {
        return 'home-url-input';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            pref: { type: Object },
            /* Set to true to disable editing the input. */
            disabled: {
                type: Boolean,
                reflect: true,
            },
            canTab: { type: Boolean },
            invalid: { type: Boolean },
            /* The current value of the input, reflected to/from |pref|. */
            value: { type: String },
            label: { type: String },
        };
    }
    #pref_accessor_storage = undefined;
    get pref() { return this.#pref_accessor_storage; }
    set pref(value) { this.#pref_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #canTab_accessor_storage = false;
    get canTab() { return this.#canTab_accessor_storage; }
    set canTab(value) { this.#canTab_accessor_storage = value; }
    #invalid_accessor_storage = false;
    get invalid() { return this.#invalid_accessor_storage; }
    set invalid(value) { this.#invalid_accessor_storage = value; }
    #value_accessor_storage = '';
    get value() { return this.#value_accessor_storage; }
    set value(value) { this.#value_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    browserProxy_ = AppearanceBrowserProxyImpl.getInstance();
    constructor() {
        super();
        this.noExtensionIndicator = true; // Prevent double indicator.
    }
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref(HOMEPAGE_PREF_KEY, 'pref');
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('pref')) {
            this.setInputValueFromPref_();
        }
    }
    /**
     * Focuses the 'input' element.
     */
    focus() {
        this.$.input.focus();
    }
    setInputValueFromPref_() {
        assert(this.pref);
        assert(this.pref.type === chrome.settingsPrivate.PrefType.URL);
        this.value = this.pref.value;
    }
    /**
     * Gets a tab index for this control if it can be tabbed to.
     */
    getTabindex_() {
        return this.canTab ? 0 : -1;
    }
    /**
     * Change event handler for cr-input. Updates the pref value.
     * settings-input uses the change event because it is fired by the Enter key.
     */
    onChange_() {
        if (this.invalid) {
            this.resetValue_();
            return;
        }
        assert(this.pref.type === chrome.settingsPrivate.PrefType.URL);
        PrefService.getInstance().setPrefValue(HOMEPAGE_PREF_KEY, this.value);
    }
    resetValue_() {
        this.invalid = false;
        this.setInputValueFromPref_();
        this.$.input.blur();
    }
    /**
     * Keydown handler to specify enter-key and escape-key interactions.
     */
    onKeydown_(event) {
        // If pressed enter when input is invalid, do not trigger on-change.
        if (event.key === 'Enter' && this.invalid) {
            event.preventDefault();
        }
        else if (event.key === 'Escape') {
            this.resetValue_();
        }
        event.stopPropagation();
    }
    /** @return Whether the element should be disabled. */
    isDisabled_() {
        return this.disabled || this.isPrefEnforced();
    }
    onInput_() {
        if (this.value === '') {
            this.invalid = false;
            return;
        }
        this.browserProxy_.validateStartupPage(this.value).then(isValid => {
            this.invalid = !isValid;
        });
    }
    onKeyup_(e) {
        e.stopPropagation();
    }
    onKeypress_(e) {
        e.stopPropagation();
    }
    onValueChanged_(e) {
        this.value = e.detail.value;
    }
    onInvalidChanged_(e) {
        this.invalid = e.detail.value;
    }
}
customElements.define(HomeUrlInputElement.is, HomeUrlInputElement);
