// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import './check_mark_wrapper.js';
import '/strings.m.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CustomizeChromeAction, NtpImageType, recordCustomizeChromeAction, recordCustomizeChromeImageError } from './common.js';
import { browserProxyFactory } from './customize_chrome.mojom-webui.js';
import { getCss } from './themes.css.js';
import { getHtml } from './themes.html.js';
import { WindowProxy } from './window_proxy.js';
export const CHROME_THEME_ELEMENT_ID = 'CustomizeChromeUI::kChromeThemeElementId';
export const CHROME_THEME_BACK_ELEMENT_ID = 'CustomizeChromeUI::kChromeThemeBackElementId';
const ThemesElementBase = HelpBubbleMixinLit(CrLitElement);
export class ThemesElement extends ThemesElementBase {
    static get is() {
        return 'customize-chrome-themes';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selectedCollection: { type: Object },
            header_: { type: String },
            imageErrorDetectionEnabled_: { type: Boolean },
            isRefreshToggleChecked_: { type: Boolean },
            theme_: { type: Object },
            themes_: { type: Array },
        };
    }
    #selectedCollection_accessor_storage = null;
    get selectedCollection() { return this.#selectedCollection_accessor_storage; }
    set selectedCollection(value) { this.#selectedCollection_accessor_storage = value; }
    #header__accessor_storage = '';
    get header_() { return this.#header__accessor_storage; }
    set header_(value) { this.#header__accessor_storage = value; }
    #imageErrorDetectionEnabled__accessor_storage = loadTimeData.getBoolean('imageErrorDetectionEnabled');
    get imageErrorDetectionEnabled_() { return this.#imageErrorDetectionEnabled__accessor_storage; }
    set imageErrorDetectionEnabled_(value) { this.#imageErrorDetectionEnabled__accessor_storage = value; }
    #isRefreshToggleChecked__accessor_storage = false;
    get isRefreshToggleChecked_() { return this.#isRefreshToggleChecked__accessor_storage; }
    set isRefreshToggleChecked_(value) { this.#isRefreshToggleChecked__accessor_storage = value; }
    #theme__accessor_storage;
    get theme_() { return this.#theme__accessor_storage; }
    set theme_(value) { this.#theme__accessor_storage = value; }
    #themes__accessor_storage = [];
    get themes_() { return this.#themes__accessor_storage; }
    set themes_(value) { this.#themes__accessor_storage = value; }
    apiProxy_ = browserProxyFactory.getInstance();
    previewImageLoadStartEpoch_ = -1;
    setThemeListenerId_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.setThemeListenerId_ =
            this.apiProxy_.callbackRouter.setTheme.addListener(theme => {
                this.theme_ = theme;
            });
        this.apiProxy_.handler.updateTheme();
        FocusOutlineManager.forDocument(document);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setThemeListenerId_);
        this.apiProxy_.callbackRouter.removeListener(this.setThemeListenerId_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('selectedCollection')) {
            this.onCollectionChange_();
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('theme_') ||
            changedProperties.has('selectedCollection')) {
            this.isRefreshToggleChecked_ = this.computeIsRefreshToggleChecked_();
        }
    }
    firstUpdated() {
        this.registerHelpBubble(CHROME_THEME_BACK_ELEMENT_ID, this.$.heading.getBackButton());
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('themes_') && this.themes_.length > 0) {
            this.onThemesRendered_();
        }
    }
    focusOnBackButton() {
        this.$.heading.getBackButton().focus();
    }
    onThemesRendered_() {
        const firstTile = this.shadowRoot.querySelector('.tile.theme');
        if (firstTile) {
            this.registerHelpBubble(CHROME_THEME_ELEMENT_ID, firstTile);
        }
    }
    shouldShowTheme_(itemLoaded) {
        return !this.imageErrorDetectionEnabled_ || itemLoaded;
    }
    onPreviewImageLoad_(e) {
        if (this.imageErrorDetectionEnabled_) {
            const index = Number(e.currentTarget.dataset['index']);
            assert(this.themes_[index]);
            this.themes_[index].imageVerified = true;
            this.requestUpdate();
        }
        chrome.metricsPrivate.recordValue({
            metricName: 'NewTabPage.Images.ShownTime.ThemePreviewImage',
            type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LOG,
            min: 1,
            max: 60000, // 60 seconds.
            buckets: 100,
        }, Math.floor(WindowProxy.getInstance().now() -
            this.previewImageLoadStartEpoch_));
    }
    onPreviewImageError_() {
        if (this.imageErrorDetectionEnabled_) {
            recordCustomizeChromeImageError(NtpImageType.BACKGROUND_IMAGE);
        }
    }
    onCollectionChange_() {
        this.header_ = '';
        this.themes_ = [];
        if (this.selectedCollection) {
            this.previewImageLoadStartEpoch_ = WindowProxy.getInstance().now();
            this.apiProxy_.handler.getBackgroundImages(this.selectedCollection.id)
                .then(({ images }) => {
                this.themes_ = images;
            });
            this.header_ = this.selectedCollection.label;
        }
    }
    onBackButtonClick_() {
        this.dispatchEvent(new Event('back-click'));
    }
    onThemeClick_(e) {
        const index = Number(e.currentTarget.dataset['index']);
        const theme = this.themes_[index];
        recordCustomizeChromeAction(CustomizeChromeAction.FIRST_PARTY_COLLECTION_THEME_SELECTED);
        const { attribution1, attribution2, attributionUrl, imageUrl, previewImageUrl, collectionId, } = theme;
        this.apiProxy_.handler.setBackgroundImage(attribution1, attribution2, attributionUrl, imageUrl, previewImageUrl, collectionId);
    }
    computeIsRefreshToggleChecked_() {
        if (!this.selectedCollection) {
            return false;
        }
        return !!this.theme_ && !!this.theme_.backgroundImage &&
            this.theme_.backgroundImage.dailyRefreshEnabled &&
            this.selectedCollection.id === this.theme_.backgroundImage.collectionId;
    }
    onRefreshDailyToggleChange_(e) {
        this.apiProxy_.handler.setDailyRefreshCollectionId(e.detail ? this.selectedCollection.id : '');
    }
    isThemeSelected_(url) {
        return !!this.theme_ && !this.theme_.thirdPartyThemeInfo &&
            !!this.theme_.backgroundImage &&
            this.theme_?.backgroundImage.url === url &&
            !this.isRefreshToggleChecked_;
    }
    onThemeFocus_(e) {
        if (!e.target.matches(':focus-visible')) {
            return;
        }
        const tile = e.currentTarget;
        const index = Number(tile.dataset['index']);
        const theme = this.themes_[index];
        if (!theme) {
            return;
        }
        this.$.themeTooltip.textContent = theme.attribution1;
        this.$.themeTooltip.target = tile;
        this.$.themeTooltip.show();
    }
    onThemeBlur_() {
        this.$.themeTooltip.hide();
    }
}
customElements.define(ThemesElement.is, ThemesElement);
