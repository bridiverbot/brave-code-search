import '/lens/region_selection.js';
import '/lens/post_selection_renderer.js';
import '/lens/overlay_border_glow.js';
import '/lens/overlay_shimmer_canvas.js';
import '/strings.m.js';
import './inline_fulfillment_host.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { OverlayBorderGlowElement } from '/lens/overlay_border_glow.js';
import type { OverlayShimmerCanvasElement } from '/lens/overlay_shimmer_canvas.js';
import type { PostSelectionBoundingBox, PostSelectionRendererElement } from '/lens/post_selection_renderer.js';
import type { RegionSelectionElement } from '/lens/region_selection.js';
import { SelectionOverlayBaseLitElement } from '/lens/selection_overlay_base_lit.js';
import { //
SuggestedActionIcon } from './selection_overlay.mojom-webui.js';
import type { SuggestedAction } from './selection_overlay.mojom-webui.js';
export interface GlicSelectionOverlayElement {
    $: {
        backgroundImageCanvas: HTMLCanvasElement;
        cursor: HTMLElement;
        initialFlashScrim: HTMLElement;
        overlayShimmerCanvas: OverlayShimmerCanvasElement;
        postSelectionRenderer: PostSelectionRendererElement;
        regionSelectionLayer: RegionSelectionElement;
        selectionOverlay: HTMLElement;
    };
}
export declare class GlicSelectionOverlayElement extends SelectionOverlayBaseLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isScreenshotRendered: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isResized: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isInitialSize: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        canvasHeight: {
            type: NumberConstructor;
        };
        canvasWidth: {
            type: NumberConstructor;
        };
        isPointerInside: {
            type: BooleanConstructor;
        };
        currentGesture: {
            type: ObjectConstructor;
        };
        isClosing: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        shimmerOnSegmentation: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        shimmerFadeOutComplete: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        darkenExtraScrim: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        selectionOverlayRect: {
            type: ObjectConstructor;
        };
        hideBackgroundImageCanvas: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        sidePanelOpened: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        activeRegionId: {
            type: StringConstructor;
        };
        screenshotDataUri: {
            type: StringConstructor;
        };
        enableRegionSelectedGlow: {
            type: BooleanConstructor;
        };
        enableBorderGlow: {
            type: BooleanConstructor;
        };
        disableShimmer: {
            type: BooleanConstructor;
        };
        showFloatingPrompt: {
            type: BooleanConstructor;
        };
        floatingPromptStyle: {
            type: StringConstructor;
        };
        activeSelection: {
            type: ObjectConstructor;
        };
        suggestedActions: {
            type: ArrayConstructor;
        };
        enableSelectionOverlayPrompt: {
            type: BooleanConstructor;
        };
        enableSelectionOverlayPromptBox: {
            type: BooleanConstructor;
        };
        hideHandles: {
            type: BooleanConstructor;
        };
        disableMultiSelect: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        skipIntroAnimation: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasPromptText: {
            type: BooleanConstructor;
        };
        sidePanelOpen: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor screenshotDataUri: string;
    accessor enableRegionSelectedGlow: boolean;
    accessor enableBorderGlow: boolean;
    accessor disableShimmer: boolean;
    accessor showFloatingPrompt: boolean;
    accessor floatingPromptStyle: string;
    accessor activeSelection: PostSelectionBoundingBox | null;
    accessor suggestedActions: SuggestedAction[];
    accessor enableSelectionOverlayPrompt: boolean;
    accessor enableSelectionOverlayPromptBox: boolean;
    accessor hideHandles: boolean;
    accessor disableMultiSelect: boolean;
    accessor skipIntroAnimation: boolean;
    accessor hasPromptText: boolean;
    accessor sidePanelOpen: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    get selectionElements(): {
        backgroundImageCanvas: HTMLCanvasElement;
        cursor: HTMLElement;
        initialFlashScrim: HTMLElement;
        overlayShimmerCanvas: OverlayShimmerCanvasElement;
        postSelectionRenderer: PostSelectionRendererElement;
        regionSelectionLayer: RegionSelectionElement;
        selectionOverlay: HTMLElement;
    };
    protected updateCanvasSize(containerWidth: number, containerHeight: number): void;
    private floatingPromptResizeObserver_;
    private updateThemeColors;
    private get inlineFulfillmentHost_();
    private shownInlineAction_;
    private replacedChipsRowHeight_;
    private clearInlineFulfillment_;
    private suggestedActionsListenerRouter_;
    private fetchSuggestedActions;
    protected get defaultCursorIconUrl(): string;
    private updateFloatingPromptPosition;
    handleGestureStart(): void;
    protected handleGestureDrag(event: PointerEvent): void;
    protected handleGestureEnd(): void;
    protected onPromptInput(event: Event): void;
    protected onInputKeydown(event: KeyboardEvent): void;
    protected onSubmitPromptClick(): void;
    private submitPromptInput_;
    protected onSuggestedActionClick(e: Event): Promise<void>;
    protected onInlineFulfillmentCloseClick(): void;
    protected submitPrompt(prompt: string): void;
    protected onPromptPointerdown(event: PointerEvent): void;
    protected onSettingsClick(event: Event): void;
    protected getActionIconClass(icon: SuggestedActionIcon): string;
    getOverlayBorderGlow(): OverlayBorderGlowElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'glic-selection-overlay': GlicSelectionOverlayElement;
    }
}
