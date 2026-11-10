import '/shared/key_value_pair_viewer/key_value_pair_viewer.js';
import '/strings.m.js';
import type { KeyValuePairEntry } from '/shared/key_value_pair_viewer/key_value_pair_entry.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface AppElement {
    $: {
        title: HTMLElement;
    };
}
export declare class AppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        entries_: {
            type: ArrayConstructor;
        };
        loading_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    protected accessor entries_: KeyValuePairEntry[];
    protected accessor loading_: boolean;
    connectedCallback(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'system-app': AppElement;
    }
}
