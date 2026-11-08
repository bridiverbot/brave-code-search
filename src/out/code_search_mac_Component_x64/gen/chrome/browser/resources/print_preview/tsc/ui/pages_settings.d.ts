import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import './print_preview_shared.css.js';
import './settings_section.js';
import '/strings.m.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare enum PagesValue {
    ALL = 0,
    ODDS = 1,
    EVENS = 2,
    CUSTOM = 3
}
/**
 * A regular expression indicating every character that is accepted as a comma.
 * This list is partially derived from Unicode tables and partially from the
 * translations of IDS_PRINT_PREVIEW_EXAMPLE_PAGE_RANGE_TEXT: Chromium needs to
 * actually accept every example that it provides the user.
 *
 * , U+002C COMMA
 * · U+00B7 MIDDLE DOT aka GEORGIAN COMMA
 * ՝ U+055D ARMENIAN COMMA
 * ، U+060C ARABIC COMMA
 * ༔ U+0F14 TIBETAN MARK GTER TSHEG aka TIBETAN COMMA
 * ၊ U+104A MYANMAR SIGN LITTLE SECTION
 * ፣ U+1363 ETHIOPIC COMMA
 * ᠂ U+1802 MONGOLIAN COMMA
 * ᠈ U+1808 MONGOLIAN MANCHU COMMA
 * 、 U+3001 IDEOGRAPHIC COMMA
 */
export declare const COMMA_REGEX: RegExp;
export interface PrintPreviewPagesSettingsElement {
    $: {
        pageSettingsCustomInput: CrInputElement;
    };
}
declare const PrintPreviewPagesSettingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./select_mixin.js").SelectMixinInterface) & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface) & (new (...args: any[]) => import("./input_mixin.js").InputMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class PrintPreviewPagesSettingsElement extends PrintPreviewPagesSettingsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
        };
        pageCount: {
            type: NumberConstructor;
        };
        controlsDisabled_: {
            type: BooleanConstructor;
        };
        errorState_: {
            type: NumberConstructor;
            reflect: boolean;
        };
        hasError_: {
            type: BooleanConstructor;
        };
        inputString_: {
            type: StringConstructor;
        };
        pagesToPrint_: {
            type: ArrayConstructor;
        };
        rangesToPrint_: {
            type: ArrayConstructor;
        };
        selection_: {
            type: NumberConstructor;
        };
    };
    accessor disabled: boolean;
    accessor pageCount: number;
    protected accessor controlsDisabled_: boolean;
    private accessor errorState_;
    protected accessor hasError_: boolean;
    private accessor inputString_;
    private accessor pagesToPrint_;
    private accessor rangesToPrint_;
    private accessor selection_;
    /**
     * True if the user's last valid input should be restored to the custom
     * input field. Cleared when the input is set automatically, or the user
     * manually clears the field.
     */
    private restoreLastInput_;
    /**
     * Memorizes the user's last non-custom pages setting. Used when
     * `PagesValue.ODDS` and `PagesValue.EVEN` become invalid due to a changed
     * page count.
     */
    private restorationValue_;
    /**
     * Initialize |selectedValue| in connectedCallback() since this doesn't
     * observe settings.pages, because settings.pages is not sticky.
     */
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** The cr-input field element for InputMixin. */
    getInput(): CrInputElement;
    private setSelectedValue_;
    private onInputChange_;
    onProcessSelectChange(value: string): void;
    protected onTransitionend_(): void;
    /**
     * @return Whether the controls should be disabled.
     */
    private computeControlsDisabled_;
    /**
     * Updates pages to print and error state based on the validity and
     * current value of the input.
     */
    private updatePagesToPrint_;
    private computeRangesToPrint_;
    /**
     * @return The final page numbers, reflecting N-up setting.
     *     Page numbers are 1 indexed, since these numbers are displayed to the
     *     user.
     */
    private getNupPages_;
    /**
     * Updates the model with pages and validity, and adds error styling if
     * needed.
     */
    private onRangeChange_;
    protected onSelectBlur_(event: FocusEvent): void;
    protected onCustomInputBlur_(): Promise<void>;
    /**
     * @return Message to show as hint.
     */
    protected getHintMessage_(): string;
    /**
     * @return Whether the document being printed has only one page.
     */
    protected isSinglePage_(): boolean;
    /**
     * @return Whether to disable the custom input.
     */
    protected inputDisabled_(): boolean;
    /**
     * @return Whether to display the custom input.
     */
    protected shouldShowInput_(): boolean;
    /**
     * @return A string representing the full page range.
     */
    private getAllPagesString_;
    private onSelectionChange_;
    private onPageCountChange_;
}
export type PagesSettingsElement = PrintPreviewPagesSettingsElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-pages-settings': PrintPreviewPagesSettingsElement;
    }
}
export {};
