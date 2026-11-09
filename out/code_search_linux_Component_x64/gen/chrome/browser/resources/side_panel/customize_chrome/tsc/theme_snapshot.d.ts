import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Theme } from './customize_chrome.mojom-webui.js';
export declare enum CustomizeThemeType {
    CLASSIC_CHROME = "classicChrome",
    CUSTOM_THEME = "customTheme",
    UPLOADED_IMAGE = "uploadedImage"
}
/** Element used to display a snapshot of the NTP. */
export declare class ThemeSnapshotElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        theme_: {
            type: ObjectConstructor;
        };
        themeType_: {
            type: StringConstructor;
        };
    };
    protected accessor theme_: Theme | null;
    protected accessor themeType_: CustomizeThemeType | null;
    private apiProxy_;
    private setThemeListenerId_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeThemeType_;
    protected onThemeSnapshotClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-theme-snapshot': ThemeSnapshotElement;
    }
}
