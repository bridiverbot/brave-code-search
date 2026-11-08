// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './theme_snapshot.js';
import './hover_button.js';
import '/strings.m.js'; // Required by <managed-dialog>.
import 'chrome://resources/cr_components/customize_color_scheme_mode/customize_color_scheme_mode.js';
import 'chrome://resources/cr_components/theme_color_picker/theme_color_picker.js';
import 'chrome://resources/cr_components/managed_dialog/managed_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './appearance.css.js';
import { getHtml } from './appearance.html.js';
import { CustomizeChromeAction, recordCustomizeChromeAction } from './common.js';
import { browserProxyFactory, NewTabPageType } from './customize_chrome.mojom-webui.js';
const AppearanceElementBase = I18nMixinLit(CrLitElement);
export class AppearanceElement extends AppearanceElementBase {
    static get is() {
        return 'customize-chrome-appearance';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            theme_: { type: Object },
            editThemeButtonText_: { type: String },
            thirdPartyThemeId_: {
                type: String,
                reflect: true,
            },
            thirdPartyThemeName_: {
                type: String,
                reflect: true,
            },
            showBottomDivider_: { type: Boolean },
            showClassicChromeButton_: { type: Boolean },
            showColorPicker_: { type: Boolean },
            showDeviceThemeToggle_: { type: Boolean },
            showThemeSnapshot_: { type: Boolean },
            showUploadedImageButton_: { type: Boolean },
            showSearchedImageButton_: { type: Boolean },
            showManagedButton_: { type: Boolean },
            showManagedDialog_: { type: Boolean },
            showEditTheme_: { type: Boolean },
            managedByName_: { type: String },
            managedByDesc_: { type: String },
            newTabPageType_: { type: Number },
            wallpaperSearchButtonEnabled_: {
                type: Boolean,
                reflect: true,
            },
            wallpaperSearchEnabled_: { type: Boolean },
            footerEnabled_: { type: Boolean },
        };
    }
    #theme__accessor_storage;
    get theme_() { return this.#theme__accessor_storage; }
    set theme_(value) { this.#theme__accessor_storage = value; }
    #editThemeButtonText__accessor_storage = '';
    get editThemeButtonText_() { return this.#editThemeButtonText__accessor_storage; }
    set editThemeButtonText_(value) { this.#editThemeButtonText__accessor_storage = value; }
    #thirdPartyThemeId__accessor_storage = null;
    get thirdPartyThemeId_() { return this.#thirdPartyThemeId__accessor_storage; }
    set thirdPartyThemeId_(value) { this.#thirdPartyThemeId__accessor_storage = value; }
    #thirdPartyThemeName__accessor_storage = null;
    get thirdPartyThemeName_() { return this.#thirdPartyThemeName__accessor_storage; }
    set thirdPartyThemeName_(value) { this.#thirdPartyThemeName__accessor_storage = value; }
    #showBottomDivider__accessor_storage = false;
    get showBottomDivider_() { return this.#showBottomDivider__accessor_storage; }
    set showBottomDivider_(value) { this.#showBottomDivider__accessor_storage = value; }
    #showClassicChromeButton__accessor_storage = false;
    get showClassicChromeButton_() { return this.#showClassicChromeButton__accessor_storage; }
    set showClassicChromeButton_(value) { this.#showClassicChromeButton__accessor_storage = value; }
    #showColorPicker__accessor_storage = false;
    get showColorPicker_() { return this.#showColorPicker__accessor_storage; }
    set showColorPicker_(value) { this.#showColorPicker__accessor_storage = value; }
    #showDeviceThemeToggle__accessor_storage = false;
    get showDeviceThemeToggle_() { return this.#showDeviceThemeToggle__accessor_storage; }
    set showDeviceThemeToggle_(value) { this.#showDeviceThemeToggle__accessor_storage = value; }
    #showThemeSnapshot__accessor_storage = false;
    get showThemeSnapshot_() { return this.#showThemeSnapshot__accessor_storage; }
    set showThemeSnapshot_(value) { this.#showThemeSnapshot__accessor_storage = value; }
    #showUploadedImageButton__accessor_storage = false;
    get showUploadedImageButton_() { return this.#showUploadedImageButton__accessor_storage; }
    set showUploadedImageButton_(value) { this.#showUploadedImageButton__accessor_storage = value; }
    #showSearchedImageButton__accessor_storage = false;
    get showSearchedImageButton_() { return this.#showSearchedImageButton__accessor_storage; }
    set showSearchedImageButton_(value) { this.#showSearchedImageButton__accessor_storage = value; }
    #showManagedButton__accessor_storage = false;
    get showManagedButton_() { return this.#showManagedButton__accessor_storage; }
    set showManagedButton_(value) { this.#showManagedButton__accessor_storage = value; }
    #showManagedDialog__accessor_storage = false;
    get showManagedDialog_() { return this.#showManagedDialog__accessor_storage; }
    set showManagedDialog_(value) { this.#showManagedDialog__accessor_storage = value; }
    #wallpaperSearchButtonEnabled__accessor_storage = loadTimeData.getBoolean('wallpaperSearchButtonEnabled');
    get wallpaperSearchButtonEnabled_() { return this.#wallpaperSearchButtonEnabled__accessor_storage; }
    set wallpaperSearchButtonEnabled_(value) { this.#wallpaperSearchButtonEnabled__accessor_storage = value; }
    #wallpaperSearchEnabled__accessor_storage = loadTimeData.getBoolean('wallpaperSearchEnabled');
    get wallpaperSearchEnabled_() { return this.#wallpaperSearchEnabled__accessor_storage; }
    set wallpaperSearchEnabled_(value) { this.#wallpaperSearchEnabled__accessor_storage = value; }
    #footerEnabled__accessor_storage = loadTimeData.getBoolean('footerEnabled');
    get footerEnabled_() { return this.#footerEnabled__accessor_storage; }
    set footerEnabled_(value) { this.#footerEnabled__accessor_storage = value; }
    #newTabPageType__accessor_storage = NewTabPageType.kFirstPartyWebUI;
    get newTabPageType_() { return this.#newTabPageType__accessor_storage; }
    set newTabPageType_(value) { this.#newTabPageType__accessor_storage = value; }
    #showEditTheme__accessor_storage = true;
    get showEditTheme_() { return this.#showEditTheme__accessor_storage; }
    set showEditTheme_(value) { this.#showEditTheme__accessor_storage = value; }
    #managedByName__accessor_storage = '';
    get managedByName_() { return this.#managedByName__accessor_storage; }
    set managedByName_(value) { this.#managedByName__accessor_storage = value; }
    #managedByDesc__accessor_storage = '';
    get managedByDesc_() { return this.#managedByDesc__accessor_storage; }
    set managedByDesc_(value) { this.#managedByDesc__accessor_storage = value; }
    listenerIds_ = [];
    apiProxy_ = browserProxyFactory.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.listenerIds_ = [
            this.apiProxy_.callbackRouter.setTheme.addListener(theme => {
                this.theme_ = theme;
            }),
            this.apiProxy_.callbackRouter.attachedTabStateUpdated.addListener(newTabPageType => {
                this.newTabPageType_ = newTabPageType;
            }),
            this.apiProxy_.callbackRouter.setThemeEditable.addListener(isThemeEditable => {
                this.showEditTheme_ = isThemeEditable;
            }),
            this.apiProxy_.callbackRouter.ntpManagedByNameUpdated.addListener((name, description) => {
                this.managedByName_ = name;
                this.managedByDesc_ = description;
            }),
        ];
        this.apiProxy_.handler.updateTheme();
        this.apiProxy_.handler.updateAttachedTabState();
        this.apiProxy_.handler.updateNtpManagedByName();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const id of this.listenerIds_) {
            assert(this.apiProxy_.callbackRouter.removeListener(id));
        }
        this.listenerIds_ = [];
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        this.editThemeButtonText_ = this.computeEditThemeButtonText_();
        if (changedPrivateProperties.has('theme_') ||
            changedPrivateProperties.has('newTabPageType_')) {
            this.thirdPartyThemeId_ = this.computeThirdPartyThemeId_();
            this.thirdPartyThemeName_ = this.computeThirdPartyThemeName_();
            this.showClassicChromeButton_ = this.computeShowClassicChromeButton_();
            this.showColorPicker_ = this.computeShowColorPicker_();
            this.showDeviceThemeToggle_ = this.computeShowDeviceThemeToggle_();
            this.showThemeSnapshot_ = this.computeShowThemeSnapshot_();
            this.showUploadedImageButton_ = this.computeShowUploadedImageButton_();
            this.showSearchedImageButton_ = this.computeShowSearchedImageButton_();
        }
        if (changedPrivateProperties.has('newTabPageType_') ||
            changedPrivateProperties.has('managedByName_') ||
            changedPrivateProperties.has('managedByDesc_')) {
            this.showManagedButton_ = this.computeShowManagedButton_();
        }
        this.showBottomDivider_ = this.computeShowBottomDivider_();
        // Announce when theme is set to Classic Chrome.
        // This should only be triggered if the classic chrome's button is hidden
        // after the initial theme value has already been set.
        if (changedPrivateProperties.has('theme_') &&
            changedPrivateProperties.has('showClassicChromeButton_') &&
            !!changedPrivateProperties.get('theme_') &&
            !this.showClassicChromeButton_) {
            const announcer = getAnnouncerInstance();
            announcer.announce(this.i18n('updatedToClassicChrome'));
            // If the classicChrome button has focus, change focus to editTheme
            // button, since the button is disappearing.
            if (this.shadowRoot.activeElement === this.$.setClassicChromeButton) {
                this.focusOnThemeButton();
            }
        }
    }
    focusOnThemeButton() {
        this.$.editThemeButton.focus();
    }
    computeEditThemeButtonText_() {
        return this.i18n(this.wallpaperSearchButtonEnabled_ ? 'categoriesHeader' :
            'changeTheme');
    }
    computeThirdPartyThemeId_() {
        if (this.theme_ && this.theme_.thirdPartyThemeInfo) {
            return this.theme_.thirdPartyThemeInfo.id;
        }
        else {
            return null;
        }
    }
    computeThirdPartyThemeName_() {
        if (this.theme_ && this.theme_.thirdPartyThemeInfo) {
            return this.theme_.thirdPartyThemeInfo.name;
        }
        else {
            return null;
        }
    }
    computeShowBottomDivider_() {
        return this.showClassicChromeButton_ || this.showDeviceThemeToggle_;
    }
    computeShowClassicChromeButton_() {
        if (this.footerEnabled_) {
            return !!(this.theme_ && this.theme_.backgroundImage &&
                (this.newTabPageType_ === NewTabPageType.kFirstPartyWebUI ||
                    this.newTabPageType_ === NewTabPageType.kThirdPartyWebUI));
        }
        return !!(this.theme_ &&
            (this.theme_.backgroundImage || this.theme_.thirdPartyThemeInfo));
    }
    computeShowColorPicker_() {
        return !!this.theme_ && !this.theme_.thirdPartyThemeInfo;
    }
    computeShowDeviceThemeToggle_() {
        return loadTimeData.getBoolean('showDeviceThemeToggle') &&
            !(!!this.theme_ && !!this.theme_.thirdPartyThemeInfo);
    }
    computeShowThemeSnapshot_() {
        return !!this.theme_ && !this.theme_.thirdPartyThemeInfo &&
            (!(this.theme_.backgroundImage &&
                this.theme_.backgroundImage.isUploadedImage)) &&
            // TODO(crbug.com/404247286) Enable snapshots for extension NTP with 1P
            // theme.
            this.newTabPageType_ === NewTabPageType.kFirstPartyWebUI;
    }
    computeShowUploadedImageButton_() {
        return !!(this.theme_ && this.theme_.backgroundImage &&
            this.theme_.backgroundImage.isUploadedImage &&
            !this.theme_.backgroundImage.localBackgroundId);
    }
    computeShowSearchedImageButton_() {
        return !!(this.theme_ && this.theme_.backgroundImage &&
            this.theme_.backgroundImage.localBackgroundId);
    }
    computeShowManagedButton_() {
        return this.newTabPageType_ !== NewTabPageType.kFirstPartyWebUI &&
            !!this.managedByName_;
    }
    onThemeSnapshotKeydown_(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.onEditThemeClick_();
        }
    }
    onEditThemeClick_() {
        recordCustomizeChromeAction(CustomizeChromeAction.EDIT_THEME_CLICKED);
        if (this.handleClickForManagedThemes_()) {
            return;
        }
        this.dispatchEvent(new Event('edit-theme-click'));
    }
    onWallpaperSearchClick_() {
        recordCustomizeChromeAction(CustomizeChromeAction.WALLPAPER_SEARCH_APPEARANCE_BUTTON_CLICKED);
        if (this.handleClickForManagedThemes_()) {
            return;
        }
        this.dispatchEvent(new Event('wallpaper-search-click'));
    }
    onThirdPartyThemeLinkButtonClick_() {
        if (this.thirdPartyThemeId_) {
            this.apiProxy_.handler.openThirdPartyThemePage(this.thirdPartyThemeId_);
        }
    }
    onUploadedImageButtonClick_() {
        this.apiProxy_.handler.chooseLocalCustomBackground();
    }
    onSearchedImageButtonClick_() {
        if (this.wallpaperSearchEnabled_) {
            this.dispatchEvent(new CustomEvent('wallpaper-search-click'));
        }
        else {
            this.dispatchEvent(new Event('edit-theme-click'));
        }
    }
    onSetClassicChromeClick_() {
        if (this.handleClickForManagedThemes_()) {
            return;
        }
        this.apiProxy_.handler.removeBackgroundImage();
        this.apiProxy_.handler.setDefaultColor();
        recordCustomizeChromeAction(CustomizeChromeAction.SET_CLASSIC_CHROME_THEME_CLICKED);
    }
    onFollowThemeToggleChange_(e) {
        this.apiProxy_.handler.setFollowDeviceTheme(e.detail);
    }
    onManagedDialogClose_() {
        this.showManagedDialog_ = false;
    }
    onNewTabPageManageByButtonClick_() {
        this.apiProxy_.handler.openNtpManagedByPage();
    }
    handleClickForManagedThemes_() {
        if (!this.theme_ || !this.theme_.backgroundManagedByPolicy) {
            return false;
        }
        this.showManagedDialog_ = true;
        return true;
    }
}
customElements.define(AppearanceElement.is, AppearanceElement);
