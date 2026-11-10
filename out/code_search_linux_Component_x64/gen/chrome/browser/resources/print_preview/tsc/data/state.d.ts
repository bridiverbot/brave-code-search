import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare enum State {
    NOT_READY = 0,
    READY = 1,
    PRINT_PENDING = 2,
    HIDDEN = 3,
    PRINTING = 4,
    SYSTEM_DIALOG = 5,
    ERROR = 6,
    FATAL_ERROR = 7,
    CLOSING = 8
}
/**
 * These values are persisted to logs. New entries should replace MAX_BUCKET but
 * existing entries should not be renumbered and numeric values should never be
 * reused.
 */
export declare enum Error {
    NONE = 0,
    INVALID_TICKET = 1,
    INVALID_PRINTER = 2,
    NO_DESTINATIONS = 3,
    PREVIEW_FAILED = 4,
    PRINT_FAILED = 5,
    MAX_BUCKET = 6
}
export declare class PrintPreviewStateElement extends CrLitElement {
    static get is(): string;
    static get properties(): {
        error: {
            type: NumberConstructor;
            notify: boolean;
        };
    };
    private state_;
    accessor error: Error;
    connectedCallback(): void;
    private sendStateChanged_;
    transitTo(newState: State): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-state': PrintPreviewStateElement;
    }
}
