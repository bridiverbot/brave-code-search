import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const OmniboxEverywhereFreModalElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class OmniboxEverywhereFreModalElement extends OmniboxEverywhereFreModalElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        smallLoomnibox: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    accessor smallLoomnibox: boolean;
    protected isMac_(): boolean;
    protected isFuseboxEligible_(): boolean;
    protected getMacMenubarImgSrc_(): string;
    protected onCloseClick_(): void;
}
export type FreModalElement = OmniboxEverywhereFreModalElement;
declare global {
    interface HTMLElementTagNameMap {
        'fre-modal': OmniboxEverywhereFreModalElement;
    }
}
export {};
