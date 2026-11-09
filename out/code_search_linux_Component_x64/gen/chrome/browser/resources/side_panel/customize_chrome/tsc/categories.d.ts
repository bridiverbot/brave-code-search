import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './check_mark_wrapper.js';
import '/strings.m.js';
import './wallpaper_search/wallpaper_search_tile.js';
import type { SpHeadingElement } from 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { BackgroundCollection } from './customize_chrome.mojom-webui.js';
export declare enum CategoryType {
    NONE = 0,
    CLASSIC = 1,
    LOCAL = 2,
    COLOR = 3,
    COLLECTION = 4,
    WALLPAPER_SEARCH = 5
}
export declare const CHROME_THEME_COLLECTION_ELEMENT_ID = "CustomizeChromeUI::kChromeThemeCollectionElementId";
export declare const CHANGE_CHROME_THEME_CLASSIC_ELEMENT_ID = "CustomizeChromeUI::kChangeChromeThemeClassicElementId";
export interface SelectedCategory {
    type: CategoryType;
    collectionId?: string;
}
declare const CategoriesElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface CategoriesElement {
    $: {
        chromeWebStoreTile: HTMLElement;
        classicChromeTile: HTMLElement;
        heading: SpHeadingElement;
        uploadImageTile: HTMLElement;
    };
}
export declare class CategoriesElement extends CategoriesElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        collections_: {
            type: ArrayConstructor;
        };
        theme_: {
            type: ObjectConstructor;
        };
        selectedCategory_: {
            type: ObjectConstructor;
        };
        isClassicChromeSelected_: {
            type: BooleanConstructor;
        };
        isLocalImageSelected_: {
            type: BooleanConstructor;
        };
        isWallpaperSearchSelected_: {
            type: BooleanConstructor;
        };
        wallpaperSearchEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor collections_: BackgroundCollection[];
    private accessor selectedCategory_;
    private accessor theme_;
    protected accessor isClassicChromeSelected_: boolean;
    protected accessor isLocalImageSelected_: boolean;
    protected accessor isWallpaperSearchSelected_: boolean;
    protected accessor wallpaperSearchEnabled_: boolean;
    protected imageErrorDetectionEnabled_: boolean;
    private apiProxy_;
    private previewImageLoadStartEpoch_;
    private setThemeListenerId_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    focusOnBackButton(): void;
    private onCollectionsRendered_;
    protected shouldShowCollection_(itemLoaded: boolean): boolean;
    protected onPreviewImageLoad_(e: Event): void;
    protected onPreviewImageError_(e: Event): void;
    private computeSelectedCategory_;
    protected isCollectionSelected_(id: string): boolean;
    protected onClassicChromeClick_(): void;
    protected onWallpaperSearchClick_(): void;
    protected onUploadImageClick_(): Promise<void>;
    protected onCollectionClick_(e: Event): void;
    protected onChromeWebStoreClick_(): void;
    protected onBackButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-categories': CategoriesElement;
    }
}
export {};
