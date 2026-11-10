// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './doodle_icons.html.js';
import { assert } from 'chrome://resources/js/assert.js';
import { skColorToRgba } from 'chrome://resources/js/color_utils.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './logo.css.js';
import { getHtml } from './logo.html.js';
import { browserProxyFactory, DoodleImageType } from './new_tab_page.mojom-webui.js';
import { $$ } from './utils.js';
import { WindowProxy } from './window_proxy.js';
// Shows the Google logo or a doodle if available.
export class LogoElement extends CrLitElement {
    static get is() {
        return 'ntp-logo';
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
             * If true displays the Google logo single-colored.
             */
            singleColored: {
                reflect: true,
                type: Boolean,
            },
            /**
             * Used to determine if we should display a dark mode doodle.
             */
            theme: { type: Object },
            loaded_: { type: Boolean },
            doodle_: { type: Object },
            imageDoodle_: { type: Object },
            showLogo_: { type: Boolean },
            showDoodle_: { type: Boolean },
            doodleBoxed_: {
                reflect: true,
                type: Boolean,
            },
            showTightDoodleBoxing_: {
                reflect: true,
                type: Boolean,
            },
            useGoogleLogo26_: {
                reflect: true,
                type: Boolean,
            },
            imageUrl_: { type: String },
            showAnimation_: { type: Boolean },
            showShareDialog_: { type: Boolean },
            imageDoodleTabIndex_: { type: Number },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #singleColored_accessor_storage = false;
    get singleColored() { return this.#singleColored_accessor_storage; }
    set singleColored(value) { this.#singleColored_accessor_storage = value; }
    #theme_accessor_storage = null;
    get theme() { return this.#theme_accessor_storage; }
    set theme(value) { this.#theme_accessor_storage = value; }
    #loaded__accessor_storage = false;
    get loaded_() { return this.#loaded__accessor_storage; }
    set loaded_(value) { this.#loaded__accessor_storage = value; }
    #doodle__accessor_storage = null;
    get doodle_() { return this.#doodle__accessor_storage; }
    set doodle_(value) { this.#doodle__accessor_storage = value; }
    #imageDoodle__accessor_storage = null;
    get imageDoodle_() { return this.#imageDoodle__accessor_storage; }
    set imageDoodle_(value) { this.#imageDoodle__accessor_storage = value; }
    #showLogo__accessor_storage = false;
    get showLogo_() { return this.#showLogo__accessor_storage; }
    set showLogo_(value) { this.#showLogo__accessor_storage = value; }
    #showDoodle__accessor_storage = false;
    get showDoodle_() { return this.#showDoodle__accessor_storage; }
    set showDoodle_(value) { this.#showDoodle__accessor_storage = value; }
    #doodleBoxed__accessor_storage = false;
    get doodleBoxed_() { return this.#doodleBoxed__accessor_storage; }
    set doodleBoxed_(value) { this.#doodleBoxed__accessor_storage = value; }
    #showTightDoodleBoxing__accessor_storage = loadTimeData.getBoolean('animatedDoodlesEnabled');
    get showTightDoodleBoxing_() { return this.#showTightDoodleBoxing__accessor_storage; }
    set showTightDoodleBoxing_(value) { this.#showTightDoodleBoxing__accessor_storage = value; }
    #useGoogleLogo26__accessor_storage = loadTimeData.getBoolean('useGoogleLogo26');
    get useGoogleLogo26_() { return this.#useGoogleLogo26__accessor_storage; }
    set useGoogleLogo26_(value) { this.#useGoogleLogo26__accessor_storage = value; }
    #imageUrl__accessor_storage = '';
    get imageUrl_() { return this.#imageUrl__accessor_storage; }
    set imageUrl_(value) { this.#imageUrl__accessor_storage = value; }
    #showAnimation__accessor_storage = false;
    get showAnimation_() { return this.#showAnimation__accessor_storage; }
    set showAnimation_(value) { this.#showAnimation__accessor_storage = value; }
    #showShareDialog__accessor_storage = false;
    get showShareDialog_() { return this.#showShareDialog__accessor_storage; }
    set showShareDialog_(value) { this.#showShareDialog__accessor_storage = value; }
    #imageDoodleTabIndex__accessor_storage = -1;
    get imageDoodleTabIndex_() { return this.#imageDoodleTabIndex__accessor_storage; }
    set imageDoodleTabIndex_(value) { this.#imageDoodleTabIndex__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    pageHandler_;
    imageClickParams_ = null;
    interactionLogUrl_ = null;
    shareId_ = null;
    constructor() {
        performance.mark('logo-creation-start');
        super();
        this.pageHandler_ = browserProxyFactory.getInstance().handler;
        this.pageHandler_.getDoodle().then(({ doodle }) => {
            this.doodle_ = doodle;
            this.loaded_ = true;
        });
    }
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        this.imageDoodle_ = this.computeImageDoodle_();
        this.imageUrl_ = this.computeImageUrl_();
        this.showAnimation_ = this.computeShowAnimation_();
        this.showDoodle_ = this.computeShowDoodle_();
        this.showLogo_ = this.computeShowLogo_();
        this.doodleBoxed_ = this.computeDoodleBoxed_();
        this.imageDoodleTabIndex_ = this.computeImageDoodleTabIndex_();
    }
    firstUpdated() {
        performance.measure('logo-creation', 'logo-creation-start');
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('imageDoodle_')) {
            this.onImageDoodleChange_();
        }
    }
    onImageDoodleChange_() {
        if (this.imageDoodle_) {
            this.style.setProperty('--ntp-logo-box-color', skColorToRgba(this.imageDoodle_.backgroundColor));
        }
        else {
            this.style.removeProperty('--ntp-logo-box-color');
        }
        // Users can enable/disable animated Doodles through accessibility settings,
        // therefore we need to keep the showAnimation_ property in sync.
        this.showAnimation_ = this.computeShowAnimation_();
        this.imageClickParams_ = null;
        this.interactionLogUrl_ = null;
        this.shareId_ = null;
    }
    computeImageDoodle_() {
        return this.doodle_ && this.doodle_.image && this.theme &&
            (this.theme.isDark ? this.doodle_.image.dark :
                this.doodle_.image.light) ||
            null;
    }
    computeShowLogo_() {
        return this.loaded_ && !this.showDoodle_;
    }
    computeShowDoodle_() {
        return !!this.imageDoodle_;
    }
    /**
     * @returns The NTP's background color or null if the NTP does not have
     * a single background color, e.g. when a background image is set.
     */
    computeBackgroundColor_() {
        if (!this.theme || !!this.theme.backgroundImage) {
            return null;
        }
        return this.theme.backgroundColor;
    }
    computeDoodleBoxed_() {
        if (!this.imageDoodle_) {
            return false;
        }
        const backgroundColor = this.computeBackgroundColor_();
        return !backgroundColor ||
            this.imageDoodle_.backgroundColor.value !== backgroundColor.value;
    }
    /**
     * Called when a simple or animated doodle was clicked. Starts animation if
     * clicking preview image of animated doodle. Otherwise, opens
     * doodle-associated URL in new tab/window.
     */
    onImageClick_() {
        if ($$(this, '#imageContainer').tabIndex < 0) {
            return;
        }
        assert(this.doodle_.image.onClickUrl);
        this.pageHandler_.onDoodleImageClicked(this.showAnimation_ ? DoodleImageType.kAnimation :
            DoodleImageType.kStatic, this.interactionLogUrl_);
        const onClickUrl = new URL(this.doodle_.image.onClickUrl);
        if (this.imageClickParams_) {
            for (const param of new URLSearchParams(this.imageClickParams_)) {
                onClickUrl.searchParams.append(param[0], param[1]);
            }
        }
        WindowProxy.getInstance().open(onClickUrl.toString());
    }
    onImageLoad_() {
        this.logImageRendered_(this.showAnimation_ ? DoodleImageType.kAnimation :
            DoodleImageType.kStatic, this.imageDoodle_.imageImpressionLogUrl);
    }
    async logImageRendered_(type, logUrl) {
        const { imageClickParams, interactionLogUrl, shareId } = await this.pageHandler_.onDoodleImageRendered(type, WindowProxy.getInstance().now(), logUrl);
        this.imageClickParams_ = imageClickParams;
        this.interactionLogUrl_ = interactionLogUrl;
        this.shareId_ = shareId;
    }
    onImageKeydown_(e) {
        if ([' ', 'Enter'].includes(e.key)) {
            this.onImageClick_();
        }
    }
    onShare_(e) {
        const doodleId = new URL(this.doodle_.image.onClickUrl).searchParams.get('ct');
        if (!doodleId) {
            return;
        }
        this.pageHandler_.onDoodleShared(e.detail, doodleId, this.shareId_);
    }
    computeImageUrl_() {
        return this.imageDoodle_ ? this.imageDoodle_.imageUrl : '';
    }
    computeShowAnimation_() {
        return !!this.imageDoodle_?.animationUrl;
    }
    async onShareButtonClick_(e) {
        e.stopPropagation();
        // <ntp-doodle-share-dialog> may be defined in lazy_load.js, which may not
        // have been loaded yet if the share button is clicked right after the NTP
        // loads. Wait for it to load before stamping the dialog.
        await WindowProxy.getInstance().ensureLazyLoaded();
        this.showShareDialog_ = true;
    }
    onShareDialogClose_() {
        this.showShareDialog_ = false;
    }
    computeImageDoodleTabIndex_() {
        return (this.doodle_?.image?.onClickUrl) ? 0 : -1;
    }
}
customElements.define(LogoElement.is, LogoElement);
