import type { TemplateResult } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Range } from '/tab_group_shared/search.js';
export interface OrganizerListSectionItemDescriptionPart {
    text: string;
    elideFromStart?: boolean;
    prefixElement?: TemplateResult;
    matchable?: boolean;
}
export interface OrganizerListSectionItemDescriptionElement {
    $: {
        descriptionParts: HTMLElement;
    };
}
export declare class OrganizerListSectionItemDescriptionElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): TemplateResult<1>;
    static get properties(): {
        descriptionParts: {
            type: ArrayConstructor;
        };
        highlightRanges: {
            type: ArrayConstructor;
        };
    };
    accessor descriptionParts: OrganizerListSectionItemDescriptionPart[];
    accessor highlightRanges: Range[][];
    protected renderDescriptionPart_(text: string, index: number): TemplateResult | string;
}
declare global {
    interface HTMLElementTagNameMap {
        'organizer-list-section-item-description': OrganizerListSectionItemDescriptionElement;
    }
}
