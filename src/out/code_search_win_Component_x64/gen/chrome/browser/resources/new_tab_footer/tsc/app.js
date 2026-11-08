// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://newtab-footer/shared/customize_buttons/customize_buttons.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { browserProxyFactory as customizeButtonsProxyFactory, SidePanelOpenTrigger } from './customize_buttons.mojom-webui.js';
import { CustomizeChromeSection } from './customize_chrome.mojom-webui.js';
import { browserProxyFactory as newTabFooterProxyFactory, NewTabPageType } from './new_tab_footer.mojom-webui.js';
import { WindowProxy } from './window_proxy.js';
// TODO(crbug.com/419144611) Move to a shared util as it's shared by both the
// Ntp and the Footer.
export var CustomizeDialogPage;
(function (CustomizeDialogPage) {
    CustomizeDialogPage["BACKGROUNDS"] = "backgrounds";
    CustomizeDialogPage["SHORTCUTS"] = "shortcuts";
    CustomizeDialogPage["MODULES"] = "modules";
    CustomizeDialogPage["THEMES"] = "themes";
})(CustomizeDialogPage || (CustomizeDialogPage = {}));
/**
 * Customize Chrome entry points. This enum must match the numbering for
 * FooterCustomizeChromeEntryPoint in enums.xml. These values are persisted to
 * logs. Entries should not be renumbered, removed or reused.
 */
export var FooterCustomizeChromeEntryPoint;
(function (FooterCustomizeChromeEntryPoint) {
    FooterCustomizeChromeEntryPoint[FooterCustomizeChromeEntryPoint["CUSTOMIZE_BUTTON"] = 0] = "CUSTOMIZE_BUTTON";
    FooterCustomizeChromeEntryPoint[FooterCustomizeChromeEntryPoint["URL"] = 1] = "URL";
    FooterCustomizeChromeEntryPoint[FooterCustomizeChromeEntryPoint["MAX_VALUE"] = 1] = "MAX_VALUE";
})(FooterCustomizeChromeEntryPoint || (FooterCustomizeChromeEntryPoint = {}));
/**
 * Elements on the New Tab Footer. This enum must match the numbering for
 * FooterElement in enums.xml. These values are persisted to logs. Entries
 * should not be renumbered, removed or reused.
 */
