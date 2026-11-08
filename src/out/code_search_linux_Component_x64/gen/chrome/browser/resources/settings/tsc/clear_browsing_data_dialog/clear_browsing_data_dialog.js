// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import { injectStyle } from '//resources/brave/lit_overriding.js';
// renderBraveTabs_() below renders the template, see its comment.
// eslint-disable-next-line @webui-eslint/lit-element-structure
import { css, html } from '//resources/lit/v3_0/lit.rollup.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { SettingsClearBrowsingDataDialogElement as SettingsClearBrowsingDataDialogElementChromium, 
// 
getDataTypePrefName,
// 
 } from './clear_browsing_data_dialog-chromium.js';
// Registers <settings-brave-clear-browsing-data-on-exit-page>, which the
// lit_mangler override for this element's template adds as its second tab.
import '../brave_clear_browsing_data_dialog/brave_clear_browsing_data_on_exit_page.js';
import { BraveClearBrowsingDataDialogBrowserProxyImpl } from '../brave_clear_browsing_data_dialog/brave_clear_browsing_data_dialog_proxy.js';
import { loadTimeData } from '../i18n_setup.js';
// 
import { BrowsingDataType } from './clear_browsing_data_browser_proxy.js';
// 
// Leo history is listed by ALL_BROWSING_DATATYPES_LIST, but has no browsing
// data counter behind it, so it needs a static sub-label -- and it must not be
// offered at all when Leo, or its history, is unavailable. Returns |options|
// itself when there is nothing to change, so Lit sees no property change.
function withLeoAssistantOption(options) {
    const prefKey = getDataTypePrefName(BrowsingDataType.BRAVE_AI_CHAT);
    for (const [index, option] of options.entries()) {
        if (option.prefKey !== prefKey) {
            continue;
        }
        if (!loadTimeData.getBoolean('isLeoAssistantAllowed')
            || !loadTimeData.getBoolean('isLeoAssistantHistoryAllowed')) {
            return options.toSpliced(index, 1);
        }
        if (option.subLabel === undefined) {
            return options.toSpliced(index, 1, {
                ...option,
                subLabel: loadTimeData.getString('aiChatClearHistoryDataSubLabel'),
            });
        }
        break;
    }
    return options;
}
// 
const TAB_INDEX_DELETE_NOW = 0;
const TAB_INDEX_ON_EXIT = 1;
// Upstream's HTMLElementTagNameMap entry for this tag points at the upstream
// class, and TypeScript rejects a second entry with a different type.
// eslint-disable-next-line @webui-eslint/lit-element-structure
class SettingsClearBrowsingDataDialogElement extends SettingsClearBrowsingDataDialogElementChromium {
    static get is() {
        return 'settings-clear-browsing-data-dialog';
    }
    static get properties() {
        return {
            ...super.properties,
            selectedTabIndex_: { type: Number },
            braveRewardsEnabled_: { type: Boolean },
            onExitSettingsModified_: { type: Boolean },
            // Never changes, but the template reads it, and every property a
            // template reads has to be declared.
            showBraveDataOptions_: { type: Boolean },
        };
    }
    tabNames_ = [
        loadTimeData.getString('clearBrowsingData'),
        loadTimeData.getString('onExitPageTitle'),
    ];
    #selectedTabIndex__accessor_storage = TAB_INDEX_DELETE_NOW;
    get selectedTabIndex_() { return this.#selectedTabIndex__accessor_storage; }
    set selectedTabIndex_(value) { this.#selectedTabIndex__accessor_storage = value; }
    #braveRewardsEnabled__accessor_storage = false;
    get braveRewardsEnabled_() { return this.#braveRewardsEnabled__accessor_storage; }
    set braveRewardsEnabled_(value) { this.#braveRewardsEnabled__accessor_storage = value; }
    #onExitSettingsModified__accessor_storage = false;
    get onExitSettingsModified_() { return this.#onExitSettingsModified__accessor_storage; }
    set onExitSettingsModified_(value) { this.#onExitSettingsModified__accessor_storage = value; }
    #showBraveDataOptions__accessor_storage = 
    // 
    true;
    // Brave Origin builds ship without ads and rewards, so neither of the rows
    // in #braveDataOptions has anything to point at there.
    get showBraveDataOptions_() { return this.#showBraveDataOptions__accessor_storage; }
    set showBraveDataOptions_(value) { this.#showBraveDataOptions__accessor_storage = value; }
    // 
    // 
    braveBrowserProxy_ = BraveClearBrowsingDataDialogBrowserProxyImpl.getInstance();
    isClearingBraveAdsData_ = false;
    constructor() {
        super();
        // The `...super.properties` spread above makes Lit re-run
        // createProperty() for the inherited properties too, against this
        // prototype. Finding no own accessor here to wrap, Lit gives each of them
        // a disconnected one backed by fresh storage, so the values written by
        // upstream's field initializers never reach them -- they read back
        // undefined until something reassigns them. These two lists are only
        // reassigned once prefs are initialized, which happens after the first
        // render, and both willUpdate() below and upstream's template index into
        // them, so seed them here. Redeclaring them as fields instead would give
        // these protected members a new declaring class, which breaks the
        // interchangeability the declaration merge above relies on.
        this.expandedBrowsingDataTypeOptionsList_ = [];
        this.moreBrowsingDataTypeOptionsList_ = [];
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        // Brave shows every data type up front, so fold upstream's collapsed
        // "more" options back into the expanded list. Emptying the more list also
        // keeps upstream's #showMoreButton hidden, and leaves updateCounterText_()
        // looking every counter up in the expanded list.
        if (this.moreBrowsingDataTypeOptionsList_.length > 0) {
            this.expandedBrowsingDataTypeOptionsList_ = [
                ...this.expandedBrowsingDataTypeOptionsList_,
                ...this.moreBrowsingDataTypeOptionsList_,
            ];
            this.moreBrowsingDataTypeOptionsList_ = [];
        }
        // 
        this.expandedBrowsingDataTypeOptionsList_ =
            withLeoAssistantOption(this.expandedBrowsingDataTypeOptionsList_);
        // 
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addWebUiListener('brave-rewards-enabled-changed', (enabled) => {
            this.braveRewardsEnabled_ = enabled;
        });
        this.braveBrowserProxy_.getBraveRewardsEnabled().then((enabled) => {
            this.braveRewardsEnabled_ = enabled;
        });
    }
    // The lit_mangler can't inject a `.tabNames` binding itself: JSDOM lowercases
    // attribute names it hasn't already seen in the file being mangled, which
    // would leave cr-tabs without its names. Rendering the element from here
    // keeps the casing (and the type check) intact.
    renderBraveTabs_() {
        return html `
      <cr-tabs id="tabs" .tabNames="${this.tabNames_}"
          .selected="${this.selectedTabIndex_}"
          @selected-changed="${this.onSelectedTabChanged_}">
      </cr-tabs>`;
    }
    isDeleteNowTabSelected_() {
        return this.selectedTabIndex_ === TAB_INDEX_DELETE_NOW;
    }
    isOnExitTabSelected_() {
        return this.selectedTabIndex_ === TAB_INDEX_ON_EXIT;
    }
    onSelectedTabChanged_(e) {
        this.selectedTabIndex_ = e.detail.value;
    }
    onClearDataOnExitPageChange_(e) {
        this.onExitSettingsModified_ =
            e.target.isModified_;
    }
    onSaveOnExitSettingsClick_() {
        const onExitPage = this.shadowRoot.querySelector('#onExitTab');
        const prefService = PrefService.getInstance();
        for (const change of onExitPage.getChangedSettings()) {
            prefService.setPrefValue(change.key, change.value);
        }
        this.$.deleteBrowsingDataDialog.close();
    }
    async onClearBraveAdsDataClick_(e) {
        // #clearBraveAdsData is an <a> for its link styling only; clearing happens
        // here rather than by navigating.
        e.preventDefault();
        if (this.isClearingBraveAdsData_) {
            return;
        }
        this.isClearingBraveAdsData_ = true;
        const success = await this.braveBrowserProxy_.clearBraveAdsData();
        this.isClearingBraveAdsData_ = false;
        this.fire('browsing-data-deleted', {
            deletionConfirmationText: loadTimeData.getString(success ? 'clearBraveAdsDataToastLabel'
                : 'clearBraveAdsDataErrorToastLabel'),
        });
        if (this.$.deleteBrowsingDataDialog.open) {
            this.$.deleteBrowsingDataDialog.close();
        }
    }
}
injectStyle(SettingsClearBrowsingDataDialogElement, css `
  :host {
    --cr-dialog-top-container-min-height: 0px;
    /* !important needed to override Chromium's default 8px checkbox margin */
    --settings-checkbox-margin-top: 4px !important;
  }

  cr-tabs {
    --cr-tabs-height: 62px;
    --cr-tabs-selected-color: var(--leo-color-text-interactive);
    --cr-tabs-selection-bar-radius: 3px;
    --cr-tabs-selection-bar-width: 4px;
    font: var(--leo-font-large-semibold);
  }

  #tabsDivider {
    height: 1px;
    background: var(--leo-color-divider-subtle);
    margin-inline: calc(-1 * var(--leo-spacing-2xl));
  }

  #checkboxContainer {
    /* !important needed to override Chromium's base container styles */
    border-radius: var(--leo-radius-xl) !important;
    background: var(--leo-color-container-highlight) !important;
    padding: calc(var(--leo-spacing-xl) - var(--leo-spacing-m) / 2)
        var(--leo-spacing-xl) !important;
  }

  .checkbox-title {
    font: var(--leo-font-default-regular);
  }

  settings-checkbox {
    --cr-checkbox-label-color: var(--leo-color-text-primary);
  }

  settings-checkbox #subLabel {
    font: var(--leo-font-small-regular);
    color: var(--leo-color-text-tertiary);
  }

  #deleteBrowsingDataDialog::part(body-container) {
    /* !important needed to override shadow DOM part styles from Chromium */
    max-height: none !important;
  }

  #deleteBrowsingDataDialog::part(dialog) {
    /* !important needed to override shadow DOM part styles from Chromium */
    max-height: 800px !important;
    /* !important needed to override shadow DOM part styles from Chromium */
    padding: 0 !important;
    /* Increase dialog width to accommodate time picker chips */
    width: 520px;
  }

  #deleteBrowsingDataDialog [slot=header]:has(#tabs) {
    /* !important needed to override slotted content padding from Chromium */
    padding: var(--leo-spacing-m) var(--leo-spacing-2xl)
        var(--leo-spacing-xl) !important;
  }

  #deleteBrowsingDataDialog
      [slot=header]:has(settings-clear-browsing-data-time-picker) {
    /* !important needed to override slotted content padding from Chromium */
    padding: 0 var(--leo-spacing-2xl) var(--leo-spacing-xl) !important;
  }

  #deleteBrowsingDataDialog [slot=body]:not(#braveDataOptions) {
    /* !important needed to override slotted content padding from Chromium */
    padding: 0 var(--leo-spacing-2xl) !important;
  }

  #deleteBrowsingDataDialog [slot=button-container] {
    padding-inline: var(--leo-spacing-2xl);
  }

  #clearBraveAdsData,
  #resetBraveRewardsData {
    display: flex;
    padding: var(--leo-spacing-m);
    align-items: center;
    gap: var(--leo-spacing-m);
    align-self: stretch;
    text-decoration: none;
  }

  #clearBraveAdsDataLabel,
  #resetBraveRewardsDataLabel {
    font: var(--leo-font-default-regular);
    color: var(--leo-color-text-primary);
    padding: 0 var(--leo-spacing-m);
    align-self: stretch;
    flex: 1;
  }

  #clearBraveAdsData leo-icon,
  #resetBraveRewardsData leo-icon {
    --leo-icon-size: 20px;
    --leo-icon-color: var(--leo-color-icon-default);
  }

  /* Higher specificity needed to override the [slot=body] padding rule
     above. */
  #deleteBrowsingDataDialog #braveDataOptions {
    display: flex;
    margin-top: var(--leo-spacing-xl);
    margin-inline: var(--leo-spacing-2xl);
    /* !important needed to override slotted content padding from Chromium */
    padding: var(--leo-spacing-s) !important;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--leo-spacing-s);
    align-self: stretch;
    border-radius: var(--leo-radius-xl);
    background: var(--leo-color-container-highlight);
  }
`);
export { SettingsClearBrowsingDataDialogElement };
export * from './clear_browsing_data_dialog-chromium.js';
// Register the Brave subclass instead of the upstream class. The matching
// `customElements.define` in upstream clear_browsing_data_dialog.ts is patched
// out.
customElements.define(SettingsClearBrowsingDataDialogElement.is, SettingsClearBrowsingDataDialogElement);
