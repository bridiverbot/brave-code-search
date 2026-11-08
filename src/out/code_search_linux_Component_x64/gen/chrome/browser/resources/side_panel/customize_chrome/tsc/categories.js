// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './check_mark_wrapper.js';
import '/strings.m.js';
import './wallpaper_search/wallpaper_search_tile.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './categories.css.js';
import { getHtml } from './categories.html.js';
import { CustomizeChromeAction, NtpImageType, recordCustomizeChromeAction, recordCustomizeChromeImageError } from './common.js';
import { browserProxyFactory } from './customize_chrome.mojom-webui.js';
import { WindowProxy } from './window_proxy.js';
export var CategoryType;
(function (CategoryType) {
    CategoryType[CategoryType["NONE"] = 0] = "NONE";
    CategoryType[CategoryType["CLASSIC"] = 1] = "CLASSIC";
    CategoryType[CategoryType["LOCAL"] = 2] = "LOCAL";
    CategoryType[CategoryType["COLOR"] = 3] = "COLOR";
    CategoryType[CategoryType["COLLECTION"] = 4] = "COLLECTION";
    CategoryType[CategoryType["WALLPAPER_SEARCH"] = 5] = "WALLPAPER_SEARCH";
})(CategoryType || (CategoryType = {}));
export const CHROME_THEME_COLLECTION_ELEMENT_ID = 'CustomizeChromeUI::kChromeThemeCollectionElementId';
export const CHANGE_CHROME_THEME_CLASSIC_ELEMENT_ID = 'CustomizeChromeUI::kChangeChromeThemeClassicElementId';
const CategoriesElementBase = I18nMixinLit(HelpBubbleMixinLit(CrLitElement));
export class CategoriesElement extends CategoriesElementBase {
    static get is() {
        return 'customize-chrome-categories';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            collections_: { type: Array },
            theme_: { type: Object },
            selectedCategory_: { type: Object },
            isClassicChromeSelected_: { type: Boolean },
            isLocalImageSelected_: { type: Boolean },
            isWallpaperSearchSelected_: { type: Boolean },
            wallpaperSearchEnabled_: { type: Boolean },
        };
    }
    #collections__accessor_storage = [];
    get collections_() { return this.#collections__accessor_storage; }
    set collections_(value) { this.#collections__accessor_storage = value; }
    #selectedCategory__accessor_storage = { type: CategoryType.NONE };
    get selectedCategory_() { return this.#selectedCategory__accessor_storage; }
    set selectedCategory_(value) { this.#selectedCategory__accessor_storage = value; }
    #theme__accessor_storage = null;
    get theme_() { return this.#theme__accessor_storage; }
    set theme_(value) { this.#theme__accessor_storage = value; }
    #isClassicChromeSelected__accessor_storage = false;
    get isClassicChromeSelected_() { return this.#isClassicChromeSelected__accessor_storage; }
    set isClassicChromeSelected_(value) { this.#isClassicChromeSelected__accessor_storage = value; }
    #isLocalImageSelected__accessor_storage = false;
    get isLocalImageSelected_() { return this.#isLocalImageSelected__accessor_storage; }
    set isLocalImageSelected_(value) { this.#isLocalImageSelected__accessor_storage = value; }
    #isWallpaperSearchSelected__accessor_storage = false;
    get isWallpaperSearchSelected_() { return this.#isWallpaperSearchSelected__accessor_storage; }
    set isWallpaperSearchSelected_(value) { this.#isWallpaperSearchSelected__accessor_storage = value; }
    #wallpaperSearchEnabled__accessor_storage = loadTimeData.getBoolean('wallpaperSearchEnabled');
    get wallpaperSearchEnabled_() { return this.#wallpaperSearchEnabled__accessor_storage; }
    set wallpaperSearchEnabled_(value) { this.#wallpaperSearchEnabled__accessor_storage = value; }
    imageErrorDetectionEnabled_ = loadTimeData.getBoolean('imageErrorDetectionEnabled');
    apiProxy_ = browserProxyFactory.getInstance();
    previewImageLoadStartEpoch_;
    setThemeListenerId_ = null;
    constructor() {
        super();
        this.previewImageLoadStartEpoch_ = WindowProxy.getInstance().now();
        this.apiProxy_.handler.getBackgroundCollections().then(({ collections }) => {
            this.collections_ = collections;
        });
    }
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
        this.apiProxy_.callbackRouter.removeListener(this.setThemeListenerId_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        this.selectedCategory_ = this.computeSelectedCategory_();
        this.isClassicChromeSelected_ =
            this.selectedCategory_.type === CategoryType.CLASSIC;
        this.isLocalImageSelected_ =
            this.selectedCategory_.type === CategoryType.LOCAL;
        this.isWallpaperSearchSelected_ =
            this.selectedCategory_.type === CategoryType.WALLPAPER_SEARCH;
    }
    firstUpdated() {
        this.registerHelpBubble(CHANGE_CHROME_THEME_CLASSIC_ELEMENT_ID, '#classicChromeTile');
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('collections_') &&
            this.collections_.length > 0) {
            this.onCollectionsRendered_();
        }
    }
    focusOnBackButton() {
        this.$.heading.getBackButton().focus();
    }
    onCollectionsRendered_() {
        const collections = this.shadowRoot.querySelectorAll('.collection');
        if (collections.length >= 5) {
            this.registerHelpBubble(CHROME_THEME_COLLECTION_ELEMENT_ID, collections[4]);
        }
    }
    shouldShowCollection_(itemLoaded) {
        return !this.imageErrorDetectionEnabled_ || itemLoaded;
    }
    onPreviewImageLoad_(e) {
        if (this.imageErrorDetectionEnabled_) {
            const index = Number(e.currentTarget.dataset['index']);
            assert(this.collections_[index]);
            this.collections_[index].imageVerified = true;
            this.requestUpdate();
        }
        chrome.metricsPrivate.recordValue({
            metricName: 'NewTabPage.Images.ShownTime.CollectionPreviewImage',
            type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LOG,
            min: 1,
            max: 60000, // 60 seconds.
            buckets: 100,
        }, Math.floor(WindowProxy.getInstance().now() -
            this.previewImageLoadStartEpoch_));
    }
    onPreviewImageError_(e) {
        if (!this.imageErrorDetectionEnabled_) {
            return;
        }
        recordCustomizeChromeImageError(NtpImageType.COLLECTIONS);
        const index = Number(e.currentTarget.dataset['index']);
        assert(this.collections_[index]);
        this.apiProxy_.handler
            .getReplacementCollectionPreviewImage(this.collections_[index].id)
            .then(({ previewImageUrl }) => {
            if (previewImageUrl) {
                this.collections_[index].previewImageUrl = previewImageUrl;
                this.requestUpdate();
            }
        });
    }
    computeSelectedCategory_() {
        if (!this.theme_ || this.theme_.thirdPartyThemeInfo) {
            return { type: CategoryType.NONE };
        }
        if (!this.theme_.backgroundImage) {
            if (!this.theme_.foregroundColor) {
                return { type: CategoryType.CLASSIC };
            }
            return { type: CategoryType.COLOR };
        }
        if (this.theme_.backgroundImage.isUploadedImage) {
            return this.theme_.backgroundImage.localBackgroundId ?
                { type: CategoryType.WALLPAPER_SEARCH } :
                { type: CategoryType.LOCAL };
        }
        if (this.theme_.backgroundImage.collectionId) {
            return {
                type: CategoryType.COLLECTION,
                collectionId: this.theme_.backgroundImage.collectionId,
            };
        }
        return { type: CategoryType.NONE };
    }
    isCollectionSelected_(id) {
        return this.selectedCategory_.type === CategoryType.COLLECTION &&
            this.selectedCategory_.collectionId === id;
    }
    onClassicChromeClick_() {
        recordCustomizeChromeAction(CustomizeChromeAction.CATEGORIES_DEFAULT_CHROME_SELECTED);
        this.apiProxy_.handler.setDefaultColor();
        this.apiProxy_.handler.removeBackgroundImage();
    }
    onWallpaperSearchClick_() {
        recordCustomizeChromeAction(CustomizeChromeAction.CATEGORIES_WALLPAPER_SEARCH_SELECTED);
        this.dispatchEvent(new Event('wallpaper-search-select'));
    }
    async onUploadImageClick_() {
        recordCustomizeChromeAction(CustomizeChromeAction.CATEGORIES_UPLOAD_IMAGE_SELECTED);
        chrome.metricsPrivate.recordUserAction('NTPRicherPicker.Backgrounds.UploadClicked');
        const { success } = await this.apiProxy_.handler.chooseLocalCustomBackground();
        if (success) {
            const announcer = getAnnouncerInstance();
            announcer.announce(this.i18n('updatedToUploadedImage'));
            this.dispatchEvent(new Event('local-image-upload'));
        }
    }
    onCollectionClick_(e) {
        const index = Number(e.currentTarget.dataset['index']);
        recordCustomizeChromeAction(CustomizeChromeAction.CATEGORIES_FIRST_PARTY_COLLECTION_SELECTED);
        this.dispatchEvent(new CustomEvent('collection-select', { detail: this.collections_[index] }));
    }
    onChromeWebStoreClick_() {
        this.apiProxy_.handler.openChromeWebStore();
    }
    onBackButtonClick_() {
        this.dispatchEvent(new Event('back-click'));
    }
}
customElements.define(CategoriesElement.is, CategoriesElement);
