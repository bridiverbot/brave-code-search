import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { TemplateResult } from '//resources/lit/v3_0/lit.rollup.js';
import type { Range } from '/tab_group_shared/search.js';
export interface OrganizerListSectionItemTitleElement {
    $: {
        titleParts: HTMLElement;
    };
}
export declare class OrganizerListSectionItemTitleElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): TemplateResult<1>;
    static get properties(): {
        titleParts: {
            type: ArrayConstructor;
        };
        highlightRanges: {
            type: ArrayConstructor;
        };
    };
    accessor titleParts: string[];
    accessor highlightRanges: Range[][];
    protected renderTitlePart_(text: string, index: number): TemplateResult | string;
}
declare global {
    interface HTMLElementTagNameMap {
        'organizer-list-section-item-title': OrganizerListSectionItemTitleElement;
    }
}
