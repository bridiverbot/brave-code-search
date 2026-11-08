/**
 * @fileoverview settings-startup-url-entry represents a UI component that
 * displays a URL that is loaded during startup. It includes a menu that allows
 * the user to edit/remove the entry.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../site_favicon.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { StartupPageInfo } from './startup_urls_page_browser_proxy.js';
/**
 * The name of the event fired from this element when the "Edit" option is
 * clicked.
 */
export declare const EDIT_STARTUP_URL_EVENT: string;
declare const SettingsStartupUrlEntryElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsStartupUrlEntryElement extends SettingsStartupUrlEntryElementBase {
    static get is(): string;
    static get shadowRootOptions(): {
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry | null;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        delegatesFocus: boolean;
    };
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        editable: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        model: {
            type: ObjectConstructor;
        };
    };
    accessor editable: boolean;
    accessor model: StartupPageInfo;
    protected getMoreActionsTitle_(): string;
    protected onRemoveClick_(): void;
    protected onEditClick_(e: Event): void;
    protected onDotsClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-startup-url-entry': SettingsStartupUrlEntryElement;
    }
}
export {};
