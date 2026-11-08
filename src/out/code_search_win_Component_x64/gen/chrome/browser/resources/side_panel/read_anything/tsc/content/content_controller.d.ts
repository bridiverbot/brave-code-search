export declare const HIGHLIGHTED_LINK_CLASS = "highlighted-link";
export interface ContentListener {
    onContentStateChange(): void;
    onNewPageDrawn(): void;
    onContentChange(): void;
}
export declare enum ContentType {
    LOADING = 0,
    NO_CONTENT = 1,
    NO_SELECTABLE_CONTENT = 2,
    HAS_CONTENT = 3
}
export interface ContentState {
    type: ContentType;
    imagePath: string;
    darkImagePath: string;
    heading: string;
    subheading: string;
}
export declare class ContentController {
    private nodeStore_;
    private speechController_;
    private logger_;
    private visualBrowserProxy_;
    private contentBrowserProxy_;
    private audioBrowserProxy_;
    private readonly listeners_;
    private currentState_;
    private previousRootId_?;
    private isAwaitingTranslation_;
    private isHidingContentForTranslation_;
    private renderedTextNodes_;
    constructor();
    getState(): ContentState;
    isHidingContentForTranslation(): boolean;
    setState(type: ContentType): void;
    private applyState_;
    private setAwaitingTranslation_;
    hasContent(): boolean;
    isEmpty(): boolean;
    attemptToRedistill(): void;
    setEmpty(): void;
    private getNoContentType_;
    addListener(listener: ContentListener): void;
    onNodeWillBeDeleted(nodeId: number): void;
    updateContent(shadowRoot?: ShadowRoot): Node | null;
    updateContentForReadability(): Node | null;
    private applyReadabilityContentPostProcessing_;
    updateContentForScreen2x(shadowRoot?: ShadowRoot): Node | null;
    onRenderedTextMappingReady(): void;
    private mapBlockToAxNodes_;
    updateReadAloudState(rootNode: Node): void;
    private buildSubtree_;
    private appendChildSubtrees_;
    private setListMarker_;
    private safeParseUrl_;
    scrollToAnchor(url: string, root: ShadowRoot | Document): boolean;
    private setLinkAttributes_;
    private createTextNode_;
    updateLinks(shadowRoot?: ShadowRoot): void;
    updateLinksForReadability(root?: ParentNode): void;
    private transformLinkContainer_;
    private shouldShowLinks_;
    onSelectionChange(shadowRoot?: ShadowRoot): void;
    loadImages(): void;
    onImageDownloaded(nodeId: number): Promise<void>;
    onRenderedTextBlocksAvailable(container: HTMLElement): void;
    setEmptyIfNoTextNodesAvailable(nodes: Node[], shouldAttemptToRedistill: boolean): void;
    onImagesVisibilityChanged(container: HTMLElement, shadowRoot?: ShadowRoot): void;
    updateImages(shadowRoot?: ShadowRoot): void;
    updateAnchorsForReadability(root: ParentNode): void;
    private findStrictMatch_;
    private calculateMatchScore_;
    private isFigureSelected_;
    private updateImagesForAxTree_;
    private updateImagesForReadability_;
    private markTextNodesHiddenIfImagesHidden_;
    static getInstance(): ContentController;
    static setInstance(obj: ContentController): void;
}
