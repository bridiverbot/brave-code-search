import './app_management_shared_style.css.js';
import './toggle_row.js';
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { App } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const FileHandlingItemBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class FileHandlingItemElement extends FileHandlingItemBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        app: {
            type: ObjectConstructor;
        };
        showOverflowDialog: {
            type: BooleanConstructor;
        };
        hidden: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor app: App;
    accessor showOverflowDialog: boolean;
    accessor hidden: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    private isHidden_;
    protected isManaged_(): boolean;
    protected userVisibleTypes_(): string;
    protected userVisibleTypesLabel_(): string;
    protected getLearnMoreLinkUrl_(): string;
    protected onLearnMoreLinkClicked_(e: CustomEvent<{
        event: Event;
    }>): void;
    protected onTypeListLinkClicked_(e: CustomEvent<{
        event: Event;
    }>): void;
    protected onCloseButtonClick_(): void;
    protected onDialogClose_(): void;
    protected getValue_(): boolean;
    private onChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-management-file-handling-item': FileHandlingItemElement;
    }
}
export {};
