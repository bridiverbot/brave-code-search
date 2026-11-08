import './toolbar_chip_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import './icons.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { HighlightTracker } from '/shared/toolbar_button.js';
import type { GlicButtonState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { ToolbarChipButtonElement } from './toolbar_chip_button.js';
export interface GlicButtonElement {
    $: {
        button: ToolbarChipButtonElement;
    };
}
declare const GlicButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("./collapsible_label_button.js").CollapsibleLabelButton) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/toolbar_button.js").HelpBubbleAnchor);
export declare class GlicButtonElement extends GlicButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enabled: {
            type: BooleanConstructor;
        };
        state: {
            type: ObjectConstructor;
        };
        label: {
            type: StringConstructor;
        };
    };
    accessor enabled: boolean;
    accessor state: GlicButtonState;
    accessor label: string;
    highlightTracker: HighlightTracker;
    private browserProxy_;
    updated(changedProperties: PropertyValues<this>): void;
    focus(): void;
    shouldBeShown(): boolean;
    protected hasLabel_(): boolean;
    protected getLabel_(): string;
    protected getTooltip_(): string;
    protected getAriaLabel_(): string;
    protected onClick_(e: PointerEvent): void;
    protected onContextmenu_(e: MouseEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'glic-button': GlicButtonElement;
    }
}
export {};
