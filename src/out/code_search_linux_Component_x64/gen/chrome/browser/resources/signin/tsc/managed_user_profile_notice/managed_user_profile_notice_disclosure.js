// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './managed_user_profile_notice_disclosure.css.js';
import { getHtml } from './managed_user_profile_notice_disclosure.html.js';
const ManagedUserProfileNoticeDisclosureElementBase = I18nMixinLit(CrLitElement);
export class ManagedUserProfileNoticeDisclosureElement extends ManagedUserProfileNoticeDisclosureElementBase {
    static get is() {
        return 'managed-user-profile-notice-disclosure';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            showEnterpriseBadge: { type: Boolean },
            pictureUrl: { type: String },
            title: { type: String },
            subtitle: { type: String },
            disclosureTitle_: { type: String },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #showEnterpriseBadge_accessor_storage = false;
    get showEnterpriseBadge() { return this.#showEnterpriseBadge_accessor_storage; }
    set showEnterpriseBadge(value) { this.#showEnterpriseBadge_accessor_storage = value; }
    #pictureUrl_accessor_storage = '';
    get pictureUrl() { return this.#pictureUrl_accessor_storage; }
    set pictureUrl(value) { this.#pictureUrl_accessor_storage = value; }
    #title_accessor_storage = '';
    get title() { return this.#title_accessor_storage; }
    set title(value) { this.#title_accessor_storage = value; }
    #subtitle_accessor_storage = '';
    get subtitle() { return this.#subtitle_accessor_storage; }
    set subtitle(value) { this.#subtitle_accessor_storage = value; }
    #disclosureTitle__accessor_storage = '';
    get disclosureTitle_() { return this.#disclosureTitle__accessor_storage; }
    set disclosureTitle_(value) { this.#disclosureTitle__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    firstUpdated() {
        const titleElement = this.shadowRoot.querySelector('.title');
        assert(titleElement);
        titleElement.focus();
    }
}
customElements.define(ManagedUserProfileNoticeDisclosureElement.is, ManagedUserProfileNoticeDisclosureElement);
