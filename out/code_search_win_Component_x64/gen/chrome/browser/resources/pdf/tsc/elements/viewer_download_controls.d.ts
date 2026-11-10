import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const ViewerDownloadControlsBase: typeof CrLitElement & (new (...args: any[]) => import("./viewer_save_controls_mixin.js").ViewerSaveControlsMixinInterface);
export interface ViewerDownloadControlsElement {
    $: {
        save: CrIconButtonElement;
        menu: CrActionMenuElement;
    };
}
export declare class ViewerDownloadControlsElement extends ViewerDownloadControlsBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    getSaveButton(): CrIconButtonElement;
    getSaveEventType(): string;
    getMenu(): CrActionMenuElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-download-controls': ViewerDownloadControlsElement;
    }
}
export {};
