import '/strings.m.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { AppIndexEntry, DebugData } from './web_app_internals_utils.js';
export declare class WebAppInternalsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        rawDebugData_: {
            type: StringConstructor;
        };
        debugInfoJson_: {
            type: StringConstructor;
        };
        parsedDebugData_: {
            type: ObjectConstructor;
        };
        query_: {
            type: StringConstructor;
        };
        isIwaPolicyInstallEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor rawDebugData_: string;
    protected accessor debugInfoJson_: string;
    protected accessor parsedDebugData_: DebugData | null;
    protected accessor query_: string;
    protected accessor isIwaPolicyInstallEnabled_: boolean;
    private tracker_;
    private browserProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private fetchDebugInfo_;
    protected getAppIndexEntries_(): AppIndexEntry[];
    protected getFormattedJson_(): string;
    protected onDownloadButtonClick_(): void;
    protected onCopyButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'web-app-internals-app': WebAppInternalsAppElement;
    }
}
