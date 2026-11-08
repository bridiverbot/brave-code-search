import '//resources/cr_elements/cr_button/cr_button.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface ControlledButtonElement {
    $: {
        button: CrButtonElement;
    };
}
declare const ControlledButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_key_observer_mixin_lit.js").PrefKeyObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/controls/cr_policy_pref_mixin_lit.js").CrPolicyPrefMixinLitInterface);
export declare class ControlledButtonElement extends ControlledButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        endJustified: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        label: {
            type: StringConstructor;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        actionClass_: {
            type: StringConstructor;
        };
        enforced_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor endJustified: boolean;
    accessor label: string;
    accessor disabled: boolean;
    protected accessor actionClass_: string;
    protected accessor enforced_: boolean;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /** Focus on the inner cr-button. */
    focus(): void;
    protected onIndicatorClick_(e: Event): void;
    protected buttonEnabled_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'controlled-button': ControlledButtonElement;
    }
}
export {};
