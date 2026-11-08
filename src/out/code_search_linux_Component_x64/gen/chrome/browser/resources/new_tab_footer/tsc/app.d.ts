import '/strings.m.js';
import 'chrome://newtab-footer/shared/customize_buttons/customize_buttons.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Url } from 'chrome://resources/mojo/url/mojom/url.mojom-webui.js';
import { CustomizeChromeSection } from './customize_chrome.mojom-webui.js';
import type { ManagementNotice } from './new_tab_footer.mojom-webui.js';
import { NewTabPageType } from './new_tab_footer.mojom-webui.js';
export declare enum CustomizeDialogPage {
    BACKGROUNDS = "backgrounds",
    SHORTCUTS = "shortcuts",
    MODULES = "modules",
    THEMES = "themes"
}
/**
 * Customize Chrome entry points. This enum must match the numbering for
 * FooterCustomizeChromeEntryPoint in enums.xml. These values are persisted to
 * logs. Entries should not be renumbered, removed or reused.
 */
export declare enum FooterCustomizeChromeEntryPoint {
    CUSTOMIZE_BUTTON = 0,
    URL = 1,
    MAX_VALUE = 1
}
/**
 * Elements on the New Tab Footer. This enum must match the numbering for
 * FooterElement in enums.xml. These values are persisted to logs. Entries
 * should not be renumbered, removed or reused.
 */
export declare enum FooterElement {
    OTHER = 0,
    CUSTOMIZE_BUTTON = 1,
    EXTENSION_NAME = 2,
    MANAGEMENT_NOTICE = 3,
    BACKGROUND_ATTRIBUTION = 4,
    CONTEXT_MENU = 5,
    MAX_VALUE = 5
}
declare const NewTabFooterAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class NewTabFooterAppElement extends NewTabFooterAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        extensionName_: {
            type: StringConstructor;
        };
        isCustomizeActive_: {
            type: BooleanConstructor;
        };
        managementNotice_: {
            type: ObjectConstructor;
        };
        showCustomizeButtons_: {
            type: BooleanConstructor;
        };
        showCustomizeText_: {
            type: BooleanConstructor;
        };
        showExtension_: {
            type: BooleanConstructor;
        };
        ntpType_: {
            type: NumberConstructor;
        };
        backgroundAttributionLink_: {
            type: StringConstructor;
        };
        backgroundAttributionText_: {
            type: StringConstructor;
        };
        showBackgroundAttribution_: {
            type: BooleanConstructor;
        };
    };
    protected accessor extensionName_: string | null;
    protected accessor isCustomizeActive_: boolean;
    protected accessor managementNotice_: ManagementNotice | null;
    protected accessor showCustomizeButtons_: boolean;
    protected accessor showCustomizeText_: boolean;
    protected accessor showExtension_: boolean;
    protected accessor ntpType_: NewTabPageType;
    protected accessor backgroundAttributionText_: string | null;
    protected accessor backgroundAttributionLink_: Url | null;
    protected accessor showBackgroundAttribution_: boolean;
    private selectedCustomizeDialogPage_;
    private canCustomizeChrome_;
    private browserProxy_;
    private customizeButtonsBrowserProxy_;
    private setCustomizeChromeSidePanelVisibilityListener_;
    private setNtpExtensionNameListenerId_;
    private setBackgroundAttributionListener_;
    private setManagementNoticeListener_;
    private setAttachedTabStateUpdatedListener_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private computeShowCustomizeButtons_;
    private computeShowExtension_;
    private computeShowBackgroundAttribution_;
    protected onContextmenu_(e: MouseEvent): void;
    protected onExtensionNameClick_(e: Event): void;
    protected onManagementNoticeClick_(e: Event): void;
    protected onBackgroundAttributionClick_(e: Event): void;
    protected onCustomizeClick_(): void;
    /**
     * Public for testing. Returns the section being shown to allow test
     * verification.
     */
    setCustomizeChromeSidePanelVisible(visible: boolean): CustomizeChromeSection;
    setSelectedCustomizeDialogPageForTesting(page: CustomizeDialogPage): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'new-tab-footer-app': NewTabFooterAppElement;
    }
}
export {};
