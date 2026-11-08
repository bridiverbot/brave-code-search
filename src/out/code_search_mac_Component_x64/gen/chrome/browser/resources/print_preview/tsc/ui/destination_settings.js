// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import './destination_dialog.js';
import './destination_select.js';
import '/strings.m.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { createRecentDestinationKey, isPdfPrinter, makeRecentDestination, PrinterType } from '../data/destination.js';
import { DestinationErrorType, DestinationStore, DestinationStoreEventType } from '../data/destination_store.js';
import { Error, State } from '../data/state.js';
import { getCss } from './destination_settings.css.js';
import { getHtml } from './destination_settings.html.js';
import { SettingsMixin } from './settings_mixin.js';
export var DestinationState;
(function (DestinationState) {
    DestinationState[DestinationState["INIT"] = 0] = "INIT";
    DestinationState[DestinationState["SET"] = 1] = "SET";
    DestinationState[DestinationState["UPDATED"] = 2] = "UPDATED";
    DestinationState[DestinationState["ERROR"] = 3] = "ERROR";
})(DestinationState || (DestinationState = {}));
/** Number of recent destinations to save. */
export const NUM_PERSISTED_DESTINATIONS = 5;
/**
 * Number of unpinned recent destinations to display.
 * Pinned destinations include "Save as PDF" and "Save to Google Drive".
 */
