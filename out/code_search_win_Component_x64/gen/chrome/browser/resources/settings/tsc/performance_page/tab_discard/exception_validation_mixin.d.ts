import type { I18nMixinLitInterface } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare const MAX_TAB_DISCARD_EXCEPTION_RULE_LENGTH: number;
export declare const TAB_DISCARD_EXCEPTIONS_PREF = "performance_tuning.tab_discarding.exceptions_with_time";
export declare const TAB_DISCARD_EXCEPTIONS_MANAGED_PREF = "performance_tuning.tab_discarding.exceptions_managed";
type Constructor<T> = new (...args: any[]) => T;
export declare const ExceptionValidationMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<ExceptionValidationMixinInterface & I18nMixinLitInterface>;
export interface ExceptionValidationMixinInterface {
    errorMessage: string;
    inputInvalid: boolean;
    rule: string;
    submitDisabled: boolean;
    validate(): void;
}
export {};
