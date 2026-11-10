import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import './icons.html.js';
import './searchbox_config_icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { InputState } from './composebox_query.mojom-webui.js';
declare const ComposeboxToolChipElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ComposeboxToolChipElement extends ComposeboxToolChipElement_base {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        inputState: {
            type: ObjectConstructor;
        };
        isCanvasQuerySubmitted: {
            type: BooleanConstructor;
        };
    };
    protected accessor inputState: InputState | null;
    accessor isCanvasQuerySubmitted: boolean;
    protected getToolChipLabel_(): string;
    protected getIcon_(): string;
    protected isClankMode_(): boolean;
    protected getModeClasses_(): string;
    protected onClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-tool-chip': ComposeboxToolChipElement;
    }
}
export {};
