import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const ViewerSaveControlsMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<ViewerSaveControlsMixinInterface>;
export interface ViewerSaveControlsMixinInterface {
    hasEdits: boolean;
    hasInk2Edits: boolean;
    isFormFieldFocused: boolean;
    getAriaHasPopup(): string;
    getMenu(): CrActionMenuElement;
    getSaveButton(): CrIconButtonElement;
    getSaveEventType(): string;
    onSaveClick(): void;
    onSaveEditedClick(): void;
    onSaveOriginalClick(): void;
    shouldShowSaveMenuOnSaveClick(hasEdits: boolean): boolean;
}
export {};
