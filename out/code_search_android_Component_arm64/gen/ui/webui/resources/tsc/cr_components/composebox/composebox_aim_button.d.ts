import '//resources/cr_elements/cr_button/cr_button.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare enum AimButtonMode {
    EXIT = "exit",
    SEND = "send"
}
declare enum TrailingIcon {
    NONE = "collapsed",
    ARROW = "arrow-icon",
    EXIT = "icon-clear"
}
export interface ComposeboxAimButtonElement {
    $: {
        button: CrButtonElement;
    };
}
export declare class ComposeboxAimButtonElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        mode: {
            type: StringConstructor;
            reflect: boolean;
        };
        showExitIcon: {
            type: BooleanConstructor;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        label: {
            type: StringConstructor;
        };
        exitTitle: {
            type: StringConstructor;
        };
        sendTitle: {
            type: StringConstructor;
        };
        energyEffectAnimationEnabled: {
            type: BooleanConstructor;
        };
    };
    accessor mode: AimButtonMode;
    accessor showExitIcon: boolean;
    accessor disabled: boolean;
    accessor label: string;
    accessor exitTitle: string;
    accessor sendTitle: string;
    accessor energyEffectAnimationEnabled: boolean;
    private keyboardActivationEvent_;
    constructor();
    focus(): void;
    blur(): void;
    protected getLeadingIconClass_(): string;
    protected showEnergyEffect_(): boolean;
    protected getButtonClass_(): string;
    protected getTrailingIcon_(): TrailingIcon;
    protected getTitle_(): string;
    protected onClick_(e: MouseEvent): void;
    private onKeyboardActivation_;
    private getActivationEvent_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-aim-button': ComposeboxAimButtonElement;
    }
}
export {};
