// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './composebox_submit.js';
import { AudioProcessor } from '//resources/cr_components/search/audio_processor.service.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getLoadTimeBoolean, recordEnumerationValue, SubmitButtonIconType } from './common.js';
import { ComposeboxProxyImpl } from './composebox_proxy.js';
import { getCss } from './composebox_voice_search.css.js';
import { getHtml } from './composebox_voice_search.html.js';
import { WindowProxy } from './window_proxy.js';
/**
 * Threshold for considering an interim speech transcript result as "confident
 * enough". The more confident the API is about a transcript, the higher the
 * confidence (number between 0 and 1).
 */
const RECOGNITION_CONFIDENCE_THRESHOLD = 0.7;
/**
 * Time in milliseconds to wait before automatically closing the UI after a
 * NO_MATCH error occurs (when the error timer is enabled).
 */
const ERROR_TIMEOUT_LONG_MS = 24000;
/**
 * Time in milliseconds to wait before automatically closing the UI after a non
 * NO_MATCH error occurs (when the error timer is enabled).
 */
const ERROR_TIMEOUT_SHORT_MS = 9000;
// The set of controller states.
var State;
(function (State) {
    // Initial state before voice recognition has been set up.
    State[State["UNINITIALIZED"] = -1] = "UNINITIALIZED";
    // Indicates that speech recognition has started, but no audio has yet
    // been captured.
    State[State["STARTED"] = 0] = "STARTED";
    // Indicates that audio is being captured by the Web Speech API, but no
    // speech has yet been recognized. UI indicates that audio is being captured.
    State[State["AUDIO_RECEIVED"] = 1] = "AUDIO_RECEIVED";
    // Indicates that speech has been recognized by the Web Speech API, but no
    // resulting transcripts have yet been received back. UI indicates that audio
    // is being captured and is pulsating audio button.
    State[State["SPEECH_RECEIVED"] = 2] = "SPEECH_RECEIVED";
    // Indicates speech has been successfully recognized and text transcripts have
    // been reported back. UI indicates that audio is being captured and is
    // displaying transcripts received so far.
    State[State["RESULT_RECEIVED"] = 3] = "RESULT_RECEIVED";
    // Indicates that speech recognition has failed due to an error (or a no match
    // error) being received from the Web Speech API. A timeout may have occurred
    // as well. UI displays the error message.
    State[State["ERROR_RECEIVED"] = 4] = "ERROR_RECEIVED";
    // Indicates speech recognition has received a final search query but the UI
    // has not yet redirected. The UI is displaying the final query.
    State[State["RESULT_FINAL"] = 5] = "RESULT_FINAL";
})(State || (State = {}));
export var VoiceSearchError;
(function (VoiceSearchError) {
    VoiceSearchError[VoiceSearchError["ABORTED"] = 0] = "ABORTED";
    VoiceSearchError[VoiceSearchError["AUDIO_CAPTURE"] = 1] = "AUDIO_CAPTURE";
    VoiceSearchError[VoiceSearchError["BAD_GRAMMAR"] = 2] = "BAD_GRAMMAR";
    VoiceSearchError[VoiceSearchError["LANGUAGE_NOT_SUPPORTED"] = 3] = "LANGUAGE_NOT_SUPPORTED";
    VoiceSearchError[VoiceSearchError["NETWORK"] = 4] = "NETWORK";
    VoiceSearchError[VoiceSearchError["NO_MATCH"] = 5] = "NO_MATCH";
    VoiceSearchError[VoiceSearchError["NO_SPEECH"] = 6] = "NO_SPEECH";
    VoiceSearchError[VoiceSearchError["NOT_ALLOWED"] = 7] = "NOT_ALLOWED";
    VoiceSearchError[VoiceSearchError["OTHER"] = 8] = "OTHER";
    VoiceSearchError[VoiceSearchError["SERVICE_NOT_ALLOWED"] = 9] = "SERVICE_NOT_ALLOWED";
    VoiceSearchError[VoiceSearchError["MAX_VALUE"] = 9] = "MAX_VALUE";
})(VoiceSearchError || (VoiceSearchError = {}));
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
export var VoiceSearchAction;
(function (VoiceSearchAction) {
    VoiceSearchAction[VoiceSearchAction["ACTIVATED_BY_ICON"] = 0] = "ACTIVATED_BY_ICON";
    VoiceSearchAction[VoiceSearchAction["ACTIVATED_BY_KEYBOARD"] = 1] = "ACTIVATED_BY_KEYBOARD";
    // CLOSED_OVERLAY = 2, // Obsolete, replaced by CANCELED_BY_USER
    VoiceSearchAction[VoiceSearchAction["QUERY_SUBMITTED"] = 3] = "QUERY_SUBMITTED";
    VoiceSearchAction[VoiceSearchAction["SUPPORT_LINK_CLICKED"] = 4] = "SUPPORT_LINK_CLICKED";
    VoiceSearchAction[VoiceSearchAction["RETRY_BY_TRY_AGAIN_CLICKED"] = 5] = "RETRY_BY_TRY_AGAIN_CLICKED";
    // TRY_AGAIN_MIC_BUTTON = 6, // Obsolete. Deprecated as of 09/2022.
    VoiceSearchAction[VoiceSearchAction["STOP_BUTTON_CLICKED"] = 7] = "STOP_BUTTON_CLICKED";
    VoiceSearchAction[VoiceSearchAction["RESUME_BUTTON_CLICKED"] = 8] = "RESUME_BUTTON_CLICKED";
    VoiceSearchAction[VoiceSearchAction["ERROR_NON_CANCELING"] = 9] = "ERROR_NON_CANCELING";
    VoiceSearchAction[VoiceSearchAction["ERROR_CANCELING"] = 10] = "ERROR_CANCELING";
    VoiceSearchAction[VoiceSearchAction["CANCELED_BY_USER"] = 11] = "CANCELED_BY_USER";
    VoiceSearchAction[VoiceSearchAction["MAX_VALUE"] = 11] = "MAX_VALUE";
})(VoiceSearchAction || (VoiceSearchAction = {}));
export var VoiceSearchMetricType;
(function (VoiceSearchMetricType) {
    VoiceSearchMetricType["ACTION"] = "Action";
    VoiceSearchMetricType["ERROR"] = "Errors";
})(VoiceSearchMetricType || (VoiceSearchMetricType = {}));
export var VoiceSearchQuerySource;
(function (VoiceSearchQuerySource) {
    VoiceSearchQuerySource[VoiceSearchQuerySource["NTP_REALBOX"] = 0] = "NTP_REALBOX";
    VoiceSearchQuerySource[VoiceSearchQuerySource["NTP_COMPOSEBOX"] = 1] = "NTP_COMPOSEBOX";
    VoiceSearchQuerySource[VoiceSearchQuerySource["OMNIBOX_COMPOSEBOX"] = 2] = "OMNIBOX_COMPOSEBOX";
    VoiceSearchQuerySource[VoiceSearchQuerySource["NEXTBOX_COMPOSEBOX"] = 3] = "NEXTBOX_COMPOSEBOX";
    VoiceSearchQuerySource[VoiceSearchQuerySource["MAX_VALUE"] = 3] = "MAX_VALUE";
})(VoiceSearchQuerySource || (VoiceSearchQuerySource = {}));
function toError(webkitError) {
    switch (webkitError) {
        case 'aborted':
            return VoiceSearchError.ABORTED;
        case 'audio-capture':
            return VoiceSearchError.AUDIO_CAPTURE;
        case 'language-not-supported':
            return VoiceSearchError.LANGUAGE_NOT_SUPPORTED;
        case 'network':
            return VoiceSearchError.NETWORK;
        case 'no-speech':
            return VoiceSearchError.NO_SPEECH;
        case 'not-allowed':
            return VoiceSearchError.NOT_ALLOWED;
        case 'service-not-allowed':
            return VoiceSearchError.SERVICE_NOT_ALLOWED;
        case 'bad-grammar':
            return VoiceSearchError.BAD_GRAMMAR;
        default:
            return VoiceSearchError.OTHER;
    }
}
// Recognitions that this component aborted itself (to submit, cancel, time
// out, disconnect, or hand the microphone to another instance). This is used
// to ignore Chrome's duplicate echo of the component's abort calls, as Chrome
// answers abort() on a live session with an 'aborted' error event. Keyed by
// recognition because the echo goes to the recognition's owner, which is not
// always the caller (see start()).
const selfAbortedRecognitions = new WeakSet();
function abortRecognition(recognition) {
    selfAbortedRecognitions.add(recognition);
    recognition.abort();
}
/**
 * Maximum number of times in a row that Android speech recognition is
 * restarted without receiving any result in between (see
 * `androidContinuousRecognitionEnabled`). Needed to avoid restarting
 * constantly (an infinite loop) if the recognizer keeps ending right away.
 */
