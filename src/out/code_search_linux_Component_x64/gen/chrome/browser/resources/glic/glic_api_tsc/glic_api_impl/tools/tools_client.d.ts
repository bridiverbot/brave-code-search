import type { WebClientHandlerRemote, WebClientInitialState } from '../../glic.mojom-webui.js';
import type { GlicBrowserHost, GlicToolsHost } from '../../glic_api/glic_api.js';
export declare class GlicBrowserHostTools implements Partial<GlicBrowserHost> {
    private toolsRemote?;
    private toolsInstance?;
    initialize(initialState: WebClientInitialState, handler?: WebClientHandlerRemote): void;
    destroyTools(): void;
    tools?(): GlicToolsHost;
}
