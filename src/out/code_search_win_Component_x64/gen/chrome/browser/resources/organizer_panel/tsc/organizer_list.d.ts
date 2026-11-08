import './organizer_list_section.js';
import './organizer_zero_state.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { OrganizerListSectionElement } from './organizer_list_section.js';
import type { OrganizerListSectionDelegate } from './organizer_list_section_delegate.js';
export interface OrganizerListElement {
    $: {
        sections: HTMLElement;
    };
}
export declare class OrganizerListElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        sectionDelegates: {
            type: ArrayConstructor;
        };
        searchQuery: {
            type: StringConstructor;
        };
        allSectionsHidden_: {
            type: BooleanConstructor;
        };
    };
    accessor sectionDelegates: Array<OrganizerListSectionDelegate<unknown>>;
    accessor searchQuery: string;
    protected accessor allSectionsHidden_: boolean;
    private keyArrowNavigationService_;
    private boundFocusNextSection_;
    private boundFocusPreviousSection_;
    private boundFocusCurrentSection_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private getSections_;
    getVisibleSections(): OrganizerListSectionElement[];
    getNavigableElements(): HTMLElement[];
    focusFirstSection(): boolean;
    focusLastSection(focusMenuButtonIfVisible?: boolean): boolean;
    protected onSectionHiddenChanged_(): void;
    protected onSectionExpandedChanged_(): void;
    private onFocusNextSection_;
    private onFocusPreviousSection_;
    private onFocusCurrentSection_;
}
declare global {
    interface HTMLElementTagNameMap {
        'organizer-list': OrganizerListElement;
    }
}
