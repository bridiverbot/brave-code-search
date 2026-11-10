import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_textarea/cr_textarea.js';
import '//resources/cr_elements/icons.html.js';
import '/strings.m.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { ChatMessage, TabGroup as TabGroupMojom, TabInfo } from '../context_hub.mojom-webui.js';
export declare const DEFECT_CATEGORIES: readonly ['All good', 'Few tabs left ungrouped', 'Bad group name', 'Group(s) too broad / coarse', 'Group(s) too fragmented / fine', 'Tabs placed in wrong group', 'Unnecessary grouping', 'Completely wrong'];
export declare const GROUPING_FAILED_MESSAGE = "Couldn't group your tabs. Try again.";
export declare const NOT_ENOUGH_TABS_MESSAGE = "Open at least 2 tabs to get suggestions.";
export declare const CREATE_GROUPS_FAILED_MESSAGE = "Couldn't create groups.";
interface TabGroup {
    label: string;
    tabs: TabInfo[];
}
export declare class TabGroupsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        groups_: {
            type: ArrayConstructor;
        };
        ungroupedTabs_: {
            type: ArrayConstructor;
        };
        confirmedGroupSummaries_: {
            type: ArrayConstructor;
        };
        tabs_: {
            type: ArrayConstructor;
        };
        expandedConfirmedGroups_: {
            type: ObjectConstructor;
        };
        isGrouped_: {
            type: BooleanConstructor;
        };
        isGrouping_: {
            type: BooleanConstructor;
        };
        isRegrouping_: {
            type: BooleanConstructor;
        };
        inputValue_: {
            type: StringConstructor;
        };
        statusMessage_: {
            type: StringConstructor;
        };
        responseText_: {
            type: StringConstructor;
        };
        canUndo_: {
            type: BooleanConstructor;
        };
        editingGroupIndex_: {
            type: NumberConstructor;
        };
        editingLabel_: {
            type: StringConstructor;
        };
        ungroupedExpanded_: {
            type: BooleanConstructor;
        };
        confirmedExpanded_: {
            type: BooleanConstructor;
        };
        canvasFeedbackLiked_: {
            type: BooleanConstructor;
        };
        feedbackDialogOpen_: {
            type: BooleanConstructor;
        };
        feedbackRating_: {
            type: NumberConstructor;
        };
        feedbackDefect_: {
            type: StringConstructor;
        };
        feedbackComments_: {
            type: StringConstructor;
        };
        feedbackLiked_: {
            type: BooleanConstructor;
        };
        raterName_: {
            type: StringConstructor;
        };
        copiedRowSuccess_: {
            type: BooleanConstructor;
        };
    };
    protected accessor groups_: TabGroup[];
    protected accessor ungroupedTabs_: TabInfo[];
    protected chatHistory_: ChatMessage[];
    protected accessor confirmedGroupSummaries_: TabGroupMojom[];
    protected accessor tabs_: TabInfo[];
    protected accessor expandedConfirmedGroups_: Set<string>;
    protected accessor isGrouped_: boolean;
    protected accessor isGrouping_: boolean;
    protected accessor isRegrouping_: boolean;
    protected autoTabGroupsEnabled_: boolean;
    protected maxTabGroupChatHistoryTurns_: number;
    protected accessor inputValue_: string;
    protected accessor statusMessage_: string;
    protected accessor responseText_: string;
    protected accessor canUndo_: boolean;
    protected accessor editingGroupIndex_: number;
    protected accessor editingLabel_: string;
    protected accessor ungroupedExpanded_: boolean;
    protected accessor confirmedExpanded_: boolean;
    protected accessor canvasFeedbackLiked_: boolean | null;
    protected accessor feedbackDialogOpen_: boolean;
    protected accessor feedbackRating_: number | null;
    protected accessor feedbackDefect_: string;
    protected accessor feedbackComments_: string;
    protected accessor feedbackLiked_: boolean;
    protected accessor raterName_: string;
    protected accessor copiedRowSuccess_: boolean;
    protected lastGroupPrompt_: string;
    private undoStack_;
    private trimChatHistory_;
    connectedCallback(): void;
    protected onRaterNameValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    private fetchConfirmedTabGroupSummaries_;
    private fetchExistingTabGroupsAndChats_;
    private resetSuggestions_;
    protected hasPendingPrompt_(): boolean;
    protected isBusy_(): boolean;
    private pushUndoSnapshot_;
    private popUndoSnapshot_;
    private clearUndoStack_;
    private applySuggestions_;
    protected onGroupTabsClick_(): Promise<void>;
    protected onConfirmAllGroupsClick_(): Promise<void>;
    protected onPrimaryActionClick_(): void;
    protected onClearClick_(): Promise<void>;
    protected onUndoClick_(): Promise<void>;
    protected onEditGroupClick_(e: Event): Promise<void>;
    protected onRenameValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onRenameKeydown_(e: KeyboardEvent): void;
    protected onRenameBlur_(): void;
    private commitRename_;
    protected onDismissGroupClick_(e: Event): Promise<void>;
    protected onTabClick_(e: Event): void;
    protected onInputValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onInputKeydown_(e: KeyboardEvent): void;
    protected onUngroupedExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onConfirmedExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected isConfirmedGroupExpanded_(group: TabGroupMojom): boolean;
    protected onGroupExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onUngroupAllConfirmedGroupsClick_(): Promise<void>;
    protected onUngroupConfirmedGroupClick_(e: Event): Promise<void>;
    protected onCloseConfirmedGroupClick_(e: Event): Promise<void>;
    protected getCanvasThumbsUpIcon_(): string;
    protected getCanvasThumbsDownIcon_(): string;
    protected cleanUrl_(urlStr: string): string;
    protected onCanvasThumbsUpClick_(): void;
    protected onCanvasThumbsDownClick_(): void;
    protected canSubmitFeedback_(): boolean;
    protected escapeTsvField_(value: string | number): string;
    protected formatTimestamp_(date?: Date): string;
    protected getRatingBucket_(rating: number): string;
    protected getRatingTierClass_(rating: number): string;
    protected getRatingTierLabel_(rating: number): string;
    protected onRatingChipClick_(e: Event): void;
    protected onDefectChange_(e: Event): void;
    protected onFeedbackCommentsValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected openFeedbackDialog_(liked: boolean): void;
    protected onCloseFeedbackDialogClick_(): void;
    protected onFeedbackDialogClose_(): void;
    protected onCopyForSheetClick_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-groups': TabGroupsElement;
    }
}
export {};
