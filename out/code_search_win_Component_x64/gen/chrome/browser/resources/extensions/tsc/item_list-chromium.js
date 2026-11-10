// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/managed_footnote/managed_footnote.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import './item.js';
import './mv2_deprecation_panel.js';
import './review_panel.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { DummyItemDelegate } from './item.js';
import { getCss } from './item_list.css.js';
import { getHtml } from './item_list.html.js';
const ExtensionsItemListElementBase = I18nMixinLit(CrLitElement);
export class ExtensionsItemListElement extends ExtensionsItemListElementBase {
    static get is() {
        return 'extensions-item-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            apps: { type: Array },
            extensions: { type: Array },
            delegate: { type: Object },
            inDevMode: {
                type: Boolean,
                reflect: true,
            },
            isMv2DeprecationNoticeDismissed: {
                type: Boolean,
                notify: true,
                reflect: true,
            },
            filter: {
                type: String,
            },
            extensionsPinnedByDefault: {
                type: Boolean,
                reflect: true,
            },
            computedFilter_: { type: Object },
            maxColumns_: { type: Number },
            filteredExtensions_: { type: Array },
            filteredApps_: { type: Array },
            /**
             * List of potentially unsafe extensions that should be visible in the
             * review panel.
             */
            unsafeExtensions_: { type: Array },
            /**
             * List of extensions that are affected by the mv2 deprecation and should
             * be visible in the mv2 deprecation panel.
             */
            mv2DeprecatedExtensions_: { type: Array },
            shownAppsCount_: { type: Number },
            shownExtensionsCount_: { type: Number },
            /**
             * Indicates whether the review panel is shown.
             */
            showSafetyCheckReviewPanel_: { type: Boolean },
            /**
             * Indicates if the review panel has ever been shown.
             */
            reviewPanelShown_: {
                type: Boolean,
                state: true,
            },
            showExtensionsPinnedByDefault_: {
                type: Boolean,
                state: true,
            },
        };
    }
    #apps_accessor_storage = [];
    get apps() { return this.#apps_accessor_storage; }
    set apps(value) { this.#apps_accessor_storage = value; }
    #extensions_accessor_storage = [];
    get extensions() { return this.#extensions_accessor_storage; }
    set extensions(value) { this.#extensions_accessor_storage = value; }
    #delegate_accessor_storage = new DummyItemDelegate();
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #inDevMode_accessor_storage = false;
    get inDevMode() { return this.#inDevMode_accessor_storage; }
    set inDevMode(value) { this.#inDevMode_accessor_storage = value; }
    #isMv2DeprecationNoticeDismissed_accessor_storage = false;
    get isMv2DeprecationNoticeDismissed() { return this.#isMv2DeprecationNoticeDismissed_accessor_storage; }
    set isMv2DeprecationNoticeDismissed(value) { this.#isMv2DeprecationNoticeDismissed_accessor_storage = value; }
    #extensionsPinnedByDefault_accessor_storage = false;
    get extensionsPinnedByDefault() { return this.#extensionsPinnedByDefault_accessor_storage; }
    set extensionsPinnedByDefault(value) { this.#extensionsPinnedByDefault_accessor_storage = value; }
    #filter_accessor_storage = '';
    get filter() { return this.#filter_accessor_storage; }
    set filter(value) { this.#filter_accessor_storage = value; }
    #showExtensionsPinnedByDefault__accessor_storage = loadTimeData.getBoolean('enableExtensionsPinnedByDefault');
    get showExtensionsPinnedByDefault_() { return this.#showExtensionsPinnedByDefault__accessor_storage; }
    set showExtensionsPinnedByDefault_(value) { this.#showExtensionsPinnedByDefault__accessor_storage = value; }
    #filteredExtensions__accessor_storage = [];
    get filteredExtensions_() { return this.#filteredExtensions__accessor_storage; }
    set filteredExtensions_(value) { this.#filteredExtensions__accessor_storage = value; }
    #filteredApps__accessor_storage = [];
    get filteredApps_() { return this.#filteredApps__accessor_storage; }
    set filteredApps_(value) { this.#filteredApps__accessor_storage = value; }
    #computedFilter__accessor_storage = null;
    get computedFilter_() { return this.#computedFilter__accessor_storage; }
    set computedFilter_(value) { this.#computedFilter__accessor_storage = value; }
    #maxColumns__accessor_storage = 3;
    get maxColumns_() { return this.#maxColumns__accessor_storage; }
    set maxColumns_(value) { this.#maxColumns__accessor_storage = value; }
    #unsafeExtensions__accessor_storage = [];
    get unsafeExtensions_() { return this.#unsafeExtensions__accessor_storage; }
    set unsafeExtensions_(value) { this.#unsafeExtensions__accessor_storage = value; }
    #mv2DeprecatedExtensions__accessor_storage = [];
    get mv2DeprecatedExtensions_() { return this.#mv2DeprecatedExtensions__accessor_storage; }
    set mv2DeprecatedExtensions_(value) { this.#mv2DeprecatedExtensions__accessor_storage = value; }
    #shownAppsCount__accessor_storage = 0;
    get shownAppsCount_() { return this.#shownAppsCount__accessor_storage; }
    set shownAppsCount_(value) { this.#shownAppsCount__accessor_storage = value; }
    #shownExtensionsCount__accessor_storage = 0;
    get shownExtensionsCount_() { return this.#shownExtensionsCount__accessor_storage; }
    set shownExtensionsCount_(value) { this.#shownExtensionsCount__accessor_storage = value; }
    #showSafetyCheckReviewPanel__accessor_storage = false;
    get showSafetyCheckReviewPanel_() { return this.#showSafetyCheckReviewPanel__accessor_storage; }
    set showSafetyCheckReviewPanel_(value) { this.#showSafetyCheckReviewPanel__accessor_storage = value; }
    #reviewPanelShown__accessor_storage = false;
    get reviewPanelShown_() { return this.#reviewPanelShown__accessor_storage; }
    set reviewPanelShown_(value) { this.#reviewPanelShown__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('filter')) {
            this.computedFilter_ = this.computeFilter_();
        }
        if (changedProperties.has('filter') ||
            changedProperties.has('extensions')) {
            this.filteredExtensions_ = this.computedFilter_ ?
                this.extensions.filter(extension => this.computedFilter_(extension)) :
                this.extensions;
            this.shownExtensionsCount_ = this.filteredExtensions_.length;
        }
        if (changedProperties.has('filter') || changedProperties.has('apps')) {
            this.filteredApps_ = this.computedFilter_ ?
                this.apps.filter(app => this.computedFilter_(app)) :
                this.apps;
            this.shownAppsCount_ = this.filteredApps_.length;
        }
        if (changedProperties.has('extensions')) {
            this.unsafeExtensions_ = this.computeUnsafeExtensions_();
            this.showSafetyCheckReviewPanel_ =
                this.computeShowSafetyCheckReviewPanel_();
            this.mv2DeprecatedExtensions_ = this.computeMv2DeprecatedExtensions_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('computedFilter_')) {
            this.announceSearchResults_();
        }
    }
    getDetailsButton(id) {
        const item = this.shadowRoot.querySelector(`#${id}`);
        return item && item.getDetailsButton();
    }
    getRemoveButton(id) {
        const item = this.shadowRoot.querySelector(`#${id}`);
        return item && item.getRemoveButton();
    }
    getErrorsButton(id) {
        const item = this.shadowRoot.querySelector(`#${id}`);
        return item && item.getErrorsButton();
    }
    /**
     * Focus the remove button for the item matching `id`. If the remove button is
     * not visible, focus the details button instead.
     * return: If an item's button has been focused, see comment below.
     */
    focusItemButton(id) {
        const item = this.shadowRoot.querySelector(`#${id}`);
        // This function is called from a setTimeout() inside manager.ts. Rarely,
        // the list of extensions rendered in this element may not match the list of
        // extensions stored in manager.ts for a brief moment (not visible to the
        // user). As a result, `item` here may be null even though `id` points to
        // an extension inside `manager.ts`. If this happens, do not focus anything.
        // Observed in crbug.com/40072254.
        if (!item) {
            return false;
        }
        const buttonToFocus = item.getRemoveButton() || item.getDetailsButton();
        buttonToFocus.focus();
        return true;
    }
    /**
     * Computes the filter function to be used for determining which items
     * should be shown. A |null| value indicates that everything should be
     * shown.
     */
    computeFilter_() {
        const formattedFilter = this.filter.trim().toLowerCase();
        if (!formattedFilter) {
            return null;
        }
        return i => [i.name, i.id].some(s => s.toLowerCase().includes(formattedFilter));
    }
    /**
     * Computes the extensions that are affected by the manifest v2 deprecation
     * and should be visible in the MV2 deprecation panel.
     */
    computeMv2DeprecatedExtensions_() {
        return this.extensions.filter((extension) => {
            return extension.isAffectedByMV2Deprecation &&
                extension.disableReasons.unsupportedManifestVersion;
        });
    }
    /**
     * Computes the extensions that are potentially unsafe and should be visible
     * in the review panel.
     */
    computeUnsafeExtensions_() {
        return this.extensions.filter(extension => !!(extension.safetyCheckText &&
            extension.safetyCheckText.panelString));
    }
    /**
     * Returns whether the review deprecation panel should be visible.
     */
    computeShowSafetyCheckReviewPanel_() {
        // If there are any unsafe extensions, they will be shown in the panel.
        // Store this, so we can show the completion info in the panel when there
        // are no unsafe extensions left after the user finished reviewing the
        // extensions.
        if (this.unsafeExtensions_.length !== 0) {
            this.reviewPanelShown_ = true;
        }
        // Panel is visible if there are any unsafe extensions, or the there are
        // none left after the user finished reviewing the extensions.
        return this.unsafeExtensions_.length !== 0 || this.reviewPanelShown_;
    }
    /*
     * Indicates whether the mv2 deprecation panel is shown.
     */
    hasSafetyCheckTriggeringExtension_() {
        for (const extension of this.extensions) {
            if (!!extension.safetyCheckText &&
                !!extension.safetyCheckText.panelString &&
                this.showSafetyCheckReviewPanel_) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns whether the manifest v2 deprecation panel should be visible.
     */
    shouldShowMv2DeprecationPanel_() {
        return !this.isMv2DeprecationNoticeDismissed &&
            this.mv2DeprecatedExtensions_?.length > 0;
    }
    shouldShowEmptyItemsMessage_() {
        return this.apps.length === 0 && this.extensions.length === 0;
    }
    shouldShowEmptySearchMessage_() {
        return !this.shouldShowEmptyItemsMessage_() && this.shownAppsCount_ === 0 &&
            this.shownExtensionsCount_ === 0;
    }
    onNoExtensionsClick_(e) {
        if (e.target.tagName === 'A') {
            chrome.metricsPrivate.recordUserAction('Options_GetMoreExtensions');
        }
    }
    announceSearchResults_() {
        if (this.computedFilter_) {
            setTimeout(() => {
                const total = this.shownAppsCount_ + this.shownExtensionsCount_;
                getAnnouncerInstance().announce(this.shouldShowEmptySearchMessage_() ?
                    this.i18n('noSearchResults') :
                    (total === 1 ?
                        this.i18n('searchResultsSingular', this.filter) :
                        this.i18n('searchResultsPlural', total.toString(), this.filter)));
            }, 0);
        }
    }
    onExtensionsPinnedByDefaultChange_(e) {
        this.delegate.setProfileExtensionsPinnedByDefault(e.detail);
    }
}
customElements.define(ExtensionsItemListElement.is, ExtensionsItemListElement);
