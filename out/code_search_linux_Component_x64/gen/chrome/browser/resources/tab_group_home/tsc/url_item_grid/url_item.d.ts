import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { UrlItem } from './url_item_delegate.js';
export interface UrlItemElement {
    $: {
        favicon: HTMLElement;
        title: HTMLElement;
        closeButton: CrIconButtonElement;
    };
}
export declare class UrlItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        item: {
            type: ObjectConstructor;
        };
        faviconImageSet_: {
            type: StringConstructor;
            state: boolean;
        };
    };
    accessor item: UrlItem;
    protected accessor faviconImageSet_: string;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onCloseButtonClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'url-item': UrlItemElement;
    }
}
