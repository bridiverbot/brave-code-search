import type { Options as TrackedElementOptions } from '//resources/js/tracked_element/tracked_element_manager.js';
import type { RectF } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import type { HelpBubbleElement } from './help_bubble.js';
import type { HelpBubbleParams } from './help_bubble.mojom-webui.js';
export type Trackable = string | string[] | HTMLElement | Element;
export declare const ANCHOR_HIGHLIGHT_CLASS = "help-anchor-highlight";
export interface HelpBubbleOptions extends TrackedElementOptions {
    containerElement?: HTMLElement;
    onHelpBubbleShown?: () => void;
    onHelpBubbleHidden?: () => void;
}
/**
 * HelpBubble controller class
 * - There should exist only one HelpBubble instance for each nativeId
 * - The mapping between nativeId and htmlId is held within this instance
 * - The rest of the parameters are passed to createBubble
 */
export declare class HelpBubbleController {
    private nativeId_;
    private root_;
    private anchor_;
    private bubble_;
    private options_;
    /**
     * Whether a help bubble (webui or external) is being shown for this
     * controller
     */
    private isBubbleShowing_;
    /** Keep track of last known anchor visibility status. */
    private isAnchorVisible_;
    /** Keep track of last known anchor bounds. */
    private lastAnchorBounds_;
    private isExternal_;
    constructor(nativeId: string, root: ShadowRoot);
    isBubbleShowing(): boolean;
    canShowBubble(): boolean;
    hasBubble(): boolean;
    getBubble(): HelpBubbleElement | null;
    hasAnchor(): boolean;
    getAnchor(): HTMLElement | null;
    getNativeId(): string;
    /** Returns the original options passed during registration. */
    getOptions(): HelpBubbleOptions;
    getPadding(): import("//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js").InsetsFMojoType;
    getAnchorVisibility(): boolean;
    getLastAnchorBounds(): import("//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js").RectFMojoType;
    updateAnchorVisibility(isVisible: boolean, bounds: RectF): boolean;
    isAnchorFixed(): boolean;
    isExternal(): boolean;
    updateExternalShowingStatus(isShowing: boolean): void;
    track(trackable: Trackable, options: HelpBubbleOptions): boolean;
    deepQuery(selectors: string[]): HTMLElement | null;
    show(): void;
    hide(): void;
    createBubble(params: HelpBubbleParams): HelpBubbleElement;
    /**
     * Styles the anchor element to appear highlighted while the bubble is open,
     * or removes the highlight.
     */
    private setAnchorHighlight_;
}
