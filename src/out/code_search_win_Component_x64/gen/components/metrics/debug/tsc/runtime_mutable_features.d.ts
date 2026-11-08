import { CustomElement } from 'chrome://resources/js/custom_element.js';
export declare class RuntimeMutableFeaturesAppElement extends CustomElement {
    static get is(): string;
    static get template(): string | TrustedHTML;
    private proxy_;
    private isPaused_;
    private selectedFile_;
    private intervalId_;
    constructor();
    private init_;
    disconnectedCallback(): void;
    private updateUi_;
    private updateIsSeedFetchingPaused_;
    private updateFeaturesList_;
    private togglePauseResume_;
    private updatePauseResumeUi_;
    private onFileSelected_;
    private loadSeed_;
}
declare global {
    interface HTMLElementTagNameMap {
        'runtime-mutable-features-app': RuntimeMutableFeaturesAppElement;
    }
}
