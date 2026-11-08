import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare global {
    interface Window {
        webkitSpeechRecognition: typeof SpeechRecognition;
    }
}
export interface VoiceSearchOverlayElement {
    $: {
        dialog: HTMLDialogElement;
        micContainer: HTMLElement;
        micVolume: HTMLElement;
    };
}
export declare class VoiceSearchOverlayElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        interimResult_: {
            type: StringConstructor;
        };
        finalResult_: {
            type: StringConstructor;
        };
        state_: {
            type: NumberConstructor;
        };
        helpUrl_: {
            type: StringConstructor;
        };
        micVolumeLevel_: {
            type: NumberConstructor;
        };
        micVolumeDuration_: {
            type: NumberConstructor;
        };
    };
    protected accessor interimResult_: string;
    protected accessor finalResult_: string;
    protected accessor helpUrl_: string;
    protected accessor micVolumeLevel_: number;
    protected accessor micVolumeDuration_: number;
    private accessor state_;
    private voiceRecognition_;
    private error_;
    private timerId_;
    constructor();
    connectedCallback(): void;
    private start;
    protected onOverlayClose_(): void;
    protected onOverlayClick_(): void;
    /**
     * Handles <ENTER> or <SPACE> to trigger a query if we have recognized speech.
     */
    protected onOverlayKeydown_(e: KeyboardEvent): void;
    /**
     * Handles <ENTER> or <SPACE> to simulate click.
     */
    protected onLinkKeydown_(e: KeyboardEvent): void;
    protected onLearnMoreClick_(): void;
    protected onTryAgainClick_(e: Event): void;
    private resetIdleTimer_;
    private onIdleTimeout_;
    private resetErrorTimer_;
    private onAudioStart_;
    private onSpeechStart_;
    private onResult_;
    private onFinalResult_;
    private onEnd_;
    private onError_;
    private animateVolume_;
    protected getText_(): string;
    protected getErrorText_(): string;
    protected getErrorLink_(): string;
    protected getMicClass_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-voice-search-overlay': VoiceSearchOverlayElement;
    }
}
