import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare enum FreChinMode {
    SHORTCUT_SETUP = "shortcut-setup",
    SHORTCUT_REMINDER = "shortcut-reminder"
}
export interface ShowHotkeyDropdownDetail {
    x: number;
    y: number;
    width: number;
    height: number;
}
declare const OmniboxEverywhereFreChinElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class OmniboxEverywhereFreChinElement extends OmniboxEverywhereFreChinElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        mode: {
            type: StringConstructor;
        };
        hotkeyTokens: {
            type: ArrayConstructor;
        };
        dropdownOpen: {
            type: BooleanConstructor;
        };
        smallLoomnibox: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    accessor mode: FreChinMode;
    accessor hotkeyTokens: string[];
    accessor dropdownOpen: boolean;
    accessor smallLoomnibox: boolean;
    protected isSetupMode_(): boolean;
    protected hasHotkeyTokens_(): boolean;
    protected getDropdownAriaLabel_(): string;
    protected getToSearchLabelHtml_(): TrustedHTML;
    protected getChangeShortcutLabelHtml_(): TrustedHTML;
    protected onDropdownClick_(e: MouseEvent): void;
    protected onLabelClick_(e: MouseEvent): void;
    protected onSettingsClick_(e: Event): void;
    protected onCloseClick_(): void;
}
export type FreChinElement = OmniboxEverywhereFreChinElement;
declare global {
    interface HTMLElementTagNameMap {
        'fre-chin': OmniboxEverywhereFreChinElement;
    }
}
export {};
