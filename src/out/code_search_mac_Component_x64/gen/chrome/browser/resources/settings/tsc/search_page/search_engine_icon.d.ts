/**
 * @fileoverview
 * 'settings-search-engine-icon' is the icon for a search engine in the settings
 * page. It prioritizes showing an existing favicon, then tries downloading an
 * image, and uses a generic favicon as final fallback.
 */
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '../site_favicon.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchEngine } from './search_engines_browser_proxy.js';
export interface SettingsSearchEngineIconElement {
    $: {
        downloadedIcon: HTMLImageElement;
    };
}
export declare class SettingsSearchEngineIconElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        engine: {
            type: ObjectConstructor;
        };
        showDownloadedIcon_: {
            type: BooleanConstructor;
        };
    };
    accessor engine: SearchEngine | null;
    protected accessor showDownloadedIcon_: boolean;
    private timeoutId_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getIconUrl_(): string;
    private onEngineChanged_;
    protected onDownloadedIconLoad_(): void;
    protected onDownloadedIconError_(): void;
    protected shouldShowDownloadedIcon_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-search-engine-icon': SettingsSearchEngineIconElement;
    }
}
