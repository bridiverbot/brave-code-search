// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * `settings-toggle-button` is a toggle that controls a supplied preference.
 */
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { assert } from 'chrome://resources/js/assert.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { SettingsBooleanControlMixin } from './settings_boolean_control_mixin.js';
import { getCss } from './settings_toggle_button.css.js';
import { getHtml } from './settings_toggle_button.html.js';
const SettingsToggleButtonElementBase = SettingsBooleanControlMixin(CrLitElement);
export class SettingsToggleButtonElement extends SettingsToggleButtonElementBase {
    static get is() {
        return 'settings-toggle-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ariaLabel: { type: String },
            ariaShowLabel: { type: Boolean },
            ariaShowSublabel: { type: Boolean },
            elideLabel: {
                type: Boolean,
                reflect: true,
            },
            learnMoreUrl: { type: String },
            subLabelWithLink: { type: String },
            learnMoreAriaLabel: { type: String },
            icon: { type: String },
            subLabelIcon: { type: String },
            /**
             * If true, the host element does not get a click event handler and the
             * client is responsible for determining their own click logic. Thus when
             * true, clicking on the setting row does not toggle the setting pref.
             * Note, this boolean is only used on firstUpdated() callback, and any
             * changes after that have no effect.
             */
            noToggleOnHostClick: { type: Boolean },
        };
    }
    #ariaLabel_accessor_storage = '';
    get ariaLabel() { return this.#ariaLabel_accessor_storage; }
    set ariaLabel(value) { this.#ariaLabel_accessor_storage = value; }
    #ariaShowLabel_accessor_storage = false;
    get ariaShowLabel() { return this.#ariaShowLabel_accessor_storage; }
    set ariaShowLabel(value) { this.#ariaShowLabel_accessor_storage = value; }
    #ariaShowSublabel_accessor_storage = false;
    get ariaShowSublabel() { return this.#ariaShowSublabel_accessor_storage; }
    set ariaShowSublabel(value) { this.#ariaShowSublabel_accessor_storage = value; }
    #elideLabel_accessor_storage = false;
    get elideLabel() { return this.#elideLabel_accessor_storage; }
    set elideLabel(value) { this.#elideLabel_accessor_storage = value; }
    #icon_accessor_storage = '';
    get icon() { return this.#icon_accessor_storage; }
    set icon(value) { this.#icon_accessor_storage = value; }
    #learnMoreAriaLabel_accessor_storage = '';
    get learnMoreAriaLabel() { return this.#learnMoreAriaLabel_accessor_storage; }
    set learnMoreAriaLabel(value) { this.#learnMoreAriaLabel_accessor_storage = value; }
    #learnMoreUrl_accessor_storage = '';
    get learnMoreUrl() { return this.#learnMoreUrl_accessor_storage; }
    set learnMoreUrl(value) { this.#learnMoreUrl_accessor_storage = value; }
    #subLabelWithLink_accessor_storage = '';
    get subLabelWithLink() { return this.#subLabelWithLink_accessor_storage; }
    set subLabelWithLink(value) { this.#subLabelWithLink_accessor_storage = value; }
    #subLabelIcon_accessor_storage = '';
    get subLabelIcon() { return this.#subLabelIcon_accessor_storage; }
    set subLabelIcon(value) { this.#subLabelIcon_accessor_storage = value; }
    #noToggleOnHostClick_accessor_storage = false;
    get noToggleOnHostClick() { return this.#noToggleOnHostClick_accessor_storage; }
    set noToggleOnHostClick(value) { this.#noToggleOnHostClick_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('ariaLabel')) {
            this.onAriaLabelSet_();
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        // If the settings toggle is noToggleOnHostClick then do not update the
        // setting pref on click. Instead let parent code use a custom click
        // handler as needed.
        if (!this.noToggleOnHostClick) {
            this.addEventListener('click', this.onHostClick_);
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('disabled') || changedProperties.has('pref')) {
            this.toggleAttribute('effectively-disabled_', this.controlDisabled());
        }
    }
    focus() {
        this.$.control.focus();
    }
    /**
     * Removes the aria-label attribute if it's added by $i18n{...}.
     */
    onAriaLabelSet_() {
        if (this.hasAttribute('aria-label')) {
            const ariaLabel = this.ariaLabel;
            this.removeAttribute('aria-label');
            this.ariaLabel = ariaLabel;
        }
    }
    getAriaLabel_() {
        return this.ariaLabel || this.label;
    }
    getLearnMoreAriaLabelledBy_() {
        return this.learnMoreAriaLabel ? 'learn-more-aria-label' :
            'sub-label-text learn-more';
    }
    getBubbleAnchor() {
        return this.$.control;
    }
    /**
     * Handles non cr-toggle button clicks (cr-toggle handles its own click events
     * which don't bubble).
     */
    onHostClick_(e) {
        assert(!this.noToggleOnHostClick);
        e.stopPropagation();
        if (this.controlDisabled()) {
            return;
        }
        this.updateCheckedAndNotify_(!this.checked);
    }
    onLearnMoreClick_(e) {
        e.stopPropagation();
        this.fire('learn-more-clicked');
    }
    /**
     * Set up the contents of sub label with link.
     */
    getSubLabelWithLinkContent_() {
        return sanitizeInnerHtml(this.subLabelWithLink, {
            attrs: [
                'id',
                'is',
                'aria-description',
                'aria-hidden',
                'aria-label',
                'aria-labelledby',
                'tabindex',
            ],
        });
    }
    onSubLabelTextWithLinkClick_(e) {
        const target = e.target;
        if (target.tagName === 'A') {
            this.fire('sub-label-link-clicked', target.id);
            e.preventDefault();
            e.stopPropagation();
        }
    }
    onChange_(e) {
        // Prevent cr-toggle's change event from propagating to the parent since
        // this element fires its own 'change' event.
        e.stopPropagation();
        this.updateCheckedAndNotify_(e.detail);
    }
    updateCheckedAndNotify_(checked) {
        this.checked = checked;
        this.notifyChangedByUserInteraction();
        this.fire('change', this.checked);
    }
}
customElements.define(SettingsToggleButtonElement.is, SettingsToggleButtonElement);
