import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import type { PriceInsightsInfo } from '//resources/cr_components/commerce/shopping_service.mojom-webui.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class CatalogAttributesRowElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        priceInsightsInfo: {
            type: ObjectConstructor;
        };
    };
    accessor priceInsightsInfo: PriceInsightsInfo;
    private shoppingApi_;
    protected onJackpotClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'catalog-attributes-row': CatalogAttributesRowElement;
    }
}
