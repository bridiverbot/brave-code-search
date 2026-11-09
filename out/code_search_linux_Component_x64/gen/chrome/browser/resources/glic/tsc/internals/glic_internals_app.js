// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_tabs/cr_tabs.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { //
ActuationTarget, //
FeatureMode, //
FormFactor, //
FreOverride, //
InvocationSource, //
Platform, //
 } from '../glic_enums.mojom-webui.js';
import { //
ActuationEligibility, //
browserProxyFactory, //
FreCompletionWaitMode, //
GlicExperimentalTriggeringState, //
 } from '../glic_internals.mojom-webui.js';
import { getCss } from './glic_internals_app.css.js';
import { getHtml } from './glic_internals_app.html.js';
const TAB_GENERAL = 0;
const TAB_DEBUG = 1;
const DEFAULT_TAB_HASH = '#general';
const TAB_HASH_MAP = {
    [TAB_GENERAL]: DEFAULT_TAB_HASH,
    [TAB_DEBUG]: '#debug',
};
function getEnumEntries(enumObj) {
    return Object.entries(enumObj)
        .filter(([key]) => isNaN(Number(key)) && key !== 'MIN_VALUE' && key !== 'MAX_VALUE')
        .map(([name, value]) => ({ name, value: Number(value) }));
}
export class GlicInternalsAppElement extends CrLitElement {
    static get is() {
        return 'glic-internals-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            data_: { type: Object },
            invokePrompts_: { type: Array },
            invokeAutoSubmit_: { type: Boolean },
            invokeFreOverride_: { type: Number },
            invokeFeatureMode_: { type: Number },
            invokeInvocationSource_: { type: Number },
            invokeWaitForPanelOpen_: { type: Boolean },
            invokeFocusOnShow_: { type: Boolean },
            invokeTimeoutMs_: { type: String },
            invokeLogs_: { type: Array },
            invokeSurfaceType_: { type: String },
            invokeZssOverride_: { type: Boolean },
            invokeZssAdditionalContent_: { type: String },
            invokeOpenInForeground_: { type: Boolean },
            invokeActuationTarget_: { type: Number },
            actuationTargetEnumValues_: { type: Array },
            invokeShowPanel_: { type: Boolean },
            invokePayloadUniversalCartMetadata_: { type: String },
            invokeFreCompletionWaitMode_: { type: Number },
            freCompletionWaitModeEnumValues_: { type: Array },
            invokeTakeScreenshot_: { type: Boolean },
            invokeSupersedeIfInProgress_: { type: Boolean },
            invokePublicKey_: { type: String },
            invokeAuthSecret_: { type: String },
            selectedTabIndex_: { type: Number },
            invokeConversationType_: { type: String },
            invokeConversationId_: { type: String },
            invokeSpecificTabIndex_: { type: Number },
            invokeSpecificTabsToShareIndices_: { type: Array },
            availableTabs_: { type: Array },
            tabNames_: { type: Array },
            featureModeEnumValues_: { type: Array },
            copyButtonText_: { type: String },
        };
    }
    #copyButtonText__accessor_storage = 'Copy Diagnostics';
    get copyButtonText_() { return this.#copyButtonText__accessor_storage; }
    set copyButtonText_(value) { this.#copyButtonText__accessor_storage = value; }
    copyResetTimeoutId_ = null;
    eventTracker_ = new EventTracker();
    highlightTimeoutId_ = null;
    currentHighlightedElement_ = null;
    #data__accessor_storage;
    get data_() { return this.#data__accessor_storage; }
    set data_(value) { this.#data__accessor_storage = value; }
    #invokePrompts__accessor_storage = [''];
    get invokePrompts_() { return this.#invokePrompts__accessor_storage; }
    set invokePrompts_(value) { this.#invokePrompts__accessor_storage = value; }
    #invokeAutoSubmit__accessor_storage = true;
    get invokeAutoSubmit_() { return this.#invokeAutoSubmit__accessor_storage; }
    set invokeAutoSubmit_(value) { this.#invokeAutoSubmit__accessor_storage = value; }
    #invokeFreOverride__accessor_storage = FreOverride.kUnspecified;
    get invokeFreOverride_() { return this.#invokeFreOverride__accessor_storage; }
    set invokeFreOverride_(value) { this.#invokeFreOverride__accessor_storage = value; }
    #invokeFeatureMode__accessor_storage = FeatureMode.kUnspecified;
    get invokeFeatureMode_() { return this.#invokeFeatureMode__accessor_storage; }
    set invokeFeatureMode_(value) { this.#invokeFeatureMode__accessor_storage = value; }
    #invokeInvocationSource__accessor_storage = InvocationSource.kOsButton;
    get invokeInvocationSource_() { return this.#invokeInvocationSource__accessor_storage; }
    set invokeInvocationSource_(value) { this.#invokeInvocationSource__accessor_storage = value; }
    #invokeWaitForPanelOpen__accessor_storage = false;
    get invokeWaitForPanelOpen_() { return this.#invokeWaitForPanelOpen__accessor_storage; }
    set invokeWaitForPanelOpen_(value) { this.#invokeWaitForPanelOpen__accessor_storage = value; }
    #invokeFocusOnShow__accessor_storage = true;
    get invokeFocusOnShow_() { return this.#invokeFocusOnShow__accessor_storage; }
    set invokeFocusOnShow_(value) { this.#invokeFocusOnShow__accessor_storage = value; }
    #invokeTimeoutMs__accessor_storage = '';
    get invokeTimeoutMs_() { return this.#invokeTimeoutMs__accessor_storage; }
    set invokeTimeoutMs_(value) { this.#invokeTimeoutMs__accessor_storage = value; }
    #invokeLogs__accessor_storage = [];
    get invokeLogs_() { return this.#invokeLogs__accessor_storage; }
    set invokeLogs_(value) { this.#invokeLogs__accessor_storage = value; }
    #invokeSurfaceType__accessor_storage = 'default';
    get invokeSurfaceType_() { return this.#invokeSurfaceType__accessor_storage; }
    set invokeSurfaceType_(value) { this.#invokeSurfaceType__accessor_storage = value; }
    #invokeZssOverride__accessor_storage = false;
    get invokeZssOverride_() { return this.#invokeZssOverride__accessor_storage; }
    set invokeZssOverride_(value) { this.#invokeZssOverride__accessor_storage = value; }
    #invokeZssAdditionalContent__accessor_storage = '';
    get invokeZssAdditionalContent_() { return this.#invokeZssAdditionalContent__accessor_storage; }
    set invokeZssAdditionalContent_(value) { this.#invokeZssAdditionalContent__accessor_storage = value; }
    #invokeOpenInForeground__accessor_storage = true;
    get invokeOpenInForeground_() { return this.#invokeOpenInForeground__accessor_storage; }
    set invokeOpenInForeground_(value) { this.#invokeOpenInForeground__accessor_storage = value; }
    #invokeActuationTarget__accessor_storage = ActuationTarget.kAgentDecides;
    get invokeActuationTarget_() { return this.#invokeActuationTarget__accessor_storage; }
    set invokeActuationTarget_(value) { this.#invokeActuationTarget__accessor_storage = value; }
    #invokeShowPanel__accessor_storage = true;
    get invokeShowPanel_() { return this.#invokeShowPanel__accessor_storage; }
    set invokeShowPanel_(value) { this.#invokeShowPanel__accessor_storage = value; }
    #invokePayloadUniversalCartMetadata__accessor_storage = '';
    get invokePayloadUniversalCartMetadata_() { return this.#invokePayloadUniversalCartMetadata__accessor_storage; }
    set invokePayloadUniversalCartMetadata_(value) { this.#invokePayloadUniversalCartMetadata__accessor_storage = value; }
    #invokeFreCompletionWaitMode__accessor_storage = FreCompletionWaitMode.kDefault;
    get invokeFreCompletionWaitMode_() { return this.#invokeFreCompletionWaitMode__accessor_storage; }
    set invokeFreCompletionWaitMode_(value) { this.#invokeFreCompletionWaitMode__accessor_storage = value; }
    #invokeTakeScreenshot__accessor_storage = false;
    get invokeTakeScreenshot_() { return this.#invokeTakeScreenshot__accessor_storage; }
    set invokeTakeScreenshot_(value) { this.#invokeTakeScreenshot__accessor_storage = value; }
    #invokeSupersedeIfInProgress__accessor_storage = false;
    get invokeSupersedeIfInProgress_() { return this.#invokeSupersedeIfInProgress__accessor_storage; }
    set invokeSupersedeIfInProgress_(value) { this.#invokeSupersedeIfInProgress__accessor_storage = value; }
    #invokePublicKey__accessor_storage = 'BFlvj1VrkwP8pxa1zSiJZzZ7yeMEO1DOPS' +
        'bNw6XV8NK3Xo++7ql9NTcxNaciYM2eQ/G1ebnwrtRrHyMXEDhN5ck=';
    get invokePublicKey_() { return this.#invokePublicKey__accessor_storage; }
    set invokePublicKey_(value) { this.#invokePublicKey__accessor_storage = value; }
    #invokeAuthSecret__accessor_storage = 'aaaaaaaaaaaaaaaa';
    get invokeAuthSecret_() { return this.#invokeAuthSecret__accessor_storage; }
    set invokeAuthSecret_(value) { this.#invokeAuthSecret__accessor_storage = value; }
    #invokeConversationType__accessor_storage = 'default';
    get invokeConversationType_() { return this.#invokeConversationType__accessor_storage; }
    set invokeConversationType_(value) { this.#invokeConversationType__accessor_storage = value; }
    #invokeConversationId__accessor_storage = '';
    get invokeConversationId_() { return this.#invokeConversationId__accessor_storage; }
    set invokeConversationId_(value) { this.#invokeConversationId__accessor_storage = value; }
    #invokeSpecificTabIndex__accessor_storage = 0;
    get invokeSpecificTabIndex_() { return this.#invokeSpecificTabIndex__accessor_storage; }
    set invokeSpecificTabIndex_(value) { this.#invokeSpecificTabIndex__accessor_storage = value; }
    #invokeSpecificTabsToShareIndices__accessor_storage = [];
    get invokeSpecificTabsToShareIndices_() { return this.#invokeSpecificTabsToShareIndices__accessor_storage; }
    set invokeSpecificTabsToShareIndices_(value) { this.#invokeSpecificTabsToShareIndices__accessor_storage = value; }
    #availableTabs__accessor_storage = [];
    get availableTabs_() { return this.#availableTabs__accessor_storage; }
    set availableTabs_(value) { this.#availableTabs__accessor_storage = value; }
    #selectedTabIndex__accessor_storage = 0;
    get selectedTabIndex_() { return this.#selectedTabIndex__accessor_storage; }
    set selectedTabIndex_(value) { this.#selectedTabIndex__accessor_storage = value; }
    #tabNames__accessor_storage = ['General', 'Debug Controls'];
    get tabNames_() { return this.#tabNames__accessor_storage; }
    set tabNames_(value) { this.#tabNames__accessor_storage = value; }
    #featureModeEnumValues__accessor_storage = getEnumEntries(FeatureMode);
    get featureModeEnumValues_() { return this.#featureModeEnumValues__accessor_storage; }
    set featureModeEnumValues_(value) { this.#featureModeEnumValues__accessor_storage = value; }
    #actuationTargetEnumValues__accessor_storage = getEnumEntries(ActuationTarget);
    get actuationTargetEnumValues_() { return this.#actuationTargetEnumValues__accessor_storage; }
    set actuationTargetEnumValues_(value) { this.#actuationTargetEnumValues__accessor_storage = value; }
    #freCompletionWaitModeEnumValues__accessor_storage = getEnumEntries(FreCompletionWaitMode);
    get freCompletionWaitModeEnumValues_() { return this.#freCompletionWaitModeEnumValues__accessor_storage; }
    set freCompletionWaitModeEnumValues_(value) { this.#freCompletionWaitModeEnumValues__accessor_storage = value; }
    browserProxy_ = browserProxyFactory.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker_.add(window, 'hashchange', () => this.onHashChanged_());
        this.fetchInternalsData_();
        this.refreshOpenTabs_();
        this.onHashChanged_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
        if (this.highlightTimeoutId_ !== null) {
            window.clearTimeout(this.highlightTimeoutId_);
            this.highlightTimeoutId_ = null;
        }
    }
    fetchInternalsData_() {
        this.browserProxy_.handler.getInternalsDataPayload().then(async ({ internalsData }) => {
            this.data_ = internalsData;
            if (window.location.hash) {
                await this.updateComplete;
                const { elementId } = this.resolveTargetHash_(window.location.hash);
                if (elementId) {
                    this.scrollToElement_(elementId);
                }
            }
        });
    }
    onShowErrorAllowedChange(e) {
        const allowed = e.target.checked;
        this.data_.showErrorAllowed = allowed;
        this.browserProxy_.handler.setShowErrorAllowed(allowed);
    }
    onExperimentalOptInClick_() {
        this.browserProxy_.handler.showExperimentalOptIn();
    }
    isAllConsentMet_() {
        if (!this.data_?.enablement) {
            return false;
        }
        return this.data_.enablement.glicExperimentalTriggeringState ===
            GlicExperimentalTriggeringState.kReady &&
            this.data_.enablement.freIsConsented &&
            this.data_.enablement.actuationIsConsented;
    }
    onGlicConsentChange_(e) {
        if (!e.target.checked) {
            this.browserProxy_.handler.revokeGlicConsent();
            this.fetchInternalsData_();
        }
    }
    onActuationConsentChange_(e) {
        if (!e.target.checked) {
            this.browserProxy_.handler.revokeActuationConsent();
            this.fetchInternalsData_();
        }
    }
    onExperimentalConsentChange_(e) {
        if (!e.target.checked) {
            this.browserProxy_.handler.revokeExperimentalTriggeringConsent();
            this.fetchInternalsData_();
        }
    }
    onHotkeyGlobalScopeMigratedChange_(e) {
        const checked = e.target.checked;
        if (this.data_) {
            this.data_.hotkeyGlobalScopeMigratedV2 = checked;
        }
        this.browserProxy_.handler.setHotkeyGlobalScopeMigratedV2(checked);
        this.fetchInternalsData_();
    }
    onAutopushInputChange(e) {
        this.data_.config.autopushGuestUrl = e.target.value;
    }
    onStagingInputChange(e) {
        this.data_.config.stagingGuestUrl = e.target.value;
    }
    onPreprodInputChange(e) {
        this.data_.config.preprodGuestUrl = e.target.value;
    }
    onProdInputChange(e) {
        this.data_.config.prodGuestUrl = e.target.value;
    }
    onSavePresetsClick_() {
        const errorMsg = this.shadowRoot.querySelector('#inputErrorMsg');
        try {
            // Validate the URL. If we don't validate here, IPC will kill this
            // renderer on invalid URLs.
            new URL(this.data_.config.autopushGuestUrl);
            new URL(this.data_.config.stagingGuestUrl);
            new URL(this.data_.config.preprodGuestUrl);
            new URL(this.data_.config.prodGuestUrl);
        }
        catch {
            console.error('Invalid URL: no-op');
            errorMsg.classList.remove('hiddenElement');
            return;
        }
        errorMsg.classList.add('hiddenElement');
        this.browserProxy_.handler.setGuestUrlPresets(this.data_.config.autopushGuestUrl, this.data_.config.stagingGuestUrl, this.data_.config.preprodGuestUrl, this.data_.config.prodGuestUrl);
    }
    onWebContinuityInputChange(e) {
        this.data_.config.webContinuityOriginatingHostUrl =
            e.target.value;
    }
    onSaveWebContinuityPresetClick_() {
        const errorMsg = this.shadowRoot.querySelector('#webContinuityInputErrorMsg');
        const url = this.data_.config.webContinuityOriginatingHostUrl;
        // Validate the URL. If we don't validate here, IPC will kill this
        // renderer on invalid URLs.
        if (url && URL.parse(url) === null) {
            console.error('Invalid URL: no-op');
            errorMsg.classList.remove('hiddenElement');
            return;
        }
        errorMsg.classList.add('hiddenElement');
        this.browserProxy_.handler.setWebContinuityOriginatingHostUrlPreset(url);
    }
    getActuationEligibilityString_(eligibility) {
        switch (eligibility) {
            case ActuationEligibility.kEligible:
                return 'Eligible';
            case ActuationEligibility.kMissingAccountCapability:
                return 'Missing account capability';
            case ActuationEligibility.kMissingChromeBenefits:
                return 'Missing Chrome benefits';
            case ActuationEligibility.kDisabledByPolicy:
                return 'Disabled by policy';
            case ActuationEligibility.kPlatformUnsupported:
                return 'Platform unsupported';
            case ActuationEligibility.kEnterpriseWithoutManagement:
                return 'Enterprise account without management. Default pref disabled.';
            default:
                return 'unknown';
        }
    }
    getExperimentalTriggeringStateString_(state) {
        return GlicExperimentalTriggeringState[state] || 'Unknown';
    }
    isActuationEligible_() {
        return this.data_?.enablement?.actuationEligibility ===
            ActuationEligibility.kEligible;
    }
    isGlicApiActuationEligible_() {
        return this.data_?.enablement?.glicApiActuationEligibility ===
            ActuationEligibility.kEligible;
    }
    computeOverallStatus_() {
        if (!this.data_ || !this.data_.enablement) {
            return { enabled: false, reason: 'Loading or unavailable' };
        }
        const e = this.data_.enablement;
        if (!e.featureEnabled) {
            return { enabled: false, reason: 'Disabled by Chrome feature flag' };
        }
        if (!e.isRegularProfile) {
            return {
                enabled: false,
                reason: 'Not a regular user profile (e.g. Incognito or Guest)',
            };
        }
        if (!e.allowedByCountryFilter) {
            return { enabled: false, reason: 'Blocked by country filter' };
        }
        if (!e.allowedByLocaleFilter) {
            return { enabled: false, reason: 'Blocked by UI locale filter' };
        }
        if (!e.allowedByChromePolicy) {
            return { enabled: false, reason: 'Disabled by enterprise Chrome policy' };
        }
        if (!e.allowedByRemoteAdmin) {
            return { enabled: false, reason: 'Disabled by server-side admin policy' };
        }
        if (!e.allowedByRemoteOther) {
            return { enabled: false, reason: 'Disabled by server-side configuration' };
        }
        if (!e.isRolledOut) {
            return { enabled: false, reason: 'Profile not in rollout group' };
        }
        if (!e.primaryAccountIsCapable) {
            return {
                enabled: false,
                reason: 'Primary account lacks Gemini capabilities',
            };
        }
        if (!e.primaryAccountIsFullySignedIn) {
            return { enabled: false, reason: 'Primary account not fully signed in' };
        }
        if (!e.freIsConsented) {
            return {
                enabled: false,
                reason: 'First Run Experience (FRE) consent not completed',
            };
        }
        return { enabled: true };
    }
    onRefreshClick_() {
        this.fetchInternalsData_();
        this.refreshOpenTabs_();
    }
    getChromeVersion_() {
        if (loadTimeData.isInitialized()) {
            try {
                const browserVersion = loadTimeData.getString('browserVersion');
                if (browserVersion) {
                    return browserVersion;
                }
            }
            catch {
                // Fall back below if key is not found.
            }
            try {
                const version = loadTimeData.getString('version');
                if (version) {
                    const modifier = loadTimeData.getString('version_modifier');
                    const arch = loadTimeData.getString('version_processor_variation');
                    return [version, modifier, arch].filter(Boolean).join(' ');
                }
            }
            catch {
                // Fall back below.
            }
        }
        const match = navigator.userAgent.match(/Chrome\/([0-9.]+)/);
        return match?.[1] ?? 'Unknown';
    }
    getDiagnosticsMarkdown_() {
        if (!this.data_) {
            return '# Glic Internals Diagnostics\n\nNo diagnostics data available.';
        }
        const lines = [];
        const overall = this.computeOverallStatus_();
        lines.push('# Glic Internals Diagnostics');
        lines.push('');
        lines.push(`- **Timestamp:** ${new Date().toISOString()}`);
        lines.push(`- **Chrome Version:** ${this.getChromeVersion_()}`);
        if (loadTimeData.isInitialized()) {
            try {
                const revision = loadTimeData.getString('cl');
                if (revision) {
                    lines.push(`- **Revision:** ${revision}`);
                }
            }
            catch {
                // Ignore if key is not present.
            }
        }
        lines.push(`- **Overall Status:** ${overall.enabled ? 'Eligible & Enabled' : 'Blocked / Ineligible'}`);
        if (!overall.enabled && overall.reason) {
            lines.push(`- **Blocking Reason:** ${overall.reason}`);
        }
        if (this.data_.debugInfo) {
            lines.push(`- **Platform:** ${this.getPlatformString_(this.data_.debugInfo.platform)}`);
            lines.push(`- **Form Factor:** ${this.getFormFactorString_(this.data_.debugInfo.formFactor)}`);
        }
        lines.push(`- **User Agent:** ${navigator.userAgent}`);
        lines.push('');
        const generalContents = this.shadowRoot?.querySelector('#general-contents');
        if (generalContents) {
            const cards = generalContents.querySelectorAll('.card');
            for (const card of cards) {
                const headerEl = card.querySelector('.card-header');
                const headerText = headerEl?.textContent?.trim();
                const table = card.querySelector('table');
                if (!table) {
                    continue;
                }
                const tableMd = this.tableToMarkdown_(table);
                if (!tableMd) {
                    continue;
                }
                if (headerText) {
                    lines.push(`## ${headerText}`);
                    lines.push('');
                }
                lines.push(tableMd);
                lines.push('');
            }
        }
        return lines.join('\n');
    }
    cleanTableCellText_(text) {
        return text.replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim();
    }
    tableToMarkdown_(table) {
        const headerCells = Array.from(table.querySelectorAll('thead th'));
        if (headerCells.length === 0) {
            return '';
        }
        const headers = headerCells.map(th => this.cleanTableCellText_(th.textContent ?? ''));
        const lines = [
            `| ${headers.join(' | ')} |`,
            `| ${headers.map(() => ':---').join(' | ')} |`,
        ];
        const rowElements = Array.from(table.querySelectorAll('tbody tr'));
        for (const row of rowElements) {
            const cells = Array.from(row.querySelectorAll('td'))
                .map(td => this.cleanTableCellText_(td.textContent ?? ''));
            if (cells.length === 0) {
                continue;
            }
            while (cells.length < headers.length) {
                cells.push('');
            }
            lines.push(`| ${cells.join(' | ')} |`);
        }
        return lines.join('\n');
    }
    async onCopyDiagnosticsClick_() {
        await this.updateComplete;
        const text = this.getDiagnosticsMarkdown_();
        try {
            await navigator.clipboard.writeText(text);
            if (this.copyResetTimeoutId_ !== null) {
                window.clearTimeout(this.copyResetTimeoutId_);
            }
            this.copyButtonText_ = 'Copied!';
            this.copyResetTimeoutId_ = window.setTimeout(() => {
                this.copyButtonText_ = 'Copy Diagnostics';
                this.copyResetTimeoutId_ = null;
            }, 2000);
        }
        catch (err) {
            console.error('Failed to copy diagnostics to clipboard:', err);
        }
    }
    isExperimentalOptInConsentMet_() {
        return this.data_?.enablement?.glicExperimentalTriggeringState ===
            GlicExperimentalTriggeringState.kReady;
    }
    getTableData_() {
        if (!this.data_ || !this.data_.enablement) {
            return [];
        }
        return [
            {
                label: 'Enabled by Chrome Flags',
                value: this.data_.enablement.featureEnabled,
            },
            {
                label: 'Regular profile',
                value: this.data_.enablement.isRegularProfile,
            },
            {
                label: 'Pref or flag based rollout (flag or pref) applies',
                value: this.data_.enablement.isRolledOut,
            },
            {
                label: 'Account exists and has the Gemini in Chrome capability',
                value: this.data_.enablement.primaryAccountIsCapable,
            },
            {
                label: 'Account exists and is fully signed-in',
                value: this.data_.enablement.primaryAccountIsFullySignedIn,
            },
            {
                label: 'Chrome Enterprise policy allows this feature (or doesn\'t apply)',
                value: this.data_.enablement.allowedByChromePolicy,
            },
            {
                label: 'Server side admin allows this feature',
                value: this.data_.enablement.allowedByRemoteAdmin,
            },
            {
                label: 'Server side allows this feature (Not admin policy)',
                value: this.data_.enablement.allowedByRemoteOther,
            },
            {
                label: 'User did pass the FRE',
                value: this.data_.enablement.freIsConsented,
            },
            {
                label: 'User accepted actuation consent',
                value: this.data_.enablement.actuationIsConsented,
            },
            {
                label: 'Passed country filter',
                value: this.data_.enablement.allowedByCountryFilter,
            },
            {
                label: 'Passed locale filter',
                value: this.data_.enablement.allowedByLocaleFilter,
            },
        ];
    }
    getInvocationSourceOptions_() {
        return getEnumEntries(InvocationSource);
    }
    onInvokePromptInput_(e) {
        const input = e.target;
        const index = Number(input.dataset['index']);
        const newPrompts = [...this.invokePrompts_];
        newPrompts[index] = input.value;
        this.invokePrompts_ = newPrompts;
    }
    onAddPromptClick_() {
        this.invokePrompts_ = [...this.invokePrompts_, ''];
    }
    onRemovePromptClick_(e) {
        if (this.invokePrompts_.length <= 1) {
            return;
        }
        const button = e.currentTarget;
        const indexToRemove = Number(button.dataset['index']);
        this.invokePrompts_ =
            this.invokePrompts_.filter((_, index) => index !== indexToRemove);
    }
    onInvokeAutoSubmitChange_(e) {
        this.invokeAutoSubmit_ = e.target.checked;
    }
    onInvokeFreOverrideChange_(e) {
        this.invokeFreOverride_ = Number(e.target.value);
    }
    onInvokeFeatureModeChange_(e) {
        this.invokeFeatureMode_ = Number(e.target.value);
    }
    onInvokeInvocationSourceChange_(e) {
        this.invokeInvocationSource_ =
            Number(e.target.value);
    }
    onInvokeWaitForPanelOpenChange_(e) {
        this.invokeWaitForPanelOpen_ = e.target.checked;
    }
    onInvokeFocusOnShowChange_(e) {
        this.invokeFocusOnShow_ = e.target.checked;
    }
    onInvokeTimeoutMsInput_(e) {
        this.invokeTimeoutMs_ = e.target.value;
    }
    onInvokeConversationTypeChange_(e) {
        this.invokeConversationType_ = e.target.value;
    }
    onInvokeConversationIdInput_(e) {
        this.invokeConversationId_ = e.target.value;
    }
    onPayloadUniversalCartMetadataInput_(e) {
        this.invokePayloadUniversalCartMetadata_ =
            e.target.value;
    }
    async onInvokeSurfaceTypeChange_(e) {
        this.invokeSurfaceType_ = e.target.value;
        if (this.invokeSurfaceType_ === 'specificTab') {
            await this.refreshOpenTabs_();
        }
    }
    async refreshOpenTabs_() {
        const { tabTitles } = await this.browserProxy_.handler.getOpenTabs();
        this.availableTabs_ = tabTitles;
        this.invokeSpecificTabIndex_ = 0;
    }
    onRefreshTabsClick_() {
        this.refreshOpenTabs_();
    }
    onInvokeSpecificTabIndexChange_(e) {
        this.invokeSpecificTabIndex_ =
            Number(e.target.value);
    }
    onInvokeSpecificTabsToShareIndexChange_(e) {
        const select = e.target;
        const indexInArray = Number(select.dataset['index']);
        const newIndices = [...this.invokeSpecificTabsToShareIndices_];
        newIndices[indexInArray] = Number(select.value);
        this.invokeSpecificTabsToShareIndices_ = newIndices;
    }
    onRemoveTabsToShareIndexClick_(e) {
        const button = e.target;
        const indexToRemove = Number(button.dataset['index']);
        this.invokeSpecificTabsToShareIndices_ =
            this.invokeSpecificTabsToShareIndices_.filter((_, index) => index !== indexToRemove);
    }
    onAddTabsToShareIndexClick_() {
        this.invokeSpecificTabsToShareIndices_ =
            [...this.invokeSpecificTabsToShareIndices_, 0];
    }
    onInvokeZssOverrideChange_(e) {
        this.invokeZssOverride_ = e.target.checked;
    }
    onInvokeZssAdditionalContentInput_(e) {
        this.invokeZssAdditionalContent_ = e.target.value;
    }
    onInvokeOpenInForegroundChange(e) {
        this.invokeOpenInForeground_ = e.target.checked;
    }
    onInvokeActuationTargetChange_(e) {
        this.invokeActuationTarget_ = Number(e.target.value);
    }
    onInvokeShowPanelChange_(e) {
        this.invokeShowPanel_ = e.target.checked;
    }
    onInvokeFreCompletionWaitModeChange_(e) {
        this.invokeFreCompletionWaitMode_ =
            Number(e.target.value);
    }
    onInvokeTakeScreenshotChange_(e) {
        this.invokeTakeScreenshot_ = e.target.checked;
    }
    onInvokeSupersedeIfInProgressChange_(e) {
        this.invokeSupersedeIfInProgress_ = e.target.checked;
    }
    onInvokePublicKeyInput_(e) {
        this.invokePublicKey_ = e.target.value;
    }
    onInvokeAuthSecretInput_(e) {
        this.invokeAuthSecret_ = e.target.value;
    }
    onTriggerInvokeClick_() {
        let surface;
        if (this.invokeSurfaceType_ === 'newTab') {
            surface = { newTab: { openInForeground: this.invokeOpenInForeground_ } };
        }
        else {
            surface = { defaultSurface: {} };
        }
        let payload = null;
        if (this.invokeInvocationSource_ === InvocationSource.kUniversalCart) {
            const bytes = this.invokePayloadUniversalCartMetadata_ ?
                Array.from(atob(this.invokePayloadUniversalCartMetadata_), c => c.charCodeAt(0)) :
                [];
            payload = {
                universalCart: {
                    serializedMetadata: bytes,
                },
            };
        }
        let conversationSelection = {
            defaultConversation: {},
        };
        if (this.invokeConversationType_ === 'new') {
            conversationSelection = { newConversation: {} };
        }
        else if (this.invokeConversationType_ === 'conversationId') {
            conversationSelection = { conversationId: this.invokeConversationId_ };
        }
        const options = {
            invocationSource: this.invokeInvocationSource_,
            prompts: this.invokePrompts_.filter(prompt => prompt.length > 0),
            conversation: conversationSelection,
            featureMode: this.invokeFeatureMode_,
            disableZss: false,
            zssAdditionalContent: this.invokeZssOverride_ ?
                (this.invokeZssAdditionalContent_ || null) :
                null,
            skillId: null,
            errorMessage: null,
            timeout: this.invokeTimeoutMs_ ?
                { microseconds: BigInt(Number(this.invokeTimeoutMs_) * 1000) } :
                null,
            autoSubmit: this.invokeAutoSubmit_,
            freOverride: this.invokeFreOverride_,
            waitForPanelOpen: this.invokeWaitForPanelOpen_,
            focusOnShow: this.invokeFocusOnShow_,
            freCompletionWaitMode: this.invokeFreCompletionWaitMode_,
            surface: surface,
            specificTabIndex: this.invokeSurfaceType_ === 'specificTab' ?
                this.invokeSpecificTabIndex_ :
                null,
            specificTabsToShareIndices: this.invokeSpecificTabsToShareIndices_.length > 0 ?
                this.invokeSpecificTabsToShareIndices_ :
                null,
            actuationTarget: this.invokeActuationTarget_,
            showPanel: this.invokeAutoSubmit_ ? this.invokeShowPanel_ : null,
            payload: payload,
            takeScreenshot: this.invokeTakeScreenshot_,
            supersedeIfInProgress: this.invokeSupersedeIfInProgress_,
            keyConfig: (this.invokePublicKey_ || this.invokeAuthSecret_) ? {
                publicKey: this.invokePublicKey_,
                authSecret: this.invokeAuthSecret_,
            } :
                null,
        };
        const invocationSourceMap = InvocationSource;
        const featureModeMap = FeatureMode;
        const freOverrideMap = FreOverride;
        const freCompletionWaitModeMap = FreCompletionWaitMode;
        const actuationTargetMap = ActuationTarget;
        const optionsString = JSON.stringify(options, (key, value) => {
            if (typeof value === 'bigint') {
                value = value.toString();
            }
            if (value === null || value === undefined) {
                return undefined;
            }
            if (Array.isArray(value) && value.length === 0) {
                return undefined;
            }
            if (key === 'conversation') {
                if (value.defaultConversation &&
                    Object.keys(value.defaultConversation).length === 0) {
                    return undefined;
                }
            }
            if (key === 'surface') {
                if (value.defaultSurface &&
                    Object.keys(value.defaultSurface).length === 0) {
                    return undefined;
                }
            }
            if (key === 'freOverride' && value === FreOverride.kUnspecified) {
                return undefined;
            }
            if (key === 'featureMode' && value === FeatureMode.kUnspecified) {
                return undefined;
            }
            if (key === 'actuationTarget' &&
                value === ActuationTarget.kAgentDecides) {
                return undefined;
            }
            if (key === 'disableZss' && value === false) {
                return undefined;
            }
            if (key === 'waitForPanelOpen' && value === false) {
                return undefined;
            }
            if (key === 'focusOnShow' && value === true) {
                return undefined;
            }
            if (key === 'invocationSource') {
                return `${value} (${invocationSourceMap[value]})`;
            }
            if (key === 'featureMode') {
                return `${value} (${featureModeMap[value]})`;
            }
            if (key === 'freOverride') {
                return `${value} (${freOverrideMap[value]})`;
            }
            if (key === 'freCompletionWaitMode') {
                return `${value} (${freCompletionWaitModeMap[value]})`;
            }
            if (key === 'actuationTarget') {
                return `${value} (${actuationTargetMap[value]})`;
            }
            return value;
        }, 2);
        this.invokeLogs_ = [
            `[${new Date().toLocaleTimeString()}] TRIGGERING INVOKE with options:\n${optionsString}`,
        ];
        console.info(this.invokeLogs_[0]);
        this.browserProxy_.handler.triggerInvokeFromInternalsAction(options).then(({ success, errorMessage }) => {
            const timestamp = new Date().toLocaleTimeString();
            const logEntry = `[${timestamp}] ${success ? 'SUCCESS' : 'ERROR: ' + errorMessage}`;
            this.invokeLogs_ = [...this.invokeLogs_, logEntry];
            console.info(logEntry);
        });
    }
    getPlatformString_(platform) {
        switch (platform) {
            case Platform.kMacOS:
                return 'macOS';
            case Platform.kWindows:
                return 'Windows';
            case Platform.kLinux:
                return 'Linux';
            case Platform.kChromeOS:
                return 'ChromeOS';
            case Platform.kAndroid:
                return 'Android';
            default:
                return 'Unknown';
        }
    }
    getFormFactorString_(formFactor) {
        switch (formFactor) {
            case FormFactor.kDesktop:
                return 'Desktop';
            case FormFactor.kPhone:
                return 'Phone';
            case FormFactor.kTablet:
                return 'Tablet';
            default:
                return 'Unknown';
        }
    }
    getDebugSettingsData_() {
        if (!this.data_ || !this.data_.debugInfo) {
            return [];
        }
        const debugInfo = this.data_.debugInfo;
        const settings = [
            {
                label: 'GlicActor Feature Flag',
                value: debugInfo.glicActorFeatureEnabled,
            },
            {
                label: 'GlicRollout Feature Flag',
                value: debugInfo.glicRolloutFeatureEnabled,
            },
            {
                label: 'GlicTieredRollout Feature Flag',
                value: debugInfo.glicTieredRolloutFeatureEnabled,
            },
            {
                label: 'GlicTieredRolloutV2 Feature Flag',
                value: debugInfo.glicTieredRolloutV2FeatureEnabled,
            },
            {
                label: 'GlicSubscriptionBenefitsEligibility Feature Flag',
                value: debugInfo.glicSubscriptionBenefitsEligibilityFeatureEnabled,
            },
            {
                label: 'Platform',
                value: this.getPlatformString_(debugInfo.platform),
            },
            {
                label: 'Form Factor',
                value: this.getFormFactorString_(debugInfo.formFactor),
            },
            {
                label: 'Launcher Hotkey',
                value: debugInfo.hotkey || 'None',
            },
            {
                label: 'Locale',
                value: debugInfo.locale || 'None',
            },
            {
                label: 'Permanent Country Code',
                value: debugInfo.permanentCountryCode || 'None',
            },
            {
                label: 'Session Country Code',
                value: debugInfo.sessionCountryCode || 'None',
            },
            {
                label: 'System Requirement Met',
                value: debugInfo.systemRequirementMet,
            },
            {
                label: 'OS Version Supported',
                value: debugInfo.osVersionSupported,
            },
            {
                label: 'Anchor Entrypoint Override Active',
                value: debugInfo.anchorEntrypointOverrideActive,
            },
            {
                label: 'Primary Account Needs Signed In',
                value: debugInfo.primaryAccountNeedsSignedIn,
            },
            {
                label: 'Dogfood Client Status',
                value: debugInfo.dogfoodStatus,
            },
        ];
        if (debugInfo.booleanSettings) {
            for (const [key, val] of Object.entries(debugInfo.booleanSettings)) {
                settings.push({
                    label: key,
                    value: val,
                });
            }
        }
        return settings;
    }
    onSelectedTabIndexSelectedChanged_(e) {
        const newIndex = e.detail.value;
        if (this.selectedTabIndex_ === newIndex) {
            return;
        }
        this.selectedTabIndex_ = newIndex;
        const targetHash = TAB_HASH_MAP[newIndex] ?? DEFAULT_TAB_HASH;
        const currentHash = window.location.hash;
        if (currentHash !== targetHash &&
            !currentHash.startsWith(targetHash + '.')) {
            window.location.hash = targetHash;
        }
    }
    onTabsClick_(e) {
        const tab = e.composedPath().find(el => el instanceof HTMLElement &&
            el.classList.contains('tab'));
        if (!tab || tab.dataset['index'] === undefined) {
            return;
        }
        const clickedIndex = Number(tab.dataset['index']);
        const targetHash = TAB_HASH_MAP[clickedIndex] ?? DEFAULT_TAB_HASH;
        if (window.location.hash !== targetHash) {
            window.location.hash = targetHash;
        }
    }
    onSectionLinkClick_(e) {
        if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
            return;
        }
        e.preventDefault();
        const anchor = e.currentTarget
            .closest('a.section-link');
        const targetHash = anchor?.getAttribute('href');
        if (!targetHash) {
            return;
        }
        if (window.location.hash !== targetHash) {
            window.location.hash = targetHash;
        }
        else {
            const id = targetHash.startsWith('#') ? targetHash.slice(1) : targetHash;
            this.scrollToElement_(id);
        }
    }
    resolveTargetHash_(rawHash) {
        let hash = rawHash.trim().toLowerCase();
        if (!hash || hash === '#') {
            return {
                targetHash: DEFAULT_TAB_HASH,
                tabIndex: TAB_GENERAL,
            };
        }
        if (!hash.startsWith('#')) {
            hash = '#' + hash;
        }
        for (const [indexStr, tabHash] of Object.entries(TAB_HASH_MAP)) {
            const tabIndex = Number(indexStr);
            if (hash === tabHash) {
                return { targetHash: tabHash, tabIndex };
            }
            if (hash.startsWith(tabHash + '.')) {
                return {
                    targetHash: hash,
                    tabIndex,
                    elementId: hash.slice(1),
                };
            }
        }
        return {
            targetHash: DEFAULT_TAB_HASH,
            tabIndex: TAB_GENERAL,
        };
    }
    async onHashChanged_() {
        const { targetHash, tabIndex, elementId } = this.resolveTargetHash_(window.location.hash);
        if (this.selectedTabIndex_ !== tabIndex) {
            this.selectedTabIndex_ = tabIndex;
        }
        await this.updateComplete;
        if (elementId) {
            this.scrollToElement_(elementId);
        }
        else if (Object.values(TAB_HASH_MAP).includes(targetHash)) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    scrollToElement_(elementId) {
        if (!this.shadowRoot) {
            return;
        }
        const element = this.shadowRoot.getElementById(elementId);
        if (!element) {
            return;
        }
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Clear any pending timeout and remove highlight from any previously
        // highlighted element.
        if (this.highlightTimeoutId_ !== null) {
            window.clearTimeout(this.highlightTimeoutId_);
            this.highlightTimeoutId_ = null;
        }
        if (this.currentHighlightedElement_) {
            this.currentHighlightedElement_.classList.remove('highlight-target');
        }
        // Trigger pulse animation. Removing and re-adding the class with a forced
        // reflow (by reading offsetWidth) restarts the CSS animation if the element
        // was already highlighted.
        element.classList.remove('highlight-target');
        void element.offsetWidth;
        element.classList.add('highlight-target');
        this.currentHighlightedElement_ = element;
        this.highlightTimeoutId_ = window.setTimeout(() => {
            element.classList.remove('highlight-target');
            if (this.currentHighlightedElement_ === element) {
                this.currentHighlightedElement_ = null;
            }
            this.highlightTimeoutId_ = null;
        }, 1500);
    }
}
customElements.define(GlicInternalsAppElement.is, GlicInternalsAppElement);
