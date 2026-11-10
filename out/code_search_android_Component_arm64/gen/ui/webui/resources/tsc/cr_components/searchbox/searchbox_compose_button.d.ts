import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface ComposeClickEventDetail {
    button: number;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
    viaKeyboard?: boolean;
}
export interface SearchboxComposeButtonElement {
    $: {
        composeButton: HTMLElement;
        glowAnimationWrapper: HTMLElement;
    };
}
declare const SearchboxComposeButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SearchboxComposeButtonElement extends SearchboxComposeButtonElementBase {
    private targetAngle;
    private maskCurrAngle;
    private gradientCurrAngle;
    private maskVelocity;
    private springStrength;
    private friction;
    private isHovering;
    private animationFrame;
    private aimButtonAngle;
    private currentAngle;
    private velocity;
    private rotationEase;
    private legacyFriction;
    private then;
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        labelText: {
            type: StringConstructor;
            reflect: boolean;
        };
        tooltipTitle: {
            type: StringConstructor;
            reflect: boolean;
        };
        a11yLabel: {
            type: StringConstructor;
            reflect: boolean;
        };
        composeIcon: {
            type: StringConstructor;
            reflect: boolean;
        };
        arrowIcon_: {
            type: StringConstructor;
        };
        showAnimation_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isFuseboxEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        energyEffectAnimationEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        hasVirtualFocus: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        virtualFocusEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        dropdownIsVisible: {
            type: BooleanConstructor;
        };
    };
    accessor labelText: string;
    accessor tooltipTitle: string;
    accessor a11yLabel: string;
    accessor composeIcon: string;
    accessor hasVirtualFocus: boolean;
    accessor dropdownIsVisible: boolean;
    accessor virtualFocusEnabled: boolean;
    protected accessor isFuseboxEnabled_: boolean;
    protected accessor energyEffectAnimationEnabled_: boolean;
    protected accessor arrowIcon_: string;
    protected accessor showAnimation_: boolean;
    protected hasFavicon_(): boolean;
    focus(): void;
    blur(): void;
    firstUpdated(): void;
    protected onMouseEnter_: () => void;
    protected onMouseLeave_: () => void;
    protected onClick_(e: MouseEvent): void;
    private getAngleFromEvent;
    private lerpAngle;
    private onMouseMove;
    private renderLoop;
    private updateRotation;
    private setRotationCss;
    private setCurrentAngle;
    private getAngleTo;
    private clampValue;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-searchbox-compose-button': SearchboxComposeButtonElement;
    }
}
export {};
