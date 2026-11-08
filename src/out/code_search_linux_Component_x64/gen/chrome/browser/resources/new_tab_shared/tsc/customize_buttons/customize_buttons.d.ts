import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './icons.html.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface CustomizeButtonsElement {
    $: {
        customizeButton: CrButtonElement;
    };
}
export declare class CustomizeButtonsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        infoShownToUser: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        modulesShownToUser: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        showBackgroundImage: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        showCustomize: {
            type: BooleanConstructor;
        };
        showCustomizeChromeText: {
            type: BooleanConstructor;
        };
        showShadow: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        showWallpaperSearch: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        showWallpaperSearchButton: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        wallpaperSearchButtonAnimationEnabled: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor infoShownToUser: boolean;
    accessor modulesShownToUser: boolean;
    accessor showBackgroundImage: boolean;
    accessor showCustomize: boolean;
    accessor showCustomizeChromeText: boolean;
    accessor showShadow: boolean;
    accessor showWallpaperSearch: boolean;
    accessor showWallpaperSearchButton: boolean;
    accessor wallpaperSearchButtonAnimationEnabled: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    connectedCallback(): void;
    protected onCustomizeClick_(): void;
    protected onWallpaperSearchClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-customize-buttons': CustomizeButtonsElement;
    }
}
