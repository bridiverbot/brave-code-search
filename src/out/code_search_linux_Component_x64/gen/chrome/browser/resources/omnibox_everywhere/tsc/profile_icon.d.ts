import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface OmniboxEverywhereProfileIconElement {
    $: {
        profileContainer: HTMLButtonElement;
        profileMenu: CrActionMenuElement;
    };
}
declare const OmniboxEverywhereProfileIconElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class OmniboxEverywhereProfileIconElement extends OmniboxEverywhereProfileIconElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isEnterpriseProfile_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        profileAvatarUrl_: {
            type: StringConstructor;
        };
        profileName_: {
            type: StringConstructor;
        };
        profileEmail_: {
            type: StringConstructor;
        };
        profilePickerEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor isEnterpriseProfile_: boolean;
    protected accessor profileAvatarUrl_: string;
    protected accessor profileName_: string;
    protected accessor profileEmail_: string;
    protected accessor profilePickerEnabled_: boolean;
    private searchboxHandler_;
    private callbackRouter_;
    private updateProfileInfoListenerId_;
    private isOpeningMenu_;
    get isMenuOpen(): boolean;
    private onVisibilityChange_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected getProfileTooltip_(): string;
    protected getProfileAriaLabel_(): string;
    protected onProfileIconClick_(): Promise<void>;
    protected onSwitchProfileClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'omnibox-everywhere-profile-icon': OmniboxEverywhereProfileIconElement;
    }
}
export {};
