import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import './check_mark_wrapper.js';
import '/strings.m.js';
import type { SpHeadingElement } from 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import type { CrToggleElement } from 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import type { CrTooltipElement } from 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { BackgroundCollection, CollectionImage } from './customize_chrome.mojom-webui.js';
export declare const CHROME_THEME_ELEMENT_ID = "CustomizeChromeUI::kChromeThemeElementId";
export declare const CHROME_THEME_BACK_ELEMENT_ID = "CustomizeChromeUI::kChromeThemeBackElementId";
declare const ThemesElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export interface ThemesElement {
    $: {
        refreshDailyToggle: CrToggleElement;
        heading: SpHeadingElement;
        themeTooltip: CrTooltipElement;
    };
}
export declare class ThemesElement extends ThemesElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedCollection: {
            type: ObjectConstructor;
        };
        header_: {
            type: StringConstructor;
        };
        imageErrorDetectionEnabled_: {
            type: BooleanConstructor;
        };
        isRefreshToggleChecked_: {
            type: BooleanConstructor;
        };
        theme_: {
            type: ObjectConstructor;
        };
        themes_: {
            type: ArrayConstructor;
        };
    };
    accessor selectedCollection: BackgroundCollection | null;
    protected accessor header_: string;
    protected accessor imageErrorDetectionEnabled_: boolean;
    protected accessor isRefreshToggleChecked_: boolean;
    private accessor theme_;
    protected accessor themes_: CollectionImage[];
    private apiProxy_;
    private previewImageLoadStartEpoch_;
    private setThemeListenerId_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    focusOnBackButton(): void;
    private onThemesRendered_;
    protected shouldShowTheme_(itemLoaded: boolean): boolean;
    protected onPreviewImageLoad_(e: Event): void;
    protected onPreviewImageError_(): void;
    private onCollectionChange_;
    protected onBackButtonClick_(): void;
    protected onThemeClick_(e: Event): void;
    private computeIsRefreshToggleChecked_;
    protected onRefreshDailyToggleChange_(e: CustomEvent<boolean>): void;
    protected isThemeSelected_(url: string): boolean;
    protected onThemeFocus_(e: Event): void;
    protected onThemeBlur_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-themes': ThemesElement;
    }
}
export {};
