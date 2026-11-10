import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import './icons.html.js';
import type { CrMenuSelectorElement } from 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { Page } from './navigation_helper.js';
export interface ExtensionsSidebarElement {
    $: {
        sectionMenu: CrMenuSelectorElement;
        sectionsExtensions: HTMLElement;
        sectionsShortcuts: HTMLElement;
        sectionsSitePermissions: HTMLElement;
        moreExtensions: HTMLElement;
    };
}
declare const ExtensionsSidebarElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsSidebarElement extends ExtensionsSidebarElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enableEnhancedSiteControls: {
            type: BooleanConstructor;
        };
        inDevMode: {
            type: BooleanConstructor;
        };
        /**
         * The data path/page that identifies the entry to be selected in the
         * sidebar. Note that this may not match the page that's actually
         * displayed.
         */
        selectedPath_: {
            type: StringConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor enableEnhancedSiteControls: boolean;
    protected accessor selectedPath_: Page;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    accessor inDevMode: boolean;
    /**
     * The ID of the listener on |navigation|. Stored so that the
     * listener can be removed when this element is detached (happens in tests).
     */
    private navigationListener_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    private computeSelectedPath_;
    protected onLinkClick_(e: Event): void;
    protected onMoreExtensionsClick_(e: Event): void;
    protected computeDiscoverMoreText_(): TrustedHTML;
    protected showDeveloperPromo_(): boolean;
    protected computeDeveloperPromoText_(): TrustedHTML;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-sidebar': ExtensionsSidebarElement;
    }
}
export {};
