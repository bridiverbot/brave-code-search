// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-category-default-radio-group' is the polymer element for showing
 * a certain category under Site Settings.
 */
import '../controls/collapse_radio_button.js';
import '../controls/settings_radio_group.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { ContentSettingsTypes } from './constants.js';
import { getCss } from './settings_category_default_radio_group.css.js';
import { getHtml } from './settings_category_default_radio_group.html.js';
import { DefaultSettingSource } from './site_settings_browser_proxy.js';
import { SiteSettingsMixinLit } from './site_settings_mixin_lit.js';
const SettingsCategoryDefaultRadioGroupElementBase = PrefServiceObserverMixinLit(SiteSettingsMixinLit(WebUiListenerMixinLit(CrLitElement)));
export class SettingsCategoryDefaultRadioGroupElement extends SettingsCategoryDefaultRadioGroupElementBase {
    static get is() {
        return 'settings-category-default-radio-group';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            header: { type: String },
            description: { type: String },
            // The default values here must be explicitly specified. The reason is
            // that even if the HTML for a specific category type does not supply,
            // say, an `allowOptionLabel`, the property cannot remain `undefined`, but
            // must be set to `null`, which causes the the computed property assigned
            // to the radio button's `hidden` attribute to be calculated.
            allowOptionLabel: { type: String },
            allowOptionSubLabel: { type: String },
            allowOptionIcon: { type: String },
            askOptionLabel: { type: String },
            askOptionSubLabel: { type: String },
            askOptionIcon: { type: String },
            blockOptionLabel: { type: String },
            blockOptionSubLabel: { type: String },
            blockOptionIcon: { type: String },
            selectedValue: {
                type: String,
                notify: true,
            },
            /**
             * Key of the synthetic preference used to keep track of the selected
             * content setting option.
             */
            prefKey_: { type: String },
        };
    }
    #header_accessor_storage = loadTimeData.getString('siteSettingsDefaultBehavior');
    get header() { return this.#header_accessor_storage; }
    set header(value) { this.#header_accessor_storage = value; }
    #description_accessor_storage = loadTimeData.getString('siteSettingsDefaultBehaviorDescription');
    get description() { return this.#description_accessor_storage; }
    set description(value) { this.#description_accessor_storage = value; }
    #allowOptionLabel_accessor_storage = '';
    get allowOptionLabel() { return this.#allowOptionLabel_accessor_storage; }
    set allowOptionLabel(value) { this.#allowOptionLabel_accessor_storage = value; }
    #allowOptionSubLabel_accessor_storage = '';
    get allowOptionSubLabel() { return this.#allowOptionSubLabel_accessor_storage; }
    set allowOptionSubLabel(value) { this.#allowOptionSubLabel_accessor_storage = value; }
    #allowOptionIcon_accessor_storage = '';
    get allowOptionIcon() { return this.#allowOptionIcon_accessor_storage; }
    set allowOptionIcon(value) { this.#allowOptionIcon_accessor_storage = value; }
    #askOptionLabel_accessor_storage = '';
    get askOptionLabel() { return this.#askOptionLabel_accessor_storage; }
    set askOptionLabel(value) { this.#askOptionLabel_accessor_storage = value; }
    #askOptionSubLabel_accessor_storage = '';
    get askOptionSubLabel() { return this.#askOptionSubLabel_accessor_storage; }
    set askOptionSubLabel(value) { this.#askOptionSubLabel_accessor_storage = value; }
    #askOptionIcon_accessor_storage = '';
    get askOptionIcon() { return this.#askOptionIcon_accessor_storage; }
    set askOptionIcon(value) { this.#askOptionIcon_accessor_storage = value; }
    #blockOptionLabel_accessor_storage = '';
    get blockOptionLabel() { return this.#blockOptionLabel_accessor_storage; }
    set blockOptionLabel(value) { this.#blockOptionLabel_accessor_storage = value; }
    #blockOptionSubLabel_accessor_storage = '';
    get blockOptionSubLabel() { return this.#blockOptionSubLabel_accessor_storage; }
    set blockOptionSubLabel(value) { this.#blockOptionSubLabel_accessor_storage = value; }
    #blockOptionIcon_accessor_storage = '';
    get blockOptionIcon() { return this.#blockOptionIcon_accessor_storage; }
    set blockOptionIcon(value) { this.#blockOptionIcon_accessor_storage = value; }
    #selectedValue_accessor_storage = '';
    get selectedValue() { return this.#selectedValue_accessor_storage; }
    set selectedValue(value) { this.#selectedValue_accessor_storage = value; }
    #prefKey__accessor_storage = '';
    get prefKey_() { return this.#prefKey__accessor_storage; }
    set prefKey_(value) { this.#prefKey__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('contentSettingCategoryChanged', async (category) => {
            if (category === this.category) {
                const defaultValue = await this.browserProxy.getDefaultValueForContentType(this.category);
                this.updatePref_(defaultValue);
            }
        });
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('category') && this.category !== undefined) {
            assert(!changedProperties.get('category'));
            this.initializePref_();
        }
    }
    async initializePref_() {
        assert(this.category);
        this.prefKey_ = `synthetic.settings.category_default.${this.category}`;
        this.addPrefObserver(this.prefKey_, pref => {
            this.selectedValue = pref.value;
        });
        const [defaultValue] = await Promise.all([
            this.browserProxy.getDefaultValueForContentType(this.category),
            PrefService.getInstance().whenInitialized(),
        ]);
        this.updatePref_(defaultValue);
    }
    getButtonClass_(subLabel) {
        return subLabel ? 'two-line' : '';
    }
    onSelectedRadioChange_() {
        assert(this.prefKey_);
        const pref = PrefService.getInstance().getPref(this.prefKey_);
        assert(pref.enforcement !== chrome.settingsPrivate.Enforcement.ENFORCED);
        assert(this.category);
        this.browserProxy.setDefaultValueForContentType(this.category, pref.value);
    }
    /**
     * Update the pref values from the content settings.
     */
    updatePref_(update) {
        if (!this.isConnected) {
            return;
        }
        const pref = {
            key: this.prefKey_,
            type: chrome.settingsPrivate.PrefType.STRING,
            value: update.setting,
        };
        if (update.source !== undefined &&
            update.source !== DefaultSettingSource.PREFERENCE) {
            pref.enforcement = chrome.settingsPrivate.Enforcement.ENFORCED;
            let controlledBy = chrome.settingsPrivate.ControlledBy.USER_POLICY;
            switch (update.source) {
                case DefaultSettingSource.POLICY:
                    controlledBy = chrome.settingsPrivate.ControlledBy.DEVICE_POLICY;
                    break;
                case DefaultSettingSource.SUPERVISED_USER:
                    controlledBy = chrome.settingsPrivate.ControlledBy.PARENT;
                    break;
                case DefaultSettingSource.EXTENSION:
                    controlledBy = chrome.settingsPrivate.ControlledBy.EXTENSION;
                    break;
                default:
                    break;
            }
            pref.controlledBy = controlledBy;
        }
        PrefService.getInstance().setSyntheticPref(pref);
    }
    /**
     * Check if the category is popups and the user is logged in guest mode.
     * Users in guest mode are not allowed to modify pop-ups content setting.
     */
    isRadioGroupDisabled_() {
        return this.category === ContentSettingsTypes.POPUPS &&
            loadTimeData.getBoolean('isGuest');
    }
}
customElements.define(SettingsCategoryDefaultRadioGroupElement.is, SettingsCategoryDefaultRadioGroupElement);
