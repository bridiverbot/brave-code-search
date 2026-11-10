/**
 * @fileoverview 'site-favicon' is the section to display the favicon given the
 * |url| which can be used to download favicon. If downloading fails |origin|
 * will be used as a fallback to obtain the favicon from cache.
 */
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface SiteFaviconElement {
    $: {
        favicon: HTMLElement;
        downloadedFavicon: HTMLImageElement;
    };
}
export declare class SiteFaviconElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        domain: StringConstructor;
        url: {
            type: StringConstructor;
            observer: string;
        };
        showDownloadedIcon_: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    domain: string;
    url: string;
    private showDownloadedIcon_;
    ready(): void;
    private getBackgroundImage_;
    private onLoadSuccess_;
    private onLoadError_;
    private onUrlChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-favicon': SiteFaviconElement;
    }
}
