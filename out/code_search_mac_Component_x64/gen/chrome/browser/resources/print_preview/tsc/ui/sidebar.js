// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import './advanced_options_settings.js';
import './button_strip.js';
import './color_settings.js';
import './copies_settings.js';
import './destination_settings.js';
import './dpi_settings.js';
import './duplex_settings.js';
import './header.js';
import './layout_settings.js';
import './media_size_settings.js';
import './margins_settings.js';
import './more_settings.js';
import './other_options_settings.js';
import './pages_per_sheet_settings.js';
import './pages_settings.js';
import './print_preview_vars.css.js';
import './scaling_settings.js';
import '/strings.m.js';
import './link_container.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { DarkModeMixin } from '../dark_mode_mixin.js';
import { State } from '../data/state.js';
import { MetricsContext, PrintSettingsUiBucket } from '../metrics.js';
import { DestinationState } from './destination_settings.js';
import { SettingsMixin } from './settings_mixin.js';
import { getCss } from './sidebar.css.js';
import { getHtml } from './sidebar.html.js';
/**
 * Number of settings sections to show when "More settings" is collapsed.
 */
const MAX_SECTIONS_TO_SHOW = 6;
// Settings to observe their `available` field to decide whether to show the
// "More settings" collapsible section.
const SETTINGS_TO_OBSERVE = [
    'color',
    'copies',
    'dpi',
    'duplex',
    'layout',
    'margins',
    'mediaSize',
    'otherOptions',
    'pages',
    'pagesPerSheet',
    'scaling',
    'vendorItems',
];
const PrintPreviewSidebarElementBase = WebUiListenerMixinLit(SettingsMixin(DarkModeMixin(CrLitElement)));
export class PrintPreviewSidebarElement extends PrintPreviewSidebarElementBase {
    static get is() {
        return 'print-preview-sidebar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            controlsManaged: { type: Boolean },
            destination: {
                type: Object,
                notify: true,
            },
            destinationCapabilities_: { type: Object },
            destinationState: {
                type: Number,
                notify: true,
            },
            error: {
                type: Number,
                notify: true,
            },
            isPdf: { type: Boolean },
            pageCount: { type: Number },
            state: { type: Number },
            controlsDisabled_: { type: Boolean },
            firstLoad_: { type: Boolean },
            isInAppKioskMode_: { type: Boolean },
            settingsExpandedByUser_: { type: Boolean },
            shouldShowMoreSettings_: { type: Boolean },
            settingsAvailable_: { type: Object },
        };
    }
    #controlsManaged_accessor_storage = false;
    get controlsManaged() { return this.#controlsManaged_accessor_storage; }
    set controlsManaged(value) { this.#controlsManaged_accessor_storage = value; }
    #destination_accessor_storage = null;
    get destination() { return this.#destination_accessor_storage; }
    set destination(value) { this.#destination_accessor_storage = value; }
    #destinationCapabilities__accessor_storage = null;
    get destinationCapabilities_() { return this.#destinationCapabilities__accessor_storage; }
    set destinationCapabilities_(value) { this.#destinationCapabilities__accessor_storage = value; }
    #destinationState_accessor_storage = DestinationState.INIT;
    get destinationState() { return this.#destinationState_accessor_storage; }
    set destinationState(value) { this.#destinationState_accessor_storage = value; }
    #error_accessor_storage = null;
    get error() { return this.#error_accessor_storage; }
    set error(value) { this.#error_accessor_storage = value; }
    #isPdf_accessor_storage = false;
    get isPdf() { return this.#isPdf_accessor_storage; }
    set isPdf(value) { this.#isPdf_accessor_storage = value; }
    #pageCount_accessor_storage = 0;
    get pageCount() { return this.#pageCount_accessor_storage; }
    set pageCount(value) { this.#pageCount_accessor_storage = value; }
    #state_accessor_storage = State.NOT_READY;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #settingsAvailable__accessor_storage;
    get settingsAvailable_() { return this.#settingsAvailable__accessor_storage; }
    set settingsAvailable_(value) { this.#settingsAvailable__accessor_storage = value; }
    #controlsDisabled__accessor_storage = false;
    get controlsDisabled_() { return this.#controlsDisabled__accessor_storage; }
    set controlsDisabled_(value) { this.#controlsDisabled__accessor_storage = value; }
    #firstLoad__accessor_storage = true;
    get firstLoad_() { return this.#firstLoad__accessor_storage; }
    set firstLoad_(value) { this.#firstLoad__accessor_storage = value; }
    #isInAppKioskMode__accessor_storage = false;
    get isInAppKioskMode_() { return this.#isInAppKioskMode__accessor_storage; }
    set isInAppKioskMode_(value) { this.#isInAppKioskMode__accessor_storage = value; }
    #settingsExpandedByUser__accessor_storage = false;
    get settingsExpandedByUser_() { return this.#settingsExpandedByUser__accessor_storage; }
    set settingsExpandedByUser_(value) { this.#settingsExpandedByUser__accessor_storage = value; }
    #shouldShowMoreSettings__accessor_storage = false;
    get shouldShowMoreSettings_() { return this.#shouldShowMoreSettings__accessor_storage; }
    set shouldShowMoreSettings_(value) { this.#shouldShowMoreSettings__accessor_storage = value; }
    constructor() {
        super();
        this.settingsAvailable_ = {};
        for (const key of SETTINGS_TO_OBSERVE) {
            this.settingsAvailable_[key] = true;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        for (const key of SETTINGS_TO_OBSERVE) {
            this.addSettingObserver(`${key}.available`, (value) => {
                this.settingsAvailable_[key] = value;
                this.updateShouldShowMoreSettings_();
                this.requestUpdate();
            });
        }
        this.updateShouldShowMoreSettings_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('state')) {
            this.controlsDisabled_ = this.state !== State.READY;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('state')) {
            this.onStateChanged_();
        }
    }
    /**
     * @param defaultPrinter The system default printer ID.
     * @param serializedDestinationSelectionRulesStr String with rules
     *     for selecting the default destination.
     * @param pdfPrinterDisabled Whether the PDF printer is disabled.
     */
    init(appKioskMode, defaultPrinter, serializedDestinationSelectionRulesStr, pdfPrinterDisabled) {
        this.isInAppKioskMode_ = appKioskMode;
        pdfPrinterDisabled = this.isInAppKioskMode_ || pdfPrinterDisabled;
        this.$.destinationSettings.init(defaultPrinter, pdfPrinterDisabled, serializedDestinationSelectionRulesStr);
    }
    updateShouldShowMoreSettings_() {
        // Destination settings is always available. See if the total number of
        // available sections exceeds the maximum number to show.
        this.shouldShowMoreSettings_ =
            SETTINGS_TO_OBSERVE.reduce((count, setting) => {
                return this.settingsAvailable_[setting] ? count + 1 : count;
            }, 1) > MAX_SECTIONS_TO_SHOW;
    }
    /**
     * @return Whether the "more settings" collapse should be expanded.
     */
    shouldExpandSettings_() {
        if (this.settingsExpandedByUser_ === undefined ||
            this.shouldShowMoreSettings_ === undefined) {
            return false;
        }
        // Expand the settings if the user has requested them expanded or if more
        // settings is not displayed (i.e. less than 6 total settings available).
        return this.settingsExpandedByUser_ || !this.shouldShowMoreSettings_;
    }
    onPrintButtonFocused_() {
        this.firstLoad_ = false;
    }
    onStateChanged_() {
        if (this.state !== State.PRINTING) {
            return;
        }
        if (this.shouldShowMoreSettings_) {
            MetricsContext.printSettingsUi().record(this.settingsExpandedByUser_ ?
                PrintSettingsUiBucket.PRINT_WITH_SETTINGS_EXPANDED :
                PrintSettingsUiBucket.PRINT_WITH_SETTINGS_COLLAPSED);
        }
    }
    /** @return Whether the system dialog link is available. */
    systemDialogLinkAvailable() {
        const linkContainer = this.shadowRoot.querySelector('print-preview-link-container');
        return !!linkContainer && linkContainer.systemDialogLinkAvailable();
    }
    onDestinationChanged_(e) {
        this.destination = e.detail.value;
        this.destinationCapabilities_ = null;
    }
    onDestinationCapabilitiesChanged_(e) {
        assert(this.destination);
        assert(e.detail.id === this.destination.id);
        // When `this.destination.capabilities` changes it is always a new object.
        this.destinationCapabilities_ = this.destination.capabilities;
    }
    onDestinationStateChanged_(e) {
        this.destinationState = e.detail.value;
    }
    onErrorChanged_(e) {
        this.error = e.detail.value;
    }
    onSettingsExpandedByUserChanged_(e) {
        this.settingsExpandedByUser_ = e.detail.value;
    }
}
customElements.define(PrintPreviewSidebarElement.is, PrintPreviewSidebarElement);
