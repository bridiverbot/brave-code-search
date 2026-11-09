import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class RecordReplayElement extends CrLitElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'record-replay': RecordReplayElement;
    }
}
