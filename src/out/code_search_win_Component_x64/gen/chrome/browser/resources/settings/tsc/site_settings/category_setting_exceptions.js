// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'category-setting-exceptions' is the polymer element for showing a certain
 * category of exceptions under Site Settings.
 */
import './site_list.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './category_setting_exceptions.css.js';
import { getHtml } from './category_setting_exceptions.html.js';
import { ContentSettingsTypes } from './constants.js';
import { DefaultSettingSource } from './site_settings_browser_proxy.js';
import { SiteSettingsMixinLit } from './site_settings_mixin_lit.js';
const CategorySettingExceptionsElementBase = SiteSettingsMixinLit(WebUiListenerMixinLit(CrLitElement));
export class CategorySettingExceptionsElement extends CategorySettingExceptionsElementBase {
    static get is() {
        return 'category-setting-exceptions';
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
             * The string description shown below the header.
             */
            description: { type: String },
            /**
             * Some content types (like Location) do not allow the user to manually
             * edit the exception list from within Settings.
             */
            readOnlyList: { type: Boolean },
            /**
             * True if the default value is managed by a policy.
             */
            defaultManaged_: { type: Boolean },
            /**
             * The heading text for the blocked exception list.
             */
            blockHeader: { type: String },
            /**
             * The heading text for the allowed exception list.
             */
            allowHeader: { type: String },
            searchFilter: { type: String },
        };
    }
    #description_accessor_storage = loadTimeData.getString('siteSettingsCustomizedBehaviorsDescription');
    get description() { return this.#description_accessor_storage; }
    set description(value) { this.#description_accessor_storage = value; }
    #readOnlyList_accessor_storage = false;
    get readOnlyList() { return this.#readOnlyList_accessor_storage; }
    set readOnlyList(value) { this.#readOnlyList_accessor_storage = value; }
    #defaultManaged__accessor_storage = false;
    get defaultManaged_() { return this.#defaultManaged__accessor_storage; }
    set defaultManaged_(value) { this.#defaultManaged__accessor_storage = value; }
    #blockHeader_accessor_storage = '';
    get blockHeader() { return this.#blockHeader_accessor_storage; }
    set blockHeader(value) { this.#blockHeader_accessor_storage = value; }
    #allowHeader_accessor_storage = '';
    get allowHeader() { return this.#allowHeader_accessor_storage; }
    set allowHeader(value) { this.#allowHeader_accessor_storage = value; }
    #searchFilter_accessor_storage = '';
    get searchFilter() { return this.#searchFilter_accessor_storage; }
    set searchFilter(value) { this.#searchFilter_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('contentSettingCategoryChanged', () => this.updateDefaultManaged_());
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('category')) {
            this.updateDefaultManaged_();
        }
    }
    /**
     * Hides particular category subtypes if |this.category| does not support the
     * content setting of that type.
     */
    shouldShowAllowSiteList_() {
        // TODO(crbug.com/40101962): This function should return true when the
        // feature flag for Persistent Permissions is removed.
        return this.category !== ContentSettingsTypes.FILE_SYSTEM_WRITE &&
            this.category !== ContentSettingsTypes.INLINE_CUE_MENU;
    }
    /**
     * Updates whether or not the default value is managed by a policy.
     */
    updateDefaultManaged_() {
        if (this.category === undefined) {
            return;
        }
        this.browserProxy.getDefaultValueForContentType(this.category)
            .then(update => {
            this.defaultManaged_ = update.source === DefaultSettingSource.POLICY;
        });
    }
    /**
     * Returns true if this list is explicitly marked as readonly by a consumer
     * of this component or if the default value for these exceptions are managed
     * by a policy. User should not be able to set exceptions to managed default
     * values.
     */
    getReadOnlyList_() {
        return this.readOnlyList || this.defaultManaged_;
    }
}
customElements.define(CategorySettingExceptionsElement.is, CategorySettingExceptionsElement);
