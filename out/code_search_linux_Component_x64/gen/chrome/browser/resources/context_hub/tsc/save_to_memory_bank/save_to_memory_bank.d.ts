import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_textarea/cr_textarea.js';
import '//resources/cr_elements/icons.html.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class SaveToMemoryBankElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        title: {
            type: StringConstructor;
        };
        url: {
            type: StringConstructor;
        };
        snippet: {
            type: StringConstructor;
        };
        imageUrl: {
            type: StringConstructor;
        };
        note: {
            type: StringConstructor;
        };
        collection: {
            type: StringConstructor;
        };
        collections: {
            type: ArrayConstructor;
        };
        tags: {
            type: ArrayConstructor;
        };
        availableTags: {
            type: ArrayConstructor;
        };
        filteredTags_: {
            type: ArrayConstructor;
        };
        isAddingCollection: {
            type: BooleanConstructor;
        };
        newCollectionInput: {
            type: StringConstructor;
        };
        isCreatingCustomTag: {
            type: BooleanConstructor;
        };
        newTagInput: {
            type: StringConstructor;
        };
        highlightedTagIndex: {
            type: NumberConstructor;
        };
    };
    connectedCallback(): void;
    private fetchInitialData_;
    accessor title: string;
    accessor url: string;
    accessor snippet: string;
    accessor imageUrl: string;
    accessor note: string;
    accessor collection: string;
    accessor collections: string[];
    accessor tags: string[];
    accessor availableTags: string[];
    accessor filteredTags_: string[];
    accessor isAddingCollection: boolean;
    accessor newCollectionInput: string;
    accessor isCreatingCustomTag: boolean;
    accessor newTagInput: string;
    accessor highlightedTagIndex: number;
    willUpdate(changedProperties: PropertyValues<this>): void;
    getDisplayUrl(): string;
    private computeFilteredTags_;
    private selectCollection_;
    private commitNewCollection_;
    protected onNewCollectionBlur(): void;
    private selectTag_;
    private commitNewTag_;
    protected onNewTagBlur(): void;
    protected onTagSuggestionMousedown(e: MouseEvent): void;
    protected onCollectionChange(e: Event): void;
    protected onAddCollectionClick(): Promise<void>;
    protected onNewCollectionValueChanged(e: CustomEvent<{
        value: string;
    }>): void;
    protected onNewCollectionKeydown(e: KeyboardEvent): void;
    protected onAddTagClick(): Promise<void>;
    protected onNewTagValueChanged(e: CustomEvent<{
        value: string;
    }>): void;
    protected onNewTagKeydown(e: KeyboardEvent): Promise<void>;
    protected onRemoveTagClick(e: Event): void;
    protected onNoteValueChanged(e: CustomEvent<{
        value: string;
    }>): void;
    protected onCancelClick(): void;
    protected onSaveClick(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'save-to-memory-bank': SaveToMemoryBankElement;
    }
}
