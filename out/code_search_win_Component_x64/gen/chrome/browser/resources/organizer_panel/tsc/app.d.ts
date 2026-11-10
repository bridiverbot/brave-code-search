import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import './organizer_list.js';
import '/strings.m.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CrToolbarSearchFieldElement } from 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import type { OrganizerListElement } from './organizer_list.js';
import type { OrganizerListSectionDelegate } from './organizer_list_section_delegate.js';
export interface OrganizerPanelAppElement {
    $: {
        dragRegion: HTMLElement;
        list: OrganizerListElement;
        searchField: CrToolbarSearchFieldElement;
        shortcut: HTMLElement;
    };
}
export declare class OrganizerPanelAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        shortcut_: {
            type: StringConstructor;
        };
        sectionDelegates_: {
            type: ArrayConstructor;
        };
        searchQuery_: {
            type: StringConstructor;
        };
        verticalTabsEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor verticalTabsEnabled: boolean;
    protected accessor shortcut_: string;
    protected accessor searchQuery_: string;
    protected accessor sectionDelegates_: Array<OrganizerListSectionDelegate<unknown>>;
    private browserProxy_;
    private verticalTabsEnabledChangedListenerId_;
    private onKeydown_;
    private onWindowFocused_;
    private onContextMenu_;
    private onVisibilityChange_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private getCloseButton_;
    protected onFocusAfterList_(e: CustomEvent<{
        sourceEvent?: KeyboardEvent;
    }>): void;
    protected onFocusBeforeList_(e: CustomEvent<{
        sourceEvent?: KeyboardEvent;
    }>): void;
    private getSectionDelegates_;
    protected onSearchChanged_(e: CustomEvent<string>): void;
    protected onSearchIconClicked_(): void;
    protected onShortcutClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'organizer-panel-app': OrganizerPanelAppElement;
    }
}
