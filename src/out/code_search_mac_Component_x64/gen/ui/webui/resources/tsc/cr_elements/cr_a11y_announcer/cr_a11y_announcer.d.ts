import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
/**
 * The CrA11yAnnouncerElement is a visually hidden element that reads out
 * messages to a screen reader. This is preferred over IronA11yAnnouncer.
 * @fileoverview
 */
export type CrA11yAnnouncerMessagesSentEvent = CustomEvent<{
    messages: string[];
}>;
/**
 * 150ms seems to be around the minimum time required for screen readers to
 * read out consecutively queued messages.
 */
export declare const TIMEOUT_MS: number;
export declare function getInstance(container?: HTMLElement): CrA11yAnnouncerElement;
export declare class CrA11yAnnouncerElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private currentTimeout_;
    private messages_;
    disconnectedCallback(): void;
    announce(message: string, timeout?: number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-a11y-announcer': CrA11yAnnouncerElement;
    }
    interface HTMLElementEventMap {
        'cr-a11y-announcer-messages-sent': CrA11yAnnouncerMessagesSentEvent;
    }
}
