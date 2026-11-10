/**
 * @fileoverview 'settings-other-google-data-dialog' is a subpage
 * shown within the Clear Browsing Data dialog to provide links
 * for managing other Google data like passwords and activity.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrLinkRowElement } from 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsOtherGoogleDataDialogElement {
    $: {
        dialog: CrDialogElement;
        passwordManagerLink: CrLinkRowElement;
    };
}
declare const SettingsOtherGoogleDataDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsOtherGoogleDataDialogElement extends SettingsOtherGoogleDataDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isGoogleDse_: {
            type: BooleanConstructor;
        };
        nonGoogleSearchHistorySubLabel_: {
            type: StringConstructor;
        };
        syncStatus_: {
            type: ObjectConstructor;
        };
    };
    protected accessor isGoogleDse_: boolean;
    protected accessor nonGoogleSearchHistorySubLabel_: TrustedHTML;
    private accessor syncStatus_;
    private clearBrowsingDataBrowserProxy_;
    private syncBrowserProxy_;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    private updateDseStatus_;
    private handleSyncStatus_;
    protected computeDialogTitle_(): string;
    protected onBackOrCancelClick_(): void;
    protected onPasswordManagerClick_(): void;
    protected onMyActivityLinkClick_(): void;
    protected onGoogleSearchHistoryLinkClick_(): void;
    protected onGeminiAppsActivityClick_(): void;
    protected shouldShowMyActivityLink_(): boolean;
    protected shouldShowGoogleSearchHistoryLink_(): boolean;
    protected shouldShowGeminiAppsActivityLink_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-other-google-data-dialog': SettingsOtherGoogleDataDialogElement;
    }
}
export {};
