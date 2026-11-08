// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './ai_overlay_dialog.mojom-webui.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { BlobAudioCapturer, MicrophoneAudioCapturer } from './audio_capturer.js';
import { AudioPlayer } from './audio_player.js';
import { CaptionBlockManager, formatCaptions } from './caption_block_manager.js';
// 
import { LocalSpeechRecognition } from './local_speech_recognition.js';
import { errorLog, log, warnLog } from './logging.js';
import { AiOverlayToolsRemote } from './tools.mojom-webui.js';
// 
// TODO(crbug.com/532098288): Replace `any` types with proper interfaces when sharing types between branded and unbranded builds.
/* eslint-disable @typescript-eslint/no-explicit-any */
// Empty stub implementation of Conversation and State for non-branded (Unbranded Chromium) builds
// where internal resources are omitted.
// 
var State;
(function (State) {
    State["STOPPED"] = "stopped";
    State["LISTENING"] = "listening";
    State["THINKING"] = "thinking";
    State["TALKING"] = "talking";
    State["ERROR"] = "error";
})(State || (State = {}));
class Conversation {
    connected = false;
    pageContext = null;
    constructor(_config, _callbacks, _tools, _router, _context, _pageHandler) { }
    sendAudio(..._args) { }
    sendText(..._args) { }
    markMockAudioEndTime(..._args) { }
    onTranscription(..._args) { }
    onTurnComplete() { }
    interrupt() { }
    recordOnDeviceSpeechTranscript(..._args) { }
    start() {
        return Promise.resolve();
    }
    stop() { }
}
const DEFAULT_TTC_BUNDLE_URL = '';
const DEFAULT_API_CONFIG = {
    endpointUrl: '',
    model: '',
    apiKey: '',
};
const DEFAULT_PERSONA = {
    id: 'generic',
    name: 'Chrome',
    nicknames: [],
    persona: '',
    voice: 'Achernar',
};
const DEFAULT_SYSTEM_INSTRUCTION = '';
// 
/* eslint-enable @typescript-eslint/no-explicit-any */
const FILE = 'App';
/**
 * Used to describe the phase of the app during startup.
 */
