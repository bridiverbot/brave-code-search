import '//resources/cr_elements/cr_input/cr_input.js';
import { IwaDevInstallTabElement } from './install_tab.js';
export declare const PLACEHOLDER_URL = "http://localhost:5173";
export declare class IwaDevInstallDevProxyTabElement extends IwaDevInstallTabElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
        };
        url_: {
            type: StringConstructor;
            state: boolean;
        };
        urlError_: {
            type: StringConstructor;
            state: boolean;
        };
    };
    accessor disabled: boolean;
    protected accessor url_: string;
    protected accessor urlError_: string;
    isValid(): boolean;
    submit(): void;
    protected onUrlValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onInputKeydown_(e: KeyboardEvent): void;
    private isValidUrl_;
}
declare global {
    interface HTMLElementTagNameMap {
        'iwa-dev-install-dev-proxy-tab': IwaDevInstallDevProxyTabElement;
    }
}
