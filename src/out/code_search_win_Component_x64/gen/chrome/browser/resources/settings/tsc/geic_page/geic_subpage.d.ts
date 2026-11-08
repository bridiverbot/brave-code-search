import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import '../settings_page/settings_subpage.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SettingsGeicSubpageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsGeicSubpageElement extends SettingsGeicSubpageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        defaultTabAccessToggleExpanded_: {
            type: BooleanConstructor;
        };
    };
    protected accessor defaultTabAccessToggleExpanded_: boolean;
    protected onDefaultTabAccessExpandClick_(): void;
    protected onDefaultTabAccessToggleExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected getDefaultTabAccessSubLabel_(): string;
    protected onDefaultTabAccessToggleSubLabelLinkClicked_(): void;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-geic-subpage': SettingsGeicSubpageElement;
    }
}
export {};
