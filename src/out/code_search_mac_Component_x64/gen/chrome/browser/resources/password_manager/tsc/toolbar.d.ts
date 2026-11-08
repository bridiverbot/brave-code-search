import './shared_style.css.js';
import 'chrome://resources/cr_elements/cr_drawer/cr_drawer.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import type { CrToolbarElement } from 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import type { CrToolbarSearchFieldElement } from 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from './router.js';
export interface PasswordManagerToolbarElement {
    $: {
        mainToolbar: CrToolbarElement;
    };
}
declare const PasswordManagerToolbarElementBase: typeof PolymerElement & (new (...args: any[]) => import("./router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class PasswordManagerToolbarElement extends PasswordManagerToolbarElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        narrow: BooleanConstructor;
        pageName: StringConstructor;
    };
    narrow: boolean;
    pageName: string;
    currentRouteChanged(newRoute: Route, _oldRoute: Route): void;
    ready(): void;
    get searchField(): CrToolbarSearchFieldElement;
    private onSearchChanged_;
    private updateSearchTerm;
    private onHelpClick_;
    private onKeyDown_;
}
declare global {
    interface HTMLElementTagNameMap {
        'password-manager-toolbar': PasswordManagerToolbarElement;
    }
}
export {};
