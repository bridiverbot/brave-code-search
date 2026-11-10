import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
declare const ErrorScrimElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ErrorScrimElement extends ErrorScrimElement_base {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        compactMode: {
            type: BooleanConstructor;
        };
        errorMessage: {
            type: StringConstructor;
        };
    };
    accessor compactMode: boolean;
    accessor errorMessage: string;
    updated(changedProperties: PropertyValues<this>): void;
    protected onDismissErrorButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-error-scrim': ErrorScrimElement;
    }
}
export {};
