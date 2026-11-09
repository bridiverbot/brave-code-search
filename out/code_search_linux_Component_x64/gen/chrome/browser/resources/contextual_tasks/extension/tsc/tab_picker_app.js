// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/composebox/composebox_favicon_group.js';
import 'chrome://resources/cr_components/composebox/composebox_tab_favicon.js';
import 'chrome://resources/cr_components/composebox/icons.html.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { ExtensionBrowserProxyImpl } from 'chrome://contextual-tasks/contextual_tasks_browser_proxy.js';
import { recordTabPickerTabSelected, TabPickerSurface } from 'chrome://resources/cr_components/composebox/common.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { InputType } from 'chrome://resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { getCss } from './tab_picker_app.css.js';
import { getHtml } from './tab_picker_app.html.js';
import { TabPickerBrowserProxyImpl } from './tab_picker_browser_proxy.js';
const CLOSE_MENU_DELAY_MS = 50;
// LINT.IfChange(ContextualTasksTabPickerUnboundedPresentationResult)
export var TabPickerUnboundedPresentationResult;
(function (TabPickerUnboundedPresentationResult) {
    TabPickerUnboundedPresentationResult[TabPickerUnboundedPresentationResult["SHOWN_UNBOUNDED"] = 0] = "SHOWN_UNBOUNDED";
    TabPickerUnboundedPresentationResult[TabPickerUnboundedPresentationResult["FALLBACK_API_UNSUPPORTED"] = 1] = "FALLBACK_API_UNSUPPORTED";
    TabPickerUnboundedPresentationResult[TabPickerUnboundedPresentationResult["SHOW_UNBOUNDED_ELEMENT_FAILED"] = 2] = "SHOW_UNBOUNDED_ELEMENT_FAILED";
    TabPickerUnboundedPresentationResult[TabPickerUnboundedPresentationResult["MAX_VALUE"] = 3] = "MAX_VALUE";
})(TabPickerUnboundedPresentationResult || (TabPickerUnboundedPresentationResult = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/contextual_tasks/enums.xml:ContextualTasksTabPickerUnboundedPresentationResult)
const TabPickerAppElementBase = I18nMixinLit(CrLitElement);
export class TabPickerAppElement extends TabPickerAppElementBase {
    static get is() {
        return 'tab-picker-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            tabSuggestions: { type: Array },
            selectedTabs: { type: Array },
            tabMenuOpen: { type: Boolean },
            recentTabId: { type: Number },
            sharingTabsText_: { type: String },
            useUnbounded: {
                type: Boolean,
                reflect: true,
            },
            darkMode: {
                type: Boolean,
                reflect: true,
            },
            inputState: { type: Object },
        };
    }
    #tabSuggestions_accessor_storage = [];
    get tabSuggestions() { return this.#tabSuggestions_accessor_storage; }
    set tabSuggestions(value) { this.#tabSuggestions_accessor_storage = value; }
    #selectedTabs_accessor_storage = [];
    get selectedTabs() { return this.#selectedTabs_accessor_storage; }
    set selectedTabs(value) { this.#selectedTabs_accessor_storage = value; }
    #tabMenuOpen_accessor_storage = false;
    get tabMenuOpen() { return this.#tabMenuOpen_accessor_storage; }
    set tabMenuOpen(value) { this.#tabMenuOpen_accessor_storage = value; }
    #recentTabId_accessor_storage = null;
    get recentTabId() { return this.#recentTabId_accessor_storage; }
    set recentTabId(value) { this.#recentTabId_accessor_storage = value; }
    #useUnbounded_accessor_storage = true;
    get useUnbounded() { return this.#useUnbounded_accessor_storage; }
    set useUnbounded(value) { this.#useUnbounded_accessor_storage = value; }
    #darkMode_accessor_storage = false;
    get darkMode() { return this.#darkMode_accessor_storage; }
    set darkMode(value) { this.#darkMode_accessor_storage = value; }
    #inputState_accessor_storage = null;
    get inputState() { return this.#inputState_accessor_storage; }
    set inputState(value) { this.#inputState_accessor_storage = value; }
    #sharingTabsText__accessor_storage = '';
    get sharingTabsText_() { return this.#sharingTabsText__accessor_storage; }
    set sharingTabsText_(value) { this.#sharingTabsText__accessor_storage = value; }
    closeTimer_ = null;
    frameScreenOffset_ = null;
    pointerDownOnTrigger_ = false;
    shouldOpenMenu_ = false;
    // Tracks the latest open request so an in-flight async fetch does not open
    // the menu after the pointer leaves the trigger or the menu is closed.
    openMenuRequestId_ = 0;
    // Tracks the latest suggestions fetch so out-of-order getRecentTabs()
    // responses do not overwrite newer suggestions.
    fetchSuggestionsRequestId_ = 0;
    extensionListenerIds_ = [];
    searchboxListenerIds_ = [];
    browserProxy_ = TabPickerBrowserProxyImpl.getInstance();
    // Caches the pending setUnbounded() call initiated in firstUpdated() so that
    // openTabMenu_() can await it if triggered before initial Lit rendering
    // completes.
    unboundedInitPromise_ = null;
    menuOpenStartTime_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.setFocusOutlineVisible_(false);
        this.darkMode = this.isDarkModeEnabled_();
        this.updateSharingTabsText_();
        this.fetchTabSuggestions_(/*recordInitialLoadLatency=*/ true);
        const callbackRouter = ExtensionBrowserProxyImpl.getInstance().callbackRouter;
        const searchboxCallbackRouter = this.browserProxy_.getSearchboxCallbackRouter();
        this.browserProxy_.getInputState()
            .then(({ state }) => {
            if (this.isConnected && state && this.inputState === null) {
                this.inputState = state;
            }
        })
            .catch(() => { });
        this.searchboxListenerIds_.push(searchboxCallbackRouter.onInputStateChanged.addListener((state) => {
            this.inputState = state;
        }));
        this.extensionListenerIds_.push(callbackRouter.onTabContextUpdated.addListener(async (tabs) => {
            this.selectedTabs = tabs;
            if (this.$.tabMenu.open) {
                await this.fetchTabSuggestions_();
                if (this.isConnected && !this.hasTabSuggestions_ &&
                    this.$.tabMenu.open) {
                    this.$.tabMenu.close();
                }
            }
        }));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        ++this.openMenuRequestId_;
        ++this.fetchSuggestionsRequestId_;
        this.cancelCloseTimer_();
        this.inputState = null;
        const callbackRouter = ExtensionBrowserProxyImpl.getInstance().callbackRouter;
        for (const id of this.extensionListenerIds_) {
            callbackRouter.removeListener(id);
        }
        this.extensionListenerIds_ = [];
        const searchboxCallbackRouter = this.browserProxy_.getSearchboxCallbackRouter();
        for (const id of this.searchboxListenerIds_) {
            searchboxCallbackRouter.removeListener(id);
        }
        this.searchboxListenerIds_ = [];
    }
    firstUpdated() {
        this.$.tabMenu.addEventListener('keydown', this.onMenuKeydown_.bind(this), true);
        this.recordLatencyMetric_('ContextualTasks.TabPicker.IframeRenderLatencyMs', Math.round(performance.now()));
        this.initializeUnboundedMenu_();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('selectedTabs')) {
            this.updateSharingTabsText_();
        }
        if (changedProperties.has('useUnbounded')) {
            this.unboundedInitPromise_ = null;
            this.initializeUnboundedMenu_();
        }
    }
    initializeUnboundedMenu_() {
        if (!this.isUnboundedMenuEnabled_()) {
            return Promise.resolve(false);
        }
        if (!this.unboundedInitPromise_) {
            const promise = this.$.tabMenu.setUnbounded().finally(() => {
                if (this.unboundedInitPromise_ === promise) {
                    this.unboundedInitPromise_ = null;
                }
            });
            this.unboundedInitPromise_ = promise;
        }
        return this.unboundedInitPromise_;
    }
    async fetchTabSuggestions_(recordInitialLoadLatency = false) {
        const requestId = ++this.fetchSuggestionsRequestId_;
        try {
            const { tabs } = await this.browserProxy_.getRecentTabs();
            if (requestId !== this.fetchSuggestionsRequestId_ || !this.isConnected) {
                return;
            }
            this.tabSuggestions = tabs || [];
            this.recentTabId =
                this.tabSuggestions.length > 0 ? this.tabSuggestions[0].tabId : null;
            if (recordInitialLoadLatency) {
                await this.updateComplete;
                this.recordLatencyMetric_('ContextualTasks.TabPicker.SuggestionsLoadLatencyMs', Math.round(performance.now()));
            }
        }
        catch {
            // Standalone or test environment without proxy implementation.
        }
    }
    isUnboundedMenuEnabled_() {
        if (loadTimeData.isInitialized() &&
            loadTimeData.valueExists('contextualTasksUnboundedMenuEnabled') &&
            !loadTimeData.getBoolean('contextualTasksUnboundedMenuEnabled')) {
            return false;
        }
        return this.useUnbounded;
    }
    isDarkModeEnabled_() {
        const params = new URLSearchParams(window.location.search);
        return params.get('cs') === '1';
    }
    get hasTabSuggestions_() {
        return this.tabSuggestions.length > 0;
    }
    updateSharingTabsText_() {
        const count = this.selectedTabs.length;
        if (count === 0) {
            const hasI18n = loadTimeData.isInitialized();
            this.sharingTabsText_ =
                (hasI18n && this.i18nExists('shareTabs') && this.i18n('shareTabs')) ||
                    (hasI18n && this.i18nExists('addTabs') && this.i18n('addTabs')) ||
                    'Add tabs';
            return;
        }
        this.browserProxy_.getPluralString('sharingTabs', count)
            .then((s) => {
            this.sharingTabsText_ = s;
        })
            .catch(() => {
            this.sharingTabsText_ =
                count === 1 ? 'Sharing 1 tab' : `Sharing ${count} tabs`;
        });
    }
    getRecentTabsSuffix_() {
        const hasI18n = loadTimeData.isInitialized();
        return (hasI18n && this.i18nExists('recentTabsSuffix') &&
            this.i18n('recentTabsSuffix')) ||
            'Recent';
    }
    isRecentTab_(tabId) {
        return tabId === this.recentTabId;
    }
    isTabSelected_(tab) {
        return this.selectedTabs.some(t => t.tabId === tab.tabId);
    }
    isTabDisabled_(tab) {
        if (this.isTabSelected_(tab)) {
            return false;
        }
        // If browser tab input type is disabled, all unselected tabs are disabled.
        if (this.inputState?.disabledInputTypes.includes(InputType.kBrowserTab)) {
            return true;
        }
        // UI-side check in case the browser process input state model has not yet
        // updated its limits. InputStateModel disables the browser tab input type
        // when over the maximum attached tabs.
        if (this.inputState && this.inputState.maxTotalInputs > 0) {
            return this.selectedTabs.length >= this.inputState.maxTotalInputs;
        }
        return false;
    }
    // FocusOutlineManager defaults to visible=true and only listens to keydown
    // and mousedown (not pointerenter/pointermove), while cr-action-menu checks
    // FocusOutlineManager.visible on open and calls .focus() on mouseover.
    // Explicitly sync outline visibility on pointer vs. keyboard interactions.
    setFocusOutlineVisible_(visible) {
        FocusOutlineManager.forDocument(document).visible = visible;
    }
    onShareTabsRowPointerenter_(e) {
        this.updateFrameScreenOffset_(e);
        this.pointerDownOnTrigger_ = false;
        this.setFocusOutlineVisible_(false);
        this.shouldOpenMenu_ = true;
        this.cancelCloseTimer_();
        this.openTabMenu_();
    }
    onShareTabsRowPointermove_() {
        this.setFocusOutlineVisible_(false);
    }
    onShareTabsRowPointerdown_() {
        this.pointerDownOnTrigger_ = true;
        this.setFocusOutlineVisible_(false);
    }
    onShareTabsRowPointerleave_() {
        this.pointerDownOnTrigger_ = false;
        this.shouldOpenMenu_ = false;
        ++this.openMenuRequestId_;
        this.$.shareTabsTrigger.blur();
        this.scheduleCloseTimer_();
    }
    onShareTabsRowFocus_() {
        if (!this.tabMenuOpen && !this.pointerDownOnTrigger_) {
            this.setFocusOutlineVisible_(true);
        }
    }
    onShareTabsRowClick_(e) {
        this.updateFrameScreenOffset_(e);
        this.setFocusOutlineVisible_(false);
        this.cancelCloseTimer_();
        if (this.$.tabMenu.open) {
            this.shouldOpenMenu_ = false;
            ++this.openMenuRequestId_;
            this.$.tabMenu.close();
        }
        else {
            this.shouldOpenMenu_ = true;
            this.openTabMenu_();
        }
        this.pointerDownOnTrigger_ = false;
    }
    onShareTabsRowKeydown_(e) {
        this.setFocusOutlineVisible_(true);
        if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.shouldOpenMenu_ = true;
            this.cancelCloseTimer_();
            this.openTabMenu_(/*focusFirstItem=*/ true);
        }
    }
    onMenuKeydown_(e) {
        this.setFocusOutlineVisible_(true);
        if (e.key === 'ArrowLeft' || e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            this.$.tabMenu.close();
            this.$.shareTabsTrigger.focus();
            return;
        }
        if (e.key === 'Tab' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            const items = Array.from(this.$.tabMenu.querySelectorAll('button.dropdown-item:not([disabled])'));
            if (items.length === 0) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            const focused = this.shadowRoot.activeElement;
            const index = focused ? items.indexOf(focused) : -1;
            const next = e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey);
            const numOptions = items.length;
            const nextIndex = index === -1 ?
                (next ? 0 : numOptions - 1) :
                (numOptions + index + (next ? 1 : -1)) % numOptions;
            items[nextIndex].focus({ preventScroll: this.isUnboundedMenuEnabled_() });
        }
    }
    async onMenuPointerenter_() {
        this.cancelCloseTimer_();
        await this.fetchTabSuggestions_();
        // If all eligible tabs were closed while the menu remained open, close it
        // so an empty modal dialog is not left on screen.
        if (!this.hasTabSuggestions_ && this.$.tabMenu.open) {
            this.$.tabMenu.close();
        }
    }
    onMenuPointermove_() {
        this.setFocusOutlineVisible_(false);
    }
    onMenuPointerleave_() {
        this.scheduleCloseTimer_();
    }
    onMenuClose_() {
        this.shouldOpenMenu_ = false;
        ++this.openMenuRequestId_;
        this.menuOpenStartTime_ = null;
        this.tabMenuOpen = false;
        if (!FocusOutlineManager.forDocument(document).visible) {
            this.$.shareTabsTrigger.blur();
        }
    }
    onMenuUnboundedShown_() {
        if (this.menuOpenStartTime_ === null) {
            return;
        }
        const latencyMs = Math.round(performance.now() - this.menuOpenStartTime_);
        this.menuOpenStartTime_ = null;
        this.recordMenuOpenMetrics_(TabPickerUnboundedPresentationResult.SHOWN_UNBOUNDED, latencyMs);
    }
    onMenuUnboundedShowError_() {
        this.menuOpenStartTime_ = null;
        this.recordUnboundedResult_(TabPickerUnboundedPresentationResult.SHOW_UNBOUNDED_ELEMENT_FAILED);
    }
    onTabClick_(e) {
        e.stopPropagation();
        const target = e.currentTarget;
        const index = Number(target.dataset['index']);
        const tab = this.tabSuggestions[index];
        if (!tab) {
            return;
        }
        if (this.isTabDisabled_(tab)) {
            return;
        }
        const isSelected = this.isTabSelected_(tab);
        if (isSelected) {
            this.selectedTabs = this.selectedTabs.filter(t => t.tabId !== tab.tabId);
            this.browserProxy_.deleteTabContext(tab.tabId);
            this.recordUserActionMetric_('ContextualTasks.TabPicker.UserAction.TabDeselected');
        }
        else {
            this.selectedTabs = [tab, ...this.selectedTabs];
            this.browserProxy_.addTabContext(tab.tabId);
            this.recordUserActionMetric_('ContextualTasks.TabPicker.UserAction.TabSelected');
            const hasActiveTab = this.tabSuggestions.some(t => t.showInCurrentTabChip);
            recordTabPickerTabSelected(TabPickerSurface.CONTEXTUAL_TASKS_EXTENSION, tab.showInCurrentTabChip, index, hasActiveTab);
        }
        this.fire('tab-selected', { tab, selected: !isSelected });
    }
    updateFrameScreenOffset_(e) {
        if (e.screenX !== 0 || e.clientX !== 0 || e.screenY !== 0 ||
            e.clientY !== 0) {
            this.frameScreenOffset_ = {
                x: e.screenX - e.clientX,
                y: e.screenY - e.clientY,
            };
        }
    }
    async openTabMenu_(focusFirstItem = false) {
        const wasOpen = this.$.tabMenu.open;
        const startTime = performance.now();
        const requestId = ++this.openMenuRequestId_;
        await this.fetchTabSuggestions_();
        await this.updateComplete;
        if (!this.hasTabSuggestions_) {
            // `openTabMenu_()` can be triggered on hover while `#tabMenu` is already
            // open; if all eligible tabs were closed in the meantime, close the
            // already-open menu so an empty modal dialog does not stay visible.
            if (this.$.tabMenu.open) {
                this.$.tabMenu.close();
            }
            return;
        }
        if (wasOpen || !this.shouldOpenMenu_ || this.$.tabMenu.open ||
            requestId !== this.openMenuRequestId_ || !this.isConnected) {
            return;
        }
        assert(this.isUnboundedMenuEnabled_());
        let isApiSupported = true;
        if (!this.$.tabMenu.getDialog().hasAttribute('unbounded')) {
            isApiSupported =
                await (this.unboundedInitPromise_ ?? this.$.tabMenu.setUnbounded());
            // Abort if the pointer left or the menu state changed while awaiting
            // setUnbounded().
            if (!this.shouldOpenMenu_ || this.$.tabMenu.open ||
                requestId !== this.openMenuRequestId_ || !this.isConnected) {
                return;
            }
        }
        this.menuOpenStartTime_ = startTime;
        this.tabMenuOpen = true;
        const config = {
            anchorAlignmentX: AnchorAlignment.AFTER_END,
            anchorAlignmentY: AnchorAlignment.AFTER_START,
            noOffset: true,
        };
        if (this.isUnboundedMenuEnabled_() && this.frameScreenOffset_) {
            // window.screenX/screenY reports the top-level browser window origin
            // rather than the extension iframe's screen origin. Compute screen
            // bounds relative to the iframe viewport so cr-action-menu flips the
            // flyout when the side panel is docked near the right screen edge.
            const availLeft = window.screen.availLeft ?? 0;
            const availTop = window.screen.availTop ?? 0;
            config.minX = availLeft - this.frameScreenOffset_.x;
            config.minY = availTop - this.frameScreenOffset_.y;
            config.maxX =
                availLeft + window.screen.availWidth - this.frameScreenOffset_.x;
            config.maxY =
                availTop + window.screen.availHeight - this.frameScreenOffset_.y;
        }
        this.$.tabMenu.showAt(this.$.shareTabsTrigger, config);
        if (focusFirstItem) {
            this.focusFirstTabItem_();
            requestAnimationFrame(() => {
                if (this.$.tabMenu.open) {
                    this.focusFirstTabItem_();
                }
            });
        }
        if (!isApiSupported) {
            this.menuOpenStartTime_ = null;
            this.recordMenuOpenMetrics_(TabPickerUnboundedPresentationResult.FALLBACK_API_UNSUPPORTED, Math.round(performance.now() - startTime));
        }
    }
    focusFirstTabItem_() {
        const firstItem = this.$.tabMenu.querySelector('button.dropdown-item:not([disabled])');
        firstItem?.focus({ preventScroll: this.isUnboundedMenuEnabled_() });
    }
    async openTabMenuForTesting() {
        this.shouldOpenMenu_ = true;
        await this.openTabMenu_();
        await Promise.resolve();
    }
    recordMenuOpenMetrics_(result, latencyMs) {
        this.recordUnboundedResult_(result);
        this.recordLatencyMetric_('ContextualTasks.TabPicker.MenuOpenLatencyMs', latencyMs);
    }
    recordLatencyMetric_(metricName, latencyMs) {
        const metricsService = chrome.histograms || chrome.metricsPrivate;
        if (metricsService) {
            metricsService.recordMediumTime(metricName, latencyMs);
        }
    }
    recordUserActionMetric_(metricName) {
        const metricsService = chrome.histograms || chrome.metricsPrivate;
        if (metricsService) {
            metricsService.recordBoolean(metricName, true);
        }
    }
    recordUnboundedResult_(result) {
        const metricsService = chrome.histograms || chrome.metricsPrivate;
        if (metricsService) {
            metricsService.recordEnumerationValue('ContextualTasks.TabPicker.UnboundedPresentationResult', result, TabPickerUnboundedPresentationResult.MAX_VALUE);
        }
    }
    scheduleCloseTimer_() {
        this.cancelCloseTimer_();
        this.closeTimer_ = window.setTimeout(() => {
            this.closeTimer_ = null;
            if (this.$.tabMenu.open) {
                this.$.tabMenu.close();
                this.$.shareTabsTrigger.blur();
            }
        }, CLOSE_MENU_DELAY_MS);
    }
    cancelCloseTimer_() {
        if (this.closeTimer_ !== null) {
            window.clearTimeout(this.closeTimer_);
            this.closeTimer_ = null;
        }
    }
}
customElements.define(TabPickerAppElement.is, TabPickerAppElement);
