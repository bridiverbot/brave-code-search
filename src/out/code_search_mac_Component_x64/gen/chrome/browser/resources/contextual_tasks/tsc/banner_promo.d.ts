import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class BannerPromoElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        acceptButtonText: {
            type: StringConstructor;
        };
        dismissButtonText: {
            type: StringConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor acceptButtonText: string;
    accessor dismissButtonText: string;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    protected onNotNowClick_(): void;
    protected onTurnOnClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-banner-promo': BannerPromoElement;
    }
}
