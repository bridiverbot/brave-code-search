import '../check_mark_wrapper.js';
import './combobox/customize_chrome_combobox.js';
import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_feedback_buttons/cr_feedback_buttons.js';
import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_loading_gradient/cr_loading_gradient.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import 'chrome://resources/cr_components/theme_color_picker/theme_hue_slider_dialog.js';
import type { SpHeadingElement } from 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import type { ThemeHueSliderDialogElement } from 'chrome://resources/cr_components/theme_color_picker/theme_hue_slider_dialog.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrFeedbackButtonsElement } from 'chrome://resources/cr_elements/cr_feedback_buttons/cr_feedback_buttons.js';
import { CrFeedbackOption } from 'chrome://resources/cr_elements/cr_feedback_buttons/cr_feedback_buttons.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Token } from 'chrome://resources/mojo/mojo/public/mojom/base/token.mojom-webui.js';
import type { DescriptorB, InspirationDescriptors, InspirationGroup, WallpaperSearchResult } from '../wallpaper_search.mojom-webui.js';
import { WallpaperSearchStatus } from '../wallpaper_search.mojom-webui.js';
import type { ComboboxGroup, ComboboxItem, CustomizeChromeComboboxElement } from './combobox/customize_chrome_combobox.js';
export declare const DESCRIPTOR_D_VALUE: ColorDescriptor[];
interface ColorDescriptor {
    hex: string;
    name: string;
}
interface ComboxItems {
    a: ComboboxGroup[];
    b: ComboboxItem[];
    c: ComboboxItem[];
}
export interface ErrorState {
    title: string;
    description: string;
    callToAction: string;
}
export interface WallpaperSearchResponse {
    status: WallpaperSearchStatus;
    results: WallpaperSearchResult[];
}
export interface WallpaperSearchElement {
    $: {
        customColorContainer: HTMLElement;
        deleteSelectedHueButton: HTMLElement;
        descriptorComboboxA: CustomizeChromeComboboxElement;
        descriptorComboboxB: CustomizeChromeComboboxElement;
        descriptorComboboxC: CustomizeChromeComboboxElement;
        feedbackButtons: CrFeedbackButtonsElement;
        heading: SpHeadingElement;
        historyCard: HTMLElement;
        hueSlider: ThemeHueSliderDialogElement;
        loading: HTMLElement;
        submitButton: CrButtonElement;
        wallpaperSearch: HTMLElement;
    };
}
declare const WallpaperSearchElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class WallpaperSearchElement extends WallpaperSearchElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        comboboxItems_: {
            type: ObjectConstructor;
        };
        descriptors_: {
            type: ObjectConstructor;
        };
        descriptorD_: {
            type: ArrayConstructor;
        };
        errorState_: {
            type: ObjectConstructor;
        };
        expandedCategories_: {
            type: ObjectConstructor;
        };
        loading_: {
            type: BooleanConstructor;
        };
        history_: {
            type: ArrayConstructor;
        };
        inspirationCardEnabled_: {
            type: BooleanConstructor;
        };
        inspirationGroups_: {
            type: ArrayConstructor;
        };
        inspirationToggleIcon_: {
            type: StringConstructor;
        };
        openInspirations_: {
            type: BooleanConstructor;
        };
        resultsDescriptors_: {
            type: ObjectConstructor;
        };
        results_: {
            type: ArrayConstructor;
        };
        selectedFeedbackOption_: {
            type: NumberConstructor;
        };
        selectedDescriptorA_: {
            type: StringConstructor;
        };
        selectedDescriptorB_: {
            type: StringConstructor;
        };
        selectedDescriptorC_: {
            type: StringConstructor;
        };
        selectedDescriptorD_: {
            type: ObjectConstructor;
        };
        selectedHue_: {
            type: NumberConstructor;
        };
        shouldShowHistory_: {
            type: BooleanConstructor;
        };
        shouldShowInspiration_: {
            type: BooleanConstructor;
        };
        status_: {
            type: NumberConstructor;
        };
        theme_: {
            type: ObjectConstructor;
        };
    };
    protected accessor comboboxItems_: ComboxItems;
    private accessor descriptors_;
    protected accessor descriptorD_: string[];
    private errorCallback_;
    protected accessor errorState_: ErrorState | null;
    private accessor expandedCategories_;
    protected accessor history_: WallpaperSearchResult[];
    protected accessor inspirationGroups_: InspirationGroup[];
    protected accessor inspirationCardEnabled_: boolean;
    protected accessor inspirationToggleIcon_: string;
    protected accessor loading_: boolean;
    protected accessor openInspirations_: boolean;
    protected accessor results_: WallpaperSearchResult[];
    private accessor resultsDescriptors_;
    private resultsPromises_;
    private selectedDefaultColor_;
    protected accessor selectedDescriptorA_: string | undefined;
    protected accessor selectedDescriptorB_: string | undefined;
    protected accessor selectedDescriptorC_: string | undefined;
    private accessor selectedDescriptorD_;
    protected accessor selectedFeedbackOption_: CrFeedbackOption;
    protected accessor selectedHue_: number | null;
    protected accessor shouldShowHistory_: boolean;
    protected accessor shouldShowInspiration_: boolean;
    private accessor status_;
    private accessor theme_;
    private apiProxy_;
    private wallpaperSearchProxy_;
    private setThemeListenerId_;
    private setHistoryListenerId_;
    private loadingUiResizeObserver_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    focusOnBackButton(): void;
    private computeErrorState_;
    private computeInspirationToggleIcon_;
    private computeShouldShowHistory_;
    private computeShouldShowInspiration_;
    private expandCategoryForDescriptorA_;
    private fetchDescriptors_;
    /**
     * The loading gradient is rendered using a SVG clip path. As typical CSS
     * layouts such as grid cannot apply to clip paths, this ResizeObserver
     * callback resizes the loading tiles based on the current width of the
     * side panel.
     */
    private generateLoadingUi_;
    protected getColorLabel_(defaultColor: string): string;
    protected isCustomColorSelected_(): boolean;
    protected getInspirationDescriptorsCheckedStatus_(groupDescriptors: InspirationDescriptors): string;
    protected getInspirationGroupTitle_(descriptors: InspirationDescriptors): string;
    protected getHistoryResultAriaLabel_(index: number, result: WallpaperSearchResult): string;
    protected getResultAriaLabel_(index: number): string;
    protected isBackgroundSelected_(id: Token): boolean;
    protected isColorSelected_(defaultColor: string): boolean;
    protected isOptionSelectedInDescriptorB_(option: DescriptorB): boolean;
    protected onBackButtonClick_(): void;
    protected onButtonKeydown_(e: KeyboardEvent): void;
    protected onComboboxCategoryClick_(e: Event): void;
    protected onCustomColorClick_(): void;
    protected onErrorClick_(): void;
    protected onDefaultColorClick_(e: Event): void;
    protected onMoodDescriptorValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onStyleDescriptorValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onSubjectDescriptorValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onFeedbackSelectedOptionChanged_(e: CustomEvent<{
        value: CrFeedbackOption;
    }>): void;
    protected onHistoryImageClick_(e: Event): void;
    protected onInspirationGroupTitleClick_(e: Event): void;
    protected onInspirationToggleClick_(): void;
    protected onInspirationImageClick_(e: Event): void;
    protected onLearnMoreClick_(e: Event): void;
    protected onSelectedHueChanged_(): void;
    protected onSelectedHueDeleteClick_(): void;
    protected onSearchClick_(): Promise<void>;
    private onResultsRender_;
    protected onResultClick_(e: Event): void;
    private onStatusChange_;
    private selectDescriptorsFromInspirationGroup_;
    protected shouldShowDeleteSelectedHueButton_(): boolean;
    protected shouldShowFeedbackButtons_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-wallpaper-search': WallpaperSearchElement;
    }
}
export {};
