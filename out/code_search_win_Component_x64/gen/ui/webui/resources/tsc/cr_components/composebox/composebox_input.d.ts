import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export declare const NON_BREAKING_SPACE = "\u00A0";
export declare const CHIP_CLASS = "aim-chip";
export declare const CHIP_LABEL_CLASS = "chip-label";
export declare const CHIP_DATASET_ID = "chipId";
export declare const CHIP_DATASET_TEXT = "chipText";
export declare const CHIP_DATASET_EMOJI = "chipEmoji";
export declare const CHIP_DATASET_ICON_URL = "chipIconUrl";
export declare const chipSanitizer: Sanitizer;
export declare function getChipPolicyForTesting(): Pick<TrustedTypePolicy, 'createHTML'> | undefined;
export interface ComposeboxChip {
    id?: string;
    text: string;
    description?: string;
    emoji?: string;
    iconUrl?: string;
}
declare const ComposeboxInputElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ComposeboxInputElement extends ComposeboxInputElement_base {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        composeboxSkillsEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disableCaretColorAnimation: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showDropdown: {
            type: BooleanConstructor;
        };
        inputPlaceholder: {
            type: StringConstructor;
        };
        input: {
            type: StringConstructor;
        };
        smartComposeEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        smartComposeInlineHint: {
            type: StringConstructor;
        };
        isCollapsible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        submitEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        entrypointName: {
            type: StringConstructor;
            reflect: boolean;
        };
        cancelButtonTitle: {
            type: StringConstructor;
        };
        hideCancel: {
            type: BooleanConstructor;
        };
        inlineActionButtons: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isBackspacing_: {
            type: BooleanConstructor;
        };
    };
    accessor composeboxSkillsEnabled: boolean;
    accessor disableCaretColorAnimation: boolean;
    accessor showDropdown: boolean;
    accessor inputPlaceholder: string;
    accessor input: string;
    accessor smartComposeEnabled: boolean;
    accessor smartComposeInlineHint: string;
    accessor isCollapsible: boolean;
    accessor submitEnabled: boolean;
    accessor entrypointName: string;
    accessor cancelButtonTitle: string;
    accessor hideCancel: boolean;
    accessor inlineActionButtons: boolean;
    accessor isBackspacing_: boolean;
    private resizeObserver_;
    private smartComposeResizeObserver_;
    private dirObserver_;
    private smartComposeHeightUpdateFrame_;
    private lastObservedInputWrapperWidth_;
    private anchoredSpan_;
    private measurementContext_;
    private cachedPaddingLeft_;
    private cachedPaddingRight_;
    private cachedFont_;
    private cachedContentWidth_;
    private lockedMinHeight_;
    private heightLockGeneration_;
    private isRtl_;
    get inputElement(): HTMLElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private scheduleSmartComposeHeightUpdate_;
    private updateSmartComposeHeight_;
    protected onInputFocus_(): void;
    protected onInputBlur_(): void;
    protected onInputClick_(e: Event): void;
    protected onInputKeydown_(e: KeyboardEvent): void;
    protected onInputKeyup_(e: KeyboardEvent): void;
    protected onInputInput_(e: Event): void;
    protected onInputFocusin_(e: FocusEvent): void;
    protected onInputCopy_(e: ClipboardEvent): void;
    protected onInputCut_(e: ClipboardEvent): void;
    protected onInputPaste_(e: ClipboardEvent): void;
    protected onCancelClick_(e: Event): void;
    protected showSmartComposeInlineHint_(): boolean;
    private setupResizeObservers_;
    private setupDirObserver_;
    updateDirection(): void;
    insertSkillChip(chip: ComposeboxChip): void;
    private focusAndEnsureSelection_;
    private insertHtmlWithChips_;
    private updateMirrorAndCaret_;
    /**
     * Reconstructs the `#mirror` element's DOM spans to mirror each character and
     * chip in `#input` for caret anchor positioning.
     */
    private updateMirror_;
    private updateCaret_;
    resetCaret(): void;
    resetHeight(): void;
    getSelectionEnd(): number;
    selectAll(): void;
}
/**
 * Creates and returns a non-editable HTML span element representing a chip,
 * along with associated data attributes.
 */
export declare function createChipElement(chip: ComposeboxChip): HTMLElement;
declare global {
    interface Document {
        execCommand(commandId: string, showUI?: boolean, value?: string | TrustedHTML): boolean;
    }
    interface SetHtmlOptions {
        sanitizer?: Sanitizer | SanitizerConfig;
    }
    interface Element {
        setHTML(html: string, options?: SetHtmlOptions): void;
    }
    interface HTMLElementTagNameMap {
        'cr-composebox-input': ComposeboxInputElement;
    }
}
export {};
