// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/composebox/composebox_lens_search.js';
import '//resources/cr_components/composebox/current_tab_chip.js';
import './omnibox_popup_contextual_entrypoint_button.js';
import { getLoadTimeBoolean } from '//resources/cr_components/composebox/common.js';
import { HelpBubbleMixinLit } from '//resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { SearchboxBrowserProxy } from '//resources/cr_components/searchbox/searchbox_browser_proxy.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { TabAttachmentSource } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { InputType } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { browserProxyFactory } from './omnibox_popup.mojom-webui.js';
import { getCss } from './omnibox_popup_contextual_entrypoint.css.js';
import { getHtml } from './omnibox_popup_contextual_entrypoint.html.js';
// Name of the native `ui::ElementIdentifier` that anchors the AskG Lens icon
// IPH.
const LENS_ICON_ELEMENT_ID = 'kOmniboxPopupLensIconElementId';
const OmniboxPopupContextualEntrypointElementBase = HelpBubbleMixinLit(CrLitElement);
export class OmniboxPopupContextualEntrypointElement extends OmniboxPopupContextualEntrypointElementBase {
    static get is() {
        return 'omnibox-popup-contextual-entrypoint';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dropdownIsVisible: { type: Boolean },
            inputState: { type: Object },
            isLensSearchEligible: { type: Boolean },
            isLensIconEligible: { type: Boolean },
            isContentSharingEnabled: { type: Boolean },
            isAimPopupEligible: { type: Boolean },
            searchboxLayoutMode_: {
                type: String,
                reflect: true,
            },
            showContextEntrypoint_: {
                type: Boolean,
                reflect: true,
            },
            isLensChipShown_: { type: Boolean },
            isLensIconShown_: { type: Boolean },
            currentTabForChip_: { type: Object },
            isCurrentTabChipShown_: { type: Boolean },
            applyContextButtonBackground_: { type: Boolean },
            usePecApi_: { type: Boolean },
            isOblongShape_: { type: Boolean },
        };
    }
    #dropdownIsVisible_accessor_storage = true;
    get dropdownIsVisible() { return this.#dropdownIsVisible_accessor_storage; }
    set dropdownIsVisible(value) { this.#dropdownIsVisible_accessor_storage = value; }
    #inputState_accessor_storage = null;
    get inputState() { return this.#inputState_accessor_storage; }
    set inputState(value) { this.#inputState_accessor_storage = value; }
    #isLensSearchEligible_accessor_storage = false;
    get isLensSearchEligible() { return this.#isLensSearchEligible_accessor_storage; }
    set isLensSearchEligible(value) { this.#isLensSearchEligible_accessor_storage = value; }
    #isLensIconEligible_accessor_storage = false;
    get isLensIconEligible() { return this.#isLensIconEligible_accessor_storage; }
    set isLensIconEligible(value) { this.#isLensIconEligible_accessor_storage = value; }
    #isContentSharingEnabled_accessor_storage = false;
    get isContentSharingEnabled() { return this.#isContentSharingEnabled_accessor_storage; }
    set isContentSharingEnabled(value) { this.#isContentSharingEnabled_accessor_storage = value; }
    #isAimPopupEligible_accessor_storage = false;
    get isAimPopupEligible() { return this.#isAimPopupEligible_accessor_storage; }
    set isAimPopupEligible(value) { this.#isAimPopupEligible_accessor_storage = value; }
    #searchboxLayoutMode__accessor_storage = loadTimeData.getString('searchboxLayoutMode');
    get searchboxLayoutMode_() { return this.#searchboxLayoutMode__accessor_storage; }
    set searchboxLayoutMode_(value) { this.#searchboxLayoutMode__accessor_storage = value; }
    #showContextEntrypoint__accessor_storage = false;
    get showContextEntrypoint_() { return this.#showContextEntrypoint__accessor_storage; }
    set showContextEntrypoint_(value) { this.#showContextEntrypoint__accessor_storage = value; }
    #isLensChipShown__accessor_storage = false;
    get isLensChipShown_() { return this.#isLensChipShown__accessor_storage; }
    set isLensChipShown_(value) { this.#isLensChipShown__accessor_storage = value; }
    #isLensIconShown__accessor_storage = false;
    get isLensIconShown_() { return this.#isLensIconShown__accessor_storage; }
    set isLensIconShown_(value) { this.#isLensIconShown__accessor_storage = value; }
    #currentTabForChip__accessor_storage = null;
    get currentTabForChip_() { return this.#currentTabForChip__accessor_storage; }
    set currentTabForChip_(value) { this.#currentTabForChip__accessor_storage = value; }
    #isCurrentTabChipShown__accessor_storage = false;
    get isCurrentTabChipShown_() { return this.#isCurrentTabChipShown__accessor_storage; }
    set isCurrentTabChipShown_(value) { this.#isCurrentTabChipShown__accessor_storage = value; }
    #applyContextButtonBackground__accessor_storage = false;
    get applyContextButtonBackground_() { return this.#applyContextButtonBackground__accessor_storage; }
    set applyContextButtonBackground_(value) { this.#applyContextButtonBackground__accessor_storage = value; }
    #usePecApi__accessor_storage = loadTimeData.getBoolean('contextualMenuUsePecApi');
    get usePecApi_() { return this.#usePecApi__accessor_storage; }
    set usePecApi_(value) { this.#usePecApi__accessor_storage = value; }
    #isOblongShape__accessor_storage = loadTimeData.getBoolean('contextButtonShapeIsOblong');
    get isOblongShape_() { return this.#isOblongShape__accessor_storage; }
    set isOblongShape_(value) { this.#isOblongShape__accessor_storage = value; }
    isComposeboxChipEnabled_ = loadTimeData.getBoolean('composeboxShowChip');
    isLensIconEnabled_ = loadTimeData.getBoolean('composeboxShowLensIcon');
    hideContextButton_ = loadTimeData.getBoolean('hideClassicContextButton');
    isCurrentTabChipEnabled_ = loadTimeData.getBoolean('composeboxShowCurrentTabChip');
    contextButtonHasBackground_ = loadTimeData.getBoolean('contextButtonHasBackground');
    isLensIconIphEnabled_ = getLoadTimeBoolean('askGLensIconIphEnabled', false);
    browserProxy_;
    searchboxBrowserProxy_;
    popupListenerIds_ = [];
    searchboxListenerIds_ = [];
    get showContextEntrypoint() {
        return this.showContextEntrypoint_ && !this.shouldHideEntrypointButton_();
    }
    get showContextualChip() {
        return this.showContextEntrypoint_ &&
            (this.isCurrentTabChipShown_ || this.isLensChipShown_);
    }
    get showLensSearchIcon() {
        return this.showContextEntrypoint_ && this.isLensIconShown_;
    }
    constructor() {
        super();
        this.searchboxBrowserProxy_ = SearchboxBrowserProxy.getInstance();
        this.browserProxy_ = browserProxyFactory.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.popupListenerIds_ = [
            this.browserProxy_.callbackRouter.onShow.addListener(this.onShow_.bind(this)),
        ];
        const callbackRouter = this.searchboxBrowserProxy_.callbackRouter;
        this.searchboxListenerIds_ = [
            callbackRouter.updateLensSearchEligibility.addListener((eligible) => {
                this.isLensSearchEligible =
                    this.isComposeboxChipEnabled_ && eligible;
                this.isLensIconEligible = this.isLensIconEnabled_ && eligible;
            }),
            callbackRouter.updateContentSharingPolicy.addListener((enabled) => {
                this.isContentSharingEnabled = enabled;
            }),
            callbackRouter.onInputStateChanged.addListener((inputState) => {
                this.inputState = inputState;
            }),
        ];
        if (!this.hideContextButton_) {
            this.searchboxListenerIds_.push(callbackRouter.updateAimPopupEligibility.addListener((eligible) => {
                this.isAimPopupEligible = eligible;
            }));
        }
        // Fetch the initial input state async, but only apply it if
        // `onInputStateChanged` push updates haven't already populated it. This
        // prevents a race condition where a late-resolving `getInputState` response
        // could clobber newer state received via push notifications.
        this.searchboxBrowserProxy_.handler.getInputState().then(({ state }) => {
            if (this.inputState === null && state) {
                this.inputState = state;
            }
        });
        if (this.isLensIconIphEnabled_) {
            document.addEventListener('visibilitychange', this.onVisibilityChange_);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('visibilitychange', this.onVisibilityChange_);
        for (const listenerId of this.popupListenerIds_) {
            this.browserProxy_.callbackRouter.removeListener(listenerId);
        }
        this.popupListenerIds_ = [];
        for (const listenerId of this.searchboxListenerIds_) {
            this.searchboxBrowserProxy_.callbackRouter.removeListener(listenerId);
        }
        this.searchboxListenerIds_ = [];
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedProps = changedProperties;
        if (changedProps.has('isAimPopupEligible') ||
            changedProps.has('searchboxLayoutMode_') ||
            changedProps.has('isLensSearchEligible') ||
            changedProps.has('dropdownIsVisible')) {
            this.showContextEntrypoint_ = this.computeShowContextEntrypoint_();
        }
        if (changedProps.has('isContentSharingEnabled') ||
            changedProps.has('isLensSearchEligible') ||
            changedProps.has('isLensIconEligible') ||
            changedProps.has('currentTabForChip_') ||
            changedProps.has('inputState')) {
            this.isCurrentTabChipShown_ = this.isContentSharingEnabled &&
                this.isLensSearchEligible && this.computeShowCurrentTabChip_();
            this.isLensChipShown_ = this.isContentSharingEnabled &&
                this.isLensSearchEligible && !this.isCurrentTabChipShown_;
            this.isLensIconShown_ = this.isContentSharingEnabled &&
                this.isLensIconEligible && !this.isLensChipShown_;
            this.applyContextButtonBackground_ =
                this.contextButtonHasBackground_ && !this.isLensChipShown_;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('showContextEntrypoint_') ||
            changedPrivateProperties.has('isLensIconShown_')) {
            this.updateLensIconIphAnchor_();
        }
    }
    // The popup's page is hidden, not destroyed, when the popup closes, so the
    // Lens icon stays in the DOM.
    onVisibilityChange_ = () => {
        this.updateLensIconIphAnchor_();
    };
    // Registers the Lens icon as the IPH anchor only while it is rendered and the
    // popup is visible. Unregistering reports the anchor as hidden, which closes
    // the IPH without counting as a dismissal.
    updateLensIconIphAnchor_() {
        if (!this.isLensIconIphEnabled_) {
            return;
        }
        const lensIcon = document.visibilityState === 'visible' ?
            this.getLensSearchIconElement() :
            null;
        if (lensIcon) {
            this.registerHelpBubble(LENS_ICON_ELEMENT_ID, lensIcon.getIconButtonElement() ?? lensIcon);
        }
        else {
            this.unregisterHelpBubble(LENS_ICON_ELEMENT_ID);
        }
    }
    getContextEntrypointElement() {
        if (this.showContextEntrypoint) {
            return this.shadowRoot
                .querySelector('#context');
        }
        return null;
    }
    getContextualChipElement() {
        if (this.showContextualChip) {
            // Search for class instead of ID since the contextual chip is either a
            // CurrentTabChipElement or ComposeboxLensSearchElement.
            return this.shadowRoot
                .querySelector('.contextual-chip');
        }
        return null;
    }
    getLensSearchIconElement() {
        if (this.showLensSearchIcon) {
            return this.shadowRoot.querySelector('#lensSearchIcon');
        }
        return null;
    }
    shouldHideEntrypointButton_() {
        return this.searchboxLayoutMode_ === 'Compact';
    }
    computeShowContextEntrypoint_() {
        if (!this.dropdownIsVisible || this.hideContextButton_ ||
            !this.isAimPopupEligible) {
            return false;
        }
        if (this.searchboxLayoutMode_.startsWith('Tall')) {
            return true;
        }
        if (this.searchboxLayoutMode_ === 'Compact') {
            return this.isLensSearchEligible;
        }
        return false;
    }
    onContextualChipClick() {
        if (!this.showContextualChip) {
            return;
        }
        if (this.isCurrentTabChipShown_) {
            this.onAddTabContext_();
        }
        else if (this.isLensChipShown_) {
            this.onLensSearchClick_();
        }
    }
    onLensSearchClick_() {
        this.searchboxBrowserProxy_.handler.openLensSearch();
    }
    async refreshCurrentTabForChip_() {
        // TODO (b/537859769) - Replace getRecentTabs with a dedicated handler for
        // current tab chip.
        const { tabs } = await this.searchboxBrowserProxy_.handler.getRecentTabs();
        this.currentTabForChip_ =
            tabs.find(tab => tab.showInCurrentTabChip) || null;
    }
    async onAddTabContext_() {
        if (!this.currentTabForChip_) {
            return;
        }
        try {
            await this.searchboxBrowserProxy_.handler.addTabContext(this.currentTabForChip_.tabId, /*delayUpload=*/ false, TabAttachmentSource.kCurrentTabChip);
        }
        catch {
            // TODO (b/563357265) - Surface addTabContext failures for the current-tab
            // chip so they are visible to the user in the omnibox popup.
        }
    }
    computeShowCurrentTabChip_() {
        const browserTabsAllowedByPecApi = !this.usePecApi_ ||
            (!!this.inputState &&
                this.inputState.allowedInputTypes.includes(InputType.kBrowserTab));
        return this.isCurrentTabChipEnabled_ && !!this.currentTabForChip_ &&
            browserTabsAllowedByPecApi;
    }
    onShow_() {
        this.refreshCurrentTabForChip_();
    }
}
customElements.define(OmniboxPopupContextualEntrypointElement.is, OmniboxPopupContextualEntrypointElement);
