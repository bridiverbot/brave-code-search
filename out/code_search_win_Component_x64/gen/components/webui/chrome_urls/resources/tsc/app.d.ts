import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Url } from 'chrome://resources/mojo/url/mojom/url.mojom-webui.js';
import type { WebuiUrlInfo } from './chrome_urls.mojom-webui.js';
export declare const INTERNAL_DEBUG_PAGES_HASH: string;
export declare class ChromeUrlsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        debugPagesButtonDisabled_: {
            type: BooleanConstructor;
        };
        internalUrlInfos_: {
            type: ArrayConstructor;
        };
        webuiUrlInfos_: {
            type: ArrayConstructor;
        };
        commandUrls_: {
            type: ArrayConstructor;
        };
        internalUisEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor debugPagesButtonDisabled_: boolean;
    protected accessor webuiUrlInfos_: WebuiUrlInfo[];
    protected accessor internalUrlInfos_: WebuiUrlInfo[];
    protected accessor commandUrls_: Url[];
    protected accessor internalUisEnabled_: boolean;
    protected tracker_: EventTracker;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private fetchUrls_;
    private onHashChanged_;
    protected getDebugPagesEnabledText_(): string;
    protected getDebugPagesToggleButtonLabel_(): string;
    protected onToggleDebugPagesClick_(): Promise<void>;
    protected isInternalUiEnabled_(info: WebuiUrlInfo): boolean;
    protected isChromeUrlsUrl_(info: WebuiUrlInfo): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'chrome-urls-app': ChromeUrlsAppElement;
    }
}
