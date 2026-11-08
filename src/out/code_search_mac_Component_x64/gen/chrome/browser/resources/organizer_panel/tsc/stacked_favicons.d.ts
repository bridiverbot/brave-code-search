import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface StackedFaviconsElement {
    $: {
        favicons: HTMLElement;
        firstFavicon: HTMLElement;
        secondFavicon: HTMLElement;
    };
}
export declare class StackedFaviconsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        url: {
            type: StringConstructor;
        };
        secondaryUrl: {
            type: StringConstructor;
        };
        stackVertically: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor url: string;
    accessor secondaryUrl: string;
    accessor stackVertically: boolean;
    protected getFavicon_(url: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'stacked-favicons': StackedFaviconsElement;
    }
}