export var FooterElement;
(function (FooterElement) {
    FooterElement[FooterElement["OTHER"] = 0] = "OTHER";
    FooterElement[FooterElement["CUSTOMIZE_BUTTON"] = 1] = "CUSTOMIZE_BUTTON";
    FooterElement[FooterElement["EXTENSION_NAME"] = 2] = "EXTENSION_NAME";
    FooterElement[FooterElement["MANAGEMENT_NOTICE"] = 3] = "MANAGEMENT_NOTICE";
    FooterElement[FooterElement["BACKGROUND_ATTRIBUTION"] = 4] = "BACKGROUND_ATTRIBUTION";
    FooterElement[FooterElement["CONTEXT_MENU"] = 5] = "CONTEXT_MENU";
    FooterElement[FooterElement["MAX_VALUE"] = 5] = "MAX_VALUE";
})(FooterElement || (FooterElement = {}));
const CUSTOMIZE_URL_PARAM = 'customize';
const CUSTOMIZE_CHROME_BUTTON_ELEMENT_ID = 'CustomizeButtonsHandler::kCustomizeChromeButtonElementId';
function recordCustomizeChromeOpen(element) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.Footer.CustomizeChromeOpened', element, FooterCustomizeChromeEntryPoint.MAX_VALUE + 1);
}
function recordClick(element) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.Footer.Click', element, FooterElement.MAX_VALUE + 1);
}
const NewTabFooterAppElementBase = HelpBubbleMixinLit(CrLitElement);
export class NewTabFooterAppElement extends NewTabFooterAppElementBase {
    static get is() {
        return 'new-tab-footer-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            extensionName_: { type: String },
            isCustomizeActive_: { type: Boolean },
            managementNotice_: { type: Object },
            showCustomizeButtons_: { type: Boolean },
            showCustomizeText_: { type: Boolean },
            showExtension_: { type: Boolean },
            ntpType_: { type: Number },
            backgroundAttributionLink_: { type: String },
            backgroundAttributionText_: { type: String },
            showBackgroundAttribution_: { type: Boolean },
        };
    }
    #extensionName__accessor_storage = null;
    get extensionName_() { return this.#extensionName__accessor_storage; }
    set extensionName_(value) { this.#extensionName__accessor_storage = value; }
    #isCustomizeActive__accessor_storage = false;
    get isCustomizeActive_() { return this.#isCustomizeActive__accessor_storage; }
    set isCustomizeActive_(value) { this.#isCustomizeActive__accessor_storage = value; }
    #managementNotice__accessor_storage = null;
    get managementNotice_() { return this.#managementNotice__accessor_storage; }
    set managementNotice_(value) { this.#managementNotice__accessor_storage = value; }
    #showCustomizeButtons__accessor_storage = false;
    get showCustomizeButtons_() { return this.#showCustomizeButtons__accessor_storage; }
    set showCustomizeButtons_(value) { this.#showCustomizeButtons__accessor_storage = value; }
    #showCustomizeText__accessor_storage = true;
    get showCustomizeText_() { return this.#showCustomizeText__accessor_storage; }
    set showCustomizeText_(value) { this.#showCustomizeText__accessor_storage = value; }
    #showExtension__accessor_storage = false;
    get showExtension_() { return this.#showExtension__accessor_storage; }
    set showExtension_(value) { this.#showExtension__accessor_storage = value; }
    #ntpType__accessor_storage = NewTabPageType.kOther;
    get ntpType_() { return this.#ntpType__accessor_storage; }
    set ntpType_(value) { this.#ntpType__accessor_storage = value; }
    #backgroundAttributionText__accessor_storage = null;
    get backgroundAttributionText_() { return this.#backgroundAttributionText__accessor_storage; }
    set backgroundAttributionText_(value) { this.#backgroundAttributionText__accessor_storage = value; }
    #backgroundAttributionLink__accessor_storage = null;
    get backgroundAttributionLink_() { return this.#backgroundAttributionLink__accessor_storage; }
    set backgroundAttributionLink_(value) { this.#backgroundAttributionLink__accessor_storage = value; }
    #showBackgroundAttribution__accessor_storage = false;
    get showBackgroundAttribution_() { return this.#showBackgroundAttribution__accessor_storage; }
    set showBackgroundAttribution_(value) { this.#showBackgroundAttribution__accessor_storage = value; }
    selectedCustomizeDialogPage_;
    canCustomizeChrome_ = false;
    browserProxy_;
    customizeButtonsBrowserProxy_;
    setCustomizeChromeSidePanelVisibilityListener_ = null;
    setNtpExtensionNameListenerId_ = null;
    setBackgroundAttributionListener_ = null;
    setManagementNoticeListener_ = null;
    setAttachedTabStateUpdatedListener_ = null;
    constructor() {
        super();
        this.browserProxy_ = newTabFooterProxyFactory.getInstance();
        this.customizeButtonsBrowserProxy_ =
            customizeButtonsProxyFactory.getInstance();
        this.isCustomizeActive_ =
            WindowProxy.getInstance().url.searchParams.has(CUSTOMIZE_URL_PARAM);
        this.selectedCustomizeDialogPage_ =
            WindowProxy.getInstance().url.searchParams.get(CUSTOMIZE_URL_PARAM);
    }
    connectedCallback() {
        super.connectedCallback();
        this.setNtpExtensionNameListenerId_ =
            this.browserProxy_.callbackRouter.setNtpExtensionName.addListener(name => {
                this.extensionName_ = name;
            });
        this.browserProxy_.handler.updateNtpExtensionName();
        this.setManagementNoticeListener_ =
            this.browserProxy_.callbackRouter.setManagementNotice.addListener(notice => {
                this.managementNotice_ = notice;
            });
        this.browserProxy_.handler.updateManagementNotice();
        this.setCustomizeChromeSidePanelVisibilityListener_ =
            this.customizeButtonsBrowserProxy_.callbackRouter
                .setCustomizeChromeSidePanelVisibility.addListener(visible => {
                this.isCustomizeActive_ = visible;
            });
        this.setAttachedTabStateUpdatedListener_ =
            this.browserProxy_.callbackRouter.attachedTabStateUpdated.addListener((ntpType, canCustomizeChrome) => {
                this.ntpType_ = ntpType;
                this.canCustomizeChrome_ = canCustomizeChrome;
            });
        this.browserProxy_.handler.updateAttachedTabState();
        this.setBackgroundAttributionListener_ =
            this.browserProxy_.callbackRouter.setBackgroundAttribution.addListener(attribution => {
                if (attribution) {
                    this.backgroundAttributionText_ = attribution.name;
                    this.backgroundAttributionLink_ = attribution.url;
                }
                else {
                    this.backgroundAttributionText_ = null;
                    this.backgroundAttributionLink_ = null;
                }
            });
        this.browserProxy_.handler.updateBackgroundAttribution();
        // Open Customize Chrome if there are Customize Chrome URL params.
        if (this.isCustomizeActive_) {
            this.setCustomizeChromeSidePanelVisible(this.isCustomizeActive_);
            recordCustomizeChromeOpen(FooterCustomizeChromeEntryPoint.URL);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setNtpExtensionNameListenerId_);
        this.browserProxy_.callbackRouter.removeListener(this.setNtpExtensionNameListenerId_);
        assert(this.setManagementNoticeListener_);
        this.browserProxy_.callbackRouter.removeListener(this.setManagementNoticeListener_);
        assert(this.setAttachedTabStateUpdatedListener_);
        this.browserProxy_.callbackRouter.removeListener(this.setAttachedTabStateUpdatedListener_);
        assert(this.setBackgroundAttributionListener_);
        this.browserProxy_.callbackRouter.removeListener(this.setBackgroundAttributionListener_);
        assert(this.setCustomizeChromeSidePanelVisibilityListener_);
        this.customizeButtonsBrowserProxy_.callbackRouter.removeListener(this.setCustomizeChromeSidePanelVisibilityListener_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('ntpType_')) {
            this.showCustomizeButtons_ = this.computeShowCustomizeButtons_();
        }
        if (changedPrivateProperties.has('ntpType_') ||
            changedPrivateProperties.has('extensionName_')) {
            this.showExtension_ = this.computeShowExtension_();
        }
        if (changedPrivateProperties.has('backgroundAttributionText_') ||
            changedPrivateProperties.has('ntpType_')) {
            this.showBackgroundAttribution_ =
                this.computeShowBackgroundAttribution_();
        }
    }
    firstUpdated() {
        ColorChangeUpdater.forDocument().start();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('showCustomizeButtons_') &&
            this.showCustomizeButtons_) {
            // Anchoring on the internal icon of the button is required here because
            // the button may collapse (when the main view reaches a minimum width
            // size). The collapse happens by hiding a text, which does not trigger
            // the appropriate notifications for the help bubble to reposition
            // properly. Anchoring to the icon ensures that the help bubble adapts
            // accordingly.
            this.registerHelpBubble(CUSTOMIZE_CHROME_BUTTON_ELEMENT_ID, ['ntp-customize-buttons', '.customize-icon'], { paddingTop: 10 });
            this.browserProxy_.handler.notifyCustomizationButtonVisible();
        }
    }
    computeShowCustomizeButtons_() {
        return this.canCustomizeChrome_ &&
            (this.ntpType_ === NewTabPageType.kFirstPartyWebUI ||
                this.ntpType_ === NewTabPageType.kExtension);
    }
    computeShowExtension_() {
        return !!this.extensionName_ && this.ntpType_ === NewTabPageType.kExtension;
    }
    computeShowBackgroundAttribution_() {
        return !!this.backgroundAttributionText_ &&
            this.ntpType_ === NewTabPageType.kFirstPartyWebUI;
    }
    onContextmenu_(e) {
        this.browserProxy_.handler.showContextMenu({ x: e.clientX, y: e.clientY });
        recordClick(FooterElement.CONTEXT_MENU);
    }
    onExtensionNameClick_(e) {
        e.preventDefault();
        recordClick(FooterElement.EXTENSION_NAME);
        this.browserProxy_.handler.openExtensionOptionsPageWithFallback();
    }
    onManagementNoticeClick_(e) {
        e.preventDefault();
        recordClick(FooterElement.MANAGEMENT_NOTICE);
        this.browserProxy_.handler.openManagementPage();
    }
    onBackgroundAttributionClick_(e) {
        e.preventDefault();
        recordClick(FooterElement.BACKGROUND_ATTRIBUTION);
        assert(!!this.backgroundAttributionLink_);
        this.browserProxy_.handler.openUrlInCurrentTab(this.backgroundAttributionLink_);
    }
    onCustomizeClick_() {
        recordClick(FooterElement.CUSTOMIZE_BUTTON);
        // Let side panel decide what page or section to show.
        this.selectedCustomizeDialogPage_ = null;
        this.setCustomizeChromeSidePanelVisible(!this.isCustomizeActive_);
        if (!this.isCustomizeActive_) {
            this.customizeButtonsBrowserProxy_.handler
                .incrementCustomizeChromeButtonOpenCount();
            recordCustomizeChromeOpen(FooterCustomizeChromeEntryPoint.CUSTOMIZE_BUTTON);
        }
    }
    /**
     * Public for testing. Returns the section being shown to allow test
     * verification.
     */
    setCustomizeChromeSidePanelVisible(visible) {
        let section = CustomizeChromeSection.kUnspecified;
        switch (this.selectedCustomizeDialogPage_) {
            case CustomizeDialogPage.BACKGROUNDS:
            case CustomizeDialogPage.THEMES:
                section = CustomizeChromeSection.kAppearance;
                break;
            case CustomizeDialogPage.SHORTCUTS:
                section = CustomizeChromeSection.kShortcuts;
                break;
            case CustomizeDialogPage.MODULES:
                section = CustomizeChromeSection.kModules;
                break;
            default:
                break;
        }
        this.customizeButtonsBrowserProxy_.handler
            .setCustomizeChromeSidePanelVisible(visible, section, SidePanelOpenTrigger.kNewTabFooter);
        return section;
    }
    setSelectedCustomizeDialogPageForTesting(page) {
        this.selectedCustomizeDialogPage_ = page;
    }
}
customElements.define(NewTabFooterAppElement.is, NewTabFooterAppElement);
