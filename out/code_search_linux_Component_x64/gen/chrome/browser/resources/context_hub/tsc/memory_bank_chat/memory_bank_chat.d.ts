import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/icons.html.js';
import '/strings.m.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { MemoryBankChatMessage } from '../context_hub.mojom-webui.js';
/**
 * Represents a lightweight chip for an attached memory displayed above the chat
 * input.
 */
export interface AttachedContextChip {
    id: bigint;
    title: string;
}
/**
 * Represents a single suggestion item in the '@' mention autocomplete dropdown.
 */
export interface MentionSuggestionItem {
    /**
     * Whether this suggestion completes a bare qualifier (attaching nothing), or
     * attaches the entries matching a filter, or attaches a single memory entry.
     */
    kind: 'qualifier-prefix' | 'qualifier-filter' | 'individual-entry';
    /** Text shown in the suggestion row (e.g. '@tag:', 'Page Title'). */
    label: string;
    /**
     * Replaces the active '@' mention when this item is chosen; always starts
     * with '@'. Items that complete the mention end with a space, while a bare
     * qualifier does not, so that its value can be typed straight after.
     */
    mentionText: string;
    /** Help text for a qualifier, shown on 'qualifier-prefix' rows. */
    description?: string;
    /** The chips a selection of this item would attach. */
    chips: AttachedContextChip[];
}
export declare class MemoryBankChatElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        attachedChips_: {
            type: ObjectConstructor;
            state: boolean;
        };
        availableEntries_: {
            type: ArrayConstructor;
            state: boolean;
        };
        chatHistory_: {
            type: ArrayConstructor;
            state: boolean;
        };
        highlightedMentionIndex_: {
            type: NumberConstructor;
            state: boolean;
        };
        inputValue_: {
            type: StringConstructor;
            state: boolean;
        };
        isLoading_: {
            type: BooleanConstructor;
            state: boolean;
        };
        mentionQuery_: {
            type: StringConstructor;
            state: boolean;
        };
        mentionSuggestions_: {
            type: ArrayConstructor;
            state: boolean;
        };
        showMentionMenu_: {
            type: BooleanConstructor;
            state: boolean;
        };
    };
    protected accessor attachedChips_: Map<bigint, AttachedContextChip>;
    protected accessor chatHistory_: MemoryBankChatMessage[];
    protected accessor highlightedMentionIndex_: number;
    protected accessor inputValue_: string;
    protected accessor isLoading_: boolean;
    protected accessor mentionSuggestions_: MentionSuggestionItem[];
    protected accessor showMentionMenu_: boolean;
    private accessor availableEntries_;
    private accessor mentionQuery_;
    private maxChatHistoryTurns_;
    private allTags_;
    private allCollections_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private trimChatHistory_;
    private appendChatTurn_;
    private fetchChatHistory_;
    private fetchAvailableEntries_;
    protected onRemoveAttachedChipClick_(e: Event): void;
    protected onClearAttachedChipsClick_(): void;
    protected getMentionHeader_(): string;
    protected getEntryCountLabel_(count: number): string;
    private computeMentionSuggestions_;
    private getQualifierSuggestions_;
    /**
     * Returns chips for the entries matching `query` that are not attached yet,
     * so that suggestions only ever offer (and count) memories a selection would
     * add. The query is matched as typed, mid-phrase included.
     */
    private findUnattachedChips_;
    /** Builds a row that completes a bare qualifier, e.g. '@tag:'. */
    private createQualifierPrefixItem_;
    /**
     * Builds a row that attaches every unattached entry matching a concrete
     * filter, e.g. '@tag:recipes'. Returns null when nothing matches, so that
     * filters that would attach nothing are not offered.
     */
    private createQualifierFilterItem_;
    /**
     * Suggests individual entries matching `query`, which is either freeform
     * text or a free-text filter. A freeform term matches any field of an entry,
     * while a qualifier such as 'title:' narrows it to that field.
     */
    private getMemoryBankEntrySuggestions_;
    /** Replaces the '@' mention being typed at the end of the input. */
    private replaceActiveMention_;
    private focusChatInput_;
    /** Attaches the given context chips, ignoring duplicates. */
    private attachChips_;
    protected selectMentionSuggestion_(item: MentionSuggestionItem): void;
    /** Returns the suggestion index carried by a mention row's dataset. */
    private getMentionItemIndex_;
    protected onMentionItemMouseenter_(e: MouseEvent): void;
    protected onMentionItemClick_(e: MouseEvent): void;
    private onDocumentPointerDown_;
    protected onInputValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onInputKeydown_(e: KeyboardEvent): void;
    /**
     * Handles navigation keys while the mention menu is open. Returns whether
     * the key was consumed by the menu; if not, it falls through to the input
     * (e.g. Enter with nothing to select still sends the message).
     */
    private handleMentionMenuKeydown_;
    protected onSendMessageClick_(): Promise<void>;
    protected onClearChatHistoryClick_(): Promise<void>;
    private scrollToBottom_;
}
declare global {
    interface HTMLElementTagNameMap {
        'memory-bank-chat': MemoryBankChatElement;
    }
}
