import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { UrlItem, UrlItemDelegate } from './url_item_delegate.js';
export declare class UrlItemGridElement extends CrLitElement {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        items_: {
            type: ArrayConstructor;
        };
    };
    protected accessor items_: UrlItem[];
    private delegate_;
    private eventTracker_;
    disconnectedCallback(): void;
    setDelegate(delegate: UrlItemDelegate): Promise<void>;
    private onItemAdded_;
    private onItemMoved_;
    private onItemRemoved_;
}
declare global {
    interface HTMLElementTagNameMap {
        'url-item-grid': UrlItemGridElement;
    }
}
