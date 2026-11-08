import type { //
WebClientHandlerRemote, //
WebClientInitialState } from '../../glic.mojom-webui.js';
import type { GlicBrowserHost, ScrollToParams } from '../../glic_api/glic_api.js';
export declare class GlicBrowserHostAnnotation implements Partial<GlicBrowserHost> {
    private annotationHandler?;
    private handler?;
    initialize(initialState: WebClientInitialState, handler: WebClientHandlerRemote): void;
    destroyAnnotation(): void;
    scrollTo?(params: ScrollToParams): Promise<void>;
    dropScrollToHighlight?(): void;
    private getAnnotationHandler;
}
