import './theme_snapshot.js';
import './hover_button.js';
import '/strings.m.js';
import 'chrome://resources/cr_components/customize_color_scheme_mode/customize_color_scheme_mode.js';
import 'chrome://resources/cr_components/theme_color_picker/theme_color_picker.js';
import 'chrome://resources/cr_components/managed_dialog/managed_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import type { CrToggleElement } from 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { NewTabPageType } from './customize_chrome.mojom-webui.js';
import type { Theme } from './customize_chrome.mojom-webui.js';
export interface AppearanceElement {
    $: {
        chromeColors: HTMLElement;
        editThemeButton: HTMLButtonElement;
        themeSnapshot: HTMLElement;
        setClassicChromeButton: HTMLButtonElement;
        thirdPartyThemeLinkButton: HTMLButtonElement;
        followThemeToggle: HTMLElement;
        followThemeToggleControl: CrToggleElement;
        uploadedImageButton: HTMLButtonElement;
        searchedImageButton: HTMLButtonElement;
    };
}
declare const AppearanceElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class AppearanceElement extends AppearanceElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        theme_: {
            type: ObjectConstructor;
        };
        editThemeButtonText_: {
            type: StringConstructor;
        };
        thirdPartyThemeId_: {
            type: StringConstructor;
            reflect: boolean;
        };
        thirdPartyThemeName_: {
            type: StringConstructor;
            reflect: boolean;
        };
        showBottomDivider_: {
            type: BooleanConstructor;
        };
        showClassicChromeButton_: {
            type: BooleanConstructor;
        };
        showColorPicker_: {
            type: BooleanConstructor;
        };
        showDeviceThemeToggle_: {
            type: BooleanConstructor;
        };
        showThemeSnapshot_: {
            type: BooleanConstructor;
        };
        showUploadedImageButton_: {
            type: BooleanConstructor;
        };
        showSearchedImageButton_: {
            type: BooleanConstructor;
        };
        showManagedButton_: {
            type: BooleanConstructor;
        };
        showManagedDialog_: {
            type: BooleanConstructor;
        };
        showEditTheme_: {
            type: BooleanConstructor;
        };
        managedByName_: {
            type: StringConstructor;
        };
        managedByDesc_: {
            type: StringConstructor;
        };
        newTabPageType_: {
            type: NumberConstructor;
        };
        wallpaperSearchButtonEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        wallpaperSearchEnabled_: {
            type: BooleanConstructor;
        };
        footerEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor theme_: Theme | undefined;
    protected accessor editThemeButtonText_: string;
    protected accessor thirdPartyThemeId_: string | null;
    protected accessor thirdPartyThemeName_: string | null;
    protected accessor showBottomDivider_: boolean;
    protected accessor showClassicChromeButton_: boolean;
    protected accessor showColorPicker_: boolean;
    protected accessor showDeviceThemeToggle_: boolean;
    protected accessor showThemeSnapshot_: boolean;
    protected accessor showUploadedImageButton_: boolean;
    protected accessor showSearchedImageButton_: boolean;
    protected accessor showManagedButton_: boolean;
    protected accessor showManagedDialog_: boolean;
    protected accessor wallpaperSearchButtonEnabled_: boolean;
    private accessor wallpaperSearchEnabled_;
    private accessor footerEnabled_;
    protected accessor newTabPageType_: NewTabPageType;
    protected accessor showEditTheme_: boolean;
    protected accessor managedByName_: string;
    protected accessor managedByDesc_: string;
    private listenerIds_;
    private apiProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    focusOnThemeButton(): void;
    private computeEditThemeButtonText_;
    private computeThirdPartyThemeId_;
    private computeThirdPartyThemeName_;
    private computeShowBottomDivider_;
    private computeShowClassicChromeButton_;
    private computeShowColorPicker_;
    private computeShowDeviceThemeToggle_;
    private computeShowThemeSnapshot_;
    private computeShowUploadedImageButton_;
    private computeShowSearchedImageButton_;
    private computeShowManagedButton_;
    protected onThemeSnapshotKeydown_(e: KeyboardEvent): void;
    protected onEditThemeClick_(): void;
    protected onWallpaperSearchClick_(): void;
    protected onThirdPartyThemeLinkButtonClick_(): void;
    protected onUploadedImageButtonClick_(): void;
    protected onSearchedImageButtonClick_(): void;
    protected onSetClassicChromeClick_(): void;
    protected onFollowThemeToggleChange_(e: CustomEvent<boolean>): void;
    protected onManagedDialogClose_(): void;
    protected onNewTabPageManageByButtonClick_(): void;
    private handleClickForManagedThemes_;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-appearance': AppearanceElement;
    }
}
export {};
