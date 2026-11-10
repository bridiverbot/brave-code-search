import '/strings.m.js';
import './icons.html.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_heading.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_icons.html.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { BookmarksTreeNode } from './bookmarks.mojom-webui.js';
import { SortOrder } from './bookmarks.mojom-webui.js';
interface SortOption {
    sortOrder: SortOrder;
    label: string;
    lowerLabel: string;
}
export interface PowerBookmarksListHeaderElement {
    $: {
        editButton: CrIconButtonElement;
        sortMenu: CrActionMenuElement;
        viewButton: CrIconButtonElement;
    };
}
export declare class PowerBookmarksListHeaderElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        activeFolder: {
            type: ObjectConstructor;
        };
        activeSortType_: {
            type: ObjectConstructor;
        };
        activeSortIndex_: {
            type: NumberConstructor;
        };
        compact: {
            type: BooleanConstructor;
        };
        disableEdit: {
            type: BooleanConstructor;
        };
        editing: {
            type: BooleanConstructor;
        };
        sortTypes_: {
            type: ArrayConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
        titleA_: {
            type: StringConstructor;
        };
        titleB_: {
            type: StringConstructor;
        };
        activeTitle_: {
            type: StringConstructor;
        };
        transitioningTitle_: {
            type: StringConstructor;
        };
        transitionDirection_: {
            type: StringConstructor;
        };
    };
    private bookmarksApi_;
    accessor activeFolder: BookmarksTreeNode | undefined;
    accessor compact: boolean;
    accessor disableEdit: boolean;
    accessor editing: boolean;
    protected accessor titleA_: string;
    protected accessor titleB_: string;
    protected accessor activeTitle_: 'a' | 'b';
    protected accessor transitioningTitle_: 'a' | 'b' | '';
    protected accessor transitionDirection_: 'forward' | 'backward' | '';
    protected rootTransitioning_: boolean;
    private titleTransitionTimer_;
    protected accessor activeSortType_: SortOption;
    protected accessor activeSortIndex_: number;
    protected accessor sortTypes_: SortOption[];
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private bookmarksService_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getBackButtonLabel_(): string;
    protected shouldHideBackButton_(): boolean;
    protected disableBackButton_(): boolean;
    protected getActiveFolderLabel_(): string;
    protected getViewButtonIcon_(): "bookmarks:compact-view-old" | "bookmarks:list" | "bookmarks:view-list" | "bookmarks:visual-view-old";
    protected getViewButtonTooltip_(): string;
    protected getViewButtonA11yLabel_(): string;
    protected onBackButtonClick_(): void;
    protected onShowSortMenuClick_(event: MouseEvent): void;
    protected onViewToggleClick_(event: MouseEvent): void;
    protected onBulkEditClick_(event: MouseEvent): void;
    protected getSortMenuItemLowerLabel_(sortType: SortOption): string;
    protected sortMenuItemIsSelected_(sortType: SortOption): boolean;
    protected onSortTypeClick_(event: MouseEvent): void;
    private onActiveSortIndexChanged_;
    protected getTitleContainerClass_(): string;
    protected getTitleClass_(titleId: 'a' | 'b'): string;
    protected getRootHeaderClass_(): string;
    protected getFolderHeaderClass_(): string;
    /**
     * Animates the folder label inside the header by switching between
     * double-buffered title spans (titleA_ and titleB_).
     */
    transitionFolderLabel(newFolder: BookmarksTreeNode | undefined, forward: boolean): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'power-bookmarks-list-header': PowerBookmarksListHeaderElement;
    }
}
export {};
