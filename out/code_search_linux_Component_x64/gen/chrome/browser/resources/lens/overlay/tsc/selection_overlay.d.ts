import './object_layer.js';
import './simplified_text_layer.js';
import './text_layer.js';
import './region_selection.js';
import './post_selection_renderer.js';
import './overlay_border_glow.js';
import './overlay_shimmer_canvas.js';
import '/strings.m.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CenterRotatedBox } from './geometry.mojom-webui.js';
import type { ObjectLayerElement } from './object_layer.js';
import type { OverlayShimmerCanvasElement } from './overlay_shimmer_canvas.js';
import type { PostSelectionRendererElement } from './post_selection_renderer.js';
import type { RegionSelectionElement } from './region_selection.js';
import { SelectionOverlayBaseElement } from './selection_overlay_base.js';
import type { SimplifiedTextLayerElement } from './simplified_text_layer.js';
export interface SelectedTextContextMenuData {
    text: string;
    contentLanguage: string;
    left: number;
    right: number;
    top: number;
    bottom: number;
    selectionStartIndex: number;
    selectionEndIndex: number;
}
export interface SelectedRegionContextMenuData {
    box: CenterRotatedBox;
    selectionStartIndex: number;
    selectionEndIndex: number;
    text?: string;
}
export interface SelectionOverlayElement {
    $: {
        backgroundImageCanvas: HTMLCanvasElement;
        closeButton: CrIconButtonElement;
        cursor: HTMLElement;
        initialFlashScrim: HTMLElement;
        objectSelectionLayer: ObjectLayerElement;
        overlayShimmerCanvas: OverlayShimmerCanvasElement;
        postSelectionRenderer: PostSelectionRendererElement;
        regionSelectionLayer: RegionSelectionElement;
        selectedRegionContextMenu: HTMLElement;
        selectedTextContextMenu: HTMLElement;
        selectionOverlay: HTMLElement;
        selectTextContextMenuItem: HTMLElement;
        textLayer: SimplifiedTextLayerElement;
    };
}
export declare class SelectionOverlayElement extends SelectionOverlayBaseElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        showTranslateContextMenuItem: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        showSelectedTextContextMenu: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        showSelectedRegionContextMenu: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        showDetectedTextContextMenuOptions: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
        };
        selectedTextContextMenuX: NumberConstructor;
        selectedTextContextMenuY: NumberConstructor;
        selectedRegionContextMenuX: NumberConstructor;
        selectedRegionContextMenuY: NumberConstructor;
        selectedRegionContextMenuHorizontalStyle: StringConstructor;
        selectedRegionContextMenuVerticalStyle: StringConstructor;
        enableCopyAsImage: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: () => boolean;
        };
        enableSaveAsImage: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: () => boolean;
        };
        suppressCopyAndSaveAsImage: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: () => boolean;
        };
        translateModeEnabled: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        isSearchboxFocused: BooleanConstructor;
        areLanguagePickersOpen: BooleanConstructor;
    };
    private showTranslateContextMenuItem;
    private showSelectedTextContextMenu;
    private showSelectedRegionContextMenu;
    private showDetectedTextContextMenuOptions;
    private selectedTextContextMenuX;
    private selectedTextContextMenuY;
    private selectedRegionContextMenuX;
    private selectedRegionContextMenuY;
    private selectedRegionContextMenuHorizontalStyle;
    private selectedRegionContextMenuVerticalStyle;
    private isSearchboxFocused;
    private areLanguagePickersOpen;
    private selectedRegionContextMenuBox;
    private highlightedText;
    private contentLanguage;
    private textSelectionStartIndex;
    private textSelectionEndIndex;
    private detectedTextStartIndex;
    private detectedTextEndIndex;
    private isPointerInsideButton;
    private enableCopyAsImage;
    private enableSaveAsImage;
    private suppressCopyAndSaveAsImage;
    private browserProxy;
    private closeButtonUsedRecorded;
    private menuWasShownForCurrentSelection;
    private translateModeEnabled;
    protected backgroundImageCanvas(): HTMLCanvasElement;
    protected cursor(): HTMLElement;
    protected initialFlashScrim(): HTMLElement;
    protected overlayShimmerCanvas(): OverlayShimmerCanvasElement;
    protected postSelectionRenderer(): PostSelectionRendererElement;
    protected regionSelectionLayer(): RegionSelectionElement;
    protected selectionOverlay(): HTMLElement;
    connectedCallback(): void;
    protected shouldIgnoreEvent(event: PointerEvent): boolean;
    protected handlePointerEnter(): void;
    protected handleRightClick(event: PointerEvent): void;
    protected setCursorToText(): void;
    protected setCursorToCrosshair(): void;
    protected setCursorToPointer(): void;
    protected resetCursor(): void;
    protected pointerDownHandled(): void;
    handleGestureStart(): void;
    protected handleGestureDrag(event: PointerEvent): void;
    protected handleGestureEnd(): void;
    protected handleGestureCancel(): void;
    protected resizeSelectionCanvases(newWidth: number, newHeight: number): void;
    protected setSidePanelOpened(): void;
    private positionSelectedRegionContextMenu;
    private getContextMenuStyle;
    private handleCopy;
    private handleCopyDetectedText;
    private copyText;
    private handleSelectText;
    private handleTranslateDetectedText;
    private handleTranslate;
    private handleCopyAsImage;
    private handleSaveAsImage;
    private handlePointerEnterButton;
    private handlePointerLeaveButton;
    private setShowSelectedTextContextMenu;
    private setShowSelectedRegionContextMenu;
    private onCopyCommand;
    private updateSelectedRegionContextMenu;
    private onNotifyResultsPanelOpened;
    private onCloseButtonClick;
    protected onFinishReshowOverlay(): void;
    getShowSelectedRegionContextMenuForTesting(): boolean;
    getShowSelectedTextContextMenuForTesting(): boolean;
    getShowDetectedTextContextMenuOptionsForTesting(): boolean;
    getSuppressCopyAndSaveAsImageForTesting(): boolean;
    handleSelectTextForTesting(): void;
    handleTranslateDetectedTextForTesting(): void;
    handleCopyForTesting(): void;
    handleCopyDetectedTextForTesting(): void;
    handleTranslateForTesting(): void;
    handleCopyAsImageForTesting(): void;
    handleSaveAsImageForTesting(): void;
    setSearchboxFocusForTesting(isFocused: boolean): void;
    setLanguagePickersOpenForTesting(open: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'lens-selection-overlay': SelectionOverlayElement;
    }
}
