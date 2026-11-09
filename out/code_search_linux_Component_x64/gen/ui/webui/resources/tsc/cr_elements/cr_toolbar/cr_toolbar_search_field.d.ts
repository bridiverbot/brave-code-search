import '../cr_icon_button/cr_icon_button.js';
import '../icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CrIconButtonElement } from '../cr_icon_button/cr_icon_button.js';
export interface CrToolbarSearchFieldElement {
    $: {
        icon: CrIconButtonElement;
        prompt: HTMLElement;
        searchInput: HTMLInputElement;
        searchTerm: HTMLElement;
    };
}
declare const CrToolbarSearchFieldElementBase: typeof CrLitElement & (new (...args: any[]) => import("../cr_search_field/cr_search_field_mixin_lit.js").CrSearchFieldMixinLitInterface);
export declare class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        narrow: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showingSearch: {
            type: BooleanConstructor;
            notify: boolean;
            reflect: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        autofocus: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        spinnerActive: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchFocused_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        iconOverride: {
            type: StringConstructor;
        };
        inputAriaDescription: {
            type: StringConstructor;
        };
    };
    accessor narrow: boolean;
    accessor showingSearch: boolean;
    accessor disabled: boolean;
    accessor autofocus: boolean;
    accessor spinnerActive: boolean;
    private accessor searchFocused_;
    accessor iconOverride: string | undefined;
    accessor inputAriaDescription: string;
    firstUpdated(): void;
    getSearchInput(): HTMLInputElement;
    isSearchFocused(): boolean;
    showAndFocus(): Promise<void>;
    protected onSearchTermNativeBeforeinput(e: InputEvent): void;
    onSearchTermInput(): void;
    protected onSearchTermNativeInput(e: InputEvent): void;
    protected getIconTabIndex_(): number;
    protected getIconAriaHidden_(): string;
    protected shouldShowSpinner_(): boolean;
    protected onSearchIconClick_(): void;
    private focus_;
    protected onInputFocus_(): void;
    protected onInputBlur_(): void;
    protected onSearchTermKeydown_(e: KeyboardEvent): void;
    private showSearch_;
    protected onClearSearchClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-toolbar-search-field': CrToolbarSearchFieldElement;
    }
}
export {};
