import '/tab_group_shared/tab_group_dot.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { TabGroupData } from './tab_data.js';
declare const TabSearchGroupItemBase: typeof CrLitElement;
export interface TabSearchGroupItemElement {
    $: {
        primaryText: HTMLElement;
    };
}
export declare class TabSearchGroupItemElement extends TabSearchGroupItemBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        data: {
            type: ObjectConstructor;
        };
    };
    accessor data: TabGroupData;
    updated(changedProperties: PropertyValues<this>): void;
    protected tabCountText_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-search-group-item': TabSearchGroupItemElement;
    }
}
export {};
