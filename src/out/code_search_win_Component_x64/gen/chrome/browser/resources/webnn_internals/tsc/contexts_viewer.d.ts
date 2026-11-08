import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { WebNNExecutionProviderDetails } from './webnn_service_introspection.mojom-webui.js';
export declare class WebnnInternalsContextsViewerElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        contexts_: {
            type: ArrayConstructor;
        };
    };
    private listenerIds_;
    protected accessor contexts_: Array<{
        contextId: string;
        contextBackend: string;
        executionProviders: WebNNExecutionProviderDetails[];
    }>;
    private proxy_;
    connectedCallback(): void;
    private onUpdateExistingContexts_;
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'webnn-internals-contexts-viewer': WebnnInternalsContextsViewerElement;
    }
}
