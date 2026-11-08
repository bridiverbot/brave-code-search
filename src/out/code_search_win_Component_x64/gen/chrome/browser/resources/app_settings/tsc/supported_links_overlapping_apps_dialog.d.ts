import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { App } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import type { AppMap } from 'chrome://resources/cr_components/app_management/constants.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SupportedLinksOverlappingAppsDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
declare const SupportedLinksOverlappingAppsDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SupportedLinksOverlappingAppsDialogElement extends SupportedLinksOverlappingAppsDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        app: {
            type: ObjectConstructor;
        };
        apps: {
            type: ObjectConstructor;
        };
        overlappingAppIds: {
            type: ArrayConstructor;
        };
    };
    accessor app: App;
    accessor overlappingAppIds: string[];
    accessor apps: AppMap;
    protected getBodyText_(): string;
    wasConfirmed(): boolean;
    protected onChangeClick_(): void;
    protected onCancelClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-management-supported-links-overlapping-apps-dialog': SupportedLinksOverlappingAppsDialogElement;
    }
}
export {};
