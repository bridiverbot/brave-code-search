import './check_mark_wrapper.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
export interface ThemeColorElement {
    $: {
        background: SVGElement;
        foreground: SVGElement;
    };
}
export declare class ThemeColorElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        backgroundColor: {
            type: ObjectConstructor;
        };
        foregroundColor: {
            type: ObjectConstructor;
        };
        baseColor: {
            type: ObjectConstructor;
        };
        checked: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        backgroundColorHidden: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor backgroundColor: SkColor;
    accessor foregroundColor: SkColor;
    accessor baseColor: SkColor;
    accessor checked: boolean;
    accessor backgroundColorHidden: boolean;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-theme-color': ThemeColorElement;
    }
}
