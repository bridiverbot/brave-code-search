import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_tabs/cr_tabs.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { //
ActuationTarget, //
FeatureMode, //
FormFactor, //
FreOverride, //
InvocationSource, //
Platform } from '../glic_enums.mojom-webui.js';
import { //
ActuationEligibility, //
FreCompletionWaitMode, //
GlicExperimentalTriggeringState } from '../glic_internals.mojom-webui.js';
import type { //
InternalsDataPayload } from '../glic_internals.mojom-webui.js';
export declare class GlicInternalsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        data_: {
            type: ObjectConstructor;
        };
        invokePrompts_: {
            type: ArrayConstructor;
        };
        invokeAutoSubmit_: {
            type: BooleanConstructor;
        };
        invokeFreOverride_: {
            type: NumberConstructor;
        };
        invokeFeatureMode_: {
            type: NumberConstructor;
        };
        invokeInvocationSource_: {
            type: NumberConstructor;
        };
        invokeWaitForPanelOpen_: {
            type: BooleanConstructor;
        };
        invokeFocusOnShow_: {
            type: BooleanConstructor;
        };
        invokeTimeoutMs_: {
            type: StringConstructor;
        };
        invokeLogs_: {
            type: ArrayConstructor;
        };
        invokeSurfaceType_: {
            type: StringConstructor;
        };
        invokeZssOverride_: {
            type: BooleanConstructor;
        };
        invokeZssAdditionalContent_: {
            type: StringConstructor;
        };
        invokeOpenInForeground_: {
            type: BooleanConstructor;
        };
        invokeActuationTarget_: {
            type: NumberConstructor;
        };
        actuationTargetEnumValues_: {
            type: ArrayConstructor;
        };
        invokeShowPanel_: {
            type: BooleanConstructor;
        };
        invokePayloadUniversalCartMetadata_: {
            type: StringConstructor;
        };
        invokeFreCompletionWaitMode_: {
            type: NumberConstructor;
        };
        freCompletionWaitModeEnumValues_: {
            type: ArrayConstructor;
        };
        invokeTakeScreenshot_: {
            type: BooleanConstructor;
        };
        invokeSupersedeIfInProgress_: {
            type: BooleanConstructor;
        };
        invokePublicKey_: {
            type: StringConstructor;
        };
        invokeAuthSecret_: {
            type: StringConstructor;
        };
        selectedTabIndex_: {
            type: NumberConstructor;
        };
        invokeConversationType_: {
            type: StringConstructor;
        };
        invokeConversationId_: {
            type: StringConstructor;
        };
        invokeSpecificTabIndex_: {
            type: NumberConstructor;
        };
        invokeSpecificTabsToShareIndices_: {
            type: ArrayConstructor;
        };
        availableTabs_: {
            type: ArrayConstructor;
        };
        tabNames_: {
            type: ArrayConstructor;
        };
        featureModeEnumValues_: {
            type: ArrayConstructor;
        };
        copyButtonText_: {
            type: StringConstructor;
        };
    };
    protected accessor copyButtonText_: string;
    private copyResetTimeoutId_;
    private eventTracker_;
    private highlightTimeoutId_;
    private currentHighlightedElement_;
    protected accessor data_: InternalsDataPayload | undefined;
    protected accessor invokePrompts_: string[];
    protected accessor invokeAutoSubmit_: boolean;
    protected accessor invokeFreOverride_: FreOverride;
    protected accessor invokeFeatureMode_: FeatureMode;
    protected accessor invokeInvocationSource_: InvocationSource;
    protected accessor invokeWaitForPanelOpen_: boolean;
    protected accessor invokeFocusOnShow_: boolean;
    protected accessor invokeTimeoutMs_: string;
    protected accessor invokeLogs_: string[];
    protected accessor invokeSurfaceType_: string;
    protected accessor invokeZssOverride_: boolean;
    protected accessor invokeZssAdditionalContent_: string;
    protected accessor invokeOpenInForeground_: boolean;
    protected accessor invokeActuationTarget_: ActuationTarget;
    protected accessor invokeShowPanel_: boolean;
    protected accessor invokePayloadUniversalCartMetadata_: string;
    protected accessor invokeFreCompletionWaitMode_: FreCompletionWaitMode;
    protected accessor invokeTakeScreenshot_: boolean;
    protected accessor invokeSupersedeIfInProgress_: boolean;
    protected accessor invokePublicKey_: string;
    protected accessor invokeAuthSecret_: string;
    protected accessor invokeConversationType_: string;
    protected accessor invokeConversationId_: string;
    protected accessor invokeSpecificTabIndex_: number;
    protected accessor invokeSpecificTabsToShareIndices_: number[];
    protected accessor availableTabs_: string[];
    protected accessor selectedTabIndex_: number;
    protected accessor tabNames_: string[];
    protected accessor featureModeEnumValues_: Array<{
        name: string;
        value: number;
    }>;
    protected accessor actuationTargetEnumValues_: Array<{
        name: string;
        value: number;
    }>;
    protected accessor freCompletionWaitModeEnumValues_: Array<{
        name: string;
        value: number;
    }>;
    private browserProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private fetchInternalsData_;
    protected onShowErrorAllowedChange(e: Event): void;
    protected onExperimentalOptInClick_(): void;
    protected isAllConsentMet_(): boolean;
    protected onGlicConsentChange_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onActuationConsentChange_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onExperimentalConsentChange_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onHotkeyGlobalScopeMigratedChange_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onAutopushInputChange(e: Event): void;
    protected onStagingInputChange(e: Event): void;
    protected onPreprodInputChange(e: Event): void;
    protected onProdInputChange(e: Event): void;
    protected onSavePresetsClick_(): void;
    protected onWebContinuityInputChange(e: Event): void;
    protected onSaveWebContinuityPresetClick_(): void;
    protected getActuationEligibilityString_(eligibility: ActuationEligibility): string;
    protected getExperimentalTriggeringStateString_(state: GlicExperimentalTriggeringState): string;
    protected isActuationEligible_(): boolean;
    protected isGlicApiActuationEligible_(): boolean;
    protected computeOverallStatus_(): {
        enabled: boolean;
        reason?: string;
    };
    protected onRefreshClick_(): void;
    protected getChromeVersion_(): string;
    protected getDiagnosticsMarkdown_(): string;
    private cleanTableCellText_;
    private tableToMarkdown_;
    protected onCopyDiagnosticsClick_(): Promise<void>;
    protected isExperimentalOptInConsentMet_(): boolean;
    protected getTableData_(): Array<{
        label: string;
        value: boolean;
    }>;
    protected getInvocationSourceOptions_(): Array<{
        name: string;
        value: number;
    }>;
    protected onInvokePromptInput_(e: Event): void;
    protected onAddPromptClick_(): void;
    protected onRemovePromptClick_(e: Event): void;
    protected onInvokeAutoSubmitChange_(e: Event): void;
    protected onInvokeFreOverrideChange_(e: Event): void;
    protected onInvokeFeatureModeChange_(e: Event): void;
    protected onInvokeInvocationSourceChange_(e: Event): void;
    protected onInvokeWaitForPanelOpenChange_(e: Event): void;
    protected onInvokeFocusOnShowChange_(e: Event): void;
    protected onInvokeTimeoutMsInput_(e: Event): void;
    protected onInvokeConversationTypeChange_(e: Event): void;
    protected onInvokeConversationIdInput_(e: Event): void;
    protected onPayloadUniversalCartMetadataInput_(e: Event): void;
    protected onInvokeSurfaceTypeChange_(e: Event): Promise<void>;
    protected refreshOpenTabs_(): Promise<void>;
    protected onRefreshTabsClick_(): void;
    protected onInvokeSpecificTabIndexChange_(e: Event): void;
    protected onInvokeSpecificTabsToShareIndexChange_(e: Event): void;
    protected onRemoveTabsToShareIndexClick_(e: Event): void;
    protected onAddTabsToShareIndexClick_(): void;
    protected onInvokeZssOverrideChange_(e: Event): void;
    protected onInvokeZssAdditionalContentInput_(e: Event): void;
    protected onInvokeOpenInForegroundChange(e: Event): void;
    protected onInvokeActuationTargetChange_(e: Event): void;
    protected onInvokeShowPanelChange_(e: Event): void;
    protected onInvokeFreCompletionWaitModeChange_(e: Event): void;
    protected onInvokeTakeScreenshotChange_(e: Event): void;
    protected onInvokeSupersedeIfInProgressChange_(e: Event): void;
    protected onInvokePublicKeyInput_(e: Event): void;
    protected onInvokeAuthSecretInput_(e: Event): void;
    protected onTriggerInvokeClick_(): void;
    protected getPlatformString_(platform: Platform): string;
    protected getFormFactorString_(formFactor: FormFactor): string;
    protected getDebugSettingsData_(): Array<{
        label: string;
        value: string | boolean;
    }>;
    protected onSelectedTabIndexSelectedChanged_(e: CustomEvent<{
        value: number;
    }>): void;
    protected onTabsClick_(e: MouseEvent): void;
    protected onSectionLinkClick_(e: MouseEvent): void;
    private resolveTargetHash_;
    private onHashChanged_;
    private scrollToElement_;
}
declare global {
    interface HTMLElementTagNameMap {
        'glic-internals-app': GlicInternalsAppElement;
    }
}
