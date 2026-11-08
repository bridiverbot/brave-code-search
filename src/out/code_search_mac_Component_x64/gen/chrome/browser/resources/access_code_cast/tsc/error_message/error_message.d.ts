import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { AddSinkResultCode } from '../access_code_cast.mojom-webui.js';
import { RouteRequestResultCode } from '../route_request_result_code.mojom-webui.js';
declare enum ErrorMessage {
    NO_ERROR = 0,
    GENERIC = 1,
    ACCESS_CODE = 2,
    NETWORK = 3,
    PERMISSION = 4,
    TOO_MANY_REQUESTS = 5,
    PROFILE_SYNC_ERROR = 6,
    DIFFERENT_NETWORK = 7
}
declare const ErrorMessageElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ErrorMessageElement extends ErrorMessageElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        messageCode: {
            type: NumberConstructor;
        };
    };
    protected accessor messageCode: ErrorMessage;
    private static readonly ADD_RESULT_MESSAGE_CODES;
    private static readonly CAST_RESULT_MESSAGE_CODES;
    private static readonly ADD_RESULT_MESSAGE_MAP;
    private static readonly CAST_RESULT_MESSAGE_MAP;
    setAddSinkError(resultCode: AddSinkResultCode): void;
    setCastError(resultCode: RouteRequestResultCode): void;
    setNoError(): void;
    getMessageCode(): ErrorMessage;
    protected getErrorMessage(): string;
    private findErrorMessage;
}
declare global {
    interface HTMLElementTagNameMap {
        'c2c-error-message': ErrorMessageElement;
    }
}
export {};
