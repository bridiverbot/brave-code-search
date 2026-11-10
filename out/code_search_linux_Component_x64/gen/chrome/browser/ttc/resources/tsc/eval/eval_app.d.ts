import '/strings.m.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { TurnResult } from '../eval_harness.mojom-webui.js';
export declare class EvalAppElement extends CrLitElement {
    static get is(): string;
    private get handler_();
    private isTestApiEnabled_;
    start(): Promise<boolean>;
    end(): void;
    sendText(text: string): Promise<TurnResult>;
    sendAudio(pcm16Audio: Uint8Array): Promise<TurnResult>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ttc-eval-app': EvalAppElement;
    }
}
