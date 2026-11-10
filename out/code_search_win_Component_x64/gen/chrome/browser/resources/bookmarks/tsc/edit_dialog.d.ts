import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import '/strings.m.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { BookmarkNode } from './types.js';
export interface BookmarksEditDialogElement {
    $: {
        dialog: CrDialogElement;
        saveButton: HTMLElement;
        url: CrInputElement;
        name: CrInputElement;
    };
}
export declare class BookmarksEditDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isFolder_: {
            type: BooleanConstructor;
        };
        isEdit_: {
            type: BooleanConstructor;
        };
        /**
         * Item that is being edited, or null when adding.
         */
        editItem_: {
            type: ObjectConstructor;
        };
        /**
         * Parent node for the item being added, or null when editing.
         */
        parentId_: {
            type: StringConstructor;
        };
        titleValue_: {
            type: StringConstructor;
        };
        urlValue_: {
            type: StringConstructor;
        };
    };
    protected accessor isFolder_: boolean;
    private accessor isEdit_;
    private accessor editItem_;
    private accessor parentId_;
    protected accessor titleValue_: string;
    protected accessor urlValue_: string;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    private onPaste_;
    /**
     * Show the dialog to add a new folder (if |isFolder|) or item, which will be
     * inserted into the tree as a child of |parentId|.
     */
    showAddDialog(isFolder: boolean, parentId: string): void;
    /** Show the edit dialog for |editItem|. */
    showEditDialog(editItem: BookmarkNode): void;
    /**
     * Clear out existing values from the dialog, allowing it to be reused.
     */
    private reset_;
    protected getDialogTitle_(): string;
    protected onTitleValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onUrlValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    /**
     * Validates the value of the URL field, returning true if it is a valid URL.
     * May modify the value by prepending 'http://' in order to make it valid.
     * Note: Made public only for the purposes of testing.
     */
    validateUrl(): boolean;
    protected onSaveButtonClick_(): void;
    protected onCancelButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'bookmarks-edit-dialog': BookmarksEditDialogElement;
    }
}
