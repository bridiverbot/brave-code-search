import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { LanguagePackInfo } from './on_device_translation_internals.mojom-webui.js';
import { LanguagePackStatus } from './on_device_translation_internals.mojom-webui.js';
export declare class OnDeviceTranslationInternalsAppElement extends CrLitElement {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        languagePackStatus_: {
            type: ArrayConstructor;
        };
    };
    private proxy_;
    private onLanguagePackStatusListenerId_;
    protected accessor languagePackStatus_: LanguagePackInfo[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onLanguagePackStatus_;
    protected getStatusString_(status: LanguagePackStatus): string;
    protected getButtonString_(status: LanguagePackStatus): string;
    protected onButtonClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'on-device-translation-internals-app': OnDeviceTranslationInternalsAppElement;
    }
}
