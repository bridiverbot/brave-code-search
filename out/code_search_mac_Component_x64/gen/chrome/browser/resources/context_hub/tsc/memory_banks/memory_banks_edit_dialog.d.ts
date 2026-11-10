import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_textarea/cr_textarea.js';
import '//resources/cr_elements/icons.html.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { MemoryBankEntry } from '../context_hub.mojom-webui.js';
export interface MemoryBanksEditDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
export declare class MemoryBanksEditDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        entry: {
            type: ObjectConstructor;
        };
        availableCollections: {
            type: ArrayConstructor;
        };
        availableTags: {
            type: ArrayConstructor;
        };
        editCollection_: {
            type: StringConstructor;
            state: boolean;
        };
        editNote_: {
            type: StringConstructor;
            state: boolean;
        };
        editTags_: {
            type: ArrayConstructor;
            state: boolean;
        };
        highlightedTagIndex_: {
            type: NumberConstructor;
            state: boolean;
        };
        isAddingCollection_: {
            type: BooleanConstructor;
            state: boolean;
        };
        newCollectionInput_: {
            type: StringConstructor;
            state: boolean;
        };
        isCreatingTag_: {
            type: BooleanConstructor;
            state: boolean;
        };
        newTagInput_: {
            type: StringConstructor;
            state: boolean;
        };
    };
    accessor entry: MemoryBankEntry | null;
    accessor availableCollections: string[];
    accessor availableTags: string[];
    protected accessor editCollection_: string;
    protected accessor isAddingCollection_: boolean;
    protected accessor newCollectionInput_: string;
    protected accessor editTags_: string[];
    protected accessor isCreatingTag_: boolean;
    protected accessor newTagInput_: string;
    protected accessor highlightedTagIndex_: number;
    protected accessor editNote_: string;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onDialogClose_(): void;
    protected onCancelClick_(): void;
    protected onSaveClick_(): Promise<void>;
    protected getEditDialogCollections_(): string[];
    protected onEditCollectionChange_(e: Event): void;
    protected onAddCollectionClick_(): void;
    protected onNewCollectionInputValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onNewCollectionInputKeydown_(e: KeyboardEvent): void;
    protected getFilteredTags_(): string[];
    private selectTag_;
    protected onAddTagClick_(): Promise<void>;
    protected onRemoveTagClick_(e: Event): void;
    protected onTagSuggestionMousedown_(e: MouseEvent): void;
    protected onNewTagInputValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onNewTagInputKeydown_(e: KeyboardEvent): Promise<void>;
    protected onNewTagBlur_(): void;
    protected onEditNoteValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'memory-banks-edit-dialog': MemoryBanksEditDialogElement;
    }
}
