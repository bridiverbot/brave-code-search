import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import './icons.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { BatterySaverControlState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { OverflowableButtonState } from './overflowable_button.js';
export interface BatterySaverButtonElement {
    $: {
        button: CrIconButtonElement;
    };
}
declare const BatterySaverButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("./overflowable_button.js").OverflowableButton);
export declare class BatterySaverButtonElement extends BatterySaverButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        state: {
            type: ObjectConstructor;
        };
    };
    accessor state: BatterySaverControlState & OverflowableButtonState;
    protected getLabel_(): string;
    protected getTooltip_(): string;
    private browserProxy_;
    protected onClick_(e: MouseEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'battery-saver-button': BatterySaverButtonElement;
    }
}
export {};
