import './icons.html.js';
import '/strings.m.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export interface ComposeResultTextElement {
    $: {
        resultText: HTMLElement;
        partialResultText: HTMLElement;
        root: HTMLElement;
    };
}
interface StreamChunk {
    text: string;
}
export interface TextInput {
    text: string;
    isPartial: boolean;
    streamingEnabled: boolean;
}
export declare class ComposeResultTextElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        textInput: {
            type: ObjectConstructor;
        };
        isOutputComplete: {
            type: BooleanConstructor;
            notify: boolean;
        };
        hasOutput: {
            type: BooleanConstructor;
            notify: boolean;
        };
        hasPartialOutput_: {
            type: BooleanConstructor;
            notify: boolean;
        };
        displayedChunks_: {
            type: ArrayConstructor;
        };
        displayedFullText_: {
            type: StringConstructor;
        };
    };
    accessor textInput: TextInput;
    accessor isOutputComplete: boolean;
    accessor hasOutput: boolean;
    protected accessor hasPartialOutput_: boolean;
    protected accessor displayedChunks_: StreamChunk[];
    protected accessor displayedFullText_: string;
    private wordStreamer_;
    private initialText_;
    constructor();
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected updateInputs_(): void;
    enableInstantStreamingForTesting(): void;
    protected onFocusin_(): void;
    protected onFocusout_(): void;
    protected partialTextCanEdit_(): "false" | "plaintext-only";
    private setStreamedWords_;
}
declare global {
    interface HTMLElementTagNameMap {
        'compose-result-text': ComposeResultTextElement;
    }
}
export {};
