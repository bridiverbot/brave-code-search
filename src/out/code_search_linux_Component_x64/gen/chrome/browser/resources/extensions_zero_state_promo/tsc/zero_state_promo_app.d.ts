import './icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_chip/cr_chip.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/js/action_link.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class ZeroStatePromoAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showPlainLinksUi_: {
            type: BooleanConstructor;
        };
        showChipsV1_: {
            type: BooleanConstructor;
        };
        showChipsV2_: {
            type: BooleanConstructor;
        };
        showChipsV3_: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    private apiProxy_;
    private customHelpBubbleHandler_;
    protected accessor showPlainLinksUi_: boolean;
    protected accessor showChipsV1_: boolean;
    protected accessor showChipsV2_: boolean;
    protected accessor showChipsV3_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    protected onChromeWebStoreButtonClick_(): void;
    protected onCouponsButtonClick_(): void;
    protected onWritingButtonClick_(): void;
    protected onProductivityButtonClick_(): void;
    protected onAiButtonClick_(): void;
    protected onDismissButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-zero-state-promo-app': ZeroStatePromoAppElement;
    }
}
