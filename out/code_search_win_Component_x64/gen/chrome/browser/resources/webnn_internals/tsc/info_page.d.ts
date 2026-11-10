import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { WebNNExecutionProviderDetails } from './webnn_service_introspection.mojom-webui.js';
export declare class WebnnInternalsInfoPageElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        availableExecutionProviders_: {
            type: ArrayConstructor;
        };
    };
    protected accessor availableExecutionProviders_: WebNNExecutionProviderDetails[];
    private listenerIds_;
    private proxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onForceOrtEnvCreationClick_(): Promise<void>;
    private onUpdateAvailableExecutionProvidersDetails_;
}
declare global {
    interface HTMLElementTagNameMap {
        'webnn-internals-info-page': WebnnInternalsInfoPageElement;
    }
}
