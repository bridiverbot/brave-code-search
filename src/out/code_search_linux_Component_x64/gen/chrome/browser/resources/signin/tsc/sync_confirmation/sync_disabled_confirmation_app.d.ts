import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SyncDisabledConfirmationAppElement {
    $: {
        confirmButton: HTMLElement;
    };
}
export declare class SyncDisabledConfirmationAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        signoutDisallowed_: {
            type: BooleanConstructor;
        };
    };
    protected accessor signoutDisallowed_: boolean;
    private syncConfirmationBrowserProxy_;
    connectedCallback(): void;
    protected onConfirmClick_(e: Event): void;
    /**
     * @param path Path of the click event. Must contain a consent confirmation
     *     element.
     * @return The text of the consent confirmation element.
     */
    private getConsentConfirmation_;
    /** @return Text of the consent description elements. */
    private getConsentDescription_;
    private onKeyDown_;
    protected onUndoClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'sync-disabled-confirmation-app': SyncDisabledConfirmationAppElement;
    }
}
