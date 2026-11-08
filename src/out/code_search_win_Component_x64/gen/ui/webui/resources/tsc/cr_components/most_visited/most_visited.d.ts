import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_toast/cr_toast_manager.js';
import '//resources/cr_elements/policy/cr_policy_indicator.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrToastManagerElement } from '//resources/cr_elements/cr_toast/cr_toast_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { TileSource } from '//resources/mojo/components/ntp_tiles/tile_source.mojom-webui.js';
import type { Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
import type { MostVisitedTheme, MostVisitedTile } from './most_visited.mojom-webui.js';
export interface AutoRemovedEventDetail {
    message: string;
    undo: () => void;
}
declare const MostVisitedElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface MostVisitedElement {
    $: {
        actionMenu: CrActionMenuElement;
        container: HTMLElement;
        dialog: CrDialogElement;
        toastManager: CrToastManagerElement;
        addShortcut: HTMLElement;
        showMore: HTMLElement;
        showLess: HTMLElement;
    };
}
export declare class MostVisitedElement extends MostVisitedElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        theme: {
            type: ObjectConstructor;
        };
        /**
         * If true, disables editing/removing shortcuts, hides action buttons and
         * the add shortcut button, and prevents tile dragging.
         */
        nonEditable: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /** If true, hides the text title under each tile/button. */
        hideTitle: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * If true, renders MV tiles in a single row up to 10 columns wide.
         * If false, renders MV tiles in up to 2 rows up to 5 columns wide.
         */
        singleRow: {
            type: BooleanConstructor;
        };
        /** If true, reflows tiles that are overflowing. */
        reflowOnOverflow: {
            type: BooleanConstructor;
        };
        /**
         * When the tile icon background is dark, the icon color is white for
         * contrast. This can be used to determine the color of the tile hover as
         * well.
         */
        useWhiteTileIcon_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        columnCount_: {
            type: NumberConstructor;
            state: boolean;
        };
        rowCount_: {
            type: NumberConstructor;
            state: boolean;
        };
        customLinksEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        enterpriseShortcutsEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        dialogTileTitle_: {
            type: StringConstructor;
            state: boolean;
        };
        dialogTileUrl_: {
            type: StringConstructor;
            state: boolean;
        };
        dialogTileUrlInvalid_: {
            type: BooleanConstructor;
            state: boolean;
        };
        dialogTitle_: {
            type: StringConstructor;
            state: boolean;
        };
        dialogSaveDisabled_: {
            type: BooleanConstructor;
            state: boolean;
        };
        dialogShortcutAlreadyExists_: {
            type: BooleanConstructor;
            state: boolean;
        };
        dialogTileUrlError_: {
            type: StringConstructor;
            state: boolean;
        };
        dialogIsReadonly_: {
            type: BooleanConstructor;
            state: boolean;
        };
        dialogSource_: {
            type: NumberConstructor;
            state: boolean;
        };
        info_: {
            type: ObjectConstructor;
            state: boolean;
        };
        actionMenuRemoveDisabled_: {
            type: BooleanConstructor;
            state: boolean;
        };
        actionMenuViewOrEditTitle_: {
            type: StringConstructor;
            state: boolean;
        };
        isDark_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Used to hide hover style and cr-icon-button of tiles while the tiles
         * are being reordered.
         */
        reordering_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        maxTiles_: {
            type: NumberConstructor;
            state: boolean;
        };
        maxVisibleTiles_: {
            type: NumberConstructor;
            state: boolean;
        };
        showAdd_: {
            type: BooleanConstructor;
            state: boolean;
        };
        maxVisibleColumnCount_: {
            type: NumberConstructor;
            state: boolean;
        };
        tiles_: {
            type: ArrayConstructor;
            state: boolean;
        };
        toastSource_: {
            type: NumberConstructor;
            state: boolean;
        };
        expandableTilesEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        shortcutsReorderEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        maxTilesInCollapsedState: {
            type: NumberConstructor;
            reflect: boolean;
        };
        maxShortcutsInExpandedState: {
            type: NumberConstructor;
            reflect: boolean;
        };
        maxMostVisitedTilesInExpandedState: {
            type: NumberConstructor;
            reflect: boolean;
        };
        maxEnterpriseShortcuts: {
            type: NumberConstructor;
            reflect: boolean;
        };
        /**
         * If greater than 0, caps the total number of tiles to this value.
         */
        maxTiles: {
            type: NumberConstructor;
            reflect: boolean;
        };
        showAll_: {
            type: BooleanConstructor;
            state: boolean;
        };
        showShowMore_: {
            type: BooleanConstructor;
            state: boolean;
        };
        showShowLess_: {
            type: BooleanConstructor;
            state: boolean;
        };
        visible_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        inReorderMode_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * The width of the element's container. If null, the window's width is
         * used for calculating the number of MVTs per row.
         */
        containerWidth: {
            type: NumberConstructor;
        };
    };
    accessor theme: MostVisitedTheme | null;
    accessor nonEditable: boolean;
    accessor hideTitle: boolean;
    accessor reflowOnOverflow: boolean;
    accessor singleRow: boolean;
    accessor expandableTilesEnabled: boolean;
    accessor shortcutsReorderEnabled: boolean;
    accessor maxTilesInCollapsedState: number;
    accessor maxShortcutsInExpandedState: number;
    accessor maxMostVisitedTilesInExpandedState: number;
    accessor maxEnterpriseShortcuts: number;
    accessor maxTiles: number;
    accessor containerWidth: number | null;
    private accessor showAll_;
    protected accessor showShowMore_: boolean;
    protected accessor showShowLess_: boolean;
    protected accessor inReorderMode_: boolean;
    protected accessor useWhiteTileIcon_: boolean;
    protected accessor columnCount_: number;
    protected accessor rowCount_: number;
    protected accessor customLinksEnabled_: boolean;
    protected accessor enterpriseShortcutsEnabled_: boolean;
    protected accessor dialogTileTitle_: string;
    protected accessor dialogTileUrl_: string;
    protected accessor dialogTileUrlInvalid_: boolean;
    protected accessor dialogTitle_: string;
    protected accessor dialogSaveDisabled_: boolean;
    private accessor dialogShortcutAlreadyExists_;
    protected accessor dialogTileUrlError_: string;
    protected accessor dialogIsReadonly_: boolean;
    protected accessor dialogSource_: TileSource;
    protected accessor actionMenuRemoveDisabled_: boolean;
    protected accessor actionMenuViewOrEditTitle_: string;
    protected accessor isDark_: boolean;
    private accessor reordering_;
    private accessor maxTiles_;
    private accessor maxVisibleTiles_;
    protected accessor showAdd_: boolean;
    private accessor maxVisibleColumnCount_;
    protected accessor tiles_: MostVisitedTile[];
    protected accessor toastSource_: TileSource;
    protected accessor visible_: boolean;
    private adding_;
    private isTileMoveInProgress_;
    private browserProxy_;
    private windowProxy_;
    private actionMenuTargetIndex_;
    private dragOffset_;
    private tileRects_;
    private isRtl_;
    private mediaEventTracker_;
    private eventTracker_;
    private boundOnDocumentKeyDown_;
    private prefetchTimer_;
    private preconnectTimer_;
    private dragImage_;
    private mostVisitedHighDpiFaviconsEnabled_;
    private accessor info_;
    private get tileElements_();
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected getBackgroundColorStyle_(): string;
    private enableForceHover_;
    private clearForceHover_;
    private computeColumnCount_;
    private computeRowCount_;
    private computeMaxVisibleTiles_;
    private computeShowAdd_;
    private computeShowShowMore_;
    private computeShowShowLess_;
    protected onShowMoreClick_(): Promise<void>;
    protected onShowLessClick_(): Promise<void>;
    private computeDialogSaveDisabled_;
    private computeDialogShortcutAlreadyExists_;
    private computeDialogTileUrlError_;
    private computeIsDark_;
    private computeUseWhiteTileIcon_;
    /**
     * This method is always called when the drag and drop was finished (even when
     * the drop was canceled). If the tiles were reordered successfully, there
     * should be a tile with the "dropped" class.
     *
     * |reordering_| is not set to false when the tiles are reordered. The callers
     * will need to set it to false. This is necessary to handle a mouse drag
     * issue.
     */
    private dragEnd_;
    /**
     * This method is called on "drop" events (i.e. when the user drops the tile
     * on a valid region.)
     *
     * If a pointer is over a tile rect that is different from the one being
     * dragged, the dragging tile is moved to the new position. The reordering is
     * done in the DOM and by the |reorderMostVisitedTile()| call. This is done to
     * prevent flicking between the time when the tiles are moved back to their
     * original positions (by removing position absolute) and when the tiles are
     * updated via the |setMostVisitedInfo| handler.
     *
     * We remove the "dragging" class in this method, and add "dropped" to
     * indicate that the dragged tile was successfully dropped.
     */
    private drop_;
    /**
     * The positions of the tiles are updated based on the location of the
     * pointer.
     */
    private dragOver_;
    /**
     * Sets up tile reordering for both drag and touch events. This method stores
     * the following to be used in |dragOver_()| and |dragEnd_()|.
     *   |dragOffset_|: This is the mouse/touch offset with respect to the
     *       top/left corner of the tile being dragged. It is used to update the
     *       dragging tile location during the drag.
     *   |reordering_|: This is property/attribute used to hide the hover style
     *       and cr-icon-button of the tiles while they are being reordered.
     *   |tileRects_|: This is the rects of the tiles before the drag start. It is
     *       to determine which tile the pointer is over while dragging.
     */
    private dragStart_;
    protected getFaviconUrl_(url: Url): string;
    protected getRestoreButtonText_(): string;
    protected getTileTitleDirectionClass_(tile: MostVisitedTile): string;
    protected isHidden_(index: number): boolean;
    protected onSingleRowChange_(): void;
    protected onAddClick_(): void;
    protected onAddShortcutKeydown_(e: KeyboardEvent): void;
    protected onShowMoreKeydown_(e: KeyboardEvent): void;
    protected onShowLessKeydown_(e: KeyboardEvent): void;
    protected onDialogCancelClick_(): void;
    protected onDialogClose_(): void;
    protected onDialogKeydown_(e: KeyboardEvent): void;
    protected onDialogTileUrlBlur_(): void;
    protected onDialogTileUrlValueChanged_(e: Event): void;
    protected onDialogTileNameValueChanged_(e: Event): void;
    protected onDocumentKeyDown_(e: KeyboardEvent): void;
    protected onDragstart_(e: DragEvent): void;
    protected onViewOrEditClick_(): void;
    protected onReorderClick_(): Promise<void>;
    protected onRestoreDefaultsClick_(): void;
    protected onRemoveClick_(): Promise<void>;
    protected onSaveClick_(): Promise<void>;
    private getCurrentTargetIndex_;
    protected onTileActionButtonClick_(e: Event): void;
    protected onTileRemoveButtonClick_(e: Event): void;
    protected onTileClick_(e: MouseEvent): void;
    protected onTileKeydown_(e: KeyboardEvent): Promise<void>;
    protected onTileMouseenter_(e: Event): void;
    protected onTileMousedown_(e: Event): void;
    protected onTileMouseleave_(e: Event): void;
    protected onUndoClick_(): boolean;
    protected onTouchstart_(e: TouchEvent): void;
    private tileFocus_;
    private autoRemovalToast_;
    private toast_;
    private tileRemove_;
    private exitReorderMode_;
    private isReorderModeKey_;
    private onDocumentClick_;
    protected onTilesRendered_(): void;
    protected getMoreActionText_(title: string): string;
    protected getRemoveButtonText_(title: string): string;
    protected getTileAriaLabel_(title: string): string;
    protected isFromEnterpriseShortcut_(source: number): source is TileSource.ENTERPRISE_SHORTCUTS;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-most-visited': MostVisitedElement;
    }
}
export {};
