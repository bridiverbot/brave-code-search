import './composebox_tab_favicon.js';
import './icons.html.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
declare const ComposeboxLensSearchElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ComposeboxLensSearchElement extends ComposeboxLensSearchElement_base {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isIcon: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        hasVirtualFocus: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor isIcon: boolean;
    accessor hasVirtualFocus: boolean;
    announcesVirtualFocus: boolean;
    updated(changedProperties: PropertyValues<this>): void;
    /** Returns the label screen readers narrate for this element. */
    getA11yLabel(): string;
    /**
     * Returns the icon button, or null outside icon mode. Unlike the host's, its
     * bounds exclude the leading margin, so it suits anchoring a help bubble.
     */
    getIconButtonElement(): HTMLElement | null;
    protected onLensSearchClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-lens-search': ComposeboxLensSearchElement;
    }
}
export {};
