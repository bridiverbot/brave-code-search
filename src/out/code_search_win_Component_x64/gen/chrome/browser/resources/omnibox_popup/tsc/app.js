// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/searchbox/searchbox_dropdown.js';
import '//resources/cr_elements/icons.html.js';
import './omnibox_popup_contextual_entrypoint.js';
import '/strings.m.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { SearchboxBrowserProxy } from '//resources/cr_components/searchbox/searchbox_browser_proxy.js';
import { kDefaultSelection } from '//resources/cr_components/searchbox/searchbox_match.js';
import { SearchboxSelectionMixin, selectionIsNativelySupported, selectionsEqual, selectionToString } from '//resources/cr_components/searchbox/searchbox_selection_mixin.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assertNotReached } from '//resources/js/assert.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { MetricsReporterImpl } from '//resources/js/metrics_reporter/metrics_reporter.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SelectionLineState } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
// 675px ~= 449px (--cr-realbox-primary-side-min-width) * 1.5 + some margin.
const canShowSecondarySideMediaQueryList = window.matchMedia('(min-width: 675px)');
// Displays the autocomplete matches in the autocomplete result.
export class OmniboxPopupAppElement extends SearchboxSelectionMixin(I18nMixinLit(CrLitElement)) {
    static get is() {
        return 'omnibox-popup-app';
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
             * Whether the secondary side can be shown based on the feature state and
             * the width available to the dropdown.
             */
            canShowSecondarySide: {
                type: Boolean,
                reflect: true,
            },
            /*
             * Whether the secondary side is currently available to be shown.
             */
            hasSecondarySide: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Whether the app is in debug mode.
             */
            isDebug: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Whether matches are visible, as some may be hidden by filtering rules
             * (e.g., Gemini suggestions).
             */
            hasVisibleMatches_: {
                type: Boolean,
                reflect: true,
            },
            result_: { type: Object },
            isAimButtonVisible_: { type: Boolean },
            webuiOmniboxPopupSelectionControlEnabled_: { type: Boolean },
        };
    }
    #canShowSecondarySide_accessor_storage = canShowSecondarySideMediaQueryList.matches;
    get canShowSecondarySide() { return this.#canShowSecondarySide_accessor_storage; }
    set canShowSecondarySide(value) { this.#canShowSecondarySide_accessor_storage = value; }
    #hasSecondarySide_accessor_storage = false;
    get hasSecondarySide() { return this.#hasSecondarySide_accessor_storage; }
    set hasSecondarySide(value) { this.#hasSecondarySide_accessor_storage = value; }
    #isDebug_accessor_storage = false;
    get isDebug() { return this.#isDebug_accessor_storage; }
    set isDebug(value) { this.#isDebug_accessor_storage = value; }
    #hasVisibleMatches__accessor_storage = false;
    get hasVisibleMatches_() { return this.#hasVisibleMatches__accessor_storage; }
    set hasVisibleMatches_(value) { this.#hasVisibleMatches__accessor_storage = value; }
    #result__accessor_storage = null;
    get result_() { return this.#result__accessor_storage; }
    set result_(value) { this.#result__accessor_storage = value; }
    #webuiOmniboxPopupSelectionControlEnabled__accessor_storage = loadTimeData.getBoolean('webuiOmniboxPopupSelectionControlEnabled');
    get webuiOmniboxPopupSelectionControlEnabled_() { return this.#webuiOmniboxPopupSelectionControlEnabled__accessor_storage; }
    set webuiOmniboxPopupSelectionControlEnabled_(value) { this.#webuiOmniboxPopupSelectionControlEnabled__accessor_storage = value; }
    #isAimButtonVisible__accessor_storage = false;
    get isAimButtonVisible_() { return this.#isAimButtonVisible__accessor_storage; }
    set isAimButtonVisible_(value) { this.#isAimButtonVisible__accessor_storage = value; }
    get isAimButtonVisible() {
        return this.isAimButtonVisible_;
    }
    get showContextEntrypoint() {
        return this.shadowRoot
            ?.querySelector('omnibox-popup-contextual-entrypoint')
            ?.showContextEntrypoint ??
            false;
    }
    searchboxBrowserProxy_;
    eventTracker_ = new EventTracker();
    listenerIds_ = [];
    constructor() {
        super();
        this.searchboxBrowserProxy_ = SearchboxBrowserProxy.getInstance();
        this.isDebug = new URLSearchParams(window.location.search).has('debug');
        ColorChangeUpdater.forDocument().start();
    }
    connectedCallback() {
        super.connectedCallback();
        // Force an initial refresh to avoid the race condition where the profile
        // theme loads after the page, but before the listener is ready.
        ColorChangeUpdater.forDocument().refreshColorsCss();
        this.listenerIds_ = [
            this.searchboxBrowserProxy_.callbackRouter.autocompleteResultChanged
                .addListener(this.onAutocompleteResultChanged_.bind(this)),
            this.searchboxBrowserProxy_.callbackRouter.updateSelection.addListener(this.onUpdateSelection_.bind(this)),
        ];
        if (this.webuiOmniboxPopupSelectionControlEnabled_) {
            this.listenerIds_.push(this.searchboxBrowserProxy_.callbackRouter.stepSelection.addListener(this.stepSelection_.bind(this)), this.searchboxBrowserProxy_.callbackRouter.openCurrentSelection
                .addListener(this.openCurrentSelection_.bind(this)), this.searchboxBrowserProxy_.callbackRouter.setAimButtonVisible
                .addListener((visible) => {
                this.isAimButtonVisible_ = visible;
            }));
        }
        this.eventTracker_.add(canShowSecondarySideMediaQueryList, 'change', this.onCanShowSecondarySideChanged_.bind(this));
        if (!this.isDebug) {
            this.eventTracker_.add(document.documentElement, 'contextmenu', (e) => {
                e.preventDefault();
            });
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
        for (const listenerId of this.listenerIds_) {
            this.searchboxBrowserProxy_.callbackRouter.removeListener(listenerId);
        }
        this.listenerIds_ = [];
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('result_')) {
            this.hasVisibleMatches_ =
                this.result_?.matches.some(match => !match.isHidden) ?? false;
        }
    }
    getDropdown() {
        // Because there are 2 different cr-searchbox-dropdown instances that can be
        // exclusively shown, should always query the DOM to get the relevant one
        // and can't use this.$ to access it.
        return this.shadowRoot.querySelector('cr-searchbox-dropdown');
    }
    onCanShowSecondarySideChanged_(e) {
        this.canShowSecondarySide = e.matches;
    }
    onAutocompleteResultChanged_(result) {
        // Skip empty results. Otherwise, blurring/closing the omnibox would clear
        // the results in the debug UI.
        if (this.isDebug && !result.matches.length) {
            return;
        }
        this.result_ = result;
        if (this.webuiOmniboxPopupSelectionControlEnabled_) {
            const available = this.getAvailableSelections(this.result_);
            const sameLineSelection = {
                ...this.selection,
                state: SelectionLineState.kNormal,
            };
            if (result.matches[0]?.allowedToBeDefaultMatch) {
                this.setSelection(available[0] || kDefaultSelection);
            }
            else if (available.some(s => selectionsEqual(s, sameLineSelection))) {
                this.setSelection(sameLineSelection);
            }
            else {
                this.setSelection(kDefaultSelection);
            }
            return;
        }
        if (result.matches[0]?.allowedToBeDefaultMatch) {
            this.getDropdown().selectFirst();
        }
        else if (this.getDropdown().selectedMatchIndex >= result.matches.length) {
            this.getDropdown().unselect();
        }
    }
    getContextualEntrypointButton_() {
        return this.shadowRoot
            .querySelector('omnibox-popup-contextual-entrypoint')
            ?.getContextEntrypointElement() ??
            null;
    }
    onDropdownDomChange_() {
        const metricsReporter = MetricsReporterImpl.getInstance();
        metricsReporter.measure('ResultChanged')
            .then(duration => metricsReporter.umaReportTime(loadTimeData.getString('resultChangedToPaintMetricName'), duration))
            .then(() => metricsReporter.clearMark('ResultChanged'))
            // Ignore silently if mark 'ResultChanged' is missing.
            .catch(() => { });
    }
    onUpdateSelection_(oldSelection, selection) {
        if (this.webuiOmniboxPopupSelectionControlEnabled_) {
            this.setSelection(selection, false);
        }
        else {
            this.getDropdown().updateSelection(oldSelection, selection);
        }
    }
    setSelection(selection, notify = true) {
        const oldSelection = this.selection;
        super.setSelection(selection);
        this.getDropdown().updateSelection(oldSelection, this.selection);
        if (notify && this.webuiOmniboxPopupSelectionControlEnabled_) {
            this.searchboxBrowserProxy_.handler.setPopupSelection(selectionIsNativelySupported(this.selection) ? this.selection :
                kDefaultSelection);
        }
        const entrypoint = this.getContextualEntrypointButton_();
        if (entrypoint) {
            entrypoint.hasVirtualFocus = this.isContextEntrypointVirtualFocused();
        }
    }
    // Changes the current popup selection to the next selection in the order of
    // all available selections. That is, it translates a user intent (the given
    // `direction` and `step`) into a change of popup-focus (distinct from actual
    // browser/input focus, popup-focus shows what item from the popup will be
    // opened when user presses Enter).
    stepSelection_(direction, step) {
        if (!this.result_) {
            return;
        }
        this.setSelection(this.getNextSelection(this.result_, this.selection, direction, step));
    }
    // Opens the current popup selection (the one visually indicated by the
    // element with popup-focus).
    openCurrentSelection_(disposition) {
        if (this.isContextEntrypointVirtualFocused()) {
            this.getContextualEntrypointButton_()?.showContextMenu();
        }
        else if (selectionIsNativelySupported(this.selection)) {
            this.searchboxBrowserProxy_.handler.openPopupSelection(this.result_?.sequenceId || 0, this.selection, disposition);
        }
        else {
            assertNotReached(`openCurrentSelection_ called for unsupported selection: ${selectionToString(this.selection)}`);
        }
    }
    onHasSecondarySideChanged_(e) {
        this.hasSecondarySide = e.detail.value;
    }
}
customElements.define(OmniboxPopupAppElement.is, OmniboxPopupAppElement);
