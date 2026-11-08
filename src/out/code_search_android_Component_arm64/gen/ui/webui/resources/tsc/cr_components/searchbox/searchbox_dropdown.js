// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './searchbox_match.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { MetricsReporterImpl } from '//resources/js/metrics_reporter/metrics_reporter.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { RenderType, SelectionLineState, SideType } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { getCss } from './searchbox_dropdown.css.js';
import { getHtml } from './searchbox_dropdown.html.js';
import { kDefaultSelection } from './searchbox_match.js';
import { selectionsEqual } from './searchbox_selection_mixin.js';
import { renderTypeToClass, sideTypeToClass } from './utils.js';
// The '%' operator in JS returns negative numbers. This workaround avoids that.
const remainder = (lhs, rhs) => ((lhs % rhs) + rhs) % rhs;
// A dropdown element that contains autocomplete matches. Provides an API for
// the embedder (i.e., <cr-searchbox>) to change the selection.
export class SearchboxDropdownElement extends CrLitElement {
    static get is() {
        return 'cr-searchbox-dropdown';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            //========================================================================
            // Public properties
            //========================================================================
            /**
             * Whether the secondary side can be shown based on the feature state and
             * the width available to the dropdown.
             */
            canShowSecondarySide: { type: Boolean },
            /*
             * Whether the secondary side is currently available to be shown.
             */
            hasSecondarySide: {
                type: Boolean,
                notify: true,
                reflect: true,
            },
            hasEmptyInput: {
                type: Boolean,
                reflect: true,
            },
            result: { type: Object },
            // TODO(crbug.com/519713849): Remove selectedMatchIndex once
            // kRealboxVirtualFocusNavigation is launched.
            selectedMatchIndex: {
                type: Number,
                notify: true,
            },
            /** Omnibox focused selection state. */
            selection: {
                type: Object,
                notify: true,
            },
            showThumbnail: { type: Boolean },
            virtualFocusEnabled: { type: Boolean },
            //========================================================================
            // Private properties
            //========================================================================
            /**
             * Computed value for whether or not the dropdown should show the
             * secondary side. This depends on whether the parent has set
             * `canShowSecondarySide` to true and whether there are visible primary
             * matches.
             */
            showSecondarySide_: { type: Boolean },
        };
    }
    #canShowSecondarySide_accessor_storage = false;
    get canShowSecondarySide() { return this.#canShowSecondarySide_accessor_storage; }
    set canShowSecondarySide(value) { this.#canShowSecondarySide_accessor_storage = value; }
    #hasSecondarySide_accessor_storage = false;
    get hasSecondarySide() { return this.#hasSecondarySide_accessor_storage; }
    set hasSecondarySide(value) { this.#hasSecondarySide_accessor_storage = value; }
    #hasEmptyInput_accessor_storage = false;
    get hasEmptyInput() { return this.#hasEmptyInput_accessor_storage; }
    set hasEmptyInput(value) { this.#hasEmptyInput_accessor_storage = value; }
    #result_accessor_storage = null;
    get result() { return this.#result_accessor_storage; }
    set result(value) { this.#result_accessor_storage = value; }
    #selectedMatchIndex_accessor_storage = -1;
    // TODO(crbug.com/519713849): Remove selectedMatchIndex once
    // kRealboxVirtualFocusNavigation is launched.
    get selectedMatchIndex() { return this.#selectedMatchIndex_accessor_storage; }
    set selectedMatchIndex(value) { this.#selectedMatchIndex_accessor_storage = value; }
    #selection_accessor_storage = kDefaultSelection;
    get selection() { return this.#selection_accessor_storage; }
    set selection(value) { this.#selection_accessor_storage = value; }
    #showThumbnail_accessor_storage = false;
    get showThumbnail() { return this.#showThumbnail_accessor_storage; }
    set showThumbnail(value) { this.#showThumbnail_accessor_storage = value; }
    #virtualFocusEnabled_accessor_storage = loadTimeData.valueExists('realboxVirtualFocusNavigation') &&
        loadTimeData.getBoolean('realboxVirtualFocusNavigation');
    get virtualFocusEnabled() { return this.#virtualFocusEnabled_accessor_storage; }
    set virtualFocusEnabled(value) { this.#virtualFocusEnabled_accessor_storage = value; }
    #showSecondarySide__accessor_storage = false;
    get showSecondarySide_() { return this.#showSecondarySide__accessor_storage; }
    set showSecondarySide_(value) { this.#showSecondarySide__accessor_storage = value; }
    // Hiding duplicate descriptions is only needed when the
    // Omnibox_AskGSuggestionSidePanelDescription param is on, since that's when
    // the AskG action match and contextual suggestions share a description.
    hideDuplicateDescriptions_ = loadTimeData.valueExists('askGSuggestionSidePanelDescription') &&
        loadTimeData.getBoolean('askGSuggestionSidePanelDescription');
    // Descriptions shown both by a match that only shows its description on
    // selection (e.g. a contextual suggestion) and by one that always shows it.
    duplicateDescriptions_ = new Set();
    /** The list of selectable match elements. */
    selectableMatchElements_ = [];
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('result')) {
            this.hasSecondarySide = this.computeHasSecondarySide_();
            this.hasEmptyInput = this.computeHasEmptyInput_();
            this.duplicateDescriptions_ = this.computeDuplicateDescriptions_();
        }
        if (changedProperties.has('result') ||
            changedProperties.has('canShowSecondarySide')) {
            this.showSecondarySide_ = this.computeShowSecondarySide_();
        }
        if (changedProperties.has('result') && this.virtualFocusEnabled) {
            if (this.selection.state !== SelectionLineState.kNormal &&
                this.selection.state !== SelectionLineState.kFocusedButtonAim) {
                this.selection = {
                    line: this.selection.line,
                    state: SelectionLineState.kNormal,
                    actionIndex: 0,
                };
                this.fire('selection-changed', { value: this.selection });
            }
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        this.onResultRepaint_();
        // Update the list of selectable match elements.
        this.selectableMatchElements_ =
            [...this.shadowRoot.querySelectorAll('cr-searchbox-match')];
    }
    //============================================================================
    // Public methods
    //============================================================================
    /** Filters out secondary matches, if any, unless they can be shown. */
    get selectableMatchElements() {
        return this.selectableMatchElements_.filter(matchEl => matchEl.sideType === SideType.kDefaultPrimary ||
            this.showSecondarySide_);
    }
    /** Unselects the currently selected match, if any. */
    unselect() {
        this.selectedMatchIndex = -1;
        this.selection = kDefaultSelection;
        if (this.virtualFocusEnabled) {
            this.fire('selection-changed', { value: this.selection });
        }
    }
    /** Focuses the selected match, if any. */
    focusSelected() {
        this.selectableMatchElements[this.selectedMatchIndex]?.focus();
    }
    /** Selects the first match. */
    selectFirst() {
        return this.selectIndex(0);
    }
    /** Selects the match at the given index. */
    selectIndex(index) {
        this.selectedMatchIndex = index;
        if (this.virtualFocusEnabled) {
            const match = this.result?.matches[index];
            const newSelection = match && (!match.isHidden || match.allowedToBeDefaultMatch) ?
                {
                    line: index,
                    state: SelectionLineState.kNormal,
                    actionIndex: 0,
                } :
                kDefaultSelection;
            if (!selectionsEqual(this.selection, newSelection)) {
                this.selection = newSelection;
                this.fire('selection-changed', { value: this.selection });
            }
        }
        return this.updateComplete;
    }
    updateSelection(_oldSelection, selection) {
        this.selectIndex(selection.line);
        this.selection = selection;
    }
    /**
     * Selects the previous match with respect to the currently selected one.
     * Selects the last match if the first one or no match is currently selected.
     */
    selectPrevious() {
        // The value of -1 for |this.selectedMatchIndex| indicates no selection.
        // Therefore subtract one from the maximum of its value and 0.
        const previous = Math.max(this.selectedMatchIndex, 0) - 1;
        this.selectedMatchIndex =
            remainder(previous, this.selectableMatchElements.length);
        return this.updateComplete;
    }
    /** Selects the last match. */
    selectLast() {
        this.selectedMatchIndex = this.selectableMatchElements.length - 1;
        return this.updateComplete;
    }
    /**
     * Selects the next match with respect to the currently selected one.
     * Selects the first match if the last one or no match is currently selected.
     */
    selectNext() {
        const next = this.selectedMatchIndex + 1;
        this.selectedMatchIndex =
            remainder(next, this.selectableMatchElements.length);
        return this.updateComplete;
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onHeaderMousedown_(e) {
        e.preventDefault(); // Prevents default browser action (focus).
    }
    onResultRepaint_() {
        if (!loadTimeData.getBoolean('reportMetrics')) {
            return;
        }
        const metricsReporter = MetricsReporterImpl.getInstance();
        metricsReporter.measure('CharTyped')
            .then(duration => {
            metricsReporter.umaReportTime(loadTimeData.getString('charTypedToPaintMetricName'), duration);
        })
            .then(() => {
            metricsReporter.clearMark('CharTyped');
        })
            .catch(() => { }); // Fail silently if 'CharTyped' is not marked.
        metricsReporter.measure('ResultChanged')
            .then(duration => {
            metricsReporter.umaReportTime(loadTimeData.getString('resultChangedToPaintMetricName'), duration);
        })
            .then(() => {
            metricsReporter.clearMark('ResultChanged');
        })
            .catch(() => { }); // Fail silently if 'ResultChanged' is not marked.
    }
    //============================================================================
    // Helpers
    //============================================================================
    sideTypeClass_(side) {
        return sideTypeToClass(side);
    }
    renderTypeClassForGroup_(groupId) {
        return renderTypeToClass(this.result?.suggestionGroupsMap[groupId]?.renderType ??
            RenderType.kDefaultVertical);
    }
    computeHasSecondarySide_() {
        return !!this.groupIdsForSideType_(SideType.kSecondary).length;
    }
    computeHasEmptyInput_() {
        return !!this.result && this.result.input === '';
    }
    computeDuplicateDescriptions_() {
        const onSelection = new Set();
        const always = new Set();
        if (this.hideDuplicateDescriptions_) {
            for (const match of this.result?.matches ?? []) {
                const description = match.suggestTemplate.secondaryText?.text;
                if (description) {
                    (match.showSecondaryTextOnlyOnSelection ? onSelection : always)
                        .add(description);
                }
            }
        }
        return new Set([...onSelection].filter(d => always.has(d)));
    }
    isSelected_(match) {
        const selectedIndex = this.virtualFocusEnabled ? this.selection.line :
            this.selectedMatchIndex;
        return this.matchIndex_(match) === selectedIndex;
    }
    /**
     * Whether a match of the other kind (showing its description only on
     * selection or always) has the same description as the match. The CSS uses
     * this to show only one copy at a time.
     */
    hasDuplicateDescription_(match) {
        return this.duplicateDescriptions_.has(match.suggestTemplate.secondaryText?.text ?? '');
    }
    /**
     * @returns The unique suggestion group IDs that belong to the given side type
     *     while preserving the order in which they appear in the list of matches.
     */
    groupIdsForSideType_(side) {
        return [...new Set(this.result?.matches.map(match => match.suggestionGroupId)
                .filter(groupId => this.sideTypeForGroup_(groupId) === side))];
    }
    /**
     * @returns Whether the given suggestion group ID has a header.
     */
    hasHeaderForGroup_(groupId) {
        return !!this.headerForGroup_(groupId);
    }
    getAriaDescribedByForGroup_(groupId) {
        return this.hasHeaderForGroup_(groupId) ? `hg_${groupId}` : '';
    }
    /**
     * @returns The header for the given suggestion group ID, if any.
     */
    headerForGroup_(groupId) {
        return this.result?.suggestionGroupsMap[groupId] ?
            this.result.suggestionGroupsMap[groupId].header :
            '';
    }
    /**
     * @returns Index of the match in the autocomplete result. Passed to the match
     *     so it knows its position in the list of matches.
     */
    matchIndex_(match) {
        return this.result?.matches.indexOf(match) ?? -1;
    }
    /**
     * @returns The list of visible matches that belong to the given suggestion
     *     group ID.
     */
    matchesForGroup_(groupId) {
        return (this.result?.matches ?? [])
            .filter(match => (match.suggestionGroupId === groupId && !match.isHidden));
    }
    /**
     * @returns The list of side types to show.
     */
    sideTypes_() {
        return this.showSecondarySide_ ?
            [SideType.kDefaultPrimary, SideType.kSecondary] :
            [SideType.kDefaultPrimary];
    }
    /**
     * @returns The side type for the given suggestion group ID.
     */
    sideTypeForGroup_(groupId) {
        return this.result?.suggestionGroupsMap[groupId]?.sideType ??
            SideType.kDefaultPrimary;
    }
    computeShowSecondarySide_() {
        if (!this.canShowSecondarySide) {
            // Parent prohibits showing secondary side.
            return false;
        }
        // Only show secondary side if there are primary matches visible.
        const primaryGroupIds = this.groupIdsForSideType_(SideType.kDefaultPrimary);
        return primaryGroupIds.some((groupId) => {
            return this.matchesForGroup_(groupId).length > 0;
        });
    }
}
customElements.define(SearchboxDropdownElement.is, SearchboxDropdownElement);
