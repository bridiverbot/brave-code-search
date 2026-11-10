import '/strings.m.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
declare const SidePanelErrorPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SidePanelErrorPageElement extends SidePanelErrorPageElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isProtectedError: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        darkMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    protected accessor isProtectedError: boolean;
    protected accessor darkMode: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setIsProtectedError(isProtectedError: boolean): void;
    protected getTopLineError_(): string;
    protected getBottomLineError_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'side-panel-error-page': SidePanelErrorPageElement;
    }
}
export {};
