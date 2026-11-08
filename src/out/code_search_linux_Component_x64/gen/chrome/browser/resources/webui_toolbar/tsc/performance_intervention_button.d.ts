import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { HighlightTracker } from '/shared/toolbar_button.js';
import type { PerformanceInterventionControlState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
declare const PerformanceInterventionButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/toolbar_button.js").HelpBubbleAnchor);
export declare class PerformanceInterventionButtonElement extends PerformanceInterventionButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        state: {
            type: ObjectConstructor;
        };
    };
    accessor state: PerformanceInterventionControlState;
    private browserProxy_;
    highlightTracker: HighlightTracker;
    protected getLabel_(): string;
    protected getTooltip_(): string;
    protected onClick_(e: PointerEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'performance-intervention-button': PerformanceInterventionButtonElement;
    }
}
export {};
