import './omnibox_popup_searchbox.js';
import '/strings.m.js';
import type { VoicePermissionPromptState } from '//resources/cr_components/composebox/composebox_voice_search.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class OmniboxFullAppElement extends CrLitElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        webuiShadowEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    protected accessor webuiShadowEnabled_: boolean;
    private eventTracker_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    onVoicePermissionChanged(e: CustomEvent<VoicePermissionPromptState>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'omnibox-full-app': OmniboxFullAppElement;
    }
}
