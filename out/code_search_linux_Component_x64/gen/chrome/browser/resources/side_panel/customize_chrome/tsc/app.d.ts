import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CSSResultGroup } from '//resources/lit/v3_0/lit.rollup.js';
export * from './app-chromium.js';
declare class ClosePanelButtonElement extends CrLitElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private onClosePanel;
}
declare global {
    interface HTMLElementTagNameMap {
        'close-panel-button': ClosePanelButtonElement;
    }
}
declare const DarkerThemeToggleElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
declare class DarkerThemeToggleElement extends DarkerThemeToggleElement_base {
    static get is(): string;
    static get styles(): CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        usingDarkerTheme_: {
            type: BooleanConstructor;
        };
    };
    private setColorSchemeModeListenerId_;
    private accessor usingDarkerTheme_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onDarkerThemeToggleChange;
}
declare global {
    interface HTMLElementTagNameMap {
        'brave-darker-theme-toggle': DarkerThemeToggleElement;
    }
}
