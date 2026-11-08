import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PromoCardData } from './browser_proxy.js';
export interface PromoCardElement {
    $: {
        actionButton: CrButtonElement;
        closeButton: CrIconButtonElement;
        description: HTMLElement;
        title: HTMLElement;
    };
}
declare const PromoCardElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class PromoCardElement extends PromoCardElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        promoData_: {
            type: ObjectConstructor;
        };
    };
    protected accessor promoData_: PromoCardData;
    connectedCallback(): void;
    private browserProxy_;
    private updatePromoData_;
    protected onActionButtonClick_(): void;
    protected onCloseClick_(): void;
    private propagateShouldShowPromo_;
}
declare global {
    interface HTMLElementTagNameMap {
        'promo-card': PromoCardElement;
    }
}
export {};
