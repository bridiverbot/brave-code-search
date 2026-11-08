import '/strings.m.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
declare enum State {
    STOPPED = "stopped",
    LISTENING = "listening",
    THINKING = "thinking",
    TALKING = "talking",
    ERROR = "error"
}
/**
 * Used to describe the phase of the app during startup.
 */
declare enum InitializationState {
    UNINITIALIZED = "uninitialized",
    CONNECTING = "connecting",
    ERROR = "error",
    INITIALIZED = "initialized"
}
interface MockAudioButton {
    name: string;
    wavdata?: string;
    text?: string;
}
interface Sequence {
    name: string;
    buttons: Array<string | number>;
}
export declare class AppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        mockButtons: {
            type: ArrayConstructor;
        };
        sequences: {
            type: ArrayConstructor;
        };
        inputTranscription: {
            type: StringConstructor;
        };
        outputTranscription: {
            type: StringConstructor;
        };
        inputCaptionsVisible: {
            type: BooleanConstructor;
        };
        outputCaptionsVisible: {
            type: BooleanConstructor;
        };
        activeType: {
            type: StringConstructor;
        };
        speakingBlobUrl: {
            type: StringConstructor;
        };
        listeningBlobUrl: {
            type: StringConstructor;
        };
        initializationState: {
            type: StringConstructor;
        };
        state: {
            type: StringConstructor;
        };
        usePersona: {
            type: BooleanConstructor;
        };
    };
    protected accessor initializationState: InitializationState;
    protected accessor state: State;
    protected accessor mockButtons: MockAudioButton[];
    protected accessor sequences: Sequence[];
    protected accessor inputTranscription: string;
    protected accessor outputTranscription: string;
    protected accessor inputCaptionsVisible: boolean;
    protected accessor outputCaptionsVisible: boolean;
    protected accessor activeType: 'input' | 'output';
    protected accessor speakingBlobUrl: string;
    protected accessor listeningBlobUrl: string;
    protected accessor usePersona: boolean;
    private isLocalTranscription;
    private uiStateListeningTimeout;
    private audioPlaybackStartTime;
    private localSpeechRecognition;
    private captionBlockManager;
    protected isAssistantSpeaking(): boolean;
    protected shouldHideCaptionsContainer(): boolean;
    protected activeCaptionText(): string;
    protected isOutputCaptionActive(): boolean;
    protected isInputCaptionActive(): boolean;
    protected formatCaptionsText(text: string): string;
    private pageHandler;
    private toolsRemote;
    private pageCallbackRouter;
    private conversation;
    private blobCapturer;
    private audioCapturer;
    private audioPlayer;
    private initialPageContext?;
    private unregisterPageContextListeners;
    private transcriptionTimeout;
    private energyAnimationId;
    constructor();
    private isAndroidBackend;
    private isMesEnabled;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(_changedProperties: PropertyValues<this>): void;
    private onVisibilityChange;
    private onWindowFocus;
    private initializeResourceBundle;
    private createConversation;
    private energyAnimationLoop;
    private startEnergyAnimation;
    private stopEnergyAnimation;
    private onAudioInput;
    private onAudioOutput;
    private runButtonByIndex;
    private executeSequence;
    private injectAudio;
    protected onInjectAudioClick: (e: Event) => void;
    protected onTextInputKeydown: (e: KeyboardEvent) => void;
    protected onSequenceClick: (e: Event) => void;
    private createAudioPlayer;
    private createAudioCapturer;
    private getBuiltInResourceBundle;
    private startConversation;
    private stopConversation;
    private onConversationStateChanged;
    private onMessageFromConversation;
    private onLocalInputTranscription;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-overlay-dialog-app': AppElement;
    }
}
export {};
