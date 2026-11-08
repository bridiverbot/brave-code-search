import '//resources/brave/leo.bundle.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CSSResultGroup } from '//resources/lit/v3_0/lit.rollup.js';
export declare const MOVE_THRESHOLD_PX: number;
export declare class CrToggleElement extends CrLitElement {
    static get is(): string;
    $: {
        toggle: HTMLElement;
        knob: HTMLElement;
    };
    static get styles(): CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        checked: {
            type: BooleanConstructor;
            reflect: boolean;
            notify: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor checked: boolean;
    accessor disabled: boolean;
    firstUpdated(): void;
    onChange_(e: {
        checked: boolean;
    }): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-toggle': CrToggleElement;
    }
}
