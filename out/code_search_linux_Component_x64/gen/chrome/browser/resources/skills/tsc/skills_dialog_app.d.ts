import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import 'chrome://resources/cr_elements/cr_loading_gradient/cr_loading_gradient.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './error_page.js';
import './icons.html.js';
import './skills_emoji_picker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Skill } from './skill.mojom-webui.js';
export declare const MAX_NAME_CHAR_COUNT: number;
export declare const MAX_PROMPT_CHAR_COUNT: number;
export declare const BOTTOM_SCROLL_OFFSET_PX = 5;
export declare const REFINE_SKILL_TIMEOUT_MS = 5000;
export declare const AUTOCOMPLETE_MIN_CHARS = 20;
export declare enum PromptError {
    NONE = 0,
    REFINE = 1,
    CHAR_LIMIT = 2
}
export interface WindowProxy {
    setTimeout(handler: TimerHandler, timeout?: number): number;
}
export declare class WindowProxyImpl implements WindowProxy {
    setTimeout(handler: TimerHandler, timeout?: number): number;
    static getInstance(): WindowProxy;
    static setInstance(obj: WindowProxy): void;
}
export declare class SkillsDialogAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        skill_: {
            type: ObjectConstructor;
        };
        dialogTitle_: {
            type: StringConstructor;
        };
        canUndoRefine_: {
            type: BooleanConstructor;
        };
        canRedoRefine_: {
            type: BooleanConstructor;
        };
        shouldShowErrorPage_: {
            type: BooleanConstructor;
        };
        signedInEmail_: {
            type: StringConstructor;
        };
        promptError_: {
            type: NumberConstructor;
        };
        isRefineLoading_: {
            type: BooleanConstructor;
        };
        isAutoGenerationLoading_: {
            type: BooleanConstructor;
        };
        hasSaveError_: {
            type: BooleanConstructor;
        };
        hasNameCharLimitError_: {
            type: BooleanConstructor;
        };
        isAddDialog_: {
            type: BooleanConstructor;
        };
        showEmojiPicker_: {
            type: BooleanConstructor;
        };
        generatedName_: {
            type: StringConstructor;
        };
        generatedIcon_: {
            type: StringConstructor;
        };
        isNameInputFocused_: {
            type: BooleanConstructor;
        };
        hasSeenGeneratedSuggestion_: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    /** The object will be manipulated by submitSkill(). */
    protected accessor skill_: Skill;
    protected accessor dialogTitle_: string;
    protected accessor hasSaveError_: boolean;
    protected accessor hasNameCharLimitError_: boolean;
    protected accessor showEmojiPicker_: boolean;
    protected accessor canUndoRefine_: boolean;
    protected accessor canRedoRefine_: boolean;
    protected accessor shouldShowErrorPage_: boolean;
    protected accessor signedInEmail_: string;
    protected accessor promptError_: PromptError;
    protected accessor isRefineLoading_: boolean;
    protected accessor isAutoGenerationLoading_: boolean;
    protected accessor isAddDialog_: boolean;
    protected accessor generatedName_: string;
    protected accessor generatedIcon_: string;
    protected accessor isNameInputFocused_: boolean;
    protected accessor hasSeenGeneratedSuggestion_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private originalPrompt_;
    private refinedPrompt_;
    private undoCount_;
    private redoCount_;
    private hasUserRefined_;
    private textareaResizeObserver_;
    private dialogResizeObserver_;
    private get trimmedName_();
    private get trimmedPrompt_();
    protected isSaveButtonDisabled(): boolean;
    protected isRefinementEnabled_(): boolean;
    protected hasPromptError_(): boolean;
    /** Initializes dialog. */
    connectedCallback(): void;
    private disconnectTextareaResizeObserver_;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues): void;
    private attachTextareaResizeObserver_;
    private checkTextareaOverflow_;
    private get instructionsTextarea_();
    protected onEmojiBtnClick_(): void;
    protected onEmojiSelected_(event: CustomEvent<{
        emoji: string;
    }>): void;
    protected onEmojiPickerClose_(): void;
    protected onEmojiKeydown_(event: KeyboardEvent): void;
    protected onKeydown_(event: KeyboardEvent): void;
    protected onEmojiInput_(event: Event): void;
    protected isRefineDisabled_(): boolean;
    protected isUndoDisabled_(): boolean;
    protected isRedoDisabled_(): boolean;
    protected onNameValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onInstructionsInput_(e: Event): void;
    protected onUndoClick_(): void;
    protected onRedoClick_(): void;
    protected onRefineClick_(): Promise<void> | undefined;
    /** Submits skill and closes the dialog. */
    protected onSubmitSkillClick_(): void;
    protected onCancelClick_(e: Event): void;
    protected onClose_(e: Event): void;
    /** Deletes skill and closes the dialog. */
    protected onDeleteSkillClick_(): void;
    /** Click listener for the cancel button and closing dialog. */
    private cancel_;
    protected onNameFocus_(): void;
    protected onNameBlur_(): void;
    protected onNameKeydown_(e: KeyboardEvent): void;
    private generateAutocompleteNameAndIcon_;
    protected autoPopulateNameAndIcon_(): Promise<void> | undefined;
    private requestRefinedSkillWithTimeout_;
    private requestGenerateNameAndEmojiWithTimeout_;
    protected shouldShowGeneratedPlaceholder_(): boolean;
    protected getNamePlaceholder_(): string;
    protected shouldHideEmojiZeroState_(): boolean;
    protected getEmojiTriggerClass_(): string;
    protected getEmojiTriggerValue_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'skills-dialog-app': SkillsDialogAppElement;
    }
}
