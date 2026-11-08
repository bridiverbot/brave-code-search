import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
/**
 * Manages focus restoration for modal dialogs. After the final dialog in a
 * stack is closed, restores focus to the element which was focused when the
 * first dialog was opened.
 */
export declare class DialogFocusManager {
    private previousFocusElement_;
    private dialogs_;
    showDialog(dialog: (HTMLDialogElement | CrDialogElement), showFn?: () => void): void;
    /**
     * @return True if the document currently has an open dialog.
     */
    hasOpenDialog(): boolean;
    /**
     * Clears the stored focus element, so that focus does not restore when all
     * dialogs are closed.
     */
    clearFocus(): void;
    private updatePreviousFocus_;
    private getFocusedElement_;
    private getCloseListener_;
    static getInstance(): DialogFocusManager;
    static setInstance(obj: DialogFocusManager | null): void;
}
