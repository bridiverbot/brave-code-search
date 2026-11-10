// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * `settings-checkbox` is a checkbox that controls a supplied preference.
 */
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SettingsBooleanControlMixin } from './settings_boolean_control_mixin.js';
import { getCss } from './settings_checkbox.css.js';
import { getHtml } from './settings_checkbox.html.js';
const SettingsCheckboxElementBase = SettingsBooleanControlMixin(CrLitElement);
export class SettingsCheckboxElement extends SettingsCheckboxElementBase {
    static get is() {
        return 'settings-checkbox';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * Alternative source for the sub-label that can contain html markup.
             * Only use with trusted input.
             */
            subLabelHtml: { type: String },
        };
    }
    #subLabelHtml_accessor_storage = '';
    get subLabelHtml() { return this.#subLabelHtml_accessor_storage; }
    set subLabelHtml(value) { this.#subLabelHtml_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('subLabel') ||
            changedProperties.has('subLabelHtml')) {
            this.$.checkbox.ariaDescription = this.$.subLabel.textContent;
        }
    }
    /** Focus on the inner cr-checkbox. */
    focus() {
        this.$.checkbox.focus();
    }
    onChange_(e) {
        this.checked = e.detail;
        this.notifyChangedByUserInteraction();
    }
    hasSubLabel_() {
        return !!this.subLabel || !!this.subLabelHtml;
    }
    sanitizeInnerHtml_() {
        return sanitizeInnerHtml(this.subLabelHtml, {
            attrs: [
                'id',
                'aria-label',
            ],
        });
    }
    onSubLabelClick_(e) {
        const target = e.target;
        if (target.tagName === 'A') {
            this.fire('sub-label-link-clicked', { id: target.id });
            e.preventDefault();
            // Don't let link click events from the sub-label reach the checkbox.
            e.stopPropagation();
        }
    }
}
customElements.define(SettingsCheckboxElement.is, SettingsCheckboxElement);
