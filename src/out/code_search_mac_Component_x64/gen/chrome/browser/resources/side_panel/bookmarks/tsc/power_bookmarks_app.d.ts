import '/strings.m.js';
import './commerce/shopping_list.js';
import './icons.html.js';
import './power_bookmarks_context_menu.js';
import './power_bookmarks_labels.js';
import './power_bookmarks_list.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_empty_state.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_footer.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_icons.html.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_list_item_badge.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import '//resources/cr_elements/cr_toolbar/cr_toolbar_selection_overlay.js';
import '//resources/cr_elements/icons.html.js';
import type { SpEmptyStateElement } from '//bookmarks-side-panel.top-chrome/shared/sp_empty_state.js';
import type { BookmarkProductInfo } from '//resources/cr_components/commerce/shared.mojom-webui.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrLazyRenderLitElement } from '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import type { CrToastElement } from '//resources/cr_elements/cr_toast/cr_toast.js';
import type { CrToolbarSearchFieldElement } from '//resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { BookmarksTreeNode } from './bookmarks.mojom-webui.js';
import type { PowerBookmarksContextMenuElement } from './power_bookmarks_context_menu.js';
import type { PowerBookmarksLabelsElement } from './power_bookmarks_labels.js';
import type { PowerBookmarksListElement } from './power_bookmarks_list.js';
import type { Label } from './power_bookmarks_service.js';
import type { PowerBookmarksDelegate } from './power_bookmarks_service.js';
export interface PowerBookmarksAppElement {
    $: {
        bookmarksList: PowerBookmarksListElement;
        contextMenu: PowerBookmarksContextMenuElement;
        deletionToast: CrLazyRenderLitElement<CrToastElement>;
        powerBookmarksContainer: HTMLElement;
        searchField: CrToolbarSearchFieldElement;
        disabledFeatureDialog: CrDialogElement;
        topLevelEmptyState: SpEmptyStateElement;
        footer: HTMLElement;
        labels: PowerBookmarksLabelsElement;
    };
}
interface AppSectionVisibility {
    search?: boolean;
    labels?: boolean;
    topLevelEmptyState?: boolean;
    footer?: boolean;
    heading?: boolean;
}
export declare class PowerBookmarksAppElement extends CrLitElement implements PowerBookmarksDelegate {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        contextMenuBookmark_: {
            type: ObjectConstructor;
        };
        activeFolderPath_: {
            type: ArrayConstructor;
        };
        currentUrl_: {
            type: StringConstructor;
        };
        labels_: {
            type: ArrayConstructor;
        };
        editing_: {
            type: BooleanConstructor;
        };
        renamingId_: {
            type: StringConstructor;
        };
        selectedBookmarks_: {
            type: ObjectConstructor;
        };
        guestMode_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        canAddCurrentUrl_: {
            type: BooleanConstructor;
        };
        deletionDescription_: {
            type: StringConstructor;
        };
        hasScrollbars_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasLoadedData_: {
            type: BooleanConstructor;
        };
        searchQuery_: {
            type: StringConstructor;
        };
        trackedProductInfos_: {
            type: ObjectConstructor;
        };
        hasSomeActiveFilter_: {
            type: BooleanConstructor;
        };
        hasShownBookmarks_: {
            type: BooleanConstructor;
        };
        sectionVisibility_: {
            type: ObjectConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    private bookmarksApi_;
    private priceTrackingProxy_;
    private shoppingListenerIds_;
    protected accessor trackedProductInfos_: {
        [key: string]: BookmarkProductInfo;
    };
    private availableProductInfos_;
    private bookmarksService_;
    protected accessor activeFolderPath_: BookmarksTreeNode[];
    protected accessor canAddCurrentUrl_: boolean;
    protected accessor labels_: Label[];
    protected accessor searchQuery_: string;
    protected accessor currentUrl_: string | undefined;
    protected accessor editing_: boolean;
    protected accessor renamingId_: string;
    protected accessor selectedBookmarks_: {
        [key: string]: boolean;
    };
    protected accessor guestMode_: boolean;
    protected accessor deletionDescription_: string;
    protected accessor hasScrollbars_: boolean;
    protected accessor contextMenuBookmark_: BookmarksTreeNode | undefined;
    protected accessor hasLoadedData_: boolean;
    protected accessor hasSomeActiveFilter_: boolean;
    protected accessor hasShownBookmarks_: boolean;
    protected accessor sectionVisibility_: AppSectionVisibility;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private showUiCalled_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    getCurrentUrlForTesting(): string | undefined;
    setCurrentUrl(url: string): void;
    onBookmarksLoaded(): void;
    onBookmarkChanged(id: string): void;
    onBookmarkAdded(bookmark: BookmarksTreeNode, parent: BookmarksTreeNode): void;
    onBookmarkMoved(bookmark: BookmarksTreeNode, oldParent: BookmarksTreeNode, newParent: BookmarksTreeNode): void;
    onBookmarkRemoved(bookmark: BookmarksTreeNode): void;
    getTrackedProductInfos(): {
        [key: string]: BookmarkProductInfo;
    };
    getAvailableProductInfos(): Map<string, BookmarkProductInfo>;
    getProductImageUrl(bookmark: BookmarksTreeNode): string;
    private onBookmarkPriceTracked_;
    private onBookmarkPriceUntracked_;
    private getActiveFolder_;
    setImageUrl(bookmark: BookmarksTreeNode, url: string): void;
    private updateShoppingData_;
    private setAvailableProductInfo_;
    private updateCanAddCurrentUrl_;
    protected getSelectedDescription_(): string;
    private getSelectedBookmarksList_;
    protected getSelectedBookmarksLength_(): number;
    protected onLabelsChanged_(e: CustomEvent<{
        value: Label[];
    }>): void;
    protected onSearchChanged_(e: CustomEvent<string>): void;
    protected onSearchBlur_(): void;
    private onContextMenuShown_;
    protected onShowContextMenu_(event: CustomEvent<{
        bookmark: BookmarksTreeNode;
        event: MouseEvent;
    }>): void;
    protected toggleEditing_(): void;
    protected onBookmarksListBulkEdit_(): void;
    protected onClearSelectedItems_(): void;
    protected onDeleteClick_(event: MouseEvent): void;
    protected onContextMenuEditClicked_(event: CustomEvent<{
        bookmarks: BookmarksTreeNode[];
    }>): void;
    protected onContextMenuDeleteClicked_(event: CustomEvent<{
        bookmarks: BookmarksTreeNode[];
    }>): void;
    protected onContextMenuClose_(): void;
    protected onClearSearch_(): void;
    private countDescendants_;
    private showDeletionToast_;
    protected onDisabledFeature_(): void;
    protected onCloseDisabledFeatureDialogClick_(): void;
    protected onUndoClick_(): void;
    protected onMoveClick_(event: MouseEvent): void;
    private showEditDialog_;
    protected onBulkEditMenuClick_(event: MouseEvent): void;
    protected onAddTabClick_(): void;
    protected onRowSelectedChange_(event: CustomEvent<{
        id: string;
        checked: boolean;
    }>): void;
    protected hideAddTabButton_(): boolean;
    protected getEmptyTitle_(): string;
    protected getEmptyBody_(): string;
    protected getEmptyImagePath_(): string;
    protected getEmptyImagePathDark_(): string;
    private computeHasSomeActiveFilter_;
    private computeSectionVisibility_;
    protected onRenamingIdChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onHasScrollbarsChanged_(e: CustomEvent<boolean>): void;
    protected onContextMenuRenameClicked_(event: CustomEvent<{
        id: string;
    }>): void;
    protected onHasShownBookmarksChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onActiveFolderPathChanged_(e: CustomEvent<{
        value: BookmarksTreeNode[];
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'power-bookmarks-app': PowerBookmarksAppElement;
    }
}
export {};
