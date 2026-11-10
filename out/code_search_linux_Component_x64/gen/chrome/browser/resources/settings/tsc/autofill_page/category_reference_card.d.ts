/**
 * @fileoverview 'category-reference-card' is a card that shows a list of
 * chips related to a certain category.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { YourSavedInfoDataCategory, YourSavedInfoDataChip } from '../metrics_browser_proxy.js';
import type { DataChip } from './autofill_page.js';
export type DataChipClickEvent = CustomEvent<{
    chipId: YourSavedInfoDataChip;
}>;
export type DataCategoryClickEvent = CustomEvent<{
    categoryId: YourSavedInfoDataCategory;
}>;
declare global {
    interface HTMLElementEventMap {
        'data-chip-click': DataChipClickEvent;
        'data-category-click': DataCategoryClickEvent;
    }
}
export declare class CategoryReferenceCardElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        cardTitle: {
            type: StringConstructor;
        };
        categoryId: {
            type: NumberConstructor;
        };
        chips: {
            type: ArrayConstructor;
        };
        isExternal: {
            type: BooleanConstructor;
        };
    };
    accessor cardTitle: string;
    accessor categoryId: YourSavedInfoDataCategory;
    accessor chips: DataChip[];
    accessor isExternal: boolean;
    protected onDataCategoryClick_(): void;
    protected onDataChipClick_(event: Event): void;
    focus(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'category-reference-card': CategoryReferenceCardElement;
    }
}
