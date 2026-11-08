import type { I18nMixinLitInterface } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const SupportToolPageMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<SupportToolPageMixinLitInterface>;
export interface SupportToolPageMixinLitInterface extends I18nMixinLitInterface {
    $$<E extends Element = Element>(query: string): E | null;
    ensureFocusOnPageHeader(): void;
}
export {};