var InitializationState;
(function (InitializationState) {
    InitializationState["UNINITIALIZED"] = "uninitialized";
    InitializationState["CONNECTING"] = "connecting";
    InitializationState["ERROR"] = "error";
    InitializationState["INITIALIZED"] = "initialized";
})(InitializationState || (InitializationState = {}));
export class AppElement extends CrLitElement {
    static get is() {
        return 'ai-overlay-dialog-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // If a mock microphone is being used, this contains the list of buttons
            // to inject pre-canned messages.
            mockButtons: {
                type: Array,
            },
            sequences: {
                type: Array,
            },
            inputTranscription: {
                type: String,
            },
            outputTranscription: {
                type: String,
            },
            inputCaptionsVisible: {
                type: Boolean,
            },
            outputCaptionsVisible: {
                type: Boolean,
            },
            activeType: {
                type: String,
            },
            speakingBlobUrl: {
                type: String,
            },
            listeningBlobUrl: {
                type: String,
            },
            initializationState: {
                type: String,
            },
            state: {
                type: String,
            },
            usePersona: {
                type: Boolean,
            },
        };
    }
    #initializationState_accessor_storage = InitializationState.UNINITIALIZED;
    get initializationState() { return this.#initializationState_accessor_storage; }
    set initializationState(value) { this.#initializationState_accessor_storage = value; }
    #state_accessor_storage = State.LISTENING;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #mockButtons_accessor_storage = [];
    get mockButtons() { return this.#mockButtons_accessor_storage; }
    set mockButtons(value) { this.#mockButtons_accessor_storage = value; }
    #sequences_accessor_storage = [];
    get sequences() { return this.#sequences_accessor_storage; }
    set sequences(value) { this.#sequences_accessor_storage = value; }
    #inputTranscription_accessor_storage = '';
    get inputTranscription() { return this.#inputTranscription_accessor_storage; }
    set inputTranscription(value) { this.#inputTranscription_accessor_storage = value; }
    #outputTranscription_accessor_storage = '';
    get outputTranscription() { return this.#outputTranscription_accessor_storage; }
    set outputTranscription(value) { this.#outputTranscription_accessor_storage = value; }
    #inputCaptionsVisible_accessor_storage = true;
    get inputCaptionsVisible() { return this.#inputCaptionsVisible_accessor_storage; }
    set inputCaptionsVisible(value) { this.#inputCaptionsVisible_accessor_storage = value; }
    #outputCaptionsVisible_accessor_storage = true;
    get outputCaptionsVisible() { return this.#outputCaptionsVisible_accessor_storage; }
    set outputCaptionsVisible(value) { this.#outputCaptionsVisible_accessor_storage = value; }
    #activeType_accessor_storage = 'output';
    get activeType() { return this.#activeType_accessor_storage; }
    set activeType(value) { this.#activeType_accessor_storage = value; }
    #speakingBlobUrl_accessor_storage = '';
    get speakingBlobUrl() { return this.#speakingBlobUrl_accessor_storage; }
    set speakingBlobUrl(value) { this.#speakingBlobUrl_accessor_storage = value; }
    #listeningBlobUrl_accessor_storage = '';
    get listeningBlobUrl() { return this.#listeningBlobUrl_accessor_storage; }
    set listeningBlobUrl(value) { this.#listeningBlobUrl_accessor_storage = value; }
    #usePersona_accessor_storage = false;
    get usePersona() { return this.#usePersona_accessor_storage; }
    set usePersona(value) { this.#usePersona_accessor_storage = value; }
    isLocalTranscription = false;
    uiStateListeningTimeout = 0;
    audioPlaybackStartTime = 0;
    localSpeechRecognition = new LocalSpeechRecognition({
        onLocalTranscript: (text) => this.onLocalInputTranscription(text),
        isAssistantSpeaking: () => this.isAssistantSpeaking(),
        isSessionListening: () => Boolean(this.conversation?.connected) && this.state === State.LISTENING,
    });
    captionBlockManager = new CaptionBlockManager({
        onCaptionBlockUpdated: (blockText) => {
            this.outputTranscription = blockText;
        },
    });
    isAssistantSpeaking() {
        return this.state === State.TALKING ||
            (this.audioPlayer?.isPlaying() ?? false);
    }
    shouldHideCaptionsContainer() {
        if (this.isAssistantSpeaking()) {
            return !this.outputTranscription || !this.outputCaptionsVisible;
        }
        return !this.inputTranscription || !this.inputCaptionsVisible;
    }
    activeCaptionText() {
        const text = this.isAssistantSpeaking() ? this.outputTranscription :
            this.inputTranscription;
        return this.formatCaptionsText(text);
    }
    isOutputCaptionActive() {
        return this.isAssistantSpeaking() && this.outputCaptionsVisible;
    }
    isInputCaptionActive() {
        return !this.isAssistantSpeaking() && this.inputCaptionsVisible;
    }
    formatCaptionsText(text) {
        return formatCaptions(text, this.usePersona ? 50 : 60);
    }
    pageHandler;
    toolsRemote;
    pageCallbackRouter;
    conversation = null;
    blobCapturer = null;
    audioCapturer = null;
    audioPlayer = null;
    // The conversation and thus the page context manager take some time to
    // initialize so keep track of any page context that arrives before those are
    // setup so that it can be provided when these objects initialize.
    initialPageContext;
    unregisterPageContextListeners;
    transcriptionTimeout = 0;
    energyAnimationId = null;
    constructor() {
        super();
        // Setup Mojo connection
        this.pageCallbackRouter = new PageCallbackRouter();
        this.pageHandler = new PageHandlerRemote();
        this.toolsRemote = new AiOverlayToolsRemote();
        // Start listening for page context updates immediately to ensure we catch
        // any initial updates before the Conversation is initialized.
        const didChangePageId = this.pageCallbackRouter.didChangePage.addListener((url, title) => this.initialPageContext =
            { url, title, content: null, hasHadContent: false });
        const updateContextId = this.pageCallbackRouter.updateCurrentPageContext.addListener((title, rootNode, webmcpTools) => {
            if (this.initialPageContext) {
                this.initialPageContext.title = title;
                this.initialPageContext.content = rootNode ?? null;
                this.initialPageContext.webmcpTools = webmcpTools ?? [];
                this.initialPageContext.hasHadContent ||= Boolean(rootNode);
            }
        });
        this.unregisterPageContextListeners = () => {
            // Now that the conversation is initialized, we can stop listening for
            // the initial page context.
            this.pageCallbackRouter.removeListener(didChangePageId);
            this.pageCallbackRouter.removeListener(updateContextId);
            this.initialPageContext = undefined;
            this.unregisterPageContextListeners = null;
        };
        this.pageCallbackRouter.setInputCaptionsVisible.addListener(visible => {
            log(FILE, `setInputCaptionsVisible: ${visible}`);
            this.inputCaptionsVisible = visible;
            this.requestUpdate();
        });
        this.pageCallbackRouter.setOutputCaptionsVisible.addListener(visible => {
            log(FILE, `setOutputCaptionsVisible: ${visible}`);
            this.outputCaptionsVisible = visible;
            this.requestUpdate();
        });
        this.pageCallbackRouter.setUsePersona.addListener(usePersona => {
            log(FILE, `setUsePersona: ${usePersona}`);
            if (this.usePersona === usePersona) {
                return;
            }
            this.usePersona = usePersona;
            this.requestUpdate();
            if (this.conversation?.connected || this.initializationState === InitializationState.ERROR) {
                log(FILE, 'Restarting conversation for persona change');
                // TODO(gklassen): Make it so that conversation can trigger and block on
                // an initial page context, instead of pulling it out of the old
                // conversation or having AppElement proxy it during initialization.
                this.initialPageContext = this.conversation?.pageContext ?? undefined;
                this.stopConversation();
                this.conversation = null;
                this.initializationState = InitializationState.UNINITIALIZED;
                this.startConversation();
            }
        });
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.pageHandler.$.bindNewPipeAndPassReceiver(), this.pageCallbackRouter.$.bindNewPipeAndPassRemote(), this.toolsRemote.$.bindNewPipeAndPassReceiver());
        this.pageCallbackRouter.onStreamingSessionStateChanged.addListener((connected, sessionId, errorMessage) => {
            log(FILE, `onStreamingSessionStateChanged: connected=${connected}, session=${sessionId}, err=${errorMessage}`);
            if (connected) {
                this.initializationState = InitializationState.INITIALIZED;
                this.state = State.LISTENING;
            }
            else if (errorMessage) {
                this.initializationState = InitializationState.ERROR;
            }
            this.requestUpdate();
        });
        this.pageCallbackRouter.onTranscriptions.addListener((input, output) => {
            if (input) {
                this.inputTranscription = input;
                this.activeType = 'input';
            }
            if (output) {
                this.outputTranscription = output;
                this.activeType = 'output';
                if (this.state !== State.TALKING) {
                    this.state = State.TALKING;
                }
                this.captionBlockManager.updateBlocks(output, this.usePersona, Boolean(this.audioPlayer?.isPlaying()), this.audioPlaybackStartTime);
            }
            this.requestUpdate();
        });
        this.pageCallbackRouter.onAudioOutput.addListener((audioData, sequenceNumber) => {
            if (!this.audioPlayer) {
                this.audioPlayer = this.createAudioPlayer();
            }
            let uint8 = null;
            if (audioData.bytes !== undefined) {
                uint8 = new Uint8Array(audioData.bytes);
            }
            else if (audioData.sharedMemory?.bufferHandle) {
                const buffer = audioData.sharedMemory.bufferHandle
                    .mapBuffer(0, audioData.sharedMemory.size)
                    .buffer;
                uint8 = new Uint8Array(buffer, 0, audioData.sharedMemory.size);
            }
            if (uint8 && uint8.length > 0) {
                this.audioPlayer.playPcmBytes(uint8);
            }
            this.pageHandler.reportPlaybackStatus(sequenceNumber);
        });
        this.pageCallbackRouter.onGenerationStateChanged.addListener((started, completed, interrupted) => {
            if (interrupted) {
                this.audioPlayer?.stop();
                this.state = State.LISTENING;
            }
            else if (started) {
                this.state = State.TALKING;
            }
            else if (completed) {
                this.state = State.LISTENING;
            }
            this.requestUpdate();
        });
    }
    isAndroidBackend() {
        return loadTimeData.valueExists('isAndroidBackend') &&
            loadTimeData.getBoolean('isAndroidBackend');
    }
    isMesEnabled() {
        return loadTimeData.valueExists('useMes') &&
            loadTimeData.getBoolean('useMes');
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('visibilitychange', this.onVisibilityChange);
        window.addEventListener('focus', this.onWindowFocus);
        if (document.visibilityState === 'visible' || this.isAndroidBackend()) {
            this.startConversation();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('visibilitychange', this.onVisibilityChange);
        window.removeEventListener('focus', this.onWindowFocus);
        if (this.speakingBlobUrl) {
            URL.revokeObjectURL(this.speakingBlobUrl);
        }
        if (this.listeningBlobUrl) {
            URL.revokeObjectURL(this.listeningBlobUrl);
        }
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        const changed = _changedProperties;
        if (changed.has('inputTranscription')) {
            const bubble = this.shadowRoot?.querySelector('.caption-bubble.input');
            if (bubble) {
                bubble.scrollTop = bubble.scrollHeight;
            }
        }
        if (changed.has('outputTranscription')) {
            const bubble = this.shadowRoot?.querySelector('.caption-bubble.output');
            if (bubble) {
                bubble.scrollTop = bubble.scrollHeight;
            }
        }
    }
    onVisibilityChange = () => {
        if (this.isAndroidBackend()) {
            return;
        }
        if (document.visibilityState === 'visible') {
            this.startConversation();
        }
        else {
            this.stopConversation();
        }
    };
    onWindowFocus = () => {
        if (document.visibilityState === 'visible' &&
            this.state === State.LISTENING && this.conversation?.connected) {
            this.localSpeechRecognition.start();
        }
    };
    async initializeResourceBundle(baseUrl) {
        if (!baseUrl) {
            throw new Error('No resource bundle URL provided');
        }
        log(FILE, 'Loading resource bundle: ', baseUrl);
        const base = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
        const signal = AbortSignal.timeout(10000);
        const [personaResponse, apiConfigResponse, talkingResponse, listeningResponse, instructionResponse,] = await Promise.all([
            fetch(base + 'persona.json', { signal }),
            fetch(base + 'api_config.json', { signal }),
            fetch(base + 'talking.webm', { signal }),
            fetch(base + 'listening.webm', { signal }),
            fetch(base + 'instruction.tmpl', { signal }),
        ]);
        const personaConfig = await personaResponse.json();
        const apiConfig = await apiConfigResponse.json();
        const speakingBlob = await talkingResponse.blob();
        const listeningBlob = await listeningResponse.blob();
        const instruction = await instructionResponse.text();
        if (!Array.isArray(personaConfig.personas) ||
            personaConfig.personas[0] === undefined) {
            throw new Error('Invalid persona config');
        }
        return {
            persona: personaConfig.personas[0],
            apiConfig,
            speakingBlob,
            listeningBlob,
            instruction,
        };
    }
    createConversation(config) {
        const conversation = new Conversation(config, {
            sendToUI: (msg) => this.onMessageFromConversation(msg),
            onStateChange: (state) => this.onConversationStateChanged(state),
            onResponse: (audioData) => this.onAudioOutput(audioData),
        }, this.toolsRemote, this.pageCallbackRouter, this.initialPageContext, this.pageHandler);
        if (this.unregisterPageContextListeners) {
            this.unregisterPageContextListeners();
        }
        return conversation;
    }
    energyAnimationLoop = () => {
        if (this.energyAnimationId === null) {
            return;
        }
        let energy = 0;
        if (this.state === State.TALKING && this.audioPlayer) {
            energy = this.audioPlayer.getEnergy();
        }
        else if (this.state === State.LISTENING && this.audioCapturer) {
            energy = this.audioCapturer.getEnergy();
        }
        this.pageHandler.updateAudioEnergy(energy);
        if (!this.isAndroidBackend()) {
            this.energyAnimationId = requestAnimationFrame(this.energyAnimationLoop);
        }
    };
    startEnergyAnimation() {
        if (this.energyAnimationId === null) {
            // On Android, this runs in a background/offscreen WebContents without
            // active rendering, so requestAnimationFrame does not tick. Fallback to
            // setInterval to pump audio energy updates to the native toolbar.
            this.energyAnimationId = this.isAndroidBackend() ?
                window.setInterval(this.energyAnimationLoop, 50) :
                requestAnimationFrame(this.energyAnimationLoop);
        }
    }
    stopEnergyAnimation() {
        if (this.energyAnimationId !== null) {
            if (this.isAndroidBackend()) {
                window.clearInterval(this.energyAnimationId);
            }
            else {
                cancelAnimationFrame(this.energyAnimationId);
            }
            this.energyAnimationId = null;
            this.pageHandler.updateAudioEnergy(0.0);
        }
    }
    onAudioInput(sampleRate, data) {
        if (this.isMesEnabled()) {
            try {
                const binaryString = atob(data);
                const bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }
                this.pageHandler.sendAudioChunk({ bytes: Array.from(bytes) });
            }
            catch (_e) { }
        }
        else {
            this.conversation?.sendAudio(sampleRate, data);
        }
    }
    onAudioOutput(audioData) {
        // TODO(bokan): 24000 Hz (the default sampleRate in AudioPlayer) happens to
        // be what we receive from the server but we should be looking at the value
        // on the mime type and recreate the AudioPlayer if necessary.
        this.audioPlayer?.play(audioData);
    }
    runButtonByIndex(index) {
        const button = this.mockButtons[index];
        if (!button) {
            return;
        }
        if (button.text) {
            this.localSpeechRecognition.stop();
            this.onLocalInputTranscription(button.text);
            log(FILE, `Injecting text: ${button.name}, text: ${button.text}`);
            this.conversation?.sendText(button.text);
            return;
        }
        if (!this.blobCapturer || !button.wavdata) {
            return;
        }
        log(FILE, `Injecting audio: ${button.name}, length: ${button.wavdata.length}`);
        const binaryString = atob(button.wavdata);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        const blob = new Blob([bytes], { type: 'audio/wav' });
        this.localSpeechRecognition.stop();
        // Simulate local speech recognition using the button's name/text
        if (button.text) {
            this.onLocalInputTranscription(button.text);
        }
        else {
            this.onLocalInputTranscription(button.name);
        }
        this.blobCapturer.send(blob).then(() => {
            this.conversation?.markMockAudioEndTime(performance.now());
        });
    }
    executeSequence(sequence) {
        let delay = 0;
        for (const item of sequence.buttons) {
            if (typeof item === 'number') {
                delay += item;
            }
            else if (typeof item === 'string') {
                const index = this.mockButtons.findIndex(b => b.name === item);
                if (index !== -1) {
                    window.setTimeout(() => this.runButtonByIndex(index), delay);
                }
                else {
                    log(FILE, `Sequence button not found: ${item}`);
                }
            }
        }
    }
    injectAudio(button) {
        const index = this.mockButtons.indexOf(button);
        if (index !== -1) {
            this.runButtonByIndex(index);
        }
    }
    onInjectAudioClick = (e) => {
        const target = e.currentTarget;
        const index = Number(target.dataset['index']);
        const button = this.mockButtons[index];
        if (button) {
            this.injectAudio(button);
        }
    };
    onTextInputKeydown = (e) => {
        if (e.key === 'Enter') {
            const input = e.target;
            const text = input.value.trim();
            if (text) {
                this.localSpeechRecognition.stop();
                log(FILE, `Injecting text: ${text}`);
                if (this.isMesEnabled()) {
                    this.pageHandler.sendTextInput(text);
                }
                else {
                    this.conversation?.sendText(text);
                }
                input.value = '';
            }
        }
    };
    onSequenceClick = (e) => {
        const index = Number(e.currentTarget.dataset['index']);
        const sequence = this.sequences[index];
        if (!sequence) {
            return;
        }
        log(FILE, `Running sequence: ${sequence.name}`);
        this.executeSequence(sequence);
    };
    createAudioPlayer() {
        const onStart = () => {
            clearTimeout(this.uiStateListeningTimeout);
            this.state = State.TALKING;
            this.audioPlaybackStartTime = Date.now();
            log(FILE, `AudioPlayer: Started playing audio`);
        };
        const onDone = () => {
            clearTimeout(this.uiStateListeningTimeout);
            // Calculate the remaining delay using our dynamic accessibility formula:
            // Ensure the last block is visible for at least 6 seconds (4s reading +
            // 2s additional) and there is at least a 2-second comfortable cooldown
            // after the audio stops.
            const elapsed = this.captionBlockManager.getLastBlockSwitchTime() ?
                (Date.now() - this.captionBlockManager.getLastBlockSwitchTime()) :
                0;
            const delayMs = Math.max(2000, 6000 - elapsed);
            log(FILE, `AudioPlayer: Finished playing audio. Elapsed since last block: ${elapsed}ms. Scheduling LISTENING transition in ${delayMs}ms`);
            this.uiStateListeningTimeout = setTimeout(() => {
                log(FILE, `LISTENING transition timer fired. Setting state to LISTENING`);
                if (this.state === State.TALKING) {
                    this.state = State.LISTENING;
                }
                this.inputTranscription = '';
                this.outputTranscription = ''; // Clear output captions!
                this.captionBlockManager.reset();
                this.isLocalTranscription = false;
            }, delayMs);
        };
        return new AudioPlayer(onStart, onDone);
    }
    async createAudioCapturer() {
        try {
            const { jsonData } = await this.pageHandler.getMockAudioData();
            if (jsonData) {
                log(FILE, 'Received mock audio data:', jsonData.substring(0, 100) + '...');
                try {
                    const config = JSON.parse(jsonData);
                    this.mockButtons = config.buttons || [];
                    this.sequences = config.sequences || [];
                    log(FILE, `Loaded ${this.mockButtons.length} mock buttons and ${this.sequences.length} sequences`);
                }
                catch (parseError) {
                    errorLog(FILE, 'Failed to parse mock audio JSON:', parseError);
                }
            }
        }
        catch (mojoError) {
            log(FILE, 'Failed to get mock audio data', mojoError);
        }
        if (this.mockButtons.length > 0) {
            this.blobCapturer = new BlobAudioCapturer();
            log(FILE, 'Mock audio buttons detected. Using BlobAudioCapturer and ' +
                'skipping physical microphone.');
            return this.blobCapturer;
        }
        try {
            // On Android, enabling echoCancellation activates the platform
            // ECHO_CANCELLER effect, which puts Android into VoIP communication mode
            // (MODE_IN_COMMUNICATION / AAUDIO_INPUT_PRESET_VOICE_COMMUNICATION) and
            // causes Android AudioPolicy to silence concurrent microphone streams
            // (such as Screen Recorder). Disabling echoCancellation keeps Android in
            // MODE_NORMAL while still allowing WebRTC software noiseSuppression and
            // autoGainControl.
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: this.isAndroidBackend() ? {
                    echoCancellation: false,
                    noiseSuppression: true,
                    autoGainControl: true,
                } :
                    true,
            });
            return new MicrophoneAudioCapturer(stream);
        }
        catch (e) {
            log(FILE, 'No Microphone Found', e);
            return this.blobCapturer;
        }
    }
    getBuiltInResourceBundle() {
        return {
            persona: DEFAULT_PERSONA,
            apiConfig: { ...DEFAULT_API_CONFIG },
            speakingBlob: null,
            listeningBlob: null,
            instruction: DEFAULT_SYSTEM_INSTRUCTION,
        };
    }
    async startConversation() {
        if (this.initializationState === InitializationState.CONNECTING ||
            this.initializationState === InitializationState.INITIALIZED) {
            return;
        }
        this.initializationState = InitializationState.CONNECTING;
        try {
            const customBundleUrl = loadTimeData.valueExists('ttcBundleUrl') ?
                loadTimeData.getString('ttcBundleUrl') :
                '';
            const localApiKey = loadTimeData.valueExists('apiKey') ?
                loadTimeData.getString('apiKey') :
                '';
            const allowBuiltInDefaults = !loadTimeData.valueExists('allowBuiltInDefaults') ||
                loadTimeData.getBoolean('allowBuiltInDefaults');
            const hasLocalAuth = allowBuiltInDefaults &&
                (Boolean(localApiKey || DEFAULT_API_CONFIG.apiKey) ||
                    this.isMesEnabled());
            let bundle;
            if (!this.usePersona && !customBundleUrl && hasLocalAuth) {
                log(FILE, 'Using built-in resource bundle (local auth / MES mode)');
                bundle = this.getBuiltInResourceBundle();
            }
            else {
                const ttcBundleUrl = customBundleUrl || DEFAULT_TTC_BUNDLE_URL;
                try {
                    bundle = await this.initializeResourceBundle(ttcBundleUrl);
                    log(FILE, 'Remote resource bundle initialized');
                }
                catch (e) {
                    if (hasLocalAuth) {
                        warnLog(FILE, 'Failed to load remote resource bundle, falling back to built-in defaults:', e);
                        bundle = this.getBuiltInResourceBundle();
                    }
                    else {
                        throw e;
                    }
                }
            }
            if (this.speakingBlobUrl) {
                URL.revokeObjectURL(this.speakingBlobUrl);
            }
            if (this.listeningBlobUrl) {
                URL.revokeObjectURL(this.listeningBlobUrl);
            }
            this.speakingBlobUrl =
                bundle.speakingBlob ? URL.createObjectURL(bundle.speakingBlob) : '';
            this.listeningBlobUrl =
                bundle.listeningBlob ? URL.createObjectURL(bundle.listeningBlob) : '';
            // Locally specified key overrides the fetched one.
            const apiKey = localApiKey || bundle.apiConfig.apiKey;
            const genericPersona = {
                id: 'generic',
                name: 'Chrome',
                nicknames: [],
                persona: '',
                voice: bundle.persona.voice,
            };
            const config = {
                persona: this.usePersona ? bundle.persona : genericPersona,
                system_instruction: bundle.instruction,
                api_config: {
                    ...bundle.apiConfig,
                    apiKey,
                },
            };
            if (this.isMesEnabled()) {
                this.pageHandler.startStreamingSession();
            }
            else {
                if (!this.conversation) {
                    this.conversation = this.createConversation(config);
                }
                await this.conversation.start();
            }
            this.audioPlayer = this.createAudioPlayer();
            this.audioCapturer = await this.createAudioCapturer();
            if (this.audioCapturer) {
                this.audioCapturer.start(this.onAudioInput.bind(this, this.audioCapturer.getSampleRate()));
            }
            this.startEnergyAnimation();
            this.state = State.LISTENING;
            this.initializationState = InitializationState.INITIALIZED;
        }
        catch (e) {
            this.initializationState = InitializationState.ERROR;
            errorLog(FILE, 'startConversation failed: ', e);
            this.stopConversation();
        }
    }
    stopConversation() {
        if (this.isMesEnabled()) {
            this.pageHandler.stopStreamingSession();
        }
        if (this.conversation?.connected) {
            log(FILE, 'Conversation connected, stopping it.');
            this.conversation.stop();
        }
        log(FILE, `stopConversation: Stopping conversation and audio capture...`);
        this.stopEnergyAnimation();
        this.mockButtons = [];
        this.blobCapturer = null;
        this.audioCapturer?.stop();
        this.audioPlayer?.stop();
        this.audioCapturer = null;
        this.audioPlayer = null;
        this.localSpeechRecognition.stop();
        this.isLocalTranscription = false;
        this.initializationState = InitializationState.UNINITIALIZED;
    }
    onConversationStateChanged(state) {
        log(FILE, `onConversationStateChanged: transitioned to ${state}`);
        this.state = state;
        if (state === State.STOPPED) {
            this.stopConversation();
        }
        else if (state === State.LISTENING) {
            this.audioPlayer?.stop();
            clearTimeout(this.uiStateListeningTimeout);
            this.inputTranscription = '';
            this.outputTranscription = '';
            this.captionBlockManager.reset();
            this.isLocalTranscription = false;
            this.localSpeechRecognition.start();
        }
        else if (state === State.TALKING) {
            clearTimeout(this.uiStateListeningTimeout);
            this.inputTranscription = '';
            log(FILE, 'onConversationStateChanged: transitioned to TALKING. ' +
                'Preserving caption blocks.');
        }
    }
    onMessageFromConversation(msg) {
        if (msg.type === 'outputTranscription') {
            log(FILE, `onMessageFromConversation: Received outputTranscription (length: ${msg.text.length})`);
            clearTimeout(this.uiStateListeningTimeout);
            if (this.state !== State.TALKING) {
                this.state = State.TALKING;
            }
            this.inputTranscription = '';
            this.activeType = 'output';
            this.captionBlockManager.updateBlocks(msg.text, this.usePersona, Boolean(this.audioPlayer?.isPlaying()), this.audioPlaybackStartTime);
        }
        else if (msg.type === 'clearTranscription') {
            log(FILE, `onMessageFromConversation: Received clearTranscription (state: ${this.state})`);
            if (this.state !== State.TALKING && !(this.audioPlayer?.isPlaying())) {
                this.captionBlockManager.reset();
                this.inputTranscription = '';
                this.outputTranscription = '';
            }
        }
    }
    onLocalInputTranscription(text) {
        this.inputTranscription = text;
        this.isLocalTranscription = true;
        this.activeType = 'input';
        if (this.conversation) {
            this.conversation.recordOnDeviceSpeechTranscript(text);
        }
        clearTimeout(this.transcriptionTimeout);
        this.transcriptionTimeout = window.setTimeout(() => {
            if (this.isLocalTranscription && this.inputTranscription === text) {
                log(FILE, `Clearing stale local transcription after 3 seconds.`);
                this.inputTranscription = '';
            }
        }, 3000);
    }
}
customElements.define(AppElement.is, AppElement);
