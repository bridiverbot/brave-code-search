import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { Color } from './tab_group_types.mojom-webui.js';
export declare enum TabGroupDotSize {
    SMALL = "small",
    LARGE = "large"
}
export declare class TabGroupDotElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        color: {
            type: NumberConstructor;
        };
        filled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
        tabGroupColorRefresh_: {
            type: BooleanConstructor;
        };
    };
    accessor color: Color;
    accessor filled: boolean;
    accessor size: TabGroupDotSize;
    accessor tabGroupColorRefresh_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getViewBox_(): string;
    protected getOuterRadius_(): number;
    protected getRadius_(): number;
    protected getStrokeWidth_(): number;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-group-dot': TabGroupDotElement;
    }
}
