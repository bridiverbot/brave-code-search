import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './circular_progress_ring.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SaveToDriveState } from '../constants.js';
declare const ViewerSaveControlsBase: typeof CrLitElement & (new (...args: any[]) => import("./viewer_save_controls_mixin.js").ViewerSaveControlsMixinInterface);
export interface ViewerSaveToDriveControlsElement {
    $: {
        menu: CrActionMenuElement;
        save: CrIconButtonElement;
    };
}
export declare class ViewerSaveToDriveControlsElement extends ViewerSaveControlsBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        progress: {
            type: NumberConstructor;
        };
        state: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    accessor progress: number;
    accessor state: SaveToDriveState;
    protected getIronIcon(): string;
    protected isUploading_(): boolean;
    getSaveButton(): CrIconButtonElement;
    getSaveEventType(): string;
    getMenu(): CrActionMenuElement;
    shouldShowSaveMenuOnSaveClick(hasEdits: boolean): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-save-to-drive-controls': ViewerSaveToDriveControlsElement;
    }
}
export {};
