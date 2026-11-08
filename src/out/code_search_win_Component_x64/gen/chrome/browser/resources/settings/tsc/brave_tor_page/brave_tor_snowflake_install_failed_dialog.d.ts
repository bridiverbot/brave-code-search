import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../settings_shared.css.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
declare const DialogBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
interface TorSnowflakeInstallFailedDialog {
    $: {
        dialog: CrDialogElement;
    };
}
declare class TorSnowflakeInstallFailedDialog extends DialogBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {};
    cancelClicked_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'tor-snowflake-install-failed-dialog': TorSnowflakeInstallFailedDialog;
    }
}
export {};