const NUM_UNPINNED_DESTINATIONS = 3;
const PrintPreviewDestinationSettingsElementBase = I18nMixinLit(WebUiListenerMixinLit(SettingsMixin(CrLitElement)));
export class PrintPreviewDestinationSettingsElement extends PrintPreviewDestinationSettingsElementBase {
    static get is() {
        return 'print-preview-destination-settings';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dark: { type: Boolean },
            destination: {
                type: Object,
                notify: true,
            },
            destinationState: {
                type: Number,
                notify: true,
            },
            disabled: { type: Boolean },
            error: {
                type: Number,
                notify: true,
            },
            firstLoad: { type: Boolean },
            state: { type: Number },
            destinationStore_: { type: Object },
            displayedDestinations_: { type: Array },
            noDestinations_: { type: Boolean },
            pdfPrinterDisabled_: { type: Boolean },
            loaded_: { type: Boolean },
        };
    }
    #dark_accessor_storage = false;
    get dark() { return this.#dark_accessor_storage; }
    set dark(value) { this.#dark_accessor_storage = value; }
    #destination_accessor_storage = null;
    get destination() { return this.#destination_accessor_storage; }
    set destination(value) { this.#destination_accessor_storage = value; }
    #destinationState_accessor_storage = DestinationState.INIT;
    get destinationState() { return this.#destinationState_accessor_storage; }
    set destinationState(value) { this.#destinationState_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #error_accessor_storage = null;
    get error() { return this.#error_accessor_storage; }
    set error(value) { this.#error_accessor_storage = value; }
    #firstLoad_accessor_storage = false;
    get firstLoad() { return this.#firstLoad_accessor_storage; }
    set firstLoad(value) { this.#firstLoad_accessor_storage = value; }
    #state_accessor_storage = State.NOT_READY;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #destinationStore__accessor_storage = null;
    get destinationStore_() { return this.#destinationStore__accessor_storage; }
    set destinationStore_(value) { this.#destinationStore__accessor_storage = value; }
    #displayedDestinations__accessor_storage = [];
    get displayedDestinations_() { return this.#displayedDestinations__accessor_storage; }
    set displayedDestinations_(value) { this.#displayedDestinations__accessor_storage = value; }
    #noDestinations__accessor_storage = false;
    get noDestinations_() { return this.#noDestinations__accessor_storage; }
    set noDestinations_(value) { this.#noDestinations__accessor_storage = value; }
    #pdfPrinterDisabled__accessor_storage = false;
    get pdfPrinterDisabled_() { return this.#pdfPrinterDisabled__accessor_storage; }
    set pdfPrinterDisabled_(value) { this.#pdfPrinterDisabled__accessor_storage = value; }
    #loaded__accessor_storage = false;
    get loaded_() { return this.#loaded__accessor_storage; }
    set loaded_(value) { this.#loaded__accessor_storage = value; }
    shouldFocusDropdown_ = false;
    tracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        this.destinationStore_ =
            new DestinationStore(this.addWebUiListener.bind(this));
        this.tracker_.add(this.destinationStore_, DestinationStoreEventType.DESTINATION_SELECT, this.onDestinationSelect_.bind(this));
        this.tracker_.add(this.destinationStore_, DestinationStoreEventType.SELECTED_DESTINATION_CAPABILITIES_READY, this.onDestinationCapabilitiesReady_.bind(this));
        this.tracker_.add(this.destinationStore_, DestinationStoreEventType.ERROR, this.onDestinationError_.bind(this));
        // Need to update the recent list when the destination store inserts
        // destinations, in case any recent destinations have been added to the
        // store. At startup, recent destinations can be in the sticky settings,
        // but they should not be displayed in the dropdown until they have been
        // fetched by the DestinationStore, to ensure that they still exist.
        this.tracker_.add(this.destinationStore_, DestinationStoreEventType.DESTINATIONS_INSERTED, this.updateDropdownDestinations_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.destinationStore_.resetTracker();
        this.tracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('error')) {
            this.onErrorChanged_();
        }
        if (changedProperties.has('destinationState') ||
            changedProperties.has('destination')) {
            this.loaded_ = this.computeLoaded_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('destinationState')) {
            this.updateDestinationSelect_();
        }
    }
    /**
     * @param defaultPrinter The system default printer ID.
     * @param pdfPrinterDisabled Whether the PDF printer is disabled.
     * @param serializedDefaultDestinationRulesStr String with rules
     *     for selecting a default destination.
     */
    init(defaultPrinter, pdfPrinterDisabled, serializedDefaultDestinationRulesStr) {
        this.pdfPrinterDisabled_ = pdfPrinterDisabled;
        let recentDestinations = this.getSettingValue('recentDestinations');
        recentDestinations = recentDestinations.slice(0, this.getRecentDestinationsDisplayCount_(recentDestinations));
        this.destinationStore_.init(this.pdfPrinterDisabled_, defaultPrinter, serializedDefaultDestinationRulesStr, recentDestinations);
    }
    /**
     * @param recentDestinations recent destinations.
     * @return Number of recent destinations to display.
     */
    getRecentDestinationsDisplayCount_(recentDestinations) {
        let numDestinationsToDisplay = NUM_UNPINNED_DESTINATIONS;
        for (let i = 0; i < recentDestinations.length; i++) {
            // Once all NUM_UNPINNED_DESTINATIONS unpinned destinations have been
            // found plus an extra unpinned destination, return the total number of
            // destinations found excluding the last extra unpinned destination.
            //
            // The extra unpinned destination ensures that pinned destinations
            // located directly after the last unpinned destination are included
            // in the display count.
            if (i > numDestinationsToDisplay) {
                return numDestinationsToDisplay;
            }
            // If a destination is pinned, increment numDestinationsToDisplay.
            if (isPdfPrinter(recentDestinations[i].id)) {
                numDestinationsToDisplay++;
            }
        }
        return Math.min(recentDestinations.length, numDestinationsToDisplay);
    }
    onDestinationSelect_() {
        if (this.state === State.FATAL_ERROR) {
            // Don't let anything reset if there is a fatal error.
            return;
        }
        const destination = this.destinationStore_.selectedDestination;
        this.destinationState = DestinationState.SET;
        // Notify observers that the destination is set only after updating the
        // destinationState.
        this.destination = destination;
        this.updateRecentDestinations_();
    }
    async onDestinationCapabilitiesReady_() {
        // Wait for any 'destination-changed' events to be fired first.
        await this.updateComplete;
        this.fire('destination-capabilities-changed', this.destinationStore_.selectedDestination);
        this.updateRecentDestinations_();
        if (this.destinationState === DestinationState.SET) {
            this.destinationState = DestinationState.UPDATED;
        }
    }
    onDestinationError_(e) {
        let errorType = Error.NONE;
        switch (e.detail) {
            case DestinationErrorType.INVALID:
                errorType = Error.INVALID_PRINTER;
                break;
            case DestinationErrorType.NO_DESTINATIONS:
                errorType = Error.NO_DESTINATIONS;
                this.noDestinations_ = true;
                break;
            default:
                break;
        }
        this.error = errorType;
    }
    onErrorChanged_() {
        if (this.error === Error.INVALID_PRINTER ||
            this.error === Error.NO_DESTINATIONS) {
            this.destinationState = DestinationState.ERROR;
        }
    }
    updateRecentDestinations_() {
        if (!this.destination) {
            return;
        }
        // Determine if this destination is already in the recent destinations,
        // where in the array it is located, and whether or not it is visible.
        const newDestination = makeRecentDestination(this.destination);
        const recentDestinations = this.getSettingValue('recentDestinations');
        let indexFound = -1;
        // Note: isVisible should be only be used if the destination is unpinned.
        // Although pinned destinations are always visible, isVisible may not
        // necessarily be set to true in this case.
        let isVisible = false;
        let numUnpinnedChecked = 0;
        for (let i = 0; i < recentDestinations.length; i++) {
            const recent = recentDestinations[i];
            if (recent.id === newDestination.id &&
                recent.origin === newDestination.origin) {
                indexFound = i;
                // If we haven't seen the maximum unpinned destinations already, this
                // destination is visible in the dropdown.
                isVisible = numUnpinnedChecked < NUM_UNPINNED_DESTINATIONS;
                break;
            }
            if (!isPdfPrinter(recent.id)) {
                numUnpinnedChecked++;
            }
        }
        // No change
        if (indexFound === 0 &&
            recentDestinations[0].capabilities === newDestination.capabilities) {
            return;
        }
        const isNew = indexFound === -1;
        // Shift the array so that the nth most recent destination is located at
        // index n.
        if (isNew && recentDestinations.length === NUM_PERSISTED_DESTINATIONS) {
            indexFound = NUM_PERSISTED_DESTINATIONS - 1;
        }
        // Create a clone first, otherwise array modifications will not be detected
        // by the underlying Observable instance.
        const recentDestinationsClone = recentDestinations.slice();
        if (indexFound !== -1) {
            // Remove from the list if it already exists, it will be re-added to the
            // front below.
            recentDestinationsClone.splice(indexFound, 1);
        }
        // Add the most recent destination
        recentDestinationsClone.splice(0, 0, newDestination);
        this.setSetting('recentDestinations', recentDestinationsClone);
        // The dropdown needs to be updated if a new printer or one not currently
        // visible in the dropdown has been added.
        if (!isPdfPrinter(newDestination.id) && (isNew || !isVisible)) {
            this.updateDropdownDestinations_();
        }
    }
    updateDropdownDestinations_() {
        const recentDestinations = this.getSettingValue('recentDestinations');
        const updatedDestinations = [];
        let numDestinationsChecked = 0;
        for (const recent of recentDestinations) {
            if (isPdfPrinter(recent.id)) {
                continue;
            }
            numDestinationsChecked++;
            const key = createRecentDestinationKey(recent);
            const destination = this.destinationStore_.getDestinationByKey(key);
            if (destination) {
                updatedDestinations.push(destination);
            }
            if (numDestinationsChecked === NUM_UNPINNED_DESTINATIONS) {
                break;
            }
        }
        this.displayedDestinations_ = updatedDestinations;
    }
    /**
     * @return Whether the destinations dropdown should be disabled.
     */
    shouldDisableDropdown_() {
        return this.state === State.FATAL_ERROR ||
            (this.destinationState === DestinationState.UPDATED && this.disabled &&
                this.state !== State.NOT_READY);
    }
    /**
     * @return Whether the See More button should be disabled.
     */
    shouldDisableSeeMore_() {
        return !this.loaded_ || this.shouldDisableDropdown_();
    }
    computeLoaded_() {
        return this.destinationState === DestinationState.ERROR ||
            this.destinationState === DestinationState.UPDATED ||
            (this.destinationState === DestinationState.SET && !!this.destination &&
                (!!this.destination.capabilities ||
                    this.destination.type === PrinterType.PDF_PRINTER));
    }
    /**
     * @param e Event containing the key of the recent destination that was
     *     selected.
     */
    onSelectedOptionChange_(e) {
        this.shouldFocusDropdown_ = true;
        this.destinationStore_.selectDestinationByKey(e.detail);
    }
    onSeeMoreClick_() {
        this.destinationStore_.startLoadAllDestinations();
        this.$.destinationDialog.get().show();
    }
    onDialogClose_() {
        this.shouldFocusDropdown_ = false;
        this.$.seeMore.focus();
    }
    async updateDestinationSelect_() {
        if (this.destinationState === DestinationState.ERROR && !this.destination) {
            return;
        }
        if (this.destinationState === DestinationState.INIT) {
            return;
        }
        const shouldFocus = this.destinationState !== DestinationState.SET && !this.firstLoad;
        this.$.destinationSelect.updateDestination();
        if (shouldFocus && this.shouldFocusDropdown_) {
            this.shouldFocusDropdown_ = false;
            await this.$.destinationSelect.updateComplete;
            this.$.destinationSelect.focus();
        }
    }
    getDestinationStoreForTest() {
        assert(this.destinationStore_);
        return this.destinationStore_;
    }
}
customElements.define(PrintPreviewDestinationSettingsElement.is, PrintPreviewDestinationSettingsElement);
