import '//resources/cr_components/composebox/contextual_entrypoint_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { InputState } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
export declare class OmniboxPopupContextualEntrypointButtonElement extends CrLitElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        inputState: {
            type: ObjectConstructor;
        };
        applyContextButtonBackground: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isOblongShape: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasVirtualFocus: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isMenuOpen_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor inputState: InputState | null;
    accessor applyContextButtonBackground: boolean;
    accessor isOblongShape: boolean;
    accessor hasVirtualFocus: boolean;
    protected accessor isMenuOpen_: boolean;
    announcesVirtualFocus: boolean;
    private browserProxy_;
    private eventTracker_;
    private popupListenerIds_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    showContextMenu(point?: {
        x: number;
        y: number;
    }): void;
    protected onContextMenuEntrypointClick_(e: CustomEvent<{
        x: number;
        y: number;
    }>): void;
    private onShow_;
    private onContextMenuClosed_;
    /** Returns the label screen readers narrate for this button. */
    getA11yLabel(): string;
    private announce_;
}
declare global {
    interface HTMLElementTagNameMap {
        'omnibox-popup-contextual-entrypoint-button': OmniboxPopupContextualEntrypointButtonElement;
    }
}
