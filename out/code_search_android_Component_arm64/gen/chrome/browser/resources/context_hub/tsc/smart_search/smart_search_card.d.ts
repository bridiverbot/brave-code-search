import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface SmartSearchResult {
    id: string;
    title: string;
    url: string;
    snippet: string;
}
export declare class SmartSearchCardElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        result: {
            type: ObjectConstructor;
        };
        selected: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor result: SmartSearchResult | null;
    accessor selected: boolean;
    protected onCheckboxClick_(e: Event): void;
    protected onCheckboxChange_(e: Event): void;
    protected onOpenUrlClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'smart-search-card': SmartSearchCardElement;
    }
}