const MAX_ANDROID_RESTARTS_WITHOUT_RESULT = 5;
// Scripts that are written without spaces between words.
const NO_SPACE_SCRIPTS = ['Han', 'Hiragana', 'Katakana', 'Thai', 'Lao', 'Khmer', 'Myanmar']
    .map(script => `\\p{Script=${script}}`)
    .join('');
const NO_SPACE_SCRIPT_END = new RegExp(`[${NO_SPACE_SCRIPTS}]$`, 'u');
const NO_SPACE_SCRIPT_START = new RegExp(`^[${NO_SPACE_SCRIPTS}]`, 'u');
/**
 * Joins the transcripts of two consecutive speech recognition sessions. Adds a
 * space in between, unless there already is whitespace at the boundary or the
 * boundary is in a script that is written without spaces (e.g. Chinese).
 */
function joinTranscripts(previous, next) {
    if (!previous || !next || /\s$/.test(previous) || /^\s/.test(next) ||
        NO_SPACE_SCRIPT_END.test(previous) || NO_SPACE_SCRIPT_START.test(next)) {
        return previous + next;
    }
    return `${previous} ${next}`;
}
const ComposeboxVoiceSearchElementBase = I18nMixinLit(CrLitElement);
export class ComposeboxVoiceSearchElement extends ComposeboxVoiceSearchElementBase {
    static get is() {
        return 'cr-composebox-voice-search';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            audioWaveEnabled: {
                type: Boolean,
                reflect: true,
            },
            helperTextEnabled: { type: Boolean },
            submitStopButtonsEnabled: { type: Boolean },
            liveTranscriptEnabled: {
                type: Boolean,
                reflect: true,
            },
            pageCallbackRouter: { type: Object },
            metricSource: { type: String, attribute: 'metric-source' },
            transcript_: { type: String },
            listeningPlaceholder_: { type: String },
            state_: { type: Number },
            finalResult_: { type: String },
            interimResult_: { type: String },
            errorMessage_: { type: String },
            error_: { type: Number },
            detailsUrl_: { type: String },
            detailedError: { type: Number },
            hasErrorTimer: { type: Boolean },
            hasMultilineTranscript: {
                type: Boolean,
                reflect: true,
                attribute: 'has-multiline-transcript',
            },
            transcriptLines: {
                type: Number,
                reflect: true,
                attribute: 'transcript-lines',
            },
            isPermissionPromptOpen: {
                type: Boolean,
                reflect: true,
            },
            submitButtonIconType: { type: String },
            /**
             * Determines whether to automatically submit the query upon receiving a
             * final speech recognition result. When disabled, it will instead close
             * the voice search and populate the searchbox with the transcribed text.
             */
            autosubmitEnabled: { type: Boolean },
            /**
             * Controls the `continuous` parameter of the Webkit Speech API. When
             * enabled, the API dynamically determines when to stop listening based on
             * speech patterns. If this is enabled, `idleTimeout` is ignored.
             */
            dynamicTimeoutEnabled: { type: Boolean },
            /**
             * Maximum number of characters recognized before force-submitting a
             * query. Includes characters of non-confident recognition transcripts.
             */
            queryLengthLimit: { type: Number },
            /**
             * Time in milliseconds to wait before closing the UI if no interaction
             * has occurred since start, OR last word spoken. The default
             * value matches the Google3 AIM implementation. If
             * `dynamicTimeoutEnabled` is set, then this number is ignored.
             */
            idleTimeout: { type: Number },
            /**
             * Time in milliseconds to wait before closing the UI if no speech
             * has been detected at all since start, or trailing silence for
             * manual submit mode. If undefined, falls back to `idleTimeout`.
             */
            manualSubmitIdleTimeout: { type: Number },
            /**
             * When enabled, recognition is restarted, so that like on desktop the
             * idle timeout or the user decides when voice search ends. Ignored if
             * `dynamicTimeoutEnabled` is set.
             */
            androidContinuousRecognitionEnabled: { type: Boolean },
            /**
             * Whether voice search was activated by a keyboard shortcut.
             */
            activatedByKeyboard: { type: Boolean },
        };
    }
    // Shared statically to coordinate the singleton SpeechRecognition service
    // across element instances (which are destroyed/recreated on toggle) and
    // prevent InvalidStateError crashes on rapid restarts.
    static activeRecognition_ = null;
    static pendingStartInstance_ = null;
    #activatedByKeyboard_accessor_storage = false;
    get activatedByKeyboard() { return this.#activatedByKeyboard_accessor_storage; }
    set activatedByKeyboard(value) { this.#activatedByKeyboard_accessor_storage = value; }
    #androidContinuousRecognitionEnabled_accessor_storage = false;
    get androidContinuousRecognitionEnabled() { return this.#androidContinuousRecognitionEnabled_accessor_storage; }
    set androidContinuousRecognitionEnabled(value) { this.#androidContinuousRecognitionEnabled_accessor_storage = value; }
    #audioWaveEnabled_accessor_storage = false;
    get audioWaveEnabled() { return this.#audioWaveEnabled_accessor_storage; }
    set audioWaveEnabled(value) { this.#audioWaveEnabled_accessor_storage = value; }
    #autosubmitEnabled_accessor_storage = false;
    get autosubmitEnabled() { return this.#autosubmitEnabled_accessor_storage; }
    set autosubmitEnabled(value) { this.#autosubmitEnabled_accessor_storage = value; }
    #detailedError_accessor_storage = null;
    get detailedError() { return this.#detailedError_accessor_storage; }
    set detailedError(value) { this.#detailedError_accessor_storage = value; }
    #dynamicTimeoutEnabled_accessor_storage = false;
    get dynamicTimeoutEnabled() { return this.#dynamicTimeoutEnabled_accessor_storage; }
    set dynamicTimeoutEnabled(value) { this.#dynamicTimeoutEnabled_accessor_storage = value; }
    #hasErrorTimer_accessor_storage = false;
    get hasErrorTimer() { return this.#hasErrorTimer_accessor_storage; }
    set hasErrorTimer(value) { this.#hasErrorTimer_accessor_storage = value; }
    #hasMultilineTranscript_accessor_storage = false;
    get hasMultilineTranscript() { return this.#hasMultilineTranscript_accessor_storage; }
    set hasMultilineTranscript(value) { this.#hasMultilineTranscript_accessor_storage = value; }
    #helperTextEnabled_accessor_storage = false;
    get helperTextEnabled() { return this.#helperTextEnabled_accessor_storage; }
    set helperTextEnabled(value) { this.#helperTextEnabled_accessor_storage = value; }
    #idleTimeout_accessor_storage = 3000;
    get idleTimeout() { return this.#idleTimeout_accessor_storage; }
    set idleTimeout(value) { this.#idleTimeout_accessor_storage = value; }
    #isPermissionPromptOpen_accessor_storage = false;
    get isPermissionPromptOpen() { return this.#isPermissionPromptOpen_accessor_storage; }
    set isPermissionPromptOpen(value) { this.#isPermissionPromptOpen_accessor_storage = value; }
    #liveTranscriptEnabled_accessor_storage = true;
    get liveTranscriptEnabled() { return this.#liveTranscriptEnabled_accessor_storage; }
    set liveTranscriptEnabled(value) { this.#liveTranscriptEnabled_accessor_storage = value; }
    #manualSubmitIdleTimeout_accessor_storage = undefined;
    get manualSubmitIdleTimeout() { return this.#manualSubmitIdleTimeout_accessor_storage; }
    set manualSubmitIdleTimeout(value) { this.#manualSubmitIdleTimeout_accessor_storage = value; }
    #metricSource_accessor_storage = '';
    get metricSource() { return this.#metricSource_accessor_storage; }
    set metricSource(value) { this.#metricSource_accessor_storage = value; }
    #transcriptLines_accessor_storage = 1;
    get transcriptLines() { return this.#transcriptLines_accessor_storage; }
    set transcriptLines(value) { this.#transcriptLines_accessor_storage = value; }
    #pageCallbackRouter_accessor_storage = null;
    // Accept page callback router attribute asynchronously, so that the parent
    // and voice search component can share the same mojo connection and source of
    // truth (to avoid race conditions).
    get pageCallbackRouter() { return this.#pageCallbackRouter_accessor_storage; }
    set pageCallbackRouter(value) { this.#pageCallbackRouter_accessor_storage = value; }
    #queryLengthLimit_accessor_storage = undefined;
    get queryLengthLimit() { return this.#queryLengthLimit_accessor_storage; }
    set queryLengthLimit(value) { this.#queryLengthLimit_accessor_storage = value; }
    #submitButtonIconType_accessor_storage = SubmitButtonIconType.FORWARD;
    get submitButtonIconType() { return this.#submitButtonIconType_accessor_storage; }
    set submitButtonIconType(value) { this.#submitButtonIconType_accessor_storage = value; }
    #submitStopButtonsEnabled_accessor_storage = false;
    get submitStopButtonsEnabled() { return this.#submitStopButtonsEnabled_accessor_storage; }
    set submitStopButtonsEnabled(value) { this.#submitStopButtonsEnabled_accessor_storage = value; }
    #detailsUrl__accessor_storage = `https://support.google.com/chrome/?p=ui_voice_search&hl=${window.navigator.language}`;
    get detailsUrl_() { return this.#detailsUrl__accessor_storage; }
    set detailsUrl_(value) { this.#detailsUrl__accessor_storage = value; }
    #error__accessor_storage = null;
    get error_() { return this.#error__accessor_storage; }
    set error_(value) { this.#error__accessor_storage = value; }
    #errorMessage__accessor_storage = '';
    get errorMessage_() { return this.#errorMessage__accessor_storage; }
    set errorMessage_(value) { this.#errorMessage__accessor_storage = value; }
    #finalResult__accessor_storage = '';
    get finalResult_() { return this.#finalResult__accessor_storage; }
    set finalResult_(value) { this.#finalResult__accessor_storage = value; }
    #interimResult__accessor_storage = '';
    get interimResult_() { return this.#interimResult__accessor_storage; }
    set interimResult_(value) { this.#interimResult__accessor_storage = value; }
    #listeningPlaceholder__accessor_storage = loadTimeData.getString('voiceListening');
    get listeningPlaceholder_() { return this.#listeningPlaceholder__accessor_storage; }
    set listeningPlaceholder_(value) { this.#listeningPlaceholder__accessor_storage = value; }
    #transcript__accessor_storage = '';
    get transcript_() { return this.#transcript__accessor_storage; }
    set transcript_(value) { this.#transcript__accessor_storage = value; }
    #state__accessor_storage = State.UNINITIALIZED;
    get state_() { return this.#state__accessor_storage; }
    set state_(value) { this.#state__accessor_storage = value; }
    // True when `webkitSpeechRecognition` is backed by Android's
    // `SpeechRecognitionImpl`, which owns the microphone itself and reports
    // cumulative result snapshots.
    androidSpeechRecognition_ = getLoadTimeBoolean('androidSpeechRecognition', false);
    // The transcript recognized before the latest Android recognition restart
    // (see `androidContinuousRecognitionEnabled`).
    androidPreviousTranscript_ = '';
    // How many times in a row Android recognition was restarted without any
    // result. Needed to avoid restarting constantly (an infinite loop) if the
    // recognizer keeps ending right away.
    androidRestartsWithoutResult_ = 0;
    blurTimeoutId_ = null;
    listenerIds_ = [];
    pageHandler_ = ComposeboxProxyImpl.getInstance().handler;
    searchboxHandler_ = ComposeboxProxyImpl.getInstance().searchboxHandler;
    timerId_ = null;
    voiceRecognition_;
    constructor() {
        super();
        this.voiceRecognition_ =
            WindowProxy.getInstance().createSpeechRecognition();
        this.voiceRecognition_.interimResults = true;
        this.voiceRecognition_.lang = window.navigator.language;
        this.voiceRecognition_.onresult = this.onResult_.bind(this);
        this.voiceRecognition_.onend = this.onEnd_.bind(this);
        this.voiceRecognition_.onaudiostart = this.onAudioStart_.bind(this);
        this.voiceRecognition_.onspeechstart = this.onSpeechStart_.bind(this);
        this.voiceRecognition_.onerror = (e) => {
            const error = toError(e.error);
            if (error === VoiceSearchError.NO_SPEECH &&
                this.isAndroidContinuousRecognition_()) {
                // Android ends its session with this error when it hears no speech for
                // a while. Like for any other session end, `onEnd_()` then decides
                // whether voice search keeps listening.
                return;
            }
            this.onError_(error);
        };
        this.voiceRecognition_.onnomatch = () => {
            if (this.isAndroidContinuousRecognition_()) {
                // Same as for no-speech, when Android hears no recognizable speech.
                return;
            }
            this.onError_(VoiceSearchError.NO_MATCH);
        };
    }
    connectedCallback() {
        super.connectedCallback();
        AudioProcessor.setSimulate(this.androidSpeechRecognition_);
        if (!this.metricSource) {
            this.searchboxHandler_.getPageClassification().then(({ metricSource }) => {
                this.metricSource = metricSource || '';
            });
        }
    }
    disconnectedCallback() {
        this.listenerIds_.forEach((id) => assert(this.pageCallbackRouter.removeListener(id)));
        this.listenerIds_ = [];
        this.removeOutsideListeners_();
        if (ComposeboxVoiceSearchElement.pendingStartInstance_ === this) {
            ComposeboxVoiceSearchElement.pendingStartInstance_ = null;
        }
        abortRecognition(this.voiceRecognition_);
        super.disconnectedCallback();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // When `pageCallbackRouter` is set by the parent,
        // add all listeners for the callback router if not already added.
        if (changedProperties.has('pageCallbackRouter') &&
            this.pageCallbackRouter && this.listenerIds_.length === 0) {
            this.listenerIds_.push(this.pageCallbackRouter.onPermissionPromptChanged.addListener(this.onVoicePermissionPromptChanged.bind(this)));
        }
        if (changedProperties.has('transcript_') ||
            changedProperties.has('audioWaveEnabled') ||
            changedProperties.has('liveTranscriptEnabled')) {
            const input = this.shadowRoot?.querySelector('#input');
            if (input && this.audioWaveEnabled && this.liveTranscriptEnabled) {
                input.scrollTop = input.scrollHeight;
                const lines = !this.transcript_ ?
                    1 :
                    Math.min(7, Math.max(1, Math.round((input.scrollHeight - 20) / 24)));
                this.transcriptLines = lines;
                this.hasMultilineTranscript = lines > 1;
            }
            else {
                this.transcriptLines = 1;
                this.hasMultilineTranscript = false;
            }
        }
    }
    isInError_() {
        return !!this.errorMessage_;
    }
    start() {
        if (this.state_ !== State.UNINITIALIZED &&
            this.state_ !== State.ERROR_RECEIVED) {
            return;
        }
        if (ComposeboxVoiceSearchElement.activeRecognition_ !== null) {
            ComposeboxVoiceSearchElement.pendingStartInstance_ = this;
            abortRecognition(ComposeboxVoiceSearchElement.activeRecognition_);
            return;
        }
        this.resetState_();
        // If continuous is false, then speech webkit determines when to end, and
        // there is no manual set timeout.
        this.voiceRecognition_.continuous = !this.dynamicTimeoutEnabled;
        // Any earlier session of this recognition has ended by now (onEnd_ clears
        // activeRecognition_, and Chrome sends 'end' after the 'aborted' echo), so
        // aborts from here on are not ours.
        selfAbortedRecognitions.delete(this.voiceRecognition_);
        this.voiceRecognition_.start();
        ComposeboxVoiceSearchElement.activeRecognition_ = this.voiceRecognition_;
        this.state_ = State.STARTED;
        this.resetIdleTimer_();
        this.recordMetric_(VoiceSearchMetricType.ACTION, this.activatedByKeyboard ? VoiceSearchAction.ACTIVATED_BY_KEYBOARD :
            VoiceSearchAction.ACTIVATED_BY_ICON, VoiceSearchAction.MAX_VALUE + 1);
        this.addOutsideListeners_();
    }
    onOutsideInteraction_ = (e) => {
        if (e.type === 'pointerdown') {
            const host = this.getRootNode() instanceof ShadowRoot ?
                this.getRootNode().host : null;
            if (e.composedPath().includes(this) ||
                (host && e.composedPath().includes(host))) {
                return;
            }
            this.onStopClick_();
            return;
        }
        if (e.type === 'blur') {
            // If permission prompt is open currently, ignore the blur event,
            // as the blur is from the permission prompt, and need voice search
            // to stay open during prompt.
            if (this.isPermissionPromptOpen) {
                return;
            }
            // Add a timeout before calling `stop()`. This gives a small delay for
            // `onVoicePermissionPromptChanged` to run after any setup lag
            // (~15ms). This way, it is certain that this blur event is not due to
            // a permission prompt popping up.
            this.blurTimeoutId_ = WindowProxy.getInstance().setTimeout(() => {
                if (!this.isPermissionPromptOpen) {
                    this.onStopClick_();
                }
                this.blurTimeoutId_ = null;
            }, 100);
        }
    };
    onKeyDown_ = (e) => {
        if (e.key === 'Escape') {
            if (this.isPermissionPromptOpen) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            if (this.isInError_()) {
                this.onCloseClick_();
            }
            else {
                this.onStopClick_();
            }
        }
    };
    /**
     * Adds global listeners to close voice search on outside interactions.
     * `pointerdown` captures clicks on flat DOMs (e.g., NTP).
     * `blur` captures clicks inside isolated webviews (e.g., Contextual Tasks
     * `#threadFrame`) which steal focus but do not bubble click events.
     * `keydown` captures Escape key to stop voice search.
     */
    addOutsideListeners_() {
        document.addEventListener('keydown', this.onKeyDown_, true);
        WindowProxy.getInstance().setTimeout(() => {
            document.addEventListener('pointerdown', this.onOutsideInteraction_);
            window.addEventListener('blur', this.onOutsideInteraction_);
        }, 0);
    }
    removeOutsideListeners_() {
        document.removeEventListener('pointerdown', this.onOutsideInteraction_);
        document.removeEventListener('keydown', this.onKeyDown_, true);
        window.removeEventListener('blur', this.onOutsideInteraction_);
    }
    onStopClick_(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.state_ = State.RESULT_FINAL;
        this.fire('recording-stopped', this.transcript_);
        this.recordMetric_(VoiceSearchMetricType.ACTION, VoiceSearchAction.STOP_BUTTON_CLICKED, VoiceSearchAction.MAX_VALUE + 1);
        this.voiceRecognition_.stop();
        this.voiceModeEndCleanup_();
    }
    onVoicePermissionPromptChanged(isOpened, promptSize) {
        // Track the state for the blur event handler to ignore if
        // permission prompt open.
        this.isPermissionPromptOpen = isOpened;
        // If the prompt just opened, cancel any pending closure triggered by a
        // premature blur event.
        if (isOpened && this.blurTimeoutId_) {
            WindowProxy.getInstance().clearTimeout(this.blurTimeoutId_);
            this.blurTimeoutId_ = null;
        }
        // Fire event so `composebox_mixin.ts` knows to hide voice animation when
        // `isOpened`=`true`. `composebox_mixin.ts` will fire another event if
        // conditions are met so `omnibox_composebox.ts` (omnibox popup) can resize
        // to be at least as big as the permission prompt if needed. This voice
        // component does not control any resizing or hiding:
        const event = new CustomEvent('voice-permission-changed', {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
                'isOpened': isOpened,
                'height': promptSize.height,
                'width': promptSize.width,
            },
        });
        this.dispatchEvent(event);
        assert(event.defaultPrevented, 'Host surface must handle voice-permission-changed to resize for PEPC');
        if (isOpened) {
            this.clearTimer_();
        }
        else {
            this.resetIdleTimer_();
        }
    }
    clearTimer_() {
        if (this.timerId_ !== null) {
            WindowProxy.getInstance().clearTimeout(this.timerId_);
            this.timerId_ = null;
        }
    }
    getIdleTimeout_() {
        // State enum values < SPEECH_RECEIVED (UNINITIALIZED, STARTED,
        // AUDIO_RECEIVED) indicate that speech has not yet been detected. In this
        // case, wait for manualSubmitIdleTimeout (initial silence timeout) before
        // timing out.
        if (!this.transcript_ && this.state_ < State.SPEECH_RECEIVED) {
            return this.manualSubmitIdleTimeout ?? this.idleTimeout;
        }
        return this.autosubmitEnabled ?
            this.idleTimeout :
            (this.manualSubmitIdleTimeout ?? this.idleTimeout);
    }
    resetIdleTimer_() {
        WindowProxy.getInstance().clearTimeout(this.timerId_);
        this.timerId_ = WindowProxy.getInstance().setTimeout(this.onIdleTimeout_.bind(this), this.getIdleTimeout_());
    }
    onSubmitClick_(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.transcript_) {
            // Nothing has been recognized yet, so there is nothing to submit. Exit
            // voice search and return to the searchbox, the same as closing it.
            this.onCloseClick_();
            return;
        }
        this.onFinalResult_(this.transcript_, /*forceSubmit=*/ true);
    }
    onIdleTimeout_() {
        if (this.state_ === State.RESULT_FINAL) {
            // Waiting for query redirect.
            return;
        }
        // If there is text transcribed, process it as final.
        if (this.transcript_) {
            const forceSubmit = this.manualSubmitIdleTimeout === undefined || this.autosubmitEnabled;
            this.onFinalResult_(this.transcript_, forceSubmit);
            return;
        }
        this.onError_(VoiceSearchError.NO_SPEECH);
        abortRecognition(this.voiceRecognition_);
    }
    onAudioStart_() {
        if (this.state_ >= State.AUDIO_RECEIVED) {
            // Audio capture already started, e.g. before Android recognition got
            // restarted, so this is not user activity.
            return;
        }
        this.resetIdleTimer_();
        this.state_ = State.AUDIO_RECEIVED;
    }
    onSpeechStart_() {
        if (this.state_ >= State.SPEECH_RECEIVED) {
            // Speech was already received, e.g. before Android recognition got
            // restarted. Only results reset the idle timer from here on.
            return;
        }
        this.resetIdleTimer_();
        this.state_ = State.SPEECH_RECEIVED;
        this.fire('speech-received');
    }
    onResult_(e) {
        // First reset, in case of early return before second reset
        // (done again to not include time taken to process results in timeout).
        this.resetIdleTimer_();
        switch (this.state_) {
            case State.STARTED:
                // Network bugginess (the onspeechstart packet was lost).
                this.onAudioStart_();
                this.onSpeechStart_();
                break;
            case State.AUDIO_RECEIVED:
                // Network bugginess (the onaudiostart packet was lost).
                this.onSpeechStart_();
                break;
            case State.SPEECH_RECEIVED:
            case State.RESULT_RECEIVED:
                // Normal, expected states for processing results.
                break;
            default:
                // Not expecting results in any other states.
                return;
        }
        const results = e.results;
        if (results.length === 0) {
            return;
        }
        this.state_ = State.RESULT_RECEIVED;
        this.interimResult_ = '';
        this.finalResult_ = '';
        this.transcript_ = '';
        const speechResult = results[e.resultIndex];
        assert(speechResult);
        if (this.androidSpeechRecognition_) {
            // On Android, `SpeechRecognitionImpl` sends cumulative snapshots of the
            // entire utterance. The last item in `results` represents the current
            // full transcript.
            const latestResultList = results[results.length - 1];
            const latestResult = latestResultList[0];
            assert(latestResult);
            // After a restart, the session only reports what was said since then.
            this.transcript_ = joinTranscripts(this.androidPreviousTranscript_, latestResult.transcript);
            this.androidRestartsWithoutResult_ = 0;
            this.processSpeechTranscript_(latestResult.transcript, latestResult.confidence, /*append=*/ false);
            // `processSpeechTranscript_()` only puts the current session's transcript
            // in `finalResult_` if it's confident (partial results go in
            // `interimResult_`). Like earlier phrases on desktop, what previous
            // sessions recognized counts as final either way.
            this.finalResult_ =
                joinTranscripts(this.androidPreviousTranscript_, this.finalResult_);
        }
        else {
            // Process interim results based on confidence.
            for (let j = 0; j < results.length; j++) {
                const resultList = results[j];
                const result = resultList[0]; // best guess
                assert(result);
                this.transcript_ += result.transcript;
                this.processSpeechTranscript_(result.transcript, result.confidence, /*append=*/ true);
            }
        }
        this.fire('transcript-update', this.transcript_);
        // Once all the work is done (may have delays depending on load), to avoid
        // including that time in the timeout, reset the timer again. This schedules
        // a potential submission of the transcript. Once `this.idleTimeout`
        // timespan has passed, the timeout callback will submit the query.
        this.resetIdleTimer_();
        // Force-stop long queries if queryLengthLimit is not undefined. When
        // Android recognition gets restarted, everything recognized since voice
        // search started counts, including what earlier sessions recognized.
        const queryLength = this.isAndroidContinuousRecognition_() ?
            this.transcript_.length :
            this.interimResult_.length;
        if (this.queryLengthLimit !== undefined &&
            queryLength > this.queryLengthLimit) {
            this.onFinalResult_(this.transcript_);
        }
    }
    onEnd_() {
        if (ComposeboxVoiceSearchElement.activeRecognition_ === this.voiceRecognition_) {
            ComposeboxVoiceSearchElement.activeRecognition_ = null;
        }
        if (ComposeboxVoiceSearchElement.pendingStartInstance_ !== null) {
            const pending = ComposeboxVoiceSearchElement.pendingStartInstance_;
            ComposeboxVoiceSearchElement.pendingStartInstance_ = null;
            pending.start();
            return;
        }
        // The Android recognizer session ended on its own while voice search is
        // still listening (see `androidContinuousRecognitionEnabled`), so start a
        // new one. Not once voice search is removed or while the page is hidden,
        // as Blink aborts recognition on Android then.
        if (this.isAndroidContinuousRecognition_() && this.isConnected &&
            !document.hidden && this.state_ >= State.AUDIO_RECEIVED &&
            this.state_ <= State.RESULT_RECEIVED) {
            this.restartAndroidRecognition_();
            return;
        }
        switch (this.state_) {
            // If voiceRecognition calls `onEnd_` with the state being anything
            // other than `RESULT_FINAL` or `ERROR_RECEIVED` or `SPEECH_RECEIVED` or
            // `RESULT_RECEIVED`, close out voice search since there was a silent
            // failure with setting up audio or transcription. `RESULT_RECEIVED` is
            // not okay if `continuous` is false since that means that speech webkit
            // is the source of truth for timing out, and it has decided to time out
            // and quit by itself by sending `onend` even though this frontend
            // component is still expecting results.
            case State.STARTED:
                this.onError_(VoiceSearchError.AUDIO_CAPTURE);
                return;
            case State.AUDIO_RECEIVED:
                this.onError_(VoiceSearchError.NO_SPEECH);
                return;
            case State.SPEECH_RECEIVED:
            case State.RESULT_RECEIVED:
                // On Android, 'SpeechRecognitionImpl' always fires 'onEnd' when the
                // utterance finishes. Submit immediately if a transcript is present,
                // unless recognition is meant to continue like on desktop (see
                // `androidContinuousRecognitionEnabled`).
                if (this.androidSpeechRecognition_ &&
                    !this.isAndroidContinuousRecognition_() && this.transcript_) {
                    this.onFinalResult_(this.transcript_, /*forceSubmit=*/ true);
                    return;
                }
                if (this.transcript_) {
                    this.onFinalResult_(this.transcript_);
                }
                else {
                    this.onError_(VoiceSearchError.NO_MATCH);
                }
                return;
            case State.UNINITIALIZED:
            case State.ERROR_RECEIVED:
            case State.RESULT_FINAL:
                return;
            default:
                this.onError_(VoiceSearchError.OTHER);
                return;
        }
    }
    // Whether Android speech recognition is restarted when its session ends on
    // its own (see `androidContinuousRecognitionEnabled`).
    isAndroidContinuousRecognition_() {
        return this.androidSpeechRecognition_ &&
            this.androidContinuousRecognitionEnabled && !this.dynamicTimeoutEnabled;
    }
    // Starts a new Android recognizer session that continues the current voice
    // search. Keeps the state and the idle timer as is, so that like on desktop,
    // the idle timeout or the user decides when voice search ends.
    restartAndroidRecognition_() {
        if (this.androidRestartsWithoutResult_ >=
            MAX_ANDROID_RESTARTS_WITHOUT_RESULT) {
            // The recognizer keeps ending without recognizing anything. Stop
            // restarting it and end voice search with an error, without submitting.
            this.onError_(VoiceSearchError.NO_SPEECH);
            return;
        }
        this.androidRestartsWithoutResult_++;
        this.androidPreviousTranscript_ = this.transcript_;
        try {
            this.voiceRecognition_.start();
        }
        catch {
            // Voice search can't keep listening without a recognizer session.
            this.onError_(VoiceSearchError.OTHER);
            return;
        }
        ComposeboxVoiceSearchElement.activeRecognition_ = this.voiceRecognition_;
    }
    recordMetric_(type, metricEnumValue, max) {
        if (!this.metricSource) {
            return;
        }
        const metricName = `VoiceSearch.${type}.${this.metricSource}`;
        recordEnumerationValue(metricName, metricEnumValue, max);
        const aggregateMetricName = `VoiceSearch.${type}`;
        recordEnumerationValue(aggregateMetricName, metricEnumValue, max);
        // Record query submission source.
        if (type === VoiceSearchMetricType.ACTION &&
            metricEnumValue === VoiceSearchAction.QUERY_SUBMITTED) {
            let sourceEnum = null;
            if (this.metricSource === 'NTP_REALBOX') {
                sourceEnum = VoiceSearchQuerySource.NTP_REALBOX;
            }
            else if (this.metricSource === 'NTP_COMPOSEBOX') {
                sourceEnum = VoiceSearchQuerySource.NTP_COMPOSEBOX;
            }
            else if (this.metricSource === 'NTP_OMNIBOX_COMPOSEBOX' ||
                this.metricSource === 'OTHER_OMNIBOX_COMPOSEBOX' ||
                this.metricSource === 'SRP_OMNIBOX_COMPOSEBOX') {
                sourceEnum = VoiceSearchQuerySource.OMNIBOX_COMPOSEBOX;
            }
            else if (this.metricSource === 'CO_BROWSING_COMPOSEBOX') {
                sourceEnum = VoiceSearchQuerySource.NEXTBOX_COMPOSEBOX;
            }
            if (sourceEnum !== null) {
                recordEnumerationValue('VoiceSearch.QuerySubmission.Source', sourceEnum, VoiceSearchQuerySource.MAX_VALUE + 1);
            }
        }
        // TODO(b/501544449): This dual-logging block is temporary to ensure data
        // continuity. Remove this once the unified VoiceSearch metrics are
        // validated.
        if (this.metricSource === 'NTP_REALBOX') {
            if (type === VoiceSearchMetricType.ACTION) {
                // Handle the case that NewTabPage metric `CLOSE_OVERLAY` is replaced by
                // `CANCELED_BY_USER`.
                let legacyMetricEnumValue = metricEnumValue;
                if (metricEnumValue === VoiceSearchAction.CANCELED_BY_USER) {
                    legacyMetricEnumValue = 2;
                }
                // The legacy NewTabPageVoiceAction enum in enums.xml only defines values 0 to 6.
                // Prevent newly added VoiceSearchAction values (>6, e.g. Stop = 7, Resume = 8)
                // from leaking into and polluting the legacy NewTabPage.VoiceActions histogram.
                if (legacyMetricEnumValue > 6) {
                    return;
                }
                recordEnumerationValue('NewTabPage.VoiceActions', legacyMetricEnumValue, max);
            }
            else if (type === VoiceSearchMetricType.ERROR) {
                recordEnumerationValue('NewTabPage.VoiceErrors', metricEnumValue, max);
            }
        }
    }
    onError_(error) {
        // Not a real abort: this component aborted the recognition itself while
        // ending the session normally, e.g. after a query submission or a user
        // cancellation (see `selfAbortedRecognitions`). An idle timeout with no
        // transcript has already been recorded as NO_SPEECH by onIdleTimeout_().
        if (error === VoiceSearchError.ABORTED &&
            selfAbortedRecognitions.has(this.voiceRecognition_)) {
            return;
        }
        if (this.state_ === State.ERROR_RECEIVED && this.error_ === error) {
            return;
        }
        // Record the specific error type.
        this.recordMetric_(VoiceSearchMetricType.ERROR, error, VoiceSearchError.MAX_VALUE + 1);
        if (error === VoiceSearchError.ABORTED) {
            return;
        }
        WindowProxy.getInstance().clearTimeout(this.timerId_);
        this.state_ = State.ERROR_RECEIVED;
        this.error_ = error;
        this.detailedError = error;
        // Handle error display and dismissal behavior based on the embedder.
        if (!this.hasErrorTimer || error === VoiceSearchError.NO_SPEECH) {
            if (error === VoiceSearchError.NO_MATCH ||
                error === VoiceSearchError.NO_SPEECH) {
                // Without a timer (or for NO_SPEECH), errors close immediately with no
                // message.
                this.errorMessage_ = '';
                this.resetState_();
                this.recordMetric_(VoiceSearchMetricType.ACTION, VoiceSearchAction.ERROR_CANCELING, VoiceSearchAction.MAX_VALUE + 1);
                // This fire event does not record metric.
                this.fire('voice-search-cancel', /*canceled-by-user=*/ false);
                // This fire event records metric for contextual tasks and cancels voice
                // search.
                this.fire('voice-search-error', /*canceled-by-error=*/ true);
            }
            else {
                // Without a timer, other errors show a message and stay open
                // permanently.
                this.errorMessage_ = this.getErrorText_(error);
                this.recordMetric_(VoiceSearchMetricType.ACTION, VoiceSearchAction.ERROR_NON_CANCELING, VoiceSearchAction.MAX_VALUE + 1);
                // this fire event records metric for contextual tasks but does not
                // cancel voice search.
                this.fire('voice-search-error', /*canceled-by-error=*/ false);
            }
        }
        else {
            // If there is a timer, an error message would show up.
            this.errorMessage_ = this.getErrorText_(error);
            this.fire('voice-search-error', /*canceled-by-error=*/ false);
            if (error === VoiceSearchError.NO_MATCH) {
                // NO_MATCH errors auto-close after a longer delay.
                this.timerId_ = WindowProxy.getInstance().setTimeout(() => {
                    this.recordMetric_(VoiceSearchMetricType.ACTION, VoiceSearchAction.ERROR_CANCELING, VoiceSearchAction.MAX_VALUE + 1);
                    this.resetState_();
                    // This fire event does not record metric.
                    this.fire('voice-search-cancel', /*canceled-by-user=*/ false);
                }, ERROR_TIMEOUT_LONG_MS);
            }
            else {
                // Other errors auto-close after a shorter delay.
                this.timerId_ = WindowProxy.getInstance().setTimeout(() => {
                    this.recordMetric_(VoiceSearchMetricType.ACTION, VoiceSearchAction.ERROR_CANCELING, VoiceSearchAction.MAX_VALUE + 1);
                    this.resetState_();
                    this.fire('voice-search-cancel', /*canceled-by-user=*/ false);
                }, ERROR_TIMEOUT_SHORT_MS);
            }
        }
    }
    getErrorText_(error) {
        switch (error) {
            case VoiceSearchError.NO_SPEECH:
                return loadTimeData.getString('noVoice');
            case VoiceSearchError.AUDIO_CAPTURE:
                return loadTimeData.getString('audioError');
            case VoiceSearchError.NETWORK:
                return loadTimeData.getString('networkError');
            case VoiceSearchError.NOT_ALLOWED:
            case VoiceSearchError.SERVICE_NOT_ALLOWED:
                return loadTimeData.getString('voicePermissionError');
            case VoiceSearchError.LANGUAGE_NOT_SUPPORTED:
                return loadTimeData.getString('languageError');
            case VoiceSearchError.NO_MATCH:
                return loadTimeData.getString('noTranslation');
            case VoiceSearchError.BAD_GRAMMAR:
            case VoiceSearchError.ABORTED:
            case VoiceSearchError.OTHER:
            default:
                return loadTimeData.getString('otherError');
        }
    }
    voiceModeEndCleanup_() {
        this.removeOutsideListeners_();
        abortRecognition(this.voiceRecognition_);
        this.resetState_();
    }
    onFinalResult_(result, forceSubmit = false) {
        if (!result) {
            return;
        }
        // Set state to RESULT_FINAL before voiceModeEndCleanup_() so that when
        // voiceRecognition_.abort() fires onRecognitionEnd_, it is treated as a
        // no-op and does not re-enter onFinalResult_().
        this.state_ = State.RESULT_FINAL;
        if (!this.autosubmitEnabled && !forceSubmit) {
            this.fire('recording-stopped', result);
            this.voiceModeEndCleanup_();
            return;
        }
        // Metric recorded through this event firing:
        this.fire('voice-search-final-result', result);
        this.recordMetric_(VoiceSearchMetricType.ACTION, VoiceSearchAction.QUERY_SUBMITTED, VoiceSearchAction.MAX_VALUE + 1);
        this.voiceModeEndCleanup_();
    }
    onCloseClick_() {
        // If closing while an error is showing, the close action is to dismiss
        // the error state, so it should not log as a user-canceled voice session.
        if (this.isInError_()) {
            this.fire('voice-search-cancel', /*canceled-by-user=*/ false);
            this.voiceModeEndCleanup_();
            return;
        }
        this.voiceModeEndCleanup_();
        // Record metric by setting canceled-by-user param to true in this event:
        this.fire('voice-search-cancel', 
        /*canceled-by-user=*/ true);
        this.recordMetric_(VoiceSearchMetricType.ACTION, VoiceSearchAction.CANCELED_BY_USER, VoiceSearchAction.MAX_VALUE + 1);
    }
    resetState_() {
        this.state_ = State.UNINITIALIZED;
        this.finalResult_ = '';
        this.transcript_ = '';
        this.interimResult_ = '';
        this.error_ = null;
        this.errorMessage_ = '';
        this.detailedError = null;
        this.hasMultilineTranscript = false;
        this.transcriptLines = 1;
        this.androidPreviousTranscript_ = '';
        this.androidRestartsWithoutResult_ = 0;
        WindowProxy.getInstance().clearTimeout(this.timerId_);
        this.timerId_ = null;
    }
    onLinkClick_(e) {
        // Manually handle navigation to support WebView environments where
        // default link clicks may be ignored.
        e.preventDefault();
        const href = e.currentTarget.href;
        if (href) {
            this.pageHandler_.navigateUrl(href);
        }
        /* Do not record metric by setting canceled-by-user
         * param to false in this event:
         */
        this.fire('voice-search-cancel', /*canceled-by-user=*/ false);
        this.recordMetric_(VoiceSearchMetricType.ACTION, VoiceSearchAction.SUPPORT_LINK_CLICKED, VoiceSearchAction.MAX_VALUE + 1);
    }
    onTryAgainClick_(e) {
        e.preventDefault();
        e.stopPropagation();
        this.recordMetric_(VoiceSearchMetricType.ACTION, VoiceSearchAction.RETRY_BY_TRY_AGAIN_CLICKED, VoiceSearchAction.MAX_VALUE + 1);
        this.errorMessage_ = '';
        this.error_ = null;
        this.detailedError = null;
        this.start();
        this.fire('voice-search-restart');
    }
    getErrorForTesting() {
        return this.error_;
    }
    getErrorMessageForTesting() {
        return this.errorMessage_;
    }
    setErrorMessageForTesting(errorMessage) {
        this.errorMessage_ = errorMessage;
    }
    voiceModeEndCleanupForTesting() {
        this.voiceModeEndCleanup_();
    }
    processSpeechTranscript_(transcript, confidence, append = false) {
        if (confidence > RECOGNITION_CONFIDENCE_THRESHOLD) {
            if (append) {
                this.finalResult_ += transcript;
            }
            else {
                this.finalResult_ = transcript;
            }
        }
        else {
            if (append) {
                this.interimResult_ += transcript;
            }
            else {
                this.interimResult_ = transcript;
            }
        }
    }
}
customElements.define(ComposeboxVoiceSearchElement.is, ComposeboxVoiceSearchElement);
