import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface NewBadgeElement {
    $: {};
}
declare const NewBadgeElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class NewBadgeElement extends NewBadgeElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {};
}
declare global {
    interface HTMLElementTagNameMap {
        'new-badge': NewBadgeElement;
    }
}
export {};
