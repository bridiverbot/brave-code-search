import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export interface SpHeadingElement {
    $: {
        backButton: HTMLElement;
    };
}
export declare class SpHeadingElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        compact: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        backButtonAriaLabel: {
            type: StringConstructor;
        };
        backButtonTitle: {
            type: StringConstructor;
        };
        hideBackButton: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disableBackButton: {
            type: BooleanConstructor;
        };
    };
    accessor compact: boolean;
    accessor backButtonAriaLabel: string;
    accessor backButtonTitle: string;
    accessor hideBackButton: boolean;
    accessor disableBackButton: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private onHideBackButtonChanged_;
    protected onBackButtonClick_(): void;
    getBackButton(): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-heading': SpHeadingElement;
    }
}
