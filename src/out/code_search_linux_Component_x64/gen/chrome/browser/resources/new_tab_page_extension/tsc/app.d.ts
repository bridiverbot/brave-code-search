import '/strings.m.js';
import '/ntp/action_chips/action_chips.js';
import '/ntp/doodle_share_dialog.js';
import '/ntp/lens_upload_dialog.js';
import '/ntp/logo.js';
import '/ntp/ntp_composebox.js';
import '/ntp/ntp_searchbox.js';
import 'chrome://resources/cr_components/composebox/composebox_voice_search.js';
import 'chrome://resources/cr_components/search/animated_glow.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import type { ActionChipClickDetail } from '/ntp/action_chips/action_chips.js';
import { ActionChipsRetrievalState } from '/ntp/action_chips/action_chips_proxy.js';
import type { Theme } from '/ntp/new_tab_page.mojom-webui.js';
import { GlifAnimationState } from 'chrome://resources/cr_components/composebox/common.js';
import type { ComposeboxState } from 'chrome://resources/cr_components/composebox/common.js';
import type { VoicePermissionPromptState } from 'chrome://resources/cr_components/composebox/composebox_voice_search.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PageCallbackRouter as SearchboxPageCallbackRouter } from 'chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
declare const NtpExtensionAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class NtpExtensionAppElement extends NtpExtensionAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        realboxCanShowSecondarySide: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        theme_: {
            type: ObjectConstructor;
        };
        colorSourceIsBaseline_: {
            type: BooleanConstructor;
        };
        realboxShown_: {
            type: BooleanConstructor;
        };
        composeButtonEnabled_: {
            type: BooleanConstructor;
        };
        composeboxEnabled_: {
            type: BooleanConstructor;
        };
        composeboxState_: {
            type: ObjectConstructor;
        };
        showComposebox_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        caretAnimationsEnabled_: {
            type: BooleanConstructor;
        };
        usePecApi_: {
            type: BooleanConstructor;
        };
        smartTabSharingVisible_: {
            type: BooleanConstructor;
        };
        contextManagementInComposeboxEnabled_: {
            type: BooleanConstructor;
        };
        multiLineEnabled_: {
            type: BooleanConstructor;
        };
        ntpRealboxNextEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchboxCyclingPlaceholders_: {
            type: BooleanConstructor;
        };
        ntpNextFeaturesEnabled_: {
            type: BooleanConstructor;
        };
        isActionChipsVisible_: {
            type: BooleanConstructor;
        };
        containerFocused_: {
            type: BooleanConstructor;
        };
        showScrim_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        undoToastMessage_: {
            type: StringConstructor;
        };
        showLensUploadDialog_: {
            type: BooleanConstructor;
        };
        showVoiceSearch_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasVoiceSearchError_: {
            type: BooleanConstructor;
        };
        voiceSearchTranscript_: {
            type: StringConstructor;
        };
        voiceSearchReceivedSpeech_: {
            type: BooleanConstructor;
        };
        voiceSearchListening_: {
            type: BooleanConstructor;
        };
        voiceSearchLiveTranscriptionEnabled_: {
            type: BooleanConstructor;
        };
        voiceSearchAutoEndpointEnabled_: {
            type: BooleanConstructor;
        };
        voiceSearchHelperTextEnabled_: {
            type: BooleanConstructor;
        };
        androidSpeechRecognition_: {
            type: BooleanConstructor;
        };
        voiceQueryLengthLimit_: {
            type: NumberConstructor;
        };
        voiceAutoSubmitIdleTimeoutMs_: {
            type: NumberConstructor;
        };
        voiceManualSubmitIdleTimeoutMs_: {
            type: NumberConstructor;
        };
        searchboxCallbackRouter_: {
            type: ObjectConstructor;
        };
        contextMenuGlifAnimationState_: {
            type: StringConstructor;
        };
        energyEffectEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        energyEffectAnimationEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        energyEffectVariant_: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    accessor realboxCanShowSecondarySide: boolean;
    protected accessor theme_: Theme | null;
    protected accessor colorSourceIsBaseline_: boolean;
    protected accessor realboxShown_: boolean;
    protected accessor composeButtonEnabled_: boolean;
    protected accessor composeboxEnabled_: boolean;
    protected accessor composeboxState_: ComposeboxState | null;
    protected accessor showComposebox_: boolean;
    protected accessor caretAnimationsEnabled_: boolean;
    protected accessor usePecApi_: boolean;
    protected accessor smartTabSharingVisible_: boolean;
    protected accessor contextManagementInComposeboxEnabled_: boolean;
    protected accessor multiLineEnabled_: boolean;
    protected accessor ntpRealboxNextEnabled_: boolean;
    protected accessor searchboxCyclingPlaceholders_: boolean;
    protected accessor ntpNextFeaturesEnabled_: boolean;
    protected accessor isActionChipsVisible_: boolean;
    protected accessor containerFocused_: boolean;
    protected accessor showScrim_: boolean;
    protected accessor undoToastMessage_: string;
    protected accessor showLensUploadDialog_: boolean;
    protected accessor showVoiceSearch_: boolean;
    protected accessor hasVoiceSearchError_: boolean;
    protected accessor voiceSearchTranscript_: string;
    protected accessor voiceSearchReceivedSpeech_: boolean;
    protected accessor voiceSearchListening_: boolean;
    protected accessor voiceSearchLiveTranscriptionEnabled_: boolean;
    protected accessor voiceSearchAutoEndpointEnabled_: boolean;
    protected accessor voiceSearchHelperTextEnabled_: boolean;
    protected accessor androidSpeechRecognition_: boolean;
    protected accessor voiceQueryLengthLimit_: number;
    protected accessor voiceAutoSubmitIdleTimeoutMs_: number;
    protected accessor voiceManualSubmitIdleTimeoutMs_: number;
    protected accessor searchboxCallbackRouter_: SearchboxPageCallbackRouter;
    protected accessor contextMenuGlifAnimationState_: GlifAnimationState;
    protected accessor energyEffectEnabled_: boolean;
    protected accessor energyEffectAnimationEnabled_: boolean;
    protected accessor energyEffectVariant_: string;
    private realboxContextMenuAnimationAllowed_;
    private contextMenuAnimationLimitingEnabled_;
    private callbackRouter_;
    private pageHandler_;
    private eventTracker_;
    private setThemeListenerId_;
    private setActionChipsVisibilityListenerId_;
    private undoToastCallback_;
    private voiceSearchActivatedByKeyboard_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onActionChipClick_(e: CustomEvent<ActionChipClickDetail>): void;
    protected onActionChipsRetrievalStateChanged_(e: CustomEvent<{
        state: ActionChipsRetrievalState;
    }>): void;
    protected onContextMenuEntrypointClick_(): void;
    protected onOpenComposebox_(e: CustomEvent<ComposeboxState>): void;
    protected onOpenLensSearch_(): void;
    protected onCloseLensSearch_(): void;
    protected onOpenVoiceSearch_(): void;
    protected onVoiceSearchClose_(): void;
    protected onVoiceSearchDialogClick_(e: MouseEvent): void;
    protected onVoicePermissionChanged_(e: CustomEvent<VoicePermissionPromptState>): void;
    protected onVoiceSearchCancel_(): void;
    protected onVoiceSearchError_(): void;
    protected onVoiceSearchRestart_(): void;
    protected onVoiceSearchTranscriptUpdate_(e: CustomEvent<string>): void;
    protected onVoiceSearchSpeechReceived_(): void;
    protected onVoiceSearchFinalResult_(e: CustomEvent<string>): void;
    protected onVoiceSearchRecordingStopped_(e: CustomEvent<string>): void;
    protected showVoiceSearchGlow_(): boolean;
    protected onActionChipsDisabled_(e: CustomEvent<{
        message: string;
        undo: () => void;
    }>): void;
    protected onUndoButtonClick_(): void;
    protected onComposeboxContextMenuOpened_(): void;
    protected onCloseComposebox_(e: CustomEvent<{
        composeboxText?: string;
    }>): void;
    protected onScrimClick_(): void;
    protected onSearchboxContainerFocusin_(): void;
    protected onSearchboxContainerFocusout_(): void;
    protected isLogoSingleColored_(): boolean;
    private getLogoColor_;
    protected isThemeDark_(): boolean;
    protected showActionChips_(): boolean;
    protected showActionChipsBackground_(): boolean;
    private openComposeboxForActionChip_;
    private isUnsupportedSearchboxSurface_;
    private hasRealboxOverride_;
    private ensureComposeboxOpen_;
    private initializeContextMenuAnimationState_;
    private onWindowKeydown_;
    private openVoiceSearch_;
    private closeVoiceSearch_;
    private getVoiceSearchDialog_;
    private getVoiceSearch_;
    private getSearchbox_;
    private getComposebox_;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-extension-app': NtpExtensionAppElement;
    }
}
export {};
