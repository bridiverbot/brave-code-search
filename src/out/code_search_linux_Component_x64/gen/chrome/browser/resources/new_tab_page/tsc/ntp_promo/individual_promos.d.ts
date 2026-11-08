/**
 * @fileoverview A component for displaying a single NTP Promo.
 */
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import './ntp_promo_icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Promo } from '../ntp_promo.mojom-webui.js';
export interface IndividualPromosElement {
    $: {
        promos: HTMLElement;
    };
}
export declare class IndividualPromosElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        promo_: {
            type: ObjectConstructor;
        };
    };
    accessor promo_: Promo | null;
    private handler_;
    private callbackRouter_;
    private listenerIds_;
    private notifiedShown_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    onSetPromo(promo: Promo | null): void;
    protected onClick_(promoId: string): void;
    protected onMenuButtonClick_(e: Event): void;
    protected onPromoDismissed_(e: Event): void;
    protected getBodyTextCssClass_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'individual-promos': IndividualPromosElement;
    }
}
