import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import 'chrome://resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import './activity_log_stream_item.js';
import type { ChromeEvent } from '/tools/typescript/definitions/chrome_event.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { StreamItem } from './activity_log_stream_item.js';
export interface ActivityLogEventDelegate {
    getOnExtensionActivity(): ChromeEvent<(activity: chrome.activityLogPrivate.ExtensionActivity) => void>;
}
export declare class ActivityLogStreamElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        extensionId: {
            type: StringConstructor;
        };
        delegate: {
            type: ObjectConstructor;
        };
        isStreamOn_: {
            type: BooleanConstructor;
        };
        activityStream_: {
            type: ArrayConstructor;
        };
        filteredActivityStream_: {
            type: ArrayConstructor;
        };
        lastSearch_: {
            type: StringConstructor;
        };
    };
    accessor extensionId: string;
    accessor delegate: ActivityLogEventDelegate;
    protected accessor isStreamOn_: boolean;
    private accessor activityStream_;
    protected accessor filteredActivityStream_: StreamItem[];
    private accessor lastSearch_;
    private listenerInstance_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onClearStreamClick_(): void;
    clearStream(): void;
    startStream(): void;
    pauseStream(): void;
    protected onToggleButtonClick_(): void;
    protected isStreamEmpty_(): boolean;
    protected isFilteredStreamEmpty_(): boolean;
    protected shouldShowEmptySearchMessage_(): boolean;
    private extensionActivityListener_;
    protected onSearchChanged_(e: CustomEvent<string>): void;
    private computeFilteredActivityStream_;
}
declare global {
    interface HTMLElementTagNameMap {
        'activity-log-stream': ActivityLogStreamElement;
    }
}
