import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrExpandButtonElement } from '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { CrIconElement } from '//resources/cr_elements/cr_icon/cr_icon.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface OrganizerListSectionHeaderElement {
    $: {
        expandButton: CrExpandButtonElement;
        menu: CrActionMenuElement;
        menuButton: CrIconButtonElement;
        showAllButton: HTMLButtonElement;
        showAllCheck: CrIconElement;
        showSomeButton: HTMLButtonElement;
        showSomeCheck: CrIconElement;
    };
}
declare const OrganizerListSectionHeaderElementBase: typeof CrLitElement;
export declare class OrganizerListSectionHeaderElement extends OrganizerListSectionHeaderElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        expanded: {
            type: BooleanConstructor;
            notify: boolean;
            reflect: boolean;
        };
        menuOpen_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showAll: {
            type: BooleanConstructor;
            notify: boolean;
            reflect: boolean;
        };
    };
    accessor disabled: boolean;
    accessor expanded: boolean;
    protected accessor menuOpen_: boolean;
    accessor showAll: boolean;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    focus(): void;
    focusMenuButton(): void;
    isMenuButtonVisible(): boolean;
    protected onExpandButtonKeydown_(e: KeyboardEvent): void;
    protected onMenuButtonKeydown_(e: KeyboardEvent): void;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onMenuButtonClick_(e: Event): void;
    protected onMenuOpenChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onShowSomeClick_(): void;
    protected onShowAllClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'organizer-list-section-header': OrganizerListSectionHeaderElement;
    }
}
export {};
