import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_progress/cr_progress.js';
import './icons.html.js';
import './viewer_download_controls.js';
import './viewer_page_selector.js';
import './viewer_save_to_drive_controls.js';
import './shared_vars.css.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { LoadTimeDataRaw } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AnnotationMode } from '../constants.js';
import { FittingType, FormFieldFocusType } from '../constants.js';
import { SaveToDriveState } from '../constants.js';
declare global {
    interface HTMLElementEventMap {
        'annotation-mode-updated': CustomEvent<AnnotationMode>;
        'display-annotations-changed': CustomEvent<boolean>;
        'fit-to-changed': CustomEvent<FittingType>;
    }
}
export interface ViewerToolbarElement {
    $: {
        sidenavToggle: HTMLButtonElement;
        menu: CrActionMenuElement;
        presentButton: HTMLButtonElement;
        twoPageViewButton: HTMLButtonElement;
    };
}
export declare class ViewerToolbarElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        docTitle: {
            type: StringConstructor;
        };
        docLength: {
            type: NumberConstructor;
        };
        embeddedViewer: {
            type: BooleanConstructor;
        };
        hasEdits: {
            type: BooleanConstructor;
        };
        formFieldFocus: {
            type: StringConstructor;
        };
        loadProgress: {
            type: NumberConstructor;
        };
        loading_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        pageNo: {
            type: NumberConstructor;
        };
        rotated: {
            type: BooleanConstructor;
        };
        strings: {
            type: ObjectConstructor;
        };
        viewportZoom: {
            type: NumberConstructor;
        };
        zoomBounds: {
            type: ObjectConstructor;
        };
        sidenavCollapsed: {
            type: BooleanConstructor;
        };
        twoUpViewEnabled: {
            type: BooleanConstructor;
        };
        moreMenuOpen_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        displayAnnotations_: {
            type: BooleanConstructor;
        };
        fittingType_: {
            type: StringConstructor;
        };
        printingEnabled_: {
            type: BooleanConstructor;
        };
        viewportZoomPercent_: {
            type: NumberConstructor;
        };
        pdfGlicSummarizeEnabled_: {
            type: BooleanConstructor;
        };
        annotationAvailable: {
            type: BooleanConstructor;
        };
        annotationMode: {
            type: StringConstructor;
            reflect: boolean;
        };
        enableUndoRedo: {
            type: BooleanConstructor;
        };
        hasInk2Edits: {
            type: BooleanConstructor;
        };
        pdfInk2Enabled: {
            type: BooleanConstructor;
        };
        shouldEnableRedo_: {
            type: BooleanConstructor;
        };
        shouldEnableUndo_: {
            type: BooleanConstructor;
        };
        pdfSignaturesEnabled_: {
            type: BooleanConstructor;
        };
        pdfTextAnnotationsEnabled_: {
            type: BooleanConstructor;
        };
        pdfSaveToDriveEnabled: {
            type: BooleanConstructor;
        };
        saveToDriveProgress: {
            type: NumberConstructor;
        };
        saveToDriveState: {
            type: StringConstructor;
        };
    };
    accessor docTitle: string;
    accessor docLength: number;
    accessor embeddedViewer: boolean;
    accessor hasEdits: boolean;
    accessor formFieldFocus: FormFieldFocusType;
    accessor loadProgress: number;
    accessor pageNo: number;
    accessor rotated: boolean;
    accessor strings: LoadTimeDataRaw | undefined;
    accessor viewportZoom: number;
    accessor zoomBounds: {
        min: number;
        max: number;
    };
    accessor sidenavCollapsed: boolean;
    accessor twoUpViewEnabled: boolean;
    protected accessor displayAnnotations_: boolean;
    private accessor fittingType_;
    protected accessor moreMenuOpen_: boolean;
    protected accessor loading_: boolean;
    protected accessor printingEnabled_: boolean;
    private accessor viewportZoomPercent_;
    protected accessor pdfGlicSummarizeEnabled_: boolean;
    accessor pdfSaveToDriveEnabled: boolean;
    accessor saveToDriveProgress: number;
    accessor saveToDriveState: SaveToDriveState;
    accessor annotationAvailable: boolean;
    accessor annotationMode: AnnotationMode;
    accessor enableUndoRedo: boolean;
    accessor hasInk2Edits: boolean;
    accessor pdfInk2Enabled: boolean;
    protected accessor shouldEnableRedo_: boolean;
    protected accessor shouldEnableUndo_: boolean;
    protected accessor pdfSignaturesEnabled_: boolean;
    protected accessor pdfTextAnnotationsEnabled_: boolean;
    private canUndo_;
    private canRedo_;
    private pluginController_;
    private strokeInProgress_;
    private tracker_;
    constructor();
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private updateLoadTimeData_;
    protected onSidenavToggleClick_(): void;
    protected fitToButtonIcon_(): string;
    /** @return The appropriate tooltip for the current state. */
    protected getFitToButtonTooltip_(): string;
    protected onGlicSummarizeClick_(): void;
    protected showInk2Buttons_(): boolean;
    protected onPrintClick_(): void;
    protected onRotateClick_(): void;
    protected onDisplayAnnotationsClick_(): void;
    protected onPresentClick_(): void;
    protected onPropertiesClick_(): void;
    protected getAriaChecked_(checked: boolean): string;
    protected getAriaExpanded_(): string;
    protected onTwoPageViewClick_(): void;
    protected onZoomInClick_(): void;
    protected onZoomOutClick_(): void;
    forceFit(fittingType: FittingType): void;
    fitToggle(): void;
    protected onFitToButtonClick_(): void;
    private getZoomInput_;
    protected onZoomBlur_(): void;
    protected onZoomChange_(): void;
    /**
     * @param value The new zoom value
     * @return Whether the zoom-changed event was sent.
     */
    private sendZoomChanged_;
    protected onZoomInputPointerup_(e: Event): void;
    protected onMoreClick_(): void;
    protected onMoreOpenChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected isAtMinimumZoom_(): boolean;
    protected isAtMaximumZoom_(): boolean;
    protected getActive_(mode: AnnotationMode): string;
    protected getAriaPressed_(mode: AnnotationMode): string;
    protected onAnnotationClick_(): void;
    setAnnotationMode(annotationMode: AnnotationMode): void;
    protected onTextAnnotationClick_(): void;
    protected onSignatureClick_(): void;
    /**
     * Handles when the user starts a stroke. While the stroke is in progress,
     * disallow undo/redo operations.
     */
    private handleStartInkStroke_;
    /**
     * Handles when the user finishes a stroke, so that undo/redo operations can
     * can be allowed if available. This event also fires for eraser operations.
     */
    private handleFinishInkStroke_;
    protected computeEnableUndo_(): boolean;
    protected computeEnableRedo_(): boolean;
    protected onUndoClick_(): void;
    /**
     * Undo an annotation stroke, if possible.
     */
    undo(): void;
    protected onRedoClick_(): void;
    /**
     * Redo an annotation stroke, if possible.
     */
    redo(): void;
    /**
     * Update whether the undo and redo buttons should be enabled or disabled.
     * Both buttons should be disabled when a text form field has focus. Undo and
     * redo should be disabled when there are no possible undo and redo actions
     * respectively.
     */
    private updateCanUndoRedo_;
    private handleUndoRedoStateChanged_;
    protected isFormFieldFocused_(): boolean;
    /**
     * Updates the toolbar's presentation mode available flag depending on current
     * conditions.
     */
    protected presentationModeAvailable_(): boolean;
    getSaveToDriveBubbleAnchor(): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-toolbar': ViewerToolbarElement;
    }
}
