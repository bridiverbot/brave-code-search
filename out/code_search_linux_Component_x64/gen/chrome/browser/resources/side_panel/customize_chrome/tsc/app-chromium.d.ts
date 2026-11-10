import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import 'chrome://resources/cr_components/help_bubble/new_badge.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_chip/cr_chip.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './appearance.js';
import './cards.js';
import './categories.js';
import './customize_toolbar/toolbar.js';
import './footer.js';
import './tools.js';
import './shortcuts.js';
import './themes.js';
import './wallpaper_search/wallpaper_search.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { AppearanceElement } from './appearance.js';
import type { BackgroundCollection } from './customize_chrome.mojom-webui.js';
import { NewTabPageType } from './customize_chrome.mojom-webui.js';
export declare enum CustomizeChromePage {
    OVERVIEW = "overview",
    CATEGORIES = "categories",
    THEMES = "themes",
    TOOLBAR = "toolbar",
    WALLPAPER_SEARCH = "wallpaper-search"
}
declare const AppElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export interface AppElement {
    $: {
        overviewPage: HTMLElement;
        appearanceElement: AppearanceElement;
    };
}
export declare class AppElement extends AppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        page_: {
            type: StringConstructor;
        };
        modulesEnabled_: {
            type: BooleanConstructor;
        };
        selectedCollection_: {
            type: ObjectConstructor;
        };
        extensionPolicyEnabled_: {
            type: BooleanConstructor;
        };
        extensionsCardEnabled_: {
            type: BooleanConstructor;
        };
        ntpNextFeaturesEnabled_: {
            type: BooleanConstructor;
        };
        ntpNextDisablementEnabled_: {
            type: BooleanConstructor;
        };
        aimPolicyEnabled_: {
            type: BooleanConstructor;
        };
        footerEnabled_: {
            type: BooleanConstructor;
        };
        wallpaperSearchEnabled_: {
            type: BooleanConstructor;
        };
        newTabPageType_: {
            type: NumberConstructor;
        };
        showEditTheme_: {
            type: BooleanConstructor;
        };
        showFooter_: {
            type: BooleanConstructor;
        };
        showFooterForManagedBrowser_: {
            type: BooleanConstructor;
        };
        toolbarCustomizationEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor page_: CustomizeChromePage;
    protected accessor modulesEnabled_: boolean;
    protected accessor selectedCollection_: BackgroundCollection | null;
    protected accessor extensionsCardEnabled_: boolean;
    protected accessor ntpNextFeaturesEnabled_: boolean;
    protected accessor ntpNextDisablementEnabled_: boolean;
    protected accessor extensionPolicyEnabled_: boolean;
    protected accessor aimPolicyEnabled_: boolean;
    protected accessor footerEnabled_: boolean;
    protected accessor wallpaperSearchEnabled_: boolean;
    protected accessor newTabPageType_: NewTabPageType;
    protected accessor showEditTheme_: boolean;
    protected accessor showFooter_: boolean;
    protected accessor showFooterForManagedBrowser_: boolean;
    protected accessor toolbarCustomizationEnabled_: boolean;
    private listenerIds_;
    private apiProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    private onScrollToSection_;
    private onAttachedTabStateUpdated_;
    private onSetThemeEditable_;
    private onSetFooterSettings_;
    protected computeShowFooter_(): boolean;
    protected isSourceTabFirstPartyNtp_(): boolean;
    protected onBackClick_(): Promise<void>;
    protected onEditThemeClick_(): Promise<void>;
    protected onCollectionSelect_(event: CustomEvent<BackgroundCollection>): Promise<void>;
    protected onLocalImageUpload_(): Promise<void>;
    protected onWallpaperSearchClick_(): void;
    protected onWallpaperSearchSelect_(): void;
    protected onCouponsButtonClick_(): void;
    protected onWritingButtonClick_(): void;
    protected onProductivityButtonClick_(): void;
    protected onChromeWebStoreLinkClick_(e: Event): void;
    protected onToolbarCustomizationButtonClick_(): void;
    private openToolbarCustomizationPage;
    private pageSupportedOnNonFirstPartyNtps;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-app': AppElement;
    }
}
export {};
