// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_components/cr_lottie/cr_lottie.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AppMode, ManagedUserProfileNoticeBrowserProxyImpl } from './managed_user_profile_notice_browser_proxy.js';
import { getCss } from './managed_user_profile_notice_disclosure_refresh.css.js';
import { getHtml } from './managed_user_profile_notice_disclosure_refresh.html.js';
const ManagedUserProfileNoticeDisclosureRefreshElementBase = I18nMixinLit(CrLitElement);
export class ManagedUserProfileNoticeDisclosureRefreshElement extends ManagedUserProfileNoticeDisclosureRefreshElementBase {
    static get is() {
        return 'managed-user-profile-notice-disclosure-refresh';
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
            appMode: {
                type: String,
                reflect: true,
                attribute: 'app-mode',
            },
            revampEnabled_: {
                type: Boolean,
                reflect: true,
                attribute: 'revamp-enabled',
            },
            isDarkMode_: { type: Boolean },
            disableAnimations_: { type: Boolean },
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
    #appMode_accessor_storage = AppMode.FIRST_RUN;
    get appMode() { return this.#appMode_accessor_storage; }
    set appMode(value) { this.#appMode_accessor_storage = value; }
    #revampEnabled__accessor_storage = loadTimeData.getBoolean('isFirstRunDesktopRevampEnabled');
    get revampEnabled_() { return this.#revampEnabled__accessor_storage; }
    set revampEnabled_(value) { this.#revampEnabled__accessor_storage = value; }
    #isDarkMode__accessor_storage = false;
    get isDarkMode_() { return this.#isDarkMode__accessor_storage; }
    set isDarkMode_(value) { this.#isDarkMode__accessor_storage = value; }
    #disableAnimations__accessor_storage = loadTimeData.getBoolean('disableAnimations');
    get disableAnimations_() { return this.#disableAnimations__accessor_storage; }
    set disableAnimations_(value) { this.#disableAnimations__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    browserProxy_ = ManagedUserProfileNoticeBrowserProxyImpl.getInstance();
    darkModeListener_;
    matchMedia_;
    constructor() {
        super();
        this.matchMedia_ =
            this.browserProxy_.matchMedia('(prefers-color-scheme: dark)');
        this.isDarkMode_ = this.matchMedia_.matches;
        this.darkModeListener_ = (e) => {
            this.isDarkMode_ = e.matches;
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.matchMedia_.addEventListener('change', this.darkModeListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.matchMedia_.removeEventListener('change', this.darkModeListener_);
    }
    getAnimationUrl_() {
        return this.isDarkMode_ ?
            'animations/avatar_sign_in_celebration_dark.json' :
            'animations/avatar_sign_in_celebration.json';
    }
    shouldShowAnimations_() {
        return this.appMode === AppMode.FIRST_RUN && this.revampEnabled_;
    }
    firstUpdated() {
        const titleElement = this.shadowRoot.querySelector('.title');
        assert(titleElement);
        titleElement.focus();
    }
}
customElements.define(ManagedUserProfileNoticeDisclosureRefreshElement.is, ManagedUserProfileNoticeDisclosureRefreshElement);
