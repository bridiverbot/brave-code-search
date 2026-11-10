import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import type { ExtensionPageHandlerInterface } from 'chrome://contextual-tasks/contextual_tasks.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { CSSResultGroup } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class LensChipAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dataUri: {
            type: StringConstructor;
        };
        darkMode: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        label_: {
            type: StringConstructor;
        };
        dismissLabel_: {
            type: StringConstructor;
        };
    };
    protected accessor dataUri: string;
    protected accessor darkMode: boolean;
    protected accessor label_: string;
    protected accessor dismissLabel_: string;
    private pageHandler_;
    private listenerIds_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setPageHandlerForTesting(handler: ExtensionPageHandlerInterface | null): void;
    setDataUriForTesting(dataUri: string): void;
    getDataUriForTesting(): string;
    setDarkModeForTesting(darkMode: boolean): void;
    getDarkModeForTesting(): boolean;
    private getPageHandler_;
    private fetchPreview_;
    protected onCloseClick_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lens-chip-app': LensChipAppElement;
    }
}
