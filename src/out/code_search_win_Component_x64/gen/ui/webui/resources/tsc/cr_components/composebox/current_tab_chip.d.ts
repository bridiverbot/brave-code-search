import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { TabInfo } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
declare const CurrentTabChipBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class CurrentTabChipElement extends CurrentTabChipBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        currentTab: {
            type: ObjectConstructor;
        };
        hasVirtualFocus: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor currentTab: TabInfo | undefined;
    accessor hasVirtualFocus: boolean;
    private composeboxSource_;
    protected getCurrentTabChipTitle_(): string;
    /**
     * Returns the label screen readers narrate for this chip, the same as its
     * button's aria-label.
     */
    getA11yLabel(): string;
    protected onCurrentTabButtonClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'composebox-current-tab-chip': CurrentTabChipElement;
    }
}
export {};
