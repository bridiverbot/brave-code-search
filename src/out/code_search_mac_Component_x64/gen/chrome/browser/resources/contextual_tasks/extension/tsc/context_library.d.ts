import 'chrome://resources/cr_components/composebox/composebox_favicon_group.js';
import type { ComposeboxFaviconGroupElement } from 'chrome://resources/cr_components/composebox/composebox_favicon_group.js';
import { ComposeboxProxyImpl } from 'chrome://resources/cr_components/composebox/composebox_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { CSSResultGroup, PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { TabInfo } from 'chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
export declare function setComposeboxProxyForTesting(proxy: ComposeboxProxyImpl): void;
export interface ContextLibraryElement {
    $: {
        faviconGroup: ComposeboxFaviconGroupElement;
    };
}
export declare class ContextLibraryElement extends CrLitElement {
    static get is(): string;
    static get styles(): CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        tabs: {
            type: ArrayConstructor;
        };
        submittedTabIds: {
            type: ObjectConstructor;
        };
        darkMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor tabs: TabInfo[];
    accessor submittedTabIds: Set<number>;
    accessor darkMode: boolean;
    private isTrackingFaviconGroup_;
    private resizeObserver_;
    private listenerIds_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private updateFaviconTracking_;
    protected onWaitForTabLoad_(e: CustomEvent<{
        tabId: number;
        onTabLoaded: (url?: string) => void;
    }>): Promise<void>;
    protected isDarkModeEnabled_(): boolean;
}
declare global {
    interface Window {
        requestResize?: () => void;
    }
    interface HTMLElementTagNameMap {
        'context-library': ContextLibraryElement;
    }
}
