// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '/strings.m.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { getFaviconForPageURL } from 'chrome://resources/js/icon.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app_refresh.css.js';
import { getHtml } from './app_refresh.html.js';
import { browserProxyFactory, PageHandler_ScrollState } from './search_engine_choice.mojom-webui.js';
export function doElementsOverlap(firstElement, secondElement, offset = 0) {
    return !(firstElement.right + offset < secondElement.left ||
        firstElement.left - offset > secondElement.right ||
        firstElement.bottom < secondElement.top ||
        firstElement.top > secondElement.bottom);
}
const AppRefreshElementBase = I18nMixinLit(CrLitElement);
export class AppRefreshElement extends AppRefreshElementBase {
    static get is() {
        return 'search-engine-choice-app-refresh';
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
             * The choice list is passed as JSON because it doesn't change
             * dynamically, so it would be better to have it available as loadtime
             * data.
             */
            choiceList_: { type: Array },
            // The choice will always be > 0 when selected for prepopulated engines
            // and == 0 for a custom search engine.
            selectedChoice_: { type: Number },
            isActionButtonDisabled_: { type: Boolean },
            actionButtonText_: { type: String },
            hasUserScrolledToTheBottom_: { type: Boolean },
            showInfoDialog_: { type: Boolean },
            // Exposed to CSS as 'use-horizontal-mode_'.
            useHorizontalMode_: { type: Boolean, reflect: true },
            saveGuestModeSearchEngineChoice_: { type: Boolean },
            showGuestCheckbox_: { type: Boolean },
        };
    }
    #choiceList__accessor_storage = JSON.parse(loadTimeData.getString('choiceList'));
    get choiceList_() { return this.#choiceList__accessor_storage; }
    set choiceList_(value) { this.#choiceList__accessor_storage = value; }
    #selectedChoice__accessor_storage = -1;
    get selectedChoice_() { return this.#selectedChoice__accessor_storage; }
    set selectedChoice_(value) { this.#selectedChoice__accessor_storage = value; }
    #isActionButtonDisabled__accessor_storage = false;
    get isActionButtonDisabled_() { return this.#isActionButtonDisabled__accessor_storage; }
    set isActionButtonDisabled_(value) { this.#isActionButtonDisabled__accessor_storage = value; }
    #hasUserScrolledToTheBottom__accessor_storage = false;
    get hasUserScrolledToTheBottom_() { return this.#hasUserScrolledToTheBottom__accessor_storage; }
    set hasUserScrolledToTheBottom_(value) { this.#hasUserScrolledToTheBottom__accessor_storage = value; }
    #showInfoDialog__accessor_storage = false;
    get showInfoDialog_() { return this.#showInfoDialog__accessor_storage; }
    set showInfoDialog_(value) { this.#showInfoDialog__accessor_storage = value; }
    #actionButtonText__accessor_storage = '';
    get actionButtonText_() { return this.#actionButtonText__accessor_storage; }
    set actionButtonText_(value) { this.#actionButtonText__accessor_storage = value; }
    #useHorizontalMode__accessor_storage = false;
    get useHorizontalMode_() { return this.#useHorizontalMode__accessor_storage; }
    set useHorizontalMode_(value) { this.#useHorizontalMode__accessor_storage = value; }
    #showGuestCheckbox__accessor_storage = loadTimeData.getBoolean('showGuestCheckbox');
    get showGuestCheckbox_() { return this.#showGuestCheckbox__accessor_storage; }
    set showGuestCheckbox_(value) { this.#showGuestCheckbox__accessor_storage = value; }
    #saveGuestModeSearchEngineChoice__accessor_storage = false;
    get saveGuestModeSearchEngineChoice_() { return this.#saveGuestModeSearchEngineChoice__accessor_storage; }
    set saveGuestModeSearchEngineChoice_(value) { this.#saveGuestModeSearchEngineChoice__accessor_storage = value; }
    mediaQueryList_ = window.matchMedia('(max-width: 840px), (max-height: 640px)');
    resizeObserver_ = null;
    pageHandler_ = browserProxyFactory.getInstance().handler;
    connectedCallback() {
        this.useHorizontalMode_ = this.mediaQueryList_.matches;
        // Change the `icon_path` format so that it can be used with the
        // `background-image` property in HTML. The
        // `background-image` property should be used because `getFaviconForPageURL`
        // returns an `image-set` and not a url.
        this.choiceList_.forEach((searchEngine) => {
            if (searchEngine.prepopulateId === 0) {
                // Fetch the favicon from the Favicon Service for custom search
                // engines.
                searchEngine.iconPath =
                    getFaviconForPageURL(searchEngine.url, false, '', 24);
            }
            else {
                searchEngine.iconPath = 'image-set(url(' + searchEngine.iconPath +
                    ') 1x, url(' + searchEngine.iconPath + '@2x) 2x)';
            }
        });
        super.connectedCallback();
        this.addResizeObserver_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver_.disconnect();
        this.mediaQueryList_.removeEventListener('change', this.onLayoutChange_);
        const scrollTarget = this.useHorizontalMode_ ? window : this.$.choiceList;
        scrollTarget.removeEventListener('scroll', this.onPageScroll_);
        scrollTarget.removeEventListener('scrollend', this.onPageScrollEnd_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('selectedChoice_')) {
            this.onSelectedChoiceChanged_(this.selectedChoice_, changedPrivateProperties.get('selectedChoice_'));
        }
        if (changedPrivateProperties.has('hasUserScrolledToTheBottom_')) {
            this.actionButtonText_ = this.i18n(this.hasUserScrolledToTheBottom_ ? 'submitButtonText' :
                'moreButtonText');
        }
        if (changedPrivateProperties.has('hasUserScrolledToTheBottom_') ||
            changedPrivateProperties.has('selectedChoice_')) {
            // The action button will be disabled if the user scrolls to the bottom of
            // the list without making a search engine choice.
            this.isActionButtonDisabled_ =
                this.hasUserScrolledToTheBottom_ && this.selectedChoice_ === -1;
        }
    }
    firstUpdated() {
        const metrics = this.getScrollMetrics_();
        const isPageScrollable = metrics.scrollHeight > metrics.clientHeight;
        // If the choiceList doesn't contain a scrollbar then the user is already
        // at the bottom.
        this.hasUserScrolledToTheBottom_ = !isPageScrollable;
        if (isPageScrollable) {
            const scrollTarget = this.useHorizontalMode_ ? window : this.$.choiceList;
            scrollTarget.addEventListener('scroll', this.onPageScroll_);
        }
        this.mediaQueryList_.addEventListener('change', this.onLayoutChange_);
        this.pageHandler_.displayDialog();
    }
    evaluateOverlap_() {
        // The button container should hide the remaining elements of the list
        // when they overlap so that the search engines and submit button don't
        // block each other.
        const buttonRect = this.$.actionButton.getBoundingClientRect();
        const listRect = this.$.choiceList.getBoundingClientRect();
        // We add an offset to mitigate the change in position caused by the
        // addition of the scrollbar.
        let offset = 0;
        if (this.$.choiceList.classList.contains('overlap-mitigation')) {
            offset = 30;
        }
        // Check if the list overlaps with guest checkbox.
        let isOverlapping = doElementsOverlap(buttonRect, listRect, offset);
        if (this.$.guestCheckbox && !this.$.guestCheckbox.hidden) {
            const checkboxRect = this.$.guestCheckbox.getBoundingClientRect();
            isOverlapping =
                isOverlapping || doElementsOverlap(checkboxRect, listRect, offset);
        }
        // Defer style changes to after the browser repaints to avoid triggering a
        // resize loop. See crbug.com/409406185.
        requestAnimationFrame(() => {
            this.$.choiceList.classList.toggle('overlap-mitigation', isOverlapping);
            this.$.buttonContainer.classList.toggle('overlap-mitigation', isOverlapping);
        });
    }
    addResizeObserver_() {
        this.resizeObserver_ = new ResizeObserver(() => {
            this.evaluateOverlap_();
        });
        this.resizeObserver_.observe(document.body);
        this.resizeObserver_.observe(this.$.choiceList);
    }
    getScrollMetrics_() {
        const scroller = this.useHorizontalMode_ ?
            (document.scrollingElement || document.documentElement) :
            this.$.choiceList;
        return {
            scrollHeight: scroller.scrollHeight,
            clientHeight: scroller.clientHeight,
            scrollTop: this.useHorizontalMode_ ? window.scrollY :
                this.$.choiceList.scrollTop,
        };
    }
    onInfoLinkClick_(e) {
        e.preventDefault();
        this.showInfoDialog_ = true;
        this.pageHandler_.handleLearnMoreLinkClicked();
    }
    onGuestCheckboxCheckedChanged_(e) {
        this.saveGuestModeSearchEngineChoice_ = e.detail.value;
    }
    onActionButtonClick_() {
        if (this.hasUserScrolledToTheBottom_) {
            this.pageHandler_.handleSearchEngineChoiceSelected(this.selectedChoice_, this.showGuestCheckbox_ && this.saveGuestModeSearchEngineChoice_);
            return;
        }
        this.pageHandler_.handleMoreButtonClicked();
        const scrollTarget = this.useHorizontalMode_ ? window : this.$.choiceList;
        const metrics = this.getScrollMetrics_();
        scrollTarget.addEventListener('scrollend', this.onPageScrollEnd_);
        // Force change the "More" button to "Set as default" to prevent users from
        // being blocked on the screen in case of error.
        scrollTarget.scrollTo({ top: metrics.scrollHeight, behavior: 'smooth' });
    }
    handleContentScrollStateUpdate_(forceFullyDisplayed) {
        if (!forceFullyDisplayed &&
            this.getScrollState_() === PageHandler_ScrollState.kNotAtTheBottom) {
            return;
        }
        this.hasUserScrolledToTheBottom_ = true;
        this.$.choiceList.removeEventListener('scroll', this.onPageScroll_);
        this.$.choiceList.removeEventListener('scrollend', this.onPageScrollEnd_);
        window.removeEventListener('scroll', this.onPageScroll_);
        window.removeEventListener('scrollend', this.onPageScrollEnd_);
    }
    getMarketingSnippetClass_(item) {
        return item.showMarketingSnippet ? '' : 'truncate-text';
    }
    onInfoDialogButtonClick_() {
        this.showInfoDialog_ = false;
    }
    resetSnippetState_(prepopulatedId) {
        if (prepopulatedId === -1) {
            return;
        }
        // Get the selected engine.
        const choice = this.choiceList_.find(elem => elem.prepopulateId === prepopulatedId);
        choice.showMarketingSnippet = false;
        this.requestUpdate();
    }
    showSearchEngineSnippet_(prepopulateId) {
        if (prepopulateId === -1) {
            return;
        }
        // Get the selected engine.
        const choice = this.choiceList_.find(elem => elem.prepopulateId === prepopulateId);
        choice.showMarketingSnippet = true;
        this.requestUpdate();
    }
    onChoiceListSelectedChanged_(e) {
        this.selectedChoice_ = Number.parseInt(e.detail.value);
    }
    onSelectedChoiceChanged_(newPrepopulatedId, oldPrepopulatedId) {
        // No search engine selected.
        if (newPrepopulatedId === -1) {
            return;
        }
        if (oldPrepopulatedId !== undefined) {
            chrome.metricsPrivate.recordUserAction('ExpandSearchEngineDescription');
            this.resetSnippetState_(oldPrepopulatedId);
        }
        this.showSearchEngineSnippet_(newPrepopulatedId);
    }
    onLayoutChange_ = (e) => {
        this.useHorizontalMode_ = e.matches;
        requestAnimationFrame(() => {
            const isHorizontal = this.useHorizontalMode_;
            const activeTarget = isHorizontal ? window : this.$.choiceList;
            const inactiveTarget = isHorizontal ? this.$.choiceList : window;
            inactiveTarget.removeEventListener('scroll', this.onPageScroll_);
            inactiveTarget.removeEventListener('scrollend', this.onPageScrollEnd_);
            activeTarget.addEventListener('scroll', this.onPageScroll_);
            this.handleContentScrollStateUpdate_(/*forceFullyDisplayed=*/ false);
        });
    };
    onPageScroll_ = () => {
        this.handleContentScrollStateUpdate_(/*forceFullyDisplayed=*/ false);
    };
    getScrollState_() {
        const metrics = this.getScrollMetrics_();
        const scrollDifference = metrics.scrollHeight - metrics.clientHeight -
            Math.ceil(metrics.scrollTop);
        if (scrollDifference <= 0) {
            return PageHandler_ScrollState.kAtTheBottom;
        }
        return scrollDifference <= 1 ?
            PageHandler_ScrollState.kAtTheBottomWithErrorMargin :
            PageHandler_ScrollState.kNotAtTheBottom;
    }
    // This function is called only when the "More" button is clicked.
    onPageScrollEnd_ = () => {
        this.pageHandler_.recordScrollState(this.getScrollState_());
        this.handleContentScrollStateUpdate_(/*forceFullyDisplayed=*/ true);
    };
}
customElements.define(AppRefreshElement.is, AppRefreshElement);
