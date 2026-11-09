import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class WebnnInternalsGraphDumpElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        recordGraphEnabled_: {
            type: BooleanConstructor;
        };
    };
    private listenerIds;
    protected accessor recordGraphEnabled_: boolean;
    private proxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateRecordingStatus;
    protected onToggleValueChange_(event: CustomEvent<boolean>): void;
    private onGraphRecordEnabledChanged_;
    private exportGraphRecorded_;
}
declare global {
    interface HTMLElementTagNameMap {
        'webnn-internals-graph-dump': WebnnInternalsGraphDumpElement;
    }
}
