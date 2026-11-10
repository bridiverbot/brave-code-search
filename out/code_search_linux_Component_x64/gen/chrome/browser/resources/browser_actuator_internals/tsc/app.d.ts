import '//resources/cr_elements/cr_toast/cr_toast.js';
import type { CrToastElement } from '//resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { MessageDirection } from './browser_actuator_internals.mojom-webui.js';
import type { SessionSummary } from './browser_actuator_internals.mojom-webui.js';
export declare const TRUNCATED_LABEL = "(truncated at 8 KB)";
export declare const TRUNCATED_NOTE: string;
export interface BrowserActuatorInternalsAppElement {
    $: {
        copyToast: CrToastElement;
    };
}
export declare class BrowserActuatorInternalsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        sessions_: {
            type: ArrayConstructor;
        };
    };
    protected accessor sessions_: SessionSummary[];
    connectedCallback(): void;
    protected getEventsSummary_(session: SessionSummary): string;
    protected getDirectionLabel_(direction: MessageDirection): string;
    protected getDirectionClass_(direction: MessageDirection): string;
    protected formatTime_(time: Date | null): string;
    protected onExportClick_(): Promise<void>;
    protected onCopyClick_(): Promise<void>;
    private downloadJson_;
}
declare global {
    interface HTMLElementTagNameMap {
        'browser-actuator-internals-app': BrowserActuatorInternalsAppElement;
    }
}
