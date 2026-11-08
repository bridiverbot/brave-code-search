import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './composebox_submit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { PageCallbackRouter } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { SubmitButtonIconType } from './common.js';
export interface VoicePermissionPromptState {
    isOpened: boolean;
    height: number;
    width: number;
}
export declare enum VoiceSearchError {
    ABORTED = 0,
    AUDIO_CAPTURE = 1,
    BAD_GRAMMAR = 2,
    LANGUAGE_NOT_SUPPORTED = 3,
    NETWORK = 4,
    NO_MATCH = 5,
    NO_SPEECH = 6,
    NOT_ALLOWED = 7,
    OTHER = 8,
    SERVICE_NOT_ALLOWED = 9,
    MAX_VALUE = 9
}
export declare enum VoiceSearchAction {
    ACTIVATED_BY_ICON = 0,
    ACTIVATED_BY_KEYBOARD = 1,
    QUERY_SUBMITTED = 3,
    SUPPORT_LINK_CLICKED = 4,
    RETRY_BY_TRY_AGAIN_CLICKED = 5,
    STOP_BUTTON_CLICKED = 7,
    RESUME_BUTTON_CLICKED = 8,
    ERROR_NON_CANCELING = 9,
    ERROR_CANCELING = 10,
    CANCELED_BY_USER = 11,
    MAX_VALUE = 11
}
export declare enum VoiceSearchMetricType {
    ACTION = "Action",
    ERROR = "Errors"
}
export declare enum VoiceSearchQuerySource {
    NTP_REALBOX = 0,
    NTP_COMPOSEBOX = 1,
    OMNIBOX_COMPOSEBOX = 2,
    NEXTBOX_COMPOSEBOX = 3,
    MAX_VALUE = 3
}
declare const ComposeboxVoiceSearchElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ComposeboxVoiceSearchElement extends ComposeboxVoiceSearchElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        audioWaveEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        helperTextEnabled: {
            type: BooleanConstructor;
        };
        submitStopButtonsEnabled: {
            type: BooleanConstructor;
        };
        liveTranscriptEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        pageCallbackRouter: {
            type: ObjectConstructor;
        };
        metricSource: {
            type: StringConstructor;
            attribute: string;
        };
        transcript_: {
            type: StringConstructor;
        };
        listeningPlaceholder_: {
            type: StringConstructor;
        };
        state_: {
            type: NumberConstructor;
        };
        finalResult_: {
            type: StringConstructor;
        };
        interimResult_: {
            type: StringConstructor;
        };
        errorMessage_: {
            type: StringConstructor;
        };
        error_: {
            type: NumberConstructor;
        };
        detailsUrl_: {
            type: StringConstructor;
        };
        detailedError: {
            type: NumberConstructor;
        };
        hasErrorTimer: {
            type: BooleanConstructor;
        };
        hasMultilineTranscript: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        transcriptLines: {
            type: NumberConstructor;
            reflect: boolean;
            attribute: string;
        };
        isPermissionPromptOpen: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        submitButtonIconType: {
            type: StringConstructor;
        };
        /**
         * Determines whether to automatically submit the query upon receiving a
         * final speech recognition result. When disabled, it will instead close
         * the voice search and populate the searchbox with the transcribed text.
         */
        autosubmitEnabled: {
            type: BooleanConstructor;
        };
        /**
         * Controls the `continuous` parameter of the Webkit Speech API. When
         * enabled, the API dynamically determines when to stop listening based on
         * speech patterns. If this is enabled, `idleTimeout` is ignored.
         */
        dynamicTimeoutEnabled: {
            type: BooleanConstructor;
        };
        /**
         * Maximum number of characters recognized before force-submitting a
         * query. Includes characters of non-confident recognition transcripts.
         */
        queryLengthLimit: {
            type: NumberConstructor;
        };
        /**
         * Time in milliseconds to wait before closing the UI if no interaction
         * has occurred since start, OR last word spoken. The default
         * value matches the Google3 AIM implementation. If
         * `dynamicTimeoutEnabled` is set, then this number is ignored.
         */
        idleTimeout: {
            type: NumberConstructor;
        };
        /**
         * Time in milliseconds to wait before closing the UI if no speech
         * has been detected at all since start, or trailing silence for
         * manual submit mode. If undefined, falls back to `idleTimeout`.
         */
        manualSubmitIdleTimeout: {
            type: NumberConstructor;
        };
        /**
         * When enabled, recognition is restarted, so that like on desktop the
         * idle timeout or the user decides when voice search ends. Ignored if
         * `dynamicTimeoutEnabled` is set.
         */
        androidContinuousRecognitionEnabled: {
            type: BooleanConstructor;
        };
        /**
         * Whether voice search was activated by a keyboard shortcut.
         */
        activatedByKeyboard: {
            type: BooleanConstructor;
        };
    };
    private static activeRecognition_;
    private static pendingStartInstance_;
    accessor activatedByKeyboard: boolean;
    accessor androidContinuousRecognitionEnabled: boolean;
    accessor audioWaveEnabled: boolean;
    accessor autosubmitEnabled: boolean;
    accessor detailedError: VoiceSearchError | null;
    accessor dynamicTimeoutEnabled: boolean;
    accessor hasErrorTimer: boolean;
    accessor hasMultilineTranscript: boolean;
    accessor helperTextEnabled: boolean;
    accessor idleTimeout: number;
    accessor isPermissionPromptOpen: boolean;
    accessor liveTranscriptEnabled: boolean;
    accessor manualSubmitIdleTimeout: number | undefined;
    accessor metricSource: string;
    accessor transcriptLines: number;
    accessor pageCallbackRouter: PageCallbackRouter | null;
    accessor queryLengthLimit: number | undefined;
    accessor submitButtonIconType: SubmitButtonIconType;
    accessor submitStopButtonsEnabled: boolean;
    protected accessor detailsUrl_: string;
    protected accessor error_: VoiceSearchError | null;
    protected accessor errorMessage_: string;
    protected accessor finalResult_: string;
    protected accessor interimResult_: string;
    protected accessor listeningPlaceholder_: string;
    protected accessor transcript_: string;
    private accessor state_;
    private readonly androidSpeechRecognition_;
    private androidPreviousTranscript_;
    private androidRestartsWithoutResult_;
    private blurTimeoutId_;
    private listenerIds_;
    private pageHandler_;
    private searchboxHandler_;
    private timerId_;
    private voiceRecognition_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues): void;
    protected isInError_(): boolean;
    start(): void;
    private onOutsideInteraction_;
    private onKeyDown_;
    /**
     * Adds global listeners to close voice search on outside interactions.
     * `pointerdown` captures clicks on flat DOMs (e.g., NTP).
     * `blur` captures clicks inside isolated webviews (e.g., Contextual Tasks
     * `#threadFrame`) which steal focus but do not bubble click events.
     * `keydown` captures Escape key to stop voice search.
     */
    private addOutsideListeners_;
    private removeOutsideListeners_;
    protected onStopClick_(e?: Event): void;
    private onVoicePermissionPromptChanged;
    private clearTimer_;
    private getIdleTimeout_;
    private resetIdleTimer_;
    protected onSubmitClick_(e: Event): void;
    private onIdleTimeout_;
    private onAudioStart_;
    private onSpeechStart_;
    private onResult_;
    private onEnd_;
    private isAndroidContinuousRecognition_;
    private restartAndroidRecognition_;
    private recordMetric_;
    private onError_;
    private getErrorText_;
    protected voiceModeEndCleanup_(): void;
    private onFinalResult_;
    protected onCloseClick_(): void;
    private resetState_;
    protected onLinkClick_(e: Event): void;
    protected onTryAgainClick_(e: Event): void;
    getErrorForTesting(): VoiceSearchError | null;
    getErrorMessageForTesting(): string;
    setErrorMessageForTesting(errorMessage: string): void;
    voiceModeEndCleanupForTesting(): void;
    private processSpeechTranscript_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-voice-search': ComposeboxVoiceSearchElement;
    }
}
export {};
