import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import type { DebugInfo } from './multistep_filter_internals.mojom-webui.js';
export interface LogEntry {
    timestamp: Time;
    formattedTime: string;
    navigationId: bigint;
    eventType: string;
    host: string;
    details: string;
    searchKey: string;
}
export declare class MultistepFilterInternalsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        allLogs: {
            type: ArrayConstructor;
        };
        filterText: {
            type: StringConstructor;
        };
        debugInfo: {
            type: ObjectConstructor;
        };
    };
    accessor allLogs: LogEntry[];
    accessor filterText: string;
    accessor debugInfo: DebugInfo | null;
    private seenTimestamps_;
    private listenerIds_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    private initializeMojo;
    private handleNewLog;
    private convertMojoLog;
    protected onFilterInput_(e: Event): void;
    protected onClearClick_(): void;
    protected getFilteredLogs_(): LogEntry[];
    private formatTime_;
}
declare global {
    interface HTMLElementTagNameMap {
        'multistep-filter-internals-app': MultistepFilterInternalsAppElement;
    }
}
