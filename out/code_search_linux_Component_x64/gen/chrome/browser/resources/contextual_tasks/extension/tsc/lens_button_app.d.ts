import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { PageHandlerInterface } from 'chrome://resources/cr_components/composebox/composebox.mojom-webui.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { CSSResultGroup } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface LensButtonAppElement {
    $: {
        lensButton: CrIconButtonElement;
    };
}
export declare class LensButtonAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        active: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        darkMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        label_: {
            type: StringConstructor;
        };
    };
    accessor active: boolean;
    accessor disabled: boolean;
    accessor darkMode: boolean;
    protected accessor label_: string;
    private pageHandler_;
    private overlayStateListenerId_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected isDarkModeEnabled_(): boolean;
    setPageHandlerForTesting(handler: PageHandlerInterface | null): void;
    private getPageHandler_;
    protected onClick_(): void;
    protected onMousedown_(e: MouseEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'lens-button-app': LensButtonAppElement;
    }
}
