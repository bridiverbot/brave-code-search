import './omnibox_composebox.js';
import '/strings.m.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { OmniboxComposeboxElement } from './omnibox_composebox.js';
export interface OmniboxAimAppElement {
    $: {
        composebox: OmniboxComposeboxElement;
    };
}
/**
 * App element of the standalone AI Mode popup (omnibox_popup_aim.html).
 * `cr-omnibox-composebox` configures and paints itself; this element only
 * connects it to the popup's browser-side handler (omnibox_popup_aim.mojom):
 * `Page` callbacks become composebox method calls and composebox events become
 * `PageHandler` calls. `omnibox-full-app` will do the same wiring for the
 * merged popup on its own pipe, which is why none of it lives in the
 * composebox.
 *
 * TODO(crbug.com/566275992): Retire this element together with the standalone
 * popup once it is merged into the Full WebUI popup.
 */
export declare class OmniboxAimAppElement extends CrLitElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        webuiOmniboxFullPopupEnabled_: {
            type: BooleanConstructor;
        };
        webuiShadowEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    protected accessor webuiOmniboxFullPopupEnabled_: boolean;
    protected accessor webuiShadowEnabled_: boolean;
    private browserProxy_;
    private listenerIds_;
    private preserveContextOnClose_;
    private querySubmitted_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onPopupShown_;
    private addContext_;
    private clearPopup_;
    private setPreserveContextOnClose_;
    protected onContextMenuEntrypointClick_(e: CustomEvent<{
        x: number;
        y: number;
    }>): void;
    /**
     * Forwards close requests along with the active composebox input text so the
     * browser can transfer any typed draft back to the Omnibox.
     */
    protected onCloseComposebox_(e: CustomEvent<{
        composeboxText: string;
        afterSubmit?: boolean;
    }>): void;
    /**
     * Records that a query was submitted, so that `clearPopup_()` can tell the
     * browser to leave focus on the page showing the results. The composebox
     * clears its own inputs on submit.
     */
    protected onComposeboxSubmit_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'omnibox-aim-app': OmniboxAimAppElement;
    }
}
